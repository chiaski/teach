$.fn.randomize = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });

    return this;
};

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
      
      $("#garden .outside").removeClass("free");
      $("#garden .flowers").removeClass("free");
      
      $("#garden .flowers a").each(function(){
        $(this)
          .removeClass("free");
      });
      
    }
    
    if(filterActive == "free"){
      $("#garden .outside").addClass("free");
      $("#garden .flowers").addClass("free");
      
      $("#garden a[flower]").each(function(i){
        $(this)
          .addClass("free")
           .css("transform", "scale(" + (randInt(90,100) * 0.01) + ")")
          .css("left", randInt(0,70) + "%")
          .css("top", randInt(5,90) +  "%");
      });
    }
    
    
  });
  
  $.getJSON("https://opensheet.elk.sh/1duW1V3VfMU92-zHApZnCZvpSNy9wyM79kFk95zrxJ18/Garden", function (data) {

    data.forEach(function (row, i) {
      
      let stemHeight = randInt(30,200);
      
      $(`<a href="` + row.link +`" target="_blank" flower>
        <div class="flower" style="margin-bottom:` + (stemHeight * 0) +`px"><div class="wrapper">
          <span name>` + row.flower +`</span>
          <span year>` + row.year +`</span>
        </div>
        </div>
        <span stem style="height:` + stemHeight +`px">
        </a>`)
        .appendTo("#garden .flowers");
      
    })
    
      $("#garden .flower").each(function(){
        $(this)
          .css("transform", "scale(" + (randInt(80,100) * 0.01) + ")");
      });

  })
  
  $.getJSON("https://opensheet.elk.sh/13tpyqPKX54pTr8beNzTOYMm1Q-z3CTYxyOwjCTk0rz0/1", function (data) {

    data.forEach(function (row, i) {
      
      $(`<a href="` + row.link +`" target="_blank" flower>
        <div class="flower"><div class="wrapper">
          <span name>` + row.say +`</span>
          <span year>2023</span>
        </div>
        </div>
        <span stem style="height:` + randInt(10,60) +`px">
        </a>`)
        .prependTo("#garden .flowers");
      
    })
    
      $("#garden .flower").each(function(){
        $(this)
          .css("transform", "scale(" + (randInt(80,100) * 0.01) + ")")
      });

  })
  
  
  $("#caption").on("click", "a[act='shuffle']", function(){

    if(filterActive == "grid"){
     $("#garden .flowers a").randomize();
    }
    
    if(filterActive == "free"){
      
      $("#garden .flower").each(function(i){
        $(this)
          .addClass("free")
           .css("transform", "scale(" + (randInt(90,100) * 0.01) + ")")
          .css("left", randInt(0,70) + "%")
          .css("top", randInt(5,90) +  "%");
      });
      
    }
    
  });
  
  
});