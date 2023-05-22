const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        Swal.fire({
            title: `<h3 style="color: #00FFFF;">Signed Up Successfully</h3>`,
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
            title: `<h3 style="color: #00FFFF;">Email Already Exist!</h3>`,
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
    var y = document.getElementById("password-signup");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);