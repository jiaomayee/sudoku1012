import{r as e,a as r,R as o,u as n,L as i,B as a,b as l,d as s}from"./react-vendor-ce3df769.js";import{l as c}from"./utils-b9091abe.js";import{a as d}from"./axios-8e1cd5bd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var u={exports:{}},f={},h=e,p=Symbol.for("react.element"),m=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,x=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function b(e,t,r){var o,n={},i=null,a=null;for(o in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)g.call(t,o)&&!y.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===n[o]&&(n[o]=t[o]);return{$$typeof:p,type:e,key:i,ref:a,props:n,_owner:x.current}}f.Fragment=m,f.jsx=b,f.jsxs=b,u.exports=f;var v=u.exports,w={},C=r;function k(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=k(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function $(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=k(e))&&(o&&(o+=" "),o+=t);return o}w.createRoot=C.createRoot,w.hydrateRoot=C.hydrateRoot;const j=e=>"number"==typeof e&&!isNaN(e),S=e=>"string"==typeof e,z=e=>"function"==typeof e,T=e=>S(e)||z(e)?e:null,A=t=>e.isValidElement(t)||S(t)||z(t)||j(t);function P(t){let{enter:r,exit:n,appendPosition:i=!1,collapse:a=!0,collapseDuration:l=300}=t;return function(t){let{children:s,position:c,preventExitTransition:d,done:u,nodeRef:f,isIn:h}=t;const p=i?`${r}--${c}`:r,m=i?`${n}--${c}`:n,g=e.useRef(0);return e.useLayoutEffect(()=>{const e=f.current,t=p.split(" "),r=o=>{o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===g.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)},[]),e.useEffect(()=>{const e=f.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,r){void 0===r&&(r=300);const{scrollHeight:o,style:n}=e;requestAnimationFrame(()=>{n.minHeight="initial",n.height=o+"px",n.transition=`all ${r}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(t,r)})})}(e,u,l):u()};h||(d?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))},[h]),o.createElement(o.Fragment,null,s)}}function N(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const I={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const r=this.list.get(e).filter(e=>e!==t);return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const r=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(r)})}},R=e=>{let{theme:t,type:r,...n}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${r})`,...n})},E={info:function(e){return o.createElement(R,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(R,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(R,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(R,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function F(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){let{closeToast:t,theme:r,ariaLabel:n="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":n},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function q(e){let{delay:t,isRunning:r,closeToast:n,type:i="default",hide:a,className:l,style:s,controlledProgress:c,progress:d,rtl:u,isIn:f,theme:h}=e;const p=a||c&&0===d,m={...s,animationDuration:`${t}ms`,animationPlayState:r?"running":"paused",opacity:p?0:1};c&&(m.transform=`scaleX(${d})`);const g=$("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),x=z(l)?l({rtl:u,type:i,defaultClassName:g}):$(g,l);return o.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:x,style:m,[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]:c&&d<1?null:()=>{f&&n()}})}const W=t=>{const{isRunning:r,preventExitTransition:n,toastRef:i,eventHandlers:a}=function(t){const[r,o]=e.useState(!1),[n,i]=e.useState(!1),a=e.useRef(null),l=e.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=e.useRef(t),{autoClose:c,pauseOnHover:d,closeToast:u,onClick:f,closeOnClick:h}=t;function p(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",b),document.addEventListener("touchmove",y),document.addEventListener("touchend",b);const r=a.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=r.getBoundingClientRect(),r.style.transition="",l.x=M(e.nativeEvent),l.y=F(e.nativeEvent),"x"===t.draggableDirection?(l.start=l.x,l.removalDistance=r.offsetWidth*(t.draggablePercent/100)):(l.start=l.y,l.removalDistance=r.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function m(e){if(l.boundingRect){const{top:r,bottom:o,left:n,right:i}=l.boundingRect;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&l.x>=n&&l.x<=i&&l.y>=r&&l.y<=o?x():g()}}function g(){o(!0)}function x(){o(!1)}function y(e){const o=a.current;l.canDrag&&o&&(l.didMove=!0,r&&x(),l.x=M(e),l.y=F(e),l.delta="x"===t.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),o.style.transform=`translate${t.draggableDirection}(${l.delta}px)`,o.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function b(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",b);const e=a.current;if(l.canDrag&&l.didMove&&e){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return i(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform=`translate${t.draggableDirection}(0)`,e.style.opacity="1"}}e.useEffect(()=>{s.current=t}),e.useEffect(()=>(a.current&&a.current.addEventListener("d",g,{once:!0}),z(t.onOpen)&&t.onOpen(e.isValidElement(t.children)&&t.children.props),()=>{const t=s.current;z(t.onClose)&&t.onClose(e.isValidElement(t.children)&&t.children.props)}),[]),e.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",g),window.addEventListener("blur",x)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",g),window.removeEventListener("blur",x))}),[t.pauseOnFocusLoss]);const v={onMouseDown:p,onTouchStart:p,onMouseUp:m,onTouchEnd:m};return c&&d&&(v.onMouseEnter=x,v.onMouseLeave=g),h&&(v.onClick=e=>{f&&f(e),l.canCloseOnClick&&u()}),{playToast:g,pauseToast:x,isRunning:r,preventExitTransition:n,toastRef:a,eventHandlers:v}}(t),{closeButton:l,children:s,autoClose:c,onClick:d,type:u,hideProgressBar:f,closeToast:h,transition:p,position:m,className:g,style:x,bodyClassName:y,bodyStyle:b,progressClassName:v,progressStyle:w,updateId:C,role:k,progress:j,rtl:S,toastId:T,deleteToast:A,isIn:P,isLoading:N,iconOut:I,closeOnClick:R,theme:E}=t,W=$("Toastify__toast",`Toastify__toast-theme--${E}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":R}),O=z(g)?g({rtl:S,position:m,type:u,defaultClassName:W}):$(W,g),D=!!j||!c,H={closeToast:h,type:u,theme:E};let B=null;return!1===l||(B=z(l)?l(H):e.isValidElement(l)?e.cloneElement(l,H):L(H)),o.createElement(p,{isIn:P,done:A,position:m,preventExitTransition:n,nodeRef:i},o.createElement("div",{id:T,onClick:d,className:O,...a,style:x,ref:i},o.createElement("div",{...P&&{role:k},className:z(y)?y({type:u}):$("Toastify__toast-body",y),style:b},null!=I&&o.createElement("div",{className:$("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},I),o.createElement("div",null,s)),B,o.createElement(q,{...C&&!D?{key:`pb-${C}`}:{},rtl:S,theme:E,delay:c,isRunning:r,isIn:P,closeToast:h,hide:f,type:u,style:w,className:v,controlledProgress:D,progress:j||0})))},O=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},D=P(O("bounce",!0));P(O("slide",!0)),P(O("zoom")),P(O("flip"));const H=e.forwardRef((t,r)=>{const{getToastToRender:n,containerRef:i,isToastActive:a}=function(t){const[,r]=e.useReducer(e=>e+1,0),[o,n]=e.useState([]),i=e.useRef(null),a=e.useRef(new Map).current,l=e=>-1!==o.indexOf(e),s=e.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:l,getToast:e=>a.get(e)}).current;function c(e){let{containerId:t}=e;const{limit:r}=s.props;!r||t&&s.containerId!==t||(s.count-=s.queue.length,s.queue=[])}function d(e){n(t=>null==e?[]:t.filter(t=>t!==e))}function u(){const{toastContent:e,toastProps:t,staleId:r}=s.queue.shift();h(e,t,r)}function f(t,o){let{delay:n,staleId:l,...c}=o;if(!A(t)||(f=c,!i.current||s.props.enableMultiContainer&&f.containerId!==s.props.containerId||a.has(f.toastId)&&null==f.updateId))return;var f;const{toastId:p,updateId:m,data:g}=c,{props:x}=s,y=()=>d(p),b=null==m;b&&s.count++;const v={...x,style:x.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(c).filter(e=>{let[t,r]=e;return null!=r})),toastId:p,updateId:m,data:g,closeToast:y,isIn:!1,className:T(c.className||x.toastClassName),bodyClassName:T(c.bodyClassName||x.bodyClassName),progressClassName:T(c.progressClassName||x.progressClassName),autoClose:!c.isLoading&&(w=c.autoClose,C=x.autoClose,!1===w||j(w)&&w>0?w:C),deleteToast(){const e=N(a.get(p),"removed");a.delete(p),I.emit(4,e);const t=s.queue.length;if(s.count=null==p?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),t>0){const e=null==p?s.props.limit:1;if(1===t||1===e)s.displayedToast++,u();else{const r=e>t?t:e;s.displayedToast=r;for(let e=0;e<r;e++)u()}}else r()}};var w,C;v.iconOut=function(t){let{theme:r,type:o,isLoading:n,icon:i}=t,a=null;const l={theme:r,type:o};return!1===i||(z(i)?a=i(l):e.isValidElement(i)?a=e.cloneElement(i,l):S(i)||j(i)?a=i:n?a=E.spinner():o in E&&(a=E[o](l))),a}(v),z(c.onOpen)&&(v.onOpen=c.onOpen),z(c.onClose)&&(v.onClose=c.onClose),v.closeButton=x.closeButton,!1===c.closeButton||A(c.closeButton)?v.closeButton=c.closeButton:!0===c.closeButton&&(v.closeButton=!A(x.closeButton)||x.closeButton);let k=t;e.isValidElement(t)&&!S(t.type)?k=e.cloneElement(t,{closeToast:y,toastProps:v,data:g}):z(t)&&(k=t({closeToast:y,toastProps:v,data:g})),x.limit&&x.limit>0&&s.count>x.limit&&b?s.queue.push({toastContent:k,toastProps:v,staleId:l}):j(n)?setTimeout(()=>{h(k,v,l)},n):h(k,v,l)}function h(e,t,r){const{toastId:o}=t;r&&a.delete(r);const i={content:e,props:t};a.set(o,i),n(e=>[...e,o].filter(e=>e!==r)),I.emit(4,N(i,null==i.props.updateId?"added":"updated"))}return e.useEffect(()=>(s.containerId=t.containerId,I.cancelEmit(3).on(0,f).on(1,e=>i.current&&d(e)).on(5,c).emit(2,s),()=>{a.clear(),I.emit(3,s)}),[]),e.useEffect(()=>{s.props=t,s.isToastActive=l,s.displayedToast=o.length}),{getToastToRender:function(e){const r=new Map,o=Array.from(a.values());return t.newestOnTop&&o.reverse(),o.forEach(e=>{const{position:t}=e.props;r.has(t)||r.set(t,[]),r.get(t).push(e)}),Array.from(r,t=>e(t[0],t[1]))},containerRef:i,isToastActive:l}}(t),{className:l,style:s,rtl:c,containerId:d}=t;function u(e){const t=$("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":c});return z(l)?l({position:e,rtl:c,defaultClassName:t}):$(t,T(l))}return e.useEffect(()=>{r&&(r.current=i.current)},[]),o.createElement("div",{ref:i,className:"Toastify",id:d},n((e,t)=>{const r=t.length?{...s}:{...s,pointerEvents:"none"};return o.createElement("div",{className:u(e),style:r,key:`container-${e}`},t.map((e,r)=>{let{content:n,props:i}=e;return o.createElement(W,{...i,isIn:a(i.toastId),style:{...i.style,"--nth":r+1,"--len":t.length},key:`toast-${i.key}`},n)}))}))});H.displayName="ToastContainer",H.defaultProps={position:"top-right",transition:D,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let B,_=new Map,Y=[],U=1;function G(){return""+U++}function X(e){return e&&(S(e.toastId)||j(e.toastId))?e.toastId:G()}function J(e,t){return _.size>0?I.emit(0,e,t):Y.push({content:e,options:t}),t.toastId}function Z(e,t){return{...t,type:t&&t.type||e,toastId:X(t)}}function V(e){return(t,r)=>J(t,Z(e,r))}function K(e,t){return J(e,Z("default",t))}K.loading=(e,t)=>J(e,Z("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),K.promise=function(e,t,r){let o,{pending:n,error:i,success:a}=t;n&&(o=S(n)?K.loading(n,r):K.loading(n.render,{...r,...n}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(null==t)return void K.dismiss(o);const i={type:e,...l,...r,data:n},a=S(t)?{render:t}:t;return o?K.update(o,{...i,...a}):K(a.render,{...i,...a}),n},c=z(e)?e():e;return c.then(e=>s("success",a,e)).catch(e=>s("error",i,e)),c},K.success=V("success"),K.info=V("info"),K.error=V("error"),K.warning=V("warning"),K.warn=K.warning,K.dark=(e,t)=>J(e,Z("default",{theme:"dark",...t})),K.dismiss=e=>{_.size>0?I.emit(1,e):Y=Y.filter(t=>null!=e&&t.options.toastId!==e)},K.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},K.isActive=e=>{let t=!1;return _.forEach(r=>{r.isToastActive&&r.isToastActive(e)&&(t=!0)}),t},K.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{const r=function(e,t){let{containerId:r}=t;const o=_.get(r||B);return o&&o.getToast(e)}(e,t);if(r){const{props:o,content:n}=r,i={delay:100,...o,...t,toastId:t.toastId||e,updateId:G()};i.toastId!==e&&(i.staleId=e);const a=i.render||n;delete i.render,J(a,i)}},0)},K.done=e=>{K.update(e,{progress:1})},K.onChange=e=>(I.on(4,e),()=>{I.off(4,e)}),K.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},K.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,e=>{B=e.containerId||e,_.set(B,e),Y.forEach(e=>{I.emit(0,e.content,e.options)}),Y=[]}).on(3,e=>{_.delete(e.containerId||e),0===_.size&&I.off(0).off(1).off(5)});const Q=e.createContext(),ee={light:{background:"#f5f5f5",surface:"#ffffff",text:"#333333",textSecondary:"#666666",primary:"#4a6cf7",secondary:"#f5a623",success:"#4cd964",warning:"#ffcc00",error:"#ff3b30",disabled:"#cccccc",border:"#e0e0e0",gridLine:"#e0e0e0",gridLineThick:"#cccccc",highlight:"#e6f0ff",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}},dark:{background:"#121212",surface:"#1e1e1e",text:"#f5f5f5",textSecondary:"#b0b0b0",primary:"#6482f7",secondary:"#ffb74d",success:"#66df80",warning:"#ffe066",error:"#ff5757",disabled:"#666666",border:"#333333",gridLine:"#333333",gridLineThick:"#444444",highlight:"#1a237e",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}}},te=()=>({...ee.light,name:"自定义主题"}),re=({children:t})=>{const[r,o]=e.useState(localStorage.getItem("themeMode")||"light"),[n,i]=e.useState(()=>{const e=localStorage.getItem("customTheme");return e?JSON.parse(e):te()}),[a,l]=e.useState(()=>"custom"===r?n:ee["system"===r?"light":r]);e.useEffect(()=>{let e;if("custom"===r)e=n;else if("system"===r){const t=window.matchMedia("(prefers-color-scheme: dark)").matches;e=ee[t?"dark":"light"]}else e=ee[r];l(e)},[r,n]);const s=e=>{const t={...e,name:e.name||"自定义主题"};i(t),localStorage.setItem("customTheme",JSON.stringify(t)),"custom"===r&&l(t)};e.useEffect(()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{if("system"===r){const t=e.matches;l(ee[t?"dark":"light"])}};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[r]);const c={theme:a,themeMode:r,customTheme:n,toggleTheme:()=>{const e="light"===r?"dark":"light";o(e),localStorage.setItem("themeMode",e)},setLightTheme:()=>{o("light"),localStorage.setItem("themeMode","light")},setDarkTheme:()=>{o("dark"),localStorage.setItem("themeMode","dark")},setSystemTheme:()=>{o("system"),localStorage.setItem("themeMode","system")},setCustomThemeMode:()=>{o("custom"),localStorage.setItem("themeMode","custom")},updateCustomTheme:s,resetCustomTheme:()=>{const e=te();i(e),localStorage.setItem("customTheme",JSON.stringify(e))},exportTheme:(e=n)=>{const t=JSON.stringify(e,null,2),r=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(r),i=document.createElement("a");i.href=o,i.download=`${e.name||"sudoku-theme"}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(o)},importTheme:e=>new Promise((t,r)=>{const o=new FileReader;o.onload=e=>{try{const o=JSON.parse(e.target.result);o&&"object"==typeof o?(s(o),t(o)):r(new Error("无效的主题文件格式"))}catch(o){r(o)}},o.onerror=r,o.readAsText(e)})};return v.jsx(Q.Provider,{value:c,children:t})},oe=()=>{const t=e.useContext(Q);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},ne={"zh-CN":{home:"首页",game:"游戏",techniques:"技巧",loading:"加载中...",generatingNewPuzzle:"生成新谜题...",loadingGame:"加载游戏...",gamePaused:"游戏已暂停",clickToResume:"点击任意位置继续",progress:"进度",statistics:"统计",settings:"设置",ok:"确定",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",back:"返回",yes:"是",no:"否",newGame:"新建游戏",pauseTimer:"暂停计时",resume:"继续",gameCompleted:"游戏已完成",hint:"技巧提示",notes:"候选数",learningMode:"学习",gameMode:"游戏",switchToLearningMode:"切换到学习模式",switchToGameMode:"切换到游戏模式",learningModeActive:"当前学习模式，已开启技巧辅助",gameModeActive:"当前游戏模式，已关闭技巧辅助",learningModeDescription:"提供技巧学习辅助，帮助您学习数独解题技巧。",gameModeDescription:"关闭技巧学习辅助功能，专注于游戏体验。",gameCompletedMessage:"恭喜！您成功完成了这个数独！",generatePuzzleFailed:"生成谜题失败，请重试",generatePuzzleFailedRefresh:"生成谜题失败，请刷新页面重试",selectDifficulty:"选择难度",difficultyDescription:{easy:"初学者友好，空格较少",medium:"进阶挑战，需要一定技巧",hard:"专家级别，逻辑推理",expert:"极高难度，需要高级技巧"},startGame:"开始游戏",startNewGame:"开始新游戏",clearAllProgress:"清空所有进度",allProgress:"全部进度",inProgress:"进行中",completed:"已完成",paused:"已暂停",sudokuGame:"数独游戏",difficulty:"难度",startTime:"开始时间",lastUpdated:"最后更新",completionProgress:"完成进度",continueGame:"继续游戏",deleteProgress:"删除进度",noProgress:"暂无游戏进度",noFilteredProgress:"没有符合筛选条件的游戏进度",noStartedGames:"您还没有开始任何数独游戏",confirmClearAllProgress:"确认清空所有进度",confirmDeleteProgress:"确认删除进度",clearAllProgressWarning:"此操作将删除所有游戏进度，且无法恢复。确定要继续吗？",deleteProgressWarning:"此操作将删除选中的游戏进度，且无法恢复。确定要继续吗？",confirmDelete:"确认删除",settingsPageTitle:"设置",language:"语言",theme:"主题",lightTheme:"浅色主题",darkTheme:"深色主题",systemTheme:"跟随系统",customTheme:"自定义主题",editTheme:"编辑主题",saveChanges:"保存更改",themeSelection:"主题选择",gameSettings:"游戏设置",soundEffects:"音效",autoCheck:"自动检查",showHints:"显示提示",themeEditor:"主题编辑器",backgroundColor:"背景颜色",surfaceColor:"表面颜色",textColor:"文字颜色",textSecondaryColor:"次要文字颜色",primaryColor:"主色调",secondaryColor:"次色调",successColor:"成功颜色",warningColor:"警告颜色",errorColor:"错误颜色",borderColor:"边框颜色",gridLineColor:"网格线颜色",gridLineThickColor:"粗网格线颜色",highlightColor:"高亮颜色",preview:"预览",reset:"重置",exportTheme:"导出主题",importTheme:"导入主题",confirm:"确认",continue:"继续",complete:"完成",start:"开始",pause:"暂停",time:"时间",easy:"简单",medium:"中等",hard:"困难",expert:"专家",languageSwitch:"切换语言",languageOptions:{"zh-CN":"中文","en-US":"English"},welcomeTitle:"欢迎免费玩数独、学习数独高阶技巧",welcomeContent:"我们提供免费的在线数独游戏，让您随时享受解谜的乐趣。无论您是初学者还是数独高手，都能在这里找到适合自己的挑战。同时，我们精心设计了数独技巧学习模块，帮助您掌握从初级到高级的数独解法，提升解题能力。本项目在GitHub上免费开源，欢迎访问和贡献。",rulesTitle:"数独基本规则",rulesContent:"数独是一种基于逻辑的数字填充游戏，标准数独由9×9网格组成，分为9个3×3的子网格。游戏目标是在空格中填入数字1-9，使得每行、每列和每个3×3子网格中的数字不重复。玩家需要利用已知数字，通过逻辑推理填充剩余空格，完成整个数独。",techniquesTitle:"数独技巧介绍",techniquesContent:"数独技巧可分为多个难度等级：<br><strong>基础技巧</strong>：唯一数法（Singles）、宫排除法（Block/Box Line Reduction）、显式数对（Naked Pairs）、隐式数对（Hidden Pairs）、显式三链数（Naked Triples）<br><strong>进阶技巧</strong>：X-Wing、剑鱼（Swordfish）、XY-Wing、XYZ-Wing、唯一矩形（UR Type 1）<br><strong>高阶技巧</strong>：简单链（Simple Chains）、XY-Chain、ALS-XZ Rule、唯一矩形（UR Type 2-4）、双值格链（AIC）",pointingPairs:"指向对法",boxLineReduction:"宫行列删减法",swordfish:"剑鱼法",jellyfish:"水母法",skyscraper:"摩天楼法",twoStringKite:"双绳风筝法",emptyRectangle:"空矩形法",uniquenessRectangle:"唯一矩形法",hiddenRectangle:"隐藏矩形法",uniqueRectangleType1:"唯一矩形类型1",uniqueRectangleType2:"唯一矩形类型2",uniqueRectangleType3:"唯一矩形类型3",uniqueRectangleType4:"唯一矩形类型4",xYChain:"XY链",xChain:"X链",simpleColoring:"简单着色法",forcingChain:"强制链",alternatingInferenceChain:"交替推理链",niceLoop:"尼斯环",alS_XZ:"ALS-XZ规则",alS_XY_Wing:"ALS-XY-Wing",alS_Wing:"ALS-Wing",deathBlossom:"死亡绽放",sueDeCoq:"Sue De Coq",wXYZ_Wing:"WXYZ-Wing",remotePairs:"远程数对",bivalueUniversalGrave:"双值格全墓地",almostLockedSet:"几乎锁定集",loadGameFailed:"加载游戏失败，请稍后重试",deleteProgressFailed:"删除进度失败，请稍后重试",clearProgressFailed:"清空进度失败，请稍后重试",startPractice:"开始练习{techniqueName}技巧！",updateAvailable:"网站有新版本可用！",updateNow:"立即更新",aboutUs:"关于我们",help:"使用帮助",sudokuRules:"数独规则",contactUs:"联系我们",copyright:"版权所有",version:"版本",appName:"数独学习应用",themeSaved:"主题已保存",themeReset:"主题已重置",themeExported:"主题已导出",themeImported:"主题导入成功",themeImportFailed:"主题导入失败: ",enterPencilMode:"进入铅笔模式，可以添加候选数字",exitPencilMode:"退出铅笔模式，返回正常输入",notesCalculated:"已为所有空白格子计算并填充候选数",foundRandomTechnique:"随机发现技巧：",findSingleCandidateCell:"查找仅有唯一可填数字的单元格",cellOnlyHasSingleCandidate:"单元格{position}只有唯一可填数字{value}",fillNumber:"填入数字{value}",findHiddenSingleInRegion:"在{regionType}{regionNum}中查找隐藏的唯一数字",numberOnlyInPosition:"数字{value}在{regionType}{regionNum}中只能出现在{position}",row:"行",col:"列",box:"宫",multipleCells:"多单元格",error:"错误",nakedSingleTechnique:"唯一余数",nakedPairTechnique:"显性数对",hiddenPairTechnique:"隐性数对",nakedTripleTechnique:"显性三链数",hiddenTripleTechnique:"隐性三链数",pointingPairsTechnique:"指向对",boxLineReductionTechnique:"宫线摒除",swordfishTechnique:"剑鱼",xyzWingTechnique:"XYZ-Wing",jellyfishTechnique:"水母法",nakedSingle:"唯一数法",hiddenSingleRow:"隐性唯一数法(行)",hiddenSingleCol:"隐性唯一数法(列)",hiddenSingleBox:"隐性唯一数法(宫)",nakedPairsRow:"显性数对法(行)",nakedPairsCol:"显性数对法(列)",nakedPairsBox:"显性数对法(宫)",hiddenPairsRow:"隐性数对法(行)",hiddenPairsCol:"隐性数对法(列)",hiddenPairsBox:"隐性数对法(宫)",nakedTripleRow:"显性三链数法(行)",nakedTripleCol:"显性三链数法(列)",nakedTripleBox:"显性三链数法(宫)",hiddenTripleRow:"隐性三链数法(行)",hiddenTripleCol:"隐性三链数法(列)",hiddenTripleBox:"隐性三链数法(宫)",swordfishRow:"剑鱼法(行)",swordfishCol:"剑鱼法(列)",xyzWing:"XYZ-Wing法",jellyfish:"水母法",unknownTechnique:"未知技巧",rowSuffix:"(行)",colSuffix:"(列)",boxSuffix:"(宫)",nakedPair:"显性数对法",nakedPairRow:"行显性数对",nakedPairCol:"列显性数对",nakedPairBox:"宫显性数对",hiddenPair:"隐性数对法",hiddenPairRow:"行隐性数对",hiddenPairCol:"列隐性数对",hiddenPairBox:"宫隐性数对",nakedTriple:"显性三链数法",hiddenTriple:"隐性三链数法",notesSingleTechnique:"候选数唯一法",keyboardTab:"键盘",techniquesTab:"技巧",solutionTab:"解题",pencilMode:"铅笔模式",undoAction:"撤销",clearCell:"清空单元格",fillCandidates:"刷新候选数",applyTechnique:"应用",nextStep:"下一步",apply:"应用",manualHandle:"手动处理",manualHandleTechnique:"Manual",solutionSteps:"解题步骤",selectTechniqueFirst:"请先从技巧列表中选择一个技巧",noTechniquesAvailable:"没有可用的技巧",refreshCandidatesTooltip:"点击刷新候选数并加载所有技巧求解",candidatesTab:"候选数",hintsTab:"提示",solveStep:"解题一步",solveAll:"全部解题",relatedPosition:"相关位置: {position}",relatedNumber:"涉及数字: {number}",analysisCompleted:"分析完成",findPairInRegion:"在{regionType}{regionNum}中查找数对",foundNakedPair:"发现数字{numbers}的显性数对，位于单元格{cells}",removeCandidatesFromTargets:"这些数字只能出现在这两个单元格中，需要从目标单元格{targets}中删除候选数{numbers}",findHiddenPairInRegion:"在{regionType}{regionNum}中查找只能出现在两个单元格中的数字对",foundNumbersOnlyInCells:"发现数字{numbers}只能出现在单元格{cells}",removeOtherCandidates:"目标单元格{cells}中只能填入数字{numbers}，需要移除其他候选数",findTripleInRegion:"在{regionType}{regionNum}中查找三链数",foundNakedTriple:"发现数字{numbers}的显性三链数，位于单元格{cells}",findPointingPairsInBox:"在第{boxNum}宫，数字{number}只能出现在第{lineNum}{lineType}",removePointingPairsFromTargets:"从第{lineNum}{lineType}的目标单元格{targets}中移除候选数{number}",findBoxLineReductionInLine:"在第{lineNum}{lineType}，数字{number}只能出现在第{boxNum}宫",removeBoxLineReductionFromTargets:"从第{boxNum}宫的目标单元格{targets}中移除候选数{number}",findHiddenTripleInRegion:"在{regionType}{regionNum}中查找只能出现在三个单元格中的数字组",findXWingInWings:"在{wingType}中查找数字{number}的X-Wing结构",xWingFormRectangle:"数字{number}在源单元格{sourceCells}中形成矩形结构",removeXWingFromTargets:"从目标单元格{targets}中移除候选数{number}",findYWingStructure:"发现Y-Wing结构：枢纽{anchor}，翼{xz}和{yz}",yWingShareCandidates:"枢纽{anchor}与翼{xz}共享候选数{x}，枢纽{anchor}与翼{yz}共享候选数{y}，翼{xz}和{yz}都包含候选数{z}",removeYWingFromTargets:"从目标单元格{targets}中移除候选数{number}",findSwordfishInWings:"在{wingType}中查找数字{number}的Swordfish结构",swordfishFormStructure:"数字{number}在源单元格{sourceCells}中形成三行三列的结构",removeSwordfishFromTargets:"从目标单元格{targets}中移除候选数{number}",findXYZWingStructure:"发现XYZ-Wing结构：枢纽{anchor}，翼{xz}和{yz}",xyzWingShareCandidates:"枢纽{anchor}与翼{xz}共享候选数{x}，枢纽{anchor}与翼{yz}共享候选数{y}，翼{xz}和{yz}都包含候选数{z}",removeXYZWingFromTargets:"从目标单元格{targets}中移除候选数{number}",findJellyfishInWings:"在{wingType}中查找数字{number}的Jellyfish结构",jellyfishFormStructure:"数字{number}在源单元格{sourceCells}中形成四行四列的结构",removeJellyfishFromTargets:"从目标单元格{targets}中移除候选数{number}",findJellyfishInRows:"在第{rows}行中查找数字{number}的Jellyfish结构",findJellyfishInCols:"在第{cols}列中查找数字{number}的Jellyfish结构",jellyfishRowFormStructure:"数字{number}在第{rows}行和第{cols}列中形成四行四列的结构",jellyfishColFormStructure:"数字{number}在第{cols}列和第{rows}行中形成四行四列的结构",cellNotEmpty:"该单元格已有数字，无法填充候选数",cellPrefilled:"该单元格为预填数字，无法填充候选数",cellCandidatesFilled:"已为单元格({row},{col})计算并填充候选数！",selectCellForCandidates:"请先选择一个空白单元格",candidatesFilled:"已为所有空白格子计算并填充候选数！",emptyCandidateCellsFound:"发现无候选数的空白单元格，重新计算候选数...",candidatesComplete:"候选数正确完整，直接计算技巧机会！",candidateErrorDetected:"存在候选数删减错误，数据刷新",manualCandidateRemovalRequired:"请手动清除选定候选数",pairTechniqueIdentified:"技巧已识别，请手动移除相关候选数"},"en-US":{welcomeTitle:"Welcome to Free Sudoku & Advanced Techniques Learning",welcomeContent:"We offer free online Sudoku games for you to enjoy puzzle-solving anytime. Whether you are a beginner or a Sudoku expert, you can find suitable challenges here. Meanwhile, we have carefully designed a Sudoku technique learning module to help you master Sudoku solving methods from beginner to advanced levels and improve your solving skills. This project is free and open-source on GitHub, welcome to visit and contribute.",rulesTitle:"Basic Sudoku Rules",rulesContent:"Sudoku is a logic-based number placement puzzle. A standard Sudoku consists of a 9×9 grid divided into nine 3×3 subgrids. The objective is to fill the grid with digits from 1 to 9, such that each row, column, and each of the nine 3×3 subgrids contains all of the digits from 1 to 9 without repetition. Players need to use known numbers to logically deduce the remaining empty cells to complete the Sudoku.",techniquesTitle:"Sudoku Techniques Introduction",techniquesContent:"Sudoku techniques can be divided into multiple difficulty levels:<br><strong>Basic Techniques</strong>: Singles, Block/Box Line Reduction, Naked Pairs, Hidden Pairs, Naked Triples<br><strong>Intermediate Techniques</strong>: X-Wing, Swordfish, XY-Wing, XYZ-Wing, Unique Rectangle (Type 1)<br><strong>Advanced Techniques</strong>: Simple Chains, XY-Chain, ALS-XZ Rule, Unique Rectangle (Types 2-4), Alternating Inference Chains (AIC)",home:"Home",game:"Game",techniques:"Techniques",loading:"Loading...",generatingNewPuzzle:"Generating new puzzle...",loadingGame:"Loading game...",gamePaused:"Game Paused",clickToResume:"Click anywhere to resume",progress:"Progress",statistics:"Statistics",settings:"Settings",ok:"OK",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",back:"Back",yes:"Yes",no:"No",newGame:"New Game",pauseTimer:"Pause Timer",resume:"Resume",gameCompleted:"Game Completed",hint:"Hint",notes:"Notes",learningMode:"Learning",gameMode:"Game",switchToLearningMode:"Switch to Learning Mode",switchToGameMode:"Switch to Game Mode",learningModeActive:"Current learning mode, technique assistance enabled",gameModeActive:"Current game mode, technique assistance disabled",learningModeDescription:"Provides technique learning assistance to help you learn Sudoku solving techniques.",gameModeDescription:"Disables technique learning assistance for a focused gaming experience.",gameCompletedMessage:"Congratulations! You have successfully completed this Sudoku!",generatePuzzleFailed:"Failed to generate puzzle, please try again",generatePuzzleFailedRefresh:"Failed to generate puzzle, please refresh the page and try again",foundRandomTechnique:"Random technique found: ",findSingleCandidateCell:"Find cell with only one possible number",cellOnlyHasSingleCandidate:"Cell {position} only has one possible number {value}",fillNumber:"Fill number {value}",findHiddenSingleInRegion:"Find hidden single in {regionType} {regionNum}",numberOnlyInPosition:"Number {value} can only appear in position {position} in {regionType} {regionNum}",row:"row",col:"column",box:"box",multipleCells:"Multiple cells",selectDifficulty:"Select Difficulty",difficultyDescription:{easy:"Beginner friendly, fewer empty cells",medium:"Moderate challenge, requires some techniques",hard:"Expert level, logical reasoning required",expert:"Extremely difficult, advanced techniques needed"},startGame:"Start Game",startNewGame:"Start New Game",clearAllProgress:"Clear All Progress",allProgress:"All Progress",inProgress:"In Progress",completed:"Completed",paused:"Paused",sudokuGame:"Sudoku Game",difficulty:"Difficulty",startTime:"Start Time",lastUpdated:"Last Updated",completionProgress:"Completion Progress",continueGame:"Continue Game",deleteProgress:"Delete Progress",error:"Mistake",noProgress:"No Game Progress",noFilteredProgress:"No game progress matches the filter criteria",updateAvailable:"New version available!",updateNow:"Update Now",noStartedGames:"You haven't started any Sudoku games yet",confirmClearAllProgress:"Confirm Clear All Progress",confirmDeleteProgress:"Confirm Delete Progress",clearAllProgressWarning:"This action will delete all game progress and cannot be undone. Are you sure you want to continue?",deleteProgressWarning:"This action will delete the selected game progress and cannot be undone. Are you sure you want to continue?",techniqueLearning:"Technique Learning",selectTechnique:"Select Technique",practiceMode:"Practice Mode",techniqueDescription:"Technique Description",techniqueExamples:"Technique Examples",startPractice:"Start practicing {techniqueName} technique!",nakedSingleTechnique:"Naked Single",nakedPairTechnique:"Naked Pair",hiddenPairTechnique:"Hidden Pair",nakedTripleTechnique:"Naked Triple",hiddenTripleTechnique:"Hidden Triple",pointingPairsTechnique:"Pointing Pairs",boxLineReductionTechnique:"Box-Line Reduction",swordfishTechnique:"Swordfish",xyzWingTechnique:"XYZ-Wing",jellyfishTechnique:"Jellyfish",nakedSingle:"Naked Single",hiddenSingleRow:"Hidden Single (Row)",hiddenSingleCol:"Hidden Single (Column)",hiddenSingleBox:"Hidden Single (Box)",nakedPairsRow:"Naked Pairs (Row)",nakedPairsCol:"Naked Pairs (Column)",nakedPairsBox:"Naked Pairs (Box)",hiddenPairsRow:"Hidden Pairs (Row)",hiddenPairsCol:"Hidden Pairs (Column)",hiddenPairsBox:"Hidden Pairs (Box)",nakedTripleRow:"Naked Triples (Row)",nakedTripleCol:"Naked Triples (Column)",nakedTripleBox:"Naked Triples (Box)",hiddenTripleRow:"Hidden Triples (Row)",hiddenTripleCol:"Hidden Triples (Column)",hiddenTripleBox:"Hidden Triples (Box)",swordfishRow:"Swordfish (Row)",swordfishCol:"Swordfish (Column)",xyzWing:"XYZ-Wing",jellyfish:"Jellyfish",unknownTechnique:"Unknown Technique",rowSuffix:"(Row)",colSuffix:"(Column)",boxSuffix:"(Box)",nakedPair:"Naked Pair",nakedPairRow:"Row Naked Pair",nakedPairCol:"Column Naked Pair",nakedPairBox:"Box Naked Pair",hiddenPair:"Hidden Pair",hiddenPairRow:"Row Hidden Pair",hiddenPairCol:"Column Hidden Pair",hiddenPairBox:"Box Hidden Pair",nakedTriple:"Naked Triple",hiddenTriple:"Hidden Triple",notesSingleTechnique:"Notes Single",keyboardTab:"Keyboard",techniquesTab:"Techniques",solutionTab:"Solution",pencilMode:"Pencil Mode",undoAction:"Undo",clearCell:"Clear Cell",fillCandidates:"Fill Candidates",applyTechnique:"Apply",nextStep:"Next",apply:"Apply",manualHandle:"Manual",manualHandleTechnique:"Manual",solutionSteps:"Solution Steps",selectTechniqueFirst:"Please select a technique from the list first",noTechniquesAvailable:"No techniques available",refreshCandidatesTooltip:"Click to refresh candidates and load all technique solutions",candidatesTab:"Candidates",hintsTab:"Hints",solveStep:"Solve Step",solveAll:"Solve All",relatedPosition:"Related Position: {position}",relatedNumber:"Related Number: {number}",analysisCompleted:"Analysis Completed",findPairInRegion:"Find pair in {regionType} {regionNum}",foundNakedPair:"Found naked pair of numbers {numbers} in cells {cells}",removeCandidatesFromTargets:"These numbers can only appear in these two cells, need to remove candidates {numbers} from target cells {targets}",findHiddenPairInRegion:"Find numbers that can only appear in two cells in {regionType} {regionNum}",foundNumbersOnlyInCells:"Found numbers {numbers} can only appear in cells {cells}",removeOtherCandidates:"Target cells {cells} can only contain numbers {numbers}, need to remove other candidates",findTripleInRegion:"Find triple in {regionType} {regionNum}",foundNakedTriple:"Found naked triple of numbers {numbers} in cells {cells}",findPointingPairsInBox:"In box {boxNum}, number {number} can only appear in {lineType} {lineNum}",removePointingPairsFromTargets:"Remove candidate {number} from target cells {targets} in {lineType} {lineNum}",findBoxLineReductionInLine:"In {lineType} {lineNum}, number {number} can only appear in box {boxNum}",removeBoxLineReductionFromTargets:"Remove candidate {number} from target cells {targets} in box {boxNum}",findHiddenTripleInRegion:"Find number group that can only appear in three cells in {regionType} {regionNum}",findXWingInWings:"Find X-Wing structure for number {number} in {wingType}",xWingFormRectangle:"Number {number} forms a rectangular structure in source cells {sourceCells}",removeXWingFromTargets:"Remove candidate {number} from target cells {targets}",findYWingStructure:"Found Y-Wing structure: anchor {anchor}, wings {xz} and {yz}",yWingShareCandidates:"Anchor {anchor} shares candidate {x} with wing {xz}, anchor {anchor} shares candidate {y} with wing {yz}, wings {xz} and {yz} both contain candidate {z}",removeYWingFromTargets:"Remove candidate {number} from target cells {targets}",findSwordfishInWings:"Find Swordfish structure for number {number} in {wingType}",swordfishFormStructure:"Number {number} forms a 3-row 3-column structure in source cells {sourceCells}",removeSwordfishFromTargets:"Remove candidate {number} from target cells {targets}",findXYZWingStructure:"Found XYZ-Wing structure: anchor {anchor}, wings {xz} and {yz}",xyzWingShareCandidates:"Anchor {anchor} shares candidate {x} with wing {xz}, anchor {anchor} shares candidate {y} with wing {yz}, wings {xz} and {yz} both contain candidate {z}",removeXYZWingFromTargets:"Remove candidate {number} from target cells {targets}",findJellyfishInWings:"Find Jellyfish structure for number {number} in {wingType}",jellyfishFormStructure:"Number {number} forms a 4-row 4-column structure in source cells {sourceCells}",removeJellyfishFromTargets:"Remove candidate {number} from target cells {targets}",findJellyfishInRows:"Find Jellyfish structure for number {number} in rows {rows}",findJellyfishInCols:"Find Jellyfish structure for number {number} in columns {cols}",jellyfishRowFormStructure:"Number {number} forms a 4-row 4-column structure in rows {rows} and columns {cols}",jellyfishColFormStructure:"Number {number} forms a 4-row 4-column structure in columns {cols} and rows {rows}",cellNotEmpty:"Cell already has a number, cannot fill candidates",cellPrefilled:"Cell is prefilled, cannot fill candidates",cellCandidatesFilled:"Candidates calculated and filled for cell ({row},{col})!",selectCellForCandidates:"Please select a blank cell first",candidatesFilled:"Candidates calculated and filled for all blank cells!",emptyCandidateCellsFound:"Found blank cells with no candidates, recalculating candidates...",candidatesComplete:"Candidates are correct and complete, directly calculating technique opportunities!",candidateErrorDetected:"Candidate deletion error detected, refreshing data",manualCandidateRemovalRequired:"Please manually clear the selected candidates",pairTechniqueIdentified:"Technique identified, please manually remove related candidates"}},ie=e.createContext(),ae=({children:t})=>{const[r,o]=e.useState(()=>{const e=localStorage.getItem("language");return e||"en-US"}),n={language:r,t:(e,t={})=>{if(!e)return e;let o=ne[r];const n=e.split(".");for(const r of n){if(!o||"object"!=typeof o)return e;o=o[r]}return void 0===o?e:"string"==typeof o&&Object.keys(t).length>0?o.replace(/\{([^}]+)\}/g,(e,r)=>void 0!==t[r]?t[r]:e):o},changeLanguage:e=>{o(e),localStorage.setItem("language",e)},availableLanguages:[{code:"zh-CN",name:"中文简体"},{code:"en-US",name:"English"}]};return v.jsx(ie.Provider,{value:n,children:t})},le=()=>{const t=e.useContext(ie);if(!t)throw new Error("useLanguage must be used within a LanguageProvider");return t},se=e.createContext(),ce=({children:t})=>{const{t:r}=le(),[o,n]=e.useState(!1),[i,a]=e.useState(""),[l,s]=e.useState(0);e.useEffect(()=>{""===i&&a(r("loading"))},[r]);const c=e=>{s(e=>e+1),a(e||r("loading")),n(!0)},d=()=>{s(e=>{const t=Math.max(0,e-1);return 0===t&&n(!1),t})},u={isLoading:o,loadingMessage:i,loadingCount:l,startLoading:c,stopLoading:d,resetLoading:()=>{s(0),n(!1),a(r("loading"))},executeWithLoading:async(e,t="加载中...")=>{try{c(t);return await e()}catch(r){throw r}finally{d()}}};return v.jsx(se.Provider,{value:u,children:t})},de=()=>{const t=e.useContext(se);if(!t)throw new Error("useLoading must be used within a LoadingProvider");return t},ue=e.createContext(),fe=({children:t})=>{const[r,o]=e.useState("game");return v.jsx(ue.Provider,{value:{mode:r,setMode:o},children:t})};var he=function(){return he=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},he.apply(this,arguments)};function pe(e,t,r){if(r||2===arguments.length)for(var o,n=0,i=t.length;n<i;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var me="-ms-",ge="-moz-",xe="-webkit-",ye="comm",be="rule",ve="decl",we="@keyframes",Ce=Math.abs,ke=String.fromCharCode,$e=Object.assign;function je(e){return e.trim()}function Se(e,t){return(e=t.exec(e))?e[0]:e}function ze(e,t,r){return e.replace(t,r)}function Te(e,t,r){return e.indexOf(t,r)}function Ae(e,t){return 0|e.charCodeAt(t)}function Pe(e,t,r){return e.slice(t,r)}function Ne(e){return e.length}function Ie(e){return e.length}function Re(e,t){return t.push(e),e}function Ee(e,t){return e.filter(function(e){return!Se(e,t)})}var Me=1,Fe=1,Le=0,qe=0,We=0,Oe="";function De(e,t,r,o,n,i,a,l){return{value:e,root:t,parent:r,type:o,props:n,children:i,line:Me,column:Fe,length:a,return:"",siblings:l}}function He(e,t){return $e(De("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Be(e){for(;e.root;)e=He(e.root,{children:[e]});Re(e,e.siblings)}function _e(){return We=qe>0?Ae(Oe,--qe):0,Fe--,10===We&&(Fe=1,Me--),We}function Ye(){return We=qe<Le?Ae(Oe,qe++):0,Fe++,10===We&&(Fe=1,Me++),We}function Ue(){return Ae(Oe,qe)}function Ge(){return qe}function Xe(e,t){return Pe(Oe,e,t)}function Je(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ze(e){return je(Xe(qe-1,Qe(91===e?e+2:40===e?e+1:e)))}function Ve(e){for(;(We=Ue())&&We<33;)Ye();return Je(e)>2||Je(We)>3?"":" "}function Ke(e,t){for(;--t&&Ye()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return Xe(e,Ge()+(t<6&&32==Ue()&&32==Ye()))}function Qe(e){for(;Ye();)switch(We){case e:return qe;case 34:case 39:34!==e&&39!==e&&Qe(We);break;case 40:41===e&&Qe(e);break;case 92:Ye()}return qe}function et(e,t){for(;Ye()&&e+We!==57&&(e+We!==84||47!==Ue()););return"/*"+Xe(t,qe-1)+"*"+ke(47===e?e:Ye())}function tt(e){for(;!Je(Ue());)Ye();return Xe(e,qe)}function rt(e){return function(e){return Oe="",e}(ot("",null,null,null,[""],e=function(e){return Me=Fe=1,Le=Ne(Oe=e),qe=0,[]}(e),0,[0],e))}function ot(e,t,r,o,n,i,a,l,s){for(var c=0,d=0,u=a,f=0,h=0,p=0,m=1,g=1,x=1,y=0,b="",v=n,w=i,C=o,k=b;g;)switch(p=y,y=Ye()){case 40:if(108!=p&&58==Ae(k,u-1)){-1!=Te(k+=ze(Ze(y),"&","&\f"),"&\f",Ce(c?l[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:k+=Ze(y);break;case 9:case 10:case 13:case 32:k+=Ve(p);break;case 92:k+=Ke(Ge()-1,7);continue;case 47:switch(Ue()){case 42:case 47:Re(it(et(Ye(),Ge()),t,r,s),s);break;default:k+="/"}break;case 123*m:l[c++]=Ne(k)*x;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+d:-1==x&&(k=ze(k,/\f/g,"")),h>0&&Ne(k)-u&&Re(h>32?at(k+";",o,r,u-1,s):at(ze(k," ","")+";",o,r,u-2,s),s);break;case 59:k+=";";default:if(Re(C=nt(k,t,r,c,d,n,l,b,v=[],w=[],u,i),i),123===y)if(0===d)ot(k,t,C,C,v,i,u,l,w);else switch(99===f&&110===Ae(k,3)?100:f){case 100:case 108:case 109:case 115:ot(e,C,C,o&&Re(nt(e,C,C,0,0,n,l,b,n,v=[],u,w),w),n,w,u,l,o?v:w);break;default:ot(k,C,C,C,[""],w,0,l,w)}}c=d=h=0,m=x=1,b=k="",u=a;break;case 58:u=1+Ne(k),h=p;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==_e())continue;switch(k+=ke(y),y*m){case 38:x=d>0?1:(k+="\f",-1);break;case 44:l[c++]=(Ne(k)-1)*x,x=1;break;case 64:45===Ue()&&(k+=Ze(Ye())),f=Ue(),d=u=Ne(b=k+=tt(Ge())),y++;break;case 45:45===p&&2==Ne(k)&&(m=0)}}return i}function nt(e,t,r,o,n,i,a,l,s,c,d,u){for(var f=n-1,h=0===n?i:[""],p=Ie(h),m=0,g=0,x=0;m<o;++m)for(var y=0,b=Pe(e,f+1,f=Ce(g=a[m])),v=e;y<p;++y)(v=je(g>0?h[y]+" "+b:ze(b,/&\f/g,h[y])))&&(s[x++]=v);return De(e,t,r,0===n?be:l,s,c,d,u)}function it(e,t,r,o){return De(e,t,r,ye,ke(We),Pe(e,2,-2),0,o)}function at(e,t,r,o,n){return De(e,t,r,ve,Pe(e,0,o),Pe(e,o+1,-1),o,n)}function lt(e,t,r){switch(function(e,t){return 45^Ae(e,0)?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}(e,t)){case 5103:return xe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+e+e;case 4789:return ge+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+e+ge+e+me+e+e;case 5936:switch(Ae(e,t+11)){case 114:return xe+e+me+ze(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return xe+e+me+ze(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return xe+e+me+ze(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return xe+e+me+e+e;case 6165:return xe+e+me+"flex-"+e+e;case 5187:return xe+e+ze(e,/(\w+).+(:[^]+)/,xe+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return xe+e+me+"flex-item-"+ze(e,/flex-|-self/g,"")+(Se(e,/flex-|baseline/)?"":me+"grid-row-"+ze(e,/flex-|-self/g,""))+e;case 4675:return xe+e+me+"flex-line-pack"+ze(e,/align-content|flex-|-self/g,"")+e;case 5548:return xe+e+me+ze(e,"shrink","negative")+e;case 5292:return xe+e+me+ze(e,"basis","preferred-size")+e;case 6060:return xe+"box-"+ze(e,"-grow","")+xe+e+me+ze(e,"grow","positive")+e;case 4554:return xe+ze(e,/([^-])(transform)/g,"$1"+xe+"$2")+e;case 6187:return ze(ze(ze(e,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),e,"")+e;case 5495:case 3959:return ze(e,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return ze(ze(e,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+e+e;case 4200:if(!Se(e,/flex-|baseline/))return me+"grid-column-align"+Pe(e,t)+e;break;case 2592:case 3360:return me+ze(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,Se(e.props,/grid-\w+-end/)})?~Te(e+(r=r[t].value),"span",0)?e:me+ze(e,"-start","")+e+me+"grid-row-span:"+(~Te(r,"span",0)?Se(r,/\d+/):+Se(r,/\d+/)-+Se(e,/\d+/))+";":me+ze(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return Se(e.props,/grid-\w+-start/)})?e:me+ze(ze(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ze(e,/(.+)-inline(.+)/,xe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ne(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(45!==Ae(e,t+4))break;case 102:return ze(e,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+ge+(108==Ae(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Te(e,"stretch",0)?lt(ze(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return ze(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,o,n,i,a,l){return me+r+":"+o+l+(n?me+r+"-span:"+(i?a:+a-+o)+l:"")+e});case 4949:if(121===Ae(e,t+6))return ze(e,":",":"+xe)+e;break;case 6444:switch(Ae(e,45===Ae(e,14)?18:11)){case 120:return ze(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(45===Ae(e,14)?"inline-":"")+"box$3$1"+xe+"$2$3$1"+me+"$2box$3")+e;case 100:return ze(e,":",":"+me)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ze(e,"scroll-","scroll-snap-")+e}return e}function st(e,t){for(var r="",o=0;o<e.length;o++)r+=t(e[o],o,e,t)||"";return r}function ct(e,t,r,o){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case ve:return e.return=e.return||e.value;case ye:return"";case we:return e.return=e.value+"{"+st(e.children,o)+"}";case be:if(!Ne(e.value=e.props.join(",")))return""}return Ne(r=st(e.children,o))?e.return=e.value+"{"+r+"}":""}function dt(e,t,r,o){if(e.length>-1&&!e.return)switch(e.type){case ve:return void(e.return=lt(e.value,e.length,r));case we:return st([He(e,{value:ze(e.value,"@","@"+xe)})],o);case be:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(Se(t,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Be(He(e,{props:[ze(t,/:(read-\w+)/,":-moz-$1")]})),Be(He(e,{props:[t]})),$e(e,{props:Ee(r,o)});break;case"::placeholder":Be(He(e,{props:[ze(t,/:(plac\w+)/,":"+xe+"input-$1")]})),Be(He(e,{props:[ze(t,/:(plac\w+)/,":-moz-$1")]})),Be(He(e,{props:[ze(t,/:(plac\w+)/,me+"input-$1")]})),Be(He(e,{props:[t]})),$e(e,{props:Ee(r,o)})}return""})}}var ut={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ft="undefined"!=typeof process&&void 0!==process.env&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ht="active",pt="data-styled-version",mt="6.1.19",gt="/*!sc*/\n",xt="undefined"!=typeof window&&"undefined"!=typeof document,yt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),bt=Object.freeze([]),vt=Object.freeze({});var wt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ct=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kt=/(^-|-$)/g;function $t(e){return e.replace(Ct,"-").replace(kt,"")}var jt=/(a)(d)/gi,St=function(e){return String.fromCharCode(e+(e>25?39:97))};function zt(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=St(t%52)+r;return(St(t%52)+r).replace(jt,"$1-$2")}var Tt,At=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Pt=function(e){return At(5381,e)};function Nt(e){return"string"==typeof e&&!0}var It="function"==typeof Symbol&&Symbol.for,Rt=It?Symbol.for("react.memo"):60115,Et=It?Symbol.for("react.forward_ref"):60112,Mt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ft={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qt=((Tt={})[Et]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tt[Rt]=Lt,Tt);function Wt(e){return("type"in(t=e)&&t.type.$$typeof)===Rt?Lt:"$$typeof"in e?qt[e.$$typeof]:Mt;var t}var Ot=Object.defineProperty,Dt=Object.getOwnPropertyNames,Ht=Object.getOwnPropertySymbols,Bt=Object.getOwnPropertyDescriptor,_t=Object.getPrototypeOf,Yt=Object.prototype;function Ut(e,t,r){if("string"!=typeof t){if(Yt){var o=_t(t);o&&o!==Yt&&Ut(e,o,r)}var n=Dt(t);Ht&&(n=n.concat(Ht(t)));for(var i=Wt(e),a=Wt(t),l=0;l<n.length;++l){var s=n[l];if(!(s in Ft||r&&r[s]||a&&s in a||i&&s in i)){var c=Bt(t,s);try{Ot(e,s,c)}catch(d){}}}}return e}function Gt(e){return"function"==typeof e}function Xt(e){return"object"==typeof e&&"styledComponentId"in e}function Jt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zt(e,t){if(0===e.length)return"";for(var r=e[0],o=1;o<e.length;o++)r+=t?t+e[o]:e[o];return r}function Vt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Kt(e,t,r){if(void 0===r&&(r=!1),!r&&!Vt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=Kt(e[o],t[o]);else if(Vt(t))for(var o in t)e[o]=Kt(e[o],t[o]);return e}function Qt(e,t){Object.defineProperty(e,"toString",{value:t})}function er(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,n=o;e>=n;)if((n<<=1)<0)throw er(16,"".concat(e));this.groupSizes=new Uint32Array(n),this.groupSizes.set(r),this.length=n;for(var i=o;i<n;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),o=r+t;this.groupSizes[e]=0;for(var n=r;n<o;n++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],o=this.indexOfGroup(e),n=o+r,i=o;i<n;i++)t+="".concat(this.tag.getRule(i)).concat(gt);return t},e}(),rr=new Map,or=new Map,nr=1,ir=function(e){if(rr.has(e))return rr.get(e);for(;or.has(nr);)nr++;var t=nr++;return rr.set(e,t),or.set(t,e),t},ar=function(e,t){nr=t+1,rr.set(e,t),or.set(t,e)},lr="style[".concat(ft,"][").concat(pt,'="').concat(mt,'"]'),sr=new RegExp("^".concat(ft,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cr=function(e,t,r){for(var o,n=r.split(","),i=0,a=n.length;i<a;i++)(o=n[i])&&e.registerName(t,o)},dr=function(e,t){for(var r,o=(null!==(r=t.textContent)&&void 0!==r?r:"").split(gt),n=[],i=0,a=o.length;i<a;i++){var l=o[i].trim();if(l){var s=l.match(sr);if(s){var c=0|parseInt(s[1],10),d=s[2];0!==c&&(ar(d,c),cr(e,d,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(l)}}},ur=function(e){for(var t=document.querySelectorAll(lr),r=0,o=t.length;r<o;r++){var n=t[r];n&&n.getAttribute(ft)!==ht&&(dr(e,n),n.parentNode&&n.parentNode.removeChild(n))}};var fr=function(e){var t,r,o=document.head,n=e||o,i=document.createElement("style"),a=(t=n,(r=Array.from(t.querySelectorAll("style[".concat(ft,"]"))))[r.length-1]),l=void 0!==a?a.nextSibling:null;i.setAttribute(ft,ht),i.setAttribute(pt,mt);var s="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return s&&i.setAttribute("nonce",s),n.insertBefore(i,l),i},hr=function(){function e(e){this.element=fr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,o=t.length;r<o;r++){var n=t[r];if(n.ownerNode===e)return n}throw er(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(r){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),pr=function(){function e(e){this.element=fr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),mr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),gr=xt,xr={isServer:!xt,useCSSOMInjection:!yt},yr=function(){function e(e,t,r){void 0===e&&(e=vt),void 0===t&&(t={});var o=this;this.options=he(he({},xr),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&xt&&gr&&(gr=!1,ur(this)),Qt(this,function(){return function(e){for(var t=e.getTag(),r=t.length,o="",n=function(r){var n,i=(n=r,or.get(n));if(void 0===i)return"continue";var a=e.names.get(i),l=t.getGroup(r);if(void 0===a||!a.size||0===l.length)return"continue";var s="".concat(ft,".g").concat(r,'[id="').concat(i,'"]'),c="";void 0!==a&&a.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),o+="".concat(l).concat(s,'{content:"').concat(c,'"}').concat(gt)},i=0;i<r;i++)n(i);return o}(o)})}return e.registerId=function(e){return ir(e)},e.prototype.rehydrate=function(){!this.server&&xt&&ur(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(he(he({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,r=e.target,o=e.isServer?new mr(r):t?new hr(r):new pr(r),new tr(o)));var e,t,r,o},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ir(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(ir(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ir(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),br=/&/g,vr=/^\s*\/\/.*$/gm;function wr(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=wr(e.children,t)),e})}var Cr=new yr,kr=function(e){var t,r,o,n=void 0===e?vt:e,i=n.options,a=void 0===i?vt:i,l=n.plugins,s=void 0===l?bt:l,c=function(e,o,n){return n.startsWith(r)&&n.endsWith(r)&&n.replaceAll(r,"").length>0?".".concat(t):e},d=s.slice();d.push(function(e){e.type===be&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(br,r).replace(o,c))}),a.prefix&&d.push(dt),d.push(ct);var u=function(e,n,i,l){void 0===n&&(n=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,r=n,o=new RegExp("\\".concat(r,"\\b"),"g");var s=e.replace(vr,""),c=rt(i||n?"".concat(i," ").concat(n," { ").concat(s," }"):s);a.namespace&&(c=wr(c,a.namespace));var u,f,h,p=[];return st(c,(u=d.concat((h=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&h(e)})),f=Ie(u),function(e,t,r,o){for(var n="",i=0;i<f;i++)n+=u[i](e,t,r,o)||"";return n})),p};return u.hash=s.length?s.reduce(function(e,t){return t.name||er(15),At(e,t.name)},5381).toString():"",u}(),$r=o.createContext({shouldForwardProp:void 0,styleSheet:Cr,stylis:kr});function jr(){return e.useContext($r)}$r.Consumer,o.createContext(void 0);var Sr=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=kr);var o=r.name+t.hash;e.hasNameForId(r.id,o)||e.insertRules(r.id,o,t(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Qt(this,function(){throw er(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=kr),this.name+e.hash},e}(),zr=function(e){return e>="A"&&e<="Z"};function Tr(e){for(var t="",r=0;r<e.length;r++){var o=e[r];if(1===r&&"-"===o&&"-"===e[0])return e;zr(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var Ar=function(e){return null==e||!1===e||""===e},Pr=function(e){var t,r,o=[];for(var n in e){var i=e[n];e.hasOwnProperty(n)&&!Ar(i)&&(Array.isArray(i)&&i.isCss||Gt(i)?o.push("".concat(Tr(n),":"),i,";"):Vt(i)?o.push.apply(o,pe(pe(["".concat(n," {")],Pr(i),!1),["}"],!1)):o.push("".concat(Tr(n),": ").concat((t=n,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ut||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function Nr(e,t,r,o){return Ar(e)?[]:Xt(e)?[".".concat(e.styledComponentId)]:Gt(e)?!Gt(n=e)||n.prototype&&n.prototype.isReactComponent||!t?[e]:Nr(e(t),t,r,o):e instanceof Sr?r?(e.inject(r,o),[e.getName(o)]):[e]:Vt(e)?Pr(e):Array.isArray(e)?Array.prototype.concat.apply(bt,e.map(function(e){return Nr(e,t,r,o)})):[e.toString()];var n}var Ir=Pt(mt),Rr=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Gt(r)&&!Xt(r))return!1}return!0}(e),this.componentId=t,this.baseHash=At(Ir,t),this.baseStyle=r,yr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=Jt(o,this.staticRulesId);else{var n=Zt(Nr(this.rules,e,t,r)),i=zt(At(this.baseHash,n)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(n,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}o=Jt(o,i),this.staticRulesId=i}else{for(var l=At(this.baseHash,r.hash),s="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)s+=d;else if(d){var u=Zt(Nr(d,e,t,r));l=At(l,u+c),s+=u}}if(s){var f=zt(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(s,".".concat(f),void 0,this.componentId)),o=Jt(o,f)}}return o},e}(),Er=o.createContext(void 0);Er.Consumer;var Mr={};function Fr(t,r,n){var i,a=Xt(t),l=t,s=!Nt(t),c=r.attrs,d=void 0===c?bt:c,u=r.componentId,f=void 0===u?function(e,t){var r="string"!=typeof e?"sc":$t(e);Mr[r]=(Mr[r]||0)+1;var o="".concat(r,"-").concat(function(e){return zt(Pt(e)>>>0)}(mt+r+Mr[r]));return t?"".concat(t,"-").concat(o):o}(r.displayName,r.parentComponentId):u,h=r.displayName,p=void 0===h?Nt(i=t)?"styled.".concat(i):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(i),")"):h,m=r.displayName&&r.componentId?"".concat($t(r.displayName),"-").concat(r.componentId):r.componentId||f,g=a&&l.attrs?l.attrs.concat(d).filter(Boolean):d,x=r.shouldForwardProp;if(a&&l.shouldForwardProp){var y=l.shouldForwardProp;if(r.shouldForwardProp){var b=r.shouldForwardProp;x=function(e,t){return y(e,t)&&b(e,t)}}else x=y}var v=new Rr(n,m,a?l.componentStyle:void 0);function w(t,r){return function(t,r,n){var i=t.attrs,a=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,c=t.styledComponentId,d=t.target,u=o.useContext(Er),f=jr(),h=t.shouldForwardProp||f.shouldForwardProp,p=function(e,t,r){return void 0===r&&(r=vt),e.theme!==r.theme&&e.theme||t||r.theme}(r,u,l)||vt,m=function(e,t,r){for(var o,n=he(he({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var a=Gt(o=e[i])?o(n):o;for(var l in a)n[l]="className"===l?Jt(n[l],a[l]):"style"===l?he(he({},n[l]),a[l]):a[l]}return t.className&&(n.className=Jt(n.className,t.className)),n}(i,r,p),g=m.as||d,x={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===p||("forwardedAs"===y?x.as=m.forwardedAs:h&&!h(y,g)||(x[y]=m[y]));var b,v,w,C=(b=a,v=m,w=jr(),b.generateAndInjectStyles(v,w.styleSheet,w.stylis)),k=Jt(s,c);return C&&(k+=" "+C),m.className&&(k+=" "+m.className),x[Nt(g)&&!wt.has(g)?"class":"className"]=k,n&&(x.ref=n),e.createElement(g,x)}(C,t,r)}w.displayName=p;var C=o.forwardRef(w);return C.attrs=g,C.componentStyle=v,C.displayName=p,C.shouldForwardProp=x,C.foldedComponentIds=a?Jt(l.foldedComponentIds,l.styledComponentId):"",C.styledComponentId=m,C.target=a?l.target:t,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var o=0,n=t;o<n.length;o++)Kt(e,n[o],!0);return e}({},l.defaultProps,e):e}}),Qt(C,function(){return".".concat(C.styledComponentId)}),s&&Ut(C,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Lr(e,t){for(var r=[e[0]],o=0,n=t.length;o<n;o+=1)r.push(t[o],e[o+1]);return r}var qr=function(e){return Object.assign(e,{isCss:!0})};function Wr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Gt(e)||Vt(e))return qr(Nr(Lr(bt,pe([e],t,!0))));var o=e;return 0===t.length&&1===o.length&&"string"==typeof o[0]?Nr(o):qr(Nr(Lr(o,t)))}function Or(e,t,r){if(void 0===r&&(r=vt),!t)throw er(1,t);var o=function(o){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return e(t,r,Wr.apply(void 0,pe([o],n,!1)))};return o.attrs=function(o){return Or(e,t,he(he({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return Or(e,t,he(he({},r),o))},o}var Dr=function(e){return Or(Fr,e)},Hr=Dr;wt.forEach(function(e){Hr[e]=Dr(e)});const Br=Hr.nav`
  background-color: #2196F3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
`,_r=Hr.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  
  /* 竖屏显示时减小标题栏高度 */
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 8px 16px;
  }
`,Yr=Hr(i)`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  
  /* 竖屏显示时减小字体大小 */
  @media (max-width: 768px) and (orientation: portrait) {
    font-size: 16px;
    gap: 6px;
  }
`,Ur=Hr.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  
  /* 竖屏显示时减小图标尺寸 */
  @media (max-width: 768px) and (orientation: portrait) {
    width: 22px;
    height: 22px;
  }
`,Gr=Hr.div`
  position: relative;
`,Xr=Hr.button`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border: none;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 36px;
  
  /* 竖屏显示时减小按钮尺寸 */
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 6px 12px;
    font-size: 12px;
    min-height: 30px;
    gap: 6px;
  }
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surfaceHover)||"#f8f9fa"}};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`,Jr=Hr.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 1001;
`,Zr=Hr.button`
  background-color: transparent;
  border: none;
  width: 110px;
  padding: 10px 12px;
  text-align: left;
  cursor: pointer;
  font-size: 13px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  }
  
  &.selected {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)?`${e.theme.primary}22`:"#4a6cf722"}};
    color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
    font-weight: 600;
  }
`;Hr.span`
  width: 20px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  font-size: 12px;
  font-weight: bold;
`;const Vr=({langCode:e,size:t=20})=>"zh-CN"===e?v.jsxs("svg",{width:t,height:.667*t,viewBox:"0 0 30 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[v.jsx("rect",{width:"30",height:"20",fill:"#DE2910"}),v.jsx("path",{d:"M4 3 L6 4.5 L4 6 L3 4.5 Z",fill:"#FFDE00"}),v.jsx("path",{d:"M7.5 1.5 L8 2.5 L9 2.5 L8.25 3.25 L8.5 4 L7.5 3.25 L6.5 4 L6.75 3.25 L6 2.5 L7 2.5 Z",fill:"#FFDE00",transform:"rotate(-30 7.5 3)"}),v.jsx("path",{d:"M9.5 2.5 L10 3.5 L11 3.5 L10.25 4.25 L10.5 5 L9.5 4.25 L8.5 5 L8.75 4.25 L8 3.5 L9 3.5 Z",fill:"#FFDE00",transform:"rotate(-10 9.5 4)"}),v.jsx("path",{d:"M9.5 5.5 L10 6.5 L11 6.5 L10.25 7.25 L10.5 8 L9.5 7.25 L8.5 8 L8.75 7.25 L8 6.5 L9 6.5 Z",fill:"#FFDE00",transform:"rotate(70 9.5 7)"}),v.jsx("path",{d:"M7.5 7 L8 8 L9 8 L8.25 8.75 L8.5 9.5 L7.5 8.75 L6.5 9.5 L6.75 8.75 L6 8 L7 8 Z",fill:"#FFDE00",transform:"rotate(110 7.5 8.5)"})]}):v.jsxs("svg",{width:t,height:.667*t,viewBox:"0 0 30 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[v.jsx("rect",{width:"30",height:"20",fill:"#B22234"}),v.jsx("rect",{y:"2",width:"30",height:"2",fill:"white"}),v.jsx("rect",{y:"6",width:"30",height:"2",fill:"white"}),v.jsx("rect",{y:"10",width:"30",height:"2",fill:"white"}),v.jsx("rect",{y:"14",width:"30",height:"2",fill:"white"}),v.jsx("rect",{y:"18",width:"30",height:"2",fill:"white"}),v.jsx("rect",{width:"12",height:"11",fill:"#3C3B6E"}),v.jsxs("g",{fill:"white",children:[v.jsx("rect",{x:"1",y:"1",width:"1",height:"1"}),v.jsx("rect",{x:"3",y:"1",width:"1",height:"1"}),v.jsx("rect",{x:"5",y:"1",width:"1",height:"1"}),v.jsx("rect",{x:"7",y:"1",width:"1",height:"1"}),v.jsx("rect",{x:"9",y:"1",width:"1",height:"1"}),v.jsx("rect",{x:"1",y:"3",width:"1",height:"1"}),v.jsx("rect",{x:"3",y:"3",width:"1",height:"1"}),v.jsx("rect",{x:"5",y:"3",width:"1",height:"1"}),v.jsx("rect",{x:"7",y:"3",width:"1",height:"1"}),v.jsx("rect",{x:"9",y:"3",width:"1",height:"1"}),v.jsx("rect",{x:"1",y:"5",width:"1",height:"1"}),v.jsx("rect",{x:"3",y:"5",width:"1",height:"1"}),v.jsx("rect",{x:"5",y:"5",width:"1",height:"1"}),v.jsx("rect",{x:"7",y:"5",width:"1",height:"1"}),v.jsx("rect",{x:"9",y:"5",width:"1",height:"1"}),v.jsx("rect",{x:"1",y:"7",width:"1",height:"1"}),v.jsx("rect",{x:"3",y:"7",width:"1",height:"1"}),v.jsx("rect",{x:"5",y:"7",width:"1",height:"1"}),v.jsx("rect",{x:"7",y:"7",width:"1",height:"1"}),v.jsx("rect",{x:"9",y:"7",width:"1",height:"1"}),v.jsx("rect",{x:"1",y:"9",width:"1",height:"1"}),v.jsx("rect",{x:"3",y:"9",width:"1",height:"1"}),v.jsx("rect",{x:"5",y:"9",width:"1",height:"1"}),v.jsx("rect",{x:"7",y:"9",width:"1",height:"1"}),v.jsx("rect",{x:"9",y:"9",width:"1",height:"1"})]})]}),Kr=()=>v.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})}),Qr=()=>{oe();const{language:t,changeLanguage:r}=le(),o=n(),[i,a]=e.useState(!1);e.useEffect(()=>{const e=e=>{e.target.closest(".language-selector")||a(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const l=e=>{r(e),a(!1)};return v.jsx(Br,{children:v.jsxs(_r,{children:[v.jsxs(Yr,{to:"/",children:[v.jsx(Ur,{src:"/sudoku-app-logo.svg",alt:"Sudoku Logo"}),"SudokuTech"]}),v.jsxs("div",{style:{display:"flex",gap:"10px"},children:[v.jsxs(Gr,{className:"language-selector",children:[v.jsxs(Xr,{onClick:()=>{a(!i)},children:[v.jsx(Vr,{langCode:t,size:20}),"zh-CN"===t?"中文":"English"]}),i&&v.jsxs(Jr,{children:[v.jsxs(Zr,{className:"zh-CN"===t?"selected":"",onClick:()=>l("zh-CN"),children:[v.jsx(Vr,{langCode:"zh-CN",size:16}),"中文"]}),v.jsxs(Zr,{className:"en-US"===t?"selected":"",onClick:()=>l("en-US"),children:[v.jsx(Vr,{langCode:"en-US",size:16}),"English"]})]})]}),v.jsx(Xr,{onClick:()=>{o("/settings")},title:"设置",children:v.jsx(Kr,{})})]})]})})},eo=(()=>{const e=new Date,t=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return`${t}.${localStorage.getItem(`version_${t}_count`)||1}`})(),to=Hr.footer`
  background-color: ${e=>e.theme.surface};
  color: ${e=>e.theme.textSecondary};
  padding: 20px 0;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`,ro=Hr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${e=>e.theme.mediaQueries.small} {
    padding: 0 15px;
  }
`,oo=Hr.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
  ${e=>e.theme.mediaQueries.small} {
    gap: 15px;
  }
`,no=Hr.a`
  color: ${e=>e.theme.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${e=>e.theme.primary};
  }
`,io=Hr.div`
  font-size: 14px;
  line-height: 1.5;
`,ao=Hr.div`
  font-size: 12px;
  margin-top: 10px;
`,lo=()=>{const{theme:e}=oe(),{t:t}=le(),r=(new Date).getFullYear();return v.jsx(to,{theme:e,children:v.jsxs(ro,{theme:e,children:[v.jsxs(oo,{theme:e,children:[v.jsx(no,{href:"#",theme:e,children:t("aboutUs")}),v.jsx(no,{href:"#",theme:e,children:t("help")}),v.jsx(no,{href:"#",theme:e,children:t("sudokuRules")}),v.jsx(no,{href:"#",theme:e,children:t("contactUs")})]}),v.jsxs(io,{theme:e,children:["© ",r," ",t("appName")," ",t("copyright")]}),v.jsxs(ao,{theme:e,children:[t("version")," ",eo]})]})})},so=Hr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`,co=Hr.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${e=>e.theme.background};
  border-top: 4px solid ${e=>e.theme.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,uo=Hr.div`
  color: ${e=>e.theme.text};
  font-size: 16px;
  font-weight: 500;
`,fo=({showMessage:e=!0})=>{const{theme:t}=oe(),{loadingMessage:r}=de();return v.jsxs(so,{children:[v.jsx(co,{theme:t}),e&&v.jsx(uo,{theme:t,children:r})]})},ho=Hr.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  transition: background-color 0.3s ease, color 0.3s ease;
`,po=Hr.main`
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 640px) {
    padding: 15px;
  }
`,mo=Hr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;function go({children:e}){const{theme:t}=oe(),{isLoading:r}=de();return v.jsxs(fe,{children:[" ",v.jsxs(ho,{theme:t,children:[v.jsx(Qr,{}),v.jsx(po,{children:e}),v.jsx(lo,{}),r&&v.jsx(mo,{children:v.jsx(fo,{})})]})]})}const xo=e.createContext(),yo=({children:t})=>{const[r,o]=e.useState(null),[n,i]=e.useState(!1),[a,l]=e.useState({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),[s,d]=e.useState({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}}),u=e.useRef(!1);e.useEffect(()=>{f()},[]);const f=async()=>{try{let e=await c.getItem("userId");e||(e="user_"+Date.now()+"_"+Math.random().toString(36).substr(2,9),await c.setItem("userId",e),u.current||(u.current=!0,K.success("欢迎使用数独学习应用！",{position:"top-right",autoClose:2e3}))),o(e),i(!0);const t=await c.getItem(`stats_${e}`);t&&l(t);const r=await c.getItem(`techniques_${e}`);r&&d(r)}catch(e){console.error("初始化用户失败:",e),K.error("初始化用户数据失败",{position:"top-right",autoClose:2e3})}},h=async(e,t)=>{try{const o={...s,[e]:{...s[e],...t}};d(o),r&&await c.setItem(`techniques_${r}`,o)}catch(o){console.error("更新技巧学习进度失败:",o)}},p={userId:r,isAuthenticated:n,userStats:a,techniquesProgress:s,updateUserStats:async e=>{try{const t={...a,...e};l(t),r&&await c.setItem(`stats_${r}`,t)}catch(t){console.error("更新用户统计失败:",t)}},updateTechniqueProgress:h,incrementTechniquePractice:async e=>{const t=s[e]||{mastered:0,practiced:0};await h(e,{practiced:t.practiced+1})},resetUserData:async()=>{try{r&&(await c.removeItem(`stats_${r}`),await c.removeItem(`techniques_${r}`),await c.removeItem(`progress_${r}`)),l({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),d({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}}),K.success("用户数据已重置",{position:"top-right",autoClose:2e3})}catch(e){console.error("重置用户数据失败:",e),K.error("重置用户数据失败",{position:"top-right",autoClose:2e3})}}};return v.jsx(xo.Provider,{value:p,children:t})},bo=()=>{const t=e.useContext(xo);if(!t)throw new Error("useUser must be used within a UserContextProvider");return t},vo=d.create({baseURL:"/",timeout:1e4,headers:{"Content-Type":"application/json"}});vo.interceptors.request.use(e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),vo.interceptors.response.use(e=>e.data,e=>{var t,r,o,n;const i=(null==(r=null==(t=e.response)?void 0:t.data)?void 0:r.message)||(null==(n=null==(o=e.response)?void 0:o.data)?void 0:n.error)||"请求失败，请重试";return K.error(i,{position:"top-right",autoClose:2e3}),Promise.reject(e)});const wo={generatePuzzle:async e=>{try{return await vo.post("/sudoku/puzzles/generate",{difficulty:e})}catch(t){throw console.error("生成数独谜题失败:",t),t}},getRandomPuzzleByDifficulty:async e=>{try{console.log(`Fetching puzzle with difficulty: ${e}`);const t=await vo.get(`/sudoku/puzzles/random/${e}`);if(!t||!t.puzzle)return console.error("Invalid puzzle data received from server"),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e};const{puzzle:r,solution:o,difficulty:n}=t;console.log("完整响应数据:",JSON.stringify(t));let i=o;return i&&Array.isArray(i)&&9===i.length||(console.warn("Solution data is missing or invalid"),i=Array(9).fill().map(()=>Array(9).fill(0))),{puzzle:r,solution:i,difficulty:n||e}}catch(t){return console.error("Error fetching puzzle:",t),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e}}},getPuzzleById:async e=>{try{return await vo.get(`/sudoku/puzzles/${e}`)}catch(t){throw console.error("获取谜题失败:",t),t}},solveSudoku:async e=>{try{return await vo.post("/sudoku/solve",{board:e})}catch(t){throw console.error("求解数独失败:",t),t}},validateSudoku:async e=>{try{return await vo.post("/sudoku/validate",{board:e})}catch(t){throw console.error("验证数独失败:",t),t}},getCandidates:async(e,t,r)=>{try{return await vo.post("/sudoku/candidates",{board:e,row:t,col:r})}catch(o){throw console.error("获取候选数失败:",o),o}},identifyTechniques:async e=>{try{return await vo.post("/sudoku/techniques",{board:e})}catch(t){throw console.error("识别技巧失败:",t),t}},getHint:async(e,t)=>{try{return await vo.post("/sudoku/hint",{board:e,solution:t})}catch(r){throw console.error("获取提示失败:",r),r}},getPuzzleList:async(e={})=>{try{return await vo.get("/sudoku/puzzles",{params:e})}catch(t){throw console.error("获取谜题列表失败:",t),t}},getPuzzleStats:async()=>{try{return await vo.get("/sudoku/puzzles/stats")}catch(e){throw console.error("获取谜题统计失败:",e),e}},getUserProgress:async e=>{try{return await vo.get(`/user/progress/${e}`)}catch(t){throw console.error("获取用户进度失败:",t),t}},saveUserProgress:async(e,t)=>{try{return await vo.post(`/user/progress/${e}`,t)}catch(r){throw console.error("保存用户进度失败:",r),r}},getActiveProgress:async()=>{try{return await vo.get("/user/progress/active")}catch(e){throw console.error("获取活跃进度失败:",e),e}},getCompletedPuzzles:async()=>{try{return await vo.get("/user/progress/completed")}catch(e){throw console.error("获取已完成谜题失败:",e),e}},deleteUserProgress:async e=>{try{return await vo.delete(`/user/progress/${e}`)}catch(t){throw console.error("删除用户进度失败:",t),t}},getUserTechniques:async()=>{try{return await vo.get("/user/techniques")}catch(e){throw console.error("获取用户技巧学习情况失败:",e),e}},updateTechniqueLearning:async(e,t)=>{try{return await vo.post(`/user/techniques/${e}`,t)}catch(r){throw console.error("更新技巧学习情况失败:",r),r}},incrementTechniquePractice:async e=>{try{return await vo.post(`/user/techniques/${e}/practice`)}catch(t){throw console.error("增加技巧练习次数失败:",t),t}},getUserStats:async()=>{try{return await vo.get("/user/stats")}catch(e){throw console.error("获取用户统计信息失败:",e),e}},healthCheck:async()=>{try{return(await d.get("/health")).data}catch(e){throw console.error("健康检查失败:",e),e}}};let Co=class{constructor(e,t){this.row=e,this.col=t,this.up=this,this.down=this,this.left=this,this.right=this,this.colHead=null}};class ko extends Co{constructor(e){super(-1,e),this.size=0}}const $o=()=>Array(9).fill().map(()=>Array(9).fill(0)),jo=new class{constructor(){this.root=new Co(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[]}setupSudokuMatrix(e){this.colHeaders=[];for(let r=0;r<324;r++){const e=new ko(r);this.colHeaders.push(e)}let t=this.root;for(let r=0;r<324;r++)t.right=this.colHeaders[r],this.colHeaders[r].left=t,t=this.colHeaders[r];t.right=this.root,this.root.left=t,this.rows=[];for(let r=0;r<9;r++)for(let t=0;t<9;t++)for(let o=1;o<=9;o++){if(0!==e[r][t]&&e[r][t]!==o)continue;const n=[9*r+t,81+9*r+(o-1),162+9*t+(o-1),243+9*(3*Math.floor(r/3)+Math.floor(t/3))+(o-1)],i=[];for(let e of n){const t=new Co(this.rows.length,e);t.colHead=this.colHeaders[e],i.push(t)}for(let e=0;e<i.length;e++)i[e].left=i[(e-1+i.length)%i.length],i[e].right=i[(e+1)%i.length];for(let e of i){const t=e.colHead;e.up=t.up,t.up.down=e,e.down=t,t.up=e,t.size++}this.rows.push([r,t,o])}}selectColumn(){let e=1/0,t=null;for(let r=this.root.right;r!==this.root;r=r.right)r.size<e&&(e=r.size,t=r);return t}coverColumn(e){e.left.right=e.right,e.right.left=e.left;for(let t=e.down;t!==e;t=t.down)for(let e=t.right;e!==t;e=e.right)e.up.down=e.down,e.down.up=e.up,e.colHead.size--}uncoverColumn(e){for(let t=e.up;t!==e;t=t.up)for(let e=t.left;e!==t;e=e.left)e.up.down=e,e.down.up=e,e.colHead.size++;e.left.right=e,e.right.left=e}search(e=2){const t=[],r=()=>{if(this.root.right===this.root)return t.push([...this.solution]),t.length<e;const o=this.selectColumn();this.coverColumn(o);for(let e=o.down;e!==o;e=e.down){this.solution.push(this.rows[e.row]);for(let t=e.right;t!==e;t=t.right)this.coverColumn(t.colHead);if(!r())return!1;this.solution.pop();for(let t=e.left;t!==e;t=t.left)this.uncoverColumn(t.colHead)}return this.uncoverColumn(o),!0};return r(),t}solveSudoku(e){this.root=new Co(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);const t=this.search(1);if(0===t.length)return null;const r=Array(9).fill().map(()=>Array(9).fill(0));for(let[o,n,i]of t[0])r[o][n]=i;return r}hasUniqueSolution(e){this.root=new Co(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);return 1===this.search(2).length}},So=(e,t,r,o)=>{for(let a=0;a<9;a++)if(a!==r&&e[t][a]===o)return!1;for(let a=0;a<9;a++)if(a!==t&&e[a][r]===o)return!1;const n=3*Math.floor(t/3),i=3*Math.floor(r/3);for(let a=n;a<n+3;a++)for(let n=i;n<i+3;n++)if(a!==t&&n!==r&&e[a][n]===o)return!1;return!0},zo=e=>{for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(0===e[t][r])return[t,r];return null},To=e=>{try{return jo.hasUniqueSolution(e)}catch(t){return console.error("验证数独唯一性时出错:",t),Ao(e)}},Ao=e=>{const t=e.map(e=>[...e]);let r=0;const o=()=>{if(r>1)return;const e=zo(t);if(!e)return void r++;const[n,i]=e;for(let r=1;r<=9;r++)So(t,n,i,r)&&(t[n][i]=r,o(),t[n][i]=0)};return o(),1===r},Po=()=>{const e=[1,2,3,4,5,6,7,8,9];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},No=async(e="medium")=>{console.log(`开始生成${e}难度的数独题目`);const t=(()=>{console.debug("开始生成完整的数独解");for(let t=1;t<=10;t++)try{const e=$o();for(let t=0;t<9;t+=3){const r=Po();let o=0;for(let n=0;n<3;n++)for(let i=0;i<3;i++)e[t+n][t+i]=r[o++]}const r=jo.solveSudoku(e);if(r&&Io(r))return console.debug(`成功生成完整数独解（尝试次数：${t}）`),r;const o=()=>{const t=zo(e);if(!t)return!0;const[r,n]=t,i=Po();for(const a of i)if(So(e,r,n,a)){if(e[r][n]=a,o())return!0;e[r][n]=0}return!1};if(o()&&Io(e))return console.debug(`使用回溯算法成功生成完整数独解（尝试次数：${t}）`),e}catch(e){console.error(`生成数独解时出错（尝试 ${t}/10）:`,e)}return console.error("超过最大尝试次数（10），无法生成有效的数独解"),null})();if(!t)return console.error("生成完整数独解失败"),null;const r=t.map(e=>[...e]);let o;switch(e){case"easy":o=40;break;case"medium":default:o=50;break;case"hard":o=55;break;case"expert":o=60}let n=0;const i=[];for(let a=0;a<9;a++)for(let e=0;e<9;e++)i.push([a,e]);for(let a=i.length-1;a>0;a--){const e=Math.floor(Math.random()*(a+1));[i[a],i[e]]=[i[e],i[a]]}for(const[a,l]of i){if(n>=o)break;const e=r[a][l];r[a][l]=0,To(r)?(n++,console.debug(`已移除单元格(${a},${l})，当前已移除${n}/${o}个`)):r[a][l]=e}return To(r)||console.warn(`警告：生成的${e}难度题目可能没有唯一解，尝试重新生成`),console.log(`成功生成${e}难度数独题目，保留了${81-n}个数字`),{puzzle:r,solution:t}},Io=e=>{for(let t=0;t<9;t++){const r=new Set;for(let o=0;o<9;o++){const n=e[t][o];if(0!==n){if(r.has(n))return!1;r.add(n)}}}for(let t=0;t<9;t++){const r=new Set;for(let o=0;o<9;o++){const n=e[o][t];if(0!==n){if(r.has(n))return!1;r.add(n)}}}for(let t=0;t<3;t++)for(let r=0;r<3;r++){const o=new Set;for(let n=0;n<3;n++)for(let i=0;i<3;i++){const a=3*r+i,l=e[3*t+n][a];if(0!==l){if(o.has(l))return!1;o.add(l)}}}return!0};let Ro=null,Eo=null;const Mo=18e5,Fo=async()=>{try{console.log("开始获取随机专家级题目");const e=await(async()=>{try{const e=Date.now();if(Ro&&Eo&&e-Eo<Mo)return console.log("使用缓存的专家级题目数据"),Ro;const t=await c.getItem("expert_puzzles_cache");if(t&&t.timestamp&&e-t.timestamp<Mo)return console.log("从localforage加载缓存的专家级题目"),Ro=t.data,Eo=t.timestamp,Ro;console.log("从JSON文件加载专家级题目");const r=await fetch("/expert_puzzles.json");if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const o=await r.json();if(!o.puzzles||!Array.isArray(o.puzzles))throw new Error("无效的专家级题目数据格式");return Ro=o.puzzles,Eo=e,await c.setItem("expert_puzzles_cache",{data:o.puzzles,timestamp:e}),console.log(`成功加载 ${o.puzzles.length} 个专家级题目`),o.puzzles}catch(e){return console.error("加载专家级题目失败:",e),[]}})();if(!e||0===e.length)return console.warn("没有可用的专家级题目"),null;const t=e[Math.floor(Math.random()*e.length)];if(!t||!t.puzzle||!t.solution){if(console.error("选中的谜题数据不完整:",t),e.length>1){console.log("尝试重新选择另一个谜题");const t=e.filter(e=>e&&e.puzzle&&e.solution);if(t.length>0){const e=Math.floor(Math.random()*t.length);return console.log(`重新选择有效专家级题目 #${t[e].id||"unknown"}`),t[e]}}return null}return console.log(`随机选择专家级题目 #${t.id||"unknown"}`),t}catch(e){return console.error("获取随机专家级题目失败:",e),null}},Lo=(e,t,r)=>{const o=[],n={};for(let i=1;i<=9;i++)n[i]=[];for(let i=0;i<9;i++){if(0!==e[r][i])continue;(t[`${r}-${i}`]||[]).forEach(e=>{n[e]&&n[e].push(i)})}for(let i=1;i<=9;i++)if(1===n[i].length){const e=n[i][0],a=t[`${r}-${e}`]||[];o.push({type:"notesSingle",description:"notesSingle",row:r,col:e,value:i,cells:[[r,e]],notes:a,message:`在第${r+1}行中，候选数${i}只能填入单元格(${r+1},${e+1})`})}return o},qo=(e,t,r)=>{const o=[],n={};for(let i=1;i<=9;i++)n[i]=[];for(let i=0;i<9;i++){if(0!==e[i][r])continue;(t[`${i}-${r}`]||[]).forEach(e=>{n[e]&&n[e].push(i)})}for(let i=1;i<=9;i++)if(1===n[i].length){const e=n[i][0],a=t[`${e}-${r}`]||[];o.push({type:"notesSingle",description:"notesSingle",row:e,col:r,value:i,cells:[[e,r]],notes:a,message:`在第${r+1}列中，候选数${i}只能填入单元格(${e+1},${r+1})`})}return o},Wo=(e,t,r)=>{const o=[],n=3*Math.floor(r/3),i=r%3*3,a={};for(let l=1;l<=9;l++)a[l]=[];for(let l=0;l<3;l++)for(let r=0;r<3;r++){const o=n+l,s=i+r;if(0!==e[o][s])continue;(t[`${o}-${s}`]||[]).forEach(e=>{a[e]&&a[e].push({row:o,col:s,r:l,c:r})})}for(let l=1;l<=9;l++)if(1===a[l].length){const{row:e,col:n}=a[l][0],i=t[`${e}-${n}`]||[];o.push({type:"notesSingle",description:"notesSingle",row:e,col:n,value:l,cells:[[e,n]],notes:i,message:`在第${r+1}宫中，候选数${l}只能填入单元格(${e+1},${n+1})`})}return o},Oo=(e,t)=>{const r=[];for(let o=1;o<=9;o++){let n=0,i=-1;for(let r=0;r<9&&!(0===e[t][r]&&(So(e,t,r,o)&&(n++,i=r),n>1));r++);1===n&&r.push({type:"hiddenSingleRow",description:"hiddenSingleRow",row:t,col:i,value:o,cells:[[t,i]],message:`在第${t+1}行中，数字${o}只能填入单元格(${t+1},${i+1})`})}return r},Do=(e,t)=>{const r=[];for(let o=1;o<=9;o++){let n=0,i=-1;for(let r=0;r<9&&!(0===e[r][t]&&(So(e,r,t,o)&&(n++,i=r),n>1));r++);1===n&&r.push({type:"hiddenSingleCol",description:"hiddenSingleCol",row:i,col:t,value:o,cells:[[i,t]],message:`在第${t+1}列中，数字${o}只能填入单元格(${i+1},${t+1})`})}return r},Ho=(e,t)=>{const r=[],o=3*Math.floor(t/3),n=t%3*3;for(let i=1;i<=9;i++){let a=0,l=-1,s=-1;for(let t=0;t<3;t++){for(let r=0;r<3;r++){const c=o+t,d=n+r;if(0===e[c][d]&&(So(e,c,d,i)&&(a++,l=c,s=d),a>1))break}if(a>1)break}1===a&&r.push({type:"hiddenSingleBox",description:"hiddenSingleBox",row:l,col:s,value:i,cells:[[l,s]],message:`在第${t+1}宫中，数字${i}只能填入单元格(${l+1},${s+1})`})}return r},Bo=(e,t,r,o)=>{const n=[];for(let i=0;i<9;i++){const o=[];for(let n=0;n<9;n++)if(0===e[i][n]){(t[`${i}-${n}`]||[]).includes(r)&&o.push(n)}n.push(o)}for(let i=0;i<8;i++)if(2===n[i].length)for(let a=i+1;a<9;a++)if(2===n[a].length&&n[i][0]===n[a][0]&&n[i][1]===n[a][1]){const l=n[i][0],s=n[i][1],c=[],d=[];[l,s].forEach(o=>{for(let n=0;n<9;n++)if(n!==i&&n!==a&&0===e[n][o]){(t[`${n}-${o}`]||[]).includes(r)&&(c.push([n,o]),d.push(r))}}),c.length>0&&o.push({type:"xWingRow",description:`X-Wing (Row) for number ${r}`,number:r,rows:[i,a],cols:[l,s],cells:[[i,l],[i,s],[a,l],[a,s]],targetCells:c,removableCandidates:d,message:`X-Wing技巧（行）：在第${i+1}行和第${a+1}行中，数字${r}只出现在第${l+1}列和第${s+1}列中，形成一个两行两列的矩形结构。由于这个数字在这两行中只能出现在相同的两列，因此可以确定该数字在这两列的其他行中不可能存在，可以删除第${l+1}列和第${s+1}列中除第${i+1}行和第${a+1}行外其他单元格的数字${r}候选数`})}},_o=(e,t,r,o)=>{const n=[];for(let i=0;i<9;i++){const o=[];for(let n=0;n<9;n++)if(0===e[n][i]){(t[`${n}-${i}`]||[]).includes(r)&&o.push(n)}n.push(o)}for(let i=0;i<8;i++)if(2===n[i].length)for(let a=i+1;a<9;a++)if(2===n[a].length&&n[i][0]===n[a][0]&&n[i][1]===n[a][1]){const l=n[i][0],s=n[i][1],c=[],d=[];[l,s].forEach(o=>{for(let n=0;n<9;n++)if(n!==i&&n!==a&&0===e[o][n]){(t[`${o}-${n}`]||[]).includes(r)&&(c.push([o,n]),d.push(r))}}),c.length>0&&o.push({type:"xWingCol",description:`X-Wing (Col) for number ${r}`,number:r,rows:[l,s],cols:[i,a],cells:[[l,i],[l,a],[s,i],[s,a]],targetCells:c,removableCandidates:d,message:`X-Wing技巧（列）：在第${i+1}列和第${a+1}列中，数字${r}只出现在第${l+1}行和第${s+1}行中，形成一个两行两列的矩形结构。由于这个数字在这两列中只能出现在相同的两行，因此可以确定该数字在这两行的其他列中不可能存在，可以删除第${l+1}行和第${s+1}行中除第${i+1}列和第${a+1}列外其他单元格的数字${r}候选数`})}},Yo=(e,t,r,o)=>{const n=[];for(let i=0;i<9;i++){const o=[];for(let n=0;n<9;n++)if(0===e[i][n]){(t[`${i}-${n}`]||[]).includes(r)&&o.push(n)}n.push(o)}for(let i=0;i<7;i++)if(!(n[i].length<2||n[i].length>3))for(let a=i+1;a<8;a++)if(!(n[a].length<2||n[a].length>3))for(let l=a+1;l<9;l++){if(n[l].length<2||n[l].length>3)continue;const s=new Set([...n[i],...n[a],...n[l]]);if(3===s.size){const c=Array.from(s).sort((e,t)=>e-t),d=[];[i,a,l].forEach(e=>{n[e].forEach(t=>{s.has(t)&&d.push([e,t])})});const u=[],f=[];c.forEach(o=>{for(let n=0;n<9;n++)if(n!==i&&n!==a&&n!==l&&0===e[n][o]){(t[`${n}-${o}`]||[]).includes(r)&&(u.push([n,o]),f.push(r))}}),u.length>0&&o.push({type:"swordfishRow",description:`Swordfish (Row) for number ${r}`,number:r,rows:[i,a,l],cols:c,cells:d,targetCells:u,removableCandidates:f,message:`Swordfish技巧（行）：在第${i+1}行、第${a+1}行和第${l+1}行中，数字${r}只出现在第${c.map(e=>e+1).join("、")}列中，形成一个三行三列的结构。由于这个数字在这三行中只能出现在相同的三列，因此可以确定该数字在这三列的其他行中不可能存在，可以删除第${c.map(e=>e+1).join("、")}列中除这三行外其他单元格的数字${r}候选数`})}}},Uo=(e,t,r,o)=>{const n=[];for(let i=0;i<9;i++){const o=[];for(let n=0;n<9;n++)if(0===e[n][i]){(t[`${n}-${i}`]||[]).includes(r)&&o.push(n)}n.push(o)}for(let i=0;i<7;i++)if(!(n[i].length<2||n[i].length>3))for(let a=i+1;a<8;a++)if(!(n[a].length<2||n[a].length>3))for(let l=a+1;l<9;l++){if(n[l].length<2||n[l].length>3)continue;const s=new Set([...n[i],...n[a],...n[l]]);if(3===s.size){const c=Array.from(s).sort((e,t)=>e-t),d=[];[i,a,l].forEach(e=>{n[e].forEach(t=>{s.has(t)&&d.push([t,e])})});const u=[],f=[];c.forEach(o=>{for(let n=0;n<9;n++)if(n!==i&&n!==a&&n!==l&&0===e[o][n]){(t[`${o}-${n}`]||[]).includes(r)&&(u.push([o,n]),f.push(r))}}),u.length>0&&o.push({type:"swordfishCol",description:`Swordfish (Col) for number ${r}`,number:r,rows:c,cols:[i,a,l],cells:d,targetCells:u,removableCandidates:f,message:`Swordfish技巧（列）：在第${i+1}列、第${a+1}列和第${l+1}列中，数字${r}只出现在第${c.map(e=>e+1).join("、")}行中，形成一个三行三列的结构。由于这个数字在这三列中只能出现在相同的三行，因此可以确定该数字在这三行的其他列中不可能存在，可以删除第${c.map(e=>e+1).join("、")}行中除这三列外其他单元格的数字${r}候选数`})}}},Go=(e,t,r,o)=>{const n=[];for(let i=0;i<9;i++){const o=[];for(let n=0;n<9;n++)if(0===e[i][n]){(t[`${i}-${n}`]||[]).includes(r)&&o.push(n)}n.push(o)}for(let i=0;i<6;i++)if(!(n[i].length<2||n[i].length>4))for(let a=i+1;a<7;a++)if(!(n[a].length<2||n[a].length>4))for(let l=a+1;l<8;l++)if(!(n[l].length<2||n[l].length>4))for(let s=l+1;s<9;s++){if(n[s].length<2||n[s].length>4)continue;const c=new Set([...n[i],...n[a],...n[l],...n[s]]);if(4===c.size){const d=Array.from(c).sort((e,t)=>e-t),u=[];[i,a,l,s].forEach(e=>{n[e].forEach(t=>{c.has(t)&&u.push([e,t])})});const f=[],h=[];d.forEach(o=>{for(let n=0;n<9;n++)if(n!==i&&n!==a&&n!==l&&n!==s&&0===e[n][o]){(t[`${n}-${o}`]||[]).includes(r)&&(f.push([n,o]),h.push(r))}}),f.length>0&&o.push({type:"jellyfishRow",description:`Jellyfish (Row) for number ${r}`,number:r,rows:[i,a,l,s],cols:d,cells:u,targetCells:f,removableCandidates:h,message:`Jellyfish技巧（行）：在第${i+1}行、第${a+1}行、第${l+1}行和第${s+1}行中，数字${r}只出现在第${d.map(e=>e+1).join("、")}列中，形成一个四行四列的结构。由于这个数字在这四行中只能出现在相同的四列，因此可以确定该数字在这四列的其他行中不可能存在，可以删除第${d.map(e=>e+1).join("、")}列中除这四行外其他单元格的数字${r}候选数`})}}},Xo=(e,t,r,o)=>{const n=[];for(let i=0;i<9;i++){const o=[];for(let n=0;n<9;n++)if(0===e[n][i]){(t[`${n}-${i}`]||[]).includes(r)&&o.push(n)}n.push(o)}for(let i=0;i<6;i++)if(!(n[i].length<2||n[i].length>4))for(let a=i+1;a<7;a++)if(!(n[a].length<2||n[a].length>4))for(let l=a+1;l<8;l++)if(!(n[l].length<2||n[l].length>4))for(let s=l+1;s<9;s++){if(n[s].length<2||n[s].length>4)continue;const c=new Set([...n[i],...n[a],...n[l],...n[s]]);if(4===c.size){const d=Array.from(c).sort((e,t)=>e-t),u=[];[i,a,l,s].forEach(e=>{n[e].forEach(t=>{c.has(t)&&u.push([t,e])})});const f=[],h=[];d.forEach(o=>{for(let n=0;n<9;n++)if(n!==i&&n!==a&&n!==l&&n!==s&&0===e[o][n]){(t[`${o}-${n}`]||[]).includes(r)&&(f.push([o,n]),h.push(r))}}),f.length>0&&o.push({type:"jellyfishCol",description:`Jellyfish (Col) for number ${r}`,number:r,rows:d,cols:[i,a,l,s],cells:u,targetCells:f,removableCandidates:h,message:`Jellyfish技巧（列）：在第${i+1}列、第${a+1}列、第${l+1}列和第${s+1}列中，数字${r}只出现在第${d.map(e=>e+1).join("、")}行中，形成一个四行四列的结构。由于这个数字在这四列中只能出现在相同的四行，因此可以确定该数字在这四行的其他列中不可能存在，可以删除第${d.map(e=>e+1).join("、")}行中除这四列外其他单元格的数字${r}候选数`})}}},Jo=(e,t={},r=!0)=>{const o=(e=>{const t=[];for(let r=0;r<9;r++)for(let o=0;o<9;o++){if(0!==e[r][o])continue;const n=[];for(let t=1;t<=9;t++)So(e,r,o,t)&&n.push(t);1===n.length&&t.push({type:"nakedSingle",description:"nakedSingle",row:r,col:o,value:n[0],cells:[[r,o]],message:`单元格(${r+1},${o+1})只有数字${n[0]}可以填入`})}return t})(e),n=(e=>{const t=[],r=new Set;for(let o=0;o<9;o++){const n=Oo(e,o);for(const o of n){const n=`${o.row}-${o.col}`;r.has(n)||0!==e[o.row][o.col]||(r.add(n),t.push(o))}}for(let o=0;o<9;o++){const n=Do(e,o);for(const o of n){const n=`${o.row}-${o.col}`;r.has(n)||0!==e[o.row][o.col]||(r.add(n),t.push(o))}}for(let o=0;o<9;o++){const n=Ho(e,o);for(const o of n){const n=`${o.row}-${o.col}`;r.has(n)||0!==e[o.row][o.col]||(r.add(n),t.push(o))}}return t})(e),i=r&&Object.keys(t).length>0?((e,t={})=>{const r=[],o=new Set;for(let n=0;n<9;n++){const i=Lo(e,t,n);for(const t of i){const n=`${t.row}-${t.col}`;o.has(n)||0!==e[t.row][t.col]||(o.add(n),r.push(t))}}for(let n=0;n<9;n++){const i=qo(e,t,n);for(const t of i){const n=`${t.row}-${t.col}`;o.has(n)||0!==e[t.row][t.col]||(o.add(n),r.push(t))}}for(let n=0;n<9;n++){const i=Wo(e,t,n);for(const t of i){const n=`${t.row}-${t.col}`;o.has(n)||0!==e[t.row][t.col]||(o.add(n),r.push(t))}}return r})(e,t):[];let a=[],l=[],s=[],c=[],d=[],u=[],f=[],h=[],p=[],m=[],g=[];r&&Object.keys(t).length>0&&(a=((e,t={})=>{const r=[],o=o=>{const n=[];for(let r=0;r<9;r++){if(0!==e[o][r])continue;const i=t[`${o}-${r}`]||[];2===i.length&&n.push({row:o,col:r,notes:i})}for(let i=0;i<n.length-1;i++)for(let a=i+1;a<n.length;a++){const l=n[i],s=n[a];if(l.notes.sort().join(",")===s.notes.sort().join(",")){let n=!1;const i=[],a=[];for(let r=0;r<9;r++){if(r===l.col||r===s.col)continue;if(0!==e[o][r])continue;const c=(t[`${o}-${r}`]||[]).filter(e=>l.notes.includes(e));c.length>0&&(n=!0,i.push([o,r]),c.forEach(e=>a.push(e)))}n&&r.push({type:"nakedPairRow",description:"显性数对法(行)",cells:[[l.row,l.col],[s.row,s.col]],values:l.notes,targetCells:i,targetCellsDetails:i.map((e,r)=>{const[o,n]=e;return{row:o,col:n,notesToRemove:(t[`${o}-${n}`]||[]).filter(e=>l.notes.includes(e))}}),removableCandidates:a,message:`在第${o+1}行，单元格(${l.col+1})和(${s.col+1})形成显性数对[${l.notes.join(",")}]`})}}},n=o=>{const n=[];for(let r=0;r<9;r++){if(0!==e[r][o])continue;const i=t[`${r}-${o}`]||[];2===i.length&&n.push({row:r,col:o,notes:i})}for(let i=0;i<n.length-1;i++)for(let a=i+1;a<n.length;a++){const l=n[i],s=n[a];if(l.notes.sort().join(",")===s.notes.sort().join(",")){let n=!1;const i=[],a=[];for(let r=0;r<9;r++){if(r===l.row||r===s.row)continue;if(0!==e[r][o])continue;const c=(t[`${r}-${o}`]||[]).filter(e=>l.notes.includes(e));c.length>0&&(n=!0,i.push([r,o]),c.forEach(e=>a.push(e)))}n&&r.push({type:"nakedPairCol",description:"显性数对法(列)",cells:[[l.row,l.col],[s.row,s.col]],values:l.notes,targetCells:i,targetCellsDetails:i.map((e,r)=>{const[o,n]=e;return{row:o,col:n,notesToRemove:(t[`${o}-${n}`]||[]).filter(e=>l.notes.includes(e))}}),removableCandidates:a,message:`在第${o+1}列，单元格(${l.row+1})和(${s.row+1})形成显性数对[${l.notes.join(",")}]`})}}},i=(o,n)=>{const i=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const l=3*o+r,s=3*n+a;if(0!==e[l][s])continue;const c=t[`${l}-${s}`]||[];2===c.length&&i.push({row:l,col:s,notes:c})}for(let a=0;a<i.length-1;a++)for(let l=a+1;l<i.length;l++){const s=i[a],c=i[l];if(s.notes.sort().join(",")===c.notes.sort().join(",")){let i=!1;const a=[],l=[];for(let r=0;r<3;r++)for(let d=0;d<3;d++){const u=3*o+r,f=3*n+d;if(u===s.row&&f===s.col||u===c.row&&f===c.col)continue;if(0!==e[u][f])continue;const h=(t[`${u}-${f}`]||[]).filter(e=>s.notes.includes(e));h.length>0&&(i=!0,a.push([u,f]),h.forEach(e=>l.push(e)))}i&&r.push({type:"nakedPairBox",description:"显性数对法(宫)",cells:[[s.row,s.col],[c.row,c.col]],values:s.notes,targetCells:a,targetCellsDetails:a.map((e,r)=>{const[o,n]=e;return{row:o,col:n,notesToRemove:(t[`${o}-${n}`]||[]).filter(e=>s.notes.includes(e))}}),removableCandidates:l,message:`在第${3*o+n+1}宫，单元格(${s.row+1},${s.col+1})和(${c.row+1},${c.col+1})形成显性数对[${s.notes.join(",")}]`})}}};for(let a=0;a<9;a++)o(a),n(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),l=((e,t={})=>{const r=[],o=o=>{const n={};for(let e=1;e<=9;e++)n[e]=[];for(let r=0;r<9;r++)0===e[o][r]&&(t[`${o}-${r}`]||[]).forEach(e=>{n[e]&&n[e].push(r)});const i=Object.keys(n).map(Number).filter(e=>2===n[e].length);for(let e=0;e<i.length-1;e++)for(let a=e+1;a<i.length;a++){const l=i[e],s=i[a];if(n[l].sort().join(",")===n[s].sort().join(",")){const e=n[l];let i=!1;const a=[],c=[],d=[];e.forEach(e=>{const r=(t[`${o}-${e}`]||[]).filter(e=>e!==l&&e!==s);r.length>0&&(i=!0,a.push([o,e]),r.forEach(e=>c.push(e)),d.push({row:o,col:e,notesToRemove:r}))}),i&&r.push({type:"hiddenPairRow",description:"隐性数对法(行)",cells:[[o,e[0]],[o,e[1]]],values:[l,s],targetCells:a,targetCellsDetails:d,removableCandidates:c,message:`在第${o+1}行，数字${l}和${s}只能出现在单元格(${e[0]+1})和(${e[1]+1})中`})}}},n=o=>{const n={};for(let e=1;e<=9;e++)n[e]=[];for(let r=0;r<9;r++)0===e[r][o]&&(t[`${r}-${o}`]||[]).forEach(e=>{n[e]&&n[e].push(r)});const i=Object.keys(n).map(Number).filter(e=>2===n[e].length);for(let e=0;e<i.length-1;e++)for(let a=e+1;a<i.length;a++){const l=i[e],s=i[a];if(n[l].sort().join(",")===n[s].sort().join(",")){const e=n[l];let i=!1;const a=[],c=[],d=[];e.forEach(e=>{const r=(t[`${e}-${o}`]||[]).filter(e=>e!==l&&e!==s);r.length>0&&(i=!0,a.push([e,o]),r.forEach(e=>c.push(e)),d.push({row:e,col:o,notesToRemove:r}))}),i&&r.push({type:"hiddenPairCol",description:"隐性数对法(列)",cells:[[e[0],o],[e[1],o]],values:[l,s],targetCells:a,targetCellsDetails:d,removableCandidates:c,message:`在第${o+1}列，数字${l}和${s}只能出现在单元格(${e[0]+1})和(${e[1]+1})中`})}}},i=(o,n)=>{const i={};for(let e=1;e<=9;e++)i[e]=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const l=3*o+r,s=3*n+a;0===e[l][s]&&(t[`${l}-${s}`]||[]).forEach(e=>{i[e]&&i[e].push({row:l,col:s})})}const a=Object.keys(i).map(Number).filter(e=>2===i[e].length);for(let e=0;e<a.length-1;e++)for(let l=e+1;l<a.length;l++){const s=a[e],c=a[l],d=i[s].map(e=>`${e.row}-${e.col}`).sort(),u=i[c].map(e=>`${e.row}-${e.col}`).sort();if(d.join(",")===u.join(",")){const e=i[s];let a=!1;const l=[],d=[],u=[];e.forEach(e=>{const r=`${e.row}-${e.col}`,o=(t[r]||[]).filter(e=>e!==s&&e!==c);o.length>0&&(a=!0,l.push([e.row,e.col]),o.forEach(e=>d.push(e)),u.push({row:e.row,col:e.col,notesToRemove:o}))}),a&&r.push({type:"hiddenPairBox",description:"隐性数对法(宫)",cells:e.map(e=>[e.row,e.col]),values:[s,c],targetCells:l,targetCellsDetails:u,removableCandidates:d,message:`在第${3*o+n+1}宫，数字${s}和${c}只能出现在单元格(${e[0].row+1},${e[0].col+1})和(${e[1].row+1},${e[1].col+1})中`})}}};for(let a=0;a<9;a++)o(a),n(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),s=((e,t={})=>{const r=[];for(let o=0;o<3;o++)for(let n=0;n<3;n++)for(let i=1;i<=9;i++){const a=[];for(let t=0;t<3;t++)for(let r=0;r<3;r++){const l=3*o+t,s=3*n+r;0===e[l][s]&&So(e,l,s,i)&&a.push({row:l,col:s,r:t,c:r})}if(a.length<2)continue;const l=a.every(e=>e.r===a[0].r),s=a.every(e=>e.c===a[0].c);if(l){const l=3*o+a[0].r,s=[],c=[],d=[];for(let r=0;r<9;r++)r>=3*n&&r<3*(n+1)||0!==e[l][r]||!So(e,l,r,i)||(t[`${l}-${r}`]||[]).includes(i)&&(s.push([l,r]),c.push(i),d.push({row:l,col:r,notesToRemove:[i]}));s.length>0&&r.push({type:"pointingPairsRow",description:"指向对法(行)",boxRow:o,boxCol:n,row:l,number:i,sourceCells:a.map(e=>[e.row,e.col]),targetCells:s,targetCellsDetails:d,removableCandidates:c,message:`在第${3*o+n+1}宫，数字${i}只能出现在第${l+1}行，可以排除该行其他宫格中数字${i}的可能性`})}else if(s){const l=3*n+a[0].c,s=[],c=[],d=[];for(let r=0;r<9;r++)r>=3*o&&r<3*(o+1)||0!==e[r][l]||!So(e,r,l,i)||(t[`${r}-${l}`]||[]).includes(i)&&(s.push([r,l]),c.push(i),d.push({row:r,col:l,notesToRemove:[i]}));s.length>0&&r.push({type:"pointingPairsCol",description:"指向对法(列)",boxRow:o,boxCol:n,col:l,number:i,sourceCells:a.map(e=>[e.row,e.col]),targetCells:s,targetCellsDetails:d,removableCandidates:c,message:`在第${3*o+n+1}宫，数字${i}只能出现在第${l+1}列，可以排除该列其他宫格中数字${i}的可能性`})}}return r})(e,t),c=((e,t={})=>{const r=[];for(let o=0;o<9;o++)for(let n=1;n<=9;n++){const i=[];for(let t=0;t<9;t++)0===e[o][t]&&So(e,o,t,n)&&i.push({row:o,col:t});if(i.length<1)continue;const a=i.map(e=>Math.floor(e.col/3));if(a.every(e=>e===a[0])){const l=a[0],s=Math.floor(o/3),c=[],d=[],u=[];for(let r=3*s;r<3*(s+1);r++)if(r!==o)for(let o=3*l;o<3*(l+1);o++)0===e[r][o]&&So(e,r,o,n)&&(t[`${r}-${o}`]||[]).includes(n)&&(c.push([r,o]),d.push(n),u.push({row:r,col:o,notesToRemove:[n]}));c.length>0&&r.push({type:"boxLineReductionRow",description:"宫行列排除法(行)",row:o,boxRow:s,boxCol:l,number:n,sourceCells:i.map(e=>[e.row,e.col]),targetCells:c,targetCellsDetails:u,removableCandidates:d,message:`在第${o+1}行，数字${n}只能出现在第${3*s+l+1}宫，可以排除该宫中其他行数字${n}的可能性`})}}for(let o=0;o<9;o++)for(let n=1;n<=9;n++){const i=[];for(let t=0;t<9;t++)0===e[t][o]&&So(e,t,o,n)&&i.push({row:t,col:o});if(i.length<1)continue;const a=i.map(e=>Math.floor(e.row/3));if(a.every(e=>e===a[0])){const l=a[0],s=Math.floor(o/3),c=[],d=[],u=[];for(let r=3*l;r<3*(l+1);r++)for(let i=3*s;i<3*(s+1);i++)i!==o&&0===e[r][i]&&So(e,r,i,n)&&(t[`${r}-${i}`]||[]).includes(n)&&(c.push([r,i]),d.push(n),u.push({row:r,col:i,notesToRemove:[n]}));c.length>0&&r.push({type:"boxLineReductionCol",description:"宫行列排除法(列)",col:o,boxRow:l,boxCol:s,number:n,sourceCells:i.map(e=>[e.row,e.col]),targetCells:c,targetCellsDetails:u,removableCandidates:d,message:`在第${o+1}列，数字${n}只能出现在第${3*l+s+1}宫，可以排除该宫中其他列数字${n}的可能性`})}}return r})(e,t),d=((e,t={})=>{const r=[],o=o=>{const n=[];for(let r=0;r<9;r++){if(0!==e[o][r])continue;const i=t[`${o}-${r}`]||[];i.length>=1&&i.length<=3&&n.push({row:o,col:r,notes:i})}for(let i=0;i<n.length-2;i++)for(let a=i+1;a<n.length-1;a++)for(let l=a+1;l<n.length;l++){const s=n[i],c=n[a],d=n[l],u=[...new Set([...s.notes,...c.notes,...d.notes])];if(3===u.length){const n=s.notes.every(e=>u.includes(e)),i=c.notes.every(e=>u.includes(e)),a=d.notes.every(e=>u.includes(e));if(n&&i&&a){let n=!1;const i=[],a=[];for(let r=0;r<9;r++){if(r===s.col||r===c.col||r===d.col)continue;if(0!==e[o][r])continue;const l=(t[`${o}-${r}`]||[]).filter(e=>u.includes(e));l.length>0&&(n=!0,i.push([o,r]),l.forEach(e=>a.push(e)))}n&&r.push({type:"nakedTripleRow",description:"显性三链数法(行)",cells:[[s.row,s.col],[c.row,c.col],[d.row,d.col]],values:u,targetCells:i,removableCandidates:a,conditionCellsDetails:[{row:s.row,col:s.col,notes:s.notes},{row:c.row,col:c.col,notes:c.notes},{row:d.row,col:d.col,notes:d.notes}],targetCellsDetails:i.map((e,r)=>{const[o,n]=e;return{row:o,col:n,notesToRemove:(t[`${o}-${n}`]||[]).filter(e=>u.includes(e))}}),message:`在第${o+1}行，单元格(${s.col+1})、(${c.col+1})和(${d.col+1})形成显性三链数[${u.join(",")}]`})}}}},n=o=>{const n=[];for(let r=0;r<9;r++){if(0!==e[r][o])continue;const i=t[`${r}-${o}`]||[];i.length>=1&&i.length<=3&&n.push({row:r,col:o,notes:i})}for(let i=0;i<n.length-2;i++)for(let a=i+1;a<n.length-1;a++)for(let l=a+1;l<n.length;l++){const s=n[i],c=n[a],d=n[l],u=[...new Set([...s.notes,...c.notes,...d.notes])];if(3===u.length){const n=s.notes.every(e=>u.includes(e)),i=c.notes.every(e=>u.includes(e)),a=d.notes.every(e=>u.includes(e));if(n&&i&&a){let n=!1;const i=[],a=[];for(let r=0;r<9;r++){if(r===s.row||r===c.row||r===d.row)continue;if(0!==e[r][o])continue;const l=(t[`${r}-${o}`]||[]).filter(e=>u.includes(e));l.length>0&&(n=!0,i.push([r,o]),l.forEach(e=>a.push(e)))}n&&r.push({type:"nakedTripleCol",description:"显性三链数法(列)",cells:[[s.row,s.col],[c.row,c.col],[d.row,d.col]],values:u,targetCells:i,removableCandidates:a,conditionCellsDetails:[{row:s.row,col:s.col,notes:s.notes},{row:c.row,col:c.col,notes:c.notes},{row:d.row,col:d.col,notes:d.notes}],targetCellsDetails:i.map((e,r)=>{const[o,n]=e;return{row:o,col:n,notesToRemove:(t[`${o}-${n}`]||[]).filter(e=>u.includes(e))}}),message:`在第${o+1}列，单元格(${s.row+1})、(${c.row+1})和(${d.row+1})形成显性三链数[${u.join(",")}]`})}}}},i=(o,n)=>{const i=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const l=3*o+r,s=3*n+a;if(0!==e[l][s])continue;const c=t[`${l}-${s}`]||[];c.length>=1&&c.length<=3&&i.push({row:l,col:s,notes:c})}for(let a=0;a<i.length-2;a++)for(let l=a+1;l<i.length-1;l++)for(let s=l+1;s<i.length;s++){const c=i[a],d=i[l],u=i[s],f=[...new Set([...c.notes,...d.notes,...u.notes])];if(3===f.length){const i=c.notes.every(e=>f.includes(e)),a=d.notes.every(e=>f.includes(e)),l=u.notes.every(e=>f.includes(e));if(i&&a&&l){let i=!1;const a=[],l=[];for(let r=0;r<3;r++)for(let s=0;s<3;s++){const h=3*o+r,p=3*n+s;if(h===c.row&&p===c.col||h===d.row&&p===d.col||h===u.row&&p===u.col)continue;if(0!==e[h][p])continue;const m=(t[`${h}-${p}`]||[]).filter(e=>f.includes(e));m.length>0&&(i=!0,a.push([h,p]),m.forEach(e=>l.push(e)))}i&&r.push({type:"nakedTripleBox",description:"显性三链数法(宫)",cells:[[c.row,c.col],[d.row,d.col],[u.row,u.col]],values:f,targetCells:a,removableCandidates:l,conditionCellsDetails:[{row:c.row,col:c.col,notes:c.notes},{row:d.row,col:d.col,notes:d.notes},{row:u.row,col:u.col,notes:u.notes}],targetCellsDetails:a.map((e,r)=>{const[o,n]=e;return{row:o,col:n,notesToRemove:(t[`${o}-${n}`]||[]).filter(e=>f.includes(e))}}),message:`在第${3*o+n+1}宫，单元格(${c.row+1},${c.col+1})、(${d.row+1},${d.col+1})和(${u.row+1},${u.col+1})形成显性三链数[${f.join(",")}]`})}}}};for(let a=0;a<9;a++)o(a),n(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),u=((e,t={})=>{const r=[],o=o=>{const n={};for(let e=1;e<=9;e++)n[e]=[];for(let r=0;r<9;r++)0===e[o][r]&&(t[`${o}-${r}`]||[]).forEach(e=>{n[e]&&n[e].push(r)});const i=Object.keys(n).map(Number).filter(e=>3===n[e].length);for(let e=0;e<i.length-2;e++)for(let a=e+1;a<i.length-1;a++)for(let l=a+1;l<i.length;l++){const s=i[e],c=i[a],d=i[l],u=n[s].sort().join(","),f=n[c].sort().join(","),h=n[d].sort().join(",");if(u===f&&f===h){const e=n[s];let i=!1;const a=[],l=[],u=[];e.forEach(e=>{const r=(t[`${o}-${e}`]||[]).filter(e=>e!==s&&e!==c&&e!==d);r.length>0&&(i=!0,a.push([o,e]),r.forEach(e=>l.push(e)),u.push({row:o,col:e,notesToRemove:r}))}),i&&r.push({type:"hiddenTripleRow",description:"隐性三链数法(行)",cells:[[o,e[0]],[o,e[1]],[o,e[2]]],values:[s,c,d],targetCells:a,targetCellsDetails:u,removableCandidates:l,message:`在第${o+1}行，数字${s}、${c}和${d}只能出现在单元格(${e[0]+1})、(${e[1]+1})和(${e[2]+1})中`})}}},n=o=>{const n={};for(let e=1;e<=9;e++)n[e]=[];for(let r=0;r<9;r++)0===e[r][o]&&(t[`${r}-${o}`]||[]).forEach(e=>{n[e]&&n[e].push(r)});const i=Object.keys(n).map(Number).filter(e=>3===n[e].length);for(let e=0;e<i.length-2;e++)for(let a=e+1;a<i.length-1;a++)for(let l=a+1;l<i.length;l++){const s=i[e],c=i[a],d=i[l],u=n[s].sort().join(","),f=n[c].sort().join(","),h=n[d].sort().join(",");if(u===f&&f===h){const e=n[s];let i=!1;const a=[],l=[],u=[];e.forEach(e=>{const r=(t[`${e}-${o}`]||[]).filter(e=>e!==s&&e!==c&&e!==d);r.length>0&&(i=!0,a.push([e,o]),r.forEach(e=>l.push(e)),u.push({row:e,col:o,notesToRemove:r}))}),i&&r.push({type:"hiddenTripleCol",description:"隐性三链数法(列)",cells:[[e[0],o],[e[1],o],[e[2],o]],values:[s,c,d],targetCells:a,targetCellsDetails:u,removableCandidates:l,message:`在第${o+1}列，数字${s}、${c}和${d}只能出现在单元格(${e[0]+1})、(${e[1]+1})和(${e[2]+1})中`})}}},i=(o,n)=>{const i={};for(let e=1;e<=9;e++)i[e]=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const l=3*o+r,s=3*n+a;0===e[l][s]&&(t[`${l}-${s}`]||[]).forEach(e=>{i[e]&&i[e].push({row:l,col:s})})}const a=Object.keys(i).map(Number).filter(e=>3===i[e].length);for(let e=0;e<a.length-2;e++)for(let l=e+1;l<a.length-1;l++)for(let s=l+1;s<a.length;s++){const c=a[e],d=a[l],u=a[s],f=i[c].map(e=>`${e.row}-${e.col}`).sort().join(","),h=i[d].map(e=>`${e.row}-${e.col}`).sort().join(","),p=i[u].map(e=>`${e.row}-${e.col}`).sort().join(",");if(f===h&&h===p){const e=i[c];let a=!1;const l=[],s=[],f=[];e.forEach(e=>{const r=`${e.row}-${e.col}`,o=(t[r]||[]).filter(e=>e!==c&&e!==d&&e!==u);o.length>0&&(a=!0,l.push([e.row,e.col]),o.forEach(e=>s.push(e)),f.push({row:e.row,col:e.col,notesToRemove:o}))}),a&&r.push({type:"hiddenTripleBox",description:"隐性三链数法(宫)",cells:e.map(e=>[e.row,e.col]),values:[c,d,u],targetCells:l,targetCellsDetails:f,removableCandidates:s,message:`在第${3*o+n+1}宫，数字${c}、${d}和${u}只能出现在单元格(${e[0].row+1},${e[0].col+1})、(${e[1].row+1},${e[1].col+1})和(${e[2].row+1},${e[2].col+1})中`})}}};for(let a=0;a<9;a++)o(a),n(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),f=((e,t)=>{const r=[];for(let o=1;o<=9;o++)Bo(e,t,o,r),_o(e,t,o,r);return r})(e,t),h=((e,t={})=>{const r=[],o=(e,t)=>{if(e.row===t.row)return!0;if(e.col===t.col)return!0;const r=Math.floor(e.row/3),o=Math.floor(e.col/3),n=Math.floor(t.row/3),i=Math.floor(t.col/3);return r===n&&o===i},n=(e,t)=>e.filter(e=>t.includes(e)),i=(()=>{const r=[];for(let o=0;o<9;o++)for(let n=0;n<9;n++){if(0!==e[o][n])continue;const i=t[`${o}-${n}`]||[];2===i.length&&r.push({row:o,col:n,notes:i})}return r})();for(let a=0;a<i.length;a++){const l=i[a],[s,c]=l.notes,d=[],u=[];for(let e=0;e<i.length;e++){if(a===e)continue;const t=i[e];if(!o(l,t))continue;const r=n(l.notes,t.notes);if(1===r.length){if(r[0]===s&&t.notes.includes(s)&&t.notes.includes(c))continue;if(r[0]===s){const e=t.notes.find(e=>e!==s);e&&e!==c&&d.push({...t,z:e})}else if(r[0]===c){const e=t.notes.find(e=>e!==c);e&&e!==s&&u.push({...t,z:e})}}}for(const o of d)for(const n of u){if(o.z!==n.z)continue;const i=o.z,a=[],d=[],u=[];for(let r=0;r<9;r++)for(let s=0;s<9;s++){if(0!==e[r][s])continue;if(r===l.row&&s===l.col||r===o.row&&s===o.col||r===n.row&&s===n.col)continue;const c=r===o.row||s===o.col||Math.floor(r/3)===Math.floor(o.row/3)&&Math.floor(s/3)===Math.floor(o.col/3),f=r===n.row||s===n.col||Math.floor(r/3)===Math.floor(n.row/3)&&Math.floor(s/3)===Math.floor(n.col/3);c&&f&&(t[`${r}-${s}`]||[]).includes(i)&&(a.push([r,s]),d.push(i),u.push({row:r,col:s,notesToRemove:[i]}))}a.length>0&&r.push({type:"yWing",description:"Y-Wing(XY-Wing)",anchorCell:[l.row,l.col],xzCell:[o.row,o.col],yzCell:[n.row,n.col],cells:[[l.row,l.col],[o.row,o.col],[n.row,n.col]],x:s,y:c,z:i,targetCells:a,targetCellsDetails:u,removableCandidates:d,message:`Y-Wing技巧：这是一个由三个双候选数单元格组成的特殊结构。锚点单元格(${l.row+1},${l.col+1})包含候选数[${s},${c}]，XZ单元格(${o.row+1},${o.col+1})包含候选数[${s},${i}]，YZ单元格(${n.row+1},${n.col+1})包含候选数[${c},${i}]。由于锚点单元格与XZ、YZ单元格分别共享候选数x和y，且XZ和YZ单元格都包含候选数z，因此可以确定在同时受XZ和YZ单元格影响的交叉单元格中，候选数z不可能存在，可以删除这些交叉单元格中的数字${i}候选数`})}}return r})(e,t),p=((e,t)=>{const r=[];for(let o=1;o<=9;o++)Yo(e,t,o,r),Uo(e,t,o,r);return r})(e,t),m=((e,t={})=>{const r=[],o=(e,t)=>{if(e.row===t.row)return!0;if(e.col===t.col)return!0;const r=Math.floor(e.row/3),o=Math.floor(e.col/3),n=Math.floor(t.row/3),i=Math.floor(t.col/3);return r===n&&o===i},n=(()=>{const r=[];for(let o=0;o<9;o++)for(let n=0;n<9;n++){if(0!==e[o][n])continue;const i=t[`${o}-${n}`]||[];2===i.length&&r.push({row:o,col:n,notes:i})}return r})(),i=(()=>{const r=[];for(let o=0;o<9;o++)for(let n=0;n<9;n++){if(0!==e[o][n])continue;const i=t[`${o}-${n}`]||[];3===i.length&&r.push({row:o,col:n,notes:i})}return r})();for(let s=0;s<i.length;s++){const a=i[s];for(let i=0;i<3;i++)for(let l=0;l<3;l++){if(i===l)continue;let s=0;for(;s===i||s===l;)s++;const c=a.notes[i],d=a.notes[l],u=a.notes[s],f=n.filter(e=>e.notes.includes(c)&&e.notes.includes(u)&&o(e,a)),h=n.filter(e=>e.notes.includes(d)&&e.notes.includes(u)&&o(e,a));for(let n=0;n<f.length;n++){const i=f[n];for(let n=0;n<h.length;n++){const l=h[n];if(i.row===l.row&&i.col===l.col)continue;const s=[],f=[],p=[];for(let r=0;r<9;r++)for(let n=0;n<9;n++){if(0!==e[r][n])continue;if(r===a.row&&n===a.col||r===i.row&&n===i.col||r===l.row&&n===l.col)continue;const c=o({row:r,col:n},i),d=o({row:r,col:n},l);c&&d&&(t[`${r}-${n}`]||[]).includes(u)&&(s.push([r,n]),f.push(u),p.push({row:r,col:n,notesToRemove:[u]}))}s.length>0&&r.push({type:"xyzWing",description:"XYZ-Wing",pivotCell:[a.row,a.col],xzCell:[i.row,i.col],yzCell:[l.row,l.col],cells:[[a.row,a.col],[i.row,i.col],[l.row,l.col]],x:c,y:d,z:u,common:u,targetCells:s,targetCellsDetails:p,removableCandidates:f,message:`XYZ-Wing技巧：这是一个由一个三候选数单元格和两个双候选数单元格组成的特殊结构。枢纽单元格(${a.row+1},${a.col+1})包含候选数[${a.notes.join(",")}]，XZ单元格(${i.row+1},${i.col+1})包含候选数[${i.notes.join(",")}], YZ单元格(${l.row+1},${l.col+1})包含候选数[${l.notes.join(",")}]. 由于枢纽单元格与XZ、YZ单元格分别共享候选数，且XZ和YZ单元格都包含候选数${u}，因此可以确定在同时受XZ和YZ单元格影响的交叉单元格中，候选数${u}不可能存在，可以删除这些交叉单元格中的数字${u}候选数`})}}}}const a=[],l=new Set;for(const s of r){const{pivotCell:e,xzCell:t,yzCell:r}=s,o=`${e[0]}-${e[1]}-${t[0]}-${t[1]}-${r[0]}-${r[1]}`,n=`${e[0]}-${e[1]}-${r[0]}-${r[1]}-${t[0]}-${t[1]}`;l.has(o)||l.has(n)||(a.push(s),l.add(o),l.add(n))}return a})(e,t),g=((e,t)=>{const r=[];for(let o=1;o<=9;o++)Go(e,t,o,r),Xo(e,t,o,r);return r})(e,t));const x=[...o,...n,...i];return r&&Object.keys(t).length>0&&(x.push(...a),x.push(...l),x.push(...s),x.push(...c),x.push(...d),x.push(...u),x.push(...f),x.push(...h),x.push(...p),x.push(...m),x.push(...g)),x},Zo=e.createContext(),Vo={EASY:"easy",MEDIUM:"medium",HARD:"hard",EXPERT:"expert"},Ko=({children:t})=>{const{userId:r,updateUserStats:o}=bo(),{t:n}=le(),[i,a]=e.useState(null),[l,s]=e.useState(null),[d,u]=e.useState(null),[f,h]=e.useState(null),[p,m]=e.useState(Vo.MEDIUM),[g,x]=e.useState(!1),[y,b]=e.useState(!1),[w,C]=e.useState(0),[k,$]=e.useState(!1),[j,S]=e.useState(!1),[z,T]=e.useState(null),[A,P]=e.useState({}),[N,I]=e.useState([]),[R,E]=e.useState([]),[M,F]=e.useState([]),[L,q]=e.useState(-1),[W,O]=e.useState(0),[D,H]=e.useState(0),[B,_]=e.useState(new Set),[Y,U]=e.useState(!1),[G,X]=e.useState({}),[J,Z]=e.useState(new Set),[V,Q]=e.useState(!1);e.useEffect(()=>{(async()=>{S(!0),console.log("SudokuContext: 初始化自动生成谜题");try{X({}),F([]),q(-1),O(0),H(0),_(new Set),Z(new Set),console.log("使用预设的数独题目");const e={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]};console.log("预设谜题数据:",e);const t=ie(e);console.log("格式化后的数据:",t),a(t),console.log("设置 currentPuzzle 完成"),u(t.puzzle),console.log("设置 originalPuzzle 完成"),s(t.puzzle),console.log("设置 currentBoard 完成，currentBoard:",t.puzzle),h(t.solution),console.log("设置 solution 完成"),x(!0),console.log("设置 gameStarted 为 true"),b(!1),$(!0),O(0),H(0),_(new Set),console.log("谜题初始化完成")}catch(e){console.error("自动初始化谜题失败:",e),console.error("错误详情:",e.message,e.stack)}finally{S(!1)}})()},[]),e.useEffect(()=>{if(i&&l&&g&&!y){const e=setTimeout(()=>{te()},3e4);return()=>clearTimeout(e)}},[l,g,y]),e.useEffect(()=>{let e;return k&&(e=setInterval(()=>{C(e=>e+1)},1e3)),()=>{e&&clearInterval(e)}},[k]);const ee=e.useCallback(async()=>{try{if(!r)return null;const e=(await c.keys()).filter(e=>e.startsWith(`progress_${r}_`));if(0===e.length)return null;let t=null,o=0;for(const r of e){const e=await c.getItem(r);e.lastModified>o&&(o=e.lastModified,t=e)}return t&&(a({id:t.puzzleId,puzzle:t.puzzle}),s(t.currentBoard),h(t.solution),m(t.difficulty),C(t.timeElapsed),x(t.gameStarted),b(t.gameCompleted),O(t.errorCount||0),H(t.errorCount||0),_(new Set(t.incorrectCells||[])),$(!1)),t}catch(e){return console.error("加载游戏进度失败:",e),null}},[r]),te=e.useCallback(async()=>{try{if(!r||!i||!l)return;const e={puzzleId:i.id,puzzle:i.puzzle,solution:f,difficulty:p,currentBoard:l,timeElapsed:w,gameStarted:g,gameCompleted:y,errorCount:D,incorrectCells:Array.from(B),lastModified:Date.now()};return await c.setItem(`progress_${r}_${i.id}`,e),!0}catch(e){return console.error("保存游戏进度失败:",e),!1}},[r,i,l,f,p,w,g,y,W,B]),re=()=>Array(9).fill().map(()=>Array(9).fill(0)),oe=async(e="medium")=>{try{console.log(`开始生成${e}难度的数独题目...`);const t=await No(e);if(console.log("generateSudoku 返回结果:",t),!t||!t.puzzle||!t.solution)throw console.error("生成的数独数据不完整:",t),new Error("生成的数独数据不完整");const{puzzle:r,solution:o}=t;return To(r)?(console.log(`成功生成${e}难度的数独题目，使用DLX算法验证了唯一解`),console.log("谜题数据预览:",r.slice(0,2).map(e=>e.slice(0,2).join(",")).join(";")),{puzzle:r,solution:o}):(console.warn("警告：生成的数独题目可能没有唯一解"),oe(e))}catch(t){return console.error(`生成${e}难度的数独题目时出错:`,t),await ne(e)}},ne=async(e="medium")=>{try{console.log(`使用备用方法生成${e}难度的数独题目...`);const{puzzle:t,solution:r}=await No(e);return console.log(`备用方法成功生成${e}难度的数独题目`),{puzzle:t,solution:r}}catch(t){console.error("备用方法生成数独题目失败:",t);const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];return console.log("使用预设的简单数独题目作为最后的备用"),{puzzle:e,solution:r}}},ie=e=>{if(console.log("formatPuzzleData 输入:",e),e&&e.puzzle){if("string"==typeof e.puzzle&&81===e.puzzle.length){const t=[];for(let r=0;r<9;r++){t.push([]);for(let o=0;o<9;o++)t[r].push(parseInt(e.puzzle[9*r+o])||0)}return{puzzle:t,solution:e.solution&&"string"==typeof e.solution&&81===e.solution.length?(()=>{const t=[];for(let r=0;r<9;r++){t.push([]);for(let o=0;o<9;o++)t[r].push(parseInt(e.solution[9*r+o])||0)}return t})():t}}if(Array.isArray(e.puzzle)&&9===e.puzzle.length){const t=e.puzzle.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0));let r=t;return e.solution&&Array.isArray(e.solution)&&9===e.solution.length&&(r=e.solution.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0))),console.log("formatPuzzleData 输出:",{puzzle:t,solution:r}),{puzzle:t,solution:r}}}console.warn("formatPuzzleData: 输入数据不完整或格式不正确，返回默认空数组",e);const t=Array(9).fill().map(()=>Array(9).fill(0));return{puzzle:t,solution:t}},ae=(e,t,r)=>!f||!f[e]||void 0===f[e][t]||f[e][t]===r,se=(e,t,r)=>{if(!g||y)return;if(d&&d[e]&&null!==d[e][t]&&0!==d[e][t])return void console.log("Cannot modify prefilled cell with notes:",e,t);const o=`${e}-${t}`,n={...G},i=M.slice(0,L+1);i.push({board:l,pencilNotes:{...G},row:e,col:t,type:"pencil"}),F(i),q(i.length-1),n[o]?n[o].includes(r)?(n[o]=n[o].filter(e=>e!==r),0===n[o].length&&delete n[o]):n[o]=[...new Set([...n[o],r])].sort((e,t)=>e-t):n[o]=[r],X(n)},ce=(e,t)=>{if(!g||y)return;const r=`${e}-${t}`;if(!G[r]||0===G[r].length)return;const o=M.slice(0,L+1);o.push({board:l,pencilNotes:{...G},row:e,col:t,type:"clear-pencil"}),F(o),q(o.length-1);const n={...G};delete n[r],X(n),console.log(`已清除单元格(${e+1},${t+1})的候选数标注`)},de=(e,t)=>{if(!g||y)return;const r=`${e}-${t}`;if(console.log("clearCandidates called for cell:",r),d&&d[e]&&0!==d[e][t])return void console.log("Cannot clear candidates for prefilled cell:",e,t);if(!G[r]||0===G[r].length)return void console.log("No candidates to clear in cell:",e,t);console.log("Clearing candidates:",G[r]);const o=M.slice(0,L+1);o.push({board:l,pencilNotes:{...G},row:e,col:t,type:"clear-candidates"}),F(o),q(o.length-1);const n={...G};delete n[r],X(n),console.log(`已清除单元格(${e+1},${t+1})的所有候选数`)},ue=(e,t,r,o=!1)=>{if(!g||y)return;const n=`${e}-${t}`;if(d&&d[e]&&null!==d[e][t]&&0!==d[e][t])return void console.log("Cannot modify prefilled cell:",e,t);if(J.has(n))return void console.log("Cannot modify locked cell (correct answer):",e,t);if(Y&&!o)return void(0===r?ce(e,t):se(e,t,r));const i=[...l.map(e=>[...e])],a=ae(e,t,r);i[e][t]=r,s(i);const c={...G};if(0!==r&&c[n]&&delete c[n],0!==r&&a){for(let i=0;i<9;i++)if(i!==t){const t=`${e}-${i}`;c[t]&&(c[t]=c[t].filter(e=>e!==r),0===c[t].length&&delete c[t])}for(let i=0;i<9;i++)if(i!==e){const e=`${i}-${t}`;c[e]&&(c[e]=c[e].filter(e=>e!==r),0===c[e].length&&delete c[e])}const o=3*Math.floor(e/3),n=3*Math.floor(t/3);for(let i=o;i<o+3;i++)for(let o=n;o<n+3;o++)if(i!==e||o!==t){const e=`${i}-${o}`;c[e]&&(c[e]=c[e].filter(e=>e!==r),0===c[e].length&&delete c[e])}}X(c);const u=M.slice(0,L+1);u.push({board:l,pencilNotes:{...G},row:e,col:t,prevValue:l[e][t],type:"fill",isCorrectInput:0!==r&&a}),F(u),q(u.length-1);const f=new Set(B);if(0!==r)if(a){f.delete(n);const e=new Set(J);e.add(n),Z(e)}else B.has(n)||H(e=>e+1),f.add(n),K.error("输入错误，请重试！",{position:"top-right",autoClose:1e3,theme:"colored"});else f.delete(n);_(f),fe(i)},fe=e=>{if(f){for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(!e[t][r]||e[t][r]!==f[t][r])return;b(!0),$(!1),_(new Set),o&&o({puzzlesCompleted:1,puzzlesSolved:1,totalTimePlayed:w}),K.success(n("gameCompletedMessage"),{position:"top-right",autoClose:3e3}),te(),setTimeout(()=>{window.dispatchEvent(new CustomEvent("openNewGameWindow"))},3e3)}},he=e.useCallback(()=>{try{const e=G&&"object"==typeof G&&Object.keys(G).length>0,t=Jo(l,G,e);return E(t),t}catch(e){return console.error("识别技巧失败:",e),[]}},[l,G]),pe=e.useCallback(e=>{const t=Y;let r=!1;const o=e.type&&("nakedSingle"===e.type||"notesSingle"===e.type||"hiddenSingleRow"===e.type||"hiddenSingleCol"===e.type||"hiddenSingleBox"===e.type);try{o&&t&&(U(!1),r=!0);const i=((e,t)=>{const r=t.map(e=>[...e]);switch(e.type){case"nakedSingle":case"notesSingle":case"hiddenSingleRow":case"hiddenSingleCol":case"hiddenSingleBox":if(void 0!==e.row&&void 0!==e.col&&void 0!==e.value)return r[e.row][e.col]=e.value,{board:r,operation:{type:"fill",row:e.row,col:e.col,value:e.value}};break;case"nakedPairRow":case"nakedPairCol":case"nakedPairBox":case"hiddenPairRow":case"hiddenPairCol":case"hiddenPairBox":case"nakedTripleRow":case"nakedTripleCol":case"nakedTripleBox":case"hiddenTripleRow":case"hiddenTripleCol":case"hiddenTripleBox":case"pointingPairsRow":case"pointingPairsCol":case"boxLineReductionRow":case"boxLineReductionCol":case"swordfishRow":case"swordfishCol":case"xyzWing":case"jellyfishRow":case"jellyfishCol":return{board:r,operation:{type:"highlight",cells:e.cells||e.sourceCells,targetCells:e.targetCells,values:e.values||[e.number],removableCandidates:e.removableCandidates}};default:return console.warn("未知的技巧类型:",e.type),{board:r,operation:null}}return{board:r,operation:null}})(e,l);if(i&&i.board){const t=i.operation;if(t&&"fill"===t.type&&"number"==typeof t.row&&"number"==typeof t.col&&"number"==typeof t.value){const{row:e,col:r,value:o}=t;return ue(e,r,o,!0),!0}if(t&&"removeCandidates"===t.type&&Array.isArray(t.cells)){const r={...A};return t.cells.forEach(e=>{if("number"==typeof e.row&&"number"==typeof e.col&&Array.isArray(e.valuesToRemove)){const t=`${e.row}-${e.col}`,o=(A[t]||[]).filter(t=>!e.valuesToRemove.includes(t));r[t]=o}}),P(r),console.log("成功移除候选数:",e.type),K.success(n("candidatesRemovedSuccess",{defaultMessage:"候选数已成功移除"}),{position:"top-right",autoClose:2e3}),!0}return t&&"highlight"===t.type?(console.log("技巧应用成功（高亮提示）:",e.type),e.type&&(e.type.includes("Pair")||e.type.includes("pair"))?K.success(n("pairTechniqueIdentified",{defaultMessage:"数对技巧已识别，建议手动移除相关候选数"}),{position:"top-right",autoClose:3e3}):K.success(n("pairTechniqueIdentified",{defaultMessage:"技巧已识别，建议手动移除相关候选数"}),{position:"top-right",autoClose:3e3}),!0):(console.warn("无法应用技巧：操作信息不完整或类型不支持",t),K.info(n("techniqueOnlyForHint",{defaultMessage:"此技巧主要用于提示，暂不支持自动应用"}),{position:"top-right",autoClose:2e3}),!1)}return!1}catch(i){return console.error("应用技巧失败:",i),K.error(n("techniqueApplyFailed",{defaultMessage:"应用技巧失败，请重试"}),{position:"top-right",autoClose:2e3}),r&&U(!0),!1}finally{r&&U(!0)}},[ue,l,Y,A,P,U]),me=(e,t)=>{if(!l)return[];const r=[];for(let o=1;o<=9;o++)ge(e,t,o)&&r.push(o);return r.sort((e,t)=>e-t)},ge=(e,t,r)=>{if(!l)return!1;for(let i=0;i<9;i++)if(l[e][i]===r)return!1;for(let i=0;i<9;i++)if(l[i][t]===r)return!1;const o=3*Math.floor(e/3),n=3*Math.floor(t/3);for(let i=o;i<o+3;i++)for(let e=n;e<n+3;e++)if(l[i][e]===r)return!1;return!0},xe={currentPuzzle:i,currentBoard:l||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:d,solution:f||Array(9).fill().map(()=>Array(9).fill(0)),difficulty:p,gameStarted:g,gameCompleted:y,timeElapsed:w,timerActive:k,isTimerActive:k,isLoading:j,selectedCell:z,candidates:A,highlightedCells:N,activeTechniques:R,lockedCells:J,history:M,historyIndex:L,errorCount:D,incorrectCells:B,isPencilMode:Y,pencilNotes:G,setDifficulty:m,setSelectedCell:T,setHighlightedCells:I,setTimerActive:$,toggleTimer:()=>{$(e=>!e)},togglePencilMode:()=>{U(e=>!e)},togglePencilNote:se,clearPencilNotes:ce,clearCandidates:de,fillAllCandidates:()=>{if(!g||y||!l)return;const e=M.slice(0,L+1);e.push({board:l,pencilNotes:{...G},type:"fill-candidates"}),F(e),q(e.length-1);const t={};for(let r=0;r<9;r++)for(let e=0;e<9;e++){if(d&&d[r]&&0!==d[r][e]||l[r]&&0!==l[r][e])continue;const o=me(r,e);o.length>0&&(t[`${r}-${e}`]=o)}return X(t),K.info(n("candidatesFilled",{defaultMessage:"已为所有空白格子计算并填充候选数！"}),{position:"top-right",autoClose:2e3}),!0},fillSelectedCellCandidates:(e,t)=>{if(!g||y||!l||void 0===e||void 0===t)return;if(0!==l[e][t])return void K.info(n("cellNotEmpty",{defaultMessage:"该单元格已有数字，无法填充候选数"}),{position:"top-right",autoClose:2e3});if(d&&d[e]&&0!==d[e][t])return void K.info(n("cellPrefilled",{defaultMessage:"该单元格为预填数字，无法填充候选数"}),{position:"top-right",autoClose:2e3});const r=M.slice(0,L+1);r.push({board:l,pencilNotes:{...G},type:"fill-cell-candidates"}),F(r),q(r.length-1);const o=me(e,t),i={...G};return o.length>0?i[`${e}-${t}`]=o:delete i[`${e}-${t}`],X(i),K.info(n("cellCandidatesFilled",{row:e+1,col:t+1,defaultMessage:`已为单元格(${e+1},${t+1})计算并填充候选数！`}),{position:"top-right",autoClose:2e3}),o},calculateTechniques:()=>{if(!g||y||!l)return;let e=!1;for(let r=0;r<9;r++){for(let t=0;t<9;t++){if(d&&d[r]&&0!==d[r][t]||l[r]&&0!==l[r][t])continue;const o=`${r}-${t}`;if(!(G[o]&&G[o].length>0)){e=!0;break}}if(e)break}if(e)return K.info(n("emptyCandidateCellsFound",{defaultMessage:"发现无候选数的空白单元格，重新计算候选数..."}),{position:"top-right",autoClose:2e3}),!0;let t=!1;if(f)for(let r=0;r<9;r++){for(let e=0;e<9;e++){if(d&&d[r]&&0!==d[r][e]||l[r]&&0!==l[r][e])continue;const o=G[`${r}-${e}`]||[],n=f[r][e];if(!o.includes(n)){t=!0;break}}if(t)break}return t?(K.error(n("candidateErrorDetected",{defaultMessage:"存在候选数删减错误，数据刷新"}),{position:"top-right",autoClose:3e3}),!0):(K.info(n("candidatesComplete",{defaultMessage:"候选数正确完整，直接计算技巧机会！"}),{position:"top-right",autoClose:2e3}),!1)},loadSavedProgress:ee,saveGameProgress:te,startNewGame:async(e=null,t=null,r=!0)=>{console.log("SudokuContext: 开始新游戏",{puzzleId:e,difficultyOverride:t});try{x(!1),s(re()),X({}),U(!1),P({}),E([]),I([]),T(null),$(!1),C(0),b(!1),F([]),q(-1),O(0),H(0),_(new Set),Z(new Set),Q(!1),await new Promise(e=>setTimeout(e,50)),x(!0),await new Promise(e=>setTimeout(e,50));const e=t||p;let n;console.log("使用难度:",e),e!==p&&m(e);let c=0;const d=3;let f=!1;for(;!n&&c<d;){c++,console.log(`尝试生成谜题 (${c}/${d})`);try{if(e===Vo.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const e=await Fo();e&&e.puzzle&&e.solution?(n=e,f=!0,console.log("成功从JSON文件获取专家级谜题")):console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成")}catch(i){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",i)}}n||(console.log("使用程序生成谜题"),n=await oe(e))}catch(l){console.error(`生成谜题失败 (尝试 ${c}/${d}):`,l)}}if(!n){console.error("多次尝试生成谜题失败，使用备用谜题");n={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]}}const g=ie(n);if(console.log("谜题数据准备完成，formattedData:",g),!g||!g.puzzle||!Array.isArray(g.puzzle)||9!==g.puzzle.length){console.error("格式化后的数据无效，使用备用谜题");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];g.puzzle=e,g.solution=t}return a(g),console.log("设置 currentPuzzle 完成"),u(g.puzzle),console.log("设置 originalPuzzle 完成"),s(g.puzzle),console.log("设置 currentBoard 完成"),h(g.solution),console.log("设置 solution 完成"),x(!0),b(!1),C(0),$(!0),F([]),q(-1),o&&o({puzzlesStarted:1}),r&&(e===Vo.EXPERT?K.success(f?"Expert puzzle loaded!":"Expert puzzle generated!",{position:"top-right",autoClose:2e3}):r&&K.success("New puzzle generated!",{position:"top-right",autoClose:2e3})),console.log("新游戏设置完成"),g}catch(c){console.error("开始新游戏失败:",c);try{const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],o={puzzle:e,solution:t};return a(o),u(e),s(e),h(t),x(!0),b(!1),$(!0),r&&K.success("Backup puzzle used!",{position:"top-right",autoClose:2e3}),o}catch(d){console.error("使用备用谜题也失败:",d),r&&K.error(n("generatePuzzleFailedRefresh"),{position:"top-right",autoClose:2e3})}return null}},generateNewPuzzle:async(e=p,t=!0)=>{console.log("SudokuContext: 生成新谜题",{targetDifficulty:e});try{let t;if(s(re()),X({}),U(!1),P({}),E([]),I([]),$(!1),C(0),b(!1),F([]),q(-1),O(0),H(0),_(new Set),Z(new Set),Q(!1),x(!0),await new Promise(e=>setTimeout(e,50)),e!==p&&(m(e),console.log("已设置新难度:",e)),e===Vo.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const r=await Fo();r&&r.puzzle&&r.solution?(t=r,console.log("成功从JSON文件获取专家级谜题")):(console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成"),t=await oe(e))}catch(r){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",r),t=await oe(e)}}else console.log("非专家难度：使用程序生成谜题"),t=await oe(e);const n=ie(t);return console.log("谜题数据准备完成，formattedData:",n),console.log("puzzleData.puzzle 是否存在:",!!n.puzzle),n.puzzle&&(console.log("puzzle 类型:",Array.isArray(n.puzzle)?"数组":typeof n.puzzle),console.log("puzzle 长度:",Array.isArray(n.puzzle)?n.puzzle.length:"不是数组"),Array.isArray(n.puzzle)&&n.puzzle.length>0&&console.log("puzzle 第一行:",n.puzzle[0])),a(n),console.log("设置 currentPuzzle 完成"),u(n.puzzle),console.log("设置 originalPuzzle 完成"),s(n.puzzle),console.log("设置 currentBoard 完成"),h(n.solution),console.log("设置 solution 完成"),x(!0),b(!1),C(0),$(!0),F([]),q(-1),o&&o({puzzlesStarted:1}),K.success("New puzzle generated!",{position:"top-right",autoClose:2e3}),console.log("新谜题设置完成"),n}catch(i){return console.error("生成新谜题失败:",i),t&&K.error(n("generatePuzzleFailed"),{position:"top-right",autoClose:2e3}),null}},fillCell:ue,clearCell:(e,t)=>{if(!g||y)return;const r=`${e}-${t}`;if(d&&d[e]&&0!==d[e][t])return void console.log("Cannot clear prefilled cell:",e,t);if(J.has(r))return void console.log("Cannot clear locked cell (correct answer):",e,t);const o=M.slice(0,L+1);if(o.push({board:l,pencilNotes:{...G},row:e,col:t,prevValue:l[e][t],type:"clear"}),F(o),q(o.length-1),Y){console.log("铅笔模式：尝试清除单元格",e,t);const r=`${e}-${t}`;if(console.log("候选数状态:",G[r]),G[r]&&G[r].length>0)console.log("清除候选数标注"),de(e,t);else if(console.log("没有候选数标注，检查是否有数字"),0!==l[e][t]){console.log("清除数字内容");const o=[...l.map(e=>[...e])];o[e][t]=0,s(o);const n=new Set(B);n.delete(r),_(n),O(n.size);const i=new Set(J);i.delete(r),Z(i)}else console.log("单元格既没有候选数也没有数字");return}const n=[...l.map(e=>[...e])];n[e][t]=0,s(n),G[r]&&G[r].length>0&&(console.log("普通模式：清除候选数标注"),de(e,t));const i=new Set(B);i.delete(r),_(i),O(i.size);const a=new Set(J);a.delete(r),Z(a)},undo:()=>{if(L>=0){const e=M[L];s(e.board),e.pencilNotes&&X(e.pencilNotes),q(L-1),b(!1);const t=new Set;for(let o=0;o<9;o++)for(let r=0;r<9;r++){const n=e.board[o][r];0!==n&&f&&n!==f[o][r]&&t.add(`${o}-${r}`)}_(t);const r=new Set;for(let o=0;o<9;o++)for(let t=0;t<9;t++){const n=e.board[o][t];0!==n&&f&&n===f[o][t]&&r.add(`${o}-${t}`)}Z(r)}else console.log("没有可撤销的操作")},redo:()=>{if(L<M.length-1){const e=M[L+1];s(e.board),e.pencilNotes&&X(e.pencilNotes),q(L+1);const t=new Set;for(let o=0;o<9;o++)for(let r=0;r<9;r++){const n=e.board[o][r];0!==n&&f&&n!==f[o][r]&&t.add(`${o}-${r}`)}_(t);const r=new Set;for(let o=0;o<9;o++)for(let t=0;t<9;t++){const n=e.board[o][t];0!==n&&f&&n===f[o][t]&&r.add(`${o}-${t}`)}Z(r),fe(e.board)}},getCandidates:async(e,t)=>{try{const r=await wo.getCandidates(l,e,t);return P(r.candidates),r.candidates}catch(r){return console.error("获取候选数失败:",r),[]}},identifyTechniques:he,applyTechniqueToBoard:pe,getHint:async()=>{try{return await wo.getHint(l,f)}catch(e){return console.error("获取提示失败:",e),K.error("获取提示失败，请重试",{position:"top-right",autoClose:2e3}),null}},validateCellInput:ae};return v.jsx(Zo.Provider,{value:xe,children:t})},Qo=()=>{const t=e.useContext(Zo);if(!t)throw new Error("useSudoku must be used within a SudokuContextProvider");return t},en=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0;
  @media (max-width: 640px) {
    gap: 30px;
    padding: 10px 0;
  }
`,tn=Hr.section`
  text-align: center;
  padding: 40px 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    padding: 30px 15px;
  }
`,rn=Hr.h1`
  font-size: 42px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`,on=Hr.p`
  font-size: 18px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`,nn=Hr.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`,an=Hr(i)`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  color: white;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  min-width: 200px;
  text-align: center;
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)?`${e.theme.primary}aa`:"#4a6cf7aa"}};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`,ln=Hr(i)`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 200px;
  text-align: center;
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)?`${e.theme.primary}11`:"#4a6cf711"}};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 640px) {
    width: 100%;
    max-width: 300px;
  }
`,sn=Hr.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  @media (max-width: 640px) {
    gap: 20px;
  }
`,cn=Hr.div`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`,dn=Hr.div`
  font-size: 48px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  display: flex;
  justify-content: center;
`,un=Hr.h3`
  font-size: 22px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`,fn=Hr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  line-height: 1.6;
  margin: 0;
  text-align: center;
`,hn=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,pn=Hr.h2`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 26px;
  }
`,mn=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`,gn=Hr.button`
  background-color: ${e=>{var t,r;return e.selected?(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7":(null==(r=e.theme)?void 0:r.surface)||"#ffffff"}};
  color: ${e=>{var t;return e.selected?"white":(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return e.selected?(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7":`${(null==(r=e.theme)?void 0:r.primary)||"#4a6cf7"}22`}};
    transform: translateY(-2px);
  }
`,xn=Hr.button`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.secondary)||"#f5a623"}};
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 25px;
  width: 100%;
  max-width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.secondary)?`${e.theme.secondary}aa`:"#f5a623aa"}};
    transform: translateY(-2px);
  }
`,yn=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,bn=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`,vn=Hr.div`
  text-align: center;
  padding: 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 8px;
`,wn=Hr.div`
  font-size: 36px;
  font-weight: bold;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 10px;
  @media (max-width: 640px) {
    font-size: 30px;
  }
`,Cn=Hr.div`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
`,kn=()=>{oe();const{userStats:e}=bo(),{setDifficulty:t,startNewGame:r}=Qo(),{executeWithLoading:i,isLoading:a}=de(),l=n(),[s,c]=o.useState(Vo.MEDIUM),d=e=>{c(e)};return v.jsxs(en,{children:[v.jsxs(tn,{children:[v.jsx(rn,{children:"欢迎来到数独学习应用"}),v.jsx(on,{children:"提升您的数独技能，学习从基础到高级的解题技巧。适合各级别玩家，让您的数独之旅更加精彩！"}),v.jsxs(nn,{children:[v.jsx(an,{to:"/game",children:"开始游戏"}),v.jsx(ln,{to:"/techniques",children:"学习技巧"})]})]}),v.jsxs(sn,{children:[v.jsxs(cn,{children:[v.jsx(dn,{children:"🧠"}),v.jsx(un,{children:"多种难度"}),v.jsx(fn,{children:"从简单到专家级别的数独谜题，适合不同水平的玩家，循序渐进提升您的技能。"})]}),v.jsxs(cn,{children:[v.jsx(dn,{children:"💡"}),v.jsx(un,{children:"技巧学习"}),v.jsx(fn,{children:"详细的解题技巧讲解，从唯一候选数到高级技巧，帮助您掌握数独的精髓。"})]}),v.jsxs(cn,{children:[v.jsx(dn,{children:"📊"}),v.jsx(un,{children:"进度追踪"}),v.jsx(fn,{children:"记录您的游戏进度和技巧掌握情况，分析您的表现，持续进步。"})]}),v.jsxs(cn,{children:[v.jsx(dn,{children:"🎯"}),v.jsx(un,{children:"实时提示"}),v.jsx(fn,{children:"遇到困难时获得智能提示，帮助您理解下一步的解题思路和技巧应用。"})]})]}),v.jsxs(hn,{children:[v.jsx(pn,{children:"快速开始"}),v.jsxs(mn,{children:[v.jsx(gn,{selected:s===Vo.EASY,onClick:()=>d(Vo.EASY),children:"简单"}),v.jsx(gn,{selected:s===Vo.MEDIUM,onClick:()=>d(Vo.MEDIUM),children:"中等"}),v.jsx(gn,{selected:s===Vo.HARD,onClick:()=>d(Vo.HARD),children:"困难"}),v.jsx(gn,{selected:s===Vo.EXPERT,onClick:()=>d(Vo.EXPERT),children:"专家"})]}),v.jsx(xn,{onClick:async()=>{t(s);const e=await i(()=>r(null,s),"准备游戏中...");e&&l(`/game/${e.id}`)},disabled:a,children:a?v.jsx(fo,{showMessage:!1}):"开始游戏"})]}),v.jsxs(yn,{children:[v.jsx(pn,{children:"您的进度"}),v.jsxs(bn,{children:[v.jsxs(vn,{children:[v.jsx(wn,{children:e.puzzlesStarted}),v.jsx(Cn,{children:"开始的谜题"})]}),v.jsxs(vn,{children:[v.jsx(wn,{children:e.puzzlesCompleted}),v.jsx(Cn,{children:"完成的谜题"})]}),v.jsxs(vn,{children:[v.jsx(wn,{children:e.puzzlesSolved}),v.jsx(Cn,{children:"独立解决"})]}),v.jsxs(vn,{children:[v.jsx(wn,{children:Math.floor(e.totalTimePlayed/60)}),v.jsx(Cn,{children:"游戏分钟"})]})]})]})]})},$n=Hr.div.attrs({className:"sudoku-board"})`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  border-radius: var(--border-radius, 8px);
  background-color: #ffffff; /* 使用纯白色背景 */
  position: relative;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden !important;
  z-index: 1;
  grid-gap: 0;
  // 取消棋盘四周的蓝线，使用无边框设计
  border: none;
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  
  // 移除悬停效果，避免干扰
  &:hover {
    border-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#3498db"}};
  }
`,jn=Hr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(var(--board-width) * 0.08);
  font-weight: 500;
  cursor: pointer;
  /* 进一步优化性能：简化样式 */
  background: #ffffff; /* 纯色背景 */
  border-right: 0.5px solid #e0e0e0; /* 只设置右边框 */
  border-bottom: 0.5px solid #e0e0e0; /* 只设置下边框 */
  border-top: none;
  border-left: none;
  color: #3498db; /* 修改为蓝色，用于用户输入的数字 */
  transition: none; /* 移除过渡效果以提升性能 */
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-width: 0;
  width: 100%;
  height: 100%;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: 0;
    
    /* 保留3x3子网格之间的分隔线，但使用更明确的样式 */
     /* 处理列方向的网格分隔线 - 移除none设置，让分隔线显示 */
     /* 处理行方向的网格分隔线 - 移除none设置，让分隔线显示 */

  /* 基础样式类 - 优化性能，移除高消耗的磨砂玻璃效果 */
  &.prefilled {
    cursor: default;
    color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textOriginal)||"#666666"}};
    font-weight: 400; /* 将预填数字字体调整为较细 */
    /* 使用与空白单元格相同的白色底色 */
    background: #ffffff;
    /* 移除边框定义，让预填单元格继承基础单元格的边框设置 */
  }
  
  &.highlighted {
    /* 使用纯色背景 */
    background: #64B5F6 !important; /* 保持现有蓝色背景 */
    color: #666666 !important; /* 修改为灰色字体 */
    border: 1px solid transparent; /* 保持边框一致性 */
    opacity: 1; /* 确保完全不透明 */
    box-sizing: border-box !important; /* 使用border-box确保尺寸正确 */
    box-shadow: inset 0 0 0 2px white; /* 创建2px宽的内部白边 */
  }
  

  
  /* 基础选中状态样式 - 确保在所有设备上的高对比度和可见性 */
  &.selected {
    /* 使用与.same-number和.highlighted类一致的高亮颜色 */
    background: #64B5F6 !important; /* 与highlighted状态完全一致的蓝色 */
    color: white !important; /* 一直保持白色字体 */
    z-index: 2;
    /* 使用更明显的边框 */
    border: 2px solid #42A5F5 !important;
    font-weight: bold !important; /* 使用粗体增强可读性 */
    /* 确保在所有平台上的渲染一致性 */
    -webkit-tap-highlight-color: transparent;
  }
  
  /* 普通选中状态 - 与基础选中状态保持一致 */
  &.normal-selected {
    background: #64B5F6 !important;
    color: white !important; /* 一直保持白色字体 */
    border: 2px solid #42A5F5 !important;
    font-weight: bold !important; /* 使用粗体增强可读性 */
  }
  
  /* 铅笔模式选中状态 */
  &.pencil-selected {
    background: #0097a7 !important;
    color: white !important; /* 一直保持白色字体 */
    border: 2px solid #00796b !important;
    font-weight: bold !important; /* 使用粗体增强可读性 */
  }
  
  &.error,
  &.incorrect {
    color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"#e74c3c"}}; /* 使用更浅的红色 */
    /* 只保留红色文本，不改变背景色 */
  }
  
  /* 确保错误数字没有阴影效果，并保持红色文字 */
  &.error,
  &.incorrect {
    color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"#e74c3c"}} !important; /* 使用更浅的红色 */
    text-shadow: none !important;
  }
  
  /* 确保选中状态下的错误单元格显示红色文字，无阴影，且取消选中底色 */
  &.selected.error,
  &.selected.incorrect,
  &.normal-selected.error,
  &.normal-selected.incorrect,
  &.pencil-selected.error,
  &.pencil-selected.incorrect {
    color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"#e74c3c"}} !important; /* 使用更浅的红色 */
    text-shadow: none !important;
    background-color: transparent !important; /* 取消选中底色 */
    border-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"#e74c3c"}} !important; /* 使用错误颜色作为边框 */
  }
  
  &.same-number {
    /* 使用纯色背景 */
    background: #90CAF9; /* 保持现有浅蓝色背景 */
    color: #666666 !important; /* 修改为灰色字体 */
    border: 1px solid transparent; /* 保持边框一致性 */
    box-sizing: border-box !important; /* 使用border-box确保尺寸正确 */
    box-shadow: inset 0 0 0 2px white; /* 创建2px宽的内部白边 */
  }
  


  &.same-region {
    /* 优化性能：使用纯色背景 */
    background: #e8f4fd;
  }
  
  &.same-note {
    /* 优化性能：使用纯色背景 */
    background: #fff3cd;
  }
  
  &.technique-indicator {
    /* 优化性能：使用纯色背景 */
    background: #ffeaa7;
  }

  /* 优化边缘单元格处理，确保棋盘边缘完整 */
  ${e=>0===e.row&&"border-top: none;"}
  ${e=>8===e.row&&"border-bottom: none;"}
  ${e=>0===e.col&&"border-left: none;"}
  ${e=>8===e.col&&"border-right: none;"}
  
  /* 简化角落单元格处理，仅保留基本圆角 */
  ${e=>0===e.row&&0===e.col&&"border-radius: var(--border-radius, 8px) 0 0 0;"}
  ${e=>0===e.row&&8===e.col&&"border-radius: 0 var(--border-radius, 8px) 0 0;"}
  ${e=>8===e.row&&0===e.col&&"border-radius: 0 0 0 var(--border-radius, 8px);"}
  ${e=>8===e.row&&8===e.col&&"border-radius: 0 0 var(--border-radius, 8px) 0;"}
  
  /* 确保所有状态下圆角正确应用 */
  ${e=>8===e.row&&0===e.col&&"overflow: hidden;"}
  ${e=>8===e.row&&8===e.col&&"overflow: hidden;"}
  
  /* 3x3子网格分隔线 - 使用0.5px深色实线 */
  ${e=>(2===e.col||5===e.col)&&"border-right: 0.5px solid #333333;"}
  ${e=>(2===e.row||5===e.row)&&"border-bottom: 0.5px solid #333333;"}
  
  // 悬停效果（仅在非移动设备上）
  @media (hover: hover) {
    &:not(.prefilled):not(.selected):not(.normal-selected):not(.pencil-selected):hover {
      background-color: ${e=>{var t;return((null==(t=e.theme)?void 0:t.primary)||"#3498db")+"15"}} !important;
    }
    
    // 更加强化的选中状态悬停规则 - 直接指定颜色值而不是使用inherit
    &.selected:hover:not(.error):not(.incorrect) {
      background-color: #42a5f5 !important; /* 直接使用与.selected相同的颜色值 */
      color: white !important; /* 确保文字颜色也不变 */
      border-color: #1e88e5 !important; /* 确保边框颜色也不变 */
    }
    
    &.normal-selected:hover:not(.error):not(.incorrect) {
      background-color: #42a5f5 !important;
      color: white !important;
      border-color: #1e88e5 !important;
    }
    
    &.pencil-selected:hover:not(.error):not(.incorrect) {
      background-color: #0097a7 !important;
      color: white !important;
      border-color: #00796b !important;
    }
    
    // 确保错误单元格在悬停时保持红色文字，且不显示选中底色
    &.selected:hover.error,
    &.selected:hover.incorrect,
    &.normal-selected:hover.error,
    &.normal-selected:hover.incorrect,
    &.pencil-selected:hover.error,
    &.pencil-selected:hover.incorrect {
      color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"#e74c3c"}} !important;
      text-shadow: none !important;
      background-color: transparent !important; /* 悬停时也不显示选中底色 */
      border-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"#e74c3c"}} !important; /* 使用错误颜色作为边框 */
    }
    
    // 额外添加:focus和:active状态以确保在所有交互情况下保持选中效果
    &.selected:focus,
    &.selected:active,
    &.normal-selected:focus,
    &.normal-selected:active,
    &.pencil-selected:focus,
    &.pencil-selected:active {
      background-color: inherit !important; /* 保持原有选中背景色 */
      color: white !important;
      border-color: inherit !important;
    }
  }
  
  // 触摸反馈和选中状态优化
  &:active {
    transform: scale(0.97);
  }
  
  /* 增强触摸设备的选中效果 - 使用更通用的移动设备检测方案 */
  @media (hover: none) {
    /* 确保选中状态在所有触摸设备上有更强的视觉反馈 */
    &.selected,
    &.normal-selected,
    &.pencil-selected {
      /* 移除可能导致渲染不一致的过渡效果 */
      transition: none;
      /* 增加更明显的内阴影，确保在所有设备上都有突出显示 */
      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.8);
      /* 添加更强的外阴影，增强立体效果 */
      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.8), 0 0 8px rgba(0, 0, 0, 0.2);
      /* 增强边框效果 */
      border-width: 3px !important;
    }
    
    /* 触摸设备上的活动状态 */
    &:active {
      /* 使用缩放效果提供即时反馈 */
      transform: scale(0.97);
      /* 确保所有浏览器兼容性 */
      -webkit-transform: scale(0.97);
      -moz-transform: scale(0.97);
      -ms-transform: scale(0.97);
    }
  }
  
  /* 针对特定移动设备视口的优化 */
  @media screen and (max-width: 768px) and (orientation: portrait),
         screen and (max-height: 768px) and (orientation: landscape) {
    /* 增加选中状态的对比和可见性 */
    &.selected,
    &.normal-selected,
    &.pencil-selected {
      /* 调整边框宽度以适应小屏幕 */
      border-width: 2.5px !important;
      /* 增加阴影强度 */
      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.9), 0 0 6px rgba(0, 0, 0, 0.3);
    }
  }
  
  /* 横屏模式下增强选中单元格的白色边框 */
  @media screen and (orientation: landscape) {
    /* 为选中的单元格添加白色边框 */
    &.selected,
    &.normal-selected,
    &.pencil-selected {
      box-shadow: inset 0 0 0 3px white; /* 使用内阴影创建白色边框效果 */
    }
  }
  
  /* 小屏幕横屏模式下调整选中单元格的白色边框 */
  @media screen and (max-height: 768px) and (orientation: landscape) {
    &.selected,
    &.normal-selected,
    &.pencil-selected {
      box-shadow: inset 0 0 0 2.5px white; /* 调整白色边框宽度 */
    }
  }
  
  // 统一的字体大小设置，适用于所有屏幕尺寸
  font-size: calc(var(--board-width) * 0.08);
  min-height: 36px;
  
  // 仅调整非常大屏幕的字体大小以避免文字过大
  @media (min-width: 1200px) and (min-height: 900px) {
    font-size: calc(var(--board-width) * 0.075);
  }
  
  // 仅调整非常小屏幕的字体大小
  @media (max-width: 480px) {
    font-size: calc(var(--board-width) * 0.07);
  }
`,Sn=({notes:e=[],highlightedNumber:t=null,selected:r=!1})=>{const o=Array.isArray(e)?e:[],n={display:"flex",alignItems:"center",justifyContent:"center",fontSize:"calc(var(--board-width) * 0.025)",fontWeight:"500",color:r?"#ffffff":"#4A6FA5",padding:"1px"},i={backgroundColor:"#42a5f5",color:"white",borderRadius:"4px",fontWeight:"bold",width:"80%",height:"80%",margin:"auto",display:"flex",alignItems:"center",justifyContent:"center",padding:"0"};return v.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr",width:"100%",height:"100%",boxSizing:"border-box"},children:[1,2,3,4,5,6,7,8,9].map(e=>{const r=(e-1)%3,a=Math.floor((e-1)/3),l=o.includes(e),s=t&&e===t;return v.jsx("div",{style:{...n,gridColumn:r+1,gridRow:a+1,paddingTop:0===a?"2px":"1px",paddingBottom:2===a?window.innerHeight>window.innerWidth?"3px":"2px":"1px",paddingLeft:0===r?"2px":"1px",paddingRight:2===r?"2px":"1px",...l&&s&&i,opacity:l?1:0},children:l&&e},e)})})},zn=({board:e,selectedCell:t,onCellClick:r,originalPuzzle:o,isPencilMode:n,pencilNotes:i,incorrectCells:a,highlightedCells:l})=>{const{theme:s}=oe(),c=e||Array(9).fill().map(()=>Array(9).fill(0)),d=o||Array(9).fill().map(()=>Array(9).fill(0)),u=i||{},f=a||new Set,h=(e,t)=>3*Math.floor(e/3)+Math.floor(t/3),p=(e,r,o)=>{const i=[];if(u[`${e}-${r}`],((e,t,r)=>!(!d||!d[t]||null===d[t][r]||0===d[t][r]))(0,e,r)&&i.push("prefilled"),((e=>"error"===e)(o)||((e,t)=>{const r=`${e}-${t}`;return f instanceof Set?f.has(r):!!Array.isArray(f)&&f.some(r=>r.row===e&&r.col===t)})(e,r))&&i.push("error"),!t&&l&&Array.isArray(l)){l.some(t=>t.row===e&&t.col===r)&&i.push("highlighted")}if(t&&t.row===e&&t.col===r)i.push("selected"),i.push(n?"pencil-selected":"normal-selected");else if(t){const n=c[t.row][t.col],l=`${t.row}-${t.col}`;u[l],o&&o===n&&i.push("same-number"),a=e,s=r,p=t.row,m=t.col,(a===p||s===m||h(a,s)===h(p,m))&&i.push("same-region")}var a,s,p,m;return i.join(" ")};return v.jsx($n,{theme:s,children:c.map((e,o)=>e.map((e,n)=>{const i=p(o,n,e),a=`${o}-${n}`,d=u[a]||[],f=d.length>0;let h=null;if(t&&void 0!==t.row&&void 0!==t.col&&c[t.row]&&c[t.row][t.col]){const e=c[t.row][t.col];0!==e&&"error"!==e&&(h=e)}if(!h&&l&&Array.isArray(l)&&l.length>0){const e=l.find(e=>e.number&&0!==e.number&&"error"!==e.number);if(e)h=e.number;else{const e=l[0];e&&e.number&&0!==e.number&&"error"!==e.number&&(h=e.number)}}const m=e=>((e,t,o)=>{o&&(o.stopPropagation(),"touchstart"===o.type&&o.preventDefault()),r&&r(e,t)})(o,n,e);return v.jsx(jn,{row:o,col:n,className:i,onClick:m,onTouchStart:m,onMouseDown:m,style:{touchAction:"manipulation",userSelect:"none"},theme:s,children:e&&0!==e&&"error"!==e?e:f?v.jsx(Sn,{notes:d,highlightedNumber:h,selected:t&&t.row===o&&t.col===n}):""},a)}))})},Tn=()=>v.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"white",children:[v.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",stroke:"white",strokeWidth:"1.5",fill:"transparent"}),v.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"white",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"white",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",fill:"white",children:"2"}),v.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",fill:"white",children:"5"})]}),An=({onNumberSelect:t,onClearCell:r,onUndo:o,togglePencilMode:n,fillAllCandidates:i,calculateTechniques:a,selectedNumber:l,isPencilMode:s,remainingNumbers:c={}})=>{const d=()=>window.innerHeight>window.innerWidth,[u,f]=e.useState(d());e.useEffect(()=>{const e=()=>{f(d())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),oe();const{t:h}=le(),{mode:p}=e.useContext(ue),[m,g]=e.useState("keyboard"),[x,y]=e.useState(null),[b,w]=e.useState(0),C=Qo(),{identifyTechniques:k,applyTechniqueToBoard:$,gameStarted:j,currentBoard:S,setHighlightedCells:z,setSelectedCell:T,selectedCell:A}=C||{},P=e.useCallback(()=>{g("keyboard"),z&&z([]),y(null),w(0)},[z]);e.useEffect(()=>{A&&P()},[A,P]);const[N,I]=e.useState([]),[R,E]=e.useState([]);e.useEffect(()=>{g("keyboard"),y(null),E([]),I([]),w(0),z&&z([])},[j,S]),e.useEffect(()=>{"learning"!==p&&(g("keyboard"),y(null),E([]),I([]),w(0),z&&z([]))},[p]);const M=e.useCallback(()=>{if(k&&S)try{const e=k();I(e||[])}catch(e){console.error("查找技巧失败:",e),I([])}else I([])},[k,S]);e.useEffect(()=>{"techniques"===m&&j&&S&&M()},[m,M,j,S]),e.useEffect(()=>{I([])},[j]);return v.jsxs("div",{className:"control-panel",style:{backgroundColor:"#ffffff",borderRadius:"var(--border-radius, 8px)",padding:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.12)",display:"flex",flexDirection:"column",fontFamily:"Arial, Microsoft YaHei, sans-serif",margin:0,boxSizing:"border-box",border:"1px solid #e0e0e0",position:"relative",height:u?"auto":"var(--board-width)",maxHeight:u?"400px":"var(--board-width)",minHeight:u?"200px":"var(--board-width)",overflow:"hidden",outline:"none",WebkitTapHighlightColor:"transparent"},children:[v.jsx("h3",{style:{display:"none"},children:"控制面板"}),v.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,margin:0,minHeight:0,overflow:"hidden"},children:[v.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #e0e0e0",marginBottom:"8px",paddingBottom:0},children:[v.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"keyboard"===m?"#3498db15":"transparent",border:"none",borderRadius:"4px 4px 0 0",color:"keyboard"===m?"#3498db":"#7f8c8d",cursor:"pointer",outline:"none",WebkitTapHighlightColor:"transparent",transition:"background-color 0.3s, color 0.3s"},onClick:()=>{g("keyboard"),T&&T(null)},children:h("keyboard")}),"learning"===p&&v.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"techniques"===m?"#3498db15":"transparent",border:"none",borderRadius:"4px 4px 0 0",color:"techniques"===m?"#3498db":"#7f8c8d",cursor:"pointer",outline:"none",WebkitTapHighlightColor:"transparent",transition:"background-color 0.3s, color 0.3s"},onClick:()=>{g("techniques"),T&&T(null)},children:h("techniques")}),"learning"===p&&v.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"solution"===m?"#3498db15":"transparent",border:"none",borderRadius:"6px 6px 0 0",fontSize:"14px",fontWeight:"solution"===m?"700":"500",color:"solution"===m?"#3498db":"#7f8c8d",cursor:"pointer",margin:"0 2px",boxSizing:"border-box",minHeight:"32px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>{g("solution"),T&&T(null),s&&n&&n()},children:h("solutionTab")})]}),v.jsxs("div",{style:{flex:1,padding:"4px 0",overflow:"visible",position:"relative",display:"flex",flexDirection:"column",minHeight:0},children:["keyboard"===m&&v.jsx(v.Fragment,{children:window.innerWidth<=768?v.jsxs(v.Fragment,{children:[v.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"4px",marginBottom:"8px",padding:"0 2px"},children:[1,2,3,4,5,6].map(e=>{const r=c.hasOwnProperty(e)?c[e]:9,o=0===r;return v.jsxs("button",{className:"number-button",disabled:o,onClick:r=>{r.stopPropagation(),!o&&t(e)},style:{position:"relative",backgroundColor:l===e||s?"#3498db":"#ffffff",color:l===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:o?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[v.jsx("span",{style:{fontSize:"clamp(40px, 12vw, 80px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),v.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",backgroundColor:"transparent",color:l===e||s?"white":"#3498db",fontSize:"14px",fontWeight:"bold",padding:"1px 4px",borderRadius:"8px",minWidth:"16px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)})}),v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"4px",padding:"0 2px"},children:[[7,8,9].map(e=>{const r=c.hasOwnProperty(e)?c[e]:9,o=0===r;return v.jsxs("button",{className:"number-button",disabled:o,onClick:r=>{r.stopPropagation(),!o&&t(e)},style:{position:"relative",backgroundColor:l===e||s?"#3498db":"#ffffff",color:l===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:o?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[v.jsx("span",{style:{fontSize:"clamp(40px, 12vw, 80px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),v.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",backgroundColor:"transparent",color:l===e||s?"white":"#3498db",fontSize:"14px",fontWeight:"bold",padding:"1px 4px",borderRadius:"8px",minWidth:"16px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)}),v.jsx("button",{onClick:e=>{e.stopPropagation(),o()},title:h("undoAction"),style:{position:"relative",backgroundColor:"#ffffff",color:"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"60px !important",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 7v6h6"}),v.jsx("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})},"undo"),v.jsx("button",{onClick:e=>{e.stopPropagation(),A?r():alert("请先选择一个单元格")},title:h("clearCell"),style:{position:"relative",backgroundColor:"#ff4444",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"24px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsxs("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 6h18"}),v.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),v.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),v.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),v.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})},"clear"),v.jsx("button",{onClick:e=>{e.stopPropagation(),n()},title:h(s?"exitPencilMode":"enterPencilMode"),style:{position:"relative",backgroundColor:s?"#3498db":"#ffffff",color:s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"24px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})},"pencil")]})]}):v.jsxs("div",{className:"number-pad",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"6px",width:"100%",maxHeight:"100%",overflow:"visible",padding:"4px",boxSizing:"border-box",marginTop:"-10px"},children:[[1,2,3,4,5,6,7,8,9].map(e=>{const r=c.hasOwnProperty(e)?c[e]:9,o=0===r;return v.jsxs("button",{className:"number-button",disabled:o,onClick:r=>{r.stopPropagation(),!o&&t(e)},style:{position:"relative",backgroundColor:l===e||s?"#3498db":"#ffffff",color:l===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"400",lineHeight:"1",cursor:o?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",fontSize:"0",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[v.jsx("span",{style:{fontSize:"clamp(30px, 8vw, 70px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),v.jsx("span",{style:{position:"absolute",top:"4px",right:"4px",backgroundColor:"transparent",color:l===e||s?"white":"#3498db",fontSize:"16px",fontWeight:"bold",padding:"2px 6px",borderRadius:"10px",minWidth:"20px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)}),v.jsx("button",{onClick:e=>{e.stopPropagation(),o()},title:h("undoAction"),style:{position:"relative",backgroundColor:"#ffffff",color:"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 7v6h6"}),v.jsx("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})},"undo"),v.jsx("button",{onClick:e=>{e.stopPropagation(),A?r():alert("请先选择一个单元格")},title:h("clearCell"),style:{position:"relative",backgroundColor:"#ff4444",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsxs("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 6h18"}),v.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),v.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),v.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),v.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})},"clear"),v.jsx("button",{onClick:e=>{e.stopPropagation(),n()},title:h(s?"exitPencilMode":"enterPencilMode"),style:{position:"relative",backgroundColor:s?"#3498db":"#ffffff",color:s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})},"pencil")]})}),"techniques"===m&&"learning"===p&&v.jsxs("div",{style:{overflowY:"auto",padding:"4px 8px 8px 8px"},children:[0===N.length?v.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#7f8c8d",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:h("noTechniquesAvailable")}):v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px"},children:N.map((e,t)=>{let r="",o="";if("number"==typeof e.row&&"number"==typeof e.col){r=`(${e.row+1},${e.col+1})`,o=void 0!==e.value?` ${h("number")}: ${e.value}`:""}else if(Array.isArray(e.cells)&&e.cells.length>0){if(1===e.cells.length&&Array.isArray(e.cells[0])){r=`(${e.cells[0][0]+1},${e.cells[0][1]+1})`}else r=h("multipleCells");Array.isArray(e.values)&&e.values.length>0&&(o=` ${h("number")}: [${e.values.join(",")}]`)}else if(e.type.includes("pointingPairs")&&Array.isArray(e.sourceCells)&&e.sourceCells.length>0){if(e.sourceCells.length>0){const t=e.sourceCells[0];if(Array.isArray(t)&&t.length>=2){r=`(${t[0]+1},${t[1]+1})`}else if(t&&"object"==typeof t){r=`(${(void 0!==t.row?t.row:t[0])+1},${(void 0!==t.col?t.col:t[1])+1})`}else r=h("multipleCells")}else r=h("multipleCells");void 0!==e.number&&(o=` ${h("number")}: ${e.number}`)}else if(e.type.includes("pointingPairs")){if(void 0!==e.boxRow&&void 0!==e.boxCol){const t=3*e.boxRow+e.boxCol+1;r=`${h("box")} ${t}`}else r=h("multipleCells");void 0!==e.number&&(o=` ${h("number")}: ${e.number}`)}else if(e.type.includes("boxLineReduction")&&Array.isArray(e.sourceCells)&&e.sourceCells.length>0){if(e.sourceCells.length>0){const t=e.sourceCells[0];if(Array.isArray(t)&&t.length>=2){r=`(${t[0]+1},${t[1]+1})`}else if(t&&"object"==typeof t){r=`(${(void 0!==t.row?t.row:t[0])+1},${(void 0!==t.col?t.col:t[1])+1})`}else r=h("multipleCells")}else r=h("multipleCells");void 0!==e.number&&(o=` ${h("number")}: ${e.number}`)}else if(e.type.includes("boxLineReduction")){if(void 0!==e.boxRow&&void 0!==e.boxCol){const t=3*e.boxRow+e.boxCol+1;r=`${h("box")} ${t}`}else r=h("multipleCells");void 0!==e.number&&(o=` ${h("number")}: ${e.number}`)}else r=h("unknownPosition");let n="",i="";const a=["X-Wing","Y-Wing","XY-Wing","XYZ-Wing","Swordfish","Jellyfish"];if("nakedSingle"===e.type||"naked_single"===e.type)n=h("nakedSingleTechnique");else if("notesSingle"===e.type||"singleCandidateTechnique"===e.type)n=h("notesSingleTechnique");else if(e.type.includes("hidden_single")||e.type.includes("hiddenSingle"))e.type.includes("row")||e.type.includes("Row")?n=h("hiddenSingleRow"):e.type.includes("col")||e.type.includes("Col")?n=h("hiddenSingleCol"):(e.type.includes("box")||e.type.includes("Box"))&&(n=h("hiddenSingleBox")),i="";else if("nakedPairs"===e.type||"naked_pairs"===e.type||e.type.includes("nakedPair"))n=h("nakedPairTechnique"),e.type.includes("Row")?i=h("rowSuffix"):e.type.includes("Col")?i=h("colSuffix"):e.type.includes("Box")&&(i=h("boxSuffix"));else if("hiddenPairs"===e.type||"hidden_pairs"===e.type||e.type.includes("hiddenPair"))n=h("hiddenPairTechnique"),e.type.includes("Row")?i=h("rowSuffix"):e.type.includes("Col")?i=h("colSuffix"):e.type.includes("Box")&&(i=h("boxSuffix"));else if(e.type.includes("nakedTriple"))n=h("nakedTripleTechnique"),e.type.includes("Row")?i=h("rowSuffix"):e.type.includes("Col")?i=h("colSuffix"):e.type.includes("Box")&&(i=h("boxSuffix"));else if(e.type.includes("hiddenTriple"))n=h("hiddenTripleTechnique"),e.type.includes("Row")?i=h("rowSuffix"):e.type.includes("Col")?i=h("colSuffix"):e.type.includes("Box")&&(i=h("boxSuffix"));else if(e.type.includes("pointingPairs"))n=h("pointingPairsTechnique"),e.type.includes("Row")?i=h("rowSuffix"):e.type.includes("Col")&&(i=h("colSuffix"));else if(e.type.includes("boxLineReduction"))n=h("boxLineReductionTechnique"),e.type.includes("Row")?i=h("rowSuffix"):e.type.includes("Col")&&(i=h("colSuffix"));else if(e.type.includes("xWing")||e.type.includes("x-wing"))n="X-Wing",e.type.includes("Row")?i=h("rowSuffix"):e.type.includes("Col")&&(i=h("colSuffix"));else if(e.type.includes("yWing")||e.type.includes("y-wing"))n="Y-Wing",i="";else if(e.type.includes("xyWing")||e.type.includes("xy-wing"))n="XY-Wing",i="";else if(e.type.includes("xyzWing")||e.type.includes("xyz-wing"))n="XYZ-Wing",i="";else if(e.type.includes("swordfish"))n="Swordfish",e.type.includes("Row")?i=h("rowSuffix"):e.type.includes("Col")&&(i=h("colSuffix"));else if(e.type.includes("jellyfish"))n="Jellyfish",e.type.includes("Row")?i=h("rowSuffix"):e.type.includes("Col")&&(i=h("colSuffix"));else{let t=!1;for(const r of a)if(e.description&&e.description.includes(r)){n=r,t=!0;break}t||(n=h("unknownTechnique"))}const l=n+(i?` ${i}`:"");return v.jsx("div",{onClick:()=>(e=>{y(e);const t=[],r="number"==typeof e.row&&"number"==typeof e.col,o=r?e.row:0,n=r?e.col:0,i=r?`(${o+1},${n+1})`:h("multipleCells");let a="";if(e&&(a=e.value||"",a||void 0===e.number||(a=e.number),!a&&e.result&&e.result.value&&(a=e.result.value),!a&&e.cells&&Array.isArray(e.cells)&&e.cells.length>0)){const t=e.cells[0];t&&t.value&&(a=t.value)}if("nakedSingle"===e.type)t.push({step:1,description:h("findSingleCandidateCell"),highlight:""},{step:2,description:h("cellOnlyHasSingleCandidate").replace("{position}",i).replace("{value}",a),highlight:i},{step:3,description:h("fillNumber").replace("{value}",a),highlight:i});else if(e.type.includes("hiddenSingle")){const l=e.type.includes("Row")?h("row"):e.type.includes("Col")?h("col"):h("box");let s=0;if(r)s=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&l===h("row"))s=e.row+1;else if(void 0!==e.col&&l===h("col"))s=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?l===h("col")&&"number"==typeof t[1]?s=t[1]+1:"number"==typeof t[0]&&(s=t[0]+1):t&&(l===h("col")&&void 0!==t.col?s=t.col+1:void 0!==t.row&&(s=t.row+1))}t.push({step:1,description:h("findHiddenSingleInRegion").replace("{regionType}",l).replace("{regionNum}",s),highlight:""},{step:2,description:h("numberOnlyInPosition").replace("{value}",a).replace("{regionType}",l).replace("{regionNum}",s).replace("{position}",i),highlight:i},{step:3,description:h("fillNumber").replace("{value}",a),highlight:i})}else if(e.type.includes("NakedPairs")||e.type.includes("nakedPairs")||e.type.includes("nakedPair")){const a=e.type.includes("Row")?h("row"):e.type.includes("Col")?h("col"):h("box");let l=0;if(r)l=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&a===h("row"))l=e.row+1;else if(void 0!==e.col&&a===h("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===h("col")&&"number"==typeof t[1]?l=t[1]+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(a===h("col")&&void 0!==t.col?l=t.col+1:void 0!==t.row&&(l=t.row+1))}const s=Array.isArray(e.values)?e.values.join(","):"数对",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i,d=[];if(a===h("row")&&l>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===l-1&&e[1]===t||void 0!==e.row&&e.row===l-1&&e.col===t),o=S&&S[l-1]&&S[l-1][t]>0;r||o||d.push([l-1,t])}else if(a===h("col")&&l>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===t&&e[1]===l-1||void 0!==e.row&&e.row===t&&e.col===l-1),o=S&&S[t]&&S[t][l-1]>0;r||o||d.push([t,l-1])}else if(a===h("box")&&l>0){const t=3*Math.floor((l-1)/3),r=(l-1)%3*3;for(let o=0;o<3;o++)for(let n=0;n<3;n++){const i=t+o,a=r+n,l=e.cells.some(e=>Array.isArray(e)&&e[0]===i&&e[1]===a||void 0!==e.row&&e.row===i&&e.col===a),s=S&&S[i]&&S[i][a]>0;l||s||d.push([i,a])}}const u=d.length>0?d.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):h("multipleCells");t.push({step:1,description:`在${a}${l}中查找数对`,highlight:""},{step:2,description:h("foundNakedPair",{numbers:s,cells:c}),highlight:i},{step:3,description:h("removeCandidatesFromTargets",{numbers:s,targets:u}),highlight:i})}else if(e.type.includes("HiddenPairs")||e.type.includes("hiddenPairs")||e.type.includes("hiddenPair")){const a=e.type.includes("Row")?h("row"):e.type.includes("Col")?h("col"):h("box");let l=0;if(r)l=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&a===h("row"))l=e.row+1;else if(void 0!==e.col&&a===h("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===h("col")&&"number"==typeof t[1]?l=t[1]+1:a===h("box")&&"number"==typeof t[0]&&"number"==typeof t[1]?l=3*Math.floor(t[0]/3)+Math.floor(t[1]/3)+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(a===h("col")&&void 0!==t.col?l=t.col+1:a===h("box")&&void 0!==t.row&&void 0!==t.col?l=3*Math.floor(t.row/3)+Math.floor(t.col/3)+1:void 0!==t.row&&(l=t.row+1))}const s=Array.isArray(e.values)?e.values.join(","):"数对",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i;t.push({step:1,description:h("findHiddenPairInRegion",{regionType:a,regionNum:l}),highlight:""},{step:2,description:h("foundNumbersOnlyInCells",{numbers:s,cells:c}),highlight:i},{step:3,description:h("removeOtherCandidates",{cells:c,numbers:s}),highlight:i})}else if(e.type.includes("nakedTriple")){const a=e.type.includes("Row")?h("row"):e.type.includes("Col")?h("col"):h("box");let l=0;if(r)l=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&a===h("row"))l=e.row+1;else if(void 0!==e.col&&a===h("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===h("col")&&"number"==typeof t[1]?l=t[1]+1:a===h("box")&&"number"==typeof t[0]&&"number"==typeof t[1]?l=3*Math.floor(t[0]/3)+Math.floor(t[1]/3)+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(a===h("col")&&void 0!==t.col?l=t.col+1:a===h("box")&&void 0!==t.row&&void 0!==t.col?l=3*Math.floor(t.row/3)+Math.floor(t.col/3)+1:void 0!==t.row&&(l=t.row+1))}const s=Array.isArray(e.values)?e.values.join(","):"三链数",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i,d=[];if(a===h("row")&&l>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===l-1&&e[1]===t||void 0!==e.row&&e.row===l-1&&e.col===t),o=S&&S[l-1]&&S[l-1][t]>0;r||o||d.push([l-1,t])}else if(a===h("col")&&l>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===t&&e[1]===l-1||void 0!==e.row&&e.row===t&&e.col===l-1),o=S&&S[t]&&S[t][l-1]>0;r||o||d.push([t,l-1])}else if(a===h("box")&&l>0){const t=3*Math.floor((l-1)/3),r=(l-1)%3*3;for(let o=0;o<3;o++)for(let n=0;n<3;n++){const i=t+o,a=r+n,l=e.cells.some(e=>Array.isArray(e)&&e[0]===i&&e[1]===a||void 0!==e.row&&e.row===i&&e.col===a),s=S&&S[i]&&S[i][a]>0;l||s||d.push([i,a])}}const u=d.length>0?d.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):h("relatedCells");t.push({step:1,description:h("findTripleInRegion",{regionType:a,regionNum:l}),highlight:""},{step:2,description:h("foundNakedTriple",{numbers:s,cells:c}),highlight:i},{step:3,description:h("removeCandidatesFromTargets",{numbers:s,targets:u}),highlight:i})}else if(e.type.includes("hiddenTriple")){const a=e.type.includes("Row")?h("row"):e.type.includes("Col")?h("col"):h("box");let l=0;if(r)l=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&a===h("row"))l=e.row+1;else if(void 0!==e.col&&a===h("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===h("col")&&"number"==typeof t[1]?l=t[1]+1:a===h("box")&&"number"==typeof t[0]&&"number"==typeof t[1]?l=3*Math.floor(t[0]/3)+Math.floor(t[1]/3)+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(a===h("col")&&void 0!==t.col?l=t.col+1:a===h("box")&&void 0!==t.row&&void 0!==t.col?l=3*Math.floor(t.row/3)+Math.floor(t.col/3)+1:void 0!==t.row&&(l=t.row+1))}const s=Array.isArray(e.values)?e.values.join(","):"三链数",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i;t.push({step:1,description:h("findHiddenTripleInRegion",{regionType:a,regionNum:l}),highlight:""},{step:2,description:h("foundNumbersOnlyInCells",{numbers:s,cells:c}),highlight:i},{step:3,description:h("removeOtherCandidates",{cells:c,numbers:s}),highlight:i})}else if(e.type.includes("pointingPairs")){const r=e.type.includes("Row")?h("row"):h("col"),o=3*e.boxRow+e.boxCol+1,n=(r===h("row")?e.row:e.col)+1;e.sourceCells&&Array.isArray(e.sourceCells)?e.sourceCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):h("multipleCells");const a=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):h("multipleCells");t.push({step:1,description:h("findPointingPairsInBox",{boxNum:o,number:e.number,lineType:r,lineNum:n}),highlight:""},{step:2,description:h("removePointingPairsFromTargets",{number:e.number,targets:a,lineType:r,lineNum:n}),highlight:i})}else if(e.type.includes("boxLineReduction")){const r=e.type.includes("Row")?h("row"):h("col"),o=3*e.boxRow+e.boxCol+1,n=(r===h("row")?e.row:e.col)+1;e.sourceCells&&Array.isArray(e.sourceCells)?e.sourceCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):h("multipleCells");const a=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):h("multipleCells");t.push({step:1,description:h("findBoxLineReductionInLine",{lineType:r,lineNum:n,number:e.number,boxNum:o}),highlight:""},{step:2,description:h("removeBoxLineReductionFromTargets",{number:e.number,targets:a,boxNum:o}),highlight:i})}else if(e.type.includes("xWing")||e.type.includes("x-wing")){const r=e.type.includes("Row")?h("row"):h("col"),o=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):h("multipleCells"),n=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):h("multipleCells");t.push({step:1,description:h("findXWingInWings",{wingType:r,number:e.number}),highlight:""},{step:2,description:h("xWingFormRectangle",{sourceCells:o,number:e.number}),highlight:i},{step:3,description:h("removeXWingFromTargets",{number:e.number,targets:n}),highlight:i})}else if(e.type.includes("yWing")||e.type.includes("y-wing")){const r=`(${e.anchorCell[0]+1},${e.anchorCell[1]+1})`,o=`(${e.xzCell[0]+1},${e.xzCell[1]+1})`,n=`(${e.yzCell[0]+1},${e.yzCell[1]+1})`,a=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):h("multipleCells");t.push({step:1,description:h("findYWingStructure",{anchor:r,xz:o,yz:n}),highlight:""},{step:2,description:h("yWingShareCandidates",{anchor:r,xz:o,yz:n,x:e.x,y:e.y,z:e.z}),highlight:i},{step:3,description:h("removeYWingFromTargets",{number:e.z,targets:a}),highlight:i})}else if(e.type.includes("swordfish")){const r=e.type.includes("Row")?h("row"):h("col"),o=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):h("multipleCells"),n=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):h("multipleCells");t.push({step:1,description:h("findSwordfishInWings",{wingType:r,number:e.number}),highlight:""},{step:2,description:h("swordfishFormStructure",{sourceCells:o,number:e.number}),highlight:i},{step:3,description:h("removeSwordfishFromTargets",{number:e.number,targets:n}),highlight:i})}else if(e.type.includes("xyzWing")||e.type.includes("xyz-wing")){const r=`(${e.pivotCell[0]+1},${e.pivotCell[1]+1})`,o=`(${e.xzCell[0]+1},${e.xzCell[1]+1})`,n=`(${e.yzCell[0]+1},${e.yzCell[1]+1})`,a=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):h("multipleCells");t.push({step:1,description:h("findXYZWingStructure",{anchor:r,xz:o,yz:n}),highlight:""},{step:2,description:h("xyzWingShareCandidates",{anchor:r,xz:o,yz:n,x:e.x,y:e.y,z:e.common}),highlight:i},{step:3,description:h("removeXYZWingFromTargets",{number:e.common,targets:a}),highlight:i})}else if(e.type.includes("jellyfish")){const r=e.type.includes("Row")?h("row"):h("col"),o=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):h("multipleCells"),n=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):h("multipleCells");t.push({step:1,description:h("findJellyfishInWings",{wingType:r,number:e.number}),highlight:""},{step:2,description:h("jellyfishFormStructure",{sourceCells:o,number:e.number}),highlight:i},{step:3,description:h("removeJellyfishFromTargets",{number:e.number,targets:n}),highlight:i})}else t.push({step:1,description:h("applyTechnique",{technique:h(e.description)||e.type}),highlight:""},{step:2,description:h("relatedPosition",{position:i}),highlight:i},{step:3,description:a?h("relatedNumber",{number:a}):h("analysisCompleted"),highlight:i});if(E(t),w(0),z){const t=(e=>{const t=[],{cells:r=[],targetCells:o=[],values:n=[],removableCandidates:i=[],result:a={}}=e,{operation:l}=a,s=e.type&&("nakedSingle"===e.type||"notesSingle"===e.type||e.type.includes("hiddenSingle"));if(e.type&&(e.type.includes("nakedPair")||e.type.includes("naked_pairs")||"nakedPairs"===e.type)){if(Array.isArray(r)&&r.length>0&&r.forEach(r=>{const o=Array.isArray(r)?r[0]:"number"==typeof r.row?r.row:null,n=Array.isArray(r)?r[1]:"number"==typeof r.col?r.col:null;null!==o&&null!==n&&t.push({row:o,col:n,techniqueIndicator:!0,techniqueType:e.type,highlightType:"pair",isTarget:!1,pairNotes:e.values||[],backgroundColor:"transparent",borderColor:"transparent"})}),Array.isArray(o)&&o.length>0&&o.forEach(r=>{const o=Array.isArray(r)?r[0]:"number"==typeof r.row?r.row:null,n=Array.isArray(r)?r[1]:"number"==typeof r.col?r.col:null;if(null!==o&&null!==n){const r=t.findIndex(e=>e.row===o&&e.col===n);-1===r?t.push({row:o,col:n,techniqueIndicator:!0,techniqueType:e.type,highlightType:"target",isTarget:!0,backgroundColor:"transparent",borderColor:"transparent"}):(t[r].highlightType="target",t[r].isTarget=!0,t[r].backgroundColor="transparent",t[r].borderColor="transparent")}}),Array.isArray(i)&&i.length>0){const r={};e.targetCellsDetails&&Array.isArray(e.targetCellsDetails)?e.targetCellsDetails.forEach(e=>{const t=`${e.row}-${e.col}`;r[t]||(r[t]=[]),Array.isArray(e.notesToRemove)&&e.notesToRemove.forEach(e=>{r[t].includes(e)||r[t].push(e)})}):o.forEach((e,t)=>{const o=Array.isArray(e)?e[0]:"number"==typeof e.row?e.row:null,n=Array.isArray(e)?e[1]:"number"==typeof e.col?e.col:null;if(null!==o&&null!==n){const e=`${o}-${n}`;if(r[e]||(r[e]=[]),t<i.length){const o=i[t];r[e].includes(o)||r[e].push(o)}}}),Object.keys(r).forEach(o=>{const[n,i]=o.split("-").map(Number),a=Array.isArray(r[o])?r[o]:[],l=t.findIndex(e=>e.row===n&&e.col===i);if(-1===l)t.push({row:n,col:i,techniqueIndicator:!0,techniqueType:e.type,highlightType:"removal",notesToRemove:a,backgroundColor:"transparent",borderColor:"transparent"});else{const e=t[l].notesToRemove||[],r=[...new Set([...e,...a])];t[l].notesToRemove=r,t[l].highlightType="removal",t[l].backgroundColor="transparent",t[l].borderColor="transparent"}})}}else if(s){const a=(e,r,o=null,n=[])=>{t.push({row:e,col:r,techniqueIndicator:!0,highlightType:"primary",number:o,notesToRemove:n,isTarget:!0,backgroundColor:"rgba(76, 175, 80, 0.2)",borderColor:"#4CAF50"})},s=(e,r,o=null)=>{t.push({row:e,col:r,techniqueIndicator:!0,highlightType:"secondary",number:o,isTarget:!0,backgroundColor:"rgba(33, 150, 243, 0.2)",borderColor:"#2196F3"})},c=(e,r,o,n=!1)=>{t.push({row:e,col:r,techniqueIndicator:!0,highlightType:"removal",notesToRemove:o,isTarget:!1,backgroundColor:n?"rgba(244, 67, 54, 0.1)":"transparent",borderColor:"#F44336",borderStyle:"dashed"})};Array.isArray(r)&&r.length>0&&r.forEach(r=>{const o=Array.isArray(r)?r[0]:"number"==typeof r.row?r.row:null,n=Array.isArray(r)?r[1]:"number"==typeof r.col?r.col:null;null!==o&&null!==n&&(t.some(e=>e.row===o&&e.col===e)||a(o,n,r.value||e.number,r.notes||[]))}),Array.isArray(o)&&o.length>0&&o.forEach(r=>{const o=Array.isArray(r)?r[0]:"number"==typeof r.row?r.row:null,n=Array.isArray(r)?r[1]:"number"==typeof r.col?r.col:null;null!==o&&null!==n&&(t.some(e=>e.row===o&&e.col===e)||s(o,n,e.number))});const d=e&&"number"==typeof e.row&&"number"==typeof e.col,u=d?e.row:0,f=d?e.col:0;let h="";if(e&&(h=e.value||"",h||void 0===e.number||(h=e.number),!h&&e.result&&e.result.value&&(h=e.result.value),!h&&e.cells&&Array.isArray(e.cells)&&e.cells.length>0)){const t=e.cells[0];t&&t.value&&(h=t.value)}if(d&&"number"==typeof u&&"number"==typeof f)if(t.some(e=>e.row===u&&e.col===f)||a(u,f,h),t.forEach(t=>{t.row===u&&t.col===f&&(!t.number&&h&&(t.number=h),!t.techniqueType&&e.type&&(t.techniqueType=e.type))}),["nakedSingle","notesSingle"].includes(e.type))t.forEach(e=>{e.row===u&&e.col===f&&(e.relatedAreas=["row","col","box"])});else if(e.type.startsWith("hiddenSingle")){const r=e.type.replace("hiddenSingle","").toLowerCase();t.forEach(e=>{e.row===u&&e.col===f&&(e.relatedAreas=[r])})}l&&"removeCandidates"===l.type&&Array.isArray(l.cells)&&l.cells.forEach(e=>{if("number"==typeof e.row&&"number"==typeof e.col&&Array.isArray(e.valuesToRemove)){const{row:r,col:o,valuesToRemove:n}=e,i=t.findIndex(e=>e.row===r&&e.col===o);-1===i?c(r,o,n,!0):(t[i].notesToRemove=n,t[i].highlightType="primary"===t[i].highlightType?"primary-removal":"removal")}}),Array.isArray(n)&&n.length>0&&t.forEach(e=>{e.highlightedValues||(e.highlightedValues=n)}),Array.isArray(i)&&i.length>0&&t.forEach(e=>{e.notesToRemove||(e.notesToRemove=i)}),(e.type||"").includes("pointingPairs")&&e.sourceCells&&Array.isArray(e.sourceCells)&&e.sourceCells.forEach(e=>{const r=Array.isArray(e)?e[0]:e.row;Array.isArray(e)?e[1]:e.col;const o=t.findIndex(e=>e.row===r&&e.col===e);-1!==o&&(t[o].highlightType="primary",t[o].isTarget=!0)})}else{const n=(e,t,r)=>{if(e.type&&e.type.includes("nakedTriple")&&e.conditionCellsDetails){const o=e.conditionCellsDetails.find(e=>e.row===t&&e.col===r);if(o&&Array.isArray(o.notes))return o.notes}if(e.type&&e.type.includes("yWing")){if(void 0!==e.x&&void 0!==e.y&&void 0!==e.z){const o=e.anchorCell&&(Array.isArray(e.anchorCell)&&e.anchorCell[0]===t&&e.anchorCell[1]===r||e.anchorCell.row===t&&e.anchorCell.col===r),n=e.xzCell&&(Array.isArray(e.xzCell)&&e.xzCell[0]===t&&e.xzCell[1]===r||e.xzCell.row===t&&e.xzCell.col===r),i=e.yzCell&&(Array.isArray(e.yzCell)&&e.yzCell[0]===t&&e.yzCell[1]===r||e.yzCell.row===t&&e.yzCell.col===r);if(o)return[e.x,e.y];if(n)return[e.x,e.z];if(i)return[e.y,e.z]}if(void 0!==e.x&&void 0!==e.y)return[e.x,e.y]}else if(e.type&&e.type.includes("xyzWing")){if(void 0!==e.x&&void 0!==e.y&&void 0!==e.z){const o=e.pivotCell&&(Array.isArray(e.pivotCell)&&e.pivotCell[0]===t&&e.pivotCell[1]===r||e.pivotCell.row===t&&e.pivotCell.col===r),n=e.xzCell&&(Array.isArray(e.xzCell)&&e.xzCell[0]===t&&e.xzCell[1]===r||e.xzCell.row===t&&e.xzCell.col===r),i=e.yzCell&&(Array.isArray(e.yzCell)&&e.yzCell[0]===t&&e.yzCell[1]===r||e.yzCell.row===t&&e.yzCell.col===r);if(o)return[e.x,e.y,e.z];if(n)return[e.x,e.z];if(i)return[e.y,e.z]}if(void 0!==e.x&&void 0!==e.y&&void 0!==e.z)return[e.x,e.y,e.z]}else if(e.type&&(e.type.includes("pointingPairs")||e.type.includes("boxLineReduction"))){if(void 0!==e.number)return[e.number]}else{if(void 0!==e.number)return[e.number];if(Array.isArray(e.values)&&e.values.length>0)return e.values}return[]},a=e.type&&(e.type.includes("pointingPairs")||e.type.includes("boxLineReduction"))?e.sourceCells||[]:r;if(Array.isArray(a)&&a.length>0&&a.forEach(r=>{const o=Array.isArray(r)?r[0]:"number"==typeof r.row?r.row:null,i=Array.isArray(r)?r[1]:"number"==typeof r.col?r.col:null;if(null!==o&&null!==i){const r={row:o,col:i,techniqueIndicator:!0,techniqueType:e.type,highlightType:"condition",isTarget:!1,highlightedValues:n(e,o,i),backgroundColor:"transparent",borderColor:"transparent"};e.type&&e.type.includes("yWing")&&void 0!==e.z&&(r.zValue=e.z),e.type&&e.type.includes("xyzWing")&&void 0!==e.z&&(r.zValue=e.z,r.x=e.x,r.y=e.y,r.z=e.z,r.pivotCell=e.pivotCell,r.xzCell=e.xzCell,r.yzCell=e.yzCell),t.push(r)}}),Array.isArray(o)&&o.length>0){const r={};e.targetCellsDetails&&Array.isArray(e.targetCellsDetails)?e.targetCellsDetails.forEach(e=>{const t=`${e.row}-${e.col}`;r[t]||(r[t]=[]),Array.isArray(e.notesToRemove)&&e.notesToRemove.forEach(e=>{r[t].includes(e)||r[t].push(e)})}):o.length>0&&i.length>0&&(i.length===o.length?o.forEach((e,t)=>{const o=Array.isArray(e)?e[0]:"number"==typeof e.row?e.row:null,n=Array.isArray(e)?e[1]:"number"==typeof e.col?e.col:null;if(null!==o&&null!==n){const e=`${o}-${n}`;r[e]||(r[e]=[]);const a=i[t];r[e].includes(a)||r[e].push(a)}}):o.forEach(e=>{const t=Array.isArray(e)?e[0]:"number"==typeof e.row?e.row:null,o=Array.isArray(e)?e[1]:"number"==typeof e.col?e.col:null;if(null!==t&&null!==o){const e=`${t}-${o}`;r[e]||(r[e]=[]),i.forEach(t=>{r[e].includes(t)||r[e].push(t)})}})),Object.keys(r).forEach(o=>{const[n,i]=o.split("-").map(Number),a=Array.isArray(r[o])?r[o]:[],l=t.findIndex(e=>e.row===n&&e.col===i);if(-1===l)t.push({row:n,col:i,techniqueIndicator:!0,techniqueType:e.type,highlightType:"removal",notesToRemove:a,backgroundColor:"transparent",borderColor:"transparent"});else{const e=t[l].notesToRemove||[],r=[...new Set([...e,...a])];t[l].notesToRemove=r,t[l].highlightType="removal",t[l].backgroundColor="transparent",t[l].borderColor="transparent"}})}}return t})(e);z(t)}g("solution")})(e),style:{padding:"8px 10px",backgroundColor:"#f8f9fa",borderRadius:"6px",border:"1px solid #e9ecef",cursor:"pointer",transition:"all 0.2s ease",marginBottom:"6px"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#e9ecef",e.currentTarget.style.borderColor="#3498db"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#f8f9fa",e.currentTarget.style.borderColor="#e9ecef"},children:v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontWeight:"600",color:"#34495e",flexWrap:"wrap"},children:[v.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flexShrink:0},children:l}),v.jsxs("span",{style:{fontSize:"14px",color:"#7f8c8d",fontWeight:"normal",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:1,minWidth:0},children:[h("position"),": ",r,o]})]})},t)})}),v.jsx("button",{onClick:()=>{let e=!0;if(a){!1===a()&&(e=!1)}e&&i&&i(),e&&(M(),g("techniques"))},style:{width:"100%",padding:"8px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",transition:"background-color 0.2s ease"},title:h("refreshCandidatesTooltip"),children:v.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[v.jsx(Tn,{}),h("fillCandidates")]})})]}),"solution"===m&&"learning"===p&&v.jsx("div",{style:{overflowY:"auto",padding:"8px",flex:1,minHeight:"200px",maxHeight:"400px"},children:x?v.jsx(v.Fragment,{children:v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"12px"},children:(()=>{const e=R.length;let t=[],r=!1,o=!1;if(2===e)0===b?(t=[R[0]],r=!0):(t=[R[1]],o=!0);else if(3===e)0===b?(t=[R[0],R[1]],r=!0):(t=[R[2]],o=!0);else if(e>=4){const n=2*b,i=Math.min(n+2,e);t=R.slice(n,i),i<e?r=!0:o=!0}else t=R,o=!0;return v.jsxs(v.Fragment,{children:[t.map((e,t)=>0===t&&(r||o)?v.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef",position:"relative"},children:[v.jsx("div",{style:{minWidth:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#3498db",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold"},children:e.step}),v.jsx("div",{style:{flex:1,fontSize:"14px",color:"#34495e",lineHeight:"1.5",paddingRight:"80px",minHeight:"40px"},children:e.description}),v.jsxs("div",{style:{position:"absolute",right:"12px",top:u?"8px":"12px",display:"flex",gap:"6px"},children:[r&&v.jsx("button",{onClick:()=>w(b+1),style:{width:u?"60px":"70px",height:u?"18px":"32px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:u?"5px":"13px",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 4px rgba(52, 152, 219, 0.4), 0 1px 2px rgba(0, 0, 0, 0.15)",transition:"all 0.2s ease",whiteSpace:"nowrap"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#2980b9",e.currentTarget.style.boxShadow="0 2px 4px rgba(0, 0, 0, 0.3)",e.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#3498db",e.currentTarget.style.boxShadow="0 2px 6px rgba(52, 152, 219, 0.3), 0 1px 2px rgba(0, 0, 0, 0.12)",e.currentTarget.style.transform="translateY(0)"},children:h("nextStep")}),o&&v.jsx("button",{onClick:e=>{console.log("Apply button clicked"),(()=>{if(console.log("handleApplyTechnique called",{selectedTechnique:x,isPencilMode:s,togglePencilMode:n}),x){const e=x.type&&("nakedSingle"===x.type||"notesSingle"===x.type||x.type.includes("hiddenSingle"));console.log("Technique type check",{isBasicTechnique:e,techniqueType:x.type}),e?(console.log("Applying basic technique"),$(x)&&(z&&z([]),T&&T(null),M())):(console.log("Applying non-basic technique"),K.info(h("manualCandidateRemovalRequired",{defaultMessage:"请手动清除选定候选数"}),{position:"top-right",autoClose:3e3}),z&&z([]),T&&T(null),g("keyboard"),y(null),E([]),w(0))}else console.log("No selected technique")})()},style:{width:u?"60px":"70px",height:u?"18px":"32px",backgroundColor:"#2ecc71",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:u?"5px":"13px",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 4px rgba(46, 204, 113, 0.4), 0 1px 2px rgba(0, 0, 0, 0.15)",transition:"all 0.2s ease",whiteSpace:"nowrap"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#27ae60",e.currentTarget.style.boxShadow="0 2px 4px rgba(0, 0, 0, 0.3)",e.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#2ecc71",e.currentTarget.style.boxShadow="0 2px 6px rgba(46, 204, 113, 0.3), 0 1px 2px rgba(0, 0, 0, 0.12)",e.currentTarget.style.transform="translateY(0)"},children:x&&("nakedSingle"===x.type||"notesSingle"===x.type||x.type.includes("hiddenSingle"))?h("apply"):h("manualHandle")})]})]},e.step):v.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[v.jsx("div",{style:{minWidth:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#3498db",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold"},children:e.step}),v.jsx("div",{style:{flex:1,fontSize:"14px",color:"#34495e",lineHeight:"1.5"},children:e.description})]},e.step)),t.length>0&&!(r||o)&&t[0]!==t[t.length-1]&&v.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"12px"},children:v.jsx("button",{onClick:()=>w(b+1),style:{width:u?"75px":"90px",height:u?"22px":"40px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:u?"5px":"14px",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 8px rgba(52, 152, 219, 0.4), 0 2px 4px rgba(0, 0, 0, 0.15)",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#2980b9",e.currentTarget.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)",e.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#3498db",e.currentTarget.style.boxShadow="0 4px 10px rgba(52, 152, 219, 0.3), 0 1px 3px rgba(0, 0, 0, 0.12)",e.currentTarget.style.transform="translateY(0)"},children:h("nextStep")})})]})})()})}):v.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#7f8c8d",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:h("selectTechniqueFirst")})})]})]})]})};"undefined"!=typeof window&&(window.debugSudokuTechnique=()=>{if(console.log("=== 实际应用技巧对象调试 ==="),document.querySelector(".control-panel")){console.log("找到ControlPanel组件"),window.selectedTechnique&&console.log("window.selectedTechnique:",window.selectedTechnique);const e=localStorage.getItem("selectedTechnique");e&&console.log("localStorage selectedTechnique:",JSON.parse(e))}console.log("=== 调试结束 ===")},window.storeSelectedTechnique=e=>{window.selectedTechnique=e,localStorage.setItem("selectedTechnique",JSON.stringify(e)),console.log("技巧对象已存储到全局变量:",e)},console.log("调试函数已加载:"),console.log("- 在控制台输入 debugSudokuTechnique() 检查技巧对象"),console.log("- 技巧对象会自动存储到 window.selectedTechnique"));const Pn=Hr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,Nn=Hr.div`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-family: inherit;
  border: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  transform: translateY(0);
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from { 
      opacity: 0;
      transform: translateY(-20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  // 小屏幕适配
  @media (max-width: 576px) {
    padding: 20px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }
`,In=Hr.h2`
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 24px 0;
  font-size: 22px;
  text-align: center;
  font-weight: 700;
  position: relative;
  display: inline-block;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
    border-radius: 3px;
  }
`,Rn=Hr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`,En=Hr(({isSelected:e,...t})=>v.jsx("button",{...t}))`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid ${e=>{var t,r;return e.isSelected?(null==(t=e.theme)?void 0:t.primary)||"#3498db":(null==(r=e.theme)?void 0:r.border)||"#e0e0e0"}};
  border-radius: 8px;
  background-color: ${e=>{var t,r;return e.isSelected?(null==(t=e.theme)?void 0:t.primary)||"#3498db":(null==(r=e.theme)?void 0:r.surface)||"#ffffff"}};
  color: ${e=>{var t;return e.isSelected?"white":(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  text-align: left;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 60px;
  box-sizing: border-box;
  
  // 添加渐变背景效果
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(52, 152, 219, 0.1), transparent);
    transition: all 0.5s ease;
  }
  
  // 悬停效果（仅在非移动设备上）
  @media (hover: hover) {
    &:hover {
      background-color: ${e=>{var t,r;return e.isSelected?(null==(t=e.theme)?void 0:t.primaryDark)||"#2980b9":(null==(r=e.theme)?void 0:r.surfaceHighlight)||"#f5f5f5"}};
      transform: translateX(4px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
      
      &::before {
        left: 100%;
      }
    }
  }
  
  // 触摸反馈
  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
  
  /* 移除:last-child选择器，使用grid的gap属性控制间距 */
  
  // 不同难度的特殊样式
  &.easy {
    border-color: ${e=>{var t,r;return e.isSelected?(null==(t=e.theme)?void 0:t.primary)||"#3498db":(null==(r=e.theme)?void 0:r.success)||"#2ecc71"}};
    
    &:hover {
      background-color: ${e=>{var t,r;return e.isSelected?(null==(t=e.theme)?void 0:t.primaryDark)||"#2980b9":((null==(r=e.theme)?void 0:r.success)||"#2ecc71")+"10"}};
    }
  }
  
  &.medium {
    border-color: ${e=>{var t,r;return e.isSelected?(null==(t=e.theme)?void 0:t.primary)||"#3498db":(null==(r=e.theme)?void 0:r.warning)||"#f39c12"}};
    
    &:hover {
      background-color: ${e=>{var t,r;return e.isSelected?(null==(t=e.theme)?void 0:t.primaryDark)||"#2980b9":((null==(r=e.theme)?void 0:r.warning)||"#f39c12")+"10"}};
    }
  }
  
  &.hard {
    border-color: ${e=>{var t,r;return e.isSelected?(null==(t=e.theme)?void 0:t.primary)||"#3498db":(null==(r=e.theme)?void 0:r.error)||"#e74c3c"}};
    
    &:hover {
      background-color: ${e=>{var t,r;return e.isSelected?(null==(t=e.theme)?void 0:t.primaryDark)||"#2980b9":((null==(r=e.theme)?void 0:r.error)||"#e74c3c")+"10"}};
    }
  }
  
  &.expert {
    border-color: ${e=>{var t,r;return e.isSelected?(null==(t=e.theme)?void 0:t.primary)||"#3498db":(null==(r=e.theme)?void 0:r.text)||"#34495e"}};
    
    &:hover {
      background-color: ${e=>{var t,r;return e.isSelected?(null==(t=e.theme)?void 0:t.primaryDark)||"#2980b9":((null==(r=e.theme)?void 0:r.text)||"#34495e")+"10"}};
    }
  }
`,Mn=Hr.div`
  margin-top: 4px;
  font-size: 12px;
  opacity: 0.7;
  font-weight: normal;
`,Fn=Hr.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`,Ln=Hr.button`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  }
`,qn=Hr.button`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
  color: white;
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primaryDark)||"#2980b9"}};
  }
`,Wn=({isOpen:e,onClose:t,onSelectDifficulty:r,initialDifficulty:n})=>{const{theme:i}=oe(),{t:a}=le(),[l,s]=o.useState(n||Vo.MEDIUM),c={[Vo.EASY]:{name:a("easy"),description:a("difficultyDescription.easy")},[Vo.MEDIUM]:{name:a("medium"),description:a("difficultyDescription.medium")},[Vo.HARD]:{name:a("hard"),description:a("difficultyDescription.hard")},[Vo.EXPERT]:{name:a("expert"),description:a("difficultyDescription.expert")}};if(!e)return null;const d=()=>{r(l),t()};return v.jsx(Pn,{onClick:t,onKeyDown:e=>{"Escape"===e.key&&t(),"Enter"===e.key&&d()},children:v.jsxs(Nn,{theme:i,onClick:e=>e.stopPropagation(),children:[v.jsx(In,{theme:i,children:a("selectDifficulty")}),v.jsx(Rn,{children:Object.entries(Vo).map(([e,t])=>{const r=c[t];return v.jsxs(En,{isSelected:l===t,onClick:()=>s(t),theme:i,className:e.toLowerCase(),children:[r.name,v.jsx(Mn,{children:r.description})]},e)})}),v.jsxs(Fn,{children:[v.jsx(Ln,{theme:i,onClick:t,children:a("cancel")}),v.jsx(qn,{theme:i,onClick:d,children:a("startGame")})]})]})})},On=Hr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,Dn=Hr.div`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-family: inherit;
  border: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  transform: translateY(0);
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from { 
      opacity: 0;
      transform: translateY(-20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  // 小屏幕适配
  @media (max-width: 576px) {
    padding: 20px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }
`,Hn=Hr.h2`
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 20px 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`,Bn=Hr.div`
  padding: 16px;
  margin-bottom: 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 8px;
  border-left: 4px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
  text-align: center;
`,_n=Hr.div`
  font-weight: 600;
  margin-bottom: 8px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
  font-size: 18px;
`,Yn=Hr.div`
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.5;
`,Un=Hr.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 16px;
`,Gn=Hr.button`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  }
`,Xn=Hr.button`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
  color: white;
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primaryDark)||"#2980b9"}};
  }
`,Jn=({isOpen:e,onClose:t,currentMode:r,onConfirm:o})=>{const{theme:n}=oe(),{t:i}=le(),a="game"===r?"learning":"game";if(!e)return null;return v.jsx(On,{onClick:t,onKeyDown:e=>{"Escape"===e.key&&t()},children:v.jsxs(Dn,{theme:n,onClick:e=>e.stopPropagation(),children:[v.jsx(Hn,{theme:n,children:"game"===r?i("switchToLearningMode","切换到学习模式"):i("switchToGameMode","切换到游戏模式")}),v.jsxs(Bn,{theme:n,children:[v.jsx(_n,{theme:n,children:"learning"===a?i("learningMode","学习模式"):i("gameMode","游戏模式")}),v.jsx(Yn,{theme:n,children:"learning"===a?i("learningModeDescription","提供技巧学习辅助，帮助您学习数独解题技巧。"):i("gameModeDescription","关闭技巧学习辅助功能，专注于游戏体验。")})]}),v.jsxs(Un,{children:[v.jsx(Gn,{theme:n,onClick:t,children:i("cancel","取消")}),v.jsx(Xn,{theme:n,onClick:o,children:"learning"===a?i("switchToLearningMode","切换到学习模式"):i("switchToGameMode","切换到游戏模式")})]})]})})},Zn=Hr.div.attrs({className:"nav-block"})`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f8f9fa"}};
  border-radius: var(--border-radius, 8px);
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  width: 100%; // 与数独棋盘同宽
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
  
  // 添加悬停效果
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  // 确保在父容器中正确对齐
  align-self: flex-start;
  
  // 移除滚动吸附功能，允许自由滚动
  
  // 竖屏模式下调整上下边距一致
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 4px 4px; // 确保上下左右内边距一致
    min-height: auto; // 让高度自适应内容
    border-bottom-width: 2px;
    display: flex;
    align-items: center;
  }
`;Hr.h3`
  font-size: 14px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 4px 0;
  padding-bottom: 4px;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  display: none; // 竖屏模式下隐藏标题以节省空间
`;const Vn=Hr.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5个按钮平均分布
  gap: 2px;
  margin: 0;
  padding: 2px 0; // 进一步减小内边距以减小整体高度
  
  // 竖屏模式下确保上下内边距一致
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 2px 0; // 上下内边距一致
    width: 100%;
  }
`,Kn=Hr(({isActive:e,...t})=>v.jsx("button",{...t}))`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{var t,r;return e.isActive?(null==(t=e.theme)?void 0:t.primary)||"#3498db":(null==(r=e.theme)?void 0:r.background)||"#f8f9fa"}};
  color: ${e=>{var t;return e.isActive?"white":(null==(t=e.theme)?void 0:t.text)||"#666666"}};
  border: none;
  border-radius: 8px;
  padding: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 40px; // 减小最小高度
  height: auto; // 允许高度自适应内容
  
  // 竖屏模式下确保按钮在容器中垂直居中
  @media (max-width: 768px) and (orientation: portrait) {
    min-height: 32px;
    height: 32px; // 固定高度以确保一致性
    padding: 0; // 移除内边距以控制高度
    margin: 0;
  }
  font-size: 12px;
  font-family: inherit;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  
  // 添加渐变背景效果
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(52, 152, 219, 0.1), transparent);
    transition: all 0.5s ease;
  }
  
  &:hover {
    background-color: ${e=>{var t,r;return e.isActive?(null==(t=e.theme)?void 0:t.primary)||"#3498db":((null==(r=e.theme)?void 0:r.primary)||"#3498db")+"15"}};
    border-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    
    &::before {
      left: 100%;
    }
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
  }
  
  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
`,Qn=Hr.span`
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ei=()=>v.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})}),ti=()=>v.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}),ri=()=>v.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M8 5v14l11-7z"})}),oi=()=>v.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"#FFD700",children:v.jsx("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})}),ni=()=>v.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:[v.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"transparent",stroke:"currentColor",strokeWidth:"1.5"}),v.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",children:"2"}),v.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",children:"5"}),v.jsx("text",{x:"25",y:"6",fontSize:"7",fontWeight:"900",fill:"currentColor",children:"1"})]}),ii=()=>v.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 256 256",fill:"currentColor",children:[v.jsx("path",{d:"m18 82.85c-2.3 3.07-1.51 73.57 0 76s105.83 59.7 108.54 59.7 111.26-62.11 111.86-64.22 1.81-67.54 0-69-54.22-29.33-57.54-29.33-50.65 26.53-53.37 26.53-49.14-27.11-52.76-27.11-54.88 25.02-56.73 27.43z"}),v.jsx("path",{d:"m126.59 226.53c-2.48 0-4.11 0-58.58-29.93s-55.41-31.38-56.75-33.53c-1.2-1.92-2.44-3.9-2.64-41.94-.21-38.76 1.29-40.76 3-43.08 1.2-1.59 2.55-3.4 30.57-17s30.64-13.63 32.54-13.63c3.33 0 6.33 1.28 33.23 16 6.7 3.67 15.43 8.45 19.59 10.51 4.35-2.07 13.65-7 20.78-10.73 26.67-14.06 29.37-15.2 32.53-15.2 2.32 0 4.16 0 33 15 4.54 2.35 27.31 14.18 29.67 16.15 3.29 2.74 3.5 6 3.73 17.11.15 7.47.12 16.85.06 23.41-.11 12.58-.42 34.1-1.21 36.87-1 3.33-3.11 4.69-8.31 7.95-3 1.87-7.23 4.44-12.65 7.66-9.9 5.88-23.36 13.71-37.9 22-14.25 8.21-27.88 15.85-38.25 21.64-19.38 10.74-20 10.74-22.41 10.74zm-101.14-72.31c14.41 8.86 85.68 48.05 101.07 55.58 15.71-8 89.25-50.18 104.23-59.78.52-11.66 1-48.65.35-59.82-10.07-5.62-41.48-22-50.19-25.72-4.85 2.19-16.82 8.5-25.12 12.87-24.1 12.7-25.4 13.19-28.3 13.19s-4.19-.48-27.22-13.09c-8.54-4.67-20.92-11.45-25.74-13.64-8.53 3.29-40.18 18.59-49.28 23.84-1.09 11.6-.74 54.56.2 66.57z"}),v.jsx("path",{d:"m18 82.85c-2.3 3.07-1.51 73.57 0 76s105.83 59.7 108.54 59.7 111.26-62.11 111.86-64.22 1.81-67.54 0-69-54.22-29.33-57.54-29.33-50.65 26.53-53.37 26.53-49.14-27.11-52.76-27.11-54.88 25.02-56.73 27.43z"}),v.jsx("path",{d:"m69.43 110.77c-.9 3.61-2.07 7.49-10.58 8.39-11 1.16-11 11.87 0 13.17 6.77.8 10 5.39 10.24 7.84 1.53 14.82 13.36 17.48 15.74 2.44.92-5.81 2.22-9.9 8.86-10.85 11.76-1.68 11.92-10.69 2.14-12.83-3-.66-8.77-1.17-10.24-7.79-2.86-12.89-12.49-15.04-16.16-.37z"}),v.jsx("path",{d:"m189.74 106.26c0 6.08-6 12.51-10.77 11.92-5.5-.69-10.54-5.61-10.54-11.69s4.24-10.1 10.31-10.31c6.64-.23 11 4 11 10.08z"}),v.jsx("path",{d:"m168.42 148.13c0-6.08 6-12.51 10.77-11.92 5.5.69 10.54 5.61 10.54 11.69s-4.24 10.1-10.31 10.31c-6.64.23-11-4.01-11-10.08z"}),v.jsx("path",{d:"m200 137.85c-6.08 0-12.51-6-11.92-10.77.69-5.5 5.61-10.54 11.69-10.54s10.1 4.24 10.31 10.31c.25 6.64-3.99 11-10.08 11z"}),v.jsx("path",{d:"m158.15 116.54c6.08 0 12.51 6 11.92 10.77-.69 5.5-5.61 10.54-11.69 10.54s-10.1-4.24-10.31-10.31c-.23-6.65 4-11 10.08-11z"}),v.jsx("path",{d:"M40 110h24v-24h24v24h24v24h-24v24h-24v-24h-24v-24z",fill:"white",stroke:"black",strokeWidth:"4"}),v.jsx("circle",{cx:"190",cy:"95",r:"14",fill:"white",stroke:"black",strokeWidth:"4"}),v.jsx("circle",{cx:"214",cy:"119",r:"14",fill:"white",stroke:"black",strokeWidth:"4"}),v.jsx("circle",{cx:"190",cy:"143",r:"14",fill:"white",stroke:"black",strokeWidth:"4"}),v.jsx("circle",{cx:"166",cy:"119",r:"14",fill:"white",stroke:"black",strokeWidth:"4"})]}),ai=()=>v.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:[v.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"}),v.jsx("path",{d:"M12 15.4l-3.78 1.98 0.69-4.06-2.97-2.88 4.08-0.6 1.98-3.7 1.98 3.7 4.08 0.6-2.97 2.88 0.69 4.06L12 15.4z"})]}),li=({onNewGame:t,onPauseTimer:r,onGetHint:o,onShowTechniques:n,onToggleNotes:i,onSettings:a,isNotesMode:l=!1,isTimerActive:s=!0,gameCompleted:c=!1})=>{oe();const{t:d}=le(),{mode:u,setMode:f}=e.useContext(ue),h=Qo(),{startLoading:p,stopLoading:m}=de(),[g,x]=e.useState(!1),[y,b]=e.useState(!1),[w,C]=e.useState(!1),[k,$]=e.useState(!1),[j,S]=e.useState(!1),[z,T]=e.useState(0),A=e.useRef(null),P=e.useRef(null);e.useEffect(()=>{const e=()=>{console.log("NavigationBlock: 接收到打开新游戏窗口的事件"),b(!1),x(!0)};return window.addEventListener("openNewGameWindow",e),()=>{window.removeEventListener("openNewGameWindow",e)}},[]);const N=()=>{S(!0),T(0);const e=Date.now(),t=()=>{const r=Date.now()-e,o=Math.min(r/3e3*100,100);T(o),o<100?P.current=requestAnimationFrame(t):F()};P.current=requestAnimationFrame(t)},I=()=>{A.current&&(clearTimeout(A.current),A.current=null),P.current&&(cancelAnimationFrame(P.current),P.current=null),j&&z<100&&M(),S(!1),T(0)},[R,E]=e.useState(!1),M=()=>{if(!R){if(E(!0),console.log("候选数按钮短点击"),console.log("sudokuContext:",h),!h)return console.log("sudokuContext不存在"),toast.info(d("errorOccurred",{defaultMessage:"系统错误，请刷新页面重试"}),{position:"top-right",autoClose:2e3}),void setTimeout(()=>E(!1),500);if(h.selectedCell){const{row:e,col:t}=h.selectedCell;console.log("选中的单元格:",e,t),h.currentBoard&&h.currentBoard[e]&&0===h.currentBoard[e][t]?(console.log("单元格是空白的，准备填充候选数"),h.fillSelectedCellCandidates?(console.log("调用fillSelectedCellCandidates方法"),h.fillSelectedCellCandidates(e,t)):(console.log("fillSelectedCellCandidates方法不存在"),toast.info(d("functionNotAvailable",{defaultMessage:"该功能暂不可用"}),{position:"top-right",autoClose:2e3}))):(console.log("单元格不是空白的或currentBoard不存在"),toast.info(d("selectEmptyCell",{defaultMessage:"请选择一个空白单元格"}),{position:"top-right",autoClose:2e3}))}else console.log("没有选中的单元格"),toast.info(d("selectCellForCandidates",{defaultMessage:"请先选择一个空白单元格"}),{position:"top-right",autoClose:2e3});setTimeout(()=>E(!1),500)}},F=()=>{console.log("候选数按钮长按"),$(!0),i&&(i(),b(!0)),setTimeout(()=>{$(!1),S(!1),T(0)},3e3)};return v.jsxs(v.Fragment,{children:[v.jsx(Zn,{children:v.jsxs(Vn,{children:[v.jsx(Kn,{onClick:()=>{console.log("NavigationBlock: 打开难度选择模态框"),b(!1),x(!0)},title:d("newGame"),children:v.jsx(Qn,{children:v.jsx(ei,{})})}),v.jsx(Kn,{onClick:c?void 0:r,disabled:c,title:d(c?"gameCompleted":s?"pauseTimer":"resume"),children:v.jsx(Qn,{children:c||s?v.jsx(ti,{}):v.jsx(ri,{})})}),v.jsx(Kn,{onClick:o,title:d("hint"),children:v.jsx(Qn,{children:v.jsx(oi,{})})}),v.jsxs(Kn,{onMouseDown:N,onMouseUp:I,onMouseLeave:I,onTouchStart:e=>{N()},onTouchEnd:e=>{I()},title:d("notes"),isActive:y||k,style:{position:"relative"},children:[v.jsx(Qn,{children:k?v.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:[v.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"transparent",stroke:"currentColor",strokeWidth:"1.5"}),v.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",children:"2"}),v.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",children:"5"}),v.jsx("text",{x:"18",y:"6",fontSize:"6",fontWeight:"900",fill:"currentColor",children:"All"})]}):v.jsx(ni,{})}),j&&v.jsx("div",{style:{position:"absolute",top:0,left:0,width:`${z}%`,height:"100%",backgroundColor:"rgba(52, 152, 219, 0.3)",zIndex:-1,transition:"width 0.1s linear"}})]}),v.jsx(Kn,{onClick:()=>{C(!0)},title:"game"===u?d("switchToLearningMode")||"切换到学习模式":d("switchToGameMode")||"切换到游戏模式",children:v.jsx(Qn,{children:"game"===u?v.jsx(ii,{}):v.jsx(ai,{})})})]})}),v.jsx(Wn,{isOpen:g,onClose:()=>x(!1),onSelectDifficulty:async e=>{console.log("NavigationBlock: 选择难度:",e);try{b(!1),n&&console.log("将在生成新游戏时重置技巧状态"),p&&p(d("generatingNewPuzzle")),(null==h?void 0:h.startNewGame)?(console.log("调用 context.startNewGame"),await h.startNewGame(null,e),console.log("startNewGame 完成")):(null==h?void 0:h.generateNewPuzzle)?(console.log("调用 context.generateNewPuzzle"),await h.generateNewPuzzle(e),console.log("generateNewPuzzle 完成")):console.error("上下文函数不可用")}catch(t){console.error("生成新游戏失败:",t)}finally{m&&m()}},initialDifficulty:(null==h?void 0:h.difficulty)||Vo.MEDIUM}),v.jsx(Jn,{isOpen:w,onClose:()=>{C(!1)},currentMode:u,onConfirm:()=>{f("game"===u?"learning":"game"),C(!1)}})]})},si=Hr(({theme:e,...t})=>v.jsx("div",{...t})).attrs({className:"display-block"})`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: var(--border-radius, 8px);
  padding: 8px;
  box-shadow: 0 2px 8px ${e=>{var t;return(null==(t=e.theme)?void 0:t.shadow)||"rgba(0, 0, 0, 0.1)"}};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%; // 继承父容器宽度，确保与控制面板同宽
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  margin: 0;
  box-sizing: border-box;
  border: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  
  // 明确的竖屏模式检测 - 确保只影响竖屏显示
  @media (orientation: portrait) {
    padding: 4px 6px;
    gap: 4px;
    min-height: 32px;
    max-height: 32px; // 增加高度以确保文字正常显示
    line-height: 1.2;
    flex-direction: row; // 改为水平排列
    justify-content: space-between; // 均匀分布
  }
`,ci=Hr.div`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
  padding: 0;
  
  // 明确的竖屏模式 - 调整高度以确保文字正常显示
  @media (orientation: portrait) {
    font-size: 11px;
    line-height: 1.2;
    padding: 0;
    height: auto;
    margin: 0;
    flex-shrink: 0;
  }
`,di=Hr.span`
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"#ff3b30"}};
  font-weight: 600;
`,ui=Hr.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  text-align: center;
  margin: 0;
  padding: 0;
  
  // 明确的竖屏模式 - 调整高度以确保文字正常显示
  @media (orientation: portrait) {
    font-size: 12px;
    line-height: 1.2;
    padding: 0;
    height: auto;
    margin: 0;
    flex-shrink: 0;
  }
`,fi=Hr.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  
  // 明确的竖屏模式 - 调整高度以确保文字正常显示
  @media (orientation: portrait) {
    font-size: 12px;
    line-height: 1.2;
    padding: 0;
    height: auto;
    margin: 0;
    flex-shrink: 0;
  }
`,hi=({errorCount:e,difficulty:t,time:r})=>{oe();const{t:o}=le();return v.jsxs(si,{children:[v.jsxs(ci,{children:[o("error"),": ",v.jsx(di,{children:e})]}),v.jsx(ui,{children:o(t)}),v.jsx(fi,{children:r})]})},pi=({highlightedCells:t,boardWidth:r,boardHeight:o,isPortrait:n=!1})=>{if(!t||!Array.isArray(t))return null;const i=t.filter(e=>e&&!0===e.techniqueIndicator&&"number"==typeof e.row&&"number"==typeof e.col&&e.row>=0&&e.row<9&&e.col>=0&&e.col<9);if(0===i.length)return null;let a,l,s,c;n&&o?(a=r/9,l=o/9,s=`${Math.max(16,.45*Math.min(a,l))}px`,c=o):(a=r/9,l=a,s=`${Math.max(16,.45*a)}px`,c=r);const d=e.useMemo(()=>{const e=[];return i.forEach(t=>{if(t.techniqueType&&("nakedSingle"===t.techniqueType||"notesSingle"===t.techniqueType||t.techniqueType.includes("hiddenSingle"))&&t.relatedAreas&&Array.isArray(t.relatedAreas)){const{row:r,col:o}=t;if(t.relatedAreas.includes("row")&&e.push({type:"row",row:r,key:`row-${r}`}),t.relatedAreas.includes("col")&&e.push({type:"col",col:o,key:`col-${o}`}),t.relatedAreas.includes("box")){const t=Math.floor(r/3),n=Math.floor(o/3);e.push({type:"box",boxRow:t,boxCol:n,key:`box-${t}-${n}`})}}}),e},[i,a,l]),u=e=>e.notesToRemove&&Array.isArray(e.notesToRemove)&&0!==e.notesToRemove.length?e.notesToRemove.map(t=>{if("number"!=typeof t||t<1||t>9)return null;const r=t-1,o=Math.floor(r/3),n=r%3,i=.35*Math.min(a,l),s=.05*Math.min(a,l),c=(Math.min(a,l)-2*s)/3,d=s+n*c+(c-i)/2,u=s+o*c+(c-i)/2;return v.jsx("div",{style:{position:"absolute",left:`${d}px`,top:`${u}px`,width:`${i}px`,height:`${i}px`,backgroundColor:"#FF0000",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,fontWeight:"bold",border:"1px solid rgba(255, 255, 255, 0.5)",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)"},children:v.jsx("span",{style:{fontSize:.7*i+"px",fontWeight:"bold",color:"#FFFFFF",zIndex:65,textShadow:"1px 1px 1px rgba(0, 0, 0, 0.5)"},children:t})},`removable-note-${e.row}-${e.col}-${t}`)}):null,f=e=>{const t=e.pairNotes||e.highlightedValues||[];return Array.isArray(t)&&0!==t.length?t.map(t=>{if("number"!=typeof t||t<1||t>9)return null;const r=t-1,o=Math.floor(r/3),n=r%3,i=.35*Math.min(a,l),s=.05*Math.min(a,l),c=(Math.min(a,l)-2*s)/3,d=s+n*c+(c-i)/2,u=s+o*c+(c-i)/2;let f="#00FF00",h="#000000";if(e.techniqueType&&e.techniqueType.includes("yWing")&&e.zValue===t&&(f="#ADD8E6",h="#000000"),e.techniqueType&&e.techniqueType.includes("xyzWing")&&e.zValue===t&&(f="#ADD8E6",h="#000000"),e.techniqueType&&e.techniqueType.includes("xyzWing")&&void 0!==e.x&&void 0!==e.y&&void 0!==e.z){const r=e.pivotCell&&(Array.isArray(e.pivotCell)&&e.pivotCell[0]===e.row&&e.pivotCell[1]===e.col||e.pivotCell.row===e.row&&e.pivotCell.col===e.col),o=e.xzCell&&(Array.isArray(e.xzCell)&&e.xzCell[0]===e.row&&e.xzCell[1]===e.col||e.xzCell.row===e.row&&e.xzCell.col===e.col),n=e.yzCell&&(Array.isArray(e.yzCell)&&e.yzCell[0]===e.row&&e.yzCell[1]===e.col||e.yzCell.row===e.row&&e.yzCell.col===e.col);!r||t!==e.x&&t!==e.y||(f="#00FF00",h="#000000"),o&&t===e.x&&(f="#00FF00",h="#000000"),n&&t===e.y&&(f="#00FF00",h="#000000")}return v.jsx("div",{style:{position:"absolute",left:`${d}px`,top:`${u}px`,width:`${i}px`,height:`${i}px`,backgroundColor:f,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,fontWeight:"bold",border:"1px solid rgba(255, 255, 255, 0.5)",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)"},children:v.jsx("span",{style:{fontSize:.7*i+"px",fontWeight:"bold",color:h,zIndex:65,textShadow:"1px 1px 1px rgba(255, 255, 255, 0.5)"},children:t})},`condition-note-${e.row}-${e.col}-${t}`)}):null};return v.jsxs("div",{className:"technique-overlay",style:{position:"absolute",top:0,left:0,width:`${r}px`,height:`${c}px`,pointerEvents:"none",zIndex:12,boxSizing:"border-box",background:"transparent"},children:[d.map(e=>{if(i.some(e=>e.techniqueType&&("nakedSingle"===e.techniqueType||"notesSingle"===e.techniqueType||e.techniqueType.includes("hiddenSingle")))){if("row"===e.type)return v.jsx("div",{style:{position:"absolute",left:0,top:e.row*l+"px",width:`${r}px`,height:`${l}px`,backgroundColor:"rgba(52, 152, 219, 0.25)",border:"1px solid rgba(52, 152, 219, 0.5)",zIndex:15,pointerEvents:"none"}},e.key);if("col"===e.type)return v.jsx("div",{style:{position:"absolute",left:e.col*a+"px",top:0,width:`${a}px`,height:`${c}px`,backgroundColor:"rgba(52, 152, 219, 0.25)",border:"1px solid rgba(52, 152, 219, 0.5)",zIndex:15,pointerEvents:"none"}},e.key);if("box"===e.type)return v.jsx("div",{style:{position:"absolute",left:3*e.boxCol*a+"px",top:3*e.boxRow*l+"px",width:3*a+"px",height:3*l+"px",backgroundColor:"rgba(46, 204, 113, 0.25)",border:"2px solid rgba(46, 204, 113, 0.6)",borderRadius:"6px",zIndex:16,pointerEvents:"none"}},e.key)}return null}),i.map(e=>{const t=(e=>{const t={position:"absolute",left:e.col*a+"px",top:e.row*l+"px",width:`${a}px`,height:`${l}px`,pointerEvents:"none",boxSizing:"border-box",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease"};if(e.techniqueType&&("nakedSingle"===e.techniqueType||"notesSingle"===e.techniqueType||e.techniqueType.includes("hiddenSingle"))){const r={primary:{backgroundColor:e.backgroundColor||"rgba(76, 175, 80, 0.3)",borderColor:e.borderColor||"#4CAF50",border:`3px solid ${e.borderColor||"#4CAF50"}`,zIndex:35},"primary-removal":{backgroundColor:e.backgroundColor||"rgba(76, 175, 80, 0.3)",borderColor:e.borderColor||"#4CAF50",border:`3px solid ${e.borderColor||"#4CAF50"}`,zIndex:35},secondary:{backgroundColor:e.backgroundColor||"rgba(33, 150, 243, 0.3)",borderColor:e.borderColor||"#2196F3",border:`3px solid ${e.borderColor||"#2196F3"}`,zIndex:30},removal:{backgroundColor:e.backgroundColor||"rgba(144, 238, 144, 0.3)",borderColor:e.borderColor||"rgba(0, 0, 0, 0.5)",border:`1px solid ${e.borderColor||"rgba(0, 0, 0, 0.5)"}`,zIndex:25},row:{backgroundColor:"rgba(52, 152, 219, 0.3)",border:"1px solid #3498db",zIndex:20},col:{backgroundColor:"rgba(231, 76, 60, 0.3)",border:"1px solid #e74c3c",zIndex:20},box:{backgroundColor:"rgba(46, 204, 113, 0.3)",border:"1px solid #2ecc71",zIndex:20}};if(e.isTarget){const r=e.techniqueType&&e.techniqueType.includes("hiddenSingle");return{...t,backgroundColor:r?"rgba(76, 175, 80, 0.85)":"rgba(76, 175, 80, 0.8)",border:"3px solid #4CAF50",zIndex:30,color:"white"}}return e.highlightType&&r[e.highlightType]?{...t,...r[e.highlightType]}:{...t,backgroundColor:"rgba(249, 231, 159, 0.5)",border:"3px solid #ffffff",zIndex:25}}return{...t,backgroundColor:"transparent",border:"none",zIndex:25}})(e),r=e.techniqueType&&("nakedSingle"===e.techniqueType||"notesSingle"===e.techniqueType||e.techniqueType.includes("hiddenSingle"));return v.jsxs("div",{style:t,children:[r&&e.number&&v.jsx("span",{style:{fontSize:e.isTarget?`calc(${s} * 1.35)`:s,fontWeight:e.isTarget?"normal":"600",color:e.isTarget?"white":"#2196F3",zIndex:50,textShadow:(e.isTarget,"none"),fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"1",margin:"0",padding:"0"},children:e.number}),f(e),u(e)]},`tech-${e.row}-${e.col}-${e.highlightType||"default"}-${e.isTarget?"target":"normal"}`)})]})},mi=({highlightedCells:e,boardWidth:t,boardHeight:r,isPortrait:o=!1})=>{if(!e||!Array.isArray(e))return null;const n=e.filter(e=>e&&!0===e.techniqueIndicator&&"number"==typeof e.row&&"number"==typeof e.col&&e.row>=0&&e.row<9&&e.col>=0&&e.col<9);if(0===n.length)return null;let i,a,l;o&&r?(i=t/9,a=r/9,l=r):(i=t/9,a=i,l=t);if(!n.some(e=>{if("nakedSingle"===e.techniqueType)return!0;if(e.technique&&e.technique.includes("nakedSingle"))return!0;if("primary"===e.highlightType&&e.isTarget){if(1===n.filter(e=>e.isTarget).length)return!0}const t=n.some(e=>"row"===e.highlightType),r=n.some(e=>"col"===e.highlightType),o=n.some(e=>"box"===e.highlightType);if(t&&r&&o){if(1===n.filter(e=>e.isTarget).length)return!0}return!1}))return null;const s=[];n.forEach(e=>{const{row:t,col:r,highlightType:o,relatedAreas:n}=e;if(s.some(e=>"cell"===e.type&&e.row===t&&e.col===r)||s.push({type:"cell",row:t,col:r,key:`cell-${t}-${r}`}),n&&Array.isArray(n)&&n.forEach(e=>{if("row"===e&&(s.some(e=>"row"===e.type&&e.row===t)||s.push({type:"row",row:t,key:`row-${t}`})),"col"===e&&(s.some(e=>"col"===e.type&&e.col===r)||s.push({type:"col",col:r,key:`col-${r}`})),"box"===e){const e=Math.floor(t/3),o=Math.floor(r/3);s.some(t=>"box"===t.type&&t.boxRow===e&&t.boxCol===o)||s.push({type:"box",boxRow:e,boxCol:o,key:`box-${e}-${o}`})}}),"row"===o&&(s.some(e=>"row"===e.type&&e.row===t)||s.push({type:"row",row:t,key:`row-${t}`})),"col"===o&&(s.some(e=>"col"===e.type&&e.col===r)||s.push({type:"col",col:r,key:`col-${r}`})),"box"===o){const e=Math.floor(t/3),o=Math.floor(r/3);s.some(t=>"box"===t.type&&t.boxRow===e&&t.boxCol===o)||s.push({type:"box",boxRow:e,boxCol:o,key:`box-${e}-${o}`})}});const c=[];if(0===s.length)c.push({top:0,left:0,width:t,height:l,key:"full-mask"});else{const e=Array(9).fill().map(()=>Array(9).fill(!1));s.forEach(t=>{if("row"===t.type)for(let r=0;r<9;r++)e[t.row][r]=!0;if("col"===t.type)for(let r=0;r<9;r++)e[r][t.col]=!0;if("box"===t.type){const r=3*t.boxRow,o=3*t.boxCol;for(let t=r;t<r+3;t++)for(let r=o;r<o+3;r++)e[t][r]=!0}"cell"===t.type&&(e[t.row][t.col]=!0)});for(let t=0;t<9;t++)for(let r=0;r<9;r++)e[t][r]||c.push({top:t*a,left:r*i,width:i,height:a,key:`cell-${t}-${r}`})}return v.jsx("div",{className:"technique-mask-overlay",style:{position:"absolute",top:0,left:0,width:`${t}px`,height:`${l}px`,pointerEvents:"none",zIndex:10,boxSizing:"border-box"},children:c.map(e=>v.jsx("div",{style:{position:"absolute",top:`${e.top}px`,left:`${e.left}px`,width:`${e.width}px`,height:`${e.height}px`,backgroundColor:"rgba(0, 0, 0, 0.4)",pointerEvents:"none",zIndex:1}},e.key))})},gi=({highlightedCells:e,boardWidth:t,boardHeight:r,isPortrait:o=!1})=>{if(!e||!Array.isArray(e))return null;const n=e.filter(e=>e&&!0===e.techniqueIndicator&&e.techniqueType&&e.techniqueType.includes("nakedPair")&&"number"==typeof e.row&&"number"==typeof e.col&&e.row>=0&&e.row<9&&e.col>=0&&e.col<9);if(0===n.length)return null;let i,a,l;o&&r?(i=t/9,a=r/9,l=r):(i=t/9,a=i,l=t);const s=e=>e.pairNotes&&Array.isArray(e.pairNotes)&&0!==e.pairNotes.length?e.pairNotes.map(t=>{if("number"!=typeof t||t<1||t>9)return null;const r=t-1,o=Math.floor(r/3),n=r%3,l=.35*Math.min(i,a),s=.05*Math.min(i,a),c=(Math.min(i,a)-2*s)/3,d=s+n*c+(c-l)/2,u=s+o*c+(c-l)/2;return v.jsx("div",{style:{position:"absolute",left:`${d}px`,top:`${u}px`,width:`${l}px`,height:`${l}px`,backgroundColor:"#00FF00",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,fontWeight:"bold",border:"1px solid rgba(255, 255, 255, 0.5)",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)"},children:v.jsx("span",{style:{fontSize:.7*l+"px",fontWeight:"bold",color:"#000000",zIndex:65,textShadow:"1px 1px 1px rgba(255, 255, 255, 0.5)"},children:t})},`pair-note-${e.row}-${e.col}-${t}`)}):null,c=e=>e.notesToRemove&&Array.isArray(e.notesToRemove)&&0!==e.notesToRemove.length?e.notesToRemove.map(t=>{if("number"!=typeof t||t<1||t>9)return null;const r=t-1,o=Math.floor(r/3),n=r%3,l=.35*Math.min(i,a),s=.05*Math.min(i,a),c=(Math.min(i,a)-2*s)/3,d=s+n*c+(c-l)/2,u=s+o*c+(c-l)/2;return v.jsx("div",{style:{position:"absolute",left:`${d}px`,top:`${u}px`,width:`${l}px`,height:`${l}px`,backgroundColor:"#FF0000",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,fontWeight:"bold",border:"1px solid rgba(255, 255, 255, 0.5)",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)"},children:v.jsx("span",{style:{fontSize:.7*l+"px",fontWeight:"bold",color:"#FFFFFF",zIndex:65,textShadow:"1px 1px 1px rgba(0, 0, 0, 0.5)"},children:t})},`removable-note-${e.row}-${e.col}-${t}`)}):null;return v.jsx("div",{className:"naked-pair-overlay",style:{position:"absolute",top:0,left:0,width:`${t}px`,height:`${l}px`,pointerEvents:"none",zIndex:14,boxSizing:"border-box",background:"transparent"},children:n.map(e=>{const t=(e=>{const t={position:"absolute",left:e.col*i+"px",top:e.row*a+"px",width:`${i}px`,height:`${a}px`,pointerEvents:"none",boxSizing:"border-box",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease"},r={pair:{backgroundColor:"transparent",borderColor:"transparent",border:"none",zIndex:35},target:{backgroundColor:"transparent",borderColor:"transparent",border:"none",zIndex:30},removal:{backgroundColor:"transparent",borderColor:"transparent",border:"none",zIndex:25},default:{backgroundColor:"transparent",borderColor:"transparent",border:"none",zIndex:35}};return e.highlightType&&r[e.highlightType]?{...t,...r[e.highlightType]}:e.isTarget?{...t,...r.target}:{...t,...r.pair}})(e);return v.jsxs("div",{style:t,children:[s(e),c(e)]},`naked-pair-${e.row}-${e.col}-${e.highlightType||"default"}-${e.isTarget?"target":"normal"}`)})})};
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
function xi(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function yi(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,ji(o.key),o)}}function bi(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=zi(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}function vi(e,t,r){return(t=ji(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function wi(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function Ci(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?wi(Object(r),!0).forEach(function(t){vi(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wi(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ki(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,i,a,l=[],s=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(o=i.call(r)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(d){c=!0,n=d}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw n}}return l}}(e,t)||zi(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $i(e){return function(e){if(Array.isArray(e))return xi(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||zi(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ji(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Si(e){return(Si="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function zi(e,t){if(e){if("string"==typeof e)return xi(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?xi(e,t):void 0}}var Ti=function(){},Ai={},Pi={},Ni=null,Ii={mark:Ti,measure:Ti};try{"undefined"!=typeof window&&(Ai=window),"undefined"!=typeof document&&(Pi=document),"undefined"!=typeof MutationObserver&&(Ni=MutationObserver),"undefined"!=typeof performance&&(Ii=performance)}catch(mf){}var Ri=(Ai.navigator||{}).userAgent,Ei=void 0===Ri?"":Ri,Mi=Ai,Fi=Pi,Li=Ni,qi=Ii;Mi.document;var Wi,Oi=!!Fi.documentElement&&!!Fi.head&&"function"==typeof Fi.addEventListener&&"function"==typeof Fi.createElement,Di=~Ei.indexOf("MSIE")||~Ei.indexOf("Trident/"),Hi={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Bi=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],_i="classic",Yi="duotone",Ui="sharp",Gi="sharp-duotone",Xi="chisel",Ji="etch",Zi="jelly",Vi="jelly-duo",Ki="jelly-fill",Qi="notdog",ea="notdog-duo",ta="slab",ra="slab-press",oa="thumbprint",na="utility",ia="utility-duo",aa="utility-fill",la="whiteboard",sa=[_i,Yi,Ui,Gi,Xi,Ji,Zi,Vi,Ki,Qi,ea,ta,ra,oa,na,ia,aa,la];vi(vi(vi(vi(vi(vi(vi(vi(vi(vi(Wi={},_i,"Classic"),Yi,"Duotone"),Ui,"Sharp"),Gi,"Sharp Duotone"),Xi,"Chisel"),Ji,"Etch"),Zi,"Jelly"),Vi,"Jelly Duo"),Ki,"Jelly Fill"),Qi,"Notdog"),vi(vi(vi(vi(vi(vi(vi(vi(Wi,ea,"Notdog Duo"),ta,"Slab"),ra,"Slab Press"),oa,"Thumbprint"),na,"Utility"),ia,"Utility Duo"),aa,"Utility Fill"),la,"Whiteboard");var ca=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),da=["fak","fa-kit","fakd","fa-kit-duotone"],ua={fak:"kit","fa-kit":"kit"},fa={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"};vi(vi({},"kit","Kit"),"kit-duotone","Kit Duotone");var ha,pa={kit:"fak"},ma={"kit-duotone":"fakd"},ga="duotone-group",xa="swap-opacity",ya="primary",ba="secondary";vi(vi(vi(vi(vi(vi(vi(vi(vi(vi(ha={},"classic","Classic"),"duotone","Duotone"),"sharp","Sharp"),"sharp-duotone","Sharp Duotone"),"chisel","Chisel"),"etch","Etch"),"jelly","Jelly"),"jelly-duo","Jelly Duo"),"jelly-fill","Jelly Fill"),"notdog","Notdog"),vi(vi(vi(vi(vi(vi(vi(vi(ha,"notdog-duo","Notdog Duo"),"slab","Slab"),"slab-press","Slab Press"),"thumbprint","Thumbprint"),"utility","Utility"),"utility-duo","Utility Duo"),"utility-fill","Utility Fill"),"whiteboard","Whiteboard");vi(vi({},"kit","Kit"),"kit-duotone","Kit Duotone");var va={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},wa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"]),Ca=[1,2,3,4,5,6,7,8,9,10],ka=Ca.concat([11,12,13,14,15,16,17,18,19,20]),$a=[].concat($i(Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]})),["solid","regular","light","thin","duotone","brands","semibold"],["aw","fw","pull-left","pull-right"],["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ga,xa,ya,ba]).concat(Ca.map(function(e){return"".concat(e,"x")})).concat(ka.map(function(e){return"w-".concat(e)})),ja="___FONT_AWESOME___",Sa="svg-inline--fa",za="data-fa-i2svg",Ta="data-fa-pseudo-element",Aa="data-prefix",Pa="data-icon",Na="fontawesome-i2svg",Ia=["HTML","HEAD","STYLE","SCRIPT"],Ra=["::before","::after",":before",":after"],Ea=function(){try{return!0}catch(e){return!1}}();function Ma(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[_i]}})}var Fa=Ci({},Hi);Fa[_i]=Ci(Ci(Ci(Ci({},{"fa-duotone":"duotone"}),Hi[_i]),ua),fa);var La=Ma(Fa),qa=Ci({},{chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}});qa[_i]=Ci(Ci(Ci(Ci({},{duotone:"fad"}),qa[_i]),pa),ma);var Wa=Ma(qa),Oa=Ci({},va);Oa[_i]=Ci(Ci({},Oa[_i]),{fak:"fa-kit"});var Da=Ma(Oa),Ha=Ci({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}});Ha[_i]=Ci(Ci({},Ha[_i]),{"fa-kit":"fak"}),Ma(Ha);var Ba=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,_a="fa-layers-text",Ya=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;Ma(Ci({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}}));var Ua=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ga={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xa=[].concat($i(["kit"]),$i($a)),Ja=Mi.FontAwesomeConfig||{};if(Fi&&"function"==typeof Fi.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=ki(e,2),r=t[0],o=t[1],n=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=Fi.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(r));null!=n&&(Ja[o]=n)})}var Za={styleDefault:"solid",familyDefault:_i,cssPrefix:"fa",replacementClass:Sa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ja.familyPrefix&&(Ja.cssPrefix=Ja.familyPrefix);var Va=Ci(Ci({},Za),Ja);Va.autoReplaceSvg||(Va.observeMutations=!1);var Ka={};Object.keys(Za).forEach(function(e){Object.defineProperty(Ka,e,{enumerable:!0,set:function(t){Va[e]=t,Qa.forEach(function(e){return e(Ka)})},get:function(){return Va[e]}})}),Object.defineProperty(Ka,"familyPrefix",{enumerable:!0,set:function(e){Va.cssPrefix=e,Qa.forEach(function(e){return e(Ka)})},get:function(){return Va.cssPrefix}}),Mi.FontAwesomeConfig=Ka;var Qa=[];var el=16,tl={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function rl(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function ol(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function nl(e){return e.classList?ol(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}function il(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function al(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function ll(e){return e.size!==tl.size||e.x!==tl.x||e.y!==tl.y||e.rotate!==tl.rotate||e.flipX||e.flipY}function sl(){var e="fa",t=Sa,r=Ka.cssPrefix,o=Ka.replacementClass,n=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";\n  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";\n  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}';if(r!==e||o!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(r,"-")).replace(a,"--".concat(r,"-")).replace(l,".".concat(o))}return n}var cl=!1;function dl(){Ka.autoAddCss&&!cl&&(!function(e){if(e&&Oi){var t=Fi.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=Fi.head.childNodes,o=null,n=r.length-1;n>-1;n--){var i=r[n],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(o=i)}Fi.head.insertBefore(t,o)}}(sl()),cl=!0)}var ul={mixout:function(){return{dom:{css:sl,insertCss:dl}}},hooks:function(){return{beforeDOMElementCreation:function(){dl()},beforeI2svg:function(){dl()}}}},fl=Mi||{};fl[ja]||(fl[ja]={}),fl[ja].styles||(fl[ja].styles={}),fl[ja].hooks||(fl[ja].hooks={}),fl[ja].shims||(fl[ja].shims=[]);var hl=fl[ja],pl=[],ml=function(){Fi.removeEventListener("DOMContentLoaded",ml),gl=1,pl.map(function(e){return e()})},gl=!1;function xl(e){var t=e.tag,r=e.attributes,o=void 0===r?{}:r,n=e.children,i=void 0===n?[]:n;return"string"==typeof e?il(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(il(e[r]),'" ')},"").trim()}(o),">").concat(i.map(xl).join(""),"</").concat(t,">")}function yl(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}Oi&&((gl=(Fi.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Fi.readyState))||Fi.addEventListener("DOMContentLoaded",ml));var bl=function(e,t,r,o){var n,i,a,l=Object.keys(e),s=l.length,c=void 0!==o?function(e,t){return function(r,o,n,i){return e.call(t,r,o,n,i)}}(t,o):t;for(void 0===r?(n=1,a=e[l[0]]):(n=0,a=r);n<s;n++)a=c(a,e[i=l[n]],i,e);return a};function vl(e){return 1!==$i(e).length?null:e.codePointAt(0).toString(16)}function wl(e){return Object.keys(e).reduce(function(t,r){var o=e[r];return!!o.icon?t[o.iconName]=o.icon:t[r]=o,t},{})}function Cl(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,o=void 0!==r&&r,n=wl(t);"function"!=typeof hl.hooks.addPack||o?hl.styles[e]=Ci(Ci({},hl.styles[e]||{}),n):hl.hooks.addPack(e,wl(t)),"fas"===e&&Cl("fa",t)}var kl=hl.styles,$l=hl.shims,jl=Object.keys(Da),Sl=jl.reduce(function(e,t){return e[t]=Object.keys(Da[t]),e},{}),zl=null,Tl={},Al={},Pl={},Nl={},Il={};function Rl(e,t){var r,o=t.split("-"),n=o[0],i=o.slice(1).join("-");return n!==e||""===i||(r=i,~Xa.indexOf(r))?null:i}var El,Ml=function(){var e=function(e){return bl(kl,function(t,r,o){return t[o]=bl(r,e,{}),t},{})};Tl=e(function(e,t,r){(t[3]&&(e[t[3]]=r),t[2])&&t[2].filter(function(e){return"number"==typeof e}).forEach(function(t){e[t.toString(16)]=r});return e}),Al=e(function(e,t,r){(e[r]=r,t[2])&&t[2].filter(function(e){return"string"==typeof e}).forEach(function(t){e[t]=r});return e}),Il=e(function(e,t,r){var o=t[2];return e[r]=r,o.forEach(function(t){e[t]=r}),e});var t="far"in kl||Ka.autoFetchSvg,r=bl($l,function(e,r){var o=r[0],n=r[1],i=r[2];return"far"!==n||t||(n="fas"),"string"==typeof o&&(e.names[o]={prefix:n,iconName:i}),"number"==typeof o&&(e.unicodes[o.toString(16)]={prefix:n,iconName:i}),e},{names:{},unicodes:{}});Pl=r.names,Nl=r.unicodes,zl=Ol(Ka.styleDefault,{family:Ka.familyDefault})};function Fl(e,t){return(Tl[e]||{})[t]}function Ll(e,t){return(Il[e]||{})[t]}function ql(e){return Pl[e]||{prefix:null,iconName:null}}function Wl(){return zl}El=function(e){zl=Ol(e.styleDefault,{family:Ka.familyDefault})},Qa.push(El),Ml();function Ol(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).family,r=void 0===t?_i:t,o=La[r][e];if(r===Yi&&!e)return"fad";var n=Wa[r][e]||Wa[r][o],i=e in hl.styles?e:null;return n||i||null}function Dl(e){return e.sort().filter(function(e,t,r){return r.indexOf(e)===t})}var Hl=wa.concat(da);function Bl(e){var t,r,o=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).skipLookups,n=void 0!==o&&o,i=null,a=Dl(e.filter(function(e){return Hl.includes(e)})),l=Dl(e.filter(function(e){return!Hl.includes(e)})),s=ki(a.filter(function(e){return i=e,!Bi.includes(e)}),1)[0],c=void 0===s?null:s,d=function(e){var t=_i,r=jl.reduce(function(e,t){return e[t]="".concat(Ka.cssPrefix,"-").concat(t),e},{});return sa.forEach(function(o){(e.includes(r[o])||e.some(function(e){return Sl[o].includes(e)}))&&(t=o)}),t}(a),u=Ci(Ci({},(t=[],r=null,l.forEach(function(e){var o=Rl(Ka.cssPrefix,e);o?r=o:e&&t.push(e)}),{iconName:r,rest:t})),{},{prefix:Ol(c,{family:d})});return Ci(Ci(Ci({},u),function(e){var t=e.values,r=e.family,o=e.canonical,n=e.givenPrefix,i=void 0===n?"":n,a=e.styles,l=void 0===a?{}:a,s=e.config,c=void 0===s?{}:s,d=r===Yi,u=t.includes("fa-duotone")||t.includes("fad"),f="duotone"===c.familyDefault,h="fad"===o.prefix||"fa-duotone"===o.prefix;!d&&(u||f||h)&&(o.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab");if(!o.prefix&&_l.includes(r)){if(Object.keys(l).find(function(e){return Yl.includes(e)})||c.autoFetchSvg){var p=ca.get(r).defaultShortPrefixId;o.prefix=p,o.iconName=Ll(o.prefix,o.iconName)||o.iconName}}"fa"!==o.prefix&&"fa"!==i||(o.prefix=Wl()||"fas");return o}({values:e,family:d,styles:kl,config:Ka,canonical:u,givenPrefix:i})),function(e,t,r){var o=r.prefix,n=r.iconName;if(e||!o||!n)return{prefix:o,iconName:n};var i="fa"===t?ql(n):{},a=Ll(o,n);n=i.iconName||a||n,"far"!==(o=i.prefix||o)||kl.far||!kl.fas||Ka.autoFetchSvg||(o="fas");return{prefix:o,iconName:n}}(n,i,u))}var _l=sa.filter(function(e){return e!==_i||e!==Yi}),Yl=Object.keys(va).filter(function(e){return e!==_i}).map(function(e){return Object.keys(va[e])}).flat();var Ul=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}},t=[{key:"add",value:function(){for(var e=this,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){e.definitions[t]=Ci(Ci({},e.definitions[t]||{}),n[t]),Cl(t,n[t]);var r=Da[_i][t];r&&Cl(r,n[t]),Ml()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(t){var o=r[t],n=o.prefix,i=o.iconName,a=o.icon,l=a[2];e[n]||(e[n]={}),l.length>0&&l.forEach(function(t){"string"==typeof t&&(e[n][t]=a)}),e[n][i]=a}),e}}],t&&yi(e.prototype,t),r&&yi(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}(),Gl=[],Xl={},Jl={},Zl=Object.keys(Jl);function Vl(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];return(Xl[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(o))}),t}function Kl(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];(Xl[e]||[]).forEach(function(e){e.apply(null,r)})}function Ql(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Jl[e]?Jl[e].apply(null,t):void 0}function es(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,r=e.prefix||Wl();if(t)return t=Ll(r,t)||t,yl(ts.definitions,r,t)||yl(hl.styles,r,t)}var ts=new Ul,rs={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Oi?(Kl("beforeI2svg",e),Ql("pseudoElements2svg",e),Ql("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.autoReplaceSvgRoot;!1===Ka.autoReplaceSvg&&(Ka.autoReplaceSvg=!0),Ka.observeMutations=!0,e=function(){ns({autoReplaceSvgRoot:r}),Kl("watch",t)},Oi&&(gl?setTimeout(e,0):pl.push(e))}},os={noAuto:function(){Ka.autoReplaceSvg=!1,Ka.observeMutations=!1,Kl("noAuto")},config:Ka,dom:rs,parse:{icon:function(e){if(null===e)return null;if("object"===Si(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ll(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],r=Ol(e[0]);return{prefix:r,iconName:Ll(r,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(Ka.cssPrefix,"-"))>-1||e.match(Ba))){var o=Bl(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||Wl(),iconName:Ll(o.prefix,o.iconName)||o.iconName}}if("string"==typeof e){var n=Wl();return{prefix:n,iconName:Ll(n,e)||e}}}},library:ts,findIconDefinition:es,toHtml:xl},ns=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,t=void 0===e?Fi:e;(Object.keys(hl.styles).length>0||Ka.autoFetchSvg)&&Oi&&Ka.autoReplaceSvg&&os.dom.i2svg({node:t})};function is(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return xl(e)})}}),Object.defineProperty(e,"node",{get:function(){if(Oi){var t=Fi.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function as(e){var t=e.icons,r=t.main,o=t.mask,n=e.prefix,i=e.iconName,a=e.transform,l=e.symbol,s=e.maskId,c=e.extra,d=e.watchable,u=void 0!==d&&d,f=o.found?o:r,h=f.width,p=f.height,m=[Ka.replacementClass,i?"".concat(Ka.cssPrefix,"-").concat(i):""].filter(function(e){return-1===c.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(c.classes).join(" "),g={children:[],attributes:Ci(Ci({},c.attributes),{},{"data-prefix":n,"data-icon":i,class:m,role:c.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(p)})};(function(e){return["aria-label","aria-labelledby","title","role"].some(function(t){return t in e})})(c.attributes)||c.attributes["aria-hidden"]||(g.attributes["aria-hidden"]="true"),u&&(g.attributes[za]="");var x=Ci(Ci({},g),{},{prefix:n,iconName:i,main:r,mask:o,maskId:s,transform:a,symbol:l,styles:Ci({},c.styles)}),y=o.found&&r.found?Ql("generateAbstractMask",x)||{children:[],attributes:{}}:Ql("generateAbstractIcon",x)||{children:[],attributes:{}},b=y.children,v=y.attributes;return x.children=b,x.attributes=v,l?function(e){var t=e.prefix,r=e.iconName,o=e.children,n=e.attributes,i=e.symbol,a=!0===i?"".concat(t,"-").concat(Ka.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ci(Ci({},n),{},{id:a}),children:o}]}]}(x):function(e){var t=e.children,r=e.main,o=e.mask,n=e.attributes,i=e.styles,a=e.transform;if(ll(a)&&r.found&&!o.found){var l={x:r.width/r.height/2,y:.5};n.style=al(Ci(Ci({},i),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}(x)}function ls(e){var t=e.content,r=e.width,o=e.height,n=e.transform,i=e.extra,a=e.watchable,l=void 0!==a&&a,s=Ci(Ci({},i.attributes),{},{class:i.classes.join(" ")});l&&(s[za]="");var c=Ci({},i.styles);ll(n)&&(c.transform=function(e){var t=e.transform,r=e.width,o=void 0===r?16:r,n=e.height,i=void 0===n?16:n,a=e.startCentered,l=void 0!==a&&a,s="";return s+=l&&Di?"translate(".concat(t.x/el-o/2,"em, ").concat(t.y/el-i/2,"em) "):l?"translate(calc(-50% + ".concat(t.x/el,"em), calc(-50% + ").concat(t.y/el,"em)) "):"translate(".concat(t.x/el,"em, ").concat(t.y/el,"em) "),s+="scale(".concat(t.size/el*(t.flipX?-1:1),", ").concat(t.size/el*(t.flipY?-1:1),") "),s+"rotate(".concat(t.rotate,"deg) ")}({transform:n,startCentered:!0,width:r,height:o}),c["-webkit-transform"]=c.transform);var d=al(c);d.length>0&&(s.style=d);var u=[];return u.push({tag:"span",attributes:s,children:[t]}),u}var ss=hl.styles;function cs(e){var t=e[0],r=e[1],o=ki(e.slice(4),1)[0];return{found:!0,width:t,height:r,icon:Array.isArray(o)?{tag:"g",attributes:{class:"".concat(Ka.cssPrefix,"-").concat(Ga.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ka.cssPrefix,"-").concat(Ga.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Ka.cssPrefix,"-").concat(Ga.PRIMARY),fill:"currentColor",d:o[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:o}}}}var ds={found:!1,width:512,height:512};function us(e,t){var r=t;return"fa"===t&&null!==Ka.styleDefault&&(t=Wl()),new Promise(function(o,n){if("fa"===r){var i=ql(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ss[t]&&ss[t][e])return o(cs(ss[t][e]));!function(e,t){Ea||Ka.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),o(Ci(Ci({},ds),{},{icon:Ka.showMissingIcons&&e&&Ql("missingIconAbstract")||{}}))})}var fs=function(){},hs=Ka.measurePerformance&&qi&&qi.mark&&qi.measure?qi:{mark:fs,measure:fs},ps='FA "7.1.0"',ms=function(e){hs.mark("".concat(ps," ").concat(e," ends")),hs.measure("".concat(ps," ").concat(e),"".concat(ps," ").concat(e," begins"),"".concat(ps," ").concat(e," ends"))},gs=function(e){return hs.mark("".concat(ps," ").concat(e," begins")),function(){return ms(e)}},xs=function(){};function ys(e){return"string"==typeof(e.getAttribute?e.getAttribute(za):null)}function bs(e){return Fi.createElementNS("http://www.w3.org/2000/svg",e)}function vs(e){return Fi.createElement(e)}function ws(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ceFn,r=void 0===t?"svg"===e.tag?bs:vs:t;if("string"==typeof e)return Fi.createTextNode(e);var o=r(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){o.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){o.appendChild(ws(e,{ceFn:r}))}),o}var Cs={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(ws(e),t)}),null===t.getAttribute(za)&&Ka.keepOriginalSource){var r=Fi.createComment(function(e){var t=" ".concat(e.outerHTML," ");return"".concat(t,"Font Awesome fontawesome.com ")}(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){var t=e[0],r=e[1];if(~nl(t).indexOf(Ka.replacementClass))return Cs.replace(e);var o=new RegExp("".concat(Ka.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(e,t){return t===Ka.replacementClass||t.match(o)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),0===n.toNode.length?t.removeAttribute("class"):t.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(e){return xl(e)}).join("\n");t.setAttribute(za,""),t.innerHTML=i}};function ks(e){e()}function $s(e,t){var r="function"==typeof t?t:xs;if(0===e.length)r();else{var o=ks;"async"===Ka.mutateApproach&&(o=Mi.requestAnimationFrame||ks),o(function(){var t=!0===Ka.autoReplaceSvg?Cs.replace:Cs[Ka.autoReplaceSvg]||Cs.replace,o=gs("mutate");e.map(t),o(),r()})}}var js=!1;function Ss(){js=!0}function zs(){js=!1}var Ts=null;function As(e){if(Li&&Ka.observeMutations){var t=e.treeCallback,r=void 0===t?xs:t,o=e.nodeCallback,n=void 0===o?xs:o,i=e.pseudoElementsCallback,a=void 0===i?xs:i,l=e.observeMutationsRoot,s=void 0===l?Fi:l;Ts=new Li(function(e){if(!js){var t=Wl();ol(e).forEach(function(e){if("childList"===e.type&&e.addedNodes.length>0&&!ys(e.addedNodes[0])&&(Ka.searchPseudoElements&&a(e.target),r(e.target)),"attributes"===e.type&&e.target.parentNode&&Ka.searchPseudoElements&&a([e.target],!0),"attributes"===e.type&&ys(e.target)&&~Ua.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){var t=e.getAttribute?e.getAttribute(Aa):null,r=e.getAttribute?e.getAttribute(Pa):null;return t&&r}(e.target)){var o=Bl(nl(e.target)),i=o.prefix,l=o.iconName;e.target.setAttribute(Aa,i||t),l&&e.target.setAttribute(Pa,l)}else(s=e.target)&&s.classList&&s.classList.contains&&s.classList.contains(Ka.replacementClass)&&n(e.target);var s})}}),Oi&&Ts.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ps(e){var t,r,o=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),i=void 0!==e.innerText?e.innerText.trim():"",a=Bl(nl(e));return a.prefix||(a.prefix=Wl()),o&&n&&(a.prefix=o,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&i.length>0&&(a.iconName=(t=a.prefix,r=e.innerText,(Al[t]||{})[r]||Fl(a.prefix,vl(e.innerText)))),!a.iconName&&Ka.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ns(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},r=Ps(e),o=r.iconName,n=r.prefix,i=r.rest,a=function(e){return ol(e.attributes).reduce(function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e},{})}(e),l=Vl("parseNodeAttributes",{},e),s=t.styleParser?function(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(e,t){var r=t.split(":"),o=r[0],n=r.slice(1);return o&&n.length>0&&(e[o]=n.join(":").trim()),e},{})),r}(e):[];return Ci({iconName:o,prefix:n,transform:tl,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},l)}var Is=hl.styles;function Rs(e){var t="nest"===Ka.autoReplaceSvg?Ns(e,{styleParser:!1}):Ns(e);return~t.extra.classes.indexOf(_a)?Ql("generateLayersText",e,t):Ql("generateSvgReplacementMutation",e,t)}function Es(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!Oi)return Promise.resolve();var r=Fi.documentElement.classList,o=function(e){return r.add("".concat(Na,"-").concat(e))},n=function(e){return r.remove("".concat(Na,"-").concat(e))},i=Ka.autoFetchSvg?[].concat($i(da),$i(wa)):Bi.concat(Object.keys(Is));i.includes("fa")||i.push("fa");var a=[".".concat(_a,":not([").concat(za,"])")].concat(i.map(function(e){return".".concat(e,":not([").concat(za,"])")})).join(", ");if(0===a.length)return Promise.resolve();var l=[];try{l=ol(e.querySelectorAll(a))}catch(d){}if(!(l.length>0))return Promise.resolve();o("pending"),n("complete");var s=gs("onTree"),c=l.reduce(function(e,t){try{var r=Rs(t);r&&e.push(r)}catch(d){Ea||"MissingIcon"===d.name&&console.error(d)}return e},[]);return new Promise(function(e,r){Promise.all(c).then(function(r){$s(r,function(){o("active"),o("complete"),n("pending"),"function"==typeof t&&t(),s(),e()})}).catch(function(e){s(),r(e)})})}function Ms(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Rs(e).then(function(e){e&&$s([e],t)})}var Fs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,o=void 0===r?tl:r,n=t.symbol,i=void 0!==n&&n,a=t.mask,l=void 0===a?null:a,s=t.maskId,c=void 0===s?null:s,d=t.classes,u=void 0===d?[]:d,f=t.attributes,h=void 0===f?{}:f,p=t.styles,m=void 0===p?{}:p;if(e){var g=e.prefix,x=e.iconName,y=e.icon;return is(Ci({type:"icon"},e),function(){return Kl("beforeDOMElementCreation",{iconDefinition:e,params:t}),as({icons:{main:cs(y),mask:l?cs(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:x,transform:Ci(Ci({},tl),o),symbol:i,maskId:c,extra:{attributes:h,styles:m,classes:u}})})}},Ls={mixout:function(){return{icon:(e=Fs,function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(t||{}).icon?t:es(t||{}),n=r.mask;return n&&(n=(n||{}).icon?n:es(n||{})),e(o,Ci(Ci({},r),{},{mask:n}))})};var e},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Es,e.nodeCallback=Ms,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,r=void 0===t?Fi:t,o=e.callback;return Es(r,void 0===o?function(){}:o)},e.generateSvgReplacementMutation=function(e,t){var r=t.iconName,o=t.prefix,n=t.transform,i=t.symbol,a=t.mask,l=t.maskId,s=t.extra;return new Promise(function(t,c){Promise.all([us(r,o),a.iconName?us(a.iconName,a.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(a){var c=ki(a,2),d=c[0],u=c[1];t([e,as({icons:{main:d,mask:u},prefix:o,iconName:r,transform:n,symbol:i,maskId:l,extra:s,watchable:!0})])}).catch(c)})},e.generateAbstractIcon=function(e){var t,r=e.children,o=e.attributes,n=e.main,i=e.transform,a=al(e.styles);return a.length>0&&(o.style=a),ll(i)&&(t=Ql("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(t||n.icon),{children:r,attributes:o}}}},qs={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.classes,o=void 0===r?[]:r;return is({type:"layer"},function(){Kl("beforeDOMElementCreation",{assembler:e,params:t});var r=[];return e(function(e){Array.isArray(e)?e.map(function(e){r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(Ka.cssPrefix,"-layers")].concat($i(o)).join(" ")},children:r}]})}}}},Ws={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.title,o=void 0===r?null:r,n=t.classes,i=void 0===n?[]:n,a=t.attributes,l=void 0===a?{}:a,s=t.styles,c=void 0===s?{}:s;return is({type:"counter",content:e},function(){return Kl("beforeDOMElementCreation",{content:e,params:t}),function(e){var t=e.content,r=e.extra,o=Ci(Ci({},r.attributes),{},{class:r.classes.join(" ")}),n=al(r.styles);n.length>0&&(o.style=n);var i=[];return i.push({tag:"span",attributes:o,children:[t]}),i}({content:e.toString(),title:o,extra:{attributes:l,styles:c,classes:["".concat(Ka.cssPrefix,"-layers-counter")].concat($i(i))}})})}}}},Os={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,o=void 0===r?tl:r,n=t.classes,i=void 0===n?[]:n,a=t.attributes,l=void 0===a?{}:a,s=t.styles,c=void 0===s?{}:s;return is({type:"text",content:e},function(){return Kl("beforeDOMElementCreation",{content:e,params:t}),ls({content:e,transform:Ci(Ci({},tl),o),extra:{attributes:l,styles:c,classes:["".concat(Ka.cssPrefix,"-layers-text")].concat($i(i))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var r=t.transform,o=t.extra,n=null,i=null;if(Di){var a=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();n=l.width/a,i=l.height/a}return Promise.resolve([e,ls({content:e.innerHTML,width:n,height:i,transform:r,extra:o,watchable:!0})])}}},Ds=new RegExp('"',"ug"),Hs=[1105920,1112319],Bs=Ci(Ci(Ci(Ci({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),_s=Object.keys(Bs).reduce(function(e,t){return e[t.toLowerCase()]=Bs[t],e},{}),Ys=Object.keys(_s).reduce(function(e,t){var r=_s[t];return e[t]=r[900]||$i(Object.entries(r))[0][1],e},{});function Us(e,t){var r="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(function(o,n){if(null!==e.getAttribute(r))return o();var i,a,l,s=ol(e.children).filter(function(e){return e.getAttribute(Ta)===t})[0],c=Mi.getComputedStyle(e,t),d=c.getPropertyValue("font-family"),u=d.match(Ya),f=c.getPropertyValue("font-weight"),h=c.getPropertyValue("content");if(s&&!u)return e.removeChild(s),o();if(u&&"none"!==h&&""!==h){var p=c.getPropertyValue("content"),m=function(e,t){var r=e.replace(/^['"]|['"]$/g,"").toLowerCase(),o=parseInt(t),n=isNaN(o)?"normal":o;return(_s[r]||{})[n]||Ys[r]}(d,f),g=function(e){return vl($i(e.replace(Ds,""))[0]||"")}(p),x=u[0].startsWith("FontAwesome"),y=function(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),r=e.getPropertyValue("content").replace(Ds,""),o=r.codePointAt(0),n=o>=Hs[0]&&o<=Hs[1],i=2===r.length&&r[0]===r[1];return n||i||t}(c),b=Fl(m,g),v=b;if(x){var w=(a=Nl[i=g],l=Fl("fas",i),a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null});w.iconName&&w.prefix&&(b=w.iconName,m=w.prefix)}if(!b||y||s&&s.getAttribute(Aa)===m&&s.getAttribute(Pa)===v)o();else{e.setAttribute(r,v),s&&e.removeChild(s);var C={iconName:null,prefix:null,transform:tl,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},k=C.extra;k.attributes[Ta]=t,us(b,m).then(function(n){var i=as(Ci(Ci({},C),{},{icons:{main:n,mask:{prefix:null,iconName:null,rest:[]}},prefix:m,iconName:v,extra:k,watchable:!0})),a=Fi.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(a,e.firstChild):e.appendChild(a),a.outerHTML=i.map(function(e){return xl(e)}).join("\n"),e.removeAttribute(r),o()}).catch(n)}}else o()})}function Gs(e){return Promise.all([Us(e,"::before"),Us(e,"::after")])}function Xs(e){return!(e.parentNode===document.head||~Ia.indexOf(e.tagName.toUpperCase())||e.getAttribute(Ta)||e.parentNode&&"svg"===e.parentNode.tagName)}var Js=function(e){return!!e&&Ra.some(function(t){return e.includes(t)})},Zs=function(e){if(!e)return[];var t,r=new Set,o=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()}),n=bi(o=o.flatMap(function(e){return e.includes("(")?e:e.split(",").map(function(e){return e.trim()})}));try{for(n.s();!(t=n.n()).done;){var i=t.value;if(Js(i)){var a=Ra.reduce(function(e,t){return e.replace(t,"")},i);""!==a&&"*"!==a&&r.add(a)}}}catch(l){n.e(l)}finally{n.f()}return r};function Vs(e){if(Oi){var t;if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])t=e;else if(Ka.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r,o=new Set,n=bi(document.styleSheets);try{for(n.s();!(r=n.n()).done;){var i=r.value;try{var a,l=bi(i.cssRules);try{for(l.s();!(a=l.n()).done;){var s,c=a.value,d=bi(Zs(c.selectorText));try{for(d.s();!(s=d.n()).done;){var u=s.value;o.add(u)}}catch(h){d.e(h)}finally{d.f()}}}catch(h){l.e(h)}finally{l.f()}}catch(p){Ka.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(p.message,')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))}}}catch(h){n.e(h)}finally{n.f()}if(!o.size)return;var f=Array.from(o).join(", ");try{t=e.querySelectorAll(f)}catch(m){}}return new Promise(function(e,r){var o=ol(t).filter(Xs).map(Gs),n=gs("searchPseudoElements");Ss(),Promise.all(o).then(function(){n(),zs(),e()}).catch(function(){n(),zs(),r()})})}}var Ks=!1,Qs=function(e){return e.toLowerCase().split(" ").reduce(function(e,t){var r=t.toLowerCase().split("-"),o=r[0],n=r.slice(1).join("-");if(o&&"h"===n)return e.flipX=!0,e;if(o&&"v"===n)return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(o){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},ec={mixout:function(){return{parse:{transform:function(e){return Qs(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-transform");return r&&(e.transform=Qs(r)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,r=e.transform,o=e.containerWidth,n=e.iconWidth,i={transform:"translate(".concat(o/2," 256)")},a="translate(".concat(32*r.x,", ").concat(32*r.y,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),s="rotate(".concat(r.rotate," 0 0)"),c={outer:i,inner:{transform:"".concat(a," ").concat(l," ").concat(s)},path:{transform:"translate(".concat(n/2*-1," -256)")}};return{tag:"g",attributes:Ci({},c.outer),children:[{tag:"g",attributes:Ci({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:Ci(Ci({},t.icon.attributes),c.path)}]}]}}}},tc={x:0,y:0,width:"100%",height:"100%"};function rc(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var oc,nc={hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-mask"),o=r?Bl(r.split(" ").map(function(e){return e.trim()})):{prefix:null,iconName:null,rest:[]};return o.prefix||(o.prefix=Wl()),e.mask=o,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t,r=e.children,o=e.attributes,n=e.main,i=e.mask,a=e.maskId,l=e.transform,s=n.width,c=n.icon,d=i.width,u=i.icon,f=function(e){var t=e.transform,r=e.containerWidth,o=e.iconWidth,n={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)");return{outer:n,inner:{transform:"".concat(i," ").concat(a," ").concat(l)},path:{transform:"translate(".concat(o/2*-1," -256)")}}}({transform:l,containerWidth:d,iconWidth:s}),h={tag:"rect",attributes:Ci(Ci({},tc),{},{fill:"white"})},p=c.children?{children:c.children.map(rc)}:{},m={tag:"g",attributes:Ci({},f.inner),children:[rc(Ci({tag:c.tag,attributes:Ci(Ci({},c.attributes),f.path)},p))]},g={tag:"g",attributes:Ci({},f.outer),children:[m]},x="mask-".concat(a||rl()),y="clip-".concat(a||rl()),b={tag:"mask",attributes:Ci(Ci({},tc),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,g]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(t=u,"g"===t.tag?t.children:[t])},b]};return r.push(v,{tag:"rect",attributes:Ci({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(x,")")},tc)}),{children:r,attributes:o}}}};oc={mixoutsTo:os}.mixoutsTo,Gl=[ul,Ls,qs,Ws,Os,{hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Vs,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,r=void 0===t?Fi:t;Ka.searchPseudoElements&&Vs(r)}}},{mixout:function(){return{dom:{unwatch:function(){Ss(),Ks=!0}}}},hooks:function(){return{bootstrap:function(){As(Vl("mutationObserverCallbacks",{}))},noAuto:function(){Ts&&Ts.disconnect()},watch:function(e){var t=e.observeMutationsRoot;Ks?zs():As(Vl("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},ec,nc,{provides:function(e){var t=!1;Mi.matchMedia&&(t=Mi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:Ci(Ci({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=Ci(Ci({},o),{},{attributeName:"opacity"}),i={tag:"circle",attributes:Ci(Ci({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:Ci(Ci({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Ci(Ci({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(i),e.push({tag:"path",attributes:Ci(Ci({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Ci(Ci({},n),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:Ci(Ci({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Ci(Ci({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-symbol"),o=null!==r&&(""===r||r);return e.symbol=o,e}}}}],Xl={},Object.keys(Jl).forEach(function(e){-1===Zl.indexOf(e)&&delete Jl[e]}),Gl.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){"function"==typeof t[e]&&(oc[e]=t[e]),"object"===Si(t[e])&&Object.keys(t[e]).forEach(function(r){oc[e]||(oc[e]={}),oc[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Xl[e]||(Xl[e]=[]),Xl[e].push(r[e])})}e.provides&&e.provides(Jl)});var ic=os.config,ac=os.parse,lc=os.icon;function sc(e){return t=e,(t-=0)==t?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():"")).charAt(0).toLowerCase()+e.slice(1);var t}function cc(e){return e.charAt(0).toUpperCase()+e.slice(1)}var dc=new Map;function uc(e){if(dc.has(e))return dc.get(e);const t={};let r=0;const o=e.length;for(;r<o;){const n=e.indexOf(";",r),i=-1===n?o:n,a=e.slice(r,i).trim();if(a){const e=a.indexOf(":");if(e>0){const r=a.slice(0,e).trim(),o=a.slice(e+1).trim();if(r&&o){const e=sc(r);t[e.startsWith("webkit")?cc(e):e]=o}}}r=i+1}if(1e3===dc.size){const e=dc.keys().next().value;e&&dc.delete(e)}return dc.set(e,t),t}var fc=function e(t,r,o={}){if("string"==typeof r)return r;const n=(r.children||[]).map(r=>e(t,r)),i=r.attributes||{},a={};for(const[d,u]of Object.entries(i))switch(!0){case"class"===d:a.className=u;break;case"style"===d:a.style=uc(String(u));break;case d.startsWith("aria-"):case d.startsWith("data-"):a[d.toLowerCase()]=u;break;default:a[sc(d)]=u}const{style:l,"aria-label":s,...c}=o;return l&&(a.style=a.style?{...a.style,...l}:l),s&&(a["aria-label"]=s,a["aria-hidden"]="false"),t(r.tag,{...c,...a},...n)}.bind(null,o.createElement),hc=(t,r)=>{const o=e.useId();return t||(r?o:void 0)},pc="searchPseudoElementsFullScan"in ic?"7.0.0":"6.0.0",mc=Number.parseInt(pc)>=7,gc="fa",xc="fa-beat",yc="fa-fade",bc="fa-beat-fade",vc="fa-bounce",wc="fa-shake",Cc="fa-spin",kc="fa-spin-pulse",$c="fa-spin-reverse",jc="fa-pulse",Sc={left:"fa-pull-left",right:"fa-pull-right"},zc={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Tc={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Ac="fa-border",Pc="fa-fw",Nc="fa-flip",Ic="fa-flip-horizontal",Rc="fa-flip-vertical",Ec="fa-inverse",Mc="fa-rotate-by",Fc="fa-swap-opacity",Lc="fa-width-auto";function qc(e){const t=ic.cssPrefix||ic.familyPrefix||gc;return t===gc?e:e.replace(new RegExp(`(?<=^|\\s)${gc}-`,"g"),`${t}-`)}function Wc(e){if(e)return(e=>"object"==typeof e&&"icon"in e&&!!e.icon)(e)?e:ac.icon(e)}var Oc=new class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t="undefined"!=typeof process&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}}("FontAwesomeIcon"),Dc={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Hc=new Set(Object.keys(Dc)),Bc=o.forwardRef((e,t)=>{const r={...Dc,...e},{icon:o,mask:n,symbol:i,title:a,titleId:l,maskId:s,transform:c}=r,d=hc(s,Boolean(n)),u=hc(l,Boolean(a)),f=Wc(o);if(!f)return Oc.error("Icon lookup is undefined",o),null;const h=function(e){const{beat:t,fade:r,beatFade:o,bounce:n,shake:i,spin:a,spinPulse:l,spinReverse:s,pulse:c,fixedWidth:d,inverse:u,border:f,flip:h,size:p,rotation:m,pull:g,swapOpacity:x,rotateBy:y,widthAuto:b,className:v}=e,w=[];return v&&w.push(...v.split(" ")),t&&w.push(xc),r&&w.push(yc),o&&w.push(bc),n&&w.push(vc),i&&w.push(wc),a&&w.push(Cc),s&&w.push($c),l&&w.push(kc),c&&w.push(jc),d&&w.push(Pc),u&&w.push(Ec),f&&w.push(Ac),!0===h&&w.push(Nc),"horizontal"!==h&&"both"!==h||w.push(Ic),"vertical"!==h&&"both"!==h||w.push(Rc),null!=p&&w.push(Tc[p]),null!=m&&0!==m&&w.push(zc[m]),null!=g&&w.push(Sc[g]),x&&w.push(Fc),mc?(y&&w.push(Mc),b&&w.push(Lc),(ic.cssPrefix||ic.familyPrefix||gc)===gc?w:w.map(qc)):w}(r),p="string"==typeof c?ac.transform(c):c,m=Wc(n),g=lc(f,{...h.length>0&&{classes:h},...p&&{transform:p},...m&&{mask:m},symbol:i,title:a,titleId:u,maskId:d});if(!g)return Oc.error("Could not find icon",f),null;const{abstract:x}=g,y={ref:t};for(const b of function(e){return Object.keys(e)}(r))Hc.has(b)||(y[b]=r[b]);return fc(x[0],y)});Bc.displayName="FontAwesomeIcon";
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
var _c={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Yc={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},Uc={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},Gc={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},Xc={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Jc={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},Zc={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Vc={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z"]},Kc={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z"]};const Qc=()=>{var t,r,o,i,a,l,s,c,d,u,f,h;n();const{isLoading:p,startLoading:m,stopLoading:g}=de(),x=Qo(),{t:y}=le(),b=(null==x?void 0:x.currentBoard)||Array(9).fill().map(()=>Array(9).fill(0)),w=(null==x?void 0:x.originalPuzzle)||null,C=(null==x?void 0:x.selectedCell)||null,k=(null==x?void 0:x.difficulty)||"medium",$=(null==x?void 0:x.timeElapsed)||0,j=(null==x?void 0:x.errorCount)||0,S=(null==x?void 0:x.isTimerActive)??!0,z=(null==x?void 0:x.isPencilMode)??!1,T=(null==x?void 0:x.setSelectedCell)||(()=>{}),A=(null==x?void 0:x.setHighlightedCells)||(()=>{}),P=(null==x?void 0:x.setDifficulty)||(()=>{});null==x||x.setBoard,null==x||x.setSolution,null==x||x.generateNewPuzzle;const N=(null==x?void 0:x.togglePencilMode)||(()=>{}),I=(null==x?void 0:x.toggleTimer)||(()=>{});null==x||x.getHint;const R=(null==x?void 0:x.clearCell)||(()=>{}),E=(null==x?void 0:x.identifyTechniques)||(()=>[]),M=(null==x?void 0:x.openSettings)||(()=>{}),F=(null==x?void 0:x.fillCell)||(()=>{}),L=(null==x?void 0:x.fillAllCandidates)||(()=>{}),q=(null==x?void 0:x.undo)||(()=>{}),W=(null==x?void 0:x.solution)||Array(9).fill().map(()=>Array(9).fill(0)),O=(null==x?void 0:x.highlightedCells)||[],D=(null==x?void 0:x.pencilNotes)||[],H=(null==x?void 0:x.calculateTechniques)||(()=>{}),B=(()=>{const e={};for(let t=1;t<=9;t++)e[t]=9;for(let t=0;t<9;t++)for(let r=0;r<9;r++){const o=b[t][r];0!==o&&W[t][r]===o&&e[o]--}return e})(),[_,Y]=e.useState(window.innerHeight>window.innerWidth),[U,G]=e.useState(!1),[X,J]=e.useState(!1),[Z,V]=e.useState(!1),Q=e.useRef(null);e.useRef(null);const ee=e.useRef(null);e.useEffect(()=>{const e=()=>{const e=window.innerWidth<992,t=window.innerHeight>window.innerWidth;Y(e&&t)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]);const te=e=>{const t=e.target.closest("div[row]")||e.target.closest("div[col]"),r=e.target.closest(".board-container"),o=e.target.closest(".controls-container"),n=e.target.closest(".nav-block"),i=e.target.closest(".display-block");t||r||o||n||i||(T(null),(null==x?void 0:x.setHighlightedCells)&&x.setHighlightedCells([]))};e.useEffect(()=>{const e=ee.current;return e&&e.addEventListener("click",te),()=>{e&&e.removeEventListener("click",te)}},[C]);const re=(e,t)=>{T({row:e,col:t}),(null==x?void 0:x.setHighlightedCells)&&x.setHighlightedCells([])},oe=e=>{const t=Math.floor(e/3600),r=Math.floor(e%3600/60),o=e%60;return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`},ne=e=>{try{if(!C){const t=[];for(let r=0;r<9;r++)for(let o=0;o<9;o++){const n=b&&b[r]?b[r][o]:0,i=w&&w[r]&&w[r][o]===e,a=n===e&&(null==x?void 0:x.lockedCells)&&x.lockedCells.has(`${r}-${o}`);(i||a)&&e>0&&t.push({row:r,col:o,number:e})}return void((null==x?void 0:x.setHighlightedCells)&&x.setHighlightedCells(t))}if(w&&w[C.row]&&0!==w[C.row][C.col])return void T(null);const t=`${C.row}-${C.col}`;if((null==x?void 0:x.lockedCells)&&x.lockedCells.has(t))return void T(null);F(C.row,C.col,e)}catch(t){console.error("Error updating cell:",t)}},ie=()=>{if(C)try{R(C.row,C.col)}catch(e){console.error("Error clearing cell:",e)}},ae=()=>{console.log("handleNewGame 被调用"),V(!1),J(!1),T(null),(null==x?void 0:x.setHighlightedCells)&&x.setHighlightedCells([]),G(!0),console.log("设置 showDifficultyModal 为 true")};e.useEffect(()=>{if(!b||b.every(e=>e.every(e=>0===e))){(async()=>{try{if(m&&m(y("loadingGame")),(null==x?void 0:x.setCurrentBoard)&&(null==x?void 0:x.setOriginalPuzzle)&&(null==x?void 0:x.setSolution)){console.log("直接使用本地预设谜题初始化游戏");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];x.setCurrentBoard(e),x.setOriginalPuzzle(e),x.setSolution(t),x.setGameStarted(!0),x.setTimerActive(!0)}else console.log("尝试使用上下文的其他方法初始化游戏")}catch(e){console.error("初始化游戏失败:",e),console.error("错误详情:",e.message,e.stack)}finally{g&&g()}})()}},[]);const se=()=>{I&&I()},ce=e.useCallback(()=>{if(T(null),E){const e=E();if(e&&e.length>0){const t=e[Math.floor(Math.random()*e.length)];let r=y("foundRandomTechnique","找到随机技巧：");if(r+=y(t.type)||y("unknownTechnique")||t.type,void 0!==t.row&&void 0!==t.col){r+=` ${y("position",{defaultMessage:"位置"})}:(${t.row+1},${t.col+1})`,A([[t.row,t.col]])}if(void 0!==t.value){r+=` ${y("number",{defaultMessage:"数字"})}:${t.value}`}K.info(r,{position:"top-right",autoClose:3e3})}else K.info(y("noTechniquesAvailable",{defaultMessage:"当前没有可用的技巧机会"}),{position:"top-right",autoClose:2e3})}else console.error("identifyTechniques 函数不可用")},[E,A,T,y]),ue=e.useCallback(()=>{T(null);const e=E();e.length>0?K.info(`找到${e.length}个可用技巧，可在技巧标签页中查看详情`,{position:"top-right",autoClose:2e3}):K.info("当前棋盘没有找到可用技巧，请尝试其他解法或获取提示",{position:"top-right",autoClose:2e3})},[E,T]),fe=()=>{L&&(L(),V(!0),setTimeout(()=>V(!1),2e3))},he=()=>{N&&(N(),J(!0),setTimeout(()=>J(!1),2e3))},pe=()=>{M&&M()};return v.jsxs("div",{className:"sudoku-game-container",ref:ee,children:[!S&&!(null==x?void 0:x.gameCompleted)&&(null==x?void 0:x.gameStarted)&&!(null==x?void 0:x.isLoading)&&v.jsx("div",{className:"pause-overlay",onClick:se,children:v.jsxs("div",{className:"pause-message",children:[v.jsx("h2",{children:y("gamePaused")}),v.jsx("p",{children:y("clickToResume")})]})}),v.jsx("div",{className:"main-content",children:_?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"scroll-hint"}),v.jsx(hi,{errorCount:j,difficulty:k,time:oe($)}),v.jsx(li,{onNewGame:ae,onPauseTimer:se,onGetHint:ce,onShowTechniques:ue,onToggleNotes:fe,onSettings:pe,isNotesMode:z,isTimerActive:S,gameCompleted:(null==x?void 0:x.gameCompleted)||!1}),v.jsxs("div",{className:"board-container",ref:Q,onClick:e=>e.stopPropagation(),style:{position:"relative"},children:[v.jsx(zn,{board:b||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:w,selectedCell:C,highlightedCells:((null==x?void 0:x.highlightedCells)||[]).filter(e=>!e.techniqueIndicator),incorrectCells:(null==x?void 0:x.incorrectCells)||new Set,onCellClick:re,isPencilMode:z,pencilNotes:(null==x?void 0:x.pencilNotes)||[]}),v.jsx(mi,{highlightedCells:O.filter(e=>e.techniqueIndicator),boardWidth:(null==(t=Q.current)?void 0:t.offsetWidth)||450,boardHeight:(null==(r=Q.current)?void 0:r.offsetHeight)||450,isPortrait:_}),v.jsx(pi,{highlightedCells:O.filter(e=>e.techniqueIndicator),boardWidth:(null==(o=Q.current)?void 0:o.offsetWidth)||450,boardHeight:(null==(i=Q.current)?void 0:i.offsetHeight)||450,isPortrait:_}),v.jsx(gi,{highlightedCells:O.filter(e=>!0===e.techniqueIndicator&&e.techniqueType&&e.techniqueType.includes("nakedPair")),boardWidth:(null==(a=Q.current)?void 0:a.offsetWidth)||450,boardHeight:(null==(l=Q.current)?void 0:l.offsetHeight)||450,isPortrait:_})]}),v.jsx("div",{className:"controls-container",onClick:e=>e.stopPropagation(),children:v.jsx(An,{onNumberSelect:ne,onClearCell:ie,onUndo:q,selectedNumber:(null==C?void 0:C.value)||null,isPencilMode:z,togglePencilMode:he,fillAllCandidates:L,calculateTechniques:H,remainingNumbers:B})})]}):v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"top-row",children:[v.jsx("div",{className:"nav-block",children:v.jsx(li,{onNewGame:ae,onPauseTimer:se,onGetHint:ce,onShowTechniques:ue,onToggleNotes:fe,onSettings:pe,isNotesMode:z,isTimerActive:S})}),v.jsxs("div",{className:"display-block",children:[v.jsxs("div",{children:[y("error"),"：",v.jsx("span",{className:"value error-count",style:{color:"#ff4d4d"},children:j})]}),v.jsx("div",{children:y(k)}),v.jsx("div",{children:oe($)})]})]}),v.jsxs("div",{className:"bottom-row",children:[v.jsxs("div",{className:"board-container",ref:Q,onClick:e=>e.stopPropagation(),style:{position:"relative"},children:[v.jsx(zn,{board:b||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:w,selectedCell:C,highlightedCells:O.filter(e=>!e.techniqueIndicator),incorrectCells:(null==x?void 0:x.incorrectCells)||new Set,onCellClick:re,isPencilMode:z,pencilNotes:D}),v.jsx(mi,{highlightedCells:O.filter(e=>e.techniqueIndicator),boardWidth:(null==(s=Q.current)?void 0:s.offsetWidth)||450,boardHeight:(null==(c=Q.current)?void 0:c.offsetHeight)||450,isPortrait:_}),v.jsx(pi,{highlightedCells:O.filter(e=>e.techniqueIndicator),boardWidth:(null==(d=Q.current)?void 0:d.offsetWidth)||450,boardHeight:(null==(u=Q.current)?void 0:u.offsetHeight)||450,isPortrait:_}),v.jsx(gi,{highlightedCells:O.filter(e=>!0===e.techniqueIndicator&&e.techniqueType&&e.techniqueType.includes("nakedPair")),boardWidth:(null==(f=Q.current)?void 0:f.offsetWidth)||450,boardHeight:(null==(h=Q.current)?void 0:h.offsetHeight)||450,isPortrait:_})]}),v.jsx("div",{className:"controls-container",onClick:e=>e.stopPropagation(),children:v.jsx(An,{onNumberSelect:ne,onClearCell:ie,onUndo:q,selectedNumber:(null==C?void 0:C.value)||null,isPencilMode:z,togglePencilMode:he,fillAllCandidates:L,calculateTechniques:H,remainingNumbers:B})})]})]})}),v.jsxs("div",{className:"sudoku-info-section",children:[v.jsxs("div",{className:"info-block welcome-section",children:[v.jsx("h2",{children:y("welcomeTitle")}),v.jsx("p",{children:y("welcomeContent")})]}),v.jsxs("div",{className:"info-block rules-section",children:[v.jsx("h2",{children:y("rulesTitle")}),v.jsx("p",{children:y("rulesContent")})]}),v.jsxs("div",{className:"info-block techniques-section",children:[v.jsx("h2",{children:y("techniquesTitle")}),v.jsx("div",{className:"techniques-container",dangerouslySetInnerHTML:{__html:y("techniquesContent")}})]})]}),p&&v.jsx("div",{className:"loading-overlay",children:v.jsx("div",{children:"加载中..."})}),v.jsx(Wn,{isOpen:U,onClose:()=>G(!1),onSelectDifficulty:async e=>{try{if(console.log(`handleDifficultySelect 被调用，选择难度: ${e}`),G(!1),console.log("关闭难度选择模态框"),m&&(m(y("generatingNewPuzzle")),console.log("显示加载状态")),console.log("sudokuContext 可用:",!!x),console.log("startNewGame 方法可用:",!!(null==x?void 0:x.startNewGame)),console.log("generateNewPuzzle 方法可用:",!!(null==x?void 0:x.generateNewPuzzle)),null==x?void 0:x.startNewGame)console.log("调用 startNewGame 方法"),await x.startNewGame(null,e),console.log("startNewGame 调用完成");else if(null==x?void 0:x.generateNewPuzzle)console.log("调用 generateNewPuzzle 方法"),await x.generateNewPuzzle(e),console.log("generateNewPuzzle 调用完成");else{console.warn("无法开始新游戏：上下文函数不可用"),console.log("使用备用方案：离线谜题生成器"),P&&P(e);const t=(e=>{console.log(`生成离线谜题，难度: ${e}`);const t={easy:40,medium:50,hard:58,expert:64}[e]||50,r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],o=r.map(e=>[...e]);let n=t;for(;n>0;){const e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());0!==o[e][t]&&(o[e][t]=0,n--)}return{puzzle:o,solution:r}})(e);console.log("离线谜题生成完成"),(null==x?void 0:x.setCurrentBoard)&&(null==x?void 0:x.setCurrentPuzzle)&&(null==x?void 0:x.setSolution)&&(console.log("设置谜题到上下文"),x.setCurrentPuzzle(t),x.setCurrentBoard(t.puzzle),x.setSolution(t.solution)),T(null),console.log("重置选中单元格")}}catch(t){console.error("Error starting new game:",t),console.error("错误详情:",t.message,t.stack)}finally{g&&(g(),console.log("隐藏加载状态"))}},initialDifficulty:k}),X&&v.jsx("div",{className:"pencil-mode-instructions",children:y(z?"enterPencilMode":"exitPencilMode")}),Z&&v.jsx("div",{className:"pencil-mode-instructions",children:y("notesCalculated")})]})},ed=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,td=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`,rd=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border-left: 5px solid ${e=>e.mastered?e.theme.success:e.theme.primary};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`,od=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,nd=Hr.h3`
  font-size: 22px;
  color: ${e=>e.theme.text};
  margin: 0;
`,id=Hr.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,ad=Hr.p`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 15px;
`,ld=Hr.div`
  width: 100%;
  height: 8px;
  background-color: ${e=>e.theme.background};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`,sd=Hr.div`
  height: 100%;
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  border-radius: 4px;
  width: ${e=>e.percentage}%;
  transition: width 0.3s ease;
`,cd=Hr.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,dd=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,ud=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
`,fd=Hr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,hd=Hr.button`
  background-color: ${e=>e.theme.surface};
  color: ${e=>e.theme.text};
  border: 2px solid ${e=>e.theme.border};
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.primary};
    color: white;
    border-color: ${e=>e.theme.primary};
  }
`,pd=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,md=Hr.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,gd=Hr.div`
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  padding: 20px;
`,xd=Hr.ol`
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,yd=Hr.li`
  font-size: 16px;
  color: ${e=>e.theme.text};
  line-height: 1.6;
`,bd=Hr.button`
  background-color: ${e=>e.theme.primary};
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: ${e=>e.theme.primary}aa;
    transform: translateY(-2px);
  }
`,vd=()=>{const{theme:r}=oe(),{techniquesProgress:o,incrementTechniquePractice:n}=bo(),[i,a]=e.useState(null),l=[{id:"nakedSingles",name:"唯一候选数",description:"最简单的数独技巧，当一个格子只有一个可能的数字时填入该数字。",details:{description:"唯一候选数是最基础的数独解题技巧。当一个空格子所在的行、列和3x3宫格中已经包含了除一个数字外的所有其他数字时，这个空格子只能填入剩下的那个数字。",steps:["观察一个空格子","检查该格子所在的行，列出已经存在的数字","检查该格子所在的列，列出已经存在的数字","检查该格子所在的3x3宫格，列出已经存在的数字","如果以上三个区域已经包含了除一个数字外的所有数字（1-9），则填入剩下的那个数字"],examples:"例如：一个格子所在的行包含数字1、2、3、4、5、6、7、9，所在的列包含数字1、2、3、4、5、6、8，所在的宫格包含数字1、2、3、4、5、7、8、9。那么这个格子只能填入数字8。"}},{id:"hiddenSingles",name:"隐性唯一",description:"当一个数字只能出现在某一行、列或宫格的某个特定格子时，填入该数字。",details:{description:"隐性唯一技巧比唯一候选数稍微复杂一些。当一个数字在某一行、列或3x3宫格中只能出现在一个特定的空格子时，即使该格子可能有其他候选数，但这个数字必须填入该格子。",steps:["选择一个数字（1-9）","检查某一行，确定该数字可能的放置位置","如果在该行中，该数字只能放在一个特定格子，则填入该数字","对每一列和每个3x3宫格重复同样的检查"],examples:"例如：在某一行中，数字5只能放在某个特定格子中，尽管该格子可能还有其他候选数（如2和5），但因为数字5在该行中没有其他可能的放置位置，所以这个格子必须填入5。"}},{id:"nakedPairs",name:"数对 (Naked Pairs)",description:"当两个格子在同一区域（行、列或宫格）中具有相同的两个候选数时，可以排除该区域其他格子中这两个数字。",details:{description:"数对技巧是一种排除法技巧。当在同一行、列或3x3宫格中有两个格子都只有相同的两个候选数时，这两个数字必须分别填入这两个格子，因此可以从该区域的其他格子的候选数中排除这两个数字。",steps:["在同一行、列或3x3宫格中寻找两个格子","确认这两个格子恰好有相同的两个候选数","从该区域的其他格子的候选数中排除这两个数字"],examples:"例如：在同一行中，两个格子都只有候选数3和7。这意味着这两个数字必须分别填入这两个格子，因此该行的其他格子中不可能是3或7，可以从它们的候选数中排除这两个数字。"}},{id:"hiddenPairs",name:"隐性数对 (Hidden Pairs)",description:"当两个数字只能出现在同一区域的两个特定格子中时，可以排除这两个格子中的其他候选数。",details:{description:"隐性数对是数对的一种变体。当在同一行、列或3x3宫格中，两个特定的数字只能出现在两个特定的格子中时，这两个格子必须包含这两个数字，可以排除这两个格子中的其他候选数。",steps:["在同一行、列或3x3宫格中选择两个数字","检查这两个数字是否只能出现在该区域的两个特定格子中","如果是，则可以从这两个格子中排除所有其他候选数，只保留这两个数字"],examples:"例如：在同一行中，数字4和6只能出现在两个特定的格子中，尽管这两个格子可能有其他候选数。这意味着这两个格子必须包含数字4和6，所以可以从这两个格子中删除其他候选数。"}},{id:"pointingPairs",name:"指向对 (Pointing Pairs)",description:"当一个数字在某个3x3宫格中只能出现在同一行或同一列时，可以排除该行或列中其他宫格内该数字的可能性。",details:{description:"指向对技巧利用3x3宫格和行/列的关系进行排除。当在某个3x3宫格中，一个数字只能出现在同一行或同一列的格子中时，这个数字在该行或列的其他3x3宫格中就不能出现在相同的行或列位置。",steps:["选择一个3x3宫格","对于某个数字，检查它在该宫格中可能的位置","如果这些位置全部位于同一行或同一列","则可以从该行或列的其他3x3宫格中排除该数字出现在相同行或列位置的可能性"],examples:"例如：在某个3x3宫格中，数字2只能出现在该宫格的第一行的两个格子中。这意味着在这一行的其他3x3宫格中，数字2不能出现在第一行的位置。"}},{id:"boxLineReduction",name:"宫行列排除 (Box-Line Reduction)",description:"当一个数字在某一行或列中只能出现在同一个3x3宫格内时，可以排除该宫格中其他格子的该数字可能性。",details:{description:"宫行列排除是指向对的反向应用。当在某一行或列中，一个数字只能出现在某个特定的3x3宫格中时，可以排除该宫格中其他格子出现该数字的可能性。",steps:["选择某一行或列","对于某个数字，检查它在该行或列中可能的位置","如果这些位置全部位于同一个3x3宫格中","则可以从该3x3宫格的其他格子中排除该数字"],examples:"例如：在某一行中，数字8只能出现在该行的前三个格子（属于第一个3x3宫格）。这意味着在第一个3x3宫格中，数字8只能出现在这三个格子中，可以从该宫格的其他六个格子中排除数字8。"}}],s=e=>{const t=o[e]||{mastered:0,practiced:0};return Math.min(100,t.practiced/10*20)};return v.jsx(ed,{children:i?v.jsxs(dd,{theme:r,children:[v.jsxs(ud,{children:[v.jsx(fd,{theme:r,children:i.name}),v.jsx(hd,{onClick:()=>{a(null)},theme:r,children:"关闭"})]}),v.jsxs(pd,{children:[v.jsxs("div",{children:[v.jsx(md,{theme:r,children:"技巧说明"}),v.jsx("p",{style:{fontSize:"16px",color:r.textSecondary,lineHeight:"1.6"},children:i.details.description})]}),v.jsxs("div",{children:[v.jsx(md,{theme:r,children:"使用步骤"}),v.jsx(xd,{children:i.details.steps.map((e,t)=>v.jsx(yd,{theme:r,children:e},t))})]}),v.jsxs("div",{children:[v.jsx(md,{theme:r,children:"示例"}),v.jsx(gd,{theme:r,children:v.jsx("p",{style:{fontSize:"16px",color:r.textSecondary,lineHeight:"1.6"},children:i.details.examples})})]}),v.jsx(bd,{onClick:()=>(e=>{var r;n(e);const o=null==(r=l.find(t=>t.id===e))?void 0:r.name;K.info(t("startPractice",{techniqueName:o}),{position:"top-right",autoClose:2e3})})(i.id),theme:r,children:"开始练习"})]})]}):v.jsxs(v.Fragment,{children:[v.jsx("h2",{style:{fontSize:"32px",color:r.text,margin:0},children:"数独技巧学习"}),v.jsx("p",{style:{fontSize:"18px",color:r.textSecondary,marginBottom:"30px"},children:"点击技巧卡片了解详情，掌握各种数独解题方法"}),v.jsx(td,{children:l.map(e=>{const t=o[e.id]||{mastered:0,practiced:0},n=s(e.id),i=(l=e.id,s(l)>=80);var l;return v.jsxs(rd,{onClick:()=>(e=>{a(e)})(e),mastered:i,theme:r,children:[v.jsxs(od,{children:[v.jsx(nd,{theme:r,children:e.name}),v.jsx(id,{mastered:i,theme:r,children:i?"已掌握":"学习中"})]}),v.jsx(ad,{theme:r,children:e.description}),v.jsx(ld,{theme:r,children:v.jsx(sd,{percentage:n,mastered:i,theme:r})}),v.jsxs(cd,{theme:r,children:[v.jsxs("span",{children:["练习次数: ",t.practiced]}),v.jsxs("span",{children:["掌握度: ",n.toFixed(0),"%"]})]})]},e.id)})})]})})},wd=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Cd=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,kd=Hr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,$d=Hr.button`
  background-color: ${e=>e.theme.error};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.error}aa;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: ${e=>e.theme.disabled};
    cursor: not-allowed;
    transform: none;
  }
`,jd=Hr.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`,Sd=Hr.button`
  background-color: ${e=>e.active?e.theme.primary:e.theme.surface};
  color: ${e=>e.active?"white":e.theme.text};
  border: 2px solid ${e=>e.active?e.theme.primary:e.theme.border};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.active?e.theme.primary:e.theme.background};
  }
`,zd=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Td=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
`,Ad=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,Pd=Hr.h3`
  font-size: 20px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Nd=Hr.div`
  background-color: ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,Id=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
`,Rd=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Ed=Hr.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Md=Hr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,Fd=Hr.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,Ld=Hr.button`
  background-color: ${e=>{switch(e.type){case"primary":return e.theme.primary;case"danger":return e.theme.error;default:return e.theme.surface}}};
  color: ${e=>"secondary"===e.type?e.theme.text:"white"};
  border: ${e=>"secondary"===e.type?`2px solid ${e.theme.border}`:"none"};
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`,qd=Hr.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.textSecondary};
`,Wd=Hr.div`
  font-size: 72px;
  margin-bottom: 20px;
  color: ${e=>e.theme.disabled};
`,Od=Hr.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 10px;
`,Dd=Hr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 20px;
`,Hd=Hr.button`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}}aa;
    transform: translateY(-2px);
  }
`,Bd=Hr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,_d=Hr.div`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,Yd=Hr.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-top: 0;
  margin-bottom: 20px;
`,Ud=Hr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 30px;
  line-height: 1.6;
`,Gd=Hr.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`,Xd=()=>{const{theme:t}=oe(),{userId:r}=bo(),{loadSavedGame:o}=Qo(),{executeWithLoading:n}=de(),{t:i}=le(),[a,l]=e.useState([]),[s,c]=e.useState("all"),[d,u]=e.useState(!1),[f,h]=e.useState(null);e.useEffect(()=>{p()},[]);const p=async()=>{try{await n(async()=>{const e=await wo.getUserProgress(r);l(e.data||[])},"加载游戏进度中...")}catch(e){console.error("加载进度失败:",e),l(m())}},m=()=>[{id:"1",puzzleId:"puzzle-1",difficulty:"easy",startTime:"2023-10-15T14:30:00",lastUpdated:"2023-10-15T15:45:00",completed:!1,completionTime:null,filledCells:42,totalCells:81,status:"in-progress",puzzleState:[]},{id:"2",puzzleId:"puzzle-2",difficulty:"medium",startTime:"2023-10-14T09:15:00",lastUpdated:"2023-10-14T10:30:00",completed:!0,completionTime:"2023-10-14T10:30:00",filledCells:81,totalCells:81,status:"completed",puzzleState:[]},{id:"3",puzzleId:"puzzle-3",difficulty:"hard",startTime:"2023-10-13T18:00:00",lastUpdated:"2023-10-13T18:30:00",completed:!1,completionTime:null,filledCells:28,totalCells:81,status:"paused",puzzleState:[]}],g=a.filter(e=>"all"===s||("completed"===s?"completed"===e.status:"in-progress"!==s||"completed"!==e.status)),x=e=>{h(e),u(!0)},y=()=>{u(!1),h(null)},b=e=>new Date(e).toLocaleString(),w=e=>{switch(e){case"easy":return i("easy");case"medium":return i("medium");case"hard":return i("hard");case"expert":return i("expert");default:return e}};return v.jsxs(wd,{children:[v.jsxs(Cd,{children:[v.jsx(kd,{children:i("progress")}),a.length>0&&v.jsx($d,{onClick:()=>x("clear-all"),children:i("clearAllProgress")})]}),a.length>0&&v.jsxs(jd,{children:[v.jsx(Sd,{active:"all"===s,onClick:()=>c("all"),children:i("allProgress")}),v.jsx(Sd,{active:"in-progress"===s,onClick:()=>c("in-progress"),children:i("inProgress")}),v.jsx(Sd,{active:"completed"===s,onClick:()=>c("completed"),children:i("completed")})]}),g.length>0?v.jsx(zd,{children:g.map(e=>{return v.jsxs(Td,{status:e.status,children:[v.jsxs(Ad,{children:[v.jsxs(Pd,{children:[i("sudokuGame")," #",e.id]}),v.jsx(Nd,{status:e.status,theme:t,children:"completed"===e.status?i("completed"):"in-progress"===e.status?i("inProgress"):i("paused")})]}),v.jsxs(Id,{children:[v.jsxs(Rd,{children:[v.jsx(Ed,{theme:t,children:i("difficulty")}),v.jsx(Md,{theme:t,children:w(e.difficulty)})]}),v.jsxs(Rd,{children:[v.jsx(Ed,{theme:t,children:i("startTime")}),v.jsx(Md,{theme:t,children:b(e.startTime)})]}),v.jsxs(Rd,{children:[v.jsx(Ed,{theme:t,children:i("lastUpdated")}),v.jsx(Md,{theme:t,children:b(e.lastUpdated)})]}),v.jsxs(Rd,{children:[v.jsx(Ed,{theme:t,children:i("completionProgress")}),v.jsxs(Md,{theme:t,children:[(r=e.filledCells,l=e.totalCells,Math.round(r/l*100)),"%"]})]})]}),v.jsxs(Fd,{children:["completed"!==e.status&&v.jsx(Ld,{type:"primary",onClick:()=>(async e=>{try{await n(async()=>{const t=a.find(t=>t.id===e);t&&(await o(t.puzzleState,t.puzzleId),window.location.href="/game")},"加载游戏中...")}catch(t){console.error("加载游戏失败:",t),K.error(i("loadGameFailed"),{position:"top-right",autoClose:2e3})}})(e.id),children:i("continueGame")}),v.jsx(Ld,{type:"danger",onClick:()=>x(e.id),children:i("deleteProgress")})]})]},e.id);var r,l})}):v.jsxs(qd,{children:[v.jsx(Wd,{children:"📝"}),v.jsx(Od,{children:i("noProgress")}),v.jsx(Dd,{children:i("all"!==s?"noFilteredProgress":"noStartedGames")}),v.jsx(Hd,{onClick:()=>window.location.href="/game",children:i("startNewGame")})]}),d&&v.jsx(Bd,{children:v.jsxs(_d,{children:[v.jsx(Yd,{children:i("clear-all"===f?"confirmClearAllProgress":"confirmDeleteProgress")}),v.jsx(Ud,{children:i("clear-all"===f?"clearAllProgressWarning":"deleteProgressWarning")}),v.jsxs(Gd,{children:[v.jsx(Ld,{type:"secondary",onClick:y,children:i("cancel")}),v.jsx(Ld,{type:"danger",onClick:()=>{"clear-all"===f?(async()=>{try{await n(async()=>{l([])},"清空进度中...")}catch(e){console.error("清空进度失败:",e),K.error(i("clearProgressFailed"),{position:"top-right",autoClose:2e3})}})():"string"==typeof f&&(async e=>{try{await n(async()=>{l(t=>t.filter(t=>t.id!==e))},"删除进度中...")}catch(t){console.error("删除进度失败:",t),K.error(i("deleteProgressFailed"),{position:"top-right",autoClose:2e3})}})(f),y()},children:i("confirmDelete")})]})]})})]})},Jd=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Zd=Hr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Vd=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`,Kd=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 5px solid ${e=>e.color||e.theme.primary};
`,Qd=Hr.div`
  font-size: 48px;
  font-weight: 700;
  color: ${e=>e.color||e.theme.primary};
`,eu=Hr.div`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,tu=Hr.div`
  font-size: 14px;
  color: ${e=>e.positive?e.theme.success:e.theme.error};
`,ru=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,ou=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,nu=Hr.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,iu=Hr.div`
  display: flex;
  gap: 10px;
`,au=Hr.button`
  background-color: ${e=>e.active?e.theme.primary:e.theme.surface};
  color: ${e=>e.active?"white":e.theme.text};
  border: 2px solid ${e=>e.active?e.theme.primary:e.theme.border};
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`,lu=Hr.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.textSecondary};
  font-size: 18px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
`,su=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,cu=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,du=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,uu=Hr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,fu=Hr.span`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,hu=Hr.div`
  width: 100%;
  height: 10px;
  background-color: ${e=>e.theme.background};
  border-radius: 5px;
  overflow: hidden;
`,pu=Hr.div`
  height: 100%;
  background-color: ${e=>{switch(e.difficulty){case"easy":return"#4CAF50";case"medium":return"#FF9800";case"hard":return"#F44336";case"expert":return"#9C27B0";default:return e.theme.primary}}};
  border-radius: 5px;
  width: ${e=>e.percentage}%;
`,mu=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,gu=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
`,xu=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  border-left: 4px solid ${e=>e.mastered?e.theme.success:e.theme.primary};
`,yu=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,bu=Hr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,vu=Hr.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,wu=Hr.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,Cu=()=>{const{theme:t}=oe(),{userId:r,userStats:o,techniquesProgress:n}=bo(),{executeWithLoading:i}=de(),[a,l]=e.useState(null),[s,c]=e.useState("all");e.useEffect(()=>{d()},[s]);const d=async()=>{try{await i(async()=>{const e=await wo.getUserStatistics(r,s);l(e.data)},"加载统计数据中...")}catch(e){console.error("加载统计数据失败:",e),l(u())}},u=()=>({totalGames:42,completedGames:38,winRate:90.5,averageTime:1245,favoriteDifficulty:"medium",bestTime:420,currentStreak:5,longestStreak:12,totalPlayTime:145200,difficultyBreakdown:{easy:15,medium:20,hard:5,expert:2},recentPerformance:[{date:"2023-10-10",games:3,completed:3},{date:"2023-10-11",games:2,completed:2},{date:"2023-10-12",games:4,completed:3},{date:"2023-10-13",games:1,completed:1},{date:"2023-10-14",games:2,completed:2},{date:"2023-10-15",games:3,completed:3},{date:"2023-10-16",games:2,completed:2}]}),f=a||u(),h=n||{},p=e=>{if(!e)return"0:00";return`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`},m=()=>{if(f.totalGames)return f.totalGames;const e=f.difficultyBreakdown||{};return Object.values(e).reduce((e,t)=>e+t,0)},g=e=>{const t=h[e]||{practiced:0};return Math.min(100,t.practiced/10*20)};return v.jsxs(Jd,{children:[v.jsx(Zd,{theme:t,children:"我的统计"}),v.jsxs(Vd,{children:[v.jsxs(Kd,{color:t.primary,theme:t,children:[v.jsx(Qd,{color:t.primary,theme:t,children:m()}),v.jsx(eu,{theme:t,children:"总游戏数"}),v.jsx(tu,{positive:!0,theme:t,children:"+5 本周"})]}),v.jsxs(Kd,{color:t.success,theme:t,children:[v.jsx(Qd,{color:t.success,theme:t,children:f.completedGames}),v.jsx(eu,{theme:t,children:"完成游戏"}),v.jsx(tu,{positive:!0,theme:t,children:"全部完成"})]}),v.jsxs(Kd,{color:t.warning,theme:t,children:[v.jsxs(Qd,{color:t.warning,theme:t,children:[f.winRate,"%"]}),v.jsx(eu,{theme:t,children:"胜率"}),v.jsx(tu,{positive:!0,theme:t,children:"+2% 本月"})]}),v.jsxs(Kd,{color:t.info,theme:t,children:[v.jsx(Qd,{color:t.info,theme:t,children:p(f.averageTime)}),v.jsx(eu,{theme:t,children:"平均时间"}),v.jsx(tu,{positive:!0,theme:t,children:"-30秒"})]}),v.jsxs(Kd,{color:t.error,theme:t,children:[v.jsx(Qd,{color:t.error,theme:t,children:p(f.bestTime)}),v.jsx(eu,{theme:t,children:"最佳时间"}),v.jsx(tu,{positive:!0,theme:t,children:"记录保持中"})]}),v.jsxs(Kd,{color:t.primary,theme:t,children:[v.jsx(Qd,{color:t.primary,theme:t,children:f.currentStreak}),v.jsx(eu,{theme:t,children:"当前连续天数"}),v.jsx(tu,{positive:f.currentStreak>1,theme:t,children:f.currentStreak>1?"🔥 加油！":"今天开始"})]})]}),v.jsxs(ru,{theme:t,children:[v.jsxs(ou,{children:[v.jsx(nu,{theme:t,children:"游戏进度"}),v.jsxs(iu,{children:[v.jsx(au,{active:"week"===s,onClick:()=>c("week"),theme:t,children:"本周"}),v.jsx(au,{active:"month"===s,onClick:()=>c("month"),theme:t,children:"本月"}),v.jsx(au,{active:"all"===s,onClick:()=>c("all"),theme:t,children:"全部"})]})]}),v.jsx(lu,{theme:t,children:"📊 游戏进度图表"})]}),v.jsxs(ru,{theme:t,children:[v.jsx(ou,{children:v.jsx(nu,{theme:t,children:"难度分布"})}),v.jsx(su,{children:Object.entries(f.difficultyBreakdown||{}).map(([e,r])=>{const o=(e=>{const t=f.difficultyBreakdown||{},r=m();return r>0?t[e]/r*100:0})(e);return v.jsxs(cu,{children:[v.jsxs(du,{children:[v.jsx(uu,{theme:t,children:{easy:"简单",medium:"中等",hard:"困难",expert:"专家"}[e]||e}),v.jsxs(fu,{theme:t,children:[r," 局 (",o.toFixed(1),"%)"]})]}),v.jsx(hu,{theme:t,children:v.jsx(pu,{difficulty:e,percentage:o})})]},e)})})]}),v.jsxs(mu,{theme:t,children:[v.jsx(nu,{theme:t,children:"技巧掌握"}),v.jsx(gu,{children:[{id:"nakedSingles",name:"唯一候选数"},{id:"hiddenSingles",name:"隐性唯一"},{id:"nakedPairs",name:"数对"},{id:"hiddenPairs",name:"隐性数对"},{id:"pointingPairs",name:"指向对"},{id:"boxLineReduction",name:"宫行列排除"}].map(e=>{var r;const o=g(e.id),n=(i=e.id,g(i)>=80);var i;const a=(null==(r=h[e.id])?void 0:r.practiced)||0;return v.jsxs(xu,{mastered:n,theme:t,children:[v.jsxs(yu,{children:[v.jsx(bu,{theme:t,children:e.name}),v.jsxs(vu,{theme:t,children:["练习 ",a," 次 · 掌握度 ",o.toFixed(0),"%"]})]}),v.jsx(wu,{mastered:n,theme:t,children:n?"已掌握":"学习中"})]},e.id)})})]})]})},ku=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`,$u=Hr.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,ju=Hr(i)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
    color: white;
    border-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
    transform: translateX(-3px);
  }
`,Su=Hr.h1`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  flex: 1;
`,zu=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`,Tu=Hr.h2`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 20px 0;
  border-bottom: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  padding-bottom: 10px;
`,Au=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  
  &:last-child {
    border-bottom: none;
  }
`,Pu=Hr.div`
  font-size: 18px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-weight: 500;
`,Nu=Hr.div`
  display: flex;
  gap: 10px;
`,Iu=Hr.button`
  background-color: ${e=>{var t,r;return e.active?(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7":(null==(r=e.theme)?void 0:r.surface)||"#ffffff"}};
  color: ${e=>{var t;return e.active?"white":(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  border: 2px solid ${e=>{var t,r;return e.active?(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7":(null==(r=e.theme)?void 0:r.border)||"#e0e0e0"}};
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return e.active?(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7":(null==(r=e.theme)?void 0:r.background)||"#f5f5f5"}};
    transform: translateY(-1px);
  }
`,Ru=Hr.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,Eu=Hr.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${e=>{var t,r;return e.active?(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7":(null==(r=e.theme)?void 0:r.surface)||"#ffffff"}};
  color: ${e=>{var t;return e.active?"white":(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  border: 2px solid ${e=>{var t,r;return e.active?(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7":(null==(r=e.theme)?void 0:r.border)||"#e0e0e0"}};
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return e.active?(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7":(null==(r=e.theme)?void 0:r.background)||"#f5f5f5"}};
    transform: translateY(-1px);
  }
`,Mu=Hr.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Fu=Hr(i)`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)?`${e.theme.primary}dd`:"#4a6cf7dd"}};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,Lu=Hr.span`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  font-style: italic;
`,qu=()=>{const{theme:e,themeMode:t,setLightTheme:r,setDarkTheme:o,setSystemTheme:i,setCustomThemeMode:a,customTheme:l}=oe(),{language:s,changeLanguage:c,availableLanguages:d,t:u}=le();return n(),v.jsxs(ku,{children:[v.jsxs($u,{children:[v.jsx(ju,{to:"/",theme:e,children:v.jsx(Bc,{icon:Zc,size:"lg"})}),v.jsx(Su,{theme:e,children:u("settingsPageTitle")})]}),v.jsxs(zu,{theme:e,children:[v.jsx(Tu,{theme:e,children:u("language")}),v.jsxs(Au,{children:[v.jsx(Pu,{theme:e,children:u("language")}),v.jsx(Nu,{children:d.map(t=>v.jsx(Iu,{active:s===t.code,onClick:()=>c(t.code),theme:e,children:t.name},t.code))})]})]}),v.jsxs(zu,{theme:e,children:[v.jsx(Tu,{theme:e,children:u("theme")}),v.jsxs(Ru,{children:[v.jsxs(Eu,{active:"light"===t,onClick:r,theme:e,children:[v.jsx(Bc,{icon:Yc,size:"lg"}),u("lightTheme")]}),v.jsxs(Eu,{active:"dark"===t,onClick:o,theme:e,children:[v.jsx(Bc,{icon:Uc,size:"lg"}),u("darkTheme")]}),v.jsxs(Eu,{active:"system"===t,onClick:i,theme:e,children:[v.jsx(Bc,{icon:Kc,size:"lg"}),u("systemTheme")]})]}),v.jsxs(Au,{style:{marginTop:"20px"},children:[v.jsx(Pu,{theme:e,children:u("customTheme")}),v.jsxs(Mu,{children:[v.jsxs(Fu,{to:"/settings/theme-editor",theme:e,children:[v.jsx(Bc,{icon:Gc,size:"lg"}),u("editTheme")]}),v.jsx(Lu,{theme:e,children:"custom"===t&&`${u("customTheme")} - ${l.name}`})]})]})]})]})},Wu="custom_theme",Ou={id:"custom",name:"自定义主题",background:"#f5f5f5",surface:"#ffffff",text:"#333333",textSecondary:"#666666",primary:"#4a6cf7",secondary:"#6c757d",success:"#28a745",warning:"#ffc107",error:"#dc3545",info:"#17a2b8",border:"#e0e0e0",gridLine:"#cccccc",gridLineThick:"#999999",highlight:"#e6f0ff"},Du=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`,Hu=Hr.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,Bu=Hr(i)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
    color: white;
    border-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
    transform: translateX(-3px);
  }
`,_u=Hr.h1`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  flex: 1;
`,Yu=Hr.div`
  display: flex;
  gap: 10px;
`,Uu=Hr.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${e=>{var t,r,o,n;switch(e.type){case"primary":return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7";case"danger":return(null==(r=e.theme)?void 0:r.error)||"#ff3b30";case"secondary":return(null==(o=e.theme)?void 0:o.surface)||"#ffffff";default:return(null==(n=e.theme)?void 0:n.surface)||"#ffffff"}}};
  color: ${e=>{var t;return"secondary"===e.type?(null==(t=e.theme)?void 0:t.text)||"#333333":"white"}};
  border: 2px solid ${e=>{var t,r,o,n;switch(e.type){case"primary":return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7";case"danger":return(null==(r=e.theme)?void 0:r.error)||"#ff3b30";case"secondary":return(null==(o=e.theme)?void 0:o.border)||"#e0e0e0";default:return(null==(n=e.theme)?void 0:n.border)||"#e0e0e0"}}};
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Gu=Hr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,Xu=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Ju=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 600px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`,Zu=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Vu=Hr.h2`
  color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.text)||"#333333"}};
  margin: 0;
  font-size: 24px;
`,Ku=Hr.button`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.primary)||"#4a6cf7"}};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
`,Qu=Hr.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.gridLine)||"#e0e0e0"}};
  border-radius: 8px;
  padding: 2px;
  margin: 0 auto 30px;
  width: 300px;
  height: 300px;
`,ef=Hr.div`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: ${e=>{var t,r;return e.isHighlighted?(null==(t=e.previewTheme)?void 0:t.primary)||"#4a6cf7":(null==(r=e.previewTheme)?void 0:r.text)||"#333333"}};
  background-color: ${e=>{var t,r;return e.isHighlighted?(null==(t=e.previewTheme)?void 0:t.highlight)||"#e6f0ff":(null==(r=e.previewTheme)?void 0:r.surface)||"#ffffff"}};
  border: ${e=>{var t;return 0===e.row||3===e.row||6===e.row||8===e.row||2===e.row||5===e.row||0===e.col||3===e.col||6===e.col||8===e.col||2===e.col||5===e.col?`2px solid ${(null==(t=e.previewTheme)?void 0:t.gridLineThick)||"#cccccc"}`:"1px solid transparent"}};
  border-radius: ${e=>0===e.row&&0===e.col?"4px 0 0 0":0===e.row&&8===e.col?"0 4px 0 0":8===e.row&&0===e.col?"0 0 0 4px":8===e.row&&8===e.col?"0 0 4px 0":"0"};
`,tf=Hr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`,rf=Hr.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,of=Hr.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  border: 2px solid ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.border)||"#e0e0e0"}};
`,nf=Hr.span`
  color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.text)||"#333333"}};
  font-size: 14px;
`,af=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,lf=Hr.label`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`,sf=Hr.input`
  padding: 10px;
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  border-radius: 8px;
  font-size: 16px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
    box-shadow: 0 0 0 3px ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)?`${e.theme.primary}22`:"#4a6cf722"}};
  }
`,cf=Hr.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,df=Hr.input`
  width: 60px;
  height: 44px;
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  background: none;
`,uf=Hr.input`
  padding: 12px;
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  border-radius: 8px;
  font-size: 18px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 30px;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
    box-shadow: 0 0 0 3px ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)?`${e.theme.primary}22`:"#4a6cf722"}};
  }
`,ff=Hr.input`
  display: none;
`,hf=()=>{const{theme:t,customTheme:r}=oe(),{t:o}=le();n();const i=e.useRef(null),[a,l]=e.useState({...r});useEffect(()=>{l({...r})},[r]);const s=(e,t)=>{l(r=>({...r,[e]:t}))},d=[{key:"background",label:o("backgroundColor")},{key:"surface",label:o("surfaceColor")},{key:"text",label:o("textColor")},{key:"textSecondary",label:o("textSecondaryColor")},{key:"primary",label:o("primaryColor")},{key:"secondary",label:o("secondaryColor")},{key:"success",label:o("successColor")},{key:"warning",label:o("warningColor")},{key:"error",label:o("errorColor")},{key:"border",label:o("borderColor")},{key:"gridLine",label:o("gridLineColor")},{key:"gridLineThick",label:o("gridLineThickColor")},{key:"highlight",label:o("highlightColor")}];return v.jsxs(Du,{children:[v.jsxs(Hu,{children:[v.jsx(Bu,{to:"/settings",theme:t,children:v.jsx(Bc,{icon:Zc,size:"lg"})}),v.jsx(_u,{theme:t,children:o("themeEditor")}),v.jsxs(Yu,{children:[v.jsxs(Uu,{type:"secondary",onClick:()=>{(async()=>{try{await c.setItem(Wu,Ou)}catch(e){throw console.error("重置自定义主题失败:",e),e}})(),K.info(o("themeReset"),{position:"top-right",autoClose:2e3})},theme:t,children:[v.jsx(Bc,{icon:Vc,size:"lg"}),o("reset")]}),v.jsxs(Uu,{type:"primary",onClick:()=>{(async e=>{try{await c.setItem(Wu,e)}catch(t){throw console.error("更新自定义主题失败:",t),t}})(a),K.success(o("themeSaved"),{position:"top-right",autoClose:2e3})},theme:t,children:[v.jsx(Bc,{icon:_c,size:"lg"}),o("saveChanges")]})]})]}),v.jsxs(Gu,{children:[v.jsxs(Xu,{theme:t,children:[v.jsx(uf,{type:"text",value:a.name||"",onChange:e=>{l(t=>({...t,name:e.target.value}))},placeholder:o("customTheme"),theme:t}),d.map(e=>v.jsxs(af,{children:[v.jsx(lf,{theme:t,children:e.label}),v.jsxs(cf,{children:[v.jsx(sf,{type:"text",value:a[e.key]||"",onChange:t=>s(e.key,t.target.value),placeholder:"#000000",theme:t}),v.jsx(df,{type:"color",value:a[e.key]||"#000000",onChange:t=>s(e.key,t.target.value)})]})]},e.key)),v.jsxs(Yu,{style:{marginTop:"30px"},children:[v.jsxs(Uu,{type:"secondary",onClick:()=>{var e;return null==(e=i.current)?void 0:e.click()},theme:t,children:[v.jsx(Bc,{icon:Jc,size:"lg"}),o("importTheme")]}),v.jsx(ff,{ref:i,type:"file",accept:".json",onChange:async e=>{const t=e.target.files[0];if(t)try{await(async e=>{try{return new Promise((t,r)=>{const o=new FileReader;o.onload=e=>{try{const o=JSON.parse(e.target.result);"object"==typeof o&&null!==o?t(o):r(new Error("无效的主题文件格式"))}catch(o){r(new Error("解析主题文件失败: "+o.message))}},o.onerror=()=>{r(new Error("读取主题文件失败"))},o.readAsText(e)})}catch(t){throw console.error("导入主题失败:",t),t}})(t),K.success(o("themeImported"),{position:"top-right",autoClose:2e3}),e.target.value=""}catch(r){K.error(o("themeImportFailed")+r.message,{position:"top-right",autoClose:3e3})}}}),v.jsxs(Uu,{type:"secondary",onClick:()=>{(e=>{try{const t=JSON.stringify(e,null,2),r=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=`${e.name||"theme"}.json`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(o)}catch(t){throw console.error("导出主题失败:",t),t}})(a),K.info(o("themeExported"),{position:"top-right",autoClose:2e3})},theme:t,children:[v.jsx(Bc,{icon:Xc,size:"lg"}),o("exportTheme")]})]})]}),v.jsxs(Ju,{previewTheme:a,children:[v.jsxs(Zu,{previewTheme:a,children:[v.jsx(Vu,{previewTheme:a,children:o("preview")}),v.jsx(Ku,{previewTheme:a,children:o("preview")})]}),v.jsx(Qu,{previewTheme:a,children:(()=>{const e=[];for(let t=0;t<9;t++)for(let r=0;r<9;r++){const o=4===t&&4===r||0===t&&0===r||8===t&&8===r;e.push(v.jsx(ef,{row:t,col:r,isHighlighted:o,previewTheme:a,children:Math.floor(9*Math.random())+1},`${t}-${r}`))}return e})()}),v.jsxs(tf,{children:[v.jsxs(rf,{previewTheme:a,children:[v.jsx(of,{color:a.primary,previewTheme:a}),v.jsx(nf,{previewTheme:a,children:o("primaryColor")})]}),v.jsxs(rf,{previewTheme:a,children:[v.jsx(of,{color:a.success,previewTheme:a}),v.jsx(nf,{previewTheme:a,children:o("successColor")})]}),v.jsxs(rf,{previewTheme:a,children:[v.jsx(of,{color:a.warning,previewTheme:a}),v.jsx(nf,{previewTheme:a,children:o("warningColor")})]}),v.jsxs(rf,{previewTheme:a,children:[v.jsx(of,{color:a.error,previewTheme:a}),v.jsx(nf,{previewTheme:a,children:o("errorColor")})]})]})]})]})]})};Object.defineProperty(document,"title",{get:function(){return"Sudoku Advanced Techniques - Open Source Sudoku Game | Expert Sudoku Challenges"},set:function(e){console.log("标题修改尝试已阻止")},configurable:!0});const pf=()=>{const e=document.querySelector('meta[property="og:title"]'),t=document.querySelector('meta[name="twitter:title"]');e&&(e.content="SudokuTech - Sudoku Techniques Learning Platform"),t&&(t.content="SudokuTech - Sudoku Techniques Learning Platform")};pf(),window.addEventListener("DOMContentLoaded",pf),window.addEventListener("load",pf);w.createRoot(document.getElementById("root")).render(v.jsxs(o.StrictMode,{children:[v.jsx(re,{children:v.jsx(ae,{children:v.jsx(ce,{children:v.jsx(yo,{children:v.jsx(Ko,{children:v.jsx(a,{children:v.jsx(go,{children:v.jsxs(l,{children:[v.jsx(s,{path:"/",element:v.jsx(Qc,{})}),v.jsx(s,{path:"/home",element:v.jsx(kn,{})}),v.jsx(s,{path:"/game",element:v.jsx(Qc,{})}),v.jsx(s,{path:"/techniques",element:v.jsx(vd,{})}),v.jsx(s,{path:"/progress",element:v.jsx(Xd,{})}),v.jsx(s,{path:"/stats",element:v.jsx(Cu,{})}),v.jsx(s,{path:"/settings",element:v.jsx(qu,{})}),v.jsx(s,{path:"/settings/theme-editor",element:v.jsx(hf,{})})]})})})})})})})}),v.jsx(H,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(e=>{console.log("ServiceWorker 注册成功:",e.scope),e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{"installed"===t.state&&navigator.serviceWorker.controller&&(console.log("发现新版本，提示用户刷新"),function(){if(document.getElementById("update-notification"))return void console.log("更新通知已存在，不再创建");const e=localStorage.getItem("language")||"en",t={en:{updateAvailable:"New version available!",updateNow:"Update Now"},zh:{updateAvailable:"网站有新版本可用！",updateNow:"立即更新"}},r=document.createElement("div");r.id="update-notification",r.style.cssText="\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    background-color: #4a6fa5;\n    color: white;\n    padding: 15px 20px;\n    border-radius: 8px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n    z-index: 9999;\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    font-size: 14px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n  ",r.innerHTML=`\n    <span>${t[e].updateAvailable}</span>\n    <button id="refreshBtn" style="background: white; color: #4a6fa5; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: bold;">\n      ${t[e].updateNow}\n    </button>\n  `,document.body.appendChild(r),r.querySelector("button").onclick=function(){r.parentNode===document.body&&document.body.removeChild(r),setTimeout(()=>{window.location.reload()},10)},setTimeout(()=>{document.body.contains(r)&&(document.body.removeChild(r),console.log("更新通知已自动移除"))},3e4)}())})})}).catch(e=>{console.log("ServiceWorker 注册失败:",e)})});
