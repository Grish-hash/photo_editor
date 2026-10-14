// PhotoEditor DOM and timing-event demonstrations.
// The guards allow this shared file to run on pages that don't contain every feature.

const pageTitle = document.getElementById("pageTitle");
if (pageTitle) {
  pageTitle.addEventListener("click", function () {
    pageTitle.textContent = "📸 Welcome to PhotoEditor!";
  });
}

function setupPasswordToggle(buttonId, inputId) {
  const button = document.getElementById(buttonId);
  const input = document.getElementById(inputId);
  if (!button || !input) return;
  button.addEventListener("click", function () {
    const shouldShow = input.type === "password";
    input.type = shouldShow ? "text" : "password";
    button.textContent = shouldShow ? "Hide" : "Show";
  });
}
setupPasswordToggle("showLoginPassword", "loginPassword");
setupPasswordToggle("showSignupPassword", "signupPassword");

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername");
    const password = document.getElementById("loginPassword");
    const message = document.getElementById("loginMessage");
    if (!username.value.trim() || !password.value) {
      message.textContent = "Please enter your username and password.";
      message.style.color = "#c62828";
    } else {
      message.textContent = "Demo sign-in successful! Continue to the editor below.";
      message.style.color = "#18715f";
    }
  });
}

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = document.getElementById("signupMessage");
    message.textContent = "Registration successful for this demo! You can continue to the editor.";
    message.style.color = "#18715f";
  });
}

// Timing events: setInterval + clearInterval.
const progress = document.getElementById("progress");
const progressText = document.getElementById("progressText");
const startButton = document.getElementById("startEditing");
const stopButton = document.getElementById("stopEditing");
const resetButton = document.getElementById("resetEditing");
const timingMessage = document.getElementById("timingMessage");
let progressValue = 0;
let editingTimer = null;

function stopProgressTimer() {
  if (editingTimer !== null) {
    window.clearInterval(editingTimer);
    editingTimer = null;
  }
}
if (startButton && progress && progressText) {
  startButton.addEventListener("click", function () {
    if (editingTimer !== null || progressValue >= 100) return;
    if (timingMessage) timingMessage.textContent = "Editing progress is running…";
    editingTimer = window.setInterval(function () {
      progressValue = Math.min(progressValue + 10, 100);
      progress.value = progressValue;
      progressText.textContent = progressValue + "%";
      if (progressValue >= 100) {
        stopProgressTimer();
        if (timingMessage) timingMessage.textContent = "Demo editing complete!";
      }
    }, 500);
  });
}
if (stopButton) {
  stopButton.addEventListener("click", function () {
    stopProgressTimer();
    if (timingMessage) timingMessage.textContent = "Progress paused.";
  });
}
if (resetButton && progress && progressText) {
  resetButton.addEventListener("click", function () {
    stopProgressTimer();
    progressValue = 0;
    progress.value = 0;
    progressText.textContent = "0%";
    if (timingMessage) timingMessage.textContent = "Progress reset. Ready to begin.";
  });
}

// Local image preview on the editor page. No file is sent to a server.
const photoUpload = document.getElementById("photoUpload");
const photoPreview = document.getElementById("photoPreview");
if (photoUpload && photoPreview) {
  photoUpload.addEventListener("change", function () {
    const file = photoUpload.files && photoUpload.files[0];
    if (!file) {
      photoPreview.removeAttribute("src");
      photoPreview.style.display = "none";
      return;
    }
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      photoUpload.value = "";
      return;
    }
    photoPreview.src = URL.createObjectURL(file);
    photoPreview.style.display = "block";
  });
}

const editingForm = document.getElementById("editingForm");
if (editingForm) {
  editingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("customerName").value.trim();
    const service = document.getElementById("editingService").value;
    const message = document.getElementById("editingMessage");
    message.textContent = "Thanks, " + name + "! Your demo request for " + service + " is ready.";
    message.style.color = "#18715f";
  });
}
