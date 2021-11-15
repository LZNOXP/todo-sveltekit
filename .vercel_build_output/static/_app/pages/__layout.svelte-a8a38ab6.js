import{D as Y,S as R,i as z,s as J,e as h,c as v,a as b,d as s,b as f,f as V,t as L,k as A,g as O,n as N,E as l,F as K,G as ee,H as te,j as se,I as le,m as ae,o as re,J as ie,K as ne,L as oe,x as M,u as T,v as ce}from"../chunks/vendor-4fe473fe.js";const fe=()=>{const c=Y("__svelte__");return{page:{subscribe:c.page.subscribe},navigating:{subscribe:c.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:c.navigating.subscribe}},session:c.session}},de={subscribe(c){return fe().page.subscribe(c)}};function Q(c){let e;return{c(){e=h("div"),this.h()},l(t){e=v(t,"DIV",{class:!0}),b(e).forEach(s),this.h()},h(){f(e,"class","h-1 bg-[#2F80ED] rounded-t-md")},m(t,u){V(t,e,u)},d(t){t&&s(e)}}}function U(c){let e;return{c(){e=h("div"),this.h()},l(t){e=v(t,"DIV",{class:!0}),b(e).forEach(s),this.h()},h(){f(e,"class","h-1 bg-[#2F80ED] rounded-t-md")},m(t,u){V(t,e,u)},d(t){t&&s(e)}}}function W(c){let e;return{c(){e=h("div"),this.h()},l(t){e=v(t,"DIV",{class:!0}),b(e).forEach(s),this.h()},h(){f(e,"class","h-1 bg-[#2F80ED] rounded-t-md")},m(t,u){V(t,e,u)},d(t){t&&s(e)}}}function ue(c){let e,t,u,n,a,_,y,H,$,E,x,w,P,j,g,I,k,B,m,r,o=c[1].path==="/"&&Q(),p=c[1].path==="/active"&&U(),d=c[1].path==="/completed"&&W();return{c(){e=h("div"),t=L("#todo"),u=A(),n=h("nav"),a=h("a"),_=h("div"),y=L("All"),H=A(),o&&o.c(),$=A(),E=h("a"),x=h("div"),w=L("Active"),P=A(),p&&p.c(),j=A(),g=h("a"),I=h("div"),k=L("Completed"),B=A(),d&&d.c(),m=A(),r=h("div"),this.h()},l(i){e=v(i,"DIV",{class:!0});var D=b(e);t=O(D,"#todo"),D.forEach(s),u=N(i),n=v(i,"NAV",{class:!0});var C=b(n);a=v(C,"A",{class:!0,href:!0});var F=b(a);_=v(F,"DIV",{class:!0});var X=b(_);y=O(X,"All"),X.forEach(s),H=N(F),o&&o.l(F),F.forEach(s),$=N(C),E=v(C,"A",{class:!0,href:!0});var S=b(E);x=v(S,"DIV",{class:!0});var Z=b(x);w=O(Z,"Active"),Z.forEach(s),P=N(S),p&&p.l(S),S.forEach(s),j=N(C),g=v(C,"A",{class:!0,href:!0});var q=b(g);I=v(q,"DIV",{class:!0});var G=b(I);k=O(G,"Completed"),G.forEach(s),B=N(q),d&&d.l(q),q.forEach(s),C.forEach(s),m=N(i),r=v(i,"DIV",{class:!0}),b(r).forEach(s),this.h()},h(){f(e,"class","title text-center svelte-eiiko3"),f(_,"class","text-center p-2 w-20"),f(a,"class","text-sm font-semibold flex flex-col content-between"),f(a,"href","/"),f(x,"class","text-center p-2 w-20"),f(E,"class","text-sm font-semibold"),f(E,"href","/active"),f(I,"class","text-center p-2 w-20"),f(g,"class","text-sm font-semibold"),f(g,"href","/completed"),f(n,"class","flex justify-around w-full"),f(r,"class","border border-[#BDBDBD] w-full")},m(i,D){V(i,e,D),l(e,t),V(i,u,D),V(i,n,D),l(n,a),l(a,_),l(_,y),l(a,H),o&&o.m(a,null),l(n,$),l(n,E),l(E,x),l(x,w),l(E,P),p&&p.m(E,null),l(n,j),l(n,g),l(g,I),l(I,k),l(g,B),d&&d.m(g,null),V(i,m,D),V(i,r,D)},p(i,[D]){i[1].path==="/"?o||(o=Q(),o.c(),o.m(a,null)):o&&(o.d(1),o=null),i[1].path==="/active"?p||(p=U(),p.c(),p.m(E,null)):p&&(p.d(1),p=null),i[1].path==="/completed"?d||(d=W(),d.c(),d.m(g,null)):d&&(d.d(1),d=null)},i:K,o:K,d(i){i&&s(e),i&&s(u),i&&s(n),o&&o.d(),p&&p.d(),d&&d.d(),i&&s(m),i&&s(r)}}}function he(c,e,t){let u,n=K,a=()=>(n(),n=ee(_,y=>t(1,u=y)),_);c.$$.on_destroy.push(()=>n());let{page:_}=e;return a(),c.$$set=y=>{"page"in y&&a(t(0,_=y.page))},[_,u]}class ve extends R{constructor(e){super();z(this,e,he,ue,J,{page:0})}}function _e(c){let e,t,u,n,a,_,y,H,$,E,x,w,P,j,g,I,k;_=new ve({props:{page:de}});const B=c[1].default,m=te(B,c,c[0],null);return{c(){e=h("link"),t=h("link"),u=A(),n=h("div"),a=h("div"),se(_.$$.fragment),y=A(),m&&m.c(),H=A(),$=h("div"),E=L("created by "),x=h("strong"),w=h("a"),P=L("LZNOXP"),j=L(` -
			`),g=h("a"),I=L("devChallenges.io"),this.h()},l(r){const o=le('[data-svelte="svelte-1gc43jq"]',document.head);e=v(o,"LINK",{href:!0,rel:!0}),t=v(o,"LINK",{href:!0,rel:!0}),o.forEach(s),u=N(r),n=v(r,"DIV",{class:!0});var p=b(n);a=v(p,"DIV",{class:!0});var d=b(a);ae(_.$$.fragment,d),y=N(d),m&&m.l(d),H=N(d),$=v(d,"DIV",{class:!0});var i=b($);E=O(i,"created by "),x=v(i,"STRONG",{});var D=b(x);w=v(D,"A",{href:!0});var C=b(w);P=O(C,"LZNOXP"),C.forEach(s),D.forEach(s),j=O(i,` -
			`),g=v(i,"A",{href:!0});var F=b(g);I=O(F,"devChallenges.io"),F.forEach(s),i.forEach(s),d.forEach(s),p.forEach(s),this.h()},h(){f(e,"href","https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"),f(e,"rel","stylesheet"),f(t,"href","https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap"),f(t,"rel","stylesheet"),f(w,"href","https://github.com/LZNOXP"),f(g,"href","https://devchallenges.io/challenges/hH6PbOHBdPm6otzw2De5"),f($,"class","font-bold text-sm h-10 text-gray-400 mt-52"),f(a,"class","flex items-center flex-col lg:w-[720px] sm:w-[608px] h-full"),f(n,"class","flex items-center flex-col h-screen mb-10")},m(r,o){l(document.head,e),l(document.head,t),V(r,u,o),V(r,n,o),l(n,a),re(_,a,null),l(a,y),m&&m.m(a,null),l(a,H),l(a,$),l($,E),l($,x),l(x,w),l(w,P),l($,j),l($,g),l(g,I),k=!0},p(r,[o]){m&&m.p&&(!k||o&1)&&ie(m,B,r,r[0],k?oe(B,r[0],o,null):ne(r[0]),null)},i(r){k||(M(_.$$.fragment,r),M(m,r),k=!0)},o(r){T(_.$$.fragment,r),T(m,r),k=!1},d(r){s(e),s(t),r&&s(u),r&&s(n),ce(_),m&&m.d(r)}}}function me(c,e,t){let{$$slots:u={},$$scope:n}=e;return c.$$set=a=>{"$$scope"in a&&t(0,n=a.$$scope)},[n,u]}class be extends R{constructor(e){super();z(this,e,me,_e,J,{})}}export{be as default};