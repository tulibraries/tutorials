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
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
script.type = 'text/javascript';
head.appendChild(script)
}

window.Script2 = function()
{
  var player = GetPlayer();
 
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwWjakAOrCy9h2RHn5c1FKgzl_A4mmDueFuo9Jqm7q6kW61rDgYXdYIfDftUlDlpHk-/exec";

storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "TimeElapsed" : player.GetVar("TimeElapsed"),
 "Recap" : player.GetVar("Recap"),
 "recap_Timeline" : player.GetVar("recap_Timeline"),
 "recap_Sources" : player.GetVar("recap_Sources"),
 "recap_Databases" : player.GetVar("recap_Databases"),
 "topic_KC" : player.GetVar("topic_KC"),
 "database_KC" : player.GetVar("database_KC"),
 "GeneralTopicTextEntry1" : player.GetVar("GeneralTopicTextEntry1"),
 "AspectsTopicTextEntry" : player.GetVar("AspectsTopicTextEntry"),
 "WhoTextEntry" : player.GetVar("WhoTextEntry"),
 "WhenTextEntry" : player.GetVar("WhenTextEntry"),
 "WhereTextEntry" : player.GetVar("WhereTextEntry"),
 "blank_Activity" : player.GetVar("blank_Activity"),
 "reset_Activity" : player.GetVar("reset_Activity")
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
