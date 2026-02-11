function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5bplEJlvQ1F":
        Script1();
        break;
      case "6mo862FTzuM":
        Script2();
        break;
      case "5i9TuZsM81F":
        Script3();
        break;
      case "6YXWPH7ykJy":
        Script4();
        break;
      case "6VG04Q4uggp":
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
window.Script1 = function()
{
  const target = object('61K4vM8HnMm');
const duration = 750;
const easing = 'ease-out';
const id = '6mYI7xz40uZ';
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
