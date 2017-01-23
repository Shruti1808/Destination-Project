var Destination = function(locationName, timeOfYear, notes) {
  this.locationName = locationName;
  this.landmarks = [];
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}











// user interface logic here
$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();
    var inputtedLocationName = $("input#new-location-name").val();
    var inputtedTimeOfYear = $("input#time-of-year").val();
    var inputtedNote = $("input#note").val();

    var newDestination = new Destination(inputtedLocationName, inputtedTimeOfYear,inputtedNote);

    $(".new-landmark").each(function() {
      var inputtedLandmark = $("input#landmark").val();
      newDestination.landmarks.push(inputtedLandmark);
    });


    $("ul#locations-list").append("<li><span class='location-name'>" + newDestination.locationName + "</span></li>");
    $("#locations-list").last().click(function() {
      console.log("clicked!");
      $(".output-container").show();
      $(".place").text(newDestination.locationName);
      $(".time").text(newDestination.timeOfYear);
      $(".note-text").text(newDestination.notes);
      for (i=0; i < newDestination.landmarks.length; i++) {
        var newLandmark = newDestination.landmarks[i];
        $("ul#landmark-list").append("<li><span class='location-name'>" + newLandmark + "</span></li>");
        console.log(newLandmark);
      }
    })

    $("input#new-location-name").val("");
    $("input#landmark").val("");
    $("input#time-of-year").val("");
    $("input#note").val("");
  });

  $("#add-landmark").click(function() {
    console.log("click");
    $(".new-landmark").first().clone().appendTo("#landmark-column");
  });
});
