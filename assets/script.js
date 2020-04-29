
$(document).ready(function(){

let hour8Text = $("#hour8")

let today = moment();

let todaysDate = $("<p>").text(today.format("dddd, MMMM Do, YYYY"));
$("#todaysDate").append(todaysDate);
$("#todaysDate").css("font-weight", "bolder");


// Trying to create a save function




// Gets text from local storage and displays in rows
$( "#hour8").val(localStorage.getItem("8:00"));



// On click event for save button
$( "button" ).on( "click", function() {
        
    localStorage.setItem("8:00", hour8Text.val());

    alert( "hello!" );
    });









})
