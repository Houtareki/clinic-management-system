const userList = [
  {
    email: "admin",
    password: "123",
    role: "admin",
    redirectUrl: "temp/admin/admin.html",
  },
  {
    email: "doctor",
    password: "123",
    role: "doctor",
    redirectUrl: "temp/doctor/doctor.html",
  },
  {
    email: "receptionist",
    password: "123",
    role: "receptionist",
    redirectUrl: "temp/receptionist/receptionist.html",
  },
];

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email_address");
const passInput = document.getElementById("password");
const errorAlert = document.getElementById("loginError");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const enterEmail = emailInput.value;
  const enterPass = passInput.value;

  const checkUser = userList.find(function (user) {
    return user.email === enterEmail && user.password === enterPass;
  });

  if (checkUser) {
    window.location.href = checkUser.redirectUrl;
  } else {
    errorAlert.classList.remove("d-none");
  }

  emailInput.addEventListener("input", function () {
    errorAlert.classList.add("d-none");
  });
  passInput.addEventListener("input", function () {
    errorAlert.classList.add("d-none");
  });
});
