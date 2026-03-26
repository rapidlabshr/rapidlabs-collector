// 🔥 Firebase Setup
const firebaseConfig = {
  apiKey: "AIzaSyAbS_WXbOEuIQYJe5ZsLLTwj38XRaMWVMY",
  authDomain: "collector-app-b5469.firebaseapp.com",
  projectId: "collector-app-b5469",
  storageBucket: "collector-app-b5469.firebasestorage.app",
  messagingSenderId: "219228786482",
  appId: "1:219228786482:web:1fdaaac26440cf4c39d12b",
  measurementId: "G-9TKXEJB9NC"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();





const FLOW = {
  ASSIGNED: "ON_THE_WAY",
  ON_THE_WAY: "ARRIVED",
  ARRIVED: "IN_PROGRESS",
  IN_PROGRESS: "SAMPLE_COLLECTED",
  SAMPLE_COLLECTED: "PAYMENT_DONE",
  PAYMENT_DONE: "IN_TRANSIT_TO_LAB",
  IN_TRANSIT_TO_LAB: "HANDED_OVER",
  HANDED_OVER: "COMPLETED"
};

function getTaskKey(taskId) {
  return `task_${taskId}`;
}

function saveTaskState() {
  if (!selectedTask) return;

  const data = {
    state: workflowState,
    distance: distance,
    testList: testList,
    payable: finalPayable,
    incentive: selectedTask.incentive ?? 0
  };

  localStorage.setItem(getTaskKey(selectedTask.id), JSON.stringify(data));
}

function loadTaskState(taskId) {
  const saved = localStorage.getItem(getTaskKey(taskId));

  if (!saved) return null;

  return JSON.parse(saved);
}


let collectorId = null;
let selectedTask = null;
let tasks = [];
let canReach = false;


// ================= LOGIN =================
async function login() {
  const id = document.getElementById("workerId").value;
  const pass = document.getElementById("password").value;

  const res = await fetch("http://127.0.0.1:5000/api/collector-login", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id, password: pass })
  });

    if (res.ok) {
        const data = await res.json();
        collectorId = data.collector_id;

        initNotifications();
    localStorage.setItem("collectorId", data.collector_id);

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").style.display = "block";

    loadTasks();
  } else {
    alert("Invalid Login");
  }
}

// ================= LOAD TASKS =================
async function loadTasks() {
  const res = await fetch(`http://127.0.0.1:5000/api/collector-tasks/${collectorId}`);
  const data = await res.json();

  // ✅ FIX FIRST
  tasks = data.map(t => ({
    ...t,
    incentive: t.incentive ?? 0
  }));

  let html = "";

  // ✅ USE tasks (not data)
  tasks.forEach(t => {
    html += `
      <div class="card">
      <b>${t.patient_name}</b>
      <div>Booking ID: ${getBookingId(t.id)}</div>
      <div>${t.test}</div>
        <div>${t.date} ${t.time}</div>

        <button type="button" class="btn-simple" onclick="openTaskDetailsById(${t.id})">
        See Details
        </button>
      </div>
    `;
  });

  document.getElementById("taskList").innerHTML = html;
}

// ================= NAVIGATION =================
function showTaskList() {

  document.getElementById("drawer").classList.remove("open");
  document.getElementById("menuOverlay").classList.remove("show");

  // ✅ SHOW content again
  document.querySelector(".content").style.display = "block";

  // Hide others
  document.getElementById("earningsView").style.display = "none";
  document.getElementById("supportView").style.display = "none";
  document.getElementById("profileView").style.display = "none";

  // Show task list
  document.getElementById("taskListView").style.display = "block";
  document.getElementById("taskDetailView").style.display = "none";
  document.getElementById("workflowView").style.display = "none";
}

