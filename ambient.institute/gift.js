const sfx = {
  sfx_div: "#audio_sfx",
  play: function (what, where) {
    const d = where ? where : sfx.sfx_div;

    $(d).attr("src", what);
    $(d)[0].play();
    
  }
};


$(document).ready(function () {
  
  $.getJSON("https://opensheet.elk.sh/1duW1V3VfMU92-zHApZnCZvpSNy9wyM79kFk95zrxJ18/Gifts", function (data) {

    data.forEach(function (row, i) {
      
      console.log(row);
      
      $(`<a link="` + row.link +`" target="_blank">
        <div class="gift"><div class="w">
          <span name>` + row.name +`</span>
          <span desc>` + row.desc +`</span>
          <span release>` + row.release +`</span>
        </div></div>
        </a>`)
        .appendTo("#shop .gifts");
      
    })

  })
  
  $(".gifts").on("click", "a", function(){
    
    if($(this).find(".gift").is("[opened]")){
      return;
    }
    
    sfx.play("./sounds/unwrap-min.wav");
    $(this).find(".gift").attr("opened", "");
    
    $(this).attr("href", $(this).attr("link"));
event.preventDefault();
    
  });
  
});