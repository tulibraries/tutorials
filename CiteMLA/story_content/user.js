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
window.Script1 = function()
{
  var number=Math.floor(Math.random()*10);
GetPlayer().SetVar("RandNum",number);
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
 
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyicKTWqMY0fu0DesPXMGW5QdtcwBYbihXWnTaU4gae8lf8VL6kz54qGCzOxCfjkFSy/exec";

storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "TimeElapsed" : player.GetVar("TimeElapsed"),
 "PracticeCompleted" : player.GetVar("PracticeCompleted"),
 "Skip" : player.GetVar("Skip"),
 "PopSciIncorrect" : player.GetVar("PopSciIncorrect"),
 "CitationsOverviewLink" : player.GetVar("CitationsOverviewLink"),
 "KC1" : player.GetVar("KC1"),
 "KC2" : player.GetVar("KC2"),
 "KC3" : player.GetVar("KC3"),
 "Score" : player.GetVar("Score")
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

window.Script5 = function()
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

window.Script6 = function()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
script.type = 'text/javascript';
head.appendChild(script)
}

window.Script7 = function()
{
  var player = GetPlayer();
 
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzPRY1FWk8g6xm_Ltj6a4ny_bmAUaQkfY32kGR33LHuKBSyVSA5tRsUADeAe1f3DKWMVw/exec";

storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "TimeElapsed" : player.GetVar("TimeElapsed"),
 "TutorialName" : player.GetVar("TutorialName"),
 "CourseNumber" : player.GetVar("CourseNumber"),
 "KC1" : player.GetVar("KC1"),
 "KC2" : player.GetVar("KC2"),
 "KC3" : player.GetVar("KC3"),
 "KC4" : player.GetVar("KC4")
}

}

window.Script8 = function()
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

window.Script9 = function()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
script.type = 'text/javascript';
head.appendChild(script)
}

window.Script10 = function()
{
  var player = GetPlayer();
 
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyicKTWqMY0fu0DesPXMGW5QdtcwBYbihXWnTaU4gae8lf8VL6kz54qGCzOxCfjkFSy/exec";

storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "TimeElapsed" : player.GetVar("TimeElapsed"),
 "PracticeCompleted" : player.GetVar("PracticeCompleted"),
 "Skip" : player.GetVar("Skip"),
 "PopSciIncorrect" : player.GetVar("PopSciIncorrect"),
 "CitationsOverviewLink" : player.GetVar("CitationsOverviewLink"),
 "KC1" : player.GetVar("KC1"),
 "KC2" : player.GetVar("KC2"),
 "KC3" : player.GetVar("KC3"),
 "Score" : player.GetVar("Score")
}

}

window.Script11 = function()
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
