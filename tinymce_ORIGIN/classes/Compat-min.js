define("tinymce/Compat",["tinymce/dom/DOMUtils","tinymce/dom/EventUtils","tinymce/dom/ScriptLoader","tinymce/AddOnManager","tinymce/util/Tools","tinymce/Env"],function(e,g,f,d,b,a){var c=window.tinymce;c.DOM=e.DOM;c.ScriptLoader=f.ScriptLoader;c.PluginManager=d.PluginManager;c.ThemeManager=d.ThemeManager;c.dom=c.dom||{};c.dom.Event=g.Event;b.each(b,function(i,h){c[h]=i});b.each("isOpera isWebKit isIE isGecko isMac".split(" "),function(h){c[h]=a[h.substr(2).toLowerCase()]});return{}});