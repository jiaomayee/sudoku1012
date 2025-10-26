import{r as e,a as r,R as o,L as n,u as i,B as a,b as l,d as s}from"./react-vendor-ce3df769.js";import{l as c}from"./utils-b9091abe.js";import{a as d}from"./axios-8e1cd5bd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var u={exports:{}},f={},p=e,h=Symbol.for("react.element"),m=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,x=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function b(e,t,r){var o,n={},i=null,a=null;for(o in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)g.call(t,o)&&!y.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===n[o]&&(n[o]=t[o]);return{$$typeof:h,type:e,key:i,ref:a,props:n,_owner:x.current}}f.Fragment=m,f.jsx=b,f.jsxs=b,u.exports=f;var v=u.exports,w={},C=r;function k(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=k(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function j(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=k(e))&&(o&&(o+=" "),o+=t);return o}w.createRoot=C.createRoot,w.hydrateRoot=C.hydrateRoot;const S=e=>"number"==typeof e&&!isNaN(e),$=e=>"string"==typeof e,z=e=>"function"==typeof e,T=e=>$(e)||z(e)?e:null,P=t=>e.isValidElement(t)||$(t)||z(t)||S(t);function A(t){let{enter:r,exit:n,appendPosition:i=!1,collapse:a=!0,collapseDuration:l=300}=t;return function(t){let{children:s,position:c,preventExitTransition:d,done:u,nodeRef:f,isIn:p}=t;const h=i?`${r}--${c}`:r,m=i?`${n}--${c}`:n,g=e.useRef(0);return e.useLayoutEffect(()=>{const e=f.current,t=h.split(" "),r=o=>{o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===g.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)},[]),e.useEffect(()=>{const e=f.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,r){void 0===r&&(r=300);const{scrollHeight:o,style:n}=e;requestAnimationFrame(()=>{n.minHeight="initial",n.height=o+"px",n.transition=`all ${r}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(t,r)})})}(e,u,l):u()};p||(d?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))},[p]),o.createElement(o.Fragment,null,s)}}function N(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const I={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const r=this.list.get(e).filter(e=>e!==t);return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const r=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(r)})}},E=e=>{let{theme:t,type:r,...n}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${r})`,...n})},R={info:function(e){return o.createElement(E,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(E,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(E,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(E,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function O(e){let{closeToast:t,theme:r,ariaLabel:n="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":n},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function F(e){let{delay:t,isRunning:r,closeToast:n,type:i="default",hide:a,className:l,style:s,controlledProgress:c,progress:d,rtl:u,isIn:f,theme:p}=e;const h=a||c&&0===d,m={...s,animationDuration:`${t}ms`,animationPlayState:r?"running":"paused",opacity:h?0:1};c&&(m.transform=`scaleX(${d})`);const g=j("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),x=z(l)?l({rtl:u,type:i,defaultClassName:g}):j(g,l);return o.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:x,style:m,[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]:c&&d<1?null:()=>{f&&n()}})}const D=t=>{const{isRunning:r,preventExitTransition:n,toastRef:i,eventHandlers:a}=function(t){const[r,o]=e.useState(!1),[n,i]=e.useState(!1),a=e.useRef(null),l=e.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=e.useRef(t),{autoClose:c,pauseOnHover:d,closeToast:u,onClick:f,closeOnClick:p}=t;function h(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",b),document.addEventListener("touchmove",y),document.addEventListener("touchend",b);const r=a.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=r.getBoundingClientRect(),r.style.transition="",l.x=M(e.nativeEvent),l.y=L(e.nativeEvent),"x"===t.draggableDirection?(l.start=l.x,l.removalDistance=r.offsetWidth*(t.draggablePercent/100)):(l.start=l.y,l.removalDistance=r.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function m(e){if(l.boundingRect){const{top:r,bottom:o,left:n,right:i}=l.boundingRect;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&l.x>=n&&l.x<=i&&l.y>=r&&l.y<=o?x():g()}}function g(){o(!0)}function x(){o(!1)}function y(e){const o=a.current;l.canDrag&&o&&(l.didMove=!0,r&&x(),l.x=M(e),l.y=L(e),l.delta="x"===t.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),o.style.transform=`translate${t.draggableDirection}(${l.delta}px)`,o.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function b(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",b);const e=a.current;if(l.canDrag&&l.didMove&&e){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return i(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform=`translate${t.draggableDirection}(0)`,e.style.opacity="1"}}e.useEffect(()=>{s.current=t}),e.useEffect(()=>(a.current&&a.current.addEventListener("d",g,{once:!0}),z(t.onOpen)&&t.onOpen(e.isValidElement(t.children)&&t.children.props),()=>{const t=s.current;z(t.onClose)&&t.onClose(e.isValidElement(t.children)&&t.children.props)}),[]),e.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",g),window.addEventListener("blur",x)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",g),window.removeEventListener("blur",x))}),[t.pauseOnFocusLoss]);const v={onMouseDown:h,onTouchStart:h,onMouseUp:m,onTouchEnd:m};return c&&d&&(v.onMouseEnter=x,v.onMouseLeave=g),p&&(v.onClick=e=>{f&&f(e),l.canCloseOnClick&&u()}),{playToast:g,pauseToast:x,isRunning:r,preventExitTransition:n,toastRef:a,eventHandlers:v}}(t),{closeButton:l,children:s,autoClose:c,onClick:d,type:u,hideProgressBar:f,closeToast:p,transition:h,position:m,className:g,style:x,bodyClassName:y,bodyStyle:b,progressClassName:v,progressStyle:w,updateId:C,role:k,progress:S,rtl:$,toastId:T,deleteToast:P,isIn:A,isLoading:N,iconOut:I,closeOnClick:E,theme:R}=t,D=j("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":$},{"Toastify__toast--close-on-click":E}),H=z(g)?g({rtl:$,position:m,type:u,defaultClassName:D}):j(D,g),B=!!S||!c,q={closeToast:p,type:u,theme:R};let _=null;return!1===l||(_=z(l)?l(q):e.isValidElement(l)?e.cloneElement(l,q):O(q)),o.createElement(h,{isIn:A,done:P,position:m,preventExitTransition:n,nodeRef:i},o.createElement("div",{id:T,onClick:d,className:H,...a,style:x,ref:i},o.createElement("div",{...A&&{role:k},className:z(y)?y({type:u}):j("Toastify__toast-body",y),style:b},null!=I&&o.createElement("div",{className:j("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},I),o.createElement("div",null,s)),_,o.createElement(F,{...C&&!B?{key:`pb-${C}`}:{},rtl:$,theme:R,delay:c,isRunning:r,isIn:A,closeToast:p,hide:f,type:u,style:w,className:v,controlledProgress:B,progress:S||0})))},H=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},B=A(H("bounce",!0));A(H("slide",!0)),A(H("zoom")),A(H("flip"));const q=e.forwardRef((t,r)=>{const{getToastToRender:n,containerRef:i,isToastActive:a}=function(t){const[,r]=e.useReducer(e=>e+1,0),[o,n]=e.useState([]),i=e.useRef(null),a=e.useRef(new Map).current,l=e=>-1!==o.indexOf(e),s=e.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:l,getToast:e=>a.get(e)}).current;function c(e){let{containerId:t}=e;const{limit:r}=s.props;!r||t&&s.containerId!==t||(s.count-=s.queue.length,s.queue=[])}function d(e){n(t=>null==e?[]:t.filter(t=>t!==e))}function u(){const{toastContent:e,toastProps:t,staleId:r}=s.queue.shift();p(e,t,r)}function f(t,o){let{delay:n,staleId:l,...c}=o;if(!P(t)||(f=c,!i.current||s.props.enableMultiContainer&&f.containerId!==s.props.containerId||a.has(f.toastId)&&null==f.updateId))return;var f;const{toastId:h,updateId:m,data:g}=c,{props:x}=s,y=()=>d(h),b=null==m;b&&s.count++;const v={...x,style:x.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(c).filter(e=>{let[t,r]=e;return null!=r})),toastId:h,updateId:m,data:g,closeToast:y,isIn:!1,className:T(c.className||x.toastClassName),bodyClassName:T(c.bodyClassName||x.bodyClassName),progressClassName:T(c.progressClassName||x.progressClassName),autoClose:!c.isLoading&&(w=c.autoClose,C=x.autoClose,!1===w||S(w)&&w>0?w:C),deleteToast(){const e=N(a.get(h),"removed");a.delete(h),I.emit(4,e);const t=s.queue.length;if(s.count=null==h?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),t>0){const e=null==h?s.props.limit:1;if(1===t||1===e)s.displayedToast++,u();else{const r=e>t?t:e;s.displayedToast=r;for(let e=0;e<r;e++)u()}}else r()}};var w,C;v.iconOut=function(t){let{theme:r,type:o,isLoading:n,icon:i}=t,a=null;const l={theme:r,type:o};return!1===i||(z(i)?a=i(l):e.isValidElement(i)?a=e.cloneElement(i,l):$(i)||S(i)?a=i:n?a=R.spinner():o in R&&(a=R[o](l))),a}(v),z(c.onOpen)&&(v.onOpen=c.onOpen),z(c.onClose)&&(v.onClose=c.onClose),v.closeButton=x.closeButton,!1===c.closeButton||P(c.closeButton)?v.closeButton=c.closeButton:!0===c.closeButton&&(v.closeButton=!P(x.closeButton)||x.closeButton);let k=t;e.isValidElement(t)&&!$(t.type)?k=e.cloneElement(t,{closeToast:y,toastProps:v,data:g}):z(t)&&(k=t({closeToast:y,toastProps:v,data:g})),x.limit&&x.limit>0&&s.count>x.limit&&b?s.queue.push({toastContent:k,toastProps:v,staleId:l}):S(n)?setTimeout(()=>{p(k,v,l)},n):p(k,v,l)}function p(e,t,r){const{toastId:o}=t;r&&a.delete(r);const i={content:e,props:t};a.set(o,i),n(e=>[...e,o].filter(e=>e!==r)),I.emit(4,N(i,null==i.props.updateId?"added":"updated"))}return e.useEffect(()=>(s.containerId=t.containerId,I.cancelEmit(3).on(0,f).on(1,e=>i.current&&d(e)).on(5,c).emit(2,s),()=>{a.clear(),I.emit(3,s)}),[]),e.useEffect(()=>{s.props=t,s.isToastActive=l,s.displayedToast=o.length}),{getToastToRender:function(e){const r=new Map,o=Array.from(a.values());return t.newestOnTop&&o.reverse(),o.forEach(e=>{const{position:t}=e.props;r.has(t)||r.set(t,[]),r.get(t).push(e)}),Array.from(r,t=>e(t[0],t[1]))},containerRef:i,isToastActive:l}}(t),{className:l,style:s,rtl:c,containerId:d}=t;function u(e){const t=j("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":c});return z(l)?l({position:e,rtl:c,defaultClassName:t}):j(t,T(l))}return e.useEffect(()=>{r&&(r.current=i.current)},[]),o.createElement("div",{ref:i,className:"Toastify",id:d},n((e,t)=>{const r=t.length?{...s}:{...s,pointerEvents:"none"};return o.createElement("div",{className:u(e),style:r,key:`container-${e}`},t.map((e,r)=>{let{content:n,props:i}=e;return o.createElement(D,{...i,isIn:a(i.toastId),style:{...i.style,"--nth":r+1,"--len":t.length},key:`toast-${i.key}`},n)}))}))});q.displayName="ToastContainer",q.defaultProps={position:"top-right",transition:B,autoClose:5e3,closeButton:O,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let _,W=new Map,U=[],G=1;function Y(){return""+G++}function J(e){return e&&($(e.toastId)||S(e.toastId))?e.toastId:Y()}function V(e,t){return W.size>0?I.emit(0,e,t):U.push({content:e,options:t}),t.toastId}function X(e,t){return{...t,type:t&&t.type||e,toastId:J(t)}}function K(e){return(t,r)=>V(t,X(e,r))}function Q(e,t){return V(e,X("default",t))}Q.loading=(e,t)=>V(e,X("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Q.promise=function(e,t,r){let o,{pending:n,error:i,success:a}=t;n&&(o=$(n)?Q.loading(n,r):Q.loading(n.render,{...r,...n}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(null==t)return void Q.dismiss(o);const i={type:e,...l,...r,data:n},a=$(t)?{render:t}:t;return o?Q.update(o,{...i,...a}):Q(a.render,{...i,...a}),n},c=z(e)?e():e;return c.then(e=>s("success",a,e)).catch(e=>s("error",i,e)),c},Q.success=K("success"),Q.info=K("info"),Q.error=K("error"),Q.warning=K("warning"),Q.warn=Q.warning,Q.dark=(e,t)=>V(e,X("default",{theme:"dark",...t})),Q.dismiss=e=>{W.size>0?I.emit(1,e):U=U.filter(t=>null!=e&&t.options.toastId!==e)},Q.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},Q.isActive=e=>{let t=!1;return W.forEach(r=>{r.isToastActive&&r.isToastActive(e)&&(t=!0)}),t},Q.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{const r=function(e,t){let{containerId:r}=t;const o=W.get(r||_);return o&&o.getToast(e)}(e,t);if(r){const{props:o,content:n}=r,i={delay:100,...o,...t,toastId:t.toastId||e,updateId:Y()};i.toastId!==e&&(i.staleId=e);const a=i.render||n;delete i.render,V(a,i)}},0)},Q.done=e=>{Q.update(e,{progress:1})},Q.onChange=e=>(I.on(4,e),()=>{I.off(4,e)}),Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,e=>{_=e.containerId||e,W.set(_,e),U.forEach(e=>{I.emit(0,e.content,e.options)}),U=[]}).on(3,e=>{W.delete(e.containerId||e),0===W.size&&I.off(0).off(1).off(5)});const Z=e.createContext(),ee={light:{background:"#f5f5f5",surface:"#ffffff",text:"#333333",textSecondary:"#666666",primary:"#4a6cf7",secondary:"#f5a623",success:"#4cd964",warning:"#ffcc00",error:"#ff3b30",disabled:"#cccccc",border:"#e0e0e0",gridLine:"#e0e0e0",gridLineThick:"#cccccc",highlight:"#e6f0ff",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}},dark:{background:"#121212",surface:"#1e1e1e",text:"#f5f5f5",textSecondary:"#b0b0b0",primary:"#6482f7",secondary:"#ffb74d",success:"#66df80",warning:"#ffe066",error:"#ff5757",disabled:"#666666",border:"#333333",gridLine:"#333333",gridLineThick:"#444444",highlight:"#1a237e",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}}},te=()=>({...ee.light,name:"自定义主题"}),re=({children:t})=>{const[r,o]=e.useState(localStorage.getItem("themeMode")||"light"),[n,i]=e.useState(()=>{const e=localStorage.getItem("customTheme");return e?JSON.parse(e):te()}),[a,l]=e.useState(()=>"custom"===r?n:ee["system"===r?"light":r]);e.useEffect(()=>{let e;if("custom"===r)e=n;else if("system"===r){const t=window.matchMedia("(prefers-color-scheme: dark)").matches;e=ee[t?"dark":"light"]}else e=ee[r];l(e)},[r,n]);const s=e=>{const t={...e,name:e.name||"自定义主题"};i(t),localStorage.setItem("customTheme",JSON.stringify(t)),"custom"===r&&l(t)};e.useEffect(()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{if("system"===r){const t=e.matches;l(ee[t?"dark":"light"])}};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[r]);const c={theme:a,themeMode:r,customTheme:n,toggleTheme:()=>{const e="light"===r?"dark":"light";o(e),localStorage.setItem("themeMode",e)},setLightTheme:()=>{o("light"),localStorage.setItem("themeMode","light")},setDarkTheme:()=>{o("dark"),localStorage.setItem("themeMode","dark")},setSystemTheme:()=>{o("system"),localStorage.setItem("themeMode","system")},setCustomThemeMode:()=>{o("custom"),localStorage.setItem("themeMode","custom")},updateCustomTheme:s,resetCustomTheme:()=>{const e=te();i(e),localStorage.setItem("customTheme",JSON.stringify(e))},exportTheme:(e=n)=>{const t=JSON.stringify(e,null,2),r=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(r),i=document.createElement("a");i.href=o,i.download=`${e.name||"sudoku-theme"}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(o)},importTheme:e=>new Promise((t,r)=>{const o=new FileReader;o.onload=e=>{try{const o=JSON.parse(e.target.result);o&&"object"==typeof o?(s(o),t(o)):r(new Error("无效的主题文件格式"))}catch(o){r(o)}},o.onerror=r,o.readAsText(e)})};return v.jsx(Z.Provider,{value:c,children:t})},oe=()=>{const t=e.useContext(Z);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},ne={"zh-CN":{home:"首页",game:"游戏",techniques:"技巧",loading:"加载中...",generatingNewPuzzle:"生成新谜题...",loadingGame:"加载游戏...",gamePaused:"游戏已暂停",clickToResume:"点击任意位置继续",progress:"进度",statistics:"统计",settings:"设置",ok:"确定",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",back:"返回",yes:"是",no:"否",newGame:"新建游戏",pauseTimer:"暂停计时",resume:"继续",gameCompleted:"游戏已完成",hint:"技巧提示",notes:"候选数",selectDifficulty:"选择难度",difficultyDescription:{easy:"初学者友好，空格较少",medium:"进阶挑战，需要一定技巧",hard:"专家级别，逻辑推理",expert:"极高难度，需要高级技巧"},startGame:"开始游戏",startNewGame:"开始新游戏",clearAllProgress:"清空所有进度",allProgress:"全部进度",inProgress:"进行中",completed:"已完成",paused:"已暂停",sudokuGame:"数独游戏",difficulty:"难度",startTime:"开始时间",lastUpdated:"最后更新",completionProgress:"完成进度",continueGame:"继续游戏",deleteProgress:"删除进度",noProgress:"暂无游戏进度",noFilteredProgress:"没有符合筛选条件的游戏进度",noStartedGames:"您还没有开始任何数独游戏",confirmClearAllProgress:"确认清空所有进度",confirmDeleteProgress:"确认删除进度",clearAllProgressWarning:"此操作将删除所有游戏进度，且无法恢复。确定要继续吗？",deleteProgressWarning:"此操作将删除选中的游戏进度，且无法恢复。确定要继续吗？",confirmDelete:"确认删除",settingsPageTitle:"设置",language:"语言",theme:"主题",lightTheme:"浅色主题",darkTheme:"深色主题",systemTheme:"跟随系统",customTheme:"自定义主题",editTheme:"编辑主题",saveChanges:"保存更改",themeSelection:"主题选择",gameSettings:"游戏设置",soundEffects:"音效",autoCheck:"自动检查",showHints:"显示提示",themeEditor:"主题编辑器",backgroundColor:"背景颜色",surfaceColor:"表面颜色",textColor:"文字颜色",textSecondaryColor:"次要文字颜色",primaryColor:"主色调",secondaryColor:"次色调",successColor:"成功颜色",warningColor:"警告颜色",errorColor:"错误颜色",borderColor:"边框颜色",gridLineColor:"网格线颜色",gridLineThickColor:"粗网格线颜色",highlightColor:"高亮颜色",preview:"预览",reset:"重置",exportTheme:"导出主题",importTheme:"导入主题",confirm:"确认",continue:"继续",complete:"完成",start:"开始",pause:"暂停",time:"时间",easy:"简单",medium:"中等",hard:"困难",expert:"专家",loadGameFailed:"加载游戏失败，请稍后重试",deleteProgressFailed:"删除进度失败，请稍后重试",clearProgressFailed:"清空进度失败，请稍后重试",startPractice:"开始练习{techniqueName}技巧！",aboutUs:"关于我们",help:"使用帮助",sudokuRules:"数独规则",contactUs:"联系我们",copyright:"版权所有",version:"版本",appName:"数独学习应用",enterPencilMode:"进入铅笔模式，可以添加候选数字",exitPencilMode:"退出铅笔模式，返回正常输入",notesCalculated:"已为所有空白格子计算并填充候选数",foundRandomTechnique:"随机发现技巧：",findSingleCandidateCell:"查找唯一候选数的单元格",cellOnlyHasSingleCandidate:"单元格{position}只有唯一候选数{value}",fillNumber:"填入数字{value}",findHiddenSingleInRegion:"在{regionType}{regionNum}中查找隐藏的唯一数字",numberOnlyInPosition:"数字{value}在{regionType}{regionNum}中只能出现在{position}",row:"行",col:"列",box:"宫",multipleCells:"多单元格",error:"错误",singleCandidateTechnique:"候选数唯一法",nakedSingle:"唯一数法",hiddenSingleRow:"隐性唯一数法(行)",hiddenSingleCol:"隐性唯一数法(列)",hiddenSingleBox:"隐性唯一数法(宫)",nakedPairsRow:"显性数对法(行)",nakedPairsCol:"显性数对法(列)",nakedPairsBox:"显性数对法(宫)",hiddenPairsRow:"隐性数对法(行)",hiddenPairsCol:"隐性数对法(列)",hiddenPairsBox:"隐性数对法(宫)",nakedTripleRow:"显性三链数法(行)",nakedTripleCol:"显性三链数法(列)",nakedTripleBox:"显性三链数法(宫)",hiddenTripleRow:"隐性三链数法(行)",hiddenTripleCol:"隐性三链数法(列)",hiddenTripleBox:"隐性三链数法(宫)",unknownTechnique:"未知技巧",rowSuffix:"(行)",colSuffix:"(列)",boxSuffix:"(宫)",nakedPair:"显性数对法",nakedPairRow:"行显性数对",nakedPairCol:"列显性数对",nakedPairBox:"宫显性数对",hiddenPair:"隐性数对法",hiddenPairRow:"行隐性数对",hiddenPairCol:"列隐性数对",hiddenPairBox:"宫隐性数对",nakedTriple:"显性三链数法",hiddenTriple:"隐性三链数法",nakedSingleTechnique:"唯一候选数",singleCandidateTechnique:"候选数唯一",nakedPairTechnique:"显性数对",hiddenPairTechnique:"隐性数对",nakedTripleTechnique:"显性三链数",hiddenTripleTechnique:"隐性三链数",pointingPairsTechnique:"指向对",boxLineReductionTechnique:"宫行列排除",keyboardTab:"键盘",techniquesTab:"技巧",solutionTab:"解题",pencilMode:"铅笔模式",undoAction:"撤销",clearCell:"清空单元格",fillCandidates:"刷新候选数",applyTechnique:"应用",nextStep:"下一步",apply:"应用",solutionSteps:"解题步骤",selectTechniqueFirst:"请先从技巧列表中选择一个技巧",noTechniquesAvailable:"没有可用的技巧",refreshCandidatesTooltip:"点击刷新候选数并加载所有技巧求解",candidatesTab:"候选数",hintsTab:"提示",solveStep:"解题一步",solveAll:"全部解题",relatedPosition:"相关位置: {position}",relatedNumber:"涉及数字: {number}",analysisCompleted:"分析完成",findPairInRegion:"在{regionType}{regionNum}中查找数对",foundNakedPair:"发现数字{numbers}的显性数对，位于单元格{cells}",removeCandidatesFromTargets:"这些数字只能出现在这两个单元格中，需要从目标单元格{targets}中删除候选数{numbers}",findHiddenPairInRegion:"在{regionType}{regionNum}中查找只能出现在两个单元格中的数字对",foundNumbersOnlyInCells:"发现数字{numbers}只能出现在单元格{cells}",removeOtherCandidates:"目标单元格{cells}中只能填入数字{numbers}，需要移除其他候选数",findTripleInRegion:"在{regionType}{regionNum}中查找三链数",foundNakedTriple:"发现数字{numbers}的显性三链数，位于单元格{cells}",findPointingPairsInBox:"在第{boxNum}宫，数字{number}只能出现在第{lineNum}{lineType}",removePointingPairsFromTargets:"从第{lineNum}{lineType}的目标单元格{targets}中移除候选数{number}",findBoxLineReductionInLine:"在第{lineNum}{lineType}，数字{number}只能出现在第{boxNum}宫",removeBoxLineReductionFromTargets:"从第{boxNum}宫的目标单元格{targets}中移除候选数{number}",findHiddenTripleInRegion:"在{regionType}{regionNum}中查找只能出现在三个单元格中的数字组"},"en-US":{home:"Home",game:"Game",techniques:"Techniques",loading:"Loading...",generatingNewPuzzle:"Generating new puzzle...",loadingGame:"Loading game...",gamePaused:"Game Paused",clickToResume:"Click anywhere to resume",progress:"Progress",statistics:"Statistics",settings:"Settings",ok:"OK",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",back:"Back",yes:"Yes",no:"No",newGame:"New Game",pauseTimer:"Pause Timer",resume:"Resume",gameCompleted:"Game Completed",hint:"Hint",notes:"Notes",pairTechniqueIdentified:"Pair technique identified, please manually remove the related candidates",techniqueOnlyForHint:"This technique is primarily for hinting and does not support automatic application",foundRandomTechnique:"Random technique found: ",selectDifficulty:"Select Difficulty",difficultyDescription:{easy:"Beginner friendly, fewer empty cells",medium:"Moderate challenge, requires some techniques",hard:"Expert level, logical reasoning required",expert:"Extremely difficult, advanced techniques needed"},startGame:"Start Game",startNewGame:"Start New Game",clearAllProgress:"Clear All Progress",allProgress:"All Progress",inProgress:"In Progress",completed:"Completed",paused:"Paused",sudokuGame:"Sudoku Game",difficulty:"Difficulty",startTime:"Start Time",lastUpdated:"Last Updated",completionProgress:"Completion Progress",continueGame:"Continue Game",deleteProgress:"Delete Progress",noProgress:"No Game Progress",noFilteredProgress:"No game progress matches the filter criteria",noStartedGames:"You haven't started any Sudoku games yet",confirmClearAllProgress:"Confirm Clear All Progress",confirmDeleteProgress:"Confirm Delete Progress",clearAllProgressWarning:"This action will delete all game progress and cannot be undone. Are you sure you want to continue?",deleteProgressWarning:"This action will delete the selected game progress and cannot be undone. Are you sure you want to continue?",confirmDelete:"Confirm Delete",settingsPageTitle:"Settings",language:"Language",theme:"Theme",lightTheme:"Light Theme",darkTheme:"Dark Theme",systemTheme:"System Theme",customTheme:"Custom Theme",editTheme:"Edit Theme",saveChanges:"Save Changes",themeSelection:"Theme Selection",gameSettings:"Game Settings",soundEffects:"Sound Effects",autoCheck:"Auto Check",showHints:"Show Hints",themeEditor:"Theme Editor",backgroundColor:"Background Color",surfaceColor:"Surface Color",textColor:"Text Color",textSecondaryColor:"Secondary Text Color",primaryColor:"Primary Color",secondaryColor:"Secondary Color",successColor:"Success Color",warningColor:"Warning Color",errorColor:"Error Color",borderColor:"Border Color",gridLineColor:"Grid Line Color",gridLineThickColor:"Thick Grid Line Color",highlightColor:"Highlight Color",preview:"Preview",reset:"Reset",exportTheme:"Export Theme",importTheme:"Import Theme",confirm:"Confirm",continue:"Continue",complete:"Complete",start:"Start",pause:"Pause",time:"Time",easy:"Easy",medium:"Medium",hard:"Hard",expert:"Expert",loadGameFailed:"Failed to load game, please try again later",deleteProgressFailed:"Failed to delete progress, please try again later",clearProgressFailed:"Failed to clear progress, please try again later",startPractice:"Start practicing {techniqueName}!",aboutUs:"About Us",help:"Help",sudokuRules:"Sudoku Rules",contactUs:"Contact Us",copyright:"All Rights Reserved",version:"Version",appName:"Sudoku Learning App",enterPencilMode:"Enter pencil mode, you can add candidate numbers",exitPencilMode:"Exit pencil mode, return to normal input",notesCalculated:"Candidate numbers have been calculated and filled for all empty cells",findSingleCandidateCell:"Find cells with a single candidate number",cellOnlyHasSingleCandidate:"Cell {position} has only one candidate: {value}",fillNumber:"Fill in number {value}",findHiddenSingleInRegion:"Find hidden single number in {regionType} {regionNum}",numberOnlyInPosition:"Number {value} can only appear at {position} in {regionType} {regionNum}",row:"Row",col:"Column",box:"Box",multipleCells:"Multiple cells",error:"Mistake",singleCandidateTechnique:"Single Candidate Technique",nakedSingle:"Naked Single",hiddenSingleRow:"Hidden Single (Row)",hiddenSingleCol:"Hidden Single (Column)",hiddenSingleBox:"Hidden Single (Box)",nakedPairsRow:"Naked Pairs (Row)",nakedPairsCol:"Naked Pairs (Column)",nakedPairsBox:"Naked Pairs (Box)",hiddenPairsRow:"Hidden Pairs (Row)",hiddenPairsCol:"Hidden Pairs (Column)",hiddenPairsBox:"Hidden Pairs (Box)",nakedTripleRow:"Naked Triple (Row)",nakedTripleCol:"Naked Triple (Column)",nakedTripleBox:"Naked Triple (Box)",hiddenTripleRow:"Hidden Triple (Row)",hiddenTripleCol:"Hidden Triple (Column)",hiddenTripleBox:"Hidden Triple (Box)",unknownTechnique:"Unknown Technique",rowSuffix:"(Row)",colSuffix:"(Column)",boxSuffix:"(Box)",nakedPair:"Naked Pairs",nakedPairRow:"Naked Pairs (Row)",nakedPairCol:"Naked Pairs (Column)",nakedPairBox:"Naked Pairs (Box)",hiddenPair:"Hidden Pairs",hiddenPairRow:"Hidden Pairs (Row)",hiddenPairCol:"Hidden Pairs (Column)",hiddenPairBox:"Hidden Pairs (Box)",nakedTriple:"Naked Triple",hiddenTriple:"Hidden Triple",keyboardTab:"Keyboard",techniquesTab:"Techniques",solutionTab:"Solution",pencilMode:"Pencil Mode",undoAction:"Undo",clearCell:"Clear Cell",fillCandidates:"Refresh Candidates",applyTechnique:"Apply",nextStep:"Next",apply:"Apply",solutionSteps:"Solution Steps",selectTechniqueFirst:"Please select a technique from the list first",noTechniquesAvailable:"No techniques available for the current board",refreshCandidatesTooltip:"Click to refresh candidates and load all solving techniques",candidatesTab:"Candidates",hintsTab:"Hints",solveStep:"Solve Step",solveAll:"Solve All",relatedPosition:"Related Position: {position}",relatedNumber:"Involving Number: {number}",relatedCells:"Related Cells",pairTechniqueIdentified:"Pair technique identified, please manually remove the related candidates",techniqueOnlyForHint:"This technique is primarily for hinting and does not support automatic application",techniqueApplyFailed:"Failed to apply technique, please try again",candidatesRemovedSuccess:"Candidates successfully removed",candidateErrorDetected:"Candidate pruning error detected, refreshing data",candidatesComplete:"Candidates are correct and complete, calculating techniques directly!",candidatesFilled:"Calculated and filled candidates for all empty cells!",emptyCandidateCellsFound:"Found empty cells without candidates, recalculating candidates...",analysisCompleted:"Analysis Completed",findPairInRegion:"Find pair in {regionType} {regionNum}",foundNakedPair:"Found naked pair of numbers {numbers} in cells {cells}",removeCandidatesFromTargets:"These numbers can only appear in these two cells, remove candidates {numbers} from target cells {targets}",findHiddenPairInRegion:"Find number pairs that can only appear in two cells in {regionType} {regionNum}",foundNumbersOnlyInCells:"Numbers {numbers} can only appear in cells {cells}",removeOtherCandidates:"Target cells {cells} can only contain numbers {numbers}, remove other candidates",findTripleInRegion:"Find triple in {regionType} {regionNum}",foundNakedTriple:"Found naked triple of numbers {numbers} in cells {cells}",findPointingPairsInBox:"In box {boxNum}, number {number} can only appear in {lineType} {lineNum}",removePointingPairsFromTargets:"Remove candidate {number} from target cells {targets} in {lineType} {lineNum}",findBoxLineReductionInLine:"In {lineType} {lineNum}, number {number} can only appear in box {boxNum}",removeBoxLineReductionFromTargets:"Remove candidate {number} from target cells {targets} in box {boxNum}",nakedSingleTechnique:"Naked Single",singleCandidateTechnique:"Single Candidate",nakedPairTechnique:"Naked Pair",hiddenPairTechnique:"Hidden Pair",nakedTripleTechnique:"Naked Triple",hiddenTripleTechnique:"Hidden Triple",pointingPairsTechnique:"Pointing Pairs",boxLineReductionTechnique:"Box-Line Reduction",findHiddenTripleInRegion:"Find number groups that can only appear in three cells in {regionType} {regionNum}"}},ie=e.createContext(),ae=({children:t})=>{const[r,o]=e.useState(()=>{const e=localStorage.getItem("language");if(e)return e;const t=navigator.language||navigator.userLanguage;return t&&t.includes("zh")?"zh-CN":"en-US"}),n={language:r,t:(e,t={})=>{if(!e)return e;const o=e.split(".");let n=ne[r];for(const r of o){if(!n||"object"!=typeof n)return e;n=n[r]}return void 0===n?e:"string"==typeof n&&Object.keys(t).length>0?n.replace(/\{([^}]+)\}/g,(e,r)=>void 0!==t[r]?t[r]:e):n},changeLanguage:e=>{o(e),localStorage.setItem("language",e)},availableLanguages:[{code:"zh-CN",name:"中文简体"},{code:"en-US",name:"English"}]};return v.jsx(ie.Provider,{value:n,children:t})},le=()=>{const t=e.useContext(ie);if(!t)throw new Error("useLanguage must be used within a LanguageProvider");return t},se=e.createContext(),ce=({children:t})=>{const{t:r}=le(),[o,n]=e.useState(!1),[i,a]=e.useState(""),[l,s]=e.useState(0);e.useEffect(()=>{""===i&&a(r("loading"))},[r]);const c=e=>{s(e=>e+1),a(e||r("loading")),n(!0)},d=()=>{s(e=>{const t=Math.max(0,e-1);return 0===t&&n(!1),t})},u={isLoading:o,loadingMessage:i,loadingCount:l,startLoading:c,stopLoading:d,resetLoading:()=>{s(0),n(!1),a(r("loading"))},executeWithLoading:async(e,t="加载中...")=>{try{c(t);return await e()}catch(r){throw r}finally{d()}}};return v.jsx(se.Provider,{value:u,children:t})},de=()=>{const t=e.useContext(se);if(!t)throw new Error("useLoading must be used within a LoadingProvider");return t};var ue=function(){return ue=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},ue.apply(this,arguments)};function fe(e,t,r){if(r||2===arguments.length)for(var o,n=0,i=t.length;n<i;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var pe="-ms-",he="-moz-",me="-webkit-",ge="comm",xe="rule",ye="decl",be="@keyframes",ve=Math.abs,we=String.fromCharCode,Ce=Object.assign;function ke(e){return e.trim()}function je(e,t){return(e=t.exec(e))?e[0]:e}function Se(e,t,r){return e.replace(t,r)}function $e(e,t,r){return e.indexOf(t,r)}function ze(e,t){return 0|e.charCodeAt(t)}function Te(e,t,r){return e.slice(t,r)}function Pe(e){return e.length}function Ae(e){return e.length}function Ne(e,t){return t.push(e),e}function Ie(e,t){return e.filter(function(e){return!je(e,t)})}var Ee=1,Re=1,Me=0,Le=0,Oe=0,Fe="";function De(e,t,r,o,n,i,a,l){return{value:e,root:t,parent:r,type:o,props:n,children:i,line:Ee,column:Re,length:a,return:"",siblings:l}}function He(e,t){return Ce(De("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Be(e){for(;e.root;)e=He(e.root,{children:[e]});Ne(e,e.siblings)}function qe(){return Oe=Le>0?ze(Fe,--Le):0,Re--,10===Oe&&(Re=1,Ee--),Oe}function _e(){return Oe=Le<Me?ze(Fe,Le++):0,Re++,10===Oe&&(Re=1,Ee++),Oe}function We(){return ze(Fe,Le)}function Ue(){return Le}function Ge(e,t){return Te(Fe,e,t)}function Ye(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Je(e){return ke(Ge(Le-1,Ke(91===e?e+2:40===e?e+1:e)))}function Ve(e){for(;(Oe=We())&&Oe<33;)_e();return Ye(e)>2||Ye(Oe)>3?"":" "}function Xe(e,t){for(;--t&&_e()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return Ge(e,Ue()+(t<6&&32==We()&&32==_e()))}function Ke(e){for(;_e();)switch(Oe){case e:return Le;case 34:case 39:34!==e&&39!==e&&Ke(Oe);break;case 40:41===e&&Ke(e);break;case 92:_e()}return Le}function Qe(e,t){for(;_e()&&e+Oe!==57&&(e+Oe!==84||47!==We()););return"/*"+Ge(t,Le-1)+"*"+we(47===e?e:_e())}function Ze(e){for(;!Ye(We());)_e();return Ge(e,Le)}function et(e){return function(e){return Fe="",e}(tt("",null,null,null,[""],e=function(e){return Ee=Re=1,Me=Pe(Fe=e),Le=0,[]}(e),0,[0],e))}function tt(e,t,r,o,n,i,a,l,s){for(var c=0,d=0,u=a,f=0,p=0,h=0,m=1,g=1,x=1,y=0,b="",v=n,w=i,C=o,k=b;g;)switch(h=y,y=_e()){case 40:if(108!=h&&58==ze(k,u-1)){-1!=$e(k+=Se(Je(y),"&","&\f"),"&\f",ve(c?l[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:k+=Je(y);break;case 9:case 10:case 13:case 32:k+=Ve(h);break;case 92:k+=Xe(Ue()-1,7);continue;case 47:switch(We()){case 42:case 47:Ne(ot(Qe(_e(),Ue()),t,r,s),s);break;default:k+="/"}break;case 123*m:l[c++]=Pe(k)*x;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+d:-1==x&&(k=Se(k,/\f/g,"")),p>0&&Pe(k)-u&&Ne(p>32?nt(k+";",o,r,u-1,s):nt(Se(k," ","")+";",o,r,u-2,s),s);break;case 59:k+=";";default:if(Ne(C=rt(k,t,r,c,d,n,l,b,v=[],w=[],u,i),i),123===y)if(0===d)tt(k,t,C,C,v,i,u,l,w);else switch(99===f&&110===ze(k,3)?100:f){case 100:case 108:case 109:case 115:tt(e,C,C,o&&Ne(rt(e,C,C,0,0,n,l,b,n,v=[],u,w),w),n,w,u,l,o?v:w);break;default:tt(k,C,C,C,[""],w,0,l,w)}}c=d=p=0,m=x=1,b=k="",u=a;break;case 58:u=1+Pe(k),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==qe())continue;switch(k+=we(y),y*m){case 38:x=d>0?1:(k+="\f",-1);break;case 44:l[c++]=(Pe(k)-1)*x,x=1;break;case 64:45===We()&&(k+=Je(_e())),f=We(),d=u=Pe(b=k+=Ze(Ue())),y++;break;case 45:45===h&&2==Pe(k)&&(m=0)}}return i}function rt(e,t,r,o,n,i,a,l,s,c,d,u){for(var f=n-1,p=0===n?i:[""],h=Ae(p),m=0,g=0,x=0;m<o;++m)for(var y=0,b=Te(e,f+1,f=ve(g=a[m])),v=e;y<h;++y)(v=ke(g>0?p[y]+" "+b:Se(b,/&\f/g,p[y])))&&(s[x++]=v);return De(e,t,r,0===n?xe:l,s,c,d,u)}function ot(e,t,r,o){return De(e,t,r,ge,we(Oe),Te(e,2,-2),0,o)}function nt(e,t,r,o,n){return De(e,t,r,ye,Te(e,0,o),Te(e,o+1,-1),o,n)}function it(e,t,r){switch(function(e,t){return 45^ze(e,0)?(((t<<2^ze(e,0))<<2^ze(e,1))<<2^ze(e,2))<<2^ze(e,3):0}(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 4789:return he+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+he+e+pe+e+e;case 5936:switch(ze(e,t+11)){case 114:return me+e+pe+Se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+pe+Se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+pe+Se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return me+e+pe+e+e;case 6165:return me+e+pe+"flex-"+e+e;case 5187:return me+e+Se(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return me+e+pe+"flex-item-"+Se(e,/flex-|-self/g,"")+(je(e,/flex-|baseline/)?"":pe+"grid-row-"+Se(e,/flex-|-self/g,""))+e;case 4675:return me+e+pe+"flex-line-pack"+Se(e,/align-content|flex-|-self/g,"")+e;case 5548:return me+e+pe+Se(e,"shrink","negative")+e;case 5292:return me+e+pe+Se(e,"basis","preferred-size")+e;case 6060:return me+"box-"+Se(e,"-grow","")+me+e+pe+Se(e,"grow","positive")+e;case 4554:return me+Se(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return Se(Se(Se(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return Se(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return Se(Se(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4200:if(!je(e,/flex-|baseline/))return pe+"grid-column-align"+Te(e,t)+e;break;case 2592:case 3360:return pe+Se(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,je(e.props,/grid-\w+-end/)})?~$e(e+(r=r[t].value),"span",0)?e:pe+Se(e,"-start","")+e+pe+"grid-row-span:"+(~$e(r,"span",0)?je(r,/\d+/):+je(r,/\d+/)-+je(e,/\d+/))+";":pe+Se(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return je(e.props,/grid-\w+-start/)})?e:pe+Se(Se(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Se(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pe(e)-1-t>6)switch(ze(e,t+1)){case 109:if(45!==ze(e,t+4))break;case 102:return Se(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+he+(108==ze(e,t+3)?"$3":"$2-$3"))+e;case 115:return~$e(e,"stretch",0)?it(Se(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return Se(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,o,n,i,a,l){return pe+r+":"+o+l+(n?pe+r+"-span:"+(i?a:+a-+o)+l:"")+e});case 4949:if(121===ze(e,t+6))return Se(e,":",":"+me)+e;break;case 6444:switch(ze(e,45===ze(e,14)?18:11)){case 120:return Se(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(45===ze(e,14)?"inline-":"")+"box$3$1"+me+"$2$3$1"+pe+"$2box$3")+e;case 100:return Se(e,":",":"+pe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Se(e,"scroll-","scroll-snap-")+e}return e}function at(e,t){for(var r="",o=0;o<e.length;o++)r+=t(e[o],o,e,t)||"";return r}function lt(e,t,r,o){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case ye:return e.return=e.return||e.value;case ge:return"";case be:return e.return=e.value+"{"+at(e.children,o)+"}";case xe:if(!Pe(e.value=e.props.join(",")))return""}return Pe(r=at(e.children,o))?e.return=e.value+"{"+r+"}":""}function st(e,t,r,o){if(e.length>-1&&!e.return)switch(e.type){case ye:return void(e.return=it(e.value,e.length,r));case be:return at([He(e,{value:Se(e.value,"@","@"+me)})],o);case xe:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(je(t,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Be(He(e,{props:[Se(t,/:(read-\w+)/,":-moz-$1")]})),Be(He(e,{props:[t]})),Ce(e,{props:Ie(r,o)});break;case"::placeholder":Be(He(e,{props:[Se(t,/:(plac\w+)/,":"+me+"input-$1")]})),Be(He(e,{props:[Se(t,/:(plac\w+)/,":-moz-$1")]})),Be(He(e,{props:[Se(t,/:(plac\w+)/,pe+"input-$1")]})),Be(He(e,{props:[t]})),Ce(e,{props:Ie(r,o)})}return""})}}var ct={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dt="undefined"!=typeof process&&void 0!==process.env&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ut="active",ft="data-styled-version",pt="6.1.19",ht="/*!sc*/\n",mt="undefined"!=typeof window&&"undefined"!=typeof document,gt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),xt=Object.freeze([]),yt=Object.freeze({});var bt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wt=/(^-|-$)/g;function Ct(e){return e.replace(vt,"-").replace(wt,"")}var kt=/(a)(d)/gi,jt=function(e){return String.fromCharCode(e+(e>25?39:97))};function St(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=jt(t%52)+r;return(jt(t%52)+r).replace(kt,"$1-$2")}var $t,zt=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Tt=function(e){return zt(5381,e)};function Pt(e){return"string"==typeof e&&!0}var At="function"==typeof Symbol&&Symbol.for,Nt=At?Symbol.for("react.memo"):60115,It=At?Symbol.for("react.forward_ref"):60112,Et={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lt=(($t={})[It]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$t[Nt]=Mt,$t);function Ot(e){return("type"in(t=e)&&t.type.$$typeof)===Nt?Mt:"$$typeof"in e?Lt[e.$$typeof]:Et;var t}var Ft=Object.defineProperty,Dt=Object.getOwnPropertyNames,Ht=Object.getOwnPropertySymbols,Bt=Object.getOwnPropertyDescriptor,qt=Object.getPrototypeOf,_t=Object.prototype;function Wt(e,t,r){if("string"!=typeof t){if(_t){var o=qt(t);o&&o!==_t&&Wt(e,o,r)}var n=Dt(t);Ht&&(n=n.concat(Ht(t)));for(var i=Ot(e),a=Ot(t),l=0;l<n.length;++l){var s=n[l];if(!(s in Rt||r&&r[s]||a&&s in a||i&&s in i)){var c=Bt(t,s);try{Ft(e,s,c)}catch(d){}}}}return e}function Ut(e){return"function"==typeof e}function Gt(e){return"object"==typeof e&&"styledComponentId"in e}function Yt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Jt(e,t){if(0===e.length)return"";for(var r=e[0],o=1;o<e.length;o++)r+=t?t+e[o]:e[o];return r}function Vt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xt(e,t,r){if(void 0===r&&(r=!1),!r&&!Vt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=Xt(e[o],t[o]);else if(Vt(t))for(var o in t)e[o]=Xt(e[o],t[o]);return e}function Kt(e,t){Object.defineProperty(e,"toString",{value:t})}function Qt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Zt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,n=o;e>=n;)if((n<<=1)<0)throw Qt(16,"".concat(e));this.groupSizes=new Uint32Array(n),this.groupSizes.set(r),this.length=n;for(var i=o;i<n;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),o=r+t;this.groupSizes[e]=0;for(var n=r;n<o;n++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],o=this.indexOfGroup(e),n=o+r,i=o;i<n;i++)t+="".concat(this.tag.getRule(i)).concat(ht);return t},e}(),er=new Map,tr=new Map,rr=1,or=function(e){if(er.has(e))return er.get(e);for(;tr.has(rr);)rr++;var t=rr++;return er.set(e,t),tr.set(t,e),t},nr=function(e,t){rr=t+1,er.set(e,t),tr.set(t,e)},ir="style[".concat(dt,"][").concat(ft,'="').concat(pt,'"]'),ar=new RegExp("^".concat(dt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lr=function(e,t,r){for(var o,n=r.split(","),i=0,a=n.length;i<a;i++)(o=n[i])&&e.registerName(t,o)},sr=function(e,t){for(var r,o=(null!==(r=t.textContent)&&void 0!==r?r:"").split(ht),n=[],i=0,a=o.length;i<a;i++){var l=o[i].trim();if(l){var s=l.match(ar);if(s){var c=0|parseInt(s[1],10),d=s[2];0!==c&&(nr(d,c),lr(e,d,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(l)}}},cr=function(e){for(var t=document.querySelectorAll(ir),r=0,o=t.length;r<o;r++){var n=t[r];n&&n.getAttribute(dt)!==ut&&(sr(e,n),n.parentNode&&n.parentNode.removeChild(n))}};var dr=function(e){var t,r,o=document.head,n=e||o,i=document.createElement("style"),a=(t=n,(r=Array.from(t.querySelectorAll("style[".concat(dt,"]"))))[r.length-1]),l=void 0!==a?a.nextSibling:null;i.setAttribute(dt,ut),i.setAttribute(ft,pt);var s="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return s&&i.setAttribute("nonce",s),n.insertBefore(i,l),i},ur=function(){function e(e){this.element=dr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,o=t.length;r<o;r++){var n=t[r];if(n.ownerNode===e)return n}throw Qt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(r){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),fr=function(){function e(e){this.element=dr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),pr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),hr=mt,mr={isServer:!mt,useCSSOMInjection:!gt},gr=function(){function e(e,t,r){void 0===e&&(e=yt),void 0===t&&(t={});var o=this;this.options=ue(ue({},mr),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&mt&&hr&&(hr=!1,cr(this)),Kt(this,function(){return function(e){for(var t=e.getTag(),r=t.length,o="",n=function(r){var n,i=(n=r,tr.get(n));if(void 0===i)return"continue";var a=e.names.get(i),l=t.getGroup(r);if(void 0===a||!a.size||0===l.length)return"continue";var s="".concat(dt,".g").concat(r,'[id="').concat(i,'"]'),c="";void 0!==a&&a.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),o+="".concat(l).concat(s,'{content:"').concat(c,'"}').concat(ht)},i=0;i<r;i++)n(i);return o}(o)})}return e.registerId=function(e){return or(e)},e.prototype.rehydrate=function(){!this.server&&mt&&cr(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(ue(ue({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,r=e.target,o=e.isServer?new pr(r):t?new ur(r):new fr(r),new Zt(o)));var e,t,r,o},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(or(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(or(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(or(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),xr=/&/g,yr=/^\s*\/\/.*$/gm;function br(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=br(e.children,t)),e})}var vr=new gr,wr=function(e){var t,r,o,n=void 0===e?yt:e,i=n.options,a=void 0===i?yt:i,l=n.plugins,s=void 0===l?xt:l,c=function(e,o,n){return n.startsWith(r)&&n.endsWith(r)&&n.replaceAll(r,"").length>0?".".concat(t):e},d=s.slice();d.push(function(e){e.type===xe&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(xr,r).replace(o,c))}),a.prefix&&d.push(st),d.push(lt);var u=function(e,n,i,l){void 0===n&&(n=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,r=n,o=new RegExp("\\".concat(r,"\\b"),"g");var s=e.replace(yr,""),c=et(i||n?"".concat(i," ").concat(n," { ").concat(s," }"):s);a.namespace&&(c=br(c,a.namespace));var u,f,p,h=[];return at(c,(u=d.concat((p=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&p(e)})),f=Ae(u),function(e,t,r,o){for(var n="",i=0;i<f;i++)n+=u[i](e,t,r,o)||"";return n})),h};return u.hash=s.length?s.reduce(function(e,t){return t.name||Qt(15),zt(e,t.name)},5381).toString():"",u}(),Cr=o.createContext({shouldForwardProp:void 0,styleSheet:vr,stylis:wr});function kr(){return e.useContext(Cr)}Cr.Consumer,o.createContext(void 0);var jr=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=wr);var o=r.name+t.hash;e.hasNameForId(r.id,o)||e.insertRules(r.id,o,t(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Kt(this,function(){throw Qt(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=wr),this.name+e.hash},e}(),Sr=function(e){return e>="A"&&e<="Z"};function $r(e){for(var t="",r=0;r<e.length;r++){var o=e[r];if(1===r&&"-"===o&&"-"===e[0])return e;Sr(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var zr=function(e){return null==e||!1===e||""===e},Tr=function(e){var t,r,o=[];for(var n in e){var i=e[n];e.hasOwnProperty(n)&&!zr(i)&&(Array.isArray(i)&&i.isCss||Ut(i)?o.push("".concat($r(n),":"),i,";"):Vt(i)?o.push.apply(o,fe(fe(["".concat(n," {")],Tr(i),!1),["}"],!1)):o.push("".concat($r(n),": ").concat((t=n,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ct||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function Pr(e,t,r,o){return zr(e)?[]:Gt(e)?[".".concat(e.styledComponentId)]:Ut(e)?!Ut(n=e)||n.prototype&&n.prototype.isReactComponent||!t?[e]:Pr(e(t),t,r,o):e instanceof jr?r?(e.inject(r,o),[e.getName(o)]):[e]:Vt(e)?Tr(e):Array.isArray(e)?Array.prototype.concat.apply(xt,e.map(function(e){return Pr(e,t,r,o)})):[e.toString()];var n}var Ar=Tt(pt),Nr=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ut(r)&&!Gt(r))return!1}return!0}(e),this.componentId=t,this.baseHash=zt(Ar,t),this.baseStyle=r,gr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=Yt(o,this.staticRulesId);else{var n=Jt(Pr(this.rules,e,t,r)),i=St(zt(this.baseHash,n)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(n,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}o=Yt(o,i),this.staticRulesId=i}else{for(var l=zt(this.baseHash,r.hash),s="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)s+=d;else if(d){var u=Jt(Pr(d,e,t,r));l=zt(l,u+c),s+=u}}if(s){var f=St(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(s,".".concat(f),void 0,this.componentId)),o=Yt(o,f)}}return o},e}(),Ir=o.createContext(void 0);Ir.Consumer;var Er={};function Rr(t,r,n){var i,a=Gt(t),l=t,s=!Pt(t),c=r.attrs,d=void 0===c?xt:c,u=r.componentId,f=void 0===u?function(e,t){var r="string"!=typeof e?"sc":Ct(e);Er[r]=(Er[r]||0)+1;var o="".concat(r,"-").concat(function(e){return St(Tt(e)>>>0)}(pt+r+Er[r]));return t?"".concat(t,"-").concat(o):o}(r.displayName,r.parentComponentId):u,p=r.displayName,h=void 0===p?Pt(i=t)?"styled.".concat(i):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(i),")"):p,m=r.displayName&&r.componentId?"".concat(Ct(r.displayName),"-").concat(r.componentId):r.componentId||f,g=a&&l.attrs?l.attrs.concat(d).filter(Boolean):d,x=r.shouldForwardProp;if(a&&l.shouldForwardProp){var y=l.shouldForwardProp;if(r.shouldForwardProp){var b=r.shouldForwardProp;x=function(e,t){return y(e,t)&&b(e,t)}}else x=y}var v=new Nr(n,m,a?l.componentStyle:void 0);function w(t,r){return function(t,r,n){var i=t.attrs,a=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,c=t.styledComponentId,d=t.target,u=o.useContext(Ir),f=kr(),p=t.shouldForwardProp||f.shouldForwardProp,h=function(e,t,r){return void 0===r&&(r=yt),e.theme!==r.theme&&e.theme||t||r.theme}(r,u,l)||yt,m=function(e,t,r){for(var o,n=ue(ue({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var a=Ut(o=e[i])?o(n):o;for(var l in a)n[l]="className"===l?Yt(n[l],a[l]):"style"===l?ue(ue({},n[l]),a[l]):a[l]}return t.className&&(n.className=Yt(n.className,t.className)),n}(i,r,h),g=m.as||d,x={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===h||("forwardedAs"===y?x.as=m.forwardedAs:p&&!p(y,g)||(x[y]=m[y]));var b,v,w,C=(b=a,v=m,w=kr(),b.generateAndInjectStyles(v,w.styleSheet,w.stylis)),k=Yt(s,c);return C&&(k+=" "+C),m.className&&(k+=" "+m.className),x[Pt(g)&&!bt.has(g)?"class":"className"]=k,n&&(x.ref=n),e.createElement(g,x)}(C,t,r)}w.displayName=h;var C=o.forwardRef(w);return C.attrs=g,C.componentStyle=v,C.displayName=h,C.shouldForwardProp=x,C.foldedComponentIds=a?Yt(l.foldedComponentIds,l.styledComponentId):"",C.styledComponentId=m,C.target=a?l.target:t,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var o=0,n=t;o<n.length;o++)Xt(e,n[o],!0);return e}({},l.defaultProps,e):e}}),Kt(C,function(){return".".concat(C.styledComponentId)}),s&&Wt(C,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Mr(e,t){for(var r=[e[0]],o=0,n=t.length;o<n;o+=1)r.push(t[o],e[o+1]);return r}var Lr=function(e){return Object.assign(e,{isCss:!0})};function Or(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ut(e)||Vt(e))return Lr(Pr(Mr(xt,fe([e],t,!0))));var o=e;return 0===t.length&&1===o.length&&"string"==typeof o[0]?Pr(o):Lr(Pr(Mr(o,t)))}function Fr(e,t,r){if(void 0===r&&(r=yt),!t)throw Qt(1,t);var o=function(o){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return e(t,r,Or.apply(void 0,fe([o],n,!1)))};return o.attrs=function(o){return Fr(e,t,ue(ue({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return Fr(e,t,ue(ue({},r),o))},o}var Dr=function(e){return Fr(Rr,e)},Hr=Dr;bt.forEach(function(e){Hr[e]=Dr(e)});const Br=Hr.nav`
  background-color: #2196F3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
`,qr=Hr.div`
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
`,_r=Hr(n)`
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
`,Wr=Hr.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  
  /* 竖屏显示时减小图标尺寸 */
  @media (max-width: 768px) and (orientation: portrait) {
    width: 22px;
    height: 22px;
  }
`,Ur=Hr.div`
  position: relative;
`,Gr=Hr.button`
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
`,Yr=Hr.div`
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
`,Jr=Hr.button`
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
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 2px;
`;const Vr=()=>{oe();const{language:t,changeLanguage:r}=le(),[o,n]=e.useState(!1);e.useEffect(()=>{const e=e=>{e.target.closest(".language-selector")||n(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const i=e=>{r(e),n(!1)};return v.jsx(Br,{children:v.jsxs(qr,{children:[v.jsxs(_r,{to:"/",children:[v.jsx(Wr,{src:"/sudoku-app-logo.svg",alt:"Sudoku Logo"}),"SudokuTech"]}),v.jsxs(Ur,{className:"language-selector",children:[v.jsx(Gr,{onClick:()=>{n(!o)},children:"zh-CN"===t?"中文":"English"}),o&&v.jsxs(Yr,{children:[v.jsx(Jr,{className:"zh-CN"===t?"selected":"",onClick:()=>i("zh-CN"),children:"中文"}),v.jsx(Jr,{className:"en-US"===t?"selected":"",onClick:()=>i("en-US"),children:"English"})]})]})]})})},Xr=Hr.footer`
  background-color: ${e=>e.theme.surface};
  color: ${e=>e.theme.textSecondary};
  padding: 20px 0;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`,Kr=Hr.div`
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
`,Qr=Hr.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
  ${e=>e.theme.mediaQueries.small} {
    gap: 15px;
  }
`,Zr=Hr.a`
  color: ${e=>e.theme.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${e=>e.theme.primary};
  }
`,eo=Hr.div`
  font-size: 14px;
  line-height: 1.5;
`,to=Hr.div`
  font-size: 12px;
  margin-top: 10px;
`,ro=()=>{const{theme:e}=oe(),{t:t}=le(),r=(new Date).getFullYear();return v.jsx(Xr,{theme:e,children:v.jsxs(Kr,{theme:e,children:[v.jsxs(Qr,{theme:e,children:[v.jsx(Zr,{href:"#",theme:e,children:t("aboutUs")}),v.jsx(Zr,{href:"#",theme:e,children:t("help")}),v.jsx(Zr,{href:"#",theme:e,children:t("sudokuRules")}),v.jsx(Zr,{href:"#",theme:e,children:t("contactUs")})]}),v.jsxs(eo,{theme:e,children:["© ",r," ",t("appName")," ",t("copyright")]}),v.jsxs(to,{theme:e,children:[t("version")," 1.0.0"]})]})})},oo=Hr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`,no=Hr.div`
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
`,io=Hr.div`
  color: ${e=>e.theme.text};
  font-size: 16px;
  font-weight: 500;
`,ao=({showMessage:e=!0})=>{const{theme:t}=oe(),{loadingMessage:r}=de();return v.jsxs(oo,{children:[v.jsx(no,{theme:t}),e&&v.jsx(io,{theme:t,children:r})]})},lo=Hr.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  transition: background-color 0.3s ease, color 0.3s ease;
`,so=Hr.main`
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 640px) {
    padding: 15px;
  }
`,co=Hr.div`
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
`;function uo({children:e}){const{theme:t}=oe(),{isLoading:r}=de();return v.jsxs(lo,{theme:t,children:[v.jsx(Vr,{}),v.jsx(so,{children:e}),v.jsx(ro,{}),r&&v.jsx(co,{children:v.jsx(ao,{})})]})}const fo=e.createContext(),po=({children:t})=>{const[r,o]=e.useState(null),[n,i]=e.useState(!1),[a,l]=e.useState({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),[s,d]=e.useState({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}});e.useEffect(()=>{u()},[]);const u=async()=>{try{let e=await c.getItem("userId");e||(e="user_"+Date.now()+"_"+Math.random().toString(36).substr(2,9),await c.setItem("userId",e),Q.success("欢迎使用数独学习应用！",{position:"top-right",autoClose:2e3})),o(e),i(!0);const t=await c.getItem(`stats_${e}`);t&&l(t);const r=await c.getItem(`techniques_${e}`);r&&d(r)}catch(e){console.error("初始化用户失败:",e),Q.error("初始化用户数据失败",{position:"top-right",autoClose:2e3})}},f=async(e,t)=>{try{const o={...s,[e]:{...s[e],...t}};d(o),r&&await c.setItem(`techniques_${r}`,o)}catch(o){console.error("更新技巧学习进度失败:",o)}},p={userId:r,isAuthenticated:n,userStats:a,techniquesProgress:s,updateUserStats:async e=>{try{const t={...a,...e};l(t),r&&await c.setItem(`stats_${r}`,t)}catch(t){console.error("更新用户统计失败:",t)}},updateTechniqueProgress:f,incrementTechniquePractice:async e=>{const t=s[e]||{mastered:0,practiced:0};await f(e,{practiced:t.practiced+1})},resetUserData:async()=>{try{r&&(await c.removeItem(`stats_${r}`),await c.removeItem(`techniques_${r}`),await c.removeItem(`progress_${r}`)),l({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),d({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}}),Q.success("用户数据已重置",{position:"top-right",autoClose:2e3})}catch(e){console.error("重置用户数据失败:",e),Q.error("重置用户数据失败",{position:"top-right",autoClose:2e3})}}};return v.jsx(fo.Provider,{value:p,children:t})},ho=()=>{const t=e.useContext(fo);if(!t)throw new Error("useUser must be used within a UserContextProvider");return t},mo=d.create({baseURL:"/",timeout:1e4,headers:{"Content-Type":"application/json"}});mo.interceptors.request.use(e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),mo.interceptors.response.use(e=>e.data,e=>{var t,r,o,n;const i=(null==(r=null==(t=e.response)?void 0:t.data)?void 0:r.message)||(null==(n=null==(o=e.response)?void 0:o.data)?void 0:n.error)||"请求失败，请重试";return Q.error(i,{position:"top-right",autoClose:2e3}),Promise.reject(e)});const go={generatePuzzle:async e=>{try{return await mo.post("/sudoku/puzzles/generate",{difficulty:e})}catch(t){throw console.error("生成数独谜题失败:",t),t}},getRandomPuzzleByDifficulty:async e=>{try{console.log(`Fetching puzzle with difficulty: ${e}`);const t=await mo.get(`/sudoku/puzzles/random/${e}`);if(!t||!t.puzzle)return console.error("Invalid puzzle data received from server"),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e};const{puzzle:r,solution:o,difficulty:n}=t;console.log("完整响应数据:",JSON.stringify(t));let i=o;return i&&Array.isArray(i)&&9===i.length||(console.warn("Solution data is missing or invalid"),i=Array(9).fill().map(()=>Array(9).fill(0))),{puzzle:r,solution:i,difficulty:n||e}}catch(t){return console.error("Error fetching puzzle:",t),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e}}},getPuzzleById:async e=>{try{return await mo.get(`/sudoku/puzzles/${e}`)}catch(t){throw console.error("获取谜题失败:",t),t}},solveSudoku:async e=>{try{return await mo.post("/sudoku/solve",{board:e})}catch(t){throw console.error("求解数独失败:",t),t}},validateSudoku:async e=>{try{return await mo.post("/sudoku/validate",{board:e})}catch(t){throw console.error("验证数独失败:",t),t}},getCandidates:async(e,t,r)=>{try{return await mo.post("/sudoku/candidates",{board:e,row:t,col:r})}catch(o){throw console.error("获取候选数失败:",o),o}},identifyTechniques:async e=>{try{return await mo.post("/sudoku/techniques",{board:e})}catch(t){throw console.error("识别技巧失败:",t),t}},getHint:async(e,t)=>{try{return await mo.post("/sudoku/hint",{board:e,solution:t})}catch(r){throw console.error("获取提示失败:",r),r}},getPuzzleList:async(e={})=>{try{return await mo.get("/sudoku/puzzles",{params:e})}catch(t){throw console.error("获取谜题列表失败:",t),t}},getPuzzleStats:async()=>{try{return await mo.get("/sudoku/puzzles/stats")}catch(e){throw console.error("获取谜题统计失败:",e),e}},getUserProgress:async e=>{try{return await mo.get(`/user/progress/${e}`)}catch(t){throw console.error("获取用户进度失败:",t),t}},saveUserProgress:async(e,t)=>{try{return await mo.post(`/user/progress/${e}`,t)}catch(r){throw console.error("保存用户进度失败:",r),r}},getActiveProgress:async()=>{try{return await mo.get("/user/progress/active")}catch(e){throw console.error("获取活跃进度失败:",e),e}},getCompletedPuzzles:async()=>{try{return await mo.get("/user/progress/completed")}catch(e){throw console.error("获取已完成谜题失败:",e),e}},deleteUserProgress:async e=>{try{return await mo.delete(`/user/progress/${e}`)}catch(t){throw console.error("删除用户进度失败:",t),t}},getUserTechniques:async()=>{try{return await mo.get("/user/techniques")}catch(e){throw console.error("获取用户技巧学习情况失败:",e),e}},updateTechniqueLearning:async(e,t)=>{try{return await mo.post(`/user/techniques/${e}`,t)}catch(r){throw console.error("更新技巧学习情况失败:",r),r}},incrementTechniquePractice:async e=>{try{return await mo.post(`/user/techniques/${e}/practice`)}catch(t){throw console.error("增加技巧练习次数失败:",t),t}},getUserStats:async()=>{try{return await mo.get("/user/stats")}catch(e){throw console.error("获取用户统计信息失败:",e),e}},healthCheck:async()=>{try{return(await d.get("/health")).data}catch(e){throw console.error("健康检查失败:",e),e}}};let xo=class{constructor(e,t){this.row=e,this.col=t,this.up=this,this.down=this,this.left=this,this.right=this,this.colHead=null}};class yo extends xo{constructor(e){super(-1,e),this.size=0}}const bo=()=>Array(9).fill().map(()=>Array(9).fill(0)),vo=new class{constructor(){this.root=new xo(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[]}setupSudokuMatrix(e){this.colHeaders=[];for(let r=0;r<324;r++){const e=new yo(r);this.colHeaders.push(e)}let t=this.root;for(let r=0;r<324;r++)t.right=this.colHeaders[r],this.colHeaders[r].left=t,t=this.colHeaders[r];t.right=this.root,this.root.left=t,this.rows=[];for(let r=0;r<9;r++)for(let t=0;t<9;t++)for(let o=1;o<=9;o++){if(0!==e[r][t]&&e[r][t]!==o)continue;const n=[9*r+t,81+9*r+(o-1),162+9*t+(o-1),243+9*(3*Math.floor(r/3)+Math.floor(t/3))+(o-1)],i=[];for(let e of n){const t=new xo(this.rows.length,e);t.colHead=this.colHeaders[e],i.push(t)}for(let e=0;e<i.length;e++)i[e].left=i[(e-1+i.length)%i.length],i[e].right=i[(e+1)%i.length];for(let e of i){const t=e.colHead;e.up=t.up,t.up.down=e,e.down=t,t.up=e,t.size++}this.rows.push([r,t,o])}}selectColumn(){let e=1/0,t=null;for(let r=this.root.right;r!==this.root;r=r.right)r.size<e&&(e=r.size,t=r);return t}coverColumn(e){e.left.right=e.right,e.right.left=e.left;for(let t=e.down;t!==e;t=t.down)for(let e=t.right;e!==t;e=e.right)e.up.down=e.down,e.down.up=e.up,e.colHead.size--}uncoverColumn(e){for(let t=e.up;t!==e;t=t.up)for(let e=t.left;e!==t;e=e.left)e.up.down=e,e.down.up=e,e.colHead.size++;e.left.right=e,e.right.left=e}search(e=2){const t=[],r=()=>{if(this.root.right===this.root)return t.push([...this.solution]),t.length<e;const o=this.selectColumn();this.coverColumn(o);for(let e=o.down;e!==o;e=e.down){this.solution.push(this.rows[e.row]);for(let t=e.right;t!==e;t=t.right)this.coverColumn(t.colHead);if(!r())return!1;this.solution.pop();for(let t=e.left;t!==e;t=t.left)this.uncoverColumn(t.colHead)}return this.uncoverColumn(o),!0};return r(),t}solveSudoku(e){this.root=new xo(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);const t=this.search(1);if(0===t.length)return null;const r=Array(9).fill().map(()=>Array(9).fill(0));for(let[o,n,i]of t[0])r[o][n]=i;return r}hasUniqueSolution(e){this.root=new xo(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);return 1===this.search(2).length}},wo=(e,t,r,o)=>{for(let a=0;a<9;a++)if(a!==r&&e[t][a]===o)return!1;for(let a=0;a<9;a++)if(a!==t&&e[a][r]===o)return!1;const n=3*Math.floor(t/3),i=3*Math.floor(r/3);for(let a=n;a<n+3;a++)for(let n=i;n<i+3;n++)if(a!==t&&n!==r&&e[a][n]===o)return!1;return!0},Co=e=>{for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(0===e[t][r])return[t,r];return null},ko=e=>{try{return vo.hasUniqueSolution(e)}catch(t){return console.error("验证数独唯一性时出错:",t),jo(e)}},jo=e=>{const t=e.map(e=>[...e]);let r=0;const o=()=>{if(r>1)return;const e=Co(t);if(!e)return void r++;const[n,i]=e;for(let r=1;r<=9;r++)wo(t,n,i,r)&&(t[n][i]=r,o(),t[n][i]=0)};return o(),1===r},So=()=>{const e=[1,2,3,4,5,6,7,8,9];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},$o=async(e="medium")=>{console.log(`开始生成${e}难度的数独题目`);const t=(()=>{console.debug("开始生成完整的数独解");for(let t=1;t<=10;t++)try{const e=bo();for(let t=0;t<9;t+=3){const r=So();let o=0;for(let n=0;n<3;n++)for(let i=0;i<3;i++)e[t+n][t+i]=r[o++]}const r=vo.solveSudoku(e);if(r&&zo(r))return console.debug(`成功生成完整数独解（尝试次数：${t}）`),r;const o=()=>{const t=Co(e);if(!t)return!0;const[r,n]=t,i=So();for(const a of i)if(wo(e,r,n,a)){if(e[r][n]=a,o())return!0;e[r][n]=0}return!1};if(o()&&zo(e))return console.debug(`使用回溯算法成功生成完整数独解（尝试次数：${t}）`),e}catch(e){console.error(`生成数独解时出错（尝试 ${t}/10）:`,e)}return console.error("超过最大尝试次数（10），无法生成有效的数独解"),null})();if(!t)return console.error("生成完整数独解失败"),null;const r=t.map(e=>[...e]);let o;switch(e){case"easy":o=40;break;case"medium":default:o=50;break;case"hard":o=55;break;case"expert":o=60}let n=0;const i=[];for(let a=0;a<9;a++)for(let e=0;e<9;e++)i.push([a,e]);for(let a=i.length-1;a>0;a--){const e=Math.floor(Math.random()*(a+1));[i[a],i[e]]=[i[e],i[a]]}for(const[a,l]of i){if(n>=o)break;const e=r[a][l];r[a][l]=0,ko(r)?(n++,console.debug(`已移除单元格(${a},${l})，当前已移除${n}/${o}个`)):r[a][l]=e}return ko(r)||console.warn(`警告：生成的${e}难度题目可能没有唯一解，尝试重新生成`),console.log(`成功生成${e}难度数独题目，保留了${81-n}个数字`),{puzzle:r,solution:t}},zo=e=>{for(let t=0;t<9;t++){const r=new Set;for(let o=0;o<9;o++){const n=e[t][o];if(0!==n){if(r.has(n))return!1;r.add(n)}}}for(let t=0;t<9;t++){const r=new Set;for(let o=0;o<9;o++){const n=e[o][t];if(0!==n){if(r.has(n))return!1;r.add(n)}}}for(let t=0;t<3;t++)for(let r=0;r<3;r++){const o=new Set;for(let n=0;n<3;n++)for(let i=0;i<3;i++){const a=3*r+i,l=e[3*t+n][a];if(0!==l){if(o.has(l))return!1;o.add(l)}}}return!0};let To=null,Po=null;const Ao=18e5,No=async()=>{try{console.log("开始获取随机专家级题目");const e=await(async()=>{try{const e=Date.now();if(To&&Po&&e-Po<Ao)return console.log("使用缓存的专家级题目数据"),To;const t=await c.getItem("expert_puzzles_cache");if(t&&t.timestamp&&e-t.timestamp<Ao)return console.log("从localforage加载缓存的专家级题目"),To=t.data,Po=t.timestamp,To;console.log("从JSON文件加载专家级题目");const r=await fetch("/expert_puzzles.json");if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const o=await r.json();if(!o.puzzles||!Array.isArray(o.puzzles))throw new Error("无效的专家级题目数据格式");return To=o.puzzles,Po=e,await c.setItem("expert_puzzles_cache",{data:o.puzzles,timestamp:e}),console.log(`成功加载 ${o.puzzles.length} 个专家级题目`),o.puzzles}catch(e){return console.error("加载专家级题目失败:",e),[]}})();if(!e||0===e.length)return console.warn("没有可用的专家级题目"),null;const t=e[Math.floor(Math.random()*e.length)];if(!t||!t.puzzle||!t.solution){if(console.error("选中的谜题数据不完整:",t),e.length>1){console.log("尝试重新选择另一个谜题");const t=e.filter(e=>e&&e.puzzle&&e.solution);if(t.length>0){const e=Math.floor(Math.random()*t.length);return console.log(`重新选择有效专家级题目 #${t[e].id||"unknown"}`),t[e]}}return null}return console.log(`随机选择专家级题目 #${t.id||"unknown"}`),t}catch(e){return console.error("获取随机专家级题目失败:",e),null}},Io=(e,t)=>{const r=[];for(let o=1;o<=9;o++){let n=0,i=-1;for(let r=0;r<9&&!(0===e[t][r]&&(Mo(e,t,r,o)&&(n++,i=r),n>1));r++);1===n&&r.push({type:"hiddenSingleRow",description:"hiddenSingleRow",row:t,col:i,value:o,cells:[[t,i]],message:`在第${t+1}行中，数字${o}只能填入单元格(${t+1},${i+1})`})}return r},Eo=(e,t)=>{const r=[];for(let o=1;o<=9;o++){let n=0,i=-1;for(let r=0;r<9&&!(0===e[r][t]&&(Mo(e,r,t,o)&&(n++,i=r),n>1));r++);1===n&&r.push({type:"hiddenSingleCol",description:"hiddenSingleCol",row:i,col:t,value:o,cells:[[i,t]],message:`在第${t+1}列中，数字${o}只能填入单元格(${i+1},${t+1})`})}return r},Ro=(e,t)=>{const r=[],o=3*Math.floor(t/3),n=t%3*3;for(let i=1;i<=9;i++){let a=0,l=-1,s=-1;for(let t=0;t<3;t++){for(let r=0;r<3;r++){const c=o+t,d=n+r;if(0===e[c][d]&&(Mo(e,c,d,i)&&(a++,l=c,s=d),a>1))break}if(a>1)break}1===a&&r.push({type:"hiddenSingleBox",description:"hiddenSingleBox",row:l,col:s,value:i,cells:[[l,s]],message:`在第${t+1}宫中，数字${i}只能填入单元格(${l+1},${s+1})`})}return r},Mo=(e,t,r,o)=>{for(let a=0;a<9;a++)if(e[t][a]===o)return!1;for(let a=0;a<9;a++)if(e[a][r]===o)return!1;const n=3*Math.floor(t/3),i=3*Math.floor(r/3);for(let a=n;a<n+3;a++)for(let t=i;t<i+3;t++)if(e[a][t]===o)return!1;return!0},Lo=(e,t={},r=!0)=>{const o=(e=>{const t=[];for(let r=0;r<9;r++)for(let o=0;o<9;o++){if(0!==e[r][o])continue;const n=[];for(let t=1;t<=9;t++)Mo(e,r,o,t)&&n.push(t);1===n.length&&t.push({type:"nakedSingle",description:"nakedSingle",row:r,col:o,value:n[0],cells:[[r,o]],message:`单元格(${r+1},${o+1})只有数字${n[0]}可以填入`})}return t})(e),n=(e=>{const t=[],r=new Set;for(let o=0;o<9;o++){const n=Io(e,o);for(const o of n){const n=`${o.row}-${o.col}`;r.has(n)||0!==e[o.row][o.col]||(r.add(n),t.push(o))}}for(let o=0;o<9;o++){const n=Eo(e,o);for(const o of n){const n=`${o.row}-${o.col}`;r.has(n)||0!==e[o.row][o.col]||(r.add(n),t.push(o))}}for(let o=0;o<9;o++){const n=Ro(e,o);for(const o of n){const n=`${o.row}-${o.col}`;r.has(n)||0!==e[o.row][o.col]||(r.add(n),t.push(o))}}return t})(e);let i=[],a=[],l=[],s=[],c=[],d=[],u=[],f=[],p=[];if(r&&Object.keys(t).length>0){i=((e,t={})=>{const r=[],o=o=>{const n=[];for(let r=0;r<9;r++){if(0!==e[o][r])continue;const i=t[`${o}-${r}`]||[];2===i.length&&n.push({row:o,col:r,notes:i})}for(let i=0;i<n.length-1;i++)for(let a=i+1;a<n.length;a++){const l=n[i],s=n[a];if(l.notes.sort().join(",")===s.notes.sort().join(",")){let n=!1;const i=[],a=[];for(let r=0;r<9;r++){if(r===l.col||r===s.col)continue;if(0!==e[o][r])continue;const c=(t[`${o}-${r}`]||[]).filter(e=>l.notes.includes(e));c.length>0&&(n=!0,i.push([o,r]),c.forEach(e=>a.push(e)))}n&&r.push({type:"nakedPairRow",description:"显性数对法(行)",cells:[[l.row,l.col],[s.row,s.col]],values:l.notes,targetCells:i,removableCandidates:a,message:`在第${o+1}行，单元格(${l.col+1})和(${s.col+1})形成显性数对[${l.notes.join(",")}]`})}}},n=o=>{const n=[];for(let r=0;r<9;r++){if(0!==e[r][o])continue;const i=t[`${r}-${o}`]||[];2===i.length&&n.push({row:r,col:o,notes:i})}for(let i=0;i<n.length-1;i++)for(let a=i+1;a<n.length;a++){const l=n[i],s=n[a];if(l.notes.sort().join(",")===s.notes.sort().join(",")){let n=!1;const i=[],a=[];for(let r=0;r<9;r++){if(r===l.row||r===s.row)continue;if(0!==e[r][o])continue;const c=(t[`${r}-${o}`]||[]).filter(e=>l.notes.includes(e));c.length>0&&(n=!0,i.push([r,o]),c.forEach(e=>a.push(e)))}n&&r.push({type:"nakedPairCol",description:"显性数对法(列)",cells:[[l.row,l.col],[s.row,s.col]],values:l.notes,targetCells:i,removableCandidates:a,message:`在第${o+1}列，单元格(${l.row+1})和(${s.row+1})形成显性数对[${l.notes.join(",")}]`})}}},i=(o,n)=>{const i=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const l=3*o+r,s=3*n+a;if(0!==e[l][s])continue;const c=t[`${l}-${s}`]||[];2===c.length&&i.push({row:l,col:s,notes:c})}for(let a=0;a<i.length-1;a++)for(let l=a+1;l<i.length;l++){const s=i[a],c=i[l];if(s.notes.sort().join(",")===c.notes.sort().join(",")){let i=!1;const a=[],l=[];for(let r=0;r<3;r++)for(let d=0;d<3;d++){const u=3*o+r,f=3*n+d;if(u===s.row&&f===s.col||u===c.row&&f===c.col)continue;if(0!==e[u][f])continue;const p=(t[`${u}-${f}`]||[]).filter(e=>s.notes.includes(e));p.length>0&&(i=!0,a.push([u,f]),p.forEach(e=>l.push(e)))}i&&r.push({type:"nakedPairBox",description:"显性数对法(宫)",cells:[[s.row,s.col],[c.row,c.col]],values:s.notes,targetCells:a,removableCandidates:l,message:`在第${3*o+n+1}宫，单元格(${s.row+1},${s.col+1})和(${c.row+1},${c.col+1})形成显性数对[${s.notes.join(",")}]`})}}};for(let a=0;a<9;a++)o(a),n(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),a=((e,t={})=>{const r=[],o=o=>{const n={};for(let e=1;e<=9;e++)n[e]=[];for(let r=0;r<9;r++)0===e[o][r]&&(t[`${o}-${r}`]||[]).forEach(e=>{n[e]&&n[e].push(r)});const i=Object.keys(n).map(Number).filter(e=>2===n[e].length);for(let e=0;e<i.length-1;e++)for(let a=e+1;a<i.length;a++){const l=i[e],s=i[a];if(n[l].sort().join(",")===n[s].sort().join(",")){const e=n[l];let i=!1;const a=[],c=[];e.forEach(e=>{const r=(t[`${o}-${e}`]||[]).filter(e=>e!==l&&e!==s);r.length>0&&(i=!0,a.push([o,e]),r.forEach(e=>c.push(e)))}),i&&r.push({type:"hiddenPairRow",description:"隐性数对法(行)",cells:[[o,e[0]],[o,e[1]]],values:[l,s],targetCells:a,removableCandidates:c,message:`在第${o+1}行，数字${l}和${s}只能出现在单元格(${e[0]+1})和(${e[1]+1})中`})}}},n=o=>{const n={};for(let e=1;e<=9;e++)n[e]=[];for(let r=0;r<9;r++)0===e[r][o]&&(t[`${r}-${o}`]||[]).forEach(e=>{n[e]&&n[e].push(r)});const i=Object.keys(n).map(Number).filter(e=>2===n[e].length);for(let e=0;e<i.length-1;e++)for(let a=e+1;a<i.length;a++){const l=i[e],s=i[a];if(n[l].sort().join(",")===n[s].sort().join(",")){const e=n[l];let i=!1;const a=[],c=[];e.forEach(e=>{const r=(t[`${e}-${o}`]||[]).filter(e=>e!==l&&e!==s);r.length>0&&(i=!0,a.push([e,o]),r.forEach(e=>c.push(e)))}),i&&r.push({type:"hiddenPairCol",description:"隐性数对法(列)",cells:[[e[0],o],[e[1],o]],values:[l,s],targetCells:a,removableCandidates:c,message:`在第${o+1}列，数字${l}和${s}只能出现在单元格(${e[0]+1})和(${e[1]+1})中`})}}},i=(o,n)=>{const i={};for(let e=1;e<=9;e++)i[e]=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const l=3*o+r,s=3*n+a;0===e[l][s]&&(t[`${l}-${s}`]||[]).forEach(e=>{i[e]&&i[e].push({row:l,col:s})})}const a=Object.keys(i).map(Number).filter(e=>2===i[e].length);for(let e=0;e<a.length-1;e++)for(let l=e+1;l<a.length;l++){const s=a[e],c=a[l],d=i[s].map(e=>`${e.row}-${e.col}`).sort(),u=i[c].map(e=>`${e.row}-${e.col}`).sort();if(d.join(",")===u.join(",")){const e=i[s];let a=!1;const l=[],d=[];e.forEach(e=>{const r=`${e.row}-${e.col}`,o=(t[r]||[]).filter(e=>e!==s&&e!==c);o.length>0&&(a=!0,l.push([e.row,e.col]),o.forEach(e=>d.push(e)))}),a&&r.push({type:"hiddenPairBox",description:"隐性数对法(宫)",cells:e.map(e=>[e.row,e.col]),values:[s,c],targetCells:l,removableCandidates:d,message:`在第${3*o+n+1}宫，数字${s}和${c}只能出现在单元格(${e[0].row+1},${e[0].col+1})和(${e[1].row+1},${e[1].col+1})中`})}}};for(let a=0;a<9;a++)o(a),n(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),l=((e,t={})=>{const r=[];for(let o=0;o<3;o++)for(let n=0;n<3;n++)for(let i=1;i<=9;i++){const a=[];for(let t=0;t<3;t++)for(let r=0;r<3;r++){const l=3*o+t,s=3*n+r;0===e[l][s]&&Mo(e,l,s,i)&&a.push({row:l,col:s,r:t,c:r})}if(a.length<2)continue;const l=a.every(e=>e.r===a[0].r),s=a.every(e=>e.c===a[0].c);if(l){const l=3*o+a[0].r,s=[],c=[];for(let r=0;r<9;r++)r>=3*n&&r<3*(n+1)||0!==e[l][r]||!Mo(e,l,r,i)||(t[`${l}-${r}`]||[]).includes(i)&&(s.push([l,r]),c.push(i));s.length>0&&r.push({type:"pointingPairsRow",description:"指向对法(行)",boxRow:o,boxCol:n,row:l,number:i,sourceCells:a.map(e=>[e.row,e.col]),targetCells:s,removableCandidates:c,message:`在第${3*o+n+1}宫，数字${i}只能出现在第${l+1}行，可以排除该行其他宫格中数字${i}的可能性`})}else if(s){const l=3*n+a[0].c,s=[],c=[];for(let r=0;r<9;r++)r>=3*o&&r<3*(o+1)||0!==e[r][l]||!Mo(e,r,l,i)||(t[`${r}-${l}`]||[]).includes(i)&&(s.push([r,l]),c.push(i));s.length>0&&r.push({type:"pointingPairsCol",description:"指向对法(列)",boxRow:o,boxCol:n,col:l,number:i,sourceCells:a.map(e=>[e.row,e.col]),targetCells:s,removableCandidates:c,message:`在第${3*o+n+1}宫，数字${i}只能出现在第${l+1}列，可以排除该列其他宫格中数字${i}的可能性`})}}return r})(e,t),s=((e,t={})=>{const r=[];for(let o=0;o<9;o++)for(let n=1;n<=9;n++){const i=[];for(let t=0;t<9;t++)0===e[o][t]&&Mo(e,o,t,n)&&i.push({row:o,col:t});if(i.length<1)continue;const a=i.map(e=>Math.floor(e.col/3));if(a.every(e=>e===a[0])){const l=a[0],s=Math.floor(o/3),c=[],d=[];for(let r=3*s;r<3*(s+1);r++)if(r!==o)for(let o=3*l;o<3*(l+1);o++)0===e[r][o]&&Mo(e,r,o,n)&&(t[`${r}-${o}`]||[]).includes(n)&&(c.push([r,o]),d.push(n));c.length>0&&r.push({type:"boxLineReductionRow",description:"宫行列排除法(行)",row:o,boxRow:s,boxCol:l,number:n,sourceCells:i.map(e=>[e.row,e.col]),targetCells:c,removableCandidates:d,message:`在第${o+1}行，数字${n}只能出现在第${3*s+l+1}宫，可以排除该宫中其他行数字${n}的可能性`})}}for(let o=0;o<9;o++)for(let n=1;n<=9;n++){const i=[];for(let t=0;t<9;t++)0===e[t][o]&&Mo(e,t,o,n)&&i.push({row:t,col:o});if(i.length<1)continue;const a=i.map(e=>Math.floor(e.row/3));if(a.every(e=>e===a[0])){const l=a[0],s=Math.floor(o/3),c=[],d=[];for(let r=3*l;r<3*(l+1);r++)for(let i=3*s;i<3*(s+1);i++)i!==o&&0===e[r][i]&&Mo(e,r,i,n)&&(t[`${r}-${i}`]||[]).includes(n)&&(c.push([r,i]),d.push(n));c.length>0&&r.push({type:"boxLineReductionCol",description:"宫行列排除法(列)",col:o,boxRow:l,boxCol:s,number:n,sourceCells:i.map(e=>[e.row,e.col]),targetCells:c,removableCandidates:d,message:`在第${o+1}列，数字${n}只能出现在第${3*l+s+1}宫，可以排除该宫中其他列数字${n}的可能性`})}}return r})(e,t),c=((e,t={})=>{const r=[],o=o=>{const n=[];for(let r=0;r<9;r++){if(0!==e[o][r])continue;const i=t[`${o}-${r}`]||[];i.length>=1&&i.length<=3&&n.push({row:o,col:r,notes:i})}for(let i=0;i<n.length-2;i++)for(let a=i+1;a<n.length-1;a++)for(let l=a+1;l<n.length;l++){const s=n[i],c=n[a],d=n[l],u=[...new Set([...s.notes,...c.notes,...d.notes])];if(3===u.length){const n=s.notes.every(e=>u.includes(e)),i=c.notes.every(e=>u.includes(e)),a=d.notes.every(e=>u.includes(e));if(n&&i&&a){let n=!1;const i=[],a=[];for(let r=0;r<9;r++){if(r===s.col||r===c.col||r===d.col)continue;if(0!==e[o][r])continue;const l=(t[`${o}-${r}`]||[]).filter(e=>u.includes(e));l.length>0&&(n=!0,i.push([o,r]),l.forEach(e=>a.push(e)))}n&&r.push({type:"nakedTripleRow",description:"显性三链数法(行)",cells:[[s.row,s.col],[c.row,c.col],[d.row,d.col]],values:u,targetCells:i,removableCandidates:a,message:`在第${o+1}行，单元格(${s.col+1})、(${c.col+1})和(${d.col+1})形成显性三链数[${u.join(",")}]`})}}}},n=o=>{const n=[];for(let r=0;r<9;r++){if(0!==e[r][o])continue;const i=t[`${r}-${o}`]||[];i.length>=1&&i.length<=3&&n.push({row:r,col:o,notes:i})}for(let i=0;i<n.length-2;i++)for(let a=i+1;a<n.length-1;a++)for(let l=a+1;l<n.length;l++){const s=n[i],c=n[a],d=n[l],u=[...new Set([...s.notes,...c.notes,...d.notes])];if(3===u.length){const n=s.notes.every(e=>u.includes(e)),i=c.notes.every(e=>u.includes(e)),a=d.notes.every(e=>u.includes(e));if(n&&i&&a){let n=!1;const i=[],a=[];for(let r=0;r<9;r++){if(r===s.row||r===c.row||r===d.row)continue;if(0!==e[r][o])continue;const l=(t[`${r}-${o}`]||[]).filter(e=>u.includes(e));l.length>0&&(n=!0,i.push([r,o]),l.forEach(e=>a.push(e)))}n&&r.push({type:"nakedTripleCol",description:"显性三链数法(列)",cells:[[s.row,s.col],[c.row,c.col],[d.row,d.col]],values:u,targetCells:i,removableCandidates:a,message:`在第${o+1}列，单元格(${s.row+1})、(${c.row+1})和(${d.row+1})形成显性三链数[${u.join(",")}]`})}}}},i=(o,n)=>{const i=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const l=3*o+r,s=3*n+a;if(0!==e[l][s])continue;const c=t[`${l}-${s}`]||[];c.length>=1&&c.length<=3&&i.push({row:l,col:s,notes:c})}for(let a=0;a<i.length-2;a++)for(let l=a+1;l<i.length-1;l++)for(let s=l+1;s<i.length;s++){const c=i[a],d=i[l],u=i[s],f=[...new Set([...c.notes,...d.notes,...u.notes])];if(3===f.length){const i=c.notes.every(e=>f.includes(e)),a=d.notes.every(e=>f.includes(e)),l=u.notes.every(e=>f.includes(e));if(i&&a&&l){let i=!1;const a=[],l=[];for(let r=0;r<3;r++)for(let s=0;s<3;s++){const p=3*o+r,h=3*n+s;if(p===c.row&&h===c.col||p===d.row&&h===d.col||p===u.row&&h===u.col)continue;if(0!==e[p][h])continue;const m=(t[`${p}-${h}`]||[]).filter(e=>f.includes(e));m.length>0&&(i=!0,a.push([p,h]),m.forEach(e=>l.push(e)))}i&&r.push({type:"nakedTripleBox",description:"显性三链数法(宫)",cells:[[c.row,c.col],[d.row,d.col],[u.row,u.col]],values:f,targetCells:a,removableCandidates:l,message:`在第${3*o+n+1}宫，单元格(${c.row+1},${c.col+1})、(${d.row+1},${d.col+1})和(${u.row+1},${u.col+1})形成显性三链数[${f.join(",")}]`})}}}};for(let a=0;a<9;a++)o(a),n(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),d=((e,t={})=>{const r=[],o=o=>{const n={};for(let e=1;e<=9;e++)n[e]=[];for(let r=0;r<9;r++)0===e[o][r]&&(t[`${o}-${r}`]||[]).forEach(e=>{n[e]&&n[e].push(r)});const i=Object.keys(n).map(Number).filter(e=>3===n[e].length);for(let e=0;e<i.length-2;e++)for(let a=e+1;a<i.length-1;a++)for(let l=a+1;l<i.length;l++){const s=i[e],c=i[a],d=i[l],u=n[s].sort().join(","),f=n[c].sort().join(","),p=n[d].sort().join(",");if(u===f&&f===p){const e=n[s];let i=!1;const a=[],l=[];e.forEach(e=>{const r=(t[`${o}-${e}`]||[]).filter(e=>e!==s&&e!==c&&e!==d);r.length>0&&(i=!0,a.push([o,e]),r.forEach(e=>l.push(e)))}),i&&r.push({type:"hiddenTripleRow",description:"隐性三链数法(行)",cells:[[o,e[0]],[o,e[1]],[o,e[2]]],values:[s,c,d],targetCells:a,removableCandidates:l,message:`在第${o+1}行，数字${s}、${c}和${d}只能出现在单元格(${e[0]+1})、(${e[1]+1})和(${e[2]+1})中`})}}},n=o=>{const n={};for(let e=1;e<=9;e++)n[e]=[];for(let r=0;r<9;r++)0===e[r][o]&&(t[`${r}-${o}`]||[]).forEach(e=>{n[e]&&n[e].push(r)});const i=Object.keys(n).map(Number).filter(e=>3===n[e].length);for(let e=0;e<i.length-2;e++)for(let a=e+1;a<i.length-1;a++)for(let l=a+1;l<i.length;l++){const s=i[e],c=i[a],d=i[l],u=n[s].sort().join(","),f=n[c].sort().join(","),p=n[d].sort().join(",");if(u===f&&f===p){const e=n[s];let i=!1;const a=[],l=[];e.forEach(e=>{const r=(t[`${e}-${o}`]||[]).filter(e=>e!==s&&e!==c&&e!==d);r.length>0&&(i=!0,a.push([e,o]),r.forEach(e=>l.push(e)))}),i&&r.push({type:"hiddenTripleCol",description:"隐性三链数法(列)",cells:[[e[0],o],[e[1],o],[e[2],o]],values:[s,c,d],targetCells:a,removableCandidates:l,message:`在第${o+1}列，数字${s}、${c}和${d}只能出现在单元格(${e[0]+1})、(${e[1]+1})和(${e[2]+1})中`})}}},i=(o,n)=>{const i={};for(let e=1;e<=9;e++)i[e]=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const l=3*o+r,s=3*n+a;0===e[l][s]&&(t[`${l}-${s}`]||[]).forEach(e=>{i[e]&&i[e].push({row:l,col:s})})}const a=Object.keys(i).map(Number).filter(e=>3===i[e].length);for(let e=0;e<a.length-2;e++)for(let l=e+1;l<a.length-1;l++)for(let s=l+1;s<a.length;s++){const c=a[e],d=a[l],u=a[s],f=i[c].map(e=>`${e.row}-${e.col}`).sort().join(","),p=i[d].map(e=>`${e.row}-${e.col}`).sort().join(","),h=i[u].map(e=>`${e.row}-${e.col}`).sort().join(",");if(f===p&&p===h){const e=i[c];let a=!1;const l=[],s=[];e.forEach(e=>{const r=`${e.row}-${e.col}`,o=(t[r]||[]).filter(e=>e!==c&&e!==d&&e!==u);o.length>0&&(a=!0,l.push([e.row,e.col]),o.forEach(e=>s.push(e)))}),a&&r.push({type:"hiddenTripleBox",description:"隐性三链数法(宫)",cells:e.map(e=>[e.row,e.col]),values:[c,d,u],targetCells:l,removableCandidates:s,message:`在第${3*o+n+1}宫，数字${c}、${d}和${u}只能出现在单元格(${e[0].row+1},${e[0].col+1})、(${e[1].row+1},${e[1].col+1})和(${e[2].row+1},${e[2].col+1})中`})}}};for(let a=0;a<9;a++)o(a),n(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),u=((e,t={})=>{const r=[];return(()=>{for(let o=1;o<=9;o++){const n=[];for(let r=0;r<9;r++){const i=[];for(let n=0;n<9;n++){if(0!==e[r][n])continue;const a=t[`${r}-${n}`]||[];Mo(e,r,n,o)&&a.includes(o)&&i.push(n)}2===i.length&&n.push({row:r,cols:i})}for(let i=0;i<n.length-1;i++)for(let a=i+1;a<n.length;a++){const l=n[i],s=n[a],c=new Set(l.cols),d=new Set(s.cols);if(c.size===d.size&&[...c].every(e=>d.has(e))){const n=[],i=[];l.cols.forEach(r=>{for(let a=0;a<9;a++)a!==l.row&&a!==s.row&&0===e[a][r]&&(t[`${a}-${r}`]||[]).includes(o)&&(n.push([a,r]),i.push(o))}),n.length>0&&r.push({type:"xWingRow",description:"X-Wing(行)",number:o,cells:[[l.row,l.cols[0]],[l.row,l.cols[1]],[s.row,s.cols[0]],[s.row,s.cols[1]]],targetCells:n,removableCandidates:i,message:`在行${l.row+1}和${s.row+1}，数字${o}形成X-Wing，可以排除列${l.cols.map(e=>e+1).join("和")}中其他行的数字${o}候选数`})}}}})(),(()=>{for(let o=1;o<=9;o++){const n=[];for(let r=0;r<9;r++){const i=[];for(let n=0;n<9;n++){if(0!==e[n][r])continue;const a=t[`${n}-${r}`]||[];Mo(e,n,r,o)&&a.includes(o)&&i.push(n)}2===i.length&&n.push({col:r,rows:i})}for(let i=0;i<n.length-1;i++)for(let a=i+1;a<n.length;a++){const l=n[i],s=n[a],c=new Set(l.rows),d=new Set(s.rows);if(c.size===d.size&&[...c].every(e=>d.has(e))){const n=[],i=[];l.rows.forEach(r=>{for(let a=0;a<9;a++)a!==l.col&&a!==s.col&&0===e[r][a]&&(t[`${r}-${a}`]||[]).includes(o)&&(n.push([r,a]),i.push(o))}),n.length>0&&r.push({type:"xWingCol",description:"X-Wing(列)",number:o,cells:[[l.rows[0],l.col],[l.rows[1],l.col],[s.rows[0],s.col],[s.rows[1],s.col]],targetCells:n,removableCandidates:i,message:`在列${l.col+1}和${s.col+1}，数字${o}形成X-Wing，可以排除行${l.rows.map(e=>e+1).join("和")}中其他列的数字${o}候选数`})}}}})(),r})(e,t),f=((e,t={})=>{const r=[],o=(e,t)=>{if(e.row===t.row)return!0;if(e.col===t.col)return!0;const r=Math.floor(e.row/3),o=Math.floor(e.col/3),n=Math.floor(t.row/3),i=Math.floor(t.col/3);return r===n&&o===i},n=(e,t)=>e.filter(e=>t.includes(e)),i=(()=>{const r=[];for(let o=0;o<9;o++)for(let n=0;n<9;n++){if(0!==e[o][n])continue;const i=t[`${o}-${n}`]||[];2===i.length&&r.push({row:o,col:n,notes:i})}return r})();for(let a=0;a<i.length;a++){const l=i[a],[s,c]=l.notes,d=[],u=[];for(let e=0;e<i.length;e++){if(a===e)continue;const t=i[e];if(!o(l,t))continue;const r=n(l.notes,t.notes);if(1===r.length){if(r[0]===s&&t.notes.includes(s)&&t.notes.includes(c))continue;if(r[0]===s){const e=t.notes.find(e=>e!==s);e&&e!==c&&d.push({...t,z:e})}else if(r[0]===c){const e=t.notes.find(e=>e!==c);e&&e!==s&&u.push({...t,z:e})}}}for(const o of d)for(const n of u){if(o.z!==n.z)continue;const i=o.z,a=[],d=[];for(let r=0;r<9;r++)for(let s=0;s<9;s++){if(0!==e[r][s])continue;if(r===l.row&&s===l.col||r===o.row&&s===o.col||r===n.row&&s===n.col)continue;const c=r===o.row||s===o.col||Math.floor(r/3)===Math.floor(o.row/3)&&Math.floor(s/3)===Math.floor(o.col/3),u=r===n.row||s===n.col||Math.floor(r/3)===Math.floor(n.row/3)&&Math.floor(s/3)===Math.floor(n.col/3);c&&u&&(t[`${r}-${s}`]||[]).includes(i)&&(a.push([r,s]),d.push(i))}a.length>0&&r.push({type:"yWing",description:"Y-Wing(XY-Wing)",anchorCell:[l.row,l.col],xzCell:[o.row,o.col],yzCell:[n.row,n.col],cells:[[l.row,l.col],[o.row,o.col],[n.row,n.col]],x:s,y:c,z:i,targetCells:a,removableCandidates:d,message:`Y-Wing: 锚点(${l.row+1},${l.col+1})[${s},${c}], XZ单元格(${o.row+1},${o.col+1})[${s},${i}], YZ单元格(${n.row+1},${n.col+1})[${c},${i}]，可以排除交叉单元格的数字${i}候选数`})}}return r})(e,t);const r=new Set,h=e=>{e.forEach(e=>{e.cells&&e.cells.forEach(([e,t])=>{r.add(`${e}-${t}`)})})};h(o),h(n),p=((e,t={})=>{const r=[];for(let o=0;o<9;o++)for(let n=0;n<9;n++){if(0!==e[o][n])continue;const i=t[`${o}-${n}`]||[];1===i.length&&r.push({type:"notesSingle",description:"singleCandidateTechnique",row:o,col:n,value:i[0],cells:[[o,n]],notes:i,message:`单元格(${o+1},${n+1})的候选数中只有数字${i[0]}`})}return r})(e,t).filter(e=>!e.cells.some(([e,t])=>r.has(`${e}-${t}`)))}const h=[...o,...n];return r&&Object.keys(t).length>0&&(h.push(...p),h.push(...i),h.push(...a),h.push(...l),h.push(...s),h.push(...c),h.push(...d),h.push(...u),h.push(...f)),h},Oo=e.createContext(),Fo={EASY:"easy",MEDIUM:"medium",HARD:"hard",EXPERT:"expert"},Do=({children:t})=>{const{userId:r,updateUserStats:o}=ho(),{t:n}=le(),[i,a]=e.useState(null),[l,s]=e.useState(null),[d,u]=e.useState(null),[f,p]=e.useState(null),[h,m]=e.useState(Fo.MEDIUM),[g,x]=e.useState(!1),[y,b]=e.useState(!1),[w,C]=e.useState(0),[k,j]=e.useState(!1),[S,$]=e.useState(!1),[z,T]=e.useState(null),[P,A]=e.useState({}),[N,I]=e.useState([]),[E,R]=e.useState([]),[M,L]=e.useState([]),[O,F]=e.useState(-1),[D,H]=e.useState(0),[B,q]=e.useState(0),[_,W]=e.useState(new Set),[U,G]=e.useState(!1),[Y,J]=e.useState({}),[V,X]=e.useState(new Set);e.useEffect(()=>{(async()=>{$(!0),console.log("SudokuContext: 初始化自动生成谜题");try{J({}),L([]),F(-1),H(0),q(0),W(new Set),X(new Set),console.log("使用预设的数独题目");const e={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]};console.log("预设谜题数据:",e);const t=oe(e);console.log("格式化后的数据:",t),a(t),console.log("设置 currentPuzzle 完成"),u(t.puzzle),console.log("设置 originalPuzzle 完成"),s(t.puzzle),console.log("设置 currentBoard 完成，currentBoard:",t.puzzle),p(t.solution),console.log("设置 solution 完成"),x(!0),console.log("设置 gameStarted 为 true"),b(!1),j(!0),H(0),q(0),W(new Set),console.log("谜题初始化完成")}catch(e){console.error("自动初始化谜题失败:",e),console.error("错误详情:",e.message,e.stack)}finally{$(!1)}})()},[]),e.useEffect(()=>{if(i&&l&&g&&!y){const e=setTimeout(()=>{Z()},3e4);return()=>clearTimeout(e)}},[l,g,y]),e.useEffect(()=>{let e;return k&&(e=setInterval(()=>{C(e=>e+1)},1e3)),()=>{e&&clearInterval(e)}},[k]);const K=e.useCallback(async()=>{try{if(!r)return null;const e=(await c.keys()).filter(e=>e.startsWith(`progress_${r}_`));if(0===e.length)return null;let t=null,o=0;for(const r of e){const e=await c.getItem(r);e.lastModified>o&&(o=e.lastModified,t=e)}return t&&(a({id:t.puzzleId,puzzle:t.puzzle}),s(t.currentBoard),p(t.solution),m(t.difficulty),C(t.timeElapsed),x(t.gameStarted),b(t.gameCompleted),H(t.errorCount||0),q(t.errorCount||0),W(new Set(t.incorrectCells||[])),j(!1)),t}catch(e){return console.error("加载游戏进度失败:",e),null}},[r]),Z=e.useCallback(async()=>{try{if(!r||!i||!l)return;const e={puzzleId:i.id,puzzle:i.puzzle,solution:f,difficulty:h,currentBoard:l,timeElapsed:w,gameStarted:g,gameCompleted:y,errorCount:B,incorrectCells:Array.from(_),lastModified:Date.now()};return await c.setItem(`progress_${r}_${i.id}`,e),!0}catch(e){return console.error("保存游戏进度失败:",e),!1}},[r,i,l,f,h,w,g,y,D,_]),ee=()=>Array(9).fill().map(()=>Array(9).fill(0)),te=async(e="medium")=>{try{console.log(`开始生成${e}难度的数独题目...`);const t=await $o(e);if(console.log("generateSudoku 返回结果:",t),!t||!t.puzzle||!t.solution)throw console.error("生成的数独数据不完整:",t),new Error("生成的数独数据不完整");const{puzzle:r,solution:o}=t;return ko(r)?(console.log(`成功生成${e}难度的数独题目，使用DLX算法验证了唯一解`),console.log("谜题数据预览:",r.slice(0,2).map(e=>e.slice(0,2).join(",")).join(";")),{puzzle:r,solution:o}):(console.warn("警告：生成的数独题目可能没有唯一解"),te(e))}catch(t){return console.error(`生成${e}难度的数独题目时出错:`,t),await re(e)}},re=async(e="medium")=>{try{console.log(`使用备用方法生成${e}难度的数独题目...`);const{puzzle:t,solution:r}=await $o(e);return console.log(`备用方法成功生成${e}难度的数独题目`),{puzzle:t,solution:r}}catch(t){console.error("备用方法生成数独题目失败:",t);const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];return console.log("使用预设的简单数独题目作为最后的备用"),{puzzle:e,solution:r}}},oe=e=>{if(console.log("formatPuzzleData 输入:",e),e&&e.puzzle){if("string"==typeof e.puzzle&&81===e.puzzle.length){const t=[];for(let r=0;r<9;r++){t.push([]);for(let o=0;o<9;o++)t[r].push(parseInt(e.puzzle[9*r+o])||0)}return{puzzle:t,solution:e.solution&&"string"==typeof e.solution&&81===e.solution.length?(()=>{const t=[];for(let r=0;r<9;r++){t.push([]);for(let o=0;o<9;o++)t[r].push(parseInt(e.solution[9*r+o])||0)}return t})():t}}if(Array.isArray(e.puzzle)&&9===e.puzzle.length){const t=e.puzzle.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0));let r=t;return e.solution&&Array.isArray(e.solution)&&9===e.solution.length&&(r=e.solution.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0))),console.log("formatPuzzleData 输出:",{puzzle:t,solution:r}),{puzzle:t,solution:r}}}console.warn("formatPuzzleData: 输入数据不完整或格式不正确，返回默认空数组",e);const t=Array(9).fill().map(()=>Array(9).fill(0));return{puzzle:t,solution:t}},ne=(e,t,r)=>!f||!f[e]||void 0===f[e][t]||f[e][t]===r,ie=(e,t,r)=>{if(!g||y)return;if(d&&d[e]&&null!==d[e][t]&&0!==d[e][t])return void console.log("Cannot modify prefilled cell with notes:",e,t);const o=`${e}-${t}`,n={...Y},i=M.slice(0,O+1);i.push({board:l,pencilNotes:{...Y},row:e,col:t,type:"pencil"}),L(i),F(i.length-1),n[o]?n[o].includes(r)?(n[o]=n[o].filter(e=>e!==r),0===n[o].length&&delete n[o]):n[o]=[...new Set([...n[o],r])].sort((e,t)=>e-t):n[o]=[r],J(n)},ae=(e,t)=>{if(!g||y)return;const r=`${e}-${t}`;if(!Y[r])return;const o=M.slice(0,O+1);o.push({board:l,pencilNotes:{...Y},row:e,col:t,type:"clear-pencil"}),L(o),F(o.length-1);const n={...Y};delete n[r],J(n)},se=(e,t,r,o=!1)=>{if(!g||y)return;const n=`${e}-${t}`;if(d&&d[e]&&null!==d[e][t]&&0!==d[e][t])return void console.log("Cannot modify prefilled cell:",e,t);if(V.has(n))return void console.log("Cannot modify locked cell (correct answer):",e,t);if(U&&!o)return void(0===r?ae(e,t):ie(e,t,r));const i=[...l.map(e=>[...e])],a=ne(e,t,r);i[e][t]=r,s(i);const c={...Y};if(0!==r&&c[n]&&delete c[n],0!==r&&a){for(let i=0;i<9;i++)if(i!==t){const t=`${e}-${i}`;c[t]&&(c[t]=c[t].filter(e=>e!==r),0===c[t].length&&delete c[t])}for(let i=0;i<9;i++)if(i!==e){const e=`${i}-${t}`;c[e]&&(c[e]=c[e].filter(e=>e!==r),0===c[e].length&&delete c[e])}const o=3*Math.floor(e/3),n=3*Math.floor(t/3);for(let i=o;i<o+3;i++)for(let o=n;o<n+3;o++)if(i!==e||o!==t){const e=`${i}-${o}`;c[e]&&(c[e]=c[e].filter(e=>e!==r),0===c[e].length&&delete c[e])}}J(c);const u=M.slice(0,O+1);u.push({board:l,pencilNotes:{...Y},row:e,col:t,prevValue:l[e][t],type:"fill",isCorrectInput:0!==r&&a}),L(u),F(u.length-1);const f=new Set(_);if(0!==r)if(a){f.delete(n);const e=new Set(V);e.add(n),X(e)}else _.has(n)||q(e=>e+1),f.add(n),Q.error("输入错误，请重试！",{position:"top-right",autoClose:1e3,theme:"colored"});else f.delete(n);W(f),ce(i)},ce=e=>{if(f){for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(!e[t][r]||e[t][r]!==f[t][r])return;b(!0),j(!1),W(new Set),o&&o({puzzlesCompleted:1,puzzlesSolved:1,totalTimePlayed:w}),Q.success("恭喜！您成功完成了这个数独！",{position:"top-right",autoClose:3e3}),Z()}},de=e.useCallback(()=>{try{const e=Y&&"object"==typeof Y&&Object.keys(Y).length>0,t=Lo(l,Y,e);return R(t),t}catch(e){return console.error("识别技巧失败:",e),[]}},[l,Y]),ue=e.useCallback(e=>{const t=U;let r=!1;const o=e.type&&("nakedSingle"===e.type||"notesSingle"===e.type||"hiddenSingleRow"===e.type||"hiddenSingleCol"===e.type||"hiddenSingleBox"===e.type);try{o&&t&&(G(!1),r=!0);const i=((e,t)=>{const r=t.map(e=>[...e]);switch(e.type){case"nakedSingle":case"hiddenSingleRow":case"hiddenSingleCol":case"hiddenSingleBox":case"notesSingle":if(void 0!==e.row&&void 0!==e.col&&void 0!==e.value)return r[e.row][e.col]=e.value,{board:r,operation:{type:"fill",row:e.row,col:e.col,value:e.value}};break;case"nakedPairRow":case"nakedPairCol":case"nakedPairBox":case"hiddenPairRow":case"hiddenPairCol":case"hiddenPairBox":case"nakedTripleRow":case"nakedTripleCol":case"nakedTripleBox":case"hiddenTripleRow":case"hiddenTripleCol":case"hiddenTripleBox":case"pointingPairsRow":case"pointingPairsCol":case"boxLineReductionRow":case"boxLineReductionCol":return{board:r,operation:{type:"highlight",cells:e.cells||e.sourceCells,targetCells:e.targetCells,values:e.values||[e.number],removableCandidates:e.removableCandidates}};default:return console.warn("未知的技巧类型:",e.type),{board:r,operation:null}}return{board:r,operation:null}})(e,l);if(i&&i.board){const t=i.operation;if(t&&"fill"===t.type&&"number"==typeof t.row&&"number"==typeof t.col&&"number"==typeof t.value){const{row:e,col:r,value:o}=t;return se(e,r,o,!0),!0}if(t&&"removeCandidates"===t.type&&Array.isArray(t.cells)){const r={...P};return t.cells.forEach(e=>{if("number"==typeof e.row&&"number"==typeof e.col&&Array.isArray(e.valuesToRemove)){const t=`${e.row}-${e.col}`,o=(P[t]||[]).filter(t=>!e.valuesToRemove.includes(t));r[t]=o}}),A(r),console.log("成功移除候选数:",e.type),Q.success(n("candidatesRemovedSuccess",{defaultMessage:"候选数已成功移除"}),{position:"top-right",autoClose:2e3}),!0}return t&&"highlight"===t.type?(console.log("技巧应用成功（高亮提示）:",e.type),e.type&&(e.type.includes("Pair")||e.type.includes("pair"))?Q.success(n("pairTechniqueIdentified",{defaultMessage:"数对技巧已识别，建议手动移除相关候选数"}),{position:"top-right",autoClose:3e3}):Q.success(n("pairTechniqueIdentified",{defaultMessage:"技巧已识别，建议手动移除相关候选数"}),{position:"top-right",autoClose:3e3}),!0):(console.warn("无法应用技巧：操作信息不完整或类型不支持",t),Q.info(n("techniqueOnlyForHint",{defaultMessage:"此技巧主要用于提示，暂不支持自动应用"}),{position:"top-right",autoClose:2e3}),!1)}return!1}catch(i){return console.error("应用技巧失败:",i),Q.error(n("techniqueApplyFailed",{defaultMessage:"应用技巧失败，请重试"}),{position:"top-right",autoClose:2e3}),r&&G(!0),!1}finally{r&&G(!0)}},[se,l,U,P,A,G]),fe=(e,t)=>{if(!l)return[];const r=[];for(let o=1;o<=9;o++)pe(e,t,o)&&r.push(o);return r.sort((e,t)=>e-t)},pe=(e,t,r)=>{if(!l)return!1;for(let i=0;i<9;i++)if(l[e][i]===r)return!1;for(let i=0;i<9;i++)if(l[i][t]===r)return!1;const o=3*Math.floor(e/3),n=3*Math.floor(t/3);for(let i=o;i<o+3;i++)for(let e=n;e<n+3;e++)if(l[i][e]===r)return!1;return!0},he={currentPuzzle:i,currentBoard:l||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:d,solution:f||Array(9).fill().map(()=>Array(9).fill(0)),difficulty:h,gameStarted:g,gameCompleted:y,timeElapsed:w,timerActive:k,isTimerActive:k,isLoading:S,selectedCell:z,candidates:P,highlightedCells:N,activeTechniques:E,lockedCells:V,history:M,historyIndex:O,errorCount:B,incorrectCells:_,isPencilMode:U,pencilNotes:Y,setDifficulty:m,setSelectedCell:T,setHighlightedCells:I,setTimerActive:j,toggleTimer:()=>{j(e=>!e)},togglePencilMode:()=>{G(e=>!e)},togglePencilNote:ie,clearPencilNotes:ae,fillAllCandidates:()=>{if(!g||y||!l)return;const e=M.slice(0,O+1);e.push({board:l,pencilNotes:{...Y},type:"fill-candidates"}),L(e),F(e.length-1);const t={};for(let r=0;r<9;r++)for(let e=0;e<9;e++){if(d&&d[r]&&0!==d[r][e]||l[r]&&0!==l[r][e])continue;const o=fe(r,e);o.length>0&&(t[`${r}-${e}`]=o)}return J(t),Q.info(n("candidatesFilled",{defaultMessage:"已为所有空白格子计算并填充候选数！"}),{position:"top-right",autoClose:2e3}),!0},calculateTechniques:()=>{if(!g||y||!l)return;let e=!1;for(let r=0;r<9;r++){for(let t=0;t<9;t++){if(d&&d[r]&&0!==d[r][t]||l[r]&&0!==l[r][t])continue;const o=`${r}-${t}`;if(!(Y[o]&&Y[o].length>0)){e=!0;break}}if(e)break}if(e)return Q.info(n("emptyCandidateCellsFound",{defaultMessage:"发现无候选数的空白单元格，重新计算候选数..."}),{position:"top-right",autoClose:2e3}),!0;let t=!1;if(f)for(let r=0;r<9;r++){for(let e=0;e<9;e++){if(d&&d[r]&&0!==d[r][e]||l[r]&&0!==l[r][e])continue;const o=Y[`${r}-${e}`]||[],n=f[r][e];if(!o.includes(n)){t=!0;break}}if(t)break}return t?(Q.error(n("candidateErrorDetected",{defaultMessage:"存在候选数删减错误，数据刷新"}),{position:"top-right",autoClose:3e3}),!0):(Q.info(n("candidatesComplete",{defaultMessage:"候选数正确完整，直接计算技巧机会！"}),{position:"top-right",autoClose:2e3}),!1)},loadSavedProgress:K,saveGameProgress:Z,startNewGame:async(e=null,t=null,r=!0)=>{console.log("SudokuContext: 开始新游戏",{puzzleId:e,difficultyOverride:t});try{x(!1),s(ee()),J({}),G(!1),A({}),R([]),I([]),T(null),j(!1),C(0),b(!1),L([]),F(-1),H(0),q(0),W(new Set),X(new Set),await new Promise(e=>setTimeout(e,50)),x(!0),await new Promise(e=>setTimeout(e,50));const e=t||h;let l;console.log("使用难度:",e),e!==h&&m(e);let c=0;const d=3;let f=!1;for(;!l&&c<d;){c++,console.log(`尝试生成谜题 (${c}/${d})`);try{if(e===Fo.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const e=await No();e&&e.puzzle&&e.solution?(l=e,f=!0,console.log("成功从JSON文件获取专家级谜题")):console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成")}catch(n){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",n)}}l||(console.log("使用程序生成谜题"),l=await te(e))}catch(i){console.error(`生成谜题失败 (尝试 ${c}/${d}):`,i)}}if(!l){console.error("多次尝试生成谜题失败，使用备用谜题");l={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]}}const g=oe(l);if(console.log("谜题数据准备完成，formattedData:",g),!g||!g.puzzle||!Array.isArray(g.puzzle)||9!==g.puzzle.length){console.error("格式化后的数据无效，使用备用谜题");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];g.puzzle=e,g.solution=t}return a(g),console.log("设置 currentPuzzle 完成"),u(g.puzzle),console.log("设置 originalPuzzle 完成"),s(g.puzzle),console.log("设置 currentBoard 完成"),p(g.solution),console.log("设置 solution 完成"),x(!0),b(!1),C(0),j(!0),L([]),F(-1),o&&o({puzzlesStarted:1}),r&&(e===Fo.EXPERT?Q.success(f?"Expert puzzle loaded!":"Expert puzzle generated!",{position:"top-right",autoClose:2e3}):r&&Q.success("New puzzle generated!",{position:"top-right",autoClose:2e3})),console.log("新游戏设置完成"),g}catch(l){console.error("开始新游戏失败:",l);try{const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],o={puzzle:e,solution:t};return a(o),u(e),s(e),p(t),x(!0),b(!1),j(!0),r&&Q.success("Backup puzzle used!",{position:"top-right",autoClose:2e3}),o}catch(c){console.error("使用备用谜题也失败:",c),r&&Q.error("生成谜题失败，请刷新页面重试",{position:"top-right",autoClose:2e3})}return null}},generateNewPuzzle:async(e=h,t=!0)=>{console.log("SudokuContext: 生成新谜题",{targetDifficulty:e});try{let t;if(s(ee()),J({}),G(!1),A({}),R([]),I([]),j(!1),C(0),b(!1),L([]),F(-1),H(0),q(0),W(new Set),X(new Set),x(!0),await new Promise(e=>setTimeout(e,50)),e!==h&&(m(e),console.log("已设置新难度:",e)),e===Fo.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const r=await No();r&&r.puzzle&&r.solution?(t=r,console.log("成功从JSON文件获取专家级谜题")):(console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成"),t=await te(e))}catch(r){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",r),t=await te(e)}}else console.log("非专家难度：使用程序生成谜题"),t=await te(e);const n=oe(t);return console.log("谜题数据准备完成，formattedData:",n),console.log("puzzleData.puzzle 是否存在:",!!n.puzzle),n.puzzle&&(console.log("puzzle 类型:",Array.isArray(n.puzzle)?"数组":typeof n.puzzle),console.log("puzzle 长度:",Array.isArray(n.puzzle)?n.puzzle.length:"不是数组"),Array.isArray(n.puzzle)&&n.puzzle.length>0&&console.log("puzzle 第一行:",n.puzzle[0])),a(n),console.log("设置 currentPuzzle 完成"),u(n.puzzle),console.log("设置 originalPuzzle 完成"),s(n.puzzle),console.log("设置 currentBoard 完成"),p(n.solution),console.log("设置 solution 完成"),x(!0),b(!1),C(0),j(!0),L([]),F(-1),o&&o({puzzlesStarted:1}),Q.success("New puzzle generated!",{position:"top-right",autoClose:2e3}),console.log("新谜题设置完成"),n}catch(n){return console.error("生成新谜题失败:",n),t&&Q.error("生成谜题失败，请重试",{position:"top-right",autoClose:2e3}),null}},fillCell:se,clearCell:(e,t)=>{if(!g||y)return;const r=`${e}-${t}`;if(d&&d[e]&&0!==d[e][t])return void console.log("Cannot clear prefilled cell:",e,t);if(V.has(r))return void console.log("Cannot clear locked cell (correct answer):",e,t);const o=M.slice(0,O+1);if(o.push({board:l,pencilNotes:{...Y},row:e,col:t,prevValue:l[e][t],type:"clear"}),L(o),F(o.length-1),U)return void ae(e,t);const n=[...l.map(e=>[...e])];n[e][t]=0,s(n);const i=new Set(_);i.delete(r),W(i),H(i.size);const a=new Set(V);a.delete(r),X(a)},undo:()=>{if(O>=0){const e=M[O];s(e.board),e.pencilNotes&&J(e.pencilNotes),F(O-1),b(!1);const t=new Set;for(let o=0;o<9;o++)for(let r=0;r<9;r++){const n=e.board[o][r];0!==n&&f&&n!==f[o][r]&&t.add(`${o}-${r}`)}W(t);const r=new Set;for(let o=0;o<9;o++)for(let t=0;t<9;t++){const n=e.board[o][t];0!==n&&f&&n===f[o][t]&&r.add(`${o}-${t}`)}X(r)}else console.log("没有可撤销的操作")},redo:()=>{if(O<M.length-1){const e=M[O+1];s(e.board),e.pencilNotes&&J(e.pencilNotes),F(O+1);const t=new Set;for(let o=0;o<9;o++)for(let r=0;r<9;r++){const n=e.board[o][r];0!==n&&f&&n!==f[o][r]&&t.add(`${o}-${r}`)}W(t);const r=new Set;for(let o=0;o<9;o++)for(let t=0;t<9;t++){const n=e.board[o][t];0!==n&&f&&n===f[o][t]&&r.add(`${o}-${t}`)}X(r),ce(e.board)}},getCandidates:async(e,t)=>{try{const r=await go.getCandidates(l,e,t);return A(r.candidates),r.candidates}catch(r){return console.error("获取候选数失败:",r),[]}},identifyTechniques:de,applyTechniqueToBoard:ue,getHint:async()=>{try{return await go.getHint(l,f)}catch(e){return console.error("获取提示失败:",e),Q.error("获取提示失败，请重试",{position:"top-right",autoClose:2e3}),null}},validateCellInput:ne};return v.jsx(Oo.Provider,{value:he,children:t})},Ho=()=>{const t=e.useContext(Oo);if(!t)throw new Error("useSudoku must be used within a SudokuContextProvider");return t},Bo=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0;
  @media (max-width: 640px) {
    gap: 30px;
    padding: 10px 0;
  }
`,qo=Hr.section`
  text-align: center;
  padding: 40px 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    padding: 30px 15px;
  }
`,_o=Hr.h1`
  font-size: 42px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`,Wo=Hr.p`
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
`,Uo=Hr.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`,Go=Hr(n)`
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
`,Yo=Hr(n)`
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
`,Jo=Hr.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  @media (max-width: 640px) {
    gap: 20px;
  }
`,Vo=Hr.div`
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
`,Xo=Hr.div`
  font-size: 48px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  display: flex;
  justify-content: center;
`,Ko=Hr.h3`
  font-size: 22px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`,Qo=Hr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  line-height: 1.6;
  margin: 0;
  text-align: center;
`,Zo=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,en=Hr.h2`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 26px;
  }
`,tn=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`,rn=Hr.button`
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
`,on=Hr.button`
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
`,nn=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,an=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`,ln=Hr.div`
  text-align: center;
  padding: 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 8px;
`,sn=Hr.div`
  font-size: 36px;
  font-weight: bold;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 10px;
  @media (max-width: 640px) {
    font-size: 30px;
  }
`,cn=Hr.div`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
`,dn=()=>{oe();const{userStats:e}=ho(),{setDifficulty:t,startNewGame:r}=Ho(),{executeWithLoading:n,isLoading:a}=de(),l=i(),[s,c]=o.useState(Fo.MEDIUM),d=e=>{c(e)};return v.jsxs(Bo,{children:[v.jsxs(qo,{children:[v.jsx(_o,{children:"欢迎来到数独学习应用"}),v.jsx(Wo,{children:"提升您的数独技能，学习从基础到高级的解题技巧。适合各级别玩家，让您的数独之旅更加精彩！"}),v.jsxs(Uo,{children:[v.jsx(Go,{to:"/game",children:"开始游戏"}),v.jsx(Yo,{to:"/techniques",children:"学习技巧"})]})]}),v.jsxs(Jo,{children:[v.jsxs(Vo,{children:[v.jsx(Xo,{children:"🧠"}),v.jsx(Ko,{children:"多种难度"}),v.jsx(Qo,{children:"从简单到专家级别的数独谜题，适合不同水平的玩家，循序渐进提升您的技能。"})]}),v.jsxs(Vo,{children:[v.jsx(Xo,{children:"💡"}),v.jsx(Ko,{children:"技巧学习"}),v.jsx(Qo,{children:"详细的解题技巧讲解，从唯一候选数到高级技巧，帮助您掌握数独的精髓。"})]}),v.jsxs(Vo,{children:[v.jsx(Xo,{children:"📊"}),v.jsx(Ko,{children:"进度追踪"}),v.jsx(Qo,{children:"记录您的游戏进度和技巧掌握情况，分析您的表现，持续进步。"})]}),v.jsxs(Vo,{children:[v.jsx(Xo,{children:"🎯"}),v.jsx(Ko,{children:"实时提示"}),v.jsx(Qo,{children:"遇到困难时获得智能提示，帮助您理解下一步的解题思路和技巧应用。"})]})]}),v.jsxs(Zo,{children:[v.jsx(en,{children:"快速开始"}),v.jsxs(tn,{children:[v.jsx(rn,{selected:s===Fo.EASY,onClick:()=>d(Fo.EASY),children:"简单"}),v.jsx(rn,{selected:s===Fo.MEDIUM,onClick:()=>d(Fo.MEDIUM),children:"中等"}),v.jsx(rn,{selected:s===Fo.HARD,onClick:()=>d(Fo.HARD),children:"困难"}),v.jsx(rn,{selected:s===Fo.EXPERT,onClick:()=>d(Fo.EXPERT),children:"专家"})]}),v.jsx(on,{onClick:async()=>{t(s);const e=await n(()=>r(null,s),"准备游戏中...");e&&l(`/game/${e.id}`)},disabled:a,children:a?v.jsx(ao,{showMessage:!1}):"开始游戏"})]}),v.jsxs(nn,{children:[v.jsx(en,{children:"您的进度"}),v.jsxs(an,{children:[v.jsxs(ln,{children:[v.jsx(sn,{children:e.puzzlesStarted}),v.jsx(cn,{children:"开始的谜题"})]}),v.jsxs(ln,{children:[v.jsx(sn,{children:e.puzzlesCompleted}),v.jsx(cn,{children:"完成的谜题"})]}),v.jsxs(ln,{children:[v.jsx(sn,{children:e.puzzlesSolved}),v.jsx(cn,{children:"独立解决"})]}),v.jsxs(ln,{children:[v.jsx(sn,{children:Math.floor(e.totalTimePlayed/60)}),v.jsx(cn,{children:"游戏分钟"})]})]})]})]})},un=Hr.div.attrs({className:"sudoku-board"})`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  border: 3px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.gridLineThick)||"#34495e"}};
  border-radius: 12px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  position: relative;
  width: 100% !important;
  aspect-ratio: 1 / 1 !important;
  margin: 0 auto !important;
  padding: 0;
  box-sizing: border-box;
  overflow: visible !important;
  z-index: 1;
  grid-gap: 0;
  // 使用多层阴影增加立体感
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.12),
    0 8px 24px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  border: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  transition: all 0.3s ease;
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  
  // 增加悬停效果，与导航栏保持一致
  &:hover {
    box-shadow: 
      0 6px 12px rgba(0, 0, 0, 0.15),
      0 12px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.6);
  }
  
  // 在横屏模式下增加更深的阴影效果
  @media (min-width: 992px) {
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.15),
      0 16px 48px rgba(0, 0, 0, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
    
    &:hover {
      box-shadow: 
        0 12px 32px rgba(0, 0, 0, 0.18),
        0 20px 64px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
    }
  }
`,fn=Hr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(var(--board-width) * 0.08);
  font-weight: 500;
  cursor: pointer;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.cellBackground)||"#ffffff"}};
  color: #3498db; /* 修改为蓝色，用于用户输入的数字 */
  border: 1px dashed ${e=>{var t;return(null==(t=e.theme)?void 0:t.gridLine)||"#e0e0e0"}};
    transition: all 0.2s ease;
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
    
    /* 完全移除3x3子网格之间的虚线边框，避免与粗边框重叠 */
     /* 处理列方向的网格分隔线 */
     ${e=>e.col%3==0&&e.col>0&&"border-left: none;"}
     ${e=>e.col%3==2&&"border-right: none;"}
     /* 处理行方向的网格分隔线 */
     ${e=>e.row%3==0&&e.row>0&&"border-top: none;"}
     ${e=>e.row%3==2&&"border-bottom: none;"}

  /* 基础样式类 */
  &.prefilled {
    cursor: default;
    color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textOriginal)||"#666666"}};
    font-weight: 400; /* 将预填数字字体调整为较细 */
  }
  
  &.highlighted {
    background-color: #cce5ff;
  }
  
  &.selected {
    background-color: #ffffff;
    z-index: 2;
    /* 为选中的单元格添加蓝色实线边框 */
    border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}} !important;
  }
  
  &.error,
  &.incorrect {
    color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"red"}};
    background-color: ${e=>{var t;return((null==(t=e.theme)?void 0:t.error)||"#e74c3c")+"20"}};
    border-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"red"}};
  }
  
  &.same-number {
    background-color: #d1ecf1;
  }
  
  &.same-region {
    background-color: #e8f4fd;
  }
  
  &.same-note {
    background-color: #fff3cd;
  }
  
  &.technique-indicator {
    background-color: #ffeaa7;
  }

  /* 边缘单元格处理 */
  ${e=>0===e.row&&"border-top: none;"}
  ${e=>8===e.row&&"border-bottom: none;"}
  ${e=>0===e.col&&"border-left: none;"}
  ${e=>8===e.col&&"border-right: none;"}
  
  /* 四个角落单元格的特殊处理 */
  ${e=>0===e.row&&0===e.col&&"border-radius: 5px 0 0 0;"}
  ${e=>0===e.row&&8===e.col&&"border-radius: 0 5px 0 0;"}
  ${e=>8===e.row&&0===e.col&&"border-radius: 0 0 0 5px;"}
  ${e=>8===e.row&&8===e.col&&"border-radius: 0 0 5px 0;"}
  
  /* 3x3子网格（宫）之间的分隔 */
  ${e=>{var t,r;let o="";return e.col%3==0&&e.col>0&&(o+="border-left: 2px solid "+((null==(t=e.theme)?void 0:t.gridLineThick)||"#34495e")+";"),e.row%3==0&&e.row>0&&(o+="border-top: 2px solid "+((null==(r=e.theme)?void 0:r.gridLineThick)||"#34495e")+";"),o}}
  
  // 悬停效果（仅在非移动设备上）
  @media (hover: hover) {
    &:not(.prefilled):hover {
      background-color: ${e=>{var t;return((null==(t=e.theme)?void 0:t.primary)||"#3498db")+"15"}} !important;
    }
  }
  
  // 触摸反馈
  &:active {
    transform: scale(0.97);
  }
  
  // 横屏模式下调整字体大小
  @media (min-width: 992px) {
    font-size: calc(var(--board-width) * 0.09);
  }
  
  // 屏幕较大时适当减小字体比例以避免文字过大
  @media (min-width: 992px) and (min-height: 800px) {
    font-size: calc(var(--board-width) * 0.08);
  }
  
  // 屏幕非常大时进一步减小字体比例
  @media (min-width: 992px) and (min-height: 900px) {
    font-size: calc(var(--board-width) * 0.075);
  }
  
  // 高度不足时的字体大小调整
  @media (min-width: 992px) and (max-height: 700px) {
    font-size: calc(var(--board-width) * 0.08);
  }
  
  @media (min-width: 992px) and (max-height: 600px) {
    font-size: calc(var(--board-width) * 0.07);
  }
  
  // 竖屏模式下调整字体大小
  @media (max-width: 991px) {
    font-size: calc(var(--board-width) * 0.07);
    min-height: 36px;
  }
