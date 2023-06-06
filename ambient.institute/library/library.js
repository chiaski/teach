

$(document).ready(function () {
  
  $(".filter-wrapper").on("click", "a", function(){
    
  if( !$(this).is("[type]") ) return;
  
    let n = $(this).attr("type");
    
    $(".filter-wrapper a").css("opacity", 0.4);
    $(this).css("opacity", 1);
    
    $(".filter-wrapper a").attr("hide", "");
    $(this).removeAttr("hide");
    
    if( n == "all"){
       $("#index[library] .wrapper a").removeAttr("hide");
      return;
    }
    
    if( n == "loved"){
      $("#index[library] .wrapper a").attr("hide", "");

      $("#index[library] .wrapper a").each(function(){
        if( $(this).is("[loved]") ){
          $(this).removeAttr("hide");
        }
      });

      return;
    }
    
    $("#index[library] .wrapper a").attr("hide", "");
    
    $("#index[library] .wrapper a").each(function(){
      if( $(this).find("span[type]").html() == n ){
        $(this).removeAttr("hide");
      }
    });
    
//    $("#index span[type]").html();
    
  });
  
  $("#index .wrapper").on("mouseover", "a", function(){
    if( $(this).attr("img") ){
      $("#img").attr("custom", "");
      $("#img").css("background-image", "url('i/" + $(this).attr("img") +"')");
      
    } else{
      $("#img").removeAttr("custom");
      $("#img").css("background-image", "url('../assets/transparency.png')")
    }
  });

  $.getJSON("https://opensheet.elk.sh/1duW1V3VfMU92-zHApZnCZvpSNy9wyM79kFk95zrxJ18/Library", function (data) {

    data.forEach(function (row, i) {
      
      console.log(row);
      
      let _loved = _desc = _soon = _img = _link = _thankyou = " ";
      
      if(row.loved == "TRUE"){
        _loved = "loved";
      }
      
      if(row.year == "Soon"){
        _soon = "soon";
      }
      
      if(row.img && row.img.length > 0){
        _img = "img='" + row.img +"'";
      }
      
      if(row.link && row.link.length > 0){
        _link = `href='` + row.link + `' target='_blank' `;
      }
      
      if(row.thankyou && row.thankyou.length > 0){ _thankyou = row.thankyou; }
      if(row.desc && row.desc.length > 0){ _desc = row.desc; }
      
      $(`<a ` + _link + ` link ` + _loved + ` ` + _soon + ` ` + _img + `>
        <div class="row">
          <span type  sort='type'>` + row.type +`</span>
          <span name  sort='name'>` + row.name +`</span>
          <span desc  sort='desc'>` + _desc +`</span>
          <span institution  sort='institution'>` + row.for +`</span>
          <span thankyou  sort='thankyou'>` + _thankyou +`</span>
          <span location  sort='location'>` + row.location +`</span>
          <span keywords  sort='keywords'>` + row.keywords +`</span>
          <span year  sort='year'>` + row.year +`</span>
        </div>
        </a>`)
        .appendTo("#index[library] .wrapper");
      
//      $(`<span book>
//          <span b>` + row.name +`</span>
//        </span book>`)
//        .appendTo("#index[library] .library .w");
//      
    })

  })
  
  $.getJSON("https://opensheet.elk.sh/1duW1V3VfMU92-zHApZnCZvpSNy9wyM79kFk95zrxJ18/References", function (data) {

    data.forEach(function (row, i) {
      
      console.log(row);
      
      $(`<a href="` + row.link +`" target="_blank" link>
        <div class="row">
          <span name sort='name'>` + row.name +`</span>
          <span by sort='by'>` + row.by +`</span>
          <span keywords sort='keywords'>` + row.keywords +`</span>
          <span desc sort='desc'>` + row.notes +`</span>
          <span type sort='type'>` + row.type +`</span>
        </div>
        </a>`)
        .appendTo("#index[references] .wrapper");
      
    })

  })
  
  
  $('#index[library] div[header] span').click(function () {

    let by = $(this).attr("f");

    divArr = $("#index[library] .wrapper a")
    
    divArr.sort(function (a, b) {
      return $(a).find("span[sort='" + by + "']").text() > $(b).find("span[sort='" + by + "']").text() ? 1 : -1;
    })

    $("#index[library]  .wrapper").html(divArr)

  })

  
});