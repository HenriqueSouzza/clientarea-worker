(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1831:function(e,t,r){var n=r(264),o=r(310),i=r(1032),a=r(262),u=r(263),c=r(538),l=r(539),s=r(410),p=r(540);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function h(){"use strict";h=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),u=new R(n||[]);return o(a,"_invoke",{value:j(e,r,u)}),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",y="suspendedYield",v="executing",d="completed",m={};function g(){}function b(){}function E(){}var w={};l(w,a,function(){return this});var P=Object.getPrototypeOf,L=P&&P(P(T([])));L&&L!==r&&n.call(L,a)&&(w=L);var k=E.prototype=g.prototype=Object.create(w);function O(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){function r(o,i,a,u){var c=p(e[o],e,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){r("next",e,a,u)},function(e){r("throw",e,a,u)}):t.resolve(s).then(function(e){l.value=e,a(l)},function(e){return r("throw",e,a,u)})}u(c.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t(function(t,o){r(e,n,t,o)})}return i=i?i.then(o,o):o()}})}function j(t,r,n){var o=f;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=I(u,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=p(t,r,n);if("normal"===l.type){if(o=n.done?d:y,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function I(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return b.prototype=E,o(k,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:b,configurable:!0}),b.displayName=l(E,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},O(x.prototype),l(x.prototype,u,function(){return this}),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},O(k),l(k,c,"Generator"),l(k,a,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}function y(e,t,r){return t=l(t),c(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,r||[],l(e).constructor):t.apply(e,r))}function v(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m,g=Object.create,b=Object.defineProperty,E=Object.getOwnPropertyDescriptor,w=Object.getOwnPropertyNames,P=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty,k=function(e,t,r,n){if(t&&"object"===typeof t||"function"===typeof t){var o,i=v(w(t));try{var a=function(){var i=o.value;L.call(e,i)||i===r||b(e,i,{get:function(){return t[i]},enumerable:!(n=E(t,i))||n.enumerable})};for(i.s();!(o=i.n()).done;)a()}catch(u){i.e(u)}finally{i.f()}}return e},O=function(e,t,r){return function(e,t,r){t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r}(e,"symbol"!==typeof t?t+"":t,r),r},x={};!function(e,t){for(var r in t)b(e,r,{get:t[r],enumerable:!0})}(x,{default:function(){return _}}),e.exports=(m=x,k(b({},"__esModule",{value:!0}),m));var j=function(e,t,r){return r=null!=e?g(P(e)):{},k(!t&&e&&e.__esModule?r:b(r,"default",{value:e,enumerable:!0}),e)}(r(0)),I=r(1031),_=function(e){"use strict";function t(){var e;return a(this,t),e=y(this,t,arguments),O(s(e),"onReady",function(){var t;return(t=e.props).onReady.apply(t,arguments)}),O(s(e),"onPlay",function(){var t;return(t=e.props).onPlay.apply(t,arguments)}),O(s(e),"onBuffer",function(){var t;return(t=e.props).onBuffer.apply(t,arguments)}),O(s(e),"onBufferEnd",function(){var t;return(t=e.props).onBufferEnd.apply(t,arguments)}),O(s(e),"onPause",function(){var t;return(t=e.props).onPause.apply(t,arguments)}),O(s(e),"onEnded",function(){var t;return(t=e.props).onEnded.apply(t,arguments)}),O(s(e),"onError",function(){var t;return(t=e.props).onError.apply(t,arguments)}),O(s(e),"onPlayBackRateChange",function(t){return e.props.onPlaybackRateChange(t.target.playbackRate)}),O(s(e),"onEnablePIP",function(){var t;return(t=e.props).onEnablePIP.apply(t,arguments)}),O(s(e),"onSeek",function(t){e.props.onSeek(t.target.currentTime)}),O(s(e),"onDurationChange",function(){var t=e.getDuration();e.props.onDuration(t)}),O(s(e),"mute",function(){e.player.muted=!0}),O(s(e),"unmute",function(){e.player.muted=!1}),O(s(e),"ref",function(t){e.player=t}),e}return p(t,e),u(t,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);var e=this.getPlaybackId(this.props.url);e&&(this.player.playbackId=e)}},{key:"componentWillUnmount",value:function(){this.player.playbackId=null,this.removeListeners(this.player)}},{key:"addListeners",value:function(e){var t=this.props.playsinline;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),e.addEventListener("canplay",this.onReady),t&&e.setAttribute("playsinline","")}},{key:"removeListeners",value:function(e){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("canplay",this.onReady)}},{key:"load",value:function(){var e=i(h().mark(function e(t){var r,n,i,a,u,c,l,s;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,i=n.onError,a=n.config,null==(r=globalThis.customElements)?void 0:r.get("mux-player")){e.next=12;break}return e.prev=2,u="https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs".replace("VERSION",a.version),e.next=6,import("".concat(u));case 6:this.props.onLoaded(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),i(e.t0);case 12:c=t.match(I.MATCH_URL_MUX),l=o(c,2),s=l[1],this.player.playbackId=s;case 14:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t){return e.apply(this,arguments)}}()},{key:"play",value:function(){var e=this.player.play();e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.player.pause()}},{key:"stop",value:function(){this.player.playbackId=null}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.player.currentTime=e,t||this.pause()}},{key:"setVolume",value:function(e){this.player.volume=e}},{key:"enablePIP",value:function(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player&&this.player.requestPictureInPicture()}},{key:"disablePIP",value:function(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player&&document.exitPictureInPicture()}},{key:"setPlaybackRate",value:function(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}},{key:"getDuration",value:function(){if(!this.player)return null;var e=this.player,t=e.duration,r=e.seekable;return t===1/0&&r.length>0?r.end(r.length-1):t}},{key:"getCurrentTime",value:function(){return this.player?this.player.currentTime:null}},{key:"getSecondsLoaded",value:function(){if(!this.player)return null;var e=this.player.buffered;if(0===e.length)return 0;var t=e.end(e.length-1),r=this.getDuration();return t>r?r:t}},{key:"getPlaybackId",value:function(e){var t=e.match(I.MATCH_URL_MUX);return o(t,2)[1]}},{key:"render",value:function(){var e=this.props,t=e.url,r=e.playing,o=e.loop,i=e.controls,a=e.muted,u=e.config,c=e.width,l=e.height,s={width:"auto"===c?c:"100%",height:"auto"===l?l:"100%"};return!1===i&&(s["--controls"]="none"),j.default.createElement("mux-player",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:this.ref,"playback-id":this.getPlaybackId(t),style:s,preload:"auto",autoPlay:r||void 0,muted:a?"":void 0,loop:o?"":void 0},u.attributes))}}]),t}(j.Component);O(_,"displayName","Mux"),O(_,"canPlay",I.canPlay.mux)}}]);
//# sourceMappingURL=reactPlayerMux.ca3d249a.chunk.js.map