`,pn=({notes:e=[],highlightedNumber:t=null})=>{const r=Array.isArray(e)?e:[],o={display:"flex",alignItems:"center",justifyContent:"center",fontSize:"calc(var(--board-width) * 0.025)",fontWeight:"500",color:"#4A6FA5",padding:"1px"},n={color:"#ffffff",backgroundColor:"#3498db",borderRadius:"50%",fontWeight:"bold",width:"80%",height:"80%"};return v.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr",width:"100%",height:"100%",boxSizing:"border-box"},children:r.map(e=>{const r=(e-1)%3,i=Math.floor((e-1)/3),a=t&&e===t;return v.jsx("div",{style:{...o,gridColumn:r+1,gridRow:i+1,...a&&n},children:e},e)})})},hn=({board:e,selectedCell:t,onCellClick:r,originalPuzzle:o,isPencilMode:n,pencilNotes:i,incorrectCells:a,highlightedCells:l})=>{const{theme:s}=oe(),c=e||Array(9).fill().map(()=>Array(9).fill(0)),d=o||Array(9).fill().map(()=>Array(9).fill(0)),u=i||{},f=a||new Set,p=(e,t)=>3*Math.floor(e/3)+Math.floor(t/3),h=(e,r,o)=>{const i=[];if(u[`${e}-${r}`],((e,t,r)=>!(!d||!d[t]||null===d[t][r]||0===d[t][r]))(0,e,r)&&i.push("prefilled"),((e=>"error"===e)(o)||((e,t)=>{const r=`${e}-${t}`;return f instanceof Set?f.has(r):!!Array.isArray(f)&&f.some(r=>r.row===e&&r.col===t)})(e,r))&&i.push("error"),!t&&l&&Array.isArray(l)){l.some(t=>t.row===e&&t.col===r)&&i.push("highlighted")}if(t&&t.row===e&&t.col===r)i.push("selected"),i.push(n?"pencil-selected":"normal-selected");else if(t){const n=c[t.row][t.col],l=`${t.row}-${t.col}`;u[l],o&&o===n&&i.push("same-number"),a=e,s=r,h=t.row,m=t.col,(a===h||s===m||p(a,s)===p(h,m))&&i.push("same-region")}var a,s,h,m;return i.join(" ")};return v.jsx(un,{theme:s,children:c.map((e,o)=>e.map((e,n)=>{const i=h(o,n,e),a=`${o}-${n}`,d=u[a]||[],f=d.length>0;let p=null;if(t&&void 0!==t.row&&void 0!==t.col&&c[t.row]&&c[t.row][t.col]){const e=c[t.row][t.col];0!==e&&"error"!==e&&(p=e)}if(!p&&l&&Array.isArray(l)&&l.length>0){const e=l[0];e&&e.number&&0!==e.number&&"error"!==e.number&&(p=e.number)}return v.jsx(fn,{row:o,col:n,className:i,onClick:()=>((e,t)=>{r&&r(e,t)})(o,n),theme:s,children:e&&0!==e&&"error"!==e?e:f?v.jsx(pn,{notes:d,highlightedNumber:p}):""},a)}))})},mn=()=>v.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"white",children:[v.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",stroke:"white",strokeWidth:"1.5",fill:"transparent"}),v.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"white",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"white",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",fill:"white",children:"2"}),v.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",fill:"white",children:"5"})]}),gn=({onNumberSelect:t,onClearCell:r,onUndo:o,togglePencilMode:n,fillAllCandidates:i,calculateTechniques:a,selectedNumber:l,isPencilMode:s,remainingNumbers:c={}})=>{const d=()=>window.innerHeight>window.innerWidth,[u,f]=e.useState(d());e.useEffect(()=>{const e=()=>{f(d())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),oe();const{t:p}=le(),[h,m]=e.useState("keyboard"),[g,x]=e.useState(null),[y,b]=e.useState(0),w=Ho(),{identifyTechniques:C,applyTechniqueToBoard:k,gameStarted:j,currentBoard:S,setHighlightedCells:$,setSelectedCell:z,selectedCell:T}=w||{},P=e.useCallback(()=>{m("keyboard"),$&&$([]),x(null),b(0)},[$]);e.useEffect(()=>{T&&P()},[T,P]);const[A,N]=e.useState([]),[I,E]=e.useState([]);e.useEffect(()=>{m("keyboard"),x(null),E([]),N([]),b(0),$&&$([])},[j,S]);const R=e.useCallback(()=>{if(C&&S)try{const e=C();N(e||[])}catch(e){console.error("查找技巧失败:",e),N([])}else N([])},[C,S]);e.useEffect(()=>{"techniques"===h&&j&&S&&R()},[h,R,j,S]),e.useEffect(()=>{N([])},[j,S]);const M=e=>{x(e);const t=[],r="number"==typeof e.row&&"number"==typeof e.col,o=r?e.row:0,n=r?e.col:0,i=r?`(${o+1},${n+1})`:p("multipleCells"),a=e.value||"";if("nakedSingle"===e.type)t.push({step:1,description:p("findSingleCandidateCell"),highlight:""},{step:2,description:p("cellOnlyHasSingleCandidate").replace("{position}",i).replace("{value}",a),highlight:i},{step:3,description:p("fillNumber").replace("{value}",a),highlight:i});else if(e.type.includes("hiddenSingle")){const l=e.type.includes("Row")?p("row"):e.type.includes("Col")?p("col"):p("box");let s=0;if(r)s=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&l===p("row"))s=e.row+1;else if(void 0!==e.col&&l===p("col"))s=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?l===p("col")&&"number"==typeof t[1]?s=t[1]+1:"number"==typeof t[0]&&(s=t[0]+1):t&&(l===p("col")&&void 0!==t.col?s=t.col+1:void 0!==t.row&&(s=t.row+1))}t.push({step:1,description:p("findHiddenSingleInRegion").replace("{regionType}",l).replace("{regionNum}",s),highlight:""},{step:2,description:p("numberOnlyInPosition").replace("{value}",a).replace("{regionType}",l).replace("{regionNum}",s).replace("{position}",i),highlight:i},{step:3,description:p("fillNumber").replace("{value}",a),highlight:i})}else if(e.type.includes("NakedPairs")||e.type.includes("nakedPairs")||e.type.includes("nakedPair")){const a=e.type.includes("Row")?p("row"):e.type.includes("Col")?p("col"):p("box");let l=0;if(r)l=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&a===p("row"))l=e.row+1;else if(void 0!==e.col&&a===p("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===p("col")&&"number"==typeof t[1]?l=t[1]+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(a===p("col")&&void 0!==t.col?l=t.col+1:void 0!==t.row&&(l=t.row+1))}const s=Array.isArray(e.values)?e.values.join(","):"数对",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>{if(Array.isArray(e)){return`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`}return`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`}).join(" "):i,d=[];if(a===p("row")&&l>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===l-1&&e[1]===t||void 0!==e.row&&e.row===l-1&&e.col===t),o=S&&S[l-1]&&S[l-1][t]>0;r||o||d.push([l-1,t])}else if(a===p("col")&&l>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===t&&e[1]===l-1||void 0!==e.row&&e.row===t&&e.col===l-1),o=S&&S[t]&&S[t][l-1]>0;r||o||d.push([t,l-1])}else if(a===p("box")&&l>0){const t=3*Math.floor((l-1)/3),r=(l-1)%3*3;for(let o=0;o<3;o++)for(let n=0;n<3;n++){const i=t+o,a=r+n,l=e.cells.some(e=>Array.isArray(e)&&e[0]===i&&e[1]===a||void 0!==e.row&&e.row===i&&e.col===a),s=S&&S[i]&&S[i][a]>0;l||s||d.push([i,a])}}const u=d.length>0?d.map(e=>{if(Array.isArray(e)){return`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`}return`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`}).join(" "):p("multipleCells");t.push({step:1,description:`在${a}${l}中查找数对`,highlight:""},{step:2,description:p("foundNakedPair",{numbers:s,cells:c}),highlight:i},{step:3,description:p("removeCandidatesFromTargets",{numbers:s,targets:u}),highlight:i})}else if(e.type.includes("HiddenPairs")||e.type.includes("hiddenPairs")||e.type.includes("hiddenPair")){const a=e.type.includes("Row")?p("row"):e.type.includes("Col")?p("col"):p("box");let l=0;if(r)l=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&a===p("row"))l=e.row+1;else if(void 0!==e.col&&a===p("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===p("col")&&"number"==typeof t[1]?l=t[1]+1:a===p("box")&&"number"==typeof t[0]&&"number"==typeof t[1]?l=3*Math.floor(t[0]/3)+Math.floor(t[1]/3)+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(a===p("col")&&void 0!==t.col?l=t.col+1:a===p("box")&&void 0!==t.row&&void 0!==t.col?l=3*Math.floor(t.row/3)+Math.floor(t.col/3)+1:void 0!==t.row&&(l=t.row+1))}const s=Array.isArray(e.values)?e.values.join(","):"数对",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>{if(Array.isArray(e)){return`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`}return`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`}).join(" "):i;t.push({step:1,description:p("findHiddenPairInRegion",{regionType:a,regionNum:l}),highlight:""},{step:2,description:p("foundNumbersOnlyInCells",{numbers:s,cells:c}),highlight:i},{step:3,description:p("removeOtherCandidates",{cells:c,numbers:s}),highlight:i})}else if(e.type.includes("nakedTriple")){const a=e.type.includes("Row")?p("row"):e.type.includes("Col")?p("col"):p("box");let l=0;if(r)l=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&a===p("row"))l=e.row+1;else if(void 0!==e.col&&a===p("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===p("col")&&"number"==typeof t[1]?l=t[1]+1:a===p("box")&&"number"==typeof t[0]&&"number"==typeof t[1]?l=3*Math.floor(t[0]/3)+Math.floor(t[1]/3)+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(a===p("col")&&void 0!==t.col?l=t.col+1:a===p("box")&&void 0!==t.row&&void 0!==t.col?l=3*Math.floor(t.row/3)+Math.floor(t.col/3)+1:void 0!==t.row&&(l=t.row+1))}const s=Array.isArray(e.values)?e.values.join(","):"三链数",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>{if(Array.isArray(e)){return`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`}return`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`}).join(" "):i,d=[];if(a===p("row")&&l>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===l-1&&e[1]===t||void 0!==e.row&&e.row===l-1&&e.col===t),o=S&&S[l-1]&&S[l-1][t]>0;r||o||d.push([l-1,t])}else if(a===p("col")&&l>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===t&&e[1]===l-1||void 0!==e.row&&e.row===t&&e.col===l-1),o=S&&S[t]&&S[t][l-1]>0;r||o||d.push([t,l-1])}else if(a===p("box")&&l>0){const t=3*Math.floor((l-1)/3),r=(l-1)%3*3;for(let o=0;o<3;o++)for(let n=0;n<3;n++){const i=t+o,a=r+n,l=e.cells.some(e=>Array.isArray(e)&&e[0]===i&&e[1]===a||void 0!==e.row&&e.row===i&&e.col===a),s=S&&S[i]&&S[i][a]>0;l||s||d.push([i,a])}}const u=d.length>0?d.map(e=>{if(Array.isArray(e)){return`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`}return`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`}).join(" "):p("relatedCells");t.push({step:1,description:p("findTripleInRegion",{regionType:a,regionNum:l}),highlight:""},{step:2,description:p("foundNakedTriple",{numbers:s,cells:c}),highlight:i},{step:3,description:p("removeCandidatesFromTargets",{numbers:s,targets:u}),highlight:i})}else if(e.type.includes("hiddenTriple")){const a=e.type.includes("Row")?p("row"):e.type.includes("Col")?p("col"):p("box");let l=0;if(r)l=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&a===p("row"))l=e.row+1;else if(void 0!==e.col&&a===p("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===p("col")&&"number"==typeof t[1]?l=t[1]+1:a===p("box")&&"number"==typeof t[0]&&"number"==typeof t[1]?l=3*Math.floor(t[0]/3)+Math.floor(t[1]/3)+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(a===p("col")&&void 0!==t.col?l=t.col+1:a===p("box")&&void 0!==t.row&&void 0!==t.col?l=3*Math.floor(t.row/3)+Math.floor(t.col/3)+1:void 0!==t.row&&(l=t.row+1))}const s=Array.isArray(e.values)?e.values.join(","):"三链数",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>{if(Array.isArray(e)){return`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`}return`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`}).join(" "):i;t.push({step:1,description:p("findHiddenTripleInRegion",{regionType:a,regionNum:l}),highlight:""},{step:2,description:p("foundNumbersOnlyInCells",{numbers:s,cells:c}),highlight:i},{step:3,description:p("removeOtherCandidates",{cells:c,numbers:s}),highlight:i})}else if(e.type.includes("pointingPairs")){const r=e.type.includes("Row")?p("row"):p("col"),o=3*e.boxRow+e.boxCol+1,n=(r===p("row")?e.row:e.col)+1;e.sourceCells&&Array.isArray(e.sourceCells)?e.sourceCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells");const a=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells");t.push({step:1,description:p("findPointingPairsInBox",{boxNum:o,number:e.number,lineType:r,lineNum:n}),highlight:""},{step:2,description:p("removePointingPairsFromTargets",{number:e.number,targets:a,lineType:r,lineNum:n}),highlight:i})}else if(e.type.includes("boxLineReduction")){const r=e.type.includes("Row")?p("row"):p("col"),o=3*e.boxRow+e.boxCol+1,n=(r===p("row")?e.row:e.col)+1;e.sourceCells&&Array.isArray(e.sourceCells)?e.sourceCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells");const a=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells");t.push({step:1,description:p("findBoxLineReductionInLine",{lineType:r,lineNum:n,number:e.number,boxNum:o}),highlight:""},{step:2,description:p("removeBoxLineReductionFromTargets",{number:e.number,targets:a,boxNum:o}),highlight:i})}else t.push({step:1,description:p("applyTechnique",{technique:p(e.description)||e.type}),highlight:""},{step:2,description:p("relatedPosition",{position:i}),highlight:i},{step:3,description:a?p("relatedNumber",{number:a}):p("analysisCompleted"),highlight:i});if(E(t),b(0),$){const t=(e=>{const t=[],{cells:i=[],targetCells:l=[],values:s=[],removableCandidates:c=[],result:d={}}=e,{operation:u}=d,f=(e,r,o=null,n=[])=>{t.push({row:e,col:r,techniqueIndicator:!0,highlightType:"primary",number:o,notesToRemove:n,isTarget:!0,backgroundColor:"rgba(76, 175, 80, 0.2)",borderColor:"#4CAF50"})};if(Array.isArray(i)&&i.length>0&&i.forEach(r=>{const o=Array.isArray(r)?r[0]:"number"==typeof r.row?r.row:null,n=Array.isArray(r)?r[1]:"number"==typeof r.col?r.col:null;if(null!==o&&null!==n){t.some(e=>e.row===o&&e.col===e)||f(o,n,r.value||e.number,r.notes||[])}}),Array.isArray(l)&&l.length>0&&l.forEach(r=>{const o=Array.isArray(r)?r[0]:"number"==typeof r.row?r.row:null,n=Array.isArray(r)?r[1]:"number"==typeof r.col?r.col:null;if(null!==o&&null!==n){t.some(e=>e.row===o&&e.col===e)||((e,r,o=null)=>{t.push({row:e,col:r,techniqueIndicator:!0,highlightType:"secondary",number:o,isTarget:!0,backgroundColor:"rgba(33, 150, 243, 0.2)",borderColor:"#2196F3"})})(o,n,e.number)}}),r&&"number"==typeof o&&"number"==typeof n){if(t.some(e=>e.row===o&&e.col===n)||f(o,n,a),["nakedSingle","notesSingle"].includes(e.type))t.forEach(e=>{e.row===o&&e.col===n&&(e.relatedAreas=["row","col","box"])});else if(e.type.startsWith("hiddenSingle")){const r=e.type.replace("hiddenSingle","").toLowerCase();t.forEach(e=>{e.row===o&&e.col===n&&(e.relatedAreas=[r])})}}u&&"removeCandidates"===u.type&&Array.isArray(u.cells)&&u.cells.forEach(e=>{if("number"==typeof e.row&&"number"==typeof e.col&&Array.isArray(e.valuesToRemove)){const{row:r,col:o,valuesToRemove:n}=e,i=t.findIndex(e=>e.row===r&&e.col===o);-1===i?((e,r,o,n=!1)=>{t.push({row:e,col:r,techniqueIndicator:!0,highlightType:"removal",notesToRemove:o,isTarget:!1,backgroundColor:n?"rgba(244, 67, 54, 0.1)":"transparent",borderColor:"#F44336",borderStyle:"dashed"})})(r,o,n,!0):(t[i].notesToRemove=n,t[i].highlightType="primary"===t[i].highlightType?"primary-removal":"removal")}}),Array.isArray(s)&&s.length>0&&t.forEach(e=>{e.highlightedValues||(e.highlightedValues=s)}),Array.isArray(c)&&c.length>0&&t.forEach(e=>{e.notesToRemove||(e.notesToRemove=c)});return(e.type||"").includes("pointingPairs")&&e.sourceCells&&Array.isArray(e.sourceCells)&&e.sourceCells.forEach(e=>{const r=Array.isArray(e)?e[0]:e.row;Array.isArray(e)?e[1]:e.col;const o=t.findIndex(e=>e.row===r&&e.col===e);-1!==o&&(t[o].highlightType="primary",t[o].isTarget=!0)}),t})(e);$(t)}m("solution")},L=()=>{if(g){k(g)&&($&&$([]),z&&z(null),R())}};return v.jsxs("div",{className:"control-panel",style:{backgroundColor:"#ffffff",borderRadius:"12px",padding:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.12)",display:"flex",flexDirection:"column",fontFamily:"Arial, Microsoft YaHei, sans-serif",margin:0,boxSizing:"border-box",border:"1px solid #e0e0e0",position:"relative",height:u?"auto":"var(--board-width)",maxHeight:u?"400px":"var(--board-width)",minHeight:u?"200px":"var(--board-width)",overflow:"hidden",outline:"none",WebkitTapHighlightColor:"transparent"},children:[v.jsx("h3",{style:{display:"none"},children:"控制面板"}),v.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,margin:0,minHeight:0,overflow:"hidden"},children:[v.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #e0e0e0",marginBottom:"8px",paddingBottom:0},children:[v.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"keyboard"===h?"#3498db15":"transparent",border:"none",borderRadius:"4px 4px 0 0",color:"keyboard"===h?"#3498db":"#333",cursor:"pointer",outline:"none",WebkitTapHighlightColor:"transparent",transition:"background-color 0.3s, color 0.3s"},onClick:()=>m("keyboard"),children:p("keyboard")}),v.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"techniques"===h?"#3498db15":"transparent",border:"none",borderRadius:"4px 4px 0 0",color:"techniques"===h?"#3498db":"#333",cursor:"pointer",outline:"none",WebkitTapHighlightColor:"transparent",transition:"background-color 0.3s, color 0.3s"},onClick:()=>{m("techniques")},children:p("techniques")}),v.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"solution"===h?"#3498db15":"transparent",border:"none",borderRadius:"6px 6px 0 0",fontSize:"14px",fontWeight:"solution"===h?"700":"500",color:"solution"===h?"#3498db":"#7f8c8d",cursor:"pointer",margin:"0 2px",boxSizing:"border-box",minHeight:"32px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>{m("solution"),z&&z(null),s&&n&&n()},children:p("solutionTab")})]}),v.jsxs("div",{style:{flex:1,padding:"4px 0",overflow:"visible",position:"relative",display:"flex",flexDirection:"column",minHeight:0},children:["keyboard"===h&&v.jsx(v.Fragment,{children:window.innerWidth<=768?v.jsxs(v.Fragment,{children:[v.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"4px",marginBottom:"8px",padding:"0 2px"},children:[1,2,3,4,5,6].map(e=>{const r=c.hasOwnProperty(e)?c[e]:9,o=0===r;return v.jsxs("button",{className:"number-button",disabled:o,onClick:r=>{r.stopPropagation(),!o&&t(e)},style:{position:"relative",backgroundColor:l===e||s?"#3498db":"#ffffff",color:l===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:o?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[v.jsx("span",{style:{fontSize:"clamp(40px, 12vw, 80px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),v.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",backgroundColor:"transparent",color:l===e||s?"white":"#3498db",fontSize:"14px",fontWeight:"bold",padding:"1px 4px",borderRadius:"8px",minWidth:"16px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)})}),v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"4px",padding:"0 2px"},children:[[7,8,9].map(e=>{const r=c.hasOwnProperty(e)?c[e]:9,o=0===r;return v.jsxs("button",{className:"number-button",disabled:o,onClick:r=>{r.stopPropagation(),!o&&t(e)},style:{position:"relative",backgroundColor:l===e||s?"#3498db":"#ffffff",color:l===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:o?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[v.jsx("span",{style:{fontSize:"clamp(40px, 12vw, 80px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),v.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",backgroundColor:"transparent",color:l===e||s?"white":"#3498db",fontSize:"14px",fontWeight:"bold",padding:"1px 4px",borderRadius:"8px",minWidth:"16px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)}),v.jsx("button",{onClick:e=>{e.stopPropagation(),o()},title:p("undoAction"),style:{position:"relative",backgroundColor:"#ffffff",color:"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"60px !important",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 7v6h6"}),v.jsx("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})},"undo"),v.jsx("button",{onClick:e=>{e.stopPropagation(),r()},title:p("clearCell"),style:{position:"relative",backgroundColor:"#ff4444",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"24px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsxs("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 6h18"}),v.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),v.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),v.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),v.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})},"clear"),v.jsx("button",{onClick:e=>{e.stopPropagation(),n()},title:p(s?"exitPencilMode":"enterPencilMode"),style:{position:"relative",backgroundColor:s?"#3498db":"#ffffff",color:s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"24px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})},"pencil")]})]}):v.jsxs("div",{className:"number-pad",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"6px",width:"100%",maxHeight:"100%",overflow:"visible",padding:"4px",boxSizing:"border-box"},children:[[1,2,3,4,5,6,7,8,9].map(e=>{const r=c.hasOwnProperty(e)?c[e]:9,o=0===r;return v.jsxs("button",{className:"number-button",disabled:o,onClick:r=>{r.stopPropagation(),!o&&t(e)},style:{position:"relative",backgroundColor:l===e||s?"#3498db":"#ffffff",color:l===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"400",lineHeight:"1",cursor:o?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",fontSize:"0",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[v.jsx("span",{style:{fontSize:"clamp(30px, 8vw, 70px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),v.jsx("span",{style:{position:"absolute",top:"4px",right:"4px",backgroundColor:"transparent",color:l===e||s?"white":"#3498db",fontSize:"16px",fontWeight:"bold",padding:"2px 6px",borderRadius:"10px",minWidth:"20px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)}),v.jsx("button",{onClick:e=>{e.stopPropagation(),o()},title:p("undoAction"),style:{position:"relative",backgroundColor:"#ffffff",color:"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 7v6h6"}),v.jsx("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})},"undo"),v.jsx("button",{onClick:e=>{e.stopPropagation(),r()},title:p("clearCell"),style:{position:"relative",backgroundColor:"#ff4444",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsxs("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 6h18"}),v.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),v.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),v.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),v.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})},"clear"),v.jsx("button",{onClick:e=>{e.stopPropagation(),n()},title:p(s?"exitPencilMode":"enterPencilMode"),style:{position:"relative",backgroundColor:s?"#3498db":"#ffffff",color:s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})},"pencil")]})}),"techniques"===h&&v.jsxs("div",{style:{overflowY:"auto",padding:"4px 8px 8px 8px"},children:[0===A.length?v.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#7f8c8d",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:p("noTechniquesAvailable")}):v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px"},children:A.map((e,t)=>{let r="",o="";if("number"==typeof e.row&&"number"==typeof e.col){r=`(${e.row+1},${e.col+1})`,o=void 0!==e.value?` ${p("number")}: ${e.value}`:""}else if(Array.isArray(e.cells)&&e.cells.length>0){if(1===e.cells.length&&Array.isArray(e.cells[0])){r=`(${e.cells[0][0]+1},${e.cells[0][1]+1})`}else r=p("multipleCells");Array.isArray(e.values)&&e.values.length>0&&(o=` ${p("number")}: [${e.values.join(",")}]`)}else if(e.type.includes("pointingPairs")&&Array.isArray(e.sourceCells)&&e.sourceCells.length>0){if(e.sourceCells.length>0){const t=e.sourceCells[0];if(Array.isArray(t)&&t.length>=2){r=`(${t[0]+1},${t[1]+1})`}else if(t&&"object"==typeof t){r=`(${(void 0!==t.row?t.row:t[0])+1},${(void 0!==t.col?t.col:t[1])+1})`}else r=p("multipleCells")}else r=p("multipleCells");void 0!==e.number&&(o=` ${p("number")}: ${e.number}`)}else if(e.type.includes("pointingPairs")){if(void 0!==e.boxRow&&void 0!==e.boxCol){const t=3*e.boxRow+e.boxCol+1;r=`${p("box")} ${t}`}else r=p("multipleCells");void 0!==e.number&&(o=` ${p("number")}: ${e.number}`)}else if(e.type.includes("boxLineReduction")&&Array.isArray(e.sourceCells)&&e.sourceCells.length>0){if(e.sourceCells.length>0){const t=e.sourceCells[0];if(Array.isArray(t)&&t.length>=2){r=`(${t[0]+1},${t[1]+1})`}else if(t&&"object"==typeof t){r=`(${(void 0!==t.row?t.row:t[0])+1},${(void 0!==t.col?t.col:t[1])+1})`}else r=p("multipleCells")}else r=p("multipleCells");void 0!==e.number&&(o=` ${p("number")}: ${e.number}`)}else if(e.type.includes("boxLineReduction")){if(void 0!==e.boxRow&&void 0!==e.boxCol){const t=3*e.boxRow+e.boxCol+1;r=`${p("box")} ${t}`}else r=p("multipleCells");void 0!==e.number&&(o=` ${p("number")}: ${e.number}`)}else r=p("unknownPosition");let n="",i="";"nakedSingle"===e.type||"naked_single"===e.type?n=p("singleCandidateTechnique"):e.type.includes("hidden_single")||e.type.includes("hiddenSingle")?(e.type.includes("row")||e.type.includes("Row")?n=p("hiddenSingleRow"):e.type.includes("col")||e.type.includes("Col")?n=p("hiddenSingleCol"):(e.type.includes("box")||e.type.includes("Box"))&&(n=p("hiddenSingleBox")),i=""):"nakedPairs"===e.type||"naked_pairs"===e.type||e.type.includes("nakedPair")?(n=p("nakedPairs"),e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")?i=p("colSuffix"):e.type.includes("Box")&&(i=p("boxSuffix"))):"hiddenPairs"===e.type||"hidden_pairs"===e.type||e.type.includes("hiddenPair")?(n=p("hiddenPairs"),e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")?i=p("colSuffix"):e.type.includes("Box")&&(i=p("boxSuffix"))):e.type.includes("nakedTriple")?(n=p("nakedTriple"),e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")?i=p("colSuffix"):e.type.includes("Box")&&(i=p("boxSuffix"))):e.type.includes("hiddenTriple")?(n=p("hiddenTriple"),e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")?i=p("colSuffix"):e.type.includes("Box")&&(i=p("boxSuffix"))):e.type.includes("pointingPairs")?(n=p("pointingPairs"),e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")&&(i=p("colSuffix"))):e.type.includes("boxLineReduction")?(n=p("boxLineReduction"),e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")&&(i=p("colSuffix"))):n=e.description||p("unknownTechnique");const a=n+(i?` ${i}`:"");return v.jsx("div",{onClick:()=>M(e),style:{padding:"8px 10px",backgroundColor:"#f8f9fa",borderRadius:"6px",border:"1px solid #e9ecef",cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#e9ecef",e.currentTarget.style.borderColor="#3498db"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#f8f9fa",e.currentTarget.style.borderColor="#e9ecef"},children:v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontWeight:"600",color:"#34495e"},children:[v.jsx("span",{children:a}),v.jsxs("span",{style:{fontSize:"14px",color:"#7f8c8d",fontWeight:"normal"},children:[p("position"),": ",r,o]})]})},t)})}),v.jsx("button",{onClick:()=>{let e=!0;if(a){!1===a()&&(e=!1)}e&&i&&i(),e&&(R(),m("techniques"))},style:{width:"100%",padding:"8px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",transition:"background-color 0.2s ease"},title:p("refreshCandidatesTooltip"),children:v.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[v.jsx(mn,{}),p("fillCandidates")]})})]}),"solution"===h&&v.jsx("div",{style:{overflowY:"auto",padding:"8px",flex:1,minHeight:"200px",maxHeight:"400px"},children:g?v.jsx(v.Fragment,{children:v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"12px"},children:(()=>{const e=I.length;let t=[],r=!1,o=!1;if(2===e)0===y?(t=[I[0]],r=!0):(t=[I[1]],o=!0);else if(3===e)0===y?(t=[I[0],I[1]],r=!0):(t=[I[2]],o=!0);else if(e>=4){const n=2*y,i=Math.min(n+2,e);t=I.slice(n,i),i<e?r=!0:o=!0}else t=I,o=!0;return v.jsxs(v.Fragment,{children:[t.map((e,t)=>0===t&&(r||o)?v.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef",position:"relative"},children:[v.jsx("div",{style:{minWidth:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#3498db",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold"},children:e.step}),v.jsx("div",{style:{flex:1,fontSize:"14px",color:"#34495e",lineHeight:"1.5",paddingRight:"80px",minHeight:"40px"},children:e.description}),v.jsxs("div",{style:{position:"absolute",right:"12px",top:u?"8px":"12px",display:"flex",gap:"6px"},children:[r&&v.jsx("button",{onClick:()=>b(y+1),style:{width:u?"60px":"70px",height:u?"18px":"32px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:u?"5px":"13px",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 4px rgba(52, 152, 219, 0.4), 0 1px 2px rgba(0, 0, 0, 0.15)",transition:"all 0.2s ease",whiteSpace:"nowrap"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#2980b9",e.currentTarget.style.boxShadow="0 2px 4px rgba(0, 0, 0, 0.3)",e.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#3498db",e.currentTarget.style.boxShadow="0 2px 6px rgba(52, 152, 219, 0.3), 0 1px 2px rgba(0, 0, 0, 0.12)",e.currentTarget.style.transform="translateY(0)"},children:p("nextStep")}),o&&v.jsx("button",{onClick:L,style:{width:u?"60px":"70px",height:u?"18px":"32px",backgroundColor:"#2ecc71",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:u?"5px":"13px",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 4px rgba(46, 204, 113, 0.4), 0 1px 2px rgba(0, 0, 0, 0.15)",transition:"all 0.2s ease",whiteSpace:"nowrap"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#27ae60",e.currentTarget.style.boxShadow="0 2px 4px rgba(0, 0, 0, 0.3)",e.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#2ecc71",e.currentTarget.style.boxShadow="0 2px 6px rgba(46, 204, 113, 0.3), 0 1px 2px rgba(0, 0, 0, 0.12)",e.currentTarget.style.transform="translateY(0)"},children:p("apply")})]})]},e.step):v.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[v.jsx("div",{style:{minWidth:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#3498db",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold"},children:e.step}),v.jsx("div",{style:{flex:1,fontSize:"14px",color:"#34495e",lineHeight:"1.5"},children:e.description})]},e.step)),t.length>0&&!(r||o)&&t[0]!==t[t.length-1]&&v.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"12px"},children:v.jsx("button",{onClick:()=>b(y+1),style:{width:u?"75px":"90px",height:u?"22px":"40px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:u?"5px":"14px",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 8px rgba(52, 152, 219, 0.4), 0 2px 4px rgba(0, 0, 0, 0.15)",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#2980b9",e.currentTarget.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)",e.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#3498db",e.currentTarget.style.boxShadow="0 4px 10px rgba(52, 152, 219, 0.3), 0 1px 3px rgba(0, 0, 0, 0.12)",e.currentTarget.style.transform="translateY(0)"},children:p("nextStep")})})]})})()})}):v.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#7f8c8d",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:p("selectTechniqueFirst")})})]})]})]})},xn=Hr.div`
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
`,yn=Hr.div`
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
`,bn=Hr.h2`
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
`,vn=Hr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`,wn=Hr(({isSelected:e,...t})=>v.jsx("button",{...t}))`
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
`,Cn=Hr.div`
  margin-top: 4px;
  font-size: 12px;
  opacity: 0.7;
  font-weight: normal;
`,kn=Hr.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`,jn=Hr.button`
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
`,Sn=Hr.button`
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
`,$n=({isOpen:e,onClose:t,onSelectDifficulty:r,initialDifficulty:n})=>{const{theme:i}=oe(),{t:a}=le(),[l,s]=o.useState(n||Fo.MEDIUM),c={[Fo.EASY]:{name:a("easy"),description:a("difficultyDescription.easy")},[Fo.MEDIUM]:{name:a("medium"),description:a("difficultyDescription.medium")},[Fo.HARD]:{name:a("hard"),description:a("difficultyDescription.hard")},[Fo.EXPERT]:{name:a("expert"),description:a("difficultyDescription.expert")}};if(!e)return null;const d=()=>{r(l),t()};return v.jsx(xn,{onClick:t,onKeyDown:e=>{"Escape"===e.key&&t(),"Enter"===e.key&&d()},children:v.jsxs(yn,{theme:i,onClick:e=>e.stopPropagation(),children:[v.jsx(bn,{theme:i,children:a("selectDifficulty")}),v.jsx(vn,{children:Object.entries(Fo).map(([e,t])=>{const r=c[t];return v.jsxs(wn,{isSelected:l===t,onClick:()=>s(t),theme:i,className:e.toLowerCase(),children:[r.name,v.jsx(Cn,{children:r.description})]},e)})}),v.jsxs(kn,{children:[v.jsx(jn,{theme:i,onClick:t,children:a("cancel")}),v.jsx(Sn,{theme:i,onClick:d,children:a("startGame")})]})]})})},zn=Hr.div.attrs({className:"nav-block"})`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f8f9fa"}};
  border-radius: 12px;
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
  
  // 添加滚动吸附功能
  scroll-snap-align: start;
  scroll-margin: 5px;
  
  // 竖屏模式下减小高度
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 4px;
    min-height: 36px;
    border-bottom-width: 2px;
  }
