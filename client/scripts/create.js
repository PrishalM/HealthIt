////////////////////////////////////////////////////////////////
// Create habit event listeners

// Close button
document
  .getElementById("createHabitCloseBtn")
  .addEventListener("click", function () {
    window.location.assign("dashboard.html");
  });

// Habit button 1 - Sleep
document.getElementById("sleep").addEventListener("click", function () {
  document.getElementById("sleep").style.backgroundColor = "var(--green)";
  document.getElementById("sleep").style.border =
    "1px solid var(--darkest-green)";
  document.getElementById("sleep").style.fontWeight = "700";
  ("1px solid var(--darkest-green)");
  document.getElementById("recommendUnits").innerText =
    "We recommend at least 7 hours of sleep a day.";
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
});

// Create new habit button *
document
  .getElementById("createNewHabitBtn")
  .addEventListener("click", submitHabit);

async function postHabit(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };

    const response = await fetch("http://localhost:3000/habits", options);
    const { id, err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      window.location.hash = `#habits/${id}`;
    }
  } catch (err) {
    console.warn(err);
  }
}
