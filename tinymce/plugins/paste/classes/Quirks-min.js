define("tinymce/pasteplugin/Quirks",["tinymce/Env","tinymce/util/Tools","tinymce/pasteplugin/WordFilter","tinymce/pasteplugin/Utils"],function(a,b,d,c){return function(g){function i(j){g.on("BeforePastePreProcess",function(k){k.content=j(k.content)})}function h(j){j=c.filter(j,[/^[\s\S]*<!--StartFragment-->|<!--EndFragment-->[\s\S]*$/g,[/<span class="Apple-converted-space">\u00a0<\/span>/g,"\u00a0"],/<br>$/i]);return j}function f(j){if(!d.isWordContent(j)){return j}var k=[];b.each(g.schema.getBlockElements(),function(n,m){k.push(m)});var l=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+k.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g");j=c.filter(j,[[l,"$1"]]);j=c.filter(j,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]]);return j}function e(l){if(d.isWordContent(l)){return l}var j=g.getParam("paste_webkit_styles","color font-size font-family background-color").split(/[, ]/);if(g.settings.paste_remove_styles_if_webkit===false){j="all"}if(j!="all"){var m=g.dom,k=g.selection.getNode();l=l.replace(/ style=\"([^\"]+)\"/gi,function(o,q){var n=m.parseStyle(q,"span"),r={};if(j==="none"){return""}for(var p=0;p<j.length;p++){if(m.toHex(m.getStyle(k,j[p],true))!=n[j[p]]){r[j[p]]=n[j[p]]}}r=m.serializeStyle(r,"span");if(r){return' style="'+r+'"'}return""})}return l}if(a.webkit){i(e);i(h)}if(a.ie){i(f)}}});