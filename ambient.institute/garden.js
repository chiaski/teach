let filterActive = "grid";
    
function randInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


$(document).ready(function () {

  // change filter
  
  
  $("#garden .filter a").click(function(){
    
    $("#garden .filter a").removeAttr("active");
    $(this).attr("active", "");
    
    filterActive = $(this).attr("name");
    
    if(filterActive == "grid"){
      $("#garden .outside").css("height", "auto");
      
      
      $("#garden .flower").each(function(){
        $(this)
          .removeClass("free");
      });
      
    }
    
    if(filterActive == "free"){
//      
      $("#garden .outside").css("height", "140vh");
      
      $("#garden .flower").each(function(i){
        $(this)
          .addClass("free")
           .css("transform", "scale(" + (randInt(90,100) * 0.01) + ")")
          .css("left", randInt(0,70) + "%")
          .css("top", randInt(5,90) +  "%");
//          .css("top", randInt(50,100) + (i* 110) + "px");
      });
    }
    
    
  });
  
  $.getJSON("https://opensheet.elk.sh/1duW1V3VfMU92-zHApZnCZvpSNy9wyM79kFk95zrxJ18/Garden", function (data) {

    data.forEach(function (row, i) {
      
      
      $(`<a href="` + row.link +`" target="_blank" link>
        <div class="flower"><div class="wrapper">
          <span name>` + row.flower +`</span>
          <span year>` + row.year +`</span>
        </div></div>
        </a>`)
        .appendTo("#garden .flowers");
      
    })
    
      $("#garden .flower").each(function(){
        $(this)
          .css("transform", "scale(" + (randInt(80,100) * 0.01) + ")")
      });

  })
  
  $.getJSON("https://opensheet.elk.sh/13tpyqPKX54pTr8beNzTOYMm1Q-z3CTYxyOwjCTk0rz0/1", function (data) {

    data.forEach(function (row, i) {
      
      
      $(`<a href="` + row.link +`" target="_blank" link>
        <div class="flower"><div class="wrapper">
          <span name>` + row.say +`</span>
          <span year>2023</span>
        </div></div>
        </a>`)
        .prependTo("#garden .flowers");
      
    })
    
      $("#garden .flower").each(function(){
        $(this)
          .css("transform", "scale(" + (randInt(80,100) * 0.01) + ")")
      });

  })
  
  
});