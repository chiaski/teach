
function randInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function chance(prob) {
  return !!prob && Math.random() <= prob;
}

function pick(arr) {
  return arr[(Math.random() * arr.length) | 0]
}


console.log("hi");

$("a[map]").click(function(){
  $("#map.popup-small").fadeToggle();
});



$("#tile-map .index a").on("mouseover", function(){
  
  if( !$(this).is("[name]") ) return;
  
  let n = $(this).attr("name");
  
  console.log(n);
  
  $("#tile-map span:not([" + n +"])").css("opacity", 0.2);
  
  
}).on("mouseout", function(){
  
  let n = $("#institute").attr("active");
  $("#tile-map span").css("opacity", 1);
  
});


// https://opensheet.elk.sh/1duW1V3VfMU92-zHApZnCZvpSNy9wyM79kFk95zrxJ18/1


$(document).ready(function () {

  // handle colors
  
  $(".colors a").each(function(){
    
    $(this).css("background", $(this).attr("name"));
    
  });
  
  
  // FOYER: OUTSIDE
  
  $("#foyer .outside .window").each(function(i){
    
    $(this)
      .css("left", randInt(3,80) + "%")
      .css("top", randInt(20,200) + "px");
    
  });
  
});