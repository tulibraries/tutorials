function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FrFhORF9qD":
        Script1();
        break;
      case "5Y9X2VhMOGA":
        Script2();
        break;
      case "6glw5rzHtAN":
        Script3();
        break;
      case "5iSBo96C6GX":
        Script4();
        break;
      case "5rfUgM4rKVu":
        Script5();
        break;
      case "5okkvAR8b30":
        Script6();
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
  const target = object('6kD3QhHxYTj');
const duration = 750;
const easing = 'ease-out';
const id = '5gsaYVV9p7y';
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

window.Script2 = function()
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