// ================= TASK DETAILS =================
function openTaskDetails(task) {
  selectedTask = task;

  document.getElementById("taskListView").style.display = "none";
  document.getElementById("taskDetailView").style.display = "block";

  document.getElementById("taskDetailContent").innerHTML = `
    <div class="card">
      <h3 class="card-title">${task.patient_name}</h3>

      <div class="card-row">
          <span class="label">Booking ID:</span>
          <span class="value">${getBookingId(task.id)}</span>
      </div>

      <div class="card-row">
          <span class="label">Mobile:</span>
          <span class="value">${task.mobile}</span>
      </div>

    <div class="card-row">
        <span class="label">Test:</span>
        <span class="value">${task.test}</span>
    </div>

    <div class="card-row">
        <span class="label">Location:</span>
        <span class="value">${task.location}</span>
    </div>

    <div class="card-row">
        <span class="label">Amount:</span>
        <span class="value">₹${task.amount || 0}</span>
    </div>
    </div>
  `;

  loadTracking(task.id);
}

// ================= START WORKFLOW =================
async function startWorkflow() {
  document.getElementById("taskDetailView").style.display = "none";
  document.getElementById("workflowView").style.display = "block";

  // ✅ Check address first
  if (!selectedTask.location) {
    alert("Task location is missing");
    return;
  }

  console.log("ADDRESS:", selectedTask.location);

  // ✅ Convert address → lat/lng
  const coords = await geocodeAddress(selectedTask.location);

  if (!coords) {
    alert("Failed to get location from address");
    return;
  }

  // ✅ Set destination
  selectedTask.lat = coords.lat;
  selectedTask.lng = coords.lng;

  console.log("DESTINATION:", selectedTask.lat, selectedTask.lng);

  // ✅ Load saved state
  const saved = loadTaskState(selectedTask.id);

  if (saved) {
    workflowState = saved.state;
    distance = saved.distance || 0;
    testList = saved.testList || [];
    finalPayable = saved.payable || 0;

    // ✅ LOAD INCENTIVE ALSO
    if (selectedTask.incentive == null || selectedTask.incentive === 0) {
    selectedTask.incentive = saved?.incentive ?? selectedTask.incentive ?? 0;
  }
  } else {
    workflowState = "ASSIGNED";
    distance = 0;
    testList = [];
  }

  // ✅ Render UI
  renderWorkflow(workflowState);
}

function updateState(newState) {
  if (!newState) {
    newState = FLOW[workflowState];  // ✅ ensure valid next state
  }

  console.log("STATE →", newState);

  workflowState = newState;

  saveTaskState();
  renderWorkflow(workflowState);

  sendStatusToBackend(workflowState);
}

async function loadTracking(taskId) {
  const res = await fetch(`http://127.0.0.1:5000/api/get-tracking/${taskId}`);
  const data = await res.json();

  console.log("TRACKING DATA:", data);
}


// ================= WORKFLOW ENGINE =================

let finalPayable = 0;
let workflowState = "ASSIGNED";
let distance = 500;
let testList = [];

let testMaster = {}; // 🔥 ADD THIS

  // ================= STEP 4 =================

  function openPaymentAndLock() {
  openPayment();   // open popup
  updateState();   // IN_PROGRESS → SAMPLE_COLLECTED
}



function getStepIndex(state) {
  const steps = [
    "ASSIGNED",
    "ARRIVED",
    "IN_PROGRESS",
    "SAMPLE_COLLECTED",
    "IN_TRANSIT_TO_LAB",
    "COMPLETED"
  ];

  if (state === "ON_THE_WAY") return 0;
  if (state === "PAYMENT_DONE") return 3;

  // 🔥 FIX THIS
  if (state === "HANDED_OVER") return 5;

  return steps.indexOf(state);
}

function renderProgressBar(state) {

  const steps = ["Travel", "Arrived", "Test", "Payment", "Lab", "Done"];
  const currentStep = getStepIndex(state);

  let html = `<div class="progress-bar">`;

  steps.forEach((step, index) => {

    let statusClass = "";

    if (index < currentStep) {
      statusClass = "done";
    } else if (index === currentStep) {
      statusClass = "active";
    }

    html += `
      <div class="step ${statusClass}">
        <div class="circle">${index + 1}</div>
        <div class="label">${step}</div>
      </div>
    `;
  });

  html += `</div>`;

  return html;
}



