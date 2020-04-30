
$(document).ready(function(){

let hour8Text = $("#hour8");
let hour9Text = $("#hour9");
let hour10Text = $("#hour10");
let hour11Text = $("#hour11");

let today = moment();

let todaysDate = $("<p>").text(today.format("dddd, MMMM Do, YYYY"));
$("#todaysDate").append(todaysDate);
$("#todaysDate").css("font-weight", "bolder");

// Gets text from local storage and displays in rows (first 3 for now)
for (let i = 8; i < 12; i++) {

    $( "#hour" + i ).val(localStorage.getItem( i + ":00" ));
}

// On click event for save buttons (first 3 for now; maybe turn into a function?)
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

$( ".saveButton11" ).on( "click", function() {

    localStorage.setItem("11:00", hour11Text.val());
            
    alert( "hello!" );
    });


// Checks if the current hour matches and changes text red

//if (moment().get("hour") === 8) {
//    $("#hour8").css("color", "red");
//} else if (moment().get("hour") === 9) {
//    $("#hour9").css("color", "red");
//} else if (moment().get("hour") === 10) {
//    $("#hour10").css("color", "red");
//}

for (let i = 8; i < 12; i++) {

    if (moment().get("hour") > i) {
        $("#hour" + i + "row").css("background-color", "SteelBlue") && $("#hour" + i).css("background-color", "SteelBlue");
    } else if (moment().get("hour") === i) {
        $("#hour" + i + "row").css("background-color", "Tomato") && $("#hour" + i).css("background-color", "Tomato");
    } else if (moment().get("hour") < i) {
        $("#hour" + i + "row").css("background-color", "MediumSpringGreen") && $("#hour" + i).css("background-color", "MediumSpringGreen");
    }

}

console.log(moment().get("hour"));




})
