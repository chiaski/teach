
// sound
const sfx = {
  sfx_div: "#audio_sfx",
  play: function (what, where) {
    const d = where ? where : sfx.sfx_div;

    $(d).attr("src", what);
    $(d)[0].play();
  }
};

let sounds = [

  {
    "i": 0,
    "sound": "forest",
    "file": "loop_forest.wav",
    "text": "A forest, waiting",
    "playing": "A forest sings"
  },{
    "i": 1,
    "sound": "home",
    "file": "loop_home.wav",
    "text": "Home, not unfar",
    "playing": "Home is calling"
  },{
    "i": 2,
    "sound": "morning",
    "file": "loop_morning.wav",
    "text": "A morning, rising",
    "playing": "A morning rises"
  },{
    "i": 3,
    "sound": "piano",
    "file": "loop_piano.wav",
    "text": "A piano, untouched",
    "playing": "A piano alone"
  },{
    "i": 4,
    "sound": "quiet",
    "file": "loop_quiet.wav",
    "text": "A world, patient",
    "playing": "A world so whole"
  },{
    "i": 5,
    "sound": "harp",
    "file": "loop_harp.wav",
    "text": "Strings, glistening",
    "playing": "Strings, in action"
  },{
    "i": 6,
    "sound": "sparrow",
    "file": "loop_sparrow.wav",
    "text": "Sparrow, perching",
    "playing": "Sparrow, needing"
  },{
    "i": 7,
    "sound": "ensemble",
    "file": "loop_strings.wav",
    "text": "An ensemble, undirected",
    "playing": "An ensemble in unison"
  },{
    "i": 8,
    "sound": "crystal",
    "file": "loop_crystal.wav",
    "text": "A shimmering, unwitnessed",
    "playing": "A shimmering, blessed"
  },{
    "i": 9,
    "sound": "numb",
    "file": "loop_numb.wav",
    "text": "A numbness, untended",
    "playing": "A lightness held together"
  },{
    "i": 10,
    "sound": "rain",
    "file": "loop_rain.wav",
    "text": "A rain, overcast",
    "playing": "A rain finding bodies"
  },{
    "i": 11,
    "sound": "crackle",
    "file": "loop_crackle.wav",
    "text": "A fire, last breaths",
    "playing": "A fire quietly roars"
  },{
    "i": 12,
    "sound": "clock",
    "file": "loop_clock.wav",
    "text": "A ticking, unwound",
    "playing": "A ticking, presents time"
  },{
    "i": 13,
    "sound": "attack",
    "file": "loop_attack.wav",
    "text": "A depth, made shallow",
    "playing": "A depth, penetrating"
  },{
    "i": 14,
    "sound": "memory",
    "file": "loop_memory.wav",
    "text": "A memory, unreached",
    "playing": "A memory unraveling"
  }
]

sounds.forEach(function (s) {
  console.log(s);
  
  $(`<div class='sound' i='`+ s.i +`' name='` + s.sound +`'>
<div class="wrapper">
  <button playback control='slow'>–</button>
<span text>` + s.text + `</span>
  <button playback control='speed'>+</button>
<button pitch>♪</button>
    <audio loop src='sounds/` + s.file +`'></audio>
    </div></div>`)
    .appendTo("#sounds");
  
});


$("#sounds").on("click", ".sound span[text]", function(){
    
    let n = $(this).parent().parent().attr("name");
    let i = $(this).parent().parent().attr("i");
    
    if( $(".sound[name='" + n + "']").is("[playing]") ){
      $(".sound[name='" + n + "'] audio")[0].pause();
      $(".sound[name='" + n + "']").removeAttr("playing");
      $(".sound[name='" + n + "'] span[text]").html( sounds[i].text );
    }else{
      $(".sound[name='" + n + "']").attr("playing", "");
      $(".sound[name='" + n + "'] audio")[0].play();
      $(".sound[name='" + n + "'] span[text]").html( sounds[i].playing );
    }
    
  
});
$("#sounds").on("click", ".sound button[playback]", function(){
  
  let n = $(this).parent().parent().attr("name");
  
  let rate = $(".sound[name='" + n + "'] audio")[0].playbackRate;
  
  console.log(n, rate);
  
  if( $(this).attr("control") == "slow" ){
    $(".sound[name='" + n + "'] audio")[0].playbackRate = (rate - 0.08);
     $(".sound[name='" + n + "'] span[text]").css("opacity", (rate - 0.08)/ 1.8);
  } else{
    $(".sound[name='" + n + "'] audio")[0].playbackRate = (rate + 0.08);
     $(".sound[name='" + n + "'] span[text]").css("opacity", (rate + 0.08)/ 1.8);
    
  }
  
});

$("#sounds").on("click", ".sound button[pitch]", function(){
  
  let n = $(this).parent().parent().attr("name");
  
  
  if( $(this).is("[off]")){
    
     $(".sound[name='" + n + "'] audio")[0].preservesPitch = true;
     $(this).removeAttr("off");
    
  } else{
    
     $(".sound[name='" + n + "'] audio")[0].preservesPitch = false;
     $(this).attr("off", "");
    
  }
  
});