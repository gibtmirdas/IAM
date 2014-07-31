tinymce.PluginManager.add("lists",function(g){function d(a){return a&&/^(OL|UL)$/.test(a.nodeName)}function j(a){return a.parentNode.firstChild==a}function f(a){return a.parentNode.lastChild==a}function h(a){return a&&!!g.schema.getTextBlockElements()[a.nodeName]}function c(a){return a&&"SPAN"===a.nodeName&&"bookmark"===a.getAttribute("data-mce-type")}var b=this;g.on("init",function(){function t(m){function l(u){var v,y,s;y=m[u?"startContainer":"endContainer"],s=m[u?"startOffset":"endOffset"],1==y.nodeType&&(v=z.create("span",{"data-mce-type":"bookmark"}),y.hasChildNodes()?(s=Math.min(s,y.childNodes.length-1),u?y.insertBefore(v,y.childNodes[s]):z.insertAfter(v,y.childNodes[s])):y.appendChild(v),y=v,s=0),p[u?"startContainer":"endContainer"]=y,p[u?"startOffset":"endOffset"]=s}var p={};return l(!0),m.collapsed||l(),p}function E(m){function l(u){function C(G){for(var F=G.parentNode.firstChild,H=0;F;){if(F==G){return H}(1!=F.nodeType||"bookmark"!=F.getAttribute("data-mce-type"))&&H++,F=F.nextSibling}return -1}var v,y,s;v=s=m[u?"startContainer":"endContainer"],y=m[u?"startOffset":"endOffset"],v&&(1==v.nodeType&&(y=C(v),v=v.parentNode,z.remove(s)),m[u?"startContainer":"endContainer"]=v,m[u?"startOffset":"endOffset"]=y)}l(!0),l();var p=z.createRng();p.setStart(m.startContainer,m.startOffset),m.endContainer&&p.setEnd(m.endContainer,m.endOffset),w.setRng(p)}function q(p,F){var v,C,m,l=z.createFragment(),y=g.schema.getBlockElements();if(g.settings.forced_root_block&&(F=F||g.settings.forced_root_block),F&&(C=z.create(F),C.tagName===g.settings.forced_root_block&&z.setAttribs(C,g.settings.forced_root_block_attrs),l.appendChild(C)),p){for(;v=p.firstChild;){var u=v.nodeName;m||"SPAN"==u&&"bookmark"==v.getAttribute("data-mce-type")||(m=!0),y[u]?(l.appendChild(v),C=null):F?(C||(C=z.create(F),l.appendChild(C)),C.appendChild(v)):l.appendChild(v)}}return g.settings.forced_root_block?m||tinymce.Env.ie&&!(tinymce.Env.ie>10)||C.appendChild(z.create("br",{"data-mce-bogus":"1"})):l.appendChild(z.create("br")),l}function k(){return tinymce.grep(w.getSelectedBlocks(),function(l){return"LI"==l.nodeName})}function x(s,m,v){var p,u,l=z.select('span[data-mce-type="bookmark"]',s);v=v||q(m),p=z.createRng(),p.setStartAfter(m),p.setEndAfter(s),u=p.extractContents(),z.isEmpty(u)||z.insertAfter(u,s),z.insertAfter(v,s),z.isEmpty(m.parentNode)&&(tinymce.each(l,function(y){m.parentNode.parentNode.insertBefore(y,m.parentNode)}),z.remove(m.parentNode)),z.remove(m)}function e(m){var p,l;if(p=m.nextSibling,p&&d(p)&&p.nodeName==m.nodeName){for(;l=p.firstChild;){m.appendChild(l)}z.remove(p)}if(p=m.previousSibling,p&&d(p)&&p.nodeName==m.nodeName){for(;l=p.firstChild;){m.insertBefore(l,m.firstChild)}z.remove(p)}}function D(l){tinymce.each(tinymce.grep(z.select("ol,ul",l)),function(p){var s,m=p.parentNode;"LI"==m.nodeName&&m.firstChild==p&&(s=m.previousSibling,s&&"LI"==s.nodeName&&(s.appendChild(p),z.isEmpty(m)&&z.remove(m))),d(m)&&(s=m.previousSibling,s&&"LI"==s.nodeName&&s.appendChild(p))})}function i(p){function u(v){z.isEmpty(v)&&z.remove(v)}var m,l=p.parentNode,s=l.parentNode;return j(p)&&f(p)?("LI"==s.nodeName?(z.insertAfter(p,s),u(s),z.remove(l)):d(s)?z.remove(l,!0):(s.insertBefore(q(p),l),z.remove(l)),!0):j(p)?("LI"==s.nodeName?(z.insertAfter(p,s),p.appendChild(l),u(s)):d(s)?s.insertBefore(p,l):(s.insertBefore(q(p),l),z.remove(p)),!0):f(p)?("LI"==s.nodeName?z.insertAfter(p,s):d(s)?z.insertAfter(p,l):(z.insertAfter(q(p),l),z.remove(p)),!0):("LI"==s.nodeName?(l=s,m=q(p,"LI")):m=d(s)?q(p,"LI"):q(p),x(l,p,m),D(l.parentNode),!0)}function n(m){function s(y,u){var v;if(d(y)){for(;v=m.lastChild.firstChild;){u.appendChild(v)}z.remove(y)}}var l,p;return l=m.previousSibling,l&&d(l)?(l.appendChild(m),!0):l&&"LI"==l.nodeName&&d(l.lastChild)?(l.lastChild.appendChild(m),s(m.lastChild,l.lastChild),!0):(l=m.nextSibling,l&&d(l)?(l.insertBefore(m,l.firstChild),!0):l&&"LI"==l.nodeName&&d(m.lastChild)?!1:(l=m.previousSibling,l&&"LI"==l.nodeName?(p=z.create(m.parentNode.nodeName),l.appendChild(p),p.appendChild(m),s(m.lastChild,p),!0):!1))}function B(){var l=k();if(l.length){for(var p=t(w.getRng(!0)),m=0;m<l.length&&(n(l[m])||0!==m);m++){}return E(p),g.nodeChanged(),!0}}function a(){var p=k();if(p.length){var v,s,u=t(w.getRng(!0)),m=g.getBody();for(v=p.length;v--;){for(var l=p[v].parentNode;l&&l!=m;){for(s=p.length;s--;){if(p[s]===l){p.splice(v,1);break}}l=l.parentNode}}for(v=0;v<p.length&&(i(p[v])||0!==v);v++){}return E(u),g.nodeChanged(),!0}}function o(v){function s(){function C(L){var l,M;for(l=p[L?"startContainer":"endContainer"],M=p[L?"startOffset":"endOffset"],1==l.nodeType&&(l=l.childNodes[Math.min(M,l.childNodes.length-1)]||l);l.parentNode!=I;){if(h(l)){return l}if(/^(TD|TH)$/.test(l.parentNode.nodeName)){return l}l=l.parentNode}return l}for(var K,G=[],I=g.getBody(),F=C(!0),H=C(),y=[],J=F;J&&(y.push(J),J!=H);J=J.nextSibling){}return tinymce.each(y,function(L){if(h(L)){return G.push(L),void (K=null)}if(z.isBlock(L)||"BR"==L.nodeName){return"BR"==L.nodeName&&z.remove(L),void (K=null)}var l=L.nextSibling;return c(L)&&(h(l)||!l&&L.parentNode==I)?void (K=null):(K||(K=z.create("p"),L.parentNode.insertBefore(K,L),G.push(K)),void K.appendChild(L))}),G}var p=w.getRng(!0),u=t(p),m=s();tinymce.each(m,function(y){var l,C;C=y.previousSibling,C&&d(C)&&C.nodeName==v?(l=C,y=z.rename(y,"LI"),C.appendChild(y)):(l=z.create(v),y.parentNode.insertBefore(l,y),l.appendChild(y),y=z.rename(y,"LI")),e(l)}),E(u)}function r(){var m=t(w.getRng(!0)),l=g.getBody();tinymce.each(k(),function(p){var u,s;if(z.isEmpty(p)){return void i(p)}for(u=p;u&&u!=l;u=u.parentNode){d(u)&&(s=u)}x(s,p)}),E(m)}function A(m){var l=z.getParent(w.getStart(),"OL,UL");if(l){if(l.nodeName==m){r(m)}else{var p=t(w.getRng(!0));e(z.rename(l,m)),E(p)}}else{o(m)}}var z=g.dom,w=g.selection;b.backspaceDelete=function(u){function y(G,C){var I=G.startContainer,F=G.startOffset;if(3==I.nodeType&&(C?F<I.data.length:F>0)){return I}for(var H=new tinymce.dom.TreeWalker(G.startContainer);I=H[C?"next":"prev"]();){if(3==I.nodeType&&I.data.length>0){return I}}}function p(G,I){var F,H,C=G.parentNode;for(d(I.lastChild)&&(H=I.lastChild),F=I.lastChild,F&&"BR"==F.nodeName&&G.hasChildNodes()&&z.remove(F);F=G.firstChild;){I.appendChild(F)}H&&I.appendChild(H),z.remove(G),z.isEmpty(C)&&z.remove(C)}if(w.isCollapsed()){var v=z.getParent(w.getStart(),"LI");if(v){var m=w.getRng(!0),l=z.getParent(y(m,u),"LI");if(l&&l!=v){var s=t(m);return u?p(l,v):p(v,l),E(s),!0}if(!l&&!u&&r(v.parentNode.nodeName)){return !0}}}},g.addCommand("Indent",function(){return B()?void 0:!0}),g.addCommand("Outdent",function(){return a()?void 0:!0}),g.addCommand("InsertUnorderedList",function(){A("UL")}),g.addCommand("InsertOrderedList",function(){A("OL")}),g.on("keydown",function(l){9==l.keyCode&&g.dom.getParent(g.selection.getStart(),"LI")&&(l.preventDefault(),l.shiftKey?a():B())})}),g.addButton("indent",{icon:"indent",title:"Increase indent",cmd:"Indent",onPostRender:function(){var a=this;g.on("nodechange",function(){var e=g.dom.getParent(g.selection.getNode(),"LI,UL,OL");a.disabled(e&&("LI"!=e.nodeName||j(e)))})}}),g.on("keydown",function(a){a.keyCode==tinymce.util.VK.BACKSPACE?b.backspaceDelete()&&a.preventDefault():a.keyCode==tinymce.util.VK.DELETE&&b.backspaceDelete(!0)&&a.preventDefault()})});