`;Hr.h3`
  font-size: 14px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 4px 0;
  padding-bottom: 4px;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  display: none; // 竖屏模式下隐藏标题以节省空间
`;const Tn=Hr.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5个按钮平均分布
  gap: 2px;
  margin: 0;
  padding: 2px 0; // 进一步减小内边距以减小整体高度
  
  // 竖屏模式下进一步减小内边距
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 1px 0;
  }
`,Pn=Hr(({isActive:e,...t})=>v.jsx("button",{...t}))`
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
  
  // 竖屏模式下进一步减小高度并确保居中
  @media (max-width: 768px) and (orientation: portrait) {
    min-height: 32px;
    padding: 2px;
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
`,An=Hr.span`
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Nn=()=>v.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})}),In=()=>v.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}),En=()=>v.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M8 5v14l11-7z"})}),Rn=()=>v.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"#FFD700",children:v.jsx("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})}),Mn=()=>v.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:[v.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"transparent",stroke:"currentColor",strokeWidth:"1.5"}),v.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",children:"2"}),v.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",children:"5"})]}),Ln=()=>v.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})}),On=({onNewGame:t,onPauseTimer:r,onGetHint:o,onShowTechniques:n,onToggleNotes:i,onSettings:a,isNotesMode:l=!1,isTimerActive:s=!0,gameCompleted:c=!1})=>{oe();const{t:d}=le(),u=Ho(),{startLoading:f,stopLoading:p}=de(),[h,m]=e.useState(!1),[g,x]=e.useState(!1);return v.jsxs(v.Fragment,{children:[v.jsx(zn,{children:v.jsxs(Tn,{children:[v.jsx(Pn,{onClick:()=>{console.log("NavigationBlock: 打开难度选择模态框"),x(!1),m(!0)},title:d("newGame"),children:v.jsx(An,{children:v.jsx(Nn,{})})}),v.jsx(Pn,{onClick:c?void 0:r,disabled:c,title:d(c?"gameCompleted":s?"pauseTimer":"resume"),children:v.jsx(An,{children:c||s?v.jsx(In,{}):v.jsx(En,{})})}),v.jsx(Pn,{onClick:o,title:d("hint"),children:v.jsx(An,{children:v.jsx(Rn,{})})}),v.jsx(Pn,{onClick:()=>{i(),x(!0)},title:d("notes"),isActive:g,children:v.jsx(An,{children:v.jsx(Mn,{})})}),v.jsx(Pn,{onClick:a,title:d("settings"),children:v.jsx(An,{children:v.jsx(Ln,{})})})]})}),v.jsx($n,{isOpen:h,onClose:()=>m(!1),onSelectDifficulty:async e=>{console.log("NavigationBlock: 选择难度:",e);try{x(!1),n&&console.log("将在生成新游戏时重置技巧状态"),f&&f(d("generatingNewPuzzle")),(null==u?void 0:u.startNewGame)?(console.log("调用 context.startNewGame"),await u.startNewGame(null,e),console.log("startNewGame 完成")):(null==u?void 0:u.generateNewPuzzle)?(console.log("调用 context.generateNewPuzzle"),await u.generateNewPuzzle(e),console.log("generateNewPuzzle 完成")):console.error("上下文函数不可用")}catch(t){console.error("生成新游戏失败:",t)}finally{p&&p()}},initialDifficulty:(null==u?void 0:u.difficulty)||Fo.MEDIUM})]})},Fn=Hr(({theme:e,...t})=>v.jsx("div",{...t})).attrs({className:"display-block"})`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 8px;
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
`,Dn=Hr.div`
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
`,Hn=Hr.span`
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"#ff3b30"}};
  font-weight: 600;
