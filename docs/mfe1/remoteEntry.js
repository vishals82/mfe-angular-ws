var z={685:(i,s,u)=>{var v={"./Mfe1Module":()=>u.e(259).then(()=>()=>u(259))},m=(f,S)=>(u.R=S,S=u.o(v,f)?v[f]():Promise.resolve().then(()=>{throw new Error('Module "'+f+'" does not exist in container.')}),u.R=void 0,S),c=(f,S)=>{if(u.S){var p="default",C=u.S[p];if(C&&C!==f)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return u.S[p]=f,u.I(p,S)}};u.d(s,{get:()=>m,init:()=>c})}},k={};function a(i){var s=k[i];if(void 0!==s)return s.exports;var u=k[i]={exports:{}};return z[i](u,u.exports,a),u.exports}a.m=z,a.c=k,a.n=i=>{var s=i&&i.__esModule?()=>i.default:()=>i;return a.d(s,{a:s}),s},a.d=(i,s)=>{for(var u in s)a.o(s,u)&&!a.o(i,u)&&Object.defineProperty(i,u,{enumerable:!0,get:s[u]})},a.f={},a.e=i=>Promise.all(Object.keys(a.f).reduce((s,u)=>(a.f[u](i,s),s),[])),a.u=i=>i+".js",a.miniCssF=i=>{},a.o=(i,s)=>Object.prototype.hasOwnProperty.call(i,s),(()=>{var i={},s="mfe1:";a.l=(u,v,m,c)=>{if(i[u])i[u].push(v);else{var f,S;if(void 0!==m)for(var p=document.getElementsByTagName("script"),C=0;C<p.length;C++){var g=p[C];if(g.getAttribute("src")==u||g.getAttribute("data-webpack")==s+m){f=g;break}}f||(S=!0,(f=document.createElement("script")).type="module",f.charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.setAttribute("data-webpack",s+m),f.src=a.tu(u)),i[u]=[v];var b=(x,E)=>{f.onerror=f.onload=null,clearTimeout(V);var w=i[u];if(delete i[u],f.parentNode&&f.parentNode.removeChild(f),w&&w.forEach(h=>h(E)),x)return x(E)},V=setTimeout(b.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=b.bind(null,f.onerror),f.onload=b.bind(null,f.onload),S&&document.head.appendChild(f)}}})(),a.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{a.S={};var i={},s={};a.I=(u,v)=>{v||(v=[]);var m=s[u];if(m||(m=s[u]={}),!(v.indexOf(m)>=0)){if(v.push(m),i[u])return i[u];a.o(a.S,u)||(a.S[u]={});var c=a.S[u],S="mfe1",p=(b,V,x,E)=>{var w=c[b]=c[b]||{},h=w[V];(!h||!h.loaded&&(!E!=!h.eager?E:S>h.from))&&(w[V]={get:x,from:S,eager:!!E})},g=[];return"default"===u&&(p("@angular/common","13.2.1",()=>a.e(925).then(()=>()=>a(925))),p("@angular/core","13.2.1",()=>a.e(28).then(()=>()=>a(28))),p("@angular/router","13.2.1",()=>a.e(198).then(()=>()=>a(448)))),i[u]=g.length?Promise.all(g).then(()=>i[u]=1):1}}})(),(()=>{var i;a.tt=()=>(void 0===i&&(i={createScriptURL:s=>s},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(i=trustedTypes.createPolicy("angular#bundler",i))),i)})(),a.tu=i=>a.tt().createScriptURL(i),a.p="/mfe-angular-ws/mfe1/",(()=>{var i=e=>{var t=o=>o.split(".").map(l=>+l==l?+l:l),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},u=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(d=e[o]))[0]?"-":(n>0?".":"")+(n=2,d);return r}var l=[];for(o=1;o<e.length;o++){var d=e[o];l.push(0===d?"not("+y()+")":1===d?"("+y()+" || "+y()+")":2===d?l.pop()+" "+l.pop():u(d))}return y();function y(){return l.pop().replace(/^\((.+)\)$/,"$1")}},v=(e,t)=>{if(0 in e){t=i(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var o=0,l=1,d=!0;;l++,o++){var y,O,M=l<e.length?(typeof e[l])[0]:"";if(o>=t.length||"o"==(O=(typeof(y=t[o]))[0]))return!d||("u"==M?l>r&&!n:""==M!=n);if("u"==O){if(!d||"u"!=M)return!1}else if(d)if(M==O)if(l<=r){if(y!=e[l])return!1}else{if(n?y>e[l]:y<e[l])return!1;y!=e[l]&&(d=!1)}else if("s"!=M&&"n"!=M){if(n||l<=r)return!1;d=!1,l--}else{if(l<=r||O<M!=n)return!1;d=!1}else"s"!=M&&"n"!=M&&(d=!1,l--)}}var A=[],P=A.pop.bind(A);for(o=1;o<e.length;o++){var T=e[o];A.push(1==T?P()|P():2==T?P()&P():T?v(T,t):!P())}return!!P()},f=(e,t)=>{var r=e[t];return Object.keys(r).reduce((n,o)=>!n||!r[n].loaded&&((e,t)=>{e=i(e),t=i(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var l=t[r],d=(typeof l)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&n!=l)return n<l;r++}})(n,o)?o:n,0)},g=(e,t,r,n)=>{var o=f(e,r);if(!v(n,o))throw new Error(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+u(n)+")")(e,r,o,n));return w(e[r][o])},w=e=>(e.loaded=1,e.get()),F=(e=>function(t,r,n,o){var l=a.I(t);return l&&l.then?l.then(e.bind(e,t,a.S[t],r,n,o)):e(t,a.S[t],r,n,o)})((e,t,r,n,o)=>t&&a.o(t,r)?g(t,0,r,n):o()),j={},$={162:()=>F("default","@angular/core",[2,13,2,1],()=>a.e(28).then(()=>()=>a(28))),175:()=>F("default","@angular/common",[2,13,2,1],()=>a.e(964).then(()=>()=>a(925))),836:()=>F("default","@angular/router",[2,13,2,1],()=>a.e(448).then(()=>()=>a(448)))},L={198:[162,175],259:[175,836,162],925:[162]};a.f.consumes=(e,t)=>{a.o(L,e)&&L[e].forEach(r=>{if(a.o(j,r))return t.push(j[r]);var n=d=>{j[r]=0,a.m[r]=y=>{delete a.c[r],y.exports=d()}},o=d=>{delete j[r],a.m[r]=y=>{throw delete a.c[r],d}};try{var l=$[r]();l.then?t.push(j[r]=l.then(n).catch(o)):n(l)}catch(d){o(d)}})}})(),(()=>{var i={291:0};a.f.j=(v,m)=>{var c=a.o(i,v)?i[v]:void 0;if(0!==c)if(c)m.push(c[2]);else{var f=new Promise((g,b)=>c=i[v]=[g,b]);m.push(c[2]=f);var S=a.p+a.u(v),p=new Error;a.l(S,g=>{if(a.o(i,v)&&(0!==(c=i[v])&&(i[v]=void 0),c)){var b=g&&("load"===g.type?"missing":g.type),V=g&&g.target&&g.target.src;p.message="Loading chunk "+v+" failed.\n("+b+": "+V+")",p.name="ChunkLoadError",p.type=b,p.request=V,c[1](p)}},"chunk-"+v,v)}};var s=(v,m)=>{var p,C,[c,f,S]=m,g=0;if(c.some(V=>0!==i[V])){for(p in f)a.o(f,p)&&(a.m[p]=f[p]);S&&S(a)}for(v&&v(m);g<c.length;g++)a.o(i,C=c[g])&&i[C]&&i[C][0](),i[C]=0},u=self.webpackChunkmfe1=self.webpackChunkmfe1||[];u.forEach(s.bind(null,0)),u.push=s.bind(null,u.push.bind(u))})();var U=a(685),R=U.get,B=U.init;export{R as get,B as init};