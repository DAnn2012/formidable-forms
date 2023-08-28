/*! For license information please see formidable_overlay.js.LICENSE.txt */
(()=>{var e={7:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrmOverlay=void 0;var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=(o=n(856))&&o.__esModule?o:{default:o};t.FrmOverlay=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.body=document.querySelector("body")}return a(e,[{key:"open",value:function(e){this.overlayData={heroImage:null,heading:null,copy:null,buttons:[]},this.overlayData=r({},this.overlayData,e),this.body.insertAdjacentHTML("afterbegin",this.buildOverlay()),this.initCloseButton(),this.initOverlayIntroAnimation(400)}},{key:"close",value:function(){var e=document.querySelector(".frm-overlay--wrapper");e&&e.remove()}},{key:"initCloseButton",value:function(){var e=document.querySelector(".frm-overlay--wrapper");if(e){var t=document.createElement("span");t.classList.add("frm-overlay--close"),t.addEventListener("click",this.close),e.prepend(t)}}},{key:"getHeroImage",value:function(){return this.overlayData.heroImage?'<img src="'+i.default.sanitize(this.overlayData.heroImage)+'"/>':""}},{key:"getButtons",value:function(){var e=this.overlayData.buttons.map((function(e){if(!e.url||""===e.url)return"";var t=e.target?"target="+i.default.sanitize(e.target):"";return'<a href="'+i.default.sanitize(e.url)+'" '+t+" >"+i.default.sanitize(e.label)+"</a>"}));return e?'<div class="frm-overlay--cta">'+e.join("")+"</div>":""}},{key:"getHeading",value:function(){return this.overlayData.heading?'<h2 class="frm-overlay--heading">'+i.default.sanitize(this.overlayData.heading)+"</h2>":""}},{key:"getCopy",value:function(){return this.overlayData.copy?'<div class="frm-overlay--copy">'+i.default.sanitize(this.overlayData.copy)+"</div>":""}},{key:"initOverlayIntroAnimation",value:function(e){var t=document.querySelector(".frm-overlay--wrapper");t&&setTimeout((function(){t.classList.add("frm-active")}),e)}},{key:"buildOverlay",value:function(){return'\n\t\t\t<div class="frm-overlay--wrapper frm_wrap">\n\t\t\t\t<div class="frm-overlay--container">\n\t\t\t\t\t<div class="frm-overlay--hero-image">'+this.getHeroImage()+"</div>\n\t\t\t\t\t"+this.getHeading()+"\n\t\t\t\t\t"+this.getCopy()+"\n\t\t\t\t\t"+this.getButtons()+"\n\t\t\t\t</div>\n\t\t\t</div>"}}]),e}()},856:function(e){e.exports=function(){"use strict";const{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:o,getOwnPropertyDescriptor:r}=Object;let{freeze:a,seal:i,create:l}=Object,{apply:c,construct:s}="undefined"!=typeof Reflect&&Reflect;c||(c=function(e,t,n){return e.apply(t,n)}),a||(a=function(e){return e}),i||(i=function(e){return e}),s||(s=function(e,t){return new e(...t)});const u=A(Array.prototype.forEach),m=A(Array.prototype.pop),f=A(Array.prototype.push),p=A(String.prototype.toLowerCase),d=A(String.prototype.toString),h=A(String.prototype.match),g=A(String.prototype.replace),y=A(String.prototype.indexOf),T=A(String.prototype.trim),v=A(RegExp.prototype.test),E=(b=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(b,t)});var b;function A(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return c(e,t,o)}}function _(e,o,r){var a;r=null!==(a=r)&&void 0!==a?a:p,t&&t(e,null);let i=o.length;for(;i--;){let t=o[i];if("string"==typeof t){const e=r(t);e!==t&&(n(o)||(o[i]=e),t=e)}e[t]=!0}return e}function N(t){const n=l(null);for(const[o,r]of e(t))n[o]=r;return n}function S(e,t){for(;null!==e;){const n=r(e,t);if(n){if(n.get)return A(n.get);if("function"==typeof n.value)return A(n.value)}e=o(e)}return function(e){return console.warn("fallback value for",e),null}}const w=a(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=a(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),R=a(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),k=a(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),L=a(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),O=a(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),x=a(["#text"]),C=a(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),I=a(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),M=a(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),U=a(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),P=i(/\{\{[\w\W]*|[\w\W]*\}\}/gm),H=i(/<%[\w\W]*|[\w\W]*%>/gm),F=i(/\${[\w\W]*}/gm),z=i(/^data-[\-\w.\u00B7-\uFFFF]/),B=i(/^aria-[\-\w]+$/),W=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),j=i(/^(?:\w+script|data):/i),G=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Y=i(/^html$/i);var q=Object.freeze({__proto__:null,MUSTACHE_EXPR:P,ERB_EXPR:H,TMPLIT_EXPR:F,DATA_ATTR:z,ARIA_ATTR:B,IS_ALLOWED_URI:W,IS_SCRIPT_OR_DATA:j,ATTR_WHITESPACE:G,DOCTYPE_NAME:Y});const X=()=>"undefined"==typeof window?null:window,K=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();const o=e=>t(e);if(o.version="3.0.5",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;const r=n.document,i=r.currentScript;let{document:l}=n;const{DocumentFragment:c,HTMLTemplateElement:s,Node:b,Element:A,NodeFilter:P,NamedNodeMap:H=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:F,DOMParser:z,trustedTypes:B}=n,j=A.prototype,G=S(j,"cloneNode"),V=S(j,"nextSibling"),$=S(j,"childNodes"),Z=S(j,"parentNode");if("function"==typeof s){const e=l.createElement("template");e.content&&e.content.ownerDocument&&(l=e.content.ownerDocument)}let J,Q="";const{implementation:ee,createNodeIterator:te,createDocumentFragment:ne,getElementsByTagName:oe}=l,{importNode:re}=r;let ae={};o.isSupported="function"==typeof e&&"function"==typeof Z&&ee&&void 0!==ee.createHTMLDocument;const{MUSTACHE_EXPR:ie,ERB_EXPR:le,TMPLIT_EXPR:ce,DATA_ATTR:se,ARIA_ATTR:ue,IS_SCRIPT_OR_DATA:me,ATTR_WHITESPACE:fe}=q;let{IS_ALLOWED_URI:pe}=q,de=null;const he=_({},[...w,...D,...R,...L,...x]);let ge=null;const ye=_({},[...C,...I,...M,...U]);let Te=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ve=null,Ee=null,be=!0,Ae=!0,_e=!1,Ne=!0,Se=!1,we=!1,De=!1,Re=!1,ke=!1,Le=!1,Oe=!1,xe=!0,Ce=!1,Ie=!0,Me=!1,Ue={},Pe=null;const He=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Fe=null;const ze=_({},["audio","video","img","source","image","track"]);let Be=null;const We=_({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),je="http://www.w3.org/1998/Math/MathML",Ge="http://www.w3.org/2000/svg",Ye="http://www.w3.org/1999/xhtml";let qe=Ye,Xe=!1,Ke=null;const Ve=_({},[je,Ge,Ye],d);let $e;const Ze=["application/xhtml+xml","text/html"];let Je,Qe=null;const et=l.createElement("form"),tt=function(e){return e instanceof RegExp||e instanceof Function},nt=function(e){if(!Qe||Qe!==e){if(e&&"object"==typeof e||(e={}),e=N(e),$e=$e=-1===Ze.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,Je="application/xhtml+xml"===$e?d:p,de="ALLOWED_TAGS"in e?_({},e.ALLOWED_TAGS,Je):he,ge="ALLOWED_ATTR"in e?_({},e.ALLOWED_ATTR,Je):ye,Ke="ALLOWED_NAMESPACES"in e?_({},e.ALLOWED_NAMESPACES,d):Ve,Be="ADD_URI_SAFE_ATTR"in e?_(N(We),e.ADD_URI_SAFE_ATTR,Je):We,Fe="ADD_DATA_URI_TAGS"in e?_(N(ze),e.ADD_DATA_URI_TAGS,Je):ze,Pe="FORBID_CONTENTS"in e?_({},e.FORBID_CONTENTS,Je):He,ve="FORBID_TAGS"in e?_({},e.FORBID_TAGS,Je):{},Ee="FORBID_ATTR"in e?_({},e.FORBID_ATTR,Je):{},Ue="USE_PROFILES"in e&&e.USE_PROFILES,be=!1!==e.ALLOW_ARIA_ATTR,Ae=!1!==e.ALLOW_DATA_ATTR,_e=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ne=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Se=e.SAFE_FOR_TEMPLATES||!1,we=e.WHOLE_DOCUMENT||!1,ke=e.RETURN_DOM||!1,Le=e.RETURN_DOM_FRAGMENT||!1,Oe=e.RETURN_TRUSTED_TYPE||!1,Re=e.FORCE_BODY||!1,xe=!1!==e.SANITIZE_DOM,Ce=e.SANITIZE_NAMED_PROPS||!1,Ie=!1!==e.KEEP_CONTENT,Me=e.IN_PLACE||!1,pe=e.ALLOWED_URI_REGEXP||W,qe=e.NAMESPACE||Ye,Te=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&tt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Te.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&tt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Te.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Te.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Se&&(Ae=!1),Le&&(ke=!0),Ue&&(de=_({},[...x]),ge=[],!0===Ue.html&&(_(de,w),_(ge,C)),!0===Ue.svg&&(_(de,D),_(ge,I),_(ge,U)),!0===Ue.svgFilters&&(_(de,R),_(ge,I),_(ge,U)),!0===Ue.mathMl&&(_(de,L),_(ge,M),_(ge,U))),e.ADD_TAGS&&(de===he&&(de=N(de)),_(de,e.ADD_TAGS,Je)),e.ADD_ATTR&&(ge===ye&&(ge=N(ge)),_(ge,e.ADD_ATTR,Je)),e.ADD_URI_SAFE_ATTR&&_(Be,e.ADD_URI_SAFE_ATTR,Je),e.FORBID_CONTENTS&&(Pe===He&&(Pe=N(Pe)),_(Pe,e.FORBID_CONTENTS,Je)),Ie&&(de["#text"]=!0),we&&_(de,["html","head","body"]),de.table&&(_(de,["tbody"]),delete ve.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');J=e.TRUSTED_TYPES_POLICY,Q=J.createHTML("")}else void 0===J&&(J=K(B,i)),null!==J&&"string"==typeof Q&&(Q=J.createHTML(""));a&&a(e),Qe=e}},ot=_({},["mi","mo","mn","ms","mtext"]),rt=_({},["foreignobject","desc","title","annotation-xml"]),at=_({},["title","style","font","a","script"]),it=_({},D);_(it,R),_(it,k);const lt=_({},L);_(lt,O);const ct=function(e){f(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},st=function(e,t){try{f(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){f(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ge[e])if(ke||Le)try{ct(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},ut=function(e){let t,n;if(Re)e="<remove></remove>"+e;else{const t=h(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===$e&&qe===Ye&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=J?J.createHTML(e):e;if(qe===Ye)try{t=(new z).parseFromString(o,$e)}catch(e){}if(!t||!t.documentElement){t=ee.createDocument(qe,"template",null);try{t.documentElement.innerHTML=Xe?Q:o}catch(e){}}const r=t.body||t.documentElement;return e&&n&&r.insertBefore(l.createTextNode(n),r.childNodes[0]||null),qe===Ye?oe.call(t,we?"html":"body")[0]:we?t.documentElement:r},mt=function(e){return te.call(e.ownerDocument||e,e,P.SHOW_ELEMENT|P.SHOW_COMMENT|P.SHOW_TEXT,null,!1)},ft=function(e){return"object"==typeof b?e instanceof b:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},pt=function(e,t,n){ae[e]&&u(ae[e],(e=>{e.call(o,t,n,Qe)}))},dt=function(e){let t;if(pt("beforeSanitizeElements",e,null),(n=e)instanceof F&&("string"!=typeof n.nodeName||"string"!=typeof n.textContent||"function"!=typeof n.removeChild||!(n.attributes instanceof H)||"function"!=typeof n.removeAttribute||"function"!=typeof n.setAttribute||"string"!=typeof n.namespaceURI||"function"!=typeof n.insertBefore||"function"!=typeof n.hasChildNodes))return ct(e),!0;var n;const r=Je(e.nodeName);if(pt("uponSanitizeElement",e,{tagName:r,allowedTags:de}),e.hasChildNodes()&&!ft(e.firstElementChild)&&(!ft(e.content)||!ft(e.content.firstElementChild))&&v(/<[/\w]/g,e.innerHTML)&&v(/<[/\w]/g,e.textContent))return ct(e),!0;if(!de[r]||ve[r]){if(!ve[r]&&gt(r)){if(Te.tagNameCheck instanceof RegExp&&v(Te.tagNameCheck,r))return!1;if(Te.tagNameCheck instanceof Function&&Te.tagNameCheck(r))return!1}if(Ie&&!Pe[r]){const t=Z(e)||e.parentNode,n=$(e)||e.childNodes;if(n&&t)for(let o=n.length-1;o>=0;--o)t.insertBefore(G(n[o],!0),V(e))}return ct(e),!0}return e instanceof A&&!function(e){let t=Z(e);t&&t.tagName||(t={namespaceURI:qe,tagName:"template"});const n=p(e.tagName),o=p(t.tagName);return!!Ke[e.namespaceURI]&&(e.namespaceURI===Ge?t.namespaceURI===Ye?"svg"===n:t.namespaceURI===je?"svg"===n&&("annotation-xml"===o||ot[o]):Boolean(it[n]):e.namespaceURI===je?t.namespaceURI===Ye?"math"===n:t.namespaceURI===Ge?"math"===n&&rt[o]:Boolean(lt[n]):e.namespaceURI===Ye?!(t.namespaceURI===Ge&&!rt[o])&&!(t.namespaceURI===je&&!ot[o])&&!lt[n]&&(at[n]||!it[n]):!("application/xhtml+xml"!==$e||!Ke[e.namespaceURI]))}(e)?(ct(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!v(/<\/no(script|embed|frames)/i,e.innerHTML)?(Se&&3===e.nodeType&&(t=e.textContent,t=g(t,ie," "),t=g(t,le," "),t=g(t,ce," "),e.textContent!==t&&(f(o.removed,{element:e.cloneNode()}),e.textContent=t)),pt("afterSanitizeElements",e,null),!1):(ct(e),!0)},ht=function(e,t,n){if(xe&&("id"===t||"name"===t)&&(n in l||n in et))return!1;if(Ae&&!Ee[t]&&v(se,t));else if(be&&v(ue,t));else if(!ge[t]||Ee[t]){if(!(gt(e)&&(Te.tagNameCheck instanceof RegExp&&v(Te.tagNameCheck,e)||Te.tagNameCheck instanceof Function&&Te.tagNameCheck(e))&&(Te.attributeNameCheck instanceof RegExp&&v(Te.attributeNameCheck,t)||Te.attributeNameCheck instanceof Function&&Te.attributeNameCheck(t))||"is"===t&&Te.allowCustomizedBuiltInElements&&(Te.tagNameCheck instanceof RegExp&&v(Te.tagNameCheck,n)||Te.tagNameCheck instanceof Function&&Te.tagNameCheck(n))))return!1}else if(Be[t]);else if(v(pe,g(n,fe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==y(n,"data:")||!Fe[e])if(_e&&!v(me,g(n,fe,"")));else if(n)return!1;return!0},gt=function(e){return e.indexOf("-")>0},yt=function(e){let t,n,r,a;pt("beforeSanitizeAttributes",e,null);const{attributes:i}=e;if(!i)return;const l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ge};for(a=i.length;a--;){t=i[a];const{name:c,namespaceURI:s}=t;if(n="value"===c?t.value:T(t.value),r=Je(c),l.attrName=r,l.attrValue=n,l.keepAttr=!0,l.forceKeepAttr=void 0,pt("uponSanitizeAttribute",e,l),n=l.attrValue,l.forceKeepAttr)continue;if(st(c,e),!l.keepAttr)continue;if(!Ne&&v(/\/>/i,n)){st(c,e);continue}Se&&(n=g(n,ie," "),n=g(n,le," "),n=g(n,ce," "));const u=Je(e.nodeName);if(ht(u,r,n)){if(!Ce||"id"!==r&&"name"!==r||(st(c,e),n="user-content-"+n),J&&"object"==typeof B&&"function"==typeof B.getAttributeType)if(s);else switch(B.getAttributeType(u,r)){case"TrustedHTML":n=J.createHTML(n);break;case"TrustedScriptURL":n=J.createScriptURL(n)}try{s?e.setAttributeNS(s,c,n):e.setAttribute(c,n),m(o.removed)}catch(e){}}}pt("afterSanitizeAttributes",e,null)},Tt=function e(t){let n;const o=mt(t);for(pt("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)pt("uponSanitizeShadowNode",n,null),dt(n)||(n.content instanceof c&&e(n.content),yt(n));pt("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(e){let t,n,a,i,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Xe=!e,Xe&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ft(e)){if("function"!=typeof e.toString)throw E("toString is not a function");if("string"!=typeof(e=e.toString()))throw E("dirty is not a string, aborting")}if(!o.isSupported)return e;if(De||nt(l),o.removed=[],"string"==typeof e&&(Me=!1),Me){if(e.nodeName){const t=Je(e.nodeName);if(!de[t]||ve[t])throw E("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof b)t=ut("\x3c!----\x3e"),n=t.ownerDocument.importNode(e,!0),1===n.nodeType&&"BODY"===n.nodeName||"HTML"===n.nodeName?t=n:t.appendChild(n);else{if(!ke&&!Se&&!we&&-1===e.indexOf("<"))return J&&Oe?J.createHTML(e):e;if(t=ut(e),!t)return ke?null:Oe?Q:""}t&&Re&&ct(t.firstChild);const s=mt(Me?e:t);for(;a=s.nextNode();)dt(a)||(a.content instanceof c&&Tt(a.content),yt(a));if(Me)return e;if(ke){if(Le)for(i=ne.call(t.ownerDocument);t.firstChild;)i.appendChild(t.firstChild);else i=t;return(ge.shadowroot||ge.shadowrootmode)&&(i=re.call(r,i,!0)),i}let u=we?t.outerHTML:t.innerHTML;return we&&de["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&v(Y,t.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+u),Se&&(u=g(u,ie," "),u=g(u,le," "),u=g(u,ce," ")),J&&Oe?J.createHTML(u):u},o.setConfig=function(e){nt(e),De=!0},o.clearConfig=function(){Qe=null,De=!1},o.isValidAttribute=function(e,t,n){Qe||nt({});const o=Je(e),r=Je(t);return ht(o,r,n)},o.addHook=function(e,t){"function"==typeof t&&(ae[e]=ae[e]||[],f(ae[e],t))},o.removeHook=function(e){if(ae[e])return m(ae[e])},o.removeHooks=function(e){ae[e]&&(ae[e]=[])},o.removeAllHooks=function(){ae={}},o}()}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}(()=>{"use strict";var e=n(7);window.frmOverlay=new e.FrmOverlay})()})();