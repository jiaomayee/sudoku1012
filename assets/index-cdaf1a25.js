import{r as e,a as t,R as r,L as n,u as o,B as i,b as a,d as s}from"./react-vendor-ce3df769.js";import{l}from"./utils-b9091abe.js";import{a as c}from"./axios-8e1cd5bd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var d={exports:{}},u={},f=e,p=Symbol.for("react.element"),h=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,g=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function v(e,t,r){var n,o={},i=null,a=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)m.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:p,type:e,key:i,ref:a,props:o,_owner:g.current}}u.Fragment=h,u.jsx=v,u.jsxs=v,d.exports=u;var y=d.exports,b={},w=t;function j(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=j(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function k(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=j(e))&&(n&&(n+=" "),n+=t);return n}b.createRoot=w.createRoot,b.hydrateRoot=w.hydrateRoot;const S=e=>"number"==typeof e&&!isNaN(e),$=e=>"string"==typeof e,C=e=>"function"==typeof e,z=e=>$(e)||C(e)?e:null,A=t=>e.isValidElement(t)||$(t)||C(t)||S(t);function T(t){let{enter:n,exit:o,appendPosition:i=!1,collapse:a=!0,collapseDuration:s=300}=t;return function(t){let{children:l,position:c,preventExitTransition:d,done:u,nodeRef:f,isIn:p}=t;const h=i?`${n}--${c}`:n,m=i?`${o}--${c}`:o,g=e.useRef(0);return e.useLayoutEffect(()=>{const e=f.current,t=h.split(" "),r=n=>{n.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===g.current&&"animationcancel"!==n.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)},[]),e.useEffect(()=>{const e=f.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,r){void 0===r&&(r=300);const{scrollHeight:n,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=n+"px",o.transition=`all ${r}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,r)})})}(e,u,s):u()};p||(d?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))},[p]),r.createElement(r.Fragment,null,l)}}function P(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const I={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const r=this.list.get(e).filter(e=>e!==t);return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const r=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(r)})}},N=e=>{let{theme:t,type:n,...o}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...o})},E={info:function(e){return r.createElement(N,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(N,{...e},r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(N,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(N,{...e},r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function O(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return r.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(e){let{delay:t,isRunning:n,closeToast:o,type:i="default",hide:a,className:s,style:l,controlledProgress:c,progress:d,rtl:u,isIn:f,theme:p}=e;const h=a||c&&0===d,m={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:h?0:1};c&&(m.transform=`scaleX(${d})`);const g=k("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),x=C(s)?s({rtl:u,type:i,defaultClassName:g}):k(g,s);return r.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:x,style:m,[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]:c&&d<1?null:()=>{f&&o()}})}const F=t=>{const{isRunning:n,preventExitTransition:o,toastRef:i,eventHandlers:a}=function(t){const[r,n]=e.useState(!1),[o,i]=e.useState(!1),a=e.useRef(null),s=e.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=e.useRef(t),{autoClose:c,pauseOnHover:d,closeToast:u,onClick:f,closeOnClick:p}=t;function h(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",y),document.addEventListener("touchmove",v),document.addEventListener("touchend",y);const r=a.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=r.getBoundingClientRect(),r.style.transition="",s.x=M(e.nativeEvent),s.y=R(e.nativeEvent),"x"===t.draggableDirection?(s.start=s.x,s.removalDistance=r.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=r.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function m(e){if(s.boundingRect){const{top:r,bottom:n,left:o,right:i}=s.boundingRect;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&s.x>=o&&s.x<=i&&s.y>=r&&s.y<=n?x():g()}}function g(){n(!0)}function x(){n(!1)}function v(e){const n=a.current;s.canDrag&&n&&(s.didMove=!0,r&&x(),s.x=M(e),s.y=R(e),s.delta="x"===t.draggableDirection?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),n.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,n.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function y(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",y),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",y);const e=a.current;if(s.canDrag&&s.didMove&&e){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform=`translate${t.draggableDirection}(0)`,e.style.opacity="1"}}e.useEffect(()=>{l.current=t}),e.useEffect(()=>(a.current&&a.current.addEventListener("d",g,{once:!0}),C(t.onOpen)&&t.onOpen(e.isValidElement(t.children)&&t.children.props),()=>{const t=l.current;C(t.onClose)&&t.onClose(e.isValidElement(t.children)&&t.children.props)}),[]),e.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",g),window.addEventListener("blur",x)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",g),window.removeEventListener("blur",x))}),[t.pauseOnFocusLoss]);const b={onMouseDown:h,onTouchStart:h,onMouseUp:m,onTouchEnd:m};return c&&d&&(b.onMouseEnter=x,b.onMouseLeave=g),p&&(b.onClick=e=>{f&&f(e),s.canCloseOnClick&&u()}),{playToast:g,pauseToast:x,isRunning:r,preventExitTransition:o,toastRef:a,eventHandlers:b}}(t),{closeButton:s,children:l,autoClose:c,onClick:d,type:u,hideProgressBar:f,closeToast:p,transition:h,position:m,className:g,style:x,bodyClassName:v,bodyStyle:y,progressClassName:b,progressStyle:w,updateId:j,role:S,progress:$,rtl:z,toastId:A,deleteToast:T,isIn:P,isLoading:I,iconOut:N,closeOnClick:E,theme:F}=t,D=k("Toastify__toast",`Toastify__toast-theme--${F}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":z},{"Toastify__toast--close-on-click":E}),_=C(g)?g({rtl:z,position:m,type:u,defaultClassName:D}):k(D,g),H=!!$||!c,B={closeToast:p,type:u,theme:F};let W=null;return!1===s||(W=C(s)?s(B):e.isValidElement(s)?e.cloneElement(s,B):O(B)),r.createElement(h,{isIn:P,done:T,position:m,preventExitTransition:o,nodeRef:i},r.createElement("div",{id:A,onClick:d,className:_,...a,style:x,ref:i},r.createElement("div",{...P&&{role:S},className:C(v)?v({type:u}):k("Toastify__toast-body",v),style:y},null!=N&&r.createElement("div",{className:k("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!I})},N),r.createElement("div",null,l)),W,r.createElement(L,{...j&&!H?{key:`pb-${j}`}:{},rtl:z,theme:F,delay:c,isRunning:n,isIn:P,closeToast:p,hide:f,type:u,style:w,className:b,controlledProgress:H,progress:$||0})))},D=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},_=T(D("bounce",!0));T(D("slide",!0)),T(D("zoom")),T(D("flip"));const H=e.forwardRef((t,n)=>{const{getToastToRender:o,containerRef:i,isToastActive:a}=function(t){const[,r]=e.useReducer(e=>e+1,0),[n,o]=e.useState([]),i=e.useRef(null),a=e.useRef(new Map).current,s=e=>-1!==n.indexOf(e),l=e.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:e=>a.get(e)}).current;function c(e){let{containerId:t}=e;const{limit:r}=l.props;!r||t&&l.containerId!==t||(l.count-=l.queue.length,l.queue=[])}function d(e){o(t=>null==e?[]:t.filter(t=>t!==e))}function u(){const{toastContent:e,toastProps:t,staleId:r}=l.queue.shift();p(e,t,r)}function f(t,n){let{delay:o,staleId:s,...c}=n;if(!A(t)||(f=c,!i.current||l.props.enableMultiContainer&&f.containerId!==l.props.containerId||a.has(f.toastId)&&null==f.updateId))return;var f;const{toastId:h,updateId:m,data:g}=c,{props:x}=l,v=()=>d(h),y=null==m;y&&l.count++;const b={...x,style:x.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(c).filter(e=>{let[t,r]=e;return null!=r})),toastId:h,updateId:m,data:g,closeToast:v,isIn:!1,className:z(c.className||x.toastClassName),bodyClassName:z(c.bodyClassName||x.bodyClassName),progressClassName:z(c.progressClassName||x.progressClassName),autoClose:!c.isLoading&&(w=c.autoClose,j=x.autoClose,!1===w||S(w)&&w>0?w:j),deleteToast(){const e=P(a.get(h),"removed");a.delete(h),I.emit(4,e);const t=l.queue.length;if(l.count=null==h?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),t>0){const e=null==h?l.props.limit:1;if(1===t||1===e)l.displayedToast++,u();else{const r=e>t?t:e;l.displayedToast=r;for(let e=0;e<r;e++)u()}}else r()}};var w,j;b.iconOut=function(t){let{theme:r,type:n,isLoading:o,icon:i}=t,a=null;const s={theme:r,type:n};return!1===i||(C(i)?a=i(s):e.isValidElement(i)?a=e.cloneElement(i,s):$(i)||S(i)?a=i:o?a=E.spinner():n in E&&(a=E[n](s))),a}(b),C(c.onOpen)&&(b.onOpen=c.onOpen),C(c.onClose)&&(b.onClose=c.onClose),b.closeButton=x.closeButton,!1===c.closeButton||A(c.closeButton)?b.closeButton=c.closeButton:!0===c.closeButton&&(b.closeButton=!A(x.closeButton)||x.closeButton);let k=t;e.isValidElement(t)&&!$(t.type)?k=e.cloneElement(t,{closeToast:v,toastProps:b,data:g}):C(t)&&(k=t({closeToast:v,toastProps:b,data:g})),x.limit&&x.limit>0&&l.count>x.limit&&y?l.queue.push({toastContent:k,toastProps:b,staleId:s}):S(o)?setTimeout(()=>{p(k,b,s)},o):p(k,b,s)}function p(e,t,r){const{toastId:n}=t;r&&a.delete(r);const i={content:e,props:t};a.set(n,i),o(e=>[...e,n].filter(e=>e!==r)),I.emit(4,P(i,null==i.props.updateId?"added":"updated"))}return e.useEffect(()=>(l.containerId=t.containerId,I.cancelEmit(3).on(0,f).on(1,e=>i.current&&d(e)).on(5,c).emit(2,l),()=>{a.clear(),I.emit(3,l)}),[]),e.useEffect(()=>{l.props=t,l.isToastActive=s,l.displayedToast=n.length}),{getToastToRender:function(e){const r=new Map,n=Array.from(a.values());return t.newestOnTop&&n.reverse(),n.forEach(e=>{const{position:t}=e.props;r.has(t)||r.set(t,[]),r.get(t).push(e)}),Array.from(r,t=>e(t[0],t[1]))},containerRef:i,isToastActive:s}}(t),{className:s,style:l,rtl:c,containerId:d}=t;function u(e){const t=k("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":c});return C(s)?s({position:e,rtl:c,defaultClassName:t}):k(t,z(s))}return e.useEffect(()=>{n&&(n.current=i.current)},[]),r.createElement("div",{ref:i,className:"Toastify",id:d},o((e,t)=>{const n=t.length?{...l}:{...l,pointerEvents:"none"};return r.createElement("div",{className:u(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:o,props:i}=e;return r.createElement(F,{...i,isIn:a(i.toastId),style:{...i.style,"--nth":n+1,"--len":t.length},key:`toast-${i.key}`},o)}))}))});H.displayName="ToastContainer",H.defaultProps={position:"top-right",transition:_,autoClose:5e3,closeButton:O,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let B,W=new Map,U=[],Y=1;function q(){return""+Y++}function G(e){return e&&($(e.toastId)||S(e.toastId))?e.toastId:q()}function J(e,t){return W.size>0?I.emit(0,e,t):U.push({content:e,options:t}),t.toastId}function V(e,t){return{...t,type:t&&t.type||e,toastId:G(t)}}function X(e){return(t,r)=>J(t,V(e,r))}function K(e,t){return J(e,V("default",t))}K.loading=(e,t)=>J(e,V("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),K.promise=function(e,t,r){let n,{pending:o,error:i,success:a}=t;o&&(n=$(o)?K.loading(o,r):K.loading(o.render,{...r,...o}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,o)=>{if(null==t)return void K.dismiss(n);const i={type:e,...s,...r,data:o},a=$(t)?{render:t}:t;return n?K.update(n,{...i,...a}):K(a.render,{...i,...a}),o},c=C(e)?e():e;return c.then(e=>l("success",a,e)).catch(e=>l("error",i,e)),c},K.success=X("success"),K.info=X("info"),K.error=X("error"),K.warning=X("warning"),K.warn=K.warning,K.dark=(e,t)=>J(e,V("default",{theme:"dark",...t})),K.dismiss=e=>{W.size>0?I.emit(1,e):U=U.filter(t=>null!=e&&t.options.toastId!==e)},K.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},K.isActive=e=>{let t=!1;return W.forEach(r=>{r.isToastActive&&r.isToastActive(e)&&(t=!0)}),t},K.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{const r=function(e,t){let{containerId:r}=t;const n=W.get(r||B);return n&&n.getToast(e)}(e,t);if(r){const{props:n,content:o}=r,i={delay:100,...n,...t,toastId:t.toastId||e,updateId:q()};i.toastId!==e&&(i.staleId=e);const a=i.render||o;delete i.render,J(a,i)}},0)},K.done=e=>{K.update(e,{progress:1})},K.onChange=e=>(I.on(4,e),()=>{I.off(4,e)}),K.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},K.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,e=>{B=e.containerId||e,W.set(B,e),U.forEach(e=>{I.emit(0,e.content,e.options)}),U=[]}).on(3,e=>{W.delete(e.containerId||e),0===W.size&&I.off(0).off(1).off(5)});const Q=e.createContext(),Z={light:{background:"#f5f5f5",surface:"#ffffff",text:"#333333",textSecondary:"#666666",primary:"#4a6cf7",secondary:"#f5a623",success:"#4cd964",warning:"#ffcc00",error:"#ff3b30",disabled:"#cccccc",border:"#e0e0e0",gridLine:"#e0e0e0",gridLineThick:"#cccccc",highlight:"#e6f0ff",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}},dark:{background:"#121212",surface:"#1e1e1e",text:"#f5f5f5",textSecondary:"#b0b0b0",primary:"#6482f7",secondary:"#ffb74d",success:"#66df80",warning:"#ffe066",error:"#ff5757",disabled:"#666666",border:"#333333",gridLine:"#333333",gridLineThick:"#444444",highlight:"#1a237e",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}}},ee=()=>({...Z.light,name:"自定义主题"}),te=({children:t})=>{const[r,n]=e.useState(localStorage.getItem("themeMode")||"light"),[o,i]=e.useState(()=>{const e=localStorage.getItem("customTheme");return e?JSON.parse(e):ee()}),[a,s]=e.useState(()=>"custom"===r?o:Z["system"===r?"light":r]);e.useEffect(()=>{let e;if("custom"===r)e=o;else if("system"===r){const t=window.matchMedia("(prefers-color-scheme: dark)").matches;e=Z[t?"dark":"light"]}else e=Z[r];s(e)},[r,o]);const l=e=>{const t={...e,name:e.name||"自定义主题"};i(t),localStorage.setItem("customTheme",JSON.stringify(t)),"custom"===r&&s(t)};e.useEffect(()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{if("system"===r){const t=e.matches;s(Z[t?"dark":"light"])}};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[r]);const c={theme:a,themeMode:r,customTheme:o,toggleTheme:()=>{const e="light"===r?"dark":"light";n(e),localStorage.setItem("themeMode",e)},setLightTheme:()=>{n("light"),localStorage.setItem("themeMode","light")},setDarkTheme:()=>{n("dark"),localStorage.setItem("themeMode","dark")},setSystemTheme:()=>{n("system"),localStorage.setItem("themeMode","system")},setCustomThemeMode:()=>{n("custom"),localStorage.setItem("themeMode","custom")},updateCustomTheme:l,resetCustomTheme:()=>{const e=ee();i(e),localStorage.setItem("customTheme",JSON.stringify(e))},exportTheme:(e=o)=>{const t=JSON.stringify(e,null,2),r=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(r),i=document.createElement("a");i.href=n,i.download=`${e.name||"sudoku-theme"}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n)},importTheme:e=>new Promise((t,r)=>{const n=new FileReader;n.onload=e=>{try{const n=JSON.parse(e.target.result);n&&"object"==typeof n?(l(n),t(n)):r(new Error("无效的主题文件格式"))}catch(n){r(n)}},n.onerror=r,n.readAsText(e)})};return y.jsx(Q.Provider,{value:c,children:t})},re=()=>{const t=e.useContext(Q);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},ne=e.createContext(),oe=({children:t})=>{const[r,n]=e.useState(!1),[o,i]=e.useState("加载中..."),[a,s]=e.useState(0),l=(e="加载中...")=>{s(e=>e+1),i(e),n(!0)},c=()=>{s(e=>{const t=Math.max(0,e-1);return 0===t&&n(!1),t})},d={isLoading:r,loadingMessage:o,loadingCount:a,startLoading:l,stopLoading:c,resetLoading:()=>{s(0),n(!1),i("加载中...")},executeWithLoading:async(e,t="加载中...")=>{try{l(t);return await e()}catch(r){throw r}finally{c()}}};return y.jsx(ne.Provider,{value:d,children:t})},ie=()=>{const t=e.useContext(ne);if(!t)throw new Error("useLoading must be used within a LoadingProvider");return t};var ae=function(){return ae=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ae.apply(this,arguments)};function se(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var le="-ms-",ce="-moz-",de="-webkit-",ue="comm",fe="rule",pe="decl",he="@keyframes",me=Math.abs,ge=String.fromCharCode,xe=Object.assign;function ve(e){return e.trim()}function ye(e,t){return(e=t.exec(e))?e[0]:e}function be(e,t,r){return e.replace(t,r)}function we(e,t,r){return e.indexOf(t,r)}function je(e,t){return 0|e.charCodeAt(t)}function ke(e,t,r){return e.slice(t,r)}function Se(e){return e.length}function $e(e){return e.length}function Ce(e,t){return t.push(e),e}function ze(e,t){return e.filter(function(e){return!ye(e,t)})}var Ae=1,Te=1,Pe=0,Ie=0,Ne=0,Ee="";function Me(e,t,r,n,o,i,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Ae,column:Te,length:a,return:"",siblings:s}}function Re(e,t){return xe(Me("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Oe(e){for(;e.root;)e=Re(e.root,{children:[e]});Ce(e,e.siblings)}function Le(){return Ne=Ie>0?je(Ee,--Ie):0,Te--,10===Ne&&(Te=1,Ae--),Ne}function Fe(){return Ne=Ie<Pe?je(Ee,Ie++):0,Te++,10===Ne&&(Te=1,Ae++),Ne}function De(){return je(Ee,Ie)}function _e(){return Ie}function He(e,t){return ke(Ee,e,t)}function Be(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function We(e){return ve(He(Ie-1,qe(91===e?e+2:40===e?e+1:e)))}function Ue(e){for(;(Ne=De())&&Ne<33;)Fe();return Be(e)>2||Be(Ne)>3?"":" "}function Ye(e,t){for(;--t&&Fe()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return He(e,_e()+(t<6&&32==De()&&32==Fe()))}function qe(e){for(;Fe();)switch(Ne){case e:return Ie;case 34:case 39:34!==e&&39!==e&&qe(Ne);break;case 40:41===e&&qe(e);break;case 92:Fe()}return Ie}function Ge(e,t){for(;Fe()&&e+Ne!==57&&(e+Ne!==84||47!==De()););return"/*"+He(t,Ie-1)+"*"+ge(47===e?e:Fe())}function Je(e){for(;!Be(De());)Fe();return He(e,Ie)}function Ve(e){return function(e){return Ee="",e}(Xe("",null,null,null,[""],e=function(e){return Ae=Te=1,Pe=Se(Ee=e),Ie=0,[]}(e),0,[0],e))}function Xe(e,t,r,n,o,i,a,s,l){for(var c=0,d=0,u=a,f=0,p=0,h=0,m=1,g=1,x=1,v=0,y="",b=o,w=i,j=n,k=y;g;)switch(h=v,v=Fe()){case 40:if(108!=h&&58==je(k,u-1)){-1!=we(k+=be(We(v),"&","&\f"),"&\f",me(c?s[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:k+=We(v);break;case 9:case 10:case 13:case 32:k+=Ue(h);break;case 92:k+=Ye(_e()-1,7);continue;case 47:switch(De()){case 42:case 47:Ce(Qe(Ge(Fe(),_e()),t,r,l),l);break;default:k+="/"}break;case 123*m:s[c++]=Se(k)*x;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+d:-1==x&&(k=be(k,/\f/g,"")),p>0&&Se(k)-u&&Ce(p>32?Ze(k+";",n,r,u-1,l):Ze(be(k," ","")+";",n,r,u-2,l),l);break;case 59:k+=";";default:if(Ce(j=Ke(k,t,r,c,d,o,s,y,b=[],w=[],u,i),i),123===v)if(0===d)Xe(k,t,j,j,b,i,u,s,w);else switch(99===f&&110===je(k,3)?100:f){case 100:case 108:case 109:case 115:Xe(e,j,j,n&&Ce(Ke(e,j,j,0,0,o,s,y,o,b=[],u,w),w),o,w,u,s,n?b:w);break;default:Xe(k,j,j,j,[""],w,0,s,w)}}c=d=p=0,m=x=1,y=k="",u=a;break;case 58:u=1+Se(k),p=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==Le())continue;switch(k+=ge(v),v*m){case 38:x=d>0?1:(k+="\f",-1);break;case 44:s[c++]=(Se(k)-1)*x,x=1;break;case 64:45===De()&&(k+=We(Fe())),f=De(),d=u=Se(y=k+=Je(_e())),v++;break;case 45:45===h&&2==Se(k)&&(m=0)}}return i}function Ke(e,t,r,n,o,i,a,s,l,c,d,u){for(var f=o-1,p=0===o?i:[""],h=$e(p),m=0,g=0,x=0;m<n;++m)for(var v=0,y=ke(e,f+1,f=me(g=a[m])),b=e;v<h;++v)(b=ve(g>0?p[v]+" "+y:be(y,/&\f/g,p[v])))&&(l[x++]=b);return Me(e,t,r,0===o?fe:s,l,c,d,u)}function Qe(e,t,r,n){return Me(e,t,r,ue,ge(Ne),ke(e,2,-2),0,n)}function Ze(e,t,r,n,o){return Me(e,t,r,pe,ke(e,0,n),ke(e,n+1,-1),n,o)}function et(e,t,r){switch(function(e,t){return 45^je(e,0)?(((t<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 4789:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+ce+e+le+e+e;case 5936:switch(je(e,t+11)){case 114:return de+e+le+be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+le+be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+le+be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return de+e+le+e+e;case 6165:return de+e+le+"flex-"+e+e;case 5187:return de+e+be(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+le+"flex-$1$2")+e;case 5443:return de+e+le+"flex-item-"+be(e,/flex-|-self/g,"")+(ye(e,/flex-|baseline/)?"":le+"grid-row-"+be(e,/flex-|-self/g,""))+e;case 4675:return de+e+le+"flex-line-pack"+be(e,/align-content|flex-|-self/g,"")+e;case 5548:return de+e+le+be(e,"shrink","negative")+e;case 5292:return de+e+le+be(e,"basis","preferred-size")+e;case 6060:return de+"box-"+be(e,"-grow","")+de+e+le+be(e,"grow","positive")+e;case 4554:return de+be(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return be(be(be(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return be(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return be(be(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4200:if(!ye(e,/flex-|baseline/))return le+"grid-column-align"+ke(e,t)+e;break;case 2592:case 3360:return le+be(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,ye(e.props,/grid-\w+-end/)})?~we(e+(r=r[t].value),"span",0)?e:le+be(e,"-start","")+e+le+"grid-row-span:"+(~we(r,"span",0)?ye(r,/\d+/):+ye(r,/\d+/)-+ye(e,/\d+/))+";":le+be(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return ye(e.props,/grid-\w+-start/)})?e:le+be(be(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return be(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Se(e)-1-t>6)switch(je(e,t+1)){case 109:if(45!==je(e,t+4))break;case 102:return be(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+ce+(108==je(e,t+3)?"$3":"$2-$3"))+e;case 115:return~we(e,"stretch",0)?et(be(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return be(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,n,o,i,a,s){return le+r+":"+n+s+(o?le+r+"-span:"+(i?a:+a-+n)+s:"")+e});case 4949:if(121===je(e,t+6))return be(e,":",":"+de)+e;break;case 6444:switch(je(e,45===je(e,14)?18:11)){case 120:return be(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+de+(45===je(e,14)?"inline-":"")+"box$3$1"+de+"$2$3$1"+le+"$2box$3")+e;case 100:return be(e,":",":"+le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return be(e,"scroll-","scroll-snap-")+e}return e}function tt(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function rt(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case pe:return e.return=e.return||e.value;case ue:return"";case he:return e.return=e.value+"{"+tt(e.children,n)+"}";case fe:if(!Se(e.value=e.props.join(",")))return""}return Se(r=tt(e.children,n))?e.return=e.value+"{"+r+"}":""}function nt(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case pe:return void(e.return=et(e.value,e.length,r));case he:return tt([Re(e,{value:be(e.value,"@","@"+de)})],n);case fe:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(ye(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Oe(Re(e,{props:[be(t,/:(read-\w+)/,":-moz-$1")]})),Oe(Re(e,{props:[t]})),xe(e,{props:ze(r,n)});break;case"::placeholder":Oe(Re(e,{props:[be(t,/:(plac\w+)/,":"+de+"input-$1")]})),Oe(Re(e,{props:[be(t,/:(plac\w+)/,":-moz-$1")]})),Oe(Re(e,{props:[be(t,/:(plac\w+)/,le+"input-$1")]})),Oe(Re(e,{props:[t]})),xe(e,{props:ze(r,n)})}return""})}}var ot={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},it="undefined"!=typeof process&&void 0!==process.env&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",at="active",st="data-styled-version",lt="6.1.19",ct="/*!sc*/\n",dt="undefined"!=typeof window&&"undefined"!=typeof document,ut=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),ft=Object.freeze([]),pt=Object.freeze({});var ht=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gt=/(^-|-$)/g;function xt(e){return e.replace(mt,"-").replace(gt,"")}var vt=/(a)(d)/gi,yt=function(e){return String.fromCharCode(e+(e>25?39:97))};function bt(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=yt(t%52)+r;return(yt(t%52)+r).replace(vt,"$1-$2")}var wt,jt=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},kt=function(e){return jt(5381,e)};function St(e){return"string"==typeof e&&!0}var $t="function"==typeof Symbol&&Symbol.for,Ct=$t?Symbol.for("react.memo"):60115,zt=$t?Symbol.for("react.forward_ref"):60112,At={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Tt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},It=((wt={})[zt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wt[Ct]=Pt,wt);function Nt(e){return("type"in(t=e)&&t.type.$$typeof)===Ct?Pt:"$$typeof"in e?It[e.$$typeof]:At;var t}var Et=Object.defineProperty,Mt=Object.getOwnPropertyNames,Rt=Object.getOwnPropertySymbols,Ot=Object.getOwnPropertyDescriptor,Lt=Object.getPrototypeOf,Ft=Object.prototype;function Dt(e,t,r){if("string"!=typeof t){if(Ft){var n=Lt(t);n&&n!==Ft&&Dt(e,n,r)}var o=Mt(t);Rt&&(o=o.concat(Rt(t)));for(var i=Nt(e),a=Nt(t),s=0;s<o.length;++s){var l=o[s];if(!(l in Tt||r&&r[l]||a&&l in a||i&&l in i)){var c=Ot(t,l);try{Et(e,l,c)}catch(d){}}}}return e}function _t(e){return"function"==typeof e}function Ht(e){return"object"==typeof e&&"styledComponentId"in e}function Bt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wt(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ut(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yt(e,t,r){if(void 0===r&&(r=!1),!r&&!Ut(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Yt(e[n],t[n]);else if(Ut(t))for(var n in t)e[n]=Yt(e[n],t[n]);return e}function qt(e,t){Object.defineProperty(e,"toString",{value:t})}function Gt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Jt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw Gt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(ct);return t},e}(),Vt=new Map,Xt=new Map,Kt=1,Qt=function(e){if(Vt.has(e))return Vt.get(e);for(;Xt.has(Kt);)Kt++;var t=Kt++;return Vt.set(e,t),Xt.set(t,e),t},Zt=function(e,t){Kt=t+1,Vt.set(e,t),Xt.set(t,e)},er="style[".concat(it,"][").concat(st,'="').concat(lt,'"]'),tr=new RegExp("^".concat(it,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rr=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},nr=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(ct),o=[],i=0,a=n.length;i<a;i++){var s=n[i].trim();if(s){var l=s.match(tr);if(l){var c=0|parseInt(l[1],10),d=l[2];0!==c&&(Zt(d,c),rr(e,d,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},or=function(e){for(var t=document.querySelectorAll(er),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(it)!==at&&(nr(e,o),o.parentNode&&o.parentNode.removeChild(o))}};var ir=function(e){var t,r,n=document.head,o=e||n,i=document.createElement("style"),a=(t=o,(r=Array.from(t.querySelectorAll("style[".concat(it,"]"))))[r.length-1]),s=void 0!==a?a.nextSibling:null;i.setAttribute(it,at),i.setAttribute(st,lt);var l="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return l&&i.setAttribute("nonce",l),o.insertBefore(i,s),i},ar=function(){function e(e){this.element=ir(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw Gt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(r){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),sr=function(){function e(e){this.element=ir(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),lr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),cr=dt,dr={isServer:!dt,useCSSOMInjection:!ut},ur=function(){function e(e,t,r){void 0===e&&(e=pt),void 0===t&&(t={});var n=this;this.options=ae(ae({},dr),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&dt&&cr&&(cr=!1,or(this)),qt(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o,i=(o=r,Xt.get(o));if(void 0===i)return"continue";var a=e.names.get(i),s=t.getGroup(r);if(void 0===a||!a.size||0===s.length)return"continue";var l="".concat(it,".g").concat(r,'[id="').concat(i,'"]'),c="";void 0!==a&&a.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),n+="".concat(s).concat(l,'{content:"').concat(c,'"}').concat(ct)},i=0;i<r;i++)o(i);return n}(n)})}return e.registerId=function(e){return Qt(e)},e.prototype.rehydrate=function(){!this.server&&dt&&or(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(ae(ae({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,r=e.target,n=e.isServer?new lr(r):t?new ar(r):new sr(r),new Jt(n)));var e,t,r,n},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Qt(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Qt(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Qt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),fr=/&/g,pr=/^\s*\/\/.*$/gm;function hr(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=hr(e.children,t)),e})}var mr=new ur,gr=function(e){var t,r,n,o=void 0===e?pt:e,i=o.options,a=void 0===i?pt:i,s=o.plugins,l=void 0===s?ft:s,c=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},d=l.slice();d.push(function(e){e.type===fe&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(fr,r).replace(n,c))}),a.prefix&&d.push(nt),d.push(rt);var u=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var l=e.replace(pr,""),c=Ve(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(c=hr(c,a.namespace));var u,f,p,h=[];return tt(c,(u=d.concat((p=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&p(e)})),f=$e(u),function(e,t,r,n){for(var o="",i=0;i<f;i++)o+=u[i](e,t,r,n)||"";return o})),h};return u.hash=l.length?l.reduce(function(e,t){return t.name||Gt(15),jt(e,t.name)},5381).toString():"",u}(),xr=r.createContext({shouldForwardProp:void 0,styleSheet:mr,stylis:gr});function vr(){return e.useContext(xr)}xr.Consumer,r.createContext(void 0);var yr=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=gr);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,qt(this,function(){throw Gt(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=gr),this.name+e.hash},e}(),br=function(e){return e>="A"&&e<="Z"};function wr(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;br(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var jr=function(e){return null==e||!1===e||""===e},kr=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!jr(i)&&(Array.isArray(i)&&i.isCss||_t(i)?n.push("".concat(wr(o),":"),i,";"):Ut(i)?n.push.apply(n,se(se(["".concat(o," {")],kr(i),!1),["}"],!1)):n.push("".concat(wr(o),": ").concat((t=o,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ot||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Sr(e,t,r,n){return jr(e)?[]:Ht(e)?[".".concat(e.styledComponentId)]:_t(e)?!_t(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Sr(e(t),t,r,n):e instanceof yr?r?(e.inject(r,n),[e.getName(n)]):[e]:Ut(e)?kr(e):Array.isArray(e)?Array.prototype.concat.apply(ft,e.map(function(e){return Sr(e,t,r,n)})):[e.toString()];var o}var $r=kt(lt),Cr=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(_t(r)&&!Ht(r))return!1}return!0}(e),this.componentId=t,this.baseHash=jt($r,t),this.baseStyle=r,ur.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Bt(n,this.staticRulesId);else{var o=Wt(Sr(this.rules,e,t,r)),i=bt(jt(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}n=Bt(n,i),this.staticRulesId=i}else{for(var s=jt(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)l+=d;else if(d){var u=Wt(Sr(d,e,t,r));s=jt(s,u+c),l+=u}}if(l){var f=bt(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(l,".".concat(f),void 0,this.componentId)),n=Bt(n,f)}}return n},e}(),zr=r.createContext(void 0);zr.Consumer;var Ar={};function Tr(t,n,o){var i,a=Ht(t),s=t,l=!St(t),c=n.attrs,d=void 0===c?ft:c,u=n.componentId,f=void 0===u?function(e,t){var r="string"!=typeof e?"sc":xt(e);Ar[r]=(Ar[r]||0)+1;var n="".concat(r,"-").concat(function(e){return bt(kt(e)>>>0)}(lt+r+Ar[r]));return t?"".concat(t,"-").concat(n):n}(n.displayName,n.parentComponentId):u,p=n.displayName,h=void 0===p?St(i=t)?"styled.".concat(i):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(i),")"):p,m=n.displayName&&n.componentId?"".concat(xt(n.displayName),"-").concat(n.componentId):n.componentId||f,g=a&&s.attrs?s.attrs.concat(d).filter(Boolean):d,x=n.shouldForwardProp;if(a&&s.shouldForwardProp){var v=s.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;x=function(e,t){return v(e,t)&&y(e,t)}}else x=v}var b=new Cr(o,m,a?s.componentStyle:void 0);function w(t,n){return function(t,n,o){var i=t.attrs,a=t.componentStyle,s=t.defaultProps,l=t.foldedComponentIds,c=t.styledComponentId,d=t.target,u=r.useContext(zr),f=vr(),p=t.shouldForwardProp||f.shouldForwardProp,h=function(e,t,r){return void 0===r&&(r=pt),e.theme!==r.theme&&e.theme||t||r.theme}(n,u,s)||pt,m=function(e,t,r){for(var n,o=ae(ae({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var a=_t(n=e[i])?n(o):n;for(var s in a)o[s]="className"===s?Bt(o[s],a[s]):"style"===s?ae(ae({},o[s]),a[s]):a[s]}return t.className&&(o.className=Bt(o.className,t.className)),o}(i,n,h),g=m.as||d,x={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===h||("forwardedAs"===v?x.as=m.forwardedAs:p&&!p(v,g)||(x[v]=m[v]));var y,b,w,j=(y=a,b=m,w=vr(),y.generateAndInjectStyles(b,w.styleSheet,w.stylis)),k=Bt(l,c);return j&&(k+=" "+j),m.className&&(k+=" "+m.className),x[St(g)&&!ht.has(g)?"class":"className"]=k,o&&(x.ref=o),e.createElement(g,x)}(j,t,n)}w.displayName=h;var j=r.forwardRef(w);return j.attrs=g,j.componentStyle=b,j.displayName=h,j.shouldForwardProp=x,j.foldedComponentIds=a?Bt(s.foldedComponentIds,s.styledComponentId):"",j.styledComponentId=m,j.target=a?s.target:t,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)Yt(e,o[n],!0);return e}({},s.defaultProps,e):e}}),qt(j,function(){return".".concat(j.styledComponentId)}),l&&Dt(j,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function Pr(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Ir=function(e){return Object.assign(e,{isCss:!0})};function Nr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(_t(e)||Ut(e))return Ir(Sr(Pr(ft,se([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Sr(n):Ir(Sr(Pr(n,t)))}function Er(e,t,r){if(void 0===r&&(r=pt),!t)throw Gt(1,t);var n=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,r,Nr.apply(void 0,se([n],o,!1)))};return n.attrs=function(n){return Er(e,t,ae(ae({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Er(e,t,ae(ae({},r),n))},n}var Mr=function(e){return Er(Tr,e)},Rr=Mr;ht.forEach(function(e){Rr[e]=Mr(e)});const Or=Rr.nav`
  background-color: #2196F3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
`,Lr=Rr.div`
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
`,Fr=Rr(n)`
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
`,Dr=Rr.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  
  /* 竖屏显示时减小图标尺寸 */
  @media (max-width: 768px) and (orientation: portrait) {
    width: 22px;
    height: 22px;
  }
`,_r=Rr.div`
  position: relative;
`,Hr=Rr.button`
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
`,Br=Rr.div`
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
`,Wr=Rr.button`
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
`;Rr.span`
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
`;const Ur=()=>{re();const[t,r]=e.useState(!1),[n,o]=e.useState("zh");e.useEffect(()=>{const e=e=>{e.target.closest(".language-selector")||r(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const i=e=>{o(e),r(!1),console.log("切换语言为:",e)};return y.jsx(Or,{children:y.jsxs(Lr,{children:[y.jsxs(Fr,{to:"/",children:[y.jsx(Dr,{src:"/sudoku-app-logo.svg",alt:"Sudoku Logo"}),"SudokuTech"]}),y.jsxs(_r,{className:"language-selector",children:[y.jsx(Hr,{onClick:()=>{r(!t)},children:"中文"}),t&&y.jsxs(Br,{children:[y.jsx(Wr,{className:"zh"===n?"selected":"",onClick:()=>i("zh"),children:"中文"}),y.jsx(Wr,{className:"en"===n?"selected":"",onClick:()=>i("en"),children:"English"})]})]})]})})},Yr=Rr.footer`
  background-color: ${e=>e.theme.surface};
  color: ${e=>e.theme.textSecondary};
  padding: 20px 0;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`,qr=Rr.div`
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
`,Gr=Rr.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
  ${e=>e.theme.mediaQueries.small} {
    gap: 15px;
  }
`,Jr=Rr.a`
  color: ${e=>e.theme.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${e=>e.theme.primary};
  }
`,Vr=Rr.div`
  font-size: 14px;
  line-height: 1.5;
`,Xr=Rr.div`
  font-size: 12px;
  margin-top: 10px;
`,Kr=()=>{const{theme:e}=re(),t=(new Date).getFullYear();return y.jsx(Yr,{theme:e,children:y.jsxs(qr,{theme:e,children:[y.jsxs(Gr,{theme:e,children:[y.jsx(Jr,{href:"#",theme:e,children:"关于我们"}),y.jsx(Jr,{href:"#",theme:e,children:"使用帮助"}),y.jsx(Jr,{href:"#",theme:e,children:"数独规则"}),y.jsx(Jr,{href:"#",theme:e,children:"联系我们"})]}),y.jsxs(Vr,{theme:e,children:["© ",t," 数独学习应用 版权所有"]}),y.jsx(Xr,{theme:e,children:"版本 1.0.0"})]})})},Qr=Rr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`,Zr=Rr.div`
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
`,en=Rr.div`
  color: ${e=>e.theme.text};
  font-size: 16px;
  font-weight: 500;
`,tn=({showMessage:e=!0})=>{const{theme:t}=re(),{loadingMessage:r}=ie();return y.jsxs(Qr,{children:[y.jsx(Zr,{theme:t}),e&&y.jsx(en,{theme:t,children:r})]})},rn=Rr.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  transition: background-color 0.3s ease, color 0.3s ease;
`,nn=Rr.main`
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 640px) {
    padding: 15px;
  }
`,on=Rr.div`
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
`;function an({children:e}){const{theme:t}=re(),{isLoading:r}=ie();return y.jsxs(rn,{theme:t,children:[y.jsx(Ur,{}),y.jsx(nn,{children:e}),y.jsx(Kr,{}),r&&y.jsx(on,{children:y.jsx(tn,{})})]})}const sn=e.createContext(),ln=({children:t})=>{const[r,n]=e.useState(null),[o,i]=e.useState(!1),[a,s]=e.useState({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),[c,d]=e.useState({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}});e.useEffect(()=>{u()},[]);const u=async()=>{try{let e=await l.getItem("userId");e||(e="user_"+Date.now()+"_"+Math.random().toString(36).substr(2,9),await l.setItem("userId",e),K.success("欢迎使用数独学习应用！",{position:"top-right",autoClose:2e3})),n(e),i(!0);const t=await l.getItem(`stats_${e}`);t&&s(t);const r=await l.getItem(`techniques_${e}`);r&&d(r)}catch(e){console.error("初始化用户失败:",e),K.error("初始化用户数据失败",{position:"top-right",autoClose:2e3})}},f=async(e,t)=>{try{const n={...c,[e]:{...c[e],...t}};d(n),r&&await l.setItem(`techniques_${r}`,n)}catch(n){console.error("更新技巧学习进度失败:",n)}},p={userId:r,isAuthenticated:o,userStats:a,techniquesProgress:c,updateUserStats:async e=>{try{const t={...a,...e};s(t),r&&await l.setItem(`stats_${r}`,t)}catch(t){console.error("更新用户统计失败:",t)}},updateTechniqueProgress:f,incrementTechniquePractice:async e=>{const t=c[e]||{mastered:0,practiced:0};await f(e,{practiced:t.practiced+1})},resetUserData:async()=>{try{r&&(await l.removeItem(`stats_${r}`),await l.removeItem(`techniques_${r}`),await l.removeItem(`progress_${r}`)),s({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),d({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}}),K.success("用户数据已重置",{position:"top-right",autoClose:2e3})}catch(e){console.error("重置用户数据失败:",e),K.error("重置用户数据失败",{position:"top-right",autoClose:2e3})}}};return y.jsx(sn.Provider,{value:p,children:t})},cn=()=>{const t=e.useContext(sn);if(!t)throw new Error("useUser must be used within a UserContextProvider");return t},dn=c.create({baseURL:"/",timeout:1e4,headers:{"Content-Type":"application/json"}});dn.interceptors.request.use(e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),dn.interceptors.response.use(e=>e.data,e=>{var t,r,n,o;const i=(null==(r=null==(t=e.response)?void 0:t.data)?void 0:r.message)||(null==(o=null==(n=e.response)?void 0:n.data)?void 0:o.error)||"请求失败，请重试";return K.error(i,{position:"top-right",autoClose:2e3}),Promise.reject(e)});const un={generatePuzzle:async e=>{try{return await dn.post("/sudoku/puzzles/generate",{difficulty:e})}catch(t){throw console.error("生成数独谜题失败:",t),t}},getRandomPuzzleByDifficulty:async e=>{try{console.log(`Fetching puzzle with difficulty: ${e}`);const t=await dn.get(`/sudoku/puzzles/random/${e}`);if(!t||!t.puzzle)return console.error("Invalid puzzle data received from server"),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e};const{puzzle:r,solution:n,difficulty:o}=t;console.log("完整响应数据:",JSON.stringify(t));let i=n;return i&&Array.isArray(i)&&9===i.length||(console.warn("Solution data is missing or invalid"),i=Array(9).fill().map(()=>Array(9).fill(0))),{puzzle:r,solution:i,difficulty:o||e}}catch(t){return console.error("Error fetching puzzle:",t),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e}}},getPuzzleById:async e=>{try{return await dn.get(`/sudoku/puzzles/${e}`)}catch(t){throw console.error("获取谜题失败:",t),t}},solveSudoku:async e=>{try{return await dn.post("/sudoku/solve",{board:e})}catch(t){throw console.error("求解数独失败:",t),t}},validateSudoku:async e=>{try{return await dn.post("/sudoku/validate",{board:e})}catch(t){throw console.error("验证数独失败:",t),t}},getCandidates:async(e,t,r)=>{try{return await dn.post("/sudoku/candidates",{board:e,row:t,col:r})}catch(n){throw console.error("获取候选数失败:",n),n}},identifyTechniques:async e=>{try{return await dn.post("/sudoku/techniques",{board:e})}catch(t){throw console.error("识别技巧失败:",t),t}},getHint:async(e,t)=>{try{return await dn.post("/sudoku/hint",{board:e,solution:t})}catch(r){throw console.error("获取提示失败:",r),r}},getPuzzleList:async(e={})=>{try{return await dn.get("/sudoku/puzzles",{params:e})}catch(t){throw console.error("获取谜题列表失败:",t),t}},getPuzzleStats:async()=>{try{return await dn.get("/sudoku/puzzles/stats")}catch(e){throw console.error("获取谜题统计失败:",e),e}},getUserProgress:async e=>{try{return await dn.get(`/user/progress/${e}`)}catch(t){throw console.error("获取用户进度失败:",t),t}},saveUserProgress:async(e,t)=>{try{return await dn.post(`/user/progress/${e}`,t)}catch(r){throw console.error("保存用户进度失败:",r),r}},getActiveProgress:async()=>{try{return await dn.get("/user/progress/active")}catch(e){throw console.error("获取活跃进度失败:",e),e}},getCompletedPuzzles:async()=>{try{return await dn.get("/user/progress/completed")}catch(e){throw console.error("获取已完成谜题失败:",e),e}},deleteUserProgress:async e=>{try{return await dn.delete(`/user/progress/${e}`)}catch(t){throw console.error("删除用户进度失败:",t),t}},getUserTechniques:async()=>{try{return await dn.get("/user/techniques")}catch(e){throw console.error("获取用户技巧学习情况失败:",e),e}},updateTechniqueLearning:async(e,t)=>{try{return await dn.post(`/user/techniques/${e}`,t)}catch(r){throw console.error("更新技巧学习情况失败:",r),r}},incrementTechniquePractice:async e=>{try{return await dn.post(`/user/techniques/${e}/practice`)}catch(t){throw console.error("增加技巧练习次数失败:",t),t}},getUserStats:async()=>{try{return await dn.get("/user/stats")}catch(e){throw console.error("获取用户统计信息失败:",e),e}},healthCheck:async()=>{try{return(await c.get("/health")).data}catch(e){throw console.error("健康检查失败:",e),e}}};let fn=class{constructor(e,t){this.row=e,this.col=t,this.up=this,this.down=this,this.left=this,this.right=this,this.colHead=null}};class pn extends fn{constructor(e){super(-1,e),this.size=0}}const hn=()=>Array(9).fill().map(()=>Array(9).fill(0)),mn=new class{constructor(){this.root=new fn(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[]}setupSudokuMatrix(e){this.colHeaders=[];for(let r=0;r<324;r++){const e=new pn(r);this.colHeaders.push(e)}let t=this.root;for(let r=0;r<324;r++)t.right=this.colHeaders[r],this.colHeaders[r].left=t,t=this.colHeaders[r];t.right=this.root,this.root.left=t,this.rows=[];for(let r=0;r<9;r++)for(let t=0;t<9;t++)for(let n=1;n<=9;n++){if(0!==e[r][t]&&e[r][t]!==n)continue;const o=[9*r+t,81+9*r+(n-1),162+9*t+(n-1),243+9*(3*Math.floor(r/3)+Math.floor(t/3))+(n-1)],i=[];for(let e of o){const t=new fn(this.rows.length,e);t.colHead=this.colHeaders[e],i.push(t)}for(let e=0;e<i.length;e++)i[e].left=i[(e-1+i.length)%i.length],i[e].right=i[(e+1)%i.length];for(let e of i){const t=e.colHead;e.up=t.up,t.up.down=e,e.down=t,t.up=e,t.size++}this.rows.push([r,t,n])}}selectColumn(){let e=1/0,t=null;for(let r=this.root.right;r!==this.root;r=r.right)r.size<e&&(e=r.size,t=r);return t}coverColumn(e){e.left.right=e.right,e.right.left=e.left;for(let t=e.down;t!==e;t=t.down)for(let e=t.right;e!==t;e=e.right)e.up.down=e.down,e.down.up=e.up,e.colHead.size--}uncoverColumn(e){for(let t=e.up;t!==e;t=t.up)for(let e=t.left;e!==t;e=e.left)e.up.down=e,e.down.up=e,e.colHead.size++;e.left.right=e,e.right.left=e}search(e=2){const t=[],r=()=>{if(this.root.right===this.root)return t.push([...this.solution]),t.length<e;const n=this.selectColumn();this.coverColumn(n);for(let e=n.down;e!==n;e=e.down){this.solution.push(this.rows[e.row]);for(let t=e.right;t!==e;t=t.right)this.coverColumn(t.colHead);if(!r())return!1;this.solution.pop();for(let t=e.left;t!==e;t=t.left)this.uncoverColumn(t.colHead)}return this.uncoverColumn(n),!0};return r(),t}solveSudoku(e){this.root=new fn(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);const t=this.search(1);if(0===t.length)return null;const r=Array(9).fill().map(()=>Array(9).fill(0));for(let[n,o,i]of t[0])r[n][o]=i;return r}hasUniqueSolution(e){this.root=new fn(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);return 1===this.search(2).length}},gn=(e,t,r,n)=>{for(let a=0;a<9;a++)if(a!==r&&e[t][a]===n)return!1;for(let a=0;a<9;a++)if(a!==t&&e[a][r]===n)return!1;const o=3*Math.floor(t/3),i=3*Math.floor(r/3);for(let a=o;a<o+3;a++)for(let o=i;o<i+3;o++)if(a!==t&&o!==r&&e[a][o]===n)return!1;return!0},xn=e=>{for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(0===e[t][r])return[t,r];return null},vn=e=>{try{return mn.hasUniqueSolution(e)}catch(t){return console.error("验证数独唯一性时出错:",t),yn(e)}},yn=e=>{const t=e.map(e=>[...e]);let r=0;const n=()=>{if(r>1)return;const e=xn(t);if(!e)return void r++;const[o,i]=e;for(let r=1;r<=9;r++)gn(t,o,i,r)&&(t[o][i]=r,n(),t[o][i]=0)};return n(),1===r},bn=()=>{const e=[1,2,3,4,5,6,7,8,9];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},wn=async(e="medium")=>{console.log(`开始生成${e}难度的数独题目`);const t=(()=>{console.debug("开始生成完整的数独解");for(let t=1;t<=10;t++)try{const e=hn();for(let t=0;t<9;t+=3){const r=bn();let n=0;for(let o=0;o<3;o++)for(let i=0;i<3;i++)e[t+o][t+i]=r[n++]}const r=mn.solveSudoku(e);if(r&&jn(r))return console.debug(`成功生成完整数独解（尝试次数：${t}）`),r;const n=()=>{const t=xn(e);if(!t)return!0;const[r,o]=t,i=bn();for(const a of i)if(gn(e,r,o,a)){if(e[r][o]=a,n())return!0;e[r][o]=0}return!1};if(n()&&jn(e))return console.debug(`使用回溯算法成功生成完整数独解（尝试次数：${t}）`),e}catch(e){console.error(`生成数独解时出错（尝试 ${t}/10）:`,e)}return console.error("超过最大尝试次数（10），无法生成有效的数独解"),null})();if(!t)return console.error("生成完整数独解失败"),null;const r=t.map(e=>[...e]);let n;switch(e){case"easy":n=40;break;case"medium":default:n=50;break;case"hard":n=55;break;case"expert":n=60}let o=0;const i=[];for(let a=0;a<9;a++)for(let e=0;e<9;e++)i.push([a,e]);for(let a=i.length-1;a>0;a--){const e=Math.floor(Math.random()*(a+1));[i[a],i[e]]=[i[e],i[a]]}for(const[a,s]of i){if(o>=n)break;const e=r[a][s];r[a][s]=0,vn(r)?(o++,console.debug(`已移除单元格(${a},${s})，当前已移除${o}/${n}个`)):r[a][s]=e}return vn(r)||console.warn(`警告：生成的${e}难度题目可能没有唯一解，尝试重新生成`),console.log(`成功生成${e}难度数独题目，保留了${81-o}个数字`),{puzzle:r,solution:t}},jn=e=>{for(let t=0;t<9;t++){const r=new Set;for(let n=0;n<9;n++){const o=e[t][n];if(0!==o){if(r.has(o))return!1;r.add(o)}}}for(let t=0;t<9;t++){const r=new Set;for(let n=0;n<9;n++){const o=e[n][t];if(0!==o){if(r.has(o))return!1;r.add(o)}}}for(let t=0;t<3;t++)for(let r=0;r<3;r++){const n=new Set;for(let o=0;o<3;o++)for(let i=0;i<3;i++){const a=3*r+i,s=e[3*t+o][a];if(0!==s){if(n.has(s))return!1;n.add(s)}}}return!0};let kn=null,Sn=null;const $n=18e5,Cn=async()=>{try{console.log("开始获取随机专家级题目");const e=await(async()=>{try{const e=Date.now();if(kn&&Sn&&e-Sn<$n)return console.log("使用缓存的专家级题目数据"),kn;const t=await l.getItem("expert_puzzles_cache");if(t&&t.timestamp&&e-t.timestamp<$n)return console.log("从localforage加载缓存的专家级题目"),kn=t.data,Sn=t.timestamp,kn;console.log("从JSON文件加载专家级题目");const r=await fetch("/expert_puzzles.json");if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const n=await r.json();if(!n.puzzles||!Array.isArray(n.puzzles))throw new Error("无效的专家级题目数据格式");return kn=n.puzzles,Sn=e,await l.setItem("expert_puzzles_cache",{data:n.puzzles,timestamp:e}),console.log(`成功加载 ${n.puzzles.length} 个专家级题目`),n.puzzles}catch(e){return console.error("加载专家级题目失败:",e),[]}})();if(!e||0===e.length)return console.warn("没有可用的专家级题目"),null;const t=e[Math.floor(Math.random()*e.length)];if(!t||!t.puzzle||!t.solution){if(console.error("选中的谜题数据不完整:",t),e.length>1){console.log("尝试重新选择另一个谜题");const t=e.filter(e=>e&&e.puzzle&&e.solution);if(t.length>0){const e=Math.floor(Math.random()*t.length);return console.log(`重新选择有效专家级题目 #${t[e].id||"unknown"}`),t[e]}}return null}return console.log(`随机选择专家级题目 #${t.id||"unknown"}`),t}catch(e){return console.error("获取随机专家级题目失败:",e),null}},zn=(e,t)=>{const r=[];for(let n=1;n<=9;n++){let o=0,i=-1;for(let r=0;r<9&&!(0===e[t][r]&&(Pn(e,t,r,n)&&(o++,i=r),o>1));r++);1===o&&r.push({type:"hiddenSingleRow",description:"行摒除法",row:t,col:i,value:n,cells:[[t,i]],message:`在第${t+1}行中，数字${n}只能填入单元格(${t+1},${i+1})`})}return r},An=(e,t)=>{const r=[];for(let n=1;n<=9;n++){let o=0,i=-1;for(let r=0;r<9&&!(0===e[r][t]&&(Pn(e,r,t,n)&&(o++,i=r),o>1));r++);1===o&&r.push({type:"hiddenSingleCol",description:"列摒除法",row:i,col:t,value:n,cells:[[i,t]],message:`在第${t+1}列中，数字${n}只能填入单元格(${i+1},${t+1})`})}return r},Tn=(e,t)=>{const r=[],n=3*Math.floor(t/3),o=t%3*3;for(let i=1;i<=9;i++){let a=0,s=-1,l=-1;for(let t=0;t<3;t++){for(let r=0;r<3;r++){const c=n+t,d=o+r;if(0===e[c][d]&&(Pn(e,c,d,i)&&(a++,s=c,l=d),a>1))break}if(a>1)break}1===a&&r.push({type:"hiddenSingleBox",description:"宫摒除法",row:s,col:l,value:i,cells:[[s,l]],message:`在第${t+1}宫中，数字${i}只能填入单元格(${s+1},${l+1})`})}return r},Pn=(e,t,r,n)=>{for(let a=0;a<9;a++)if(e[t][a]===n)return!1;for(let a=0;a<9;a++)if(e[a][r]===n)return!1;const o=3*Math.floor(t/3),i=3*Math.floor(r/3);for(let a=o;a<o+3;a++)for(let t=i;t<i+3;t++)if(e[a][t]===n)return!1;return!0},In=(e,t={})=>{const r=(e=>{const t=[];for(let r=0;r<9;r++)for(let n=0;n<9;n++){if(0!==e[r][n])continue;const o=[];for(let t=1;t<=9;t++)Pn(e,r,n,t)&&o.push(t);1===o.length&&t.push({type:"nakedSingle",description:"唯一数法",row:r,col:n,value:o[0],cells:[[r,n]],message:`单元格(${r+1},${n+1})只有数字${o[0]}可以填入`})}return t})(e),n=(e=>{const t=[],r=new Set;for(let n=0;n<9;n++){const o=zn(e,n);for(const n of o){const o=`${n.row}-${n.col}`;r.has(o)||0!==e[n.row][n.col]||(r.add(o),t.push(n))}}for(let n=0;n<9;n++){const o=An(e,n);for(const n of o){const o=`${n.row}-${n.col}`;r.has(o)||0!==e[n.row][n.col]||(r.add(o),t.push(n))}}for(let n=0;n<9;n++){const o=Tn(e,n);for(const n of o){const o=`${n.row}-${n.col}`;r.has(o)||0!==e[n.row][n.col]||(r.add(o),t.push(n))}}return t})(e),o=((e,t={})=>{const r=[];for(let n=0;n<9;n++)for(let o=0;o<9;o++){if(0!==e[n][o])continue;const i=t[`${n}-${o}`]||[];1===i.length&&r.push({type:"notesSingle",description:"候选数唯一法",row:n,col:o,value:i[0],cells:[[n,o]],notes:i,message:`单元格(${n+1},${o+1})的候选数中只有数字${i[0]}`})}return r})(e,t),i=((e,t={})=>{const r=[],n=n=>{const o=[];for(let r=0;r<9;r++){if(0!==e[n][r])continue;const i=t[`${n}-${r}`]||[];2===i.length&&o.push({row:n,col:r,notes:i})}for(let e=0;e<o.length-1;e++)for(let t=e+1;t<o.length;t++){const i=o[e],a=o[t];i.notes.sort().join(",")===a.notes.sort().join(",")&&r.push({type:"nakedPairRow",description:"显性数对法(行)",cells:[[i.row,i.col],[a.row,a.col]],values:i.notes,message:`在第${n+1}行，单元格(${i.col+1})和(${a.col+1})形成显性数对[${i.notes.join(",")}]`})}},o=n=>{const o=[];for(let r=0;r<9;r++){if(0!==e[r][n])continue;const i=t[`${r}-${n}`]||[];2===i.length&&o.push({row:r,col:n,notes:i})}for(let e=0;e<o.length-1;e++)for(let t=e+1;t<o.length;t++){const i=o[e],a=o[t];i.notes.sort().join(",")===a.notes.sort().join(",")&&r.push({type:"nakedPairCol",description:"显性数对法(列)",cells:[[i.row,i.col],[a.row,a.col]],values:i.notes,message:`在第${n+1}列，单元格(${i.row+1})和(${a.row+1})形成显性数对[${i.notes.join(",")}]`})}},i=(n,o)=>{const i=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const s=3*n+r,l=3*o+a;if(0!==e[s][l])continue;const c=t[`${s}-${l}`]||[];2===c.length&&i.push({row:s,col:l,notes:c})}for(let e=0;e<i.length-1;e++)for(let t=e+1;t<i.length;t++){const a=i[e],s=i[t];a.notes.sort().join(",")===s.notes.sort().join(",")&&r.push({type:"nakedPairBox",description:"显性数对法(宫)",cells:[[a.row,a.col],[s.row,s.col]],values:a.notes,message:`在第${3*n+o+1}宫，单元格(${a.row+1},${a.col+1})和(${s.row+1},${s.col+1})形成显性数对[${a.notes.join(",")}]`})}};for(let a=0;a<9;a++)n(a),o(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),a=((e,t={})=>{const r=[],n=n=>{const o={};for(let e=1;e<=9;e++)o[e]=[];for(let r=0;r<9;r++)0===e[n][r]&&(t[`${n}-${r}`]||[]).forEach(e=>{o[e]&&o[e].push(r)});const i=Object.keys(o).map(Number).filter(e=>2===o[e].length);for(let e=0;e<i.length-1;e++)for(let t=e+1;t<i.length;t++){const a=i[e],s=i[t];if(o[a].sort().join(",")===o[s].sort().join(",")){const e=o[a];r.push({type:"hiddenPairRow",description:"隐性数对法(行)",cells:[[n,e[0]],[n,e[1]]],values:[a,s],message:`在第${n+1}行，数字${a}和${s}只能出现在单元格(${e[0]+1})和(${e[1]+1})中`})}}},o=n=>{const o={};for(let e=1;e<=9;e++)o[e]=[];for(let r=0;r<9;r++)0===e[r][n]&&(t[`${r}-${n}`]||[]).forEach(e=>{o[e]&&o[e].push(r)});const i=Object.keys(o).map(Number).filter(e=>2===o[e].length);for(let e=0;e<i.length-1;e++)for(let t=e+1;t<i.length;t++){const a=i[e],s=i[t];if(o[a].sort().join(",")===o[s].sort().join(",")){const e=o[a];r.push({type:"hiddenPairCol",description:"隐性数对法(列)",cells:[[e[0],n],[e[1],n]],values:[a,s],message:`在第${n+1}列，数字${a}和${s}只能出现在单元格(${e[0]+1})和(${e[1]+1})中`})}}},i=(n,o)=>{const i={};for(let e=1;e<=9;e++)i[e]=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const s=3*n+r,l=3*o+a;0===e[s][l]&&(t[`${s}-${l}`]||[]).forEach(e=>{i[e]&&i[e].push({row:s,col:l})})}const a=Object.keys(i).map(Number).filter(e=>2===i[e].length);for(let e=0;e<a.length-1;e++)for(let t=e+1;t<a.length;t++){const s=a[e],l=a[t],c=i[s].map(e=>`${e.row}-${e.col}`).sort(),d=i[l].map(e=>`${e.row}-${e.col}`).sort();if(c.join(",")===d.join(",")){const e=i[s];r.push({type:"hiddenPairBox",description:"隐性数对法(宫)",cells:e.map(e=>[e.row,e.col]),values:[s,l],message:`在第${3*n+o+1}宫，数字${s}和${l}只能出现在单元格(${e[0].row+1},${e[0].col+1})和(${e[1].row+1},${e[1].col+1})中`})}}};for(let a=0;a<9;a++)n(a),o(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),s=((e,t={})=>{const r=[],n=n=>{const o=[];for(let r=0;r<9;r++){if(0!==e[n][r])continue;const i=t[`${n}-${r}`]||[];i.length>=1&&i.length<=3&&o.push({row:n,col:r,notes:i})}for(let e=0;e<o.length-2;e++)for(let t=e+1;t<o.length-1;t++)for(let i=t+1;i<o.length;i++){const a=o[e],s=o[t],l=o[i],c=[...new Set([...a.notes,...s.notes,...l.notes])];if(3===c.length){const e=a.notes.every(e=>c.includes(e)),t=s.notes.every(e=>c.includes(e)),o=l.notes.every(e=>c.includes(e));e&&t&&o&&r.push({type:"nakedTripleRow",description:"显性三链数法(行)",cells:[[a.row,a.col],[s.row,s.col],[l.row,l.col]],values:c,message:`在第${n+1}行，单元格(${a.col+1})、(${s.col+1})和(${l.col+1})形成显性三链数[${c.join(",")}]`})}}},o=n=>{const o=[];for(let r=0;r<9;r++){if(0!==e[r][n])continue;const i=t[`${r}-${n}`]||[];i.length>=1&&i.length<=3&&o.push({row:r,col:n,notes:i})}for(let e=0;e<o.length-2;e++)for(let t=e+1;t<o.length-1;t++)for(let i=t+1;i<o.length;i++){const a=o[e],s=o[t],l=o[i],c=[...new Set([...a.notes,...s.notes,...l.notes])];if(3===c.length){const e=a.notes.every(e=>c.includes(e)),t=s.notes.every(e=>c.includes(e)),o=l.notes.every(e=>c.includes(e));e&&t&&o&&r.push({type:"nakedTripleCol",description:"显性三链数法(列)",cells:[[a.row,a.col],[s.row,s.col],[l.row,l.col]],values:c,message:`在第${n+1}列，单元格(${a.row+1})、(${s.row+1})和(${l.row+1})形成显性三链数[${c.join(",")}]`})}}},i=(n,o)=>{const i=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const s=3*n+r,l=3*o+a;if(0!==e[s][l])continue;const c=t[`${s}-${l}`]||[];c.length>=1&&c.length<=3&&i.push({row:s,col:l,notes:c})}for(let e=0;e<i.length-2;e++)for(let t=e+1;t<i.length-1;t++)for(let a=t+1;a<i.length;a++){const s=i[e],l=i[t],c=i[a],d=[...new Set([...s.notes,...l.notes,...c.notes])];if(3===d.length){const e=s.notes.every(e=>d.includes(e)),t=l.notes.every(e=>d.includes(e)),i=c.notes.every(e=>d.includes(e));e&&t&&i&&r.push({type:"nakedTripleBox",description:"显性三链数法(宫)",cells:[[s.row,s.col],[l.row,l.col],[c.row,c.col]],values:d,message:`在第${3*n+o+1}宫，单元格(${s.row+1},${s.col+1})、(${l.row+1},${l.col+1})和(${c.row+1},${c.col+1})形成显性三链数[${d.join(",")}]`})}}};for(let a=0;a<9;a++)n(a),o(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),l=((e,t={})=>{const r=[],n=n=>{const o={};for(let e=1;e<=9;e++)o[e]=[];for(let r=0;r<9;r++)0===e[n][r]&&(t[`${n}-${r}`]||[]).forEach(e=>{o[e]&&o[e].push(r)});const i=Object.keys(o).map(Number).filter(e=>3===o[e].length);for(let e=0;e<i.length-2;e++)for(let t=e+1;t<i.length-1;t++)for(let a=t+1;a<i.length;a++){const s=i[e],l=i[t],c=i[a],d=o[s].sort().join(","),u=o[l].sort().join(","),f=o[c].sort().join(",");if(d===u&&u===f){const e=o[s];r.push({type:"hiddenTripleRow",description:"隐性三链数法(行)",cells:[[n,e[0]],[n,e[1]],[n,e[2]]],values:[s,l,c],message:`在第${n+1}行，数字${s}、${l}和${c}只能出现在单元格(${e[0]+1})、(${e[1]+1})和(${e[2]+1})中`})}}},o=n=>{const o={};for(let e=1;e<=9;e++)o[e]=[];for(let r=0;r<9;r++)0===e[r][n]&&(t[`${r}-${n}`]||[]).forEach(e=>{o[e]&&o[e].push(r)});const i=Object.keys(o).map(Number).filter(e=>3===o[e].length);for(let e=0;e<i.length-2;e++)for(let t=e+1;t<i.length-1;t++)for(let a=t+1;a<i.length;a++){const s=i[e],l=i[t],c=i[a],d=o[s].sort().join(","),u=o[l].sort().join(","),f=o[c].sort().join(",");if(d===u&&u===f){const e=o[s];r.push({type:"hiddenTripleCol",description:"隐性三链数法(列)",cells:[[e[0],n],[e[1],n],[e[2],n]],values:[s,l,c],message:`在第${n+1}列，数字${s}、${l}和${c}只能出现在单元格(${e[0]+1})、(${e[1]+1})和(${e[2]+1})中`})}}},i=(n,o)=>{const i={};for(let e=1;e<=9;e++)i[e]=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const s=3*n+r,l=3*o+a;0===e[s][l]&&(t[`${s}-${l}`]||[]).forEach(e=>{i[e]&&i[e].push({row:s,col:l})})}const a=Object.keys(i).map(Number).filter(e=>3===i[e].length);for(let e=0;e<a.length-2;e++)for(let t=e+1;t<a.length-1;t++)for(let s=t+1;s<a.length;s++){const l=a[e],c=a[t],d=a[s],u=i[l].map(e=>`${e.row}-${e.col}`).sort().join(","),f=i[c].map(e=>`${e.row}-${e.col}`).sort().join(","),p=i[d].map(e=>`${e.row}-${e.col}`).sort().join(",");if(u===f&&f===p){const e=i[l];r.push({type:"hiddenTripleBox",description:"隐性三链数法(宫)",cells:e.map(e=>[e.row,e.col]),values:[l,c,d],message:`在第${3*n+o+1}宫，数字${l}、${c}和${d}只能出现在单元格(${e[0].row+1},${e[0].col+1})、(${e[1].row+1},${e[1].col+1})和(${e[2].row+1},${e[2].col+1})中`})}}};for(let a=0;a<9;a++)n(a),o(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t);return[...r,...n,...o,...i,...a,...s,...l]},Nn=e.createContext(),En={EASY:"easy",MEDIUM:"medium",HARD:"hard",EXPERT:"expert"},Mn=({children:t})=>{const{userId:r,updateUserStats:n}=cn(),[o,i]=e.useState(null),[a,s]=e.useState(null),[c,d]=e.useState(null),[u,f]=e.useState(null),[p,h]=e.useState(En.MEDIUM),[m,g]=e.useState(!1),[x,v]=e.useState(!1),[b,w]=e.useState(0),[j,k]=e.useState(!1),[S,$]=e.useState(null),[C,z]=e.useState({}),[A,T]=e.useState([]),[P,I]=e.useState([]),[N,E]=e.useState([]),[M,R]=e.useState(-1),[O,L]=e.useState(0),[F,D]=e.useState(0),[_,H]=e.useState(new Set),[B,W]=e.useState(!1),[U,Y]=e.useState({}),[q,G]=e.useState(new Set);e.useEffect(()=>{(async()=>{console.log("SudokuContext: 初始化自动生成谜题");try{Y({}),E([]),R(-1),L(0),D(0),H(new Set),G(new Set),console.log("使用预设的数独题目");const e={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]};console.log("预设谜题数据:",e);const t=ee(e);console.log("格式化后的数据:",t),i(t),console.log("设置 currentPuzzle 完成"),d(t.puzzle),console.log("设置 originalPuzzle 完成"),s(t.puzzle),console.log("设置 currentBoard 完成，currentBoard:",t.puzzle),f(t.solution),console.log("设置 solution 完成"),g(!0),console.log("设置 gameStarted 为 true"),v(!1),k(!0),L(0),D(0),H(new Set),console.log("谜题初始化完成")}catch(e){console.error("自动初始化谜题失败:",e),console.error("错误详情:",e.message,e.stack)}})()},[]),e.useEffect(()=>{if(o&&a&&m&&!x){const e=setTimeout(()=>{V()},3e4);return()=>clearTimeout(e)}},[a,m,x]),e.useEffect(()=>{let e;return j&&(e=setInterval(()=>{w(e=>e+1)},1e3)),()=>{e&&clearInterval(e)}},[j]);const J=e.useCallback(async()=>{try{if(!r)return null;const e=(await l.keys()).filter(e=>e.startsWith(`progress_${r}_`));if(0===e.length)return null;let t=null,n=0;for(const r of e){const e=await l.getItem(r);e.lastModified>n&&(n=e.lastModified,t=e)}return t&&(i({id:t.puzzleId,puzzle:t.puzzle}),s(t.currentBoard),f(t.solution),h(t.difficulty),w(t.timeElapsed),g(t.gameStarted),v(t.gameCompleted),L(t.errorCount||0),D(t.errorCount||0),H(new Set(t.incorrectCells||[])),k(!1)),t}catch(e){return console.error("加载游戏进度失败:",e),null}},[r]),V=e.useCallback(async()=>{try{if(!r||!o||!a)return;const e={puzzleId:o.id,puzzle:o.puzzle,solution:u,difficulty:p,currentBoard:a,timeElapsed:b,gameStarted:m,gameCompleted:x,errorCount:F,incorrectCells:Array.from(_),lastModified:Date.now()};return await l.setItem(`progress_${r}_${o.id}`,e),!0}catch(e){return console.error("保存游戏进度失败:",e),!1}},[r,o,a,u,p,b,m,x,O,_]),X=()=>Array(9).fill().map(()=>Array(9).fill(0)),Q=async(e="medium")=>{try{console.log(`开始生成${e}难度的数独题目...`);const t=await wn(e);if(console.log("generateSudoku 返回结果:",t),!t||!t.puzzle||!t.solution)throw console.error("生成的数独数据不完整:",t),new Error("生成的数独数据不完整");const{puzzle:r,solution:n}=t;return vn(r)?(console.log(`成功生成${e}难度的数独题目，使用DLX算法验证了唯一解`),console.log("谜题数据预览:",r.slice(0,2).map(e=>e.slice(0,2).join(",")).join(";")),{puzzle:r,solution:n}):(console.warn("警告：生成的数独题目可能没有唯一解"),Q(e))}catch(t){return console.error(`生成${e}难度的数独题目时出错:`,t),await Z(e)}},Z=async(e="medium")=>{try{console.log(`使用备用方法生成${e}难度的数独题目...`);const{puzzle:t,solution:r}=await wn(e);return console.log(`备用方法成功生成${e}难度的数独题目`),{puzzle:t,solution:r}}catch(t){console.error("备用方法生成数独题目失败:",t);const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];return console.log("使用预设的简单数独题目作为最后的备用"),{puzzle:e,solution:r}}},ee=e=>{if(console.log("formatPuzzleData 输入:",e),e&&e.puzzle){if("string"==typeof e.puzzle&&81===e.puzzle.length){const t=[];for(let r=0;r<9;r++){t.push([]);for(let n=0;n<9;n++)t[r].push(parseInt(e.puzzle[9*r+n])||0)}return{puzzle:t,solution:e.solution&&"string"==typeof e.solution&&81===e.solution.length?(()=>{const t=[];for(let r=0;r<9;r++){t.push([]);for(let n=0;n<9;n++)t[r].push(parseInt(e.solution[9*r+n])||0)}return t})():t}}if(Array.isArray(e.puzzle)&&9===e.puzzle.length){const t=e.puzzle.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0));let r=t;return e.solution&&Array.isArray(e.solution)&&9===e.solution.length&&(r=e.solution.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0))),console.log("formatPuzzleData 输出:",{puzzle:t,solution:r}),{puzzle:t,solution:r}}}console.warn("formatPuzzleData: 输入数据不完整或格式不正确，返回默认空数组",e);const t=Array(9).fill().map(()=>Array(9).fill(0));return{puzzle:t,solution:t}},te=(e,t,r)=>!u||!u[e]||void 0===u[e][t]||u[e][t]===r,re=(e,t,r)=>{if(!m||x)return;if(c&&c[e]&&null!==c[e][t]&&0!==c[e][t])return void console.log("Cannot modify prefilled cell with notes:",e,t);const n=`${e}-${t}`,o={...U},i=N.slice(0,M+1);i.push({board:a,pencilNotes:{...U},row:e,col:t,type:"pencil"}),E(i),R(i.length-1),o[n]?o[n].includes(r)?(o[n]=o[n].filter(e=>e!==r),0===o[n].length&&delete o[n]):o[n]=[...new Set([...o[n],r])].sort((e,t)=>e-t):o[n]=[r],Y(o)},ne=(e,t)=>{if(!m||x)return;const r=`${e}-${t}`;if(!U[r])return;const n=N.slice(0,M+1);n.push({board:a,pencilNotes:{...U},row:e,col:t,type:"clear-pencil"}),E(n),R(n.length-1);const o={...U};delete o[r],Y(o)},oe=(e,t,r)=>{if(!m||x)return;const n=`${e}-${t}`;if(c&&c[e]&&null!==c[e][t]&&0!==c[e][t])return void console.log("Cannot modify prefilled cell:",e,t);if(q.has(n))return void console.log("Cannot modify locked cell (correct answer):",e,t);if(B)return void(0===r?ne(e,t):re(e,t,r));const o=[...a.map(e=>[...e])],i=te(e,t,r);o[e][t]=r,s(o);const l={...U};if(0!==r&&l[n]&&delete l[n],0!==r&&i){for(let i=0;i<9;i++)if(i!==t){const t=`${e}-${i}`;l[t]&&(l[t]=l[t].filter(e=>e!==r),0===l[t].length&&delete l[t])}for(let i=0;i<9;i++)if(i!==e){const e=`${i}-${t}`;l[e]&&(l[e]=l[e].filter(e=>e!==r),0===l[e].length&&delete l[e])}const n=3*Math.floor(e/3),o=3*Math.floor(t/3);for(let i=n;i<n+3;i++)for(let n=o;n<o+3;n++)if(i!==e||n!==t){const e=`${i}-${n}`;l[e]&&(l[e]=l[e].filter(e=>e!==r),0===l[e].length&&delete l[e])}}Y(l);const d=N.slice(0,M+1);d.push({board:a,pencilNotes:{...U},row:e,col:t,prevValue:a[e][t],type:"fill",isCorrectInput:0!==r&&i}),E(d),R(d.length-1);const u=new Set(_);if(0!==r)if(i){u.delete(n);const e=new Set(q);e.add(n),G(e)}else _.has(n)||D(e=>e+1),u.add(n),K.error("输入错误，请重试！",{position:"top-right",autoClose:1e3,theme:"colored"});else u.delete(n);H(u),ie(o)},ie=e=>{if(u){for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(!e[t][r]||e[t][r]!==u[t][r])return;v(!0),k(!1),H(new Set),n&&n({puzzlesCompleted:1,puzzlesSolved:1,totalTimePlayed:b}),K.success("恭喜！您成功完成了这个数独！",{position:"top-right",autoClose:3e3}),V()}},ae=e.useCallback(()=>{try{const e=In(a,U);return I(e),e}catch(e){return console.error("识别技巧失败:",e),[]}},[a,U]),se=e.useCallback(e=>{try{const t=((e,t)=>{const r=t.map(e=>[...e]);switch(e.type){case"nakedSingle":case"hiddenSingleRow":case"hiddenSingleCol":case"hiddenSingleBox":case"notesSingle":if(void 0!==e.row&&void 0!==e.col&&void 0!==e.value)return r[e.row][e.col]=e.value,{board:r,operation:{type:"fill",row:e.row,col:e.col,value:e.value}};break;case"nakedPairRow":case"nakedPairCol":case"nakedPairBox":case"hiddenPairRow":case"hiddenPairCol":case"hiddenPairBox":case"nakedTripleRow":case"nakedTripleCol":case"nakedTripleBox":case"hiddenTripleRow":case"hiddenTripleCol":case"hiddenTripleBox":return{board:r,operation:{type:"highlight",cells:e.cells,values:e.values}};default:return console.warn("未知的技巧类型:",e.type),{board:r,operation:null}}return{board:r,operation:null}})(e,a);if(t&&t.board){const r=t.operation;if(r&&"fill"===r.type&&"number"==typeof r.row&&"number"==typeof r.col&&"number"==typeof r.value){const{row:e,col:t,value:n}=r,o=B;return o&&W(!1),oe(e,t,n),o&&W(!0),!0}if(r&&"removeCandidates"===r.type&&Array.isArray(r.cells)){const t={...C};return r.cells.forEach(e=>{if("number"==typeof e.row&&"number"==typeof e.col&&Array.isArray(e.valuesToRemove)){const r=`${e.row}-${e.col}`,n=(C[r]||[]).filter(t=>!e.valuesToRemove.includes(t));t[r]=n}}),z(t),console.log("成功移除候选数:",e.type),K.success("候选数已成功移除",{position:"top-right",autoClose:2e3}),!0}return r&&"highlight"===r.type?(console.log("技巧应用成功（高亮提示）:",e.type),e.type&&(e.type.includes("Pair")||e.type.includes("pair"))&&K.success("数对技巧已识别，建议手动移除相关候选数",{position:"top-right",autoClose:3e3}),!0):(console.warn("无法应用技巧：操作信息不完整或类型不支持",r),K.info("此技巧主要用于提示，暂不支持自动应用",{position:"top-right",autoClose:2e3}),!1)}return!1}catch(t){return console.error("应用技巧失败:",t),K.error("应用技巧失败，请重试",{position:"top-right",autoClose:2e3}),!1}},[oe,a,B,C,z]),le=(e,t)=>{if(!a)return[];const r=[];for(let n=1;n<=9;n++)ce(e,t,n)&&r.push(n);return r.sort((e,t)=>e-t)},ce=(e,t,r)=>{if(!a)return!1;for(let i=0;i<9;i++)if(a[e][i]===r)return!1;for(let i=0;i<9;i++)if(a[i][t]===r)return!1;const n=3*Math.floor(e/3),o=3*Math.floor(t/3);for(let i=n;i<n+3;i++)for(let e=o;e<o+3;e++)if(a[i][e]===r)return!1;return!0},de={currentPuzzle:o,currentBoard:a||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:c,solution:u||Array(9).fill().map(()=>Array(9).fill(0)),difficulty:p,gameStarted:m,gameCompleted:x,timeElapsed:b,timerActive:j,isTimerActive:j,selectedCell:S,candidates:C,highlightedCells:A,activeTechniques:P,lockedCells:q,history:N,historyIndex:M,errorCount:F,incorrectCells:_,isPencilMode:B,pencilNotes:U,setDifficulty:h,setSelectedCell:$,setHighlightedCells:T,setTimerActive:k,toggleTimer:()=>{k(e=>!e)},togglePencilMode:()=>{W(e=>!e)},togglePencilNote:re,clearPencilNotes:ne,fillAllCandidates:()=>{if(!m||x||!a)return;const e={},t=N.slice(0,M+1);t.push({board:a,pencilNotes:{...U},type:"fill-candidates"}),E(t),R(t.length-1);for(let r=0;r<9;r++)for(let t=0;t<9;t++){if(c&&c[r]&&0!==c[r][t]||a[r]&&0!==a[r][t])continue;const n=le(r,t);n.length>0&&(e[`${r}-${t}`]=n)}Y(e),K.info("已为所有空白格子计算并填充候选数！",{position:"top-right",autoClose:2e3})},loadSavedProgress:J,saveGameProgress:V,startNewGame:async(e=null,t=null)=>{console.log("SudokuContext: 开始新游戏",{puzzleId:e,difficultyOverride:t});try{g(!1),s(X()),Y({}),W(!1),z({}),I([]),T([]),$(null),k(!1),w(0),v(!1),E([]),R(-1),L(0),D(0),H(new Set),G(new Set),await new Promise(e=>setTimeout(e,50)),g(!0),await new Promise(e=>setTimeout(e,50));const e=t||p;let a;console.log("使用难度:",e),e!==p&&h(e);let l=0;const c=3;let u=!1;for(;!a&&l<c;){l++,console.log(`尝试生成谜题 (${l}/${c})`);try{if(e===En.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const e=await Cn();e&&e.puzzle&&e.solution?(a=e,u=!0,console.log("成功从JSON文件获取专家级谜题")):console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成")}catch(r){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",r)}}a||(console.log("使用程序生成谜题"),a=await Q(e))}catch(o){console.error(`生成谜题失败 (尝试 ${l}/${c}):`,o)}}if(!a){console.error("多次尝试生成谜题失败，使用备用谜题");a={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]}}const m=ee(a);if(console.log("谜题数据准备完成，formattedData:",m),!m||!m.puzzle||!Array.isArray(m.puzzle)||9!==m.puzzle.length){console.error("格式化后的数据无效，使用备用谜题");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];m.puzzle=e,m.solution=t}return i(m),console.log("设置 currentPuzzle 完成"),d(m.puzzle),console.log("设置 originalPuzzle 完成"),s(m.puzzle),console.log("设置 currentBoard 完成"),f(m.solution),console.log("设置 solution 完成"),g(!0),v(!1),w(0),k(!0),E([]),R(-1),n&&n({puzzlesStarted:1}),e===En.EXPERT?K.success(u?"已加载专家题库题目！":"已生成专家难度题目！",{position:"top-right",autoClose:2e3}):K.success("已生成新谜题！",{position:"top-right",autoClose:2e3}),console.log("新游戏设置完成"),m}catch(a){console.error("开始新游戏失败:",a);try{const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],r={puzzle:e,solution:t};return i(r),d(e),s(e),f(t),g(!0),v(!1),k(!0),K.success("已使用备用谜题！",{position:"top-right",autoClose:2e3}),r}catch(l){console.error("使用备用谜题也失败:",l),K.error("生成谜题失败，请刷新页面重试",{position:"top-right",autoClose:2e3})}return null}},generateNewPuzzle:async(e=p)=>{console.log("SudokuContext: 生成新谜题",{targetDifficulty:e});try{let r;if(s(X()),Y({}),W(!1),z({}),I([]),T([]),k(!1),w(0),v(!1),E([]),R(-1),L(0),D(0),H(new Set),G(new Set),g(!0),await new Promise(e=>setTimeout(e,50)),e!==p&&(h(e),console.log("已设置新难度:",e)),e===En.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const t=await Cn();t&&t.puzzle&&t.solution?(r=t,console.log("成功从JSON文件获取专家级谜题")):(console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成"),r=await Q(e))}catch(t){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",t),r=await Q(e)}}else console.log("非专家难度：使用程序生成谜题"),r=await Q(e);const o=ee(r);return console.log("谜题数据准备完成，formattedData:",o),console.log("puzzleData.puzzle 是否存在:",!!o.puzzle),o.puzzle&&(console.log("puzzle 类型:",Array.isArray(o.puzzle)?"数组":typeof o.puzzle),console.log("puzzle 长度:",Array.isArray(o.puzzle)?o.puzzle.length:"不是数组"),Array.isArray(o.puzzle)&&o.puzzle.length>0&&console.log("puzzle 第一行:",o.puzzle[0])),i(o),console.log("设置 currentPuzzle 完成"),d(o.puzzle),console.log("设置 originalPuzzle 完成"),s(o.puzzle),console.log("设置 currentBoard 完成"),f(o.solution),console.log("设置 solution 完成"),g(!0),v(!1),w(0),k(!0),E([]),R(-1),n&&n({puzzlesStarted:1}),K.success("已生成新谜题！",{position:"top-right",autoClose:2e3}),console.log("新谜题设置完成"),o}catch(r){return console.error("生成新谜题失败:",r),K.error("生成谜题失败，请重试",{position:"top-right",autoClose:2e3}),null}},fillCell:oe,clearCell:(e,t)=>{if(!m||x)return;const r=`${e}-${t}`;if(c&&c[e]&&0!==c[e][t])return void console.log("Cannot clear prefilled cell:",e,t);if(q.has(r))return void console.log("Cannot clear locked cell (correct answer):",e,t);const n=N.slice(0,M+1);if(n.push({board:a,pencilNotes:{...U},row:e,col:t,prevValue:a[e][t],type:"clear"}),E(n),R(n.length-1),B)return void ne(e,t);const o=[...a.map(e=>[...e])];o[e][t]=0,s(o);const i=new Set(_);i.delete(r),H(i),L(i.size);const l=new Set(q);l.delete(r),G(l)},undo:()=>{if(M>=0){const e=N[M];s(e.board),e.pencilNotes&&Y(e.pencilNotes),R(M-1),v(!1);const t=new Set;for(let n=0;n<9;n++)for(let r=0;r<9;r++){const o=e.board[n][r];0!==o&&u&&o!==u[n][r]&&t.add(`${n}-${r}`)}H(t);const r=new Set;for(let n=0;n<9;n++)for(let t=0;t<9;t++){const o=e.board[n][t];0!==o&&u&&o===u[n][t]&&r.add(`${n}-${t}`)}G(r)}else console.log("没有可撤销的操作")},redo:()=>{if(M<N.length-1){const e=N[M+1];s(e.board),e.pencilNotes&&Y(e.pencilNotes),R(M+1);const t=new Set;for(let n=0;n<9;n++)for(let r=0;r<9;r++){const o=e.board[n][r];0!==o&&u&&o!==u[n][r]&&t.add(`${n}-${r}`)}H(t);const r=new Set;for(let n=0;n<9;n++)for(let t=0;t<9;t++){const o=e.board[n][t];0!==o&&u&&o===u[n][t]&&r.add(`${n}-${t}`)}G(r),ie(e.board)}},getCandidates:async(e,t)=>{try{const r=await un.getCandidates(a,e,t);return z(r.candidates),r.candidates}catch(r){return console.error("获取候选数失败:",r),[]}},identifyTechniques:ae,applyTechniqueToBoard:se,getHint:async()=>{try{return await un.getHint(a,u)}catch(e){return console.error("获取提示失败:",e),K.error("获取提示失败，请重试",{position:"top-right",autoClose:2e3}),null}},validateCellInput:te};return y.jsx(Nn.Provider,{value:de,children:t})},Rn=()=>{const t=e.useContext(Nn);if(!t)throw new Error("useSudoku must be used within a SudokuContextProvider");return t},On=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0;
  @media (max-width: 640px) {
    gap: 30px;
    padding: 10px 0;
  }
`,Ln=Rr.section`
  text-align: center;
  padding: 40px 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    padding: 30px 15px;
  }
`,Fn=Rr.h1`
  font-size: 42px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`,Dn=Rr.p`
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
`,_n=Rr.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`,Hn=Rr(n)`
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
`,Bn=Rr(n)`
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
`,Wn=Rr.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  @media (max-width: 640px) {
    gap: 20px;
  }
`,Un=Rr.div`
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
`,Yn=Rr.div`
  font-size: 48px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  display: flex;
  justify-content: center;
`,qn=Rr.h3`
  font-size: 22px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`,Gn=Rr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  line-height: 1.6;
  margin: 0;
  text-align: center;
`,Jn=Rr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Vn=Rr.h2`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 26px;
  }
`,Xn=Rr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`,Kn=Rr.button`
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
`,Qn=Rr.button`
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
`,Zn=Rr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,eo=Rr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`,to=Rr.div`
  text-align: center;
  padding: 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 8px;
`,ro=Rr.div`
  font-size: 36px;
  font-weight: bold;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 10px;
  @media (max-width: 640px) {
    font-size: 30px;
  }
`,no=Rr.div`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
`,oo=()=>{re();const{userStats:e}=cn(),{setDifficulty:t,startNewGame:n}=Rn(),{executeWithLoading:i,isLoading:a}=ie(),s=o(),[l,c]=r.useState(En.MEDIUM),d=e=>{c(e)};return y.jsxs(On,{children:[y.jsxs(Ln,{children:[y.jsx(Fn,{children:"欢迎来到数独学习应用"}),y.jsx(Dn,{children:"提升您的数独技能，学习从基础到高级的解题技巧。适合各级别玩家，让您的数独之旅更加精彩！"}),y.jsxs(_n,{children:[y.jsx(Hn,{to:"/game",children:"开始游戏"}),y.jsx(Bn,{to:"/techniques",children:"学习技巧"})]})]}),y.jsxs(Wn,{children:[y.jsxs(Un,{children:[y.jsx(Yn,{children:"🧠"}),y.jsx(qn,{children:"多种难度"}),y.jsx(Gn,{children:"从简单到专家级别的数独谜题，适合不同水平的玩家，循序渐进提升您的技能。"})]}),y.jsxs(Un,{children:[y.jsx(Yn,{children:"💡"}),y.jsx(qn,{children:"技巧学习"}),y.jsx(Gn,{children:"详细的解题技巧讲解，从唯一候选数到高级技巧，帮助您掌握数独的精髓。"})]}),y.jsxs(Un,{children:[y.jsx(Yn,{children:"📊"}),y.jsx(qn,{children:"进度追踪"}),y.jsx(Gn,{children:"记录您的游戏进度和技巧掌握情况，分析您的表现，持续进步。"})]}),y.jsxs(Un,{children:[y.jsx(Yn,{children:"🎯"}),y.jsx(qn,{children:"实时提示"}),y.jsx(Gn,{children:"遇到困难时获得智能提示，帮助您理解下一步的解题思路和技巧应用。"})]})]}),y.jsxs(Jn,{children:[y.jsx(Vn,{children:"快速开始"}),y.jsxs(Xn,{children:[y.jsx(Kn,{selected:l===En.EASY,onClick:()=>d(En.EASY),children:"简单"}),y.jsx(Kn,{selected:l===En.MEDIUM,onClick:()=>d(En.MEDIUM),children:"中等"}),y.jsx(Kn,{selected:l===En.HARD,onClick:()=>d(En.HARD),children:"困难"}),y.jsx(Kn,{selected:l===En.EXPERT,onClick:()=>d(En.EXPERT),children:"专家"})]}),y.jsx(Qn,{onClick:async()=>{t(l);const e=await i(()=>n(null,l),"准备游戏中...");e&&s(`/game/${e.id}`)},disabled:a,children:a?y.jsx(tn,{showMessage:!1}):"开始游戏"})]}),y.jsxs(Zn,{children:[y.jsx(Vn,{children:"您的进度"}),y.jsxs(eo,{children:[y.jsxs(to,{children:[y.jsx(ro,{children:e.puzzlesStarted}),y.jsx(no,{children:"开始的谜题"})]}),y.jsxs(to,{children:[y.jsx(ro,{children:e.puzzlesCompleted}),y.jsx(no,{children:"完成的谜题"})]}),y.jsxs(to,{children:[y.jsx(ro,{children:e.puzzlesSolved}),y.jsx(no,{children:"独立解决"})]}),y.jsxs(to,{children:[y.jsx(ro,{children:Math.floor(e.totalTimePlayed/60)}),y.jsx(no,{children:"游戏分钟"})]})]})]})]})},io=Rr.div.attrs({className:"sudoku-board"})`
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
`,ao=Rr.div`
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
  ${e=>{var t,r;let n="";return e.col%3==0&&e.col>0&&(n+="border-left: 2px solid "+((null==(t=e.theme)?void 0:t.gridLineThick)||"#34495e")+";"),e.row%3==0&&e.row>0&&(n+="border-top: 2px solid "+((null==(r=e.theme)?void 0:r.gridLineThick)||"#34495e")+";"),n}}
  
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
`,so=({notes:e=[],highlightedNumber:t=null})=>{const r=Array.isArray(e)?e:[],n={display:"flex",alignItems:"center",justifyContent:"center",fontSize:"calc(var(--board-width) * 0.025)",fontWeight:"500",color:"#4A6FA5",padding:"1px"},o={color:"#ffffff",backgroundColor:"#3498db",borderRadius:"50%",fontWeight:"bold",width:"80%",height:"80%"};return y.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr",width:"100%",height:"100%",boxSizing:"border-box"},children:r.map(e=>{const r=(e-1)%3,i=Math.floor((e-1)/3),a=t&&e===t;return y.jsx("div",{style:{...n,gridColumn:r+1,gridRow:i+1,...a&&o},children:e},e)})})},lo=({board:e,selectedCell:t,onCellClick:r,originalPuzzle:n,isPencilMode:o,pencilNotes:i,incorrectCells:a,highlightedCells:s})=>{const{theme:l}=re(),c=e||Array(9).fill().map(()=>Array(9).fill(0)),d=n||Array(9).fill().map(()=>Array(9).fill(0)),u=i||{},f=a||new Set,p=(e,t)=>3*Math.floor(e/3)+Math.floor(t/3),h=(e,r,n)=>{const i=[];if(u[`${e}-${r}`],((e,t,r)=>!(!d||!d[t]||null===d[t][r]||0===d[t][r]))(0,e,r)&&i.push("prefilled"),((e=>"error"===e)(n)||((e,t)=>{const r=`${e}-${t}`;return f instanceof Set?f.has(r):!!Array.isArray(f)&&f.some(r=>r.row===e&&r.col===t)})(e,r))&&i.push("error"),!t&&s&&Array.isArray(s)){s.some(t=>t.row===e&&t.col===r)&&i.push("highlighted")}if(t&&t.row===e&&t.col===r)i.push("selected"),i.push(o?"pencil-selected":"normal-selected");else if(t){const o=c[t.row][t.col],s=`${t.row}-${t.col}`;u[s],n&&n===o&&i.push("same-number"),a=e,l=r,h=t.row,m=t.col,(a===h||l===m||p(a,l)===p(h,m))&&i.push("same-region")}var a,l,h,m;return i.join(" ")};return y.jsx(io,{theme:l,children:c.map((e,n)=>e.map((e,o)=>{const i=h(n,o,e),a=`${n}-${o}`,d=u[a]||[],f=d.length>0;let p=null;if(t&&void 0!==t.row&&void 0!==t.col&&c[t.row]&&c[t.row][t.col]){const e=c[t.row][t.col];0!==e&&"error"!==e&&(p=e)}if(!p&&s&&Array.isArray(s)&&s.length>0){const e=s[0];e&&e.number&&0!==e.number&&"error"!==e.number&&(p=e.number)}return y.jsx(ao,{row:n,col:o,className:i,onClick:()=>((e,t)=>{r&&r(e,t)})(n,o),theme:l,children:e&&0!==e&&"error"!==e?e:f?y.jsx(so,{notes:d,highlightedNumber:p}):""},a)}))})},co=({onNumberSelect:t,onClearCell:r,onUndo:n,togglePencilMode:o,fillAllCandidates:i,selectedNumber:a,isPencilMode:s,remainingNumbers:l={}})=>{re();const[c,d]=e.useState("keyboard"),[u,f]=e.useState(null),p=Rn(),{identifyTechniques:h,applyTechniqueToBoard:m,gameStarted:g,currentBoard:x,setHighlightedCells:v,setSelectedCell:b,selectedCell:w}=p||{},j=e.useCallback(()=>{d("keyboard"),v&&v([]),f(null),C([])},[v]);e.useEffect(()=>{w&&"keyboard"!==c&&j()},[w,c,j]);const[k,S]=e.useState([]),[$,C]=e.useState([]);e.useEffect(()=>{d("keyboard"),f(null),C([]),S([]),v&&v([])},[g,x]);const z=e.useCallback(()=>{if(h&&x)try{const e=h();S(e||[])}catch(e){console.error("查找技巧失败:",e),S([])}else S([])},[h,x]);e.useEffect(()=>{"techniques"===c&&g&&x&&z()},[c,z,g,x]),e.useEffect(()=>{S([])},[g,x]);return y.jsxs("div",{className:"control-panel",style:{backgroundColor:"#ffffff",borderRadius:"12px",padding:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.12)",display:"flex",flexDirection:"column",fontFamily:"Arial, Microsoft YaHei, sans-serif",margin:0,boxSizing:"border-box",border:"1px solid #e0e0e0",position:"relative",height:window.innerWidth<=576?"auto":"var(--board-width)",overflow:"hidden",outline:"none",WebkitTapHighlightColor:"transparent"},children:[y.jsx("h3",{style:{display:"none"},children:"控制面板"}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,margin:0,minHeight:0,overflow:"hidden"},children:[y.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #e0e0e0",marginBottom:"8px",paddingBottom:0},children:[y.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"keyboard"===c?"#3498db15":"transparent",border:"none",borderRadius:"6px 6px 0 0",fontSize:"14px",fontWeight:"keyboard"===c?"700":"500",color:"keyboard"===c?"#3498db":"#7f8c8d",cursor:"pointer",margin:"0 2px",boxSizing:"border-box",minHeight:"32px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>{j()},children:"键盘"}),y.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"techniques"===c?"#3498db15":"transparent",border:"none",borderRadius:"6px 6px 0 0",fontSize:"14px",fontWeight:"techniques"===c?"700":"500",color:"techniques"===c?"#3498db":"#7f8c8d",cursor:"pointer",margin:"0 2px",boxSizing:"border-box",minHeight:"32px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>{d("techniques"),b&&b(null)},children:"技巧"}),y.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"solution"===c?"#3498db15":"transparent",border:"none",borderRadius:"6px 6px 0 0",fontSize:"14px",fontWeight:"solution"===c?"700":"500",color:"solution"===c?"#3498db":"#7f8c8d",cursor:"pointer",margin:"0 2px",boxSizing:"border-box",minHeight:"32px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>{d("solution"),b&&b(null)},children:"解题"})]}),y.jsxs("div",{style:{flex:1,padding:"4px 0",overflow:"hidden",position:"relative",display:"flex",flexDirection:"column",minHeight:0},children:["keyboard"===c&&y.jsx(y.Fragment,{children:window.innerWidth<=768?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"4px",marginBottom:"8px"},children:[1,2,3,4,5,6].map(e=>{const r=l.hasOwnProperty(e)?l[e]:9,n=0===r;return y.jsxs("button",{className:"number-button",disabled:n,onClick:r=>{r.stopPropagation(),!n&&t(e)},style:{position:"relative",backgroundColor:a===e||s?"#3498db":"#ffffff",color:a===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:n?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[y.jsx("span",{style:{fontSize:"clamp(40px, 12vw, 80px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),y.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",backgroundColor:"transparent",color:a===e||s?"white":"#3498db",fontSize:"14px",fontWeight:"bold",padding:"1px 4px",borderRadius:"8px",minWidth:"16px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)})}),y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"4px"},children:[[7,8,9].map(e=>{const r=l.hasOwnProperty(e)?l[e]:9,n=0===r;return y.jsxs("button",{className:"number-button",disabled:n,onClick:r=>{r.stopPropagation(),!n&&t(e)},style:{position:"relative",backgroundColor:a===e||s?"#3498db":"#ffffff",color:a===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:n?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",transition:"all 0.2s ease"},children:[y.jsx("span",{style:{fontSize:"clamp(40px, 12vw, 80px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),y.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",backgroundColor:"transparent",color:a===e||s?"white":"#3498db",fontSize:"14px",fontWeight:"bold",padding:"1px 4px",borderRadius:"8px",minWidth:"16px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)}),y.jsx("button",{onClick:e=>{e.stopPropagation(),n()},title:"撤回",style:{position:"relative",backgroundColor:"#ffffff",color:"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"60px !important",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M3 7v6h6"}),y.jsx("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})},"undo"),y.jsx("button",{onClick:e=>{e.stopPropagation(),r()},title:"清空单元格",style:{position:"relative",backgroundColor:"#ff4444",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"24px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:y.jsxs("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M3 6h18"}),y.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),y.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),y.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),y.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})},"clear"),y.jsx("button",{onClick:e=>{e.stopPropagation(),onTogglePencilMode()},title:s?"退出铅笔模式":"进入铅笔模式",style:{position:"relative",backgroundColor:s?"#3498db":"#ffffff",color:s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"24px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})},"pencil")]})]}):y.jsxs("div",{className:"number-pad",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"6px",width:"100%",maxHeight:"100%",overflow:"visible",padding:"4px",boxSizing:"border-box"},children:[[1,2,3,4,5,6,7,8,9].map(e=>{const r=l.hasOwnProperty(e)?l[e]:9,n=0===r;return y.jsxs("button",{className:"number-button",disabled:n,onClick:r=>{r.stopPropagation(),!n&&t(e)},style:{position:"relative",backgroundColor:a===e||s?"#3498db":"#ffffff",color:a===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"400",lineHeight:"1",cursor:n?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",fontSize:"0",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[y.jsx("span",{style:{fontSize:"clamp(30px, 8vw, 70px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),y.jsx("span",{style:{position:"absolute",top:"4px",right:"4px",backgroundColor:"transparent",color:a===e||s?"white":"#3498db",fontSize:"16px",fontWeight:"bold",padding:"2px 6px",borderRadius:"10px",minWidth:"20px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)}),y.jsx("button",{onClick:e=>{e.stopPropagation(),n()},title:"撤回",style:{position:"relative",backgroundColor:"#ffffff",color:"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M3 7v6h6"}),y.jsx("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})},"undo"),y.jsx("button",{onClick:e=>{e.stopPropagation(),r()},title:"清空单元格",style:{position:"relative",backgroundColor:"#ff4444",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:y.jsxs("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M3 6h18"}),y.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),y.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),y.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),y.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})},"clear"),y.jsx("button",{onClick:e=>{e.stopPropagation(),o()},title:s?"退出铅笔模式":"进入铅笔模式",style:{position:"relative",backgroundColor:s?"#3498db":"#ffffff",color:s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})},"pencil")]})}),"techniques"===c&&y.jsxs("div",{style:{overflowY:"auto",padding:"4px 8px 8px 8px"},children:[0===k.length?y.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#7f8c8d",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:"当前棋盘没有找到可用技巧"}):y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px"},children:k.map((e,t)=>{let r="",n="";if("number"==typeof e.row&&"number"==typeof e.col){r=`(${e.row+1},${e.col+1})`,n=void 0!==e.value?` 数字: ${e.value}`:""}else if(Array.isArray(e.cells)&&e.cells.length>0){if(1===e.cells.length&&Array.isArray(e.cells[0])){r=`(${e.cells[0][0]+1},${e.cells[0][1]+1})`}else r="多单元格";Array.isArray(e.values)&&e.values.length>0&&(n=` 数字: [${e.values.join(",")}]`)}else r="(未知位置)";let o="",i="";"nakedSingle"===e.type||"naked_single"===e.type?o="唯一数法":e.type.includes("hidden_single")||e.type.includes("hiddenSingle")?(e.type.includes("row")||e.type.includes("Row")?i="行":e.type.includes("col")||e.type.includes("Col")?i="列":(e.type.includes("box")||e.type.includes("Box"))&&(i="宫"),o=((e,t)=>{if("hiddenSingle"===e){if("行"===t)return"行摒除法";if("列"===t)return"列摒除法";if("宫"===t)return"宫摒除法"}return e})("hiddenSingle",i)):"nakedPairs"===e.type||"naked_pairs"===e.type||e.type.includes("nakedPair")?(o="显性数对法",e.type.includes("Row")?i="(行)":e.type.includes("Col")?i="(列)":e.type.includes("Box")&&(i="(宫)")):"hiddenPairs"===e.type||"hidden_pairs"===e.type||e.type.includes("hiddenPair")?(o="隐性数对法",e.type.includes("Row")?i="(行)":e.type.includes("Col")?i="(列)":e.type.includes("Box")&&(i="(宫)")):e.type.includes("nakedTriple")?(o="显性三链数法",e.type.includes("Row")?i="(行)":e.type.includes("Col")?i="(列)":e.type.includes("Box")&&(i="(宫)")):e.type.includes("hiddenTriple")?(o="隐性三链数法",e.type.includes("Row")?i="(行)":e.type.includes("Col")?i="(列)":e.type.includes("Box")&&(i="(宫)")):o=e.description||"未知技巧";const a=o+i;return y.jsx("div",{onClick:()=>(e=>{f(e);const t=[],r="number"==typeof e.row&&"number"==typeof e.col,n=r?e.row:0,o=r?e.col:0,i=r?`(${n+1},${o+1})`:"多单元格",a=e.value||"";if(e.type.includes("NakedSingle")||e.type.includes("nakedSingle"))t.push({step:1,description:"查找唯一候选数的单元格",highlight:""},{step:2,description:`单元格${i}只有唯一候选数${a}`,highlight:i},{step:3,description:`填入数字${a}`,highlight:i});else if(e.type.includes("HiddenSingle")||e.type.includes("hiddenSingle")){const s=e.type.includes("Row")?"行":e.type.includes("Col")?"列":"宫";let l=0;if(r)l=e.type.includes("Row")?n+1:e.type.includes("Col")?o+1:3*Math.floor(n/3)+Math.floor(o/3)+1;else if(void 0!==e.row)l=e.row+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?l="number"==typeof t[0]?t[0]+1:l:t&&void 0!==t.row&&(l=t.row+1)}t.push({step:1,description:`检查数字${a}在${s}${l}中的可能位置`,highlight:""},{step:2,description:`发现在${s}${l}中，数字${a}只能填入单元格${i}`,highlight:i},{step:3,description:`使用${s}摒除法填入数字${a}`,highlight:i})}else if(e.type.includes("NakedPairs")||e.type.includes("nakedPairs")||e.type.includes("nakedPair")){const a=e.type.includes("Row")?"行":e.type.includes("Col")?"列":"宫";let s=0;if(r)s=e.type.includes("Row")?n+1:e.type.includes("Col")?o+1:3*Math.floor(n/3)+Math.floor(o/3)+1;else if(void 0!==e.row)s=e.row+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?s="number"==typeof t[0]?t[0]+1:s:t&&void 0!==t.row&&(s=t.row+1)}const l=Array.isArray(e.values)?e.values.join(","):"数对",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i,d=[];if("行"===a&&s>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===s-1&&e[1]===t||void 0!==e.row&&e.row===s-1&&e.col===t),n=x&&x[s-1]&&x[s-1][t]>0;r||n||d.push([s-1,t])}else if("列"===a&&s>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===t&&e[1]===s-1||void 0!==e.row&&e.row===t&&e.col===s-1),n=x&&x[t]&&x[t][s-1]>0;r||n||d.push([t,s-1])}else if("宫"===a&&s>0){const t=3*Math.floor((s-1)/3),r=(s-1)%3*3;for(let n=0;n<3;n++)for(let o=0;o<3;o++){const i=t+n,a=r+o,s=e.cells.some(e=>Array.isArray(e)&&e[0]===i&&e[1]===a||void 0!==e.row&&e.row===i&&e.col===a),l=x&&x[i]&&x[i][a]>0;s||l||d.push([i,a])}}const u=d.length>0?d.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):"相关单元格";t.push({step:1,description:`在${a}${s}中查找数对`,highlight:""},{step:2,description:`发现数字${l}的显性数对，位于单元格${c}`,highlight:i},{step:3,description:`这些数字只能出现在这两个单元格中，需要从目标单元格${u}中删除候选数${l}`,highlight:i})}else if(e.type.includes("HiddenPairs")||e.type.includes("hiddenPairs")||e.type.includes("hiddenPair")){const a=e.type.includes("Row")?"行":e.type.includes("Col")?"列":"宫";let s=0;if(r)s=e.type.includes("Row")?n+1:e.type.includes("Col")?o+1:3*Math.floor(n/3)+Math.floor(o/3)+1;else if(void 0!==e.row)s=e.row+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?s="number"==typeof t[0]?t[0]+1:s:t&&void 0!==t.row&&(s=t.row+1)}const l=Array.isArray(e.values)?e.values.join(","):"数对",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i;t.push({step:1,description:`在${a}${s}中查找只能出现在两个单元格中的数字对`,highlight:""},{step:2,description:`发现数字${l}只能出现在单元格${c}`,highlight:i},{step:3,description:`目标单元格${c}中只能填入数字${l}，需要移除其他候选数`,highlight:i})}else if(e.type.includes("nakedTriple")){const a=e.type.includes("Row")?"行":e.type.includes("Col")?"列":"宫";let s=0;if(r)s=e.type.includes("Row")?n+1:e.type.includes("Col")?o+1:3*Math.floor(n/3)+Math.floor(o/3)+1;else if(void 0!==e.row)s=e.row+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?s="number"==typeof t[0]?t[0]+1:s:t&&void 0!==t.row&&(s=t.row+1)}const l=Array.isArray(e.values)?e.values.join(","):"三链数",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i,d=[];if("行"===a&&s>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===s-1&&e[1]===t||void 0!==e.row&&e.row===s-1&&e.col===t),n=x&&x[s-1]&&x[s-1][t]>0;r||n||d.push([s-1,t])}else if("列"===a&&s>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===t&&e[1]===s-1||void 0!==e.row&&e.row===t&&e.col===s-1),n=x&&x[t]&&x[t][s-1]>0;r||n||d.push([t,s-1])}else if("宫"===a&&s>0){const t=3*Math.floor((s-1)/3),r=(s-1)%3*3;for(let n=0;n<3;n++)for(let o=0;o<3;o++){const i=t+n,a=r+o,s=e.cells.some(e=>Array.isArray(e)&&e[0]===i&&e[1]===a||void 0!==e.row&&e.row===i&&e.col===a),l=x&&x[i]&&x[i][a]>0;s||l||d.push([i,a])}}const u=d.length>0?d.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):"相关单元格";t.push({step:1,description:`在${a}${s}中查找三链数`,highlight:""},{step:2,description:`发现数字${l}的显性三链数，位于单元格${c}`,highlight:i},{step:3,description:`这些数字只能出现在这三个单元格中，需要从目标单元格${u}中删除候选数${l}`,highlight:i})}else if(e.type.includes("hiddenTriple")){const a=e.type.includes("Row")?"行":e.type.includes("Col")?"列":"宫";let s=0;if(r)s=e.type.includes("Row")?n+1:e.type.includes("Col")?o+1:3*Math.floor(n/3)+Math.floor(o/3)+1;else if(void 0!==e.row)s=e.row+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];t&&void 0!==t.row&&(s=t.row+1)}const l=Array.isArray(e.values)?e.values.join(","):"三链数",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i;t.push({step:1,description:`在${a}${s}中查找只能出现在三个单元格中的数字组`,highlight:""},{step:2,description:`发现数字${l}只能出现在单元格${c}`,highlight:i},{step:3,description:`目标单元格${c}中只能填入数字${l}，需要移除其他候选数`,highlight:i})}else t.push({step:1,description:`应用${e.description||e.type}技巧`,highlight:""},{step:2,description:`相关位置: ${i}`,highlight:i},{step:3,description:a?`涉及数字: ${a}`:"分析完成",highlight:i});if(C(t),v){const t=e.notes||(Array.isArray(e.cells)&&e.cells.length>0?[a]:[]);if(r)v([{row:n,col:o,techniqueIndicator:!0,number:a,notes:t}]);else if(Array.isArray(e.cells)){const r=e.cells.map(e=>({row:e.row,col:e.col,techniqueIndicator:!0,number:e.value||a,notes:e.notes||t}));v(r)}else v([])}d("solution")})(e),style:{padding:"8px 10px",backgroundColor:"#f8f9fa",borderRadius:"6px",border:"1px solid #e9ecef",cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#e9ecef",e.currentTarget.style.borderColor="#3498db"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#f8f9fa",e.currentTarget.style.borderColor="#e9ecef"},children:y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontWeight:"600",color:"#34495e"},children:[y.jsx("span",{children:a}),y.jsxs("span",{style:{fontSize:"14px",color:"#7f8c8d",fontWeight:"normal"},children:["位置: ",r,n]})]})},t)})}),y.jsx("button",{onClick:()=>{i&&i(),z(),d("techniques")},style:{width:"100%",padding:"8px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",transition:"background-color 0.2s ease"},title:"点击刷新候选数并加载所有技巧求解",children:"中&高技巧开启候选数"})]}),"solution"===c&&y.jsxs("div",{style:{overflowY:"auto",padding:"8px"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[y.jsx("h4",{style:{margin:0,color:"#34495e",fontSize:"16px",fontWeight:"600"},children:"解题步骤"}),u&&y.jsx("button",{onClick:()=>{if(u){m(u)&&(v&&v([]),b&&b(null),z())}},style:{width:"120px",height:"36px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 10px rgba(52, 152, 219, 0.3), 0 1px 3px rgba(0, 0, 0, 0.12)",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#2980b9",e.currentTarget.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)",e.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#3498db",e.currentTarget.style.boxShadow="0 4px 10px rgba(52, 152, 219, 0.3), 0 1px 3px rgba(0, 0, 0, 0.12)",e.currentTarget.style.transform="translateY(0)"},children:"应用技巧"})]}),u?y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"12px"},children:$.map(e=>y.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[y.jsx("div",{style:{minWidth:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#3498db",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold"},children:e.step}),y.jsx("div",{style:{flex:1,fontSize:"14px",color:"#34495e",lineHeight:"1.5"},children:e.description})]},e.step))}):y.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#7f8c8d",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:"请先从技巧列表中选择一个技巧"})]})]})]})]})},uo=Rr.div`
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
`,fo=Rr.div`
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
`,po=Rr.h2`
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
`,ho=Rr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`,mo=Rr(({isSelected:e,...t})=>y.jsx("button",{...t}))`
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
`,go=Rr.div`
  margin-top: 4px;
  font-size: 12px;
  opacity: 0.7;
  font-weight: normal;
`,xo=Rr.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`,vo=Rr.button`
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
`,yo=Rr.button`
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
`,bo={[En.EASY]:{name:"简单",description:"初学者友好，空格较少"},[En.MEDIUM]:{name:"中等",description:"进阶挑战，需要一定技巧"},[En.HARD]:{name:"困难",description:"专家级别，逻辑推理"},[En.EXPERT]:{name:"专家",description:"极高难度，需要高级技巧"}},wo=({isOpen:e,onClose:t,onSelectDifficulty:n,initialDifficulty:o})=>{const{theme:i}=re(),[a,s]=r.useState(o||En.MEDIUM);if(!e)return null;const l=()=>{n(a),t()};return y.jsx(uo,{onClick:t,onKeyDown:e=>{"Escape"===e.key&&t(),"Enter"===e.key&&l()},children:y.jsxs(fo,{theme:i,onClick:e=>e.stopPropagation(),children:[y.jsx(po,{theme:i,children:"选择难度"}),y.jsx(ho,{children:Object.entries(En).map(([e,t])=>{const r=bo[t];return y.jsxs(mo,{isSelected:a===t,onClick:()=>s(t),theme:i,className:e.toLowerCase(),children:[r.name,y.jsx(go,{children:r.description})]},e)})}),y.jsxs(xo,{children:[y.jsx(vo,{theme:i,onClick:t,children:"取消"}),y.jsx(yo,{theme:i,onClick:l,children:"开始游戏"})]})]})})},jo=Rr.div.attrs({className:"nav-block"})`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f8f9fa"}};
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  width: 100%; // 与数独棋盘同宽
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  transition: all 0.3s ease;
  
  // 添加悬停效果
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  // 确保在父容器中正确对齐
  align-self: flex-start;
`;Rr.h3`
  font-size: 14px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 4px 0;
  padding-bottom: 4px;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  display: none; // 竖屏模式下隐藏标题以节省空间
`;const ko=Rr.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5个按钮平均分布
  gap: 2px;
  margin: 0;
  padding: 2px 0;
`,So=Rr(({isActive:e,...t})=>y.jsx("button",{...t}))`
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
  min-height: 36px;
  min-width: 36px;
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
`,$o=Rr.span`
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Co=()=>y.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})}),zo=()=>y.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}),Ao=()=>y.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M8 5v14l11-7z"})}),To=()=>y.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"#FFD700",children:y.jsx("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})}),Po=()=>y.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:[y.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"transparent",stroke:"currentColor",strokeWidth:"1.5"}),y.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),y.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),y.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",children:"2"}),y.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",children:"5"})]}),Io=()=>y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})}),No=({onNewGame:t,onPauseTimer:r,onGetHint:n,onShowTechniques:o,onToggleNotes:i,onSettings:a,isNotesMode:s=!1,isTimerActive:l=!0,gameCompleted:c=!1})=>{re();const d=Rn(),{startLoading:u,stopLoading:f}=ie(),[p,h]=e.useState(!1),[m,g]=e.useState(!1);return y.jsxs(y.Fragment,{children:[y.jsx(jo,{children:y.jsxs(ko,{children:[y.jsx(So,{onClick:()=>{console.log("NavigationBlock: 打开难度选择模态框"),g(!1),h(!0)},title:"新建游戏",children:y.jsx($o,{children:y.jsx(Co,{})})}),y.jsx(So,{onClick:c?void 0:r,disabled:c,title:c?"游戏已完成":l?"暂停计时":"继续",children:y.jsx($o,{children:c||l?y.jsx(zo,{}):y.jsx(Ao,{})})}),y.jsx(So,{onClick:n,title:"技巧提示",children:y.jsx($o,{children:y.jsx(To,{})})}),y.jsx(So,{onClick:()=>{i(),g(!0)},title:"候选数",isActive:m,children:y.jsx($o,{children:y.jsx(Po,{})})}),y.jsx(So,{onClick:a,title:"设置",children:y.jsx($o,{children:y.jsx(Io,{})})})]})}),y.jsx(wo,{isOpen:p,onClose:()=>h(!1),onSelectDifficulty:async e=>{console.log("NavigationBlock: 选择难度:",e);try{g(!1),o&&console.log("将在生成新游戏时重置技巧状态"),u&&u("生成新谜题..."),(null==d?void 0:d.startNewGame)?(console.log("调用 context.startNewGame"),await d.startNewGame(null,e),console.log("startNewGame 完成")):(null==d?void 0:d.generateNewPuzzle)?(console.log("调用 context.generateNewPuzzle"),await d.generateNewPuzzle(e),console.log("generateNewPuzzle 完成")):console.error("上下文函数不可用")}catch(t){console.error("生成新游戏失败:",t)}finally{f&&f()}},initialDifficulty:(null==d?void 0:d.difficulty)||En.MEDIUM})]})},Eo=Rr(({theme:e,...t})=>y.jsx("div",{...t})).attrs({className:"display-block"})`
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
`,Mo=Rr.div`
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
`,Ro=Rr.span`
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"#ff3b30"}};
  font-weight: 600;
`,Oo=Rr.div`
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
`,Lo=Rr.div`
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
`,Fo=({errorCount:e,difficulty:t,time:r})=>(re(),y.jsxs(Eo,{children:[y.jsxs(Mo,{children:["错误：",y.jsx(Ro,{children:e})]}),y.jsx(Oo,{children:t}),y.jsx(Lo,{children:r})]})),Do=({highlightedCells:e,boardWidth:t,boardHeight:r,isPortrait:n=!1})=>{if(!e||!Array.isArray(e))return null;const o=e.filter(e=>e&&!0===e.techniqueIndicator&&"number"==typeof e.row&&"number"==typeof e.col&&e.row>=0&&e.row<9&&e.col>=0&&e.col<9);if(0===o.length)return null;let i,a,s,l;return n&&r?(i=t/9,a=r/9,s=`${Math.max(16,.4*Math.min(i,a))}px`,l=r):(i=t/9,a=i,s=`${Math.max(16,.4*i)}px`,l=t),y.jsx("div",{className:"technique-overlay",style:{position:"absolute",top:0,left:0,width:`${t}px`,height:`${l}px`,pointerEvents:"none",zIndex:15,boxSizing:"border-box",background:"transparent"},children:o.map(e=>y.jsx("div",{style:{position:"absolute",left:e.col*i+"px",top:e.row*a+"px",width:`${i}px`,height:`${a}px`,pointerEvents:"none",zIndex:20,backgroundColor:"#f9e79f",border:"3px solid #ffffff",boxSizing:"border-box",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.number&&y.jsx("span",{style:{fontSize:s,fontWeight:"bold",color:"#2ecc71",zIndex:30},children:e.number})},`tech-${e.row}-${e.col}`))})};
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
function _o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Ho(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Jo(n.key),n)}}function Bo(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=Xo(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function Wo(e,t,r){return(t=Jo(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Uo(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Yo(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Uo(Object(r),!0).forEach(function(t){Wo(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Uo(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function qo(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,s=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}(e,t)||Xo(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Go(e){return function(e){if(Array.isArray(e))return _o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Xo(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Jo(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Vo(e){return(Vo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Xo(e,t){if(e){if("string"==typeof e)return _o(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_o(e,t):void 0}}var Ko=function(){},Qo={},Zo={},ei=null,ti={mark:Ko,measure:Ko};try{"undefined"!=typeof window&&(Qo=window),"undefined"!=typeof document&&(Zo=document),"undefined"!=typeof MutationObserver&&(ei=MutationObserver),"undefined"!=typeof performance&&(ti=performance)}catch(Fu){}var ri=(Qo.navigator||{}).userAgent,ni=void 0===ri?"":ri,oi=Qo,ii=Zo,ai=ei,si=ti;oi.document;var li,ci=!!ii.documentElement&&!!ii.head&&"function"==typeof ii.addEventListener&&"function"==typeof ii.createElement,di=~ni.indexOf("MSIE")||~ni.indexOf("Trident/"),ui={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},fi=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],pi="classic",hi="duotone",mi="sharp",gi="sharp-duotone",xi="chisel",vi="etch",yi="jelly",bi="jelly-duo",wi="jelly-fill",ji="notdog",ki="notdog-duo",Si="slab",$i="slab-press",Ci="thumbprint",zi="utility",Ai="utility-duo",Ti="utility-fill",Pi="whiteboard",Ii=[pi,hi,mi,gi,xi,vi,yi,bi,wi,ji,ki,Si,$i,Ci,zi,Ai,Ti,Pi];Wo(Wo(Wo(Wo(Wo(Wo(Wo(Wo(Wo(Wo(li={},pi,"Classic"),hi,"Duotone"),mi,"Sharp"),gi,"Sharp Duotone"),xi,"Chisel"),vi,"Etch"),yi,"Jelly"),bi,"Jelly Duo"),wi,"Jelly Fill"),ji,"Notdog"),Wo(Wo(Wo(Wo(Wo(Wo(Wo(Wo(li,ki,"Notdog Duo"),Si,"Slab"),$i,"Slab Press"),Ci,"Thumbprint"),zi,"Utility"),Ai,"Utility Duo"),Ti,"Utility Fill"),Pi,"Whiteboard");var Ni=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Ei=["fak","fa-kit","fakd","fa-kit-duotone"],Mi={fak:"kit","fa-kit":"kit"},Ri={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"};Wo(Wo({},"kit","Kit"),"kit-duotone","Kit Duotone");var Oi,Li={kit:"fak"},Fi={"kit-duotone":"fakd"},Di="duotone-group",_i="swap-opacity",Hi="primary",Bi="secondary";Wo(Wo(Wo(Wo(Wo(Wo(Wo(Wo(Wo(Wo(Oi={},"classic","Classic"),"duotone","Duotone"),"sharp","Sharp"),"sharp-duotone","Sharp Duotone"),"chisel","Chisel"),"etch","Etch"),"jelly","Jelly"),"jelly-duo","Jelly Duo"),"jelly-fill","Jelly Fill"),"notdog","Notdog"),Wo(Wo(Wo(Wo(Wo(Wo(Wo(Wo(Oi,"notdog-duo","Notdog Duo"),"slab","Slab"),"slab-press","Slab Press"),"thumbprint","Thumbprint"),"utility","Utility"),"utility-duo","Utility Duo"),"utility-fill","Utility Fill"),"whiteboard","Whiteboard");Wo(Wo({},"kit","Kit"),"kit-duotone","Kit Duotone");var Wi={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Ui=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"]),Yi=[1,2,3,4,5,6,7,8,9,10],qi=Yi.concat([11,12,13,14,15,16,17,18,19,20]),Gi=[].concat(Go(Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]})),["solid","regular","light","thin","duotone","brands","semibold"],["aw","fw","pull-left","pull-right"],["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Di,_i,Hi,Bi]).concat(Yi.map(function(e){return"".concat(e,"x")})).concat(qi.map(function(e){return"w-".concat(e)})),Ji="___FONT_AWESOME___",Vi="svg-inline--fa",Xi="data-fa-i2svg",Ki="data-fa-pseudo-element",Qi="data-prefix",Zi="data-icon",ea="fontawesome-i2svg",ta=["HTML","HEAD","STYLE","SCRIPT"],ra=["::before","::after",":before",":after"],na=function(){try{return!0}catch(e){return!1}}();function oa(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[pi]}})}var ia=Yo({},ui);ia[pi]=Yo(Yo(Yo(Yo({},{"fa-duotone":"duotone"}),ui[pi]),Mi),Ri);var aa=oa(ia),sa=Yo({},{chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}});sa[pi]=Yo(Yo(Yo(Yo({},{duotone:"fad"}),sa[pi]),Li),Fi);var la=oa(sa),ca=Yo({},Wi);ca[pi]=Yo(Yo({},ca[pi]),{fak:"fa-kit"});var da=oa(ca),ua=Yo({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}});ua[pi]=Yo(Yo({},ua[pi]),{"fa-kit":"fak"}),oa(ua);var fa=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,pa="fa-layers-text",ha=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;oa(Yo({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}}));var ma=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ga={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xa=[].concat(Go(["kit"]),Go(Gi)),va=oi.FontAwesomeConfig||{};if(ii&&"function"==typeof ii.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=qo(e,2),r=t[0],n=t[1],o=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=ii.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(r));null!=o&&(va[n]=o)})}var ya={styleDefault:"solid",familyDefault:pi,cssPrefix:"fa",replacementClass:Vi,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};va.familyPrefix&&(va.cssPrefix=va.familyPrefix);var ba=Yo(Yo({},ya),va);ba.autoReplaceSvg||(ba.observeMutations=!1);var wa={};Object.keys(ya).forEach(function(e){Object.defineProperty(wa,e,{enumerable:!0,set:function(t){ba[e]=t,ja.forEach(function(e){return e(wa)})},get:function(){return ba[e]}})}),Object.defineProperty(wa,"familyPrefix",{enumerable:!0,set:function(e){ba.cssPrefix=e,ja.forEach(function(e){return e(wa)})},get:function(){return ba.cssPrefix}}),oi.FontAwesomeConfig=wa;var ja=[];var ka=16,Sa={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $a(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function Ca(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function za(e){return e.classList?Ca(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Aa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ta(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function Pa(e){return e.size!==Sa.size||e.x!==Sa.x||e.y!==Sa.y||e.rotate!==Sa.rotate||e.flipX||e.flipY}function Ia(){var e="fa",t=Vi,r=wa.cssPrefix,n=wa.replacementClass,o=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";\n  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";\n  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}';if(r!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(i,".".concat(r,"-")).replace(a,"--".concat(r,"-")).replace(s,".".concat(n))}return o}var Na=!1;function Ea(){wa.autoAddCss&&!Na&&(!function(e){if(e&&ci){var t=ii.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=ii.head.childNodes,n=null,o=r.length-1;o>-1;o--){var i=r[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(n=i)}ii.head.insertBefore(t,n)}}(Ia()),Na=!0)}var Ma={mixout:function(){return{dom:{css:Ia,insertCss:Ea}}},hooks:function(){return{beforeDOMElementCreation:function(){Ea()},beforeI2svg:function(){Ea()}}}},Ra=oi||{};Ra[Ji]||(Ra[Ji]={}),Ra[Ji].styles||(Ra[Ji].styles={}),Ra[Ji].hooks||(Ra[Ji].hooks={}),Ra[Ji].shims||(Ra[Ji].shims=[]);var Oa=Ra[Ji],La=[],Fa=function(){ii.removeEventListener("DOMContentLoaded",Fa),Da=1,La.map(function(e){return e()})},Da=!1;function _a(e){var t=e.tag,r=e.attributes,n=void 0===r?{}:r,o=e.children,i=void 0===o?[]:o;return"string"==typeof e?Aa(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(Aa(e[r]),'" ')},"").trim()}(n),">").concat(i.map(_a).join(""),"</").concat(t,">")}function Ha(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}ci&&((Da=(ii.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ii.readyState))||ii.addEventListener("DOMContentLoaded",Fa));var Ba=function(e,t,r,n){var o,i,a,s=Object.keys(e),l=s.length,c=void 0!==n?function(e,t){return function(r,n,o,i){return e.call(t,r,n,o,i)}}(t,n):t;for(void 0===r?(o=1,a=e[s[0]]):(o=0,a=r);o<l;o++)a=c(a,e[i=s[o]],i,e);return a};function Wa(e){return 1!==Go(e).length?null:e.codePointAt(0).toString(16)}function Ua(e){return Object.keys(e).reduce(function(t,r){var n=e[r];return!!n.icon?t[n.iconName]=n.icon:t[r]=n,t},{})}function Ya(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,n=void 0!==r&&r,o=Ua(t);"function"!=typeof Oa.hooks.addPack||n?Oa.styles[e]=Yo(Yo({},Oa.styles[e]||{}),o):Oa.hooks.addPack(e,Ua(t)),"fas"===e&&Ya("fa",t)}var qa=Oa.styles,Ga=Oa.shims,Ja=Object.keys(da),Va=Ja.reduce(function(e,t){return e[t]=Object.keys(da[t]),e},{}),Xa=null,Ka={},Qa={},Za={},es={},ts={};function rs(e,t){var r,n=t.split("-"),o=n[0],i=n.slice(1).join("-");return o!==e||""===i||(r=i,~xa.indexOf(r))?null:i}var ns,os=function(){var e=function(e){return Ba(qa,function(t,r,n){return t[n]=Ba(r,e,{}),t},{})};Ka=e(function(e,t,r){(t[3]&&(e[t[3]]=r),t[2])&&t[2].filter(function(e){return"number"==typeof e}).forEach(function(t){e[t.toString(16)]=r});return e}),Qa=e(function(e,t,r){(e[r]=r,t[2])&&t[2].filter(function(e){return"string"==typeof e}).forEach(function(t){e[t]=r});return e}),ts=e(function(e,t,r){var n=t[2];return e[r]=r,n.forEach(function(t){e[t]=r}),e});var t="far"in qa||wa.autoFetchSvg,r=Ba(Ga,function(e,r){var n=r[0],o=r[1],i=r[2];return"far"!==o||t||(o="fas"),"string"==typeof n&&(e.names[n]={prefix:o,iconName:i}),"number"==typeof n&&(e.unicodes[n.toString(16)]={prefix:o,iconName:i}),e},{names:{},unicodes:{}});Za=r.names,es=r.unicodes,Xa=cs(wa.styleDefault,{family:wa.familyDefault})};function is(e,t){return(Ka[e]||{})[t]}function as(e,t){return(ts[e]||{})[t]}function ss(e){return Za[e]||{prefix:null,iconName:null}}function ls(){return Xa}ns=function(e){Xa=cs(e.styleDefault,{family:wa.familyDefault})},ja.push(ns),os();function cs(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).family,r=void 0===t?pi:t,n=aa[r][e];if(r===hi&&!e)return"fad";var o=la[r][e]||la[r][n],i=e in Oa.styles?e:null;return o||i||null}function ds(e){return e.sort().filter(function(e,t,r){return r.indexOf(e)===t})}var us=Ui.concat(Ei);function fs(e){var t,r,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).skipLookups,o=void 0!==n&&n,i=null,a=ds(e.filter(function(e){return us.includes(e)})),s=ds(e.filter(function(e){return!us.includes(e)})),l=qo(a.filter(function(e){return i=e,!fi.includes(e)}),1)[0],c=void 0===l?null:l,d=function(e){var t=pi,r=Ja.reduce(function(e,t){return e[t]="".concat(wa.cssPrefix,"-").concat(t),e},{});return Ii.forEach(function(n){(e.includes(r[n])||e.some(function(e){return Va[n].includes(e)}))&&(t=n)}),t}(a),u=Yo(Yo({},(t=[],r=null,s.forEach(function(e){var n=rs(wa.cssPrefix,e);n?r=n:e&&t.push(e)}),{iconName:r,rest:t})),{},{prefix:cs(c,{family:d})});return Yo(Yo(Yo({},u),function(e){var t=e.values,r=e.family,n=e.canonical,o=e.givenPrefix,i=void 0===o?"":o,a=e.styles,s=void 0===a?{}:a,l=e.config,c=void 0===l?{}:l,d=r===hi,u=t.includes("fa-duotone")||t.includes("fad"),f="duotone"===c.familyDefault,p="fad"===n.prefix||"fa-duotone"===n.prefix;!d&&(u||f||p)&&(n.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab");if(!n.prefix&&ps.includes(r)){if(Object.keys(s).find(function(e){return hs.includes(e)})||c.autoFetchSvg){var h=Ni.get(r).defaultShortPrefixId;n.prefix=h,n.iconName=as(n.prefix,n.iconName)||n.iconName}}"fa"!==n.prefix&&"fa"!==i||(n.prefix=ls()||"fas");return n}({values:e,family:d,styles:qa,config:wa,canonical:u,givenPrefix:i})),function(e,t,r){var n=r.prefix,o=r.iconName;if(e||!n||!o)return{prefix:n,iconName:o};var i="fa"===t?ss(o):{},a=as(n,o);o=i.iconName||a||o,"far"!==(n=i.prefix||n)||qa.far||!qa.fas||wa.autoFetchSvg||(n="fas");return{prefix:n,iconName:o}}(o,i,u))}var ps=Ii.filter(function(e){return e!==pi||e!==hi}),hs=Object.keys(Wi).filter(function(e){return e!==pi}).map(function(e){return Object.keys(Wi[e])}).flat();var ms=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}},t=[{key:"add",value:function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(t){e.definitions[t]=Yo(Yo({},e.definitions[t]||{}),o[t]),Ya(t,o[t]);var r=da[pi][t];r&&Ya(r,o[t]),os()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(t){var n=r[t],o=n.prefix,i=n.iconName,a=n.icon,s=a[2];e[o]||(e[o]={}),s.length>0&&s.forEach(function(t){"string"==typeof t&&(e[o][t]=a)}),e[o][i]=a}),e}}],t&&Ho(e.prototype,t),r&&Ho(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}(),gs=[],xs={},vs={},ys=Object.keys(vs);function bs(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return(xs[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function ws(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];(xs[e]||[]).forEach(function(e){e.apply(null,r)})}function js(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return vs[e]?vs[e].apply(null,t):void 0}function ks(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,r=e.prefix||ls();if(t)return t=as(r,t)||t,Ha(Ss.definitions,r,t)||Ha(Oa.styles,r,t)}var Ss=new ms,$s={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ci?(ws("beforeI2svg",e),js("pseudoElements2svg",e),js("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.autoReplaceSvgRoot;!1===wa.autoReplaceSvg&&(wa.autoReplaceSvg=!0),wa.observeMutations=!0,e=function(){zs({autoReplaceSvgRoot:r}),ws("watch",t)},ci&&(Da?setTimeout(e,0):La.push(e))}},Cs={noAuto:function(){wa.autoReplaceSvg=!1,wa.observeMutations=!1,ws("noAuto")},config:wa,dom:$s,parse:{icon:function(e){if(null===e)return null;if("object"===Vo(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:as(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],r=cs(e[0]);return{prefix:r,iconName:as(r,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(wa.cssPrefix,"-"))>-1||e.match(fa))){var n=fs(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||ls(),iconName:as(n.prefix,n.iconName)||n.iconName}}if("string"==typeof e){var o=ls();return{prefix:o,iconName:as(o,e)||e}}}},library:Ss,findIconDefinition:ks,toHtml:_a},zs=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,t=void 0===e?ii:e;(Object.keys(Oa.styles).length>0||wa.autoFetchSvg)&&ci&&wa.autoReplaceSvg&&Cs.dom.i2svg({node:t})};function As(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return _a(e)})}}),Object.defineProperty(e,"node",{get:function(){if(ci){var t=ii.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Ts(e){var t=e.icons,r=t.main,n=t.mask,o=e.prefix,i=e.iconName,a=e.transform,s=e.symbol,l=e.maskId,c=e.extra,d=e.watchable,u=void 0!==d&&d,f=n.found?n:r,p=f.width,h=f.height,m=[wa.replacementClass,i?"".concat(wa.cssPrefix,"-").concat(i):""].filter(function(e){return-1===c.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(c.classes).join(" "),g={children:[],attributes:Yo(Yo({},c.attributes),{},{"data-prefix":o,"data-icon":i,class:m,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(h)})};(function(e){return["aria-label","aria-labelledby","title","role"].some(function(t){return t in e})})(c.attributes)||c.attributes["aria-hidden"]||(g.attributes["aria-hidden"]="true"),u&&(g.attributes[Xi]="");var x=Yo(Yo({},g),{},{prefix:o,iconName:i,main:r,mask:n,maskId:l,transform:a,symbol:s,styles:Yo({},c.styles)}),v=n.found&&r.found?js("generateAbstractMask",x)||{children:[],attributes:{}}:js("generateAbstractIcon",x)||{children:[],attributes:{}},y=v.children,b=v.attributes;return x.children=y,x.attributes=b,s?function(e){var t=e.prefix,r=e.iconName,n=e.children,o=e.attributes,i=e.symbol,a=!0===i?"".concat(t,"-").concat(wa.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Yo(Yo({},o),{},{id:a}),children:n}]}]}(x):function(e){var t=e.children,r=e.main,n=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(Pa(a)&&r.found&&!n.found){var s={x:r.width/r.height/2,y:.5};o.style=Ta(Yo(Yo({},i),{},{"transform-origin":"".concat(s.x+a.x/16,"em ").concat(s.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}(x)}function Ps(e){var t=e.content,r=e.width,n=e.height,o=e.transform,i=e.extra,a=e.watchable,s=void 0!==a&&a,l=Yo(Yo({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[Xi]="");var c=Yo({},i.styles);Pa(o)&&(c.transform=function(e){var t=e.transform,r=e.width,n=void 0===r?16:r,o=e.height,i=void 0===o?16:o,a=e.startCentered,s=void 0!==a&&a,l="";return l+=s&&di?"translate(".concat(t.x/ka-n/2,"em, ").concat(t.y/ka-i/2,"em) "):s?"translate(calc(-50% + ".concat(t.x/ka,"em), calc(-50% + ").concat(t.y/ka,"em)) "):"translate(".concat(t.x/ka,"em, ").concat(t.y/ka,"em) "),l+="scale(".concat(t.size/ka*(t.flipX?-1:1),", ").concat(t.size/ka*(t.flipY?-1:1),") "),l+"rotate(".concat(t.rotate,"deg) ")}({transform:o,startCentered:!0,width:r,height:n}),c["-webkit-transform"]=c.transform);var d=Ta(c);d.length>0&&(l.style=d);var u=[];return u.push({tag:"span",attributes:l,children:[t]}),u}var Is=Oa.styles;function Ns(e){var t=e[0],r=e[1],n=qo(e.slice(4),1)[0];return{found:!0,width:t,height:r,icon:Array.isArray(n)?{tag:"g",attributes:{class:"".concat(wa.cssPrefix,"-").concat(ga.GROUP)},children:[{tag:"path",attributes:{class:"".concat(wa.cssPrefix,"-").concat(ga.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(wa.cssPrefix,"-").concat(ga.PRIMARY),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}}}}var Es={found:!1,width:512,height:512};function Ms(e,t){var r=t;return"fa"===t&&null!==wa.styleDefault&&(t=ls()),new Promise(function(n,o){if("fa"===r){var i=ss(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Is[t]&&Is[t][e])return n(Ns(Is[t][e]));!function(e,t){na||wa.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),n(Yo(Yo({},Es),{},{icon:wa.showMissingIcons&&e&&js("missingIconAbstract")||{}}))})}var Rs=function(){},Os=wa.measurePerformance&&si&&si.mark&&si.measure?si:{mark:Rs,measure:Rs},Ls='FA "7.1.0"',Fs=function(e){Os.mark("".concat(Ls," ").concat(e," ends")),Os.measure("".concat(Ls," ").concat(e),"".concat(Ls," ").concat(e," begins"),"".concat(Ls," ").concat(e," ends"))},Ds=function(e){return Os.mark("".concat(Ls," ").concat(e," begins")),function(){return Fs(e)}},_s=function(){};function Hs(e){return"string"==typeof(e.getAttribute?e.getAttribute(Xi):null)}function Bs(e){return ii.createElementNS("http://www.w3.org/2000/svg",e)}function Ws(e){return ii.createElement(e)}function Us(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ceFn,r=void 0===t?"svg"===e.tag?Bs:Ws:t;if("string"==typeof e)return ii.createTextNode(e);var n=r(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(Us(e,{ceFn:r}))}),n}var Ys={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Us(e),t)}),null===t.getAttribute(Xi)&&wa.keepOriginalSource){var r=ii.createComment(function(e){var t=" ".concat(e.outerHTML," ");return"".concat(t,"Font Awesome fontawesome.com ")}(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){var t=e[0],r=e[1];if(~za(t).indexOf(wa.replacementClass))return Ys.replace(e);var n=new RegExp("".concat(wa.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(e,t){return t===wa.replacementClass||t.match(n)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),0===o.toNode.length?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var i=r.map(function(e){return _a(e)}).join("\n");t.setAttribute(Xi,""),t.innerHTML=i}};function qs(e){e()}function Gs(e,t){var r="function"==typeof t?t:_s;if(0===e.length)r();else{var n=qs;"async"===wa.mutateApproach&&(n=oi.requestAnimationFrame||qs),n(function(){var t=!0===wa.autoReplaceSvg?Ys.replace:Ys[wa.autoReplaceSvg]||Ys.replace,n=Ds("mutate");e.map(t),n(),r()})}}var Js=!1;function Vs(){Js=!0}function Xs(){Js=!1}var Ks=null;function Qs(e){if(ai&&wa.observeMutations){var t=e.treeCallback,r=void 0===t?_s:t,n=e.nodeCallback,o=void 0===n?_s:n,i=e.pseudoElementsCallback,a=void 0===i?_s:i,s=e.observeMutationsRoot,l=void 0===s?ii:s;Ks=new ai(function(e){if(!Js){var t=ls();Ca(e).forEach(function(e){if("childList"===e.type&&e.addedNodes.length>0&&!Hs(e.addedNodes[0])&&(wa.searchPseudoElements&&a(e.target),r(e.target)),"attributes"===e.type&&e.target.parentNode&&wa.searchPseudoElements&&a([e.target],!0),"attributes"===e.type&&Hs(e.target)&&~ma.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){var t=e.getAttribute?e.getAttribute(Qi):null,r=e.getAttribute?e.getAttribute(Zi):null;return t&&r}(e.target)){var n=fs(za(e.target)),i=n.prefix,s=n.iconName;e.target.setAttribute(Qi,i||t),s&&e.target.setAttribute(Zi,s)}else(l=e.target)&&l.classList&&l.classList.contains&&l.classList.contains(wa.replacementClass)&&o(e.target);var l})}}),ci&&Ks.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Zs(e){var t,r,n=e.getAttribute("data-prefix"),o=e.getAttribute("data-icon"),i=void 0!==e.innerText?e.innerText.trim():"",a=fs(za(e));return a.prefix||(a.prefix=ls()),n&&o&&(a.prefix=n,a.iconName=o),a.iconName&&a.prefix||(a.prefix&&i.length>0&&(a.iconName=(t=a.prefix,r=e.innerText,(Qa[t]||{})[r]||is(a.prefix,Wa(e.innerText)))),!a.iconName&&wa.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function el(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},r=Zs(e),n=r.iconName,o=r.prefix,i=r.rest,a=function(e){return Ca(e.attributes).reduce(function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e},{})}(e),s=bs("parseNodeAttributes",{},e),l=t.styleParser?function(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(e,t){var r=t.split(":"),n=r[0],o=r.slice(1);return n&&o.length>0&&(e[n]=o.join(":").trim()),e},{})),r}(e):[];return Yo({iconName:n,prefix:o,transform:Sa,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:a}},s)}var tl=Oa.styles;function rl(e){var t="nest"===wa.autoReplaceSvg?el(e,{styleParser:!1}):el(e);return~t.extra.classes.indexOf(pa)?js("generateLayersText",e,t):js("generateSvgReplacementMutation",e,t)}function nl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!ci)return Promise.resolve();var r=ii.documentElement.classList,n=function(e){return r.add("".concat(ea,"-").concat(e))},o=function(e){return r.remove("".concat(ea,"-").concat(e))},i=wa.autoFetchSvg?[].concat(Go(Ei),Go(Ui)):fi.concat(Object.keys(tl));i.includes("fa")||i.push("fa");var a=[".".concat(pa,":not([").concat(Xi,"])")].concat(i.map(function(e){return".".concat(e,":not([").concat(Xi,"])")})).join(", ");if(0===a.length)return Promise.resolve();var s=[];try{s=Ca(e.querySelectorAll(a))}catch(d){}if(!(s.length>0))return Promise.resolve();n("pending"),o("complete");var l=Ds("onTree"),c=s.reduce(function(e,t){try{var r=rl(t);r&&e.push(r)}catch(d){na||"MissingIcon"===d.name&&console.error(d)}return e},[]);return new Promise(function(e,r){Promise.all(c).then(function(r){Gs(r,function(){n("active"),n("complete"),o("pending"),"function"==typeof t&&t(),l(),e()})}).catch(function(e){l(),r(e)})})}function ol(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;rl(e).then(function(e){e&&Gs([e],t)})}var il=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?Sa:r,o=t.symbol,i=void 0!==o&&o,a=t.mask,s=void 0===a?null:a,l=t.maskId,c=void 0===l?null:l,d=t.classes,u=void 0===d?[]:d,f=t.attributes,p=void 0===f?{}:f,h=t.styles,m=void 0===h?{}:h;if(e){var g=e.prefix,x=e.iconName,v=e.icon;return As(Yo({type:"icon"},e),function(){return ws("beforeDOMElementCreation",{iconDefinition:e,params:t}),Ts({icons:{main:Ns(v),mask:s?Ns(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:x,transform:Yo(Yo({},Sa),n),symbol:i,maskId:c,extra:{attributes:p,styles:m,classes:u}})})}},al={mixout:function(){return{icon:(e=il,function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:ks(t||{}),o=r.mask;return o&&(o=(o||{}).icon?o:ks(o||{})),e(n,Yo(Yo({},r),{},{mask:o}))})};var e},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=nl,e.nodeCallback=ol,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,r=void 0===t?ii:t,n=e.callback;return nl(r,void 0===n?function(){}:n)},e.generateSvgReplacementMutation=function(e,t){var r=t.iconName,n=t.prefix,o=t.transform,i=t.symbol,a=t.mask,s=t.maskId,l=t.extra;return new Promise(function(t,c){Promise.all([Ms(r,n),a.iconName?Ms(a.iconName,a.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(a){var c=qo(a,2),d=c[0],u=c[1];t([e,Ts({icons:{main:d,mask:u},prefix:n,iconName:r,transform:o,symbol:i,maskId:s,extra:l,watchable:!0})])}).catch(c)})},e.generateAbstractIcon=function(e){var t,r=e.children,n=e.attributes,o=e.main,i=e.transform,a=Ta(e.styles);return a.length>0&&(n.style=a),Pa(i)&&(t=js("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),r.push(t||o.icon),{children:r,attributes:n}}}},sl={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.classes,n=void 0===r?[]:r;return As({type:"layer"},function(){ws("beforeDOMElementCreation",{assembler:e,params:t});var r=[];return e(function(e){Array.isArray(e)?e.map(function(e){r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(wa.cssPrefix,"-layers")].concat(Go(n)).join(" ")},children:r}]})}}}},ll={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.title,n=void 0===r?null:r,o=t.classes,i=void 0===o?[]:o,a=t.attributes,s=void 0===a?{}:a,l=t.styles,c=void 0===l?{}:l;return As({type:"counter",content:e},function(){return ws("beforeDOMElementCreation",{content:e,params:t}),function(e){var t=e.content,r=e.extra,n=Yo(Yo({},r.attributes),{},{class:r.classes.join(" ")}),o=Ta(r.styles);o.length>0&&(n.style=o);var i=[];return i.push({tag:"span",attributes:n,children:[t]}),i}({content:e.toString(),title:n,extra:{attributes:s,styles:c,classes:["".concat(wa.cssPrefix,"-layers-counter")].concat(Go(i))}})})}}}},cl={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?Sa:r,o=t.classes,i=void 0===o?[]:o,a=t.attributes,s=void 0===a?{}:a,l=t.styles,c=void 0===l?{}:l;return As({type:"text",content:e},function(){return ws("beforeDOMElementCreation",{content:e,params:t}),Ps({content:e,transform:Yo(Yo({},Sa),n),extra:{attributes:s,styles:c,classes:["".concat(wa.cssPrefix,"-layers-text")].concat(Go(i))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var r=t.transform,n=t.extra,o=null,i=null;if(di){var a=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();o=s.width/a,i=s.height/a}return Promise.resolve([e,Ps({content:e.innerHTML,width:o,height:i,transform:r,extra:n,watchable:!0})])}}},dl=new RegExp('"',"ug"),ul=[1105920,1112319],fl=Yo(Yo(Yo(Yo({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),pl=Object.keys(fl).reduce(function(e,t){return e[t.toLowerCase()]=fl[t],e},{}),hl=Object.keys(pl).reduce(function(e,t){var r=pl[t];return e[t]=r[900]||Go(Object.entries(r))[0][1],e},{});function ml(e,t){var r="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(function(n,o){if(null!==e.getAttribute(r))return n();var i,a,s,l=Ca(e.children).filter(function(e){return e.getAttribute(Ki)===t})[0],c=oi.getComputedStyle(e,t),d=c.getPropertyValue("font-family"),u=d.match(ha),f=c.getPropertyValue("font-weight"),p=c.getPropertyValue("content");if(l&&!u)return e.removeChild(l),n();if(u&&"none"!==p&&""!==p){var h=c.getPropertyValue("content"),m=function(e,t){var r=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),o=isNaN(n)?"normal":n;return(pl[r]||{})[o]||hl[r]}(d,f),g=function(e){return Wa(Go(e.replace(dl,""))[0]||"")}(h),x=u[0].startsWith("FontAwesome"),v=function(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),r=e.getPropertyValue("content").replace(dl,""),n=r.codePointAt(0),o=n>=ul[0]&&n<=ul[1],i=2===r.length&&r[0]===r[1];return o||i||t}(c),y=is(m,g),b=y;if(x){var w=(a=es[i=g],s=is("fas",i),a||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null});w.iconName&&w.prefix&&(y=w.iconName,m=w.prefix)}if(!y||v||l&&l.getAttribute(Qi)===m&&l.getAttribute(Zi)===b)n();else{e.setAttribute(r,b),l&&e.removeChild(l);var j={iconName:null,prefix:null,transform:Sa,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},k=j.extra;k.attributes[Ki]=t,Ms(y,m).then(function(o){var i=Ts(Yo(Yo({},j),{},{icons:{main:o,mask:{prefix:null,iconName:null,rest:[]}},prefix:m,iconName:b,extra:k,watchable:!0})),a=ii.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(a,e.firstChild):e.appendChild(a),a.outerHTML=i.map(function(e){return _a(e)}).join("\n"),e.removeAttribute(r),n()}).catch(o)}}else n()})}function gl(e){return Promise.all([ml(e,"::before"),ml(e,"::after")])}function xl(e){return!(e.parentNode===document.head||~ta.indexOf(e.tagName.toUpperCase())||e.getAttribute(Ki)||e.parentNode&&"svg"===e.parentNode.tagName)}var vl=function(e){return!!e&&ra.some(function(t){return e.includes(t)})},yl=function(e){if(!e)return[];var t,r=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()}),o=Bo(n=n.flatMap(function(e){return e.includes("(")?e:e.split(",").map(function(e){return e.trim()})}));try{for(o.s();!(t=o.n()).done;){var i=t.value;if(vl(i)){var a=ra.reduce(function(e,t){return e.replace(t,"")},i);""!==a&&"*"!==a&&r.add(a)}}}catch(s){o.e(s)}finally{o.f()}return r};function bl(e){if(ci){var t;if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])t=e;else if(wa.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r,n=new Set,o=Bo(document.styleSheets);try{for(o.s();!(r=o.n()).done;){var i=r.value;try{var a,s=Bo(i.cssRules);try{for(s.s();!(a=s.n()).done;){var l,c=a.value,d=Bo(yl(c.selectorText));try{for(d.s();!(l=d.n()).done;){var u=l.value;n.add(u)}}catch(p){d.e(p)}finally{d.f()}}}catch(p){s.e(p)}finally{s.f()}}catch(h){wa.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(h.message,')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))}}}catch(p){o.e(p)}finally{o.f()}if(!n.size)return;var f=Array.from(n).join(", ");try{t=e.querySelectorAll(f)}catch(m){}}return new Promise(function(e,r){var n=Ca(t).filter(xl).map(gl),o=Ds("searchPseudoElements");Vs(),Promise.all(n).then(function(){o(),Xs(),e()}).catch(function(){o(),Xs(),r()})})}}var wl=!1,jl=function(e){return e.toLowerCase().split(" ").reduce(function(e,t){var r=t.toLowerCase().split("-"),n=r[0],o=r.slice(1).join("-");if(n&&"h"===o)return e.flipX=!0,e;if(n&&"v"===o)return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(n){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},kl={mixout:function(){return{parse:{transform:function(e){return jl(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-transform");return r&&(e.transform=jl(r)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,r=e.transform,n=e.containerWidth,o=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(32*r.x,", ").concat(32*r.y,") "),s="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),c={outer:i,inner:{transform:"".concat(a," ").concat(s," ").concat(l)},path:{transform:"translate(".concat(o/2*-1," -256)")}};return{tag:"g",attributes:Yo({},c.outer),children:[{tag:"g",attributes:Yo({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:Yo(Yo({},t.icon.attributes),c.path)}]}]}}}},Sl={x:0,y:0,width:"100%",height:"100%"};function $l(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var Cl,zl={hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-mask"),n=r?fs(r.split(" ").map(function(e){return e.trim()})):{prefix:null,iconName:null,rest:[]};return n.prefix||(n.prefix=ls()),e.mask=n,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t,r=e.children,n=e.attributes,o=e.main,i=e.mask,a=e.maskId,s=e.transform,l=o.width,c=o.icon,d=i.width,u=i.icon,f=function(e){var t=e.transform,r=e.containerWidth,n=e.iconWidth,o={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:o,inner:{transform:"".concat(i," ").concat(a," ").concat(s)},path:{transform:"translate(".concat(n/2*-1," -256)")}}}({transform:s,containerWidth:d,iconWidth:l}),p={tag:"rect",attributes:Yo(Yo({},Sl),{},{fill:"white"})},h=c.children?{children:c.children.map($l)}:{},m={tag:"g",attributes:Yo({},f.inner),children:[$l(Yo({tag:c.tag,attributes:Yo(Yo({},c.attributes),f.path)},h))]},g={tag:"g",attributes:Yo({},f.outer),children:[m]},x="mask-".concat(a||$a()),v="clip-".concat(a||$a()),y={tag:"mask",attributes:Yo(Yo({},Sl),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(t=u,"g"===t.tag?t.children:[t])},y]};return r.push(b,{tag:"rect",attributes:Yo({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")")},Sl)}),{children:r,attributes:n}}}};Cl={mixoutsTo:Cs}.mixoutsTo,gs=[Ma,al,sl,ll,cl,{hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=bl,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,r=void 0===t?ii:t;wa.searchPseudoElements&&bl(r)}}},{mixout:function(){return{dom:{unwatch:function(){Vs(),wl=!0}}}},hooks:function(){return{bootstrap:function(){Qs(bs("mutationObserverCallbacks",{}))},noAuto:function(){Ks&&Ks.disconnect()},watch:function(e){var t=e.observeMutationsRoot;wl?Xs():Qs(bs("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},kl,zl,{provides:function(e){var t=!1;oi.matchMedia&&(t=oi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:Yo(Yo({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Yo(Yo({},n),{},{attributeName:"opacity"}),i={tag:"circle",attributes:Yo(Yo({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:Yo(Yo({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Yo(Yo({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(i),e.push({tag:"path",attributes:Yo(Yo({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Yo(Yo({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:Yo(Yo({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Yo(Yo({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-symbol"),n=null!==r&&(""===r||r);return e.symbol=n,e}}}}],xs={},Object.keys(vs).forEach(function(e){-1===ys.indexOf(e)&&delete vs[e]}),gs.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){"function"==typeof t[e]&&(Cl[e]=t[e]),"object"===Vo(t[e])&&Object.keys(t[e]).forEach(function(r){Cl[e]||(Cl[e]={}),Cl[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){xs[e]||(xs[e]=[]),xs[e].push(r[e])})}e.provides&&e.provides(vs)});var Al=Cs.config,Tl=Cs.parse,Pl=Cs.icon;function Il(e){return t=e,(t-=0)==t?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():"")).charAt(0).toLowerCase()+e.slice(1);var t}function Nl(e){return e.charAt(0).toUpperCase()+e.slice(1)}var El=new Map;function Ml(e){if(El.has(e))return El.get(e);const t={};let r=0;const n=e.length;for(;r<n;){const o=e.indexOf(";",r),i=-1===o?n:o,a=e.slice(r,i).trim();if(a){const e=a.indexOf(":");if(e>0){const r=a.slice(0,e).trim(),n=a.slice(e+1).trim();if(r&&n){const e=Il(r);t[e.startsWith("webkit")?Nl(e):e]=n}}}r=i+1}if(1e3===El.size){const e=El.keys().next().value;e&&El.delete(e)}return El.set(e,t),t}var Rl=function e(t,r,n={}){if("string"==typeof r)return r;const o=(r.children||[]).map(r=>e(t,r)),i=r.attributes||{},a={};for(const[d,u]of Object.entries(i))switch(!0){case"class"===d:a.className=u;break;case"style"===d:a.style=Ml(String(u));break;case d.startsWith("aria-"):case d.startsWith("data-"):a[d.toLowerCase()]=u;break;default:a[Il(d)]=u}const{style:s,"aria-label":l,...c}=n;return s&&(a.style=a.style?{...a.style,...s}:s),l&&(a["aria-label"]=l,a["aria-hidden"]="false"),t(r.tag,{...c,...a},...o)}.bind(null,r.createElement),Ol=(t,r)=>{const n=e.useId();return t||(r?n:void 0)},Ll="searchPseudoElementsFullScan"in Al?"7.0.0":"6.0.0",Fl=Number.parseInt(Ll)>=7,Dl="fa",_l="fa-beat",Hl="fa-fade",Bl="fa-beat-fade",Wl="fa-bounce",Ul="fa-shake",Yl="fa-spin",ql="fa-spin-pulse",Gl="fa-spin-reverse",Jl="fa-pulse",Vl={left:"fa-pull-left",right:"fa-pull-right"},Xl={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Kl={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Ql="fa-border",Zl="fa-fw",ec="fa-flip",tc="fa-flip-horizontal",rc="fa-flip-vertical",nc="fa-inverse",oc="fa-rotate-by",ic="fa-swap-opacity",ac="fa-width-auto";function sc(e){const t=Al.cssPrefix||Al.familyPrefix||Dl;return t===Dl?e:e.replace(new RegExp(`(?<=^|\\s)${Dl}-`,"g"),`${t}-`)}function lc(e){if(e)return(e=>"object"==typeof e&&"icon"in e&&!!e.icon)(e)?e:Tl.icon(e)}var cc=new class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t="undefined"!=typeof process&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}}("FontAwesomeIcon"),dc={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},uc=new Set(Object.keys(dc)),fc=r.forwardRef((e,t)=>{const r={...dc,...e},{icon:n,mask:o,symbol:i,title:a,titleId:s,maskId:l,transform:c}=r,d=Ol(l,Boolean(o)),u=Ol(s,Boolean(a)),f=lc(n);if(!f)return cc.error("Icon lookup is undefined",n),null;const p=function(e){const{beat:t,fade:r,beatFade:n,bounce:o,shake:i,spin:a,spinPulse:s,spinReverse:l,pulse:c,fixedWidth:d,inverse:u,border:f,flip:p,size:h,rotation:m,pull:g,swapOpacity:x,rotateBy:v,widthAuto:y,className:b}=e,w=[];return b&&w.push(...b.split(" ")),t&&w.push(_l),r&&w.push(Hl),n&&w.push(Bl),o&&w.push(Wl),i&&w.push(Ul),a&&w.push(Yl),l&&w.push(Gl),s&&w.push(ql),c&&w.push(Jl),d&&w.push(Zl),u&&w.push(nc),f&&w.push(Ql),!0===p&&w.push(ec),"horizontal"!==p&&"both"!==p||w.push(tc),"vertical"!==p&&"both"!==p||w.push(rc),null!=h&&w.push(Kl[h]),null!=m&&0!==m&&w.push(Xl[m]),null!=g&&w.push(Vl[g]),x&&w.push(ic),Fl?(v&&w.push(oc),y&&w.push(ac),(Al.cssPrefix||Al.familyPrefix||Dl)===Dl?w:w.map(sc)):w}(r),h="string"==typeof c?Tl.transform(c):c,m=lc(o),g=Pl(f,{...p.length>0&&{classes:p},...h&&{transform:h},...m&&{mask:m},symbol:i,title:a,titleId:u,maskId:d});if(!g)return cc.error("Could not find icon",f),null;const{abstract:x}=g,v={ref:t};for(const y of function(e){return Object.keys(e)}(r))uc.has(y)||(v[y]=r[y]);return Rl(x[0],v)});fc.displayName="FontAwesomeIcon";
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
var pc={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},hc={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},mc={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},gc={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},xc={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},vc={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},yc={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},bc={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z"]},wc={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z"]};const jc=()=>{var t,r,n;o();const{isLoading:i,startLoading:a,stopLoading:s}=ie(),l=Rn(),c=(null==l?void 0:l.currentBoard)||Array(9).fill().map(()=>Array(9).fill(0)),d=(null==l?void 0:l.originalPuzzle)||null,u=(null==l?void 0:l.selectedCell)||null,f=(null==l?void 0:l.difficulty)||"medium",p=(null==l?void 0:l.timeElapsed)||0,h=(null==l?void 0:l.errorCount)||0,m=(null==l?void 0:l.isTimerActive)??!0,g=(null==l?void 0:l.isPencilMode)??!1,x=(null==l?void 0:l.setSelectedCell)||(()=>{}),v=(null==l?void 0:l.setHighlightedCells)||(()=>{}),b=(null==l?void 0:l.setDifficulty)||(()=>{});null==l||l.setBoard,null==l||l.setSolution,null==l||l.generateNewPuzzle;const w=(null==l?void 0:l.togglePencilMode)||(()=>{}),j=(null==l?void 0:l.toggleTimer)||(()=>{}),k=(null==l?void 0:l.getHint)||(()=>{}),S=(null==l?void 0:l.identifyTechniques)||(()=>[]),$=(null==l?void 0:l.openSettings)||(()=>{}),C=(null==l?void 0:l.fillCell)||(()=>{}),z=(null==l?void 0:l.fillAllCandidates)||(()=>{}),A=(null==l?void 0:l.undo)||(()=>{}),T=(null==l?void 0:l.solution)||Array(9).fill().map(()=>Array(9).fill(0)),P=(null==l?void 0:l.highlightedCells)||[],I=(null==l?void 0:l.pencilNotes)||[],N=(()=>{const e={};for(let t=1;t<=9;t++)e[t]=9;for(let t=0;t<9;t++)for(let r=0;r<9;r++){const n=c[t][r];0!==n&&T[t][r]===n&&e[n]--}return e})(),[E,M]=e.useState(window.innerHeight>window.innerWidth),[R,O]=e.useState(!1),[L,F]=e.useState(!1),[D,_]=e.useState(!1),H=e.useRef(null);e.useRef(null);const B=e.useRef(null);e.useEffect(()=>{const e=()=>{const e=window.innerWidth<992,t=window.innerHeight>window.innerWidth;M(e&&t)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]);const W=e=>{const t=e.target.closest("div[row]")||e.target.closest("div[col]"),r=e.target.closest(".board-container"),n=e.target.closest(".controls-container"),o=e.target.closest(".nav-block"),i=e.target.closest(".display-block");t||r||n||o||i||(x(null),(null==l?void 0:l.setHighlightedCells)&&l.setHighlightedCells([]))};e.useEffect(()=>{const e=B.current;return e&&e.addEventListener("click",W),()=>{e&&e.removeEventListener("click",W)}},[u]);const U=(e,t)=>{x({row:e,col:t}),(null==l?void 0:l.setHighlightedCells)&&l.setHighlightedCells([])},Y=e=>{const t=Math.floor(e/3600),r=Math.floor(e%3600/60),n=e%60;return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`},q=()=>({easy:"简单",medium:"中等",hard:"困难"}[f]||f),G=e=>{try{if(!u){const t=[];for(let r=0;r<9;r++)for(let n=0;n<9;n++){const o=c&&c[r]?c[r][n]:0,i=d&&d[r]&&d[r][n]===e,a=o===e&&(null==l?void 0:l.lockedCells)&&l.lockedCells.has(`${r}-${n}`);(i||a)&&e>0&&t.push({row:r,col:n,number:e})}return void((null==l?void 0:l.setHighlightedCells)&&l.setHighlightedCells(t))}if(d&&d[u.row]&&0!==d[u.row][u.col])return void x(null);const t=`${u.row}-${u.col}`;if((null==l?void 0:l.lockedCells)&&l.lockedCells.has(t))return void x(null);C(u.row,u.col,e)}catch(t){console.error("Error updating cell:",t)}},J=()=>{if(u)try{(null==l?void 0:l.clearCell)?l.clearCell(u.row,u.col):console.warn("clearCell function not available in context")}catch(e){console.error("Error clearing cell:",e)}},V=()=>{console.log("handleNewGame 被调用"),O(!0),console.log("设置 showDifficultyModal 为 true")};e.useEffect(()=>{if(!c||c.every(e=>e.every(e=>0===e))){(async()=>{try{a&&a("加载游戏..."),console.log("直接使用本地预设谜题初始化游戏");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];(null==l?void 0:l.setCurrentBoard)&&(null==l?void 0:l.setOriginalPuzzle)&&(null==l?void 0:l.setSolution)?(l.setCurrentBoard(e),l.setOriginalPuzzle(e),l.setSolution(t)):(console.log("尝试使用上下文的其他方法初始化游戏"),(null==l?void 0:l.startNewGame)?await l.startNewGame(null,f):(null==l?void 0:l.generateNewPuzzle)&&await l.generateNewPuzzle(f))}catch(e){console.error("初始化游戏失败:",e),console.error("错误详情:",e.message,e.stack)}finally{s&&s()}})()}},[]);const X=()=>{j&&j()},Q=e.useCallback(async()=>{if(x(null),k)try{const e=await k();e&&void 0!==e.row&&void 0!==e.col&&void 0!==e.value&&(v([[e.row,e.col]]),K.info(`提示：在(${e.row+1},${e.col+1})填入${e.value}`,{position:"top-right",autoClose:2e3}))}catch(e){console.error("获取提示失败:",e)}},[k,v,x]),Z=e.useCallback(()=>{x(null);const e=S();e.length>0?K.info(`找到${e.length}个可用技巧，可在技巧标签页中查看详情`,{position:"top-right",autoClose:2e3}):K.info("当前棋盘没有找到可用技巧，请尝试其他解法或获取提示",{position:"top-right",autoClose:2e3})},[S,x]),ee=()=>{z&&(z(),_(!0),setTimeout(()=>_(!1),2e3))},te=()=>{w&&(w(),F(!0),setTimeout(()=>F(!1),2e3))},re=()=>{$&&$()};return y.jsxs("div",{className:"sudoku-game-container",ref:B,children:[!m&&!(null==l?void 0:l.gameCompleted)&&y.jsx("div",{className:"pause-overlay",onClick:X,children:y.jsxs("div",{className:"pause-message",children:[y.jsx("h2",{children:"游戏已暂停"}),y.jsx("p",{children:"点击任意位置继续游戏"})]})}),y.jsx("div",{className:"main-content",children:E?y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"scroll-hint"}),y.jsx(Fo,{errorCount:h,difficulty:q(),time:Y(p)}),y.jsx("div",{className:"nav-block",children:y.jsx(No,{onNewGame:V,onPauseTimer:X,onGetHint:Q,onShowTechniques:Z,onToggleNotes:ee,onSettings:re,isNotesMode:g,isTimerActive:m,gameCompleted:(null==l?void 0:l.gameCompleted)||!1})}),y.jsxs("div",{className:"board-container",ref:H,onClick:e=>e.stopPropagation(),style:{position:"relative"},children:[y.jsx(lo,{board:c||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:d,selectedCell:u,highlightedCells:((null==l?void 0:l.highlightedCells)||[]).filter(e=>!e.techniqueIndicator),incorrectCells:(null==l?void 0:l.incorrectCells)||new Set,onCellClick:U,isPencilMode:g,pencilNotes:(null==l?void 0:l.pencilNotes)||[]}),y.jsx(Do,{highlightedCells:((null==l?void 0:l.highlightedCells)||[]).filter(e=>e.techniqueIndicator),boardWidth:(null==(t=H.current)?void 0:t.offsetWidth)||450,boardHeight:(null==(r=H.current)?void 0:r.offsetHeight)||450,isPortrait:E})]}),y.jsx("div",{className:"controls-container",onClick:e=>e.stopPropagation(),children:y.jsx(co,{onNumberSelect:G,onClearCell:J,onUndo:A,selectedNumber:(null==u?void 0:u.value)||null,isPencilMode:g,togglePencilMode:te,fillAllCandidates:z,remainingNumbers:N})})]}):y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"top-row",children:[y.jsx("div",{className:"nav-block",children:y.jsx(No,{onNewGame:V,onPauseTimer:X,onGetHint:Q,onShowTechniques:Z,onToggleNotes:ee,onSettings:re,isNotesMode:g,isTimerActive:m})}),y.jsxs("div",{className:"display-block",children:[y.jsxs("div",{children:["错误：",y.jsx("span",{className:"value error-count",style:{color:"#ff4d4d"},children:h})]}),y.jsx("div",{children:q()}),y.jsx("div",{children:Y(p)})]})]}),y.jsxs("div",{className:"bottom-row",children:[y.jsxs("div",{className:"board-container",ref:H,onClick:e=>e.stopPropagation(),style:{position:"relative"},children:[y.jsx(lo,{board:c||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:d,selectedCell:u,highlightedCells:P.filter(e=>!e.techniqueIndicator),incorrectCells:(null==l?void 0:l.incorrectCells)||new Set,onCellClick:U,isPencilMode:g,pencilNotes:I}),y.jsx(Do,{highlightedCells:P.filter(e=>e.techniqueIndicator),boardWidth:(null==(n=H.current)?void 0:n.offsetWidth)||450,isPortrait:E})]}),y.jsx("div",{className:"controls-container",onClick:e=>e.stopPropagation(),children:y.jsx(co,{onNumberSelect:G,onClearCell:J,onUndo:A,selectedNumber:(null==u?void 0:u.value)||null,isPencilMode:g,togglePencilMode:te,fillAllCandidates:z,remainingNumbers:N})})]})]})}),i&&y.jsx("div",{className:"loading-overlay",children:y.jsx("div",{children:"加载中..."})}),y.jsx(wo,{isOpen:R,onClose:()=>O(!1),onSelectDifficulty:async e=>{try{if(console.log(`handleDifficultySelect 被调用，选择难度: ${e}`),O(!1),console.log("关闭难度选择模态框"),a&&(a("生成新谜题..."),console.log("显示加载状态")),console.log("sudokuContext 可用:",!!l),console.log("startNewGame 方法可用:",!!(null==l?void 0:l.startNewGame)),console.log("generateNewPuzzle 方法可用:",!!(null==l?void 0:l.generateNewPuzzle)),null==l?void 0:l.startNewGame)console.log("调用 startNewGame 方法"),await l.startNewGame(null,e),console.log("startNewGame 调用完成");else if(null==l?void 0:l.generateNewPuzzle)console.log("调用 generateNewPuzzle 方法"),await l.generateNewPuzzle(e),console.log("generateNewPuzzle 调用完成");else{console.warn("无法开始新游戏：上下文函数不可用"),console.log("使用备用方案：离线谜题生成器"),b&&b(e);const t=(e=>{console.log(`生成离线谜题，难度: ${e}`);const t={easy:40,medium:50,hard:58,expert:64}[e]||50,r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],n=r.map(e=>[...e]);let o=t;for(;o>0;){const e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());0!==n[e][t]&&(n[e][t]=0,o--)}return{puzzle:n,solution:r}})(e);console.log("离线谜题生成完成"),(null==l?void 0:l.setCurrentBoard)&&(null==l?void 0:l.setCurrentPuzzle)&&(null==l?void 0:l.setSolution)&&(console.log("设置谜题到上下文"),l.setCurrentPuzzle(t),l.setCurrentBoard(t.puzzle),l.setSolution(t.solution)),x(null),console.log("重置选中单元格")}}catch(t){console.error("Error starting new game:",t),console.error("错误详情:",t.message,t.stack)}finally{s&&(s(),console.log("隐藏加载状态"))}},initialDifficulty:f}),L&&y.jsx("div",{className:"pencil-mode-instructions",children:g?"进入铅笔模式，可以添加候选数字":"退出铅笔模式，返回正常输入"}),D&&y.jsx("div",{className:"pencil-mode-instructions",children:"已为所有空白格子计算并填充候选数"})]})},kc=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Sc=Rr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`,$c=Rr.div`
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
`,Cc=Rr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,zc=Rr.h3`
  font-size: 22px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Ac=Rr.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,Tc=Rr.p`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 15px;
`,Pc=Rr.div`
  width: 100%;
  height: 8px;
  background-color: ${e=>e.theme.background};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`,Ic=Rr.div`
  height: 100%;
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  border-radius: 4px;
  width: ${e=>e.percentage}%;
  transition: width 0.3s ease;
`,Nc=Rr.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Ec=Rr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Mc=Rr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
`,Rc=Rr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Oc=Rr.button`
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
`,Lc=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Fc=Rr.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Dc=Rr.div`
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  padding: 20px;
`,_c=Rr.ol`
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Hc=Rr.li`
  font-size: 16px;
  color: ${e=>e.theme.text};
  line-height: 1.6;
`,Bc=Rr.button`
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
`,Wc=()=>{const{theme:t}=re(),{techniquesProgress:r,incrementTechniquePractice:n}=cn(),[o,i]=e.useState(null),a=[{id:"nakedSingles",name:"唯一候选数 (Naked Single)",description:"最简单的数独技巧，当一个格子只有一个可能的数字时填入该数字。",details:{description:"唯一候选数是最基础的数独解题技巧。当一个空格子所在的行、列和3x3宫格中已经包含了除一个数字外的所有其他数字时，这个空格子只能填入剩下的那个数字。",steps:["观察一个空格子","检查该格子所在的行，列出已经存在的数字","检查该格子所在的列，列出已经存在的数字","检查该格子所在的3x3宫格，列出已经存在的数字","如果以上三个区域已经包含了除一个数字外的所有数字（1-9），则填入剩下的那个数字"],examples:"例如：一个格子所在的行包含数字1、2、3、4、5、6、7、9，所在的列包含数字1、2、3、4、5、6、8，所在的宫格包含数字1、2、3、4、5、7、8、9。那么这个格子只能填入数字8。"}},{id:"hiddenSingles",name:"隐性唯一 (Hidden Single)",description:"当一个数字只能出现在某一行、列或宫格的某个特定格子时，填入该数字。",details:{description:"隐性唯一技巧比唯一候选数稍微复杂一些。当一个数字在某一行、列或3x3宫格中只能出现在一个特定的空格子时，即使该格子可能有其他候选数，但这个数字必须填入该格子。",steps:["选择一个数字（1-9）","检查某一行，确定该数字可能的放置位置","如果在该行中，该数字只能放在一个特定格子，则填入该数字","对每一列和每个3x3宫格重复同样的检查"],examples:"例如：在某一行中，数字5只能放在某个特定格子中，尽管该格子可能还有其他候选数（如2和5），但因为数字5在该行中没有其他可能的放置位置，所以这个格子必须填入5。"}},{id:"nakedPairs",name:"数对 (Naked Pairs)",description:"当两个格子在同一区域（行、列或宫格）中具有相同的两个候选数时，可以排除该区域其他格子中这两个数字。",details:{description:"数对技巧是一种排除法技巧。当在同一行、列或3x3宫格中有两个格子都只有相同的两个候选数时，这两个数字必须分别填入这两个格子，因此可以从该区域的其他格子的候选数中排除这两个数字。",steps:["在同一行、列或3x3宫格中寻找两个格子","确认这两个格子恰好有相同的两个候选数","从该区域的其他格子的候选数中排除这两个数字"],examples:"例如：在同一行中，两个格子都只有候选数3和7。这意味着这两个数字必须分别填入这两个格子，因此该行的其他格子中不可能是3或7，可以从它们的候选数中排除这两个数字。"}},{id:"hiddenPairs",name:"隐性数对 (Hidden Pairs)",description:"当两个数字只能出现在同一区域的两个特定格子中时，可以排除这两个格子中的其他候选数。",details:{description:"隐性数对是数对的一种变体。当在同一行、列或3x3宫格中，两个特定的数字只能出现在两个特定的格子中时，这两个格子必须包含这两个数字，可以排除这两个格子中的其他候选数。",steps:["在同一行、列或3x3宫格中选择两个数字","检查这两个数字是否只能出现在该区域的两个特定格子中","如果是，则可以从这两个格子中排除所有其他候选数，只保留这两个数字"],examples:"例如：在同一行中，数字4和6只能出现在两个特定的格子中，尽管这两个格子可能有其他候选数。这意味着这两个格子必须包含数字4和6，所以可以从这两个格子中删除其他候选数。"}},{id:"pointingPairs",name:"指向对 (Pointing Pairs)",description:"当一个数字在某个3x3宫格中只能出现在同一行或同一列时，可以排除该行或列中其他宫格内该数字的可能性。",details:{description:"指向对技巧利用3x3宫格和行/列的关系进行排除。当在某个3x3宫格中，一个数字只能出现在同一行或同一列的格子中时，这个数字在该行或列的其他3x3宫格中就不能出现在相同的行或列位置。",steps:["选择一个3x3宫格","对于某个数字，检查它在该宫格中可能的位置","如果这些位置全部位于同一行或同一列","则可以从该行或列的其他3x3宫格中排除该数字出现在相同行或列位置的可能性"],examples:"例如：在某个3x3宫格中，数字2只能出现在该宫格的第一行的两个格子中。这意味着在这一行的其他3x3宫格中，数字2不能出现在第一行的位置。"}},{id:"boxLineReduction",name:"宫行列排除 (Box-Line Reduction)",description:"当一个数字在某一行或列中只能出现在同一个3x3宫格内时，可以排除该宫格中其他格子的该数字可能性。",details:{description:"宫行列排除是指向对的反向应用。当在某一行或列中，一个数字只能出现在某个特定的3x3宫格中时，可以排除该宫格中其他格子出现该数字的可能性。",steps:["选择某一行或列","对于某个数字，检查它在该行或列中可能的位置","如果这些位置全部位于同一个3x3宫格中","则可以从该3x3宫格的其他格子中排除该数字"],examples:"例如：在某一行中，数字8只能出现在该行的前三个格子（属于第一个3x3宫格）。这意味着在第一个3x3宫格中，数字8只能出现在这三个格子中，可以从该宫格的其他六个格子中排除数字8。"}}],s=e=>{const t=r[e]||{mastered:0,practiced:0};return Math.min(100,t.practiced/10*20)};return y.jsx(kc,{children:o?y.jsxs(Ec,{theme:t,children:[y.jsxs(Mc,{children:[y.jsx(Rc,{theme:t,children:o.name}),y.jsx(Oc,{onClick:()=>{i(null)},theme:t,children:"关闭"})]}),y.jsxs(Lc,{children:[y.jsxs("div",{children:[y.jsx(Fc,{theme:t,children:"技巧说明"}),y.jsx("p",{style:{fontSize:"16px",color:t.textSecondary,lineHeight:"1.6"},children:o.details.description})]}),y.jsxs("div",{children:[y.jsx(Fc,{theme:t,children:"使用步骤"}),y.jsx(_c,{children:o.details.steps.map((e,r)=>y.jsx(Hc,{theme:t,children:e},r))})]}),y.jsxs("div",{children:[y.jsx(Fc,{theme:t,children:"示例"}),y.jsx(Dc,{theme:t,children:y.jsx("p",{style:{fontSize:"16px",color:t.textSecondary,lineHeight:"1.6"},children:o.details.examples})})]}),y.jsx(Bc,{onClick:()=>{return e=o.id,n(e),void alert(`开始练习${null==(t=a.find(t=>t.id===e))?void 0:t.name}技巧！`);var e,t},theme:t,children:"开始练习"})]})]}):y.jsxs(y.Fragment,{children:[y.jsx("h2",{style:{fontSize:"32px",color:t.text,margin:0},children:"数独技巧学习"}),y.jsx("p",{style:{fontSize:"18px",color:t.textSecondary,marginBottom:"30px"},children:"点击技巧卡片了解详情，掌握各种数独解题方法"}),y.jsx(Sc,{children:a.map(e=>{const n=r[e.id]||{mastered:0,practiced:0},o=s(e.id),a=(l=e.id,s(l)>=80);var l;return y.jsxs($c,{onClick:()=>(e=>{i(e)})(e),mastered:a,theme:t,children:[y.jsxs(Cc,{children:[y.jsx(zc,{theme:t,children:e.name}),y.jsx(Ac,{mastered:a,theme:t,children:a?"已掌握":"学习中"})]}),y.jsx(Tc,{theme:t,children:e.description}),y.jsx(Pc,{theme:t,children:y.jsx(Ic,{percentage:o,mastered:a,theme:t})}),y.jsxs(Nc,{theme:t,children:[y.jsxs("span",{children:["练习次数: ",n.practiced]}),y.jsxs("span",{children:["掌握度: ",o.toFixed(0),"%"]})]})]},e.id)})})]})})},Uc=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Yc=Rr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,qc=Rr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Gc=Rr.button`
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
`,Jc=Rr.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`,Vc=Rr.button`
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
`,Xc=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Kc=Rr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
`,Qc=Rr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,Zc=Rr.h3`
  font-size: 20px;
  color: ${e=>e.theme.text};
  margin: 0;
`,ed=Rr.div`
  background-color: ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,td=Rr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
`,rd=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,nd=Rr.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,od=Rr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,id=Rr.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,ad=Rr.button`
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
`,sd=Rr.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.textSecondary};
`,ld=Rr.div`
  font-size: 72px;
  margin-bottom: 20px;
  color: ${e=>e.theme.disabled};
