/**
 * @license frenchkiss 0.0.6
 * Copyright (c) 2018-2019 Koala Interactive, Inc.
 * License: MIT
 */
"use strict";var t=/^\s*\w+\s*$/,r=/^\s*(\w+)\s*,\s*(select|plural)\s*,/i,n=JSON.stringify,e=function(t){return'(p["'+t.trim()+'"]||"")'};function u(t){for(var r={},u=function t(r,u){var o=[];var f=r.length;for(var i=0;i<f;++i){var s=r[i],a=s[0],c=s[1],l="";if(0===a&&c)l=n(c);else if(1===a)l=e(c);else if(2===a){for(var v=s[2],p=s[3],h=s[4],g=p.length,d=0;d<g;++d)h?"="===p[d][0][0]?l+='p["'+v+'"]=='+n(p[d][0].substr(1)):(u[v]=1,l+='m["'+v+'"]=='+n(p[d][0])):l+='p["'+v+'"]=='+n(p[d][0]),l+="?"+t(p[d][1],u)+":";l="("+l+t(c,u)+")"}l&&o.push(l)}return o.join("+")||'""'}(o(t),r),f=Object.keys(r),i=f.length,s=[],a=0;a<i;++a)s[a]=f[a]+':f(p["'+f[a]+'"])';return Function("a","f","var p=a||{}"+(i?",m=f?{"+s+"}:{}":"")+";return "+u)}function o(n){for(var e=0,u="",o=n.length,i=[],s=0;s<o;++s){var a=n[s],c=void 0;"{"===a?e++||(c=[0,u]):"}"===a&&(--e||(c=t.test(u)?[1,u]:r.test(u)?f(u):[0,u])),c?(i.push(c),u=""):u+=a}return i.push([0,u]),i}function f(t){for(var n=t.match(r),e=n[1],u="p"===n[2][0].toLowerCase(),f=o(t.replace(r,"")),i=f.length,s=[],a=[0,""],c=0;c<i-1;){var l=f[c++][1].trim(),v=o(f[c++][1]);"other"===l?a=v:s.push([l,v])}return[2,a,e,s,u]}var i={},s={},a={},c="",l="",v=function(t){return t},p=function(t,r){return i[r]||(i[r]={}),!i[r][t]&&s[r]&&"string"==typeof s[r][t]&&(i[r][t]=u(s[r][t])),i[r][t]},h={cache:i,store:s,t:function(t,r,n){var e,u=n||c;return u&&(e=p(t,u)),!e&&l&&(e=p(t,u=l)),e?e(r,a[u]):v(t)},onMissingKey:function(t){v=t},locale:function(t){return t&&(c=t),c},fallback:function(t){return t&&(l=t),l},set:function(t,r){i[t]={},s[t]=r},unset:function(t){delete i[t],delete s[t]},extend:function(t,r){s[t]||(s[t]={}),i[t]||(i[t]={});for(var n=Object.keys(r),e=n.length,u=0;u<e;++u){var o=n[u];s[t][o]=r[o],delete i[t][o]}},plural:function(t,r){a[t]=r}};module.exports=h;
