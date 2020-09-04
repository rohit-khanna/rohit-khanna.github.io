// Observer Pattern

const subjectInstance = SubjectFactory.getInstance();

subjectInstance.subscribe("timeNow-data", function (newTime) {
  document.getElementById(`timeNow-data`).innerHTML = newTime;
});

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var checkboxes = document.querySelectorAll("input[type=checkbox]");

    for (var checkbox of checkboxes) {
      checkbox.addEventListener("change", function (event) {
        if (event.target.checked) {
          // thes callbacks will be invoked when certain event occurs
          subjectInstance.subscribe(event.target.id, function (newTime) {
            document.getElementById(
              `${event.target.id}-data`
            ).innerHTML = newTime;
          });
        } else {
          subjectInstance.unsubscribe(event.target.id);
        }
      });
    }
  },
  false
);
