import{r as e,a as r,R as n,L as o,u as i,B as a,b as s,d as l}from"./react-vendor-ce3df769.js";import{l as c}from"./utils-b9091abe.js";import{a as d}from"./axios-8e1cd5bd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var u={exports:{}},f={},p=e,h=Symbol.for("react.element"),m=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,x=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function v(e,t,r){var n,o={},i=null,a=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)g.call(t,n)&&!y.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:h,type:e,key:i,ref:a,props:o,_owner:x.current}}f.Fragment=m,f.jsx=v,f.jsxs=v,u.exports=f;var b=u.exports,w={},k=r;function j(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=j(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function C(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=j(e))&&(n&&(n+=" "),n+=t);return n}w.createRoot=k.createRoot,w.hydrateRoot=k.hydrateRoot;const S=e=>"number"==typeof e&&!isNaN(e),z=e=>"string"==typeof e,$=e=>"function"==typeof e,P=e=>z(e)||$(e)?e:null,T=t=>e.isValidElement(t)||z(t)||$(t)||S(t);function A(t){let{enter:r,exit:o,appendPosition:i=!1,collapse:a=!0,collapseDuration:s=300}=t;return function(t){let{children:l,position:c,preventExitTransition:d,done:u,nodeRef:f,isIn:p}=t;const h=i?`${r}--${c}`:r,m=i?`${o}--${c}`:o,g=e.useRef(0);return e.useLayoutEffect(()=>{const e=f.current,t=h.split(" "),r=n=>{n.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===g.current&&"animationcancel"!==n.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)},[]),e.useEffect(()=>{const e=f.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,r){void 0===r&&(r=300);const{scrollHeight:n,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=n+"px",o.transition=`all ${r}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,r)})})}(e,u,s):u()};p||(d?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))},[p]),n.createElement(n.Fragment,null,l)}}function N(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const I={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const r=this.list.get(e).filter(e=>e!==t);return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const r=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(r)})}},E=e=>{let{theme:t,type:r,...o}=e;return n.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${r})`,...o})},R={info:function(e){return n.createElement(E,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return n.createElement(E,{...e},n.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return n.createElement(E,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return n.createElement(E,{...e},n.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return n.createElement("div",{className:"Toastify__spinner"})}};function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function O(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){let{closeToast:t,theme:r,ariaLabel:o="close"}=e;return n.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},n.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function F(e){let{delay:t,isRunning:r,closeToast:o,type:i="default",hide:a,className:s,style:l,controlledProgress:c,progress:d,rtl:u,isIn:f,theme:p}=e;const h=a||c&&0===d,m={...l,animationDuration:`${t}ms`,animationPlayState:r?"running":"paused",opacity:h?0:1};c&&(m.transform=`scaleX(${d})`);const g=C("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),x=$(s)?s({rtl:u,type:i,defaultClassName:g}):C(g,s);return n.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:x,style:m,[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]:c&&d<1?null:()=>{f&&o()}})}const D=t=>{const{isRunning:r,preventExitTransition:o,toastRef:i,eventHandlers:a}=function(t){const[r,n]=e.useState(!1),[o,i]=e.useState(!1),a=e.useRef(null),s=e.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=e.useRef(t),{autoClose:c,pauseOnHover:d,closeToast:u,onClick:f,closeOnClick:p}=t;function h(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",v),document.addEventListener("touchmove",y),document.addEventListener("touchend",v);const r=a.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=r.getBoundingClientRect(),r.style.transition="",s.x=M(e.nativeEvent),s.y=O(e.nativeEvent),"x"===t.draggableDirection?(s.start=s.x,s.removalDistance=r.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=r.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function m(e){if(s.boundingRect){const{top:r,bottom:n,left:o,right:i}=s.boundingRect;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&s.x>=o&&s.x<=i&&s.y>=r&&s.y<=n?x():g()}}function g(){n(!0)}function x(){n(!1)}function y(e){const n=a.current;s.canDrag&&n&&(s.didMove=!0,r&&x(),s.x=M(e),s.y=O(e),s.delta="x"===t.draggableDirection?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),n.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,n.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function v(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",v),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",v);const e=a.current;if(s.canDrag&&s.didMove&&e){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform=`translate${t.draggableDirection}(0)`,e.style.opacity="1"}}e.useEffect(()=>{l.current=t}),e.useEffect(()=>(a.current&&a.current.addEventListener("d",g,{once:!0}),$(t.onOpen)&&t.onOpen(e.isValidElement(t.children)&&t.children.props),()=>{const t=l.current;$(t.onClose)&&t.onClose(e.isValidElement(t.children)&&t.children.props)}),[]),e.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",g),window.addEventListener("blur",x)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",g),window.removeEventListener("blur",x))}),[t.pauseOnFocusLoss]);const b={onMouseDown:h,onTouchStart:h,onMouseUp:m,onTouchEnd:m};return c&&d&&(b.onMouseEnter=x,b.onMouseLeave=g),p&&(b.onClick=e=>{f&&f(e),s.canCloseOnClick&&u()}),{playToast:g,pauseToast:x,isRunning:r,preventExitTransition:o,toastRef:a,eventHandlers:b}}(t),{closeButton:s,children:l,autoClose:c,onClick:d,type:u,hideProgressBar:f,closeToast:p,transition:h,position:m,className:g,style:x,bodyClassName:y,bodyStyle:v,progressClassName:b,progressStyle:w,updateId:k,role:j,progress:S,rtl:z,toastId:P,deleteToast:T,isIn:A,isLoading:N,iconOut:I,closeOnClick:E,theme:R}=t,D=C("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":z},{"Toastify__toast--close-on-click":E}),H=$(g)?g({rtl:z,position:m,type:u,defaultClassName:D}):C(D,g),B=!!S||!c,_={closeToast:p,type:u,theme:R};let W=null;return!1===s||(W=$(s)?s(_):e.isValidElement(s)?e.cloneElement(s,_):L(_)),n.createElement(h,{isIn:A,done:T,position:m,preventExitTransition:o,nodeRef:i},n.createElement("div",{id:P,onClick:d,className:H,...a,style:x,ref:i},n.createElement("div",{...A&&{role:j},className:$(y)?y({type:u}):C("Toastify__toast-body",y),style:v},null!=I&&n.createElement("div",{className:C("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},I),n.createElement("div",null,l)),W,n.createElement(F,{...k&&!B?{key:`pb-${k}`}:{},rtl:z,theme:R,delay:c,isRunning:r,isIn:A,closeToast:p,hide:f,type:u,style:w,className:b,controlledProgress:B,progress:S||0})))},H=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},B=A(H("bounce",!0));A(H("slide",!0)),A(H("zoom")),A(H("flip"));const _=e.forwardRef((t,r)=>{const{getToastToRender:o,containerRef:i,isToastActive:a}=function(t){const[,r]=e.useReducer(e=>e+1,0),[n,o]=e.useState([]),i=e.useRef(null),a=e.useRef(new Map).current,s=e=>-1!==n.indexOf(e),l=e.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:e=>a.get(e)}).current;function c(e){let{containerId:t}=e;const{limit:r}=l.props;!r||t&&l.containerId!==t||(l.count-=l.queue.length,l.queue=[])}function d(e){o(t=>null==e?[]:t.filter(t=>t!==e))}function u(){const{toastContent:e,toastProps:t,staleId:r}=l.queue.shift();p(e,t,r)}function f(t,n){let{delay:o,staleId:s,...c}=n;if(!T(t)||(f=c,!i.current||l.props.enableMultiContainer&&f.containerId!==l.props.containerId||a.has(f.toastId)&&null==f.updateId))return;var f;const{toastId:h,updateId:m,data:g}=c,{props:x}=l,y=()=>d(h),v=null==m;v&&l.count++;const b={...x,style:x.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(c).filter(e=>{let[t,r]=e;return null!=r})),toastId:h,updateId:m,data:g,closeToast:y,isIn:!1,className:P(c.className||x.toastClassName),bodyClassName:P(c.bodyClassName||x.bodyClassName),progressClassName:P(c.progressClassName||x.progressClassName),autoClose:!c.isLoading&&(w=c.autoClose,k=x.autoClose,!1===w||S(w)&&w>0?w:k),deleteToast(){const e=N(a.get(h),"removed");a.delete(h),I.emit(4,e);const t=l.queue.length;if(l.count=null==h?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),t>0){const e=null==h?l.props.limit:1;if(1===t||1===e)l.displayedToast++,u();else{const r=e>t?t:e;l.displayedToast=r;for(let e=0;e<r;e++)u()}}else r()}};var w,k;b.iconOut=function(t){let{theme:r,type:n,isLoading:o,icon:i}=t,a=null;const s={theme:r,type:n};return!1===i||($(i)?a=i(s):e.isValidElement(i)?a=e.cloneElement(i,s):z(i)||S(i)?a=i:o?a=R.spinner():n in R&&(a=R[n](s))),a}(b),$(c.onOpen)&&(b.onOpen=c.onOpen),$(c.onClose)&&(b.onClose=c.onClose),b.closeButton=x.closeButton,!1===c.closeButton||T(c.closeButton)?b.closeButton=c.closeButton:!0===c.closeButton&&(b.closeButton=!T(x.closeButton)||x.closeButton);let j=t;e.isValidElement(t)&&!z(t.type)?j=e.cloneElement(t,{closeToast:y,toastProps:b,data:g}):$(t)&&(j=t({closeToast:y,toastProps:b,data:g})),x.limit&&x.limit>0&&l.count>x.limit&&v?l.queue.push({toastContent:j,toastProps:b,staleId:s}):S(o)?setTimeout(()=>{p(j,b,s)},o):p(j,b,s)}function p(e,t,r){const{toastId:n}=t;r&&a.delete(r);const i={content:e,props:t};a.set(n,i),o(e=>[...e,n].filter(e=>e!==r)),I.emit(4,N(i,null==i.props.updateId?"added":"updated"))}return e.useEffect(()=>(l.containerId=t.containerId,I.cancelEmit(3).on(0,f).on(1,e=>i.current&&d(e)).on(5,c).emit(2,l),()=>{a.clear(),I.emit(3,l)}),[]),e.useEffect(()=>{l.props=t,l.isToastActive=s,l.displayedToast=n.length}),{getToastToRender:function(e){const r=new Map,n=Array.from(a.values());return t.newestOnTop&&n.reverse(),n.forEach(e=>{const{position:t}=e.props;r.has(t)||r.set(t,[]),r.get(t).push(e)}),Array.from(r,t=>e(t[0],t[1]))},containerRef:i,isToastActive:s}}(t),{className:s,style:l,rtl:c,containerId:d}=t;function u(e){const t=C("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":c});return $(s)?s({position:e,rtl:c,defaultClassName:t}):C(t,P(s))}return e.useEffect(()=>{r&&(r.current=i.current)},[]),n.createElement("div",{ref:i,className:"Toastify",id:d},o((e,t)=>{const r=t.length?{...l}:{...l,pointerEvents:"none"};return n.createElement("div",{className:u(e),style:r,key:`container-${e}`},t.map((e,r)=>{let{content:o,props:i}=e;return n.createElement(D,{...i,isIn:a(i.toastId),style:{...i.style,"--nth":r+1,"--len":t.length},key:`toast-${i.key}`},o)}))}))});_.displayName="ToastContainer",_.defaultProps={position:"top-right",transition:B,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let W,q=new Map,U=[],G=1;function Y(){return""+G++}function J(e){return e&&(z(e.toastId)||S(e.toastId))?e.toastId:Y()}function V(e,t){return q.size>0?I.emit(0,e,t):U.push({content:e,options:t}),t.toastId}function X(e,t){return{...t,type:t&&t.type||e,toastId:J(t)}}function K(e){return(t,r)=>V(t,X(e,r))}function Q(e,t){return V(e,X("default",t))}Q.loading=(e,t)=>V(e,X("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Q.promise=function(e,t,r){let n,{pending:o,error:i,success:a}=t;o&&(n=z(o)?Q.loading(o,r):Q.loading(o.render,{...r,...o}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,o)=>{if(null==t)return void Q.dismiss(n);const i={type:e,...s,...r,data:o},a=z(t)?{render:t}:t;return n?Q.update(n,{...i,...a}):Q(a.render,{...i,...a}),o},c=$(e)?e():e;return c.then(e=>l("success",a,e)).catch(e=>l("error",i,e)),c},Q.success=K("success"),Q.info=K("info"),Q.error=K("error"),Q.warning=K("warning"),Q.warn=Q.warning,Q.dark=(e,t)=>V(e,X("default",{theme:"dark",...t})),Q.dismiss=e=>{q.size>0?I.emit(1,e):U=U.filter(t=>null!=e&&t.options.toastId!==e)},Q.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},Q.isActive=e=>{let t=!1;return q.forEach(r=>{r.isToastActive&&r.isToastActive(e)&&(t=!0)}),t},Q.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{const r=function(e,t){let{containerId:r}=t;const n=q.get(r||W);return n&&n.getToast(e)}(e,t);if(r){const{props:n,content:o}=r,i={delay:100,...n,...t,toastId:t.toastId||e,updateId:Y()};i.toastId!==e&&(i.staleId=e);const a=i.render||o;delete i.render,V(a,i)}},0)},Q.done=e=>{Q.update(e,{progress:1})},Q.onChange=e=>(I.on(4,e),()=>{I.off(4,e)}),Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,e=>{W=e.containerId||e,q.set(W,e),U.forEach(e=>{I.emit(0,e.content,e.options)}),U=[]}).on(3,e=>{q.delete(e.containerId||e),0===q.size&&I.off(0).off(1).off(5)});const Z=e.createContext(),ee={light:{background:"#f5f5f5",surface:"#ffffff",text:"#333333",textSecondary:"#666666",primary:"#4a6cf7",secondary:"#f5a623",success:"#4cd964",warning:"#ffcc00",error:"#ff3b30",disabled:"#cccccc",border:"#e0e0e0",gridLine:"#e0e0e0",gridLineThick:"#cccccc",highlight:"#e6f0ff",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}},dark:{background:"#121212",surface:"#1e1e1e",text:"#f5f5f5",textSecondary:"#b0b0b0",primary:"#6482f7",secondary:"#ffb74d",success:"#66df80",warning:"#ffe066",error:"#ff5757",disabled:"#666666",border:"#333333",gridLine:"#333333",gridLineThick:"#444444",highlight:"#1a237e",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}}},te=()=>({...ee.light,name:"自定义主题"}),re=({children:t})=>{const[r,n]=e.useState(localStorage.getItem("themeMode")||"light"),[o,i]=e.useState(()=>{const e=localStorage.getItem("customTheme");return e?JSON.parse(e):te()}),[a,s]=e.useState(()=>"custom"===r?o:ee["system"===r?"light":r]);e.useEffect(()=>{let e;if("custom"===r)e=o;else if("system"===r){const t=window.matchMedia("(prefers-color-scheme: dark)").matches;e=ee[t?"dark":"light"]}else e=ee[r];s(e)},[r,o]);const l=e=>{const t={...e,name:e.name||"自定义主题"};i(t),localStorage.setItem("customTheme",JSON.stringify(t)),"custom"===r&&s(t)};e.useEffect(()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{if("system"===r){const t=e.matches;s(ee[t?"dark":"light"])}};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[r]);const c={theme:a,themeMode:r,customTheme:o,toggleTheme:()=>{const e="light"===r?"dark":"light";n(e),localStorage.setItem("themeMode",e)},setLightTheme:()=>{n("light"),localStorage.setItem("themeMode","light")},setDarkTheme:()=>{n("dark"),localStorage.setItem("themeMode","dark")},setSystemTheme:()=>{n("system"),localStorage.setItem("themeMode","system")},setCustomThemeMode:()=>{n("custom"),localStorage.setItem("themeMode","custom")},updateCustomTheme:l,resetCustomTheme:()=>{const e=te();i(e),localStorage.setItem("customTheme",JSON.stringify(e))},exportTheme:(e=o)=>{const t=JSON.stringify(e,null,2),r=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(r),i=document.createElement("a");i.href=n,i.download=`${e.name||"sudoku-theme"}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n)},importTheme:e=>new Promise((t,r)=>{const n=new FileReader;n.onload=e=>{try{const n=JSON.parse(e.target.result);n&&"object"==typeof n?(l(n),t(n)):r(new Error("无效的主题文件格式"))}catch(n){r(n)}},n.onerror=r,n.readAsText(e)})};return b.jsx(Z.Provider,{value:c,children:t})},ne=()=>{const t=e.useContext(Z);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},oe=e.createContext(),ie=({children:t})=>{const[r,n]=e.useState(!1),[o,i]=e.useState("加载中..."),[a,s]=e.useState(0),l=(e="加载中...")=>{s(e=>e+1),i(e),n(!0)},c=()=>{s(e=>{const t=Math.max(0,e-1);return 0===t&&n(!1),t})},d={isLoading:r,loadingMessage:o,loadingCount:a,startLoading:l,stopLoading:c,resetLoading:()=>{s(0),n(!1),i("加载中...")},executeWithLoading:async(e,t="加载中...")=>{try{l(t);return await e()}catch(r){throw r}finally{c()}}};return b.jsx(oe.Provider,{value:d,children:t})},ae=()=>{const t=e.useContext(oe);if(!t)throw new Error("useLoading must be used within a LoadingProvider");return t};var se=function(){return se=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},se.apply(this,arguments)};function le(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ce="-ms-",de="-moz-",ue="-webkit-",fe="comm",pe="rule",he="decl",me="@keyframes",ge=Math.abs,xe=String.fromCharCode,ye=Object.assign;function ve(e){return e.trim()}function be(e,t){return(e=t.exec(e))?e[0]:e}function we(e,t,r){return e.replace(t,r)}function ke(e,t,r){return e.indexOf(t,r)}function je(e,t){return 0|e.charCodeAt(t)}function Ce(e,t,r){return e.slice(t,r)}function Se(e){return e.length}function ze(e){return e.length}function $e(e,t){return t.push(e),e}function Pe(e,t){return e.filter(function(e){return!be(e,t)})}var Te=1,Ae=1,Ne=0,Ie=0,Ee=0,Re="";function Me(e,t,r,n,o,i,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Te,column:Ae,length:a,return:"",siblings:s}}function Oe(e,t){return ye(Me("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Le(e){for(;e.root;)e=Oe(e.root,{children:[e]});$e(e,e.siblings)}function Fe(){return Ee=Ie>0?je(Re,--Ie):0,Ae--,10===Ee&&(Ae=1,Te--),Ee}function De(){return Ee=Ie<Ne?je(Re,Ie++):0,Ae++,10===Ee&&(Ae=1,Te++),Ee}function He(){return je(Re,Ie)}function Be(){return Ie}function _e(e,t){return Ce(Re,e,t)}function We(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qe(e){return ve(_e(Ie-1,Ye(91===e?e+2:40===e?e+1:e)))}function Ue(e){for(;(Ee=He())&&Ee<33;)De();return We(e)>2||We(Ee)>3?"":" "}function Ge(e,t){for(;--t&&De()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return _e(e,Be()+(t<6&&32==He()&&32==De()))}function Ye(e){for(;De();)switch(Ee){case e:return Ie;case 34:case 39:34!==e&&39!==e&&Ye(Ee);break;case 40:41===e&&Ye(e);break;case 92:De()}return Ie}function Je(e,t){for(;De()&&e+Ee!==57&&(e+Ee!==84||47!==He()););return"/*"+_e(t,Ie-1)+"*"+xe(47===e?e:De())}function Ve(e){for(;!We(He());)De();return _e(e,Ie)}function Xe(e){return function(e){return Re="",e}(Ke("",null,null,null,[""],e=function(e){return Te=Ae=1,Ne=Se(Re=e),Ie=0,[]}(e),0,[0],e))}function Ke(e,t,r,n,o,i,a,s,l){for(var c=0,d=0,u=a,f=0,p=0,h=0,m=1,g=1,x=1,y=0,v="",b=o,w=i,k=n,j=v;g;)switch(h=y,y=De()){case 40:if(108!=h&&58==je(j,u-1)){-1!=ke(j+=we(qe(y),"&","&\f"),"&\f",ge(c?s[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:j+=qe(y);break;case 9:case 10:case 13:case 32:j+=Ue(h);break;case 92:j+=Ge(Be()-1,7);continue;case 47:switch(He()){case 42:case 47:$e(Ze(Je(De(),Be()),t,r,l),l);break;default:j+="/"}break;case 123*m:s[c++]=Se(j)*x;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+d:-1==x&&(j=we(j,/\f/g,"")),p>0&&Se(j)-u&&$e(p>32?et(j+";",n,r,u-1,l):et(we(j," ","")+";",n,r,u-2,l),l);break;case 59:j+=";";default:if($e(k=Qe(j,t,r,c,d,o,s,v,b=[],w=[],u,i),i),123===y)if(0===d)Ke(j,t,k,k,b,i,u,s,w);else switch(99===f&&110===je(j,3)?100:f){case 100:case 108:case 109:case 115:Ke(e,k,k,n&&$e(Qe(e,k,k,0,0,o,s,v,o,b=[],u,w),w),o,w,u,s,n?b:w);break;default:Ke(j,k,k,k,[""],w,0,s,w)}}c=d=p=0,m=x=1,v=j="",u=a;break;case 58:u=1+Se(j),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Fe())continue;switch(j+=xe(y),y*m){case 38:x=d>0?1:(j+="\f",-1);break;case 44:s[c++]=(Se(j)-1)*x,x=1;break;case 64:45===He()&&(j+=qe(De())),f=He(),d=u=Se(v=j+=Ve(Be())),y++;break;case 45:45===h&&2==Se(j)&&(m=0)}}return i}function Qe(e,t,r,n,o,i,a,s,l,c,d,u){for(var f=o-1,p=0===o?i:[""],h=ze(p),m=0,g=0,x=0;m<n;++m)for(var y=0,v=Ce(e,f+1,f=ge(g=a[m])),b=e;y<h;++y)(b=ve(g>0?p[y]+" "+v:we(v,/&\f/g,p[y])))&&(l[x++]=b);return Me(e,t,r,0===o?pe:s,l,c,d,u)}function Ze(e,t,r,n){return Me(e,t,r,fe,xe(Ee),Ce(e,2,-2),0,n)}function et(e,t,r,n,o){return Me(e,t,r,he,Ce(e,0,n),Ce(e,n+1,-1),n,o)}function tt(e,t,r){switch(function(e,t){return 45^je(e,0)?(((t<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 4789:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+de+e+ce+e+e;case 5936:switch(je(e,t+11)){case 114:return ue+e+ce+we(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ce+we(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ce+we(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ce+e+e;case 6165:return ue+e+ce+"flex-"+e+e;case 5187:return ue+e+we(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ce+"flex-$1$2")+e;case 5443:return ue+e+ce+"flex-item-"+we(e,/flex-|-self/g,"")+(be(e,/flex-|baseline/)?"":ce+"grid-row-"+we(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ce+"flex-line-pack"+we(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ce+we(e,"shrink","negative")+e;case 5292:return ue+e+ce+we(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+we(e,"-grow","")+ue+e+ce+we(e,"grow","positive")+e;case 4554:return ue+we(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return we(we(we(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return we(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return we(we(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4200:if(!be(e,/flex-|baseline/))return ce+"grid-column-align"+Ce(e,t)+e;break;case 2592:case 3360:return ce+we(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,be(e.props,/grid-\w+-end/)})?~ke(e+(r=r[t].value),"span",0)?e:ce+we(e,"-start","")+e+ce+"grid-row-span:"+(~ke(r,"span",0)?be(r,/\d+/):+be(r,/\d+/)-+be(e,/\d+/))+";":ce+we(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return be(e.props,/grid-\w+-start/)})?e:ce+we(we(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return we(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Se(e)-1-t>6)switch(je(e,t+1)){case 109:if(45!==je(e,t+4))break;case 102:return we(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+de+(108==je(e,t+3)?"$3":"$2-$3"))+e;case 115:return~ke(e,"stretch",0)?tt(we(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return we(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,n,o,i,a,s){return ce+r+":"+n+s+(o?ce+r+"-span:"+(i?a:+a-+n)+s:"")+e});case 4949:if(121===je(e,t+6))return we(e,":",":"+ue)+e;break;case 6444:switch(je(e,45===je(e,14)?18:11)){case 120:return we(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(45===je(e,14)?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ce+"$2box$3")+e;case 100:return we(e,":",":"+ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return we(e,"scroll-","scroll-snap-")+e}return e}function rt(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function nt(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case he:return e.return=e.return||e.value;case fe:return"";case me:return e.return=e.value+"{"+rt(e.children,n)+"}";case pe:if(!Se(e.value=e.props.join(",")))return""}return Se(r=rt(e.children,n))?e.return=e.value+"{"+r+"}":""}function ot(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case he:return void(e.return=tt(e.value,e.length,r));case me:return rt([Oe(e,{value:we(e.value,"@","@"+ue)})],n);case pe:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(be(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Le(Oe(e,{props:[we(t,/:(read-\w+)/,":-moz-$1")]})),Le(Oe(e,{props:[t]})),ye(e,{props:Pe(r,n)});break;case"::placeholder":Le(Oe(e,{props:[we(t,/:(plac\w+)/,":"+ue+"input-$1")]})),Le(Oe(e,{props:[we(t,/:(plac\w+)/,":-moz-$1")]})),Le(Oe(e,{props:[we(t,/:(plac\w+)/,ce+"input-$1")]})),Le(Oe(e,{props:[t]})),ye(e,{props:Pe(r,n)})}return""})}}var it={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},at="undefined"!=typeof process&&void 0!==process.env&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",st="active",lt="data-styled-version",ct="6.1.19",dt="/*!sc*/\n",ut="undefined"!=typeof window&&"undefined"!=typeof document,ft=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),pt=Object.freeze([]),ht=Object.freeze({});var mt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xt=/(^-|-$)/g;function yt(e){return e.replace(gt,"-").replace(xt,"")}var vt=/(a)(d)/gi,bt=function(e){return String.fromCharCode(e+(e>25?39:97))};function wt(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=bt(t%52)+r;return(bt(t%52)+r).replace(vt,"$1-$2")}var kt,jt=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ct=function(e){return jt(5381,e)};function St(e){return"string"==typeof e&&!0}var zt="function"==typeof Symbol&&Symbol.for,$t=zt?Symbol.for("react.memo"):60115,Pt=zt?Symbol.for("react.forward_ref"):60112,Tt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},At={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Nt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},It=((kt={})[Pt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kt[$t]=Nt,kt);function Et(e){return("type"in(t=e)&&t.type.$$typeof)===$t?Nt:"$$typeof"in e?It[e.$$typeof]:Tt;var t}var Rt=Object.defineProperty,Mt=Object.getOwnPropertyNames,Ot=Object.getOwnPropertySymbols,Lt=Object.getOwnPropertyDescriptor,Ft=Object.getPrototypeOf,Dt=Object.prototype;function Ht(e,t,r){if("string"!=typeof t){if(Dt){var n=Ft(t);n&&n!==Dt&&Ht(e,n,r)}var o=Mt(t);Ot&&(o=o.concat(Ot(t)));for(var i=Et(e),a=Et(t),s=0;s<o.length;++s){var l=o[s];if(!(l in At||r&&r[l]||a&&l in a||i&&l in i)){var c=Lt(t,l);try{Rt(e,l,c)}catch(d){}}}}return e}function Bt(e){return"function"==typeof e}function _t(e){return"object"==typeof e&&"styledComponentId"in e}function Wt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function qt(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ut(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gt(e,t,r){if(void 0===r&&(r=!1),!r&&!Ut(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Gt(e[n],t[n]);else if(Ut(t))for(var n in t)e[n]=Gt(e[n],t[n]);return e}function Yt(e,t){Object.defineProperty(e,"toString",{value:t})}function Jt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Vt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw Jt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(dt);return t},e}(),Xt=new Map,Kt=new Map,Qt=1,Zt=function(e){if(Xt.has(e))return Xt.get(e);for(;Kt.has(Qt);)Qt++;var t=Qt++;return Xt.set(e,t),Kt.set(t,e),t},er=function(e,t){Qt=t+1,Xt.set(e,t),Kt.set(t,e)},tr="style[".concat(at,"][").concat(lt,'="').concat(ct,'"]'),rr=new RegExp("^".concat(at,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),nr=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},or=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(dt),o=[],i=0,a=n.length;i<a;i++){var s=n[i].trim();if(s){var l=s.match(rr);if(l){var c=0|parseInt(l[1],10),d=l[2];0!==c&&(er(d,c),nr(e,d,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},ir=function(e){for(var t=document.querySelectorAll(tr),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(at)!==st&&(or(e,o),o.parentNode&&o.parentNode.removeChild(o))}};var ar=function(e){var t,r,n=document.head,o=e||n,i=document.createElement("style"),a=(t=o,(r=Array.from(t.querySelectorAll("style[".concat(at,"]"))))[r.length-1]),s=void 0!==a?a.nextSibling:null;i.setAttribute(at,st),i.setAttribute(lt,ct);var l="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return l&&i.setAttribute("nonce",l),o.insertBefore(i,s),i},sr=function(){function e(e){this.element=ar(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw Jt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(r){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),lr=function(){function e(e){this.element=ar(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),cr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),dr=ut,ur={isServer:!ut,useCSSOMInjection:!ft},fr=function(){function e(e,t,r){void 0===e&&(e=ht),void 0===t&&(t={});var n=this;this.options=se(se({},ur),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ut&&dr&&(dr=!1,ir(this)),Yt(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o,i=(o=r,Kt.get(o));if(void 0===i)return"continue";var a=e.names.get(i),s=t.getGroup(r);if(void 0===a||!a.size||0===s.length)return"continue";var l="".concat(at,".g").concat(r,'[id="').concat(i,'"]'),c="";void 0!==a&&a.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),n+="".concat(s).concat(l,'{content:"').concat(c,'"}').concat(dt)},i=0;i<r;i++)o(i);return n}(n)})}return e.registerId=function(e){return Zt(e)},e.prototype.rehydrate=function(){!this.server&&ut&&ir(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(se(se({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,r=e.target,n=e.isServer?new cr(r):t?new sr(r):new lr(r),new Vt(n)));var e,t,r,n},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Zt(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Zt(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Zt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),pr=/&/g,hr=/^\s*\/\/.*$/gm;function mr(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=mr(e.children,t)),e})}var gr=new fr,xr=function(e){var t,r,n,o=void 0===e?ht:e,i=o.options,a=void 0===i?ht:i,s=o.plugins,l=void 0===s?pt:s,c=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},d=l.slice();d.push(function(e){e.type===pe&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(pr,r).replace(n,c))}),a.prefix&&d.push(ot),d.push(nt);var u=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var l=e.replace(hr,""),c=Xe(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(c=mr(c,a.namespace));var u,f,p,h=[];return rt(c,(u=d.concat((p=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&p(e)})),f=ze(u),function(e,t,r,n){for(var o="",i=0;i<f;i++)o+=u[i](e,t,r,n)||"";return o})),h};return u.hash=l.length?l.reduce(function(e,t){return t.name||Jt(15),jt(e,t.name)},5381).toString():"",u}(),yr=n.createContext({shouldForwardProp:void 0,styleSheet:gr,stylis:xr});function vr(){return e.useContext(yr)}yr.Consumer,n.createContext(void 0);var br=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=xr);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Yt(this,function(){throw Jt(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=xr),this.name+e.hash},e}(),wr=function(e){return e>="A"&&e<="Z"};function kr(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;wr(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var jr=function(e){return null==e||!1===e||""===e},Cr=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!jr(i)&&(Array.isArray(i)&&i.isCss||Bt(i)?n.push("".concat(kr(o),":"),i,";"):Ut(i)?n.push.apply(n,le(le(["".concat(o," {")],Cr(i),!1),["}"],!1)):n.push("".concat(kr(o),": ").concat((t=o,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in it||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Sr(e,t,r,n){return jr(e)?[]:_t(e)?[".".concat(e.styledComponentId)]:Bt(e)?!Bt(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Sr(e(t),t,r,n):e instanceof br?r?(e.inject(r,n),[e.getName(n)]):[e]:Ut(e)?Cr(e):Array.isArray(e)?Array.prototype.concat.apply(pt,e.map(function(e){return Sr(e,t,r,n)})):[e.toString()];var o}var zr=Ct(ct),$r=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Bt(r)&&!_t(r))return!1}return!0}(e),this.componentId=t,this.baseHash=jt(zr,t),this.baseStyle=r,fr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Wt(n,this.staticRulesId);else{var o=qt(Sr(this.rules,e,t,r)),i=wt(jt(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}n=Wt(n,i),this.staticRulesId=i}else{for(var s=jt(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)l+=d;else if(d){var u=qt(Sr(d,e,t,r));s=jt(s,u+c),l+=u}}if(l){var f=wt(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(l,".".concat(f),void 0,this.componentId)),n=Wt(n,f)}}return n},e}(),Pr=n.createContext(void 0);Pr.Consumer;var Tr={};function Ar(t,r,o){var i,a=_t(t),s=t,l=!St(t),c=r.attrs,d=void 0===c?pt:c,u=r.componentId,f=void 0===u?function(e,t){var r="string"!=typeof e?"sc":yt(e);Tr[r]=(Tr[r]||0)+1;var n="".concat(r,"-").concat(function(e){return wt(Ct(e)>>>0)}(ct+r+Tr[r]));return t?"".concat(t,"-").concat(n):n}(r.displayName,r.parentComponentId):u,p=r.displayName,h=void 0===p?St(i=t)?"styled.".concat(i):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(i),")"):p,m=r.displayName&&r.componentId?"".concat(yt(r.displayName),"-").concat(r.componentId):r.componentId||f,g=a&&s.attrs?s.attrs.concat(d).filter(Boolean):d,x=r.shouldForwardProp;if(a&&s.shouldForwardProp){var y=s.shouldForwardProp;if(r.shouldForwardProp){var v=r.shouldForwardProp;x=function(e,t){return y(e,t)&&v(e,t)}}else x=y}var b=new $r(o,m,a?s.componentStyle:void 0);function w(t,r){return function(t,r,o){var i=t.attrs,a=t.componentStyle,s=t.defaultProps,l=t.foldedComponentIds,c=t.styledComponentId,d=t.target,u=n.useContext(Pr),f=vr(),p=t.shouldForwardProp||f.shouldForwardProp,h=function(e,t,r){return void 0===r&&(r=ht),e.theme!==r.theme&&e.theme||t||r.theme}(r,u,s)||ht,m=function(e,t,r){for(var n,o=se(se({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var a=Bt(n=e[i])?n(o):n;for(var s in a)o[s]="className"===s?Wt(o[s],a[s]):"style"===s?se(se({},o[s]),a[s]):a[s]}return t.className&&(o.className=Wt(o.className,t.className)),o}(i,r,h),g=m.as||d,x={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===h||("forwardedAs"===y?x.as=m.forwardedAs:p&&!p(y,g)||(x[y]=m[y]));var v,b,w,k=(v=a,b=m,w=vr(),v.generateAndInjectStyles(b,w.styleSheet,w.stylis)),j=Wt(l,c);return k&&(j+=" "+k),m.className&&(j+=" "+m.className),x[St(g)&&!mt.has(g)?"class":"className"]=j,o&&(x.ref=o),e.createElement(g,x)}(k,t,r)}w.displayName=h;var k=n.forwardRef(w);return k.attrs=g,k.componentStyle=b,k.displayName=h,k.shouldForwardProp=x,k.foldedComponentIds=a?Wt(s.foldedComponentIds,s.styledComponentId):"",k.styledComponentId=m,k.target=a?s.target:t,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)Gt(e,o[n],!0);return e}({},s.defaultProps,e):e}}),Yt(k,function(){return".".concat(k.styledComponentId)}),l&&Ht(k,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function Nr(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Ir=function(e){return Object.assign(e,{isCss:!0})};function Er(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Bt(e)||Ut(e))return Ir(Sr(Nr(pt,le([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Sr(n):Ir(Sr(Nr(n,t)))}function Rr(e,t,r){if(void 0===r&&(r=ht),!t)throw Jt(1,t);var n=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,r,Er.apply(void 0,le([n],o,!1)))};return n.attrs=function(n){return Rr(e,t,se(se({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Rr(e,t,se(se({},r),n))},n}var Mr=function(e){return Rr(Ar,e)},Or=Mr;mt.forEach(function(e){Or[e]=Mr(e)});const Lr={"zh-CN":{home:"首页",game:"游戏",techniques:"技巧",progress:"进度",statistics:"统计",settings:"设置",ok:"确定",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",back:"返回",yes:"是",no:"否",newGame:"新建游戏",pauseTimer:"暂停计时",resume:"继续",gameCompleted:"游戏已完成",hint:"技巧提示",notes:"候选数",selectDifficulty:"选择难度",difficultyDescription:{easy:"初学者友好，空格较少",medium:"进阶挑战，需要一定技巧",hard:"专家级别，逻辑推理",expert:"极高难度，需要高级技巧"},startGame:"开始游戏",startNewGame:"开始新游戏",clearAllProgress:"清空所有进度",allProgress:"全部进度",inProgress:"进行中",completed:"已完成",paused:"已暂停",sudokuGame:"数独游戏",difficulty:"难度",startTime:"开始时间",lastUpdated:"最后更新",completionProgress:"完成进度",continueGame:"继续游戏",deleteProgress:"删除进度",noProgress:"暂无游戏进度",noFilteredProgress:"没有符合筛选条件的游戏进度",noStartedGames:"您还没有开始任何数独游戏",confirmClearAllProgress:"确认清空所有进度",confirmDeleteProgress:"确认删除进度",clearAllProgressWarning:"此操作将删除所有游戏进度，且无法恢复。确定要继续吗？",deleteProgressWarning:"此操作将删除选中的游戏进度，且无法恢复。确定要继续吗？",confirmDelete:"确认删除",settingsPageTitle:"设置",language:"语言",theme:"主题",lightTheme:"浅色主题",darkTheme:"深色主题",systemTheme:"跟随系统",customTheme:"自定义主题",editTheme:"编辑主题",saveChanges:"保存更改",themeSelection:"主题选择",gameSettings:"游戏设置",soundEffects:"音效",autoCheck:"自动检查",showHints:"显示提示",themeEditor:"主题编辑器",backgroundColor:"背景颜色",surfaceColor:"表面颜色",textColor:"文字颜色",textSecondaryColor:"次要文字颜色",primaryColor:"主色调",secondaryColor:"次色调",successColor:"成功颜色",warningColor:"警告颜色",errorColor:"错误颜色",borderColor:"边框颜色",gridLineColor:"网格线颜色",gridLineThickColor:"粗网格线颜色",highlightColor:"高亮颜色",preview:"预览",reset:"重置",exportTheme:"导出主题",importTheme:"导入主题",confirm:"确认",continue:"继续",complete:"完成",start:"开始",pause:"暂停",time:"时间",easy:"简单",medium:"中等",hard:"困难",expert:"专家",loadGameFailed:"加载游戏失败，请稍后重试",deleteProgressFailed:"删除进度失败，请稍后重试",clearProgressFailed:"清空进度失败，请稍后重试",startPractice:"开始练习{techniqueName}技巧！",aboutUs:"关于我们",help:"使用帮助",sudokuRules:"数独规则",contactUs:"联系我们",copyright:"版权所有",version:"版本",appName:"数独学习应用",enterPencilMode:"进入铅笔模式，可以添加候选数字",exitPencilMode:"退出铅笔模式，返回正常输入",notesCalculated:"已为所有空白格子计算并填充候选数",findSingleCandidateCell:"查找唯一候选数的单元格",cellOnlyHasSingleCandidate:"单元格{position}只有唯一候选数{value}",fillNumber:"填入数字{value}",findHiddenSingleInRegion:"在{regionType}{regionNum}中查找隐藏的唯一数字",numberOnlyInPosition:"数字{value}在{regionType}{regionNum}中只能出现在{position}",row:"行",col:"列",box:"宫",multipleCells:"多单元格",error:"错误",singleCandidateTechnique:"候选数唯一法",nakedSingle:"唯一数法",hiddenSingleRow:"隐性唯一数法(行)",hiddenSingleCol:"隐性唯一数法(列)",hiddenSingleBox:"隐性唯一数法(宫)",nakedPairsRow:"显性数对法(行)",nakedPairsCol:"显性数对法(列)",nakedPairsBox:"显性数对法(宫)",hiddenPairsRow:"隐性数对法(行)",hiddenPairsCol:"隐性数对法(列)",hiddenPairsBox:"隐性数对法(宫)",nakedTripleRow:"显性三链数法(行)",nakedTripleCol:"显性三链数法(列)",nakedTripleBox:"显性三链数法(宫)",hiddenTripleRow:"隐性三链数法(行)",hiddenTripleCol:"隐性三链数法(列)",hiddenTripleBox:"隐性三链数法(宫)",unknownTechnique:"未知技巧",rowSuffix:"(行)",colSuffix:"(列)",boxSuffix:"(宫)",nakedPair:"显性数对法",nakedPairRow:"行显性数对",nakedPairCol:"列显性数对",nakedPairBox:"宫显性数对",hiddenPair:"隐性数对法",hiddenPairRow:"行隐性数对",hiddenPairCol:"列隐性数对",hiddenPairBox:"宫隐性数对",nakedTriple:"显性三链数法",hiddenTriple:"隐性三链数法",keyboardTab:"键盘",techniquesTab:"技巧",solutionTab:"解题",pencilMode:"铅笔模式",undoAction:"撤销",clearCell:"清空单元格",fillCandidates:"刷新候选数",applyTechnique:"应用",solutionSteps:"解题步骤",selectTechniqueFirst:"请先从技巧列表中选择一个技巧",noTechniquesAvailable:"没有可用的技巧",refreshCandidatesTooltip:"点击刷新候选数并加载所有技巧求解",candidatesTab:"候选数",hintsTab:"提示",solveStep:"解题一步",solveAll:"全部解题",relatedPosition:"相关位置: {position}",relatedNumber:"涉及数字: {number}",analysisCompleted:"分析完成",findPairInRegion:"在{regionType}{regionNum}中查找数对",foundNakedPair:"发现数字{numbers}的显性数对，位于单元格{cells}",removeCandidatesFromTargets:"这些数字只能出现在这两个单元格中，需要从目标单元格{targets}中删除候选数{numbers}",findHiddenPairInRegion:"在{regionType}{regionNum}中查找只能出现在两个单元格中的数字对",foundNumbersOnlyInCells:"发现数字{numbers}只能出现在单元格{cells}",removeOtherCandidates:"目标单元格{cells}中只能填入数字{numbers}，需要移除其他候选数",findTripleInRegion:"在{regionType}{regionNum}中查找三链数",foundNakedTriple:"发现数字{numbers}的显性三链数，位于单元格{cells}",findHiddenTripleInRegion:"在{regionType}{regionNum}中查找只能出现在三个单元格中的数字组"},"en-US":{home:"Home",game:"Game",techniques:"Techniques",progress:"Progress",statistics:"Statistics",settings:"Settings",ok:"OK",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",back:"Back",yes:"Yes",no:"No",newGame:"New Game",pauseTimer:"Pause Timer",resume:"Resume",gameCompleted:"Game Completed",hint:"Hint",notes:"Notes",selectDifficulty:"Select Difficulty",difficultyDescription:{easy:"Beginner friendly, fewer empty cells",medium:"Moderate challenge, requires some techniques",hard:"Expert level, logical reasoning required",expert:"Extremely difficult, advanced techniques needed"},startGame:"Start Game",startNewGame:"Start New Game",clearAllProgress:"Clear All Progress",allProgress:"All Progress",inProgress:"In Progress",completed:"Completed",paused:"Paused",sudokuGame:"Sudoku Game",difficulty:"Difficulty",startTime:"Start Time",lastUpdated:"Last Updated",completionProgress:"Completion Progress",continueGame:"Continue Game",deleteProgress:"Delete Progress",noProgress:"No Game Progress",noFilteredProgress:"No game progress matches the filter criteria",noStartedGames:"You haven't started any Sudoku games yet",confirmClearAllProgress:"Confirm Clear All Progress",confirmDeleteProgress:"Confirm Delete Progress",clearAllProgressWarning:"This action will delete all game progress and cannot be undone. Are you sure you want to continue?",deleteProgressWarning:"This action will delete the selected game progress and cannot be undone. Are you sure you want to continue?",confirmDelete:"Confirm Delete",settingsPageTitle:"Settings",language:"Language",theme:"Theme",lightTheme:"Light Theme",darkTheme:"Dark Theme",systemTheme:"System Theme",customTheme:"Custom Theme",editTheme:"Edit Theme",saveChanges:"Save Changes",themeSelection:"Theme Selection",gameSettings:"Game Settings",soundEffects:"Sound Effects",autoCheck:"Auto Check",showHints:"Show Hints",themeEditor:"Theme Editor",backgroundColor:"Background Color",surfaceColor:"Surface Color",textColor:"Text Color",textSecondaryColor:"Secondary Text Color",primaryColor:"Primary Color",secondaryColor:"Secondary Color",successColor:"Success Color",warningColor:"Warning Color",errorColor:"Error Color",borderColor:"Border Color",gridLineColor:"Grid Line Color",gridLineThickColor:"Thick Grid Line Color",highlightColor:"Highlight Color",preview:"Preview",reset:"Reset",exportTheme:"Export Theme",importTheme:"Import Theme",confirm:"Confirm",continue:"Continue",complete:"Complete",start:"Start",pause:"Pause",time:"Time",easy:"Easy",medium:"Medium",hard:"Hard",expert:"Expert",loadGameFailed:"Failed to load game, please try again later",deleteProgressFailed:"Failed to delete progress, please try again later",clearProgressFailed:"Failed to clear progress, please try again later",startPractice:"Start practicing {techniqueName}!",aboutUs:"About Us",help:"Help",sudokuRules:"Sudoku Rules",contactUs:"Contact Us",copyright:"All Rights Reserved",version:"Version",appName:"Sudoku Learning App",enterPencilMode:"Enter pencil mode, you can add candidate numbers",exitPencilMode:"Exit pencil mode, return to normal input",notesCalculated:"Candidate numbers have been calculated and filled for all empty cells",findSingleCandidateCell:"Find cells with a single candidate number",cellOnlyHasSingleCandidate:"Cell {position} has only one candidate: {value}",fillNumber:"Fill in number {value}",findHiddenSingleInRegion:"Find hidden single number in {regionType} {regionNum}",numberOnlyInPosition:"Number {value} can only appear at {position} in {regionType} {regionNum}",row:"Row",col:"Column",box:"Box",multipleCells:"Multiple cells",error:"Mistake",singleCandidateTechnique:"Single Candidate Technique",nakedSingle:"Naked Single",hiddenSingleRow:"Hidden Single (Row)",hiddenSingleCol:"Hidden Single (Column)",hiddenSingleBox:"Hidden Single (Box)",nakedPairsRow:"Naked Pairs (Row)",nakedPairsCol:"Naked Pairs (Column)",nakedPairsBox:"Naked Pairs (Box)",hiddenPairsRow:"Hidden Pairs (Row)",hiddenPairsCol:"Hidden Pairs (Column)",hiddenPairsBox:"Hidden Pairs (Box)",nakedTripleRow:"Naked Triple (Row)",nakedTripleCol:"Naked Triple (Column)",nakedTripleBox:"Naked Triple (Box)",hiddenTripleRow:"Hidden Triple (Row)",hiddenTripleCol:"Hidden Triple (Column)",hiddenTripleBox:"Hidden Triple (Box)",unknownTechnique:"Unknown Technique",rowSuffix:"(Row)",colSuffix:"(Column)",boxSuffix:"(Box)",nakedPair:"Naked Pairs",nakedPairRow:"Naked Pairs (Row)",nakedPairCol:"Naked Pairs (Column)",nakedPairBox:"Naked Pairs (Box)",hiddenPair:"Hidden Pairs",hiddenPairRow:"Hidden Pairs (Row)",hiddenPairCol:"Hidden Pairs (Column)",hiddenPairBox:"Hidden Pairs (Box)",nakedTriple:"Naked Triple",hiddenTriple:"Hidden Triple",keyboardTab:"Keyboard",techniquesTab:"Techniques",solutionTab:"Solution",pencilMode:"Pencil Mode",undoAction:"Undo",clearCell:"Clear Cell",fillCandidates:"Refresh Candidates",applyTechnique:"Apply",solutionSteps:"Solution Steps",selectTechniqueFirst:"Please select a technique from the list first",noTechniquesAvailable:"No techniques available for the current board",refreshCandidatesTooltip:"Click to refresh candidates and load all solving techniques",candidatesTab:"Candidates",hintsTab:"Hints",solveStep:"Solve Step",solveAll:"Solve All",relatedPosition:"Related Position: {position}",relatedNumber:"Involving Number: {number}",analysisCompleted:"Analysis Completed",findPairInRegion:"Find pair in {regionType} {regionNum}",foundNakedPair:"Found naked pair of numbers {numbers} in cells {cells}",removeCandidatesFromTargets:"These numbers can only appear in these two cells, remove candidates {numbers} from target cells {targets}",findHiddenPairInRegion:"Find number pairs that can only appear in two cells in {regionType} {regionNum}",foundNumbersOnlyInCells:"Numbers {numbers} can only appear in cells {cells}",removeOtherCandidates:"Target cells {cells} can only contain numbers {numbers}, remove other candidates",findTripleInRegion:"Find triple in {regionType} {regionNum}",foundNakedTriple:"Found naked triple of numbers {numbers} in cells {cells}",findHiddenTripleInRegion:"Find number groups that can only appear in three cells in {regionType} {regionNum}"}},Fr=e.createContext(),Dr=({children:t})=>{const[r,n]=e.useState(()=>{const e=localStorage.getItem("language");if(e)return e;const t=navigator.language||navigator.userLanguage;return t&&t.includes("zh")?"zh-CN":"en-US"}),o={language:r,t:(e,t={})=>{if(!e)return e;const n=e.split(".");let o=Lr[r];for(const r of n){if(!o||"object"!=typeof o)return e;o=o[r]}return void 0===o?e:"string"==typeof o&&Object.keys(t).length>0?o.replace(/\{([^}]+)\}/g,(e,r)=>void 0!==t[r]?t[r]:e):o},changeLanguage:e=>{n(e),localStorage.setItem("language",e)},availableLanguages:[{code:"zh-CN",name:"中文简体"},{code:"en-US",name:"English"}]};return b.jsx(Fr.Provider,{value:o,children:t})},Hr=()=>{const t=e.useContext(Fr);if(!t)throw new Error("useLanguage must be used within a LanguageProvider");return t},Br=Or.nav`
  background-color: #2196F3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
`,_r=Or.div`
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
`,Wr=Or(o)`
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
`,qr=Or.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  
  /* 竖屏显示时减小图标尺寸 */
  @media (max-width: 768px) and (orientation: portrait) {
    width: 22px;
    height: 22px;
  }
`,Ur=Or.div`
  position: relative;
`,Gr=Or.button`
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
`,Yr=Or.div`
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
`,Jr=Or.button`
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
`;Or.span`
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
`;const Vr=()=>{ne();const{language:t,changeLanguage:r}=Hr(),[n,o]=e.useState(!1);e.useEffect(()=>{const e=e=>{e.target.closest(".language-selector")||o(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const i=e=>{r(e),o(!1)};return b.jsx(Br,{children:b.jsxs(_r,{children:[b.jsxs(Wr,{to:"/",children:[b.jsx(qr,{src:"/sudoku-app-logo.svg",alt:"Sudoku Logo"}),"SudokuTech"]}),b.jsxs(Ur,{className:"language-selector",children:[b.jsx(Gr,{onClick:()=>{o(!n)},children:"zh-CN"===t?"中文":"English"}),n&&b.jsxs(Yr,{children:[b.jsx(Jr,{className:"zh-CN"===t?"selected":"",onClick:()=>i("zh-CN"),children:"中文"}),b.jsx(Jr,{className:"en-US"===t?"selected":"",onClick:()=>i("en-US"),children:"English"})]})]})]})})},Xr=Or.footer`
  background-color: ${e=>e.theme.surface};
  color: ${e=>e.theme.textSecondary};
  padding: 20px 0;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`,Kr=Or.div`
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
`,Qr=Or.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
  ${e=>e.theme.mediaQueries.small} {
    gap: 15px;
  }
`,Zr=Or.a`
  color: ${e=>e.theme.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${e=>e.theme.primary};
  }
`,en=Or.div`
  font-size: 14px;
  line-height: 1.5;
`,tn=Or.div`
  font-size: 12px;
  margin-top: 10px;
`,rn=()=>{const{theme:e}=ne(),{t:t}=Hr(),r=(new Date).getFullYear();return b.jsx(Xr,{theme:e,children:b.jsxs(Kr,{theme:e,children:[b.jsxs(Qr,{theme:e,children:[b.jsx(Zr,{href:"#",theme:e,children:t("aboutUs")}),b.jsx(Zr,{href:"#",theme:e,children:t("help")}),b.jsx(Zr,{href:"#",theme:e,children:t("sudokuRules")}),b.jsx(Zr,{href:"#",theme:e,children:t("contactUs")})]}),b.jsxs(en,{theme:e,children:["© ",r," ",t("appName")," ",t("copyright")]}),b.jsxs(tn,{theme:e,children:[t("version")," 1.0.0"]})]})})},nn=Or.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`,on=Or.div`
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
`,an=Or.div`
  color: ${e=>e.theme.text};
  font-size: 16px;
  font-weight: 500;
`,sn=({showMessage:e=!0})=>{const{theme:t}=ne(),{loadingMessage:r}=ae();return b.jsxs(nn,{children:[b.jsx(on,{theme:t}),e&&b.jsx(an,{theme:t,children:r})]})},ln=Or.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  transition: background-color 0.3s ease, color 0.3s ease;
`,cn=Or.main`
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 640px) {
    padding: 15px;
  }
`,dn=Or.div`
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
`;function un({children:e}){const{theme:t}=ne(),{isLoading:r}=ae();return b.jsxs(ln,{theme:t,children:[b.jsx(Vr,{}),b.jsx(cn,{children:e}),b.jsx(rn,{}),r&&b.jsx(dn,{children:b.jsx(sn,{})})]})}const fn=e.createContext(),pn=({children:t})=>{const[r,n]=e.useState(null),[o,i]=e.useState(!1),[a,s]=e.useState({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),[l,d]=e.useState({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}});e.useEffect(()=>{u()},[]);const u=async()=>{try{let e=await c.getItem("userId");e||(e="user_"+Date.now()+"_"+Math.random().toString(36).substr(2,9),await c.setItem("userId",e),Q.success("欢迎使用数独学习应用！",{position:"top-right",autoClose:2e3})),n(e),i(!0);const t=await c.getItem(`stats_${e}`);t&&s(t);const r=await c.getItem(`techniques_${e}`);r&&d(r)}catch(e){console.error("初始化用户失败:",e),Q.error("初始化用户数据失败",{position:"top-right",autoClose:2e3})}},f=async(e,t)=>{try{const n={...l,[e]:{...l[e],...t}};d(n),r&&await c.setItem(`techniques_${r}`,n)}catch(n){console.error("更新技巧学习进度失败:",n)}},p={userId:r,isAuthenticated:o,userStats:a,techniquesProgress:l,updateUserStats:async e=>{try{const t={...a,...e};s(t),r&&await c.setItem(`stats_${r}`,t)}catch(t){console.error("更新用户统计失败:",t)}},updateTechniqueProgress:f,incrementTechniquePractice:async e=>{const t=l[e]||{mastered:0,practiced:0};await f(e,{practiced:t.practiced+1})},resetUserData:async()=>{try{r&&(await c.removeItem(`stats_${r}`),await c.removeItem(`techniques_${r}`),await c.removeItem(`progress_${r}`)),s({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),d({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}}),Q.success("用户数据已重置",{position:"top-right",autoClose:2e3})}catch(e){console.error("重置用户数据失败:",e),Q.error("重置用户数据失败",{position:"top-right",autoClose:2e3})}}};return b.jsx(fn.Provider,{value:p,children:t})},hn=()=>{const t=e.useContext(fn);if(!t)throw new Error("useUser must be used within a UserContextProvider");return t},mn=d.create({baseURL:"/",timeout:1e4,headers:{"Content-Type":"application/json"}});mn.interceptors.request.use(e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),mn.interceptors.response.use(e=>e.data,e=>{var t,r,n,o;const i=(null==(r=null==(t=e.response)?void 0:t.data)?void 0:r.message)||(null==(o=null==(n=e.response)?void 0:n.data)?void 0:o.error)||"请求失败，请重试";return Q.error(i,{position:"top-right",autoClose:2e3}),Promise.reject(e)});const gn={generatePuzzle:async e=>{try{return await mn.post("/sudoku/puzzles/generate",{difficulty:e})}catch(t){throw console.error("生成数独谜题失败:",t),t}},getRandomPuzzleByDifficulty:async e=>{try{console.log(`Fetching puzzle with difficulty: ${e}`);const t=await mn.get(`/sudoku/puzzles/random/${e}`);if(!t||!t.puzzle)return console.error("Invalid puzzle data received from server"),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e};const{puzzle:r,solution:n,difficulty:o}=t;console.log("完整响应数据:",JSON.stringify(t));let i=n;return i&&Array.isArray(i)&&9===i.length||(console.warn("Solution data is missing or invalid"),i=Array(9).fill().map(()=>Array(9).fill(0))),{puzzle:r,solution:i,difficulty:o||e}}catch(t){return console.error("Error fetching puzzle:",t),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e}}},getPuzzleById:async e=>{try{return await mn.get(`/sudoku/puzzles/${e}`)}catch(t){throw console.error("获取谜题失败:",t),t}},solveSudoku:async e=>{try{return await mn.post("/sudoku/solve",{board:e})}catch(t){throw console.error("求解数独失败:",t),t}},validateSudoku:async e=>{try{return await mn.post("/sudoku/validate",{board:e})}catch(t){throw console.error("验证数独失败:",t),t}},getCandidates:async(e,t,r)=>{try{return await mn.post("/sudoku/candidates",{board:e,row:t,col:r})}catch(n){throw console.error("获取候选数失败:",n),n}},identifyTechniques:async e=>{try{return await mn.post("/sudoku/techniques",{board:e})}catch(t){throw console.error("识别技巧失败:",t),t}},getHint:async(e,t)=>{try{return await mn.post("/sudoku/hint",{board:e,solution:t})}catch(r){throw console.error("获取提示失败:",r),r}},getPuzzleList:async(e={})=>{try{return await mn.get("/sudoku/puzzles",{params:e})}catch(t){throw console.error("获取谜题列表失败:",t),t}},getPuzzleStats:async()=>{try{return await mn.get("/sudoku/puzzles/stats")}catch(e){throw console.error("获取谜题统计失败:",e),e}},getUserProgress:async e=>{try{return await mn.get(`/user/progress/${e}`)}catch(t){throw console.error("获取用户进度失败:",t),t}},saveUserProgress:async(e,t)=>{try{return await mn.post(`/user/progress/${e}`,t)}catch(r){throw console.error("保存用户进度失败:",r),r}},getActiveProgress:async()=>{try{return await mn.get("/user/progress/active")}catch(e){throw console.error("获取活跃进度失败:",e),e}},getCompletedPuzzles:async()=>{try{return await mn.get("/user/progress/completed")}catch(e){throw console.error("获取已完成谜题失败:",e),e}},deleteUserProgress:async e=>{try{return await mn.delete(`/user/progress/${e}`)}catch(t){throw console.error("删除用户进度失败:",t),t}},getUserTechniques:async()=>{try{return await mn.get("/user/techniques")}catch(e){throw console.error("获取用户技巧学习情况失败:",e),e}},updateTechniqueLearning:async(e,t)=>{try{return await mn.post(`/user/techniques/${e}`,t)}catch(r){throw console.error("更新技巧学习情况失败:",r),r}},incrementTechniquePractice:async e=>{try{return await mn.post(`/user/techniques/${e}/practice`)}catch(t){throw console.error("增加技巧练习次数失败:",t),t}},getUserStats:async()=>{try{return await mn.get("/user/stats")}catch(e){throw console.error("获取用户统计信息失败:",e),e}},healthCheck:async()=>{try{return(await d.get("/health")).data}catch(e){throw console.error("健康检查失败:",e),e}}};let xn=class{constructor(e,t){this.row=e,this.col=t,this.up=this,this.down=this,this.left=this,this.right=this,this.colHead=null}};class yn extends xn{constructor(e){super(-1,e),this.size=0}}const vn=()=>Array(9).fill().map(()=>Array(9).fill(0)),bn=new class{constructor(){this.root=new xn(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[]}setupSudokuMatrix(e){this.colHeaders=[];for(let r=0;r<324;r++){const e=new yn(r);this.colHeaders.push(e)}let t=this.root;for(let r=0;r<324;r++)t.right=this.colHeaders[r],this.colHeaders[r].left=t,t=this.colHeaders[r];t.right=this.root,this.root.left=t,this.rows=[];for(let r=0;r<9;r++)for(let t=0;t<9;t++)for(let n=1;n<=9;n++){if(0!==e[r][t]&&e[r][t]!==n)continue;const o=[9*r+t,81+9*r+(n-1),162+9*t+(n-1),243+9*(3*Math.floor(r/3)+Math.floor(t/3))+(n-1)],i=[];for(let e of o){const t=new xn(this.rows.length,e);t.colHead=this.colHeaders[e],i.push(t)}for(let e=0;e<i.length;e++)i[e].left=i[(e-1+i.length)%i.length],i[e].right=i[(e+1)%i.length];for(let e of i){const t=e.colHead;e.up=t.up,t.up.down=e,e.down=t,t.up=e,t.size++}this.rows.push([r,t,n])}}selectColumn(){let e=1/0,t=null;for(let r=this.root.right;r!==this.root;r=r.right)r.size<e&&(e=r.size,t=r);return t}coverColumn(e){e.left.right=e.right,e.right.left=e.left;for(let t=e.down;t!==e;t=t.down)for(let e=t.right;e!==t;e=e.right)e.up.down=e.down,e.down.up=e.up,e.colHead.size--}uncoverColumn(e){for(let t=e.up;t!==e;t=t.up)for(let e=t.left;e!==t;e=e.left)e.up.down=e,e.down.up=e,e.colHead.size++;e.left.right=e,e.right.left=e}search(e=2){const t=[],r=()=>{if(this.root.right===this.root)return t.push([...this.solution]),t.length<e;const n=this.selectColumn();this.coverColumn(n);for(let e=n.down;e!==n;e=e.down){this.solution.push(this.rows[e.row]);for(let t=e.right;t!==e;t=t.right)this.coverColumn(t.colHead);if(!r())return!1;this.solution.pop();for(let t=e.left;t!==e;t=t.left)this.uncoverColumn(t.colHead)}return this.uncoverColumn(n),!0};return r(),t}solveSudoku(e){this.root=new xn(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);const t=this.search(1);if(0===t.length)return null;const r=Array(9).fill().map(()=>Array(9).fill(0));for(let[n,o,i]of t[0])r[n][o]=i;return r}hasUniqueSolution(e){this.root=new xn(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);return 1===this.search(2).length}},wn=(e,t,r,n)=>{for(let a=0;a<9;a++)if(a!==r&&e[t][a]===n)return!1;for(let a=0;a<9;a++)if(a!==t&&e[a][r]===n)return!1;const o=3*Math.floor(t/3),i=3*Math.floor(r/3);for(let a=o;a<o+3;a++)for(let o=i;o<i+3;o++)if(a!==t&&o!==r&&e[a][o]===n)return!1;return!0},kn=e=>{for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(0===e[t][r])return[t,r];return null},jn=e=>{try{return bn.hasUniqueSolution(e)}catch(t){return console.error("验证数独唯一性时出错:",t),Cn(e)}},Cn=e=>{const t=e.map(e=>[...e]);let r=0;const n=()=>{if(r>1)return;const e=kn(t);if(!e)return void r++;const[o,i]=e;for(let r=1;r<=9;r++)wn(t,o,i,r)&&(t[o][i]=r,n(),t[o][i]=0)};return n(),1===r},Sn=()=>{const e=[1,2,3,4,5,6,7,8,9];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},zn=async(e="medium")=>{console.log(`开始生成${e}难度的数独题目`);const t=(()=>{console.debug("开始生成完整的数独解");for(let t=1;t<=10;t++)try{const e=vn();for(let t=0;t<9;t+=3){const r=Sn();let n=0;for(let o=0;o<3;o++)for(let i=0;i<3;i++)e[t+o][t+i]=r[n++]}const r=bn.solveSudoku(e);if(r&&$n(r))return console.debug(`成功生成完整数独解（尝试次数：${t}）`),r;const n=()=>{const t=kn(e);if(!t)return!0;const[r,o]=t,i=Sn();for(const a of i)if(wn(e,r,o,a)){if(e[r][o]=a,n())return!0;e[r][o]=0}return!1};if(n()&&$n(e))return console.debug(`使用回溯算法成功生成完整数独解（尝试次数：${t}）`),e}catch(e){console.error(`生成数独解时出错（尝试 ${t}/10）:`,e)}return console.error("超过最大尝试次数（10），无法生成有效的数独解"),null})();if(!t)return console.error("生成完整数独解失败"),null;const r=t.map(e=>[...e]);let n;switch(e){case"easy":n=40;break;case"medium":default:n=50;break;case"hard":n=55;break;case"expert":n=60}let o=0;const i=[];for(let a=0;a<9;a++)for(let e=0;e<9;e++)i.push([a,e]);for(let a=i.length-1;a>0;a--){const e=Math.floor(Math.random()*(a+1));[i[a],i[e]]=[i[e],i[a]]}for(const[a,s]of i){if(o>=n)break;const e=r[a][s];r[a][s]=0,jn(r)?(o++,console.debug(`已移除单元格(${a},${s})，当前已移除${o}/${n}个`)):r[a][s]=e}return jn(r)||console.warn(`警告：生成的${e}难度题目可能没有唯一解，尝试重新生成`),console.log(`成功生成${e}难度数独题目，保留了${81-o}个数字`),{puzzle:r,solution:t}},$n=e=>{for(let t=0;t<9;t++){const r=new Set;for(let n=0;n<9;n++){const o=e[t][n];if(0!==o){if(r.has(o))return!1;r.add(o)}}}for(let t=0;t<9;t++){const r=new Set;for(let n=0;n<9;n++){const o=e[n][t];if(0!==o){if(r.has(o))return!1;r.add(o)}}}for(let t=0;t<3;t++)for(let r=0;r<3;r++){const n=new Set;for(let o=0;o<3;o++)for(let i=0;i<3;i++){const a=3*r+i,s=e[3*t+o][a];if(0!==s){if(n.has(s))return!1;n.add(s)}}}return!0};let Pn=null,Tn=null;const An=18e5,Nn=async()=>{try{console.log("开始获取随机专家级题目");const e=await(async()=>{try{const e=Date.now();if(Pn&&Tn&&e-Tn<An)return console.log("使用缓存的专家级题目数据"),Pn;const t=await c.getItem("expert_puzzles_cache");if(t&&t.timestamp&&e-t.timestamp<An)return console.log("从localforage加载缓存的专家级题目"),Pn=t.data,Tn=t.timestamp,Pn;console.log("从JSON文件加载专家级题目");const r=await fetch("/expert_puzzles.json");if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const n=await r.json();if(!n.puzzles||!Array.isArray(n.puzzles))throw new Error("无效的专家级题目数据格式");return Pn=n.puzzles,Tn=e,await c.setItem("expert_puzzles_cache",{data:n.puzzles,timestamp:e}),console.log(`成功加载 ${n.puzzles.length} 个专家级题目`),n.puzzles}catch(e){return console.error("加载专家级题目失败:",e),[]}})();if(!e||0===e.length)return console.warn("没有可用的专家级题目"),null;const t=e[Math.floor(Math.random()*e.length)];if(!t||!t.puzzle||!t.solution){if(console.error("选中的谜题数据不完整:",t),e.length>1){console.log("尝试重新选择另一个谜题");const t=e.filter(e=>e&&e.puzzle&&e.solution);if(t.length>0){const e=Math.floor(Math.random()*t.length);return console.log(`重新选择有效专家级题目 #${t[e].id||"unknown"}`),t[e]}}return null}return console.log(`随机选择专家级题目 #${t.id||"unknown"}`),t}catch(e){return console.error("获取随机专家级题目失败:",e),null}},In=(e,t)=>{const r=[];for(let n=1;n<=9;n++){let o=0,i=-1;for(let r=0;r<9&&!(0===e[t][r]&&(Mn(e,t,r,n)&&(o++,i=r),o>1));r++);1===o&&r.push({type:"hiddenSingleRow",description:"hiddenSingleRow",row:t,col:i,value:n,cells:[[t,i]],message:`在第${t+1}行中，数字${n}只能填入单元格(${t+1},${i+1})`})}return r},En=(e,t)=>{const r=[];for(let n=1;n<=9;n++){let o=0,i=-1;for(let r=0;r<9&&!(0===e[r][t]&&(Mn(e,r,t,n)&&(o++,i=r),o>1));r++);1===o&&r.push({type:"hiddenSingleCol",description:"hiddenSingleCol",row:i,col:t,value:n,cells:[[i,t]],message:`在第${t+1}列中，数字${n}只能填入单元格(${i+1},${t+1})`})}return r},Rn=(e,t)=>{const r=[],n=3*Math.floor(t/3),o=t%3*3;for(let i=1;i<=9;i++){let a=0,s=-1,l=-1;for(let t=0;t<3;t++){for(let r=0;r<3;r++){const c=n+t,d=o+r;if(0===e[c][d]&&(Mn(e,c,d,i)&&(a++,s=c,l=d),a>1))break}if(a>1)break}1===a&&r.push({type:"hiddenSingleBox",description:"hiddenSingleBox",row:s,col:l,value:i,cells:[[s,l]],message:`在第${t+1}宫中，数字${i}只能填入单元格(${s+1},${l+1})`})}return r},Mn=(e,t,r,n)=>{for(let a=0;a<9;a++)if(e[t][a]===n)return!1;for(let a=0;a<9;a++)if(e[a][r]===n)return!1;const o=3*Math.floor(t/3),i=3*Math.floor(r/3);for(let a=o;a<o+3;a++)for(let t=i;t<i+3;t++)if(e[a][t]===n)return!1;return!0},On=(e,t={})=>{const r=(e=>{const t=[];for(let r=0;r<9;r++)for(let n=0;n<9;n++){if(0!==e[r][n])continue;const o=[];for(let t=1;t<=9;t++)Mn(e,r,n,t)&&o.push(t);1===o.length&&t.push({type:"nakedSingle",description:"nakedSingle",row:r,col:n,value:o[0],cells:[[r,n]],message:`单元格(${r+1},${n+1})只有数字${o[0]}可以填入`})}return t})(e),n=(e=>{const t=[],r=new Set;for(let n=0;n<9;n++){const o=In(e,n);for(const n of o){const o=`${n.row}-${n.col}`;r.has(o)||0!==e[n.row][n.col]||(r.add(o),t.push(n))}}for(let n=0;n<9;n++){const o=En(e,n);for(const n of o){const o=`${n.row}-${n.col}`;r.has(o)||0!==e[n.row][n.col]||(r.add(o),t.push(n))}}for(let n=0;n<9;n++){const o=Rn(e,n);for(const n of o){const o=`${n.row}-${n.col}`;r.has(o)||0!==e[n.row][n.col]||(r.add(o),t.push(n))}}return t})(e),o=((e,t={})=>{const r=[];for(let n=0;n<9;n++)for(let o=0;o<9;o++){if(0!==e[n][o])continue;const i=t[`${n}-${o}`]||[];1===i.length&&r.push({type:"notesSingle",description:"singleCandidateTechnique",row:n,col:o,value:i[0],cells:[[n,o]],notes:i,message:`单元格(${n+1},${o+1})的候选数中只有数字${i[0]}`})}return r})(e,t),i=((e,t={})=>{const r=[],n=n=>{const o=[];for(let r=0;r<9;r++){if(0!==e[n][r])continue;const i=t[`${n}-${r}`]||[];2===i.length&&o.push({row:n,col:r,notes:i})}for(let e=0;e<o.length-1;e++)for(let t=e+1;t<o.length;t++){const i=o[e],a=o[t];i.notes.sort().join(",")===a.notes.sort().join(",")&&r.push({type:"nakedPairRow",description:"显性数对法(行)",cells:[[i.row,i.col],[a.row,a.col]],values:i.notes,message:`在第${n+1}行，单元格(${i.col+1})和(${a.col+1})形成显性数对[${i.notes.join(",")}]`})}},o=n=>{const o=[];for(let r=0;r<9;r++){if(0!==e[r][n])continue;const i=t[`${r}-${n}`]||[];2===i.length&&o.push({row:r,col:n,notes:i})}for(let e=0;e<o.length-1;e++)for(let t=e+1;t<o.length;t++){const i=o[e],a=o[t];i.notes.sort().join(",")===a.notes.sort().join(",")&&r.push({type:"nakedPairCol",description:"显性数对法(列)",cells:[[i.row,i.col],[a.row,a.col]],values:i.notes,message:`在第${n+1}列，单元格(${i.row+1})和(${a.row+1})形成显性数对[${i.notes.join(",")}]`})}},i=(n,o)=>{const i=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const s=3*n+r,l=3*o+a;if(0!==e[s][l])continue;const c=t[`${s}-${l}`]||[];2===c.length&&i.push({row:s,col:l,notes:c})}for(let e=0;e<i.length-1;e++)for(let t=e+1;t<i.length;t++){const a=i[e],s=i[t];a.notes.sort().join(",")===s.notes.sort().join(",")&&r.push({type:"nakedPairBox",description:"显性数对法(宫)",cells:[[a.row,a.col],[s.row,s.col]],values:a.notes,message:`在第${3*n+o+1}宫，单元格(${a.row+1},${a.col+1})和(${s.row+1},${s.col+1})形成显性数对[${a.notes.join(",")}]`})}};for(let a=0;a<9;a++)n(a),o(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),a=((e,t={})=>{const r=[],n=n=>{const o={};for(let e=1;e<=9;e++)o[e]=[];for(let r=0;r<9;r++)0===e[n][r]&&(t[`${n}-${r}`]||[]).forEach(e=>{o[e]&&o[e].push(r)});const i=Object.keys(o).map(Number).filter(e=>2===o[e].length);for(let e=0;e<i.length-1;e++)for(let t=e+1;t<i.length;t++){const a=i[e],s=i[t];if(o[a].sort().join(",")===o[s].sort().join(",")){const e=o[a];r.push({type:"hiddenPairRow",description:"隐性数对法(行)",cells:[[n,e[0]],[n,e[1]]],values:[a,s],message:`在第${n+1}行，数字${a}和${s}只能出现在单元格(${e[0]+1})和(${e[1]+1})中`})}}},o=n=>{const o={};for(let e=1;e<=9;e++)o[e]=[];for(let r=0;r<9;r++)0===e[r][n]&&(t[`${r}-${n}`]||[]).forEach(e=>{o[e]&&o[e].push(r)});const i=Object.keys(o).map(Number).filter(e=>2===o[e].length);for(let e=0;e<i.length-1;e++)for(let t=e+1;t<i.length;t++){const a=i[e],s=i[t];if(o[a].sort().join(",")===o[s].sort().join(",")){const e=o[a];r.push({type:"hiddenPairCol",description:"隐性数对法(列)",cells:[[e[0],n],[e[1],n]],values:[a,s],message:`在第${n+1}列，数字${a}和${s}只能出现在单元格(${e[0]+1})和(${e[1]+1})中`})}}},i=(n,o)=>{const i={};for(let e=1;e<=9;e++)i[e]=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const s=3*n+r,l=3*o+a;0===e[s][l]&&(t[`${s}-${l}`]||[]).forEach(e=>{i[e]&&i[e].push({row:s,col:l})})}const a=Object.keys(i).map(Number).filter(e=>2===i[e].length);for(let e=0;e<a.length-1;e++)for(let t=e+1;t<a.length;t++){const s=a[e],l=a[t],c=i[s].map(e=>`${e.row}-${e.col}`).sort(),d=i[l].map(e=>`${e.row}-${e.col}`).sort();if(c.join(",")===d.join(",")){const e=i[s];r.push({type:"hiddenPairBox",description:"隐性数对法(宫)",cells:e.map(e=>[e.row,e.col]),values:[s,l],message:`在第${3*n+o+1}宫，数字${s}和${l}只能出现在单元格(${e[0].row+1},${e[0].col+1})和(${e[1].row+1},${e[1].col+1})中`})}}};for(let a=0;a<9;a++)n(a),o(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),s=((e,t={})=>{const r=[],n=n=>{const o=[];for(let r=0;r<9;r++){if(0!==e[n][r])continue;const i=t[`${n}-${r}`]||[];i.length>=1&&i.length<=3&&o.push({row:n,col:r,notes:i})}for(let e=0;e<o.length-2;e++)for(let t=e+1;t<o.length-1;t++)for(let i=t+1;i<o.length;i++){const a=o[e],s=o[t],l=o[i],c=[...new Set([...a.notes,...s.notes,...l.notes])];if(3===c.length){const e=a.notes.every(e=>c.includes(e)),t=s.notes.every(e=>c.includes(e)),o=l.notes.every(e=>c.includes(e));e&&t&&o&&r.push({type:"nakedTripleRow",description:"显性三链数法(行)",cells:[[a.row,a.col],[s.row,s.col],[l.row,l.col]],values:c,message:`在第${n+1}行，单元格(${a.col+1})、(${s.col+1})和(${l.col+1})形成显性三链数[${c.join(",")}]`})}}},o=n=>{const o=[];for(let r=0;r<9;r++){if(0!==e[r][n])continue;const i=t[`${r}-${n}`]||[];i.length>=1&&i.length<=3&&o.push({row:r,col:n,notes:i})}for(let e=0;e<o.length-2;e++)for(let t=e+1;t<o.length-1;t++)for(let i=t+1;i<o.length;i++){const a=o[e],s=o[t],l=o[i],c=[...new Set([...a.notes,...s.notes,...l.notes])];if(3===c.length){const e=a.notes.every(e=>c.includes(e)),t=s.notes.every(e=>c.includes(e)),o=l.notes.every(e=>c.includes(e));e&&t&&o&&r.push({type:"nakedTripleCol",description:"显性三链数法(列)",cells:[[a.row,a.col],[s.row,s.col],[l.row,l.col]],values:c,message:`在第${n+1}列，单元格(${a.row+1})、(${s.row+1})和(${l.row+1})形成显性三链数[${c.join(",")}]`})}}},i=(n,o)=>{const i=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const s=3*n+r,l=3*o+a;if(0!==e[s][l])continue;const c=t[`${s}-${l}`]||[];c.length>=1&&c.length<=3&&i.push({row:s,col:l,notes:c})}for(let e=0;e<i.length-2;e++)for(let t=e+1;t<i.length-1;t++)for(let a=t+1;a<i.length;a++){const s=i[e],l=i[t],c=i[a],d=[...new Set([...s.notes,...l.notes,...c.notes])];if(3===d.length){const e=s.notes.every(e=>d.includes(e)),t=l.notes.every(e=>d.includes(e)),i=c.notes.every(e=>d.includes(e));e&&t&&i&&r.push({type:"nakedTripleBox",description:"显性三链数法(宫)",cells:[[s.row,s.col],[l.row,l.col],[c.row,c.col]],values:d,message:`在第${3*n+o+1}宫，单元格(${s.row+1},${s.col+1})、(${l.row+1},${l.col+1})和(${c.row+1},${c.col+1})形成显性三链数[${d.join(",")}]`})}}};for(let a=0;a<9;a++)n(a),o(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),l=((e,t={})=>{const r=[],n=n=>{const o={};for(let e=1;e<=9;e++)o[e]=[];for(let r=0;r<9;r++)0===e[n][r]&&(t[`${n}-${r}`]||[]).forEach(e=>{o[e]&&o[e].push(r)});const i=Object.keys(o).map(Number).filter(e=>3===o[e].length);for(let e=0;e<i.length-2;e++)for(let t=e+1;t<i.length-1;t++)for(let a=t+1;a<i.length;a++){const s=i[e],l=i[t],c=i[a],d=o[s].sort().join(","),u=o[l].sort().join(","),f=o[c].sort().join(",");if(d===u&&u===f){const e=o[s];r.push({type:"hiddenTripleRow",description:"隐性三链数法(行)",cells:[[n,e[0]],[n,e[1]],[n,e[2]]],values:[s,l,c],message:`在第${n+1}行，数字${s}、${l}和${c}只能出现在单元格(${e[0]+1})、(${e[1]+1})和(${e[2]+1})中`})}}},o=n=>{const o={};for(let e=1;e<=9;e++)o[e]=[];for(let r=0;r<9;r++)0===e[r][n]&&(t[`${r}-${n}`]||[]).forEach(e=>{o[e]&&o[e].push(r)});const i=Object.keys(o).map(Number).filter(e=>3===o[e].length);for(let e=0;e<i.length-2;e++)for(let t=e+1;t<i.length-1;t++)for(let a=t+1;a<i.length;a++){const s=i[e],l=i[t],c=i[a],d=o[s].sort().join(","),u=o[l].sort().join(","),f=o[c].sort().join(",");if(d===u&&u===f){const e=o[s];r.push({type:"hiddenTripleCol",description:"隐性三链数法(列)",cells:[[e[0],n],[e[1],n],[e[2],n]],values:[s,l,c],message:`在第${n+1}列，数字${s}、${l}和${c}只能出现在单元格(${e[0]+1})、(${e[1]+1})和(${e[2]+1})中`})}}},i=(n,o)=>{const i={};for(let e=1;e<=9;e++)i[e]=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const s=3*n+r,l=3*o+a;0===e[s][l]&&(t[`${s}-${l}`]||[]).forEach(e=>{i[e]&&i[e].push({row:s,col:l})})}const a=Object.keys(i).map(Number).filter(e=>3===i[e].length);for(let e=0;e<a.length-2;e++)for(let t=e+1;t<a.length-1;t++)for(let s=t+1;s<a.length;s++){const l=a[e],c=a[t],d=a[s],u=i[l].map(e=>`${e.row}-${e.col}`).sort().join(","),f=i[c].map(e=>`${e.row}-${e.col}`).sort().join(","),p=i[d].map(e=>`${e.row}-${e.col}`).sort().join(",");if(u===f&&f===p){const e=i[l];r.push({type:"hiddenTripleBox",description:"隐性三链数法(宫)",cells:e.map(e=>[e.row,e.col]),values:[l,c,d],message:`在第${3*n+o+1}宫，数字${l}、${c}和${d}只能出现在单元格(${e[0].row+1},${e[0].col+1})、(${e[1].row+1},${e[1].col+1})和(${e[2].row+1},${e[2].col+1})中`})}}};for(let a=0;a<9;a++)n(a),o(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t);return[...r,...n,...o,...i,...a,...s,...l]},Ln=e.createContext(),Fn={EASY:"easy",MEDIUM:"medium",HARD:"hard",EXPERT:"expert"},Dn=({children:t})=>{const{userId:r,updateUserStats:n}=hn(),[o,i]=e.useState(null),[a,s]=e.useState(null),[l,d]=e.useState(null),[u,f]=e.useState(null),[p,h]=e.useState(Fn.MEDIUM),[m,g]=e.useState(!1),[x,y]=e.useState(!1),[v,w]=e.useState(0),[k,j]=e.useState(!1),[C,S]=e.useState(null),[z,$]=e.useState({}),[P,T]=e.useState([]),[A,N]=e.useState([]),[I,E]=e.useState([]),[R,M]=e.useState(-1),[O,L]=e.useState(0),[F,D]=e.useState(0),[H,B]=e.useState(new Set),[_,W]=e.useState(!1),[q,U]=e.useState({}),[G,Y]=e.useState(new Set);e.useEffect(()=>{(async()=>{console.log("SudokuContext: 初始化自动生成谜题");try{U({}),E([]),M(-1),L(0),D(0),B(new Set),Y(new Set),console.log("使用预设的数独题目");const e={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]};console.log("预设谜题数据:",e);const t=ee(e);console.log("格式化后的数据:",t),i(t),console.log("设置 currentPuzzle 完成"),d(t.puzzle),console.log("设置 originalPuzzle 完成"),s(t.puzzle),console.log("设置 currentBoard 完成，currentBoard:",t.puzzle),f(t.solution),console.log("设置 solution 完成"),g(!0),console.log("设置 gameStarted 为 true"),y(!1),j(!0),L(0),D(0),B(new Set),console.log("谜题初始化完成")}catch(e){console.error("自动初始化谜题失败:",e),console.error("错误详情:",e.message,e.stack)}})()},[]),e.useEffect(()=>{if(o&&a&&m&&!x){const e=setTimeout(()=>{V()},3e4);return()=>clearTimeout(e)}},[a,m,x]),e.useEffect(()=>{let e;return k&&(e=setInterval(()=>{w(e=>e+1)},1e3)),()=>{e&&clearInterval(e)}},[k]);const J=e.useCallback(async()=>{try{if(!r)return null;const e=(await c.keys()).filter(e=>e.startsWith(`progress_${r}_`));if(0===e.length)return null;let t=null,n=0;for(const r of e){const e=await c.getItem(r);e.lastModified>n&&(n=e.lastModified,t=e)}return t&&(i({id:t.puzzleId,puzzle:t.puzzle}),s(t.currentBoard),f(t.solution),h(t.difficulty),w(t.timeElapsed),g(t.gameStarted),y(t.gameCompleted),L(t.errorCount||0),D(t.errorCount||0),B(new Set(t.incorrectCells||[])),j(!1)),t}catch(e){return console.error("加载游戏进度失败:",e),null}},[r]),V=e.useCallback(async()=>{try{if(!r||!o||!a)return;const e={puzzleId:o.id,puzzle:o.puzzle,solution:u,difficulty:p,currentBoard:a,timeElapsed:v,gameStarted:m,gameCompleted:x,errorCount:F,incorrectCells:Array.from(H),lastModified:Date.now()};return await c.setItem(`progress_${r}_${o.id}`,e),!0}catch(e){return console.error("保存游戏进度失败:",e),!1}},[r,o,a,u,p,v,m,x,O,H]),X=()=>Array(9).fill().map(()=>Array(9).fill(0)),K=async(e="medium")=>{try{console.log(`开始生成${e}难度的数独题目...`);const t=await zn(e);if(console.log("generateSudoku 返回结果:",t),!t||!t.puzzle||!t.solution)throw console.error("生成的数独数据不完整:",t),new Error("生成的数独数据不完整");const{puzzle:r,solution:n}=t;return jn(r)?(console.log(`成功生成${e}难度的数独题目，使用DLX算法验证了唯一解`),console.log("谜题数据预览:",r.slice(0,2).map(e=>e.slice(0,2).join(",")).join(";")),{puzzle:r,solution:n}):(console.warn("警告：生成的数独题目可能没有唯一解"),K(e))}catch(t){return console.error(`生成${e}难度的数独题目时出错:`,t),await Z(e)}},Z=async(e="medium")=>{try{console.log(`使用备用方法生成${e}难度的数独题目...`);const{puzzle:t,solution:r}=await zn(e);return console.log(`备用方法成功生成${e}难度的数独题目`),{puzzle:t,solution:r}}catch(t){console.error("备用方法生成数独题目失败:",t);const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];return console.log("使用预设的简单数独题目作为最后的备用"),{puzzle:e,solution:r}}},ee=e=>{if(console.log("formatPuzzleData 输入:",e),e&&e.puzzle){if("string"==typeof e.puzzle&&81===e.puzzle.length){const t=[];for(let r=0;r<9;r++){t.push([]);for(let n=0;n<9;n++)t[r].push(parseInt(e.puzzle[9*r+n])||0)}return{puzzle:t,solution:e.solution&&"string"==typeof e.solution&&81===e.solution.length?(()=>{const t=[];for(let r=0;r<9;r++){t.push([]);for(let n=0;n<9;n++)t[r].push(parseInt(e.solution[9*r+n])||0)}return t})():t}}if(Array.isArray(e.puzzle)&&9===e.puzzle.length){const t=e.puzzle.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0));let r=t;return e.solution&&Array.isArray(e.solution)&&9===e.solution.length&&(r=e.solution.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0))),console.log("formatPuzzleData 输出:",{puzzle:t,solution:r}),{puzzle:t,solution:r}}}console.warn("formatPuzzleData: 输入数据不完整或格式不正确，返回默认空数组",e);const t=Array(9).fill().map(()=>Array(9).fill(0));return{puzzle:t,solution:t}},te=(e,t,r)=>!u||!u[e]||void 0===u[e][t]||u[e][t]===r,re=(e,t,r)=>{if(!m||x)return;if(l&&l[e]&&null!==l[e][t]&&0!==l[e][t])return void console.log("Cannot modify prefilled cell with notes:",e,t);const n=`${e}-${t}`,o={...q},i=I.slice(0,R+1);i.push({board:a,pencilNotes:{...q},row:e,col:t,type:"pencil"}),E(i),M(i.length-1),o[n]?o[n].includes(r)?(o[n]=o[n].filter(e=>e!==r),0===o[n].length&&delete o[n]):o[n]=[...new Set([...o[n],r])].sort((e,t)=>e-t):o[n]=[r],U(o)},ne=(e,t)=>{if(!m||x)return;const r=`${e}-${t}`;if(!q[r])return;const n=I.slice(0,R+1);n.push({board:a,pencilNotes:{...q},row:e,col:t,type:"clear-pencil"}),E(n),M(n.length-1);const o={...q};delete o[r],U(o)},oe=(e,t,r)=>{if(!m||x)return;const n=`${e}-${t}`;if(l&&l[e]&&null!==l[e][t]&&0!==l[e][t])return void console.log("Cannot modify prefilled cell:",e,t);if(G.has(n))return void console.log("Cannot modify locked cell (correct answer):",e,t);if(_)return void(0===r?ne(e,t):re(e,t,r));const o=[...a.map(e=>[...e])],i=te(e,t,r);o[e][t]=r,s(o);const c={...q};if(0!==r&&c[n]&&delete c[n],0!==r&&i){for(let i=0;i<9;i++)if(i!==t){const t=`${e}-${i}`;c[t]&&(c[t]=c[t].filter(e=>e!==r),0===c[t].length&&delete c[t])}for(let i=0;i<9;i++)if(i!==e){const e=`${i}-${t}`;c[e]&&(c[e]=c[e].filter(e=>e!==r),0===c[e].length&&delete c[e])}const n=3*Math.floor(e/3),o=3*Math.floor(t/3);for(let i=n;i<n+3;i++)for(let n=o;n<o+3;n++)if(i!==e||n!==t){const e=`${i}-${n}`;c[e]&&(c[e]=c[e].filter(e=>e!==r),0===c[e].length&&delete c[e])}}U(c);const d=I.slice(0,R+1);d.push({board:a,pencilNotes:{...q},row:e,col:t,prevValue:a[e][t],type:"fill",isCorrectInput:0!==r&&i}),E(d),M(d.length-1);const u=new Set(H);if(0!==r)if(i){u.delete(n);const e=new Set(G);e.add(n),Y(e)}else H.has(n)||D(e=>e+1),u.add(n),Q.error("输入错误，请重试！",{position:"top-right",autoClose:1e3,theme:"colored"});else u.delete(n);B(u),ie(o)},ie=e=>{if(u){for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(!e[t][r]||e[t][r]!==u[t][r])return;y(!0),j(!1),B(new Set),n&&n({puzzlesCompleted:1,puzzlesSolved:1,totalTimePlayed:v}),Q.success("恭喜！您成功完成了这个数独！",{position:"top-right",autoClose:3e3}),V()}},ae=e.useCallback(()=>{try{const e=On(a,q);return N(e),e}catch(e){return console.error("识别技巧失败:",e),[]}},[a,q]),se=e.useCallback(e=>{try{const t=((e,t)=>{const r=t.map(e=>[...e]);switch(e.type){case"nakedSingle":case"hiddenSingleRow":case"hiddenSingleCol":case"hiddenSingleBox":case"notesSingle":if(void 0!==e.row&&void 0!==e.col&&void 0!==e.value)return r[e.row][e.col]=e.value,{board:r,operation:{type:"fill",row:e.row,col:e.col,value:e.value}};break;case"nakedPairRow":case"nakedPairCol":case"nakedPairBox":case"hiddenPairRow":case"hiddenPairCol":case"hiddenPairBox":case"nakedTripleRow":case"nakedTripleCol":case"nakedTripleBox":case"hiddenTripleRow":case"hiddenTripleCol":case"hiddenTripleBox":return{board:r,operation:{type:"highlight",cells:e.cells,values:e.values}};default:return console.warn("未知的技巧类型:",e.type),{board:r,operation:null}}return{board:r,operation:null}})(e,a);if(t&&t.board){const r=t.operation;if(r&&"fill"===r.type&&"number"==typeof r.row&&"number"==typeof r.col&&"number"==typeof r.value){const{row:e,col:t,value:n}=r,o=_;return o&&W(!1),oe(e,t,n),o&&W(!0),!0}if(r&&"removeCandidates"===r.type&&Array.isArray(r.cells)){const t={...z};return r.cells.forEach(e=>{if("number"==typeof e.row&&"number"==typeof e.col&&Array.isArray(e.valuesToRemove)){const r=`${e.row}-${e.col}`,n=(z[r]||[]).filter(t=>!e.valuesToRemove.includes(t));t[r]=n}}),$(t),console.log("成功移除候选数:",e.type),Q.success("候选数已成功移除",{position:"top-right",autoClose:2e3}),!0}return r&&"highlight"===r.type?(console.log("技巧应用成功（高亮提示）:",e.type),e.type&&(e.type.includes("Pair")||e.type.includes("pair"))&&Q.success("数对技巧已识别，建议手动移除相关候选数",{position:"top-right",autoClose:3e3}),!0):(console.warn("无法应用技巧：操作信息不完整或类型不支持",r),Q.info("此技巧主要用于提示，暂不支持自动应用",{position:"top-right",autoClose:2e3}),!1)}return!1}catch(t){return console.error("应用技巧失败:",t),Q.error("应用技巧失败，请重试",{position:"top-right",autoClose:2e3}),!1}},[oe,a,_,z,$]),le=(e,t)=>{if(!a)return[];const r=[];for(let n=1;n<=9;n++)ce(e,t,n)&&r.push(n);return r.sort((e,t)=>e-t)},ce=(e,t,r)=>{if(!a)return!1;for(let i=0;i<9;i++)if(a[e][i]===r)return!1;for(let i=0;i<9;i++)if(a[i][t]===r)return!1;const n=3*Math.floor(e/3),o=3*Math.floor(t/3);for(let i=n;i<n+3;i++)for(let e=o;e<o+3;e++)if(a[i][e]===r)return!1;return!0},de={currentPuzzle:o,currentBoard:a||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:l,solution:u||Array(9).fill().map(()=>Array(9).fill(0)),difficulty:p,gameStarted:m,gameCompleted:x,timeElapsed:v,timerActive:k,isTimerActive:k,selectedCell:C,candidates:z,highlightedCells:P,activeTechniques:A,lockedCells:G,history:I,historyIndex:R,errorCount:F,incorrectCells:H,isPencilMode:_,pencilNotes:q,setDifficulty:h,setSelectedCell:S,setHighlightedCells:T,setTimerActive:j,toggleTimer:()=>{j(e=>!e)},togglePencilMode:()=>{W(e=>!e)},togglePencilNote:re,clearPencilNotes:ne,fillAllCandidates:()=>{if(!m||x||!a)return;const e={},t=I.slice(0,R+1);t.push({board:a,pencilNotes:{...q},type:"fill-candidates"}),E(t),M(t.length-1);for(let r=0;r<9;r++)for(let t=0;t<9;t++){if(l&&l[r]&&0!==l[r][t]||a[r]&&0!==a[r][t])continue;const n=le(r,t);n.length>0&&(e[`${r}-${t}`]=n)}U(e),Q.info("已为所有空白格子计算并填充候选数！",{position:"top-right",autoClose:2e3})},loadSavedProgress:J,saveGameProgress:V,startNewGame:async(e=null,t=null,r=!0)=>{console.log("SudokuContext: 开始新游戏",{puzzleId:e,difficultyOverride:t});try{g(!1),s(X()),U({}),W(!1),$({}),N([]),T([]),S(null),j(!1),w(0),y(!1),E([]),M(-1),L(0),D(0),B(new Set),Y(new Set),await new Promise(e=>setTimeout(e,50)),g(!0),await new Promise(e=>setTimeout(e,50));const e=t||p;let l;console.log("使用难度:",e),e!==p&&h(e);let c=0;const u=3;let m=!1;for(;!l&&c<u;){c++,console.log(`尝试生成谜题 (${c}/${u})`);try{if(e===Fn.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const e=await Nn();e&&e.puzzle&&e.solution?(l=e,m=!0,console.log("成功从JSON文件获取专家级谜题")):console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成")}catch(o){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",o)}}l||(console.log("使用程序生成谜题"),l=await K(e))}catch(a){console.error(`生成谜题失败 (尝试 ${c}/${u}):`,a)}}if(!l){console.error("多次尝试生成谜题失败，使用备用谜题");l={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]}}const x=ee(l);if(console.log("谜题数据准备完成，formattedData:",x),!x||!x.puzzle||!Array.isArray(x.puzzle)||9!==x.puzzle.length){console.error("格式化后的数据无效，使用备用谜题");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];x.puzzle=e,x.solution=t}return i(x),console.log("设置 currentPuzzle 完成"),d(x.puzzle),console.log("设置 originalPuzzle 完成"),s(x.puzzle),console.log("设置 currentBoard 完成"),f(x.solution),console.log("设置 solution 完成"),g(!0),y(!1),w(0),j(!0),E([]),M(-1),n&&n({puzzlesStarted:1}),r&&(e===Fn.EXPERT?Q.success(m?"Expert puzzle loaded!":"Expert puzzle generated!",{position:"top-right",autoClose:2e3}):r&&Q.success("New puzzle generated!",{position:"top-right",autoClose:2e3})),console.log("新游戏设置完成"),x}catch(l){console.error("开始新游戏失败:",l);try{const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],n={puzzle:e,solution:t};return i(n),d(e),s(e),f(t),g(!0),y(!1),j(!0),r&&Q.success("Backup puzzle used!",{position:"top-right",autoClose:2e3}),n}catch(c){console.error("使用备用谜题也失败:",c),r&&Q.error("生成谜题失败，请刷新页面重试",{position:"top-right",autoClose:2e3})}return null}},generateNewPuzzle:async(e=p,t=!0)=>{console.log("SudokuContext: 生成新谜题",{targetDifficulty:e});try{let t;if(s(X()),U({}),W(!1),$({}),N([]),T([]),j(!1),w(0),y(!1),E([]),M(-1),L(0),D(0),B(new Set),Y(new Set),g(!0),await new Promise(e=>setTimeout(e,50)),e!==p&&(h(e),console.log("已设置新难度:",e)),e===Fn.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const r=await Nn();r&&r.puzzle&&r.solution?(t=r,console.log("成功从JSON文件获取专家级谜题")):(console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成"),t=await K(e))}catch(r){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",r),t=await K(e)}}else console.log("非专家难度：使用程序生成谜题"),t=await K(e);const o=ee(t);return console.log("谜题数据准备完成，formattedData:",o),console.log("puzzleData.puzzle 是否存在:",!!o.puzzle),o.puzzle&&(console.log("puzzle 类型:",Array.isArray(o.puzzle)?"数组":typeof o.puzzle),console.log("puzzle 长度:",Array.isArray(o.puzzle)?o.puzzle.length:"不是数组"),Array.isArray(o.puzzle)&&o.puzzle.length>0&&console.log("puzzle 第一行:",o.puzzle[0])),i(o),console.log("设置 currentPuzzle 完成"),d(o.puzzle),console.log("设置 originalPuzzle 完成"),s(o.puzzle),console.log("设置 currentBoard 完成"),f(o.solution),console.log("设置 solution 完成"),g(!0),y(!1),w(0),j(!0),E([]),M(-1),n&&n({puzzlesStarted:1}),Q.success("New puzzle generated!",{position:"top-right",autoClose:2e3}),console.log("新谜题设置完成"),o}catch(o){return console.error("生成新谜题失败:",o),t&&Q.error("生成谜题失败，请重试",{position:"top-right",autoClose:2e3}),null}},fillCell:oe,clearCell:(e,t)=>{if(!m||x)return;const r=`${e}-${t}`;if(l&&l[e]&&0!==l[e][t])return void console.log("Cannot clear prefilled cell:",e,t);if(G.has(r))return void console.log("Cannot clear locked cell (correct answer):",e,t);const n=I.slice(0,R+1);if(n.push({board:a,pencilNotes:{...q},row:e,col:t,prevValue:a[e][t],type:"clear"}),E(n),M(n.length-1),_)return void ne(e,t);const o=[...a.map(e=>[...e])];o[e][t]=0,s(o);const i=new Set(H);i.delete(r),B(i),L(i.size);const c=new Set(G);c.delete(r),Y(c)},undo:()=>{if(R>=0){const e=I[R];s(e.board),e.pencilNotes&&U(e.pencilNotes),M(R-1),y(!1);const t=new Set;for(let n=0;n<9;n++)for(let r=0;r<9;r++){const o=e.board[n][r];0!==o&&u&&o!==u[n][r]&&t.add(`${n}-${r}`)}B(t);const r=new Set;for(let n=0;n<9;n++)for(let t=0;t<9;t++){const o=e.board[n][t];0!==o&&u&&o===u[n][t]&&r.add(`${n}-${t}`)}Y(r)}else console.log("没有可撤销的操作")},redo:()=>{if(R<I.length-1){const e=I[R+1];s(e.board),e.pencilNotes&&U(e.pencilNotes),M(R+1);const t=new Set;for(let n=0;n<9;n++)for(let r=0;r<9;r++){const o=e.board[n][r];0!==o&&u&&o!==u[n][r]&&t.add(`${n}-${r}`)}B(t);const r=new Set;for(let n=0;n<9;n++)for(let t=0;t<9;t++){const o=e.board[n][t];0!==o&&u&&o===u[n][t]&&r.add(`${n}-${t}`)}Y(r),ie(e.board)}},getCandidates:async(e,t)=>{try{const r=await gn.getCandidates(a,e,t);return $(r.candidates),r.candidates}catch(r){return console.error("获取候选数失败:",r),[]}},identifyTechniques:ae,applyTechniqueToBoard:se,getHint:async()=>{try{return await gn.getHint(a,u)}catch(e){return console.error("获取提示失败:",e),Q.error("获取提示失败，请重试",{position:"top-right",autoClose:2e3}),null}},validateCellInput:te};return b.jsx(Ln.Provider,{value:de,children:t})},Hn=()=>{const t=e.useContext(Ln);if(!t)throw new Error("useSudoku must be used within a SudokuContextProvider");return t},Bn=Or.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0;
  @media (max-width: 640px) {
    gap: 30px;
    padding: 10px 0;
  }
`,_n=Or.section`
  text-align: center;
  padding: 40px 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    padding: 30px 15px;
  }
`,Wn=Or.h1`
  font-size: 42px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`,qn=Or.p`
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
`,Un=Or.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`,Gn=Or(o)`
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
`,Yn=Or(o)`
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
`,Jn=Or.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  @media (max-width: 640px) {
    gap: 20px;
  }
`,Vn=Or.div`
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
`,Xn=Or.div`
  font-size: 48px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  display: flex;
  justify-content: center;
`,Kn=Or.h3`
  font-size: 22px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`,Qn=Or.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  line-height: 1.6;
  margin: 0;
  text-align: center;
`,Zn=Or.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,eo=Or.h2`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 26px;
  }
`,to=Or.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`,ro=Or.button`
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
`,no=Or.button`
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
`,oo=Or.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,io=Or.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`,ao=Or.div`
  text-align: center;
  padding: 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 8px;
`,so=Or.div`
  font-size: 36px;
  font-weight: bold;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 10px;
  @media (max-width: 640px) {
    font-size: 30px;
  }
`,lo=Or.div`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
`,co=()=>{ne();const{userStats:e}=hn(),{setDifficulty:t,startNewGame:r}=Hn(),{executeWithLoading:o,isLoading:a}=ae(),s=i(),[l,c]=n.useState(Fn.MEDIUM),d=e=>{c(e)};return b.jsxs(Bn,{children:[b.jsxs(_n,{children:[b.jsx(Wn,{children:"欢迎来到数独学习应用"}),b.jsx(qn,{children:"提升您的数独技能，学习从基础到高级的解题技巧。适合各级别玩家，让您的数独之旅更加精彩！"}),b.jsxs(Un,{children:[b.jsx(Gn,{to:"/game",children:"开始游戏"}),b.jsx(Yn,{to:"/techniques",children:"学习技巧"})]})]}),b.jsxs(Jn,{children:[b.jsxs(Vn,{children:[b.jsx(Xn,{children:"🧠"}),b.jsx(Kn,{children:"多种难度"}),b.jsx(Qn,{children:"从简单到专家级别的数独谜题，适合不同水平的玩家，循序渐进提升您的技能。"})]}),b.jsxs(Vn,{children:[b.jsx(Xn,{children:"💡"}),b.jsx(Kn,{children:"技巧学习"}),b.jsx(Qn,{children:"详细的解题技巧讲解，从唯一候选数到高级技巧，帮助您掌握数独的精髓。"})]}),b.jsxs(Vn,{children:[b.jsx(Xn,{children:"📊"}),b.jsx(Kn,{children:"进度追踪"}),b.jsx(Qn,{children:"记录您的游戏进度和技巧掌握情况，分析您的表现，持续进步。"})]}),b.jsxs(Vn,{children:[b.jsx(Xn,{children:"🎯"}),b.jsx(Kn,{children:"实时提示"}),b.jsx(Qn,{children:"遇到困难时获得智能提示，帮助您理解下一步的解题思路和技巧应用。"})]})]}),b.jsxs(Zn,{children:[b.jsx(eo,{children:"快速开始"}),b.jsxs(to,{children:[b.jsx(ro,{selected:l===Fn.EASY,onClick:()=>d(Fn.EASY),children:"简单"}),b.jsx(ro,{selected:l===Fn.MEDIUM,onClick:()=>d(Fn.MEDIUM),children:"中等"}),b.jsx(ro,{selected:l===Fn.HARD,onClick:()=>d(Fn.HARD),children:"困难"}),b.jsx(ro,{selected:l===Fn.EXPERT,onClick:()=>d(Fn.EXPERT),children:"专家"})]}),b.jsx(no,{onClick:async()=>{t(l);const e=await o(()=>r(null,l),"准备游戏中...");e&&s(`/game/${e.id}`)},disabled:a,children:a?b.jsx(sn,{showMessage:!1}):"开始游戏"})]}),b.jsxs(oo,{children:[b.jsx(eo,{children:"您的进度"}),b.jsxs(io,{children:[b.jsxs(ao,{children:[b.jsx(so,{children:e.puzzlesStarted}),b.jsx(lo,{children:"开始的谜题"})]}),b.jsxs(ao,{children:[b.jsx(so,{children:e.puzzlesCompleted}),b.jsx(lo,{children:"完成的谜题"})]}),b.jsxs(ao,{children:[b.jsx(so,{children:e.puzzlesSolved}),b.jsx(lo,{children:"独立解决"})]}),b.jsxs(ao,{children:[b.jsx(so,{children:Math.floor(e.totalTimePlayed/60)}),b.jsx(lo,{children:"游戏分钟"})]})]})]})]})},uo=Or.div.attrs({className:"sudoku-board"})`
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
`,fo=Or.div`
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
`,po=({notes:e=[],highlightedNumber:t=null})=>{const r=Array.isArray(e)?e:[],n={display:"flex",alignItems:"center",justifyContent:"center",fontSize:"calc(var(--board-width) * 0.025)",fontWeight:"500",color:"#4A6FA5",padding:"1px"},o={color:"#ffffff",backgroundColor:"#3498db",borderRadius:"50%",fontWeight:"bold",width:"80%",height:"80%"};return b.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr",width:"100%",height:"100%",boxSizing:"border-box"},children:r.map(e=>{const r=(e-1)%3,i=Math.floor((e-1)/3),a=t&&e===t;return b.jsx("div",{style:{...n,gridColumn:r+1,gridRow:i+1,...a&&o},children:e},e)})})},ho=({board:e,selectedCell:t,onCellClick:r,originalPuzzle:n,isPencilMode:o,pencilNotes:i,incorrectCells:a,highlightedCells:s})=>{const{theme:l}=ne(),c=e||Array(9).fill().map(()=>Array(9).fill(0)),d=n||Array(9).fill().map(()=>Array(9).fill(0)),u=i||{},f=a||new Set,p=(e,t)=>3*Math.floor(e/3)+Math.floor(t/3),h=(e,r,n)=>{const i=[];if(u[`${e}-${r}`],((e,t,r)=>!(!d||!d[t]||null===d[t][r]||0===d[t][r]))(0,e,r)&&i.push("prefilled"),((e=>"error"===e)(n)||((e,t)=>{const r=`${e}-${t}`;return f instanceof Set?f.has(r):!!Array.isArray(f)&&f.some(r=>r.row===e&&r.col===t)})(e,r))&&i.push("error"),!t&&s&&Array.isArray(s)){s.some(t=>t.row===e&&t.col===r)&&i.push("highlighted")}if(t&&t.row===e&&t.col===r)i.push("selected"),i.push(o?"pencil-selected":"normal-selected");else if(t){const o=c[t.row][t.col],s=`${t.row}-${t.col}`;u[s],n&&n===o&&i.push("same-number"),a=e,l=r,h=t.row,m=t.col,(a===h||l===m||p(a,l)===p(h,m))&&i.push("same-region")}var a,l,h,m;return i.join(" ")};return b.jsx(uo,{theme:l,children:c.map((e,n)=>e.map((e,o)=>{const i=h(n,o,e),a=`${n}-${o}`,d=u[a]||[],f=d.length>0;let p=null;if(t&&void 0!==t.row&&void 0!==t.col&&c[t.row]&&c[t.row][t.col]){const e=c[t.row][t.col];0!==e&&"error"!==e&&(p=e)}if(!p&&s&&Array.isArray(s)&&s.length>0){const e=s[0];e&&e.number&&0!==e.number&&"error"!==e.number&&(p=e.number)}return b.jsx(fo,{row:n,col:o,className:i,onClick:()=>((e,t)=>{r&&r(e,t)})(n,o),theme:l,children:e&&0!==e&&"error"!==e?e:f?b.jsx(po,{notes:d,highlightedNumber:p}):""},a)}))})},mo=()=>b.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"white",children:[b.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"transparent",stroke:"white",strokeWidth:"1.5"}),b.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"white",strokeWidth:"1",strokeDasharray:"1"}),b.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"white",strokeWidth:"1",strokeDasharray:"1"}),b.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",fill:"white",children:"2"}),b.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",fill:"white",children:"5"})]}),go=({onNumberSelect:t,onClearCell:r,onUndo:n,togglePencilMode:o,fillAllCandidates:i,selectedNumber:a,isPencilMode:s,remainingNumbers:l={}})=>{const c=()=>window.innerWidth<768&&window.innerHeight>window.innerWidth,[d,u]=e.useState(c());e.useEffect(()=>{const e=()=>{u(c())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),ne();const{t:f}=Hr(),[p,h]=e.useState("keyboard"),[m,g]=e.useState(null),x=Hn(),{identifyTechniques:y,applyTechniqueToBoard:v,gameStarted:w,currentBoard:k,setHighlightedCells:j,setSelectedCell:C,selectedCell:S}=x||{},z=e.useCallback(()=>{h("keyboard"),j&&j([]),g(null),A([])},[j]);e.useEffect(()=>{S&&"keyboard"!==p&&z()},[S,p,z]);const[$,P]=e.useState([]),[T,A]=e.useState([]);e.useEffect(()=>{h("keyboard"),g(null),A([]),P([]),j&&j([])},[w,k]);const N=e.useCallback(()=>{if(y&&k)try{const e=y();P(e||[])}catch(e){console.error("查找技巧失败:",e),P([])}else P([])},[y,k]);e.useEffect(()=>{"techniques"===p&&w&&k&&N()},[p,N,w,k]),e.useEffect(()=>{P([])},[w,k]);return b.jsxs("div",{className:"control-panel",style:{backgroundColor:"#ffffff",borderRadius:"12px",padding:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.12)",display:"flex",flexDirection:"column",fontFamily:"Arial, Microsoft YaHei, sans-serif",margin:0,boxSizing:"border-box",border:"1px solid #e0e0e0",position:"relative",height:window.innerWidth<=576?"auto":"var(--board-width)",overflow:"hidden",outline:"none",WebkitTapHighlightColor:"transparent"},children:[b.jsx("h3",{style:{display:"none"},children:"控制面板"}),b.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,margin:0,minHeight:0,overflow:"hidden"},children:[b.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #e0e0e0",marginBottom:"8px",paddingBottom:0},children:[b.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"keyboard"===p?"#3498db15":"transparent",border:"none",borderRadius:"6px 6px 0 0",fontSize:"14px",fontWeight:"keyboard"===p?"700":"500",color:"keyboard"===p?"#3498db":"#7f8c8d",cursor:"pointer",margin:"0 2px",boxSizing:"border-box",minHeight:"32px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>{z()},children:f("keyboardTab")}),b.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"techniques"===p?"#3498db15":"transparent",border:"none",borderRadius:"6px 6px 0 0",fontSize:"14px",fontWeight:"techniques"===p?"700":"500",color:"techniques"===p?"#3498db":"#7f8c8d",cursor:"pointer",margin:"0 2px",boxSizing:"border-box",minHeight:"32px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>{h("techniques"),C&&C(null)},children:f("techniquesTab")}),b.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"solution"===p?"#3498db15":"transparent",border:"none",borderRadius:"6px 6px 0 0",fontSize:"14px",fontWeight:"solution"===p?"700":"500",color:"solution"===p?"#3498db":"#7f8c8d",cursor:"pointer",margin:"0 2px",boxSizing:"border-box",minHeight:"32px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>{h("solution"),C&&C(null)},children:f("solutionTab")})]}),b.jsxs("div",{style:{flex:1,padding:"4px 0",overflow:"hidden",position:"relative",display:"flex",flexDirection:"column",minHeight:0},children:["keyboard"===p&&b.jsx(b.Fragment,{children:window.innerWidth<=768?b.jsxs(b.Fragment,{children:[b.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"4px",marginBottom:"8px"},children:[1,2,3,4,5,6].map(e=>{const r=l.hasOwnProperty(e)?l[e]:9,n=0===r;return b.jsxs("button",{className:"number-button",disabled:n,onClick:r=>{r.stopPropagation(),!n&&t(e)},style:{position:"relative",backgroundColor:a===e||s?"#3498db":"#ffffff",color:a===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:n?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[b.jsx("span",{style:{fontSize:"clamp(40px, 12vw, 80px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),b.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",backgroundColor:"transparent",color:a===e||s?"white":"#3498db",fontSize:"14px",fontWeight:"bold",padding:"1px 4px",borderRadius:"8px",minWidth:"16px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)})}),b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"4px"},children:[[7,8,9].map(e=>{const r=l.hasOwnProperty(e)?l[e]:9,n=0===r;return b.jsxs("button",{className:"number-button",disabled:n,onClick:r=>{r.stopPropagation(),!n&&t(e)},style:{position:"relative",backgroundColor:a===e||s?"#3498db":"#ffffff",color:a===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:n?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",transition:"all 0.2s ease"},children:[b.jsx("span",{style:{fontSize:"clamp(40px, 12vw, 80px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),b.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",backgroundColor:"transparent",color:a===e||s?"white":"#3498db",fontSize:"14px",fontWeight:"bold",padding:"1px 4px",borderRadius:"8px",minWidth:"16px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)}),b.jsx("button",{onClick:e=>{e.stopPropagation(),n()},title:f("undoAction"),style:{position:"relative",backgroundColor:"#ffffff",color:"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"60px !important",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b.jsx("path",{d:"M3 7v6h6"}),b.jsx("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})},"undo"),b.jsx("button",{onClick:e=>{e.stopPropagation(),r()},title:f("clearCell"),style:{position:"relative",backgroundColor:"#ff4444",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"24px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:b.jsxs("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b.jsx("path",{d:"M3 6h18"}),b.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),b.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),b.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),b.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})},"clear"),b.jsx("button",{onClick:e=>{e.stopPropagation(),o()},title:f(s?"exitPencilMode":"enterPencilMode"),style:{position:"relative",backgroundColor:s?"#3498db":"#ffffff",color:s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"24px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:b.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})},"pencil")]})]}):b.jsxs("div",{className:"number-pad",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"6px",width:"100%",maxHeight:"100%",overflow:"visible",padding:"4px",boxSizing:"border-box"},children:[[1,2,3,4,5,6,7,8,9].map(e=>{const r=l.hasOwnProperty(e)?l[e]:9,n=0===r;return b.jsxs("button",{className:"number-button",disabled:n,onClick:r=>{r.stopPropagation(),!n&&t(e)},style:{position:"relative",backgroundColor:a===e||s?"#3498db":"#ffffff",color:a===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"400",lineHeight:"1",cursor:n?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",fontSize:"0",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[b.jsx("span",{style:{fontSize:"clamp(30px, 8vw, 70px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),b.jsx("span",{style:{position:"absolute",top:"4px",right:"4px",backgroundColor:"transparent",color:a===e||s?"white":"#3498db",fontSize:"16px",fontWeight:"bold",padding:"2px 6px",borderRadius:"10px",minWidth:"20px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)}),b.jsx("button",{onClick:e=>{e.stopPropagation(),n()},title:"撤回",style:{position:"relative",backgroundColor:"#ffffff",color:"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b.jsx("path",{d:"M3 7v6h6"}),b.jsx("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})},"undo"),b.jsx("button",{onClick:e=>{e.stopPropagation(),r()},title:"清空单元格",style:{position:"relative",backgroundColor:"#ff4444",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:b.jsxs("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b.jsx("path",{d:"M3 6h18"}),b.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),b.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),b.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),b.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})},"clear"),b.jsx("button",{onClick:e=>{e.stopPropagation(),o()},title:s?"退出铅笔模式":"进入铅笔模式",style:{position:"relative",backgroundColor:s?"#3498db":"#ffffff",color:s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:b.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})},"pencil")]})}),"techniques"===p&&b.jsxs("div",{style:{overflowY:"auto",padding:"4px 8px 8px 8px"},children:[0===$.length?b.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#7f8c8d",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:f("noTechniquesAvailable")}):b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px"},children:$.map((e,t)=>{let r="",n="";if("number"==typeof e.row&&"number"==typeof e.col){r=`(${e.row+1},${e.col+1})`,n=void 0!==e.value?` ${f("number")}: ${e.value}`:""}else if(Array.isArray(e.cells)&&e.cells.length>0){if(1===e.cells.length&&Array.isArray(e.cells[0])){r=`(${e.cells[0][0]+1},${e.cells[0][1]+1})`}else r=f("multipleCells");Array.isArray(e.values)&&e.values.length>0&&(n=` ${f("number")}: [${e.values.join(",")}]`)}else r="(未知位置)";let o="",i="";"nakedSingle"===e.type||"naked_single"===e.type?o=f(e.description||"singleCandidateTechnique"):e.type.includes("hidden_single")||e.type.includes("hiddenSingle")?(e.type.includes("row")||e.type.includes("Row")?o=f("hiddenSingleRow"):e.type.includes("col")||e.type.includes("Col")?o=f("hiddenSingleCol"):(e.type.includes("box")||e.type.includes("Box"))&&(o=f("hiddenSingleBox")),i=""):"nakedPairs"===e.type||"naked_pairs"===e.type||e.type.includes("nakedPair")?(o=f("nakedPairs"),e.type.includes("Row")?i=f("rowSuffix"):e.type.includes("Col")?i=f("colSuffix"):e.type.includes("Box")&&(i=f("boxSuffix"))):"hiddenPairs"===e.type||"hidden_pairs"===e.type||e.type.includes("hiddenPair")?(o=f("hiddenPairs"),e.type.includes("Row")?i=f("rowSuffix"):e.type.includes("Col")?i=f("colSuffix"):e.type.includes("Box")&&(i=f("boxSuffix"))):e.type.includes("nakedTriple")?(o=f("nakedTriple"),e.type.includes("Row")?i=f("rowSuffix"):e.type.includes("Col")?i=f("colSuffix"):e.type.includes("Box")&&(i=f("boxSuffix"))):e.type.includes("hiddenTriple")?(o=f("hiddenTriple"),e.type.includes("Row")?i=f("rowSuffix"):e.type.includes("Col")?i=f("colSuffix"):e.type.includes("Box")&&(i=f("boxSuffix"))):o=e.description||f("unknownTechnique");const a=o+i;return b.jsx("div",{onClick:()=>(e=>{g(e);const t=[],r="number"==typeof e.row&&"number"==typeof e.col,n=r?e.row:0,o=r?e.col:0,i=r?`(${n+1},${o+1})`:f("multipleCells"),a=e.value||"";if(e.type.includes("NakedSingle")||e.type.includes("nakedSingle"))t.push({step:1,description:f("findSingleCandidateCell"),highlight:""},{step:2,description:f("cellOnlyHasSingleCandidate").replace("{position}",i).replace("{value}",a),highlight:i},{step:3,description:f("fillNumber").replace("{value}",a),highlight:i});else if(e.type.includes("HiddenSingle")||e.type.includes("hiddenSingle")){const s=e.type.includes("Row")?f("row"):e.type.includes("Col")?f("col"):f("box");let l=0;if(r)l=e.type.includes("Row")?n+1:e.type.includes("Col")?o+1:3*Math.floor(n/3)+Math.floor(o/3)+1;else if(void 0!==e.row&&s===f("row"))l=e.row+1;else if(void 0!==e.col&&s===f("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?s===f("col")&&"number"==typeof t[1]?l=t[1]+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(s===f("col")&&void 0!==t.col?l=t.col+1:void 0!==t.row&&(l=t.row+1))}t.push({step:1,description:f("findHiddenSingleInRegion").replace("{regionType}",s).replace("{regionNum}",l),highlight:""},{step:2,description:f("numberOnlyInPosition").replace("{value}",a).replace("{regionType}",s).replace("{regionNum}",l).replace("{position}",i),highlight:i},{step:3,description:f("fillNumber").replace("{value}",a),highlight:i})}else if(e.type.includes("NakedPairs")||e.type.includes("nakedPairs")||e.type.includes("nakedPair")){const a=e.type.includes("Row")?f("row"):e.type.includes("Col")?f("col"):f("box");let s=0;if(r)s=e.type.includes("Row")?n+1:e.type.includes("Col")?o+1:3*Math.floor(n/3)+Math.floor(o/3)+1;else if(void 0!==e.row&&a===f("row"))s=e.row+1;else if(void 0!==e.col&&a===f("col"))s=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===f("col")&&"number"==typeof t[1]?s=t[1]+1:"number"==typeof t[0]&&(s=t[0]+1):t&&(a===f("col")&&void 0!==t.col?s=t.col+1:void 0!==t.row&&(s=t.row+1))}const l=Array.isArray(e.values)?e.values.join(","):"数对",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i,d=[];if(a===f("row")&&s>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===s-1&&e[1]===t||void 0!==e.row&&e.row===s-1&&e.col===t),n=k&&k[s-1]&&k[s-1][t]>0;r||n||d.push([s-1,t])}else if(a===f("col")&&s>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===t&&e[1]===s-1||void 0!==e.row&&e.row===t&&e.col===s-1),n=k&&k[t]&&k[t][s-1]>0;r||n||d.push([t,s-1])}else if(a===f("box")&&s>0){const t=3*Math.floor((s-1)/3),r=(s-1)%3*3;for(let n=0;n<3;n++)for(let o=0;o<3;o++){const i=t+n,a=r+o,s=e.cells.some(e=>Array.isArray(e)&&e[0]===i&&e[1]===a||void 0!==e.row&&e.row===i&&e.col===a),l=k&&k[i]&&k[i][a]>0;s||l||d.push([i,a])}}const u=d.length>0?d.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):f("multipleCells");t.push({step:1,description:`在${a}${s}中查找数对`,highlight:""},{step:2,description:f("foundNakedPair",{numbers:l,cells:c}),highlight:i},{step:3,description:f("removeCandidatesFromTargets",{numbers:l,targets:u}),highlight:i})}else if(e.type.includes("HiddenPairs")||e.type.includes("hiddenPairs")||e.type.includes("hiddenPair")){const a=e.type.includes("Row")?f("row"):e.type.includes("Col")?f("col"):f("box");let s=0;if(r)s=e.type.includes("Row")?n+1:e.type.includes("Col")?o+1:3*Math.floor(n/3)+Math.floor(o/3)+1;else if(void 0!==e.row)s=e.row+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?s="number"==typeof t[0]?t[0]+1:s:t&&void 0!==t.row&&(s=t.row+1)}const l=Array.isArray(e.values)?e.values.join(","):"数对",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i;t.push({step:1,description:f("findHiddenPairInRegion",{regionType:a,regionNum:s}),highlight:""},{step:2,description:f("foundNumbersOnlyInCells",{numbers:l,cells:c}),highlight:i},{step:3,description:f("removeOtherCandidates",{cells:c,numbers:l}),highlight:i})}else if(e.type.includes("nakedTriple")){const a=e.type.includes("Row")?f("row"):e.type.includes("Col")?f("col"):f("box");let s=0;if(r)s=e.type.includes("Row")?n+1:e.type.includes("Col")?o+1:3*Math.floor(n/3)+Math.floor(o/3)+1;else if(void 0!==e.row)s=e.row+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?s="number"==typeof t[0]?t[0]+1:s:t&&void 0!==t.row&&(s=t.row+1)}const l=Array.isArray(e.values)?e.values.join(","):"三链数",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i,d=[];if("行"===a&&s>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===s-1&&e[1]===t||void 0!==e.row&&e.row===s-1&&e.col===t),n=k&&k[s-1]&&k[s-1][t]>0;r||n||d.push([s-1,t])}else if("列"===a&&s>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===t&&e[1]===s-1||void 0!==e.row&&e.row===t&&e.col===s-1),n=k&&k[t]&&k[t][s-1]>0;r||n||d.push([t,s-1])}else if("宫"===a&&s>0){const t=3*Math.floor((s-1)/3),r=(s-1)%3*3;for(let n=0;n<3;n++)for(let o=0;o<3;o++){const i=t+n,a=r+o,s=e.cells.some(e=>Array.isArray(e)&&e[0]===i&&e[1]===a||void 0!==e.row&&e.row===i&&e.col===a),l=k&&k[i]&&k[i][a]>0;s||l||d.push([i,a])}}const u=d.length>0?d.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):"相关单元格";t.push({step:1,description:f("findTripleInRegion",{regionType:a,regionNum:s}),highlight:""},{step:2,description:f("foundNakedTriple",{numbers:l,cells:c}),highlight:i},{step:3,description:f("removeCandidatesFromTargets",{numbers:l,targets:u}),highlight:i})}else if(e.type.includes("hiddenTriple")){const a=e.type.includes("Row")?f("row"):e.type.includes("Col")?f("col"):f("box");let s=0;if(r)s=e.type.includes("Row")?n+1:e.type.includes("Col")?o+1:3*Math.floor(n/3)+Math.floor(o/3)+1;else if(void 0!==e.row&&"行"===a)s=e.row+1;else if(void 0!==e.col&&"列"===a)s=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?"列"===a&&"number"==typeof t[1]?s=t[1]+1:"number"==typeof t[0]&&(s=t[0]+1):t&&(a===f("col")&&void 0!==t.col?s=t.col+1:void 0!==t.row&&(s=t.row+1))}const l=Array.isArray(e.values)?e.values.join(","):"三链数",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i;t.push({step:1,description:f("findHiddenTripleInRegion",{regionType:a,regionNum:s}),highlight:""},{step:2,description:f("foundNumbersOnlyInCells",{numbers:l,cells:c}),highlight:i},{step:3,description:f("removeOtherCandidates",{cells:c,numbers:l}),highlight:i})}else t.push({step:1,description:f("applyTechnique",{technique:f(e.description)||e.type}),highlight:""},{step:2,description:f("relatedPosition",{position:i}),highlight:i},{step:3,description:a?f("relatedNumber",{number:a}):f("analysisCompleted"),highlight:i});if(A(t),j){const t=e.notes||(Array.isArray(e.cells)&&e.cells.length>0?[a]:[]);if(r)j([{row:n,col:o,techniqueIndicator:!0,number:a,notes:t}]);else if(Array.isArray(e.cells)){const r=e.cells.map(e=>({row:e.row,col:e.col,techniqueIndicator:!0,number:e.value||a,notes:e.notes||t}));j(r)}else j([])}h("solution")})(e),style:{padding:"8px 10px",backgroundColor:"#f8f9fa",borderRadius:"6px",border:"1px solid #e9ecef",cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#e9ecef",e.currentTarget.style.borderColor="#3498db"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#f8f9fa",e.currentTarget.style.borderColor="#e9ecef"},children:b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontWeight:"600",color:"#34495e"},children:[b.jsx("span",{children:a}),b.jsxs("span",{style:{fontSize:"14px",color:"#7f8c8d",fontWeight:"normal"},children:[f("position"),": ",r,n]})]})},t)})}),b.jsx("button",{onClick:()=>{i&&i(),N(),h("techniques")},style:{width:"100%",padding:"8px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",transition:"background-color 0.2s ease"},title:f("refreshCandidatesTooltip"),children:b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[b.jsx(mo,{}),f("fillCandidates")]})})]}),"solution"===p&&b.jsxs("div",{style:{overflowY:"auto",padding:"8px"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[b.jsx("h4",{style:{margin:0,color:"#34495e",fontSize:"16px",fontWeight:"600"},children:f("solutionSteps")}),m&&b.jsx("button",{onClick:()=>{if(m){v(m)&&(j&&j([]),C&&C(null),N())}},style:{width:d?"70px":"100px",height:d?"24px":"36px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:d?"12px":"16px",padding:d?"2px 4px":"4px 8px",whiteSpace:"nowrap",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:d?"0 1px 2px rgba(52, 152, 219, 0.3), 0 1px 1px rgba(0, 0, 0, 0.1)":"0 4px 8px rgba(52, 152, 219, 0.4), 0 2px 4px rgba(0, 0, 0, 0.15)",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#2980b9",e.currentTarget.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)",e.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#3498db",e.currentTarget.style.boxShadow="0 4px 10px rgba(52, 152, 219, 0.3), 0 1px 3px rgba(0, 0, 0, 0.12)",e.currentTarget.style.transform="translateY(0)"},children:f("applyTechnique")})]}),m?b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"12px"},children:T.map(e=>b.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[b.jsx("div",{style:{minWidth:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#3498db",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold"},children:e.step}),b.jsx("div",{style:{flex:1,fontSize:"14px",color:"#34495e",lineHeight:"1.5"},children:e.description})]},e.step))}):b.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#7f8c8d",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:f("selectTechniqueFirst")})]})]})]})]})},xo=Or.div`
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
`,yo=Or.div`
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
`,vo=Or.h2`
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
`,bo=Or.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`,wo=Or(({isSelected:e,...t})=>b.jsx("button",{...t}))`
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
`,ko=Or.div`
  margin-top: 4px;
  font-size: 12px;
  opacity: 0.7;
  font-weight: normal;
`,jo=Or.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`,Co=Or.button`
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
`,So=Or.button`
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
`,zo=({isOpen:e,onClose:t,onSelectDifficulty:r,initialDifficulty:o})=>{const{theme:i}=ne(),{t:a}=Hr(),[s,l]=n.useState(o||Fn.MEDIUM),c={[Fn.EASY]:{name:a("easy"),description:a("difficultyDescription.easy")},[Fn.MEDIUM]:{name:a("medium"),description:a("difficultyDescription.medium")},[Fn.HARD]:{name:a("hard"),description:a("difficultyDescription.hard")},[Fn.EXPERT]:{name:a("expert"),description:a("difficultyDescription.expert")}};if(!e)return null;const d=()=>{r(s),t()};return b.jsx(xo,{onClick:t,onKeyDown:e=>{"Escape"===e.key&&t(),"Enter"===e.key&&d()},children:b.jsxs(yo,{theme:i,onClick:e=>e.stopPropagation(),children:[b.jsx(vo,{theme:i,children:a("selectDifficulty")}),b.jsx(bo,{children:Object.entries(Fn).map(([e,t])=>{const r=c[t];return b.jsxs(wo,{isSelected:s===t,onClick:()=>l(t),theme:i,className:e.toLowerCase(),children:[r.name,b.jsx(ko,{children:r.description})]},e)})}),b.jsxs(jo,{children:[b.jsx(Co,{theme:i,onClick:t,children:a("cancel")}),b.jsx(So,{theme:i,onClick:d,children:a("startGame")})]})]})})},$o=Or.div.attrs({className:"nav-block"})`
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
`;Or.h3`
  font-size: 14px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 4px 0;
  padding-bottom: 4px;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  display: none; // 竖屏模式下隐藏标题以节省空间
`;const Po=Or.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5个按钮平均分布
  gap: 2px;
  margin: 0;
  padding: 2px 0;
`,To=Or(({isActive:e,...t})=>b.jsx("button",{...t}))`
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
`,Ao=Or.span`
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`,No=()=>b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})}),Io=()=>b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}),Eo=()=>b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M8 5v14l11-7z"})}),Ro=()=>b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"#FFD700",children:b.jsx("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})}),Mo=()=>b.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:[b.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"transparent",stroke:"currentColor",strokeWidth:"1.5"}),b.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),b.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),b.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",children:"2"}),b.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",children:"5"})]}),Oo=()=>b.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})}),Lo=({onNewGame:t,onPauseTimer:r,onGetHint:n,onShowTechniques:o,onToggleNotes:i,onSettings:a,isNotesMode:s=!1,isTimerActive:l=!0,gameCompleted:c=!1})=>{ne();const{t:d}=Hr(),u=Hn(),{startLoading:f,stopLoading:p}=ae(),[h,m]=e.useState(!1),[g,x]=e.useState(!1);return b.jsxs(b.Fragment,{children:[b.jsx($o,{children:b.jsxs(Po,{children:[b.jsx(To,{onClick:()=>{console.log("NavigationBlock: 打开难度选择模态框"),x(!1),m(!0)},title:d("newGame"),children:b.jsx(Ao,{children:b.jsx(No,{})})}),b.jsx(To,{onClick:c?void 0:r,disabled:c,title:d(c?"gameCompleted":l?"pauseTimer":"resume"),children:b.jsx(Ao,{children:c||l?b.jsx(Io,{}):b.jsx(Eo,{})})}),b.jsx(To,{onClick:n,title:d("hint"),children:b.jsx(Ao,{children:b.jsx(Ro,{})})}),b.jsx(To,{onClick:()=>{i(),x(!0)},title:d("notes"),isActive:g,children:b.jsx(Ao,{children:b.jsx(Mo,{})})}),b.jsx(To,{onClick:a,title:d("settings"),children:b.jsx(Ao,{children:b.jsx(Oo,{})})})]})}),b.jsx(zo,{isOpen:h,onClose:()=>m(!1),onSelectDifficulty:async e=>{console.log("NavigationBlock: 选择难度:",e);try{x(!1),o&&console.log("将在生成新游戏时重置技巧状态"),f&&f("生成新谜题..."),(null==u?void 0:u.startNewGame)?(console.log("调用 context.startNewGame"),await u.startNewGame(null,e),console.log("startNewGame 完成")):(null==u?void 0:u.generateNewPuzzle)?(console.log("调用 context.generateNewPuzzle"),await u.generateNewPuzzle(e),console.log("generateNewPuzzle 完成")):console.error("上下文函数不可用")}catch(t){console.error("生成新游戏失败:",t)}finally{p&&p()}},initialDifficulty:(null==u?void 0:u.difficulty)||Fn.MEDIUM})]})},Fo=Or(({theme:e,...t})=>b.jsx("div",{...t})).attrs({className:"display-block"})`
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
`,Do=Or.div`
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
`,Ho=Or.span`
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"#ff3b30"}};
  font-weight: 600;
