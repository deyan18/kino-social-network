function rc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const C_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",D_=rc(C_);function Ip(t){return!!t||t===""}function ic(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ke(s)?N_(s):ic(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ke(t))return t;if(Ue(t))return t}}const R_=/;(?![^(]*\))/g,O_=/:(.+)/;function N_(t){const e={};return t.split(R_).forEach(n=>{if(n){const s=n.split(O_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function oc(t){let e="";if(Ke(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=oc(t[n]);s&&(e+=s+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function M_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ra(t[s],e[s]);return n}function Ra(t,e){if(t===e)return!0;let n=cf(t),s=cf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=K(t),s=K(e),n||s)return n&&s?M_(t,e):!1;if(n=Ue(t),s=Ue(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ra(t[o],e[o]))return!1}}return String(t)===String(e)}function P_(t,e){return t.findIndex(n=>Ra(n,e))}const iN=t=>Ke(t)?t:t==null?"":K(t)||Ue(t)&&(t.toString===kp||!ne(t.toString))?JSON.stringify(t,Sp,2):String(t),Sp=(t,e)=>e&&e.__v_isRef?Sp(t,e.value):er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Na(e)?{[`Set(${e.size})`]:[...e.values()]}:Ue(e)&&!K(e)&&!Ap(e)?String(e):e,Te={},Zs=[],Wt=()=>{},x_=()=>!1,L_=/^on[^a-z]/,Oa=t=>L_.test(t),ac=t=>t.startsWith("onUpdate:"),ht=Object.assign,lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},F_=Object.prototype.hasOwnProperty,ce=(t,e)=>F_.call(t,e),K=Array.isArray,er=t=>Ma(t)==="[object Map]",Na=t=>Ma(t)==="[object Set]",cf=t=>t instanceof Date,ne=t=>typeof t=="function",Ke=t=>typeof t=="string",uc=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",bp=t=>Ue(t)&&ne(t.then)&&ne(t.catch),kp=Object.prototype.toString,Ma=t=>kp.call(t),U_=t=>Ma(t).slice(8,-1),Ap=t=>Ma(t)==="[object Object]",cc=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bo=rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},V_=/-(\w)/g,on=Pa(t=>t.replace(V_,(e,n)=>n?n.toUpperCase():"")),$_=/\B([A-Z])/g,Ps=Pa(t=>t.replace($_,"-$1").toLowerCase()),xa=Pa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Dl=Pa(t=>t?`on${xa(t)}`:""),pi=(t,e)=>!Object.is(t,e),ko=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ho=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},jo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hf;const B_=()=>hf||(hf=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let dn;class H_{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&dn&&(this.parent=dn,this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return dn=this,e()}finally{dn=this.parent}}on(){dn=this}off(){dn=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function j_(t,e=dn){e&&e.active&&e.effects.push(t)}const hc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Cp=t=>(t.w&Jn)>0,Dp=t=>(t.n&Jn)>0,W_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jn},Y_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Cp(r)&&!Dp(r)?r.delete(t):e[n++]=r,r.w&=~Jn,r.n&=~Jn}e.length=n}},ru=new WeakMap;let zr=0,Jn=1;const iu=30;let nn;const vs=Symbol(""),ou=Symbol("");class fc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,j_(this,s)}run(){if(!this.active)return this.fn();let e=nn,n=qn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nn,nn=this,qn=!0,Jn=1<<++zr,zr<=iu?W_(this):ff(this),this.fn()}finally{zr<=iu&&Y_(this),Jn=1<<--zr,nn=this.parent,qn=n,this.parent=void 0}}stop(){this.active&&(ff(this),this.onStop&&this.onStop(),this.active=!1)}}function ff(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let qn=!0;const Rp=[];function Sr(){Rp.push(qn),qn=!1}function br(){const t=Rp.pop();qn=t===void 0?!0:t}function Rt(t,e,n){if(qn&&nn){let s=ru.get(t);s||ru.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=hc()),Op(r)}}function Op(t,e){let n=!1;zr<=iu?Dp(t)||(t.n|=Jn,n=!Cp(t)):n=!t.has(nn),n&&(t.add(nn),nn.deps.push(t))}function bn(t,e,n,s,r,i){const o=ru.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t))o.forEach((l,u)=>{(u==="length"||u>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?cc(n)&&a.push(o.get("length")):(a.push(o.get(vs)),er(t)&&a.push(o.get(ou)));break;case"delete":K(t)||(a.push(o.get(vs)),er(t)&&a.push(o.get(ou)));break;case"set":er(t)&&a.push(o.get(vs));break}if(a.length===1)a[0]&&au(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);au(hc(l))}}function au(t,e){for(const n of K(t)?t:[...t])(n!==nn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const q_=rc("__proto__,__v_isRef,__isVue"),Np=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(uc)),K_=dc(),z_=dc(!1,!0),G_=dc(!0),df=X_();function X_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let i=0,o=this.length;i<o;i++)Rt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(pe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Sr();const s=pe(this)[e].apply(this,n);return br(),s}}),t}function dc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?fw:Fp:e?Lp:xp).get(s))return s;const o=K(s);if(!t&&o&&ce(df,r))return Reflect.get(df,r,i);const a=Reflect.get(s,r,i);return(uc(r)?Np.has(r):q_(r))||(t||Rt(s,"get",r),e)?a:Je(a)?!o||!cc(r)?a.value:a:Ue(a)?t?Up(a):Fi(a):a}}const Q_=Mp(),J_=Mp(!0);function Mp(t=!1){return function(n,s,r,i){let o=n[s];if(mi(o)&&Je(o)&&!Je(r))return!1;if(!t&&!mi(r)&&(Vp(r)||(r=pe(r),o=pe(o)),!K(n)&&Je(o)&&!Je(r)))return o.value=r,!0;const a=K(n)&&cc(s)?Number(s)<n.length:ce(n,s),l=Reflect.set(n,s,r,i);return n===pe(i)&&(a?pi(r,o)&&bn(n,"set",s,r):bn(n,"add",s,r)),l}}function Z_(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&bn(t,"delete",e,void 0),s}function ew(t,e){const n=Reflect.has(t,e);return(!uc(e)||!Np.has(e))&&Rt(t,"has",e),n}function tw(t){return Rt(t,"iterate",K(t)?"length":vs),Reflect.ownKeys(t)}const Pp={get:K_,set:Q_,deleteProperty:Z_,has:ew,ownKeys:tw},nw={get:G_,set(t,e){return!0},deleteProperty(t,e){return!0}},sw=ht({},Pp,{get:z_,set:J_}),pc=t=>t,La=t=>Reflect.getPrototypeOf(t);function fo(t,e,n=!1,s=!1){t=t.__v_raw;const r=pe(t),i=pe(e);e!==i&&!n&&Rt(r,"get",e),!n&&Rt(r,"get",i);const{has:o}=La(r),a=s?pc:n?yc:gi;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function po(t,e=!1){const n=this.__v_raw,s=pe(n),r=pe(t);return t!==r&&!e&&Rt(s,"has",t),!e&&Rt(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function mo(t,e=!1){return t=t.__v_raw,!e&&Rt(pe(t),"iterate",vs),Reflect.get(t,"size",t)}function pf(t){t=pe(t);const e=pe(this);return La(e).has.call(e,t)||(e.add(t),bn(e,"add",t,t)),this}function mf(t,e){e=pe(e);const n=pe(this),{has:s,get:r}=La(n);let i=s.call(n,t);i||(t=pe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?pi(e,o)&&bn(n,"set",t,e):bn(n,"add",t,e),this}function gf(t){const e=pe(this),{has:n,get:s}=La(e);let r=n.call(e,t);r||(t=pe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&bn(e,"delete",t,void 0),i}function yf(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&bn(t,"clear",void 0,void 0),n}function go(t,e){return function(s,r){const i=this,o=i.__v_raw,a=pe(o),l=e?pc:t?yc:gi;return!t&&Rt(a,"iterate",vs),o.forEach((u,c)=>s.call(r,l(u),l(c),i))}}function yo(t,e,n){return function(...s){const r=this.__v_raw,i=pe(r),o=er(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...s),c=n?pc:e?yc:gi;return!e&&Rt(i,"iterate",l?ou:vs),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[c(h[0]),c(h[1])]:c(h),done:f}},[Symbol.iterator](){return this}}}}function Mn(t){return function(...e){return t==="delete"?!1:this}}function rw(){const t={get(i){return fo(this,i)},get size(){return mo(this)},has:po,add:pf,set:mf,delete:gf,clear:yf,forEach:go(!1,!1)},e={get(i){return fo(this,i,!1,!0)},get size(){return mo(this)},has:po,add:pf,set:mf,delete:gf,clear:yf,forEach:go(!1,!0)},n={get(i){return fo(this,i,!0)},get size(){return mo(this,!0)},has(i){return po.call(this,i,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:go(!0,!1)},s={get(i){return fo(this,i,!0,!0)},get size(){return mo(this,!0)},has(i){return po.call(this,i,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:go(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yo(i,!1,!1),n[i]=yo(i,!0,!1),e[i]=yo(i,!1,!0),s[i]=yo(i,!0,!0)}),[t,n,e,s]}const[iw,ow,aw,lw]=rw();function mc(t,e){const n=e?t?lw:aw:t?ow:iw;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ce(n,r)&&r in s?n:s,r,i)}const uw={get:mc(!1,!1)},cw={get:mc(!1,!0)},hw={get:mc(!0,!1)},xp=new WeakMap,Lp=new WeakMap,Fp=new WeakMap,fw=new WeakMap;function dw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pw(t){return t.__v_skip||!Object.isExtensible(t)?0:dw(U_(t))}function Fi(t){return mi(t)?t:gc(t,!1,Pp,uw,xp)}function mw(t){return gc(t,!1,sw,cw,Lp)}function Up(t){return gc(t,!0,nw,hw,Fp)}function gc(t,e,n,s,r){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=pw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function tr(t){return mi(t)?tr(t.__v_raw):!!(t&&t.__v_isReactive)}function mi(t){return!!(t&&t.__v_isReadonly)}function Vp(t){return!!(t&&t.__v_isShallow)}function $p(t){return tr(t)||mi(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Bp(t){return Ho(t,"__v_skip",!0),t}const gi=t=>Ue(t)?Fi(t):t,yc=t=>Ue(t)?Up(t):t;function Hp(t){qn&&nn&&(t=pe(t),Op(t.dep||(t.dep=hc())))}function jp(t,e){t=pe(t),t.dep&&au(t.dep)}function Je(t){return!!(t&&t.__v_isRef===!0)}function gw(t){return Wp(t,!1)}function yw(t){return Wp(t,!0)}function Wp(t,e){return Je(t)?t:new vw(t,e)}class vw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:gi(e)}get value(){return Hp(this),this._value}set value(e){e=this.__v_isShallow?e:pe(e),pi(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:gi(e),jp(this))}}function ti(t){return Je(t)?t.value:t}const _w={get:(t,e,n)=>ti(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Je(r)&&!Je(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Yp(t){return tr(t)?t:new Proxy(t,_w)}class ww{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new fc(e,()=>{this._dirty||(this._dirty=!0,jp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=pe(this);return Hp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ew(t,e,n=!1){let s,r;const i=ne(t);return i?(s=t,r=Wt):(s=t.get,r=t.set),new ww(s,r,i||!r,n)}Promise.resolve();function Kn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Fa(i,e,n)}return r}function Ft(t,e,n,s){if(ne(t)){const i=Kn(t,e,n,s);return i&&bp(i)&&i.catch(o=>{Fa(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ft(t[i],e,n,s));return r}function Fa(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Kn(l,null,10,[t,o,a]);return}}Tw(t,n,r,s)}function Tw(t,e,n,s=!0){console.error(t)}let Wo=!1,lu=!1;const Ct=[];let mn=0;const ni=[];let Gr=null,qs=0;const si=[];let Fn=null,Ks=0;const qp=Promise.resolve();let vc=null,uu=null;function Kp(t){const e=vc||qp;return t?e.then(this?t.bind(this):t):e}function Iw(t){let e=mn+1,n=Ct.length;for(;e<n;){const s=e+n>>>1;yi(Ct[s])<t?e=s+1:n=s}return e}function zp(t){(!Ct.length||!Ct.includes(t,Wo&&t.allowRecurse?mn+1:mn))&&t!==uu&&(t.id==null?Ct.push(t):Ct.splice(Iw(t.id),0,t),Gp())}function Gp(){!Wo&&!lu&&(lu=!0,vc=qp.then(Jp))}function Sw(t){const e=Ct.indexOf(t);e>mn&&Ct.splice(e,1)}function Xp(t,e,n,s){K(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Gp()}function bw(t){Xp(t,Gr,ni,qs)}function kw(t){Xp(t,Fn,si,Ks)}function _c(t,e=null){if(ni.length){for(uu=e,Gr=[...new Set(ni)],ni.length=0,qs=0;qs<Gr.length;qs++)Gr[qs]();Gr=null,qs=0,uu=null,_c(t,e)}}function Qp(t){if(si.length){const e=[...new Set(si)];if(si.length=0,Fn){Fn.push(...e);return}for(Fn=e,Fn.sort((n,s)=>yi(n)-yi(s)),Ks=0;Ks<Fn.length;Ks++)Fn[Ks]();Fn=null,Ks=0}}const yi=t=>t.id==null?1/0:t.id;function Jp(t){lu=!1,Wo=!0,_c(t),Ct.sort((n,s)=>yi(n)-yi(s));const e=Wt;try{for(mn=0;mn<Ct.length;mn++){const n=Ct[mn];n&&n.active!==!1&&Kn(n,null,14)}}finally{mn=0,Ct.length=0,Qp(),Wo=!1,vc=null,(Ct.length||ni.length||si.length)&&Jp(t)}}function Aw(t,e,...n){const s=t.vnode.props||Te;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[c]||Te;f?r=n.map(m=>m.trim()):h&&(r=n.map(jo))}let a,l=s[a=Dl(e)]||s[a=Dl(on(e))];!l&&i&&(l=s[a=Dl(Ps(e))]),l&&Ft(l,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ft(u,t,6,r)}}function Zp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ne(t)){const l=u=>{const c=Zp(u,e,!0);c&&(a=!0,ht(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(s.set(t,null),null):(K(i)?i.forEach(l=>o[l]=null):ht(o,i),s.set(t,o),o)}function wc(t,e){return!t||!Oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,Ps(e))||ce(t,e))}let Dt=null,em=null;function Yo(t){const e=Dt;return Dt=t,em=t&&t.type.__scopeId||null,e}function Cw(t,e=Dt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Cf(-1);const i=Yo(e),o=t(...r);return Yo(i),s._d&&Cf(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Rl(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:u,render:c,renderCache:h,data:f,setupState:m,ctx:y,inheritAttrs:b}=t;let S,R;const U=Yo(t);try{if(n.shapeFlag&4){const Z=r||s;S=Zt(c.call(Z,Z,h,i,m,f,y)),R=l}else{const Z=e;S=Zt(Z.length>1?Z(i,{attrs:l,slots:a,emit:u}):Z(i,null)),R=e.props?l:Dw(l)}}catch(Z){ri.length=0,Fa(Z,t,1),S=je(qt)}let Q=S;if(R&&b!==!1){const Z=Object.keys(R),{shapeFlag:ye}=Q;Z.length&&ye&7&&(o&&Z.some(ac)&&(R=Rw(R,o)),Q=ur(Q,R))}return n.dirs&&(Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&(Q.transition=n.transition),S=Q,Yo(U),S}const Dw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oa(n))&&((e||(e={}))[n]=t[n]);return e},Rw=(t,e)=>{const n={};for(const s in t)(!ac(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ow(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?vf(s,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(o[f]!==s[f]&&!wc(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?vf(s,o,u):!0:!!o;return!1}function vf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!wc(n,i))return!0}return!1}function Nw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Mw=t=>t.__isSuspense;function Pw(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):kw(t)}function Ao(t,e){if(qe){let n=qe.provides;const s=qe.parent&&qe.parent.provides;s===n&&(n=qe.provides=Object.create(s)),n[t]=e}}function En(t,e,n=!1){const s=qe||Dt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ne(e)?e.call(s.proxy):e}}const _f={};function Co(t,e,n){return tm(t,e,n)}function tm(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Te){const a=qe;let l,u=!1,c=!1;if(Je(t)?(l=()=>t.value,u=Vp(t)):tr(t)?(l=()=>t,s=!0):K(t)?(c=!0,u=t.some(tr),l=()=>t.map(R=>{if(Je(R))return R.value;if(tr(R))return ds(R);if(ne(R))return Kn(R,a,2)})):ne(t)?e?l=()=>Kn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ft(t,a,3,[f])}:l=Wt,e&&s){const R=l;l=()=>ds(R())}let h,f=R=>{h=S.onStop=()=>{Kn(R,a,4)}};if(vi)return f=Wt,e?n&&Ft(e,a,3,[l(),c?[]:void 0,f]):l(),Wt;let m=c?[]:_f;const y=()=>{if(!!S.active)if(e){const R=S.run();(s||u||(c?R.some((U,Q)=>pi(U,m[Q])):pi(R,m)))&&(h&&h(),Ft(e,a,3,[R,m===_f?void 0:m,f]),m=R)}else S.run()};y.allowRecurse=!!e;let b;r==="sync"?b=y:r==="post"?b=()=>Et(y,a&&a.suspense):b=()=>{!a||a.isMounted?bw(y):y()};const S=new fc(l,b);return e?n?y():m=S.run():r==="post"?Et(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&lc(a.scope.effects,S)}}function xw(t,e,n){const s=this.proxy,r=Ke(t)?t.includes(".")?nm(s,t):()=>s[t]:t.bind(s,s);let i;ne(e)?i=e:(i=e.handler,n=e);const o=qe;cr(this);const a=tm(r,i.bind(s),n);return o?cr(o):ws(),a}function nm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ds(t,e){if(!Ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Je(t))ds(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)ds(t[n],e);else if(Na(t)||er(t))t.forEach(n=>{ds(n,e)});else if(Ap(t))for(const n in t)ds(t[n],e);return t}function Lw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return am(()=>{t.isMounted=!0}),lm(()=>{t.isUnmounting=!0}),t}const Pt=[Function,Array],Fw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt},setup(t,{slots:e}){const n=T0(),s=Lw();let r;return()=>{const i=e.default&&rm(e.default(),!0);if(!i||!i.length)return;const o=pe(t),{mode:a}=o,l=i[0];if(s.isLeaving)return Ol(l);const u=wf(l);if(!u)return Ol(l);const c=cu(u,o,s,n);hu(u,c);const h=n.subTree,f=h&&wf(h);let m=!1;const{getTransitionKey:y}=u.type;if(y){const b=y();r===void 0?r=b:b!==r&&(r=b,m=!0)}if(f&&f.type!==qt&&(!cs(u,f)||m)){const b=cu(f,o,s,n);if(hu(f,b),a==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update()},Ol(l);a==="in-out"&&u.type!==qt&&(b.delayLeave=(S,R,U)=>{const Q=sm(s,f);Q[String(f.key)]=f,S._leaveCb=()=>{R(),S._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=U})}return l}}},Uw=Fw;function sm(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function cu(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:b,onAppear:S,onAfterAppear:R,onAppearCancelled:U}=e,Q=String(t.key),Z=sm(n,t),ye=(se,Le)=>{se&&Ft(se,s,9,Le)},xe={mode:i,persisted:o,beforeEnter(se){let Le=a;if(!n.isMounted)if(r)Le=b||a;else return;se._leaveCb&&se._leaveCb(!0);const Ie=Z[Q];Ie&&cs(t,Ie)&&Ie.el._leaveCb&&Ie.el._leaveCb(),ye(Le,[se])},enter(se){let Le=l,Ie=u,it=c;if(!n.isMounted)if(r)Le=S||l,Ie=R||u,it=U||c;else return;let ot=!1;const pt=se._enterCb=Nn=>{ot||(ot=!0,Nn?ye(it,[se]):ye(Ie,[se]),xe.delayedLeave&&xe.delayedLeave(),se._enterCb=void 0)};Le?(Le(se,pt),Le.length<=1&&pt()):pt()},leave(se,Le){const Ie=String(t.key);if(se._enterCb&&se._enterCb(!0),n.isUnmounting)return Le();ye(h,[se]);let it=!1;const ot=se._leaveCb=pt=>{it||(it=!0,Le(),pt?ye(y,[se]):ye(m,[se]),se._leaveCb=void 0,Z[Ie]===t&&delete Z[Ie])};Z[Ie]=t,f?(f(se,ot),f.length<=1&&ot()):ot()},clone(se){return cu(se,e,n,s)}};return xe}function Ol(t){if(Ua(t))return t=ur(t),t.children=null,t}function wf(t){return Ua(t)?t.children?t.children[0]:void 0:t}function hu(t,e){t.shapeFlag&6&&t.component?hu(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function rm(t,e=!1){let n=[],s=0;for(let r=0;r<t.length;r++){const i=t[r];i.type===xt?(i.patchFlag&128&&s++,n=n.concat(rm(i.children,e))):(e||i.type!==qt)&&n.push(i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function im(t){return ne(t)?{setup:t,name:t.name}:t}const fu=t=>!!t.type.__asyncLoader,Ua=t=>t.type.__isKeepAlive;function Vw(t,e){om(t,"a",e)}function $w(t,e){om(t,"da",e)}function om(t,e,n=qe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Va(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ua(r.parent.vnode)&&Bw(s,e,n,r),r=r.parent}}function Bw(t,e,n,s){const r=Va(e,t,s,!0);um(()=>{lc(s[e],r)},n)}function Va(t,e,n=qe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Sr(),cr(n);const a=Ft(e,n,t,o);return ws(),br(),a});return s?r.unshift(i):r.push(i),i}}const Dn=t=>(e,n=qe)=>(!vi||t==="sp")&&Va(t,e,n),Hw=Dn("bm"),am=Dn("m"),jw=Dn("bu"),Ww=Dn("u"),lm=Dn("bum"),um=Dn("um"),Yw=Dn("sp"),qw=Dn("rtg"),Kw=Dn("rtc");function zw(t,e=qe){Va("ec",t,e)}let du=!0;function Gw(t){const e=hm(t),n=t.proxy,s=t.ctx;du=!1,e.beforeCreate&&Ef(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:f,beforeUpdate:m,updated:y,activated:b,deactivated:S,beforeDestroy:R,beforeUnmount:U,destroyed:Q,unmounted:Z,render:ye,renderTracked:xe,renderTriggered:se,errorCaptured:Le,serverPrefetch:Ie,expose:it,inheritAttrs:ot,components:pt,directives:Nn,filters:Vs}=e;if(u&&Xw(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Se in o){const ve=o[Se];ne(ve)&&(s[Se]=ve.bind(n))}if(r){const Se=r.call(n,n);Ue(Se)&&(t.data=Fi(Se))}if(du=!0,i)for(const Se in i){const ve=i[Se],bt=ne(ve)?ve.bind(n,n):ne(ve.get)?ve.get.bind(n,n):Wt,Bs=!ne(ve)&&ne(ve.set)?ve.set.bind(n):Wt,hn=en({get:bt,set:Bs});Object.defineProperty(s,Se,{enumerable:!0,configurable:!0,get:()=>hn.value,set:Xt=>hn.value=Xt})}if(a)for(const Se in a)cm(a[Se],s,n,Se);if(l){const Se=ne(l)?l.call(n):l;Reflect.ownKeys(Se).forEach(ve=>{Ao(ve,Se[ve])})}c&&Ef(c,t,"c");function He(Se,ve){K(ve)?ve.forEach(bt=>Se(bt.bind(n))):ve&&Se(ve.bind(n))}if(He(Hw,h),He(am,f),He(jw,m),He(Ww,y),He(Vw,b),He($w,S),He(zw,Le),He(Kw,xe),He(qw,se),He(lm,U),He(um,Z),He(Yw,Ie),K(it))if(it.length){const Se=t.exposed||(t.exposed={});it.forEach(ve=>{Object.defineProperty(Se,ve,{get:()=>n[ve],set:bt=>n[ve]=bt})})}else t.exposed||(t.exposed={});ye&&t.render===Wt&&(t.render=ye),ot!=null&&(t.inheritAttrs=ot),pt&&(t.components=pt),Nn&&(t.directives=Nn)}function Xw(t,e,n=Wt,s=!1){K(t)&&(t=pu(t));for(const r in t){const i=t[r];let o;Ue(i)?"default"in i?o=En(i.from||r,i.default,!0):o=En(i.from||r):o=En(i),Je(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ef(t,e,n){Ft(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function cm(t,e,n,s){const r=s.includes(".")?nm(n,s):()=>n[s];if(Ke(t)){const i=e[t];ne(i)&&Co(r,i)}else if(ne(t))Co(r,t.bind(n));else if(Ue(t))if(K(t))t.forEach(i=>cm(i,e,n,s));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&Co(r,i,t)}}function hm(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(u=>qo(l,u,o,!0)),qo(l,e,o)),i.set(e,l),l}function qo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&qo(t,i,n,!0),r&&r.forEach(o=>qo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Qw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Qw={data:Tf,props:ls,emits:ls,methods:ls,computed:ls,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:ls,directives:ls,watch:Zw,provide:Tf,inject:Jw};function Tf(t,e){return e?t?function(){return ht(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function Jw(t,e){return ls(pu(t),pu(e))}function pu(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function ls(t,e){return t?ht(ht(Object.create(null),t),e):e}function Zw(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const s in e)n[s]=mt(t[s],e[s]);return n}function e0(t,e,n,s=!1){const r={},i={};Ho(i,$a,1),t.propsDefaults=Object.create(null),fm(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:mw(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function t0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=pe(r),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];const m=e[f];if(l)if(ce(i,f))m!==i[f]&&(i[f]=m,u=!0);else{const y=on(f);r[y]=mu(l,a,y,m,t,!1)}else m!==i[f]&&(i[f]=m,u=!0)}}}else{fm(t,e,r,i)&&(u=!0);let c;for(const h in a)(!e||!ce(e,h)&&((c=Ps(h))===h||!ce(e,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(r[h]=mu(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ce(e,h)&&!0)&&(delete i[h],u=!0)}u&&bn(t,"set","$attrs")}function fm(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(bo(l))continue;const u=e[l];let c;r&&ce(r,c=on(l))?!i||!i.includes(c)?n[c]=u:(a||(a={}))[c]=u:wc(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(i){const l=pe(n),u=a||Te;for(let c=0;c<i.length;c++){const h=i[c];n[h]=mu(r,l,h,u[h],t,!ce(u,h))}}return o}function mu(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&ne(l)){const{propsDefaults:u}=r;n in u?s=u[n]:(cr(r),s=u[n]=l.call(null,e),ws())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ps(n))&&(s=!0))}return s}function dm(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!ne(t)){const c=h=>{l=!0;const[f,m]=dm(h,e,!0);ht(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!i&&!l)return s.set(t,Zs),Zs;if(K(i))for(let c=0;c<i.length;c++){const h=on(i[c]);If(h)&&(o[h]=Te)}else if(i)for(const c in i){const h=on(c);if(If(h)){const f=i[c],m=o[h]=K(f)||ne(f)?{type:f}:f;if(m){const y=kf(Boolean,m.type),b=kf(String,m.type);m[0]=y>-1,m[1]=b<0||y<b,(y>-1||ce(m,"default"))&&a.push(h)}}}const u=[o,a];return s.set(t,u),u}function If(t){return t[0]!=="$"}function Sf(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function bf(t,e){return Sf(t)===Sf(e)}function kf(t,e){return K(e)?e.findIndex(n=>bf(n,t)):ne(e)&&bf(e,t)?0:-1}const pm=t=>t[0]==="_"||t==="$stable",Ec=t=>K(t)?t.map(Zt):[Zt(t)],n0=(t,e,n)=>{const s=Cw((...r)=>Ec(e(...r)),n);return s._c=!1,s},mm=(t,e,n)=>{const s=t._ctx;for(const r in t){if(pm(r))continue;const i=t[r];if(ne(i))e[r]=n0(r,i,s);else if(i!=null){const o=Ec(i);e[r]=()=>o}}},gm=(t,e)=>{const n=Ec(e);t.slots.default=()=>n},s0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Ho(e,"_",n)):mm(e,t.slots={})}else t.slots={},e&&gm(t,e);Ho(t.slots,$a,1)},r0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Te;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ht(r,e),!n&&a===1&&delete r._):(i=!e.$stable,mm(e,r)),o=e}else e&&(gm(t,e),o={default:1});if(i)for(const a in r)!pm(a)&&!(a in o)&&delete r[a]};function oN(t,e){const n=Dt;if(n===null)return t;const s=n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,u=Te]=e[i];ne(o)&&(o={mounted:o,updated:o}),o.deep&&ds(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:u})}return t}function is(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Sr(),Ft(l,n,8,[t.el,a,t,e]),br())}}function ym(){return{app:null,config:{isNativeTag:x_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i0=0;function o0(t,e){return function(s,r=null){r!=null&&!Ue(r)&&(r=null);const i=ym(),o=new Set;let a=!1;const l=i.app={_uid:i0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:D0,get config(){return i.config},set config(u){},use(u,...c){return o.has(u)||(u&&ne(u.install)?(o.add(u),u.install(l,...c)):ne(u)&&(o.add(u),u(l,...c))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,c){return c?(i.components[u]=c,l):i.components[u]},directive(u,c){return c?(i.directives[u]=c,l):i.directives[u]},mount(u,c,h){if(!a){const f=je(s,r);return f.appContext=i,c&&e?e(f,u):t(f,u,h),a=!0,l._container=u,u.__vue_app__=l,Sc(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,c){return i.provides[u]=c,l}};return l}}function gu(t,e,n,s,r=!1){if(K(t)){t.forEach((f,m)=>gu(f,e&&(K(e)?e[m]:e),n,s,r));return}if(fu(s)&&!r)return;const i=s.shapeFlag&4?Sc(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&(Ke(u)?(c[u]=null,ce(h,u)&&(h[u]=null)):Je(u)&&(u.value=null)),ne(l))Kn(l,a,12,[o,c]);else{const f=Ke(l),m=Je(l);if(f||m){const y=()=>{if(t.f){const b=f?c[l]:l.value;r?K(b)&&lc(b,i):K(b)?b.includes(i)||b.push(i):f?c[l]=[i]:(l.value=[i],t.k&&(c[t.k]=l.value))}else f?(c[l]=o,ce(h,l)&&(h[l]=o)):Je(l)&&(l.value=o,t.k&&(c[t.k]=o))};o?(y.id=-1,Et(y,n)):y()}}}const Et=Pw;function a0(t){return l0(t)}function l0(t,e){const n=B_();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:f,setScopeId:m=Wt,cloneNode:y,insertStaticContent:b}=t,S=(d,p,g,E=null,w=null,A=null,M=!1,k=null,D=!!p.dynamicChildren)=>{if(d===p)return;d&&!cs(d,p)&&(E=B(d),Mt(d,w,A,!0),d=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:T,ref:W,shapeFlag:F}=p;switch(T){case Tc:R(d,p,g,E);break;case qt:U(d,p,g,E);break;case Do:d==null&&Q(p,g,E,M);break;case xt:Nn(d,p,g,E,w,A,M,k,D);break;default:F&1?xe(d,p,g,E,w,A,M,k,D):F&6?Vs(d,p,g,E,w,A,M,k,D):(F&64||F&128)&&T.process(d,p,g,E,w,A,M,k,D,be)}W!=null&&w&&gu(W,d&&d.ref,A,p||d,!p)},R=(d,p,g,E)=>{if(d==null)s(p.el=a(p.children),g,E);else{const w=p.el=d.el;p.children!==d.children&&u(w,p.children)}},U=(d,p,g,E)=>{d==null?s(p.el=l(p.children||""),g,E):p.el=d.el},Q=(d,p,g,E)=>{[d.el,d.anchor]=b(d.children,p,g,E,d.el,d.anchor)},Z=({el:d,anchor:p},g,E)=>{let w;for(;d&&d!==p;)w=f(d),s(d,g,E),d=w;s(p,g,E)},ye=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),r(d),d=g;r(p)},xe=(d,p,g,E,w,A,M,k,D)=>{M=M||p.type==="svg",d==null?se(p,g,E,w,A,M,k,D):it(d,p,w,A,M,k,D)},se=(d,p,g,E,w,A,M,k)=>{let D,T;const{type:W,props:F,shapeFlag:Y,transition:G,patchFlag:ue,dirs:Ne}=d;if(d.el&&y!==void 0&&ue===-1)D=d.el=y(d.el);else{if(D=d.el=o(d.type,A,F&&F.is,F),Y&8?c(D,d.children):Y&16&&Ie(d.children,D,null,E,w,A&&W!=="foreignObject",M,k),Ne&&is(d,null,E,"created"),F){for(const Ae in F)Ae!=="value"&&!bo(Ae)&&i(D,Ae,null,F[Ae],A,d.children,E,w,O);"value"in F&&i(D,"value",null,F.value),(T=F.onVnodeBeforeMount)&&Jt(T,E,d)}Le(D,d,d.scopeId,M,E)}Ne&&is(d,null,E,"beforeMount");const we=(!w||w&&!w.pendingBranch)&&G&&!G.persisted;we&&G.beforeEnter(D),s(D,p,g),((T=F&&F.onVnodeMounted)||we||Ne)&&Et(()=>{T&&Jt(T,E,d),we&&G.enter(D),Ne&&is(d,null,E,"mounted")},w)},Le=(d,p,g,E,w)=>{if(g&&m(d,g),E)for(let A=0;A<E.length;A++)m(d,E[A]);if(w){let A=w.subTree;if(p===A){const M=w.vnode;Le(d,M,M.scopeId,M.slotScopeIds,w.parent)}}},Ie=(d,p,g,E,w,A,M,k,D=0)=>{for(let T=D;T<d.length;T++){const W=d[T]=k?Un(d[T]):Zt(d[T]);S(null,W,p,g,E,w,A,M,k)}},it=(d,p,g,E,w,A,M)=>{const k=p.el=d.el;let{patchFlag:D,dynamicChildren:T,dirs:W}=p;D|=d.patchFlag&16;const F=d.props||Te,Y=p.props||Te;let G;g&&os(g,!1),(G=Y.onVnodeBeforeUpdate)&&Jt(G,g,p,d),W&&is(p,d,g,"beforeUpdate"),g&&os(g,!0);const ue=w&&p.type!=="foreignObject";if(T?ot(d.dynamicChildren,T,k,g,E,ue,A):M||bt(d,p,k,null,g,E,ue,A,!1),D>0){if(D&16)pt(k,p,F,Y,g,E,w);else if(D&2&&F.class!==Y.class&&i(k,"class",null,Y.class,w),D&4&&i(k,"style",F.style,Y.style,w),D&8){const Ne=p.dynamicProps;for(let we=0;we<Ne.length;we++){const Ae=Ne[we],Bt=F[Ae],Hs=Y[Ae];(Hs!==Bt||Ae==="value")&&i(k,Ae,Bt,Hs,w,d.children,g,E,O)}}D&1&&d.children!==p.children&&c(k,p.children)}else!M&&T==null&&pt(k,p,F,Y,g,E,w);((G=Y.onVnodeUpdated)||W)&&Et(()=>{G&&Jt(G,g,p,d),W&&is(p,d,g,"updated")},E)},ot=(d,p,g,E,w,A,M)=>{for(let k=0;k<p.length;k++){const D=d[k],T=p[k],W=D.el&&(D.type===xt||!cs(D,T)||D.shapeFlag&70)?h(D.el):g;S(D,T,W,null,E,w,A,M,!0)}},pt=(d,p,g,E,w,A,M)=>{if(g!==E){for(const k in E){if(bo(k))continue;const D=E[k],T=g[k];D!==T&&k!=="value"&&i(d,k,T,D,M,p.children,w,A,O)}if(g!==Te)for(const k in g)!bo(k)&&!(k in E)&&i(d,k,g[k],null,M,p.children,w,A,O);"value"in E&&i(d,"value",g.value,E.value)}},Nn=(d,p,g,E,w,A,M,k,D)=>{const T=p.el=d?d.el:a(""),W=p.anchor=d?d.anchor:a("");let{patchFlag:F,dynamicChildren:Y,slotScopeIds:G}=p;G&&(k=k?k.concat(G):G),d==null?(s(T,g,E),s(W,g,E),Ie(p.children,g,W,w,A,M,k,D)):F>0&&F&64&&Y&&d.dynamicChildren?(ot(d.dynamicChildren,Y,g,w,A,M,k),(p.key!=null||w&&p===w.subTree)&&vm(d,p,!0)):bt(d,p,g,W,w,A,M,k,D)},Vs=(d,p,g,E,w,A,M,k,D)=>{p.slotScopeIds=k,d==null?p.shapeFlag&512?w.ctx.activate(p,g,E,M,D):$s(p,g,E,w,A,M,D):He(d,p,D)},$s=(d,p,g,E,w,A,M)=>{const k=d.component=E0(d,E,w);if(Ua(d)&&(k.ctx.renderer=be),I0(k),k.asyncDep){if(w&&w.registerDep(k,Se),!d.el){const D=k.subTree=je(qt);U(null,D,p,g)}return}Se(k,d,p,g,w,A,M)},He=(d,p,g)=>{const E=p.component=d.component;if(Ow(d,p,g))if(E.asyncDep&&!E.asyncResolved){ve(E,p,g);return}else E.next=p,Sw(E.update),E.update();else p.component=d.component,p.el=d.el,E.vnode=p},Se=(d,p,g,E,w,A,M)=>{const k=()=>{if(d.isMounted){let{next:W,bu:F,u:Y,parent:G,vnode:ue}=d,Ne=W,we;os(d,!1),W?(W.el=ue.el,ve(d,W,M)):W=ue,F&&ko(F),(we=W.props&&W.props.onVnodeBeforeUpdate)&&Jt(we,G,W,ue),os(d,!0);const Ae=Rl(d),Bt=d.subTree;d.subTree=Ae,S(Bt,Ae,h(Bt.el),B(Bt),d,w,A),W.el=Ae.el,Ne===null&&Nw(d,Ae.el),Y&&Et(Y,w),(we=W.props&&W.props.onVnodeUpdated)&&Et(()=>Jt(we,G,W,ue),w)}else{let W;const{el:F,props:Y}=p,{bm:G,m:ue,parent:Ne}=d,we=fu(p);if(os(d,!1),G&&ko(G),!we&&(W=Y&&Y.onVnodeBeforeMount)&&Jt(W,Ne,p),os(d,!0),F&&te){const Ae=()=>{d.subTree=Rl(d),te(F,d.subTree,d,w,null)};we?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Ae()):Ae()}else{const Ae=d.subTree=Rl(d);S(null,Ae,g,E,d,w,A),p.el=Ae.el}if(ue&&Et(ue,w),!we&&(W=Y&&Y.onVnodeMounted)){const Ae=p;Et(()=>Jt(W,Ne,Ae),w)}p.shapeFlag&256&&d.a&&Et(d.a,w),d.isMounted=!0,p=g=E=null}},D=d.effect=new fc(k,()=>zp(d.update),d.scope),T=d.update=D.run.bind(D);T.id=d.uid,os(d,!0),T()},ve=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,t0(d,p.props,E,g),r0(d,p.children,g),Sr(),_c(void 0,d.update),br()},bt=(d,p,g,E,w,A,M,k,D=!1)=>{const T=d&&d.children,W=d?d.shapeFlag:0,F=p.children,{patchFlag:Y,shapeFlag:G}=p;if(Y>0){if(Y&128){hn(T,F,g,E,w,A,M,k,D);return}else if(Y&256){Bs(T,F,g,E,w,A,M,k,D);return}}G&8?(W&16&&O(T,w,A),F!==T&&c(g,F)):W&16?G&16?hn(T,F,g,E,w,A,M,k,D):O(T,w,A,!0):(W&8&&c(g,""),G&16&&Ie(F,g,E,w,A,M,k,D))},Bs=(d,p,g,E,w,A,M,k,D)=>{d=d||Zs,p=p||Zs;const T=d.length,W=p.length,F=Math.min(T,W);let Y;for(Y=0;Y<F;Y++){const G=p[Y]=D?Un(p[Y]):Zt(p[Y]);S(d[Y],G,g,null,w,A,M,k,D)}T>W?O(d,w,A,!0,!1,F):Ie(p,g,E,w,A,M,k,D,F)},hn=(d,p,g,E,w,A,M,k,D)=>{let T=0;const W=p.length;let F=d.length-1,Y=W-1;for(;T<=F&&T<=Y;){const G=d[T],ue=p[T]=D?Un(p[T]):Zt(p[T]);if(cs(G,ue))S(G,ue,g,null,w,A,M,k,D);else break;T++}for(;T<=F&&T<=Y;){const G=d[F],ue=p[Y]=D?Un(p[Y]):Zt(p[Y]);if(cs(G,ue))S(G,ue,g,null,w,A,M,k,D);else break;F--,Y--}if(T>F){if(T<=Y){const G=Y+1,ue=G<W?p[G].el:E;for(;T<=Y;)S(null,p[T]=D?Un(p[T]):Zt(p[T]),g,ue,w,A,M,k,D),T++}}else if(T>Y)for(;T<=F;)Mt(d[T],w,A,!0),T++;else{const G=T,ue=T,Ne=new Map;for(T=ue;T<=Y;T++){const kt=p[T]=D?Un(p[T]):Zt(p[T]);kt.key!=null&&Ne.set(kt.key,T)}let we,Ae=0;const Bt=Y-ue+1;let Hs=!1,af=0;const jr=new Array(Bt);for(T=0;T<Bt;T++)jr[T]=0;for(T=G;T<=F;T++){const kt=d[T];if(Ae>=Bt){Mt(kt,w,A,!0);continue}let Qt;if(kt.key!=null)Qt=Ne.get(kt.key);else for(we=ue;we<=Y;we++)if(jr[we-ue]===0&&cs(kt,p[we])){Qt=we;break}Qt===void 0?Mt(kt,w,A,!0):(jr[Qt-ue]=T+1,Qt>=af?af=Qt:Hs=!0,S(kt,p[Qt],g,null,w,A,M,k,D),Ae++)}const lf=Hs?u0(jr):Zs;for(we=lf.length-1,T=Bt-1;T>=0;T--){const kt=ue+T,Qt=p[kt],uf=kt+1<W?p[kt+1].el:E;jr[T]===0?S(null,Qt,g,uf,w,A,M,k,D):Hs&&(we<0||T!==lf[we]?Xt(Qt,g,uf,2):we--)}}},Xt=(d,p,g,E,w=null)=>{const{el:A,type:M,transition:k,children:D,shapeFlag:T}=d;if(T&6){Xt(d.component.subTree,p,g,E);return}if(T&128){d.suspense.move(p,g,E);return}if(T&64){M.move(d,p,g,be);return}if(M===xt){s(A,p,g);for(let F=0;F<D.length;F++)Xt(D[F],p,g,E);s(d.anchor,p,g);return}if(M===Do){Z(d,p,g);return}if(E!==2&&T&1&&k)if(E===0)k.beforeEnter(A),s(A,p,g),Et(()=>k.enter(A),w);else{const{leave:F,delayLeave:Y,afterLeave:G}=k,ue=()=>s(A,p,g),Ne=()=>{F(A,()=>{ue(),G&&G()})};Y?Y(A,ue,Ne):Ne()}else s(A,p,g)},Mt=(d,p,g,E=!1,w=!1)=>{const{type:A,props:M,ref:k,children:D,dynamicChildren:T,shapeFlag:W,patchFlag:F,dirs:Y}=d;if(k!=null&&gu(k,null,g,d,!0),W&256){p.ctx.deactivate(d);return}const G=W&1&&Y,ue=!fu(d);let Ne;if(ue&&(Ne=M&&M.onVnodeBeforeUnmount)&&Jt(Ne,p,d),W&6)V(d.component,g,E);else{if(W&128){d.suspense.unmount(g,E);return}G&&is(d,null,p,"beforeUnmount"),W&64?d.type.remove(d,p,g,w,be,E):T&&(A!==xt||F>0&&F&64)?O(T,p,g,!1,!0):(A===xt&&F&384||!w&&W&16)&&O(D,p,g),E&&Cl(d)}(ue&&(Ne=M&&M.onVnodeUnmounted)||G)&&Et(()=>{Ne&&Jt(Ne,p,d),G&&is(d,null,p,"unmounted")},g)},Cl=d=>{const{type:p,el:g,anchor:E,transition:w}=d;if(p===xt){v(g,E);return}if(p===Do){ye(d);return}const A=()=>{r(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:k}=w,D=()=>M(g,A);k?k(d.el,A,D):D()}else A()},v=(d,p)=>{let g;for(;d!==p;)g=f(d),r(d),d=g;r(p)},V=(d,p,g)=>{const{bum:E,scope:w,update:A,subTree:M,um:k}=d;E&&ko(E),w.stop(),A&&(A.active=!1,Mt(M,d,p,g)),k&&Et(k,p),Et(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(d,p,g,E=!1,w=!1,A=0)=>{for(let M=A;M<d.length;M++)Mt(d[M],p,g,E,w)},B=d=>d.shapeFlag&6?B(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),_e=(d,p,g)=>{d==null?p._vnode&&Mt(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,g),Qp(),p._vnode=d},be={p:S,um:Mt,m:Xt,r:Cl,mt:$s,mc:Ie,pc:bt,pbc:ot,n:B,o:t};let oe,te;return e&&([oe,te]=e(be)),{render:_e,hydrate:oe,createApp:o0(_e,oe)}}function os({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function vm(t,e,n=!1){const s=t.children,r=e.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Un(r[i]),a.el=o.el),n||vm(o,a))}}function u0(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const c0=t=>t.__isTeleport,_m="components";function aN(t,e){return f0(_m,t,!0,e)||t}const h0=Symbol();function f0(t,e,n=!0,s=!1){const r=Dt||qe;if(r){const i=r.type;if(t===_m){const a=A0(i);if(a&&(a===e||a===on(e)||a===xa(on(e))))return i}const o=Af(r[t]||i[t],e)||Af(r.appContext[t],e);return!o&&s?i:o}}function Af(t,e){return t&&(t[e]||t[on(e)]||t[xa(on(e))])}const xt=Symbol(void 0),Tc=Symbol(void 0),qt=Symbol(void 0),Do=Symbol(void 0),ri=[];let _s=null;function kr(t=!1){ri.push(_s=t?null:[])}function d0(){ri.pop(),_s=ri[ri.length-1]||null}let Ko=1;function Cf(t){Ko+=t}function wm(t){return t.dynamicChildren=Ko>0?_s||Zs:null,d0(),Ko>0&&_s&&_s.push(t),t}function lN(t,e,n,s,r,i){return wm(Tm(t,e,n,s,r,i,!0))}function Ar(t,e,n,s,r){return wm(je(t,e,n,s,r,!0))}function zo(t){return t?t.__v_isVNode===!0:!1}function cs(t,e){return t.type===e.type&&t.key===e.key}const $a="__vInternal",Em=({key:t})=>t!=null?t:null,Ro=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ke(t)||Je(t)||ne(t)?{i:Dt,r:t,k:e,f:!!n}:t:null;function Tm(t,e=null,n=null,s=0,r=null,i=t===xt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Em(e),ref:e&&Ro(e),scopeId:em,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Ic(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),Ko>0&&!o&&_s&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_s.push(l),l}const je=p0;function p0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===h0)&&(t=qt),zo(t)){const a=ur(t,e,!0);return n&&Ic(a,n),a}if(C0(t)&&(t=t.__vccOpts),e){e=m0(e);let{class:a,style:l}=e;a&&!Ke(a)&&(e.class=oc(a)),Ue(l)&&($p(l)&&!K(l)&&(l=ht({},l)),e.style=ic(l))}const o=Ke(t)?1:Mw(t)?128:c0(t)?64:Ue(t)?4:ne(t)?2:0;return Tm(t,e,n,s,r,o,i,!0)}function m0(t){return t?$p(t)||$a in t?ht({},t):t:null}function ur(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?y0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Em(a),ref:e&&e.ref?n&&r?K(r)?r.concat(Ro(e)):[r,Ro(e)]:Ro(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ur(t.ssContent),ssFallback:t.ssFallback&&ur(t.ssFallback),el:t.el,anchor:t.anchor}}function g0(t=" ",e=0){return je(Tc,null,t,e)}function uN(t,e){const n=je(Do,null,t);return n.staticCount=e,n}function cN(t="",e=!1){return e?(kr(),Ar(qt,null,t)):je(qt,null,t)}function Zt(t){return t==null||typeof t=="boolean"?je(qt):K(t)?je(xt,null,t.slice()):typeof t=="object"?Un(t):je(Tc,null,String(t))}function Un(t){return t.el===null||t.memo?t:ur(t)}function Ic(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ic(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!($a in e)?e._ctx=Dt:r===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),s&64?(n=16,e=[g0(e)]):n=8);t.children=e,t.shapeFlag|=n}function y0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=oc([e.class,s.class]));else if(r==="style")e.style=ic([e.style,s.style]);else if(Oa(r)){const i=e[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Jt(t,e,n,s=null){Ft(t,e,7,[n,s])}function hN(t,e,n,s){let r;const i=n&&n[s];if(K(t)||Ke(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ue(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function fN(t,e,n={},s,r){if(Dt.isCE)return je("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),kr();const o=i&&Im(i(n)),a=Ar(xt,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Im(t){return t.some(e=>zo(e)?!(e.type===qt||e.type===xt&&!Im(e.children)):!0)?t:null}const yu=t=>t?Sm(t)?Sc(t)||t.proxy:yu(t.parent):null,Go=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yu(t.parent),$root:t=>yu(t.root),$emit:t=>t.emit,$options:t=>hm(t),$forceUpdate:t=>()=>zp(t.update),$nextTick:t=>Kp.bind(t.proxy),$watch:t=>xw.bind(t)}),v0={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==Te&&ce(s,e))return o[e]=1,s[e];if(r!==Te&&ce(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ce(u,e))return o[e]=3,i[e];if(n!==Te&&ce(n,e))return o[e]=4,n[e];du&&(o[e]=0)}}const c=Go[e];let h,f;if(c)return e==="$attrs"&&Rt(t,"get",e),c(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&ce(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ce(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==Te&&ce(r,e)?(r[e]=n,!0):s!==Te&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Te&&ce(t,o)||e!==Te&&ce(e,o)||(a=i[0])&&ce(a,o)||ce(s,o)||ce(Go,o)||ce(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},_0=ym();let w0=0;function E0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||_0,i={uid:w0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new H_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dm(s,r),emitsOptions:Zp(s,r),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:s.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Aw.bind(null,i),t.ce&&t.ce(i),i}let qe=null;const T0=()=>qe||Dt,cr=t=>{qe=t,t.scope.on()},ws=()=>{qe&&qe.scope.off(),qe=null};function Sm(t){return t.vnode.shapeFlag&4}let vi=!1;function I0(t,e=!1){vi=e;const{props:n,children:s}=t.vnode,r=Sm(t);e0(t,n,r,e),s0(t,s);const i=r?S0(t,e):void 0;return vi=!1,i}function S0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Bp(new Proxy(t.ctx,v0));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?k0(t):null;cr(t),Sr();const i=Kn(s,t,0,[t.props,r]);if(br(),ws(),bp(i)){if(i.then(ws,ws),e)return i.then(o=>{Df(t,o,e)}).catch(o=>{Fa(o,t,0)});t.asyncDep=i}else Df(t,i,e)}else bm(t,e)}function Df(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=Yp(e)),bm(t,n)}let Rf;function bm(t,e,n){const s=t.type;if(!t.render){if(!e&&Rf&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,u=ht(ht({isCustomElement:i,delimiters:a},o),l);s.render=Rf(r,u)}}t.render=s.render||Wt}cr(t),Sr(),Gw(t),br(),ws()}function b0(t){return new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}})}function k0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=b0(t))},slots:t.slots,emit:t.emit,expose:e}}function Sc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yp(Bp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Go)return Go[n](t)}}))}function A0(t){return ne(t)&&t.displayName||t.name}function C0(t){return ne(t)&&"__vccOpts"in t}const en=(t,e)=>Ew(t,e,vi);function km(t,e,n){const s=arguments.length;return s===2?Ue(e)&&!K(e)?zo(e)?je(t,null,[e]):je(t,e):je(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&zo(n)&&(n=[n]),je(t,e,n))}const D0="3.2.31",R0="http://www.w3.org/2000/svg",hs=typeof document!="undefined"?document:null,Of=hs&&hs.createElement("template"),O0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?hs.createElementNS(R0,t):hs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>hs.createTextNode(t),createComment:t=>hs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Of.innerHTML=s?`<svg>${t}</svg>`:t;const a=Of.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function N0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function M0(t,e,n){const s=t.style,r=Ke(n);if(n&&!r){for(const i in n)vu(s,i,n[i]);if(e&&!Ke(e))for(const i in e)n[i]==null&&vu(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Nf=/\s*!important$/;function vu(t,e,n){if(K(n))n.forEach(s=>vu(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=P0(t,e);Nf.test(n)?t.setProperty(Ps(s),n.replace(Nf,""),"important"):t[s]=n}}const Mf=["Webkit","Moz","ms"],Nl={};function P0(t,e){const n=Nl[e];if(n)return n;let s=on(e);if(s!=="filter"&&s in t)return Nl[e]=s;s=xa(s);for(let r=0;r<Mf.length;r++){const i=Mf[r]+s;if(i in t)return Nl[e]=i}return e}const Pf="http://www.w3.org/1999/xlink";function x0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Pf,e.slice(6,e.length)):t.setAttributeNS(Pf,e,n);else{const i=D_(e);n==null||i&&!Ip(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function L0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Ip(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Xo=Date.now,Am=!1;if(typeof window!="undefined"){Xo()>document.createEvent("Event").timeStamp&&(Xo=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Am=!!(t&&Number(t[1])<=53)}let _u=0;const F0=Promise.resolve(),U0=()=>{_u=0},V0=()=>_u||(F0.then(U0),_u=Xo());function fs(t,e,n,s){t.addEventListener(e,n,s)}function $0(t,e,n,s){t.removeEventListener(e,n,s)}function B0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=H0(e);if(s){const u=i[e]=j0(s,r);fs(t,a,u,l)}else o&&($0(t,a,o,l),i[e]=void 0)}}const xf=/(?:Once|Passive|Capture)$/;function H0(t){let e;if(xf.test(t)){e={};let n;for(;n=t.match(xf);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ps(t.slice(2)),e]}function j0(t,e){const n=s=>{const r=s.timeStamp||Xo();(Am||r>=n.attached-1)&&Ft(W0(s,n.value),e,5,[s])};return n.value=t,n.attached=V0(),n}function W0(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Lf=/^on[a-z]/,Y0=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?N0(t,s,r):e==="style"?M0(t,n,s):Oa(e)?ac(e)||B0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):q0(t,e,s,r))?L0(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),x0(t,e,s,r))};function q0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Lf.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Lf.test(e)&&Ke(n)?!1:e in t}const K0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Uw.props;const Qo=t=>{const e=t.props["onUpdate:modelValue"];return K(e)?n=>ko(e,n):e};function z0(t){t.target.composing=!0}function Ff(t){const e=t.target;e.composing&&(e.composing=!1,G0(e,"input"))}function G0(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const dN={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Qo(r);const i=s||r.props&&r.props.type==="number";fs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=jo(a)),t._assign(a)}),n&&fs(t,"change",()=>{t.value=t.value.trim()}),e||(fs(t,"compositionstart",z0),fs(t,"compositionend",Ff),fs(t,"change",Ff))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Qo(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&jo(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},pN={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Na(e);fs(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?jo(Jo(o)):Jo(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Qo(s)},mounted(t,{value:e}){Uf(t,e)},beforeUpdate(t,e,n){t._assign=Qo(n)},updated(t,{value:e}){Uf(t,e)}};function Uf(t,e){const n=t.multiple;if(!(n&&!K(e)&&!Na(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Jo(i);if(n)K(e)?i.selected=P_(e,o)>-1:i.selected=e.has(o);else if(Ra(Jo(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Jo(t){return"_value"in t?t._value:t.value}const X0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},mN=(t,e)=>n=>{if(!("key"in n))return;const s=Ps(n.key);if(e.some(r=>r===s||X0[r]===s))return t(n)},Q0=ht({patchProp:Y0},O0);let Vf;function J0(){return Vf||(Vf=a0(Q0))}const gN=(...t)=>{const e=J0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Z0(s);if(!r)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Z0(t){return Ke(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},eE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,u=l?t[r+2]:0,c=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),s.push(n[c],n[h],n[f],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const m=a<<4&240|u>>2;if(s.push(m),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},tE=function(t){const e=Cm(t);return Dm.encodeByteArray(e,!0)},Rm=function(t){return tE(t).replace(/\./g,"")},nE=function(t){try{return Dm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Om(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Nm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rE(){return ze().indexOf("Electron/")>=0}function Pm(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iE(){return ze().indexOf("MSAppHost/")>=0}function oE(){return typeof indexedDB=="object"}function aE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="FirebaseError";class xs extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=lE,Object.setPrototypeOf(this,xs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?uE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new xs(r,a,s)}}function uE(t,e){return t.replace(cE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const cE=/\{\$([^}]+)}/g;function hE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if($f(i)&&$f(o)){if(!Zo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function $f(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Xr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Qr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fE(t,e){const n=new dE(t,e);return n.subscribe.bind(n)}class dE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");pE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ml),r.error===void 0&&(r.error=Ml),r.complete===void 0&&(r.complete=Ml);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ml(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t,e){return new Promise((n,s)=>{t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;s(`${e}: ${(i=r.target.error)===null||i===void 0?void 0:i.message}`)}})}class Bf{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new xm(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Lm(this._db.createObjectStore(e,n))}close(){this._db.close()}}class xm{constructor(e){this._transaction=e,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(e){return new Lm(this._transaction.objectStore(e))}}class Lm{constructor(e){this._store=e}index(e){return new Hf(this._store.index(e))}createIndex(e,n,s){return new Hf(this._store.createIndex(e,n,s))}get(e){const n=this._store.get(e);return Jr(n,"Error reading from IndexedDB")}put(e,n){const s=this._store.put(e,n);return Jr(s,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Jr(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Jr(e,"Error clearing IndexedDB object store")}}class Hf{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Jr(n,"Error reading from IndexedDB")}}function mE(t,e,n){return new Promise((s,r)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{s(new Bf(o.target.result))},i.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new Bf(i.result),o.oldVersion,o.newVersion,new xm(i.transaction))}}catch(i){r(`Error opening indexedDB: ${i.message}`)}})}class Ss{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new sE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vE(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yE(t){return t===us?void 0:t}function vE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const wE={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},EE=de.INFO,TE={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},IE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=TE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=EE,this._logHandler=IE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function bE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wu="@firebase/app",jf="0.7.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new bc("@firebase/app"),kE="@firebase/app-compat",AE="@firebase/analytics-compat",CE="@firebase/analytics",DE="@firebase/app-check-compat",RE="@firebase/app-check",OE="@firebase/auth",NE="@firebase/auth-compat",ME="@firebase/database",PE="@firebase/database-compat",xE="@firebase/functions",LE="@firebase/functions-compat",FE="@firebase/installations",UE="@firebase/installations-compat",VE="@firebase/messaging",$E="@firebase/messaging-compat",BE="@firebase/performance",HE="@firebase/performance-compat",jE="@firebase/remote-config",WE="@firebase/remote-config-compat",YE="@firebase/storage",qE="@firebase/storage-compat",KE="@firebase/firestore",zE="@firebase/firestore-compat",GE="firebase",XE="9.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="[DEFAULT]",QE={[wu]:"fire-core",[kE]:"fire-core-compat",[CE]:"fire-analytics",[AE]:"fire-analytics-compat",[RE]:"fire-app-check",[DE]:"fire-app-check-compat",[OE]:"fire-auth",[NE]:"fire-auth-compat",[ME]:"fire-rtdb",[PE]:"fire-rtdb-compat",[xE]:"fire-fn",[LE]:"fire-fn-compat",[FE]:"fire-iid",[UE]:"fire-iid-compat",[VE]:"fire-fcm",[$E]:"fire-fcm-compat",[BE]:"fire-perf",[HE]:"fire-perf-compat",[jE]:"fire-rc",[WE]:"fire-rc-compat",[YE]:"fire-gcs",[qE]:"fire-gcs-compat",[KE]:"fire-fst",[zE]:"fire-fst-compat","fire-js":"fire-js",[GE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new Map,Eu=new Map;function JE(t,e){try{t.container.addComponent(e)}catch(n){kc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hr(t){const e=t.name;if(Eu.has(e))return kc.debug(`There were multiple attempts to register component ${e}.`),!1;Eu.set(e,t);for(const n of ea.values())JE(n,t);return!0}function Ac(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},bs=new Ui("app","Firebase",ZE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=XE;function yN(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Fm,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw bs.create("bad-app-name",{appName:String(s)});const r=ea.get(s);if(r){if(Zo(t,r.options)&&Zo(n,r.config))return r;throw bs.create("duplicate-app",{appName:s})}const i=new _E(s);for(const a of Eu.values())i.addComponent(a);const o=new eT(t,n,i);return ea.set(s,o),o}function Um(t=Fm){const e=ea.get(t);if(!e)throw bs.create("no-app",{appName:t});return e}function zn(t,e,n){var s;let r=(s=QE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kc.warn(a.join(" "));return}hr(new Ss(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="firebase-heartbeat-database",nT=1,_i="firebase-heartbeat-store";let Pl=null;function Vm(){return Pl||(Pl=mE(tT,nT,(t,e)=>{switch(e){case 0:t.createObjectStore(_i)}}).catch(t=>{throw bs.create("storage-open",{originalErrorMessage:t.message})})),Pl}async function sT(t){try{return(await Vm()).transaction(_i).objectStore(_i).get($m(t))}catch(e){throw bs.create("storage-get",{originalErrorMessage:e.message})}}async function Wf(t,e){try{const s=(await Vm()).transaction(_i,"readwrite");return await s.objectStore(_i).put(e,$m(t)),s.complete}catch(n){throw bs.create("storage-set",{originalErrorMessage:n.message})}}function $m(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=1024,iT=30*24*60*60*1e3;class oT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=iT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yf(),{heartbeatsToSend:n,unsentEntries:s}=aT(this._heartbeatsCache.heartbeats),r=Rm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yf(){return new Date().toISOString().substring(0,10)}function aT(t,e=rT){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),qf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),qf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class lT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oE()?aE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qf(t){return Rm(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){hr(new Ss("platform-logger",e=>new SE(e),"PRIVATE")),hr(new Ss("heartbeat",e=>new oT(e),"PRIVATE")),zn(wu,jf,t),zn(wu,jf,"esm2017"),zn("fire-js","")}uT("");function Cc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Bm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cT=Bm,Hm=new Ui("auth","Firebase",Bm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=new bc("@firebase/auth");function Oo(t,...e){Kf.logLevel<=de.ERROR&&Kf.error(`Auth (${$i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,...e){throw Dc(t,...e)}function sn(t,...e){return Dc(t,...e)}function jm(t,e,n){const s=Object.assign(Object.assign({},cT()),{[e]:n});return new Ui("auth","Firebase",s).create(e,{appName:t.name})}function hT(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ut(t,"argument-error"),jm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Hm.create(t,...e)}function q(t,e,...n){if(!t)throw Dc(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function kn(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=new Map;function yn(t){kn(t instanceof Function,"Expected a class definition");let e=zf.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t,e){const n=Ac(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Zo(i,e!=null?e:{}))return r;Ut(r,"already-initialized")}return n.initialize({options:e})}function dT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pT(){return Gf()==="http:"||Gf()==="https:"}function Gf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pT()||Nm()||"connection"in navigator)?navigator.onLine:!0}function gT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Om()||Mm()}get(){return mT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new Bi(3e4,6e4);function Cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dr(t,e,n,s,r={}){return Ym(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Wm.fetch()(qm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Ym(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},yT),e);try{const r=new _T(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xl(t,"email-already-in-use",o);const c=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jm(t,c,u);Ut(t,c)}}catch(r){if(r instanceof xs)throw r;Ut(t,"network-request-failed")}}async function Hi(t,e,n,s,r={}){const i=await Dr(t,e,n,s,r);return"mfaPendingCredential"in i&&Ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}function qm(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Rc(t.config,r):`${t.config.apiScheme}://${r}`}class _T{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(sn(this.auth,"network-request-failed")),vT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xl(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=sn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(t,e){return Dr(t,"POST","/v1/accounts:delete",e)}async function ET(t,e){return Dr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TT(t,e=!1){const n=nt(t),s=await n.getIdToken(e),r=Oc(s);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ii(Ll(r.auth_time)),issuedAtTime:ii(Ll(r.iat)),expirationTime:ii(Ll(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ll(t){return Number(t)*1e3}function Oc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const r=nE(n);return r?JSON.parse(r):(Oo("Failed to decode base64 JWT payload"),null)}catch(r){return Oo("Caught error parsing JWT payload as JSON",r),null}}function IT(t){const e=Oc(t);return q(e,"internal-error"),q(typeof e.exp!="undefined","internal-error"),q(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof xs&&ST(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function ST({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t){var e;const n=t.auth,s=await t.getIdToken(),r=await fr(t,ET(n,{idToken:s}));q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?CT(i.providerUserInfo):[],a=AT(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Km(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function kT(t){const e=nt(t);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AT(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function CT(t){return t.map(e=>{var{providerId:n}=e,s=Cc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(t,e){const n=await Ym(t,{},async()=>{const s=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=qm(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken!="undefined","internal-error"),q(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):IT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await DT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new wi;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,e){q(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Es{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Cc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Km(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fr(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TT(this,e)}reload(){return kT(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Es(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fr(this,wT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,u,c;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:Q,emailVerified:Z,isAnonymous:ye,providerData:xe,stsTokenManager:se}=n;q(Q&&se,e,"internal-error");const Le=wi.fromJSON(this.name,se);q(typeof Q=="string",e,"internal-error"),Pn(h,e.name),Pn(f,e.name),q(typeof Z=="boolean",e,"internal-error"),q(typeof ye=="boolean",e,"internal-error"),Pn(m,e.name),Pn(y,e.name),Pn(b,e.name),Pn(S,e.name),Pn(R,e.name),Pn(U,e.name);const Ie=new Es({uid:Q,auth:e,email:f,emailVerified:Z,displayName:h,isAnonymous:ye,photoURL:y,phoneNumber:m,tenantId:b,stsTokenManager:Le,createdAt:R,lastLoginAt:U});return xe&&Array.isArray(xe)&&(Ie.providerData=xe.map(it=>Object.assign({},it))),S&&(Ie._redirectEventId=S),Ie}static async _fromIdTokenResponse(e,n,s=!1){const r=new wi;r.updateFromServerResponse(n);const i=new Es({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ta(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zm.type="NONE";const Xf=zm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class nr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=No(this.userKey,r.apiKey,i),this.fullPersistenceKey=No("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Es._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new nr(yn(Xf),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||yn(Xf);const o=No(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Es._fromJSON(e,c);u!==i&&(a=h),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new nr(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new nr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zm(e))return"Blackberry";if(eg(e))return"Webos";if(Nc(e))return"Safari";if((e.includes("chrome/")||Xm(e))&&!e.includes("edge/"))return"Chrome";if(Jm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Gm(t=ze()){return/firefox\//i.test(t)}function Nc(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xm(t=ze()){return/crios\//i.test(t)}function Qm(t=ze()){return/iemobile/i.test(t)}function Jm(t=ze()){return/android/i.test(t)}function Zm(t=ze()){return/blackberry/i.test(t)}function eg(t=ze()){return/webos/i.test(t)}function Ba(t=ze()){return/iphone|ipad|ipod/i.test(t)}function RT(t=ze()){var e;return Ba(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OT(){return Pm()&&document.documentMode===10}function tg(t=ze()){return Ba(t)||Jm(t)||eg(t)||Zm(t)||/windows phone/i.test(t)||Qm(t)}function NT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e=[]){let n;switch(t){case"Browser":n=Qf(ze());break;case"Worker":n=`${Qf(ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$i}/${s}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jf(this),this.idTokenSubscription=new Jf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await nr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===i)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ng(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function ji(t){return nt(t)}class Jf{constructor(e){this.auth=e,this.observer=null,this.addObserver=fE(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function sg(t,e){return Dr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(t,e){return Hi(t,"POST","/v1/accounts:signInWithPassword",Cr(t,e))}async function xT(t,e){return Dr(t,"POST","/v1/accounts:sendOobCode",Cr(t,e))}async function LT(t,e){return xT(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(t,e){return Hi(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}async function UT(t,e){return Hi(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Mc{constructor(e,n,s,r=null){super("password",s);this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ei(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ei(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return PT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return FT(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return sg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return UT(e,{idToken:n,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(t,e){return Hi(t,"POST","/v1/accounts:signInWithIdp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="http://localhost";class ks extends Mc{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Cc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ks(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,sr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sr(e,n)}buildRequest(){const e={requestUri:VT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BT(t){const e=Xr(Qr(t)).link,n=e?Xr(Qr(e)).deep_link_id:null,s=Xr(Qr(t)).deep_link_id;return(s?Xr(Qr(s)).link:null)||s||n||e||t}class Pc{constructor(e){var n,s,r,i,o,a;const l=Xr(Qr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(s=l.oobCode)!==null&&s!==void 0?s:null,h=$T((r=l.mode)!==null&&r!==void 0?r:null);q(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=BT(e);try{return new Pc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.providerId=Rr.PROVIDER_ID}static credential(e,n){return Ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Pc.parseLink(n);return q(s,"argument-error"),Ei._fromEmailAndCode(e,s.code,s.tenantId)}}Rr.PROVIDER_ID="password";Rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends xc{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Wi{constructor(){super("facebook.com")}static credential(e){return ks._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Wi{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return ks._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Bn.credential(n,s)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Wi{constructor(){super("github.com")}static credential(e){return ks._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Wi{constructor(){super("twitter.com")}static credential(e,n){return ks._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return jn.credential(n,s)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(t,e){return Hi(t,"POST","/v1/accounts:signUp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Es._fromIdTokenResponse(e,s,r),o=Zf(s);return new As({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Zf(s);return new As({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Zf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends xs{constructor(e,n,s,r){var i;super(n.code,n.message);this.operationType=s,this.user=r,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new na(e,n,s,r)}}function rg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(t,i,e,s):i})}async function jT(t,e,n=!1){const s=await fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return As._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await fr(t,rg(s,r,e,t),n);q(i.idToken,s,"internal-error");const o=Oc(i.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),As._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ut(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(t,e,n=!1){const s="signIn",r=await rg(t,s,e),i=await As._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function YT(t,e){return ig(ji(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t,e,n){var s;q(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),q(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vN(t,e,n){const s=nt(t),r={requestType:"PASSWORD_RESET",email:e};n&&qT(s,r,n),await LT(s,r)}async function _N(t,e,n){const s=ji(t),r=await HT(s,{returnSecureToken:!0,email:e,password:n}),i=await As._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function wN(t,e,n){return YT(nt(t),Rr.credential(e,n))}function EN(t,e){return og(nt(t),e,null)}function TN(t,e){return og(nt(t),null,e)}async function og(t,e,n){const{auth:s}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await fr(t,sg(s,i));await t._updateTokensIfNecessary(o,!0)}function IN(t,e,n,s){return nt(t).onAuthStateChanged(e,n,s)}function SN(t){return nt(t).signOut()}const sa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(){const t=ze();return Nc(t)||Ba(t)}const zT=1e3,GT=10;class lg extends ag{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KT()&&NT(),this.fallbackToPolling=tg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);OT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,GT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},zT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lg.type="LOCAL";const XT=lg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends ag{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ug.type="SESSION";const cg=ug;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ha(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await QT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ha.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Lc("",20);r.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(c),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function ZT(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){return typeof rn().WorkerGlobalScope!="undefined"&&typeof rn().importScripts=="function"}async function eI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nI(){return hg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="firebaseLocalStorageDb",sI=1,ra="firebaseLocalStorage",dg="fbase_key";class Yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ja(t,e){return t.transaction([ra],e?"readwrite":"readonly").objectStore(ra)}function rI(){const t=indexedDB.deleteDatabase(fg);return new Yi(t).toPromise()}function Iu(){const t=indexedDB.open(fg,sI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ra,{keyPath:dg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ra)?e(s):(s.close(),await rI(),e(await Iu()))})})}async function ed(t,e,n){const s=ja(t,!0).put({[dg]:e,value:n});return new Yi(s).toPromise()}async function iI(t,e){const n=ja(t,!1).get(e),s=await new Yi(n).toPromise();return s===void 0?null:s.value}function td(t,e){const n=ja(t,!0).delete(e);return new Yi(n).toPromise()}const oI=800,aI=3;class pg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Iu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>aI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ha._getInstance(nI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eI(),!this.activeServiceWorker)return;this.sender=new JT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Iu();return await ed(e,sa,"1"),await td(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ed(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>iI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>td(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ja(r,!1).getAll();return new Yi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pg.type="LOCAL";const lI=pg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function cI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=sn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",uI().appendChild(s)})}function hI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Bi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t,e){return e?yn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends Mc{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fI(t){return ig(t.auth,new Fc(t),t.bypassAuthState)}function dI(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),WT(n,new Fc(t),t.bypassAuthState)}async function pI(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),jT(n,new Fc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fI;case"linkViaPopup":case"linkViaRedirect":return pI;case"reauthViaPopup":case"reauthViaRedirect":return dI;default:Ut(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=new Bi(2e3,1e4);async function bN(t,e,n){const s=ji(t);hT(t,e,xc);const r=mg(s,n);return new ps(s,"signInViaPopup",e,r).executeNotNull()}class ps extends gg{constructor(e,n,s,r,i){super(e,n,r,i);this.provider=s,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,mI.get())};e()}}ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="pendingRedirect",Fl=new Map;class yI extends gg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=Fl.get(this.auth._key());if(!e){try{const s=await vI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Fl.set(this.auth._key(),e)}return this.bypassAuthState||Fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vI(t,e){const n=wI(e),s=_I(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function _I(t){return yn(t._redirectPersistence)}function wI(t){return No(gI,t.config.apiKey,t.name)}async function EI(t,e,n=!1){const s=ji(t),r=mg(s,e),o=await new yI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=10*60*1e3;class II{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!yg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TI&&this.cachedEventUids.clear(),this.cachedEventUids.has(nd(e))}saveEventToCache(e){this.cachedEventUids.add(nd(e)),this.lastProcessedEventTime=Date.now()}}function nd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e={}){return Dr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AI=/^https?/;async function CI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bI(t);for(const n of e)try{if(DI(n))return}catch{}Ut(t,"unauthorized-domain")}function DI(t){const e=Tu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!AI.test(n))return!1;if(kI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new Bi(3e4,6e4);function sd(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OI(t){return new Promise((e,n)=>{var s,r,i;function o(){sd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sd(),n(sn(t,"network-request-failed"))},timeout:RI.get()})}if(!((r=(s=rn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)o();else{const a=hI("iframefcb");return rn()[a]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},cI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Mo=null,e})}let Mo=null;function NI(t){return Mo=Mo||OI(t),Mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=new Bi(5e3,15e3),PI="__/auth/iframe",xI="emulator/auth/iframe",LI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UI(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rc(e,xI):`https://${t.config.authDomain}/${PI}`,s={apiKey:e.apiKey,appName:t.name,v:$i},r=FI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Vi(s).slice(1)}`}async function VI(t){const e=await NI(t),n=rn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:UI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),a=rn().setTimeout(()=>{i(o)},MI.get());function l(){rn().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BI=500,HI=600,jI="_blank",WI="http://localhost";class rd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YI(t,e,n,s=BI,r=HI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$I),{width:s.toString(),height:r.toString(),top:i,left:o}),u=ze().toLowerCase();n&&(a=Xm(u)?jI:n),Gm(u)&&(e=e||WI,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,y])=>`${f}${m}=${y},`,"");if(RT(u)&&a!=="_self")return qI(e||"",a),new rd(null);const h=window.open(e||"",a,c);q(h,t,"popup-blocked");try{h.focus()}catch{}return new rd(h)}function qI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="__/auth/handler",zI="emulator/auth/handler";function id(t,e,n,s,r,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:$i,eventId:r};if(e instanceof xc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(i||{}))o[l]=u}if(e instanceof Wi){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${GI(t)}?${Vi(a).slice(1)}`}function GI({config:t}){return t.emulator?Rc(t,zI):`https://${t.authDomain}/${KI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="webStorageSupport";class XI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cg,this._completeRedirectFn=EI}async _openPopup(e,n,s,r){var i;kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=id(e,n,s,Tu(),r);return YI(e,o,Lc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),ZT(id(e,n,s,Tu(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(kn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await VI(e),s=new II(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ul,{type:Ul},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ul];o!==void 0&&n(!!o),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tg()||Nc()||Ba()}}const QI=XI;var od="@firebase/auth",ad="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eS(t){hr(new Ss("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,l)=>{q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ng(t)},c=new MT(a,l,u);return dT(c,n),c})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),hr(new Ss("auth-internal",e=>{const n=ji(e.getProvider("auth").getImmediate());return(s=>new JI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(od,ad,ZI(t)),zn(od,ad,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(t=Um()){const e=Ac(t,"auth");return e.isInitialized()?e.getImmediate():fT(t,{popupRedirectResolver:QI,persistence:[lI,XT,cg]})}eS("Browser");/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const vg=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Or=t=>vg?Symbol(t):"_vr_"+t,tS=Or("rvlm"),ld=Or("rvd"),Wa=Or("r"),_g=Or("rl"),Su=Or("rvl"),zs=typeof window!="undefined";function nS(t){return t.__esModule||vg&&t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Vl(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const oi=()=>{},sS=/\/$/,rS=t=>t.replace(sS,"");function $l(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=lS(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function iS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ud(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function oS(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&dr(e.matched[s],n.matched[r])&&wg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function dr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!aS(t[n],e[n]))return!1;return!0}function aS(t,e){return Array.isArray(t)?cd(t,e):Array.isArray(e)?cd(e,t):t===e}function cd(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function lS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Ti;(function(t){t.pop="pop",t.push="push"})(Ti||(Ti={}));var ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ai||(ai={}));function uS(t){if(!t)if(zs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rS(t)}const cS=/^[^#]+#/;function hS(t,e){return t.replace(cS,"#")+e}function fS(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ya=()=>({left:window.pageXOffset,top:window.pageYOffset});function dS(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=fS(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function hd(t,e){return(history.state?history.state.position-e:-1)+t}const bu=new Map;function pS(t,e){bu.set(t,e)}function mS(t){const e=bu.get(t);return bu.delete(t),e}let gS=()=>location.protocol+"//"+location.host;function Eg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),ud(l,"")}return ud(n,t)+s+r}function yS(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const m=Eg(t,location),y=n.value,b=e.value;let S=0;if(f){if(n.value=m,e.value=f,o&&o===y){o=null;return}S=b?f.position-b.position:0}else s(m);r.forEach(R=>{R(n.value,y,{delta:S,type:Ti.pop,direction:S?S>0?ai.forward:ai.back:ai.unknown})})};function l(){o=n.value}function u(f){r.push(f);const m=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(m),m}function c(){const{history:f}=window;!f.state||f.replaceState(Ee({},f.state,{scroll:Ya()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:h}}function fd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ya():null}}function vS(t){const{history:e,location:n}=window,s={value:Eg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:gS()+t+l;try{e[c?"replaceState":"pushState"](u,"",f),r.value=u}catch(m){console.error(m),n[c?"replace":"assign"](f)}}function o(l,u){const c=Ee({},e.state,fd(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});i(l,c,!0),s.value=l}function a(l,u){const c=Ee({},r.value,e.state,{forward:l,scroll:Ya()});i(c.current,c,!0);const h=Ee({},fd(s.value,l,null),{position:c.position+1},u);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function AN(t){t=uS(t);const e=vS(t),n=yS(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ee({location:"",base:t,go:s,createHref:hS.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function _S(t){return typeof t=="string"||t&&typeof t=="object"}function Tg(t){return typeof t=="string"||typeof t=="symbol"}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ig=Or("nf");var dd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dd||(dd={}));function pr(t,e){return Ee(new Error,{type:t,[Ig]:!0},e)}function Ln(t,e){return t instanceof Error&&Ig in t&&(e==null||!!(t.type&e))}const pd="[^/]+?",wS={sensitive:!1,strict:!1,start:!0,end:!0},ES=/[.+*?^${}()[\]/\\]/g;function TS(t,e){const n=Ee({},wS,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let m=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(ES,"\\$&"),m+=40;else if(f.type===1){const{value:y,repeatable:b,optional:S,regexp:R}=f;i.push({name:y,repeatable:b,optional:S});const U=R||pd;if(U!==pd){m+=10;try{new RegExp(`(${U})`)}catch(Z){throw new Error(`Invalid custom RegExp for param "${y}" (${U}): `+Z.message)}}let Q=b?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(Q=S&&u.length<2?`(?:/${Q})`:"/"+Q),S&&(Q+="?"),r+=Q,m+=20,S&&(m+=-8),b&&(m+=-20),U===".*"&&(m+=-50)}c.push(m)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const c=u.match(o),h={};if(!c)return null;for(let f=1;f<c.length;f++){const m=c[f]||"",y=i[f-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function l(u){let c="",h=!1;for(const f of t){(!h||!c.endsWith("/"))&&(c+="/"),h=!1;for(const m of f)if(m.type===0)c+=m.value;else if(m.type===1){const{value:y,repeatable:b,optional:S}=m,R=y in u?u[y]:"";if(Array.isArray(R)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const U=Array.isArray(R)?R.join("/"):R;if(!U)if(S)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);c+=U}}return c}return{re:o,score:s,keys:i,parse:a,stringify:l}}function IS(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function SS(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=IS(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const bS={type:0,value:""},kS=/[a-zA-Z0-9_]/;function AS(t){if(!t)return[[]];if(t==="/")return[[bS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,u="",c="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:kS.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function CS(t,e,n){const s=TS(AS(t.path),n),r=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function DS(t,e){const n=[],s=new Map;e=gd({strict:!1,end:!0,sensitive:!1},e);function r(c){return s.get(c)}function i(c,h,f){const m=!f,y=OS(c);y.aliasOf=f&&f.record;const b=gd(e,c),S=[y];if("alias"in c){const Q=typeof c.alias=="string"?[c.alias]:c.alias;for(const Z of Q)S.push(Ee({},y,{components:f?f.record.components:y.components,path:Z,aliasOf:f?f.record:y}))}let R,U;for(const Q of S){const{path:Z}=Q;if(h&&Z[0]!=="/"){const ye=h.record.path,xe=ye[ye.length-1]==="/"?"":"/";Q.path=h.record.path+(Z&&xe+Z)}if(R=CS(Q,h,b),f?f.alias.push(R):(U=U||R,U!==R&&U.alias.push(R),m&&c.name&&!md(R)&&o(c.name)),"children"in y){const ye=y.children;for(let xe=0;xe<ye.length;xe++)i(ye[xe],R,f&&f.children[xe])}f=f||R,l(R)}return U?()=>{o(U)}:oi}function o(c){if(Tg(c)){const h=s.get(c);h&&(s.delete(c),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(c);h>-1&&(n.splice(h,1),c.record.name&&s.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return n}function l(c){let h=0;for(;h<n.length&&SS(c,n[h])>=0&&(c.record.path!==n[h].record.path||!Sg(c,n[h]));)h++;n.splice(h,0,c),c.record.name&&!md(c)&&s.set(c.record.name,c)}function u(c,h){let f,m={},y,b;if("name"in c&&c.name){if(f=s.get(c.name),!f)throw pr(1,{location:c});b=f.record.name,m=Ee(RS(h.params,f.keys.filter(U=>!U.optional).map(U=>U.name)),c.params),y=f.stringify(m)}else if("path"in c)y=c.path,f=n.find(U=>U.re.test(y)),f&&(m=f.parse(y),b=f.record.name);else{if(f=h.name?s.get(h.name):n.find(U=>U.re.test(h.path)),!f)throw pr(1,{location:c,currentLocation:h});b=f.record.name,m=Ee({},h.params,c.params),y=f.stringify(m)}const S=[];let R=f;for(;R;)S.unshift(R.record),R=R.parent;return{name:b,path:y,params:m,matched:S,meta:MS(S)}}return t.forEach(c=>i(c)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function RS(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function OS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:NS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function NS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function md(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MS(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function gd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Sg(t,e){return e.children.some(n=>n===t||Sg(t,n))}const bg=/#/g,PS=/&/g,xS=/\//g,LS=/=/g,FS=/\?/g,kg=/\+/g,US=/%5B/g,VS=/%5D/g,Ag=/%5E/g,$S=/%60/g,Cg=/%7B/g,BS=/%7C/g,Dg=/%7D/g,HS=/%20/g;function Uc(t){return encodeURI(""+t).replace(BS,"|").replace(US,"[").replace(VS,"]")}function jS(t){return Uc(t).replace(Cg,"{").replace(Dg,"}").replace(Ag,"^")}function ku(t){return Uc(t).replace(kg,"%2B").replace(HS,"+").replace(bg,"%23").replace(PS,"%26").replace($S,"`").replace(Cg,"{").replace(Dg,"}").replace(Ag,"^")}function WS(t){return ku(t).replace(LS,"%3D")}function YS(t){return Uc(t).replace(bg,"%23").replace(FS,"%3F")}function qS(t){return t==null?"":YS(t).replace(xS,"%2F")}function ia(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function KS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(kg," "),o=i.indexOf("="),a=ia(o<0?i:i.slice(0,o)),l=o<0?null:ia(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function yd(t){let e="";for(let n in t){const s=t[n];if(n=WS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&ku(i)):[s&&ku(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function zS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function Wr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(pr(4,{from:n,to:e})):h instanceof Error?a(h):_S(h)?a(pr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,l);let c=Promise.resolve(u);t.length<3&&(c=c.then(l)),c.catch(h=>a(h))})}function Bl(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(GS(a)){const u=(a.__vccOpts||a)[e];u&&r.push(Vn(u,n,s,i,o))}else{let l=a();r.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=nS(u)?u.default:u;i.components[o]=c;const f=(c.__vccOpts||c)[e];return f&&Vn(f,n,s,i,o)()}))}}return r}function GS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vd(t){const e=En(Wa),n=En(_g),s=en(()=>e.resolve(ti(t.to))),r=en(()=>{const{matched:l}=s.value,{length:u}=l,c=l[u-1],h=n.matched;if(!c||!h.length)return-1;const f=h.findIndex(dr.bind(null,c));if(f>-1)return f;const m=_d(l[u-2]);return u>1&&_d(c)===m&&h[h.length-1].path!==m?h.findIndex(dr.bind(null,l[u-2])):f}),i=en(()=>r.value>-1&&ZS(n.params,s.value.params)),o=en(()=>r.value>-1&&r.value===n.matched.length-1&&wg(n.params,s.value.params));function a(l={}){return JS(l)?e[ti(t.replace)?"replace":"push"](ti(t.to)).catch(oi):Promise.resolve()}return{route:s,href:en(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const XS=im({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vd,setup(t,{slots:e}){const n=Fi(vd(t)),{options:s}=En(Wa),r=en(()=>({[wd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[wd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:km("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),QS=XS;function JS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ZS(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function _d(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wd=(t,e,n)=>t!=null?t:e!=null?e:n,eb=im({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=En(Su),r=en(()=>t.route||s.value),i=En(ld,0),o=en(()=>r.value.matched[i]);Ao(ld,i+1),Ao(tS,o),Ao(Su,r);const a=gw();return Co(()=>[a.value,o.value,t.name],([l,u,c],[h,f,m])=>{u&&(u.instances[c]=l,f&&f!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!dr(u,f)||!h)&&(u.enterCallbacks[c]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=r.value,u=o.value,c=u&&u.components[t.name],h=t.name;if(!c)return Ed(n.default,{Component:c,route:l});const f=u.props[t.name],m=f?f===!0?l.params:typeof f=="function"?f(l):f:null,b=km(c,Ee({},m,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return Ed(n.default,{Component:b,route:l})||b}}});function Ed(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tb=eb;function CN(t){const e=DS(t.routes,t),n=t.parseQuery||KS,s=t.stringifyQuery||yd,r=t.history,i=Wr(),o=Wr(),a=Wr(),l=yw(xn);let u=xn;zs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Vl.bind(null,v=>""+v),h=Vl.bind(null,qS),f=Vl.bind(null,ia);function m(v,V){let O,B;return Tg(v)?(O=e.getRecordMatcher(v),B=V):B=v,e.addRoute(B,O)}function y(v){const V=e.getRecordMatcher(v);V&&e.removeRoute(V)}function b(){return e.getRoutes().map(v=>v.record)}function S(v){return!!e.getRecordMatcher(v)}function R(v,V){if(V=Ee({},V||l.value),typeof v=="string"){const te=$l(n,v,V.path),d=e.resolve({path:te.path},V),p=r.createHref(te.fullPath);return Ee(te,d,{params:f(d.params),hash:ia(te.hash),redirectedFrom:void 0,href:p})}let O;if("path"in v)O=Ee({},v,{path:$l(n,v.path,V.path).path});else{const te=Ee({},v.params);for(const d in te)te[d]==null&&delete te[d];O=Ee({},v,{params:h(v.params)}),V.params=h(V.params)}const B=e.resolve(O,V),_e=v.hash||"";B.params=c(f(B.params));const be=iS(s,Ee({},v,{hash:jS(_e),path:B.path})),oe=r.createHref(be);return Ee({fullPath:be,hash:_e,query:s===yd?zS(v.query):v.query||{}},B,{redirectedFrom:void 0,href:oe})}function U(v){return typeof v=="string"?$l(n,v,l.value.path):Ee({},v)}function Q(v,V){if(u!==v)return pr(8,{from:V,to:v})}function Z(v){return se(v)}function ye(v){return Z(Ee(U(v),{replace:!0}))}function xe(v){const V=v.matched[v.matched.length-1];if(V&&V.redirect){const{redirect:O}=V;let B=typeof O=="function"?O(v):O;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=U(B):{path:B},B.params={}),Ee({query:v.query,hash:v.hash,params:v.params},B)}}function se(v,V){const O=u=R(v),B=l.value,_e=v.state,be=v.force,oe=v.replace===!0,te=xe(O);if(te)return se(Ee(U(te),{state:_e,force:be,replace:oe}),V||O);const d=O;d.redirectedFrom=V;let p;return!be&&oS(s,B,O)&&(p=pr(16,{to:d,from:B}),Bs(B,B,!0,!1)),(p?Promise.resolve(p):Ie(d,B)).catch(g=>Ln(g)?Ln(g,2)?g:bt(g):Se(g,d,B)).then(g=>{if(g){if(Ln(g,2))return se(Ee(U(g.to),{state:_e,force:be,replace:oe}),V||d)}else g=ot(d,B,!0,oe,_e);return it(d,B,g),g})}function Le(v,V){const O=Q(v,V);return O?Promise.reject(O):Promise.resolve()}function Ie(v,V){let O;const[B,_e,be]=nb(v,V);O=Bl(B.reverse(),"beforeRouteLeave",v,V);for(const te of B)te.leaveGuards.forEach(d=>{O.push(Vn(d,v,V))});const oe=Le.bind(null,v,V);return O.push(oe),js(O).then(()=>{O=[];for(const te of i.list())O.push(Vn(te,v,V));return O.push(oe),js(O)}).then(()=>{O=Bl(_e,"beforeRouteUpdate",v,V);for(const te of _e)te.updateGuards.forEach(d=>{O.push(Vn(d,v,V))});return O.push(oe),js(O)}).then(()=>{O=[];for(const te of v.matched)if(te.beforeEnter&&!V.matched.includes(te))if(Array.isArray(te.beforeEnter))for(const d of te.beforeEnter)O.push(Vn(d,v,V));else O.push(Vn(te.beforeEnter,v,V));return O.push(oe),js(O)}).then(()=>(v.matched.forEach(te=>te.enterCallbacks={}),O=Bl(be,"beforeRouteEnter",v,V),O.push(oe),js(O))).then(()=>{O=[];for(const te of o.list())O.push(Vn(te,v,V));return O.push(oe),js(O)}).catch(te=>Ln(te,8)?te:Promise.reject(te))}function it(v,V,O){for(const B of a.list())B(v,V,O)}function ot(v,V,O,B,_e){const be=Q(v,V);if(be)return be;const oe=V===xn,te=zs?history.state:{};O&&(B||oe?r.replace(v.fullPath,Ee({scroll:oe&&te&&te.scroll},_e)):r.push(v.fullPath,_e)),l.value=v,Bs(v,V,O,oe),bt()}let pt;function Nn(){pt=r.listen((v,V,O)=>{const B=R(v),_e=xe(B);if(_e){se(Ee(_e,{replace:!0}),B).catch(oi);return}u=B;const be=l.value;zs&&pS(hd(be.fullPath,O.delta),Ya()),Ie(B,be).catch(oe=>Ln(oe,12)?oe:Ln(oe,2)?(se(oe.to,B).then(te=>{Ln(te,20)&&!O.delta&&O.type===Ti.pop&&r.go(-1,!1)}).catch(oi),Promise.reject()):(O.delta&&r.go(-O.delta,!1),Se(oe,B,be))).then(oe=>{oe=oe||ot(B,be,!1),oe&&(O.delta?r.go(-O.delta,!1):O.type===Ti.pop&&Ln(oe,20)&&r.go(-1,!1)),it(B,be,oe)}).catch(oi)})}let Vs=Wr(),$s=Wr(),He;function Se(v,V,O){bt(v);const B=$s.list();return B.length?B.forEach(_e=>_e(v,V,O)):console.error(v),Promise.reject(v)}function ve(){return He&&l.value!==xn?Promise.resolve():new Promise((v,V)=>{Vs.add([v,V])})}function bt(v){return He||(He=!v,Nn(),Vs.list().forEach(([V,O])=>v?O(v):V()),Vs.reset()),v}function Bs(v,V,O,B){const{scrollBehavior:_e}=t;if(!zs||!_e)return Promise.resolve();const be=!O&&mS(hd(v.fullPath,0))||(B||!O)&&history.state&&history.state.scroll||null;return Kp().then(()=>_e(v,V,be)).then(oe=>oe&&dS(oe)).catch(oe=>Se(oe,v,V))}const hn=v=>r.go(v);let Xt;const Mt=new Set;return{currentRoute:l,addRoute:m,removeRoute:y,hasRoute:S,getRoutes:b,resolve:R,options:t,push:Z,replace:ye,go:hn,back:()=>hn(-1),forward:()=>hn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:$s.add,isReady:ve,install(v){const V=this;v.component("RouterLink",QS),v.component("RouterView",tb),v.config.globalProperties.$router=V,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ti(l)}),zs&&!Xt&&l.value===xn&&(Xt=!0,Z(r.location).catch(_e=>{}));const O={};for(const _e in xn)O[_e]=en(()=>l.value[_e]);v.provide(Wa,V),v.provide(_g,Fi(O)),v.provide(Su,l);const B=v.unmount;Mt.add(v),v.unmount=function(){Mt.delete(v),Mt.size<1&&(u=xn,pt&&pt(),l.value=xn,Xt=!1,He=!1),B()}}}}function js(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function nb(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>dr(u,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>dr(u,l))||r.push(l))}return[n,s,r]}function DN(){return En(Wa)}function RN(t,e){return kr(),Ar("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[je("path",{"fill-rule":"evenodd",d:"M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})])}function ON(t,e){return kr(),Ar("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[je("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})])}var sb="firebase",rb="9.6.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn(sb,rb,"app");var ib=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},x,Vc=Vc||{},z=ib||self;function oa(){}function Au(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function qi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ob(t){return Object.prototype.hasOwnProperty.call(t,Hl)&&t[Hl]||(t[Hl]=++ab)}var Hl="closure_uid_"+(1e9*Math.random()>>>0),ab=0;function lb(t,e,n){return t.call.apply(t.bind,arguments)}function ub(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=lb:Ze=ub,Ze.apply(null,arguments)}function vo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function ss(){this.s=this.s,this.o=this.o}var cb=0,hb={};ss.prototype.s=!1;ss.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),cb!=0)){var t=ob(this);delete hb[t]}};ss.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Og=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function fb(t){e:{var e=sk;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Td(t){return Array.prototype.concat.apply([],arguments)}function $c(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function aa(t){return/^[\s\xa0]*$/.test(t)}var Id=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function gt(t,e){return t.indexOf(e)!=-1}function jl(t,e){return t<e?-1:t>e?1:0}var yt;e:{var Sd=z.navigator;if(Sd){var bd=Sd.userAgent;if(bd){yt=bd;break e}}yt=""}function Bc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ng(t){const e={};for(const n in t)e[n]=t[n];return e}var kd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<kd.length;i++)n=kd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Hc(t){return Hc[" "](t),t}Hc[" "]=oa;function db(t){var e=gb;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var pb=gt(yt,"Opera"),mr=gt(yt,"Trident")||gt(yt,"MSIE"),Pg=gt(yt,"Edge"),Cu=Pg||mr,xg=gt(yt,"Gecko")&&!(gt(yt.toLowerCase(),"webkit")&&!gt(yt,"Edge"))&&!(gt(yt,"Trident")||gt(yt,"MSIE"))&&!gt(yt,"Edge"),mb=gt(yt.toLowerCase(),"webkit")&&!gt(yt,"Edge");function Lg(){var t=z.document;return t?t.documentMode:void 0}var la;e:{var Wl="",Yl=function(){var t=yt;if(xg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Pg)return/Edge\/([\d\.]+)/.exec(t);if(mr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mb)return/WebKit\/(\S+)/.exec(t);if(pb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yl&&(Wl=Yl?Yl[1]:""),mr){var ql=Lg();if(ql!=null&&ql>parseFloat(Wl)){la=String(ql);break e}}la=Wl}var gb={};function yb(){return db(function(){let t=0;const e=Id(String(la)).split("."),n=Id("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=jl(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||jl(r[2].length==0,i[2].length==0)||jl(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Du;if(z.document&&mr){var Ad=Lg();Du=Ad||parseInt(la,10)||void 0}else Du=void 0;var vb=Du,_b=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",oa,e),z.removeEventListener("test",oa,e)}catch{}return t}();function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};function Ii(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xg){e:{try{Hc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:wb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ii.Z.h.call(this)}}rt(Ii,lt);var wb={2:"touch",3:"pen",4:"mouse"};Ii.prototype.h=function(){Ii.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ki="closure_listenable_"+(1e6*Math.random()|0),Eb=0;function Tb(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++Eb,this.ca=this.fa=!1}function qa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ka(t){this.src=t,this.g={},this.h=0}Ka.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ou(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Tb(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Ru(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Rg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(qa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ou(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var jc="closure_lm_"+(1e6*Math.random()|0),Kl={};function Fg(t,e,n,s,r){if(s&&s.once)return Vg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Fg(t,e[i],n,s,r);return null}return n=qc(n),t&&t[Ki]?t.N(e,n,qi(s)?!!s.capture:!!s,r):Ug(t,e,n,!1,s,r)}function Ug(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=qi(r)?!!r.capture:!!r,a=Yc(t);if(a||(t[jc]=a=new Ka(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Ib(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)_b||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Bg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ib(){function t(n){return e.call(t.src,t.listener,n)}var e=Sb;return t}function Vg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Vg(t,e[i],n,s,r);return null}return n=qc(n),t&&t[Ki]?t.O(e,n,qi(s)?!!s.capture:!!s,r):Ug(t,e,n,!0,s,r)}function $g(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)$g(t,e[i],n,s,r);else s=qi(s)?!!s.capture:!!s,n=qc(n),t&&t[Ki]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ou(i,n,s,r),-1<n&&(qa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ou(e,n,s,r)),(n=-1<t?e[t]:null)&&Wc(n))}function Wc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ki])Ru(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Bg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Yc(e))?(Ru(n,t),n.h==0&&(n.src=null,e[jc]=null)):qa(t)}}}function Bg(t){return t in Kl?Kl[t]:Kl[t]="on"+t}function Sb(t,e){if(t.ca)t=!0;else{e=new Ii(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Wc(t),t=n.call(s,e)}return t}function Yc(t){return t=t[jc],t instanceof Ka?t:null}var zl="__closure_events_fn_"+(1e9*Math.random()>>>0);function qc(t){return typeof t=="function"?t:(t[zl]||(t[zl]=function(e){return t.handleEvent(e)}),t[zl])}function Ge(){ss.call(this),this.i=new Ka(this),this.P=this,this.I=null}rt(Ge,ss);Ge.prototype[Ki]=!0;Ge.prototype.removeEventListener=function(t,e,n,s){$g(this,t,e,n,s)};function et(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var r=e;e=new lt(s,t),Mg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=_o(o,s,!0,e)&&r}if(o=e.g=t,r=_o(o,s,!0,e)&&r,r=_o(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=_o(o,s,!1,e)&&r}Ge.prototype.M=function(){if(Ge.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)qa(n[s]);delete t.g[e],t.h--}}this.I=null};Ge.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function _o(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Ru(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var Kc=z.JSON.stringify;function bb(){var t=jg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kb{constructor(){this.h=this.g=null}add(e,n){const s=Hg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Hg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Ab,t=>t.reset());class Ab{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Cb(t){z.setTimeout(()=>{throw t},0)}function zc(t,e){Nu||Db(),Mu||(Nu(),Mu=!0),jg.add(t,e)}var Nu;function Db(){var t=z.Promise.resolve(void 0);Nu=function(){t.then(Rb)}}var Mu=!1,jg=new kb;function Rb(){for(var t;t=bb();){try{t.h.call(t.g)}catch(n){Cb(n)}var e=Hg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mu=!1}function za(t,e){Ge.call(this),this.h=t||1,this.g=e||z,this.j=Ze(this.kb,this),this.l=Date.now()}rt(za,Ge);x=za.prototype;x.da=!1;x.S=null;x.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),et(this,"tick"),this.da&&(Gc(this),this.start()))}};x.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}x.M=function(){za.Z.M.call(this),Gc(this),delete this.g};function Xc(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function Wg(t){t.g=Xc(()=>{t.g=null,t.i&&(t.i=!1,Wg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ob extends ss{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wg(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(t){ss.call(this),this.h=t,this.g={}}rt(Si,ss);var Cd=[];function Yg(t,e,n,s){Array.isArray(n)||(n&&(Cd[0]=n.toString()),n=Cd);for(var r=0;r<n.length;r++){var i=Fg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qg(t){Bc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wc(e)},t),t.g={}}Si.prototype.M=function(){Si.Z.M.call(this),qg(this)};Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ga(){this.g=!0}Ga.prototype.Aa=function(){this.g=!1};function Nb(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Mb(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Xs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xb(t,n)+(s?" "+s:"")})}function Pb(t,e){t.info(function(){return"TIMEOUT: "+e})}Ga.prototype.info=function(){};function xb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Kc(n)}catch{return e}}var Ls={},Dd=null;function Xa(){return Dd=Dd||new Ge}Ls.Ma="serverreachability";function Kg(t){lt.call(this,Ls.Ma,t)}rt(Kg,lt);function bi(t){const e=Xa();et(e,new Kg(e,t))}Ls.STAT_EVENT="statevent";function zg(t,e){lt.call(this,Ls.STAT_EVENT,t),this.stat=e}rt(zg,lt);function vt(t){const e=Xa();et(e,new zg(e,t))}Ls.Na="timingevent";function Gg(t,e){lt.call(this,Ls.Na,t),this.size=e}rt(Gg,lt);function zi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Qa={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Xg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Qc(){}Qc.prototype.h=null;function Rd(t){return t.h||(t.h=t.i())}function Qg(){}var Gi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Jc(){lt.call(this,"d")}rt(Jc,lt);function Zc(){lt.call(this,"c")}rt(Zc,lt);var Pu;function Ja(){}rt(Ja,Qc);Ja.prototype.g=function(){return new XMLHttpRequest};Ja.prototype.i=function(){return{}};Pu=new Ja;function Xi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Si(this),this.P=Lb,t=Cu?125:void 0,this.W=new za(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Jg}function Jg(){this.i=null,this.g="",this.h=!1}var Lb=45e3,xu={},ua={};x=Xi.prototype;x.setTimeout=function(t){this.P=t};function Lu(t,e,n){t.K=1,t.v=el(An(e)),t.s=n,t.U=!0,Zg(t,null)}function Zg(t,e){t.F=Date.now(),Qi(t),t.A=An(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),oy(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Jg,t.g=ky(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ob(Ze(t.Ia,t,t.g),t.O)),Yg(t.V,t.g,"readystatechange",t.gb),e=t.H?Ng(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),bi(1),Nb(t.j,t.u,t.A,t.m,t.X,t.s)}x.gb=function(t){t=t.target;const e=this.L;e&&vn(t)==3?e.l():this.Ia(t)};x.Ia=function(t){try{if(t==this.g)e:{const c=vn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Cu||this.g&&(this.h.h||this.g.ga()||Pd(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?bi(3):bi(2)),Za(this);var n=this.g.ba();this.N=n;t:if(ey(this)){var s=Pd(this.g);t="";var r=s.length,i=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ms(this),li(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Mb(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!aa(a)){var u=a;break t}}u=null}if(n=u)Xs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fu(this,n);else{this.i=!1,this.o=3,vt(12),ms(this),li(this);break e}}this.U?(ty(this,c,o),Cu&&this.i&&c==3&&(Yg(this.V,this.W,"tick",this.fb),this.W.start())):(Xs(this.j,this.m,o,null),Fu(this,o)),c==4&&ms(this),this.i&&!this.I&&(c==4?Ty(this.l,this):(this.i=!1,Qi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),ms(this),li(this)}}}catch{}finally{}};function ey(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ty(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Fb(t,n),r==ua){e==4&&(t.o=4,vt(14),s=!1),Xs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==xu){t.o=4,vt(15),Xs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Xs(t.j,t.m,r,null),Fu(t,r);ey(t)&&r!=ua&&r!=xu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),lh(e),e.L=!0,vt(11))):(Xs(t.j,t.m,n,"[Invalid Chunked Response]"),ms(t),li(t))}x.fb=function(){if(this.g){var t=vn(this.g),e=this.g.ga();this.C<e.length&&(Za(this),ty(this,t,e),this.i&&t!=4&&Qi(this))}};function Fb(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ua:(n=Number(e.substring(n,s)),isNaN(n)?xu:(s+=1,s+n>e.length?ua:(e=e.substr(s,n),t.C=s+n,e)))}x.cancel=function(){this.I=!0,ms(this)};function Qi(t){t.Y=Date.now()+t.P,ny(t,t.P)}function ny(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zi(Ze(t.eb,t),e)}function Za(t){t.B&&(z.clearTimeout(t.B),t.B=null)}x.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Pb(this.j,this.A),this.K!=2&&(bi(3),vt(17)),ms(this),this.o=2,li(this)):ny(this,this.Y-t)};function li(t){t.l.G==0||t.I||Ty(t.l,t)}function ms(t){Za(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Gc(t.W),qg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Uu(n.i,t))){if(n.I=t.N,!t.J&&Uu(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)da(n),sl(n);else break e;ah(n),vt(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=zi(Ze(n.ab,n),6e3));if(1>=uy(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else gs(n,11)}else if((t.J||n.g==t)&&da(n),!aa(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(gt(y,"spdy")||gt(y,"quic")||gt(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(nh(i,i.h),i.h=null))}if(s.D){const b=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.sa=b,Pe(s.F,s.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=by(s,s.H?s.la:null,s.W),o.J){cy(s.i,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(Za(a),Qi(a)),s.g=o}else wy(s);0<n.l.length&&rl(n)}else u[0]!="stop"&&u[0]!="close"||gs(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?gs(n,7):oh(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}bi(4)}catch{}}function Ub(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Au(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function eh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Au(t)||typeof t=="string")Og(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Au(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=Ub(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Nr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Nr)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}x=Nr.prototype;x.R=function(){th(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};x.T=function(){return th(this),this.g.concat()};function th(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Cs(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Cs(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}x.get=function(t,e){return Cs(this.h,t)?this.h[t]:e};x.set=function(t,e){Cs(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};x.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Cs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var sy=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Vb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ds(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ds){this.g=e!==void 0?e:t.g,ca(this,t.j),this.s=t.s,ha(this,t.i),fa(this,t.m),this.l=t.l,e=t.h;var n=new ki;n.i=e.i,e.g&&(n.g=new Nr(e.g),n.h=e.h),Od(this,n),this.o=t.o}else t&&(n=String(t).match(sy))?(this.g=!!e,ca(this,n[1]||"",!0),this.s=ui(n[2]||""),ha(this,n[3]||"",!0),fa(this,n[4]),this.l=ui(n[5]||"",!0),Od(this,n[6]||"",!0),this.o=ui(n[7]||"")):(this.g=!!e,this.h=new ki(null,this.g))}Ds.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zr(e,Nd,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zr(e,Nd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Zr(n,n.charAt(0)=="/"?Wb:jb,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zr(n,qb)),t.join("")};function An(t){return new Ds(t)}function ca(t,e,n){t.j=n?ui(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ha(t,e,n){t.i=n?ui(e,!0):e}function fa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Od(t,e,n){e instanceof ki?(t.h=e,Kb(t.h,t.g)):(n||(e=Zr(e,Yb)),t.h=new ki(e,t.g))}function Pe(t,e,n){t.h.set(e,n)}function el(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $b(t){return t instanceof Ds?An(t):new Ds(t,void 0)}function Bb(t,e,n,s){var r=new Ds(null,void 0);return t&&ca(r,t),e&&ha(r,e),n&&fa(r,n),s&&(r.l=s),r}function ui(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Hb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Hb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Nd=/[#\/\?@]/g,jb=/[#\?:]/g,Wb=/[#\?]/g,Yb=/[#\?@]/g,qb=/#/g;function ki(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rs(t){t.g||(t.g=new Nr,t.h=0,t.i&&Vb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=ki.prototype;x.add=function(t,e){rs(this),this.i=null,t=Mr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ry(t,e){rs(t),e=Mr(t,e),Cs(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Cs(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&th(t)))}function iy(t,e){return rs(t),e=Mr(t,e),Cs(t.g.h,e)}x.forEach=function(t,e){rs(this),this.g.forEach(function(n,s){Og(n,function(r){t.call(e,r,s,this)},this)},this)};x.T=function(){rs(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};x.R=function(t){rs(this);var e=[];if(typeof t=="string")iy(this,t)&&(e=Td(e,this.g.get(Mr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Td(e,t[n])}return e};x.set=function(t,e){return rs(this),this.i=null,t=Mr(this,t),iy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function oy(t,e,n){ry(t,e),0<n.length&&(t.i=null,t.g.set(Mr(t,e),$c(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Mr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Kb(t,e){e&&!t.j&&(rs(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ry(this,s),oy(this,r,n))},t)),t.j=e}var zb=class{constructor(t,e){this.h=t,this.g=e}};function ay(t){this.l=t||Gb,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ea&&z.g.Ea()&&z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Gb=10;function ly(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function uy(t){return t.h?1:t.g?t.g.size:0}function Uu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nh(t,e){t.g?t.g.add(e):t.h=e}function cy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ay.prototype.cancel=function(){if(this.i=hy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function hy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return $c(t.i)}function sh(){}sh.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};sh.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function Xb(){this.g=new sh}function Qb(t,e,n){const s=n||"";try{eh(t,function(r,i){let o=r;qi(r)&&(o=Kc(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Jb(t,e){const n=new Ga;if(z.Image){const s=new Image;s.onload=vo(wo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=vo(wo,n,s,"TestLoadImage: error",!1,e),s.onabort=vo(wo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=vo(wo,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function wo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ji(t){this.l=t.$b||null,this.j=t.ib||!1}rt(Ji,Qc);Ji.prototype.g=function(){return new tl(this.l,this.j)};Ji.prototype.i=function(t){return function(){return t}}({});function tl(t,e){Ge.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=rh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(tl,Ge);var rh=0;x=tl.prototype;x.open=function(t,e){if(this.readyState!=rh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ai(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=rh};x.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof z.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fy(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function fy(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}x.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zi(this):Ai(this),this.readyState==3&&fy(this)}};x.Ua=function(t){this.g&&(this.response=this.responseText=t,Zi(this))};x.Ta=function(t){this.g&&(this.response=t,Zi(this))};x.ha=function(){this.g&&Zi(this)};function Zi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ai(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ai(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Zb=z.JSON.parse;function Be(t){Ge.call(this),this.headers=new Nr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=dy,this.K=this.L=!1}rt(Be,Ge);var dy="",ek=/^https?$/i,tk=["POST","PUT"];x=Be.prototype;x.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Pu.g(),this.C=this.u?Rd(this.u):Rd(Pu),this.g.onreadystatechange=Ze(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Md(this,i);return}t=n||"";const r=new Nr(this.headers);s&&eh(s,function(i,o){r.set(o,i)}),s=fb(r.T()),n=z.FormData&&t instanceof z.FormData,!(0<=Rg(tk,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gy(this),0<this.B&&((this.K=nk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.pa,this)):this.A=Xc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Md(this,i)}};function nk(t){return mr&&yb()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function sk(t){return t.toLowerCase()=="content-type"}x.pa=function(){typeof Vc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Md(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,py(t),nl(t)}function py(t){t.D||(t.D=!0,et(t,"complete"),et(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),nl(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nl(this,!0)),Be.Z.M.call(this)};x.Fa=function(){this.s||(this.F||this.v||this.l?my(this):this.cb())};x.cb=function(){my(this)};function my(t){if(t.h&&typeof Vc!="undefined"&&(!t.C[1]||vn(t)!=4||t.ba()!=2)){if(t.v&&vn(t)==4)Xc(t.Fa,0,t);else if(et(t,"readystatechange"),vn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(sy)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!ek.test(r?r.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var o=2<vn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",py(t)}}finally{nl(t)}}}}function nl(t,e){if(t.g){gy(t);const n=t.g,s=t.C[0]?oa:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=s}catch{}}}function gy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function vn(t){return t.g?t.g.readyState:0}x.ba=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}};x.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Zb(e)}};function Pd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case dy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Da=function(){return this.m};x.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function rk(t){let e="";return Bc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ih(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=rk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function Yr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yy(t){this.za=0,this.l=[],this.h=new Ga,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Yr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Yr("baseRetryDelayMs",5e3,t),this.$a=Yr("retryDelaySeedMs",1e4,t),this.Ya=Yr("forwardChannelMaxRetries",2,t),this.ra=Yr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ay(t&&t.concurrentRequestLimit),this.Ca=new Xb,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}x=yy.prototype;x.ma=8;x.G=1;function oh(t){if(vy(t),t.G==3){var e=t.V++,n=An(t.F);Pe(n,"SID",t.J),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),eo(t,n),e=new Xi(t,t.h,e,void 0),e.K=2,e.v=el(An(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=ky(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Qi(e)}Sy(t)}x.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function sl(t){t.g&&(lh(t),t.g.cancel(),t.g=null)}function vy(t){sl(t),t.u&&(z.clearTimeout(t.u),t.u=null),da(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Gl(t,e){t.l.push(new zb(t.Za++,e)),t.G==3&&rl(t)}function rl(t){ly(t.i)||t.m||(t.m=!0,zc(t.Ha,t),t.C=0)}function ik(t,e){return uy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=zi(Ze(t.Ha,t,e),Iy(t,t.C)),t.C++,!0)}x.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Xi(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Ng(i),Mg(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=_y(this,r,e),n=An(this.F),Pe(n,"RID",t),Pe(n,"CVER",22),this.D&&Pe(n,"X-HTTP-Session-Id",this.D),eo(this,n),this.o&&i&&ih(n,this.o,i),nh(this.i,r),this.Ra&&Pe(n,"TYPE","init"),this.ja?(Pe(n,"$req",e),Pe(n,"SID","null"),r.$=!0,Lu(r,n,null)):Lu(r,n,e),this.G=2}}else this.G==3&&(t?xd(this,t):this.l.length==0||ly(this.i)||xd(this))};function xd(t,e){var n;e?n=e.m:n=t.V++;const s=An(t.F);Pe(s,"SID",t.J),Pe(s,"RID",n),Pe(s,"AID",t.U),eo(t,s),t.o&&t.s&&ih(s,t.o,t.s),n=new Xi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=_y(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),nh(t.i,n),Lu(n,s,e)}function eo(t,e){t.j&&eh({},function(n,s){Pe(e,s,n)})}function _y(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Ze(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let u=r[l].h;const c=r[l].g;if(u-=i,0>u)i=Math.max(0,r[l].h-100),a=!1;else try{Qb(c,o,"req"+u+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function wy(t){t.g||t.u||(t.Y=1,zc(t.Ga,t),t.A=0)}function ah(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=zi(Ze(t.Ga,t),Iy(t,t.A)),t.A++,!0)}x.Ga=function(){if(this.u=null,Ey(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=zi(Ze(this.bb,this),t)}};x.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,vt(10),sl(this),Ey(this))};function lh(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Ey(t){t.g=new Xi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=An(t.oa);Pe(e,"RID","rpc"),Pe(e,"SID",t.J),Pe(e,"CI",t.N?"0":"1"),Pe(e,"AID",t.U),eo(t,e),Pe(e,"TYPE","xmlhttp"),t.o&&t.s&&ih(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=el(An(e)),n.s=null,n.U=!0,Zg(n,t)}x.ab=function(){this.v!=null&&(this.v=null,sl(this),ah(this),vt(19))};function da(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Ty(t,e){var n=null;if(t.g==e){da(t),lh(t),t.g=null;var s=2}else if(Uu(t.i,e))n=e.D,cy(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Xa(),et(s,new Gg(s,n,e,r)),rl(t)}else wy(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&ik(t,e)||s==2&&ah(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:gs(t,5);break;case 4:gs(t,10);break;case 3:gs(t,6);break;default:gs(t,2)}}}function Iy(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function gs(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Ze(t.jb,t);n||(n=new Ds("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||ca(n,"https"),el(n)),Jb(n.toString(),s)}else vt(2);t.G=0,t.j&&t.j.va(e),Sy(t),vy(t)}x.jb=function(t){t?(this.h.info("Successfully pinged google.com"),vt(2)):(this.h.info("Failed to ping google.com"),vt(1))};function Sy(t){t.G=0,t.I=-1,t.j&&((hy(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,$c(t.l),t.l.length=0),t.j.ua())}function by(t,e,n){let s=$b(n);if(s.i!="")e&&ha(s,e+"."+s.i),fa(s,s.m);else{const r=z.location;s=Bb(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Bc(t.aa,function(r,i){Pe(s,i,r)}),e=t.D,n=t.sa,e&&n&&Pe(s,e,n),Pe(s,"VER",t.ma),eo(t,s),s}function ky(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Be(new Ji({ib:!0})):new Be(t.qa),e.L=t.H,e}function Ay(){}x=Ay.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Oa=function(){};function pa(){if(mr&&!(10<=Number(vb)))throw Error("Environmental error: no available transport.")}pa.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){Ge.call(this),this.g=new yy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!aa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!aa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pr(this)}rt(Ot,Ge);Ot.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),zc(Ze(t.hb,t,e))),vt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=by(t,null,t.W),rl(t)};Ot.prototype.close=function(){oh(this.g)};Ot.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Gl(this.g,e)}else this.v?(e={},e.__data__=Kc(t),Gl(this.g,e)):Gl(this.g,t)};Ot.prototype.M=function(){this.g.j=null,delete this.j,oh(this.g),delete this.g,Ot.Z.M.call(this)};function Cy(t){Jc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rt(Cy,Jc);function Dy(){Zc.call(this),this.status=1}rt(Dy,Zc);function Pr(t){this.g=t}rt(Pr,Ay);Pr.prototype.xa=function(){et(this.g,"a")};Pr.prototype.wa=function(t){et(this.g,new Cy(t))};Pr.prototype.va=function(t){et(this.g,new Dy(t))};Pr.prototype.ua=function(){et(this.g,"b")};pa.prototype.createWebChannel=pa.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;Qa.NO_ERROR=0;Qa.TIMEOUT=8;Qa.HTTP_ERROR=6;Xg.COMPLETE="complete";Qg.EventType=Gi;Gi.OPEN="a";Gi.CLOSE="b";Gi.ERROR="c";Gi.MESSAGE="d";Ge.prototype.listen=Ge.prototype.N;Be.prototype.listenOnce=Be.prototype.O;Be.prototype.getLastError=Be.prototype.La;Be.prototype.getLastErrorCode=Be.prototype.Da;Be.prototype.getStatus=Be.prototype.ba;Be.prototype.getResponseJson=Be.prototype.Qa;Be.prototype.getResponseText=Be.prototype.ga;Be.prototype.send=Be.prototype.ea;var ok=function(){return new pa},ak=function(){return Xa()},Xl=Qa,lk=Xg,uk=Ls,Ld={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ck=Ji,Eo=Qg,hk=Be;const Fd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr="9.6.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new bc("@firebase/firestore");function Ud(){return Rs.logLevel}function $(t,...e){if(Rs.logLevel<=de.DEBUG){const n=e.map(uh);Rs.debug(`Firestore (${xr}): ${t}`,...n)}}function Zn(t,...e){if(Rs.logLevel<=de.ERROR){const n=e.map(uh);Rs.error(`Firestore (${xr}): ${t}`,...n)}}function Vd(t,...e){if(Rs.logLevel<=de.WARN){const n=e.map(uh);Rs.warn(`Firestore (${xr}): ${t}`,...n)}}function uh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${xr}) INTERNAL ASSERTION FAILED: `+t;throw Zn(e),new Error(e)}function ke(t,e){t||X()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends xs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class pk{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ke(typeof s.accessToken=="string"),new fk(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new It(e)}}class mk{constructor(e,n,s){this.type="FirstParty",this.user=It.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class gk{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new mk(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vk{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.p=n.token,new yk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ch.A=-1;class Ry{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=_k(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function me(t,e){return t<e?-1:t>e?1:0}function gr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ut(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new ut(0,0))}static max(){return new re(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Oy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends Ci{construct(e,n,s){return new Ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const wk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends Ci{construct(e,n,s){return new St(e,n,s)}static isValidIdentifier(e){return wk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new St(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new L(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new L(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.fields=e,e.sort(St.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new st(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const Ek=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(t){if(ke(!!t),typeof t=="string"){let e=0;const n=Ek.exec(t);if(ke(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function My(t){const e=t.mapValue.fields.__previous_value__;return Ny(e)?My(e):e}function Di(t){const e=es(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,n,s,r,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class vr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){return t==null}function ma(t){return t===0&&1/t==-1/0}function Ik(t){return typeof t=="number"&&Number.isInteger(t)&&!ma(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ce.fromString(e))}static fromName(e){return new j(Ce.fromString(e).popFirst(5))}static empty(){return new j(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ce(e.slice()))}}function Os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ny(t)?4:Sk(t)?9:10:X()}function an(t,e){if(t===e)return!0;const n=Os(t);if(n!==Os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Di(t).isEqual(Di(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=es(s.timestampValue),o=es(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return yr(s.bytesValue).isEqual(yr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return $e(s.geoPointValue.latitude)===$e(r.geoPointValue.latitude)&&$e(s.geoPointValue.longitude)===$e(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return $e(s.integerValue)===$e(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=$e(s.doubleValue),o=$e(r.doubleValue);return i===o?ma(i)===ma(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return gr(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if($d(i)!==$d(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!an(i[a],o[a])))return!1;return!0}(t,e);default:return X()}}function Ri(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function _r(t,e){if(t===e)return 0;const n=Os(t),s=Os(e);if(n!==s)return me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=$e(r.integerValue||r.doubleValue),a=$e(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Bd(t.timestampValue,e.timestampValue);case 4:return Bd(Di(t),Di(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(r,i){const o=yr(r),a=yr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=me(o[l],a[l]);if(u!==0)return u}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=me($e(r.latitude),$e(i.latitude));return o!==0?o:me($e(r.longitude),$e(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=_r(o[l],a[l]);if(u)return u}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),l=i.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=me(a[c],u[c]);if(h!==0)return h;const f=_r(o[a[c]],l[u[c]]);if(f!==0)return f}return me(a.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function Bd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=es(t),s=es(e),r=me(n.seconds,s.seconds);return r!==0?r:me(n.nanos,s.nanos)}function rr(t){return $u(t)}function $u(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=es(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=$u(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${$u(s.fields[a])}`;return i+"}"}(t.mapValue):X();var e,n}function Hd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bu(t){return!!t&&"integerValue"in t}function hh(t){return!!t&&"arrayValue"in t}function jd(t){return!!t&&"nullValue"in t}function Wd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Po(t){return!!t&&"mapValue"in t}function ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ci(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Sk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Po(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ci(n)}setAll(e){let n=St.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ci(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Po(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Po(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Lr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ht(ci(this.value))}}function Py(t){const e=[];return Lr(t.fields,(n,s)=>{const r=new St([n]);if(Po(s)){const i=Py(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Vu(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new at(e,0,re.min(),re.min(),Ht.empty(),0)}static newFoundDocument(e,n,s){return new at(e,1,n,re.min(),s,0)}static newNoDocument(e,n){return new at(e,2,n,re.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,re.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function bk(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=re.fromTimestamp(s===1e9?new ut(n+1,0):new ut(n,s));return new wr(r,j.empty(),e)}function kk(t){return new wr(t.readTime,t.key,-1)}class wr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new wr(re.min(),j.empty(),-1)}static max(){return new wr(re.max(),j.empty(),-1)}}function Ak(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Yd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Ck(t,e,n,s,r,i,o)}function fh(t){const e=J(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+rr(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Fr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>rr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>rr(s)).join(",")),e.P=n}return e.P}function Dk(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${rr(s.value)}`;var s}).join(", ")}]`),Fr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>rr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>rr(n)).join(",")),`Target(${e})`}function dh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Fk(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!an(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kd(t.startAt,e.startAt)&&Kd(t.endAt,e.endAt)}function Hu(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class _t extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new Rk(e,n,s):n==="array-contains"?new Mk(e,s):n==="in"?new Pk(e,s):n==="not-in"?new xk(e,s):n==="array-contains-any"?new Lk(e,s):new _t(e,n,s)}static V(e,n,s){return n==="in"?new Ok(e,s):new Nk(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(_r(n,this.value)):n!==null&&Os(this.value)===Os(n)&&this.v(_r(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Rk extends _t{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.v(n)}}class Ok extends _t{constructor(e,n){super(e,"in",n),this.keys=xy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nk extends _t{constructor(e,n){super(e,"not-in",n),this.keys=xy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class Mk extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hh(n)&&Ri(n.arrayValue,this.value)}}class Pk extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ri(this.value.arrayValue,n)}}class xk extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ri(this.value.arrayValue,n)}}class Lk extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ri(this.value.arrayValue,s))}}class ga{constructor(e,n){this.position=e,this.inclusive=n}}class hi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Fk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function qd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=_r(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function Uk(t,e,n,s,r,i,o,a){return new to(t,e,n,s,r,i,o,a)}function il(t){return new to(t)}function xo(t){return!Fr(t.limit)&&t.limitType==="F"}function ya(t){return!Fr(t.limit)&&t.limitType==="L"}function Ly(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Fy(t){for(const e of t.filters)if(e.S())return e.field;return null}function Uy(t){return t.collectionGroup!==null}function Oi(t){const e=J(t);if(e.D===null){e.D=[];const n=Fy(e),s=Ly(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new hi(n)),e.D.push(new hi(St.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new hi(St.keyField(),i))}}}return e.D}function Ns(t){const e=J(t);if(!e.C)if(e.limitType==="F")e.C=Yd(e.path,e.collectionGroup,Oi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Oi(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new hi(i.field,o))}const s=e.endAt?new ga(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new ga(e.startAt.position,!e.startAt.inclusive):null;e.C=Yd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function Vk(t,e,n){return new to(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ol(t,e){return dh(Ns(t),Ns(e))&&t.limitType===e.limitType}function Vy(t){return`${fh(Ns(t))}|lt:${t.limitType}`}function ju(t){return`Query(target=${Dk(Ns(t))}; limitType=${t.limitType})`}function ph(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=qd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Oi(n),s)||n.endAt&&!function(r,i,o){const a=qd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Oi(n),s))}(t,e)}function $k(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $y(t){return(e,n)=>{let s=!1;for(const r of Oi(t)){const i=Bk(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Bk(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?_r(a,l):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ma(e)?"-0":e}}function Hy(t){return{integerValue:""+t}}function Hk(t,e){return Ik(e)?Hy(e):By(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this._=void 0}}function jk(t,e,n){return t instanceof va?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ni?Wy(t,e):t instanceof Mi?Yy(t,e):function(s,r){const i=jy(s,r),o=zd(i)+zd(s.k);return Bu(i)&&Bu(s.k)?Hy(o):By(s.M,o)}(t,e)}function Wk(t,e,n){return t instanceof Ni?Wy(t,e):t instanceof Mi?Yy(t,e):n}function jy(t,e){return t instanceof _a?Bu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class va extends al{}class Ni extends al{constructor(e){super(),this.elements=e}}function Wy(t,e){const n=qy(e);for(const s of t.elements)n.some(r=>an(r,s))||n.push(s);return{arrayValue:{values:n}}}class Mi extends al{constructor(e){super(),this.elements=e}}function Yy(t,e){let n=qy(e);for(const s of t.elements)n=n.filter(r=>!an(r,s));return{arrayValue:{values:n}}}class _a extends al{constructor(e,n){super(),this.M=e,this.k=n}}function zd(t){return $e(t.integerValue||t.doubleValue)}function qy(t){return hh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Yk(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ni&&s instanceof Ni||n instanceof Mi&&s instanceof Mi?gr(n.elements,s.elements,an):n instanceof _a&&s instanceof _a?an(n.k,s.k):n instanceof va&&s instanceof va}(t.transform,e.transform)}class qk{constructor(e,n){this.version=e,this.transformResults=n}}class Gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gn}static exists(e){return new Gn(void 0,e)}static updateTime(e){return new Gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ll{}function Kk(t,e,n){t instanceof ul?function(s,r,i){const o=s.value.clone(),a=Qd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof no?function(s,r,i){if(!Lo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Qd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ky(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Wu(t,e,n){t instanceof ul?function(s,r,i){if(!Lo(s.precondition,r))return;const o=s.value.clone(),a=Jd(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Xd(r),o).setHasLocalMutations()}(t,e,n):t instanceof no?function(s,r,i){if(!Lo(s.precondition,r))return;const o=Jd(s.fieldTransforms,i,r),a=r.data;a.setAll(Ky(s)),a.setAll(o),r.convertToFoundDocument(Xd(r),a).setHasLocalMutations()}(t,e,n):function(s,r){Lo(s.precondition,r)&&r.convertToNoDocument(re.min())}(t,e)}function zk(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=jy(s.transform,r||null);i!=null&&(n==null&&(n=Ht.empty()),n.set(s.field,i))}return n||null}function Gd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&gr(n,s,(r,i)=>Yk(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Xd(t){return t.isFoundDocument()?t.version:re.min()}class ul extends ll{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class no extends ll{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ky(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Qd(t,e,n){const s=new Map;ke(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Wk(o,a,n[r]))}return s}function Jd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,jk(i,o,e))}return s}class zy extends ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Gk extends ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,ae;function Qk(t){switch(t){default:return X();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Gy(t){if(t===void 0)return Zn("GRPC error has no .code"),_.UNKNOWN;switch(t){case Ve.OK:return _.OK;case Ve.CANCELLED:return _.CANCELLED;case Ve.UNKNOWN:return _.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return _.INTERNAL;case Ve.UNAVAILABLE:return _.UNAVAILABLE;case Ve.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ve.NOT_FOUND:return _.NOT_FOUND;case Ve.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ve.ABORTED:return _.ABORTED;case Ve.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ve.DATA_LOSS:return _.DATA_LOSS;default:return X()}}(ae=Ve||(Ve={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Oy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new To(this.root,e,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new To(this.root,e,this.comparator,!0)}}class To{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Qe.RED,this.left=r!=null?r:Qe.EMPTY,this.right=i!=null?i:Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Qe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zd(this.data.getIterator())}getIteratorFrom(e){return new Zd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Zd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=new Xe(j.comparator);function Ms(){return Jk}const Zk=new Xe(j.comparator);function Yu(){return Zk}function Ql(){return new Ur(t=>t.toString(),(t,e)=>t.isEqual(e))}const eA=new Xe(j.comparator),tA=new tt(j.comparator);function De(...t){let e=tA;for(const n of t)e=e.add(n);return e}const nA=new tt(me);function Xy(){return nA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,so.createSynthesizedTargetChangeForCurrentChange(e,n)),new cl(re.min(),s,Xy(),Ms(),De())}}class so{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new so(st.EMPTY_BYTE_STRING,n,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class Qy{constructor(e,n){this.targetId=e,this.$=n}}class Jy{constructor(e,n,s=st.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ep{constructor(){this.B=0,this.L=np(),this.U=st.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=De(),n=De(),s=De();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:X()}}),new so(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=np()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class sA{constructor(e){this.nt=e,this.st=new Map,this.it=Ms(),this.rt=tp(),this.ot=new tt(me)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(Hu(i))if(s===0){const o=new j(i.path);this.ct(n,o,at.newNoDocument(o,re.min()))}else ke(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Hu(a.target)){const l=new j(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.ct(o,l,at.newNoDocument(l,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=De();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new cl(e,n,this.ot,this.it,s);return this.it=Ms(),this.rt=tp(),this.ot=new tt(me),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new ep,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new tt(me),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new ep),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function tp(){return new Xe(j.comparator)}function np(){return new Xe(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),iA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class oA{constructor(e,n){this.databaseId=e,this.N=n}}function wa(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zy(t,e){return t.N?e.toBase64():e.toUint8Array()}function aA(t,e){return wa(t,e.toTimestamp())}function In(t){return ke(!!t),re.fromTimestamp(function(e){const n=es(e);return new ut(n.seconds,n.nanos)}(t))}function mh(t,e){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ev(t){const e=Ce.fromString(t);return ke(sv(e)),e}function qu(t,e){return mh(t.databaseId,e.path)}function Jl(t,e){const n=ev(e);if(n.get(1)!==t.databaseId.projectId)throw new L(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(tv(n))}function Ku(t,e){return mh(t.databaseId,e)}function lA(t){const e=ev(t);return e.length===4?Ce.emptyPath():tv(e)}function zu(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tv(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sp(t,e,n){return{name:qu(t,e),fields:n.value.mapValue.fields}}function uA(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,u){return l.N?(ke(u===void 0||typeof u=="string"),st.fromBase64String(u||"")):(ke(u===void 0||u instanceof Uint8Array),st.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:Gy(l.code);return new L(u,l.message||"")}(o);n=new Jy(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Jl(t,s.document.name),i=In(s.document.updateTime),o=new Ht({mapValue:{fields:s.document.fields}}),a=at.newFoundDocument(r,i,o),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Fo(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Jl(t,s.document),i=s.readTime?In(s.readTime):re.min(),o=at.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Fo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Jl(t,s.document),i=s.removedTargetIds||[];n=new Fo([],i,r,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Xk(r),o=s.targetId;n=new Qy(o,i)}}return n}function cA(t,e){let n;if(e instanceof ul)n={update:sp(t,e.key,e.value)};else if(e instanceof zy)n={delete:qu(t,e.key)};else if(e instanceof no)n={update:sp(t,e.key,e.data),updateMask:wA(e.fieldMask)};else{if(!(e instanceof Gk))return X();n={verify:qu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof va)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ni)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Mi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _a)return{fieldPath:i.field.canonicalString(),increment:o.k};throw X()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:aA(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:X()}(t,e.precondition)),n}function hA(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?In(s.updateTime):In(r);return i.isEqual(re.min())&&(i=In(r)),new qk(i,s.transformResults||[])}(n,e))):[]}function fA(t,e){return{documents:[Ku(t,e.path)]}}function dA(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ku(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ku(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Wd(h.value))return{unaryFilter:{field:Ws(h.field),op:"IS_NAN"}};if(jd(h.value))return{unaryFilter:{field:Ws(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Wd(h.value))return{unaryFilter:{field:Ws(h.field),op:"IS_NOT_NAN"}};if(jd(h.value))return{unaryFilter:{field:Ws(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ws(h.field),op:yA(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ws(c.field),direction:gA(c.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,u){return l.N||Fr(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function pA(t){let e=lA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ke(s===1);const c=n.from[0];c.allDescendants?r=c.collectionId:e=e.child(c.collectionId)}let i=[];n.where&&(i=nv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new hi(Qs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Fr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new ga(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new ga(f,h)}(n.endAt)),Uk(e,r,o,i,a,"F",l,u)}function mA(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return X()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function nv(t){return t?t.unaryFilter!==void 0?[_A(t)]:t.fieldFilter!==void 0?[vA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>nv(e)).reduce((e,n)=>e.concat(n)):X():[]}function gA(t){return rA[t]}function yA(t){return iA[t]}function Ws(t){return{fieldPath:t.canonicalString()}}function Qs(t){return St.fromServerFormat(t.fieldPath)}function vA(t){return _t.create(Qs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}function _A(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Qs(t.unaryFilter.field);return _t.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Qs(t.unaryFilter.field);return _t.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qs(t.unaryFilter.field);return _t.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Qs(t.unaryFilter.field);return _t.create(r,"!=",{nullValue:"NULL_VALUE"});default:return X()}}function wA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function ro(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Kk(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Wu(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Wu(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(re.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),De())}isEqual(e){return this.batchId===e.batchId&&gr(this.mutations,e.mutations,(n,s)=>Gd(n,s))&&gr(this.baseMutations,e.baseMutations,(n,s)=>Gd(n,s))}}class gh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ke(e.mutations.length===s.length);let r=eA;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new gh(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,s,r,i=re.min(),o=re.min(),a=st.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.Jt=e}}function kA(t){const e=pA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vk(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(){this.qe=new CA}addToCollectionParentIndex(e,n){return this.qe.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getFieldIndex(e,n){return C.resolve(null)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class CA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new tt(Ce.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new tt(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Er(0)}static yn(){return new Er(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==EA)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.changes=new Ur(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,s){this.ds=e,this.Bs=n,this.indexManager=s}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Us(e,n,s))}Us(e,n,s){return this.ds.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}qs(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Ks(e,n){return this.ds.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.qs(n,s))}Qs(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.js(e,n.path):Uy(n)?this.Ws(e,n,s):this.zs(e,n,s)}js(e,n){return this.Ls(e,new j(n)).next(s=>{let r=Yu();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ws(e,n,s){const r=n.collectionGroup;let i=Yu();return this.indexManager.getCollectionParents(e,r).next(o=>C.forEach(o,a=>{const l=function(u,c){return new to(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.zs(e,l,s).next(u=>{u.forEach((c,h)=>{i=i.insert(c,h)})})}).next(()=>i))}zs(e,n,s){let r;return this.ds.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const l=a.key;let u=r.get(l);u==null&&(u=at.newInvalidDocument(l),r=r.insert(l,u)),Wu(a,u,o.localWriteTime),u.isFoundDocument()||(r=r.remove(l))}}).next(()=>(r.forEach((i,o)=>{ph(n,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Hs=s,this.Js=r}static Ys(e,n){let s=De(),r=De();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new yh(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{Xs(e){this.Zs=e}Qs(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(re.min())?this.ti(e,n):this.Zs.Ks(e,r).next(i=>{const o=this.ei(n,i);return(xo(n)||ya(n))&&this.ni(n.limitType,o,r,s)?this.ti(e,n):(Ud()<=de.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ju(n)),this.Zs.Qs(e,n,bk(s,-1)).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}ei(e,n){let s=new tt($y(e));return n.forEach((r,i)=>{ph(e,i)&&(s=s.add(i))}),s}ni(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ti(e,n){return Ud()<=de.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ju(n)),this.Zs.Qs(e,n,wr.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,s,r){this.persistence=e,this.si=n,this.M=r,this.ii=new Xe(me),this.ri=new Ur(i=>fh(i),dh),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(s)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new RA(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function MA(t,e,n,s){return new NA(t,e,n,s)}async function rv(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.Bs.getAllMutationBatches(s).next(i=>(r=i,n.ai(e),n.Bs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=De();for(const u of r){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of i){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.ci.Ks(s,l).next(u=>({hi:u,removedBatchIds:o,addedBatchIds:a}))})})}function PA(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=C.resolve();return h.forEach(m=>{f=f.next(()=>u.getEntry(a,m)).next(y=>{const b=l.docVersions.get(m);ke(b!==null),y.version.compareTo(b)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>o.Bs.removeMutationBatch(a,c))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.ci.Ks(s,r))})}function iv(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function xA(t,e){const n=J(t),s=e.snapshotVersion;let r=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});r=n.ii;const a=[];e.targetChanges.forEach((u,c)=>{const h=r.get(c);if(!h)return;a.push(n.fs.removeMatchingKeys(i,u.removedDocuments,c).next(()=>n.fs.addMatchingKeys(i,u.addedDocuments,c)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(c)?f=f.withResumeToken(st.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(c,f),function(m,y,b){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,f,u)&&a.push(n.fs.updateTargetData(i,f))});let l=Ms();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(LA(i,o,e.documentUpdates).next(u=>{l=u})),!s.isEqual(re.min())){const u=n.fs.getLastRemoteSnapshotVersion(i).next(c=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.ci.Gs(i,l)).next(()=>l)}).then(i=>(n.ii=r,i))}function LA(t,e,n){let s=De();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=Ms();return n.forEach((o,a)=>{const l=r.get(o);a.isNoDocument()&&a.version.isEqual(re.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):$("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),i})}function FA(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(s,e)))}function UA(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.fs.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.fs.allocateTargetId(s).next(o=>(r=new Ts(e,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ii.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ii=n.ii.insert(s.targetId,s),n.ri.set(e,s.targetId)),s})}async function Gu(t,e,n){const s=J(t),r=s.ii.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ro(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ii=s.ii.remove(e),s.ri.delete(r.target)}function rp(t,e,n){const s=J(t);let r=re.min(),i=De();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=J(a),h=c.ri.get(u);return h!==void 0?C.resolve(c.ii.get(h)):c.fs.getTargetData(l,u)}(s,o,Ns(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.si.Qs(o,e,n?r:re.min(),n?i:De())).next(a=>(VA(s,$k(e),a),{documents:a,li:i})))}function VA(t,e,n){let s=re.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.oi.set(e,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return C.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var s;return this.wi.set(n.id,{id:(s=n).id,version:s.version,createTime:In(s.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(s){return{name:s.name,query:kA(s.bundledQuery),readTime:In(s.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(){this.overlays=new Xe(j.comparator),this.gi=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.gi.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.gi.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=Ql(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Xe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let c=i.get(u.largestBatchId);c===null&&(c=Ql(),i=i.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ql(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=r)););return C.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.gi.get(r.largestBatchId).delete(s.key);this.gi.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new SA(n,s));let i=this.gi.get(n);i===void 0&&(i=De(),this.gi.set(n,i)),this.gi.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.yi=new tt(Ye.pi),this.Ii=new tt(Ye.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const s=new Ye(e,n);this.yi=this.yi.add(s),this.Ii=this.Ii.add(s)}Ei(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Ai(new Ye(e,n))}Ri(e,n){e.forEach(s=>this.removeReference(s,n))}Pi(e){const n=new j(new Ce([])),s=new Ye(n,e),r=new Ye(n,e+1),i=[];return this.Ii.forEachInRange([s,r],o=>{this.Ai(o),i.push(o.key)}),i}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new j(new Ce([])),s=new Ye(n,e),r=new Ye(n,e+1);let i=De();return this.Ii.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),s=this.yi.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ye{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return j.comparator(e.key,n.key)||me(e.vi,n.vi)}static Ti(e,n){return me(e.vi,n.vi)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new tt(Ye.pi)}checkEmpty(e){return C.resolve(this.Bs.length===0)}addMutationBatch(e,n,s,r){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new IA(i,n,s,r);this.Bs.push(o);for(const a of r)this.Di=this.Di.add(new Ye(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.xi(s),i=r<0?0:r;return C.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return C.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ye(n,0),r=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([s,r],o=>{const a=this.Ci(o.vi);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new tt(me);return n.forEach(r=>{const i=new Ye(r,0),o=new Ye(r,Number.POSITIVE_INFINITY);this.Di.forEachInRange([i,o],a=>{s=s.add(a.vi)})}),C.resolve(this.Ni(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new j(i),0);let a=new tt(me);return this.Di.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.vi)),!0)},o),C.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(s=>{const r=this.Ci(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ke(this.ki(n.batchId,"removed")===0),this.Bs.shift();let s=this.Di;return C.forEach(n.mutations,r=>{const i=new Ye(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Di=s})}_n(e){}containsKey(e,n){const s=new Ye(n,0),r=this.Di.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,C.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.Mi=e,this.docs=new Xe(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Mi(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let s=Ms();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():at.newInvalidDocument(r))}),C.resolve(s)}getAllFromCollection(e,n,s){let r=Ms();const i=new j(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Ak(kk(l),s)<=0||(r=r.insert(l.key,l.mutableCopy()))}return C.resolve(r)}getAllFromCollectionGroup(e,n,s,r){X()}Oi(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new WA(this)}getSize(e){return C.resolve(this.size)}}class WA extends DA{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.persistence=e,this.Fi=new Ur(n=>fh(n),dh),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.$i=0,this.Bi=new vh,this.targetCount=0,this.Li=Er.gn()}forEachTarget(e,n){return this.Fi.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$i&&(this.$i=n),C.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new Er(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Tn(n),C.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fi.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.Bi.Ei(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.Bi.Ri(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Bi.Vi(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.Bi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n){this.Ui={},this.overlays={},this.es=new ch(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new YA(this),this.indexManager=new AA,this.ds=function(s){return new jA(s)}(s=>this.referenceDelegate.qi(s)),this.M=new bA(n),this._s=new $A(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ui[e.toKey()];return s||(s=new HA(n,this.referenceDelegate),this.Ui[e.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const r=new KA(this.es.next());return this.referenceDelegate.Ki(),s(r).next(i=>this.referenceDelegate.Gi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Qi(e,n){return C.or(Object.values(this.Ui).map(s=>()=>s.containsKey(e,n)))}}class KA extends TA{constructor(e){super(),this.currentSequenceNumber=e}}class _h{constructor(e){this.persistence=e,this.ji=new vh,this.Wi=null}static zi(e){return new _h(e)}get Hi(){if(this.Wi)return this.Wi;throw X()}addReference(e,n,s){return this.ji.addReference(s,n),this.Hi.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.ji.removeReference(s,n),this.Hi.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),C.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(r=>this.Hi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hi,s=>{const r=j.fromPath(s);return this.Ji(e,r).next(i=>{i||n.removeEntry(r,re.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(s=>{s?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return C.or([()=>C.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class ip{constructor(){this.activeTargetIds=Xy()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zA{constructor(){this.$r=new ip,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,s){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new ip,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{Lr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,s,r,i){const o=this.uo(e,n);$("RestConnection","Sending: ",o,s);const a={};return this.ao(a,r,i),this.co(e,o,a,s).then(l=>($("RestConnection","Received: ",l),l),l=>{throw Vd("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}ho(e,n,s,r,i){return this.oo(e,n,s,r,i)}ao(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+xr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}uo(e,n){const s=XA[e];return`${this.io}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new hk;a.listenOnce(lk.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xl.NO_ERROR:const u=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Xl.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new L(_.DEADLINE_EXCEEDED,"Request time out"));break;case Xl.HTTP_ERROR:const c=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(h.status);o(new L(f,h.message))}else o(new L(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(_.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,s,15)})}lo(e,n,s){const r=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=ok(),o=ak(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ck({})),this.ao(a.initMessageHeaders,n,s),Om()||Mm()||rE()||Pm()||iE()||Nm()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=r.join("");$("Connection","Creating WebChannel: "+l,a);const u=i.createWebChannel(l,a);let c=!1,h=!1;const f=new QA({Wr:y=>{h?$("Connection","Not sending because WebChannel is closed:",y):(c||($("Connection","Opening WebChannel transport."),u.open(),c=!0),$("Connection","WebChannel sending:",y),u.send(y))},zr:()=>u.close()}),m=(y,b,S)=>{y.listen(b,R=>{try{S(R)}catch(U){setTimeout(()=>{throw U},0)}})};return m(u,Eo.EventType.OPEN,()=>{h||$("Connection","WebChannel transport opened.")}),m(u,Eo.EventType.CLOSE,()=>{h||(h=!0,$("Connection","WebChannel transport closed"),f.no())}),m(u,Eo.EventType.ERROR,y=>{h||(h=!0,Vd("Connection","WebChannel transport errored:",y),f.no(new L(_.UNAVAILABLE,"The operation could not be completed")))}),m(u,Eo.EventType.MESSAGE,y=>{var b;if(!h){const S=y.data[0];ke(!!S);const R=S,U=R.error||((b=R[0])===null||b===void 0?void 0:b.error);if(U){$("Connection","WebChannel received error:",U);const Q=U.status;let Z=function(xe){const se=Ve[xe];if(se!==void 0)return Gy(se)}(Q),ye=U.message;Z===void 0&&(Z=_.INTERNAL,ye="Unknown error status: "+Q+" with message "+U.message),h=!0,f.no(new L(Z,ye)),u.close()}else $("Connection","WebChannel received:",S),f.so(S)}}),m(o,uk.STAT_EVENT,y=>{y.stat===Ld.PROXY?$("Connection","Detected buffering proxy"):y.stat===Ld.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.eo()},0),f}}function Zl(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t){return new oA(t,!0)}class ov{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=n,this.fo=s,this._o=r,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),s=Math.max(0,Date.now()-this.po),r=Math.max(0,n-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,n,s,r,i,o,a,l){this.Yn=e,this.Ro=s,this.Po=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new ov(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.qo(s,r)},s=>{e(()=>{const r=new L(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ko(r)})})}qo(e,n){const s=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{s(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(r=>{s(()=>this.Ko(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZA extends av{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Go(e,n){return this.bo.lo("Listen",e,n)}onMessage(e){this.Do.reset();const n=uA(this.M,e),s=function(r){if(!("targetChange"in r))return re.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?re.min():i.readTime?In(i.readTime):re.min()}(e);return this.listener.Qo(n,s)}jo(e){const n={};n.database=zu(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=Hu(a)?{documents:fA(r,a)}:{query:dA(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Zy(r,i.resumeToken):i.snapshotVersion.compareTo(re.min())>0&&(o.readTime=wa(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=mA(this.M,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=zu(this.M),n.removeTarget=e,this.Fo(n)}}class e1 extends av{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=hA(e.writeResults,e.commitTime),s=In(e.commitTime);return this.listener.Yo(s,n)}return ke(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=zu(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>cA(this.M,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.M=r,this.tu=!1}eu(){if(this.tu)throw new L(_.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,s){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.oo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(_.UNKNOWN,r.toString())})}ho(e,n,s){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ho(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(_.UNKNOWN,r.toString())})}terminate(){this.tu=!0}}class n1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(Zn(n),this.iu=!1):$("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr(o=>{s.enqueueAndForget(async()=>{Fs(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=J(a);l.fu.add(4),await oo(l),l.wu.set("Unknown"),l.fu.delete(4),await fl(l)}(this))})}),this.wu=new n1(s,r)}}async function fl(t){if(Fs(t))for(const e of t.du)await e(!0)}async function oo(t){for(const e of t.du)await e(!1)}function lv(t,e){const n=J(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Th(n)?Eh(n):Vr(n).xo()&&wh(n,e))}function uv(t,e){const n=J(t),s=Vr(n);n.lu.delete(e),s.xo()&&cv(n,e),n.lu.size===0&&(s.xo()?s.Mo():Fs(n)&&n.wu.set("Unknown"))}function wh(t,e){t.mu.Z(e.targetId),Vr(t).jo(e)}function cv(t,e){t.mu.Z(e),Vr(t).Wo(e)}function Eh(t){t.mu=new sA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),Vr(t).start(),t.wu.ru()}function Th(t){return Fs(t)&&!Vr(t).Co()&&t.lu.size>0}function Fs(t){return J(t).fu.size===0}function hv(t){t.mu=void 0}async function r1(t){t.lu.forEach((e,n)=>{wh(t,e)})}async function i1(t,e){hv(t),Th(t)?(t.wu.au(e),Eh(t)):t.wu.set("Unknown")}async function o1(t,e,n){if(t.wu.set("Online"),e instanceof Jy&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.lu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.lu.delete(o),s.mu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ea(t,s)}else if(e instanceof Fo?t.mu.ut(e):e instanceof Qy?t.mu._t(e):t.mu.ht(e),!n.isEqual(re.min()))try{const s=await iv(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.mu.yt(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.lu.get(l);u&&r.lu.set(l,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=r.lu.get(a);if(!l)return;r.lu.set(a,l.withResumeToken(st.EMPTY_BYTE_STRING,l.snapshotVersion)),cv(r,a);const u=new Ts(l.target,a,1,l.sequenceNumber);wh(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await Ea(t,s)}}async function Ea(t,e,n){if(!ro(e))throw e;t.fu.add(1),await oo(t),t.wu.set("Offline"),n||(n=()=>iv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await fl(t)})}function fv(t,e){return e().catch(n=>Ea(t,n,e))}async function dl(t){const e=J(t),n=ts(e);let s=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;a1(e);)try{const r=await FA(e.localStore,s);if(r===null){e.hu.length===0&&n.Mo();break}s=r.batchId,l1(e,r)}catch(r){await Ea(e,r)}dv(e)&&pv(e)}function a1(t){return Fs(t)&&t.hu.length<10}function l1(t,e){t.hu.push(e);const n=ts(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function dv(t){return Fs(t)&&!ts(t).Co()&&t.hu.length>0}function pv(t){ts(t).start()}async function u1(t){ts(t).Zo()}async function c1(t){const e=ts(t);for(const n of t.hu)e.Jo(n.mutations)}async function h1(t,e,n){const s=t.hu.shift(),r=gh.from(s,e,n);await fv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await dl(t)}async function f1(t,e){e&&ts(t).Ho&&await async function(n,s){if(r=s.code,Qk(r)&&r!==_.ABORTED){const i=n.hu.shift();ts(n).ko(),await fv(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await dl(n)}var r}(t,e),dv(t)&&pv(t)}async function ap(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=Fs(n);n.fu.add(3),await oo(n),s&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await fl(n)}async function d1(t,e){const n=J(t);e?(n.fu.delete(2),await fl(n)):e||(n.fu.add(2),await oo(n),n.wu.set("Unknown"))}function Vr(t){return t.gu||(t.gu=function(e,n,s){const r=J(e);return r.eu(),new ZA(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Hr:r1.bind(null,t),Yr:i1.bind(null,t),Qo:o1.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),Th(t)?Eh(t):t.wu.set("Unknown")):(await t.gu.stop(),hv(t))})),t.gu}function ts(t){return t.yu||(t.yu=function(e,n,s){const r=J(e);return r.eu(),new e1(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Hr:u1.bind(null,t),Yr:f1.bind(null,t),Xo:c1.bind(null,t),Yo:h1.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await dl(t)):(await t.yu.stop(),t.hu.length>0&&($("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ih(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sh(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),ro(t))return new L(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=Yu(),this.sortedSet=new Xe(this.comparator)}static emptySet(e){return new ir(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ir)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ir;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.pu=new Xe(j.comparator)}track(e){const n=e.doc.key,s=this.pu.get(n);s?e.type!==0&&s.type===3?this.pu=this.pu.insert(n,e):e.type===3&&s.type!==1?this.pu=this.pu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pu=this.pu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pu=this.pu.remove(n):e.type===1&&s.type===2?this.pu=this.pu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):X():this.pu=this.pu.insert(n,e)}Iu(){const e=[];return this.pu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Tr{constructor(e,n,s,r,i,o,a,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Tr(e,n,ir.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ol(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.Tu=void 0,this.listeners=[]}}class m1{constructor(){this.queries=new Ur(e=>Vy(e),ol),this.onlineState="Unknown",this.Eu=new Set}}async function bh(t,e){const n=J(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new p1),r)try{i.Tu=await n.onListen(s)}catch(o){const a=Sh(o,`Initialization of query '${ju(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Au(n.onlineState),i.Tu&&e.Ru(i.Tu)&&Ah(n)}async function kh(t,e){const n=J(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function g1(t,e){const n=J(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Ru(r)&&(s=!0);o.Tu=r}}s&&Ah(n)}function y1(t,e,n){const s=J(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ah(t){t.Eu.forEach(e=>{e.next()})}class Ch{constructor(e,n,s){this.query=e,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}Ru(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Tr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),n=!0):this.Su(e,this.onlineState)&&(this.Du(e),n=!0),this.Vu=e,n}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),n=!0),n}Su(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Cu||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(e){e=Tr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.key=e}}class gv{constructor(e){this.key=e}}class v1{constructor(e,n){this.query=e,this.$u=n,this.Bu=null,this.current=!1,this.Lu=De(),this.mutatedKeys=De(),this.Uu=$y(e),this.qu=new ir(this.Uu)}get Ku(){return this.$u}Gu(e,n){const s=n?n.Qu:new lp,r=n?n.qu:this.qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=xo(this.query)&&r.size===this.query.limit?r.last():null,u=ya(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((c,h)=>{const f=r.get(c),m=ph(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),b=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;f&&m?f.data.isEqual(m.data)?y!==b&&(s.track({type:3,doc:m}),S=!0):this.ju(f,m)||(s.track({type:2,doc:m}),S=!0,(l&&this.Uu(m,l)>0||u&&this.Uu(m,u)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),S=!0):f&&!m&&(s.track({type:1,doc:f}),S=!0,(l||u)&&(a=!0)),S&&(m?(o=o.add(m),i=b?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),xo(this.query)||ya(this.query))for(;o.size>this.query.limit;){const c=xo(this.query)?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),s.track({type:1,doc:c})}return{qu:o,Qu:s,ni:a,mutatedKeys:i}}ju(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const i=e.Qu.Iu();i.sort((u,c)=>function(h,f){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return m(h)-m(f)}(u.type,c.type)||this.Uu(u.doc,c.doc)),this.Wu(s);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,l=a!==this.Bu;return this.Bu=a,i.length!==0||l?{snapshot:new Tr(this.query,e.qu,r,i,e.mutatedKeys,a===0,l,!1),Hu:o}:{Hu:o}}Au(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new lp,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=De(),this.qu.forEach(s=>{this.Ju(s.key)&&(this.Lu=this.Lu.add(s.key))});const n=[];return e.forEach(s=>{this.Lu.has(s)||n.push(new gv(s))}),this.Lu.forEach(s=>{e.has(s)||n.push(new mv(s))}),n}Yu(e){this.$u=e.li,this.Lu=De();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Xu(){return Tr.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class _1{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class w1{constructor(e){this.key=e,this.Zu=!1}}class E1{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new Ur(a=>Vy(a),ol),this.na=new Map,this.sa=new Set,this.ia=new Xe(j.comparator),this.ra=new Map,this.oa=new vh,this.ua={},this.aa=new Map,this.ca=Er.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function T1(t,e){const n=N1(t);let s,r;const i=n.ea.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Xu();else{const o=await UA(n.localStore,Ns(e));n.isPrimaryClient&&lv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await I1(n,e,s,a==="current")}return r}async function I1(t,e,n,s){t.la=(c,h,f)=>async function(m,y,b,S){let R=y.view.Gu(b);R.ni&&(R=await rp(m.localStore,y.query,!1).then(({documents:Z})=>y.view.Gu(Z,R)));const U=S&&S.targetChanges.get(y.targetId),Q=y.view.applyChanges(R,m.isPrimaryClient,U);return cp(m,y.targetId,Q.Hu),Q.snapshot}(t,c,h,f);const r=await rp(t.localStore,e,!0),i=new v1(e,r.li),o=i.Gu(r.documents),a=so.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),l=i.applyChanges(o,t.isPrimaryClient,a);cp(t,n,l.Hu);const u=new _1(e,n,i);return t.ea.set(e,u),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),l.snapshot}async function S1(t,e){const n=J(t),s=n.ea.get(e),r=n.na.get(s.targetId);if(r.length>1)return n.na.set(s.targetId,r.filter(i=>!ol(i,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Gu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),uv(n.remoteStore,s.targetId),Xu(n,s.targetId)}).catch(io)):(Xu(n,s.targetId),await Gu(n.localStore,s.targetId,!0))}async function b1(t,e,n){const s=M1(t);try{const r=await function(i,o){const a=J(i),l=ut.now(),u=o.reduce((h,f)=>h.add(f.key),De());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ci.Ks(h,u).next(f=>{c=f;const m=[];for(const y of o){const b=zk(y,c.get(y.key));b!=null&&m.push(new no(y.key,b,Py(b.value.mapValue),Gn.exists(!0)))}return a.Bs.addMutationBatch(h,l,m,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let l=i.ua[i.currentUser.toKey()];l||(l=new Xe(me)),l=l.insert(o,a),i.ua[i.currentUser.toKey()]=l}(s,r.batchId,n),await ao(s,r.changes),await dl(s.remoteStore)}catch(r){const i=Sh(r,"Failed to persist write");n.reject(i)}}async function yv(t,e){const n=J(t);try{const s=await xA(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ra.get(i);o&&(ke(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Zu=!0:r.modifiedDocuments.size>0?ke(o.Zu):r.removedDocuments.size>0&&(ke(o.Zu),o.Zu=!1))}),await ao(n,s,e)}catch(s){await io(s)}}function up(t,e,n){const s=J(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ea.forEach((i,o)=>{const a=o.view.Au(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Au(o)&&(l=!0)}),l&&Ah(a)}(s.eventManager,e),r.length&&s.ta.Qo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function k1(t,e,n){const s=J(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ra.get(e),i=r&&r.key;if(i){let o=new Xe(j.comparator);o=o.insert(i,at.newNoDocument(i,re.min()));const a=De().add(i),l=new cl(re.min(),new Map,new tt(me),o,a);await yv(s,l),s.ia=s.ia.remove(i),s.ra.delete(e),Dh(s)}else await Gu(s.localStore,e,!1).then(()=>Xu(s,e,n)).catch(io)}async function A1(t,e){const n=J(t),s=e.batch.batchId;try{const r=await PA(n.localStore,e);_v(n,s,null),vv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ao(n,r)}catch(r){await io(r)}}async function C1(t,e,n){const s=J(t);try{const r=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.Bs.lookupMutationBatch(l,o).next(c=>(ke(c!==null),u=c.keys(),a.Bs.removeMutationBatch(l,c))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.ci.Ks(l,u))})}(s.localStore,e);_v(s,e,n),vv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ao(s,r)}catch(r){await io(r)}}function vv(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function _v(t,e,n){const s=J(t);let r=s.ua[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ua[s.currentUser.toKey()]=r}}function Xu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.na.get(e))t.ea.delete(s),n&&t.ta.fa(s,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(s=>{t.oa.containsKey(s)||wv(t,s)})}function wv(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);n!==null&&(uv(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),Dh(t))}function cp(t,e,n){for(const s of n)s instanceof mv?(t.oa.addReference(s.key,e),D1(t,s)):s instanceof gv?($("SyncEngine","Document no longer in limbo: "+s.key),t.oa.removeReference(s.key,e),t.oa.containsKey(s.key)||wv(t,s.key)):X()}function D1(t,e){const n=e.key,s=n.path.canonicalString();t.ia.get(n)||t.sa.has(s)||($("SyncEngine","New document in limbo: "+n),t.sa.add(s),Dh(t))}function Dh(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new j(Ce.fromString(e)),s=t.ca.next();t.ra.set(s,new w1(n)),t.ia=t.ia.insert(n,s),lv(t.remoteStore,new Ts(Ns(il(n.path)),s,2,ch.A))}}async function ao(t,e,n){const s=J(t),r=[],i=[],o=[];s.ea.isEmpty()||(s.ea.forEach((a,l)=>{o.push(s.la(l,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),r.push(u);const c=yh.Ys(l.targetId,u);i.push(c)}}))}),await Promise.all(o),s.ta.Qo(r),await async function(a,l){const u=J(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,h=>C.forEach(h.Hs,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>C.forEach(h.Js,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!ro(c))throw c;$("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.ii.get(h),m=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(m);u.ii=u.ii.insert(h,y)}}}(s.localStore,i))}async function R1(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await rv(n.localStore,e);n.currentUser=e,function(r,i){r.aa.forEach(o=>{o.forEach(a=>{a.reject(new L(_.CANCELLED,i))})}),r.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ao(n,s.hi)}}function O1(t,e){const n=J(t),s=n.ra.get(e);if(s&&s.Zu)return De().add(s.key);{let r=De();const i=n.na.get(e);if(!i)return r;for(const o of i){const a=n.ea.get(o);r=r.unionWith(a.view.Ku)}return r}}function N1(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=O1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=k1.bind(null,e),e.ta.Qo=g1.bind(null,e.eventManager),e.ta.fa=y1.bind(null,e.eventManager),e}function M1(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=A1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=C1.bind(null,e),e}class P1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=hl(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return MA(this.persistence,new OA,e.initialUser,this.M)}wa(e){return new qA(_h.zi,this.M)}_a(e){return new zA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class x1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>up(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=R1.bind(null,this.syncEngine),await d1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new m1}createDatastore(e){const n=hl(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new JA(r));var r;return function(i,o,a,l){return new t1(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>up(this.syncEngine,a,0),o=op.vt()?new op:new GA,new s1(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,l,u){const c=new E1(s,r,i,o,a,l);return u&&(c.ha=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);$("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await oo(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=It.UNAUTHENTICATED,this.clientId=Ry.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function F1(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await rv(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function U1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await V1(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>ap(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ap(e.remoteStore,i)),t.onlineComponents=e}async function V1(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await F1(t,new P1)),t.offlineComponents}async function Ev(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await U1(t,new x1)),t.onlineComponents}function $1(t){return Ev(t).then(e=>e.syncEngine)}async function Ta(t){const e=await Ev(t),n=e.eventManager;return n.onListen=T1.bind(null,e.syncEngine),n.onUnlisten=S1.bind(null,e.syncEngine),n}function B1(t,e,n={}){const s=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,l){const u=new Rh({next:h=>{i.enqueueAndForget(()=>kh(r,c));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new L(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new L(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Ch(il(o.path),u,{includeMetadataChanges:!0,Cu:!0});return bh(r,c)}(await Ta(t),t.asyncQueue,e,n,s)),s.promise}function H1(t,e,n={}){const s=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,l){const u=new Rh({next:h=>{i.enqueueAndForget(()=>kh(r,c)),h.fromCache&&a.source==="server"?l.reject(new L(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Ch(o,u,{includeMetadataChanges:!0,Cu:!0});return bh(r,c)}(await Ta(t),t.asyncQueue,e,n,s)),s.promise}const hp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(t,e,n){if(!n)throw new L(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function j1(t,e,n,s){if(e===!0&&s===!0)throw new L(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fp(t){if(!j.isDocumentKey(t))throw new L(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dp(t){if(j.isDocumentKey(t))throw new L(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Yt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pl(t);throw new L(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,j1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pp({}),this._settingsFrozen=!1,e instanceof vr?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new L(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vr(r.options.projectId)}(e))}get app(){if(!this._app)throw new L(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new dk;switch(n.type){case"gapi":const s=n.client;return ke(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new gk(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new L(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hp.get(e);n&&($("ComponentProvider","Removing Datastore"),hp.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class $r{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $r(this.firestore,e,this._query)}}class Xn extends $r{constructor(e,n,s){super(e,n,il(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new j(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function NN(t,e,...n){if(t=nt(t),Tv("collection","path",e),t instanceof Oh){const s=Ce.fromString(e,...n);return dp(s),new Xn(t,null,s)}{if(!(t instanceof wt||t instanceof Xn))throw new L(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ce.fromString(e,...n));return dp(s),new Xn(t.firestore,null,s)}}function W1(t,e,...n){if(t=nt(t),arguments.length===1&&(e=Ry.R()),Tv("doc","path",e),t instanceof Oh){const s=Ce.fromString(e,...n);return fp(s),new wt(t,null,new j(s))}{if(!(t instanceof wt||t instanceof Xn))throw new L(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ce.fromString(e,...n));return fp(s),new wt(t.firestore,t instanceof Xn?t.converter:null,new j(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new ov(this,"async_queue_retry"),this.qa=()=>{const n=Zl();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=Zl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=Zl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new Tn;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!ro(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(s=>{this.$a=s,this.Ba=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Zn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ba=!1,s))));return this.ka=n,n}enqueueAfterDelay(e,n,s){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const r=Ih.createAndSchedule(this,e,n,s,i=>this.ja(i));return this.Fa.push(r),r}Ka(){this.$a&&X()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}function mp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ns extends Oh{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new Y1,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Iv(this),this._firestoreClient.terminate()}}function MN(t=Um()){return Ac(t,"firestore").getImmediate()}function ml(t){return t._firestoreClient||Iv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Iv(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Tk(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new L1(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ir(st.fromBase64String(e))}catch(n){throw new L(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ir(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=/^__.*__$/;class K1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new no(e,this.data,this.fieldMask,n,this.fieldTransforms):new ul(e,this.data,n,this.fieldTransforms)}}function bv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Ph{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new Ph(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Za({path:s,ec:!1});return r.nc(e),r}sc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Za({path:s,ec:!1});return r.Ya(),r}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return Ia(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(bv(this.Xa)&&q1.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class z1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||hl(e)}ac(e,n,s,r=!1){return new Ph({Xa:e,methodName:n,uc:s,path:St.emptyPath(),ec:!1,oc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function xh(t){const e=t._freezeSettings(),n=hl(t._databaseId);return new z1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kv(t,e,n,s,r,i={}){const o=t.ac(i.merge||i.mergeFields?2:0,e,n,r);Dv("Data must be an object, but it was:",o,s);const a=Av(s,o);let l,u;if(i.merge)l=new Vu(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const c=[];for(const h of i.mergeFields){const f=X1(e,h,n);if(!o.contains(f))throw new L(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);J1(c,f)||c.push(f)}l=new Vu(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new K1(new Ht(a),l,u)}function G1(t,e,n,s=!1){return Lh(n,t.ac(s?4:3,e))}function Lh(t,e){if(Cv(t=nt(t)))return Dv("Unsupported field value:",e,t),Av(t,e);if(t instanceof Sv)return function(n,s){if(!bv(s.Xa))throw s.rc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.rc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Lh(o,s.ic(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Hk(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ut.fromDate(n);return{timestampValue:wa(s.M,r)}}if(n instanceof ut){const r=new ut(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wa(s.M,r)}}if(n instanceof Mh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ir)return{bytesValue:Zy(s.M,n._byteString)};if(n instanceof wt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:mh(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.rc(`Unsupported field value: ${pl(n)}`)}(t,e)}function Av(t,e){const n={};return Oy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(s,r)=>{const i=Lh(r,e.tc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Cv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof Mh||t instanceof Ir||t instanceof wt||t instanceof Sv)}function Dv(t,e,n){if(!Cv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=pl(n);throw s==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+s)}}function X1(t,e,n){if((e=nt(e))instanceof Nh)return e._internalPath;if(typeof e=="string")return Rv(t,e);throw Ia("Field path arguments must be of type string or ",t,!1,void 0,n)}const Q1=new RegExp("[~\\*/\\[\\]]");function Rv(t,e,n){if(e.search(Q1)>=0)throw Ia(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nh(...e.split("."))._internalPath}catch{throw Ia(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ia(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new L(_.INVALID_ARGUMENT,a+t+l)}function J1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Z1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Z1 extends Ov{data(){return super.data()}}function Fh(t,e){return typeof e=="string"?Rv(t,e):e instanceof Nh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nv extends Ov{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Fh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Uo extends Nv{data(e={}){return super.data(e)}}class Mv{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ei(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Uo(this._firestore,this._userDataWriter,s.key,s,new ei(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ei(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ei(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:eC(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){if(ya(t)&&t.explicitOrderBy.length===0)throw new L(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tC{}function PN(t,...e){for(const n of e)t=n._apply(t);return t}class nC extends tC{constructor(e,n,s){super(),this.lc=e,this.fc=n,this.dc=s,this.type="where"}_apply(e){const n=xh(e.firestore),s=function(r,i,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){yp(c,u);const m=[];for(const y of c)m.push(gp(a,r,y));h={arrayValue:{values:m}}}else h=gp(a,r,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||yp(c,u),h=G1(o,i,c,u==="in"||u==="not-in");const f=_t.create(l,u,h);return function(m,y){if(y.S()){const S=Fy(m);if(S!==null&&!S.isEqual(y.field))throw new L(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${S.toString()}' and '${y.field.toString()}'`);const R=Ly(m);R!==null&&sC(m,y.field,R)}const b=function(S,R){for(const U of S.filters)if(R.indexOf(U.op)>=0)return U.op;return null}(m,function(S){switch(S){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(b!==null)throw b===y.op?new L(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new L(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${b.toString()}' filters.`)}(r,f),f}(e._query,"where",n,e.firestore._databaseId,this.lc,this.fc,this.dc);return new $r(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new to(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function xN(t,e,n){const s=e,r=Fh("where",t);return new nC(r,s,n)}function gp(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new L(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Uy(e)&&n.indexOf("/")!==-1)throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ce.fromString(n));if(!j.isDocumentKey(s))throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Hd(t,new j(s))}if(n instanceof wt)return Hd(t,n._key);throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pl(n)}.`)}function yp(t,e){if(!Array.isArray(t)||t.length===0)throw new L(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new L(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function sC(t,e,n){if(!n.isEqual(e))throw new L(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{convertValue(e,n="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){const s={};return Lr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Mh($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=My(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){const n=es(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ce.fromString(e);ke(sv(s));const r=new vr(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||Zn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t){t=Yt(t,wt);const e=Yt(t.firestore,ns);return B1(ml(e),t._key).then(n=>Lv(e,t,n))}class Uh extends rC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ir(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function FN(t){t=Yt(t,$r);const e=Yt(t.firestore,ns),n=ml(e),s=new Uh(e);return Pv(t._query),H1(n,t._query).then(r=>new Mv(e,s,t,r))}function UN(t,e,n){t=Yt(t,wt);const s=Yt(t.firestore,ns),r=xv(t.converter,e,n);return Vh(s,[kv(xh(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Gn.none())])}function VN(t){return Vh(Yt(t.firestore,ns),[new zy(t._key,Gn.none())])}function $N(t,e){const n=Yt(t.firestore,ns),s=W1(t),r=xv(t.converter,e);return Vh(n,[kv(xh(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Gn.exists(!1))]).then(()=>s)}function BN(t,...e){var n,s,r;t=nt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||mp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(mp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,u,c;if(t instanceof wt)u=Yt(t.firestore,ns),c=il(t._key.path),l={next:h=>{e[o]&&e[o](Lv(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Yt(t,$r);u=Yt(h.firestore,ns),c=h._query;const f=new Uh(u);l={next:m=>{e[o]&&e[o](new Mv(u,f,h,m))},error:e[o+1],complete:e[o+2]},Pv(t._query)}return function(h,f,m,y){const b=new Rh(y),S=new Ch(f,b,m);return h.asyncQueue.enqueueAndForget(async()=>bh(await Ta(h),S)),()=>{b.Ia(),h.asyncQueue.enqueueAndForget(async()=>kh(await Ta(h),S))}}(ml(u),c,a,l)}function Vh(t,e){return function(n,s){const r=new Tn;return n.asyncQueue.enqueueAndForget(async()=>b1(await $1(n),s,r)),r.promise}(ml(t),e)}function Lv(t,e,n){const s=n.docs.get(e._key),r=new Uh(t);return new Nv(t,r,e._key,s,new ei(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){xr=n})($i),hr(new Ss("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new ns(r,new pk(n.getProvider("auth-internal")),new vk(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),zn(Fd,"3.4.8",t),zn(Fd,"3.4.8","esm2017")})();//! moment.js
//! version : 2.29.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Fv;function N(){return Fv.apply(null,arguments)}function iC(t){Fv=t}function Kt(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function Is(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function he(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $h(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var e;for(e in t)if(he(t,e))return!1;return!0}function Tt(t){return t===void 0}function Cn(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function lo(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function Uv(t,e){var n=[],s,r=t.length;for(s=0;s<r;++s)n.push(e(t[s],s));return n}function Wn(t,e){for(var n in e)he(e,n)&&(t[n]=e[n]);return he(e,"toString")&&(t.toString=e.toString),he(e,"valueOf")&&(t.valueOf=e.valueOf),t}function un(t,e,n,s){return l_(t,e,n,s,!0).utc()}function oC(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function ee(t){return t._pf==null&&(t._pf=oC()),t._pf}var Qu;Array.prototype.some?Qu=Array.prototype.some:Qu=function(t){var e=Object(this),n=e.length>>>0,s;for(s=0;s<n;s++)if(s in e&&t.call(this,e[s],s,e))return!0;return!1};function Bh(t){if(t._isValid==null){var e=ee(t),n=Qu.call(e.parsedDateParts,function(r){return r!=null}),s=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidEra&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n);if(t._strict&&(s=s&&e.charsLeftOver===0&&e.unusedTokens.length===0&&e.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=s;else return s}return t._isValid}function gl(t){var e=un(NaN);return t!=null?Wn(ee(e),t):ee(e).userInvalidated=!0,e}var vp=N.momentProperties=[],eu=!1;function Hh(t,e){var n,s,r,i=vp.length;if(Tt(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),Tt(e._i)||(t._i=e._i),Tt(e._f)||(t._f=e._f),Tt(e._l)||(t._l=e._l),Tt(e._strict)||(t._strict=e._strict),Tt(e._tzm)||(t._tzm=e._tzm),Tt(e._isUTC)||(t._isUTC=e._isUTC),Tt(e._offset)||(t._offset=e._offset),Tt(e._pf)||(t._pf=ee(e)),Tt(e._locale)||(t._locale=e._locale),i>0)for(n=0;n<i;n++)s=vp[n],r=e[s],Tt(r)||(t[s]=r);return t}function uo(t){Hh(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),eu===!1&&(eu=!0,N.updateOffset(this),eu=!1)}function zt(t){return t instanceof uo||t!=null&&t._isAMomentObject!=null}function Vv(t){N.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+t)}function Vt(t,e){var n=!0;return Wn(function(){if(N.deprecationHandler!=null&&N.deprecationHandler(null,t),n){var s=[],r,i,o,a=arguments.length;for(i=0;i<a;i++){if(r="",typeof arguments[i]=="object"){r+=`
[`+i+"] ";for(o in arguments[0])he(arguments[0],o)&&(r+=o+": "+arguments[0][o]+", ");r=r.slice(0,-2)}else r=arguments[i];s.push(r)}Vv(t+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),n=!1}return e.apply(this,arguments)},e)}var _p={};function $v(t,e){N.deprecationHandler!=null&&N.deprecationHandler(t,e),_p[t]||(Vv(e),_p[t]=!0)}N.suppressDeprecationWarnings=!1;N.deprecationHandler=null;function cn(t){return typeof Function!="undefined"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function aC(t){var e,n;for(n in t)he(t,n)&&(e=t[n],cn(e)?this[n]=e:this["_"+n]=e);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Ju(t,e){var n=Wn({},t),s;for(s in e)he(e,s)&&(Is(t[s])&&Is(e[s])?(n[s]={},Wn(n[s],t[s]),Wn(n[s],e[s])):e[s]!=null?n[s]=e[s]:delete n[s]);for(s in t)he(t,s)&&!he(e,s)&&Is(t[s])&&(n[s]=Wn({},n[s]));return n}function jh(t){t!=null&&this.set(t)}var Zu;Object.keys?Zu=Object.keys:Zu=function(t){var e,n=[];for(e in t)he(t,e)&&n.push(e);return n};var lC={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function uC(t,e,n){var s=this._calendar[t]||this._calendar.sameElse;return cn(s)?s.call(e,n):s}function ln(t,e,n){var s=""+Math.abs(t),r=e-s.length,i=t>=0;return(i?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+s}var Wh=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Io=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,tu={},or={};function H(t,e,n,s){var r=s;typeof s=="string"&&(r=function(){return this[s]()}),t&&(or[t]=r),e&&(or[e[0]]=function(){return ln(r.apply(this,arguments),e[1],e[2])}),n&&(or[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),t)})}function cC(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function hC(t){var e=t.match(Wh),n,s;for(n=0,s=e.length;n<s;n++)or[e[n]]?e[n]=or[e[n]]:e[n]=cC(e[n]);return function(r){var i="",o;for(o=0;o<s;o++)i+=cn(e[o])?e[o].call(r,t):e[o];return i}}function Vo(t,e){return t.isValid()?(e=Bv(e,t.localeData()),tu[e]=tu[e]||hC(e),tu[e](t)):t.localeData().invalidDate()}function Bv(t,e){var n=5;function s(r){return e.longDateFormat(r)||r}for(Io.lastIndex=0;n>=0&&Io.test(t);)t=t.replace(Io,s),Io.lastIndex=0,n-=1;return t}var fC={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function dC(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.match(Wh).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[t])}var pC="Invalid date";function mC(){return this._invalidDate}var gC="%d",yC=/\d{1,2}/;function vC(t){return this._ordinal.replace("%d",t)}var _C={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function wC(t,e,n,s){var r=this._relativeTime[n];return cn(r)?r(t,e,n,s):r.replace(/%d/i,t)}function EC(t,e){var n=this._relativeTime[t>0?"future":"past"];return cn(n)?n(e):n.replace(/%s/i,e)}var fi={};function ft(t,e){var n=t.toLowerCase();fi[n]=fi[n+"s"]=fi[e]=t}function $t(t){return typeof t=="string"?fi[t]||fi[t.toLowerCase()]:void 0}function Yh(t){var e={},n,s;for(s in t)he(t,s)&&(n=$t(s),n&&(e[n]=t[s]));return e}var Hv={};function dt(t,e){Hv[t]=e}function TC(t){var e=[],n;for(n in t)he(t,n)&&e.push({unit:n,priority:Hv[n]});return e.sort(function(s,r){return s.priority-r.priority}),e}function yl(t){return t%4===0&&t%100!==0||t%400===0}function Lt(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function ie(t){var e=+t,n=0;return e!==0&&isFinite(e)&&(n=Lt(e)),n}function Br(t,e){return function(n){return n!=null?(jv(this,t,n),N.updateOffset(this,e),this):Sa(this,t)}}function Sa(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function jv(t,e,n){t.isValid()&&!isNaN(n)&&(e==="FullYear"&&yl(t.year())&&t.month()===1&&t.date()===29?(n=ie(n),t._d["set"+(t._isUTC?"UTC":"")+e](n,t.month(),Il(n,t.month()))):t._d["set"+(t._isUTC?"UTC":"")+e](n))}function IC(t){return t=$t(t),cn(this[t])?this[t]():this}function SC(t,e){if(typeof t=="object"){t=Yh(t);var n=TC(t),s,r=n.length;for(s=0;s<r;s++)this[n[s].unit](t[n[s].unit])}else if(t=$t(t),cn(this[t]))return this[t](e);return this}var Wv=/\d/,Nt=/\d\d/,Yv=/\d{3}/,qh=/\d{4}/,vl=/[+-]?\d{6}/,Oe=/\d\d?/,qv=/\d\d\d\d?/,Kv=/\d\d\d\d\d\d?/,_l=/\d{1,3}/,Kh=/\d{1,4}/,wl=/[+-]?\d{1,6}/,Hr=/\d+/,El=/[+-]?\d+/,bC=/Z|[+-]\d\d:?\d\d/gi,Tl=/Z|[+-]\d\d(?::?\d\d)?/gi,kC=/[+-]?\d+(\.\d{1,3})?/,co=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,ba;ba={};function P(t,e,n){ba[t]=cn(e)?e:function(s,r){return s&&n?n:e}}function AC(t,e){return he(ba,t)?ba[t](e._strict,e._locale):new RegExp(CC(t))}function CC(t){return At(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,n,s,r,i){return n||s||r||i}))}function At(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var ec={};function ge(t,e){var n,s=e,r;for(typeof t=="string"&&(t=[t]),Cn(e)&&(s=function(i,o){o[e]=ie(i)}),r=t.length,n=0;n<r;n++)ec[t[n]]=s}function ho(t,e){ge(t,function(n,s,r,i){r._w=r._w||{},e(n,r._w,r,i)})}function DC(t,e,n){e!=null&&he(ec,t)&&ec[t](e,n._a,n,t)}var ct=0,_n=1,tn=2,We=3,jt=4,wn=5,ys=6,RC=7,OC=8;function NC(t,e){return(t%e+e)%e}var Fe;Array.prototype.indexOf?Fe=Array.prototype.indexOf:Fe=function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1};function Il(t,e){if(isNaN(t)||isNaN(e))return NaN;var n=NC(e,12);return t+=(e-n)/12,n===1?yl(t)?29:28:31-n%7%2}H("M",["MM",2],"Mo",function(){return this.month()+1});H("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)});H("MMMM",0,0,function(t){return this.localeData().months(this,t)});ft("month","M");dt("month",8);P("M",Oe);P("MM",Oe,Nt);P("MMM",function(t,e){return e.monthsShortRegex(t)});P("MMMM",function(t,e){return e.monthsRegex(t)});ge(["M","MM"],function(t,e){e[_n]=ie(t)-1});ge(["MMM","MMMM"],function(t,e,n,s){var r=n._locale.monthsParse(t,s,n._strict);r!=null?e[_n]=r:ee(n).invalidMonth=t});var MC="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),zv="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Gv=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,PC=co,xC=co;function LC(t,e){return t?Kt(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||Gv).test(e)?"format":"standalone"][t.month()]:Kt(this._months)?this._months:this._months.standalone}function FC(t,e){return t?Kt(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Gv.test(e)?"format":"standalone"][t.month()]:Kt(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function UC(t,e,n){var s,r,i,o=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)i=un([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(i,"").toLocaleLowerCase();return n?e==="MMM"?(r=Fe.call(this._shortMonthsParse,o),r!==-1?r:null):(r=Fe.call(this._longMonthsParse,o),r!==-1?r:null):e==="MMM"?(r=Fe.call(this._shortMonthsParse,o),r!==-1?r:(r=Fe.call(this._longMonthsParse,o),r!==-1?r:null)):(r=Fe.call(this._longMonthsParse,o),r!==-1?r:(r=Fe.call(this._shortMonthsParse,o),r!==-1?r:null))}function VC(t,e,n){var s,r,i;if(this._monthsParseExact)return UC.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(r=un([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),!n&&!this._monthsParse[s]&&(i="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[s]=new RegExp(i.replace(".",""),"i")),n&&e==="MMMM"&&this._longMonthsParse[s].test(t))return s;if(n&&e==="MMM"&&this._shortMonthsParse[s].test(t))return s;if(!n&&this._monthsParse[s].test(t))return s}}function Xv(t,e){var n;if(!t.isValid())return t;if(typeof e=="string"){if(/^\d+$/.test(e))e=ie(e);else if(e=t.localeData().monthsParse(e),!Cn(e))return t}return n=Math.min(t.date(),Il(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function Qv(t){return t!=null?(Xv(this,t),N.updateOffset(this,!0),this):Sa(this,"Month")}function $C(){return Il(this.year(),this.month())}function BC(t){return this._monthsParseExact?(he(this,"_monthsRegex")||Jv.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(he(this,"_monthsShortRegex")||(this._monthsShortRegex=PC),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function HC(t){return this._monthsParseExact?(he(this,"_monthsRegex")||Jv.call(this),t?this._monthsStrictRegex:this._monthsRegex):(he(this,"_monthsRegex")||(this._monthsRegex=xC),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function Jv(){function t(o,a){return a.length-o.length}var e=[],n=[],s=[],r,i;for(r=0;r<12;r++)i=un([2e3,r]),e.push(this.monthsShort(i,"")),n.push(this.months(i,"")),s.push(this.months(i,"")),s.push(this.monthsShort(i,""));for(e.sort(t),n.sort(t),s.sort(t),r=0;r<12;r++)e[r]=At(e[r]),n[r]=At(n[r]);for(r=0;r<24;r++)s[r]=At(s[r]);this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+e.join("|")+")","i")}H("Y",0,0,function(){var t=this.year();return t<=9999?ln(t,4):"+"+t});H(0,["YY",2],0,function(){return this.year()%100});H(0,["YYYY",4],0,"year");H(0,["YYYYY",5],0,"year");H(0,["YYYYYY",6,!0],0,"year");ft("year","y");dt("year",1);P("Y",El);P("YY",Oe,Nt);P("YYYY",Kh,qh);P("YYYYY",wl,vl);P("YYYYYY",wl,vl);ge(["YYYYY","YYYYYY"],ct);ge("YYYY",function(t,e){e[ct]=t.length===2?N.parseTwoDigitYear(t):ie(t)});ge("YY",function(t,e){e[ct]=N.parseTwoDigitYear(t)});ge("Y",function(t,e){e[ct]=parseInt(t,10)});function di(t){return yl(t)?366:365}N.parseTwoDigitYear=function(t){return ie(t)+(ie(t)>68?1900:2e3)};var Zv=Br("FullYear",!0);function jC(){return yl(this.year())}function WC(t,e,n,s,r,i,o){var a;return t<100&&t>=0?(a=new Date(t+400,e,n,s,r,i,o),isFinite(a.getFullYear())&&a.setFullYear(t)):a=new Date(t,e,n,s,r,i,o),a}function Pi(t){var e,n;return t<100&&t>=0?(n=Array.prototype.slice.call(arguments),n[0]=t+400,e=new Date(Date.UTC.apply(null,n)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)):e=new Date(Date.UTC.apply(null,arguments)),e}function ka(t,e,n){var s=7+e-n,r=(7+Pi(t,0,s).getUTCDay()-e)%7;return-r+s-1}function e_(t,e,n,s,r){var i=(7+n-s)%7,o=ka(t,s,r),a=1+7*(e-1)+i+o,l,u;return a<=0?(l=t-1,u=di(l)+a):a>di(t)?(l=t+1,u=a-di(t)):(l=t,u=a),{year:l,dayOfYear:u}}function xi(t,e,n){var s=ka(t.year(),e,n),r=Math.floor((t.dayOfYear()-s-1)/7)+1,i,o;return r<1?(o=t.year()-1,i=r+Sn(o,e,n)):r>Sn(t.year(),e,n)?(i=r-Sn(t.year(),e,n),o=t.year()+1):(o=t.year(),i=r),{week:i,year:o}}function Sn(t,e,n){var s=ka(t,e,n),r=ka(t+1,e,n);return(di(t)-s+r)/7}H("w",["ww",2],"wo","week");H("W",["WW",2],"Wo","isoWeek");ft("week","w");ft("isoWeek","W");dt("week",5);dt("isoWeek",5);P("w",Oe);P("ww",Oe,Nt);P("W",Oe);P("WW",Oe,Nt);ho(["w","ww","W","WW"],function(t,e,n,s){e[s.substr(0,1)]=ie(t)});function YC(t){return xi(t,this._week.dow,this._week.doy).week}var qC={dow:0,doy:6};function KC(){return this._week.dow}function zC(){return this._week.doy}function GC(t){var e=this.localeData().week(this);return t==null?e:this.add((t-e)*7,"d")}function XC(t){var e=xi(this,1,4).week;return t==null?e:this.add((t-e)*7,"d")}H("d",0,"do","day");H("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)});H("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)});H("dddd",0,0,function(t){return this.localeData().weekdays(this,t)});H("e",0,0,"weekday");H("E",0,0,"isoWeekday");ft("day","d");ft("weekday","e");ft("isoWeekday","E");dt("day",11);dt("weekday",11);dt("isoWeekday",11);P("d",Oe);P("e",Oe);P("E",Oe);P("dd",function(t,e){return e.weekdaysMinRegex(t)});P("ddd",function(t,e){return e.weekdaysShortRegex(t)});P("dddd",function(t,e){return e.weekdaysRegex(t)});ho(["dd","ddd","dddd"],function(t,e,n,s){var r=n._locale.weekdaysParse(t,s,n._strict);r!=null?e.d=r:ee(n).invalidWeekday=t});ho(["d","e","E"],function(t,e,n,s){e[s]=ie(t)});function QC(t,e){return typeof t!="string"?t:isNaN(t)?(t=e.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function JC(t,e){return typeof t=="string"?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function zh(t,e){return t.slice(e,7).concat(t.slice(0,e))}var ZC="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),t_="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),eD="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),tD=co,nD=co,sD=co;function rD(t,e){var n=Kt(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(e)?"format":"standalone"];return t===!0?zh(n,this._week.dow):t?n[t.day()]:n}function iD(t){return t===!0?zh(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function oD(t){return t===!0?zh(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function aD(t,e,n){var s,r,i,o=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)i=un([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(i,"").toLocaleLowerCase();return n?e==="dddd"?(r=Fe.call(this._weekdaysParse,o),r!==-1?r:null):e==="ddd"?(r=Fe.call(this._shortWeekdaysParse,o),r!==-1?r:null):(r=Fe.call(this._minWeekdaysParse,o),r!==-1?r:null):e==="dddd"?(r=Fe.call(this._weekdaysParse,o),r!==-1||(r=Fe.call(this._shortWeekdaysParse,o),r!==-1)?r:(r=Fe.call(this._minWeekdaysParse,o),r!==-1?r:null)):e==="ddd"?(r=Fe.call(this._shortWeekdaysParse,o),r!==-1||(r=Fe.call(this._weekdaysParse,o),r!==-1)?r:(r=Fe.call(this._minWeekdaysParse,o),r!==-1?r:null)):(r=Fe.call(this._minWeekdaysParse,o),r!==-1||(r=Fe.call(this._weekdaysParse,o),r!==-1)?r:(r=Fe.call(this._shortWeekdaysParse,o),r!==-1?r:null))}function lD(t,e,n){var s,r,i;if(this._weekdaysParseExact)return aD.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(r=un([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(i="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[s]=new RegExp(i.replace(".",""),"i")),n&&e==="dddd"&&this._fullWeekdaysParse[s].test(t))return s;if(n&&e==="ddd"&&this._shortWeekdaysParse[s].test(t))return s;if(n&&e==="dd"&&this._minWeekdaysParse[s].test(t))return s;if(!n&&this._weekdaysParse[s].test(t))return s}}function uD(t){if(!this.isValid())return t!=null?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return t!=null?(t=QC(t,this.localeData()),this.add(t-e,"d")):e}function cD(t){if(!this.isValid())return t!=null?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return t==null?e:this.add(t-e,"d")}function hD(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var e=JC(t,this.localeData());return this.day(this.day()%7?e:e-7)}else return this.day()||7}function fD(t){return this._weekdaysParseExact?(he(this,"_weekdaysRegex")||Gh.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(he(this,"_weekdaysRegex")||(this._weekdaysRegex=tD),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function dD(t){return this._weekdaysParseExact?(he(this,"_weekdaysRegex")||Gh.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(he(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=nD),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function pD(t){return this._weekdaysParseExact?(he(this,"_weekdaysRegex")||Gh.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(he(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=sD),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Gh(){function t(c,h){return h.length-c.length}var e=[],n=[],s=[],r=[],i,o,a,l,u;for(i=0;i<7;i++)o=un([2e3,1]).day(i),a=At(this.weekdaysMin(o,"")),l=At(this.weekdaysShort(o,"")),u=At(this.weekdays(o,"")),e.push(a),n.push(l),s.push(u),r.push(a),r.push(l),r.push(u);e.sort(t),n.sort(t),s.sort(t),r.sort(t),this._weekdaysRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+e.join("|")+")","i")}function Xh(){return this.hours()%12||12}function mD(){return this.hours()||24}H("H",["HH",2],0,"hour");H("h",["hh",2],0,Xh);H("k",["kk",2],0,mD);H("hmm",0,0,function(){return""+Xh.apply(this)+ln(this.minutes(),2)});H("hmmss",0,0,function(){return""+Xh.apply(this)+ln(this.minutes(),2)+ln(this.seconds(),2)});H("Hmm",0,0,function(){return""+this.hours()+ln(this.minutes(),2)});H("Hmmss",0,0,function(){return""+this.hours()+ln(this.minutes(),2)+ln(this.seconds(),2)});function n_(t,e){H(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}n_("a",!0);n_("A",!1);ft("hour","h");dt("hour",13);function s_(t,e){return e._meridiemParse}P("a",s_);P("A",s_);P("H",Oe);P("h",Oe);P("k",Oe);P("HH",Oe,Nt);P("hh",Oe,Nt);P("kk",Oe,Nt);P("hmm",qv);P("hmmss",Kv);P("Hmm",qv);P("Hmmss",Kv);ge(["H","HH"],We);ge(["k","kk"],function(t,e,n){var s=ie(t);e[We]=s===24?0:s});ge(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t});ge(["h","hh"],function(t,e,n){e[We]=ie(t),ee(n).bigHour=!0});ge("hmm",function(t,e,n){var s=t.length-2;e[We]=ie(t.substr(0,s)),e[jt]=ie(t.substr(s)),ee(n).bigHour=!0});ge("hmmss",function(t,e,n){var s=t.length-4,r=t.length-2;e[We]=ie(t.substr(0,s)),e[jt]=ie(t.substr(s,2)),e[wn]=ie(t.substr(r)),ee(n).bigHour=!0});ge("Hmm",function(t,e,n){var s=t.length-2;e[We]=ie(t.substr(0,s)),e[jt]=ie(t.substr(s))});ge("Hmmss",function(t,e,n){var s=t.length-4,r=t.length-2;e[We]=ie(t.substr(0,s)),e[jt]=ie(t.substr(s,2)),e[wn]=ie(t.substr(r))});function gD(t){return(t+"").toLowerCase().charAt(0)==="p"}var yD=/[ap]\.?m?\.?/i,vD=Br("Hours",!0);function _D(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}var r_={calendar:lC,longDateFormat:fC,invalidDate:pC,ordinal:gC,dayOfMonthOrdinalParse:yC,relativeTime:_C,months:MC,monthsShort:zv,week:qC,weekdays:ZC,weekdaysMin:eD,weekdaysShort:t_,meridiemParse:yD},Me={},qr={},Li;function wD(t,e){var n,s=Math.min(t.length,e.length);for(n=0;n<s;n+=1)if(t[n]!==e[n])return n;return s}function wp(t){return t&&t.toLowerCase().replace("_","-")}function ED(t){for(var e=0,n,s,r,i;e<t.length;){for(i=wp(t[e]).split("-"),n=i.length,s=wp(t[e+1]),s=s?s.split("-"):null;n>0;){if(r=Sl(i.slice(0,n).join("-")),r)return r;if(s&&s.length>=n&&wD(i,s)>=n-1)break;n--}e++}return Li}function TD(t){return t.match("^[^/\\\\]*$")!=null}function Sl(t){var e=null,n;if(Me[t]===void 0&&typeof module!="undefined"&&module&&module.exports&&TD(t))try{e=Li._abbr,n=require,n("./locale/"+t),Qn(e)}catch{Me[t]=null}return Me[t]}function Qn(t,e){var n;return t&&(Tt(e)?n=Rn(t):n=Qh(t,e),n?Li=n:typeof console!="undefined"&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),Li._abbr}function Qh(t,e){if(e!==null){var n,s=r_;if(e.abbr=t,Me[t]!=null)$v("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=Me[t]._config;else if(e.parentLocale!=null)if(Me[e.parentLocale]!=null)s=Me[e.parentLocale]._config;else if(n=Sl(e.parentLocale),n!=null)s=n._config;else return qr[e.parentLocale]||(qr[e.parentLocale]=[]),qr[e.parentLocale].push({name:t,config:e}),null;return Me[t]=new jh(Ju(s,e)),qr[t]&&qr[t].forEach(function(r){Qh(r.name,r.config)}),Qn(t),Me[t]}else return delete Me[t],null}function ID(t,e){if(e!=null){var n,s,r=r_;Me[t]!=null&&Me[t].parentLocale!=null?Me[t].set(Ju(Me[t]._config,e)):(s=Sl(t),s!=null&&(r=s._config),e=Ju(r,e),s==null&&(e.abbr=t),n=new jh(e),n.parentLocale=Me[t],Me[t]=n),Qn(t)}else Me[t]!=null&&(Me[t].parentLocale!=null?(Me[t]=Me[t].parentLocale,t===Qn()&&Qn(t)):Me[t]!=null&&delete Me[t]);return Me[t]}function Rn(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Li;if(!Kt(t)){if(e=Sl(t),e)return e;t=[t]}return ED(t)}function SD(){return Zu(Me)}function Jh(t){var e,n=t._a;return n&&ee(t).overflow===-2&&(e=n[_n]<0||n[_n]>11?_n:n[tn]<1||n[tn]>Il(n[ct],n[_n])?tn:n[We]<0||n[We]>24||n[We]===24&&(n[jt]!==0||n[wn]!==0||n[ys]!==0)?We:n[jt]<0||n[jt]>59?jt:n[wn]<0||n[wn]>59?wn:n[ys]<0||n[ys]>999?ys:-1,ee(t)._overflowDayOfYear&&(e<ct||e>tn)&&(e=tn),ee(t)._overflowWeeks&&e===-1&&(e=RC),ee(t)._overflowWeekday&&e===-1&&(e=OC),ee(t).overflow=e),t}var bD=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,kD=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,AD=/Z|[+-]\d\d(?::?\d\d)?/,So=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],nu=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],CD=/^\/?Date\((-?\d+)/i,DD=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,RD={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function i_(t){var e,n,s=t._i,r=bD.exec(s)||kD.exec(s),i,o,a,l,u=So.length,c=nu.length;if(r){for(ee(t).iso=!0,e=0,n=u;e<n;e++)if(So[e][1].exec(r[1])){o=So[e][0],i=So[e][2]!==!1;break}if(o==null){t._isValid=!1;return}if(r[3]){for(e=0,n=c;e<n;e++)if(nu[e][1].exec(r[3])){a=(r[2]||" ")+nu[e][0];break}if(a==null){t._isValid=!1;return}}if(!i&&a!=null){t._isValid=!1;return}if(r[4])if(AD.exec(r[4]))l="Z";else{t._isValid=!1;return}t._f=o+(a||"")+(l||""),ef(t)}else t._isValid=!1}function OD(t,e,n,s,r,i){var o=[ND(t),zv.indexOf(e),parseInt(n,10),parseInt(s,10),parseInt(r,10)];return i&&o.push(parseInt(i,10)),o}function ND(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}function MD(t){return t.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function PD(t,e,n){if(t){var s=t_.indexOf(t),r=new Date(e[0],e[1],e[2]).getDay();if(s!==r)return ee(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function xD(t,e,n){if(t)return RD[t];if(e)return 0;var s=parseInt(n,10),r=s%100,i=(s-r)/100;return i*60+r}function o_(t){var e=DD.exec(MD(t._i)),n;if(e){if(n=OD(e[4],e[3],e[2],e[5],e[6],e[7]),!PD(e[1],n,t))return;t._a=n,t._tzm=xD(e[8],e[9],e[10]),t._d=Pi.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),ee(t).rfc2822=!0}else t._isValid=!1}function LD(t){var e=CD.exec(t._i);if(e!==null){t._d=new Date(+e[1]);return}if(i_(t),t._isValid===!1)delete t._isValid;else return;if(o_(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:N.createFromInputFallback(t)}N.createFromInputFallback=Vt("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function Gs(t,e,n){return t!=null?t:e!=null?e:n}function FD(t){var e=new Date(N.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function Zh(t){var e,n,s=[],r,i,o;if(!t._d){for(r=FD(t),t._w&&t._a[tn]==null&&t._a[_n]==null&&UD(t),t._dayOfYear!=null&&(o=Gs(t._a[ct],r[ct]),(t._dayOfYear>di(o)||t._dayOfYear===0)&&(ee(t)._overflowDayOfYear=!0),n=Pi(o,0,t._dayOfYear),t._a[_n]=n.getUTCMonth(),t._a[tn]=n.getUTCDate()),e=0;e<3&&t._a[e]==null;++e)t._a[e]=s[e]=r[e];for(;e<7;e++)t._a[e]=s[e]=t._a[e]==null?e===2?1:0:t._a[e];t._a[We]===24&&t._a[jt]===0&&t._a[wn]===0&&t._a[ys]===0&&(t._nextDay=!0,t._a[We]=0),t._d=(t._useUTC?Pi:WC).apply(null,s),i=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[We]=24),t._w&&typeof t._w.d!="undefined"&&t._w.d!==i&&(ee(t).weekdayMismatch=!0)}}function UD(t){var e,n,s,r,i,o,a,l,u;e=t._w,e.GG!=null||e.W!=null||e.E!=null?(i=1,o=4,n=Gs(e.GG,t._a[ct],xi(Re(),1,4).year),s=Gs(e.W,1),r=Gs(e.E,1),(r<1||r>7)&&(l=!0)):(i=t._locale._week.dow,o=t._locale._week.doy,u=xi(Re(),i,o),n=Gs(e.gg,t._a[ct],u.year),s=Gs(e.w,u.week),e.d!=null?(r=e.d,(r<0||r>6)&&(l=!0)):e.e!=null?(r=e.e+i,(e.e<0||e.e>6)&&(l=!0)):r=i),s<1||s>Sn(n,i,o)?ee(t)._overflowWeeks=!0:l!=null?ee(t)._overflowWeekday=!0:(a=e_(n,s,r,i,o),t._a[ct]=a.year,t._dayOfYear=a.dayOfYear)}N.ISO_8601=function(){};N.RFC_2822=function(){};function ef(t){if(t._f===N.ISO_8601){i_(t);return}if(t._f===N.RFC_2822){o_(t);return}t._a=[],ee(t).empty=!0;var e=""+t._i,n,s,r,i,o,a=e.length,l=0,u,c;for(r=Bv(t._f,t._locale).match(Wh)||[],c=r.length,n=0;n<c;n++)i=r[n],s=(e.match(AC(i,t))||[])[0],s&&(o=e.substr(0,e.indexOf(s)),o.length>0&&ee(t).unusedInput.push(o),e=e.slice(e.indexOf(s)+s.length),l+=s.length),or[i]?(s?ee(t).empty=!1:ee(t).unusedTokens.push(i),DC(i,s,t)):t._strict&&!s&&ee(t).unusedTokens.push(i);ee(t).charsLeftOver=a-l,e.length>0&&ee(t).unusedInput.push(e),t._a[We]<=12&&ee(t).bigHour===!0&&t._a[We]>0&&(ee(t).bigHour=void 0),ee(t).parsedDateParts=t._a.slice(0),ee(t).meridiem=t._meridiem,t._a[We]=VD(t._locale,t._a[We],t._meridiem),u=ee(t).era,u!==null&&(t._a[ct]=t._locale.erasConvertYear(u,t._a[ct])),Zh(t),Jh(t)}function VD(t,e,n){var s;return n==null?e:t.meridiemHour!=null?t.meridiemHour(e,n):(t.isPM!=null&&(s=t.isPM(n),s&&e<12&&(e+=12),!s&&e===12&&(e=0)),e)}function $D(t){var e,n,s,r,i,o,a=!1,l=t._f.length;if(l===0){ee(t).invalidFormat=!0,t._d=new Date(NaN);return}for(r=0;r<l;r++)i=0,o=!1,e=Hh({},t),t._useUTC!=null&&(e._useUTC=t._useUTC),e._f=t._f[r],ef(e),Bh(e)&&(o=!0),i+=ee(e).charsLeftOver,i+=ee(e).unusedTokens.length*10,ee(e).score=i,a?i<s&&(s=i,n=e):(s==null||i<s||o)&&(s=i,n=e,o&&(a=!0));Wn(t,n||e)}function BD(t){if(!t._d){var e=Yh(t._i),n=e.day===void 0?e.date:e.day;t._a=Uv([e.year,e.month,n,e.hour,e.minute,e.second,e.millisecond],function(s){return s&&parseInt(s,10)}),Zh(t)}}function HD(t){var e=new uo(Jh(a_(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function a_(t){var e=t._i,n=t._f;return t._locale=t._locale||Rn(t._l),e===null||n===void 0&&e===""?gl({nullInput:!0}):(typeof e=="string"&&(t._i=e=t._locale.preparse(e)),zt(e)?new uo(Jh(e)):(lo(e)?t._d=e:Kt(n)?$D(t):n?ef(t):jD(t),Bh(t)||(t._d=null),t))}function jD(t){var e=t._i;Tt(e)?t._d=new Date(N.now()):lo(e)?t._d=new Date(e.valueOf()):typeof e=="string"?LD(t):Kt(e)?(t._a=Uv(e.slice(0),function(n){return parseInt(n,10)}),Zh(t)):Is(e)?BD(t):Cn(e)?t._d=new Date(e):N.createFromInputFallback(t)}function l_(t,e,n,s,r){var i={};return(e===!0||e===!1)&&(s=e,e=void 0),(n===!0||n===!1)&&(s=n,n=void 0),(Is(t)&&$h(t)||Kt(t)&&t.length===0)&&(t=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=r,i._l=n,i._i=t,i._f=e,i._strict=s,HD(i)}function Re(t,e,n,s){return l_(t,e,n,s,!1)}var WD=Vt("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Re.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:gl()}),YD=Vt("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Re.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:gl()});function u_(t,e){var n,s;if(e.length===1&&Kt(e[0])&&(e=e[0]),!e.length)return Re();for(n=e[0],s=1;s<e.length;++s)(!e[s].isValid()||e[s][t](n))&&(n=e[s]);return n}function qD(){var t=[].slice.call(arguments,0);return u_("isBefore",t)}function KD(){var t=[].slice.call(arguments,0);return u_("isAfter",t)}var zD=function(){return Date.now?Date.now():+new Date},Kr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function GD(t){var e,n=!1,s,r=Kr.length;for(e in t)if(he(t,e)&&!(Fe.call(Kr,e)!==-1&&(t[e]==null||!isNaN(t[e]))))return!1;for(s=0;s<r;++s)if(t[Kr[s]]){if(n)return!1;parseFloat(t[Kr[s]])!==ie(t[Kr[s]])&&(n=!0)}return!0}function XD(){return this._isValid}function QD(){return Gt(NaN)}function bl(t){var e=Yh(t),n=e.year||0,s=e.quarter||0,r=e.month||0,i=e.week||e.isoWeek||0,o=e.day||0,a=e.hour||0,l=e.minute||0,u=e.second||0,c=e.millisecond||0;this._isValid=GD(e),this._milliseconds=+c+u*1e3+l*6e4+a*1e3*60*60,this._days=+o+i*7,this._months=+r+s*3+n*12,this._data={},this._locale=Rn(),this._bubble()}function $o(t){return t instanceof bl}function tc(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function JD(t,e,n){var s=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),i=0,o;for(o=0;o<s;o++)(n&&t[o]!==e[o]||!n&&ie(t[o])!==ie(e[o]))&&i++;return i+r}function c_(t,e){H(t,0,0,function(){var n=this.utcOffset(),s="+";return n<0&&(n=-n,s="-"),s+ln(~~(n/60),2)+e+ln(~~n%60,2)})}c_("Z",":");c_("ZZ","");P("Z",Tl);P("ZZ",Tl);ge(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=tf(Tl,t)});var ZD=/([\+\-]|\d\d)/gi;function tf(t,e){var n=(e||"").match(t),s,r,i;return n===null?null:(s=n[n.length-1]||[],r=(s+"").match(ZD)||["-",0,0],i=+(r[1]*60)+ie(r[2]),i===0?0:r[0]==="+"?i:-i)}function nf(t,e){var n,s;return e._isUTC?(n=e.clone(),s=(zt(t)||lo(t)?t.valueOf():Re(t).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),N.updateOffset(n,!1),n):Re(t).local()}function nc(t){return-Math.round(t._d.getTimezoneOffset())}N.updateOffset=function(){};function eR(t,e,n){var s=this._offset||0,r;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=tf(Tl,t),t===null)return this}else Math.abs(t)<16&&!n&&(t=t*60);return!this._isUTC&&e&&(r=nc(this)),this._offset=t,this._isUTC=!0,r!=null&&this.add(r,"m"),s!==t&&(!e||this._changeInProgress?d_(this,Gt(t-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,N.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:nc(this)}function tR(t,e){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function nR(t){return this.utcOffset(0,t)}function sR(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(nc(this),"m")),this}function rR(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=tf(bC,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function iR(t){return this.isValid()?(t=t?Re(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function oR(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function aR(){if(!Tt(this._isDSTShifted))return this._isDSTShifted;var t={},e;return Hh(t,this),t=a_(t),t._a?(e=t._isUTC?un(t._a):Re(t._a),this._isDSTShifted=this.isValid()&&JD(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function lR(){return this.isValid()?!this._isUTC:!1}function uR(){return this.isValid()?this._isUTC:!1}function h_(){return this.isValid()?this._isUTC&&this._offset===0:!1}var cR=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,hR=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Gt(t,e){var n=t,s=null,r,i,o;return $o(t)?n={ms:t._milliseconds,d:t._days,M:t._months}:Cn(t)||!isNaN(+t)?(n={},e?n[e]=+t:n.milliseconds=+t):(s=cR.exec(t))?(r=s[1]==="-"?-1:1,n={y:0,d:ie(s[tn])*r,h:ie(s[We])*r,m:ie(s[jt])*r,s:ie(s[wn])*r,ms:ie(tc(s[ys]*1e3))*r}):(s=hR.exec(t))?(r=s[1]==="-"?-1:1,n={y:as(s[2],r),M:as(s[3],r),w:as(s[4],r),d:as(s[5],r),h:as(s[6],r),m:as(s[7],r),s:as(s[8],r)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(o=fR(Re(n.from),Re(n.to)),n={},n.ms=o.milliseconds,n.M=o.months),i=new bl(n),$o(t)&&he(t,"_locale")&&(i._locale=t._locale),$o(t)&&he(t,"_isValid")&&(i._isValid=t._isValid),i}Gt.fn=bl.prototype;Gt.invalid=QD;function as(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Ep(t,e){var n={};return n.months=e.month()-t.month()+(e.year()-t.year())*12,t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function fR(t,e){var n;return t.isValid()&&e.isValid()?(e=nf(e,t),t.isBefore(e)?n=Ep(t,e):(n=Ep(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function f_(t,e){return function(n,s){var r,i;return s!==null&&!isNaN(+s)&&($v(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=s,s=i),r=Gt(n,s),d_(this,r,t),this}}function d_(t,e,n,s){var r=e._milliseconds,i=tc(e._days),o=tc(e._months);!t.isValid()||(s=s==null?!0:s,o&&Xv(t,Sa(t,"Month")+o*n),i&&jv(t,"Date",Sa(t,"Date")+i*n),r&&t._d.setTime(t._d.valueOf()+r*n),s&&N.updateOffset(t,i||o))}var dR=f_(1,"add"),pR=f_(-1,"subtract");function p_(t){return typeof t=="string"||t instanceof String}function mR(t){return zt(t)||lo(t)||p_(t)||Cn(t)||yR(t)||gR(t)||t===null||t===void 0}function gR(t){var e=Is(t)&&!$h(t),n=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],r,i,o=s.length;for(r=0;r<o;r+=1)i=s[r],n=n||he(t,i);return e&&n}function yR(t){var e=Kt(t),n=!1;return e&&(n=t.filter(function(s){return!Cn(s)&&p_(t)}).length===0),e&&n}function vR(t){var e=Is(t)&&!$h(t),n=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],r,i;for(r=0;r<s.length;r+=1)i=s[r],n=n||he(t,i);return e&&n}function _R(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function wR(t,e){arguments.length===1&&(arguments[0]?mR(arguments[0])?(t=arguments[0],e=void 0):vR(arguments[0])&&(e=arguments[0],t=void 0):(t=void 0,e=void 0));var n=t||Re(),s=nf(n,this).startOf("day"),r=N.calendarFormat(this,s)||"sameElse",i=e&&(cn(e[r])?e[r].call(this,n):e[r]);return this.format(i||this.localeData().calendar(r,this,Re(n)))}function ER(){return new uo(this)}function TR(t,e){var n=zt(t)?t:Re(t);return this.isValid()&&n.isValid()?(e=$t(e)||"millisecond",e==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf()):!1}function IR(t,e){var n=zt(t)?t:Re(t);return this.isValid()&&n.isValid()?(e=$t(e)||"millisecond",e==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf()):!1}function SR(t,e,n,s){var r=zt(t)?t:Re(t),i=zt(e)?e:Re(e);return this.isValid()&&r.isValid()&&i.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(r,n):!this.isBefore(r,n))&&(s[1]===")"?this.isBefore(i,n):!this.isAfter(i,n))):!1}function bR(t,e){var n=zt(t)?t:Re(t),s;return this.isValid()&&n.isValid()?(e=$t(e)||"millisecond",e==="millisecond"?this.valueOf()===n.valueOf():(s=n.valueOf(),this.clone().startOf(e).valueOf()<=s&&s<=this.clone().endOf(e).valueOf())):!1}function kR(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function AR(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function CR(t,e,n){var s,r,i;if(!this.isValid())return NaN;if(s=nf(t,this),!s.isValid())return NaN;switch(r=(s.utcOffset()-this.utcOffset())*6e4,e=$t(e),e){case"year":i=Bo(this,s)/12;break;case"month":i=Bo(this,s);break;case"quarter":i=Bo(this,s)/3;break;case"second":i=(this-s)/1e3;break;case"minute":i=(this-s)/6e4;break;case"hour":i=(this-s)/36e5;break;case"day":i=(this-s-r)/864e5;break;case"week":i=(this-s-r)/6048e5;break;default:i=this-s}return n?i:Lt(i)}function Bo(t,e){if(t.date()<e.date())return-Bo(e,t);var n=(e.year()-t.year())*12+(e.month()-t.month()),s=t.clone().add(n,"months"),r,i;return e-s<0?(r=t.clone().add(n-1,"months"),i=(e-s)/(s-r)):(r=t.clone().add(n+1,"months"),i=(e-s)/(r-s)),-(n+i)||0}N.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";N.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function DR(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function RR(t){if(!this.isValid())return null;var e=t!==!0,n=e?this.clone().utc():this;return n.year()<0||n.year()>9999?Vo(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):cn(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Vo(n,"Z")):Vo(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function OR(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="",n,s,r,i;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",e="Z"),n="["+t+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",i=e+'[")]',this.format(n+s+r+i)}function NR(t){t||(t=this.isUtc()?N.defaultFormatUtc:N.defaultFormat);var e=Vo(this,t);return this.localeData().postformat(e)}function MR(t,e){return this.isValid()&&(zt(t)&&t.isValid()||Re(t).isValid())?Gt({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function PR(t){return this.from(Re(),t)}function xR(t,e){return this.isValid()&&(zt(t)&&t.isValid()||Re(t).isValid())?Gt({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function LR(t){return this.to(Re(),t)}function m_(t){var e;return t===void 0?this._locale._abbr:(e=Rn(t),e!=null&&(this._locale=e),this)}var g_=Vt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function y_(){return this._locale}var Aa=1e3,ar=60*Aa,Ca=60*ar,v_=(365*400+97)*24*Ca;function lr(t,e){return(t%e+e)%e}function __(t,e,n){return t<100&&t>=0?new Date(t+400,e,n)-v_:new Date(t,e,n).valueOf()}function w_(t,e,n){return t<100&&t>=0?Date.UTC(t+400,e,n)-v_:Date.UTC(t,e,n)}function FR(t){var e,n;if(t=$t(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?w_:__,t){case"year":e=n(this.year(),0,1);break;case"quarter":e=n(this.year(),this.month()-this.month()%3,1);break;case"month":e=n(this.year(),this.month(),1);break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=n(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=lr(e+(this._isUTC?0:this.utcOffset()*ar),Ca);break;case"minute":e=this._d.valueOf(),e-=lr(e,ar);break;case"second":e=this._d.valueOf(),e-=lr(e,Aa);break}return this._d.setTime(e),N.updateOffset(this,!0),this}function UR(t){var e,n;if(t=$t(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?w_:__,t){case"year":e=n(this.year()+1,0,1)-1;break;case"quarter":e=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=n(this.year(),this.month()+1,1)-1;break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=Ca-lr(e+(this._isUTC?0:this.utcOffset()*ar),Ca)-1;break;case"minute":e=this._d.valueOf(),e+=ar-lr(e,ar)-1;break;case"second":e=this._d.valueOf(),e+=Aa-lr(e,Aa)-1;break}return this._d.setTime(e),N.updateOffset(this,!0),this}function VR(){return this._d.valueOf()-(this._offset||0)*6e4}function $R(){return Math.floor(this.valueOf()/1e3)}function BR(){return new Date(this.valueOf())}function HR(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function jR(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function WR(){return this.isValid()?this.toISOString():null}function YR(){return Bh(this)}function qR(){return Wn({},ee(this))}function KR(){return ee(this).overflow}function zR(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}H("N",0,0,"eraAbbr");H("NN",0,0,"eraAbbr");H("NNN",0,0,"eraAbbr");H("NNNN",0,0,"eraName");H("NNNNN",0,0,"eraNarrow");H("y",["y",1],"yo","eraYear");H("y",["yy",2],0,"eraYear");H("y",["yyy",3],0,"eraYear");H("y",["yyyy",4],0,"eraYear");P("N",sf);P("NN",sf);P("NNN",sf);P("NNNN",iO);P("NNNNN",oO);ge(["N","NN","NNN","NNNN","NNNNN"],function(t,e,n,s){var r=n._locale.erasParse(t,s,n._strict);r?ee(n).era=r:ee(n).invalidEra=t});P("y",Hr);P("yy",Hr);P("yyy",Hr);P("yyyy",Hr);P("yo",aO);ge(["y","yy","yyy","yyyy"],ct);ge(["yo"],function(t,e,n,s){var r;n._locale._eraYearOrdinalRegex&&(r=t.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?e[ct]=n._locale.eraYearOrdinalParse(t,r):e[ct]=parseInt(t,10)});function GR(t,e){var n,s,r,i=this._eras||Rn("en")._eras;for(n=0,s=i.length;n<s;++n){switch(typeof i[n].since){case"string":r=N(i[n].since).startOf("day"),i[n].since=r.valueOf();break}switch(typeof i[n].until){case"undefined":i[n].until=1/0;break;case"string":r=N(i[n].until).startOf("day").valueOf(),i[n].until=r.valueOf();break}}return i}function XR(t,e,n){var s,r,i=this.eras(),o,a,l;for(t=t.toUpperCase(),s=0,r=i.length;s<r;++s)if(o=i[s].name.toUpperCase(),a=i[s].abbr.toUpperCase(),l=i[s].narrow.toUpperCase(),n)switch(e){case"N":case"NN":case"NNN":if(a===t)return i[s];break;case"NNNN":if(o===t)return i[s];break;case"NNNNN":if(l===t)return i[s];break}else if([o,a,l].indexOf(t)>=0)return i[s]}function QR(t,e){var n=t.since<=t.until?1:-1;return e===void 0?N(t.since).year():N(t.since).year()+(e-t.offset)*n}function JR(){var t,e,n,s=this.localeData().eras();for(t=0,e=s.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),s[t].since<=n&&n<=s[t].until||s[t].until<=n&&n<=s[t].since)return s[t].name;return""}function ZR(){var t,e,n,s=this.localeData().eras();for(t=0,e=s.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),s[t].since<=n&&n<=s[t].until||s[t].until<=n&&n<=s[t].since)return s[t].narrow;return""}function eO(){var t,e,n,s=this.localeData().eras();for(t=0,e=s.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),s[t].since<=n&&n<=s[t].until||s[t].until<=n&&n<=s[t].since)return s[t].abbr;return""}function tO(){var t,e,n,s,r=this.localeData().eras();for(t=0,e=r.length;t<e;++t)if(n=r[t].since<=r[t].until?1:-1,s=this.clone().startOf("day").valueOf(),r[t].since<=s&&s<=r[t].until||r[t].until<=s&&s<=r[t].since)return(this.year()-N(r[t].since).year())*n+r[t].offset;return this.year()}function nO(t){return he(this,"_erasNameRegex")||rf.call(this),t?this._erasNameRegex:this._erasRegex}function sO(t){return he(this,"_erasAbbrRegex")||rf.call(this),t?this._erasAbbrRegex:this._erasRegex}function rO(t){return he(this,"_erasNarrowRegex")||rf.call(this),t?this._erasNarrowRegex:this._erasRegex}function sf(t,e){return e.erasAbbrRegex(t)}function iO(t,e){return e.erasNameRegex(t)}function oO(t,e){return e.erasNarrowRegex(t)}function aO(t,e){return e._eraYearOrdinalRegex||Hr}function rf(){var t=[],e=[],n=[],s=[],r,i,o=this.eras();for(r=0,i=o.length;r<i;++r)e.push(At(o[r].name)),t.push(At(o[r].abbr)),n.push(At(o[r].narrow)),s.push(At(o[r].name)),s.push(At(o[r].abbr)),s.push(At(o[r].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+e.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}H(0,["gg",2],0,function(){return this.weekYear()%100});H(0,["GG",2],0,function(){return this.isoWeekYear()%100});function kl(t,e){H(0,[t,t.length],0,e)}kl("gggg","weekYear");kl("ggggg","weekYear");kl("GGGG","isoWeekYear");kl("GGGGG","isoWeekYear");ft("weekYear","gg");ft("isoWeekYear","GG");dt("weekYear",1);dt("isoWeekYear",1);P("G",El);P("g",El);P("GG",Oe,Nt);P("gg",Oe,Nt);P("GGGG",Kh,qh);P("gggg",Kh,qh);P("GGGGG",wl,vl);P("ggggg",wl,vl);ho(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,s){e[s.substr(0,2)]=ie(t)});ho(["gg","GG"],function(t,e,n,s){e[s]=N.parseTwoDigitYear(t)});function lO(t){return E_.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function uO(t){return E_.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function cO(){return Sn(this.year(),1,4)}function hO(){return Sn(this.isoWeekYear(),1,4)}function fO(){var t=this.localeData()._week;return Sn(this.year(),t.dow,t.doy)}function dO(){var t=this.localeData()._week;return Sn(this.weekYear(),t.dow,t.doy)}function E_(t,e,n,s,r){var i;return t==null?xi(this,s,r).year:(i=Sn(t,s,r),e>i&&(e=i),pO.call(this,t,e,n,s,r))}function pO(t,e,n,s,r){var i=e_(t,e,n,s,r),o=Pi(i.year,0,i.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}H("Q",0,"Qo","quarter");ft("quarter","Q");dt("quarter",7);P("Q",Wv);ge("Q",function(t,e){e[_n]=(ie(t)-1)*3});function mO(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}H("D",["DD",2],"Do","date");ft("date","D");dt("date",9);P("D",Oe);P("DD",Oe,Nt);P("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient});ge(["D","DD"],tn);ge("Do",function(t,e){e[tn]=ie(t.match(Oe)[0])});var T_=Br("Date",!0);H("DDD",["DDDD",3],"DDDo","dayOfYear");ft("dayOfYear","DDD");dt("dayOfYear",4);P("DDD",_l);P("DDDD",Yv);ge(["DDD","DDDD"],function(t,e,n){n._dayOfYear=ie(t)});function gO(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?e:this.add(t-e,"d")}H("m",["mm",2],0,"minute");ft("minute","m");dt("minute",14);P("m",Oe);P("mm",Oe,Nt);ge(["m","mm"],jt);var yO=Br("Minutes",!1);H("s",["ss",2],0,"second");ft("second","s");dt("second",15);P("s",Oe);P("ss",Oe,Nt);ge(["s","ss"],wn);var vO=Br("Seconds",!1);H("S",0,0,function(){return~~(this.millisecond()/100)});H(0,["SS",2],0,function(){return~~(this.millisecond()/10)});H(0,["SSS",3],0,"millisecond");H(0,["SSSS",4],0,function(){return this.millisecond()*10});H(0,["SSSSS",5],0,function(){return this.millisecond()*100});H(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});H(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});H(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});H(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});ft("millisecond","ms");dt("millisecond",16);P("S",_l,Wv);P("SS",_l,Nt);P("SSS",_l,Yv);var Yn,I_;for(Yn="SSSS";Yn.length<=9;Yn+="S")P(Yn,Hr);function _O(t,e){e[ys]=ie(("0."+t)*1e3)}for(Yn="S";Yn.length<=9;Yn+="S")ge(Yn,_O);I_=Br("Milliseconds",!1);H("z",0,0,"zoneAbbr");H("zz",0,0,"zoneName");function wO(){return this._isUTC?"UTC":""}function EO(){return this._isUTC?"Coordinated Universal Time":""}var I=uo.prototype;I.add=dR;I.calendar=wR;I.clone=ER;I.diff=CR;I.endOf=UR;I.format=NR;I.from=MR;I.fromNow=PR;I.to=xR;I.toNow=LR;I.get=IC;I.invalidAt=KR;I.isAfter=TR;I.isBefore=IR;I.isBetween=SR;I.isSame=bR;I.isSameOrAfter=kR;I.isSameOrBefore=AR;I.isValid=YR;I.lang=g_;I.locale=m_;I.localeData=y_;I.max=YD;I.min=WD;I.parsingFlags=qR;I.set=SC;I.startOf=FR;I.subtract=pR;I.toArray=HR;I.toObject=jR;I.toDate=BR;I.toISOString=RR;I.inspect=OR;typeof Symbol!="undefined"&&Symbol.for!=null&&(I[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});I.toJSON=WR;I.toString=DR;I.unix=$R;I.valueOf=VR;I.creationData=zR;I.eraName=JR;I.eraNarrow=ZR;I.eraAbbr=eO;I.eraYear=tO;I.year=Zv;I.isLeapYear=jC;I.weekYear=lO;I.isoWeekYear=uO;I.quarter=I.quarters=mO;I.month=Qv;I.daysInMonth=$C;I.week=I.weeks=GC;I.isoWeek=I.isoWeeks=XC;I.weeksInYear=fO;I.weeksInWeekYear=dO;I.isoWeeksInYear=cO;I.isoWeeksInISOWeekYear=hO;I.date=T_;I.day=I.days=uD;I.weekday=cD;I.isoWeekday=hD;I.dayOfYear=gO;I.hour=I.hours=vD;I.minute=I.minutes=yO;I.second=I.seconds=vO;I.millisecond=I.milliseconds=I_;I.utcOffset=eR;I.utc=nR;I.local=sR;I.parseZone=rR;I.hasAlignedHourOffset=iR;I.isDST=oR;I.isLocal=lR;I.isUtcOffset=uR;I.isUtc=h_;I.isUTC=h_;I.zoneAbbr=wO;I.zoneName=EO;I.dates=Vt("dates accessor is deprecated. Use date instead.",T_);I.months=Vt("months accessor is deprecated. Use month instead",Qv);I.years=Vt("years accessor is deprecated. Use year instead",Zv);I.zone=Vt("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",tR);I.isDSTShifted=Vt("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",aR);function TO(t){return Re(t*1e3)}function IO(){return Re.apply(null,arguments).parseZone()}function S_(t){return t}var fe=jh.prototype;fe.calendar=uC;fe.longDateFormat=dC;fe.invalidDate=mC;fe.ordinal=vC;fe.preparse=S_;fe.postformat=S_;fe.relativeTime=wC;fe.pastFuture=EC;fe.set=aC;fe.eras=GR;fe.erasParse=XR;fe.erasConvertYear=QR;fe.erasAbbrRegex=sO;fe.erasNameRegex=nO;fe.erasNarrowRegex=rO;fe.months=LC;fe.monthsShort=FC;fe.monthsParse=VC;fe.monthsRegex=HC;fe.monthsShortRegex=BC;fe.week=YC;fe.firstDayOfYear=zC;fe.firstDayOfWeek=KC;fe.weekdays=rD;fe.weekdaysMin=oD;fe.weekdaysShort=iD;fe.weekdaysParse=lD;fe.weekdaysRegex=fD;fe.weekdaysShortRegex=dD;fe.weekdaysMinRegex=pD;fe.isPM=gD;fe.meridiem=_D;function Da(t,e,n,s){var r=Rn(),i=un().set(s,e);return r[n](i,t)}function b_(t,e,n){if(Cn(t)&&(e=t,t=void 0),t=t||"",e!=null)return Da(t,e,n,"month");var s,r=[];for(s=0;s<12;s++)r[s]=Da(t,s,n,"month");return r}function of(t,e,n,s){typeof t=="boolean"?(Cn(e)&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,Cn(e)&&(n=e,e=void 0),e=e||"");var r=Rn(),i=t?r._week.dow:0,o,a=[];if(n!=null)return Da(e,(n+i)%7,s,"day");for(o=0;o<7;o++)a[o]=Da(e,(o+i)%7,s,"day");return a}function SO(t,e){return b_(t,e,"months")}function bO(t,e){return b_(t,e,"monthsShort")}function kO(t,e,n){return of(t,e,n,"weekdays")}function AO(t,e,n){return of(t,e,n,"weekdaysShort")}function CO(t,e,n){return of(t,e,n,"weekdaysMin")}Qn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=ie(t%100/10)===1?"th":e===1?"st":e===2?"nd":e===3?"rd":"th";return t+n}});N.lang=Vt("moment.lang is deprecated. Use moment.locale instead.",Qn);N.langData=Vt("moment.langData is deprecated. Use moment.localeData instead.",Rn);var fn=Math.abs;function DO(){var t=this._data;return this._milliseconds=fn(this._milliseconds),this._days=fn(this._days),this._months=fn(this._months),t.milliseconds=fn(t.milliseconds),t.seconds=fn(t.seconds),t.minutes=fn(t.minutes),t.hours=fn(t.hours),t.months=fn(t.months),t.years=fn(t.years),this}function k_(t,e,n,s){var r=Gt(e,n);return t._milliseconds+=s*r._milliseconds,t._days+=s*r._days,t._months+=s*r._months,t._bubble()}function RO(t,e){return k_(this,t,e,1)}function OO(t,e){return k_(this,t,e,-1)}function Tp(t){return t<0?Math.floor(t):Math.ceil(t)}function NO(){var t=this._milliseconds,e=this._days,n=this._months,s=this._data,r,i,o,a,l;return t>=0&&e>=0&&n>=0||t<=0&&e<=0&&n<=0||(t+=Tp(sc(n)+e)*864e5,e=0,n=0),s.milliseconds=t%1e3,r=Lt(t/1e3),s.seconds=r%60,i=Lt(r/60),s.minutes=i%60,o=Lt(i/60),s.hours=o%24,e+=Lt(o/24),l=Lt(A_(e)),n+=l,e-=Tp(sc(l)),a=Lt(n/12),n%=12,s.days=e,s.months=n,s.years=a,this}function A_(t){return t*4800/146097}function sc(t){return t*146097/4800}function MO(t){if(!this.isValid())return NaN;var e,n,s=this._milliseconds;if(t=$t(t),t==="month"||t==="quarter"||t==="year")switch(e=this._days+s/864e5,n=this._months+A_(e),t){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(e=this._days+Math.round(sc(this._months)),t){case"week":return e/7+s/6048e5;case"day":return e+s/864e5;case"hour":return e*24+s/36e5;case"minute":return e*1440+s/6e4;case"second":return e*86400+s/1e3;case"millisecond":return Math.floor(e*864e5)+s;default:throw new Error("Unknown unit "+t)}}function PO(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+ie(this._months/12)*31536e6:NaN}function On(t){return function(){return this.as(t)}}var xO=On("ms"),LO=On("s"),FO=On("m"),UO=On("h"),VO=On("d"),$O=On("w"),BO=On("M"),HO=On("Q"),jO=On("y");function WO(){return Gt(this)}function YO(t){return t=$t(t),this.isValid()?this[t+"s"]():NaN}function Us(t){return function(){return this.isValid()?this._data[t]:NaN}}var qO=Us("milliseconds"),KO=Us("seconds"),zO=Us("minutes"),GO=Us("hours"),XO=Us("days"),QO=Us("months"),JO=Us("years");function ZO(){return Lt(this.days()/7)}var pn=Math.round,Js={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function eN(t,e,n,s,r){return r.relativeTime(e||1,!!n,t,s)}function tN(t,e,n,s){var r=Gt(t).abs(),i=pn(r.as("s")),o=pn(r.as("m")),a=pn(r.as("h")),l=pn(r.as("d")),u=pn(r.as("M")),c=pn(r.as("w")),h=pn(r.as("y")),f=i<=n.ss&&["s",i]||i<n.s&&["ss",i]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(f=f||c<=1&&["w"]||c<n.w&&["ww",c]),f=f||u<=1&&["M"]||u<n.M&&["MM",u]||h<=1&&["y"]||["yy",h],f[2]=e,f[3]=+t>0,f[4]=s,eN.apply(null,f)}function nN(t){return t===void 0?pn:typeof t=="function"?(pn=t,!0):!1}function sN(t,e){return Js[t]===void 0?!1:e===void 0?Js[t]:(Js[t]=e,t==="s"&&(Js.ss=e-1),!0)}function rN(t,e){if(!this.isValid())return this.localeData().invalidDate();var n=!1,s=Js,r,i;return typeof t=="object"&&(e=t,t=!1),typeof t=="boolean"&&(n=t),typeof e=="object"&&(s=Object.assign({},Js,e),e.s!=null&&e.ss==null&&(s.ss=e.s-1)),r=this.localeData(),i=tN(this,!n,s,r),n&&(i=r.pastFuture(+this,i)),r.postformat(i)}var su=Math.abs;function Ys(t){return(t>0)-(t<0)||+t}function Al(){if(!this.isValid())return this.localeData().invalidDate();var t=su(this._milliseconds)/1e3,e=su(this._days),n=su(this._months),s,r,i,o,a=this.asSeconds(),l,u,c,h;return a?(s=Lt(t/60),r=Lt(s/60),t%=60,s%=60,i=Lt(n/12),n%=12,o=t?t.toFixed(3).replace(/\.?0+$/,""):"",l=a<0?"-":"",u=Ys(this._months)!==Ys(a)?"-":"",c=Ys(this._days)!==Ys(a)?"-":"",h=Ys(this._milliseconds)!==Ys(a)?"-":"",l+"P"+(i?u+i+"Y":"")+(n?u+n+"M":"")+(e?c+e+"D":"")+(r||s||t?"T":"")+(r?h+r+"H":"")+(s?h+s+"M":"")+(t?h+o+"S":"")):"P0D"}var le=bl.prototype;le.isValid=XD;le.abs=DO;le.add=RO;le.subtract=OO;le.as=MO;le.asMilliseconds=xO;le.asSeconds=LO;le.asMinutes=FO;le.asHours=UO;le.asDays=VO;le.asWeeks=$O;le.asMonths=BO;le.asQuarters=HO;le.asYears=jO;le.valueOf=PO;le._bubble=NO;le.clone=WO;le.get=YO;le.milliseconds=qO;le.seconds=KO;le.minutes=zO;le.hours=GO;le.days=XO;le.weeks=ZO;le.months=QO;le.years=JO;le.humanize=rN;le.toISOString=Al;le.toString=Al;le.toJSON=Al;le.locale=m_;le.localeData=y_;le.toIsoString=Vt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Al);le.lang=g_;H("X",0,0,"unix");H("x",0,0,"valueOf");P("x",El);P("X",kC);ge("X",function(t,e,n){n._d=new Date(parseFloat(t)*1e3)});ge("x",function(t,e,n){n._d=new Date(ie(t))});//! moment.js
N.version="2.29.3";iC(Re);N.fn=I;N.min=qD;N.max=KD;N.now=zD;N.utc=un;N.unix=TO;N.months=SO;N.isDate=lo;N.locale=Qn;N.invalid=gl;N.duration=Gt;N.isMoment=zt;N.weekdays=kO;N.parseZone=IO;N.localeData=Rn;N.isDuration=$o;N.monthsShort=bO;N.weekdaysMin=CO;N.defineLocale=Qh;N.updateLocale=ID;N.locales=SD;N.weekdaysShort=AO;N.normalizeUnits=$t;N.relativeTimeRounding=nN;N.relativeTimeThreshold=sN;N.calendarFormat=_R;N.prototype=I;N.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};function HN(t,e){return kr(),Ar("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[je("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"})])}function jN(t,e){return kr(),Ar("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[je("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})])}export{VN as A,$N as B,RN as C,MN as D,oN as E,xt as F,dN as G,N as H,BN as I,HN as J,mN as K,pN as L,uN as M,DN as N,SN as O,jN as P,wN as Q,Bn as R,bN as S,W1 as T,_N as U,vN as V,CN as W,AN as X,gN as Y,gw as a,aN as b,lN as c,Tm as d,je as e,g0 as f,IN as g,kN as h,cN as i,Ar as j,ON as k,hN as l,yN as m,oc as n,kr as o,LN as p,NN as q,fN as r,FN as s,iN as t,xN as u,UN as v,Cw as w,PN as x,EN as y,TN as z};
