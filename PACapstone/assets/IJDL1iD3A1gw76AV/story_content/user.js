window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();

// Putting it together
let dateString = month + "/" + day + "/" + year;

//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("todaysDate", dateString);
}

window.Script2 = function()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
script.type = 'text/javascript';
head.appendChild(script)
}

window.Script3 = function()
{
  var player = GetPlayer();
 
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwrY_HneS4EDV2ZdnAfRAJPvPbMKkdWNQDS-7lcuZtJ9UHdeVWNPUxp0ILBBDEBh6Xj/exec";

storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "TimeElapsed" : player.GetVar("TimeElapsed"),
 "KC01" : player.GetVar("KC01"),
 "KC02" : player.GetVar("KC02"),
 "KC03" : player.GetVar("KC03"),
 "KC04" : player.GetVar("KC04"),
 "KC05" : player.GetVar("KC05"),
 "KC06" : player.GetVar("KC06"),
 "KC07" : player.GetVar("KC07"),
 "KC08" : player.GetVar("KC08"),
 "KC09" : player.GetVar("KC09"),
 "KC10" : player.GetVar("KC10"),
 "KC11" : player.GetVar("KC11"),
 "KC12" : player.GetVar("KC12"),
 "KC13" : player.GetVar("KC13"),
 "KC14" : player.GetVar("KC14"),
 "KC15" : player.GetVar("KC15"),
 "KC16" : player.GetVar("KC16"),
 "KC17" : player.GetVar("KC17"),
 "KC18" : player.GetVar("KC18"),
 "KC19" : player.GetVar("KC19"),
 "KC20" : player.GetVar("KC20"),
 "KC21" : player.GetVar("KC21"),
 "KC22" : player.GetVar("KC22"),
 "KC23" : player.GetVar("KC23"),
 "KC24" : player.GetVar("KC24"),
 "KC25" : player.GetVar("KC25"),
 "KC26" : player.GetVar("KC26"),
 "KC27" : player.GetVar("KC27"),
 "KC28" : player.GetVar("KC28"),
 "KC29" : player.GetVar("KC29"),
 "KC30" : player.GetVar("KC30"),
 "KC31" : player.GetVar("KC31"),
 "KC32" : player.GetVar("KC32"),
 "KC33" : player.GetVar("KC33"),
 "KC34" : player.GetVar("KC34"),
 "KC35" : player.GetVar("KC35"),
 "Retry" : player.GetVar("Retry"),
 "RetryAttempts" : player.GetVar("RetryAttempts"),
 "QuizScorePercent" : player.GetVar("QuizScorePercent"),
 "ProgramName" : player.GetVar("ProgramName")
}

}

window.Script4 = function()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

};
