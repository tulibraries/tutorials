window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
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

};
