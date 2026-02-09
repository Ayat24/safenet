// ========== Password Analyzer ==========
function analyzePassword() {
  const password = document.getElementById("passwordInput").value;
  const results = document.getElementById("passwordResults");
  const strengthText = document.getElementById("strengthText");
  const strengthBar = document.getElementById("strengthBar");
  const suggestionsDiv = document.getElementById("passwordSuggestions");

  if (!password) {
    alert("Please enter a password");
    return;
  }

  let score = 0;
  let suggestions = [];

  if (password.length >= 8) score++;
  else suggestions.push("Use at least 8 characters");

  if (/[A-Z]/.test(password)) score++;
  else suggestions.push("Add uppercase letters");

  if (/[a-z]/.test(password)) score++;
  else suggestions.push("Add lowercase letters");

  if (/[0-9]/.test(password)) score++;
  else suggestions.push("Add numbers");

  if (/[^A-Za-z0-9]/.test(password)) score++;
  else suggestions.push("Add special characters");

  let strength = "Weak";
  let percent = "20%";
  let color = "bg-danger";

  if (score >= 4) {
    strength = "Strong";
    percent = "100%";
    color = "bg-success";
    suggestions = ["Great password! Keep it safe 🔐"];
  } else if (score === 3) {
    strength = "Good";
    percent = "60%";
    color = "bg-warning";
  }

  strengthText.textContent = strength;
  strengthBar.style.width = percent;
  strengthBar.className = `strength-fill ${color}`;

  suggestionsDiv.innerHTML = "";
  suggestions.forEach(item => {
    suggestionsDiv.innerHTML += `<p class="mb-1">• ${item}</p>`;
  });

  results.classList.remove("d-none");
}

// ========== Show / Hide Password ==========
document.getElementById("togglePassword").addEventListener("click", () => {
  const input = document.getElementById("passwordInput");
  input.type = input.type === "password" ? "text" : "password";
});

// ========== Privacy Setting ==========
const guides = {
  facebook: [
    "Use Privacy Checkup",
    "Limit who can see your posts",
    "Enable two-factor authentication"
  ],
  instagram: [
    "Set account to private",
    "Control story visibility",
    "Hide activity status"
  ],
  twitter: [
    "Protect your tweets",
    "Disable location sharing",
    "Filter direct messages"
  ],
  google: [
    "Run Privacy Checkup",
    "Manage location history",
    "Control ad personalization"
  ]
};

document.getElementById("platformSelect").onchange = function () {
  const platform = this.value;
  const guideBox = document.querySelector(".privacy-guide");
  const steps = document.querySelector(".privacy-steps");
  const time = document.querySelector(".estimated-time");

  if (platform === "") {
    guideBox.classList.add("d-none");
    return;
  }

  steps.innerHTML = "";
  for (let i = 0; i < guides[platform].length; i++) {
    steps.innerHTML += `<li>${guides[platform][i]}</li>`;
  }

  time.innerText = `Estimated time: ${guides[platform].length * 3} minutes`;
  guideBox.classList.remove("d-none");
};
