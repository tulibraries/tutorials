window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
script.type = 'text/javascript';
head.appendChild(script)
}

window.Script2 = function()
{
  var player = GetPlayer();
 
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxow2psC5I0HClbLNum8tOSOqSt9KEzRUxZfHmcqKojC1BgJ_MEDmXgOM2-fjW7Ygg4/exec";

storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "TutorialName" : player.GetVar("TutorialName"),
 "TimeElapsed" : player.GetVar("TimeElapsed"),
 "NewKnowledge" : player.GetVar("NewKnowledge"),
 "DesiredTopics" : player.GetVar("DesiredTopics"),
 "MaterialCovered" : player.GetVar("MaterialCovered"),
 "TutorialPace" : player.GetVar("TutorialPace"),
 "TechIssues" : player.GetVar("TechIssues"),
 "GenComments" : player.GetVar("GenComments")
}

}

window.Script3 = function()
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
