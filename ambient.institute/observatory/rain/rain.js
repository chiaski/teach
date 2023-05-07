Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const RAIN_STAGE = ["|", "'", "|", "'", "|", "\\/"];

$(document).click(function(){
  sfx.play("rain.wav", "#audio_bgm");
  
})

$( document ).ready(function() {
  
  
  console.log("it's raining...");
  
  $(" #bg *[rain]").each(function(i, e){
    
    $(e)
        .css("top", getRandomIntInclusive(30,700) + "px")
        .css("left", getRandomIntInclusive(5,95) + "%")
      .attr("cycles", getRandomIntInclusive(100,300))
      .attr("c", 0);
   
     if(getRandomIntInclusive(1,5) == 1){
    $(e)
      .attr("cycles", getRandomIntInclusive(300,600))
     }
    
//     if(getRandomIntInclusive(1,2) == 1){
//    $(e)
//      .attr("cycles", getRandomIntInclusive(9,23))
//        .css("top", getRandomIntInclusive(30,200) + "px");
//       
//     }
    // maybe add a delay
    if(getRandomIntInclusive(1,2) == 1){
      $(e).attr("delay", getRandomIntInclusive(0,4))
    }
    
  });
  
  
  const rainInterval = setInterval(rain, 380);
  const addInterval = setInterval(addRain, 1600);
  
  function addRain(){
    
    for(let i = 0; i < getRandomIntInclusive(15,40); i++){
      
      $(`<span rain></span>`)
         .css("top", getRandomIntInclusive(0,200) + "px")
        .css("left", getRandomIntInclusive(5,95) + "%")
      .attr("cycles", getRandomIntInclusive(40,100))
      .attr("c", 0)
      .appendTo("#bg");
      
    }
    
  }
  
  function rain(){    
$(" #bg *[rain]").each(function(i, e){
  
  
  let s = parseInt($(e).attr("c"));
  let _cycles = $(e).attr("cycles");
  let _delay = $(e).attr("delay");
  
  if( $(e).is("[restart]") ){
    $(e)
      .html("__")
      .attr("delay", getRandomIntInclusive(6,20))
      .removeAttr("restart")
      .attr("c", 0)
    return;
  }
  
  if(_delay >= 0){
    $(e).attr("delay", _delay - 1);
    return;
  }
  
  if(s == 0){
    $(e).css("transform", "none");
  }
  
  
  if(s <= _cycles){
    if(s % 2 === 0){
      $(e).html("|")
      .css("padding-left", ".05em");
    } else{
    $(e)
      .html("'")
      .css("padding-left", ".1em");
    }    $(e).css("transform", "translateY(" + s*12  +"px)")
    .attr("c", parseInt(s + 1));
    
    return;
  }
  
  // end
  
  $(e)
    .html("\\/")
    .css("transform", "translateX(-3px) translateY(" + s*12.2  +"px)")
    .attr("restart", "")
    .remove();
  
});
    
    
  }
  
  
  
});


let SAVE;
//                        
//$("#bg").on("hover", "a",  function(){
//  
//  console.log($(this).attr("href"));
//
//  SAVE = $("#caption").html();
//  $("#caption").html("( " + $(this).attr("href") +" )");
//  
//}, function(){
// 
//  $("#caption").html(SAVE);
//  
//});
                 
$("a[act='umbrella']").click(function(){
  
  sfx.play("umbrella.wav");
  
  setTimeout(function(){
  $("*").css("cursor", "grab");
  $("#umbrella").fadeIn();
  $("a[act='umbrella']").html(`<u>(</u> CLOSE UMBRELLA  <u>)</u>`);
    
  }, 1200);
  
  
});     

$("#bg").on("mouseenter", "a",  function(){
  console.log($(this).attr("href"));

  SAVE = $("#caption").html();
  $("#caption").html("( " + $(this).attr("href") +" )");
  
});
$("#bg").on("mouseleave", "a",  function(){
  $("#caption").html(SAVE);
  
});


var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

var $loop = setInterval(function(){
// change 12 to alter damping higher is slower
$xp += (($mouseX - $xp)/8);
$yp += (($mouseY - $yp)/18);
$("#umbrella").css({left:$xp +'px', top:$yp +'px'});  
}, 6);



const sfx = {
  sfx_div: "#audio_sfx",
  play: function (what, where) {
    const d = where ? where : sfx.sfx_div;

    $(d).attr("src", what);
    $(d)[0].play();
    
  }
};