`,Bn=Hr.div`
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
`,qn=Hr.div`
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
`,_n=({errorCount:e,difficulty:t,time:r})=>{oe();const{t:o}=le();return v.jsxs(Fn,{children:[v.jsxs(Dn,{children:[o("error"),": ",v.jsx(Hn,{children:e})]}),v.jsx(Bn,{children:o(t)}),v.jsx(qn,{children:r})]})},Wn=({highlightedCells:t,boardWidth:r,boardHeight:o,isPortrait:n=!1})=>{if(!t||!Array.isArray(t))return null;const i=t.filter(e=>e&&!0===e.techniqueIndicator&&"number"==typeof e.row&&"number"==typeof e.col&&e.row>=0&&e.row<9&&e.col>=0&&e.col<9);if(0===i.length)return null;let a,l,s,c,d;n&&o?(a=r/9,l=o/9,s=`${Math.max(16,.45*Math.min(a,l))}px`,c=`${Math.max(12,.25*Math.min(a,l))}px`,d=o):(a=r/9,l=a,s=`${Math.max(16,.45*a)}px`,c=`${Math.max(12,.25*a)}px`,d=r);const u=e.useMemo(()=>{const e=[];return i.forEach(t=>{if(t.relatedAreas&&Array.isArray(t.relatedAreas)){const{row:r,col:o}=t;if(t.relatedAreas.includes("row")&&e.push({type:"row",row:r,key:`row-${r}`}),t.relatedAreas.includes("col")&&e.push({type:"col",col:o,key:`col-${o}`}),t.relatedAreas.includes("box")){const t=Math.floor(r/3),n=Math.floor(o/3);e.push({type:"box",boxRow:t,boxCol:n,key:`box-${t}-${n}`})}}}),e},[i,a,l]),f=e=>e.notesToRemove&&Array.isArray(e.notesToRemove)&&0!==e.notesToRemove.length?e.notesToRemove.map(t=>{if("number"!=typeof t||t<1||t>9)return null;const r=t-1,o=Math.floor(r/3),n=.32*a,i=.1*a,l=i+r%3*n,s=i+o*n;return v.jsx("div",{style:{position:"absolute",left:`${l}px`,top:`${s}px`,width:`${n}px`,height:`${n}px`,backgroundColor:"#e74c3c",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:40,fontWeight:"bold",border:"2px solid #c0392b",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"},children:v.jsx("span",{style:{fontSize:c,fontWeight:"bold",color:"#ffffff",zIndex:45,textShadow:"2px 2px 4px rgba(0,0,0,0.5)"},children:t})},`removable-note-${e.row}-${e.col}-${t}`)}):null;return v.jsxs("div",{className:"technique-overlay",style:{position:"absolute",top:0,left:0,width:`${r}px`,height:`${d}px`,pointerEvents:"none",zIndex:10,boxSizing:"border-box",background:"transparent"},children:[u.map(e=>"row"===e.type?v.jsx("div",{style:{position:"absolute",left:0,top:e.row*l+"px",width:`${r}px`,height:`${l}px`,backgroundColor:"rgba(52, 152, 219, 0.15)",border:"1px solid rgba(52, 152, 219, 0.3)",zIndex:5,pointerEvents:"none"}},e.key):"col"===e.type?v.jsx("div",{style:{position:"absolute",left:e.col*a+"px",top:0,width:`${a}px`,height:`${d}px`,backgroundColor:"rgba(52, 152, 219, 0.15)",border:"1px solid rgba(52, 152, 219, 0.3)",zIndex:5,pointerEvents:"none"}},e.key):"box"===e.type?v.jsx("div",{style:{position:"absolute",left:3*e.boxCol*a+"px",top:3*e.boxRow*l+"px",width:3*a+"px",height:3*l+"px",backgroundColor:"rgba(46, 204, 113, 0.15)",border:"2px solid rgba(46, 204, 113, 0.4)",borderRadius:"6px",zIndex:6,pointerEvents:"none"}},e.key):null),i.map(e=>{const t=(e=>{const t={position:"absolute",left:e.col*a+"px",top:e.row*l+"px",width:`${a}px`,height:`${l}px`,pointerEvents:"none",boxSizing:"border-box",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease"},r={primary:{backgroundColor:e.backgroundColor||"rgba(76, 175, 80, 0.3)",borderColor:e.borderColor||"#4CAF50",border:`3px solid ${e.borderColor||"#4CAF50"}`,zIndex:35},"primary-removal":{backgroundColor:e.backgroundColor||"rgba(76, 175, 80, 0.3)",borderColor:e.borderColor||"#4CAF50",border:`3px solid ${e.borderColor||"#4CAF50"}`,zIndex:35},secondary:{backgroundColor:e.backgroundColor||"rgba(33, 150, 243, 0.3)",borderColor:e.borderColor||"#2196F3",border:`3px solid ${e.borderColor||"#2196F3"}`,zIndex:30},removal:{backgroundColor:e.backgroundColor||"rgba(231, 76, 60, 0.25)",borderColor:e.borderColor||"#e74c3c",border:`2px dashed ${e.borderColor||"#e74c3c"}`,zIndex:25},row:{backgroundColor:"rgba(52, 152, 219, 0.3)",border:"1px solid #3498db",zIndex:20},col:{backgroundColor:"rgba(231, 76, 60, 0.3)",border:"1px solid #e74c3c",zIndex:20},box:{backgroundColor:"rgba(46, 204, 113, 0.3)",border:"1px solid #2ecc71",zIndex:20}};return e.highlightType&&r[e.highlightType]?{...t,...r[e.highlightType]}:e.isTarget?{...t,backgroundColor:"rgba(33, 150, 243, 0.3)",border:"3px solid #2196F3",zIndex:30}:{...t,backgroundColor:"rgba(249, 231, 159, 0.5)",border:"3px solid #ffffff",zIndex:25}})(e);let r="#2ecc71";return"primary"===e.highlightType||"primary-removal"===e.highlightType?r="#27ae60":"secondary"===e.highlightType&&(r="#2980b9"),v.jsxs("div",{style:t,children:[e.number&&v.jsx("span",{style:{fontSize:s,fontWeight:"bold",color:r,zIndex:50,textShadow:"2px 2px 4px rgba(0,0,0,0.3)"},children:e.number}),f(e)]},`tech-${e.row}-${e.col}-${e.highlightType||"default"}-${e.isTarget?"target":"normal"}`)})]})};
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
function Un(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function Gn(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Zn(o.key),o)}}function Yn(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=ti(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}function Jn(e,t,r){return(t=Zn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Vn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function Xn(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Vn(Object(r),!0).forEach(function(t){Jn(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Vn(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Kn(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,i,a,l=[],s=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(o=i.call(r)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(d){c=!0,n=d}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw n}}return l}}(e,t)||ti(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qn(e){return function(e){if(Array.isArray(e))return Un(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ti(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Zn(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function ei(e){return(ei="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ti(e,t){if(e){if("string"==typeof e)return Un(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Un(e,t):void 0}}var ri=function(){},oi={},ni={},ii=null,ai={mark:ri,measure:ri};try{"undefined"!=typeof window&&(oi=window),"undefined"!=typeof document&&(ni=document),"undefined"!=typeof MutationObserver&&(ii=MutationObserver),"undefined"!=typeof performance&&(ai=performance)}catch(Du){}var li=(oi.navigator||{}).userAgent,si=void 0===li?"":li,ci=oi,di=ni,ui=ii,fi=ai;ci.document;var pi,hi=!!di.documentElement&&!!di.head&&"function"==typeof di.addEventListener&&"function"==typeof di.createElement,mi=~si.indexOf("MSIE")||~si.indexOf("Trident/"),gi={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},xi=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],yi="classic",bi="duotone",vi="sharp",wi="sharp-duotone",Ci="chisel",ki="etch",ji="jelly",Si="jelly-duo",$i="jelly-fill",zi="notdog",Ti="notdog-duo",Pi="slab",Ai="slab-press",Ni="thumbprint",Ii="utility",Ei="utility-duo",Ri="utility-fill",Mi="whiteboard",Li=[yi,bi,vi,wi,Ci,ki,ji,Si,$i,zi,Ti,Pi,Ai,Ni,Ii,Ei,Ri,Mi];Jn(Jn(Jn(Jn(Jn(Jn(Jn(Jn(Jn(Jn(pi={},yi,"Classic"),bi,"Duotone"),vi,"Sharp"),wi,"Sharp Duotone"),Ci,"Chisel"),ki,"Etch"),ji,"Jelly"),Si,"Jelly Duo"),$i,"Jelly Fill"),zi,"Notdog"),Jn(Jn(Jn(Jn(Jn(Jn(Jn(Jn(pi,Ti,"Notdog Duo"),Pi,"Slab"),Ai,"Slab Press"),Ni,"Thumbprint"),Ii,"Utility"),Ei,"Utility Duo"),Ri,"Utility Fill"),Mi,"Whiteboard");var Oi=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Fi=["fak","fa-kit","fakd","fa-kit-duotone"],Di={fak:"kit","fa-kit":"kit"},Hi={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"};Jn(Jn({},"kit","Kit"),"kit-duotone","Kit Duotone");var Bi,qi={kit:"fak"},_i={"kit-duotone":"fakd"},Wi="duotone-group",Ui="swap-opacity",Gi="primary",Yi="secondary";Jn(Jn(Jn(Jn(Jn(Jn(Jn(Jn(Jn(Jn(Bi={},"classic","Classic"),"duotone","Duotone"),"sharp","Sharp"),"sharp-duotone","Sharp Duotone"),"chisel","Chisel"),"etch","Etch"),"jelly","Jelly"),"jelly-duo","Jelly Duo"),"jelly-fill","Jelly Fill"),"notdog","Notdog"),Jn(Jn(Jn(Jn(Jn(Jn(Jn(Jn(Bi,"notdog-duo","Notdog Duo"),"slab","Slab"),"slab-press","Slab Press"),"thumbprint","Thumbprint"),"utility","Utility"),"utility-duo","Utility Duo"),"utility-fill","Utility Fill"),"whiteboard","Whiteboard");Jn(Jn({},"kit","Kit"),"kit-duotone","Kit Duotone");var Ji={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Vi=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"]),Xi=[1,2,3,4,5,6,7,8,9,10],Ki=Xi.concat([11,12,13,14,15,16,17,18,19,20]),Qi=[].concat(Qn(Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]})),["solid","regular","light","thin","duotone","brands","semibold"],["aw","fw","pull-left","pull-right"],["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Wi,Ui,Gi,Yi]).concat(Xi.map(function(e){return"".concat(e,"x")})).concat(Ki.map(function(e){return"w-".concat(e)})),Zi="___FONT_AWESOME___",ea="svg-inline--fa",ta="data-fa-i2svg",ra="data-fa-pseudo-element",oa="data-prefix",na="data-icon",ia="fontawesome-i2svg",aa=["HTML","HEAD","STYLE","SCRIPT"],la=["::before","::after",":before",":after"],sa=function(){try{return!0}catch(e){return!1}}();function ca(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[yi]}})}var da=Xn({},gi);da[yi]=Xn(Xn(Xn(Xn({},{"fa-duotone":"duotone"}),gi[yi]),Di),Hi);var ua=ca(da),fa=Xn({},{chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}});fa[yi]=Xn(Xn(Xn(Xn({},{duotone:"fad"}),fa[yi]),qi),_i);var pa=ca(fa),ha=Xn({},Ji);ha[yi]=Xn(Xn({},ha[yi]),{fak:"fa-kit"});var ma=ca(ha),ga=Xn({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}});ga[yi]=Xn(Xn({},ga[yi]),{"fa-kit":"fak"}),ca(ga);var xa=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ya="fa-layers-text",ba=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;ca(Xn({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}}));var va=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ca=[].concat(Qn(["kit"]),Qn(Qi)),ka=ci.FontAwesomeConfig||{};if(di&&"function"==typeof di.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=Kn(e,2),r=t[0],o=t[1],n=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=di.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(r));null!=n&&(ka[o]=n)})}var ja={styleDefault:"solid",familyDefault:yi,cssPrefix:"fa",replacementClass:ea,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ka.familyPrefix&&(ka.cssPrefix=ka.familyPrefix);var Sa=Xn(Xn({},ja),ka);Sa.autoReplaceSvg||(Sa.observeMutations=!1);var $a={};Object.keys(ja).forEach(function(e){Object.defineProperty($a,e,{enumerable:!0,set:function(t){Sa[e]=t,za.forEach(function(e){return e($a)})},get:function(){return Sa[e]}})}),Object.defineProperty($a,"familyPrefix",{enumerable:!0,set:function(e){Sa.cssPrefix=e,za.forEach(function(e){return e($a)})},get:function(){return Sa.cssPrefix}}),ci.FontAwesomeConfig=$a;var za=[];var Ta=16,Pa={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Aa(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function Na(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function Ia(e){return e.classList?Na(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ea(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ra(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function Ma(e){return e.size!==Pa.size||e.x!==Pa.x||e.y!==Pa.y||e.rotate!==Pa.rotate||e.flipX||e.flipY}function La(){var e="fa",t=ea,r=$a.cssPrefix,o=$a.replacementClass,n=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";\n  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";\n  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}';if(r!==e||o!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(r,"-")).replace(a,"--".concat(r,"-")).replace(l,".".concat(o))}return n}var Oa=!1;function Fa(){$a.autoAddCss&&!Oa&&(!function(e){if(e&&hi){var t=di.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=di.head.childNodes,o=null,n=r.length-1;n>-1;n--){var i=r[n],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(o=i)}di.head.insertBefore(t,o)}}(La()),Oa=!0)}var Da={mixout:function(){return{dom:{css:La,insertCss:Fa}}},hooks:function(){return{beforeDOMElementCreation:function(){Fa()},beforeI2svg:function(){Fa()}}}},Ha=ci||{};Ha[Zi]||(Ha[Zi]={}),Ha[Zi].styles||(Ha[Zi].styles={}),Ha[Zi].hooks||(Ha[Zi].hooks={}),Ha[Zi].shims||(Ha[Zi].shims=[]);var Ba=Ha[Zi],qa=[],_a=function(){di.removeEventListener("DOMContentLoaded",_a),Wa=1,qa.map(function(e){return e()})},Wa=!1;function Ua(e){var t=e.tag,r=e.attributes,o=void 0===r?{}:r,n=e.children,i=void 0===n?[]:n;return"string"==typeof e?Ea(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(Ea(e[r]),'" ')},"").trim()}(o),">").concat(i.map(Ua).join(""),"</").concat(t,">")}function Ga(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}hi&&((Wa=(di.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(di.readyState))||di.addEventListener("DOMContentLoaded",_a));var Ya=function(e,t,r,o){var n,i,a,l=Object.keys(e),s=l.length,c=void 0!==o?function(e,t){return function(r,o,n,i){return e.call(t,r,o,n,i)}}(t,o):t;for(void 0===r?(n=1,a=e[l[0]]):(n=0,a=r);n<s;n++)a=c(a,e[i=l[n]],i,e);return a};function Ja(e){return 1!==Qn(e).length?null:e.codePointAt(0).toString(16)}function Va(e){return Object.keys(e).reduce(function(t,r){var o=e[r];return!!o.icon?t[o.iconName]=o.icon:t[r]=o,t},{})}function Xa(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,o=void 0!==r&&r,n=Va(t);"function"!=typeof Ba.hooks.addPack||o?Ba.styles[e]=Xn(Xn({},Ba.styles[e]||{}),n):Ba.hooks.addPack(e,Va(t)),"fas"===e&&Xa("fa",t)}var Ka=Ba.styles,Qa=Ba.shims,Za=Object.keys(ma),el=Za.reduce(function(e,t){return e[t]=Object.keys(ma[t]),e},{}),tl=null,rl={},ol={},nl={},il={},al={};function ll(e,t){var r,o=t.split("-"),n=o[0],i=o.slice(1).join("-");return n!==e||""===i||(r=i,~Ca.indexOf(r))?null:i}var sl,cl=function(){var e=function(e){return Ya(Ka,function(t,r,o){return t[o]=Ya(r,e,{}),t},{})};rl=e(function(e,t,r){(t[3]&&(e[t[3]]=r),t[2])&&t[2].filter(function(e){return"number"==typeof e}).forEach(function(t){e[t.toString(16)]=r});return e}),ol=e(function(e,t,r){(e[r]=r,t[2])&&t[2].filter(function(e){return"string"==typeof e}).forEach(function(t){e[t]=r});return e}),al=e(function(e,t,r){var o=t[2];return e[r]=r,o.forEach(function(t){e[t]=r}),e});var t="far"in Ka||$a.autoFetchSvg,r=Ya(Qa,function(e,r){var o=r[0],n=r[1],i=r[2];return"far"!==n||t||(n="fas"),"string"==typeof o&&(e.names[o]={prefix:n,iconName:i}),"number"==typeof o&&(e.unicodes[o.toString(16)]={prefix:n,iconName:i}),e},{names:{},unicodes:{}});nl=r.names,il=r.unicodes,tl=hl($a.styleDefault,{family:$a.familyDefault})};function dl(e,t){return(rl[e]||{})[t]}function ul(e,t){return(al[e]||{})[t]}function fl(e){return nl[e]||{prefix:null,iconName:null}}function pl(){return tl}sl=function(e){tl=hl(e.styleDefault,{family:$a.familyDefault})},za.push(sl),cl();function hl(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).family,r=void 0===t?yi:t,o=ua[r][e];if(r===bi&&!e)return"fad";var n=pa[r][e]||pa[r][o],i=e in Ba.styles?e:null;return n||i||null}function ml(e){return e.sort().filter(function(e,t,r){return r.indexOf(e)===t})}var gl=Vi.concat(Fi);function xl(e){var t,r,o=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).skipLookups,n=void 0!==o&&o,i=null,a=ml(e.filter(function(e){return gl.includes(e)})),l=ml(e.filter(function(e){return!gl.includes(e)})),s=Kn(a.filter(function(e){return i=e,!xi.includes(e)}),1)[0],c=void 0===s?null:s,d=function(e){var t=yi,r=Za.reduce(function(e,t){return e[t]="".concat($a.cssPrefix,"-").concat(t),e},{});return Li.forEach(function(o){(e.includes(r[o])||e.some(function(e){return el[o].includes(e)}))&&(t=o)}),t}(a),u=Xn(Xn({},(t=[],r=null,l.forEach(function(e){var o=ll($a.cssPrefix,e);o?r=o:e&&t.push(e)}),{iconName:r,rest:t})),{},{prefix:hl(c,{family:d})});return Xn(Xn(Xn({},u),function(e){var t=e.values,r=e.family,o=e.canonical,n=e.givenPrefix,i=void 0===n?"":n,a=e.styles,l=void 0===a?{}:a,s=e.config,c=void 0===s?{}:s,d=r===bi,u=t.includes("fa-duotone")||t.includes("fad"),f="duotone"===c.familyDefault,p="fad"===o.prefix||"fa-duotone"===o.prefix;!d&&(u||f||p)&&(o.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab");if(!o.prefix&&yl.includes(r)){if(Object.keys(l).find(function(e){return bl.includes(e)})||c.autoFetchSvg){var h=Oi.get(r).defaultShortPrefixId;o.prefix=h,o.iconName=ul(o.prefix,o.iconName)||o.iconName}}"fa"!==o.prefix&&"fa"!==i||(o.prefix=pl()||"fas");return o}({values:e,family:d,styles:Ka,config:$a,canonical:u,givenPrefix:i})),function(e,t,r){var o=r.prefix,n=r.iconName;if(e||!o||!n)return{prefix:o,iconName:n};var i="fa"===t?fl(n):{},a=ul(o,n);n=i.iconName||a||n,"far"!==(o=i.prefix||o)||Ka.far||!Ka.fas||$a.autoFetchSvg||(o="fas");return{prefix:o,iconName:n}}(n,i,u))}var yl=Li.filter(function(e){return e!==yi||e!==bi}),bl=Object.keys(Ji).filter(function(e){return e!==yi}).map(function(e){return Object.keys(Ji[e])}).flat();var vl=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}},t=[{key:"add",value:function(){for(var e=this,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){e.definitions[t]=Xn(Xn({},e.definitions[t]||{}),n[t]),Xa(t,n[t]);var r=ma[yi][t];r&&Xa(r,n[t]),cl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(t){var o=r[t],n=o.prefix,i=o.iconName,a=o.icon,l=a[2];e[n]||(e[n]={}),l.length>0&&l.forEach(function(t){"string"==typeof t&&(e[n][t]=a)}),e[n][i]=a}),e}}],t&&Gn(e.prototype,t),r&&Gn(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}(),wl=[],Cl={},kl={},jl=Object.keys(kl);function Sl(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];return(Cl[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(o))}),t}function $l(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];(Cl[e]||[]).forEach(function(e){e.apply(null,r)})}function zl(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return kl[e]?kl[e].apply(null,t):void 0}function Tl(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,r=e.prefix||pl();if(t)return t=ul(r,t)||t,Ga(Pl.definitions,r,t)||Ga(Ba.styles,r,t)}var Pl=new vl,Al={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return hi?($l("beforeI2svg",e),zl("pseudoElements2svg",e),zl("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.autoReplaceSvgRoot;!1===$a.autoReplaceSvg&&($a.autoReplaceSvg=!0),$a.observeMutations=!0,e=function(){Il({autoReplaceSvgRoot:r}),$l("watch",t)},hi&&(Wa?setTimeout(e,0):qa.push(e))}},Nl={noAuto:function(){$a.autoReplaceSvg=!1,$a.observeMutations=!1,$l("noAuto")},config:$a,dom:Al,parse:{icon:function(e){if(null===e)return null;if("object"===ei(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ul(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],r=hl(e[0]);return{prefix:r,iconName:ul(r,t)||t}}if("string"==typeof e&&(e.indexOf("".concat($a.cssPrefix,"-"))>-1||e.match(xa))){var o=xl(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||pl(),iconName:ul(o.prefix,o.iconName)||o.iconName}}if("string"==typeof e){var n=pl();return{prefix:n,iconName:ul(n,e)||e}}}},library:Pl,findIconDefinition:Tl,toHtml:Ua},Il=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,t=void 0===e?di:e;(Object.keys(Ba.styles).length>0||$a.autoFetchSvg)&&hi&&$a.autoReplaceSvg&&Nl.dom.i2svg({node:t})};function El(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Ua(e)})}}),Object.defineProperty(e,"node",{get:function(){if(hi){var t=di.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Rl(e){var t=e.icons,r=t.main,o=t.mask,n=e.prefix,i=e.iconName,a=e.transform,l=e.symbol,s=e.maskId,c=e.extra,d=e.watchable,u=void 0!==d&&d,f=o.found?o:r,p=f.width,h=f.height,m=[$a.replacementClass,i?"".concat($a.cssPrefix,"-").concat(i):""].filter(function(e){return-1===c.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(c.classes).join(" "),g={children:[],attributes:Xn(Xn({},c.attributes),{},{"data-prefix":n,"data-icon":i,class:m,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(h)})};(function(e){return["aria-label","aria-labelledby","title","role"].some(function(t){return t in e})})(c.attributes)||c.attributes["aria-hidden"]||(g.attributes["aria-hidden"]="true"),u&&(g.attributes[ta]="");var x=Xn(Xn({},g),{},{prefix:n,iconName:i,main:r,mask:o,maskId:s,transform:a,symbol:l,styles:Xn({},c.styles)}),y=o.found&&r.found?zl("generateAbstractMask",x)||{children:[],attributes:{}}:zl("generateAbstractIcon",x)||{children:[],attributes:{}},b=y.children,v=y.attributes;return x.children=b,x.attributes=v,l?function(e){var t=e.prefix,r=e.iconName,o=e.children,n=e.attributes,i=e.symbol,a=!0===i?"".concat(t,"-").concat($a.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Xn(Xn({},n),{},{id:a}),children:o}]}]}(x):function(e){var t=e.children,r=e.main,o=e.mask,n=e.attributes,i=e.styles,a=e.transform;if(Ma(a)&&r.found&&!o.found){var l={x:r.width/r.height/2,y:.5};n.style=Ra(Xn(Xn({},i),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}(x)}function Ml(e){var t=e.content,r=e.width,o=e.height,n=e.transform,i=e.extra,a=e.watchable,l=void 0!==a&&a,s=Xn(Xn({},i.attributes),{},{class:i.classes.join(" ")});l&&(s[ta]="");var c=Xn({},i.styles);Ma(n)&&(c.transform=function(e){var t=e.transform,r=e.width,o=void 0===r?16:r,n=e.height,i=void 0===n?16:n,a=e.startCentered,l=void 0!==a&&a,s="";return s+=l&&mi?"translate(".concat(t.x/Ta-o/2,"em, ").concat(t.y/Ta-i/2,"em) "):l?"translate(calc(-50% + ".concat(t.x/Ta,"em), calc(-50% + ").concat(t.y/Ta,"em)) "):"translate(".concat(t.x/Ta,"em, ").concat(t.y/Ta,"em) "),s+="scale(".concat(t.size/Ta*(t.flipX?-1:1),", ").concat(t.size/Ta*(t.flipY?-1:1),") "),s+"rotate(".concat(t.rotate,"deg) ")}({transform:n,startCentered:!0,width:r,height:o}),c["-webkit-transform"]=c.transform);var d=Ra(c);d.length>0&&(s.style=d);var u=[];return u.push({tag:"span",attributes:s,children:[t]}),u}var Ll=Ba.styles;function Ol(e){var t=e[0],r=e[1],o=Kn(e.slice(4),1)[0];return{found:!0,width:t,height:r,icon:Array.isArray(o)?{tag:"g",attributes:{class:"".concat($a.cssPrefix,"-").concat(wa.GROUP)},children:[{tag:"path",attributes:{class:"".concat($a.cssPrefix,"-").concat(wa.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat($a.cssPrefix,"-").concat(wa.PRIMARY),fill:"currentColor",d:o[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:o}}}}var Fl={found:!1,width:512,height:512};function Dl(e,t){var r=t;return"fa"===t&&null!==$a.styleDefault&&(t=pl()),new Promise(function(o,n){if("fa"===r){var i=fl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ll[t]&&Ll[t][e])return o(Ol(Ll[t][e]));!function(e,t){sa||$a.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),o(Xn(Xn({},Fl),{},{icon:$a.showMissingIcons&&e&&zl("missingIconAbstract")||{}}))})}var Hl=function(){},Bl=$a.measurePerformance&&fi&&fi.mark&&fi.measure?fi:{mark:Hl,measure:Hl},ql='FA "7.1.0"',_l=function(e){Bl.mark("".concat(ql," ").concat(e," ends")),Bl.measure("".concat(ql," ").concat(e),"".concat(ql," ").concat(e," begins"),"".concat(ql," ").concat(e," ends"))},Wl=function(e){return Bl.mark("".concat(ql," ").concat(e," begins")),function(){return _l(e)}},Ul=function(){};function Gl(e){return"string"==typeof(e.getAttribute?e.getAttribute(ta):null)}function Yl(e){return di.createElementNS("http://www.w3.org/2000/svg",e)}function Jl(e){return di.createElement(e)}function Vl(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ceFn,r=void 0===t?"svg"===e.tag?Yl:Jl:t;if("string"==typeof e)return di.createTextNode(e);var o=r(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){o.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){o.appendChild(Vl(e,{ceFn:r}))}),o}var Xl={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Vl(e),t)}),null===t.getAttribute(ta)&&$a.keepOriginalSource){var r=di.createComment(function(e){var t=" ".concat(e.outerHTML," ");return"".concat(t,"Font Awesome fontawesome.com ")}(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){var t=e[0],r=e[1];if(~Ia(t).indexOf($a.replacementClass))return Xl.replace(e);var o=new RegExp("".concat($a.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(e,t){return t===$a.replacementClass||t.match(o)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),0===n.toNode.length?t.removeAttribute("class"):t.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(e){return Ua(e)}).join("\n");t.setAttribute(ta,""),t.innerHTML=i}};function Kl(e){e()}function Ql(e,t){var r="function"==typeof t?t:Ul;if(0===e.length)r();else{var o=Kl;"async"===$a.mutateApproach&&(o=ci.requestAnimationFrame||Kl),o(function(){var t=!0===$a.autoReplaceSvg?Xl.replace:Xl[$a.autoReplaceSvg]||Xl.replace,o=Wl("mutate");e.map(t),o(),r()})}}var Zl=!1;function es(){Zl=!0}function ts(){Zl=!1}var rs=null;function os(e){if(ui&&$a.observeMutations){var t=e.treeCallback,r=void 0===t?Ul:t,o=e.nodeCallback,n=void 0===o?Ul:o,i=e.pseudoElementsCallback,a=void 0===i?Ul:i,l=e.observeMutationsRoot,s=void 0===l?di:l;rs=new ui(function(e){if(!Zl){var t=pl();Na(e).forEach(function(e){if("childList"===e.type&&e.addedNodes.length>0&&!Gl(e.addedNodes[0])&&($a.searchPseudoElements&&a(e.target),r(e.target)),"attributes"===e.type&&e.target.parentNode&&$a.searchPseudoElements&&a([e.target],!0),"attributes"===e.type&&Gl(e.target)&&~va.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){var t=e.getAttribute?e.getAttribute(oa):null,r=e.getAttribute?e.getAttribute(na):null;return t&&r}(e.target)){var o=xl(Ia(e.target)),i=o.prefix,l=o.iconName;e.target.setAttribute(oa,i||t),l&&e.target.setAttribute(na,l)}else(s=e.target)&&s.classList&&s.classList.contains&&s.classList.contains($a.replacementClass)&&n(e.target);var s})}}),hi&&rs.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ns(e){var t,r,o=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),i=void 0!==e.innerText?e.innerText.trim():"",a=xl(Ia(e));return a.prefix||(a.prefix=pl()),o&&n&&(a.prefix=o,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&i.length>0&&(a.iconName=(t=a.prefix,r=e.innerText,(ol[t]||{})[r]||dl(a.prefix,Ja(e.innerText)))),!a.iconName&&$a.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function is(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},r=ns(e),o=r.iconName,n=r.prefix,i=r.rest,a=function(e){return Na(e.attributes).reduce(function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e},{})}(e),l=Sl("parseNodeAttributes",{},e),s=t.styleParser?function(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(e,t){var r=t.split(":"),o=r[0],n=r.slice(1);return o&&n.length>0&&(e[o]=n.join(":").trim()),e},{})),r}(e):[];return Xn({iconName:o,prefix:n,transform:Pa,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},l)}var as=Ba.styles;function ls(e){var t="nest"===$a.autoReplaceSvg?is(e,{styleParser:!1}):is(e);return~t.extra.classes.indexOf(ya)?zl("generateLayersText",e,t):zl("generateSvgReplacementMutation",e,t)}function ss(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!hi)return Promise.resolve();var r=di.documentElement.classList,o=function(e){return r.add("".concat(ia,"-").concat(e))},n=function(e){return r.remove("".concat(ia,"-").concat(e))},i=$a.autoFetchSvg?[].concat(Qn(Fi),Qn(Vi)):xi.concat(Object.keys(as));i.includes("fa")||i.push("fa");var a=[".".concat(ya,":not([").concat(ta,"])")].concat(i.map(function(e){return".".concat(e,":not([").concat(ta,"])")})).join(", ");if(0===a.length)return Promise.resolve();var l=[];try{l=Na(e.querySelectorAll(a))}catch(d){}if(!(l.length>0))return Promise.resolve();o("pending"),n("complete");var s=Wl("onTree"),c=l.reduce(function(e,t){try{var r=ls(t);r&&e.push(r)}catch(d){sa||"MissingIcon"===d.name&&console.error(d)}return e},[]);return new Promise(function(e,r){Promise.all(c).then(function(r){Ql(r,function(){o("active"),o("complete"),n("pending"),"function"==typeof t&&t(),s(),e()})}).catch(function(e){s(),r(e)})})}function cs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;ls(e).then(function(e){e&&Ql([e],t)})}var ds=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,o=void 0===r?Pa:r,n=t.symbol,i=void 0!==n&&n,a=t.mask,l=void 0===a?null:a,s=t.maskId,c=void 0===s?null:s,d=t.classes,u=void 0===d?[]:d,f=t.attributes,p=void 0===f?{}:f,h=t.styles,m=void 0===h?{}:h;if(e){var g=e.prefix,x=e.iconName,y=e.icon;return El(Xn({type:"icon"},e),function(){return $l("beforeDOMElementCreation",{iconDefinition:e,params:t}),Rl({icons:{main:Ol(y),mask:l?Ol(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:x,transform:Xn(Xn({},Pa),o),symbol:i,maskId:c,extra:{attributes:p,styles:m,classes:u}})})}},us={mixout:function(){return{icon:(e=ds,function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(t||{}).icon?t:Tl(t||{}),n=r.mask;return n&&(n=(n||{}).icon?n:Tl(n||{})),e(o,Xn(Xn({},r),{},{mask:n}))})};var e},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ss,e.nodeCallback=cs,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,r=void 0===t?di:t,o=e.callback;return ss(r,void 0===o?function(){}:o)},e.generateSvgReplacementMutation=function(e,t){var r=t.iconName,o=t.prefix,n=t.transform,i=t.symbol,a=t.mask,l=t.maskId,s=t.extra;return new Promise(function(t,c){Promise.all([Dl(r,o),a.iconName?Dl(a.iconName,a.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(a){var c=Kn(a,2),d=c[0],u=c[1];t([e,Rl({icons:{main:d,mask:u},prefix:o,iconName:r,transform:n,symbol:i,maskId:l,extra:s,watchable:!0})])}).catch(c)})},e.generateAbstractIcon=function(e){var t,r=e.children,o=e.attributes,n=e.main,i=e.transform,a=Ra(e.styles);return a.length>0&&(o.style=a),Ma(i)&&(t=zl("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(t||n.icon),{children:r,attributes:o}}}},fs={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.classes,o=void 0===r?[]:r;return El({type:"layer"},function(){$l("beforeDOMElementCreation",{assembler:e,params:t});var r=[];return e(function(e){Array.isArray(e)?e.map(function(e){r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat($a.cssPrefix,"-layers")].concat(Qn(o)).join(" ")},children:r}]})}}}},ps={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.title,o=void 0===r?null:r,n=t.classes,i=void 0===n?[]:n,a=t.attributes,l=void 0===a?{}:a,s=t.styles,c=void 0===s?{}:s;return El({type:"counter",content:e},function(){return $l("beforeDOMElementCreation",{content:e,params:t}),function(e){var t=e.content,r=e.extra,o=Xn(Xn({},r.attributes),{},{class:r.classes.join(" ")}),n=Ra(r.styles);n.length>0&&(o.style=n);var i=[];return i.push({tag:"span",attributes:o,children:[t]}),i}({content:e.toString(),title:o,extra:{attributes:l,styles:c,classes:["".concat($a.cssPrefix,"-layers-counter")].concat(Qn(i))}})})}}}},hs={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,o=void 0===r?Pa:r,n=t.classes,i=void 0===n?[]:n,a=t.attributes,l=void 0===a?{}:a,s=t.styles,c=void 0===s?{}:s;return El({type:"text",content:e},function(){return $l("beforeDOMElementCreation",{content:e,params:t}),Ml({content:e,transform:Xn(Xn({},Pa),o),extra:{attributes:l,styles:c,classes:["".concat($a.cssPrefix,"-layers-text")].concat(Qn(i))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var r=t.transform,o=t.extra,n=null,i=null;if(mi){var a=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();n=l.width/a,i=l.height/a}return Promise.resolve([e,Ml({content:e.innerHTML,width:n,height:i,transform:r,extra:o,watchable:!0})])}}},ms=new RegExp('"',"ug"),gs=[1105920,1112319],xs=Xn(Xn(Xn(Xn({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),ys=Object.keys(xs).reduce(function(e,t){return e[t.toLowerCase()]=xs[t],e},{}),bs=Object.keys(ys).reduce(function(e,t){var r=ys[t];return e[t]=r[900]||Qn(Object.entries(r))[0][1],e},{});function vs(e,t){var r="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(function(o,n){if(null!==e.getAttribute(r))return o();var i,a,l,s=Na(e.children).filter(function(e){return e.getAttribute(ra)===t})[0],c=ci.getComputedStyle(e,t),d=c.getPropertyValue("font-family"),u=d.match(ba),f=c.getPropertyValue("font-weight"),p=c.getPropertyValue("content");if(s&&!u)return e.removeChild(s),o();if(u&&"none"!==p&&""!==p){var h=c.getPropertyValue("content"),m=function(e,t){var r=e.replace(/^['"]|['"]$/g,"").toLowerCase(),o=parseInt(t),n=isNaN(o)?"normal":o;return(ys[r]||{})[n]||bs[r]}(d,f),g=function(e){return Ja(Qn(e.replace(ms,""))[0]||"")}(h),x=u[0].startsWith("FontAwesome"),y=function(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),r=e.getPropertyValue("content").replace(ms,""),o=r.codePointAt(0),n=o>=gs[0]&&o<=gs[1],i=2===r.length&&r[0]===r[1];return n||i||t}(c),b=dl(m,g),v=b;if(x){var w=(a=il[i=g],l=dl("fas",i),a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null});w.iconName&&w.prefix&&(b=w.iconName,m=w.prefix)}if(!b||y||s&&s.getAttribute(oa)===m&&s.getAttribute(na)===v)o();else{e.setAttribute(r,v),s&&e.removeChild(s);var C={iconName:null,prefix:null,transform:Pa,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},k=C.extra;k.attributes[ra]=t,Dl(b,m).then(function(n){var i=Rl(Xn(Xn({},C),{},{icons:{main:n,mask:{prefix:null,iconName:null,rest:[]}},prefix:m,iconName:v,extra:k,watchable:!0})),a=di.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(a,e.firstChild):e.appendChild(a),a.outerHTML=i.map(function(e){return Ua(e)}).join("\n"),e.removeAttribute(r),o()}).catch(n)}}else o()})}function ws(e){return Promise.all([vs(e,"::before"),vs(e,"::after")])}function Cs(e){return!(e.parentNode===document.head||~aa.indexOf(e.tagName.toUpperCase())||e.getAttribute(ra)||e.parentNode&&"svg"===e.parentNode.tagName)}var ks=function(e){return!!e&&la.some(function(t){return e.includes(t)})},js=function(e){if(!e)return[];var t,r=new Set,o=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()}),n=Yn(o=o.flatMap(function(e){return e.includes("(")?e:e.split(",").map(function(e){return e.trim()})}));try{for(n.s();!(t=n.n()).done;){var i=t.value;if(ks(i)){var a=la.reduce(function(e,t){return e.replace(t,"")},i);""!==a&&"*"!==a&&r.add(a)}}}catch(l){n.e(l)}finally{n.f()}return r};function Ss(e){if(hi){var t;if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])t=e;else if($a.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r,o=new Set,n=Yn(document.styleSheets);try{for(n.s();!(r=n.n()).done;){var i=r.value;try{var a,l=Yn(i.cssRules);try{for(l.s();!(a=l.n()).done;){var s,c=a.value,d=Yn(js(c.selectorText));try{for(d.s();!(s=d.n()).done;){var u=s.value;o.add(u)}}catch(p){d.e(p)}finally{d.f()}}}catch(p){l.e(p)}finally{l.f()}}catch(h){$a.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(h.message,')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))}}}catch(p){n.e(p)}finally{n.f()}if(!o.size)return;var f=Array.from(o).join(", ");try{t=e.querySelectorAll(f)}catch(m){}}return new Promise(function(e,r){var o=Na(t).filter(Cs).map(ws),n=Wl("searchPseudoElements");es(),Promise.all(o).then(function(){n(),ts(),e()}).catch(function(){n(),ts(),r()})})}}var $s=!1,zs=function(e){return e.toLowerCase().split(" ").reduce(function(e,t){var r=t.toLowerCase().split("-"),o=r[0],n=r.slice(1).join("-");if(o&&"h"===n)return e.flipX=!0,e;if(o&&"v"===n)return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(o){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Ts={mixout:function(){return{parse:{transform:function(e){return zs(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-transform");return r&&(e.transform=zs(r)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,r=e.transform,o=e.containerWidth,n=e.iconWidth,i={transform:"translate(".concat(o/2," 256)")},a="translate(".concat(32*r.x,", ").concat(32*r.y,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),s="rotate(".concat(r.rotate," 0 0)"),c={outer:i,inner:{transform:"".concat(a," ").concat(l," ").concat(s)},path:{transform:"translate(".concat(n/2*-1," -256)")}};return{tag:"g",attributes:Xn({},c.outer),children:[{tag:"g",attributes:Xn({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:Xn(Xn({},t.icon.attributes),c.path)}]}]}}}},Ps={x:0,y:0,width:"100%",height:"100%"};function As(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var Ns,Is={hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-mask"),o=r?xl(r.split(" ").map(function(e){return e.trim()})):{prefix:null,iconName:null,rest:[]};return o.prefix||(o.prefix=pl()),e.mask=o,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t,r=e.children,o=e.attributes,n=e.main,i=e.mask,a=e.maskId,l=e.transform,s=n.width,c=n.icon,d=i.width,u=i.icon,f=function(e){var t=e.transform,r=e.containerWidth,o=e.iconWidth,n={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)");return{outer:n,inner:{transform:"".concat(i," ").concat(a," ").concat(l)},path:{transform:"translate(".concat(o/2*-1," -256)")}}}({transform:l,containerWidth:d,iconWidth:s}),p={tag:"rect",attributes:Xn(Xn({},Ps),{},{fill:"white"})},h=c.children?{children:c.children.map(As)}:{},m={tag:"g",attributes:Xn({},f.inner),children:[As(Xn({tag:c.tag,attributes:Xn(Xn({},c.attributes),f.path)},h))]},g={tag:"g",attributes:Xn({},f.outer),children:[m]},x="mask-".concat(a||Aa()),y="clip-".concat(a||Aa()),b={tag:"mask",attributes:Xn(Xn({},Ps),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(t=u,"g"===t.tag?t.children:[t])},b]};return r.push(v,{tag:"rect",attributes:Xn({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(x,")")},Ps)}),{children:r,attributes:o}}}};Ns={mixoutsTo:Nl}.mixoutsTo,wl=[Da,us,fs,ps,hs,{hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ss,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,r=void 0===t?di:t;$a.searchPseudoElements&&Ss(r)}}},{mixout:function(){return{dom:{unwatch:function(){es(),$s=!0}}}},hooks:function(){return{bootstrap:function(){os(Sl("mutationObserverCallbacks",{}))},noAuto:function(){rs&&rs.disconnect()},watch:function(e){var t=e.observeMutationsRoot;$s?ts():os(Sl("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},Ts,Is,{provides:function(e){var t=!1;ci.matchMedia&&(t=ci.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:Xn(Xn({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=Xn(Xn({},o),{},{attributeName:"opacity"}),i={tag:"circle",attributes:Xn(Xn({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:Xn(Xn({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Xn(Xn({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(i),e.push({tag:"path",attributes:Xn(Xn({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Xn(Xn({},n),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:Xn(Xn({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Xn(Xn({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-symbol"),o=null!==r&&(""===r||r);return e.symbol=o,e}}}}],Cl={},Object.keys(kl).forEach(function(e){-1===jl.indexOf(e)&&delete kl[e]}),wl.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){"function"==typeof t[e]&&(Ns[e]=t[e]),"object"===ei(t[e])&&Object.keys(t[e]).forEach(function(r){Ns[e]||(Ns[e]={}),Ns[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Cl[e]||(Cl[e]=[]),Cl[e].push(r[e])})}e.provides&&e.provides(kl)});var Es=Nl.config,Rs=Nl.parse,Ms=Nl.icon;function Ls(e){return t=e,(t-=0)==t?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():"")).charAt(0).toLowerCase()+e.slice(1);var t}function Os(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Fs=new Map;function Ds(e){if(Fs.has(e))return Fs.get(e);const t={};let r=0;const o=e.length;for(;r<o;){const n=e.indexOf(";",r),i=-1===n?o:n,a=e.slice(r,i).trim();if(a){const e=a.indexOf(":");if(e>0){const r=a.slice(0,e).trim(),o=a.slice(e+1).trim();if(r&&o){const e=Ls(r);t[e.startsWith("webkit")?Os(e):e]=o}}}r=i+1}if(1e3===Fs.size){const e=Fs.keys().next().value;e&&Fs.delete(e)}return Fs.set(e,t),t}var Hs=function e(t,r,o={}){if("string"==typeof r)return r;const n=(r.children||[]).map(r=>e(t,r)),i=r.attributes||{},a={};for(const[d,u]of Object.entries(i))switch(!0){case"class"===d:a.className=u;break;case"style"===d:a.style=Ds(String(u));break;case d.startsWith("aria-"):case d.startsWith("data-"):a[d.toLowerCase()]=u;break;default:a[Ls(d)]=u}const{style:l,"aria-label":s,...c}=o;return l&&(a.style=a.style?{...a.style,...l}:l),s&&(a["aria-label"]=s,a["aria-hidden"]="false"),t(r.tag,{...c,...a},...n)}.bind(null,o.createElement),Bs=(t,r)=>{const o=e.useId();return t||(r?o:void 0)},qs="searchPseudoElementsFullScan"in Es?"7.0.0":"6.0.0",_s=Number.parseInt(qs)>=7,Ws="fa",Us="fa-beat",Gs="fa-fade",Ys="fa-beat-fade",Js="fa-bounce",Vs="fa-shake",Xs="fa-spin",Ks="fa-spin-pulse",Qs="fa-spin-reverse",Zs="fa-pulse",ec={left:"fa-pull-left",right:"fa-pull-right"},tc={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},rc={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},oc="fa-border",nc="fa-fw",ic="fa-flip",ac="fa-flip-horizontal",lc="fa-flip-vertical",sc="fa-inverse",cc="fa-rotate-by",dc="fa-swap-opacity",uc="fa-width-auto";function fc(e){const t=Es.cssPrefix||Es.familyPrefix||Ws;return t===Ws?e:e.replace(new RegExp(`(?<=^|\\s)${Ws}-`,"g"),`${t}-`)}function pc(e){if(e)return(e=>"object"==typeof e&&"icon"in e&&!!e.icon)(e)?e:Rs.icon(e)}var hc=new class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t="undefined"!=typeof process&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}}("FontAwesomeIcon"),mc={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},gc=new Set(Object.keys(mc)),xc=o.forwardRef((e,t)=>{const r={...mc,...e},{icon:o,mask:n,symbol:i,title:a,titleId:l,maskId:s,transform:c}=r,d=Bs(s,Boolean(n)),u=Bs(l,Boolean(a)),f=pc(o);if(!f)return hc.error("Icon lookup is undefined",o),null;const p=function(e){const{beat:t,fade:r,beatFade:o,bounce:n,shake:i,spin:a,spinPulse:l,spinReverse:s,pulse:c,fixedWidth:d,inverse:u,border:f,flip:p,size:h,rotation:m,pull:g,swapOpacity:x,rotateBy:y,widthAuto:b,className:v}=e,w=[];return v&&w.push(...v.split(" ")),t&&w.push(Us),r&&w.push(Gs),o&&w.push(Ys),n&&w.push(Js),i&&w.push(Vs),a&&w.push(Xs),s&&w.push(Qs),l&&w.push(Ks),c&&w.push(Zs),d&&w.push(nc),u&&w.push(sc),f&&w.push(oc),!0===p&&w.push(ic),"horizontal"!==p&&"both"!==p||w.push(ac),"vertical"!==p&&"both"!==p||w.push(lc),null!=h&&w.push(rc[h]),null!=m&&0!==m&&w.push(tc[m]),null!=g&&w.push(ec[g]),x&&w.push(dc),_s?(y&&w.push(cc),b&&w.push(uc),(Es.cssPrefix||Es.familyPrefix||Ws)===Ws?w:w.map(fc)):w}(r),h="string"==typeof c?Rs.transform(c):c,m=pc(n),g=Ms(f,{...p.length>0&&{classes:p},...h&&{transform:h},...m&&{mask:m},symbol:i,title:a,titleId:u,maskId:d});if(!g)return hc.error("Could not find icon",f),null;const{abstract:x}=g,y={ref:t};for(const b of function(e){return Object.keys(e)}(r))gc.has(b)||(y[b]=r[b]);return Hs(x[0],y)});xc.displayName="FontAwesomeIcon";
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
var yc={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},bc={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},vc={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},wc={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},Cc={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},kc={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},jc={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Sc={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z"]},$c={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z"]};const zc=()=>{var t,r,o;i();const{isLoading:n,startLoading:a,stopLoading:l}=de(),s=Ho(),{t:c}=le(),d=(null==s?void 0:s.currentBoard)||Array(9).fill().map(()=>Array(9).fill(0)),u=(null==s?void 0:s.originalPuzzle)||null,f=(null==s?void 0:s.selectedCell)||null,p=(null==s?void 0:s.difficulty)||"medium",h=(null==s?void 0:s.timeElapsed)||0,m=(null==s?void 0:s.errorCount)||0,g=(null==s?void 0:s.isTimerActive)??!0,x=(null==s?void 0:s.isPencilMode)??!1,y=(null==s?void 0:s.setSelectedCell)||(()=>{}),b=(null==s?void 0:s.setHighlightedCells)||(()=>{}),w=(null==s?void 0:s.setDifficulty)||(()=>{});null==s||s.setBoard,null==s||s.setSolution,null==s||s.generateNewPuzzle;const C=(null==s?void 0:s.togglePencilMode)||(()=>{}),k=(null==s?void 0:s.toggleTimer)||(()=>{});null==s||s.getHint;const j=(null==s?void 0:s.clearCell)||(()=>{}),S=(null==s?void 0:s.identifyTechniques)||(()=>[]),$=(null==s?void 0:s.openSettings)||(()=>{}),z=(null==s?void 0:s.fillCell)||(()=>{}),T=(null==s?void 0:s.fillAllCandidates)||(()=>{}),P=(null==s?void 0:s.undo)||(()=>{}),A=(null==s?void 0:s.solution)||Array(9).fill().map(()=>Array(9).fill(0)),N=(null==s?void 0:s.highlightedCells)||[],I=(null==s?void 0:s.pencilNotes)||[],E=(null==s?void 0:s.calculateTechniques)||(()=>{}),R=(()=>{const e={};for(let t=1;t<=9;t++)e[t]=9;for(let t=0;t<9;t++)for(let r=0;r<9;r++){const o=d[t][r];0!==o&&A[t][r]===o&&e[o]--}return e})(),[M,L]=e.useState(window.innerHeight>window.innerWidth),[O,F]=e.useState(!1),[D,H]=e.useState(!1),[B,q]=e.useState(!1),_=e.useRef(null);e.useRef(null);const W=e.useRef(null);e.useEffect(()=>{const e=()=>{const e=window.innerWidth<992,t=window.innerHeight>window.innerWidth;L(e&&t)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]);const U=e=>{const t=e.target.closest("div[row]")||e.target.closest("div[col]"),r=e.target.closest(".board-container"),o=e.target.closest(".controls-container"),n=e.target.closest(".nav-block"),i=e.target.closest(".display-block");t||r||o||n||i||(y(null),(null==s?void 0:s.setHighlightedCells)&&s.setHighlightedCells([]))};e.useEffect(()=>{const e=W.current;return e&&e.addEventListener("click",U),()=>{e&&e.removeEventListener("click",U)}},[f]);const G=(e,t)=>{y({row:e,col:t}),(null==s?void 0:s.setHighlightedCells)&&s.setHighlightedCells([])},Y=e=>{const t=Math.floor(e/3600),r=Math.floor(e%3600/60),o=e%60;return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`},J=e=>{try{if(!f){const t=[];for(let r=0;r<9;r++)for(let o=0;o<9;o++){const n=d&&d[r]?d[r][o]:0,i=u&&u[r]&&u[r][o]===e,a=n===e&&(null==s?void 0:s.lockedCells)&&s.lockedCells.has(`${r}-${o}`);(i||a)&&e>0&&t.push({row:r,col:o,number:e})}return void((null==s?void 0:s.setHighlightedCells)&&s.setHighlightedCells(t))}if(u&&u[f.row]&&0!==u[f.row][f.col])return void y(null);const t=`${f.row}-${f.col}`;if((null==s?void 0:s.lockedCells)&&s.lockedCells.has(t))return void y(null);z(f.row,f.col,e)}catch(t){console.error("Error updating cell:",t)}},V=()=>{if(f)try{j(f.row,f.col)}catch(e){console.error("Error clearing cell:",e)}},X=()=>{console.log("handleNewGame 被调用"),F(!0),console.log("设置 showDifficultyModal 为 true")};e.useEffect(()=>{if(!d||d.every(e=>e.every(e=>0===e))){(async()=>{try{if(a&&a(c("loadingGame")),(null==s?void 0:s.setCurrentBoard)&&(null==s?void 0:s.setOriginalPuzzle)&&(null==s?void 0:s.setSolution)){console.log("直接使用本地预设谜题初始化游戏");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];s.setCurrentBoard(e),s.setOriginalPuzzle(e),s.setSolution(t),s.setGameStarted(!0),s.setTimerActive(!0)}else console.log("尝试使用上下文的其他方法初始化游戏")}catch(e){console.error("初始化游戏失败:",e),console.error("错误详情:",e.message,e.stack)}finally{l&&l()}})()}},[]);const K=()=>{k&&k()},Z=e.useCallback(()=>{if(y(null),S){const e=S();if(e&&e.length>0){const t=e[Math.floor(Math.random()*e.length)];let r=c("foundRandomTechnique","找到随机技巧：");if(r+=c(t.type)||c("unknownTechnique")||t.type,void 0!==t.row&&void 0!==t.col){r+=` ${c("position",{defaultMessage:"位置"})}:(${t.row+1},${t.col+1})`,b([[t.row,t.col]])}if(void 0!==t.value){r+=` ${c("number",{defaultMessage:"数字"})}:${t.value}`}Q.info(r,{position:"top-right",autoClose:3e3})}else Q.info(c("noTechniquesAvailable",{defaultMessage:"当前没有可用的技巧机会"}),{position:"top-right",autoClose:2e3})}else console.error("identifyTechniques 函数不可用")},[S,b,y,c]),ee=e.useCallback(()=>{y(null);const e=S();e.length>0?Q.info(`找到${e.length}个可用技巧，可在技巧标签页中查看详情`,{position:"top-right",autoClose:2e3}):Q.info("当前棋盘没有找到可用技巧，请尝试其他解法或获取提示",{position:"top-right",autoClose:2e3})},[S,y]),te=()=>{T&&(T(),q(!0),setTimeout(()=>q(!1),2e3))},re=()=>{C&&(C(),H(!0),setTimeout(()=>H(!1),2e3))},oe=()=>{$&&$()};return v.jsxs("div",{className:"sudoku-game-container",ref:W,children:[!g&&!(null==s?void 0:s.gameCompleted)&&(null==s?void 0:s.gameStarted)&&!(null==s?void 0:s.isLoading)&&v.jsx("div",{className:"pause-overlay",onClick:K,children:v.jsxs("div",{className:"pause-message",children:[v.jsx("h2",{children:c("gamePaused")}),v.jsx("p",{children:c("clickToResume")})]})}),v.jsx("div",{className:"main-content",children:M?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"scroll-hint"}),v.jsx(_n,{errorCount:m,difficulty:p,time:Y(h)}),v.jsx("div",{className:"nav-block",children:v.jsx(On,{onNewGame:X,onPauseTimer:K,onGetHint:Z,onShowTechniques:ee,onToggleNotes:te,onSettings:oe,isNotesMode:x,isTimerActive:g,gameCompleted:(null==s?void 0:s.gameCompleted)||!1})}),v.jsxs("div",{className:"board-container",ref:_,onClick:e=>e.stopPropagation(),style:{position:"relative"},children:[v.jsx(hn,{board:d||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:u,selectedCell:f,highlightedCells:((null==s?void 0:s.highlightedCells)||[]).filter(e=>!e.techniqueIndicator),incorrectCells:(null==s?void 0:s.incorrectCells)||new Set,onCellClick:G,isPencilMode:x,pencilNotes:(null==s?void 0:s.pencilNotes)||[]}),v.jsx(Wn,{highlightedCells:((null==s?void 0:s.highlightedCells)||[]).filter(e=>e.techniqueIndicator),boardWidth:(null==(t=_.current)?void 0:t.offsetWidth)||450,boardHeight:(null==(r=_.current)?void 0:r.offsetHeight)||450,isPortrait:M})]}),v.jsx("div",{className:"controls-container",onClick:e=>e.stopPropagation(),children:v.jsx(gn,{onNumberSelect:J,onClearCell:V,onUndo:P,selectedNumber:(null==f?void 0:f.value)||null,isPencilMode:x,togglePencilMode:re,fillAllCandidates:T,calculateTechniques:E,remainingNumbers:R})})]}):v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"top-row",children:[v.jsx("div",{className:"nav-block",children:v.jsx(On,{onNewGame:X,onPauseTimer:K,onGetHint:Z,onShowTechniques:ee,onToggleNotes:te,onSettings:oe,isNotesMode:x,isTimerActive:g})}),v.jsxs("div",{className:"display-block",children:[v.jsxs("div",{children:[c("error"),"：",v.jsx("span",{className:"value error-count",style:{color:"#ff4d4d"},children:m})]}),v.jsx("div",{children:c(p)}),v.jsx("div",{children:Y(h)})]})]}),v.jsxs("div",{className:"bottom-row",children:[v.jsxs("div",{className:"board-container",ref:_,onClick:e=>e.stopPropagation(),style:{position:"relative"},children:[v.jsx(hn,{board:d||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:u,selectedCell:f,highlightedCells:N.filter(e=>!e.techniqueIndicator),incorrectCells:(null==s?void 0:s.incorrectCells)||new Set,onCellClick:G,isPencilMode:x,pencilNotes:I}),v.jsx(Wn,{highlightedCells:N.filter(e=>e.techniqueIndicator),boardWidth:(null==(o=_.current)?void 0:o.offsetWidth)||450,isPortrait:M})]}),v.jsx("div",{className:"controls-container",onClick:e=>e.stopPropagation(),children:v.jsx(gn,{onNumberSelect:J,onClearCell:V,onUndo:P,selectedNumber:(null==f?void 0:f.value)||null,isPencilMode:x,togglePencilMode:re,fillAllCandidates:T,calculateTechniques:E,remainingNumbers:R})})]})]})}),n&&v.jsx("div",{className:"loading-overlay",children:v.jsx("div",{children:"加载中..."})}),v.jsx($n,{isOpen:O,onClose:()=>F(!1),onSelectDifficulty:async e=>{try{if(console.log(`handleDifficultySelect 被调用，选择难度: ${e}`),F(!1),console.log("关闭难度选择模态框"),a&&(a(c("generatingNewPuzzle")),console.log("显示加载状态")),console.log("sudokuContext 可用:",!!s),console.log("startNewGame 方法可用:",!!(null==s?void 0:s.startNewGame)),console.log("generateNewPuzzle 方法可用:",!!(null==s?void 0:s.generateNewPuzzle)),null==s?void 0:s.startNewGame)console.log("调用 startNewGame 方法"),await s.startNewGame(null,e),console.log("startNewGame 调用完成");else if(null==s?void 0:s.generateNewPuzzle)console.log("调用 generateNewPuzzle 方法"),await s.generateNewPuzzle(e),console.log("generateNewPuzzle 调用完成");else{console.warn("无法开始新游戏：上下文函数不可用"),console.log("使用备用方案：离线谜题生成器"),w&&w(e);const t=(e=>{console.log(`生成离线谜题，难度: ${e}`);const t={easy:40,medium:50,hard:58,expert:64}[e]||50,r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],o=r.map(e=>[...e]);let n=t;for(;n>0;){const e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());0!==o[e][t]&&(o[e][t]=0,n--)}return{puzzle:o,solution:r}})(e);console.log("离线谜题生成完成"),(null==s?void 0:s.setCurrentBoard)&&(null==s?void 0:s.setCurrentPuzzle)&&(null==s?void 0:s.setSolution)&&(console.log("设置谜题到上下文"),s.setCurrentPuzzle(t),s.setCurrentBoard(t.puzzle),s.setSolution(t.solution)),y(null),console.log("重置选中单元格")}}catch(t){console.error("Error starting new game:",t),console.error("错误详情:",t.message,t.stack)}finally{l&&(l(),console.log("隐藏加载状态"))}},initialDifficulty:p}),D&&v.jsx("div",{className:"pencil-mode-instructions",children:c(x?"enterPencilMode":"exitPencilMode")}),B&&v.jsx("div",{className:"pencil-mode-instructions",children:c("notesCalculated")})]})},Tc=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Pc=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`,Ac=Hr.div`
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
`,Nc=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,Ic=Hr.h3`
  font-size: 22px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Ec=Hr.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,Rc=Hr.p`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 15px;
`,Mc=Hr.div`
  width: 100%;
  height: 8px;
  background-color: ${e=>e.theme.background};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`,Lc=Hr.div`
  height: 100%;
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  border-radius: 4px;
  width: ${e=>e.percentage}%;
  transition: width 0.3s ease;
`,Oc=Hr.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Fc=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Dc=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
`,Hc=Hr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Bc=Hr.button`
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
`,qc=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,_c=Hr.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Wc=Hr.div`
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  padding: 20px;
`,Uc=Hr.ol`
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Gc=Hr.li`
  font-size: 16px;
  color: ${e=>e.theme.text};
  line-height: 1.6;
`,Yc=Hr.button`
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
`,Jc=()=>{const{theme:r}=oe(),{techniquesProgress:o,incrementTechniquePractice:n}=ho(),[i,a]=e.useState(null),l=[{id:"nakedSingles",name:"唯一候选数",description:"最简单的数独技巧，当一个格子只有一个可能的数字时填入该数字。",details:{description:"唯一候选数是最基础的数独解题技巧。当一个空格子所在的行、列和3x3宫格中已经包含了除一个数字外的所有其他数字时，这个空格子只能填入剩下的那个数字。",steps:["观察一个空格子","检查该格子所在的行，列出已经存在的数字","检查该格子所在的列，列出已经存在的数字","检查该格子所在的3x3宫格，列出已经存在的数字","如果以上三个区域已经包含了除一个数字外的所有数字（1-9），则填入剩下的那个数字"],examples:"例如：一个格子所在的行包含数字1、2、3、4、5、6、7、9，所在的列包含数字1、2、3、4、5、6、8，所在的宫格包含数字1、2、3、4、5、7、8、9。那么这个格子只能填入数字8。"}},{id:"hiddenSingles",name:"隐性唯一",description:"当一个数字只能出现在某一行、列或宫格的某个特定格子时，填入该数字。",details:{description:"隐性唯一技巧比唯一候选数稍微复杂一些。当一个数字在某一行、列或3x3宫格中只能出现在一个特定的空格子时，即使该格子可能有其他候选数，但这个数字必须填入该格子。",steps:["选择一个数字（1-9）","检查某一行，确定该数字可能的放置位置","如果在该行中，该数字只能放在一个特定格子，则填入该数字","对每一列和每个3x3宫格重复同样的检查"],examples:"例如：在某一行中，数字5只能放在某个特定格子中，尽管该格子可能还有其他候选数（如2和5），但因为数字5在该行中没有其他可能的放置位置，所以这个格子必须填入5。"}},{id:"nakedPairs",name:"数对 (Naked Pairs)",description:"当两个格子在同一区域（行、列或宫格）中具有相同的两个候选数时，可以排除该区域其他格子中这两个数字。",details:{description:"数对技巧是一种排除法技巧。当在同一行、列或3x3宫格中有两个格子都只有相同的两个候选数时，这两个数字必须分别填入这两个格子，因此可以从该区域的其他格子的候选数中排除这两个数字。",steps:["在同一行、列或3x3宫格中寻找两个格子","确认这两个格子恰好有相同的两个候选数","从该区域的其他格子的候选数中排除这两个数字"],examples:"例如：在同一行中，两个格子都只有候选数3和7。这意味着这两个数字必须分别填入这两个格子，因此该行的其他格子中不可能是3或7，可以从它们的候选数中排除这两个数字。"}},{id:"hiddenPairs",name:"隐性数对 (Hidden Pairs)",description:"当两个数字只能出现在同一区域的两个特定格子中时，可以排除这两个格子中的其他候选数。",details:{description:"隐性数对是数对的一种变体。当在同一行、列或3x3宫格中，两个特定的数字只能出现在两个特定的格子中时，这两个格子必须包含这两个数字，可以排除这两个格子中的其他候选数。",steps:["在同一行、列或3x3宫格中选择两个数字","检查这两个数字是否只能出现在该区域的两个特定格子中","如果是，则可以从这两个格子中排除所有其他候选数，只保留这两个数字"],examples:"例如：在同一行中，数字4和6只能出现在两个特定的格子中，尽管这两个格子可能有其他候选数。这意味着这两个格子必须包含数字4和6，所以可以从这两个格子中删除其他候选数。"}},{id:"pointingPairs",name:"指向对 (Pointing Pairs)",description:"当一个数字在某个3x3宫格中只能出现在同一行或同一列时，可以排除该行或列中其他宫格内该数字的可能性。",details:{description:"指向对技巧利用3x3宫格和行/列的关系进行排除。当在某个3x3宫格中，一个数字只能出现在同一行或同一列的格子中时，这个数字在该行或列的其他3x3宫格中就不能出现在相同的行或列位置。",steps:["选择一个3x3宫格","对于某个数字，检查它在该宫格中可能的位置","如果这些位置全部位于同一行或同一列","则可以从该行或列的其他3x3宫格中排除该数字出现在相同行或列位置的可能性"],examples:"例如：在某个3x3宫格中，数字2只能出现在该宫格的第一行的两个格子中。这意味着在这一行的其他3x3宫格中，数字2不能出现在第一行的位置。"}},{id:"boxLineReduction",name:"宫行列排除 (Box-Line Reduction)",description:"当一个数字在某一行或列中只能出现在同一个3x3宫格内时，可以排除该宫格中其他格子的该数字可能性。",details:{description:"宫行列排除是指向对的反向应用。当在某一行或列中，一个数字只能出现在某个特定的3x3宫格中时，可以排除该宫格中其他格子出现该数字的可能性。",steps:["选择某一行或列","对于某个数字，检查它在该行或列中可能的位置","如果这些位置全部位于同一个3x3宫格中","则可以从该3x3宫格的其他格子中排除该数字"],examples:"例如：在某一行中，数字8只能出现在该行的前三个格子（属于第一个3x3宫格）。这意味着在第一个3x3宫格中，数字8只能出现在这三个格子中，可以从该宫格的其他六个格子中排除数字8。"}}],s=e=>{const t=o[e]||{mastered:0,practiced:0};return Math.min(100,t.practiced/10*20)};return v.jsx(Tc,{children:i?v.jsxs(Fc,{theme:r,children:[v.jsxs(Dc,{children:[v.jsx(Hc,{theme:r,children:i.name}),v.jsx(Bc,{onClick:()=>{a(null)},theme:r,children:"关闭"})]}),v.jsxs(qc,{children:[v.jsxs("div",{children:[v.jsx(_c,{theme:r,children:"技巧说明"}),v.jsx("p",{style:{fontSize:"16px",color:r.textSecondary,lineHeight:"1.6"},children:i.details.description})]}),v.jsxs("div",{children:[v.jsx(_c,{theme:r,children:"使用步骤"}),v.jsx(Uc,{children:i.details.steps.map((e,t)=>v.jsx(Gc,{theme:r,children:e},t))})]}),v.jsxs("div",{children:[v.jsx(_c,{theme:r,children:"示例"}),v.jsx(Wc,{theme:r,children:v.jsx("p",{style:{fontSize:"16px",color:r.textSecondary,lineHeight:"1.6"},children:i.details.examples})})]}),v.jsx(Yc,{onClick:()=>(e=>{var r;n(e);const o=null==(r=l.find(t=>t.id===e))?void 0:r.name;Q.info(t("startPractice",{techniqueName:o}),{position:"top-right",autoClose:2e3})})(i.id),theme:r,children:"开始练习"})]})]}):v.jsxs(v.Fragment,{children:[v.jsx("h2",{style:{fontSize:"32px",color:r.text,margin:0},children:"数独技巧学习"}),v.jsx("p",{style:{fontSize:"18px",color:r.textSecondary,marginBottom:"30px"},children:"点击技巧卡片了解详情，掌握各种数独解题方法"}),v.jsx(Pc,{children:l.map(e=>{const t=o[e.id]||{mastered:0,practiced:0},n=s(e.id),i=(l=e.id,s(l)>=80);var l;return v.jsxs(Ac,{onClick:()=>(e=>{a(e)})(e),mastered:i,theme:r,children:[v.jsxs(Nc,{children:[v.jsx(Ic,{theme:r,children:e.name}),v.jsx(Ec,{mastered:i,theme:r,children:i?"已掌握":"学习中"})]}),v.jsx(Rc,{theme:r,children:e.description}),v.jsx(Mc,{theme:r,children:v.jsx(Lc,{percentage:n,mastered:i,theme:r})}),v.jsxs(Oc,{theme:r,children:[v.jsxs("span",{children:["练习次数: ",t.practiced]}),v.jsxs("span",{children:["掌握度: ",n.toFixed(0),"%"]})]})]},e.id)})})]})})},Vc=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Xc=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Kc=Hr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Qc=Hr.button`
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
`,Zc=Hr.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`,ed=Hr.button`
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
`,td=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,rd=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
`,od=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,nd=Hr.h3`
  font-size: 20px;
  color: ${e=>e.theme.text};
  margin: 0;
`,id=Hr.div`
  background-color: ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,ad=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
`,ld=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,sd=Hr.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,cd=Hr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,dd=Hr.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,ud=Hr.button`
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
`,fd=Hr.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.textSecondary};
`,pd=Hr.div`
  font-size: 72px;
  margin-bottom: 20px;
  color: ${e=>e.theme.disabled};
