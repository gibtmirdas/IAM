define("tinymce/ui/Scrollable",["tinymce/ui/DomUtils","tinymce/ui/DragHelper"],function(a,b){return{init:function(){var c=this;c.on("repaint",c.renderScroll)},renderScroll:function(){var d=this,e=2;function f(){var j,i,h;function g(o,n,q,w,v,m){var p,t,s;var l,k,r,u;var x,y;t=d.getEl("scroll"+o);if(t){x=n.toLowerCase();y=q.toLowerCase();if(d.getEl("absend")){a.css(d.getEl("absend"),x,d.layoutRect()[w]-1)}if(!v){a.css(t,"display","none");return}a.css(t,"display","block");p=d.getEl("body");s=d.getEl("scroll"+o+"t");l=p["client"+q]-(e*2);l-=j&&i?t["client"+m]:0;k=p["scroll"+q];r=l/k;u={};u[x]=p["offset"+n]+e;u[y]=l;a.css(t,u);u={};u[x]=p["scroll"+n]*r;u[y]=l*r;a.css(s,u)}}h=d.getEl("body");j=h.scrollWidth>h.clientWidth;i=h.scrollHeight>h.clientHeight;g("h","Left","Width","contentW",j,"Height");g("v","Top","Height","contentH",i,"Width")}function c(){function g(n,j,h,o,l){var m,i=d._id+"-scroll"+n,k=d.classPrefix;d.getEl().appendChild(a.createFragment('<div id="'+i+'" class="'+k+"scrollbar "+k+"scrollbar-"+n+'"><div id="'+i+'t" class="'+k+'scrollbar-thumb"></div></div>'));d.draghelper=new b(i+"t",{start:function(){m=d.getEl("body")["scroll"+j];a.addClass(a.get(i),k+"active")},drag:function(s){var p,u,r,t,q=d.layoutRect();u=q.contentW>q.innerW;r=q.contentH>q.innerH;t=d.getEl("body")["client"+h]-(e*2);t-=u&&r?d.getEl("scroll"+n)["client"+l]:0;p=t/d.getEl("body")["scroll"+h];d.getEl("body")["scroll"+j]=m+(s["delta"+o]/p)},stop:function(){a.removeClass(a.get(i),k+"active")}})}d.addClass("scroll");g("v","Top","Height","Y","Width");g("h","Left","Width","X","Height")}if(d.settings.autoScroll){if(!d._hasScroll){d._hasScroll=true;c();d.on("wheel",function(h){var g=d.getEl("body");g.scrollLeft+=(h.deltaX||0)*10;g.scrollTop+=h.deltaY*10;f()});a.on(d.getEl("body"),"scroll",f)}f()}}}});