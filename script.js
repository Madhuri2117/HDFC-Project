function login() {
  let id = document.getElementById("custId").value;
  let pass = document.getElementById("password").value;

  if (id === "admin" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Credentials (Demo)");
  }
}

function logout() {
  window.location.href = "index.html";
}

function toggleLogin() {
    const box = document.getElementById("loginDropdown");
    box.style.display = box.style.display === "block" ? "none" : "block";
  }

  // close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    const loginWrapper = document.querySelector(".login-wrapper");
    if (!loginWrapper.contains(e.target)) {
      document.getElementById("loginDropdown").style.display = "none";
    }
  });

  function goToPassword() {
    const customerId = document.querySelector('input').value;

    if (customerId.trim() === "") {
      alert("Please enter Customer ID");
      return;
    }

    // store customer id (optional)
    localStorage.setItem("customerId", customerId);

    // redirect to password page
    window.location.href = "login.html";
  }
