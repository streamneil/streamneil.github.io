!function(){function n(n,e,t){return n.getAttribute(e)||t}function e(n){return document.getElementsByTagName(n)}function t(){d=a.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,l=a.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function m(){x.clearRect(0,0,d,l);var e,t,o,i,c,a,u=[s].concat(f);f.forEach(function(n){for(n.x+=n.xa,n.y+=n.ya,n.xa*=n.x>d||n.x<0?-1:1,n.ya*=n.y>l||n.y<0?-1:1,x.fillRect(n.x-.5,n.y-.5,1,1),t=0;t<u.length;t++)n!==(e=u[t])&&null!==e.x&&null!==e.y&&(i=n.x-e.x,c=n.y-e.y,(a=i*i+c*c)<e.max&&(e===s&&a>=e.max/2&&(n.x-=.03*i,n.y-=.03*c),o=(e.max-a)/e.max,x.beginPath(),x.lineWidth=o/2,x.strokeStyle="rgba("+r.c+","+(.2+o)+")",x.moveTo(n.x,n.y),x.lineTo(e.x,e.y),x.stroke()));u.splice(u.indexOf(n),1)}),w(m)}var d,l,o,i,c,a=document.createElement("canvas"),r={l:i=(o=e("script")).length,z:n(c=o[i-1],"zIndex",-1),o:n(c,"opacity",.5),c:n(c,"color","0,0,0"),n:n(c,"count",99)},u="c_n"+r.l,x=a.getContext("2d"),w=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){window.setTimeout(n,1e3/45)},y=Math.random,s={x:null,y:null,max:2e4};a.id=u,a.style.cssText="position:fixed;top:0;left:0;z-index:"+r.z+";opacity:"+r.o,e("body")[0].appendChild(a),t(),window.onresize=t,window.onmousemove=function(n){n=n||window.event,s.x=n.clientX,s.y=n.clientY},window.onmouseout=function(){s.x=null,s.y=null};for(var f=[],h=0;r.n>h;h++){var g=y()*d,p=y()*l,v=2*y()-1,b=2*y()-1;f.push({x:g,y:p,xa:v,ya:b,max:6e3})}setTimeout(function(){m()},100)}();