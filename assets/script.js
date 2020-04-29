
$(document).ready(function(){

    let today = moment();

    let todaysDate = $("<p>").text(today.format("dddd, MMMM Do, YYYY"));
    $("#todaysDate").append(todaysDate);
    $("#todaysDate").css("font-weight", "bolder");


    $( "button" ).on( "click", function() {
        
        alert( "hello!" );
      });













})
