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
 
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzfLosZcJ94H3Zplhe0_NKVqHdLrPUFN60fZZJjtwAwZ3Fn7W-Hcwigm74N2_znTUay/exec";

storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "TimeElapsed" : player.GetVar("TimeElapsed"),
 "intro_KC" : player.GetVar("intro_KC"),
 "aspects_KC" : player.GetVar("aspects_KC"),
 "uses_KC1" : player.GetVar("uses_KC1"),
 "uses_KC2" : player.GetVar("uses_KC2"),
 "find_KC" : player.GetVar("find_KC"),
 "research_KC" : player.GetVar("research_KC")
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
