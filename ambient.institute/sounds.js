
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
    "playing": "A forest sings",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 1,
    "sound": "home",
    "file": "loop_home.wav",
    "text": "Home, not unfar",
    "playing": "Home is calling",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 2,
    "sound": "morning",
    "file": "loop_morning.wav",
    "text": "A morning, rising",
    "playing": "A morning rises",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 3,
    "sound": "piano",
    "file": "loop_piano.wav",
    "text": "A piano, untouched",
    "playing": "A piano alone",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 4,
    "sound": "quiet",
    "file": "loop_quiet.wav",
    "text": "A world, patient",
    "playing": "A world so whole",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 5,
    "sound": "harp",
    "file": "loop_harp.wav",
    "text": "Strings, glistening",
    "playing": "Strings, in action",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 6,
    "sound": "sparrow",
    "file": "loop_sparrow.wav",
    "text": "Sparrow, perching",
    "playing": "Sparrow, needing",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 7,
    "sound": "ensemble",
    "file": "loop_strings.wav",
    "text": "An ensemble, undirected",
    "playing": "An ensemble in unison",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 8,
    "sound": "crystal",
    "file": "loop_crystal.wav",
    "text": "A shimmering, unwitnessed",
    "playing": "A shimmering, blessed",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 9,
    "sound": "numb",
    "file": "loop_numb.wav",
    "text": "A numbness, untended",
    "playing": "A lightness held together",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 10,
    "sound": "rain",
    "file": "loop_rain.wav",
    "text": "A rain, overcast",
    "playing": "A rain finding bodies",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 11,
    "sound": "crackle",
    "file": "loop_crackle.wav",
    "text": "A fire, last breaths",
    "playing": "A fire quietly roars",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 12,
    "sound": "clock",
    "file": "loop_clock.wav",
    "text": "A ticking, unwound",
    "playing": "A ticking, presents time",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 13,
    "sound": "attack",
    "file": "loop_attack.wav",
    "text": "A depth, made shallow",
    "playing": "A depth, penetrating",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 14,
    "sound": "memory",
    "file": "loop_memory.wav",
    "text": "A memory, unreached",
    "playing": "A memory unraveling",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 15,
    "sound": "viola",
    "file": "loop_viola.wav",
    "text": "A viola, withering",
    "playing": "A viola, ascending",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 16,
    "sound": "droplet",
    "file": "loop_droplet.wav",
    "text": "A wave, unwashed",
    "playing": "A wave, calling",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  },{
    "i": 17,
    "sound": "pianokeys",
    "file": "loop_pianokeys.wav",
    "text": "An improvisation, unacted",
    "playing": "An improvisation in force",
    "active": false,
    "rate": 1,
    "volume": 0.5,
    "pitchControl": false
  }
]


$(document).ready(function () {
  
  sounds.forEach(function (s) {
    console.log(s);
    
    // get values, if any

    $(`<div class='sound' i='`+ s.i +`' name='` + s.sound +`'>
  <div class="wrapper">
    <button volume control='soft'>.</button> <button playback control='slow'>–</button>
  <span text>` + s.text + `</span>
    <button playback control='speed'>+</button><button volume control='loud'>...</button> 
  <button pitch>♪</button>
      <audio loop src='sounds/` + s.file +`'></audio>
      </div></div>`)
      .appendTo("#sounds");
    
    
    if ( (s.sound + ".volume") in localStorage){
      $(".sound[name='" + s.sound + "'] audio")[0].volume = localStorage.getItem(s.sound + ".volume");
      sounds[s.i].volume = localStorage.getItem(s.sound + ".volume");
     $(".sound[name='" + s.sound + "'] span[text]").css("opacity",sounds[s.i].volume / 2);
    } else{
      $(".sound[name='" + s.sound + "'] audio")[0].volume = 0.5; // default
    }
    
    if ( (s.sound + ".rate") in localStorage){
      $(".sound[name='" + s.sound + "'] audio")[0].playbackRate = localStorage.getItem(s.sound + ".rate");
    }
    
    if ( localStorage.getItem((s.sound + ".active")) == "true"){
      console.log("active");
      $(".sound[name='" + s.sound + "'] audio")[0].play();
      $(".sound[name='" + s.sound + "']").attr("playing", "");
    }
    
    if ( localStorage.getItem((s.sound + ".pitchControl")) == "false"){
      console.log("active");
      
      $(".sound[name='" + s.sound + "'] audio")[0].pitchControl = false;
      $(".sound[name='" + s.sound + "']  button[pitch]").attr("off", "");
      sounds[s.i].pitchControl = false;
    }
    

  });
});

          
// PLAY/PAUSE

$("#sounds").on("click", ".sound span[text]", function(){
    
  let sound = $(this).parent().parent().attr("name");
  let i = $(this).parent().parent().attr("i");
    
  sounds[i].active = sounds[i].active ? false : true;
  
  localStorage.setItem( (sound + ".active"), sounds[i].active);
  toggleSound(n, i, sounds[i].active);
  socket.emit('toggleSound', sound, i, sounds[i].active);
  
});

