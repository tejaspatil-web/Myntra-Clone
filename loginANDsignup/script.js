// localStorage.setItem("email", "tejasp094@gmail.com");
// localStorage.setItem("pass", "tejas@123");
// localStorage.getItem("email");
// localStorage.getItem("pass");
// data = localStorage.getItem("email");
// console.log(data);

function submit() {
  name1 = document.getElementById("name").value;
  email = document.getElementById("email").value;
  pass = document.getElementById("pass").value;
  conno = document.getElementById("conno").value;

  localStorage.setItem("name", name1);
  localStorage.setItem("email", email);
  localStorage.setItem("password", pass);
  localStorage.setItem("contact.no", conno);
  localStorage.setItem("login", "true");
  swal("Good Job!", "Signup Successfully Please Login", "success");
}

function login() {
  email = document.getElementById("email").value;
  pass = document.getElementById("pass").value;
  email1 = localStorage.getItem("email", email);
  pass2 = localStorage.getItem("password", pass);

  if (email == email1 && pass == pass2) {
    swal({
      title: "Good job!",
      text: "Login Sucessfully",
      icon: "success",
    });
    window.location.href = "../index.html";
  } else {
    swal("Try Again!", "Email or Password is incorrect", "error");
    // alert("email or password is incorrect");
  }
}