`,Bo=Or.div`
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
`,_o=Or.div`
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
`,Wo=({errorCount:e,difficulty:t,time:r})=>{ne();const{t:n}=Hr();return b.jsxs(Fo,{children:[b.jsxs(Do,{children:[n("error"),": ",b.jsx(Ho,{children:e})]}),b.jsx(Bo,{children:n(t)}),b.jsx(_o,{children:r})]})},qo=({highlightedCells:e,boardWidth:t,boardHeight:r,isPortrait:n=!1})=>{if(!e||!Array.isArray(e))return null;const o=e.filter(e=>e&&!0===e.techniqueIndicator&&"number"==typeof e.row&&"number"==typeof e.col&&e.row>=0&&e.row<9&&e.col>=0&&e.col<9);if(0===o.length)return null;let i,a,s,l;return n&&r?(i=t/9,a=r/9,s=`${Math.max(16,.4*Math.min(i,a))}px`,l=r):(i=t/9,a=i,s=`${Math.max(16,.4*i)}px`,l=t),b.jsx("div",{className:"technique-overlay",style:{position:"absolute",top:0,left:0,width:`${t}px`,height:`${l}px`,pointerEvents:"none",zIndex:15,boxSizing:"border-box",background:"transparent"},children:o.map(e=>b.jsx("div",{style:{position:"absolute",left:e.col*i+"px",top:e.row*a+"px",width:`${i}px`,height:`${a}px`,pointerEvents:"none",zIndex:20,backgroundColor:"#f9e79f",border:"3px solid #ffffff",boxSizing:"border-box",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.number&&b.jsx("span",{style:{fontSize:s,fontWeight:"bold",color:"#2ecc71",zIndex:30},children:e.number})},`tech-${e.row}-${e.col}`))})};
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
function Uo(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Go(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Zo(n.key),n)}}function Yo(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=ti(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function Jo(e,t,r){return(t=Zo(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Vo(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Xo(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Vo(Object(r),!0).forEach(function(t){Jo(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Vo(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Ko(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,s=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}(e,t)||ti(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qo(e){return function(e){if(Array.isArray(e))return Uo(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ti(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Zo(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function ei(e){return(ei="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ti(e,t){if(e){if("string"==typeof e)return Uo(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Uo(e,t):void 0}}var ri=function(){},ni={},oi={},ii=null,ai={mark:ri,measure:ri};try{"undefined"!=typeof window&&(ni=window),"undefined"!=typeof document&&(oi=document),"undefined"!=typeof MutationObserver&&(ii=MutationObserver),"undefined"!=typeof performance&&(ai=performance)}catch(Du){}var si=(ni.navigator||{}).userAgent,li=void 0===si?"":si,ci=ni,di=oi,ui=ii,fi=ai;ci.document;var pi,hi=!!di.documentElement&&!!di.head&&"function"==typeof di.addEventListener&&"function"==typeof di.createElement,mi=~li.indexOf("MSIE")||~li.indexOf("Trident/"),gi={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},xi=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],yi="classic",vi="duotone",bi="sharp",wi="sharp-duotone",ki="chisel",ji="etch",Ci="jelly",Si="jelly-duo",zi="jelly-fill",$i="notdog",Pi="notdog-duo",Ti="slab",Ai="slab-press",Ni="thumbprint",Ii="utility",Ei="utility-duo",Ri="utility-fill",Mi="whiteboard",Oi=[yi,vi,bi,wi,ki,ji,Ci,Si,zi,$i,Pi,Ti,Ai,Ni,Ii,Ei,Ri,Mi];Jo(Jo(Jo(Jo(Jo(Jo(Jo(Jo(Jo(Jo(pi={},yi,"Classic"),vi,"Duotone"),bi,"Sharp"),wi,"Sharp Duotone"),ki,"Chisel"),ji,"Etch"),Ci,"Jelly"),Si,"Jelly Duo"),zi,"Jelly Fill"),$i,"Notdog"),Jo(Jo(Jo(Jo(Jo(Jo(Jo(Jo(pi,Pi,"Notdog Duo"),Ti,"Slab"),Ai,"Slab Press"),Ni,"Thumbprint"),Ii,"Utility"),Ei,"Utility Duo"),Ri,"Utility Fill"),Mi,"Whiteboard");var Li=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Fi=["fak","fa-kit","fakd","fa-kit-duotone"],Di={fak:"kit","fa-kit":"kit"},Hi={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"};Jo(Jo({},"kit","Kit"),"kit-duotone","Kit Duotone");var Bi,_i={kit:"fak"},Wi={"kit-duotone":"fakd"},qi="duotone-group",Ui="swap-opacity",Gi="primary",Yi="secondary";Jo(Jo(Jo(Jo(Jo(Jo(Jo(Jo(Jo(Jo(Bi={},"classic","Classic"),"duotone","Duotone"),"sharp","Sharp"),"sharp-duotone","Sharp Duotone"),"chisel","Chisel"),"etch","Etch"),"jelly","Jelly"),"jelly-duo","Jelly Duo"),"jelly-fill","Jelly Fill"),"notdog","Notdog"),Jo(Jo(Jo(Jo(Jo(Jo(Jo(Jo(Bi,"notdog-duo","Notdog Duo"),"slab","Slab"),"slab-press","Slab Press"),"thumbprint","Thumbprint"),"utility","Utility"),"utility-duo","Utility Duo"),"utility-fill","Utility Fill"),"whiteboard","Whiteboard");Jo(Jo({},"kit","Kit"),"kit-duotone","Kit Duotone");var Ji={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Vi=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"]),Xi=[1,2,3,4,5,6,7,8,9,10],Ki=Xi.concat([11,12,13,14,15,16,17,18,19,20]),Qi=[].concat(Qo(Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]})),["solid","regular","light","thin","duotone","brands","semibold"],["aw","fw","pull-left","pull-right"],["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",qi,Ui,Gi,Yi]).concat(Xi.map(function(e){return"".concat(e,"x")})).concat(Ki.map(function(e){return"w-".concat(e)})),Zi="___FONT_AWESOME___",ea="svg-inline--fa",ta="data-fa-i2svg",ra="data-fa-pseudo-element",na="data-prefix",oa="data-icon",ia="fontawesome-i2svg",aa=["HTML","HEAD","STYLE","SCRIPT"],sa=["::before","::after",":before",":after"],la=function(){try{return!0}catch(e){return!1}}();function ca(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[yi]}})}var da=Xo({},gi);da[yi]=Xo(Xo(Xo(Xo({},{"fa-duotone":"duotone"}),gi[yi]),Di),Hi);var ua=ca(da),fa=Xo({},{chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}});fa[yi]=Xo(Xo(Xo(Xo({},{duotone:"fad"}),fa[yi]),_i),Wi);var pa=ca(fa),ha=Xo({},Ji);ha[yi]=Xo(Xo({},ha[yi]),{fak:"fa-kit"});var ma=ca(ha),ga=Xo({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}});ga[yi]=Xo(Xo({},ga[yi]),{"fa-kit":"fak"}),ca(ga);var xa=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ya="fa-layers-text",va=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;ca(Xo({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}}));var ba=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ka=[].concat(Qo(["kit"]),Qo(Qi)),ja=ci.FontAwesomeConfig||{};if(di&&"function"==typeof di.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=Ko(e,2),r=t[0],n=t[1],o=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=di.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(r));null!=o&&(ja[n]=o)})}var Ca={styleDefault:"solid",familyDefault:yi,cssPrefix:"fa",replacementClass:ea,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ja.familyPrefix&&(ja.cssPrefix=ja.familyPrefix);var Sa=Xo(Xo({},Ca),ja);Sa.autoReplaceSvg||(Sa.observeMutations=!1);var za={};Object.keys(Ca).forEach(function(e){Object.defineProperty(za,e,{enumerable:!0,set:function(t){Sa[e]=t,$a.forEach(function(e){return e(za)})},get:function(){return Sa[e]}})}),Object.defineProperty(za,"familyPrefix",{enumerable:!0,set:function(e){Sa.cssPrefix=e,$a.forEach(function(e){return e(za)})},get:function(){return Sa.cssPrefix}}),ci.FontAwesomeConfig=za;var $a=[];var Pa=16,Ta={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Aa(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function Na(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function Ia(e){return e.classList?Na(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ea(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ra(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function Ma(e){return e.size!==Ta.size||e.x!==Ta.x||e.y!==Ta.y||e.rotate!==Ta.rotate||e.flipX||e.flipY}function Oa(){var e="fa",t=ea,r=za.cssPrefix,n=za.replacementClass,o=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";\n  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";\n  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}';if(r!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(i,".".concat(r,"-")).replace(a,"--".concat(r,"-")).replace(s,".".concat(n))}return o}var La=!1;function Fa(){za.autoAddCss&&!La&&(!function(e){if(e&&hi){var t=di.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=di.head.childNodes,n=null,o=r.length-1;o>-1;o--){var i=r[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(n=i)}di.head.insertBefore(t,n)}}(Oa()),La=!0)}var Da={mixout:function(){return{dom:{css:Oa,insertCss:Fa}}},hooks:function(){return{beforeDOMElementCreation:function(){Fa()},beforeI2svg:function(){Fa()}}}},Ha=ci||{};Ha[Zi]||(Ha[Zi]={}),Ha[Zi].styles||(Ha[Zi].styles={}),Ha[Zi].hooks||(Ha[Zi].hooks={}),Ha[Zi].shims||(Ha[Zi].shims=[]);var Ba=Ha[Zi],_a=[],Wa=function(){di.removeEventListener("DOMContentLoaded",Wa),qa=1,_a.map(function(e){return e()})},qa=!1;function Ua(e){var t=e.tag,r=e.attributes,n=void 0===r?{}:r,o=e.children,i=void 0===o?[]:o;return"string"==typeof e?Ea(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(Ea(e[r]),'" ')},"").trim()}(n),">").concat(i.map(Ua).join(""),"</").concat(t,">")}function Ga(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}hi&&((qa=(di.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(di.readyState))||di.addEventListener("DOMContentLoaded",Wa));var Ya=function(e,t,r,n){var o,i,a,s=Object.keys(e),l=s.length,c=void 0!==n?function(e,t){return function(r,n,o,i){return e.call(t,r,n,o,i)}}(t,n):t;for(void 0===r?(o=1,a=e[s[0]]):(o=0,a=r);o<l;o++)a=c(a,e[i=s[o]],i,e);return a};function Ja(e){return 1!==Qo(e).length?null:e.codePointAt(0).toString(16)}function Va(e){return Object.keys(e).reduce(function(t,r){var n=e[r];return!!n.icon?t[n.iconName]=n.icon:t[r]=n,t},{})}function Xa(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,n=void 0!==r&&r,o=Va(t);"function"!=typeof Ba.hooks.addPack||n?Ba.styles[e]=Xo(Xo({},Ba.styles[e]||{}),o):Ba.hooks.addPack(e,Va(t)),"fas"===e&&Xa("fa",t)}var Ka=Ba.styles,Qa=Ba.shims,Za=Object.keys(ma),es=Za.reduce(function(e,t){return e[t]=Object.keys(ma[t]),e},{}),ts=null,rs={},ns={},os={},is={},as={};function ss(e,t){var r,n=t.split("-"),o=n[0],i=n.slice(1).join("-");return o!==e||""===i||(r=i,~ka.indexOf(r))?null:i}var ls,cs=function(){var e=function(e){return Ya(Ka,function(t,r,n){return t[n]=Ya(r,e,{}),t},{})};rs=e(function(e,t,r){(t[3]&&(e[t[3]]=r),t[2])&&t[2].filter(function(e){return"number"==typeof e}).forEach(function(t){e[t.toString(16)]=r});return e}),ns=e(function(e,t,r){(e[r]=r,t[2])&&t[2].filter(function(e){return"string"==typeof e}).forEach(function(t){e[t]=r});return e}),as=e(function(e,t,r){var n=t[2];return e[r]=r,n.forEach(function(t){e[t]=r}),e});var t="far"in Ka||za.autoFetchSvg,r=Ya(Qa,function(e,r){var n=r[0],o=r[1],i=r[2];return"far"!==o||t||(o="fas"),"string"==typeof n&&(e.names[n]={prefix:o,iconName:i}),"number"==typeof n&&(e.unicodes[n.toString(16)]={prefix:o,iconName:i}),e},{names:{},unicodes:{}});os=r.names,is=r.unicodes,ts=hs(za.styleDefault,{family:za.familyDefault})};function ds(e,t){return(rs[e]||{})[t]}function us(e,t){return(as[e]||{})[t]}function fs(e){return os[e]||{prefix:null,iconName:null}}function ps(){return ts}ls=function(e){ts=hs(e.styleDefault,{family:za.familyDefault})},$a.push(ls),cs();function hs(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).family,r=void 0===t?yi:t,n=ua[r][e];if(r===vi&&!e)return"fad";var o=pa[r][e]||pa[r][n],i=e in Ba.styles?e:null;return o||i||null}function ms(e){return e.sort().filter(function(e,t,r){return r.indexOf(e)===t})}var gs=Vi.concat(Fi);function xs(e){var t,r,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).skipLookups,o=void 0!==n&&n,i=null,a=ms(e.filter(function(e){return gs.includes(e)})),s=ms(e.filter(function(e){return!gs.includes(e)})),l=Ko(a.filter(function(e){return i=e,!xi.includes(e)}),1)[0],c=void 0===l?null:l,d=function(e){var t=yi,r=Za.reduce(function(e,t){return e[t]="".concat(za.cssPrefix,"-").concat(t),e},{});return Oi.forEach(function(n){(e.includes(r[n])||e.some(function(e){return es[n].includes(e)}))&&(t=n)}),t}(a),u=Xo(Xo({},(t=[],r=null,s.forEach(function(e){var n=ss(za.cssPrefix,e);n?r=n:e&&t.push(e)}),{iconName:r,rest:t})),{},{prefix:hs(c,{family:d})});return Xo(Xo(Xo({},u),function(e){var t=e.values,r=e.family,n=e.canonical,o=e.givenPrefix,i=void 0===o?"":o,a=e.styles,s=void 0===a?{}:a,l=e.config,c=void 0===l?{}:l,d=r===vi,u=t.includes("fa-duotone")||t.includes("fad"),f="duotone"===c.familyDefault,p="fad"===n.prefix||"fa-duotone"===n.prefix;!d&&(u||f||p)&&(n.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab");if(!n.prefix&&ys.includes(r)){if(Object.keys(s).find(function(e){return vs.includes(e)})||c.autoFetchSvg){var h=Li.get(r).defaultShortPrefixId;n.prefix=h,n.iconName=us(n.prefix,n.iconName)||n.iconName}}"fa"!==n.prefix&&"fa"!==i||(n.prefix=ps()||"fas");return n}({values:e,family:d,styles:Ka,config:za,canonical:u,givenPrefix:i})),function(e,t,r){var n=r.prefix,o=r.iconName;if(e||!n||!o)return{prefix:n,iconName:o};var i="fa"===t?fs(o):{},a=us(n,o);o=i.iconName||a||o,"far"!==(n=i.prefix||n)||Ka.far||!Ka.fas||za.autoFetchSvg||(n="fas");return{prefix:n,iconName:o}}(o,i,u))}var ys=Oi.filter(function(e){return e!==yi||e!==vi}),vs=Object.keys(Ji).filter(function(e){return e!==yi}).map(function(e){return Object.keys(Ji[e])}).flat();var bs=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}},t=[{key:"add",value:function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(t){e.definitions[t]=Xo(Xo({},e.definitions[t]||{}),o[t]),Xa(t,o[t]);var r=ma[yi][t];r&&Xa(r,o[t]),cs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(t){var n=r[t],o=n.prefix,i=n.iconName,a=n.icon,s=a[2];e[o]||(e[o]={}),s.length>0&&s.forEach(function(t){"string"==typeof t&&(e[o][t]=a)}),e[o][i]=a}),e}}],t&&Go(e.prototype,t),r&&Go(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}(),ws=[],ks={},js={},Cs=Object.keys(js);function Ss(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return(ks[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function zs(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];(ks[e]||[]).forEach(function(e){e.apply(null,r)})}function $s(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return js[e]?js[e].apply(null,t):void 0}function Ps(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,r=e.prefix||ps();if(t)return t=us(r,t)||t,Ga(Ts.definitions,r,t)||Ga(Ba.styles,r,t)}var Ts=new bs,As={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return hi?(zs("beforeI2svg",e),$s("pseudoElements2svg",e),$s("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.autoReplaceSvgRoot;!1===za.autoReplaceSvg&&(za.autoReplaceSvg=!0),za.observeMutations=!0,e=function(){Is({autoReplaceSvgRoot:r}),zs("watch",t)},hi&&(qa?setTimeout(e,0):_a.push(e))}},Ns={noAuto:function(){za.autoReplaceSvg=!1,za.observeMutations=!1,zs("noAuto")},config:za,dom:As,parse:{icon:function(e){if(null===e)return null;if("object"===ei(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:us(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],r=hs(e[0]);return{prefix:r,iconName:us(r,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(za.cssPrefix,"-"))>-1||e.match(xa))){var n=xs(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||ps(),iconName:us(n.prefix,n.iconName)||n.iconName}}if("string"==typeof e){var o=ps();return{prefix:o,iconName:us(o,e)||e}}}},library:Ts,findIconDefinition:Ps,toHtml:Ua},Is=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,t=void 0===e?di:e;(Object.keys(Ba.styles).length>0||za.autoFetchSvg)&&hi&&za.autoReplaceSvg&&Ns.dom.i2svg({node:t})};function Es(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Ua(e)})}}),Object.defineProperty(e,"node",{get:function(){if(hi){var t=di.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Rs(e){var t=e.icons,r=t.main,n=t.mask,o=e.prefix,i=e.iconName,a=e.transform,s=e.symbol,l=e.maskId,c=e.extra,d=e.watchable,u=void 0!==d&&d,f=n.found?n:r,p=f.width,h=f.height,m=[za.replacementClass,i?"".concat(za.cssPrefix,"-").concat(i):""].filter(function(e){return-1===c.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(c.classes).join(" "),g={children:[],attributes:Xo(Xo({},c.attributes),{},{"data-prefix":o,"data-icon":i,class:m,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(h)})};(function(e){return["aria-label","aria-labelledby","title","role"].some(function(t){return t in e})})(c.attributes)||c.attributes["aria-hidden"]||(g.attributes["aria-hidden"]="true"),u&&(g.attributes[ta]="");var x=Xo(Xo({},g),{},{prefix:o,iconName:i,main:r,mask:n,maskId:l,transform:a,symbol:s,styles:Xo({},c.styles)}),y=n.found&&r.found?$s("generateAbstractMask",x)||{children:[],attributes:{}}:$s("generateAbstractIcon",x)||{children:[],attributes:{}},v=y.children,b=y.attributes;return x.children=v,x.attributes=b,s?function(e){var t=e.prefix,r=e.iconName,n=e.children,o=e.attributes,i=e.symbol,a=!0===i?"".concat(t,"-").concat(za.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Xo(Xo({},o),{},{id:a}),children:n}]}]}(x):function(e){var t=e.children,r=e.main,n=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(Ma(a)&&r.found&&!n.found){var s={x:r.width/r.height/2,y:.5};o.style=Ra(Xo(Xo({},i),{},{"transform-origin":"".concat(s.x+a.x/16,"em ").concat(s.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}(x)}function Ms(e){var t=e.content,r=e.width,n=e.height,o=e.transform,i=e.extra,a=e.watchable,s=void 0!==a&&a,l=Xo(Xo({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[ta]="");var c=Xo({},i.styles);Ma(o)&&(c.transform=function(e){var t=e.transform,r=e.width,n=void 0===r?16:r,o=e.height,i=void 0===o?16:o,a=e.startCentered,s=void 0!==a&&a,l="";return l+=s&&mi?"translate(".concat(t.x/Pa-n/2,"em, ").concat(t.y/Pa-i/2,"em) "):s?"translate(calc(-50% + ".concat(t.x/Pa,"em), calc(-50% + ").concat(t.y/Pa,"em)) "):"translate(".concat(t.x/Pa,"em, ").concat(t.y/Pa,"em) "),l+="scale(".concat(t.size/Pa*(t.flipX?-1:1),", ").concat(t.size/Pa*(t.flipY?-1:1),") "),l+"rotate(".concat(t.rotate,"deg) ")}({transform:o,startCentered:!0,width:r,height:n}),c["-webkit-transform"]=c.transform);var d=Ra(c);d.length>0&&(l.style=d);var u=[];return u.push({tag:"span",attributes:l,children:[t]}),u}var Os=Ba.styles;function Ls(e){var t=e[0],r=e[1],n=Ko(e.slice(4),1)[0];return{found:!0,width:t,height:r,icon:Array.isArray(n)?{tag:"g",attributes:{class:"".concat(za.cssPrefix,"-").concat(wa.GROUP)},children:[{tag:"path",attributes:{class:"".concat(za.cssPrefix,"-").concat(wa.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(za.cssPrefix,"-").concat(wa.PRIMARY),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}}}}var Fs={found:!1,width:512,height:512};function Ds(e,t){var r=t;return"fa"===t&&null!==za.styleDefault&&(t=ps()),new Promise(function(n,o){if("fa"===r){var i=fs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Os[t]&&Os[t][e])return n(Ls(Os[t][e]));!function(e,t){la||za.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),n(Xo(Xo({},Fs),{},{icon:za.showMissingIcons&&e&&$s("missingIconAbstract")||{}}))})}var Hs=function(){},Bs=za.measurePerformance&&fi&&fi.mark&&fi.measure?fi:{mark:Hs,measure:Hs},_s='FA "7.1.0"',Ws=function(e){Bs.mark("".concat(_s," ").concat(e," ends")),Bs.measure("".concat(_s," ").concat(e),"".concat(_s," ").concat(e," begins"),"".concat(_s," ").concat(e," ends"))},qs=function(e){return Bs.mark("".concat(_s," ").concat(e," begins")),function(){return Ws(e)}},Us=function(){};function Gs(e){return"string"==typeof(e.getAttribute?e.getAttribute(ta):null)}function Ys(e){return di.createElementNS("http://www.w3.org/2000/svg",e)}function Js(e){return di.createElement(e)}function Vs(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ceFn,r=void 0===t?"svg"===e.tag?Ys:Js:t;if("string"==typeof e)return di.createTextNode(e);var n=r(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(Vs(e,{ceFn:r}))}),n}var Xs={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Vs(e),t)}),null===t.getAttribute(ta)&&za.keepOriginalSource){var r=di.createComment(function(e){var t=" ".concat(e.outerHTML," ");return"".concat(t,"Font Awesome fontawesome.com ")}(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){var t=e[0],r=e[1];if(~Ia(t).indexOf(za.replacementClass))return Xs.replace(e);var n=new RegExp("".concat(za.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(e,t){return t===za.replacementClass||t.match(n)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),0===o.toNode.length?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var i=r.map(function(e){return Ua(e)}).join("\n");t.setAttribute(ta,""),t.innerHTML=i}};function Ks(e){e()}function Qs(e,t){var r="function"==typeof t?t:Us;if(0===e.length)r();else{var n=Ks;"async"===za.mutateApproach&&(n=ci.requestAnimationFrame||Ks),n(function(){var t=!0===za.autoReplaceSvg?Xs.replace:Xs[za.autoReplaceSvg]||Xs.replace,n=qs("mutate");e.map(t),n(),r()})}}var Zs=!1;function el(){Zs=!0}function tl(){Zs=!1}var rl=null;function nl(e){if(ui&&za.observeMutations){var t=e.treeCallback,r=void 0===t?Us:t,n=e.nodeCallback,o=void 0===n?Us:n,i=e.pseudoElementsCallback,a=void 0===i?Us:i,s=e.observeMutationsRoot,l=void 0===s?di:s;rl=new ui(function(e){if(!Zs){var t=ps();Na(e).forEach(function(e){if("childList"===e.type&&e.addedNodes.length>0&&!Gs(e.addedNodes[0])&&(za.searchPseudoElements&&a(e.target),r(e.target)),"attributes"===e.type&&e.target.parentNode&&za.searchPseudoElements&&a([e.target],!0),"attributes"===e.type&&Gs(e.target)&&~ba.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){var t=e.getAttribute?e.getAttribute(na):null,r=e.getAttribute?e.getAttribute(oa):null;return t&&r}(e.target)){var n=xs(Ia(e.target)),i=n.prefix,s=n.iconName;e.target.setAttribute(na,i||t),s&&e.target.setAttribute(oa,s)}else(l=e.target)&&l.classList&&l.classList.contains&&l.classList.contains(za.replacementClass)&&o(e.target);var l})}}),hi&&rl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ol(e){var t,r,n=e.getAttribute("data-prefix"),o=e.getAttribute("data-icon"),i=void 0!==e.innerText?e.innerText.trim():"",a=xs(Ia(e));return a.prefix||(a.prefix=ps()),n&&o&&(a.prefix=n,a.iconName=o),a.iconName&&a.prefix||(a.prefix&&i.length>0&&(a.iconName=(t=a.prefix,r=e.innerText,(ns[t]||{})[r]||ds(a.prefix,Ja(e.innerText)))),!a.iconName&&za.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function il(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},r=ol(e),n=r.iconName,o=r.prefix,i=r.rest,a=function(e){return Na(e.attributes).reduce(function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e},{})}(e),s=Ss("parseNodeAttributes",{},e),l=t.styleParser?function(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(e,t){var r=t.split(":"),n=r[0],o=r.slice(1);return n&&o.length>0&&(e[n]=o.join(":").trim()),e},{})),r}(e):[];return Xo({iconName:n,prefix:o,transform:Ta,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:a}},s)}var al=Ba.styles;function sl(e){var t="nest"===za.autoReplaceSvg?il(e,{styleParser:!1}):il(e);return~t.extra.classes.indexOf(ya)?$s("generateLayersText",e,t):$s("generateSvgReplacementMutation",e,t)}function ll(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!hi)return Promise.resolve();var r=di.documentElement.classList,n=function(e){return r.add("".concat(ia,"-").concat(e))},o=function(e){return r.remove("".concat(ia,"-").concat(e))},i=za.autoFetchSvg?[].concat(Qo(Fi),Qo(Vi)):xi.concat(Object.keys(al));i.includes("fa")||i.push("fa");var a=[".".concat(ya,":not([").concat(ta,"])")].concat(i.map(function(e){return".".concat(e,":not([").concat(ta,"])")})).join(", ");if(0===a.length)return Promise.resolve();var s=[];try{s=Na(e.querySelectorAll(a))}catch(d){}if(!(s.length>0))return Promise.resolve();n("pending"),o("complete");var l=qs("onTree"),c=s.reduce(function(e,t){try{var r=sl(t);r&&e.push(r)}catch(d){la||"MissingIcon"===d.name&&console.error(d)}return e},[]);return new Promise(function(e,r){Promise.all(c).then(function(r){Qs(r,function(){n("active"),n("complete"),o("pending"),"function"==typeof t&&t(),l(),e()})}).catch(function(e){l(),r(e)})})}function cl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;sl(e).then(function(e){e&&Qs([e],t)})}var dl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?Ta:r,o=t.symbol,i=void 0!==o&&o,a=t.mask,s=void 0===a?null:a,l=t.maskId,c=void 0===l?null:l,d=t.classes,u=void 0===d?[]:d,f=t.attributes,p=void 0===f?{}:f,h=t.styles,m=void 0===h?{}:h;if(e){var g=e.prefix,x=e.iconName,y=e.icon;return Es(Xo({type:"icon"},e),function(){return zs("beforeDOMElementCreation",{iconDefinition:e,params:t}),Rs({icons:{main:Ls(y),mask:s?Ls(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:x,transform:Xo(Xo({},Ta),n),symbol:i,maskId:c,extra:{attributes:p,styles:m,classes:u}})})}},ul={mixout:function(){return{icon:(e=dl,function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:Ps(t||{}),o=r.mask;return o&&(o=(o||{}).icon?o:Ps(o||{})),e(n,Xo(Xo({},r),{},{mask:o}))})};var e},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ll,e.nodeCallback=cl,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,r=void 0===t?di:t,n=e.callback;return ll(r,void 0===n?function(){}:n)},e.generateSvgReplacementMutation=function(e,t){var r=t.iconName,n=t.prefix,o=t.transform,i=t.symbol,a=t.mask,s=t.maskId,l=t.extra;return new Promise(function(t,c){Promise.all([Ds(r,n),a.iconName?Ds(a.iconName,a.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(a){var c=Ko(a,2),d=c[0],u=c[1];t([e,Rs({icons:{main:d,mask:u},prefix:n,iconName:r,transform:o,symbol:i,maskId:s,extra:l,watchable:!0})])}).catch(c)})},e.generateAbstractIcon=function(e){var t,r=e.children,n=e.attributes,o=e.main,i=e.transform,a=Ra(e.styles);return a.length>0&&(n.style=a),Ma(i)&&(t=$s("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),r.push(t||o.icon),{children:r,attributes:n}}}},fl={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.classes,n=void 0===r?[]:r;return Es({type:"layer"},function(){zs("beforeDOMElementCreation",{assembler:e,params:t});var r=[];return e(function(e){Array.isArray(e)?e.map(function(e){r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(za.cssPrefix,"-layers")].concat(Qo(n)).join(" ")},children:r}]})}}}},pl={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.title,n=void 0===r?null:r,o=t.classes,i=void 0===o?[]:o,a=t.attributes,s=void 0===a?{}:a,l=t.styles,c=void 0===l?{}:l;return Es({type:"counter",content:e},function(){return zs("beforeDOMElementCreation",{content:e,params:t}),function(e){var t=e.content,r=e.extra,n=Xo(Xo({},r.attributes),{},{class:r.classes.join(" ")}),o=Ra(r.styles);o.length>0&&(n.style=o);var i=[];return i.push({tag:"span",attributes:n,children:[t]}),i}({content:e.toString(),title:n,extra:{attributes:s,styles:c,classes:["".concat(za.cssPrefix,"-layers-counter")].concat(Qo(i))}})})}}}},hl={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?Ta:r,o=t.classes,i=void 0===o?[]:o,a=t.attributes,s=void 0===a?{}:a,l=t.styles,c=void 0===l?{}:l;return Es({type:"text",content:e},function(){return zs("beforeDOMElementCreation",{content:e,params:t}),Ms({content:e,transform:Xo(Xo({},Ta),n),extra:{attributes:s,styles:c,classes:["".concat(za.cssPrefix,"-layers-text")].concat(Qo(i))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var r=t.transform,n=t.extra,o=null,i=null;if(mi){var a=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();o=s.width/a,i=s.height/a}return Promise.resolve([e,Ms({content:e.innerHTML,width:o,height:i,transform:r,extra:n,watchable:!0})])}}},ml=new RegExp('"',"ug"),gl=[1105920,1112319],xl=Xo(Xo(Xo(Xo({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),yl=Object.keys(xl).reduce(function(e,t){return e[t.toLowerCase()]=xl[t],e},{}),vl=Object.keys(yl).reduce(function(e,t){var r=yl[t];return e[t]=r[900]||Qo(Object.entries(r))[0][1],e},{});function bl(e,t){var r="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(function(n,o){if(null!==e.getAttribute(r))return n();var i,a,s,l=Na(e.children).filter(function(e){return e.getAttribute(ra)===t})[0],c=ci.getComputedStyle(e,t),d=c.getPropertyValue("font-family"),u=d.match(va),f=c.getPropertyValue("font-weight"),p=c.getPropertyValue("content");if(l&&!u)return e.removeChild(l),n();if(u&&"none"!==p&&""!==p){var h=c.getPropertyValue("content"),m=function(e,t){var r=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),o=isNaN(n)?"normal":n;return(yl[r]||{})[o]||vl[r]}(d,f),g=function(e){return Ja(Qo(e.replace(ml,""))[0]||"")}(h),x=u[0].startsWith("FontAwesome"),y=function(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),r=e.getPropertyValue("content").replace(ml,""),n=r.codePointAt(0),o=n>=gl[0]&&n<=gl[1],i=2===r.length&&r[0]===r[1];return o||i||t}(c),v=ds(m,g),b=v;if(x){var w=(a=is[i=g],s=ds("fas",i),a||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null});w.iconName&&w.prefix&&(v=w.iconName,m=w.prefix)}if(!v||y||l&&l.getAttribute(na)===m&&l.getAttribute(oa)===b)n();else{e.setAttribute(r,b),l&&e.removeChild(l);var k={iconName:null,prefix:null,transform:Ta,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},j=k.extra;j.attributes[ra]=t,Ds(v,m).then(function(o){var i=Rs(Xo(Xo({},k),{},{icons:{main:o,mask:{prefix:null,iconName:null,rest:[]}},prefix:m,iconName:b,extra:j,watchable:!0})),a=di.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(a,e.firstChild):e.appendChild(a),a.outerHTML=i.map(function(e){return Ua(e)}).join("\n"),e.removeAttribute(r),n()}).catch(o)}}else n()})}function wl(e){return Promise.all([bl(e,"::before"),bl(e,"::after")])}function kl(e){return!(e.parentNode===document.head||~aa.indexOf(e.tagName.toUpperCase())||e.getAttribute(ra)||e.parentNode&&"svg"===e.parentNode.tagName)}var jl=function(e){return!!e&&sa.some(function(t){return e.includes(t)})},Cl=function(e){if(!e)return[];var t,r=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()}),o=Yo(n=n.flatMap(function(e){return e.includes("(")?e:e.split(",").map(function(e){return e.trim()})}));try{for(o.s();!(t=o.n()).done;){var i=t.value;if(jl(i)){var a=sa.reduce(function(e,t){return e.replace(t,"")},i);""!==a&&"*"!==a&&r.add(a)}}}catch(s){o.e(s)}finally{o.f()}return r};function Sl(e){if(hi){var t;if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])t=e;else if(za.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r,n=new Set,o=Yo(document.styleSheets);try{for(o.s();!(r=o.n()).done;){var i=r.value;try{var a,s=Yo(i.cssRules);try{for(s.s();!(a=s.n()).done;){var l,c=a.value,d=Yo(Cl(c.selectorText));try{for(d.s();!(l=d.n()).done;){var u=l.value;n.add(u)}}catch(p){d.e(p)}finally{d.f()}}}catch(p){s.e(p)}finally{s.f()}}catch(h){za.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(h.message,')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))}}}catch(p){o.e(p)}finally{o.f()}if(!n.size)return;var f=Array.from(n).join(", ");try{t=e.querySelectorAll(f)}catch(m){}}return new Promise(function(e,r){var n=Na(t).filter(kl).map(wl),o=qs("searchPseudoElements");el(),Promise.all(n).then(function(){o(),tl(),e()}).catch(function(){o(),tl(),r()})})}}var zl=!1,$l=function(e){return e.toLowerCase().split(" ").reduce(function(e,t){var r=t.toLowerCase().split("-"),n=r[0],o=r.slice(1).join("-");if(n&&"h"===o)return e.flipX=!0,e;if(n&&"v"===o)return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(n){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Pl={mixout:function(){return{parse:{transform:function(e){return $l(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-transform");return r&&(e.transform=$l(r)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,r=e.transform,n=e.containerWidth,o=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(32*r.x,", ").concat(32*r.y,") "),s="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),c={outer:i,inner:{transform:"".concat(a," ").concat(s," ").concat(l)},path:{transform:"translate(".concat(o/2*-1," -256)")}};return{tag:"g",attributes:Xo({},c.outer),children:[{tag:"g",attributes:Xo({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:Xo(Xo({},t.icon.attributes),c.path)}]}]}}}},Tl={x:0,y:0,width:"100%",height:"100%"};function Al(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var Nl,Il={hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-mask"),n=r?xs(r.split(" ").map(function(e){return e.trim()})):{prefix:null,iconName:null,rest:[]};return n.prefix||(n.prefix=ps()),e.mask=n,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t,r=e.children,n=e.attributes,o=e.main,i=e.mask,a=e.maskId,s=e.transform,l=o.width,c=o.icon,d=i.width,u=i.icon,f=function(e){var t=e.transform,r=e.containerWidth,n=e.iconWidth,o={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:o,inner:{transform:"".concat(i," ").concat(a," ").concat(s)},path:{transform:"translate(".concat(n/2*-1," -256)")}}}({transform:s,containerWidth:d,iconWidth:l}),p={tag:"rect",attributes:Xo(Xo({},Tl),{},{fill:"white"})},h=c.children?{children:c.children.map(Al)}:{},m={tag:"g",attributes:Xo({},f.inner),children:[Al(Xo({tag:c.tag,attributes:Xo(Xo({},c.attributes),f.path)},h))]},g={tag:"g",attributes:Xo({},f.outer),children:[m]},x="mask-".concat(a||Aa()),y="clip-".concat(a||Aa()),v={tag:"mask",attributes:Xo(Xo({},Tl),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(t=u,"g"===t.tag?t.children:[t])},v]};return r.push(b,{tag:"rect",attributes:Xo({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(x,")")},Tl)}),{children:r,attributes:n}}}};Nl={mixoutsTo:Ns}.mixoutsTo,ws=[Da,ul,fl,pl,hl,{hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Sl,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,r=void 0===t?di:t;za.searchPseudoElements&&Sl(r)}}},{mixout:function(){return{dom:{unwatch:function(){el(),zl=!0}}}},hooks:function(){return{bootstrap:function(){nl(Ss("mutationObserverCallbacks",{}))},noAuto:function(){rl&&rl.disconnect()},watch:function(e){var t=e.observeMutationsRoot;zl?tl():nl(Ss("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},Pl,Il,{provides:function(e){var t=!1;ci.matchMedia&&(t=ci.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:Xo(Xo({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Xo(Xo({},n),{},{attributeName:"opacity"}),i={tag:"circle",attributes:Xo(Xo({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:Xo(Xo({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Xo(Xo({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(i),e.push({tag:"path",attributes:Xo(Xo({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Xo(Xo({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:Xo(Xo({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Xo(Xo({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-symbol"),n=null!==r&&(""===r||r);return e.symbol=n,e}}}}],ks={},Object.keys(js).forEach(function(e){-1===Cs.indexOf(e)&&delete js[e]}),ws.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){"function"==typeof t[e]&&(Nl[e]=t[e]),"object"===ei(t[e])&&Object.keys(t[e]).forEach(function(r){Nl[e]||(Nl[e]={}),Nl[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){ks[e]||(ks[e]=[]),ks[e].push(r[e])})}e.provides&&e.provides(js)});var El=Ns.config,Rl=Ns.parse,Ml=Ns.icon;function Ol(e){return t=e,(t-=0)==t?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():"")).charAt(0).toLowerCase()+e.slice(1);var t}function Ll(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Fl=new Map;function Dl(e){if(Fl.has(e))return Fl.get(e);const t={};let r=0;const n=e.length;for(;r<n;){const o=e.indexOf(";",r),i=-1===o?n:o,a=e.slice(r,i).trim();if(a){const e=a.indexOf(":");if(e>0){const r=a.slice(0,e).trim(),n=a.slice(e+1).trim();if(r&&n){const e=Ol(r);t[e.startsWith("webkit")?Ll(e):e]=n}}}r=i+1}if(1e3===Fl.size){const e=Fl.keys().next().value;e&&Fl.delete(e)}return Fl.set(e,t),t}var Hl=function e(t,r,n={}){if("string"==typeof r)return r;const o=(r.children||[]).map(r=>e(t,r)),i=r.attributes||{},a={};for(const[d,u]of Object.entries(i))switch(!0){case"class"===d:a.className=u;break;case"style"===d:a.style=Dl(String(u));break;case d.startsWith("aria-"):case d.startsWith("data-"):a[d.toLowerCase()]=u;break;default:a[Ol(d)]=u}const{style:s,"aria-label":l,...c}=n;return s&&(a.style=a.style?{...a.style,...s}:s),l&&(a["aria-label"]=l,a["aria-hidden"]="false"),t(r.tag,{...c,...a},...o)}.bind(null,n.createElement),Bl=(t,r)=>{const n=e.useId();return t||(r?n:void 0)},_l="searchPseudoElementsFullScan"in El?"7.0.0":"6.0.0",Wl=Number.parseInt(_l)>=7,ql="fa",Ul="fa-beat",Gl="fa-fade",Yl="fa-beat-fade",Jl="fa-bounce",Vl="fa-shake",Xl="fa-spin",Kl="fa-spin-pulse",Ql="fa-spin-reverse",Zl="fa-pulse",ec={left:"fa-pull-left",right:"fa-pull-right"},tc={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},rc={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},nc="fa-border",oc="fa-fw",ic="fa-flip",ac="fa-flip-horizontal",sc="fa-flip-vertical",lc="fa-inverse",cc="fa-rotate-by",dc="fa-swap-opacity",uc="fa-width-auto";function fc(e){const t=El.cssPrefix||El.familyPrefix||ql;return t===ql?e:e.replace(new RegExp(`(?<=^|\\s)${ql}-`,"g"),`${t}-`)}function pc(e){if(e)return(e=>"object"==typeof e&&"icon"in e&&!!e.icon)(e)?e:Rl.icon(e)}var hc=new class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t="undefined"!=typeof process&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}}("FontAwesomeIcon"),mc={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},gc=new Set(Object.keys(mc)),xc=n.forwardRef((e,t)=>{const r={...mc,...e},{icon:n,mask:o,symbol:i,title:a,titleId:s,maskId:l,transform:c}=r,d=Bl(l,Boolean(o)),u=Bl(s,Boolean(a)),f=pc(n);if(!f)return hc.error("Icon lookup is undefined",n),null;const p=function(e){const{beat:t,fade:r,beatFade:n,bounce:o,shake:i,spin:a,spinPulse:s,spinReverse:l,pulse:c,fixedWidth:d,inverse:u,border:f,flip:p,size:h,rotation:m,pull:g,swapOpacity:x,rotateBy:y,widthAuto:v,className:b}=e,w=[];return b&&w.push(...b.split(" ")),t&&w.push(Ul),r&&w.push(Gl),n&&w.push(Yl),o&&w.push(Jl),i&&w.push(Vl),a&&w.push(Xl),l&&w.push(Ql),s&&w.push(Kl),c&&w.push(Zl),d&&w.push(oc),u&&w.push(lc),f&&w.push(nc),!0===p&&w.push(ic),"horizontal"!==p&&"both"!==p||w.push(ac),"vertical"!==p&&"both"!==p||w.push(sc),null!=h&&w.push(rc[h]),null!=m&&0!==m&&w.push(tc[m]),null!=g&&w.push(ec[g]),x&&w.push(dc),Wl?(y&&w.push(cc),v&&w.push(uc),(El.cssPrefix||El.familyPrefix||ql)===ql?w:w.map(fc)):w}(r),h="string"==typeof c?Rl.transform(c):c,m=pc(o),g=Ml(f,{...p.length>0&&{classes:p},...h&&{transform:h},...m&&{mask:m},symbol:i,title:a,titleId:u,maskId:d});if(!g)return hc.error("Could not find icon",f),null;const{abstract:x}=g,y={ref:t};for(const v of function(e){return Object.keys(e)}(r))gc.has(v)||(y[v]=r[v]);return Hl(x[0],y)});xc.displayName="FontAwesomeIcon";
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
var yc={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},vc={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},bc={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},wc={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},kc={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},jc={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},Cc={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Sc={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z"]},zc={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z"]};const $c=()=>{var t,r,n;i();const{isLoading:o,startLoading:a,stopLoading:s}=ae(),l=Hn(),{t:c}=Hr(),d=(null==l?void 0:l.currentBoard)||Array(9).fill().map(()=>Array(9).fill(0)),u=(null==l?void 0:l.originalPuzzle)||null,f=(null==l?void 0:l.selectedCell)||null,p=(null==l?void 0:l.difficulty)||"medium",h=(null==l?void 0:l.timeElapsed)||0,m=(null==l?void 0:l.errorCount)||0,g=(null==l?void 0:l.isTimerActive)??!0,x=(null==l?void 0:l.isPencilMode)??!1,y=(null==l?void 0:l.setSelectedCell)||(()=>{}),v=(null==l?void 0:l.setHighlightedCells)||(()=>{}),w=(null==l?void 0:l.setDifficulty)||(()=>{});null==l||l.setBoard,null==l||l.setSolution,null==l||l.generateNewPuzzle;const k=(null==l?void 0:l.togglePencilMode)||(()=>{}),j=(null==l?void 0:l.toggleTimer)||(()=>{}),C=(null==l?void 0:l.getHint)||(()=>{}),S=(null==l?void 0:l.identifyTechniques)||(()=>[]),z=(null==l?void 0:l.openSettings)||(()=>{}),$=(null==l?void 0:l.fillCell)||(()=>{}),P=(null==l?void 0:l.fillAllCandidates)||(()=>{}),T=(null==l?void 0:l.undo)||(()=>{}),A=(null==l?void 0:l.solution)||Array(9).fill().map(()=>Array(9).fill(0)),N=(null==l?void 0:l.highlightedCells)||[],I=(null==l?void 0:l.pencilNotes)||[],E=(()=>{const e={};for(let t=1;t<=9;t++)e[t]=9;for(let t=0;t<9;t++)for(let r=0;r<9;r++){const n=d[t][r];0!==n&&A[t][r]===n&&e[n]--}return e})(),[R,M]=e.useState(window.innerHeight>window.innerWidth),[O,L]=e.useState(!1),[F,D]=e.useState(!1),[H,B]=e.useState(!1),_=e.useRef(null);e.useRef(null);const W=e.useRef(null);e.useEffect(()=>{const e=()=>{const e=window.innerWidth<992,t=window.innerHeight>window.innerWidth;M(e&&t)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]);const q=e=>{const t=e.target.closest("div[row]")||e.target.closest("div[col]"),r=e.target.closest(".board-container"),n=e.target.closest(".controls-container"),o=e.target.closest(".nav-block"),i=e.target.closest(".display-block");t||r||n||o||i||(y(null),(null==l?void 0:l.setHighlightedCells)&&l.setHighlightedCells([]))};e.useEffect(()=>{const e=W.current;return e&&e.addEventListener("click",q),()=>{e&&e.removeEventListener("click",q)}},[f]);const U=(e,t)=>{y({row:e,col:t}),(null==l?void 0:l.setHighlightedCells)&&l.setHighlightedCells([])},G=e=>{const t=Math.floor(e/3600),r=Math.floor(e%3600/60),n=e%60;return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`},Y=e=>{try{if(!f){const t=[];for(let r=0;r<9;r++)for(let n=0;n<9;n++){const o=d&&d[r]?d[r][n]:0,i=u&&u[r]&&u[r][n]===e,a=o===e&&(null==l?void 0:l.lockedCells)&&l.lockedCells.has(`${r}-${n}`);(i||a)&&e>0&&t.push({row:r,col:n,number:e})}return void((null==l?void 0:l.setHighlightedCells)&&l.setHighlightedCells(t))}if(u&&u[f.row]&&0!==u[f.row][f.col])return void y(null);const t=`${f.row}-${f.col}`;if((null==l?void 0:l.lockedCells)&&l.lockedCells.has(t))return void y(null);$(f.row,f.col,e)}catch(t){console.error("Error updating cell:",t)}},J=()=>{if(f)try{(null==l?void 0:l.clearCell)?l.clearCell(f.row,f.col):console.warn("clearCell function not available in context")}catch(e){console.error("Error clearing cell:",e)}},V=()=>{console.log("handleNewGame 被调用"),L(!0),console.log("设置 showDifficultyModal 为 true")};e.useEffect(()=>{if(!d||d.every(e=>e.every(e=>0===e))){(async()=>{try{if(a&&a("加载游戏..."),(null==l?void 0:l.setCurrentBoard)&&(null==l?void 0:l.setOriginalPuzzle)&&(null==l?void 0:l.setSolution)){console.log("直接使用本地预设谜题初始化游戏");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];l.setCurrentBoard(e),l.setOriginalPuzzle(e),l.setSolution(t),l.setGameStarted(!0),l.setTimerActive(!0)}else console.log("尝试使用上下文的其他方法初始化游戏")}catch(e){console.error("初始化游戏失败:",e),console.error("错误详情:",e.message,e.stack)}finally{s&&s()}})()}},[]);const X=()=>{j&&j()},K=e.useCallback(async()=>{if(y(null),C)try{const e=await C();e&&void 0!==e.row&&void 0!==e.col&&void 0!==e.value&&(v([[e.row,e.col]]),Q.info(`提示：在(${e.row+1},${e.col+1})填入${e.value}`,{position:"top-right",autoClose:2e3}))}catch(e){console.error("获取提示失败:",e)}},[C,v,y]),Z=e.useCallback(()=>{y(null);const e=S();e.length>0?Q.info(`找到${e.length}个可用技巧，可在技巧标签页中查看详情`,{position:"top-right",autoClose:2e3}):Q.info("当前棋盘没有找到可用技巧，请尝试其他解法或获取提示",{position:"top-right",autoClose:2e3})},[S,y]),ee=()=>{P&&(P(),B(!0),setTimeout(()=>B(!1),2e3))},te=()=>{k&&(k(),D(!0),setTimeout(()=>D(!1),2e3))},re=()=>{z&&z()};return b.jsxs("div",{className:"sudoku-game-container",ref:W,children:[!g&&!(null==l?void 0:l.gameCompleted)&&(null==l?void 0:l.gameStarted)&&b.jsx("div",{className:"pause-overlay",onClick:X,children:b.jsxs("div",{className:"pause-message",children:[b.jsx("h2",{children:"Game Paused"}),b.jsx("p",{children:"Click anywhere to resume"})]})}),b.jsx("div",{className:"main-content",children:R?b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"scroll-hint"}),b.jsx(Wo,{errorCount:m,difficulty:p,time:G(h)}),b.jsx("div",{className:"nav-block",children:b.jsx(Lo,{onNewGame:V,onPauseTimer:X,onGetHint:K,onShowTechniques:Z,onToggleNotes:ee,onSettings:re,isNotesMode:x,isTimerActive:g,gameCompleted:(null==l?void 0:l.gameCompleted)||!1})}),b.jsxs("div",{className:"board-container",ref:_,onClick:e=>e.stopPropagation(),style:{position:"relative"},children:[b.jsx(ho,{board:d||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:u,selectedCell:f,highlightedCells:((null==l?void 0:l.highlightedCells)||[]).filter(e=>!e.techniqueIndicator),incorrectCells:(null==l?void 0:l.incorrectCells)||new Set,onCellClick:U,isPencilMode:x,pencilNotes:(null==l?void 0:l.pencilNotes)||[]}),b.jsx(qo,{highlightedCells:((null==l?void 0:l.highlightedCells)||[]).filter(e=>e.techniqueIndicator),boardWidth:(null==(t=_.current)?void 0:t.offsetWidth)||450,boardHeight:(null==(r=_.current)?void 0:r.offsetHeight)||450,isPortrait:R})]}),b.jsx("div",{className:"controls-container",onClick:e=>e.stopPropagation(),children:b.jsx(go,{onNumberSelect:Y,onClearCell:J,onUndo:T,selectedNumber:(null==f?void 0:f.value)||null,isPencilMode:x,togglePencilMode:te,fillAllCandidates:P,remainingNumbers:E})})]}):b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"top-row",children:[b.jsx("div",{className:"nav-block",children:b.jsx(Lo,{onNewGame:V,onPauseTimer:X,onGetHint:K,onShowTechniques:Z,onToggleNotes:ee,onSettings:re,isNotesMode:x,isTimerActive:g})}),b.jsxs("div",{className:"display-block",children:[b.jsxs("div",{children:[c("error"),"：",b.jsx("span",{className:"value error-count",style:{color:"#ff4d4d"},children:m})]}),b.jsx("div",{children:c(p)}),b.jsx("div",{children:G(h)})]})]}),b.jsxs("div",{className:"bottom-row",children:[b.jsxs("div",{className:"board-container",ref:_,onClick:e=>e.stopPropagation(),style:{position:"relative"},children:[b.jsx(ho,{board:d||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:u,selectedCell:f,highlightedCells:N.filter(e=>!e.techniqueIndicator),incorrectCells:(null==l?void 0:l.incorrectCells)||new Set,onCellClick:U,isPencilMode:x,pencilNotes:I}),b.jsx(qo,{highlightedCells:N.filter(e=>e.techniqueIndicator),boardWidth:(null==(n=_.current)?void 0:n.offsetWidth)||450,isPortrait:R})]}),b.jsx("div",{className:"controls-container",onClick:e=>e.stopPropagation(),children:b.jsx(go,{onNumberSelect:Y,onClearCell:J,onUndo:T,selectedNumber:(null==f?void 0:f.value)||null,isPencilMode:x,togglePencilMode:te,fillAllCandidates:P,remainingNumbers:E})})]})]})}),o&&b.jsx("div",{className:"loading-overlay",children:b.jsx("div",{children:"加载中..."})}),b.jsx(zo,{isOpen:O,onClose:()=>L(!1),onSelectDifficulty:async e=>{try{if(console.log(`handleDifficultySelect 被调用，选择难度: ${e}`),L(!1),console.log("关闭难度选择模态框"),a&&(a("生成新谜题..."),console.log("显示加载状态")),console.log("sudokuContext 可用:",!!l),console.log("startNewGame 方法可用:",!!(null==l?void 0:l.startNewGame)),console.log("generateNewPuzzle 方法可用:",!!(null==l?void 0:l.generateNewPuzzle)),null==l?void 0:l.startNewGame)console.log("调用 startNewGame 方法"),await l.startNewGame(null,e),console.log("startNewGame 调用完成");else if(null==l?void 0:l.generateNewPuzzle)console.log("调用 generateNewPuzzle 方法"),await l.generateNewPuzzle(e),console.log("generateNewPuzzle 调用完成");else{console.warn("无法开始新游戏：上下文函数不可用"),console.log("使用备用方案：离线谜题生成器"),w&&w(e);const t=(e=>{console.log(`生成离线谜题，难度: ${e}`);const t={easy:40,medium:50,hard:58,expert:64}[e]||50,r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],n=r.map(e=>[...e]);let o=t;for(;o>0;){const e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());0!==n[e][t]&&(n[e][t]=0,o--)}return{puzzle:n,solution:r}})(e);console.log("离线谜题生成完成"),(null==l?void 0:l.setCurrentBoard)&&(null==l?void 0:l.setCurrentPuzzle)&&(null==l?void 0:l.setSolution)&&(console.log("设置谜题到上下文"),l.setCurrentPuzzle(t),l.setCurrentBoard(t.puzzle),l.setSolution(t.solution)),y(null),console.log("重置选中单元格")}}catch(t){console.error("Error starting new game:",t),console.error("错误详情:",t.message,t.stack)}finally{s&&(s(),console.log("隐藏加载状态"))}},initialDifficulty:p}),F&&b.jsx("div",{className:"pencil-mode-instructions",children:c(x?"enterPencilMode":"exitPencilMode")}),H&&b.jsx("div",{className:"pencil-mode-instructions",children:c("notesCalculated")})]})},Pc=Or.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Tc=Or.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`,Ac=Or.div`
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
`,Nc=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,Ic=Or.h3`
  font-size: 22px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Ec=Or.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,Rc=Or.p`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 15px;
`,Mc=Or.div`
  width: 100%;
  height: 8px;
  background-color: ${e=>e.theme.background};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`,Oc=Or.div`
  height: 100%;
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  border-radius: 4px;
  width: ${e=>e.percentage}%;
  transition: width 0.3s ease;
`,Lc=Or.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Fc=Or.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Dc=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
`,Hc=Or.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Bc=Or.button`
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
`,_c=Or.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Wc=Or.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,qc=Or.div`
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  padding: 20px;
`,Uc=Or.ol`
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Gc=Or.li`
  font-size: 16px;
  color: ${e=>e.theme.text};
  line-height: 1.6;
`,Yc=Or.button`
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
`,Jc=()=>{const{theme:r}=ne(),{techniquesProgress:n,incrementTechniquePractice:o}=hn(),[i,a]=e.useState(null),s=[{id:"nakedSingles",name:"唯一候选数 (Naked Single)",description:"最简单的数独技巧，当一个格子只有一个可能的数字时填入该数字。",details:{description:"唯一候选数是最基础的数独解题技巧。当一个空格子所在的行、列和3x3宫格中已经包含了除一个数字外的所有其他数字时，这个空格子只能填入剩下的那个数字。",steps:["观察一个空格子","检查该格子所在的行，列出已经存在的数字","检查该格子所在的列，列出已经存在的数字","检查该格子所在的3x3宫格，列出已经存在的数字","如果以上三个区域已经包含了除一个数字外的所有数字（1-9），则填入剩下的那个数字"],examples:"例如：一个格子所在的行包含数字1、2、3、4、5、6、7、9，所在的列包含数字1、2、3、4、5、6、8，所在的宫格包含数字1、2、3、4、5、7、8、9。那么这个格子只能填入数字8。"}},{id:"hiddenSingles",name:"隐性唯一 (Hidden Single)",description:"当一个数字只能出现在某一行、列或宫格的某个特定格子时，填入该数字。",details:{description:"隐性唯一技巧比唯一候选数稍微复杂一些。当一个数字在某一行、列或3x3宫格中只能出现在一个特定的空格子时，即使该格子可能有其他候选数，但这个数字必须填入该格子。",steps:["选择一个数字（1-9）","检查某一行，确定该数字可能的放置位置","如果在该行中，该数字只能放在一个特定格子，则填入该数字","对每一列和每个3x3宫格重复同样的检查"],examples:"例如：在某一行中，数字5只能放在某个特定格子中，尽管该格子可能还有其他候选数（如2和5），但因为数字5在该行中没有其他可能的放置位置，所以这个格子必须填入5。"}},{id:"nakedPairs",name:"数对 (Naked Pairs)",description:"当两个格子在同一区域（行、列或宫格）中具有相同的两个候选数时，可以排除该区域其他格子中这两个数字。",details:{description:"数对技巧是一种排除法技巧。当在同一行、列或3x3宫格中有两个格子都只有相同的两个候选数时，这两个数字必须分别填入这两个格子，因此可以从该区域的其他格子的候选数中排除这两个数字。",steps:["在同一行、列或3x3宫格中寻找两个格子","确认这两个格子恰好有相同的两个候选数","从该区域的其他格子的候选数中排除这两个数字"],examples:"例如：在同一行中，两个格子都只有候选数3和7。这意味着这两个数字必须分别填入这两个格子，因此该行的其他格子中不可能是3或7，可以从它们的候选数中排除这两个数字。"}},{id:"hiddenPairs",name:"隐性数对 (Hidden Pairs)",description:"当两个数字只能出现在同一区域的两个特定格子中时，可以排除这两个格子中的其他候选数。",details:{description:"隐性数对是数对的一种变体。当在同一行、列或3x3宫格中，两个特定的数字只能出现在两个特定的格子中时，这两个格子必须包含这两个数字，可以排除这两个格子中的其他候选数。",steps:["在同一行、列或3x3宫格中选择两个数字","检查这两个数字是否只能出现在该区域的两个特定格子中","如果是，则可以从这两个格子中排除所有其他候选数，只保留这两个数字"],examples:"例如：在同一行中，数字4和6只能出现在两个特定的格子中，尽管这两个格子可能有其他候选数。这意味着这两个格子必须包含数字4和6，所以可以从这两个格子中删除其他候选数。"}},{id:"pointingPairs",name:"指向对 (Pointing Pairs)",description:"当一个数字在某个3x3宫格中只能出现在同一行或同一列时，可以排除该行或列中其他宫格内该数字的可能性。",details:{description:"指向对技巧利用3x3宫格和行/列的关系进行排除。当在某个3x3宫格中，一个数字只能出现在同一行或同一列的格子中时，这个数字在该行或列的其他3x3宫格中就不能出现在相同的行或列位置。",steps:["选择一个3x3宫格","对于某个数字，检查它在该宫格中可能的位置","如果这些位置全部位于同一行或同一列","则可以从该行或列的其他3x3宫格中排除该数字出现在相同行或列位置的可能性"],examples:"例如：在某个3x3宫格中，数字2只能出现在该宫格的第一行的两个格子中。这意味着在这一行的其他3x3宫格中，数字2不能出现在第一行的位置。"}},{id:"boxLineReduction",name:"宫行列排除 (Box-Line Reduction)",description:"当一个数字在某一行或列中只能出现在同一个3x3宫格内时，可以排除该宫格中其他格子的该数字可能性。",details:{description:"宫行列排除是指向对的反向应用。当在某一行或列中，一个数字只能出现在某个特定的3x3宫格中时，可以排除该宫格中其他格子出现该数字的可能性。",steps:["选择某一行或列","对于某个数字，检查它在该行或列中可能的位置","如果这些位置全部位于同一个3x3宫格中","则可以从该3x3宫格的其他格子中排除该数字"],examples:"例如：在某一行中，数字8只能出现在该行的前三个格子（属于第一个3x3宫格）。这意味着在第一个3x3宫格中，数字8只能出现在这三个格子中，可以从该宫格的其他六个格子中排除数字8。"}}],l=e=>{const t=n[e]||{mastered:0,practiced:0};return Math.min(100,t.practiced/10*20)};return b.jsx(Pc,{children:i?b.jsxs(Fc,{theme:r,children:[b.jsxs(Dc,{children:[b.jsx(Hc,{theme:r,children:i.name}),b.jsx(Bc,{onClick:()=>{a(null)},theme:r,children:"关闭"})]}),b.jsxs(_c,{children:[b.jsxs("div",{children:[b.jsx(Wc,{theme:r,children:"技巧说明"}),b.jsx("p",{style:{fontSize:"16px",color:r.textSecondary,lineHeight:"1.6"},children:i.details.description})]}),b.jsxs("div",{children:[b.jsx(Wc,{theme:r,children:"使用步骤"}),b.jsx(Uc,{children:i.details.steps.map((e,t)=>b.jsx(Gc,{theme:r,children:e},t))})]}),b.jsxs("div",{children:[b.jsx(Wc,{theme:r,children:"示例"}),b.jsx(qc,{theme:r,children:b.jsx("p",{style:{fontSize:"16px",color:r.textSecondary,lineHeight:"1.6"},children:i.details.examples})})]}),b.jsx(Yc,{onClick:()=>(e=>{var r;o(e);const n=null==(r=s.find(t=>t.id===e))?void 0:r.name;Q.info(t("startPractice",{techniqueName:n}),{position:"top-right",autoClose:2e3})})(i.id),theme:r,children:"开始练习"})]})]}):b.jsxs(b.Fragment,{children:[b.jsx("h2",{style:{fontSize:"32px",color:r.text,margin:0},children:"数独技巧学习"}),b.jsx("p",{style:{fontSize:"18px",color:r.textSecondary,marginBottom:"30px"},children:"点击技巧卡片了解详情，掌握各种数独解题方法"}),b.jsx(Tc,{children:s.map(e=>{const t=n[e.id]||{mastered:0,practiced:0},o=l(e.id),i=(s=e.id,l(s)>=80);var s;return b.jsxs(Ac,{onClick:()=>(e=>{a(e)})(e),mastered:i,theme:r,children:[b.jsxs(Nc,{children:[b.jsx(Ic,{theme:r,children:e.name}),b.jsx(Ec,{mastered:i,theme:r,children:i?"已掌握":"学习中"})]}),b.jsx(Rc,{theme:r,children:e.description}),b.jsx(Mc,{theme:r,children:b.jsx(Oc,{percentage:o,mastered:i,theme:r})}),b.jsxs(Lc,{theme:r,children:[b.jsxs("span",{children:["练习次数: ",t.practiced]}),b.jsxs("span",{children:["掌握度: ",o.toFixed(0),"%"]})]})]},e.id)})})]})})},Vc=Or.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Xc=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Kc=Or.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Qc=Or.button`
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
`,Zc=Or.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`,ed=Or.button`
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
`,td=Or.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,rd=Or.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
`,nd=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,od=Or.h3`
  font-size: 20px;
  color: ${e=>e.theme.text};
  margin: 0;
`,id=Or.div`
  background-color: ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,ad=Or.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
`,sd=Or.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,ld=Or.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,cd=Or.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,dd=Or.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,ud=Or.button`
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
`,fd=Or.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.textSecondary};
`,pd=Or.div`
  font-size: 72px;
  margin-bottom: 20px;
  color: ${e=>e.theme.disabled};
