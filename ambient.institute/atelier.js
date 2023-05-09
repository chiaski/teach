const sfx = {
  sfx_div: "#audio_sfx",
  play: function (what, where) {
    const d = where ? where : sfx.sfx_div;

    $(d).attr("src", what);
    $(d)[0].play();
    
  }
};


$(document).ready(function () {
  
  $.getJSON("https://opensheet.elk.sh/1duW1V3VfMU92-zHApZnCZvpSNy9wyM79kFk95zrxJ18/Atelier", function (data) {

    data.forEach(function (row, i) {
      
      console.log(row);
      
      let _sketch = "";
      
      if(row.type == "sketch" && row.image){
        _sketch = `<div class="-sketch"><img src="atelier/` + row.image +`">`
      }
      
      let item = $(`<a link="` + row.link +`" target="_blank">
        <div class="note" folded ` + row.type + `><div class="w">
          ` + _sketch + `
          <span name>` + row.name +`</span>
          <span desc>` + row.desc +`</span>
          <span release>` + row.release +`</span>
        </div></div>
        </a>`);
      
    $(item).appendTo("#atelier .notes");
      
      $(`<a>
          <span name>` + row.name +`</span>
        </a>`)
        .appendTo("#atelier .notes-list");
      
    })

  })
  
  $(".notes").on("click", "a", function(){
    
    if(!$(this).find(".note").is("[folded]")){
      return;
    }
    
    sfx.play("./sounds/unwrap-min.wav");
    $(this).find(".note").removeAttr("folded");
    
    $(this).attr("href", $(this).attr("link"));
event.preventDefault();
    
  });
  
});