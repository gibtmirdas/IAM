tinymce.PluginManager.add("visualchars",function(c){var a=this,e;function d(k){var g,h,j,l=c.getBody(),m,o=c.selection,f,n;e=!e;a.state=e;c.fire("VisualChars",{state:e});if(k){n=o.getBookmark()}if(e){h=[];tinymce.walk(l,function(i){if(i.nodeType==3&&i.nodeValue&&i.nodeValue.indexOf("\u00a0")!=-1){h.push(i)}},"childNodes");for(j=0;j<h.length;j++){m=h[j].nodeValue;m=m.replace(/(\u00a0)/g,'<span data-mce-bogus="1" class="mce-nbsp">$1</span>');f=c.dom.create("div",null,m);while((g=f.lastChild)){c.dom.insertAfter(g,h[j])}c.dom.remove(h[j])}}else{h=c.dom.select("span.mce-nbsp",l);for(j=h.length-1;j>=0;j--){c.dom.remove(h[j],1)}}o.moveToBookmark(n)}function b(){var f=this;c.on("VisualChars",function(g){f.active(g.state)})}c.addCommand("mceVisualChars",d);c.addButton("visualchars",{title:"Show invisible characters",cmd:"mceVisualChars",onPostRender:b});c.addMenuItem("visualchars",{text:"Show invisible characters",cmd:"mceVisualChars",onPostRender:b,selectable:true,context:"view",prependToContext:true});c.on("beforegetcontent",function(f){if(e&&f.format!="raw"&&!f.draft){e=true;d(false)}})});