`,hd=Hr.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 10px;
`,md=Hr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 20px;
`,gd=Hr.button`
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
`,xd=Hr.div`
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
`,yd=Hr.div`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,bd=Hr.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-top: 0;
  margin-bottom: 20px;
`,vd=Hr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 30px;
  line-height: 1.6;
`,wd=Hr.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`,Cd=()=>{const{theme:t}=oe(),{userId:r}=ho(),{loadSavedGame:o}=Ho(),{executeWithLoading:n}=de(),{t:i}=le(),[a,l]=e.useState([]),[s,c]=e.useState("all"),[d,u]=e.useState(!1),[f,p]=e.useState(null);e.useEffect(()=>{h()},[]);const h=async()=>{try{await n(async()=>{const e=await go.getUserProgress(r);l(e.data||[])},"加载游戏进度中...")}catch(e){console.error("加载进度失败:",e),l(m())}},m=()=>[{id:"1",puzzleId:"puzzle-1",difficulty:"easy",startTime:"2023-10-15T14:30:00",lastUpdated:"2023-10-15T15:45:00",completed:!1,completionTime:null,filledCells:42,totalCells:81,status:"in-progress",puzzleState:[]},{id:"2",puzzleId:"puzzle-2",difficulty:"medium",startTime:"2023-10-14T09:15:00",lastUpdated:"2023-10-14T10:30:00",completed:!0,completionTime:"2023-10-14T10:30:00",filledCells:81,totalCells:81,status:"completed",puzzleState:[]},{id:"3",puzzleId:"puzzle-3",difficulty:"hard",startTime:"2023-10-13T18:00:00",lastUpdated:"2023-10-13T18:30:00",completed:!1,completionTime:null,filledCells:28,totalCells:81,status:"paused",puzzleState:[]}],g=a.filter(e=>"all"===s||("completed"===s?"completed"===e.status:"in-progress"!==s||"completed"!==e.status)),x=e=>{p(e),u(!0)},y=()=>{u(!1),p(null)},b=e=>new Date(e).toLocaleString(),w=e=>{switch(e){case"easy":return i("easy");case"medium":return i("medium");case"hard":return i("hard");case"expert":return i("expert");default:return e}};return v.jsxs(Vc,{children:[v.jsxs(Xc,{children:[v.jsx(Kc,{children:i("progress")}),a.length>0&&v.jsx(Qc,{onClick:()=>x("clear-all"),children:i("clearAllProgress")})]}),a.length>0&&v.jsxs(Zc,{children:[v.jsx(ed,{active:"all"===s,onClick:()=>c("all"),children:i("allProgress")}),v.jsx(ed,{active:"in-progress"===s,onClick:()=>c("in-progress"),children:i("inProgress")}),v.jsx(ed,{active:"completed"===s,onClick:()=>c("completed"),children:i("completed")})]}),g.length>0?v.jsx(td,{children:g.map(e=>{return v.jsxs(rd,{status:e.status,children:[v.jsxs(od,{children:[v.jsxs(nd,{children:[i("sudokuGame")," #",e.id]}),v.jsx(id,{status:e.status,theme:t,children:"completed"===e.status?i("completed"):"in-progress"===e.status?i("inProgress"):i("paused")})]}),v.jsxs(ad,{children:[v.jsxs(ld,{children:[v.jsx(sd,{theme:t,children:i("difficulty")}),v.jsx(cd,{theme:t,children:w(e.difficulty)})]}),v.jsxs(ld,{children:[v.jsx(sd,{theme:t,children:i("startTime")}),v.jsx(cd,{theme:t,children:b(e.startTime)})]}),v.jsxs(ld,{children:[v.jsx(sd,{theme:t,children:i("lastUpdated")}),v.jsx(cd,{theme:t,children:b(e.lastUpdated)})]}),v.jsxs(ld,{children:[v.jsx(sd,{theme:t,children:i("completionProgress")}),v.jsxs(cd,{theme:t,children:[(r=e.filledCells,l=e.totalCells,Math.round(r/l*100)),"%"]})]})]}),v.jsxs(dd,{children:["completed"!==e.status&&v.jsx(ud,{type:"primary",onClick:()=>(async e=>{try{await n(async()=>{const t=a.find(t=>t.id===e);t&&(await o(t.puzzleState,t.puzzleId),window.location.href="/game")},"加载游戏中...")}catch(t){console.error("加载游戏失败:",t),Q.error(i("loadGameFailed"),{position:"top-right",autoClose:2e3})}})(e.id),children:i("continueGame")}),v.jsx(ud,{type:"danger",onClick:()=>x(e.id),children:i("deleteProgress")})]})]},e.id);var r,l})}):v.jsxs(fd,{children:[v.jsx(pd,{children:"📝"}),v.jsx(hd,{children:i("noProgress")}),v.jsx(md,{children:i("all"!==s?"noFilteredProgress":"noStartedGames")}),v.jsx(gd,{onClick:()=>window.location.href="/game",children:i("startNewGame")})]}),d&&v.jsx(xd,{children:v.jsxs(yd,{children:[v.jsx(bd,{children:i("clear-all"===f?"confirmClearAllProgress":"confirmDeleteProgress")}),v.jsx(vd,{children:i("clear-all"===f?"clearAllProgressWarning":"deleteProgressWarning")}),v.jsxs(wd,{children:[v.jsx(ud,{type:"secondary",onClick:y,children:i("cancel")}),v.jsx(ud,{type:"danger",onClick:()=>{"clear-all"===f?(async()=>{try{await n(async()=>{l([])},"清空进度中...")}catch(e){console.error("清空进度失败:",e),Q.error(i("clearProgressFailed"),{position:"top-right",autoClose:2e3})}})():"string"==typeof f&&(async e=>{try{await n(async()=>{l(t=>t.filter(t=>t.id!==e))},"删除进度中...")}catch(t){console.error("删除进度失败:",t),Q.error(i("deleteProgressFailed"),{position:"top-right",autoClose:2e3})}})(f),y()},children:i("confirmDelete")})]})]})})]})},kd=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,jd=Hr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Sd=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`,$d=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 5px solid ${e=>e.color||e.theme.primary};
`,zd=Hr.div`
  font-size: 48px;
  font-weight: 700;
  color: ${e=>e.color||e.theme.primary};
