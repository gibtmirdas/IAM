define("tinymce/ui/FlowLayout",["tinymce/ui/Layout"],function(a){return a.extend({Defaults:{containerClass:"flow-layout",controlClass:"flow-layout-item",endClass:"break"},recalc:function(b){b.items().filter(":visible").each(function(c){if(c.recalc){c.recalc()}})}})});