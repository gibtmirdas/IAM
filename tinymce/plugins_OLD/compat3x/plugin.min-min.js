!function(d){function b(){}function g(h){!a&&window&&window.console&&(a=!0,console.log("Deprecated TinyMCE API call: "+h))}function f(k,l,j,h){return k=k||this,l?(this.add=function(i,e,n){function m(q){var p=[];if("string"==typeof j&&(j=j.split(" ")),j&&"function"!=typeof j){for(var o=0;o<j.length;o++){p.push(q[j[o]])}}("function"!=typeof j||(p=j(l,q,k)))&&(j||(p=[q]),p.unshift(h||k),i.apply(e||h||k,p)===!1&&q.stopImmediatePropagation())}return g("<target>.on"+l+".add(..)"),k.on(l,m,n),m},this.addToTop=function(m,i){this.add(m,i,!0)},this.remove=function(e){return k.off(l,e)},void (this.dispatch=function(){return k.fire(l),!0})):void (this.add=this.addToTop=this.remove=this.dispatch=b)}function c(k){function h(i,o){d.each(i.split(" "),function(n){k["on"+n]=new f(k,n,o)})}function e(o,i,p){return[i.level,p]}function l(i){return function(o,p){return !p.selection&&!i||p.selection==i?[p]:void 0}}function j(){function i(){return j()}var p={},n="add addMenu addSeparator collapse createMenu destroy displayColor expand focus getLength hasMenus hideMenu isActive isCollapsed isDisabled isRendered isSelected mark postRender remove removeAll renderHTML renderMenu renderNode renderTo select selectByIndex setActive setAriaProperty setColor setDisabled setSelected setState showMenu update";return g("editor.controlManager.*"),d.each(n.split(" "),function(o){p[o]=i}),p}if(!k.controlManager){k.controlManager={buttons:{},setDisabled:function(n,i){g("controlManager.setDisabled(..)"),this.buttons[n]&&this.buttons[n].disabled(i)},setActive:function(n,i){g("controlManager.setActive(..)"),this.buttons[n]&&this.buttons[n].active(i)},onAdd:new f,onPostRender:new f,add:function(i){return i},createButton:j,createColorSplitButton:j,createControl:j,createDropMenu:j,createListBox:j,createMenuButton:j,createSeparator:j,createSplitButton:j,createToolbar:j,createToolbarGroup:j,destroy:b,get:b,setControlType:j},h("PreInit BeforeRenderUI PostRender Load Init Remove Activate Deactivate","editor"),h("Click MouseUp MouseDown DblClick KeyDown KeyUp KeyPress ContextMenu Paste Submit Reset"),h("BeforeExecCommand ExecCommand","command ui value args"),h("PreProcess PostProcess LoadContent SaveContent Change"),h("BeforeSetContent BeforeGetContent SetContent GetContent",l(!1)),h("SetProgressState","state time"),h("VisualAid","element hasVisual"),h("Undo Redo",e),h("NodeChange",function(n,i){return[k.controlManager,i.element,k.selection.isCollapsed(),i]});var m=k.addButton;k.addButton=function(r,u){function s(){return k.controlManager.buttons[r]=this,q?q.call(this):void 0}var q;for(var p in u){"onpostrender"===p.toLowerCase()&&(q=u[p],u.onPostRender=s)}return q||(u.onPostRender=s),u.title&&(u.title=d.i18n.translate((k.settings.language||"en")+"."+u.title)),m.call(this,r,u)},k.on("init",function(){var n=k.undoManager,i=k.selection;n.onUndo=new f(k,"Undo",e,null,n),n.onRedo=new f(k,"Redo",e,null,n),n.onBeforeAdd=new f(k,"BeforeAddUndo",null,n),n.onAdd=new f(k,"AddUndo",null,n),i.onBeforeGetContent=new f(k,"BeforeGetContent",l(!0),i),i.onGetContent=new f(k,"GetContent",l(!0),i),i.onBeforeSetContent=new f(k,"BeforeSetContent",l(!0),i),i.onSetContent=new f(k,"SetContent",l(!0),i)}),k.on("BeforeRenderUI",function(){var i=k.windowManager;i.onOpen=new f,i.onClose=new f,i.createInstance=function(q,x,v,p,n,w){g("windowManager.createInstance(..)");var u=d.resolve(q);return new u(x,v,p,n,w)}})}}var a;d.util.Dispatcher=f,d.onBeforeUnload=new f(d,"BeforeUnload"),d.onAddEditor=new f(d,"AddEditor","editor"),d.onRemoveEditor=new f(d,"RemoveEditor","editor"),d.util.Cookie={get:b,getHash:b,remove:b,set:b,setHash:b},d.on("SetupEditor",c),d.PluginManager.add("compat3x",c),d.addI18n=function(e,j){var i=d.util.I18n,h=d.each;return"string"==typeof e&&-1===e.indexOf(".")?void i.add(e,j):void (d.is(e,"string")?h(j,function(k,l){i.data[e+"."+l]=k}):h(e,function(l,k){h(l,function(m,o){h(m,function(p,n){"common"===o?i.data[k+"."+n]=p:i.data[k+"."+o+"."+n]=p})})}))}}(tinymce);