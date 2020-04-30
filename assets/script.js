
$(document).ready(function(){

let hour8Text = $("#hour8");
let hour9Text = $("#hour9");
let hour10Text = $("#hour10");
let hour11Text = $("#hour11");
let hour12Text = $("#hour12");
let hour13Text = $("#hour13");
let hour14Text = $("#hour14");
let hour15Text = $("#hour15");
let hour16Text = $("#hour16");
let hour17Text = $("#hour17");
let hour18Text = $("#hour18");

let today = moment();

let todaysDate = $("<p>").text(today.format("dddd, MMMM Do, YYYY"));
$("#todaysDate").append(todaysDate);
$("#todaysDate").css("font-weight", "bolder");

// Gets text from local storage and displays in rows (first 3 for now)
for (let i = 8; i < 19; i++) {

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

$( ".saveButton12" ).on( "click", function() {

    localStorage.setItem("12:00", hour12Text.val());
                
    alert( "hello!" );
    });

$( ".saveButton13" ).on( "click", function() {
        
    localStorage.setItem("13:00", hour13Text.val());
        
    alert( "hello!" );
    });
        
$( ".saveButton14" ).on( "click", function() {
                
    localStorage.setItem("14:00", hour14Text.val());
            
    alert( "hello!" );
    });
        
$( ".saveButton15" ).on( "click", function() {
        
    localStorage.setItem("15:00", hour15Text.val());
                
    alert( "hello!" );
    });
        
$( ".saveButton16" ).on( "click", function() {
        
    localStorage.setItem("16:00", hour16Text.val());
                    
    alert( "hello!" );
    });
        
$( ".saveButton17" ).on( "click", function() {
        
        localStorage.setItem("17:00", hour17Text.val());
                        
    alert( "hello!" );
    });

$( ".saveButton18" ).on( "click", function() {
        
    localStorage.setItem("18:00", hour18Text.val());
                        
alert( "hello!" );
});

// Checks if the current hour matches and changes text red

for (let i = 8; i < 19; i++) {

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
