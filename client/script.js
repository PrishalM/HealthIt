

document.getElementById("CAbutton").addEventListener("click", createAccount);

async function createAccount() {
    let name = document.getElementById("CAname").value;
    let email = document.getElementById("CAemail").value;
    let password = document.getElementById("CApassword").value;
    console.log(name);
        if (name.length > 0 && email.length > 0 && password.length > 0) {
        
            try {let newUser = {
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
    }
         else {
        alert(
          "Name, Email and Password fields are mandatory to create user. Please try again."
        );
      }
    }

////////////////////////////////////////////////////////////////
// Index event listeners

// Sign in button
document.getElementById("SIbutton").addEventListener("click", function () {
  // Add function here
});


// Create account link
document
  .getElementById("createAccountLink")
  .addEventListener("click", function () {
    alert("create account link");
  });

//   Sign in link
document.getElementById("signInLink").addEventListener("click", function () {
  // Add function here
});

////////////////////////////////////////////////////////////////
// Dashboard event listeners

// Settings button
document.querySelector("#settingsBtn").addEventListener("click", function () {
  alert("settings btn");
});

// View more details button/link
// Need to fetch for the specific id as this will open up the modal only without data
document
  .getElementsByClassName("bi-three-dots")
  .addEventListener("click", function () {
    alert("more details btn");
  });

// Edit habit button/link
// Need to fetch for the specific id as this will open up the modal only without data
document
  .getElementsByClassName("edit-link")
  .addEventListener("click", function () {
    alert("edit btnm");
  });

// Not created yet but need one for the close button on expanded habit and another for the log out link
document.getElementById("SIbutton").addEventListener("click", FUNCTION);
document.getElementById("SIbutton").addEventListener("click", FUNCTION);

////////////////////////////////////////////////////////////////
// Create habit event listeners

// Close button
document
  .getElementById("createHabitCloseBtn")
  .addEventListener("click", FUNCTION);

// Habit button 1 - Sleep
document.getElementById("sleep").addEventListener("click", FUNCTION);

// Habit button 2 - Exercise
document.getElementById("exercise").addEventListener("click", FUNCTION);

// Habit button 3 - Water
document.getElementById("water").addEventListener("click", FUNCTION);

// Create new habit button
document
  .getElementById("createNewHabitBtn")
  .addEventListener("click", FUNCTION);

////////////////////////////////////////////////////////////////
// Edit habit event listeners - NOT DONE YET

document.getElementById("SIbutton").addEventListener("click", FUNCTION);
document.getElementById("SIbutton").addEventListener("click", FUNCTION);
document.getElementById("SIbutton").addEventListener("click", FUNCTION);

