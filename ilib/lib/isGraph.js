var ilib=require("./ilib.js");var IString=require("./IString.js");var isSpace=require("./isSpace.js");var isCntrl=require("./isCntrl.js");var isGraph=function(i){var e;switch(typeof i){case"number":e=i;break;case"string":e=IString.toCodePoint(i,0);break;case"undefined":return false;default:e=i._toCodePoint(0);break}return typeof i!=="undefined"&&i.length>0&&!isSpace(e)&&!isCntrl(e)};isGraph._init=function(i,e,r){isSpace._init(i,e,function(){isCntrl._init(i,e,r)})};module.exports=isGraph;