(self.webpackChunkcoubot_gatsby_blog=self.webpackChunkcoubot_gatsby_blog||[]).push([[883],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},6430:function(e,t,n){"use strict";n.d(t,{Z:function(){return Oe}});var r=n(7294),o=n(5444),i=n(3366),a=n(6125),c=["src"],u=function(e){var t=e.src,n=(0,i.Z)(e,c),u=(0,o.useStaticQuery)("4267943715"),s=(0,r.useMemo)((function(){return u.images.edges.find((function(e){var n=e.node;return t===n.relativePath}))}),[u,t]);if(!s)return null;var l=s.node,f=(l=void 0===l?{}:l).childImageSharp,p=l.publicURL;return"svg"!==l.extension&&f?r.createElement(a.G,Object.assign({image:f.gatsbyImageData,alt:p},n)):r.createElement("img",Object.assign({src:p,alt:p},n))};var s,l,f,p,d=function(e){var t=e.siteMetadata;return r.createElement("header",{className:"page-header"},r.createElement(o.Link,{className:"front-section",to:"/"},r.createElement(u,{className:"blog-logo",src:"logo.jpeg"}),r.createElement("div",{className:"blog-title"},r.createElement("div",{className:"blog-name"},t.name),r.createElement("div",{className:"blog-description"},t.shortDescription))))},y=n(5697),h=n.n(y),m=n(4839),b=n.n(m),g=n(2993),v=n.n(g),T=n(6494),w=n.n(T),A="bodyAttributes",O="htmlAttributes",E="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(C).map((function(e){return C[e]})),"charset"),j="cssText",k="href",P="http-equiv",L="innerHTML",M="itemprop",x="name",I="property",N="rel",R="src",_="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",H="defer",q="encodeSpecialCharacters",Y="onChangeClientState",F="titleTemplate",U=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),z=[C.NOSCRIPT,C.SCRIPT,C.STYLE],K="data-react-helmet",G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},$=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=oe(e,C.TITLE),n=oe(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=oe(e,B);return t||r||void 0},ee=function(e){return oe(e,Y)||function(){}},te=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},ne=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},re=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&se("Helmet: "+e+' should be of type "Array". Instead found type "'+G(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===N&&"canonical"===e[n].toLowerCase()||u===N&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==L&&c!==j&&c!==M||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=w()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},oe=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ie=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){ie(e)}),0)}),ae=function(e){return clearTimeout(e)},ce="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ie:n.g.requestAnimationFrame||ie,ue="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ae:n.g.cancelAnimationFrame||ae,se=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},le=null,fe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ye(C.BODY,r),ye(C.HTML,o),de(f,p);var d={baseTag:he(C.BASE,n),linkTags:he(C.LINK,i),metaTags:he(C.META,a),noscriptTags:he(C.NOSCRIPT,c),scriptTags:he(C.SCRIPT,s),styleTags:he(C.STYLE,l)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,y,h)},pe=function(e){return Array.isArray(e)?e.join(""):e},de=function(e,t){void 0!==e&&document.title!==e&&(document.title=pe(e)),ye(C.TITLE,t)},ye=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(K),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(K):n.getAttribute(K)!==a.join(",")&&n.setAttribute(K,a.join(","))}},he=function(e,t){var n=document.head||document.querySelector(C.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===L)n.innerHTML=t.innerHTML;else if(r===j)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(K,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},me=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)},ge=function(e,t,n){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(o={key:e})[K]=!0,i=be(n,o),[r.createElement(C.TITLE,i,e)];var e,n,o,i},toString:function(){return function(e,t,n,r){var o=me(n),i=pe(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+$(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+$(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case A:case O:return{toComponent:function(){return be(t)},toString:function(){return me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,i=((o={key:n})[K]=!0,o);return Object.keys(t).forEach((function(e){var n=D[e]||e;if(n===L||n===j){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),r.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===L||e===j)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+$(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ve=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:ge(C.BASE,t,r),bodyAttributes:ge(A,n,r),htmlAttributes:ge(O,o,r),link:ge(C.LINK,i,r),meta:ge(C.META,a,r),noscript:ge(C.NOSCRIPT,c,r),script:ge(C.SCRIPT,u,r),style:ge(C.STYLE,s,r),title:ge(C.TITLE,{title:f,titleAttributes:p},r)}},Te=b()((function(e){return{baseTag:ne([k,_],e),bodyAttributes:te(A,e),defer:oe(e,H),encode:oe(e,q),htmlAttributes:te(O,e),linkTags:re(C.LINK,[N,k],e),metaTags:re(C.META,[x,S,P,I,M],e),noscriptTags:re(C.NOSCRIPT,[L],e),onChangeClientState:ee(e),scriptTags:re(C.SCRIPT,[R,L],e),styleTags:re(C.STYLE,[j],e),title:X(e),titleAttributes:te(E,e)}}),(function(e){le&&ue(le),e.defer?le=ce((function(){fe(e,(function(){le=null}))})):(fe(e),le=null)}),ve)((function(){return null})),we=(l=Te,p=f=function(e){function t(){return Z(this,t),Q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!v()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case C.TITLE:return W({},o,((t={})[r.type]=a,t.titleAttributes=W({},i),t));case C.BODY:return W({},o,{bodyAttributes:W({},i)});case C.HTML:return W({},o,{htmlAttributes:W({},i)})}return W({},o,((n={})[r.type]=W({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(J(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=J(e,["children"]),o=W({},n);return t&&(o=this.mapChildrenToProps(t,o)),r.createElement(l,o)},V(t,null,[{key:"canUseDOM",set:function(e){l.canUseDOM=e}}]),t}(r.Component),f.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},f.defaultProps={defer:!0,encodeSpecialCharacters:!0},f.peek=l.peek,f.rewind=function(){var e=l.rewind();return e||(e=ve({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},p);we.renderStatic=we.rewind;var Ae=function(e){var t=e.siteMetadata,n=e.postMetadata,o=(null==n?void 0:n.description)||(null==t?void 0:t.description),i=(null==n?void 0:n.title)||(null==t?void 0:t.shortDescription);return r.createElement(we,{htmlAttributes:{lang:"en"},title:i,meta:[{property:"og:title",content:i},{property:"og:site_title",content:i},{name:"description",content:o},{property:"og:description",content:o},{property:"og:author",content:t.author},{property:"og:image",content:"ogImage.png"},{property:"og:type",content:"website"},{name:"google-site-verification",content:"9ZGMwzThErCJpGhAckjrY2Qt8tTjyJMmOGerPsab6xo"}]})},Oe=function(e){var t=e.siteMetadata,n=e.postMetadata,o=e.children;return r.createElement("div",{className:"page-wrapper"},r.createElement(Ae,{siteMetadata:t,postMetadata:n}),r.createElement(d,{siteMetadata:t}),r.createElement("main",{className:"page-content"},o))}},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=7efbea498153fa2b03fe2eff7641d8de6bedb34b-a02b484c9631b3c337ba.js.map