`,hd=Or.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 10px;
`,md=Or.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 20px;
`,gd=Or.button`
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
`,xd=Or.div`
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
`,yd=Or.div`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,vd=Or.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-top: 0;
  margin-bottom: 20px;
`,bd=Or.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 30px;
  line-height: 1.6;
`,wd=Or.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`,kd=()=>{const{theme:t}=ne(),{userId:r}=hn(),{loadSavedGame:n}=Hn(),{executeWithLoading:o}=ae(),{t:i}=Hr(),[a,s]=e.useState([]),[l,c]=e.useState("all"),[d,u]=e.useState(!1),[f,p]=e.useState(null);e.useEffect(()=>{h()},[]);const h=async()=>{try{await o(async()=>{const e=await gn.getUserProgress(r);s(e.data||[])},"加载游戏进度中...")}catch(e){console.error("加载进度失败:",e),s(m())}},m=()=>[{id:"1",puzzleId:"puzzle-1",difficulty:"easy",startTime:"2023-10-15T14:30:00",lastUpdated:"2023-10-15T15:45:00",completed:!1,completionTime:null,filledCells:42,totalCells:81,status:"in-progress",puzzleState:[]},{id:"2",puzzleId:"puzzle-2",difficulty:"medium",startTime:"2023-10-14T09:15:00",lastUpdated:"2023-10-14T10:30:00",completed:!0,completionTime:"2023-10-14T10:30:00",filledCells:81,totalCells:81,status:"completed",puzzleState:[]},{id:"3",puzzleId:"puzzle-3",difficulty:"hard",startTime:"2023-10-13T18:00:00",lastUpdated:"2023-10-13T18:30:00",completed:!1,completionTime:null,filledCells:28,totalCells:81,status:"paused",puzzleState:[]}],g=a.filter(e=>"all"===l||("completed"===l?"completed"===e.status:"in-progress"!==l||"completed"!==e.status)),x=e=>{p(e),u(!0)},y=()=>{u(!1),p(null)},v=e=>new Date(e).toLocaleString(),w=e=>{switch(e){case"easy":return i("easy");case"medium":return i("medium");case"hard":return i("hard");case"expert":return i("expert");default:return e}};return b.jsxs(Vc,{children:[b.jsxs(Xc,{children:[b.jsx(Kc,{children:i("progress")}),a.length>0&&b.jsx(Qc,{onClick:()=>x("clear-all"),children:i("clearAllProgress")})]}),a.length>0&&b.jsxs(Zc,{children:[b.jsx(ed,{active:"all"===l,onClick:()=>c("all"),children:i("allProgress")}),b.jsx(ed,{active:"in-progress"===l,onClick:()=>c("in-progress"),children:i("inProgress")}),b.jsx(ed,{active:"completed"===l,onClick:()=>c("completed"),children:i("completed")})]}),g.length>0?b.jsx(td,{children:g.map(e=>{return b.jsxs(rd,{status:e.status,children:[b.jsxs(nd,{children:[b.jsxs(od,{children:[i("sudokuGame")," #",e.id]}),b.jsx(id,{status:e.status,theme:t,children:"completed"===e.status?i("completed"):"in-progress"===e.status?i("inProgress"):i("paused")})]}),b.jsxs(ad,{children:[b.jsxs(sd,{children:[b.jsx(ld,{theme:t,children:i("difficulty")}),b.jsx(cd,{theme:t,children:w(e.difficulty)})]}),b.jsxs(sd,{children:[b.jsx(ld,{theme:t,children:i("startTime")}),b.jsx(cd,{theme:t,children:v(e.startTime)})]}),b.jsxs(sd,{children:[b.jsx(ld,{theme:t,children:i("lastUpdated")}),b.jsx(cd,{theme:t,children:v(e.lastUpdated)})]}),b.jsxs(sd,{children:[b.jsx(ld,{theme:t,children:i("completionProgress")}),b.jsxs(cd,{theme:t,children:[(r=e.filledCells,s=e.totalCells,Math.round(r/s*100)),"%"]})]})]}),b.jsxs(dd,{children:["completed"!==e.status&&b.jsx(ud,{type:"primary",onClick:()=>(async e=>{try{await o(async()=>{const t=a.find(t=>t.id===e);t&&(await n(t.puzzleState,t.puzzleId),window.location.href="/game")},"加载游戏中...")}catch(t){console.error("加载游戏失败:",t),Q.error(i("loadGameFailed"),{position:"top-right",autoClose:2e3})}})(e.id),children:i("continueGame")}),b.jsx(ud,{type:"danger",onClick:()=>x(e.id),children:i("deleteProgress")})]})]},e.id);var r,s})}):b.jsxs(fd,{children:[b.jsx(pd,{children:"📝"}),b.jsx(hd,{children:i("noProgress")}),b.jsx(md,{children:i("all"!==l?"noFilteredProgress":"noStartedGames")}),b.jsx(gd,{onClick:()=>window.location.href="/game",children:i("startNewGame")})]}),d&&b.jsx(xd,{children:b.jsxs(yd,{children:[b.jsx(vd,{children:i("clear-all"===f?"confirmClearAllProgress":"confirmDeleteProgress")}),b.jsx(bd,{children:i("clear-all"===f?"clearAllProgressWarning":"deleteProgressWarning")}),b.jsxs(wd,{children:[b.jsx(ud,{type:"secondary",onClick:y,children:i("cancel")}),b.jsx(ud,{type:"danger",onClick:()=>{"clear-all"===f?(async()=>{try{await o(async()=>{s([])},"清空进度中...")}catch(e){console.error("清空进度失败:",e),Q.error(i("clearProgressFailed"),{position:"top-right",autoClose:2e3})}})():"string"==typeof f&&(async e=>{try{await o(async()=>{s(t=>t.filter(t=>t.id!==e))},"删除进度中...")}catch(t){console.error("删除进度失败:",t),Q.error(i("deleteProgressFailed"),{position:"top-right",autoClose:2e3})}})(f),y()},children:i("confirmDelete")})]})]})})]})},jd=Or.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Cd=Or.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Sd=Or.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`,zd=Or.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 5px solid ${e=>e.color||e.theme.primary};
`,$d=Or.div`
  font-size: 48px;
  font-weight: 700;
  color: ${e=>e.color||e.theme.primary};
