$(document).ready(function () {
  
  setTimeout(function(){
    $(".screenwipe").css("animation", "none").hide();
    
  $(document).click(function(){
    console.log("Clicked!");
     $(".screenwipe").fadeIn().css("width", "0px");
    $(".screenwipe").css("animation", "wipe 1.25s ease-in-out .1s forwards normal");
    
    
  setTimeout(function(){
    // navigate out
  }, 1500);
    
  });
  }, 2700);

  
  
});