function renderWorkflow(state) {

  workflowState = state;

  let html = renderProgressBar(state);

  html += `
    <div class="card">
      <h3>${selectedTask.patient_name}</h3>
      <div class="task-info">🆔 ${getBookingId(selectedTask.id)}</div>
      <div class="task-info">📍 ${selectedTask.location}</div>
      <div class="task-info">📞 ${selectedTask.mobile}</div>
    </div>
  `;

  // ================= STEP 1 =================
  html += renderStepCard({
    title: "🚗 Travel",
    state: "ASSIGNED",
    current: state,
    content: `
      <p>Status: ${workflowState === "ON_THE_WAY" ? "On the way..." : "Not started"}</p>
      <p>Distance: ${distance} m</p>
      <button type="button" class="action start" onclick="startJourney()"
        ${workflowState !== "ASSIGNED" ? "disabled" : ""}>
        Start Journey
      </button>
      <button type="button" class="action" onclick="openMap('${selectedTask.location}')">Map</button>
      <button type="button" class="action" onclick="callCustomer()">Call</button>

        <button 
          type="button" 
          class="action complete" 
          onclick="markReached()"
        >
          Reached
        </button>
    `
  });

  // ================= STEP 2 =================
  html += renderStepCard({
    title: "📍 Arrived",
    state: "ARRIVED",
    current: state,
    content: `
      <button type="button" class="action start" onclick="startTest()">Start Collection</button>
    `
  });

  // ================= STEP 3 =================
let testHTML = "";
testList.forEach((t, index) => {
  testHTML += `
    <div class="task-info" style="display:flex; justify-content:space-between; align-items:center;">
      <span>• ${t}</span>
      <span style="color:red; cursor:pointer; font-weight:bold;" onclick="deleteTest(${index})">❌</span>
    </div>
  `;
});

  html += renderStepCard({
    title: "🧪 Tests",
    state: "IN_PROGRESS",
    current: state,
    content: `
      ${testHTML}
      <button type="button" class="action" onclick="viewTestDetails()">👁 View Details</button>
      <button type="button" class="action" onclick="addTest()">➕ Add Test</button>
      <button type="button" class="action start" onclick="openPaymentAndLock()">Sample Collected</button>
    `
  });

  // ================= STEP 4 =================
html += renderStepCard({
  title: "💰 Payment",
  state: "SAMPLE_COLLECTED",
  current: state,
  content: `
    <p>
      ${finalPayable > 0 
        ? `💰 Payable Amount: ₹${finalPayable}` 
        : "Amount will be calculated from selected tests"}
    </p>
  `
});



  // ================= STEP 5 =================
html += renderStepCard({
  title: "🏥 Lab",
  state: "IN_TRANSIT_TO_LAB",
  current: state,
  content: `
    <p>What do you want to do next?</p>
      <button class="action-btn" onclick="submitNow()">Submit Now</button>
      <button class="action-btn" onclick="submitLater()">Submit Later</button>
  `
});





// ================= STEP 6 =================
html += renderStepCard({
  title: "✅ Complete",
  state: "COMPLETED",   // ✅ REQUIRED
  current: state,
  content: `
    <button type="button" class="action complete" onclick="completeTask()">
      Finish Task
    </button>
  `
});

// ✅ ADD HERE (outside steps)
html += `
  <div class="card">
    <button class="action" onclick="openReschedule()">🔁 Reschedule</button>
    <button class="action" style="background:red;color:white;" onclick="openCancel()">❌ Cancel Task</button>
  </div>
`;

document.getElementById("workflowContent").innerHTML = html;
}


