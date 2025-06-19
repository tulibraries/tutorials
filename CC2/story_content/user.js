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
window.Script2 = function()
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

window.Script3 = function()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
script.type = 'text/javascript';
head.appendChild(script)
}

window.Script4 = function()
{
  var player = GetPlayer();
 
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbw-FE9YTzlAhFpLPFZdU2kYvotRdRDi_FJayeAfij5URO8HmGIiDEgvKkUJF4ZpsCC9/exec";

storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "TimeElapsed" : player.GetVar("TimeElapsed"),
 "Retry" : player.GetVar("Retry"),
 "RetryAttempts" : player.GetVar("RetryAttempts"),
 "QuizScorePercent" : player.GetVar("QuizScorePercent"),
 "CourseNumber" : player.GetVar("CourseNumber"),
 "KC1" : player.GetVar("KC1"),
 "KC2" : player.GetVar("KC2"),
 "KC3" : player.GetVar("KC3"),
 "KC4" : player.GetVar("KC4"),
 "KC5" : player.GetVar("KC5"), 
 "KC6" : player.GetVar("KC6"),
 "imageResourceName" : player.GetVar("imageResourceName"),
 "imageResourceURL" : player.GetVar("imageResourceURL"),
 "imageCreator" : player.GetVar("imageCreator"),
 "imageCreatorURL" : player.GetVar("imageCreatorURL"),
 "imageLicense" : player.GetVar("imageLicense"),
 "imageLicenseURL" : player.GetVar("imageLicenseURL"),
 "audioResourceName" : player.GetVar("audioResourceName"),
 "audioResourceURL" : player.GetVar("audioResourceURL"),
 "audioCreator" : player.GetVar("audioCreator"),
 "audioCreatorURL" : player.GetVar("audioCreatorURL"),
 "audioLicense" : player.GetVar("audioLicense"),
 "audioLicenseURL" : player.GetVar("audioLicenseURL"),
 "videoResourceName" : player.GetVar("videoResourceName"),
 "videoResourceURL" : player.GetVar("videoResourceURL"),
 "videoCreator" : player.GetVar("videoCreator"),
 "videoCreatorURL" : player.GetVar("videoCreatorURL"),
 "videoLicense" : player.GetVar("videoLicense"),
 "videoLicenseURL" : player.GetVar("videoLicenseURL")
}
}

window.Script5 = function()
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
