////////////////////////////////////////////////////////////////
// Create habit event listeners

// Close button
document
  .getElementById("createHabitCloseBtn")
  .addEventListener("click", function () {
    window.location.assign("dashboard.html");
  });
let habitChosen = "";

// Habit button 1 - Sleep
document.getElementById("sleep").addEventListener("click", function () {
  document.getElementById("sleep").style.backgroundColor = "var(--green)";
  document.getElementById("sleep").style.border =
    "1px solid var(--darkest-green)";
  document.getElementById("sleep").style.fontWeight = "700";
  ("1px solid var(--darkest-green)");
  document.getElementById("recommendUnits").innerText =
    "We recommend at least 7 hours of sleep a day.";
  habitChosen = "Sleep";
});

// Habit button 2 - Exercise
document.getElementById("exercise").addEventListener("click", function () {
  document.getElementById("exercise").style.backgroundColor = "var(--green)";
  document.getElementById("exercise").style.border =
    "1px solid var(--darkest-green)";
  document.getElementById("exercise").style.fontWeight = "700";
  ("1px solid var(--darkest-green)");
  document.getElementById("recommendUnits").innerText =
    "We recommend at least 30 minutes of exercise a day.";
  habitChosen = "Exercise";
});

// Habit button 3 - Water
document.getElementById("water").addEventListener("click", function () {
  document.getElementById("water").style.backgroundColor = "var(--green)";
  document.getElementById("water").style.border =
    "1px solid var(--darkest-green)";
  document.getElementById("water").style.fontWeight = "700";
  ("1px solid var(--darkest-green)");
  document.getElementById("recommendUnits").innerText =
    "We recommend at least 2000 milliliters of water a day.";
  habitChosen = "Water";
});

// Create new habit button *
document
  .getElementById("createNewHabitBtn")
  .addEventListener("click", postHabit);

// let sleepBtn = document.getElementById('sleep');
// let waterBtn = document.getElementById('water');
// let exerciseBtn = document.getElementById('exercise');

async function postHabit(e) {
  e.preventDefault();
  let frequency = document.getElementById("frequency").value;

  try {
    const newHabit = {
      habit_name: habitChosen,
      frequency: frequency,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newHabit),
    };
    console.log(JSON.stringify(newHabit));

    const response = await fetch("http://localhost:3000/habits", options);
    const { id, err } = await response.json();
    console.log(response.status);
    if (response.status === 201) {
      //Store the token
      window.location.assign("dashboard.html");
    }
  } catch (err) {
    console.warn(err);
  }
}