`,Td=Hr.div`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,Pd=Hr.div`
  font-size: 14px;
  color: ${e=>e.positive?e.theme.success:e.theme.error};
`,Ad=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Nd=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Id=Hr.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Ed=Hr.div`
  display: flex;
  gap: 10px;
`,Rd=Hr.button`
  background-color: ${e=>e.active?e.theme.primary:e.theme.surface};
  color: ${e=>e.active?"white":e.theme.text};
  border: 2px solid ${e=>e.active?e.theme.primary:e.theme.border};
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`,Md=Hr.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.textSecondary};
  font-size: 18px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
`,Ld=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Od=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Fd=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Dd=Hr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,Hd=Hr.span`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,Bd=Hr.div`
  width: 100%;
  height: 10px;
  background-color: ${e=>e.theme.background};
  border-radius: 5px;
  overflow: hidden;
`,qd=Hr.div`
  height: 100%;
  background-color: ${e=>{switch(e.difficulty){case"easy":return"#4CAF50";case"medium":return"#FF9800";case"hard":return"#F44336";case"expert":return"#9C27B0";default:return e.theme.primary}}};
  border-radius: 5px;
  width: ${e=>e.percentage}%;
`,_d=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Wd=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
`,Ud=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  border-left: 4px solid ${e=>e.mastered?e.theme.success:e.theme.primary};
`,Gd=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Yd=Hr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,Jd=Hr.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Vd=Hr.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,Xd=()=>{const{theme:t}=oe(),{userId:r,userStats:o,techniquesProgress:n}=ho(),{executeWithLoading:i}=de(),[a,l]=e.useState(null),[s,c]=e.useState("all");e.useEffect(()=>{d()},[s]);const d=async()=>{try{await i(async()=>{const e=await go.getUserStatistics(r,s);l(e.data)},"加载统计数据中...")}catch(e){console.error("加载统计数据失败:",e),l(u())}},u=()=>({totalGames:42,completedGames:38,winRate:90.5,averageTime:1245,favoriteDifficulty:"medium",bestTime:420,currentStreak:5,longestStreak:12,totalPlayTime:145200,difficultyBreakdown:{easy:15,medium:20,hard:5,expert:2},recentPerformance:[{date:"2023-10-10",games:3,completed:3},{date:"2023-10-11",games:2,completed:2},{date:"2023-10-12",games:4,completed:3},{date:"2023-10-13",games:1,completed:1},{date:"2023-10-14",games:2,completed:2},{date:"2023-10-15",games:3,completed:3},{date:"2023-10-16",games:2,completed:2}]}),f=a||u(),p=n||{},h=e=>{if(!e)return"0:00";return`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`},m=()=>{if(f.totalGames)return f.totalGames;const e=f.difficultyBreakdown||{};return Object.values(e).reduce((e,t)=>e+t,0)},g=e=>{const t=p[e]||{practiced:0};return Math.min(100,t.practiced/10*20)};return v.jsxs(kd,{children:[v.jsx(jd,{theme:t,children:"我的统计"}),v.jsxs(Sd,{children:[v.jsxs($d,{color:t.primary,theme:t,children:[v.jsx(zd,{color:t.primary,theme:t,children:m()}),v.jsx(Td,{theme:t,children:"总游戏数"}),v.jsx(Pd,{positive:!0,theme:t,children:"+5 本周"})]}),v.jsxs($d,{color:t.success,theme:t,children:[v.jsx(zd,{color:t.success,theme:t,children:f.completedGames}),v.jsx(Td,{theme:t,children:"完成游戏"}),v.jsx(Pd,{positive:!0,theme:t,children:"全部完成"})]}),v.jsxs($d,{color:t.warning,theme:t,children:[v.jsxs(zd,{color:t.warning,theme:t,children:[f.winRate,"%"]}),v.jsx(Td,{theme:t,children:"胜率"}),v.jsx(Pd,{positive:!0,theme:t,children:"+2% 本月"})]}),v.jsxs($d,{color:t.info,theme:t,children:[v.jsx(zd,{color:t.info,theme:t,children:h(f.averageTime)}),v.jsx(Td,{theme:t,children:"平均时间"}),v.jsx(Pd,{positive:!0,theme:t,children:"-30秒"})]}),v.jsxs($d,{color:t.error,theme:t,children:[v.jsx(zd,{color:t.error,theme:t,children:h(f.bestTime)}),v.jsx(Td,{theme:t,children:"最佳时间"}),v.jsx(Pd,{positive:!0,theme:t,children:"记录保持中"})]}),v.jsxs($d,{color:t.primary,theme:t,children:[v.jsx(zd,{color:t.primary,theme:t,children:f.currentStreak}),v.jsx(Td,{theme:t,children:"当前连续天数"}),v.jsx(Pd,{positive:f.currentStreak>1,theme:t,children:f.currentStreak>1?"🔥 加油！":"今天开始"})]})]}),v.jsxs(Ad,{theme:t,children:[v.jsxs(Nd,{children:[v.jsx(Id,{theme:t,children:"游戏进度"}),v.jsxs(Ed,{children:[v.jsx(Rd,{active:"week"===s,onClick:()=>c("week"),theme:t,children:"本周"}),v.jsx(Rd,{active:"month"===s,onClick:()=>c("month"),theme:t,children:"本月"}),v.jsx(Rd,{active:"all"===s,onClick:()=>c("all"),theme:t,children:"全部"})]})]}),v.jsx(Md,{theme:t,children:"📊 游戏进度图表"})]}),v.jsxs(Ad,{theme:t,children:[v.jsx(Nd,{children:v.jsx(Id,{theme:t,children:"难度分布"})}),v.jsx(Ld,{children:Object.entries(f.difficultyBreakdown||{}).map(([e,r])=>{const o=(e=>{const t=f.difficultyBreakdown||{},r=m();return r>0?t[e]/r*100:0})(e);return v.jsxs(Od,{children:[v.jsxs(Fd,{children:[v.jsx(Dd,{theme:t,children:{easy:"简单",medium:"中等",hard:"困难",expert:"专家"}[e]||e}),v.jsxs(Hd,{theme:t,children:[r," 局 (",o.toFixed(1),"%)"]})]}),v.jsx(Bd,{theme:t,children:v.jsx(qd,{difficulty:e,percentage:o})})]},e)})})]}),v.jsxs(_d,{theme:t,children:[v.jsx(Id,{theme:t,children:"技巧掌握"}),v.jsx(Wd,{children:[{id:"nakedSingles",name:"唯一候选数"},{id:"hiddenSingles",name:"隐性唯一"},{id:"nakedPairs",name:"数对"},{id:"hiddenPairs",name:"隐性数对"},{id:"pointingPairs",name:"指向对"},{id:"boxLineReduction",name:"宫行列排除"}].map(e=>{var r;const o=g(e.id),n=(i=e.id,g(i)>=80);var i;const a=(null==(r=p[e.id])?void 0:r.practiced)||0;return v.jsxs(Ud,{mastered:n,theme:t,children:[v.jsxs(Gd,{children:[v.jsx(Yd,{theme:t,children:e.name}),v.jsxs(Jd,{theme:t,children:["练习 ",a," 次 · 掌握度 ",o.toFixed(0),"%"]})]}),v.jsx(Vd,{mastered:n,theme:t,children:n?"已掌握":"学习中"})]},e.id)})})]})]})},Kd=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`,Qd=Hr.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,Zd=Hr(n)`
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
`,eu=Hr.h1`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  flex: 1;
`,tu=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`,ru=Hr.h2`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 20px 0;
  border-bottom: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  padding-bottom: 10px;
`,ou=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  
  &:last-child {
    border-bottom: none;
  }
