!function(t){var e={};function o(n){if(e[n])return e[n].exports;var f=e[n]={i:n,l:!1,exports:{}};return t[n].call(f.exports,f,f.exports,o),f.l=!0,f.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";var n=document.getElementById("original"),f=n.getContext("2d"),i=document.getElementById("magnified"),s=i.getContext("2d"),r=document.getElementById("square"),d=1,u=new Image;u.onload=function(){f.drawImage(u,0,0,n.width,n.height),d=u.width/n.width},u.src="./assets/img.jpg";n.getBoundingClientRect();window.onmousemove=function(t){var e=t.clientX,o=t.clientY;e<=n.offsetLeft+n.offsetWidth&&e>=n.offsetLeft&&o<=n.offsetTop+n.offsetHeight&&o>=n.offsetTop?function(t,e){r.style.display="block",i.style.display="inline";var o=t-45,f=e-45;o=(o=o<n.offsetLeft?n.offsetLeft:o)>n.offsetLeft+n.offsetWidth-90?n.offsetLeft+n.offsetWidth-90:o,f=(f=f<n.offsetTop?n.offsetTop:f)>n.offsetTop+n.offsetHeight-90?n.offsetTop+n.offsetHeight-90:f,function(t,e){r.style.left=t+"px",r.style.top=e+"px"}(o,f),function(t,e){var o=Math.round(t*d),n=Math.round(e*d),f=Math.round(r.offsetWidth*d),a=Math.round(r.offsetHeight*d);s.drawImage(u,o,n,f,a,0,0,i.width,i.height)}(o,f)}(e,o):(r.style.display="none",i.style.display="none")}}]);