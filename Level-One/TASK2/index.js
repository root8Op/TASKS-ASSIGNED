// Phone number input numbers only enabled heere

document.getElementById("phone").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^0-9]/g, "");
});

// end

// Data saving functionality using Object

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevents form refres
  // Create object with input values
  let userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    password: document.getElementById("password").value,
    confirmedPassword: document.getElementById("confirmpassword").value,
  }
  console.log(userData); // Print object to consol
  let existingData = JSON.parse(localStorage.getItem("users")) || []
  // Push new user data
  existingData.push(userData)
  // Save back to localStorage
  localStorage.setItem("users", JSON.stringify(existingData))
  console.log("Saved to localStorage:", userData);
  alert("Data saved successfully!");
});

// end of the function code


document.getElementById("password").addEventListener("input", function () {
  const password = this.value;
  const message = document.getElementById("strengthMessage");

  const criteria = [
    { regex: /.{8,}/, label: "Minimum 8 characters" },
    { regex: /[A-Z]/, label: "At least one uppercase letter" },
    { regex: /[a-z]/, label: "At least one lowercase letter" },
    { regex: /[0-9]/, label: "At least one number" },
    { regex: /[^A-Za-z0-9]/, label: "At least one special character" }
  ];

  const unmet = criteria.filter(c => !c.regex.test(password));

  if (unmet.length === 0) {
    message.textContent = "✅ Strong password!";
    message.style.color = "white";
  } else {
    message.innerHTML = "❌ Weak password.<br>Missing:<br>" + unmet.map(c => `• ${c.label}`).join("<br>");
    message.style.color = "white";
  }
});