`,nu=Hr.div`
  font-size: 18px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-weight: 500;
`,iu=Hr.div`
  display: flex;
  gap: 10px;
`,au=Hr.button`
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
`,lu=Hr.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,su=Hr.button`
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
`,cu=Hr.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,du=Hr(n)`
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
`,uu=Hr.span`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  font-style: italic;
`,fu=()=>{const{theme:e,themeMode:t,setLightTheme:r,setDarkTheme:o,setSystemTheme:n,setCustomThemeMode:a,customTheme:l}=oe(),{language:s,changeLanguage:c,availableLanguages:d,t:u}=le();return i(),v.jsxs(Kd,{children:[v.jsxs(Qd,{children:[v.jsx(Zd,{to:"/",theme:e,children:v.jsx(xc,{icon:jc,size:"lg"})}),v.jsx(eu,{theme:e,children:u("settingsPageTitle")})]}),v.jsxs(tu,{theme:e,children:[v.jsx(ru,{theme:e,children:u("language")}),v.jsxs(ou,{children:[v.jsx(nu,{theme:e,children:u("language")}),v.jsx(iu,{children:d.map(t=>v.jsx(au,{active:s===t.code,onClick:()=>c(t.code),theme:e,children:t.name},t.code))})]})]}),v.jsxs(tu,{theme:e,children:[v.jsx(ru,{theme:e,children:u("theme")}),v.jsxs(lu,{children:[v.jsxs(su,{active:"light"===t,onClick:r,theme:e,children:[v.jsx(xc,{icon:bc,size:"lg"}),u("lightTheme")]}),v.jsxs(su,{active:"dark"===t,onClick:o,theme:e,children:[v.jsx(xc,{icon:vc,size:"lg"}),u("darkTheme")]}),v.jsxs(su,{active:"system"===t,onClick:n,theme:e,children:[v.jsx(xc,{icon:$c,size:"lg"}),u("systemTheme")]})]}),v.jsxs(ou,{style:{marginTop:"20px"},children:[v.jsx(nu,{theme:e,children:u("customTheme")}),v.jsxs(cu,{children:[v.jsxs(du,{to:"/settings/theme-editor",theme:e,children:[v.jsx(xc,{icon:wc,size:"lg"}),u("editTheme")]}),v.jsx(uu,{theme:e,children:"custom"===t&&`${u("customTheme")} - ${l.name}`})]})]})]})]})},pu=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`,hu=Hr.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,mu=Hr(n)`
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
`,gu=Hr.h1`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  flex: 1;
`,xu=Hr.div`
  display: flex;
  gap: 10px;
`,yu=Hr.button`
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
`,bu=Hr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,vu=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,wu=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 600px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`,Cu=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,ku=Hr.h2`
  color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.text)||"#333333"}};
  margin: 0;
  font-size: 24px;
