!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){e.toArray=function(t){return[].slice.call(t)},e.find=function(t,n){return e.toArray((n||document).querySelectorAll(String(t)))},e.findParent=function(t,e){for(var n=t;(n=n.parentNode)&&!e.call(n););return n},e.on=function(t,n,a,r){"string"==typeof t&&(t=e.find(t)),Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),t.forEach(function(t){n.forEach(function(e){t.addEventListener(e,a,r||!1)})})},e.onState=function(t,n,a,r){return e.on(t,":"+n,a,r)},e.onGlobalState=function(t,n,a){var r=e.getGlobalStates()[t],o=e.getGlobalElement();return e.onState(o,r,n,a)},e.hasState=function(t,e){return t.classList.contains(e)},e.hasGlobalState=function(t){return e.hasState(e.getGlobalElement(),t)},e.getGlobalElement=function(){return document.body},e.triggerCustomEvent=function(t,e,n){return t.dispatchEvent(new CustomEvent(e,n))},e.triggerState=function(t,n,a,r){return e.triggerCustomEvent(t,":"+n,{detail:{action:a,data:r}})},e.triggerGlobalState=function(t,n,a){return e.triggerState(e.getGlobalElement(),t,n,a)},e.getRawState=function(t,e){return t.getAttribute(e)},e.changeState=function(t,n,a,r){var o,i="data-s-"+n;return a||(a=e.getRawState(t,i))||(a="is-active"),!!/(add|remove|toggle)/.test(n)&&((o=!1!==e.triggerState(t,a,n,r))&&t.classList[n](a),o)},e.addState=function(t,n,a){return e.changeState(t,"add",n,a)},e.addGlobalState=function(t,n,a){return e.addState(e.getGlobalElement(),"add",n,a)},e.removeState=function(t,n,a){return e.changeState(t,"remove",n,a)},e.removeGlobalState=function(t,n,a){return e.removeState(e.getGlobalElement(),"remove",n,a)},e.toggleState=function(t,n,a){return e.changeState(t,"toggle",n,a)},e.toggleGlobalState=function(t,n,a){return e.toggleState(e.getGlobalElement(),"toggle",n,a)},e.getStates=function(t,n){var a,r=e.getRawState(t,n||"data-s");try{a=JSON.parse(r)}catch(t){return{}}return a instanceof Object?a:{}},e.getState=function(t,n,a){return e.getStates(t,n,a)},e.getGlobalStates=function(t){return e.getStates(e.getGlobalElement(),t||"data-gs")},e.changeGlobalState=function(t,n,a){return e.changeState(e.getGlobalElement(),t,n,a)},e.escapeRegExp=function(t){return t.replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")}},function(t,e,n){"use strict";n.r(e);var a,r;n(2),n(3),n(4),n(5),n(6),n(7);a=n(0),r=function(){var t=location.href.split(/.+\//)[1];a.find('nav li > a[href="'+t+'"]').forEach(function(t){a.addState(t.parentNode)})},a.on(window,"hashchange",function(){a.find("nav li.is-active > a").forEach(function(t){a.removeState(t.parentNode)}),r()}),a.on("a","click",function(){var t=a.find("#page-header-opener")[0];this.hash&&a.hasState(t,"is-active")&&t.click()}),r()},function(t,e,n){},function(t,e,n){},function(t,e,n){var a,r;a=n(0),r=a.getGlobalStates(),a.onState("[data-gs-toggle]","is-active",function(){var t=r[a.getRawState(this,"data-gs-toggle")];a.changeGlobalState("toggle",t)})},function(t,e,n){var a;(a=n(0)).on("[data-gs-toggle]","click",function(){a.toggleState(this)})},function(t,e,n){var a,r;a=n(0),r=a.getGlobalStates(),a.on("input[data-internal-search]",["input","focus","blur"],function(t){var e=this.value.trim(),n=this.getAttribute("data-internal-search"),o=new RegExp("^"+a.escapeRegExp(e),"igm"),i=a.find(n),l="blur"!==t.type,u=e;a.changeGlobalState(u?"add":"remove",r.searching),i.forEach(function(t){var n=t.textContent;o.test(n)&&l?(t.innerHTML=n.replace(o,"<b>"+n.slice(0,e.length)+"</b>"),a.findParent(t.firstChild,function(){return a.addState(this,"matches"),/ul|ol/i.test(this.tagName)})):(t.innerHTML=n,l&&a.findParent(t.firstChild,function(){return!!/ul|ol/i.test(this.tagName)||(a.removeState(this,"matches"),!1)}))})})},function(t,e){window.addEventListener("load",function(){var t,e,n,a,r=document.getElementsByClassName("prettyprint source linenums"),o=0,i=0;if(r&&r[0])for(a=document.location.hash.substring(1),n=(e=r[0].getElementsByTagName("li")).length;o<n;o++)t="line"+ ++i,e[o].id=t,t===a&&(e[o].className+=" selected",e[o].scrollIntoView())})}]);
//# sourceMappingURL=jsdoc-template.js.map