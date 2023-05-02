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