function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60a3B4ZzhpK":
        Script1();
        break;
      case "6JGIbqhByA2":
        Script2();
        break;
      case "5t46JmRvvQc":
        Script3();
        break;
      case "5xGnd1bl6OL":
        Script4();
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
};
