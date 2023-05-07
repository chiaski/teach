var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'gLfKoWNF4Z0', // default
    playerVars: {
      'playsinline': 1,
      'modestbranding': 1,
      'fs': 0,
      'rel': 0,
      'autoplay': 1,
      'showinfo': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}


$(document).ready(function () {

  $.getJSON("https://opensheet.elk.sh/1duW1V3VfMU92-zHApZnCZvpSNy9wyM79kFk95zrxJ18/Theater", function (data) {

    data.forEach(function (row, i) {

      $(`<div class="card" url="` + row.youtubeId + `">
          <span card>` + row.card + `</span>
          <span name>` + row.name + `</span>
        </span>`)
        .appendTo(".films .w");

    })
  });



  $(".films").on("mouseover", ".card", function () {

    if (!$(this).is("[url]")) return;

    let n = $(this).attr("url");
    let txt = $(this).find("span[name]").html();

    $(".yt-title").html(txt);
    $("#player")
      .css("filter", "blur(5px)")
      .css("opacity", 0.1);


  }).on("mouseout", function () {

    $("#player")
      .css("filter", "blur(0)")
      .css("opacity", 1);
    

  });
  
  $(".films").on("click", ".card", function(){
    
    if (!$(this).is("[url]")) return;

    let n = $(this).attr("url");
    
    player.loadVideoById(n);
    
    $("#player")
      .css("filter", "blur(0)")
      .css("opacity", 1);
    
    
  });
  
  
  $("#caption").on("click", "a[act='lights']", function(){
    
    let on = $("#lights").attr("lights");
    
    if(on == "on"){
      $("a, p, body, #navi, #caption, .room, span, h1").attr("lights", "off");
      $("a[act='lights']").html("Lights on");
      $("#lights").attr("lights", "off");
    }
    
    if(on == "off"){
      
      $("a, p, body, #navi, #caption, .room, span, h1").removeAttr("lights");
      $("a[act='lights']").html("Lights out");
      $("#lights").attr("lights", "on");
      
      
    }
    
  });


});
