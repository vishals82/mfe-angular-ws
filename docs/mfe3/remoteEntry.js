var z={629:(i,s,u)=>{var d={"./Mfe3Module":()=>u.e(87).then(()=>()=>u(87))},b=(f,S)=>(u.R=S,S=u.o(d,f)?d[f]():Promise.resolve().then(()=>{throw new Error('Module "'+f+'" does not exist in container.')}),u.R=void 0,S),c=(f,S)=>{if(u.S){var p="default",C=u.S[p];if(C&&C!==f)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return u.S[p]=f,u.I(p,S)}};u.d(s,{get:()=>b,init:()=>c})}},L={};function a(i){var s=L[i];if(void 0!==s)return s.exports;var u=L[i]={exports:{}};return z[i](u,u.exports,a),u.exports}a.m=z,a.c=L,a.n=i=>{var s=i&&i.__esModule?()=>i.default:()=>i;return a.d(s,{a:s}),s},a.d=(i,s)=>{for(var u in s)a.o(s,u)&&!a.o(i,u)&&Object.defineProperty(i,u,{enumerable:!0,get:s[u]})},a.f={},a.e=i=>Promise.all(Object.keys(a.f).reduce((s,u)=>(a.f[u](i,s),s),[])),a.u=i=>i+"."+{28:"58c00b538eef2bf1",87:"052728a26ec5f89f",198:"5939a3d888f27fb2",448:"0fbe1f9d7262f6f2",925:"7f9f28aec772ce26",964:"76430cfb66426670"}[i]+".js",a.miniCssF=i=>{},a.o=(i,s)=>Object.prototype.hasOwnProperty.call(i,s),(()=>{var i={},s="mfe3:";a.l=(u,d,b,c)=>{if(i[u])i[u].push(d);else{var f,S;if(void 0!==b)for(var p=document.getElementsByTagName("script"),C=0;C<p.length;C++){var g=p[C];if(g.getAttribute("src")==u||g.getAttribute("data-webpack")==s+b){f=g;break}}f||(S=!0,(f=document.createElement("script")).type="module",f.charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.setAttribute("data-webpack",s+b),f.src=a.tu(u)),i[u]=[d];var m=(x,E)=>{f.onerror=f.onload=null,clearTimeout(V);var w=i[u];if(delete i[u],f.parentNode&&f.parentNode.removeChild(f),w&&w.forEach(h=>h(E)),x)return x(E)},V=setTimeout(m.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=m.bind(null,f.onerror),f.onload=m.bind(null,f.onload),S&&document.head.appendChild(f)}}})(),a.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{a.S={};var i={},s={};a.I=(u,d)=>{d||(d=[]);var b=s[u];if(b||(b=s[u]={}),!(d.indexOf(b)>=0)){if(d.push(b),i[u])return i[u];a.o(a.S,u)||(a.S[u]={});var c=a.S[u],S="mfe3",p=(m,V,x,E)=>{var w=c[m]=c[m]||{},h=w[V];(!h||!h.loaded&&(!E!=!h.eager?E:S>h.from))&&(w[V]={get:x,from:S,eager:!!E})},g=[];return"default"===u&&(p("@angular/common","13.2.1",()=>a.e(925).then(()=>()=>a(925))),p("@angular/core","13.2.1",()=>a.e(28).then(()=>()=>a(28))),p("@angular/router","13.2.1",()=>a.e(198).then(()=>()=>a(448)))),i[u]=g.length?Promise.all(g).then(()=>i[u]=1):1}}})(),(()=>{var i;a.tt=()=>(void 0===i&&(i={createScriptURL:s=>s},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(i=trustedTypes.createPolicy("angular#bundler",i))),i)})(),a.tu=i=>a.tt().createScriptURL(i),a.p="/mfe-angular-ws/mfe3/",(()=>{var i=e=>{var t=o=>o.split(".").map(l=>+l==l?+l:l),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},u=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(v=e[o]))[0]?"-":(n>0?".":"")+(n=2,v);return r}var l=[];for(o=1;o<e.length;o++){var v=e[o];l.push(0===v?"not("+y()+")":1===v?"("+y()+" || "+y()+")":2===v?l.pop()+" "+l.pop():u(v))}return y();function y(){return l.pop().replace(/^\((.+)\)$/,"$1")}},d=(e,t)=>{if(0 in e){t=i(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var o=0,l=1,v=!0;;l++,o++){var y,O,M=l<e.length?(typeof e[l])[0]:"";if(o>=t.length||"o"==(O=(typeof(y=t[o]))[0]))return!v||("u"==M?l>r&&!n:""==M!=n);if("u"==O){if(!v||"u"!=M)return!1}else if(v)if(M==O)if(l<=r){if(y!=e[l])return!1}else{if(n?y>e[l]:y<e[l])return!1;y!=e[l]&&(v=!1)}else if("s"!=M&&"n"!=M){if(n||l<=r)return!1;v=!1,l--}else{if(l<=r||O<M!=n)return!1;v=!1}else"s"!=M&&"n"!=M&&(v=!1,l--)}}var A=[],P=A.pop.bind(A);for(o=1;o<e.length;o++){var T=e[o];A.push(1==T?P()|P():2==T?P()&P():T?d(T,t):!P())}return!!P()},f=(e,t)=>{var r=e[t];return Object.keys(r).reduce((n,o)=>!n||!r[n].loaded&&((e,t)=>{e=i(e),t=i(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var l=t[r],v=(typeof l)[0];if(o!=v)return"o"==o&&"n"==v||"s"==v||"u"==o;if("o"!=o&&"u"!=o&&n!=l)return n<l;r++}})(n,o)?o:n,0)},g=(e,t,r,n)=>{var o=f(e,r);if(!d(n,o))throw new Error(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+u(n)+")")(e,r,o,n));return w(e[r][o])},w=e=>(e.loaded=1,e.get()),F=(e=>function(t,r,n,o){var l=a.I(t);return l&&l.then?l.then(e.bind(e,t,a.S[t],r,n,o)):e(t,a.S[t],r,n,o)})((e,t,r,n,o)=>t&&a.o(t,r)?g(t,0,r,n):o()),j={},$={162:()=>F("default","@angular/core",[2,13,2,1],()=>a.e(28).then(()=>()=>a(28))),175:()=>F("default","@angular/common",[2,13,2,1],()=>a.e(964).then(()=>()=>a(925))),836:()=>F("default","@angular/router",[2,13,2,1],()=>a.e(448).then(()=>()=>a(448)))},k={87:[175,836,162],198:[162,175],925:[162]};a.f.consumes=(e,t)=>{a.o(k,e)&&k[e].forEach(r=>{if(a.o(j,r))return t.push(j[r]);var n=v=>{j[r]=0,a.m[r]=y=>{delete a.c[r],y.exports=v()}},o=v=>{delete j[r],a.m[r]=y=>{throw delete a.c[r],v}};try{var l=$[r]();l.then?t.push(j[r]=l.then(n).catch(o)):n(l)}catch(v){o(v)}})}})(),(()=>{var i={882:0};a.f.j=(d,b)=>{var c=a.o(i,d)?i[d]:void 0;if(0!==c)if(c)b.push(c[2]);else{var f=new Promise((g,m)=>c=i[d]=[g,m]);b.push(c[2]=f);var S=a.p+a.u(d),p=new Error;a.l(S,g=>{if(a.o(i,d)&&(0!==(c=i[d])&&(i[d]=void 0),c)){var m=g&&("load"===g.type?"missing":g.type),V=g&&g.target&&g.target.src;p.message="Loading chunk "+d+" failed.\n("+m+": "+V+")",p.name="ChunkLoadError",p.type=m,p.request=V,c[1](p)}},"chunk-"+d,d)}};var s=(d,b)=>{var p,C,[c,f,S]=b,g=0;if(c.some(V=>0!==i[V])){for(p in f)a.o(f,p)&&(a.m[p]=f[p]);S&&S(a)}for(d&&d(b);g<c.length;g++)a.o(i,C=c[g])&&i[C]&&i[C][0](),i[C]=0},u=self.webpackChunkmfe3=self.webpackChunkmfe3||[];u.forEach(s.bind(null,0)),u.push=s.bind(null,u.push.bind(u))})();var U=a(629),R=U.get,B=U.init;export{R as get,B as init};