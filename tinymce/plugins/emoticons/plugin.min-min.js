tinymce.PluginManager.add("emoticons",function(d,f){function b(){var a;return a='<table role="list" class="mce-grid">',tinymce.each(c,function(e){a+="<tr>",tinymce.each(e,function(g){var h=f+"/img/smiley-"+g+".gif";a+='<td><a href="#" data-mce-url="'+h+'" data-mce-alt="'+g+'" tabindex="-1" role="option" aria-label="'+g+'"><img src="'+h+'" style="width: 18px; height: 18px" role="presentation" /></a></td>'}),a+="</tr>"}),a+="</table>"}var c=[["cool","cry","embarassed","foot-in-mouth"],["frown","innocent","kiss","laughing"],["money-mouth","sealed","smile","surprised"],["tongue-out","undecided","wink","yell"]];d.addButton("emoticons",{type:"panelbutton",panel:{role:"application",autohide:!0,html:b,onclick:function(h){var g=d.dom.getParent(h.target,"a");g&&(d.insertContent('<img src="'+g.getAttribute("data-mce-url")+'" alt="'+g.getAttribute("data-mce-alt")+'" />'),this.hide())}},tooltip:"Emoticons"})});