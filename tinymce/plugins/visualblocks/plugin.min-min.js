tinymce.PluginManager.add("visualblocks",function(g,f){function h(){var a=this;a.active(b),g.on("VisualBlocks",function(){a.active(g.dom.hasClass(g.getBody(),"mce-visualblocks"))})}var c,d,b;window.NodeList&&(g.addCommand("mceVisualBlocks",function(){var a,e=g.dom;c||(c=e.uniqueId(),a=e.create("link",{id:c,rel:"stylesheet",href:f+"/css/visualblocks.css"}),g.getDoc().getElementsByTagName("head")[0].appendChild(a)),g.on("PreviewFormats AfterPreviewFormats",function(i){b&&e.toggleClass(g.getBody(),"mce-visualblocks","afterpreviewformats"==i.type)}),e.toggleClass(g.getBody(),"mce-visualblocks"),b=g.dom.hasClass(g.getBody(),"mce-visualblocks"),d&&d.active(e.hasClass(g.getBody(),"mce-visualblocks")),g.fire("VisualBlocks")}),g.addButton("visualblocks",{title:"Show blocks",cmd:"mceVisualBlocks",onPostRender:h}),g.addMenuItem("visualblocks",{text:"Show blocks",cmd:"mceVisualBlocks",onPostRender:h,selectable:!0,context:"view",prependToContext:!0}),g.on("init",function(){g.settings.visualblocks_default_state&&g.execCommand("mceVisualBlocks",!1,null,{skip_focus:!0})}),g.on("remove",function(){g.dom.removeClass(g.getBody(),"mce-visualblocks")}))});