`,cd=Rr.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 10px;
`,dd=Rr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 20px;
`,ud=Rr.button`
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
`,fd=Rr.div`
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
`,pd=Rr.div`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,hd=Rr.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-top: 0;
  margin-bottom: 20px;
`,md=Rr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 30px;
  line-height: 1.6;
`,gd=Rr.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`,xd=()=>{const{theme:t}=re(),{userId:r}=cn(),{loadSavedGame:n}=Rn(),{executeWithLoading:o}=ie(),[i,a]=e.useState([]),[s,l]=e.useState("all"),[c,d]=e.useState(!1),[u,f]=e.useState(null);e.useEffect(()=>{p()},[]);const p=async()=>{try{await o(async()=>{const e=await un.getUserProgress(r);a(e.data||[])},"加载游戏进度中...")}catch(e){console.error("加载进度失败:",e),a(h())}},h=()=>[{id:"1",puzzleId:"puzzle-1",difficulty:"easy",startTime:"2023-10-15T14:30:00",lastUpdated:"2023-10-15T15:45:00",completed:!1,completionTime:null,filledCells:42,totalCells:81,status:"in-progress",puzzleState:[]},{id:"2",puzzleId:"puzzle-2",difficulty:"medium",startTime:"2023-10-14T09:15:00",lastUpdated:"2023-10-14T10:30:00",completed:!0,completionTime:"2023-10-14T10:30:00",filledCells:81,totalCells:81,status:"completed",puzzleState:[]},{id:"3",puzzleId:"puzzle-3",difficulty:"hard",startTime:"2023-10-13T18:00:00",lastUpdated:"2023-10-13T18:30:00",completed:!1,completionTime:null,filledCells:28,totalCells:81,status:"paused",puzzleState:[]}],m=i.filter(e=>"all"===s||("completed"===s?"completed"===e.status:"in-progress"!==s||"completed"!==e.status)),g=e=>{f(e),d(!0)},x=()=>{d(!1),f(null)},v=e=>new Date(e).toLocaleString(),b=e=>{switch(e){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";case"expert":return"专家";default:return e}};return y.jsxs(Uc,{children:[y.jsxs(Yc,{children:[y.jsx(qc,{children:"游戏进度"}),i.length>0&&y.jsx(Gc,{onClick:()=>g("clear-all"),children:"清空所有进度"})]}),i.length>0&&y.jsxs(Jc,{children:[y.jsx(Vc,{active:"all"===s,onClick:()=>l("all"),children:"全部进度"}),y.jsx(Vc,{active:"in-progress"===s,onClick:()=>l("in-progress"),children:"进行中"}),y.jsx(Vc,{active:"completed"===s,onClick:()=>l("completed"),children:"已完成"})]}),m.length>0?y.jsx(Xc,{children:m.map(e=>{return y.jsxs(Kc,{status:e.status,children:[y.jsxs(Qc,{children:[y.jsxs(Zc,{children:["数独游戏 #",e.id]}),y.jsx(ed,{status:e.status,theme:t,children:"completed"===e.status?"已完成":"in-progress"===e.status?"进行中":"已暂停"})]}),y.jsxs(td,{children:[y.jsxs(rd,{children:[y.jsx(nd,{theme:t,children:"难度"}),y.jsx(od,{theme:t,children:b(e.difficulty)})]}),y.jsxs(rd,{children:[y.jsx(nd,{theme:t,children:"开始时间"}),y.jsx(od,{theme:t,children:v(e.startTime)})]}),y.jsxs(rd,{children:[y.jsx(nd,{theme:t,children:"最后更新"}),y.jsx(od,{theme:t,children:v(e.lastUpdated)})]}),y.jsxs(rd,{children:[y.jsx(nd,{theme:t,children:"完成进度"}),y.jsxs(od,{theme:t,children:[(r=e.filledCells,a=e.totalCells,Math.round(r/a*100)),"%"]})]})]}),y.jsxs(id,{children:["completed"!==e.status&&y.jsx(ad,{type:"primary",onClick:()=>(async e=>{try{await o(async()=>{const t=i.find(t=>t.id===e);t&&(await n(t.puzzleState,t.puzzleId),window.location.href="/game")},"加载游戏中...")}catch(t){console.error("加载游戏失败:",t),alert("加载游戏失败，请稍后重试")}})(e.id),children:"继续游戏"}),y.jsx(ad,{type:"danger",onClick:()=>g(e.id),children:"删除进度"})]})]},e.id);var r,a})}):y.jsxs(sd,{children:[y.jsx(ld,{children:"📝"}),y.jsx(cd,{children:"暂无游戏进度"}),y.jsx(dd,{children:"all"!==s?"没有符合筛选条件的游戏进度":"您还没有开始任何数独游戏"}),y.jsx(ud,{onClick:()=>window.location.href="/game",children:"开始新游戏"})]}),c&&y.jsx(fd,{children:y.jsxs(pd,{children:[y.jsx(hd,{children:"clear-all"===u?"确认清空所有进度":"确认删除进度"}),y.jsx(md,{children:"clear-all"===u?"此操作将删除所有游戏进度，且无法恢复。确定要继续吗？":"此操作将删除选中的游戏进度，且无法恢复。确定要继续吗？"}),y.jsxs(gd,{children:[y.jsx(ad,{type:"secondary",onClick:x,children:"取消"}),y.jsx(ad,{type:"danger",onClick:()=>{"clear-all"===u?(async()=>{try{await o(async()=>{a([])},"清空进度中...")}catch(e){console.error("清空进度失败:",e),alert("清空进度失败，请稍后重试")}})():"string"==typeof u&&(async e=>{try{await o(async()=>{a(t=>t.filter(t=>t.id!==e))},"删除进度中...")}catch(t){console.error("删除进度失败:",t),alert("删除进度失败，请稍后重试")}})(u),x()},children:"确认删除"})]})]})})]})},vd=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,yd=Rr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,bd=Rr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`,wd=Rr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 5px solid ${e=>e.color||e.theme.primary};
`,jd=Rr.div`
  font-size: 48px;
  font-weight: 700;
  color: ${e=>e.color||e.theme.primary};
