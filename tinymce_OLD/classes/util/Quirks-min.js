define("tinymce/util/Quirks",["tinymce/util/VK","tinymce/dom/RangeUtils","tinymce/html/Node","tinymce/html/Entities","tinymce/Env","tinymce/util/Tools"],function(e,d,c,f,a,b){return function(g){var R=b.each;var j=e.BACKSPACE,t=e.DELETE,i=g.dom,v=g.selection,V=g.settings,G=g.parser,z=g.serializer;var k=a.gecko,r=a.ie,O=a.webkit;function K(ab,aa){try{g.getDoc().execCommand(ab,false,aa)}catch(Z){}}function y(){var Z=g.getDoc().documentMode;return Z?Z:6}function J(Z){return Z.isDefaultPrevented()}function X(){var ad=g.getDoc(),aa="data:text/mce-internal,";var ac=window.MutationObserver,Z;if(!ac){Z=true;ac=function(){var ae=[],ah;function ag(aj){var ai=aj.relatedNode||aj.target;ae.push({target:ai,addedNodes:[ai]})}function af(aj){var ai=aj.relatedNode||aj.target;ae.push({target:ai,attributeName:aj.attrName})}this.observe=function(ai){ah=ai;ah.addEventListener("DOMSubtreeModified",ag,false);ah.addEventListener("DOMNodeInsertedIntoDocument",ag,false);ah.addEventListener("DOMNodeInserted",ag,false);ah.addEventListener("DOMAttrModified",af,false)};this.disconnect=function(){ah.removeEventListener("DOMNodeInserted",ag);ah.removeEventListener("DOMAttrModified",af);ah.removeEventListener("DOMSubtreeModified",ag,false)};this.takeRecords=function(){return ae}}}function ab(ag){var af=new ac(function(){});b.each(g.getBody().getElementsByTagName("*"),function(ai){if(ai.tagName=="SPAN"){ai.setAttribute("mce-data-marked",1)}if(!ai.hasAttribute("data-mce-style")&&ai.hasAttribute("style")){g.dom.setAttrib(ai,"style",ai.getAttribute("style"))}});af.observe(g.getDoc(),{childList:true,attributes:true,subtree:true,attributeFilter:["style"]});g.getDoc().execCommand(ag?"ForwardDelete":"Delete",false,null);var ae=g.selection.getRng();var ah=ae.startContainer.parentNode;b.each(af.takeRecords(),function(ai){if(ai.attributeName=="style"){var aj=ai.target.getAttribute("data-mce-style");if(aj){ai.target.setAttribute("style",aj)}else{ai.target.removeAttribute("style")}}b.each(ai.addedNodes,function(al){if(al.nodeName=="SPAN"&&!al.getAttribute("mce-data-marked")){var am,ak;if(al==ah){am=ae.startOffset;ak=al.firstChild}i.remove(al,true);if(ak){ae.setStart(ak,am);ae.setEnd(ak,am);g.selection.setRng(ae)}}})});af.disconnect();b.each(g.dom.select("span[mce-data-marked]"),function(ai){ai.removeAttribute("mce-data-marked")})}g.on("keydown",function(ah){var ag=ah.keyCode==t,aj=e.metaKeyPressed(ah);if(!J(ah)&&(ag||ah.keyCode==j)){var af=g.selection.getRng(),ae=af.startContainer,ai=af.startOffset;if(!aj&&af.collapsed&&ae.nodeType==3){if(ag?ai<ae.data.length:ai>0){return}}ah.preventDefault();if(aj){g.selection.getSel().modify("extend",ag?"forward":"backward","word")}ab(ag)}});g.on("keypress",function(ae){if(!J(ae)&&!v.isCollapsed()&&ae.charCode&&!e.metaKeyPressed(ae)){ae.preventDefault();ab(true);g.selection.setContent(String.fromCharCode(ae.charCode))}});g.addCommand("Delete",function(){ab()});g.addCommand("ForwardDelete",function(){ab(true)});if(Z){return}g.on("dragstart",function(ae){ae.dataTransfer.setData("URL","data:text/mce-internal,"+escape(g.selection.getContent()))});g.on("drop",function(ae){if(!J(ae)){var af=ae.dataTransfer.getData("URL");if(!af||af.indexOf(aa)==-1||!ad.caretRangeFromPoint){return}af=unescape(af.substr(aa.length));if(ad.caretRangeFromPoint){ae.preventDefault();ab();g.selection.setRng(ad.caretRangeFromPoint(ae.x,ae.y));g.insertContent(af)}}});g.on("cut",function(ae){if(!J(ae)&&ae.clipboardData){ae.preventDefault();ae.clipboardData.clearData();ae.clipboardData.setData("text/html",g.selection.getContent());ae.clipboardData.setData("text/plain",g.selection.getContent({format:"text"}));ab(true)}})}function C(){function Z(ac){var ab=i.create("body");var ad=ac.cloneContents();ab.appendChild(ad);return v.serializer.serialize(ab,{format:"html"})}function aa(ab){if(!ab.setStart){if(ab.item){return false}var af=ab.duplicate();af.moveToElementText(g.getBody());return d.compareRanges(ab,af)}var ad=Z(ab);var ae=i.createRng();ae.selectNode(g.getBody());var ac=Z(ae);return ad===ac}g.on("keydown",function(ae){var ad=ae.keyCode,ac,ab;if(!J(ae)&&(ad==t||ad==j)){ac=g.selection.isCollapsed();ab=g.getBody();if(ac&&!i.isEmpty(ab)){return}if(!ac&&!aa(g.selection.getRng())){return}ae.preventDefault();g.setContent("");if(ab.firstChild&&i.isBlock(ab.firstChild)){g.selection.setCursorLocation(ab.firstChild,0)}else{g.selection.setCursorLocation(ab,0)}g.nodeChanged()}})}function W(){g.on("keydown",function(Z){if(!J(Z)&&Z.keyCode==65&&e.metaKeyPressed(Z)){Z.preventDefault();g.execCommand("SelectAll")}})}function Y(){if(!g.settings.content_editable){i.bind(g.getDoc(),"focusin",function(){v.setRng(v.getRng())});i.bind(g.getDoc(),"mousedown",function(Z){if(Z.target==g.getDoc().documentElement){g.getBody().focus();v.setRng(v.getRng())}})}}function M(){g.on("keydown",function(ab){if(!J(ab)&&ab.keyCode===j){if(v.isCollapsed()&&v.getRng(true).startOffset===0){var aa=v.getNode();var Z=aa.previousSibling;if(aa.nodeName=="HR"){i.remove(aa);ab.preventDefault();return}if(Z&&Z.nodeName&&Z.nodeName.toLowerCase()==="hr"){i.remove(Z);ab.preventDefault()}}}})}function I(){if(!window.Range.prototype.getClientRects){g.on("mousedown",function(aa){if(!J(aa)&&aa.target.nodeName==="HTML"){var Z=g.getBody();Z.blur();setTimeout(function(){Z.focus()},0)}})}}function m(){g.on("click",function(Z){Z=Z.target;if(/^(IMG|HR)$/.test(Z.nodeName)){v.getSel().setBaseAndExtent(Z,0,Z,1)}if(Z.nodeName=="A"&&i.hasClass(Z,"mce-item-anchor")){v.select(Z)}g.nodeChanged()})}function S(){function aa(){var ab=i.getAttribs(v.getStart().cloneNode(false));return function(){var ac=v.getStart();if(ac!==g.getBody()){i.setAttrib(ac,"style",null);R(ab,function(ad){ac.setAttributeNode(ad.cloneNode(true))})}}}function Z(){return !v.isCollapsed()&&i.getParent(v.getStart(),i.isBlock)!=i.getParent(v.getEnd(),i.isBlock)}g.on("keypress",function(ac){var ab;if(!J(ac)&&(ac.keyCode==8||ac.keyCode==46)&&Z()){ab=aa();g.getDoc().execCommand("delete",false,null);ab();ac.preventDefault();return false}});i.bind(g.getDoc(),"cut",function(ac){var ab;if(!J(ac)&&Z()){ab=aa();setTimeout(function(){ab()},0)}})}function h(){var aa,Z;g.on("selectionchange",function(){if(Z){clearTimeout(Z);Z=0}Z=window.setTimeout(function(){if(g.removed){return}var ab=v.getRng();if(!aa||!d.compareRanges(ab,aa)){g.nodeChanged();aa=ab}},50)})}function H(){document.body.setAttribute("role","application")}function F(){g.on("keydown",function(aa){if(!J(aa)&&aa.keyCode===j){if(v.isCollapsed()&&v.getRng(true).startOffset===0){var Z=v.getNode().previousSibling;if(Z&&Z.nodeName&&Z.nodeName.toLowerCase()==="table"){aa.preventDefault();return false}}}})}function P(){if(y()>7){return}K("RespectVisibilityInDesign",true);g.contentStyles.push(".mceHideBrInPre pre br {display: none}");i.addClass(g.getBody(),"mceHideBrInPre");G.addNodeFilter("pre",function(Z){var ab=Z.length,ad,aa,ae,ac;while(ab--){ad=Z[ab].getAll("br");aa=ad.length;while(aa--){ae=ad[aa];ac=ae.prev;if(ac&&ac.type===3&&ac.value.charAt(ac.value-1)!="\n"){ac.value+="\n"}else{ae.parent.insert(new c("#text",3),ae,true).value="\n"}}}});z.addNodeFilter("pre",function(Z){var ab=Z.length,ad,aa,ae,ac;while(ab--){ad=Z[ab].getAll("br");aa=ad.length;while(aa--){ae=ad[aa];ac=ae.prev;if(ac&&ac.type==3){ac.value=ac.value.replace(/\r?\n$/,"")}}}})}function l(){i.bind(g.getBody(),"mouseup",function(){var aa,Z=v.getNode();if(Z.nodeName=="IMG"){if((aa=i.getStyle(Z,"width"))){i.setAttrib(Z,"width",aa.replace(/[^0-9%]+/g,""));i.setStyle(Z,"width","")}if((aa=i.getStyle(Z,"height"))){i.setAttrib(Z,"height",aa.replace(/[^0-9%]+/g,""));i.setStyle(Z,"height","")}}})}function U(){g.on("keydown",function(ad){var ab,aa,ae,Z,ac;if(J(ad)||ad.keyCode!=e.BACKSPACE){return}ab=v.getRng();aa=ab.startContainer;ae=ab.startOffset;Z=i.getRoot();ac=aa;if(!ab.collapsed||ae!==0){return}while(ac&&ac.parentNode&&ac.parentNode.firstChild==ac&&ac.parentNode!=Z){ac=ac.parentNode}if(ac.tagName==="BLOCKQUOTE"){g.formatter.toggle("blockquote",null,ac);ab=i.createRng();ab.setStart(aa,0);ab.setEnd(aa,0);v.setRng(ab)}})}function T(){function Z(){g._refreshContentEditable();K("StyleWithCSS",false);K("enableInlineTableEditing",false);if(!V.object_resizing){K("enableObjectResizing",false)}}if(!V.readonly){g.on("BeforeExecCommand MouseDown",Z)}}function E(){function Z(){R(i.select("a"),function(ac){var aa=ac.parentNode,ab=i.getRoot();if(aa.lastChild===ac){while(aa&&!i.isBlock(aa)){if(aa.parentNode.lastChild!==aa||aa===ab){return}aa=aa.parentNode}i.add(aa,"br",{"data-mce-bogus":1})}})}g.on("SetContent ExecCommand",function(aa){if(aa.type=="setcontent"||aa.command==="mceInsertLink"){Z()}})}function w(){if(V.forced_root_block){g.on("init",function(){K("DefaultParagraphSeparator",V.forced_root_block)})}}function A(){g.on("Undo Redo SetContent",function(Z){if(!Z.initial){g.execCommand("mceRepaint")}})}function n(){g.on("keydown",function(aa){var Z;if(!J(aa)&&aa.keyCode==j){Z=g.getDoc().selection.createRange();if(Z&&Z.item){aa.preventDefault();g.undoManager.beforeChange();i.remove(Z.item(0));g.undoManager.add()}}})}function D(){var Z;if(y()>=10){Z="";R("p div h1 h2 h3 h4 h5 h6".split(" "),function(aa,ab){Z+=(ab>0?",":"")+aa+":empty"});g.contentStyles.push(Z+"{padding-right: 1px !important}")}}function Q(){if(y()<9){G.addNodeFilter("noscript",function(Z){var aa=Z.length,ab,ac;while(aa--){ab=Z[aa];ac=ab.firstChild;if(ac){ab.attr("data-mce-innertext",ac.value)}}});z.addNodeFilter("noscript",function(Z){var aa=Z.length,ab,ad,ac;while(aa--){ab=Z[aa];ad=Z[aa].firstChild;if(ad){ad.value=f.decode(ad.value)}else{ac=ab.attributes.map["data-mce-innertext"];if(ac){ab.attr("data-mce-innertext",null);ad=new c("#text",3);ad.value=ac;ad.raw=true;ab.append(ad)}}}})}}function B(){var af=i.doc,aa=af.body,ac,ad,ag;function ae(ah,ak){var ai=aa.createTextRange();try{ai.moveToPoint(ah,ak)}catch(aj){ai=null}return ai}function ab(ai){var ah;if(ai.button){ah=ae(ai.x,ai.y);if(ah){if(ah.compareEndPoints("StartToStart",ad)>0){ah.setEndPoint("StartToStart",ad)}else{ah.setEndPoint("EndToEnd",ad)}ah.select()}}else{Z()}}function Z(){var ah=af.selection.createRange();if(ad&&!ah.item&&ah.compareEndPoints("StartToEnd",ah)===0){ad.select()}i.unbind(af,"mouseup",Z);i.unbind(af,"mousemove",ab);ad=ac=0}af.documentElement.unselectable=true;i.bind(af,"mousedown contextmenu",function(ah){if(ah.target.nodeName==="HTML"){if(ac){Z()}ag=af.documentElement;if(ag.scrollHeight>ag.clientHeight){return}ac=1;ad=ae(ah.x,ah.y);if(ad){i.bind(af,"mouseup",Z);i.bind(af,"mousemove",ab);i.getRoot().focus();ad.select()}}})}function N(){g.on("keyup focusin mouseup",function(Z){if(Z.keyCode!=65||!e.metaKeyPressed(Z)){v.normalize()}},true)}function p(){g.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")}function q(){if(!g.inline){g.on("keydown",function(){if(document.activeElement==document.body){g.getWin().focus()}})}}function u(){if(!g.inline){g.contentStyles.push("body {min-height: 150px}");g.on("click",function(Z){if(Z.target.nodeName=="HTML"){g.getBody().focus();g.selection.normalize();g.nodeChanged()}})}}function s(){if(a.mac){g.on("keydown",function(Z){if(e.metaKeyPressed(Z)&&(Z.keyCode==37||Z.keyCode==39)){Z.preventDefault();g.selection.getSel().modify("move",Z.keyCode==37?"backward":"forward","word")}})}}function L(){K("AutoUrlDetect",false)}function x(){if(!g.inline){g.on("focus blur",function(){var Z=g.dom.create("br");g.getBody().appendChild(Z);Z.parentNode.removeChild(Z)},true)}}function o(){g.on("click",function(Z){var aa=Z.target;do{if(aa.tagName==="A"){Z.preventDefault();return}}while((aa=aa.parentNode))});g.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")}F();U();C();N();if(O){X();Y();m();w();if(a.iOS){h();q();u();o()}else{W()}}if(r&&a.ie<11){M();H();P();l();n();D();Q();B()}if(a.ie>=11){u();x()}if(a.ie){W();L()}if(k){M();I();S();T();E();A();p();s()}}});