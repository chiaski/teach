let i = 0;

document.onkeydown = function(e) {
  console.log(".");
    switch(e.which) {
        case 37: // left
        i--;
        break;

        case 38: // up
        break;

        case 39: // right
        i++;
        break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault();
  
  console.log(i);
  
    $("#words .b").hide();
    $("#words .b").eq(i).show();
   $("#slide").val(i);
};


$( "#slide" ).on( "keyup", function() {
  i = $("#slide").val();
    $("#words .b").hide();
    $("#words .b").eq(i).show();
} );