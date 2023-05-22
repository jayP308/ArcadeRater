const loginFormHandler = async (event) => {
  event.preventDefault();


  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password, }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
      Swal.fire({
        title: `<h3 style="color: #00FFFF;">Signed In Successfully</h3>`,
        icon: "success",
        text: " ",
        background: "#202A44",
        showConfirmButton: false,
        timer: 2000,
      }).then ((result) => {
        document.location.replace('/');
      })
    } else {
      Swal.fire({
        title: `<h3 style="color: #00FFFF;">Invalid Username or Password!</h3>`,
        icon: "error",
        text: " ",
        background: "#202A44",
        showConfirmButton: false,
      }).then ((result) => {
        return;
      })
    }
  }
};

function showPassword() {
  var x = document.getElementById("password-login");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);


