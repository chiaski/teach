$(document).ready(function () {
  
  $("#caption").hide();
  
  setTimeout(function(){
    $(".screenwipe").css("animation", "none").hide();
    
    $("#caption").fadeIn(2500);
    
  $(document).click(function(){
    console.log("Clicked!");
     $(".screenwipe").fadeIn().css("width", "0px");
    $(".screenwipe").css("animation", "wipe 1.25s ease-in-out .1s forwards normal");
    
    
  setTimeout(function(){
    window.location.href = "foyer.html"; // navigate out
  }, 1500);
    
  });
  }, 2700);

  
  
});