`,Pd=Or.div`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,Td=Or.div`
  font-size: 14px;
  color: ${e=>e.positive?e.theme.success:e.theme.error};
`,Ad=Or.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Nd=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Id=Or.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Ed=Or.div`
  display: flex;
  gap: 10px;
`,Rd=Or.button`
  background-color: ${e=>e.active?e.theme.primary:e.theme.surface};
  color: ${e=>e.active?"white":e.theme.text};
  border: 2px solid ${e=>e.active?e.theme.primary:e.theme.border};
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`,Md=Or.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.textSecondary};
  font-size: 18px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
`,Od=Or.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Ld=Or.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Fd=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Dd=Or.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,Hd=Or.span`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,Bd=Or.div`
  width: 100%;
  height: 10px;
  background-color: ${e=>e.theme.background};
  border-radius: 5px;
  overflow: hidden;
`,_d=Or.div`
  height: 100%;
  background-color: ${e=>{switch(e.difficulty){case"easy":return"#4CAF50";case"medium":return"#FF9800";case"hard":return"#F44336";case"expert":return"#9C27B0";default:return e.theme.primary}}};
  border-radius: 5px;
  width: ${e=>e.percentage}%;
`,Wd=Or.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,qd=Or.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
`,Ud=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  border-left: 4px solid ${e=>e.mastered?e.theme.success:e.theme.primary};
`,Gd=Or.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Yd=Or.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,Jd=Or.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Vd=Or.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,Xd=()=>{const{theme:t}=ne(),{userId:r,userStats:n,techniquesProgress:o}=hn(),{executeWithLoading:i}=ae(),[a,s]=e.useState(null),[l,c]=e.useState("all");e.useEffect(()=>{d()},[l]);const d=async()=>{try{await i(async()=>{const e=await gn.getUserStatistics(r,l);s(e.data)},"加载统计数据中...")}catch(e){console.error("加载统计数据失败:",e),s(u())}},u=()=>({totalGames:42,completedGames:38,winRate:90.5,averageTime:1245,favoriteDifficulty:"medium",bestTime:420,currentStreak:5,longestStreak:12,totalPlayTime:145200,difficultyBreakdown:{easy:15,medium:20,hard:5,expert:2},recentPerformance:[{date:"2023-10-10",games:3,completed:3},{date:"2023-10-11",games:2,completed:2},{date:"2023-10-12",games:4,completed:3},{date:"2023-10-13",games:1,completed:1},{date:"2023-10-14",games:2,completed:2},{date:"2023-10-15",games:3,completed:3},{date:"2023-10-16",games:2,completed:2}]}),f=a||u(),p=o||{},h=e=>{if(!e)return"0:00";return`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`},m=()=>{if(f.totalGames)return f.totalGames;const e=f.difficultyBreakdown||{};return Object.values(e).reduce((e,t)=>e+t,0)},g=e=>{const t=p[e]||{practiced:0};return Math.min(100,t.practiced/10*20)};return b.jsxs(jd,{children:[b.jsx(Cd,{theme:t,children:"我的统计"}),b.jsxs(Sd,{children:[b.jsxs(zd,{color:t.primary,theme:t,children:[b.jsx($d,{color:t.primary,theme:t,children:m()}),b.jsx(Pd,{theme:t,children:"总游戏数"}),b.jsx(Td,{positive:!0,theme:t,children:"+5 本周"})]}),b.jsxs(zd,{color:t.success,theme:t,children:[b.jsx($d,{color:t.success,theme:t,children:f.completedGames}),b.jsx(Pd,{theme:t,children:"完成游戏"}),b.jsx(Td,{positive:!0,theme:t,children:"全部完成"})]}),b.jsxs(zd,{color:t.warning,theme:t,children:[b.jsxs($d,{color:t.warning,theme:t,children:[f.winRate,"%"]}),b.jsx(Pd,{theme:t,children:"胜率"}),b.jsx(Td,{positive:!0,theme:t,children:"+2% 本月"})]}),b.jsxs(zd,{color:t.info,theme:t,children:[b.jsx($d,{color:t.info,theme:t,children:h(f.averageTime)}),b.jsx(Pd,{theme:t,children:"平均时间"}),b.jsx(Td,{positive:!0,theme:t,children:"-30秒"})]}),b.jsxs(zd,{color:t.error,theme:t,children:[b.jsx($d,{color:t.error,theme:t,children:h(f.bestTime)}),b.jsx(Pd,{theme:t,children:"最佳时间"}),b.jsx(Td,{positive:!0,theme:t,children:"记录保持中"})]}),b.jsxs(zd,{color:t.primary,theme:t,children:[b.jsx($d,{color:t.primary,theme:t,children:f.currentStreak}),b.jsx(Pd,{theme:t,children:"当前连续天数"}),b.jsx(Td,{positive:f.currentStreak>1,theme:t,children:f.currentStreak>1?"🔥 加油！":"今天开始"})]})]}),b.jsxs(Ad,{theme:t,children:[b.jsxs(Nd,{children:[b.jsx(Id,{theme:t,children:"游戏进度"}),b.jsxs(Ed,{children:[b.jsx(Rd,{active:"week"===l,onClick:()=>c("week"),theme:t,children:"本周"}),b.jsx(Rd,{active:"month"===l,onClick:()=>c("month"),theme:t,children:"本月"}),b.jsx(Rd,{active:"all"===l,onClick:()=>c("all"),theme:t,children:"全部"})]})]}),b.jsx(Md,{theme:t,children:"📊 游戏进度图表"})]}),b.jsxs(Ad,{theme:t,children:[b.jsx(Nd,{children:b.jsx(Id,{theme:t,children:"难度分布"})}),b.jsx(Od,{children:Object.entries(f.difficultyBreakdown||{}).map(([e,r])=>{const n=(e=>{const t=f.difficultyBreakdown||{},r=m();return r>0?t[e]/r*100:0})(e);return b.jsxs(Ld,{children:[b.jsxs(Fd,{children:[b.jsx(Dd,{theme:t,children:{easy:"简单",medium:"中等",hard:"困难",expert:"专家"}[e]||e}),b.jsxs(Hd,{theme:t,children:[r," 局 (",n.toFixed(1),"%)"]})]}),b.jsx(Bd,{theme:t,children:b.jsx(_d,{difficulty:e,percentage:n})})]},e)})})]}),b.jsxs(Wd,{theme:t,children:[b.jsx(Id,{theme:t,children:"技巧掌握"}),b.jsx(qd,{children:[{id:"nakedSingles",name:"唯一候选数"},{id:"hiddenSingles",name:"隐性唯一"},{id:"nakedPairs",name:"数对"},{id:"hiddenPairs",name:"隐性数对"},{id:"pointingPairs",name:"指向对"},{id:"boxLineReduction",name:"宫行列排除"}].map(e=>{var r;const n=g(e.id),o=(i=e.id,g(i)>=80);var i;const a=(null==(r=p[e.id])?void 0:r.practiced)||0;return b.jsxs(Ud,{mastered:o,theme:t,children:[b.jsxs(Gd,{children:[b.jsx(Yd,{theme:t,children:e.name}),b.jsxs(Jd,{theme:t,children:["练习 ",a," 次 · 掌握度 ",n.toFixed(0),"%"]})]}),b.jsx(Vd,{mastered:o,theme:t,children:o?"已掌握":"学习中"})]},e.id)})})]})]})},Kd=Or.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`,Qd=Or.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,Zd=Or(o)`
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
`,eu=Or.h1`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  flex: 1;
`,tu=Or.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`,ru=Or.h2`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 20px 0;
  border-bottom: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  padding-bottom: 10px;
`,nu=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  
  &:last-child {
    border-bottom: none;
  }