`,kd=Rr.div`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,Sd=Rr.div`
  font-size: 14px;
  color: ${e=>e.positive?e.theme.success:e.theme.error};
`,$d=Rr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Cd=Rr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,zd=Rr.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Ad=Rr.div`
  display: flex;
  gap: 10px;
`,Td=Rr.button`
  background-color: ${e=>e.active?e.theme.primary:e.theme.surface};
  color: ${e=>e.active?"white":e.theme.text};
  border: 2px solid ${e=>e.active?e.theme.primary:e.theme.border};
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`,Pd=Rr.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.textSecondary};
  font-size: 18px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
`,Id=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Nd=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Ed=Rr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Md=Rr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,Rd=Rr.span`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,Od=Rr.div`
  width: 100%;
  height: 10px;
  background-color: ${e=>e.theme.background};
  border-radius: 5px;
  overflow: hidden;
`,Ld=Rr.div`
  height: 100%;
  background-color: ${e=>{switch(e.difficulty){case"easy":return"#4CAF50";case"medium":return"#FF9800";case"hard":return"#F44336";case"expert":return"#9C27B0";default:return e.theme.primary}}};
  border-radius: 5px;
  width: ${e=>e.percentage}%;
`,Fd=Rr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Dd=Rr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
`,_d=Rr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  border-left: 4px solid ${e=>e.mastered?e.theme.success:e.theme.primary};
`,Hd=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Bd=Rr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,Wd=Rr.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Ud=Rr.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,Yd=()=>{const{theme:t}=re(),{userId:r,userStats:n,techniquesProgress:o}=cn(),{executeWithLoading:i}=ie(),[a,s]=e.useState(null),[l,c]=e.useState("all");e.useEffect(()=>{d()},[l]);const d=async()=>{try{await i(async()=>{const e=await un.getUserStatistics(r,l);s(e.data)},"加载统计数据中...")}catch(e){console.error("加载统计数据失败:",e),s(u())}},u=()=>({totalGames:42,completedGames:38,winRate:90.5,averageTime:1245,favoriteDifficulty:"medium",bestTime:420,currentStreak:5,longestStreak:12,totalPlayTime:145200,difficultyBreakdown:{easy:15,medium:20,hard:5,expert:2},recentPerformance:[{date:"2023-10-10",games:3,completed:3},{date:"2023-10-11",games:2,completed:2},{date:"2023-10-12",games:4,completed:3},{date:"2023-10-13",games:1,completed:1},{date:"2023-10-14",games:2,completed:2},{date:"2023-10-15",games:3,completed:3},{date:"2023-10-16",games:2,completed:2}]}),f=a||u(),p=o||{},h=e=>{if(!e)return"0:00";return`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`},m=()=>{if(f.totalGames)return f.totalGames;const e=f.difficultyBreakdown||{};return Object.values(e).reduce((e,t)=>e+t,0)},g=e=>{const t=p[e]||{practiced:0};return Math.min(100,t.practiced/10*20)};return y.jsxs(vd,{children:[y.jsx(yd,{theme:t,children:"我的统计"}),y.jsxs(bd,{children:[y.jsxs(wd,{color:t.primary,theme:t,children:[y.jsx(jd,{color:t.primary,theme:t,children:m()}),y.jsx(kd,{theme:t,children:"总游戏数"}),y.jsx(Sd,{positive:!0,theme:t,children:"+5 本周"})]}),y.jsxs(wd,{color:t.success,theme:t,children:[y.jsx(jd,{color:t.success,theme:t,children:f.completedGames}),y.jsx(kd,{theme:t,children:"完成游戏"}),y.jsx(Sd,{positive:!0,theme:t,children:"全部完成"})]}),y.jsxs(wd,{color:t.warning,theme:t,children:[y.jsxs(jd,{color:t.warning,theme:t,children:[f.winRate,"%"]}),y.jsx(kd,{theme:t,children:"胜率"}),y.jsx(Sd,{positive:!0,theme:t,children:"+2% 本月"})]}),y.jsxs(wd,{color:t.info,theme:t,children:[y.jsx(jd,{color:t.info,theme:t,children:h(f.averageTime)}),y.jsx(kd,{theme:t,children:"平均时间"}),y.jsx(Sd,{positive:!0,theme:t,children:"-30秒"})]}),y.jsxs(wd,{color:t.error,theme:t,children:[y.jsx(jd,{color:t.error,theme:t,children:h(f.bestTime)}),y.jsx(kd,{theme:t,children:"最佳时间"}),y.jsx(Sd,{positive:!0,theme:t,children:"记录保持中"})]}),y.jsxs(wd,{color:t.primary,theme:t,children:[y.jsx(jd,{color:t.primary,theme:t,children:f.currentStreak}),y.jsx(kd,{theme:t,children:"当前连续天数"}),y.jsx(Sd,{positive:f.currentStreak>1,theme:t,children:f.currentStreak>1?"🔥 加油！":"今天开始"})]})]}),y.jsxs($d,{theme:t,children:[y.jsxs(Cd,{children:[y.jsx(zd,{theme:t,children:"游戏进度"}),y.jsxs(Ad,{children:[y.jsx(Td,{active:"week"===l,onClick:()=>c("week"),theme:t,children:"本周"}),y.jsx(Td,{active:"month"===l,onClick:()=>c("month"),theme:t,children:"本月"}),y.jsx(Td,{active:"all"===l,onClick:()=>c("all"),theme:t,children:"全部"})]})]}),y.jsx(Pd,{theme:t,children:"📊 游戏进度图表"})]}),y.jsxs($d,{theme:t,children:[y.jsx(Cd,{children:y.jsx(zd,{theme:t,children:"难度分布"})}),y.jsx(Id,{children:Object.entries(f.difficultyBreakdown||{}).map(([e,r])=>{const n=(e=>{const t=f.difficultyBreakdown||{},r=m();return r>0?t[e]/r*100:0})(e);return y.jsxs(Nd,{children:[y.jsxs(Ed,{children:[y.jsx(Md,{theme:t,children:{easy:"简单",medium:"中等",hard:"困难",expert:"专家"}[e]||e}),y.jsxs(Rd,{theme:t,children:[r," 局 (",n.toFixed(1),"%)"]})]}),y.jsx(Od,{theme:t,children:y.jsx(Ld,{difficulty:e,percentage:n})})]},e)})})]}),y.jsxs(Fd,{theme:t,children:[y.jsx(zd,{theme:t,children:"技巧掌握"}),y.jsx(Dd,{children:[{id:"nakedSingles",name:"唯一候选数"},{id:"hiddenSingles",name:"隐性唯一"},{id:"nakedPairs",name:"数对"},{id:"hiddenPairs",name:"隐性数对"},{id:"pointingPairs",name:"指向对"},{id:"boxLineReduction",name:"宫行列排除"}].map(e=>{var r;const n=g(e.id),o=(i=e.id,g(i)>=80);var i;const a=(null==(r=p[e.id])?void 0:r.practiced)||0;return y.jsxs(_d,{mastered:o,theme:t,children:[y.jsxs(Hd,{children:[y.jsx(Bd,{theme:t,children:e.name}),y.jsxs(Wd,{theme:t,children:["练习 ",a," 次 · 掌握度 ",n.toFixed(0),"%"]})]}),y.jsx(Ud,{mastered:o,theme:t,children:o?"已掌握":"学习中"})]},e.id)})})]})]})},qd={"zh-CN":{home:"首页",game:"游戏",techniques:"技巧",progress:"进度",statistics:"统计",settings:"设置",settingsPageTitle:"设置",language:"语言",theme:"主题",lightTheme:"浅色主题",darkTheme:"深色主题",systemTheme:"跟随系统",customTheme:"自定义主题",editTheme:"编辑主题",saveChanges:"保存更改",cancel:"取消",themeEditor:"主题编辑器",backgroundColor:"背景颜色",surfaceColor:"表面颜色",textColor:"文字颜色",textSecondaryColor:"次要文字颜色",primaryColor:"主色调",secondaryColor:"次色调",successColor:"成功颜色",warningColor:"警告颜色",errorColor:"错误颜色",borderColor:"边框颜色",gridLineColor:"网格线颜色",gridLineThickColor:"粗网格线颜色",highlightColor:"高亮颜色",preview:"预览",reset:"重置",exportTheme:"导出主题",importTheme:"导入主题",confirm:"确认",delete:"删除",back:"返回",continue:"继续",complete:"完成",start:"开始",pause:"暂停",resume:"继续",newGame:"新游戏",difficulty:"难度",easy:"简单",medium:"中等",hard:"困难",expert:"专家"},"en-US":{home:"Home",game:"Game",techniques:"Techniques",progress:"Progress",statistics:"Statistics",settings:"Settings",settingsPageTitle:"Settings",language:"Language",theme:"Theme",lightTheme:"Light Theme",darkTheme:"Dark Theme",systemTheme:"System Theme",customTheme:"Custom Theme",editTheme:"Edit Theme",saveChanges:"Save Changes",cancel:"Cancel",themeEditor:"Theme Editor",backgroundColor:"Background Color",surfaceColor:"Surface Color",textColor:"Text Color",textSecondaryColor:"Secondary Text Color",primaryColor:"Primary Color",secondaryColor:"Secondary Color",successColor:"Success Color",warningColor:"Warning Color",errorColor:"Error Color",borderColor:"Border Color",gridLineColor:"Grid Line Color",gridLineThickColor:"Thick Grid Line Color",highlightColor:"Highlight Color",preview:"Preview",reset:"Reset",exportTheme:"Export Theme",importTheme:"Import Theme",confirm:"Confirm",delete:"Delete",back:"Back",continue:"Continue",complete:"Complete",start:"Start",pause:"Pause",resume:"Resume",newGame:"New Game",difficulty:"Difficulty",easy:"Easy",medium:"Medium",hard:"Hard",expert:"Expert"}},Gd=e.createContext(),Jd=({children:t})=>{const[r,n]=e.useState(localStorage.getItem("language")||("zh-CN"===navigator.language?"zh-CN":"en-US")),o={language:r,t:e=>{var t;return(null==(t=qd[r])?void 0:t[e])||e},changeLanguage:e=>{n(e),localStorage.setItem("language",e)},availableLanguages:[{code:"zh-CN",name:"中文简体"},{code:"en-US",name:"English"}]};return y.jsx(Gd.Provider,{value:o,children:t})},Vd=()=>{const t=e.useContext(Gd);if(!t)throw new Error("useLanguage must be used within a LanguageProvider");return t},Xd=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`,Kd=Rr.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,Qd=Rr(n)`
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
`,Zd=Rr.h1`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  flex: 1;
`,eu=Rr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`,tu=Rr.h2`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 20px 0;
  border-bottom: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  padding-bottom: 10px;
`,ru=Rr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  
  &:last-child {
    border-bottom: none;
  }
