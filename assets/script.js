
$(document).ready(function(){

let hour8Text = $("#hour8");
let hour9Text = $("#hour9");
let hour10Text = $("#hour10");

let today = moment();

let todaysDate = $("<p>").text(today.format("dddd, MMMM Do, YYYY"));
$("#todaysDate").append(todaysDate);
$("#todaysDate").css("font-weight", "bolder");


// Trying to create a save function




// Gets text from local storage and displays in rows (first three for now)
for (let i = 8; i < 11; i++) {

    $( "#hour" + i ).val(localStorage.getItem( i + ":00" ));
}




// On click event for save button
$( ".saveButton8" ).on( "click", function() {
        
    localStorage.setItem("8:00", hour8Text.val());

    alert( "hello!" );
    });

$( ".saveButton9" ).on( "click", function() {
        
    localStorage.setItem("9:00", hour9Text.val());
    
    alert( "hello!" );
    });

$( ".saveButton10" ).on( "click", function() {

    localStorage.setItem("10:00", hour10Text.val());
        
    alert( "hello!" );
    });







})
