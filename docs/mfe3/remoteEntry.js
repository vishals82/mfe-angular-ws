var k={629:(i,s,l)=>{var d={"./Mfe3Module":()=>l.e(87).then(()=>()=>l(87))},m=(f,w)=>(l.R=w,w=l.o(d,f)?d[f]():Promise.resolve().then(()=>{throw new Error('Module "'+f+'" does not exist in container.')}),l.R=void 0,w),c=(f,w)=>{if(l.S){var p="default",y=l.S[p];if(y&&y!==f)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return l.S[p]=f,l.I(p,w)}};l.d(s,{get:()=>m,init:()=>c})}},$={};function a(i){var s=$[i];if(void 0!==s)return s.exports;var l=$[i]={exports:{}};return k[i](l,l.exports,a),l.exports}a.m=k,a.c=$,a.n=i=>{var s=i&&i.__esModule?()=>i.default:()=>i;return a.d(s,{a:s}),s},a.d=(i,s)=>{for(var l in s)a.o(s,l)&&!a.o(i,l)&&Object.defineProperty(i,l,{enumerable:!0,get:s[l]})},a.f={},a.e=i=>Promise.all(Object.keys(a.f).reduce((s,l)=>(a.f[l](i,s),s),[])),a.u=i=>i+"."+{28:"58c00b538eef2bf1",87:"052728a26ec5f89f",198:"5939a3d888f27fb2",448:"0fbe1f9d7262f6f2",925:"7f9f28aec772ce26",964:"76430cfb66426670"}[i]+".js",a.miniCssF=i=>{},a.o=(i,s)=>Object.prototype.hasOwnProperty.call(i,s),(()=>{var i={},s="mfe3:";a.l=(l,d,m,c)=>{if(i[l])i[l].push(d);else{var f,w;if(void 0!==m)for(var p=document.getElementsByTagName("script"),y=0;y<p.length;y++){var g=p[y];if(g.getAttribute("src")==l||g.getAttribute("data-webpack")==s+m){f=g;break}}f||(w=!0,(f=document.createElement("script")).type="module",f.charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.setAttribute("data-webpack",s+m),f.src=a.tu(l)),i[l]=[d];var b=(x,E)=>{f.onerror=f.onload=null,clearTimeout(C);var S=i[l];if(delete i[l],f.parentNode&&f.parentNode.removeChild(f),S&&S.forEach(h=>h(E)),x)return x(E)},C=setTimeout(b.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=b.bind(null,f.onerror),f.onload=b.bind(null,f.onload),w&&document.head.appendChild(f)}}})(),a.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{a.S={};var i={},s={};a.I=(l,d)=>{d||(d=[]);var m=s[l];if(m||(m=s[l]={}),!(d.indexOf(m)>=0)){if(d.push(m),i[l])return i[l];a.o(a.S,l)||(a.S[l]={});var c=a.S[l],w="mfe3",p=(b,C,x,E)=>{var S=c[b]=c[b]||{},h=S[C];(!h||!h.loaded&&(!E!=!h.eager?E:w>h.from))&&(S[C]={get:x,from:w,eager:!!E})},g=[];return"default"===l&&(p("@angular/common","13.2.1",()=>a.e(925).then(()=>()=>a(925))),p("@angular/core","13.2.1",()=>a.e(28).then(()=>()=>a(28))),p("@angular/router","13.2.1",()=>a.e(198).then(()=>()=>a(448)))),i[l]=g.length?Promise.all(g).then(()=>i[l]=1):1}}})(),(()=>{var i;a.tt=()=>(void 0===i&&(i={createScriptURL:s=>s},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(i=trustedTypes.createPolicy("angular#bundler",i))),i)})(),a.tu=i=>a.tt().createScriptURL(i),(()=>{var i;if("string"==typeof import.meta.url&&(i=import.meta.url),!i)throw new Error("Automatic publicPath is not supported in this browser");i=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=i})(),(()=>{var i=e=>{var t=o=>o.split(".").map(u=>+u==u?+u:u),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},l=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(v=e[o]))[0]?"-":(n>0?".":"")+(n=2,v);return r}var u=[];for(o=1;o<e.length;o++){var v=e[o];u.push(0===v?"not("+V()+")":1===v?"("+V()+" || "+V()+")":2===v?u.pop()+" "+u.pop():l(v))}return V();function V(){return u.pop().replace(/^\((.+)\)$/,"$1")}},d=(e,t)=>{if(0 in e){t=i(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var o=0,u=1,v=!0;;u++,o++){var V,O,M=u<e.length?(typeof e[u])[0]:"";if(o>=t.length||"o"==(O=(typeof(V=t[o]))[0]))return!v||("u"==M?u>r&&!n:""==M!=n);if("u"==O){if(!v||"u"!=M)return!1}else if(v)if(M==O)if(u<=r){if(V!=e[u])return!1}else{if(n?V>e[u]:V<e[u])return!1;V!=e[u]&&(v=!1)}else if("s"!=M&&"n"!=M){if(n||u<=r)return!1;v=!1,u--}else{if(u<=r||O<M!=n)return!1;v=!1}else"s"!=M&&"n"!=M&&(v=!1,u--)}}var F=[],P=F.pop.bind(F);for(o=1;o<e.length;o++){var T=e[o];F.push(1==T?P()|P():2==T?P()&P():T?d(T,t):!P())}return!!P()},f=(e,t)=>{var r=e[t];return Object.keys(r).reduce((n,o)=>!n||!r[n].loaded&&((e,t)=>{e=i(e),t=i(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var u=t[r],v=(typeof u)[0];if(o!=v)return"o"==o&&"n"==v||"s"==v||"u"==o;if("o"!=o&&"u"!=o&&n!=u)return n<u;r++}})(n,o)?o:n,0)},g=(e,t,r,n)=>{var o=f(e,r);if(!d(n,o))throw new Error(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+l(n)+")")(e,r,o,n));return S(e[r][o])},S=e=>(e.loaded=1,e.get()),A=(e=>function(t,r,n,o){var u=a.I(t);return u&&u.then?u.then(e.bind(e,t,a.S[t],r,n,o)):e(t,a.S[t],r,n,o)})((e,t,r,n,o)=>t&&a.o(t,r)?g(t,0,r,n):o()),j={},z={162:()=>A("default","@angular/core",[2,13,2,1],()=>a.e(28).then(()=>()=>a(28))),175:()=>A("default","@angular/common",[2,13,2,1],()=>a.e(964).then(()=>()=>a(925))),836:()=>A("default","@angular/router",[2,13,2,1],()=>a.e(448).then(()=>()=>a(448)))},L={87:[175,836,162],198:[162,175],925:[162]};a.f.consumes=(e,t)=>{a.o(L,e)&&L[e].forEach(r=>{if(a.o(j,r))return t.push(j[r]);var n=v=>{j[r]=0,a.m[r]=V=>{delete a.c[r],V.exports=v()}},o=v=>{delete j[r],a.m[r]=V=>{throw delete a.c[r],v}};try{var u=z[r]();u.then?t.push(j[r]=u.then(n).catch(o)):n(u)}catch(v){o(v)}})}})(),(()=>{var i={882:0};a.f.j=(d,m)=>{var c=a.o(i,d)?i[d]:void 0;if(0!==c)if(c)m.push(c[2]);else{var f=new Promise((g,b)=>c=i[d]=[g,b]);m.push(c[2]=f);var w=a.p+a.u(d),p=new Error;a.l(w,g=>{if(a.o(i,d)&&(0!==(c=i[d])&&(i[d]=void 0),c)){var b=g&&("load"===g.type?"missing":g.type),C=g&&g.target&&g.target.src;p.message="Loading chunk "+d+" failed.\n("+b+": "+C+")",p.name="ChunkLoadError",p.type=b,p.request=C,c[1](p)}},"chunk-"+d,d)}};var s=(d,m)=>{var p,y,[c,f,w]=m,g=0;if(c.some(C=>0!==i[C])){for(p in f)a.o(f,p)&&(a.m[p]=f[p]);w&&w(a)}for(d&&d(m);g<c.length;g++)a.o(i,y=c[g])&&i[y]&&i[y][0](),i[y]=0},l=self.webpackChunkmfe3=self.webpackChunkmfe3||[];l.forEach(s.bind(null,0)),l.push=s.bind(null,l.push.bind(l))})();var U=a(629),R=U.get,B=U.init;export{R as get,B as init};