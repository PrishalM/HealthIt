
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
