import{a as me,b as Ee,c as ge,e as ve,f as he,g as Se,h as be,i as ye}from"./chunk-AU2DAT7S.js";import{Ab as x,B as te,Bb as j,C as re,Cb as T,Db as _,E as oe,Eb as O,F as ne,Fb as w,Gb as D,I as z,L as ie,La as m,Ma as h,Na as y,Oa as ue,Pa as fe,Q as Z,S as p,U as d,Ua as q,Va as I,W as s,X as u,Y as se,Ya as M,_ as A,a as i,aa as ae,b as l,cb as pe,db as le,f as W,fa as K,ga as Y,i as ee,m as C,na as ce,pb as de,q as c,s as v,tb as Ie,ub as Re,vb as Ce,w as G,wb as Fe,x as F,xb as U,y as S,yb as Ae,zb as E}from"./chunk-V5L43544.js";var Me=[{path:"home",loadComponent:()=>import("./chunk-6BOGEV2F.js")},{path:"usuario/:id",loadComponent:()=>import("./chunk-67YQ67RS.js")},{path:"**",redirectTo:"/home"}];var Ge={id:null,user:null,loaded:!1,loading:!1,error:null},ze=x(Ge,E(j,(e,{id:r})=>l(i({},e),{loading:!0,id:r})),E(T,(e,{usuario:r})=>l(i({},e),{loading:!1,loaded:!0,user:i({},r)})),E(_,(e,{payload:r})=>l(i({},e),{loading:!1,loaded:!1,error:{url:r.url,name:r.name,message:r.message}})));function xe(e,r){return ze(e,r)}var Ze={users:[],loaded:!1,loading:!1,error:null},Ke=x(Ze,E(O,e=>l(i({},e),{loading:!0})),E(w,(e,{usuarios:r})=>l(i({},e),{loading:!1,loaded:!0,users:[...r]})),E(D,(e,{payload:r})=>l(i({},e),{loading:!1,loaded:!1,error:{url:r.url,name:r.name,message:r.message}})));function je(e,r){return Ke(e,r)}var Te={usuarios:je,usuario:xe};var qe={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},k="__@ngrx/effects_create__";function N(e,r={}){let t=r.functional?e:e(),o=i(i({},qe),r);return Object.defineProperty(t,k,{value:o}),t}function Je(e){return Object.getOwnPropertyNames(e).filter(o=>e[o]&&e[o].hasOwnProperty(k)?e[o][k].hasOwnProperty("dispatch"):!1).map(o=>{let a=e[o][k];return i({propertyName:o},a)})}function Xe(e){return Je(e)}function _e(e){return Object.getPrototypeOf(e)}function Qe(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function Oe(e){return typeof e=="function"}function We(e){return e.filter(Oe)}function et(e,r,t){let o=_e(e),n=!!o&&o.constructor.name!=="Object"?o.constructor.name:null,f=Xe(e).map(({propertyName:g,dispatch:He,useEffectsErrorHandler:Le})=>{let X=typeof e[g]=="function"?e[g]():e[g],Q=Le?t(X,r):X;return He===!1?Q.pipe(re()):Q.pipe(ie()).pipe(c(Be=>({effect:e[g],notification:Be,propertyName:g,sourceName:n,sourceInstance:e})))});return G(...f)}var tt=10;function we(e,r,t=tt){return e.pipe(S(o=>(r&&r.handleError(o),t<=1?e:we(e,r,t-1))))}var $=(()=>{class e extends W{constructor(t){super(),t&&(this.source=t)}lift(t){let o=new e;return o.source=this,o.operator=t,o}static{this.\u0275fac=function(o){return new(o||e)(s(Fe))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function P(...e){return F(r=>e.some(t=>typeof t=="string"?t===r.type:t.type===r.type))}var Kt=new d("@ngrx/effects Internal Root Guard"),Yt=new d("@ngrx/effects User Provided Effects"),qt=new d("@ngrx/effects Internal Root Effects"),Jt=new d("@ngrx/effects Internal Root Effects Instances"),Xt=new d("@ngrx/effects Internal Feature Effects"),Qt=new d("@ngrx/effects Internal Feature Effects Instance Groups"),rt=new d("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>we}),ot="@ngrx/effects/init",nt=Ie(ot);function it(e,r){if(e.notification.kind==="N"){let t=e.notification.value;!st(t)&&r.handleError(new Error(`Effect ${at(e)} dispatched an invalid action: ${ct(t)}`))}}function st(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function at({propertyName:e,sourceInstance:r,sourceName:t}){let o=typeof r[e]=="function";return!!t?`"${t}.${String(e)}${o?"()":""}"`:`"${String(e)}()"`}function ct(e){try{return JSON.stringify(e)}catch{return e}}var ut="ngrxOnIdentifyEffects";function ft(e){return J(e,ut)}var pt="ngrxOnRunEffects";function lt(e){return J(e,pt)}var dt="ngrxOnInitEffects";function mt(e){return J(e,dt)}function J(e,r){return e&&r in e&&typeof e[r]=="function"}var De=(()=>{class e extends ee{constructor(t,o){super(),this.errorHandler=t,this.effectsErrorHandler=o}addEffects(t){this.next(t)}toActions(){return this.pipe(z(t=>Qe(t)?_e(t):t),v(t=>t.pipe(z(Et))),v(t=>{let o=t.pipe(ne(n=>gt(this.errorHandler,this.effectsErrorHandler)(n)),c(n=>(it(n,this.errorHandler),n.notification)),F(n=>n.kind==="N"&&n.value!=null),oe()),a=t.pipe(te(1),F(mt),c(n=>n.ngrxOnInitEffects()));return G(o,a)}))}static{this.\u0275fac=function(o){return new(o||e)(s(ce),s(rt))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Et(e){return ft(e)?e.ngrxOnIdentifyEffects():""}function gt(e,r){return t=>{let o=et(t,e,r);return lt(t)?t.ngrxOnRunEffects(o):o}}var vt=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(t,o){this.effectSources=t,this.store=o,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(o){return new(o||e)(s(De),s(U))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function ke(...e){let r=e.flat(),t=We(r);return ae([t,{provide:se,multi:!0,useValue:()=>{u(Re),u(Ce,{optional:!0});let o=u(vt),a=u(De),n=!o.isStarted;n&&o.start();for(let f of r){let g=Oe(f)?u(f):f;a.addEffects(g)}n&&u(U).dispatch(nt())}}])}var b=class e{url="https://reqres.in/api";http=u(me);getUsers(){return this.http.get(`${this.url}/users?delay=3`).pipe(c(r=>r.data))}getUserById(r){return this.http.get(`${this.url}/user/${r}`).pipe(c(t=>t.data))}static \u0275fac=function(t){return new(t||e)};static \u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})};var V=class e{constructor(r,t){this.actions$=r;this.usuarioService=t}cargarUsuario$=N(()=>this.actions$.pipe(P(j),v(r=>this.usuarioService.getUserById(r.id).pipe(c(t=>T({usuario:t})),S(t=>C(_({payload:t})))))));static \u0275fac=function(t){return new(t||e)(s($),s(b))};static \u0275prov=p({token:e,factory:e.\u0275fac})};var H=class e{constructor(r,t){this.actions$=r;this.usuarioService=t}cargarUsuarios$=N(()=>this.actions$.pipe(P(O),Z(r=>console.log("effect tap",r)),v(r=>this.usuarioService.getUsers().pipe(Z(t=>console.log("getUsers effet",t)),c(t=>w({usuarios:t})),S(t=>C(D({payload:t})))))));static \u0275fac=function(t){return new(t||e)(s($),s(b))};static \u0275prov=p({token:e,factory:e.\u0275fac})};var Pe=[H,V];var Ve={providers:[pe({eventCoalescing:!0}),ye(Me),Ee(),Ae(Te),ke(Pe),ht({maxAge:25,logOnly:!le(),autoPause:!0,trace:!1,traceLimit:75,connectInZone:!0})]};function ht(e){throw new Error("Function not implemented.")}var L=class e{router=u(he);irUsuario(r){r&&this.router.navigate(["usuario",r])}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=A({type:e,selectors:[["app-navbar"]],standalone:!0,features:[M],decls:17,vars:0,consts:[["txtInput",""],[1,"navbar","navbar-expand-sm","bg-body-tertiary"],[1,"container-fluid"],["routerLink","home",1,"navbar-brand"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],["routerLinkActive","active",1,"nav-item"],["aria-current","page","routerLink","home",1,"nav-link"],["routerLink","usuario/1",1,"nav-link"],[1,"d-flex"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","me-2"],["type","button",1,"btn","btn-outline-success",3,"keyup.enter","click"]],template:function(t,o){if(t&1){let a=ue();m(0,"nav",1)(1,"div",2)(2,"a",3),I(3,"Effects"),h(),m(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),I(8,"Home"),h()(),m(9,"li",6)(10,"a",8),I(11,"Usuario"),h()()(),m(12,"div",9),y(13,"input",10,0),m(15,"button",11),fe("keyup.enter",function(){K(a);let f=q(14);return Y(o.irUsuario(f.value))})("click",function(){K(a);let f=q(14);return Y(o.irUsuario(f.value))}),I(16," Buscar "),h()()()()()}},dependencies:[de,Se,be],encapsulation:2,changeDetection:0})};var B=class e{title="redux-http-effects";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=A({type:e,selectors:[["app-root"]],standalone:!0,features:[M],decls:3,vars:0,consts:[[1,"conatiner","p-3"]],template:function(t,o){t&1&&(y(0,"app-navbar"),m(1,"div",0),y(2,"router-outlet"),h())},dependencies:[ve,L]})};ge(B,Ve).catch(e=>console.error(e));
