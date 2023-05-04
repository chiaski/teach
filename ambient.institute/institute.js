console.log("hi");


$(".institute-index .wrapper a").on("mouseover", function(){
  
  if( !$(this).is("[name]") ) return;
  
  
  let n = $(this).attr("name");
  
  console.log(n);
  
  $(".institute-map .room").removeAttr("active");
  $(".institute-map .room[name='" + n +"']").attr("active", "");
  
  
}).on("mouseout", function(){
  
  let n = $("#institute").attr("active");
  
  $(".institute-map .room").removeAttr("active");
  $(".institute-map .room[name='" + n +"']").attr("active", "");
  
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

  $.getJSON("https://opensheet.elk.sh/1duW1V3VfMU92-zHApZnCZvpSNy9wyM79kFk95zrxJ18/1", function (data) {

    data.forEach(function (row, i) {
      
      console.log(row);
      
      $(`<a href="` + row.link +`" target="_blank" link>
        <div class="row">
          <span name>` + row.name +`</span>
          <span desc>` + row.desc +`</span>
          <span keywords>` + row.keywords +`</span>
          <span type>` + row.type +`</span>
          <span year>` + row.year +`</span>
        </div>
        </a>`)
        .appendTo("#index .wrapper");
      
    })
    
  })
  
});