`,ju=Hr.button`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.primary)||"#4a6cf7"}};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
`,Su=Hr.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.gridLine)||"#e0e0e0"}};
  border-radius: 8px;
  padding: 2px;
  margin: 0 auto 30px;
  width: 300px;
  height: 300px;
`,$u=Hr.div`
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
`,zu=Hr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`,Tu=Hr.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Pu=Hr.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  border: 2px solid ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.border)||"#e0e0e0"}};
`,Au=Hr.span`
  color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.text)||"#333333"}};
  font-size: 14px;
`,Nu=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,Iu=Hr.label`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`,Eu=Hr.input`
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
`,Ru=Hr.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Mu=Hr.input`
  width: 60px;
  height: 44px;
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  background: none;
`,Lu=Hr.input`
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
`,Ou=Hr.input`
  display: none;
`,Fu=()=>{const{theme:t,customTheme:r,updateCustomTheme:o,resetCustomTheme:n,exportTheme:a,importTheme:l}=oe(),{t:s}=le();i();const c=e.useRef(null),[d,u]=e.useState({...r});e.useEffect(()=>{u({...r})},[r]);const f=(e,t)=>{u(r=>({...r,[e]:t}))},p=[{key:"background",label:s("backgroundColor")},{key:"surface",label:s("surfaceColor")},{key:"text",label:s("textColor")},{key:"textSecondary",label:s("textSecondaryColor")},{key:"primary",label:s("primaryColor")},{key:"secondary",label:s("secondaryColor")},{key:"success",label:s("successColor")},{key:"warning",label:s("warningColor")},{key:"error",label:s("errorColor")},{key:"border",label:s("borderColor")},{key:"gridLine",label:s("gridLineColor")},{key:"gridLineThick",label:s("gridLineThickColor")},{key:"highlight",label:s("highlightColor")}];return v.jsxs(pu,{children:[v.jsxs(hu,{children:[v.jsx(mu,{to:"/settings",theme:t,children:v.jsx(xc,{icon:jc,size:"lg"})}),v.jsx(gu,{theme:t,children:s("themeEditor")}),v.jsxs(xu,{children:[v.jsxs(yu,{type:"secondary",onClick:()=>{n(),Q.info("主题已重置",{position:"top-right",autoClose:2e3})},theme:t,children:[v.jsx(xc,{icon:Sc,size:"lg"}),s("reset")]}),v.jsxs(yu,{type:"primary",onClick:()=>{o(d),Q.success("主题已保存",{position:"top-right",autoClose:2e3})},theme:t,children:[v.jsx(xc,{icon:yc,size:"lg"}),s("saveChanges")]})]})]}),v.jsxs(bu,{children:[v.jsxs(vu,{theme:t,children:[v.jsx(Lu,{type:"text",value:d.name||"",onChange:e=>{u(t=>({...t,name:e.target.value}))},placeholder:s("customTheme"),theme:t}),p.map(e=>v.jsxs(Nu,{children:[v.jsx(Iu,{theme:t,children:e.label}),v.jsxs(Ru,{children:[v.jsx(Eu,{type:"text",value:d[e.key]||"",onChange:t=>f(e.key,t.target.value),placeholder:"#000000",theme:t}),v.jsx(Mu,{type:"color",value:d[e.key]||"#000000",onChange:t=>f(e.key,t.target.value)})]})]},e.key)),v.jsxs(xu,{style:{marginTop:"30px"},children:[v.jsxs(yu,{type:"secondary",onClick:()=>{var e;return null==(e=c.current)?void 0:e.click()},theme:t,children:[v.jsx(xc,{icon:kc,size:"lg"}),s("importTheme")]}),v.jsx(Ou,{ref:c,type:"file",accept:".json",onChange:async e=>{const t=e.target.files[0];if(t)try{await l(t),Q.success("主题导入成功",{position:"top-right",autoClose:2e3}),e.target.value=""}catch(r){Q.error("主题导入失败: "+r.message,{position:"top-right",autoClose:3e3})}}}),v.jsxs(yu,{type:"secondary",onClick:()=>{a(d),Q.info("主题已导出",{position:"top-right",autoClose:2e3})},theme:t,children:[v.jsx(xc,{icon:Cc,size:"lg"}),s("exportTheme")]})]})]}),v.jsxs(wu,{previewTheme:d,children:[v.jsxs(Cu,{previewTheme:d,children:[v.jsx(ku,{previewTheme:d,children:s("preview")}),v.jsx(ju,{previewTheme:d,children:s("preview")})]}),v.jsx(Su,{previewTheme:d,children:(()=>{const e=[];for(let t=0;t<9;t++)for(let r=0;r<9;r++){const o=4===t&&4===r||0===t&&0===r||8===t&&8===r;e.push(v.jsx($u,{row:t,col:r,isHighlighted:o,previewTheme:d,children:Math.floor(9*Math.random())+1},`${t}-${r}`))}return e})()}),v.jsxs(zu,{children:[v.jsxs(Tu,{previewTheme:d,children:[v.jsx(Pu,{color:d.primary,previewTheme:d}),v.jsx(Au,{previewTheme:d,children:s("primaryColor")})]}),v.jsxs(Tu,{previewTheme:d,children:[v.jsx(Pu,{color:d.success,previewTheme:d}),v.jsx(Au,{previewTheme:d,children:s("successColor")})]}),v.jsxs(Tu,{previewTheme:d,children:[v.jsx(Pu,{color:d.warning,previewTheme:d}),v.jsx(Au,{previewTheme:d,children:s("warningColor")})]}),v.jsxs(Tu,{previewTheme:d,children:[v.jsx(Pu,{color:d.error,previewTheme:d}),v.jsx(Au,{previewTheme:d,children:s("errorColor")})]})]})]})]})]})};w.createRoot(document.getElementById("root")).render(v.jsxs(o.StrictMode,{children:[v.jsx(re,{children:v.jsx(ae,{children:v.jsx(ce,{children:v.jsx(po,{children:v.jsx(Do,{children:v.jsx(a,{children:v.jsx(uo,{children:v.jsxs(l,{children:[v.jsx(s,{path:"/",element:v.jsx(zc,{})}),v.jsx(s,{path:"/home",element:v.jsx(dn,{})}),v.jsx(s,{path:"/game",element:v.jsx(zc,{})}),v.jsx(s,{path:"/techniques",element:v.jsx(Jc,{})}),v.jsx(s,{path:"/progress",element:v.jsx(Cd,{})}),v.jsx(s,{path:"/stats",element:v.jsx(Xd,{})}),v.jsx(s,{path:"/settings",element:v.jsx(fu,{})}),v.jsx(s,{path:"/settings/theme-editor",element:v.jsx(Fu,{})})]})})})})})})})}),v.jsx(q,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]}));
