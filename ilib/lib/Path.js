var Path={dirname:function(e){e=e.replace(/\\/g,"/");var r=e.lastIndexOf("/");return r!==-1?e.substring(0,r):e},normalize:function(e){if(e){e=e.replace(/\\/g,"/");e=e.replace(/\/\//g,"/");e=e.replace(/\/[^/]*[^\./]\/\.\./g,"/.");e=e.replace(/\/\//g,"/");e=e.replace(/\/\.\//g,"/");e=e.replace(/^\.\//,"");e=e.replace(/\/\//g,"/");e=e.replace(/\/\.$/,"/");e=e.replace(/\/\//g,"/");if(e.length>1)e=e.replace(/\/$/,"");if(e.length===0)e="."}return e},join:function(e){var r=[];for(var a=0;a<arguments.length;a++){r.push(arguments[a]&&arguments[a].length>0?arguments[a]:".")}return Path.normalize(r.join("/"))}};module.exports=Path;