`,ou=Or.div`
  font-size: 18px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-weight: 500;
`,iu=Or.div`
  display: flex;
  gap: 10px;
`,au=Or.button`
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
`,su=Or.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,lu=Or.button`
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
`,cu=Or.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,du=Or(o)`
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
`,uu=Or.span`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  font-style: italic;
`,fu=()=>{const{theme:e,themeMode:t,setLightTheme:r,setDarkTheme:n,setSystemTheme:o,setCustomThemeMode:a,customTheme:s}=ne(),{language:l,changeLanguage:c,availableLanguages:d,t:u}=Hr();return i(),b.jsxs(Kd,{children:[b.jsxs(Qd,{children:[b.jsx(Zd,{to:"/",theme:e,children:b.jsx(xc,{icon:Cc,size:"lg"})}),b.jsx(eu,{theme:e,children:u("settingsPageTitle")})]}),b.jsxs(tu,{theme:e,children:[b.jsx(ru,{theme:e,children:u("language")}),b.jsxs(nu,{children:[b.jsx(ou,{theme:e,children:u("language")}),b.jsx(iu,{children:d.map(t=>b.jsx(au,{active:l===t.code,onClick:()=>c(t.code),theme:e,children:t.name},t.code))})]})]}),b.jsxs(tu,{theme:e,children:[b.jsx(ru,{theme:e,children:u("theme")}),b.jsxs(su,{children:[b.jsxs(lu,{active:"light"===t,onClick:r,theme:e,children:[b.jsx(xc,{icon:vc,size:"lg"}),u("lightTheme")]}),b.jsxs(lu,{active:"dark"===t,onClick:n,theme:e,children:[b.jsx(xc,{icon:bc,size:"lg"}),u("darkTheme")]}),b.jsxs(lu,{active:"system"===t,onClick:o,theme:e,children:[b.jsx(xc,{icon:zc,size:"lg"}),u("systemTheme")]})]}),b.jsxs(nu,{style:{marginTop:"20px"},children:[b.jsx(ou,{theme:e,children:u("customTheme")}),b.jsxs(cu,{children:[b.jsxs(du,{to:"/settings/theme-editor",theme:e,children:[b.jsx(xc,{icon:wc,size:"lg"}),u("editTheme")]}),b.jsx(uu,{theme:e,children:"custom"===t&&`${u("customTheme")} - ${s.name}`})]})]})]})]})},pu=Or.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`,hu=Or.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,mu=Or(o)`
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
`,gu=Or.h1`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  flex: 1;
`,xu=Or.div`
  display: flex;
  gap: 10px;
`,yu=Or.button`
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
`,vu=Or.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,bu=Or.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,wu=Or.section`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 600px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`,ku=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,ju=Or.h2`
  color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.text)||"#333333"}};
  margin: 0;
  font-size: 24px;
`,Cu=Or.button`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.primary)||"#4a6cf7"}};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
`,Su=Or.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.gridLine)||"#e0e0e0"}};
  border-radius: 8px;
  padding: 2px;
  margin: 0 auto 30px;
  width: 300px;
  height: 300px;
