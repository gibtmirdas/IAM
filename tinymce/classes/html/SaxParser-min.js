define("tinymce/html/SaxParser",["tinymce/html/Schema","tinymce/html/Entities","tinymce/util/Tools"],function(b,d,a){var c=a.each;return function(f,h){var e=this;function g(){}f=f||{};e.schema=h=h||new b();if(f.fix_self_closing!==false){f.fix_self_closing=true}c("comment cdata text start end pi doctype".split(" "),function(i){if(i){e[i]=f[i]||g}});e.parse=function(F){var r=this,k,H=0,K,C,B=[],P,S,D,t;var A,u,O,I,Q;var x,q,o,v,U,R,G;var V,N,j;var T,L,p,E,M,l,y=0;var n=d.decode,z,J=a.makeMap("src,href");var m=/(java|vb)script:/i;function w(W){var Y,X;Y=B.length;while(Y--){if(B[Y].name===W){break}}if(Y>=0){for(X=B.length-1;X>=Y;X--){W=B[X];if(W.valid){r.end(W.name)}}B.length=Y}}function s(ab,X,af,ad,ac){var Z,aa,W=/[\s\u0000-\u001F]+/g;X=X.toLowerCase();af=X in I?X:n(af||ad||ac||"");if(x&&!A&&X.indexOf("data-")!==0){Z=R[X];if(!Z&&G){aa=G.length;while(aa--){Z=G[aa];if(Z.pattern.test(X)){break}}if(aa===-1){Z=null}}if(!Z){return}if(Z.validValues&&!(af in Z.validValues)){return}}if(J[X]&&!f.allow_script_urls){var Y=af.replace(W,"");try{Y=decodeURIComponent(Y);if(m.test(Y)){return}}catch(ae){Y=unescape(Y);if(m.test(Y)){return}}}P.map[X]=af;P.push({name:X,value:af})}p=new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g");E=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g;O=h.getShortEndedElements();L=f.self_closing_elements||h.getSelfClosingElements();I=h.getBoolAttrs();x=f.validate;u=f.remove_internals;z=f.fix_self_closing;M=h.getSpecialElements();while((k=p.exec(F))){if(H<k.index){r.text(n(F.substr(H,k.index-H)))}if((K=k[6])){K=K.toLowerCase();if(K.charAt(0)===":"){K=K.substr(1)}w(K)}else{if((K=k[7])){K=K.toLowerCase();if(K.charAt(0)===":"){K=K.substr(1)}Q=K in O;if(z&&L[K]&&B.length>0&&B[B.length-1].name===K){w(K)}if(!x||(q=h.getElementRule(K))){o=true;if(x){R=q.attributes;G=q.attributePatterns}if((U=k[8])){A=U.indexOf("data-mce-type")!==-1;if(A&&u){o=false}P=[];P.map={};U.replace(E,s)}else{P=[];P.map={}}if(x&&!A){V=q.attributesRequired;N=q.attributesDefault;j=q.attributesForced;T=q.removeEmptyAttrs;if(T&&!P.length){o=false}if(j){S=j.length;while(S--){v=j[S];t=v.name;l=v.value;if(l==="{$uid}"){l="mce_"+y++}P.map[t]=l;P.push({name:t,value:l})}}if(N){S=N.length;while(S--){v=N[S];t=v.name;if(!(t in P.map)){l=v.value;if(l==="{$uid}"){l="mce_"+y++}P.map[t]=l;P.push({name:t,value:l})}}}if(V){S=V.length;while(S--){if(V[S] in P.map){break}}if(S===-1){o=false}}if(P.map["data-mce-bogus"]){o=false}}if(o){r.start(K,P,Q)}}else{o=false}if((C=M[K])){C.lastIndex=H=k.index+k[0].length;if((k=C.exec(F))){if(o){D=F.substr(H,k.index-H)}H=k.index+k[0].length}else{D=F.substr(H);H=F.length}if(o){if(D.length>0){r.text(D,true)}r.end(K)}p.lastIndex=H;continue}if(!Q){if(!U||U.indexOf("/")!=U.length-1){B.push({name:K,valid:o})}else{if(o){r.end(K)}}}}else{if((K=k[1])){if(K.charAt(0)===">"){K=" "+K}if(!f.allow_conditional_comments&&K.substr(0,3)==="[if"){K=" "+K}r.comment(K)}else{if((K=k[2])){r.cdata(K)}else{if((K=k[3])){r.doctype(K)}else{if((K=k[4])){r.pi(K,k[5])}}}}}}H=k.index+k[0].length}if(H<F.length){r.text(n(F.substr(H)))}for(S=B.length-1;S>=0;S--){K=B[S];if(K.valid){r.end(K.name)}}}}});