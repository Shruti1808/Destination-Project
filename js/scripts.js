var Destination = function(locationName, landmarks, timeOfYear, notes) {
  this.locationName = locationName;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}


$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

  });

  $("#add-landmark").click(function() {
    console.log("click");
    $(".new-landmark").first().clone().appendTo("#landmark-column");
  });
});