`,zu=Or.div`
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
`,$u=Or.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`,Pu=Or.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Tu=Or.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  border: 2px solid ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.border)||"#e0e0e0"}};
`,Au=Or.span`
  color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.text)||"#333333"}};
  font-size: 14px;
`,Nu=Or.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,Iu=Or.label`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`,Eu=Or.input`
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
`,Ru=Or.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Mu=Or.input`
  width: 60px;
  height: 44px;
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  background: none;
`,Ou=Or.input`
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
`,Lu=Or.input`
  display: none;
`,Fu=()=>{const{theme:t,customTheme:r,updateCustomTheme:n,resetCustomTheme:o,exportTheme:a,importTheme:s}=ne(),{t:l}=Hr();i();const c=e.useRef(null),[d,u]=e.useState({...r});e.useEffect(()=>{u({...r})},[r]);const f=(e,t)=>{u(r=>({...r,[e]:t}))},p=[{key:"background",label:l("backgroundColor")},{key:"surface",label:l("surfaceColor")},{key:"text",label:l("textColor")},{key:"textSecondary",label:l("textSecondaryColor")},{key:"primary",label:l("primaryColor")},{key:"secondary",label:l("secondaryColor")},{key:"success",label:l("successColor")},{key:"warning",label:l("warningColor")},{key:"error",label:l("errorColor")},{key:"border",label:l("borderColor")},{key:"gridLine",label:l("gridLineColor")},{key:"gridLineThick",label:l("gridLineThickColor")},{key:"highlight",label:l("highlightColor")}];return b.jsxs(pu,{children:[b.jsxs(hu,{children:[b.jsx(mu,{to:"/settings",theme:t,children:b.jsx(xc,{icon:Cc,size:"lg"})}),b.jsx(gu,{theme:t,children:l("themeEditor")}),b.jsxs(xu,{children:[b.jsxs(yu,{type:"secondary",onClick:()=>{o(),Q.info("主题已重置",{position:"top-right",autoClose:2e3})},theme:t,children:[b.jsx(xc,{icon:Sc,size:"lg"}),l("reset")]}),b.jsxs(yu,{type:"primary",onClick:()=>{n(d),Q.success("主题已保存",{position:"top-right",autoClose:2e3})},theme:t,children:[b.jsx(xc,{icon:yc,size:"lg"}),l("saveChanges")]})]})]}),b.jsxs(vu,{children:[b.jsxs(bu,{theme:t,children:[b.jsx(Ou,{type:"text",value:d.name||"",onChange:e=>{u(t=>({...t,name:e.target.value}))},placeholder:l("customTheme"),theme:t}),p.map(e=>b.jsxs(Nu,{children:[b.jsx(Iu,{theme:t,children:e.label}),b.jsxs(Ru,{children:[b.jsx(Eu,{type:"text",value:d[e.key]||"",onChange:t=>f(e.key,t.target.value),placeholder:"#000000",theme:t}),b.jsx(Mu,{type:"color",value:d[e.key]||"#000000",onChange:t=>f(e.key,t.target.value)})]})]},e.key)),b.jsxs(xu,{style:{marginTop:"30px"},children:[b.jsxs(yu,{type:"secondary",onClick:()=>{var e;return null==(e=c.current)?void 0:e.click()},theme:t,children:[b.jsx(xc,{icon:jc,size:"lg"}),l("importTheme")]}),b.jsx(Lu,{ref:c,type:"file",accept:".json",onChange:async e=>{const t=e.target.files[0];if(t)try{await s(t),Q.success("主题导入成功",{position:"top-right",autoClose:2e3}),e.target.value=""}catch(r){Q.error("主题导入失败: "+r.message,{position:"top-right",autoClose:3e3})}}}),b.jsxs(yu,{type:"secondary",onClick:()=>{a(d),Q.info("主题已导出",{position:"top-right",autoClose:2e3})},theme:t,children:[b.jsx(xc,{icon:kc,size:"lg"}),l("exportTheme")]})]})]}),b.jsxs(wu,{previewTheme:d,children:[b.jsxs(ku,{previewTheme:d,children:[b.jsx(ju,{previewTheme:d,children:l("preview")}),b.jsx(Cu,{previewTheme:d,children:l("preview")})]}),b.jsx(Su,{previewTheme:d,children:(()=>{const e=[];for(let t=0;t<9;t++)for(let r=0;r<9;r++){const n=4===t&&4===r||0===t&&0===r||8===t&&8===r;e.push(b.jsx(zu,{row:t,col:r,isHighlighted:n,previewTheme:d,children:Math.floor(9*Math.random())+1},`${t}-${r}`))}return e})()}),b.jsxs($u,{children:[b.jsxs(Pu,{previewTheme:d,children:[b.jsx(Tu,{color:d.primary,previewTheme:d}),b.jsx(Au,{previewTheme:d,children:l("primaryColor")})]}),b.jsxs(Pu,{previewTheme:d,children:[b.jsx(Tu,{color:d.success,previewTheme:d}),b.jsx(Au,{previewTheme:d,children:l("successColor")})]}),b.jsxs(Pu,{previewTheme:d,children:[b.jsx(Tu,{color:d.warning,previewTheme:d}),b.jsx(Au,{previewTheme:d,children:l("warningColor")})]}),b.jsxs(Pu,{previewTheme:d,children:[b.jsx(Tu,{color:d.error,previewTheme:d}),b.jsx(Au,{previewTheme:d,children:l("errorColor")})]})]})]})]})]})};w.createRoot(document.getElementById("root")).render(b.jsxs(n.StrictMode,{children:[b.jsx(re,{children:b.jsx(Dr,{children:b.jsx(ie,{children:b.jsx(pn,{children:b.jsx(Dn,{children:b.jsx(a,{children:b.jsx(un,{children:b.jsxs(s,{children:[b.jsx(l,{path:"/",element:b.jsx($c,{})}),b.jsx(l,{path:"/home",element:b.jsx(co,{})}),b.jsx(l,{path:"/game",element:b.jsx($c,{})}),b.jsx(l,{path:"/techniques",element:b.jsx(Jc,{})}),b.jsx(l,{path:"/progress",element:b.jsx(kd,{})}),b.jsx(l,{path:"/stats",element:b.jsx(Xd,{})}),b.jsx(l,{path:"/settings",element:b.jsx(fu,{})}),b.jsx(l,{path:"/settings/theme-editor",element:b.jsx(Fu,{})})]})})})})})})})}),b.jsx(_,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]}));
