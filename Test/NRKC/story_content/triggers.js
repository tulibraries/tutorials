function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QJ6pPL0u7z":
        Script1();
        break;
      case "6gf5MoDYIMI":
        Script2();
        break;
      case "6i4sE6mEnrF":
        Script3();
        break;
      case "6Cvwk6s0elu":
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
