////////////////////////////////////////////////////////////////
// Dashboard

// Fetch data for the user
async function fetchDetailsForUser() {
  let username = localStorage.getItem("username");
  document.getElementById("dashboard-name").textContent = username;
  document.getElementById("dashboard-setting-name").textContent = username;
}

async function fetchHabitsForUser() {
  try {
    const res = await fetch(
      `https://localhost:3000/habits/user/${localStorage.getItem("id")}`
    )
      .then((res) => res.json())
      .then((data) => {
        let percentage = habit.frequency_count / habit.frequency;
        let output = ``;
        data.forEach(function (habit) {
          output += `
          <div class="habit">
          <!-- First row with name, progress bar and more details icon -->
          <div class="row">
            <div class="col-4"><h5 class="habit-name">${habit.habit_name}</h5></div>
            <div class="col-6 habit-progress-section">
              <div class="habit-progress-container">
                <div class="habit-progressbar" style="width: ${percentage}%">${percentage}%</div>
              </div>
            </div>
            <div class="col-1">
              <i id="" class="bi bi-three-dots viewMoreBtn"></i>
            </div>
          </div>
          <!-- Second row with goal and edit link -->
          <div class="row">
            <div class="col-8">
              <p class="habit-goal">Goal: ${habit.frequency} units a day</p>
            </div>
            <div class="col-4 edit-link">
              <a href="">Edit<i class="ps-2 bi bi-pencil"></i></a>
            </div>
          </div>
          <!-- Third row with log units header -->
          <div class="row"><h6 class="habit-log-unit">Log unit</h6></div>
          <!-- fourth row with update progress field & button  -->
          <div class="row justify-content-between">
            <div class="col-5 habit-input-log">
              <input id="HabitUnitInput" type="text" />
            </div>
            <div class="col-7 d-flex justify-content-end">
              <button
                id="UpdateUnitBtn"
                type="button"
                class="btn btn-outline-primary"
              >
                Update progress
              </button>
            </div>
          </div>
        </div>
                      `;
        });
        document.getElementById("habit-output").innerHTML = output + `<br>`;
      });
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
}

// Settings button
document.querySelector("#settingsBtn").addEventListener("click", function () {
  document.getElementById("SettingContainers").classList.remove("hide");
});

// Create habit button
document.getElementById("CHbutton").addEventListener("click", function () {
  window.location.assign("create.html");
});

// View more details button/link
// Need to fetch for the specific id as this will open up the modal only without data
// document.getElementById("viewMoreBtn").addEventListener("click", function () {
//   alert("more details btn");
// });

// Edit habit button/link
// Need to fetch for the specific id as this will open up the modal only without data
// document.getElementById("edit-link").addEventListener("click", function () {
//   alert("edit btnm");
// });

// close button on settings overlay
document
  .getElementById("settingsCloseBtn")
  .addEventListener("click", function () {
    document.getElementById("SettingContainers").classList.add("hide");
  });

// Log out button on settings overlay
document.getElementById("logOutBtn").addEventListener("click", function () {
  window.location.assign("index.html");
});