`,nu=Rr.div`
  font-size: 18px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-weight: 500;
`,ou=Rr.div`
  display: flex;
  gap: 10px;
`,iu=Rr.button`
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
`,au=Rr.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,su=Rr.button`
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
`,lu=Rr.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,cu=Rr(n)`
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
`,du=Rr.span`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  font-style: italic;
`,uu=()=>{const{theme:e,themeMode:t,setLightTheme:r,setDarkTheme:n,setSystemTheme:i,setCustomThemeMode:a,customTheme:s}=re(),{language:l,changeLanguage:c,availableLanguages:d,t:u}=Vd();return o(),y.jsxs(Xd,{children:[y.jsxs(Kd,{children:[y.jsx(Qd,{to:"/",theme:e,children:y.jsx(fc,{icon:yc,size:"lg"})}),y.jsx(Zd,{theme:e,children:u("settingsPageTitle")})]}),y.jsxs(eu,{theme:e,children:[y.jsx(tu,{theme:e,children:u("language")}),y.jsxs(ru,{children:[y.jsx(nu,{theme:e,children:u("language")}),y.jsx(ou,{children:d.map(t=>y.jsx(iu,{active:l===t.code,onClick:()=>c(t.code),theme:e,children:t.name},t.code))})]})]}),y.jsxs(eu,{theme:e,children:[y.jsx(tu,{theme:e,children:u("theme")}),y.jsxs(au,{children:[y.jsxs(su,{active:"light"===t,onClick:r,theme:e,children:[y.jsx(fc,{icon:hc,size:"lg"}),u("lightTheme")]}),y.jsxs(su,{active:"dark"===t,onClick:n,theme:e,children:[y.jsx(fc,{icon:mc,size:"lg"}),u("darkTheme")]}),y.jsxs(su,{active:"system"===t,onClick:i,theme:e,children:[y.jsx(fc,{icon:wc,size:"lg"}),u("systemTheme")]})]}),y.jsxs(ru,{style:{marginTop:"20px"},children:[y.jsx(nu,{theme:e,children:u("customTheme")}),y.jsxs(lu,{children:[y.jsxs(cu,{to:"/settings/theme-editor",theme:e,children:[y.jsx(fc,{icon:gc,size:"lg"}),u("editTheme")]}),y.jsx(du,{theme:e,children:"custom"===t&&`${u("customTheme")} - ${s.name}`})]})]})]})]})},fu=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`,pu=Rr.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,hu=Rr(n)`
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
`,mu=Rr.h1`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  flex: 1;
`,gu=Rr.div`
  display: flex;
  gap: 10px;
`,xu=Rr.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${e=>{var t,r,n,o;switch(e.type){case"primary":return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7";case"danger":return(null==(r=e.theme)?void 0:r.error)||"#ff3b30";case"secondary":return(null==(n=e.theme)?void 0:n.surface)||"#ffffff";default:return(null==(o=e.theme)?void 0:o.surface)||"#ffffff"}}};
  color: ${e=>{var t;return"secondary"===e.type?(null==(t=e.theme)?void 0:t.text)||"#333333":"white"}};
  border: 2px solid ${e=>{var t,r,n,o;switch(e.type){case"primary":return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7";case"danger":return(null==(r=e.theme)?void 0:r.error)||"#ff3b30";case"secondary":return(null==(n=e.theme)?void 0:n.border)||"#e0e0e0";default:return(null==(o=e.theme)?void 0:o.border)||"#e0e0e0"}}};
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
`,vu=Rr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,yu=Rr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,bu=Rr.section`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 600px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`,wu=Rr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,ju=Rr.h2`
  color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.text)||"#333333"}};
  margin: 0;
  font-size: 24px;
`,ku=Rr.button`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.primary)||"#4a6cf7"}};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
`,Su=Rr.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.gridLine)||"#e0e0e0"}};
  border-radius: 8px;
  padding: 2px;
  margin: 0 auto 30px;
  width: 300px;
  height: 300px;
`,$u=Rr.div`
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
`,Cu=Rr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`,zu=Rr.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Au=Rr.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  border: 2px solid ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.border)||"#e0e0e0"}};
`,Tu=Rr.span`
  color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.text)||"#333333"}};
  font-size: 14px;
`,Pu=Rr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,Iu=Rr.label`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`,Nu=Rr.input`
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
`,Eu=Rr.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Mu=Rr.input`
  width: 60px;
  height: 44px;
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  background: none;
`,Ru=Rr.input`
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
`,Ou=Rr.input`
  display: none;
`,Lu=()=>{const{theme:t,customTheme:r,updateCustomTheme:n,resetCustomTheme:i,exportTheme:a,importTheme:s}=re(),{t:l}=Vd();o();const c=e.useRef(null),[d,u]=e.useState({...r});e.useEffect(()=>{u({...r})},[r]);const f=(e,t)=>{u(r=>({...r,[e]:t}))},p=[{key:"background",label:l("backgroundColor")},{key:"surface",label:l("surfaceColor")},{key:"text",label:l("textColor")},{key:"textSecondary",label:l("textSecondaryColor")},{key:"primary",label:l("primaryColor")},{key:"secondary",label:l("secondaryColor")},{key:"success",label:l("successColor")},{key:"warning",label:l("warningColor")},{key:"error",label:l("errorColor")},{key:"border",label:l("borderColor")},{key:"gridLine",label:l("gridLineColor")},{key:"gridLineThick",label:l("gridLineThickColor")},{key:"highlight",label:l("highlightColor")}];return y.jsxs(fu,{children:[y.jsxs(pu,{children:[y.jsx(hu,{to:"/settings",theme:t,children:y.jsx(fc,{icon:yc,size:"lg"})}),y.jsx(mu,{theme:t,children:l("themeEditor")}),y.jsxs(gu,{children:[y.jsxs(xu,{type:"secondary",onClick:()=>{i(),K.info("主题已重置",{position:"top-right",autoClose:2e3})},theme:t,children:[y.jsx(fc,{icon:bc,size:"lg"}),l("reset")]}),y.jsxs(xu,{type:"primary",onClick:()=>{n(d),K.success("主题已保存",{position:"top-right",autoClose:2e3})},theme:t,children:[y.jsx(fc,{icon:pc,size:"lg"}),l("saveChanges")]})]})]}),y.jsxs(vu,{children:[y.jsxs(yu,{theme:t,children:[y.jsx(Ru,{type:"text",value:d.name||"",onChange:e=>{u(t=>({...t,name:e.target.value}))},placeholder:l("customTheme"),theme:t}),p.map(e=>y.jsxs(Pu,{children:[y.jsx(Iu,{theme:t,children:e.label}),y.jsxs(Eu,{children:[y.jsx(Nu,{type:"text",value:d[e.key]||"",onChange:t=>f(e.key,t.target.value),placeholder:"#000000",theme:t}),y.jsx(Mu,{type:"color",value:d[e.key]||"#000000",onChange:t=>f(e.key,t.target.value)})]})]},e.key)),y.jsxs(gu,{style:{marginTop:"30px"},children:[y.jsxs(xu,{type:"secondary",onClick:()=>{var e;return null==(e=c.current)?void 0:e.click()},theme:t,children:[y.jsx(fc,{icon:vc,size:"lg"}),l("importTheme")]}),y.jsx(Ou,{ref:c,type:"file",accept:".json",onChange:async e=>{const t=e.target.files[0];if(t)try{await s(t),K.success("主题导入成功",{position:"top-right",autoClose:2e3}),e.target.value=""}catch(r){K.error("主题导入失败: "+r.message,{position:"top-right",autoClose:3e3})}}}),y.jsxs(xu,{type:"secondary",onClick:()=>{a(d),K.info("主题已导出",{position:"top-right",autoClose:2e3})},theme:t,children:[y.jsx(fc,{icon:xc,size:"lg"}),l("exportTheme")]})]})]}),y.jsxs(bu,{previewTheme:d,children:[y.jsxs(wu,{previewTheme:d,children:[y.jsx(ju,{previewTheme:d,children:l("preview")}),y.jsx(ku,{previewTheme:d,children:l("preview")})]}),y.jsx(Su,{previewTheme:d,children:(()=>{const e=[];for(let t=0;t<9;t++)for(let r=0;r<9;r++){const n=4===t&&4===r||0===t&&0===r||8===t&&8===r;e.push(y.jsx($u,{row:t,col:r,isHighlighted:n,previewTheme:d,children:Math.floor(9*Math.random())+1},`${t}-${r}`))}return e})()}),y.jsxs(Cu,{children:[y.jsxs(zu,{previewTheme:d,children:[y.jsx(Au,{color:d.primary,previewTheme:d}),y.jsx(Tu,{previewTheme:d,children:l("primaryColor")})]}),y.jsxs(zu,{previewTheme:d,children:[y.jsx(Au,{color:d.success,previewTheme:d}),y.jsx(Tu,{previewTheme:d,children:l("successColor")})]}),y.jsxs(zu,{previewTheme:d,children:[y.jsx(Au,{color:d.warning,previewTheme:d}),y.jsx(Tu,{previewTheme:d,children:l("warningColor")})]}),y.jsxs(zu,{previewTheme:d,children:[y.jsx(Au,{color:d.error,previewTheme:d}),y.jsx(Tu,{previewTheme:d,children:l("errorColor")})]})]})]})]})]})};b.createRoot(document.getElementById("root")).render(y.jsxs(r.StrictMode,{children:[y.jsx(te,{children:y.jsx(Jd,{children:y.jsx(oe,{children:y.jsx(ln,{children:y.jsx(Mn,{children:y.jsx(i,{children:y.jsx(an,{children:y.jsxs(a,{children:[y.jsx(s,{path:"/",element:y.jsx(jc,{})}),y.jsx(s,{path:"/home",element:y.jsx(oo,{})}),y.jsx(s,{path:"/game",element:y.jsx(jc,{})}),y.jsx(s,{path:"/techniques",element:y.jsx(Wc,{})}),y.jsx(s,{path:"/progress",element:y.jsx(xd,{})}),y.jsx(s,{path:"/stats",element:y.jsx(Yd,{})}),y.jsx(s,{path:"/settings",element:y.jsx(uu,{})}),y.jsx(s,{path:"/settings/theme-editor",element:y.jsx(Lu,{})})]})})})})})})})}),y.jsx(H,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]}));
