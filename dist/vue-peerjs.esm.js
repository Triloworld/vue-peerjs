var e=function(e){return"function"==typeof e},r=function(e){return e&&e.length<=1?e[0]:e},t=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return r.reduce(function(e,r){return r(e)},e)}},n=function(e){return function(r){return e+r}},o=function(e,r){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");r=Object.assign({pascalCase:!1},r);var t;return 0===(e=Array.isArray(e)?e.map(function(e){return e.trim()}).filter(function(e){return e.length}).join("-"):e.trim()).length?"":1===e.length?r.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var r=!1,t=!1,n=!1,o=0;o<e.length;o++){var a=e[o];r&&/[a-zA-Z]/.test(a)&&a.toUpperCase()===a?(e=e.slice(0,o)+"-"+e.slice(o),r=!1,n=t,t=!0,o++):t&&n&&/[a-zA-Z]/.test(a)&&a.toLowerCase()===a?(e=e.slice(0,o-1)+"-"+e.slice(o-1),n=t,t=!1,r=!0):(r=a.toLowerCase()===a&&a.toUpperCase()!==a,n=t,t=a.toUpperCase()===a&&a.toLowerCase()!==a)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,function(e,r){return r.toUpperCase()}).replace(/\d+(\w|$)/g,function(e){return e.toUpperCase()}),t=e,r.pascalCase?t.charAt(0).toUpperCase()+t.slice(1):t)},a=o,i=o;a.default=i;var c=Object.freeze({peerPrefix:{action:"peer_",mutation:"PEER_"},dataPrefix:{action:"data_",mutation:"DATA_"},mediaPrefix:{action:"media_",mutation:"MEDIA_"},eventToMutationTransformer:function(e){return e.toUpperCase()},eventToActionTransformer:a});function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=function(e){return Object.keys(e._mutations)},p=function(e){return Object.keys(e._actions)},v=function(e){return e.split("/").pop()},y=["open","connection","call","close","disconnected","error"],g=["data","open","close","error"],b=["stream","close","error"],h=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.store,i=l(o,["store"]),h=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(t,!0).forEach(function(r){u(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({},c,{},i),O=function(e){return t(h.eventToMutationTransformer,n(e.mutation))},d=function(e){return t(h.eventToActionTransformer,n(e.action))};function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h.peerPrefix;if(a){var o=O(n)(e),i=d(n)(e),c=s(a),u=p(a),f=r(t);c.filter(function(e){return v(e)===o}).forEach(function(e){return a.commit(e,f)}),u.filter(function(e){return v(e)===i}).forEach(function(e){return a.dispatch(e,f)})}}var m,C=function(e){g.forEach(function(r){e.on(r,function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];w(r,{dataConnection:e,args:n},h.dataPrefix)})})},j=function(e){b.forEach(function(r){e.on(r,function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];w(r,{mediaConnection:e,args:n},h.mediaPrefix)})})};m=C,Object.defineProperty(e,"peerConnect",{value:e.connect,writable:!0}),e.connect=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.peerConnect(r,t);return m(n),n},function(r){Object.defineProperty(e,"peerCall",{value:e.call,writable:!0}),e.call=function(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.peerCall(t,n,o);return r(a),a}}(j),e.on("connection",function(e){C(e)}),e.on("call",function(e){j(e)}),y.forEach(function(r){e.on(r,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];w(r,{args:t},h.peerPrefix)})})};export default{install:function(r,t,n){if(!((o=t)&&e(o.on)&&e(o.call)))throw new Error("[vue-peerjs] you have to pass a `Peer` instance to the plugin");var o;h(t,n),r.prototype.$peer=t},defaults:c};