socket.on('toggleSound', function(sound, i) { toggleSound(sound, i) });

function toggleSound(sound, i, state){
  
  if(state){
    $(".sound[name='" + sound + "'] audio")[0].play();
    $(".sound[name='" + sound + "']").attr("playing", "");
    $(".sound[name='" + sound + "'] span[text]").html( sounds[i].playing );
      sounds[i].active = true;
  } else{ 
    $(".sound[name='" + sound + "'] audio")[0].pause();
    $(".sound[name='" + sound + "']").removeAttr("playing");
    $(".sound[name='" + sound + "'] span[text]").html( sounds[i].text );
  }
  
}

$("#sounds").on("click", ".sound button[playback]", function(){
  
  let n = $(this).parent().parent().attr("name");
    let i = $(this).parent().parent().attr("i");
  
  let rate = $(".sound[name='" + n + "'] audio")[0].playbackRate;
  
  console.log(n, rate);
  
  adjustPlayback(n, i, rate);
  
//  if( $(this).attr("control") == "slow" ){
//    $(".sound[name='" + n + "'] audio")[0].playbackRate = (rate - 0.08);
//     $(".sound[name='" + n + "'] span[text]").css("opacity", (rate - 0.08)/ 2);
//    
//  } else{
//    $(".sound[name='" + n + "'] audio")[0].playbackRate = (rate + 0.08);
//     $(".sound[name='" + n + "'] span[text]").css("opacity", (rate + 0.08)/ 2);
//  }
//  
//  sounds[i].rate = $(".sound[name='" + n + "'] audio")[0].playbackRate;
//  localStorage.setItem( (n + ".rate"), sounds[i].rate);
  
});

function adjustPlayback(sound, i, rate){

  if( $("#sounds .sound[name='" + sound + "'] button[playback]").attr("control") == "slow" ){
    $(".sound[name='" + sound + "'] audio")[0].playbackRate = (rate - 0.08);
     $(".sound[name='" + sound + "'] span[text]").css("opacity", (rate - 0.08)/ 2);
    
  } else{
    $(".sound[name='" + sound + "'] audio")[0].playbackRate = (rate + 0.08);
     $(".sound[name='" + sound + "'] span[text]").css("opacity", (rate + 0.08)/ 2);
  }
  
  sounds[i].rate = $(".sound[name='" + n + "'] audio")[0].playbackRate;
  localStorage.setItem( (sound + ".rate"), sounds[i].rate);
  
}

$("#sounds").on("click", ".sound button[volume]", function(){
  
  let n = $(this).parent().parent().attr("name");
  let i = $(this).parent().parent().attr("i");
  let rate = sounds[i].volume;
  
  console.log(n, rate);
  
  adjustVolume(n, i, rate);
//  
//  if( $(this).attr("control") == "soft" ){
//    $(".sound[name='" + n + "'] audio")[0].volume = (rate - 0.08);
//  } else{
//    $(".sound[name='" + n + "'] audio")[0].volume = (rate + 0.08);
//  }
//  
//  sounds[i].volume = $(".sound[name='" + n + "'] audio")[0].volume;
//  localStorage.setItem(n + ".volume", sounds[i].volume);
});

function adjustVolume(sound, i, rate){

  if( $("#sounds .sound[name='" + sound + "'] button[volume]").attr("control") == "soft" ){
    $(".sound[name='" + sound + "'] audio")[0].volume = (rate - 0.08);
  } else{
    $(".sound[name='" + sound + "'] audio")[0].volume = (rate + 0.08);
  }
  
  sounds[i].volume = $(".sound[name='" + sound + "'] audio")[0].volume;
  localStorage.setItem(sound + ".volume", sounds[i].volume);
}

$("#sounds").on("click", ".sound button[pitch]", function(){
  
  let n = $(this).parent().parent().attr("name");
  let i = $(this).parent().parent().attr("i");
  
  socket.emit('adjustPitch', i);
  adjustPitch(n, i);
  
//  if( $(this).is("[off]")){
//     $(".sound[name='" + n + "'] audio")[0].preservesPitch = true;
//     $(this).removeAttr("off");
//    sounds[i].pitchControl = true;
//    
//  } else{
//     $(".sound[name='" + n + "'] audio")[0].preservesPitch = false;
//     $(this).attr("off", "");
//    sounds[i].pitchControl = false;
//  }
//  
//  localStorage.setItem(n + ".pitchControl", sounds[i].pitchControl);
//  
  
});


function adjustPitch(sound, i){
  if( $("#sounds .sound[name='" + sound + "'] button[pitch]").is("[off]")){
     $(".sound[name='" + sound + "'] audio")[0].preservesPitch = true;
     $(this).removeAttr("off");
    sounds[i].pitchControl = true;
    
  } else{
     $(".sound[name='" + n + "'] audio")[0].preservesPitch = false;
     $(this).attr("off", "");
    sounds[i].pitchControl = false;
  }
  
  localStorage.setItem(sound + ".pitchControl", sounds[i].pitchControl);
}



