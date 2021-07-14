!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.StarRating=e():t.StarRating=e()}(this,(function(){return function(){var t={621:function(t,e,n){var r;!function(i){var a=/^\s+/,o=/\s+$/,s=0,u=i.round,f=i.min,l=i.max,c=i.random;function h(t,e){if(e=e||{},(t=t||"")instanceof h)return t;if(!(this instanceof h))return new h(t,e);var n=function(t){var e={r:0,g:0,b:0},n=1,r=null,s=null,u=null,c=!1,h=!1;"string"==typeof t&&(t=function(t){t=t.replace(a,"").replace(o,"").toLowerCase();var e,n=!1;if(E[t])t=E[t],n=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};if(e=U.rgb.exec(t))return{r:e[1],g:e[2],b:e[3]};if(e=U.rgba.exec(t))return{r:e[1],g:e[2],b:e[3],a:e[4]};if(e=U.hsl.exec(t))return{h:e[1],s:e[2],l:e[3]};if(e=U.hsla.exec(t))return{h:e[1],s:e[2],l:e[3],a:e[4]};if(e=U.hsv.exec(t))return{h:e[1],s:e[2],v:e[3]};if(e=U.hsva.exec(t))return{h:e[1],s:e[2],v:e[3],a:e[4]};if(e=U.hex8.exec(t))return{r:N(e[1]),g:N(e[2]),b:N(e[3]),a:M(e[4]),format:n?"name":"hex8"};if(e=U.hex6.exec(t))return{r:N(e[1]),g:N(e[2]),b:N(e[3]),format:n?"name":"hex"};if(e=U.hex4.exec(t))return{r:N(e[1]+""+e[1]),g:N(e[2]+""+e[2]),b:N(e[3]+""+e[3]),a:M(e[4]+""+e[4]),format:n?"name":"hex8"};if(e=U.hex3.exec(t))return{r:N(e[1]+""+e[1]),g:N(e[2]+""+e[2]),b:N(e[3]+""+e[3]),format:n?"name":"hex"};return!1}(t));"object"==typeof t&&(D(t.r)&&D(t.g)&&D(t.b)?(g=t.r,d=t.g,b=t.b,e={r:255*j(g,255),g:255*j(d,255),b:255*j(b,255)},c=!0,h="%"===String(t.r).substr(-1)?"prgb":"rgb"):D(t.h)&&D(t.s)&&D(t.v)?(r=T(t.s),s=T(t.v),e=function(t,e,n){t=6*j(t,360),e=j(e,100),n=j(n,100);var r=i.floor(t),a=t-r,o=n*(1-e),s=n*(1-a*e),u=n*(1-(1-a)*e),f=r%6;return{r:255*[n,s,o,o,u,n][f],g:255*[u,n,n,s,o,o][f],b:255*[o,o,u,n,n,s][f]}}(t.h,r,s),c=!0,h="hsv"):D(t.h)&&D(t.s)&&D(t.l)&&(r=T(t.s),u=T(t.l),e=function(t,e,n){var r,i,a;function o(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(t=j(t,360),e=j(e,100),n=j(n,100),0===e)r=i=a=n;else{var s=n<.5?n*(1+e):n+e-n*e,u=2*n-s;r=o(u,s,t+1/3),i=o(u,s,t),a=o(u,s,t-1/3)}return{r:255*r,g:255*i,b:255*a}}(t.h,r,u),c=!0,h="hsl"),t.hasOwnProperty("a")&&(n=t.a));var g,d,b;return n=q(n),{ok:c,format:t.format||h,r:f(255,l(e.r,0)),g:f(255,l(e.g,0)),b:f(255,l(e.b,0)),a:n}}(t);this._originalInput=t,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=u(100*this._a)/100,this._format=e.format||n.format,this._gradientType=e.gradientType,this._r<1&&(this._r=u(this._r)),this._g<1&&(this._g=u(this._g)),this._b<1&&(this._b=u(this._b)),this._ok=n.ok,this._tc_id=s++}function g(t,e,n){t=j(t,255),e=j(e,255),n=j(n,255);var r,i,a=l(t,e,n),o=f(t,e,n),s=(a+o)/2;if(a==o)r=i=0;else{var u=a-o;switch(i=s>.5?u/(2-a-o):u/(a+o),a){case t:r=(e-n)/u+(e<n?6:0);break;case e:r=(n-t)/u+2;break;case n:r=(t-e)/u+4}r/=6}return{h:r,s:i,l:s}}function d(t,e,n){t=j(t,255),e=j(e,255),n=j(n,255);var r,i,a=l(t,e,n),o=f(t,e,n),s=a,u=a-o;if(i=0===a?0:u/a,a==o)r=0;else{switch(a){case t:r=(e-n)/u+(e<n?6:0);break;case e:r=(n-t)/u+2;break;case n:r=(t-e)/u+4}r/=6}return{h:r,s:i,v:s}}function b(t,e,n,r){var i=[O(u(t).toString(16)),O(u(e).toString(16)),O(u(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function p(t,e,n,r){return[O(I(r)),O(u(t).toString(16)),O(u(e).toString(16)),O(u(n).toString(16))].join("")}function v(t,e){e=0===e?0:e||10;var n=h(t).toHsl();return n.s-=e/100,n.s=z(n.s),h(n)}function m(t,e){e=0===e?0:e||10;var n=h(t).toHsl();return n.s+=e/100,n.s=z(n.s),h(n)}function y(t){return h(t).desaturate(100)}function _(t,e){e=0===e?0:e||10;var n=h(t).toHsl();return n.l+=e/100,n.l=z(n.l),h(n)}function k(t,e){e=0===e?0:e||10;var n=h(t).toRgb();return n.r=l(0,f(255,n.r-u(-e/100*255))),n.g=l(0,f(255,n.g-u(-e/100*255))),n.b=l(0,f(255,n.b-u(-e/100*255))),h(n)}function w(t,e){e=0===e?0:e||10;var n=h(t).toHsl();return n.l-=e/100,n.l=z(n.l),h(n)}function x(t,e){var n=h(t).toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,h(n)}function A(t){var e=h(t).toHsl();return e.h=(e.h+180)%360,h(e)}function S(t){var e=h(t).toHsl(),n=e.h;return[h(t),h({h:(n+120)%360,s:e.s,l:e.l}),h({h:(n+240)%360,s:e.s,l:e.l})]}function C(t){var e=h(t).toHsl(),n=e.h;return[h(t),h({h:(n+90)%360,s:e.s,l:e.l}),h({h:(n+180)%360,s:e.s,l:e.l}),h({h:(n+270)%360,s:e.s,l:e.l})]}function R(t){var e=h(t).toHsl(),n=e.h;return[h(t),h({h:(n+72)%360,s:e.s,l:e.l}),h({h:(n+216)%360,s:e.s,l:e.l})]}function H(t,e,n){e=e||6,n=n||30;var r=h(t).toHsl(),i=360/n,a=[h(t)];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,a.push(h(r));return a}function P(t,e){e=e||6;for(var n=h(t).toHsv(),r=n.h,i=n.s,a=n.v,o=[],s=1/e;e--;)o.push(h({h:r,s:i,v:a})),a=(a+s)%1;return o}h.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,n,r=this.toRgb();return t=r.r/255,e=r.g/255,n=r.b/255,.2126*(t<=.03928?t/12.92:i.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:i.pow((e+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:i.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=q(t),this._roundA=u(100*this._a)/100,this},toHsv:function(){var t=d(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=d(this._r,this._g,this._b),e=u(360*t.h),n=u(100*t.s),r=u(100*t.v);return 1==this._a?"hsv("+e+", "+n+"%, "+r+"%)":"hsva("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var t=g(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=g(this._r,this._g,this._b),e=u(360*t.h),n=u(100*t.s),r=u(100*t.l);return 1==this._a?"hsl("+e+", "+n+"%, "+r+"%)":"hsla("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(t){return b(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,e,n,r,i){var a=[O(u(t).toString(16)),O(u(e).toString(16)),O(u(n).toString(16)),O(I(r))];if(i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1))return a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0);return a.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:u(this._r),g:u(this._g),b:u(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+u(this._r)+", "+u(this._g)+", "+u(this._b)+")":"rgba("+u(this._r)+", "+u(this._g)+", "+u(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:u(100*j(this._r,255))+"%",g:u(100*j(this._g,255))+"%",b:u(100*j(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+u(100*j(this._r,255))+"%, "+u(100*j(this._g,255))+"%, "+u(100*j(this._b,255))+"%)":"rgba("+u(100*j(this._r,255))+"%, "+u(100*j(this._g,255))+"%, "+u(100*j(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(F[b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+p(this._r,this._g,this._b,this._a),n=e,r=this._gradientType?"GradientType = 1, ":"";if(t){var i=h(t);n="#"+p(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+e+",endColorstr="+n+")"},toString:function(t){var e=!!t;t=t||this._format;var n=!1,r=this._a<1&&this._a>=0;return e||!r||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(n=this.toRgbString()),"prgb"===t&&(n=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(n=this.toHexString()),"hex3"===t&&(n=this.toHexString(!0)),"hex4"===t&&(n=this.toHex8String(!0)),"hex8"===t&&(n=this.toHex8String()),"name"===t&&(n=this.toName()),"hsl"===t&&(n=this.toHslString()),"hsv"===t&&(n=this.toHsvString()),n||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return h(this.toString())},_applyModification:function(t,e){var n=t.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(_,arguments)},brighten:function(){return this._applyModification(k,arguments)},darken:function(){return this._applyModification(w,arguments)},desaturate:function(){return this._applyModification(v,arguments)},saturate:function(){return this._applyModification(m,arguments)},greyscale:function(){return this._applyModification(y,arguments)},spin:function(){return this._applyModification(x,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(H,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(P,arguments)},splitcomplement:function(){return this._applyCombination(R,arguments)},triad:function(){return this._applyCombination(S,arguments)},tetrad:function(){return this._applyCombination(C,arguments)}},h.fromRatio=function(t,e){if("object"==typeof t){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]="a"===r?t[r]:T(t[r]));t=n}return h(t,e)},h.equals=function(t,e){return!(!t||!e)&&h(t).toRgbString()==h(e).toRgbString()},h.random=function(){return h.fromRatio({r:c(),g:c(),b:c()})},h.mix=function(t,e,n){n=0===n?0:n||50;var r=h(t).toRgb(),i=h(e).toRgb(),a=n/100;return h({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})},h.readability=function(t,e){var n=h(t),r=h(e);return(i.max(n.getLuminance(),r.getLuminance())+.05)/(i.min(n.getLuminance(),r.getLuminance())+.05)},h.isReadable=function(t,e,n){var r,i,a=h.readability(t,e);switch(i=!1,(r=function(t){var e,n;e=((t=t||{level:"AA",size:"small"}).level||"AA").toUpperCase(),n=(t.size||"small").toLowerCase(),"AA"!==e&&"AAA"!==e&&(e="AA");"small"!==n&&"large"!==n&&(n="small");return{level:e,size:n}}(n)).level+r.size){case"AAsmall":case"AAAlarge":i=a>=4.5;break;case"AAlarge":i=a>=3;break;case"AAAsmall":i=a>=7}return i},h.mostReadable=function(t,e,n){var r,i,a,o,s=null,u=0;i=(n=n||{}).includeFallbackColors,a=n.level,o=n.size;for(var f=0;f<e.length;f++)(r=h.readability(t,e[f]))>u&&(u=r,s=h(e[f]));return h.isReadable(t,s,{level:a,size:o})||!i?s:(n.includeFallbackColors=!1,h.mostReadable(t,["#fff","#000"],n))};var E=h.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},F=h.hexNames=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}(E);function q(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function j(t,e){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var n=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=f(e,l(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),i.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function z(t){return f(1,l(0,t))}function N(t){return parseInt(t,16)}function O(t){return 1==t.length?"0"+t:""+t}function T(t){return t<=1&&(t=100*t+"%"),t}function I(t){return i.round(255*parseFloat(t)).toString(16)}function M(t){return N(t)/255}var L,V,$,U=(V="[\\s|\\(]+("+(L="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",$="[\\s|\\(]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",{CSS_UNIT:new RegExp(L),rgb:new RegExp("rgb"+V),rgba:new RegExp("rgba"+$),hsl:new RegExp("hsl"+V),hsla:new RegExp("hsla"+$),hsv:new RegExp("hsv"+V),hsva:new RegExp("hsva"+$),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function D(t){return!!U.CSS_UNIT.exec(t)}t.exports?t.exports=h:void 0===(r=function(){return h}.call(e,n,e,t))||(t.exports=r)}(Math)}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){"use strict";var t;n.r(r),n.d(r,{default:function(){return S}});var e=new Uint8Array(16);function i(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(e)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var o=function(t){return"string"==typeof t&&a.test(t)},s=[],u=0;u<256;++u)s.push((u+256).toString(16).substr(1));var f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase();if(!o(n))throw TypeError("Stringified UUID is invalid");return n};var l=function(t,e,n){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=r[a];return e}return f(r)};function c(t){console.error("[StarRating library]: ".concat(t))}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=n(621),b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,"_currentRating",5),g(this,"_starsColorPrimary","#ff0000"),g(this,"_starsColorHover","#ff8142"),g(this,"_uniqueClassName",null),g(this,"_disabled",!1),g(this,"_size","16px"),g(this,"_loader",!1),g(this,"_message",""),"starsColor"in e&&(this.starsColorPrimary=e.starsColor),"currentRating"in e&&(this.currentRating=e.currentRating),"disabled"in e&&(this.disabled=e.disabled),"size"in e&&(this.size=e.size),"loader"in e&&(this.loader=e.loader),"message"in e&&(this.message=e.message),this.uniqueClassName="stars-rating--".concat(l())}var e,n,r;return e=t,(n=[{key:"starsColorPrimary",get:function(){return this._starsColorPrimary},set:function(t){!function(t){return/^#[0-9A-F]{3,6}$/i.test(t)}(t)?c(" Error with validation hex color, current value is ".concat(t,", but i wait for example #000")):(this._starsColorPrimary=t,this._starsColorHover=d(t).lighten(30).toString())}},{key:"starsColorHover",get:function(){return this._starsColorHover}},{key:"currentRating",get:function(){return this._currentRating},set:function(t){t%1==0&&t<6&&t>=0?this._currentRating=t:c("You must use params from 0 to 5, current value is ".concat(t))}},{key:"uniqueClassName",get:function(){return this._uniqueClassName},set:function(t){this._uniqueClassName=t}},{key:"disabled",get:function(){return this._disabled},set:function(t){this._disabled=t}},{key:"size",get:function(){return this._size},set:function(t){this._size=t}},{key:"loader",get:function(){return this._loader},set:function(t){this._loader=t}},{key:"message",get:function(){return this._message},set:function(t){this._message=t}}])&&h(e.prototype,n),r&&h(e,r),t}();function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,"options",void 0),v(this,"htmlElement",void 0),this.options=e,this.htmlElement=n}var e,n,r;return e=t,(n=[{key:"renderStars",value:function(){this.htmlElement.innerHTML='\n      <div class="stars-rating'.concat(this.options.disabled?"":" hoverable"," ").concat(this.options.uniqueClassName,'">\n      <div class="stars-rating--content">\n        ').concat(this._renderSpans(this.options.currentRating),"\n        ").concat(this._renderSpin(),"\n      </div>\n      ").concat(this._renderInfoPanel(),"\n      <style>\n        .").concat(this.options.uniqueClassName," {\n          color: ").concat(this.options.starsColorPrimary,";\n          font-size: ").concat(this.options.size,";\n        }\n        .").concat(this.options.uniqueClassName," .stars-rating--info-panel {\n          // border-color: ").concat(this.options.starsColorPrimary,";\n        }\n        .").concat(this.options.uniqueClassName," .stars-rating--info-panel:before {\n          /*border-right-color: ").concat(this.options.starsColorPrimary,";*/\n        }\n        .").concat(this.options.uniqueClassName," .icon-star{\n          font-size: ").concat(this.options.size,";\n        }\n        .").concat(this.options.uniqueClassName,".hoverable .icon-star:hover ~ .icon-star:before,\n        .").concat(this.options.uniqueClassName,".hoverable .icon-star:hover:before {\n          color: ").concat(this.options.starsColorHover,";\n        }\n      </style>\n    </div>\n    ")}},{key:"_renderInfoPanel",value:function(){return this.options.loader?"":""!==this.options.message?'\n        <div class="stars-rating--info-panel">'.concat(this.options.message,"</div>\n      "):""}},{key:"_renderSpin",value:function(){return this.options.loader?'\n    <div class="wpr-rating-loader wpr-hide">\n      <i class="icon-spin6 animate-spin"></i>\n    </div>\n':""}},{key:"_renderSpans",value:function(t){if(this.options.loader)return"";t="string"==typeof t?parseInt(t):t;var e=Array.from(Array(5).keys()),n="";return e.reverse().forEach((function(e){var r=e+1;n+='\n        <span\n          class="icon-star'.concat(t===r?" checked":"",'"\n          data-value="').concat(r,'"\n        ></span>')})),n}}])&&p(e.prototype,n),r&&p(e,r),t}();function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,"htmlElement",void 0),_(this,"starRating",void 0),this.htmlElement=e,this.starRating=n}var e,n,r;return e=t,(n=[{key:"init",value:function(){var t=this;setTimeout((function(){t.clickEventInit()}),50)}},{key:"clickEventInit",value:function(){for(var t=this,e=this.htmlElement.querySelectorAll(".icon-star"),n=0;n<e.length;n++)e[n].addEventListener("click",(function(e){t.starRating.onChange(e)}))}}])&&y(e.prototype,n),r&&y(e,r),t}();function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};w(this,t),A(this,"view",void 0),A(this,"options",void 0),A(this,"events",void 0),this.options=new b(n),this.view=new m(this.options,e),this.events=new k(e,this),this.init()}var e,n,r;return e=t,(n=[{key:"init",value:function(){this.view.renderStars(),this.events.init()}},{key:"changeRatingValue",value:function(t){this.options.currentRating=t,this.init()}},{key:"disable",value:function(){this.options.disabled=!0,this.init()}},{key:"enable",value:function(){this.options.disabled=!1,this.init()}},{key:"changeColor",value:function(t){this.options.starsColorPrimary=t,this.view.renderStars()}},{key:"changeSize",value:function(t){this.options.size=t,this.view.renderStars()}},{key:"changeLoader",value:function(){this.options.loader=!this.options.loader,this.view.renderStars()}},{key:"changeMessage",value:function(t){this.options.message=t,this.view.renderStars()}},{key:"onChange",value:function(t){var e,n;null!=t&&null!==(e=t.target)&&void 0!==e&&null!==(n=e.dataset)&&void 0!==n&&n.value&&this.changeRatingValue(t.target.dataset.value)}}])&&x(e.prototype,n),r&&x(e,r),t}()}(),r}()}));