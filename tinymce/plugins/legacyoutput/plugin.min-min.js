!function(a){a.on("AddEditor",function(b){b.editor.settings.inline_styles=!1}),a.PluginManager.add("legacyoutput",function(b){b.on("init",function(){var d="p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",e=a.explode(b.settings.font_size_style_values),c=b.schema;b.formatter.register({alignleft:{selector:d,attributes:{align:"left"}},aligncenter:{selector:d,attributes:{align:"center"}},alignright:{selector:d,attributes:{align:"right"}},alignjustify:{selector:d,attributes:{align:"justify"}},bold:[{inline:"b",remove:"all"},{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}}],italic:[{inline:"i",remove:"all"},{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}}],underline:[{inline:"u",remove:"all"},{inline:"span",styles:{textDecoration:"underline"},exact:!0}],strikethrough:[{inline:"strike",remove:"all"},{inline:"span",styles:{textDecoration:"line-through"},exact:!0}],fontname:{inline:"font",attributes:{face:"%value"}},fontsize:{inline:"font",attributes:{size:function(f){return a.inArray(e,f.value)+1}}},forecolor:{inline:"font",attributes:{color:"%value"}},hilitecolor:{inline:"font",styles:{backgroundColor:"%value"}}}),a.each("b,i,u,strike".split(","),function(f){c.addValidElements(f+"[*]")}),c.getElementRule("font")||c.addValidElements("font[face|size|color|style]"),a.each(d.split(","),function(g){var f=c.getElementRule(g);f&&(f.attributes.align||(f.attributes.align={},f.attributesOrder.push("align")))})})})}(tinymce);