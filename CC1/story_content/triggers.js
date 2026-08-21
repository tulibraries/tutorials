function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6WKcrUCkHGZ":
        Script1();
        break;
      case "5gOBlRBvUGC":
        Script2();
        break;
      case "6okxtZoFDfd":
        Script3();
        break;
      case "6SHkdCvQOWg":
        Script4();
        break;
      case "6OsJEQ9px2K":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
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
  const target = object('6kp2GxYsH0N');
const duration = 750;
const easing = 'ease-out';
const id = '626LyAQARfn';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
