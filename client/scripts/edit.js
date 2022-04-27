////////////////////////////////////////////////////////////////
// Edit habit event listeners

// close button
document
  .getElementById("closeEditHabitBtn")
  .addEventListener("click", function () {
    window.location.assign("dashboard.html");
  });

// delete habit link
document
  .getElementById("deleteHabitBtn")
  .addEventListener("click", function () {
    alert("delete habit btn");
  });

// Submit changes button
document
  .getElementById("submitChangesBtn")
  .addEventListener("click", function () {
    alert("submit changes btn");
  });
