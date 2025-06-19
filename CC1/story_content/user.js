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
window.Script3 = function()
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

window.Script4 = function()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
script.type = 'text/javascript';
head.appendChild(script)
}

window.Script5 = function()
{
  var player = GetPlayer();
 
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyO3wwN8qFKDqjT53AOkk9q0oC4-_Q0Au_-F0d5lPV8PjlnwzcQDmt2Z1Q0_k6DLuI2/exec";

storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "TimeElapsed" : player.GetVar("TimeElapsed"),
 "Retry" : player.GetVar("Retry"),
 "RetryAttempts" : player.GetVar("RetryAttempts"),
 "KnowledgeCheckScore" : player.GetVar("KnowledgeCheckScore"),
 "CourseNumber" : player.GetVar("CourseNumber"),
 "KC1" : player.GetVar("KC1"),
 "KC2" : player.GetVar("KC2"),
 "KC3" : player.GetVar("KC3"),
 "KC4" : player.GetVar("KC4"),
 "KC5" : player.GetVar("KC5"),
 "KC6" : player.GetVar("KC6"),
 "KC7" : player.GetVar("KC7"),
 "KC8" : player.GetVar("KC8"),
 "KC9" : player.GetVar("KC9"),
 "KC10" : player.GetVar("KC10"),
 "KC11" : player.GetVar("KC11")
}

}

window.Script6 = function()
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
