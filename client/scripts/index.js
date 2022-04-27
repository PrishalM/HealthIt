////////////////////////////////////////////////////////////////
// Index event listeners

// Sign in button
document.getElementById("SIbutton").addEventListener("click", function () {
  // Add function here
});

// Create account button
document.getElementById("CAbutton").addEventListener("click", createAccount);

async function createAccount() {
  let name = document.getElementById("CAname").value;
  let email = document.getElementById("CAemail").value;
  let password = document.getElementById("CApassword").value;
  if (name.length > 0 && email.length > 0 && password.length > 0) {
    try {
      let newUser = {
        username: name,
        email: email,
        password: password,
      };

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      };

      const response = await fetch("http://localhost:3000/users", options);
      const { id, err } = await response.json();
      if (err) {
        throw Error(err);
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
  } else {
    alert(
      "Name, Email and Password fields are mandatory to create user. Please try again."
    );
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