function renderStepCard({ title, state, current, content }) {

  const isUnlocked = isStepAccessible(current, state);
  const isActive = current === state;

  let className = "card step-card";

  if (!isUnlocked) className += " locked";
  if (isActive) className += " active";

  return `
    <div class="${className}">
      <h4>${!isUnlocked ? "🔒 " : ""}${title}</h4>

      ${isUnlocked ? content : "<p>Complete previous step</p>"}
    </div>
  `;
}



function openMap(location) {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location)}`;
  window.open(url, "_blank");

}

// locations 

async function geocodeAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data && data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon)
    };
  } else {
    alert("Location not found");
    return null;
  }
}


// ================= ACTIONS =================
let watchId;

function startJourney() {

  canReach = true;


  // ✅ Check destination FIRST (MUST be inside function)
  if (!selectedTask || !selectedTask.lat || !selectedTask.lng) {
    alert("Location not ready yet");
    return;
  }

  if (!navigator.geolocation) {
    alert("GPS not supported");
    return;
  }

  // ✅ Start tracking
  watchId = navigator.geolocation.watchPosition(
    (pos) => {

      const userLat = pos.coords.latitude;
      const userLng = pos.coords.longitude;

      distance = getDistance(
        userLat,
        userLng,
        selectedTask.lat,
        selectedTask.lng
      );

      console.log("USER:", userLat, userLng);
      console.log("DEST:", selectedTask.lat, selectedTask.lng);
      console.log("Distance:", distance);

      saveTaskState();
      renderWorkflow(workflowState);

      // ✅ Auto arrive
        if (distance <= 100) {
          canReach = true;
          renderWorkflow(workflowState); // 🔥 force UI update
        }
    },
    (err) => {
      alert("Location error");
      console.error(err);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 10000
    }
  );

  // ✅ Change state AFTER starting GPS
  updateState(); // ASSIGNED → ON_THE_WAY
}

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000;

  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.floor(R * c);
}



function callCustomer() {
  window.open(`tel:${selectedTask.mobile}`);
}

function markReached() {

  if (distance > 100) {
    alert("You are too far from location");
    return;
  }

  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
  }

  updateState("ARRIVED");
}

function startTest() {

  // 🔥 Split multiple tests into array
  testList = selectedTask.test
    .split(",")               // split by comma
    .map(t => t.trim());     // remove spaces

  console.log("TEST LIST:", testList);

  updateState(); 
}
function addTest() {
  document.getElementById("testPopup").style.display = "block";
}
function closePopup() {
  document.getElementById("testPopup").style.display = "none";
}

function saveTest() {
  const input = document.getElementById("testInput").value;

  if (input) {
    testList.push(input);
  }

  document.getElementById("testInput").value = "";
  closePopup();

  saveTaskState();
  renderWorkflow(workflowState);
}

function searchTests() {
  const input = document.getElementById("testInput").value.toLowerCase();
  const box = document.getElementById("suggestionsBox");

  box.innerHTML = "";

  if (input.length < 2) return;

  const matches = Object.keys(testMaster).filter(test =>
    test.toLowerCase().includes(input)
  );

  matches.forEach(test => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.innerText = test;

    div.onclick = () => {
      document.getElementById("testInput").value = test;
      box.innerHTML = "";
    };

    box.appendChild(div);
  });
}






async function loadTestMaster() {
  const res = await fetch("http://127.0.0.1:5000/static/testMaster.json");
  testMaster = await res.json();

  console.log("Loaded JSON:", testMaster);
}

function viewTestDetails() {
  let html = "";

  testList.forEach(inputName => {

    const key = Object.keys(testMaster).find(k =>
      k.toLowerCase().includes(inputName.toLowerCase()) ||
      inputName.toLowerCase().includes(k.toLowerCase())
    );

    if (!key) {
      html += `<div class="test-card error">❌ No data for ${inputName}</div>`;
      return;
    }

    const data = testMaster[key];

    const params = data.parameters || [];
    const equipment = data.equipment || [];

    const shortParams = params.slice(0, 2);
    const remainingParams = params.slice(2);

    html += `
      <div class="test-card">

        <p><b>Test Name:</b> ${key}</p>

        <p><b>Price:</b> ₹${data.price}</p>

        <p><b>Parameters:</b></p>
        <ul>
          ${shortParams.map(p => `<li>${p}</li>`).join("")}
        </ul>

        ${
          remainingParams.length > 0
            ? `<button class="know-more-btn" onclick="toggleParams('${key}')">Know more</button>`
            : ""
        }

        <ul id="more-${key}" style="display:none;">
          ${remainingParams.map(p => `<li>${p}</li>`).join("")}
        </ul>

        <p><b>Equipment:</b></p>
        <ul>
          ${equipment.map(e => `<li>${e}</li>`).join("")}
        </ul>

      </div>
    `;
  });

  document.getElementById("testDetailsBody").innerHTML = html;
  document.getElementById("testDetailsModal").style.display = "flex";
}

function toggleParams(key) {
  const el = document.getElementById(`more-${key}`);

  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}



function deleteTest(index) {
  testList.splice(index, 1); // remove test

  saveTaskState(); // save updated list
  renderWorkflow(workflowState); // refresh UI
}

function closeTestModal() {
  document.getElementById("testDetailsModal").style.display = "none";
}


// function collectSample() {
//   updateState(); // IN_PROGRESS → SAMPLE_COLLECTED
// }



function payment() {
  updateState(); // SAMPLE_COLLECTED → PAYMENT_DONE
}

function goToLab() {
  updateState(); // PAYMENT_DONE → IN_TRANSIT_TO_LAB
}

function handover() {
  updateState(); // IN_TRANSIT_TO_LAB → HANDED_OVER
}


async function completeTask() {

  await fetch("http://127.0.0.1:5000/api/update-task-status", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      task_id: selectedTask.id,
      status: "completed"
    })
  });

  // ✅ FORCE FINAL SAVE
  const data = {
    state: "COMPLETED",
    distance: distance,
    testList: testList,
    payable: finalPayable,
    incentive: selectedTask.incentive ?? 0  // ✅ ADD THIS
  };

  localStorage.setItem(getTaskKey(selectedTask.id), JSON.stringify(data));

  updateState("COMPLETED");

  loadTasks();
}



// ================= MENU =================
function toggleMenu() {
  document.getElementById("drawer").classList.toggle("open");
  document.getElementById("menuOverlay").classList.toggle("show");
}

// ================= AUTO LOGIN =================
window.onload = function () {

  // 🔔 Ask notification permission
    if ("Notification" in window) {
      Notification.requestPermission().then(permission => {
        console.log("Notification permission:", permission);
      });
    }



  loadTestMaster(); // 🔥 ADD THIS LINE

  const savedId = localStorage.getItem("collectorId");

  if (savedId) {
    collectorId = savedId;

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").style.display = "block";

    loadTasks();
  }
};

function isStepAccessible(currentState, step) {

  const order = [
    "ASSIGNED",
    "ON_THE_WAY",
    "ARRIVED",
    "IN_PROGRESS",
    "SAMPLE_COLLECTED",
    "PAYMENT_DONE",
    "IN_TRANSIT_TO_LAB",
    "HANDED_OVER",
    "COMPLETED"
  ];

  return order.indexOf(step) <= order.indexOf(currentState);
}





let totalAmount = 0;

function openPayment() {

  let html = "";
  totalAmount = 0;

  testList.forEach(testName => {

    const key = Object.keys(testMaster).find(k =>
      k.toLowerCase().includes(testName.toLowerCase()) ||
      testName.toLowerCase().includes(k.toLowerCase())
    );

    if (!key) return;

    const price = testMaster[key].price || 0;

    totalAmount += price;

    html += `
      <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
        <span>${key}</span>
        <span>₹${price}</span>
      </div>
    `;
  });

  document.getElementById("paymentDetails").innerHTML = html;
  document.getElementById("totalAmount").innerText = totalAmount;

  calculateFinal();

  document.getElementById("paymentModal").style.display = "flex";
}


function calculateFinal() {
  let discount = parseInt(document.getElementById("discountInput").value) || 0;

  if (discount > 60) {
    discount = 60;
    document.getElementById("discountInput").value = 60;
  }

  const final = totalAmount - (totalAmount * discount / 100);

  finalPayable = Math.round(final);

  document.getElementById("finalAmount").innerText = finalPayable;

  saveTaskState(); // ✅ MOVE HERE
}



function payCash() {
  alert("✅ Payment Done (Cash)");
  closePayment();

  updateState("PAYMENT_DONE"); // ✅ correct
}



function payUPI() {
  document.getElementById("upiSection").style.display = "block";

  // simulate payment success after 3 sec (or add button later)
  setTimeout(() => {
    alert("✅ Payment Done (UPI)");
    closePayment();

    // ✅ Move to LAB step
    updateState("IN_TRANSIT_TO_LAB");
  }, 3000);
}

function closePayment() {
  document.getElementById("paymentModal").style.display = "none";
}


function doAnotherTask() {
  alert("📋 Continue collecting other tasks");

  // Save current task state
  saveTaskState();

  // Go back to task list
  showTaskList();
}


async function sendStatusToBackend(status) {
  try {

    // ✅ EXISTING API (KEEP THIS)
    await fetch("http://127.0.0.1:5000/api/update-task-status", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task_id: selectedTask?.id,
        status: status,
        patient_name: selectedTask?.patient_name,
        mobile: selectedTask?.mobile,
        location: selectedTask?.location,
        tests: testList,
        amount: finalPayable
      })
    });

    // ✅ ADD THIS (TRACKING SAVE)
    await fetch("http://127.0.0.1:5000/api/update-task-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        task_id: selectedTask?.id,
        status: status,
        patient_name: selectedTask?.patient_name,
        mobile: selectedTask?.mobile,
        location: selectedTask?.location,
        tests: testList.join(","),

        // 🔥 ADD THIS LOGIC
        addon_tests: getAddonTests(),

        amount: finalPayable
      })
    });

  } catch (err) {
    console.error("Backend error:", err);
  }
}


function showEarnings() {

  // Close drawer
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("menuOverlay").classList.remove("show");

  // ❗ HIDE CONTENT BLOCK COMPLETELY
  document.querySelector(".content").style.display = "none";

  // Hide other standalone views
  document.getElementById("supportView").style.display = "none";
  document.getElementById("profileView").style.display = "none";

  // ✅ Show earnings
  document.getElementById("earningsView").style.display = "block";

  window.scrollTo(0, 0);
}
function calculateEarnings() {
  let total = 0;
  let tbody = document.getElementById("earningsTableBody");
  let noDataMsg = document.getElementById("noEarningsMsg");

  tbody.innerHTML = "";
  let hasData = false;

  console.log("LOCAL STORAGE:", localStorage);


  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);

    if (key.startsWith("task_")) {
      let taskId = key.replace("task_", "");
      let data = JSON.parse(localStorage.getItem(key));

      if (data && data.state === "COMPLETED") {

        // ✅ Get task details from backend-loaded tasks[]
        const task = tasks.find(t => String(t.id) === String(taskId)) || {};

        // ✅ Name
        const name = task?.patient_name || "-";

        // ✅ Assigned Test (from backend)
        const assignedTest = task?.test || "-";

        // ✅ All tests (assigned + add-on)
        const allTests = data.testList || [];

        // ✅ Extract add-on tests (remove assigned ones)
        let assignedArray = assignedTest
          .split(",")
          .map(t => t.trim().toLowerCase());

        const addOnTests = allTests.filter(t =>
          !assignedArray.includes(t.toLowerCase())
        );

        // ✅ Convert add-on tests to string
        const addOnNames = addOnTests.length > 0
          ? addOnTests.join(", ")
          : "-";

        // ✅ Status
        const status = data.state;

        // ✅ Amount
        let amount = data.incentive || 0;
        total += Number(amount);
        hasData = true;

        // ✅ Row
        let row = `
          <tr>
            <td style="padding:8px; border:1px solid #ddd;">${getBookingId(taskId)}</td>
            <td style="padding:8px; border:1px solid #ddd;">${name}</td>
            <td style="padding:8px; border:1px solid #ddd;">${assignedTest}</td>
            <td style="padding:8px; border:1px solid #ddd;">${addOnNames}</td>
            <td style="padding:8px; border:1px solid #ddd;">${status}</td>
            <td style="padding:8px; border:1px solid #ddd;">₹${amount}</td>
          </tr>
        `;

        tbody.innerHTML += row;
      }
    }
  }

  // ✅ Show / hide empty message
  if (noDataMsg) {
    if (!hasData) {
      noDataMsg.style.display = "block";
    } else {
      noDataMsg.style.display = "none";
    }
  }

  // ✅ Total earnings
  document.getElementById("totalEarnings").innerText = total;
}




async function showEarnings() {

  document.getElementById("drawer").classList.remove("open");
  document.getElementById("menuOverlay").classList.remove("show");

  document.getElementById("taskListView").style.display = "none";
  document.getElementById("taskDetailView").style.display = "none";
  document.getElementById("workflowView").style.display = "none";
  document.getElementById("earningsView").style.display = "block";

  // ✅ Ensure tasks loaded
  if (!tasks || tasks.length === 0) {
    await loadTasks();
  }

  calculateEarnings();
}

function showSupport() {

  // Close drawer
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("menuOverlay").classList.remove("show");

  // Hide all views
  document.getElementById("taskListView").style.display = "none";
  document.getElementById("taskDetailView").style.display = "none";
  document.getElementById("workflowView").style.display = "none";
  document.getElementById("earningsView").style.display = "none";

  // Show support
  document.getElementById("supportView").style.display = "block";

  // Scroll top
  window.scrollTo(0, 0);
}


function callSupport() {
  window.open("tel:+917975357102"); // replace number
}

function emailSupport() {
  window.open("mailto:rapidlabs.hr@gmail.com"); // replace email
}

function whatsappSupport() {
  const phone = "917975357102"; // replace number (with country code)
  const msg = encodeURIComponent("Hi, I need help with Collector App");
  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}

function showProfile() {

  // Close drawer
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("menuOverlay").classList.remove("show");

  // ✅ Hide ALL views (add any missing ones here)
  const views = [
    "taskListView",
    "taskDetailView",
    "workflowView",
    "earningsView",
    "supportView",
    "profileView"
  ];

  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });

  // ✅ Show ONLY profile
  document.getElementById("profileView").style.display = "block";

  // Load profile data
  loadProfile();

  window.scrollTo(0, 0);
}

window.onerror = function(msg, src, line) {
  console.log("ERROR:", msg, "LINE:", line);
};


async function submitNow(){

  alert("✅ Submitted to Lab");

  // ✅ ensure amount exists
  if (!finalPayable || finalPayable === 0) {
    finalPayable = totalAmount || 0;
  }

  // ✅ CALL BACKEND (IMPORTANT)
  await fetch("http://127.0.0.1:5000/api/update-task-status", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      task_id: selectedTask.id,
      status: "completed",   // ✅ REAL COMPLETION
      patient_name: selectedTask.patient_name,
      mobile: selectedTask.mobile,
      location: selectedTask.location,
      tests: testList.join(","),
      addon_tests: getAddonTests(),
      amount: finalPayable
    })
  });

  // ✅ SAVE FINAL STATE WITH INCENTIVE
  const data = {
    state: "COMPLETED",
    distance: distance,
    testList: testList,
    payable: finalPayable,
    incentive: selectedTask.incentive ?? 0   // ✅ IMPORTANT
  };

  localStorage.setItem(getTaskKey(selectedTask.id), JSON.stringify(data));

  workflowState = "COMPLETED";

  renderWorkflow(workflowState);

  loadTasks(); // refresh
}

function submitLater(){
  alert("⚠️ Pending task — please complete later");

  updateState("HANDED_OVER"); // or keep IN_TRANSIT if needed

  showTaskList();
}

function openReschedule() {
  document.getElementById("rescheduleModal").style.display = "flex";
}

function closeReschedule() {
  document.getElementById("rescheduleModal").style.display = "none";
}

function submitReschedule() {

  const date = document.getElementById("rescheduleDate").value;
  const time = document.getElementById("rescheduleTime").value;

  if (!date || !time) {
    alert("Select date & time");
    return;
  }

  const datetime = date + " " + time;

  fetch("http://127.0.0.1:5000/api/update-task-status", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      task_id: selectedTask.id,
      status: "Rescheduled",
      patient_name: selectedTask.patient_name,
      mobile: selectedTask.mobile,
      location: selectedTask.location,
      tests: [selectedTask.test],
      amount: selectedTask.amount,
      reschedule_datetime: datetime
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("Task Rescheduled ✅");
    closeReschedule();
  });
}



function openCancel() {
  document.getElementById("cancelModal").style.display = "flex";
}

function closeCancel() {
  document.getElementById("cancelModal").style.display = "none";
}

function submitCancel() {

  const reason = document.getElementById("cancelReason").value;

  if (!reason) {
    alert("Enter reason");
    return;
  }

  fetch("http://127.0.0.1:5000/api/update-task-status", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      task_id: selectedTask.id,
      status: "Cancelled",
      patient_name: selectedTask.patient_name,
      mobile: selectedTask.mobile,
      location: selectedTask.location,
      tests: [selectedTask.test],
      amount: selectedTask.amount,
      cancel_reason: reason
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("Task Cancelled ❌");
    closeCancel();
  });
}

function getAddonTests() {

  if (!selectedTask?.test) return "";

  // assigned tests from backend
  let assigned = selectedTask.test
    .split(",")
    .map(t => t.trim().toLowerCase());

  // filter addon tests
  let addons = testList.filter(t =>
    !assigned.includes(t.toLowerCase())
  );

  return addons.join(",");
}

function openTaskDetailsById(id) {
  const task = tasks.find(t => t.id === id);
  openTaskDetails(task);
}

async function loadProfile() {

  if (!collectorId) return;

  const res = await fetch(`http://127.0.0.1:5000/api/collector/${collectorId}`);
  const data = await res.json();

  if (!data || data.error) {
    console.error("Profile load failed");
    return;
  }

  document.getElementById("profileId").innerText = "RPID" + data.id;
  document.getElementById("profileName").innerText = data.name;
  document.getElementById("profileMobile").innerText = data.phone;
  document.getElementById("profileEmail").innerText = data.email;
}


function logout() {

  // 1. Clear saved login
  localStorage.removeItem("collectorId");

  // 2. Reset variables
  collectorId = null;
  selectedTask = null;
  tasks = [];

  // 3. Hide app
  document.getElementById("app").style.display = "none";

  // 4. Show login page
  document.getElementById("loginPage").style.display = "flex";

  // 5. Clear inputs (optional but better UX)
  document.getElementById("workerId").value = "";
  document.getElementById("password").value = "";
}

function getBookingId(id) {
  return "BK" + String(id).padStart(5, "0");
}


function initNotifications() {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {

      messaging.getToken({
        vapidKey: "BHZaklPII6O7U3jVCemyb7dsX-Fz0UiSmXd44fSGArJkBHwDoFrNy5PuDb_Qw3T7N4zHiGEgpRkOffrvWXf2mm4"
      }).then(token => {

        console.log("FCM TOKEN:", token);

        // 🔥 SEND TOKEN TO FLASK SERVER
        fetch("http://127.0.0.1:5000/api/save-fcm-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            collector_id: collectorId,
            token: token
          })
        });

      });

    }
  });
}

