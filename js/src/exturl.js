$(document).ready(function(){var i={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(r){var t,e,o,n,a,c,h="",d=0;for(r=i._utf8_encode(r);d<r.length;)o=(c=r.charCodeAt(d++))>>2,n=(3&c)<<4|(t=r.charCodeAt(d++))>>4,a=(15&t)<<2|(e=r.charCodeAt(d++))>>6,c=63&e,isNaN(t)?a=c=64:isNaN(e)&&(c=64),h=h+this._keyStr.charAt(o)+this._keyStr.charAt(n)+this._keyStr.charAt(a)+this._keyStr.charAt(c);return h},decode:function(r){var t,e,o,n,a,c,h="",d=0;for(r=r.replace(/[^A-Za-z0-9+/=]/g,"");d<r.length;)o=this._keyStr.indexOf(r.charAt(d++)),t=(15&(n=this._keyStr.indexOf(r.charAt(d++))))<<4|(a=this._keyStr.indexOf(r.charAt(d++)))>>2,e=(3&a)<<6|(c=this._keyStr.indexOf(r.charAt(d++))),h+=String.fromCharCode(o<<2|n>>4),64!=a&&(h+=String.fromCharCode(t)),64!=c&&(h+=String.fromCharCode(e));return i._utf8_decode(h)},_utf8_encode:function(r){r=r.replace(/rn/g,"n");for(var t="",e=0;e<r.length;e++){var o=r.charCodeAt(e);o<128?t+=String.fromCharCode(o):(127<o&&o<2048?t+=String.fromCharCode(o>>6|192):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128)),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(r){for(var t="",e=0,o=c1=c2=0;e<r.length;)(o=r.charCodeAt(e))<128?(t+=String.fromCharCode(o),e++):191<o&&o<224?(c2=r.charCodeAt(e+1),t+=String.fromCharCode((31&o)<<6|63&c2),e+=2):(c2=r.charCodeAt(e+1),c3=r.charCodeAt(e+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),e+=3);return t}};$(".exturl").on("click",function(){var r=$(this).attr("data-url"),r=i.decode(r);return window.open(r,"_blank"),!1})});