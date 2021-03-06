////////////////////////////////////////////////////////////////
// Index event listeners

// Sign in button
document.getElementById("SIbutton").addEventListener("click", login);

async function login(e) {
  e.preventDefault();

  let userInputEmail = document.getElementById("SIemail").value;
  let userInputPassword = document.getElementById("SIpassword").value;
  if (userInputEmail.length > 0 && userInputPassword.length > 0) {
    try {
      const login = {
        email: userInputEmail,
        password: userInputPassword,
      };

      const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(login),
      };
      console.log(login);
      const response = await fetch("http://localhost:3000/auth/login", options);
      console.log(response.status);
      // if (response.status == 200) {
      //   console.log(re);
      // }
      const data = await response.json();

      if (!data.success) {
        alert("Incorrect email and password combination. Please try again.");
        throw new Error("Login not authorised!");
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      localStorage.setItem("id", data.id);

      window.location.assign("dashboard.html");
    } catch (err) {
      console.warn(err);
    }
  }
}
// Create account button
document.getElementById("CAbutton").addEventListener("click", createAccount);

// async function createAccount() {
//   let name = document.getElementById("CAname").value;
//   let email = document.getElementById("CAemail").value;
//   let password = document.getElementById("CApassword").value;
//   if (name.length > 0 && email.length > 0 && password.length > 0) {
//     try {
//       let newUser = {
//         username: name,
//         email: email,
//         password: password,
//       };

//       const options = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newUser),
//       };

//       const response = await fetch("http://localhost:3000/users", options);
//       const { id, err } = await response.json();
//       if (err) {
//         throw Error(err);
//       } else {
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   } else {
//     alert(
//       "Name, Email and Password fields are mandatory to create user. Please try again."
//     );
//   }
// }
async function createAccount(e) {
  e.preventDefault();
  let name = document.getElementById("CAname").value;
  let email = document.getElementById("CAemail").value;
  let password = document.getElementById("CApassword").value;
  try {
    let newUser = {
      username: name,
      email: email,
      password: password,
    };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    };
    const r = await fetch(`http://localhost:3000/auth/register`, options);
    const data = await r.json();
    console.log(data);
    if (data.err) {
      throw Error(data.err);
    }
    // window.location.hash = '#login';
    window.location.assign("index.html");
  } catch (err) {
    console.warn(err);
  }
}

// Create account link on sign in col
document
  .getElementById("createAccountLink")
  .addEventListener("click", function () {
    document.getElementById("create-account").classList.remove("hide");

    document.getElementById("sign-in").classList.toggle("hide");
  });

//   Sign in link on create account col
document.getElementById("signInLink").addEventListener("click", function () {
  document.getElementById("sign-in").classList.remove("hide");
  document.getElementById("create-account").classList.add("hide");
});
