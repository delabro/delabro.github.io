(function(u){var g;"undefined"!==typeof window?g=window:"undefined"!==typeof self&&(g=self);g.inViewport=u()})(function(){return function g(n,l,c){function p(f,m){if(!l[f]){if(!n[f]){var e="function"==typeof require&&require;if(!m&&e)return e(f,!0);if(r)return r(f,!0);e=Error("Cannot find module '"+f+"'");throw e.code="MODULE_NOT_FOUND",e;}e=l[f]={exports:{}};n[f][0].call(e.exports,function(c){var e=n[f][1][c];return p(e?e:c)},e,e.exports,g,n,l,c)}return l[f].exports}for(var r="function"==typeof require&&
require,m=0;m<c.length;m++)p(c[m]);return p}({1:[function(g,n,l){(function(c){function g(b,a,c){b.attachEvent?b.attachEvent("on"+a,c):b.addEventListener(a,c,!1)}function l(b,a,c){var d;return function(){var k=this,e=arguments,x=c&&!d;clearTimeout(d);d=setTimeout(function(){d=null;c||b.apply(k,e)},a);x&&b.apply(k,e)}}function m(b){function a(b,a,c){return{watch:function(){d.add(b,a,c)},dispose:function(){d.remove(b)}}}function e(a,d){if(!(t(c.document.documentElement,a)&&t(c.document.documentElement,
b)&&a.offsetWidth&&a.offsetHeight))return!1;var k=a.getBoundingClientRect(),q,f,g,h;b===c.document.body?(q=-d,f=-d,g=c.document.documentElement.clientWidth+d,h=c.document.documentElement.clientHeight+d):(h=b.getBoundingClientRect(),q=h.top-d,f=h.left-d,g=h.right+d,h=h.bottom+d);return k.right>=f&&k.left<=g&&k.bottom>=q&&k.top<=h}var d=f(),k=b===c.document.body?c:b,h=l(d.checkAll(function(a,b,c){e(a,b)&&(d.remove(a),c(a))}),15);g(k,"scroll",h);k===c&&g(c,"resize",h);w&&v(d,b,h);setInterval(h,150);
return{container:b,isInViewport:function(d,b,c){if(!c)return e(d,b);d=a(d,b,c);d.watch();return d}}}function f(){function b(d){for(var a=c.length-1;0<=a;a--)if(c[a][0]===d)return a;return-1}function a(a){return-1!==b(a)}var c=[];return{add:function(d,b,e){a(d)||c.push([d,b,e])},remove:function(a){a=b(a);-1!==a&&c.splice(a,1)},isWatched:a,checkAll:function(a){return function(){for(var b=c.length-1;0<=b;b--)a.apply(this,c[b])}}}}function v(b,a,c){function d(a){a=g.call([],Array.prototype.slice.call(a.addedNodes),
a.target);return 0<f.call(a,b.isWatched).length}var e=new MutationObserver(function(a){!0===a.some(d)&&setTimeout(c,0)}),f=Array.prototype.filter,g=Array.prototype.concat;e.observe(a,{childList:!0,subtree:!0,attributes:!0})}n.exports=function(b,a,f){var d=c.document.body;if(void 0===a||"function"===typeof a)f=a,a={};d=a.container||d;a=a.offset||0;for(var g=0;g<e.length;g++)if(e[g].container===d)return e[g].isInViewport(b,a,f);return e[e.push(m(d))-1].isInViewport(b,a,f)};var e=[],w="function"===typeof c.MutationObserver,
t=function(){return c.document?c.document.documentElement.compareDocumentPosition?function(b,a){return!!(b.compareDocumentPosition(a)&16)}:c.document.documentElement.contains?function(b,a){return b!==a&&(b.contains?b.contains(a):!1)}:function(b,a){for(;a=a.parentNode;)if(a===b)return!0;return!1}:!0}}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{}]},{},[1])(1)});
