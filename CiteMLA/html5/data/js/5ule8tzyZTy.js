﻿window.globalProvideData('slide', '{"title":"Popular Citation Submit","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":4,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide4","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5ule8tzyZTy","actionGroups":{"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[]},"ActGrpOnAllTimelinesComplete":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[]},"ReviewInt_5YFY9BUkviO":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5YFY9BUkviO.6Vrku3c1Uu0"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5YFY9BUkviO.6ZvbZWnU3A4"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5caWVW9fQxH.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YFY9BUkviO_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YFY9BUkviO_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5ule8tzyZTy","typea":"var","valueb":"5sf6yOMiy65","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns11111100001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5sf6yOMiy65.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5YFY9BUkviO"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5sf6yOMiy65.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5YFY9BUkviO"}]}]}]},"ReviewIntCorrectIncorrect_5YFY9BUkviO":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5YFY9BUkviO.6Vrku3c1Uu0"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5YFY9BUkviO.6ZvbZWnU3A4.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YFY9BUkviO.6ZvbZWnU3A4"}}]},{"kind":"adjustvar","variable":"5YFY9BUkviO.6ZvbZWnU3A4._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"5YFY9BUkviO.6ZvbZWnU3A4._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"5YFY9BUkviO.6ZvbZWnU3A4._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"5YFY9BUkviO.6ZvbZWnU3A4.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"5YFY9BUkviO.6ZvbZWnU3A4"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5YFY9BUkviO":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5YFY9BUkviO"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns11111100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns11111100001"}]}]},"DisableChoices_5YFY9BUkviO":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"5YFY9BUkviO.6Vrku3c1Uu0.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"5YFY9BUkviO.6ZvbZWnU3A4.ActGrpSetDisabledState"}]},"5YFY9BUkviO_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5caWVW9fQxH.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5sf6yOMiy65.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5YFY9BUkviO"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5caWVW9fQxH.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5caWVW9fQxH.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5YFY9BUkviO"}]}]}]}]},"SetLayout_pxabnsnfns11111100001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns11111100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns11111100001"}]}]},"NavigationRestrictionPreviousSlide_5ule8tzyZTy":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#PopularCitation","typea":"var","valueb":false,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5YFY9BUkviO.6Vrku3c1Uu0.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YFY9BUkviO.6Vrku3c1Uu0"}}]},{"kind":"exe_actiongroup","id":"5YFY9BUkviO.6Vrku3c1Uu0.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"5YFY9BUkviO.6Vrku3c1Uu0.ActGrpSetCheckedState"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#PopularCitation","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5YFY9BUkviO.6ZvbZWnU3A4.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YFY9BUkviO.6ZvbZWnU3A4"}}]},{"kind":"exe_actiongroup","id":"5YFY9BUkviO.6ZvbZWnU3A4.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"5YFY9BUkviO.6ZvbZWnU3A4.ActGrpSetCheckedState"}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns11111100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns11111100001"}]}]},{"kind":"onallopentimelinescomplete","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnAllTimelinesComplete"}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontimelinecomplete","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5YFY9BUkviO.6Vrku3c1Uu0.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5YFY9BUkviO.6ZvbZWnU3A4.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.5caWVW9fQxH"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5oJOFtYc6gi.InvalidPromptSlide"}}]},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6fS6puPl4qm.6VjsmXs2wul"}}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5oJOFtYc6gi","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5oJOFtYc6gi","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5YFY9BUkviO","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5YFY9BUkviO"}],"elseActions":[{"kind":"exe_actiongroup","id":"5YFY9BUkviO_CheckAnswered"}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5ule8tzyZTy"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":250,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YFY9BUkviO"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YFY9BUkviO.6Vrku3c1Uu0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YFY9BUkviO.6ZvbZWnU3A4"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5aKv5SCVTVo"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6P0t7CpihOv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6eLjNUOBXaa"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6dQOKJtZnxM"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6iSiF1a8okt"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5qIHqnF4Lza"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ePDxGofeDA"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":4,"tabEnabled":false,"referenceName":"6iSiF1a8okt","xOffset":0,"yOffset":0,"rotateXPos":10,"rotateYPos":270.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":20,"bottom":541,"altText":"","pngfb":false,"pr":{"l":"Lib","i":287}},"html5data":{"xPos":0,"yPos":0,"width":20,"height":541,"strokewidth":0}},"width":20,"height":541,"resume":true,"useHandCursor":true,"id":"6iSiF1a8okt"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-2,"yPos":0,"tabIndex":3,"tabEnabled":false,"referenceName":"5qIHqnF4Lza","xOffset":0,"yOffset":0,"rotateXPos":10,"rotateYPos":270.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":20,"bottom":541,"altText":"","pngfb":false,"pr":{"l":"Lib","i":288}},"html5data":{"xPos":0,"yPos":0,"width":20,"height":541,"strokewidth":0}},"width":20,"height":541,"resume":true,"useHandCursor":true,"id":"5qIHqnF4Lza"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":20,"yPos":0,"tabIndex":5,"tabEnabled":false,"referenceName":"6ePDxGofeDA","xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":270.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":4,"bottom":545,"altText":"","pngfb":false,"pr":{"l":"Lib","i":289}},"html5data":{"xPos":-4,"yPos":-4,"width":8,"height":549,"strokewidth":3}},"width":0,"height":541,"resume":true,"useHandCursor":true,"id":"6ePDxGofeDA"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":1533,"id":"01","url":"story_content/5g4z53CTUzO_80.jpg","type":"normal","altText":"","width":1620,"height":1080,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-90,"yPos":0,"tabIndex":1,"tabEnabled":false,"referenceName":"6eLjNUOBXaa","xOffset":0,"yOffset":0,"rotateXPos":405,"rotateYPos":270,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":810,"bottom":540,"altText":"","pngfb":false,"pr":{"l":"Lib","i":998}},"html5data":{"xPos":0,"yPos":0,"width":810,"height":540,"strokewidth":0}},"width":810,"height":540,"resume":true,"useHandCursor":true,"id":"6eLjNUOBXaa"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-90,"yPos":0,"tabIndex":2,"tabEnabled":false,"referenceName":"6dQOKJtZnxM","xOffset":0,"yOffset":0,"rotateXPos":423.5,"rotateYPos":270,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":847,"bottom":540,"altText":"","pngfb":false,"pr":{"l":"Lib","i":999}},"html5data":{"xPos":0,"yPos":0,"width":847,"height":540,"strokewidth":0}},"width":847,"height":540,"resume":true,"useHandCursor":true,"id":"6dQOKJtZnxM"},{"kind":"scrollarea","contentwidth":162,"contentheight":86,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6faIBQAg51C_-1880937391","id":"01","linkId":"txt__default_6Vrku3c1Uu0","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":75,"height":19,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<p style=\\"text-align:left;direction: ltr; padding-left: 0px\\"><span style=\\"font-family: \'Roboto Charset0_v5lJSRq46A5EDB0\',\'Roboto\'; font-size:16px; color:#000000;line-height:19.203125px;\\">False</span></p>","vectortext":{"left":0,"top":0,"right":81,"bottom":31,"pngfb":false,"pr":{"l":"Lib","i":1005}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":8,"tabEnabled":true,"referenceName":"6Vrku3c1Uu0","radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":69,"rotateYPos":21.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1001}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1001}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1001}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1002}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1002}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1002}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1003}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1003}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1003}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1004}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1004}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":1004}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}}],"width":138,"height":43,"resume":true,"useHandCursor":true,"id":"6Vrku3c1Uu0","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savechecked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"var","value":"#_checked"}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6ZvbZWnU3A4.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6ZvbZWnU3A4._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6ZvbZWnU3A4"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6BaKePyUDJg_123927758","id":"01","linkId":"txt__default_6ZvbZWnU3A4","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":75,"height":19,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<p style=\\"text-align:left;direction: ltr; padding-left: 0px\\"><span style=\\"font-family: \'Roboto Charset0_v5lJSRq46A5EDB0\',\'Roboto\'; font-size:16px; color:#000000;line-height:19.203125px;\\">True</span></p>","vectortext":{"left":0,"top":0,"right":74,"bottom":31,"pngfb":false,"pr":{"l":"Lib","i":1008}}}],"shapemaskId":"","xPos":24,"yPos":43,"tabIndex":9,"tabEnabled":true,"referenceName":"6ZvbZWnU3A4","radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":69,"rotateYPos":21.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1001}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1001}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1006}},"html5data":{"xPos":-9,"yPos":-1,"width":147,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-9,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1006}},"html5data":{"xPos":-9,"yPos":-1,"width":147,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1001}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1002}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1002}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1007}},"html5data":{"xPos":-9,"yPos":-1,"width":147,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-9,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1007}},"html5data":{"xPos":-9,"yPos":-1,"width":147,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1002}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1003}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1003}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1003}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1004}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1004}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":138,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":1004}},"html5data":{"xPos":-1,"yPos":-1,"width":139,"height":44,"strokewidth":3}}}],"width":138,"height":43,"resume":true,"useHandCursor":true,"id":"6ZvbZWnU3A4","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savechecked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"var","value":"#_checked"}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6Vrku3c1Uu0.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6Vrku3c1Uu0._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6Vrku3c1Uu0"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":504,"yPos":350,"tabIndex":7,"tabEnabled":false,"referenceName":"5YFY9BUkviO","xOffset":0,"yOffset":0,"rotateXPos":69,"rotateYPos":52,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":138,"height":104,"strokewidth":0}},"width":162,"height":104,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":162,"bottom":104,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":1000}}},"id":"5YFY9BUkviO"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5aKv5SCVTVo_1449272145","id":"01","linkId":"txt__default_5aKv5SCVTVo","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":598,"height":66,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<p style=\\"text-align:left;direction: ltr; padding-left: 0px\\"><span style=\\"font-family: \'Roboto Charset0_v5lJSRq46A5EDB0\',\'Roboto\'; font-size:37.3333px; color:#000000;line-height:67.2109375px;\\">Calculating score</span></p>","vectortext":{"left":0,"top":0,"right":294,"bottom":49,"pngfb":false,"pr":{"l":"Lib","i":1010}}}],"shapemaskId":"","xPos":30,"yPos":402,"tabIndex":10,"tabEnabled":true,"referenceName":"5aKv5SCVTVo","xOffset":0,"yOffset":0,"rotateXPos":309.5,"rotateYPos":38,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":619,"bottom":76,"altText":"Calculating score","pngfb":false,"pr":{"l":"Lib","i":1009}},"html5data":{"xPos":0,"yPos":0,"width":619,"height":76,"strokewidth":0}},"width":619,"height":76,"resume":true,"useHandCursor":true,"id":"5aKv5SCVTVo"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":1534,"id":"01","url":"story_content/6KvTIBssoqJ.png","type":"normal","altText":"TU red.png","width":313,"height":316,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":519,"yPos":314,"tabIndex":6,"tabEnabled":true,"referenceName":"6P0t7CpihOv","xOffset":0,"yOffset":0,"rotateXPos":78,"rotateYPos":79,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":156,"bottom":158,"altText":"TU red.png","pngfb":false,"pr":{"l":"Lib","i":1011}},"html5data":{"xPos":0,"yPos":0,"width":156,"height":158,"strokewidth":0}},"width":156,"height":158,"resume":true,"useHandCursor":true,"id":"6P0t7CpihOv"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5YFY9BUkviO_CorrectReview","id":"01","linkId":"5YFY9BUkviO_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":401,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":716}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":715}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5YFY9BUkviO_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5YFY9BUkviO_IncorrectReview","id":"01","linkId":"5YFY9BUkviO_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":408,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":718}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":717}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5YFY9BUkviO_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');