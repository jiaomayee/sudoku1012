import{r as e,a as t,R as r,u as n,L as o,b as a,H as i,d as s,e as l}from"./react-vendor-a24cebf1.js";import{l as c}from"./utils-82b46892.js";import{a as d}from"./axios-8e1cd5bd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var u={exports:{}},f={},p=e,h=Symbol.for("react.element"),m=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,x=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function y(e,t,r){var n,o={},a=null,i=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(i=t.ref),t)g.call(t,n)&&!v.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:h,type:e,key:a,ref:i,props:o,_owner:x.current}}f.Fragment=m,f.jsx=y,f.jsxs=y,u.exports=f;var b=u.exports,w={},j=t;function k(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=k(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function z(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=k(e))&&(n&&(n+=" "),n+=t);return n}w.createRoot=j.createRoot,w.hydrateRoot=j.hydrateRoot;const S=e=>"number"==typeof e&&!isNaN(e),C=e=>"string"==typeof e,$=e=>"function"==typeof e,A=e=>C(e)||$(e)?e:null,P=t=>e.isValidElement(t)||C(t)||$(t)||S(t);function E(t){let{enter:n,exit:o,appendPosition:a=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(t){let{children:l,position:c,preventExitTransition:d,done:u,nodeRef:f,isIn:p}=t;const h=a?`${n}--${c}`:n,m=a?`${o}--${c}`:o,g=e.useRef(0);return e.useLayoutEffect(()=>{const e=f.current,t=h.split(" "),r=n=>{n.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===g.current&&"animationcancel"!==n.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)},[]),e.useEffect(()=>{const e=f.current,t=()=>{e.removeEventListener("animationend",t),i?function(e,t,r){void 0===r&&(r=300);const{scrollHeight:n,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=n+"px",o.transition=`all ${r}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,r)})})}(e,u,s):u()};p||(d?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))},[p]),r.createElement(r.Fragment,null,l)}}function N(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const I={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const r=this.list.get(e).filter(e=>e!==t);return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const r=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(r)})}},T=e=>{let{theme:t,type:n,...o}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...o})},O={info:function(e){return r.createElement(T,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(T,{...e},r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(T,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(T,{...e},r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function D(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function F(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return r.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(e){let{delay:t,isRunning:n,closeToast:o,type:a="default",hide:i,className:s,style:l,controlledProgress:c,progress:d,rtl:u,isIn:f,theme:p}=e;const h=i||c&&0===d,m={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:h?0:1};c&&(m.transform=`scaleX(${d})`);const g=z("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":u}),x=$(s)?s({rtl:u,type:a,defaultClassName:g}):z(g,s);return r.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:x,style:m,[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]:c&&d<1?null:()=>{f&&o()}})}const R=t=>{const{isRunning:n,preventExitTransition:o,toastRef:a,eventHandlers:i}=function(t){const[r,n]=e.useState(!1),[o,a]=e.useState(!1),i=e.useRef(null),s=e.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=e.useRef(t),{autoClose:c,pauseOnHover:d,closeToast:u,onClick:f,closeOnClick:p}=t;function h(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",y),document.addEventListener("touchmove",v),document.addEventListener("touchend",y);const r=i.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=r.getBoundingClientRect(),r.style.transition="",s.x=M(e.nativeEvent),s.y=D(e.nativeEvent),"x"===t.draggableDirection?(s.start=s.x,s.removalDistance=r.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=r.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function m(e){if(s.boundingRect){const{top:r,bottom:n,left:o,right:a}=s.boundingRect;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&s.x>=o&&s.x<=a&&s.y>=r&&s.y<=n?x():g()}}function g(){n(!0)}function x(){n(!1)}function v(e){const n=i.current;s.canDrag&&n&&(s.didMove=!0,r&&x(),s.x=M(e),s.y=D(e),s.delta="x"===t.draggableDirection?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),n.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,n.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function y(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",y),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",y);const e=i.current;if(s.canDrag&&s.didMove&&e){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return a(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform=`translate${t.draggableDirection}(0)`,e.style.opacity="1"}}e.useEffect(()=>{l.current=t}),e.useEffect(()=>(i.current&&i.current.addEventListener("d",g,{once:!0}),$(t.onOpen)&&t.onOpen(e.isValidElement(t.children)&&t.children.props),()=>{const t=l.current;$(t.onClose)&&t.onClose(e.isValidElement(t.children)&&t.children.props)}),[]),e.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",g),window.addEventListener("blur",x)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",g),window.removeEventListener("blur",x))}),[t.pauseOnFocusLoss]);const b={onMouseDown:h,onTouchStart:h,onMouseUp:m,onTouchEnd:m};return c&&d&&(b.onMouseEnter=x,b.onMouseLeave=g),p&&(b.onClick=e=>{f&&f(e),s.canCloseOnClick&&u()}),{playToast:g,pauseToast:x,isRunning:r,preventExitTransition:o,toastRef:i,eventHandlers:b}}(t),{closeButton:s,children:l,autoClose:c,onClick:d,type:u,hideProgressBar:f,closeToast:p,transition:h,position:m,className:g,style:x,bodyClassName:v,bodyStyle:y,progressClassName:b,progressStyle:w,updateId:j,role:k,progress:S,rtl:C,toastId:A,deleteToast:P,isIn:E,isLoading:N,iconOut:I,closeOnClick:T,theme:O}=t,R=z("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":T}),_=$(g)?g({rtl:C,position:m,type:u,defaultClassName:R}):z(R,g),B=!!S||!c,H={closeToast:p,type:u,theme:O};let W=null;return!1===s||(W=$(s)?s(H):e.isValidElement(s)?e.cloneElement(s,H):F(H)),r.createElement(h,{isIn:E,done:P,position:m,preventExitTransition:o,nodeRef:a},r.createElement("div",{id:A,onClick:d,className:_,...i,style:x,ref:a},r.createElement("div",{...E&&{role:k},className:$(v)?v({type:u}):z("Toastify__toast-body",v),style:y},null!=I&&r.createElement("div",{className:z("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},I),r.createElement("div",null,l)),W,r.createElement(L,{...j&&!B?{key:`pb-${j}`}:{},rtl:C,theme:O,delay:c,isRunning:n,isIn:E,closeToast:p,hide:f,type:u,style:w,className:b,controlledProgress:B,progress:S||0})))},_=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},B=E(_("bounce",!0));E(_("slide",!0)),E(_("zoom")),E(_("flip"));const H=e.forwardRef((t,n)=>{const{getToastToRender:o,containerRef:a,isToastActive:i}=function(t){const[,r]=e.useReducer(e=>e+1,0),[n,o]=e.useState([]),a=e.useRef(null),i=e.useRef(new Map).current,s=e=>-1!==n.indexOf(e),l=e.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:e=>i.get(e)}).current;function c(e){let{containerId:t}=e;const{limit:r}=l.props;!r||t&&l.containerId!==t||(l.count-=l.queue.length,l.queue=[])}function d(e){o(t=>null==e?[]:t.filter(t=>t!==e))}function u(){const{toastContent:e,toastProps:t,staleId:r}=l.queue.shift();p(e,t,r)}function f(t,n){let{delay:o,staleId:s,...c}=n;if(!P(t)||(f=c,!a.current||l.props.enableMultiContainer&&f.containerId!==l.props.containerId||i.has(f.toastId)&&null==f.updateId))return;var f;const{toastId:h,updateId:m,data:g}=c,{props:x}=l,v=()=>d(h),y=null==m;y&&l.count++;const b={...x,style:x.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(c).filter(e=>{let[t,r]=e;return null!=r})),toastId:h,updateId:m,data:g,closeToast:v,isIn:!1,className:A(c.className||x.toastClassName),bodyClassName:A(c.bodyClassName||x.bodyClassName),progressClassName:A(c.progressClassName||x.progressClassName),autoClose:!c.isLoading&&(w=c.autoClose,j=x.autoClose,!1===w||S(w)&&w>0?w:j),deleteToast(){const e=N(i.get(h),"removed");i.delete(h),I.emit(4,e);const t=l.queue.length;if(l.count=null==h?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),t>0){const e=null==h?l.props.limit:1;if(1===t||1===e)l.displayedToast++,u();else{const r=e>t?t:e;l.displayedToast=r;for(let e=0;e<r;e++)u()}}else r()}};var w,j;b.iconOut=function(t){let{theme:r,type:n,isLoading:o,icon:a}=t,i=null;const s={theme:r,type:n};return!1===a||($(a)?i=a(s):e.isValidElement(a)?i=e.cloneElement(a,s):C(a)||S(a)?i=a:o?i=O.spinner():n in O&&(i=O[n](s))),i}(b),$(c.onOpen)&&(b.onOpen=c.onOpen),$(c.onClose)&&(b.onClose=c.onClose),b.closeButton=x.closeButton,!1===c.closeButton||P(c.closeButton)?b.closeButton=c.closeButton:!0===c.closeButton&&(b.closeButton=!P(x.closeButton)||x.closeButton);let k=t;e.isValidElement(t)&&!C(t.type)?k=e.cloneElement(t,{closeToast:v,toastProps:b,data:g}):$(t)&&(k=t({closeToast:v,toastProps:b,data:g})),x.limit&&x.limit>0&&l.count>x.limit&&y?l.queue.push({toastContent:k,toastProps:b,staleId:s}):S(o)?setTimeout(()=>{p(k,b,s)},o):p(k,b,s)}function p(e,t,r){const{toastId:n}=t;r&&i.delete(r);const a={content:e,props:t};i.set(n,a),o(e=>[...e,n].filter(e=>e!==r)),I.emit(4,N(a,null==a.props.updateId?"added":"updated"))}return e.useEffect(()=>(l.containerId=t.containerId,I.cancelEmit(3).on(0,f).on(1,e=>a.current&&d(e)).on(5,c).emit(2,l),()=>{i.clear(),I.emit(3,l)}),[]),e.useEffect(()=>{l.props=t,l.isToastActive=s,l.displayedToast=n.length}),{getToastToRender:function(e){const r=new Map,n=Array.from(i.values());return t.newestOnTop&&n.reverse(),n.forEach(e=>{const{position:t}=e.props;r.has(t)||r.set(t,[]),r.get(t).push(e)}),Array.from(r,t=>e(t[0],t[1]))},containerRef:a,isToastActive:s}}(t),{className:s,style:l,rtl:c,containerId:d}=t;function u(e){const t=z("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":c});return $(s)?s({position:e,rtl:c,defaultClassName:t}):z(t,A(s))}return e.useEffect(()=>{n&&(n.current=a.current)},[]),r.createElement("div",{ref:a,className:"Toastify",id:d},o((e,t)=>{const n=t.length?{...l}:{...l,pointerEvents:"none"};return r.createElement("div",{className:u(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:o,props:a}=e;return r.createElement(R,{...a,isIn:i(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:`toast-${a.key}`},o)}))}))});H.displayName="ToastContainer",H.defaultProps={position:"top-right",transition:B,autoClose:5e3,closeButton:F,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let W,U=new Map,Y=[],q=1;function G(){return""+q++}function V(e){return e&&(C(e.toastId)||S(e.toastId))?e.toastId:G()}function J(e,t){return U.size>0?I.emit(0,e,t):Y.push({content:e,options:t}),t.toastId}function X(e,t){return{...t,type:t&&t.type||e,toastId:V(t)}}function K(e){return(t,r)=>J(t,X(e,r))}function Q(e,t){return J(e,X("default",t))}Q.loading=(e,t)=>J(e,X("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Q.promise=function(e,t,r){let n,{pending:o,error:a,success:i}=t;o&&(n=C(o)?Q.loading(o,r):Q.loading(o.render,{...r,...o}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,o)=>{if(null==t)return void Q.dismiss(n);const a={type:e,...s,...r,data:o},i=C(t)?{render:t}:t;return n?Q.update(n,{...a,...i}):Q(i.render,{...a,...i}),o},c=$(e)?e():e;return c.then(e=>l("success",i,e)).catch(e=>l("error",a,e)),c},Q.success=K("success"),Q.info=K("info"),Q.error=K("error"),Q.warning=K("warning"),Q.warn=Q.warning,Q.dark=(e,t)=>J(e,X("default",{theme:"dark",...t})),Q.dismiss=e=>{U.size>0?I.emit(1,e):Y=Y.filter(t=>null!=e&&t.options.toastId!==e)},Q.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},Q.isActive=e=>{let t=!1;return U.forEach(r=>{r.isToastActive&&r.isToastActive(e)&&(t=!0)}),t},Q.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{const r=function(e,t){let{containerId:r}=t;const n=U.get(r||W);return n&&n.getToast(e)}(e,t);if(r){const{props:n,content:o}=r,a={delay:100,...n,...t,toastId:t.toastId||e,updateId:G()};a.toastId!==e&&(a.staleId=e);const i=a.render||o;delete a.render,J(i,a)}},0)},Q.done=e=>{Q.update(e,{progress:1})},Q.onChange=e=>(I.on(4,e),()=>{I.off(4,e)}),Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,e=>{W=e.containerId||e,U.set(W,e),Y.forEach(e=>{I.emit(0,e.content,e.options)}),Y=[]}).on(3,e=>{U.delete(e.containerId||e),0===U.size&&I.off(0).off(1).off(5)});const Z=e.createContext(),ee={light:{background:"#f5f5f5",surface:"#ffffff",text:"#333333",textSecondary:"#666666",primary:"#4a6cf7",secondary:"#f5a623",success:"#4cd964",warning:"#ffcc00",error:"#ff3b30",disabled:"#cccccc",border:"#e0e0e0",gridLine:"#e0e0e0",gridLineThick:"#cccccc",highlight:"#e6f0ff",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}},dark:{background:"#121212",surface:"#1e1e1e",text:"#f5f5f5",textSecondary:"#b0b0b0",primary:"#6482f7",secondary:"#ffb74d",success:"#66df80",warning:"#ffe066",error:"#ff5757",disabled:"#666666",border:"#333333",gridLine:"#333333",gridLineThick:"#444444",highlight:"#1a237e",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}}},te=({children:t})=>{const[r,n]=e.useState(localStorage.getItem("themeMode")||"light"),[o,a]=e.useState(ee[r]);e.useEffect(()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{e.matches&&"system"===r?a(ee.dark):e.matches||"system"!==r||a(ee.light)};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[r]);const i={theme:o,themeMode:r,toggleTheme:()=>{const e="light"===r?"dark":"light";n(e),a(ee[e]),localStorage.setItem("themeMode",e)},setLightTheme:()=>{n("light"),a(ee.light),localStorage.setItem("themeMode","light")},setDarkTheme:()=>{n("dark"),a(ee.dark),localStorage.setItem("themeMode","dark")}};return b.jsx(Z.Provider,{value:i,children:t})},re=()=>{const t=e.useContext(Z);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},ne=e.createContext(),oe=({children:t})=>{const[r,n]=e.useState(!1),[o,a]=e.useState("加载中..."),[i,s]=e.useState(0),l=(e="加载中...")=>{s(e=>e+1),a(e),n(!0)},c=()=>{s(e=>{const t=Math.max(0,e-1);return 0===t&&n(!1),t})},d={isLoading:r,loadingMessage:o,loadingCount:i,startLoading:l,stopLoading:c,resetLoading:()=>{s(0),n(!1),a("加载中...")},executeWithLoading:async(e,t="加载中...")=>{try{l(t);return await e()}catch(r){throw r}finally{c()}}};return b.jsx(ne.Provider,{value:d,children:t})},ae=()=>{const t=e.useContext(ne);if(!t)throw new Error("useLoading must be used within a LoadingProvider");return t};var ie=function(){return ie=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ie.apply(this,arguments)};function se(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var le="-ms-",ce="-moz-",de="-webkit-",ue="comm",fe="rule",pe="decl",he="@keyframes",me=Math.abs,ge=String.fromCharCode,xe=Object.assign;function ve(e){return e.trim()}function ye(e,t){return(e=t.exec(e))?e[0]:e}function be(e,t,r){return e.replace(t,r)}function we(e,t,r){return e.indexOf(t,r)}function je(e,t){return 0|e.charCodeAt(t)}function ke(e,t,r){return e.slice(t,r)}function ze(e){return e.length}function Se(e){return e.length}function Ce(e,t){return t.push(e),e}function $e(e,t){return e.filter(function(e){return!ye(e,t)})}var Ae=1,Pe=1,Ee=0,Ne=0,Ie=0,Te="";function Oe(e,t,r,n,o,a,i,s){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:Ae,column:Pe,length:i,return:"",siblings:s}}function Me(e,t){return xe(Oe("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function De(e){for(;e.root;)e=Me(e.root,{children:[e]});Ce(e,e.siblings)}function Fe(){return Ie=Ne>0?je(Te,--Ne):0,Pe--,10===Ie&&(Pe=1,Ae--),Ie}function Le(){return Ie=Ne<Ee?je(Te,Ne++):0,Pe++,10===Ie&&(Pe=1,Ae++),Ie}function Re(){return je(Te,Ne)}function _e(){return Ne}function Be(e,t){return ke(Te,e,t)}function He(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function We(e){return ve(Be(Ne-1,qe(91===e?e+2:40===e?e+1:e)))}function Ue(e){for(;(Ie=Re())&&Ie<33;)Le();return He(e)>2||He(Ie)>3?"":" "}function Ye(e,t){for(;--t&&Le()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Be(e,_e()+(t<6&&32==Re()&&32==Le()))}function qe(e){for(;Le();)switch(Ie){case e:return Ne;case 34:case 39:34!==e&&39!==e&&qe(Ie);break;case 40:41===e&&qe(e);break;case 92:Le()}return Ne}function Ge(e,t){for(;Le()&&e+Ie!==57&&(e+Ie!==84||47!==Re()););return"/*"+Be(t,Ne-1)+"*"+ge(47===e?e:Le())}function Ve(e){for(;!He(Re());)Le();return Be(e,Ne)}function Je(e){return function(e){return Te="",e}(Xe("",null,null,null,[""],e=function(e){return Ae=Pe=1,Ee=ze(Te=e),Ne=0,[]}(e),0,[0],e))}function Xe(e,t,r,n,o,a,i,s,l){for(var c=0,d=0,u=i,f=0,p=0,h=0,m=1,g=1,x=1,v=0,y="",b=o,w=a,j=n,k=y;g;)switch(h=v,v=Le()){case 40:if(108!=h&&58==je(k,u-1)){-1!=we(k+=be(We(v),"&","&\f"),"&\f",me(c?s[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:k+=We(v);break;case 9:case 10:case 13:case 32:k+=Ue(h);break;case 92:k+=Ye(_e()-1,7);continue;case 47:switch(Re()){case 42:case 47:Ce(Qe(Ge(Le(),_e()),t,r,l),l);break;default:k+="/"}break;case 123*m:s[c++]=ze(k)*x;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+d:-1==x&&(k=be(k,/\f/g,"")),p>0&&ze(k)-u&&Ce(p>32?Ze(k+";",n,r,u-1,l):Ze(be(k," ","")+";",n,r,u-2,l),l);break;case 59:k+=";";default:if(Ce(j=Ke(k,t,r,c,d,o,s,y,b=[],w=[],u,a),a),123===v)if(0===d)Xe(k,t,j,j,b,a,u,s,w);else switch(99===f&&110===je(k,3)?100:f){case 100:case 108:case 109:case 115:Xe(e,j,j,n&&Ce(Ke(e,j,j,0,0,o,s,y,o,b=[],u,w),w),o,w,u,s,n?b:w);break;default:Xe(k,j,j,j,[""],w,0,s,w)}}c=d=p=0,m=x=1,y=k="",u=i;break;case 58:u=1+ze(k),p=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==Fe())continue;switch(k+=ge(v),v*m){case 38:x=d>0?1:(k+="\f",-1);break;case 44:s[c++]=(ze(k)-1)*x,x=1;break;case 64:45===Re()&&(k+=We(Le())),f=Re(),d=u=ze(y=k+=Ve(_e())),v++;break;case 45:45===h&&2==ze(k)&&(m=0)}}return a}function Ke(e,t,r,n,o,a,i,s,l,c,d,u){for(var f=o-1,p=0===o?a:[""],h=Se(p),m=0,g=0,x=0;m<n;++m)for(var v=0,y=ke(e,f+1,f=me(g=i[m])),b=e;v<h;++v)(b=ve(g>0?p[v]+" "+y:be(y,/&\f/g,p[v])))&&(l[x++]=b);return Oe(e,t,r,0===o?fe:s,l,c,d,u)}function Qe(e,t,r,n){return Oe(e,t,r,ue,ge(Ie),ke(e,2,-2),0,n)}function Ze(e,t,r,n,o){return Oe(e,t,r,pe,ke(e,0,n),ke(e,n+1,-1),n,o)}function et(e,t,r){switch(function(e,t){return 45^je(e,0)?(((t<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 4789:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+ce+e+le+e+e;case 5936:switch(je(e,t+11)){case 114:return de+e+le+be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+le+be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+le+be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return de+e+le+e+e;case 6165:return de+e+le+"flex-"+e+e;case 5187:return de+e+be(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+le+"flex-$1$2")+e;case 5443:return de+e+le+"flex-item-"+be(e,/flex-|-self/g,"")+(ye(e,/flex-|baseline/)?"":le+"grid-row-"+be(e,/flex-|-self/g,""))+e;case 4675:return de+e+le+"flex-line-pack"+be(e,/align-content|flex-|-self/g,"")+e;case 5548:return de+e+le+be(e,"shrink","negative")+e;case 5292:return de+e+le+be(e,"basis","preferred-size")+e;case 6060:return de+"box-"+be(e,"-grow","")+de+e+le+be(e,"grow","positive")+e;case 4554:return de+be(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return be(be(be(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return be(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return be(be(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4200:if(!ye(e,/flex-|baseline/))return le+"grid-column-align"+ke(e,t)+e;break;case 2592:case 3360:return le+be(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,ye(e.props,/grid-\w+-end/)})?~we(e+(r=r[t].value),"span",0)?e:le+be(e,"-start","")+e+le+"grid-row-span:"+(~we(r,"span",0)?ye(r,/\d+/):+ye(r,/\d+/)-+ye(e,/\d+/))+";":le+be(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return ye(e.props,/grid-\w+-start/)})?e:le+be(be(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return be(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ze(e)-1-t>6)switch(je(e,t+1)){case 109:if(45!==je(e,t+4))break;case 102:return be(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+ce+(108==je(e,t+3)?"$3":"$2-$3"))+e;case 115:return~we(e,"stretch",0)?et(be(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return be(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,n,o,a,i,s){return le+r+":"+n+s+(o?le+r+"-span:"+(a?i:+i-+n)+s:"")+e});case 4949:if(121===je(e,t+6))return be(e,":",":"+de)+e;break;case 6444:switch(je(e,45===je(e,14)?18:11)){case 120:return be(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+de+(45===je(e,14)?"inline-":"")+"box$3$1"+de+"$2$3$1"+le+"$2box$3")+e;case 100:return be(e,":",":"+le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return be(e,"scroll-","scroll-snap-")+e}return e}function tt(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function rt(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case pe:return e.return=e.return||e.value;case ue:return"";case he:return e.return=e.value+"{"+tt(e.children,n)+"}";case fe:if(!ze(e.value=e.props.join(",")))return""}return ze(r=tt(e.children,n))?e.return=e.value+"{"+r+"}":""}function nt(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case pe:return void(e.return=et(e.value,e.length,r));case he:return tt([Me(e,{value:be(e.value,"@","@"+de)})],n);case fe:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(ye(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":De(Me(e,{props:[be(t,/:(read-\w+)/,":-moz-$1")]})),De(Me(e,{props:[t]})),xe(e,{props:$e(r,n)});break;case"::placeholder":De(Me(e,{props:[be(t,/:(plac\w+)/,":"+de+"input-$1")]})),De(Me(e,{props:[be(t,/:(plac\w+)/,":-moz-$1")]})),De(Me(e,{props:[be(t,/:(plac\w+)/,le+"input-$1")]})),De(Me(e,{props:[t]})),xe(e,{props:$e(r,n)})}return""})}}var ot={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},at="undefined"!=typeof process&&void 0!==process.env&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",it="active",st="data-styled-version",lt="6.1.19",ct="/*!sc*/\n",dt="undefined"!=typeof window&&"undefined"!=typeof document,ut=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),ft=Object.freeze([]),pt=Object.freeze({});var ht=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gt=/(^-|-$)/g;function xt(e){return e.replace(mt,"-").replace(gt,"")}var vt=/(a)(d)/gi,yt=function(e){return String.fromCharCode(e+(e>25?39:97))};function bt(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=yt(t%52)+r;return(yt(t%52)+r).replace(vt,"$1-$2")}var wt,jt=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},kt=function(e){return jt(5381,e)};function zt(e){return"string"==typeof e&&!0}var St="function"==typeof Symbol&&Symbol.for,Ct=St?Symbol.for("react.memo"):60115,$t=St?Symbol.for("react.forward_ref"):60112,At={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Pt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Et={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nt=((wt={})[$t]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wt[Ct]=Et,wt);function It(e){return("type"in(t=e)&&t.type.$$typeof)===Ct?Et:"$$typeof"in e?Nt[e.$$typeof]:At;var t}var Tt=Object.defineProperty,Ot=Object.getOwnPropertyNames,Mt=Object.getOwnPropertySymbols,Dt=Object.getOwnPropertyDescriptor,Ft=Object.getPrototypeOf,Lt=Object.prototype;function Rt(e,t,r){if("string"!=typeof t){if(Lt){var n=Ft(t);n&&n!==Lt&&Rt(e,n,r)}var o=Ot(t);Mt&&(o=o.concat(Mt(t)));for(var a=It(e),i=It(t),s=0;s<o.length;++s){var l=o[s];if(!(l in Pt||r&&r[l]||i&&l in i||a&&l in a)){var c=Dt(t,l);try{Tt(e,l,c)}catch(d){}}}}return e}function _t(e){return"function"==typeof e}function Bt(e){return"object"==typeof e&&"styledComponentId"in e}function Ht(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wt(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ut(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yt(e,t,r){if(void 0===r&&(r=!1),!r&&!Ut(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Yt(e[n],t[n]);else if(Ut(t))for(var n in t)e[n]=Yt(e[n],t[n]);return e}function qt(e,t){Object.defineProperty(e,"toString",{value:t})}function Gt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Vt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw Gt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=n;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,a=n;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(ct);return t},e}(),Jt=new Map,Xt=new Map,Kt=1,Qt=function(e){if(Jt.has(e))return Jt.get(e);for(;Xt.has(Kt);)Kt++;var t=Kt++;return Jt.set(e,t),Xt.set(t,e),t},Zt=function(e,t){Kt=t+1,Jt.set(e,t),Xt.set(t,e)},er="style[".concat(at,"][").concat(st,'="').concat(lt,'"]'),tr=new RegExp("^".concat(at,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rr=function(e,t,r){for(var n,o=r.split(","),a=0,i=o.length;a<i;a++)(n=o[a])&&e.registerName(t,n)},nr=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(ct),o=[],a=0,i=n.length;a<i;a++){var s=n[a].trim();if(s){var l=s.match(tr);if(l){var c=0|parseInt(l[1],10),d=l[2];0!==c&&(Zt(d,c),rr(e,d,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},or=function(e){for(var t=document.querySelectorAll(er),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(at)!==it&&(nr(e,o),o.parentNode&&o.parentNode.removeChild(o))}};var ar=function(e){var t,r,n=document.head,o=e||n,a=document.createElement("style"),i=(t=o,(r=Array.from(t.querySelectorAll("style[".concat(at,"]"))))[r.length-1]),s=void 0!==i?i.nextSibling:null;a.setAttribute(at,it),a.setAttribute(st,lt);var l="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return l&&a.setAttribute("nonce",l),o.insertBefore(a,s),a},ir=function(){function e(e){this.element=ar(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw Gt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(r){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),sr=function(){function e(e){this.element=ar(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),lr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),cr=dt,dr={isServer:!dt,useCSSOMInjection:!ut},ur=function(){function e(e,t,r){void 0===e&&(e=pt),void 0===t&&(t={});var n=this;this.options=ie(ie({},dr),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&dt&&cr&&(cr=!1,or(this)),qt(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o,a=(o=r,Xt.get(o));if(void 0===a)return"continue";var i=e.names.get(a),s=t.getGroup(r);if(void 0===i||!i.size||0===s.length)return"continue";var l="".concat(at,".g").concat(r,'[id="').concat(a,'"]'),c="";void 0!==i&&i.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),n+="".concat(s).concat(l,'{content:"').concat(c,'"}').concat(ct)},a=0;a<r;a++)o(a);return n}(n)})}return e.registerId=function(e){return Qt(e)},e.prototype.rehydrate=function(){!this.server&&dt&&or(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(ie(ie({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,r=e.target,n=e.isServer?new lr(r):t?new ir(r):new sr(r),new Vt(n)));var e,t,r,n},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Qt(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Qt(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Qt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),fr=/&/g,pr=/^\s*\/\/.*$/gm;function hr(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=hr(e.children,t)),e})}var mr=new ur,gr=function(e){var t,r,n,o=void 0===e?pt:e,a=o.options,i=void 0===a?pt:a,s=o.plugins,l=void 0===s?ft:s,c=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},d=l.slice();d.push(function(e){e.type===fe&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(fr,r).replace(n,c))}),i.prefix&&d.push(nt),d.push(rt);var u=function(e,o,a,s){void 0===o&&(o=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var l=e.replace(pr,""),c=Je(a||o?"".concat(a," ").concat(o," { ").concat(l," }"):l);i.namespace&&(c=hr(c,i.namespace));var u,f,p,h=[];return tt(c,(u=d.concat((p=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&p(e)})),f=Se(u),function(e,t,r,n){for(var o="",a=0;a<f;a++)o+=u[a](e,t,r,n)||"";return o})),h};return u.hash=l.length?l.reduce(function(e,t){return t.name||Gt(15),jt(e,t.name)},5381).toString():"",u}(),xr=r.createContext({shouldForwardProp:void 0,styleSheet:mr,stylis:gr});function vr(){return e.useContext(xr)}xr.Consumer,r.createContext(void 0);var yr=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=gr);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,qt(this,function(){throw Gt(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=gr),this.name+e.hash},e}(),br=function(e){return e>="A"&&e<="Z"};function wr(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;br(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var jr=function(e){return null==e||!1===e||""===e},kr=function(e){var t,r,n=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!jr(a)&&(Array.isArray(a)&&a.isCss||_t(a)?n.push("".concat(wr(o),":"),a,";"):Ut(a)?n.push.apply(n,se(se(["".concat(o," {")],kr(a),!1),["}"],!1)):n.push("".concat(wr(o),": ").concat((t=o,null==(r=a)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ot||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function zr(e,t,r,n){return jr(e)?[]:Bt(e)?[".".concat(e.styledComponentId)]:_t(e)?!_t(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:zr(e(t),t,r,n):e instanceof yr?r?(e.inject(r,n),[e.getName(n)]):[e]:Ut(e)?kr(e):Array.isArray(e)?Array.prototype.concat.apply(ft,e.map(function(e){return zr(e,t,r,n)})):[e.toString()];var o}var Sr=kt(lt),Cr=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(_t(r)&&!Bt(r))return!1}return!0}(e),this.componentId=t,this.baseHash=jt(Sr,t),this.baseStyle=r,ur.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Ht(n,this.staticRulesId);else{var o=Wt(zr(this.rules,e,t,r)),a=bt(jt(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=r(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}n=Ht(n,a),this.staticRulesId=a}else{for(var s=jt(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)l+=d;else if(d){var u=Wt(zr(d,e,t,r));s=jt(s,u+c),l+=u}}if(l){var f=bt(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(l,".".concat(f),void 0,this.componentId)),n=Ht(n,f)}}return n},e}(),$r=r.createContext(void 0);$r.Consumer;var Ar={};function Pr(t,n,o){var a,i=Bt(t),s=t,l=!zt(t),c=n.attrs,d=void 0===c?ft:c,u=n.componentId,f=void 0===u?function(e,t){var r="string"!=typeof e?"sc":xt(e);Ar[r]=(Ar[r]||0)+1;var n="".concat(r,"-").concat(function(e){return bt(kt(e)>>>0)}(lt+r+Ar[r]));return t?"".concat(t,"-").concat(n):n}(n.displayName,n.parentComponentId):u,p=n.displayName,h=void 0===p?zt(a=t)?"styled.".concat(a):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(a),")"):p,m=n.displayName&&n.componentId?"".concat(xt(n.displayName),"-").concat(n.componentId):n.componentId||f,g=i&&s.attrs?s.attrs.concat(d).filter(Boolean):d,x=n.shouldForwardProp;if(i&&s.shouldForwardProp){var v=s.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;x=function(e,t){return v(e,t)&&y(e,t)}}else x=v}var b=new Cr(o,m,i?s.componentStyle:void 0);function w(t,n){return function(t,n,o){var a=t.attrs,i=t.componentStyle,s=t.defaultProps,l=t.foldedComponentIds,c=t.styledComponentId,d=t.target,u=r.useContext($r),f=vr(),p=t.shouldForwardProp||f.shouldForwardProp,h=function(e,t,r){return void 0===r&&(r=pt),e.theme!==r.theme&&e.theme||t||r.theme}(n,u,s)||pt,m=function(e,t,r){for(var n,o=ie(ie({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var i=_t(n=e[a])?n(o):n;for(var s in i)o[s]="className"===s?Ht(o[s],i[s]):"style"===s?ie(ie({},o[s]),i[s]):i[s]}return t.className&&(o.className=Ht(o.className,t.className)),o}(a,n,h),g=m.as||d,x={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===h||("forwardedAs"===v?x.as=m.forwardedAs:p&&!p(v,g)||(x[v]=m[v]));var y,b,w,j=(y=i,b=m,w=vr(),y.generateAndInjectStyles(b,w.styleSheet,w.stylis)),k=Ht(l,c);return j&&(k+=" "+j),m.className&&(k+=" "+m.className),x[zt(g)&&!ht.has(g)?"class":"className"]=k,o&&(x.ref=o),e.createElement(g,x)}(j,t,n)}w.displayName=h;var j=r.forwardRef(w);return j.attrs=g,j.componentStyle=b,j.displayName=h,j.shouldForwardProp=x,j.foldedComponentIds=i?Ht(s.foldedComponentIds,s.styledComponentId):"",j.styledComponentId=m,j.target=i?s.target:t,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)Yt(e,o[n],!0);return e}({},s.defaultProps,e):e}}),qt(j,function(){return".".concat(j.styledComponentId)}),l&&Rt(j,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function Er(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Nr=function(e){return Object.assign(e,{isCss:!0})};function Ir(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(_t(e)||Ut(e))return Nr(zr(Er(ft,se([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?zr(n):Nr(zr(Er(n,t)))}function Tr(e,t,r){if(void 0===r&&(r=pt),!t)throw Gt(1,t);var n=function(n){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,r,Ir.apply(void 0,se([n],o,!1)))};return n.attrs=function(n){return Tr(e,t,ie(ie({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Tr(e,t,ie(ie({},r),n))},n}var Or=function(e){return Tr(Pr,e)},Mr=Or;ht.forEach(function(e){Mr[e]=Or(e)});const Dr=e.createContext(),Fr=({children:t})=>{const[r,n]=e.useState(null),[o,a]=e.useState(!1),[i,s]=e.useState({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),[l,d]=e.useState({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}});e.useEffect(()=>{u()},[]);const u=async()=>{try{let e=await c.getItem("userId");e||(e="user_"+Date.now()+"_"+Math.random().toString(36).substr(2,9),await c.setItem("userId",e),Q.success("欢迎使用数独学习应用！",{position:"top-right",autoClose:2e3})),n(e),a(!0);const t=await c.getItem(`stats_${e}`);t&&s(t);const r=await c.getItem(`techniques_${e}`);r&&d(r)}catch(e){console.error("初始化用户失败:",e),Q.error("初始化用户数据失败",{position:"top-right",autoClose:2e3})}},f=async(e,t)=>{try{const n={...l,[e]:{...l[e],...t}};d(n),r&&await c.setItem(`techniques_${r}`,n)}catch(n){console.error("更新技巧学习进度失败:",n)}},p={userId:r,isAuthenticated:o,userStats:i,techniquesProgress:l,updateUserStats:async e=>{try{const t={...i,...e};s(t),r&&await c.setItem(`stats_${r}`,t)}catch(t){console.error("更新用户统计失败:",t)}},updateTechniqueProgress:f,incrementTechniquePractice:async e=>{const t=l[e]||{mastered:0,practiced:0};await f(e,{practiced:t.practiced+1})},resetUserData:async()=>{try{r&&(await c.removeItem(`stats_${r}`),await c.removeItem(`techniques_${r}`),await c.removeItem(`progress_${r}`)),s({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),d({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}}),Q.success("用户数据已重置",{position:"top-right",autoClose:2e3})}catch(e){console.error("重置用户数据失败:",e),Q.error("重置用户数据失败",{position:"top-right",autoClose:2e3})}}};return b.jsx(Dr.Provider,{value:p,children:t})},Lr=()=>{const t=e.useContext(Dr);if(!t)throw new Error("useUser must be used within a UserContextProvider");return t},Rr=d.create({baseURL:"/",timeout:1e4,headers:{"Content-Type":"application/json"}});Rr.interceptors.request.use(e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),Rr.interceptors.response.use(e=>e.data,e=>{var t,r,n,o;const a=(null==(r=null==(t=e.response)?void 0:t.data)?void 0:r.message)||(null==(o=null==(n=e.response)?void 0:n.data)?void 0:o.error)||"请求失败，请重试";return Q.error(a,{position:"top-right",autoClose:2e3}),Promise.reject(e)});const _r={generatePuzzle:async e=>{try{return await Rr.post("/sudoku/puzzles/generate",{difficulty:e})}catch(t){throw console.error("生成数独谜题失败:",t),t}},getRandomPuzzleByDifficulty:async e=>{try{console.log(`Fetching puzzle with difficulty: ${e}`);const t=await Rr.get(`/sudoku/puzzles/random/${e}`);if(!t||!t.puzzle)return console.error("Invalid puzzle data received from server"),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e};const{puzzle:r,solution:n,difficulty:o}=t;console.log("完整响应数据:",JSON.stringify(t));let a=n;return a&&Array.isArray(a)&&9===a.length||(console.warn("Solution data is missing or invalid"),a=Array(9).fill().map(()=>Array(9).fill(0))),{puzzle:r,solution:a,difficulty:o||e}}catch(t){return console.error("Error fetching puzzle:",t),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e}}},getPuzzleById:async e=>{try{return await Rr.get(`/sudoku/puzzles/${e}`)}catch(t){throw console.error("获取谜题失败:",t),t}},solveSudoku:async e=>{try{return await Rr.post("/sudoku/solve",{board:e})}catch(t){throw console.error("求解数独失败:",t),t}},validateSudoku:async e=>{try{return await Rr.post("/sudoku/validate",{board:e})}catch(t){throw console.error("验证数独失败:",t),t}},getCandidates:async(e,t,r)=>{try{return await Rr.post("/sudoku/candidates",{board:e,row:t,col:r})}catch(n){throw console.error("获取候选数失败:",n),n}},identifyTechniques:async e=>{try{return await Rr.post("/sudoku/techniques",{board:e})}catch(t){throw console.error("识别技巧失败:",t),t}},getHint:async(e,t)=>{try{return await Rr.post("/sudoku/hint",{board:e,solution:t})}catch(r){throw console.error("获取提示失败:",r),r}},getPuzzleList:async(e={})=>{try{return await Rr.get("/sudoku/puzzles",{params:e})}catch(t){throw console.error("获取谜题列表失败:",t),t}},getPuzzleStats:async()=>{try{return await Rr.get("/sudoku/puzzles/stats")}catch(e){throw console.error("获取谜题统计失败:",e),e}},getUserProgress:async e=>{try{return await Rr.get(`/user/progress/${e}`)}catch(t){throw console.error("获取用户进度失败:",t),t}},saveUserProgress:async(e,t)=>{try{return await Rr.post(`/user/progress/${e}`,t)}catch(r){throw console.error("保存用户进度失败:",r),r}},getActiveProgress:async()=>{try{return await Rr.get("/user/progress/active")}catch(e){throw console.error("获取活跃进度失败:",e),e}},getCompletedPuzzles:async()=>{try{return await Rr.get("/user/progress/completed")}catch(e){throw console.error("获取已完成谜题失败:",e),e}},deleteUserProgress:async e=>{try{return await Rr.delete(`/user/progress/${e}`)}catch(t){throw console.error("删除用户进度失败:",t),t}},getUserTechniques:async()=>{try{return await Rr.get("/user/techniques")}catch(e){throw console.error("获取用户技巧学习情况失败:",e),e}},updateTechniqueLearning:async(e,t)=>{try{return await Rr.post(`/user/techniques/${e}`,t)}catch(r){throw console.error("更新技巧学习情况失败:",r),r}},incrementTechniquePractice:async e=>{try{return await Rr.post(`/user/techniques/${e}/practice`)}catch(t){throw console.error("增加技巧练习次数失败:",t),t}},getUserStats:async()=>{try{return await Rr.get("/user/stats")}catch(e){throw console.error("获取用户统计信息失败:",e),e}},healthCheck:async()=>{try{return(await d.get("/health")).data}catch(e){throw console.error("健康检查失败:",e),e}}};let Br=class{constructor(e,t){this.row=e,this.col=t,this.up=this,this.down=this,this.left=this,this.right=this,this.colHead=null}};class Hr extends Br{constructor(e){super(-1,e),this.size=0}}const Wr=()=>Array(9).fill().map(()=>Array(9).fill(0)),Ur=new class{constructor(){this.root=new Br(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[]}setupSudokuMatrix(e){this.colHeaders=[];for(let r=0;r<324;r++){const e=new Hr(r);this.colHeaders.push(e)}let t=this.root;for(let r=0;r<324;r++)t.right=this.colHeaders[r],this.colHeaders[r].left=t,t=this.colHeaders[r];t.right=this.root,this.root.left=t,this.rows=[];for(let r=0;r<9;r++)for(let t=0;t<9;t++)for(let n=1;n<=9;n++){if(0!==e[r][t]&&e[r][t]!==n)continue;const o=[9*r+t,81+9*r+(n-1),162+9*t+(n-1),243+9*(3*Math.floor(r/3)+Math.floor(t/3))+(n-1)],a=[];for(let e of o){const t=new Br(this.rows.length,e);t.colHead=this.colHeaders[e],a.push(t)}for(let e=0;e<a.length;e++)a[e].left=a[(e-1+a.length)%a.length],a[e].right=a[(e+1)%a.length];for(let e of a){const t=e.colHead;e.up=t.up,t.up.down=e,e.down=t,t.up=e,t.size++}this.rows.push([r,t,n])}}selectColumn(){let e=1/0,t=null;for(let r=this.root.right;r!==this.root;r=r.right)r.size<e&&(e=r.size,t=r);return t}coverColumn(e){e.left.right=e.right,e.right.left=e.left;for(let t=e.down;t!==e;t=t.down)for(let e=t.right;e!==t;e=e.right)e.up.down=e.down,e.down.up=e.up,e.colHead.size--}uncoverColumn(e){for(let t=e.up;t!==e;t=t.up)for(let e=t.left;e!==t;e=e.left)e.up.down=e,e.down.up=e,e.colHead.size++;e.left.right=e,e.right.left=e}search(e=2){const t=[],r=()=>{if(this.root.right===this.root)return t.push([...this.solution]),t.length<e;const n=this.selectColumn();this.coverColumn(n);for(let e=n.down;e!==n;e=e.down){this.solution.push(this.rows[e.row]);for(let t=e.right;t!==e;t=t.right)this.coverColumn(t.colHead);if(!r())return!1;this.solution.pop();for(let t=e.left;t!==e;t=t.left)this.uncoverColumn(t.colHead)}return this.uncoverColumn(n),!0};return r(),t}solveSudoku(e){this.root=new Br(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);const t=this.search(1);if(0===t.length)return null;const r=Array(9).fill().map(()=>Array(9).fill(0));for(let[n,o,a]of t[0])r[n][o]=a;return r}hasUniqueSolution(e){this.root=new Br(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);return 1===this.search(2).length}},Yr=(e,t,r,n)=>{for(let i=0;i<9;i++)if(i!==r&&e[t][i]===n)return!1;for(let i=0;i<9;i++)if(i!==t&&e[i][r]===n)return!1;const o=3*Math.floor(t/3),a=3*Math.floor(r/3);for(let i=o;i<o+3;i++)for(let o=a;o<a+3;o++)if(i!==t&&o!==r&&e[i][o]===n)return!1;return!0},qr=e=>{for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(0===e[t][r])return[t,r];return null},Gr=e=>{try{return Ur.hasUniqueSolution(e)}catch(t){return console.error("验证数独唯一性时出错:",t),Vr(e)}},Vr=e=>{const t=e.map(e=>[...e]);let r=0;const n=()=>{if(r>1)return;const e=qr(t);if(!e)return void r++;const[o,a]=e;for(let r=1;r<=9;r++)Yr(t,o,a,r)&&(t[o][a]=r,n(),t[o][a]=0)};return n(),1===r},Jr=()=>{const e=[1,2,3,4,5,6,7,8,9];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},Xr=async(e="medium")=>{console.log(`开始生成${e}难度的数独题目`);const t=(()=>{console.debug("开始生成完整的数独解");for(let t=1;t<=10;t++)try{const e=Wr();for(let t=0;t<9;t+=3){const r=Jr();let n=0;for(let o=0;o<3;o++)for(let a=0;a<3;a++)e[t+o][t+a]=r[n++]}const r=Ur.solveSudoku(e);if(r&&Kr(r))return console.debug(`成功生成完整数独解（尝试次数：${t}）`),r;const n=()=>{const t=qr(e);if(!t)return!0;const[r,o]=t,a=Jr();for(const i of a)if(Yr(e,r,o,i)){if(e[r][o]=i,n())return!0;e[r][o]=0}return!1};if(n()&&Kr(e))return console.debug(`使用回溯算法成功生成完整数独解（尝试次数：${t}）`),e}catch(e){console.error(`生成数独解时出错（尝试 ${t}/10）:`,e)}return console.error("超过最大尝试次数（10），无法生成有效的数独解"),null})();if(!t)return console.error("生成完整数独解失败"),null;const r=t.map(e=>[...e]);let n;switch(e){case"easy":n=40;break;case"medium":default:n=50;break;case"hard":n=55;break;case"expert":n=60}let o=0;const a=[];for(let i=0;i<9;i++)for(let e=0;e<9;e++)a.push([i,e]);for(let i=a.length-1;i>0;i--){const e=Math.floor(Math.random()*(i+1));[a[i],a[e]]=[a[e],a[i]]}for(const[i,s]of a){if(o>=n)break;const e=r[i][s];r[i][s]=0,Gr(r)?(o++,console.debug(`已移除单元格(${i},${s})，当前已移除${o}/${n}个`)):r[i][s]=e}return Gr(r)||console.warn(`警告：生成的${e}难度题目可能没有唯一解，尝试重新生成`),console.log(`成功生成${e}难度数独题目，保留了${81-o}个数字`),{puzzle:r,solution:t}},Kr=e=>{for(let t=0;t<9;t++){const r=new Set;for(let n=0;n<9;n++){const o=e[t][n];if(0!==o){if(r.has(o))return!1;r.add(o)}}}for(let t=0;t<9;t++){const r=new Set;for(let n=0;n<9;n++){const o=e[n][t];if(0!==o){if(r.has(o))return!1;r.add(o)}}}for(let t=0;t<3;t++)for(let r=0;r<3;r++){const n=new Set;for(let o=0;o<3;o++)for(let a=0;a<3;a++){const i=3*r+a,s=e[3*t+o][i];if(0!==s){if(n.has(s))return!1;n.add(s)}}}return!0};let Qr=null,Zr=null;const en=18e5,tn=async()=>{try{console.log("开始获取随机专家级题目");const e=await(async()=>{try{const e=Date.now();if(Qr&&Zr&&e-Zr<en)return console.log("使用缓存的专家级题目数据"),Qr;const t=await c.getItem("expert_puzzles_cache");if(t&&t.timestamp&&e-t.timestamp<en)return console.log("从localforage加载缓存的专家级题目"),Qr=t.data,Zr=t.timestamp,Qr;console.log("从JSON文件加载专家级题目");const r=await fetch("/expert_puzzles.json");if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const n=await r.json();if(!n.puzzles||!Array.isArray(n.puzzles))throw new Error("无效的专家级题目数据格式");return Qr=n.puzzles,Zr=e,await c.setItem("expert_puzzles_cache",{data:n.puzzles,timestamp:e}),console.log(`成功加载 ${n.puzzles.length} 个专家级题目`),n.puzzles}catch(e){return console.error("加载专家级题目失败:",e),[]}})();if(!e||0===e.length)return console.warn("没有可用的专家级题目"),null;const t=e[Math.floor(Math.random()*e.length)];if(!t||!t.puzzle||!t.solution){if(console.error("选中的谜题数据不完整:",t),e.length>1){console.log("尝试重新选择另一个谜题");const t=e.filter(e=>e&&e.puzzle&&e.solution);if(t.length>0){const e=Math.floor(Math.random()*t.length);return console.log(`重新选择有效专家级题目 #${t[e].id||"unknown"}`),t[e]}}return null}return console.log(`随机选择专家级题目 #${t.id||"unknown"}`),t}catch(e){return console.error("获取随机专家级题目失败:",e),null}},rn=e.createContext(),nn={EASY:"easy",MEDIUM:"medium",HARD:"hard",EXPERT:"expert"},on=({children:t})=>{const{userId:r,updateUserStats:n}=Lr(),[o,a]=e.useState(null),[i,s]=e.useState(null),[l,d]=e.useState(null),[u,f]=e.useState(null),[p,h]=e.useState(nn.MEDIUM),[m,g]=e.useState(!1),[x,v]=e.useState(!1),[y,w]=e.useState(0),[j,k]=e.useState(!1),[z,S]=e.useState(null),[C,$]=e.useState({}),[A,P]=e.useState([]),[E,N]=e.useState([]),[I,T]=e.useState([]),[O,M]=e.useState(-1),[D,F]=e.useState(0),[L,R]=e.useState(0),[_,B]=e.useState(new Set),[H,W]=e.useState(!1),[U,Y]=e.useState({});e.useEffect(()=>{(async()=>{console.log("SudokuContext: 初始化自动生成谜题");try{Y({}),T([]),M(-1),F(0),R(0),B(new Set),console.log("使用预设的数独题目");const e={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]};console.log("预设谜题数据:",e);const t=X(e);console.log("格式化后的数据:",t),a(t),console.log("设置 currentPuzzle 完成"),d(t.puzzle),console.log("设置 originalPuzzle 完成"),s(t.puzzle),console.log("设置 currentBoard 完成，currentBoard:",t.puzzle),f(t.solution),console.log("设置 solution 完成"),g(!0),console.log("设置 gameStarted 为 true"),v(!1),k(!0),F(0),R(0),B(new Set),console.log("谜题初始化完成")}catch(e){console.error("自动初始化谜题失败:",e),console.error("错误详情:",e.message,e.stack)}})()},[]),e.useEffect(()=>{if(o&&i&&m&&!x){const e=setTimeout(()=>{G()},3e4);return()=>clearTimeout(e)}},[i,m,x]),e.useEffect(()=>{let e;return j&&(e=setInterval(()=>{w(e=>e+1)},1e3)),()=>{e&&clearInterval(e)}},[j]);const q=e.useCallback(async()=>{try{if(!r)return null;const e=(await c.keys()).filter(e=>e.startsWith(`progress_${r}_`));if(0===e.length)return null;let t=null,n=0;for(const r of e){const e=await c.getItem(r);e.lastModified>n&&(n=e.lastModified,t=e)}return t&&(a({id:t.puzzleId,puzzle:t.puzzle}),s(t.currentBoard),f(t.solution),h(t.difficulty),w(t.timeElapsed),g(t.gameStarted),v(t.gameCompleted),F(t.errorCount||0),R(t.errorCount||0),B(new Set(t.incorrectCells||[])),k(!1)),t}catch(e){return console.error("加载游戏进度失败:",e),null}},[r]),G=e.useCallback(async()=>{try{if(!r||!o||!i)return;const e={puzzleId:o.id,puzzle:o.puzzle,solution:u,difficulty:p,currentBoard:i,timeElapsed:y,gameStarted:m,gameCompleted:x,errorCount:L,incorrectCells:Array.from(_),lastModified:Date.now()};return await c.setItem(`progress_${r}_${o.id}`,e),!0}catch(e){return console.error("保存游戏进度失败:",e),!1}},[r,o,i,u,p,y,m,x,D,_]),V=async(e="medium")=>{try{console.log(`开始生成${e}难度的数独题目...`);const t=await Xr(e);if(console.log("generateSudoku 返回结果:",t),!t||!t.puzzle||!t.solution)throw console.error("生成的数独数据不完整:",t),new Error("生成的数独数据不完整");const{puzzle:r,solution:n}=t;return Gr(r)?(console.log(`成功生成${e}难度的数独题目，使用DLX算法验证了唯一解`),console.log("谜题数据预览:",r.slice(0,2).map(e=>e.slice(0,2).join(",")).join(";")),{puzzle:r,solution:n}):(console.warn("警告：生成的数独题目可能没有唯一解"),V(e))}catch(t){return console.error(`生成${e}难度的数独题目时出错:`,t),await J(e)}},J=async(e="medium")=>{try{console.log(`使用备用方法生成${e}难度的数独题目...`);const{puzzle:t,solution:r}=await Xr(e);return console.log(`备用方法成功生成${e}难度的数独题目`),{puzzle:t,solution:r}}catch(t){console.error("备用方法生成数独题目失败:",t);const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];return console.log("使用预设的简单数独题目作为最后的备用"),{puzzle:e,solution:r}}},X=e=>{if(console.log("formatPuzzleData 输入:",e),e&&e.puzzle){if("string"==typeof e.puzzle&&81===e.puzzle.length){const t=[];for(let r=0;r<9;r++){t.push([]);for(let n=0;n<9;n++)t[r].push(parseInt(e.puzzle[9*r+n])||0)}return{puzzle:t,solution:e.solution&&"string"==typeof e.solution&&81===e.solution.length?(()=>{const t=[];for(let r=0;r<9;r++){t.push([]);for(let n=0;n<9;n++)t[r].push(parseInt(e.solution[9*r+n])||0)}return t})():t}}if(Array.isArray(e.puzzle)&&9===e.puzzle.length){const t=e.puzzle.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0));let r=t;return e.solution&&Array.isArray(e.solution)&&9===e.solution.length&&(r=e.solution.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0))),console.log("formatPuzzleData 输出:",{puzzle:t,solution:r}),{puzzle:t,solution:r}}}console.warn("formatPuzzleData: 输入数据不完整或格式不正确，返回默认空数组",e);const t=Array(9).fill().map(()=>Array(9).fill(0));return{puzzle:t,solution:t}},K=(e,t,r)=>!u||!u[e]||void 0===u[e][t]||u[e][t]===r,Z=(e,t,r)=>{if(!m||x)return;if(l&&l[e]&&null!==l[e][t]&&0!==l[e][t])return void console.log("Cannot modify prefilled cell with notes:",e,t);const n=`${e}-${t}`,o={...U},a=I.slice(0,O+1);a.push({board:i,pencilNotes:{...U},row:e,col:t,type:"pencil"}),T(a),M(a.length-1),o[n]?o[n].includes(r)?(o[n]=o[n].filter(e=>e!==r),0===o[n].length&&delete o[n]):o[n]=[...new Set([...o[n],r])].sort((e,t)=>e-t):o[n]=[r],Y(o)},ee=(e,t)=>{if(!m||x)return;const r=`${e}-${t}`;if(!U[r])return;const n=I.slice(0,O+1);n.push({board:i,pencilNotes:{...U},row:e,col:t,type:"clear-pencil"}),T(n),M(n.length-1);const o={...U};delete o[r],Y(o)},te=e=>{if(u){for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(!e[t][r]||e[t][r]!==u[t][r])return;v(!0),k(!1),B(new Set),n&&n({puzzlesCompleted:1,puzzlesSolved:1,totalTimePlayed:y}),Q.success("恭喜！您成功完成了这个数独！",{position:"top-right",autoClose:3e3}),G()}},re=(e,t)=>{if(!i)return[];const r=[];for(let n=1;n<=9;n++)ne(e,t,n)&&r.push(n);return r.sort((e,t)=>e-t)},ne=(e,t,r)=>{if(!i)return!1;for(let a=0;a<9;a++)if(i[e][a]===r)return!1;for(let a=0;a<9;a++)if(i[a][t]===r)return!1;const n=3*Math.floor(e/3),o=3*Math.floor(t/3);for(let a=n;a<n+3;a++)for(let e=o;e<o+3;e++)if(i[a][e]===r)return!1;return!0},oe={currentPuzzle:o,currentBoard:i,originalPuzzle:l,solution:u,difficulty:p,gameStarted:m,gameCompleted:x,timeElapsed:y,timerActive:j,isTimerActive:j,selectedCell:z,candidates:C,highlightedCells:A,activeTechniques:E,history:I,historyIndex:O,errorCount:L,incorrectCells:_,isPencilMode:H,pencilNotes:U,setDifficulty:h,setSelectedCell:S,setHighlightedCells:P,setTimerActive:k,toggleTimer:()=>{k(e=>!e)},togglePencilMode:()=>{W(e=>!e)},togglePencilNote:Z,clearPencilNotes:ee,fillAllCandidates:()=>{if(!m||x||!i)return;const e={},t=I.slice(0,O+1);t.push({board:i,pencilNotes:{...U},type:"fill-candidates"}),T(t),M(t.length-1);for(let r=0;r<9;r++)for(let t=0;t<9;t++){if(l&&l[r]&&0!==l[r][t]||i[r]&&0!==i[r][t])continue;const n=re(r,t);n.length>0&&(e[`${r}-${t}`]=n)}Y(e),Q.info("已为所有空白格子计算并填充候选数！",{position:"top-right",autoClose:2e3})},loadSavedProgress:q,saveGameProgress:G,startNewGame:async(e=null,t=null)=>{console.log("SudokuContext: 开始新游戏",{puzzleId:e,difficultyOverride:t});try{k(!1),w(0),v(!1),T([]),M(-1),F(0),R(0),B(new Set),Y({});const e=t||p;let i;console.log("使用难度:",e),e!==p&&h(e);let l=0;const c=3;let u=!1;for(;!i&&l<c;){l++,console.log(`尝试生成谜题 (${l}/${c})`);try{if(e===nn.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const e=await tn();e&&e.puzzle&&e.solution?(i=e,u=!0,console.log("成功从JSON文件获取专家级谜题")):console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成")}catch(r){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",r)}}i||(console.log("使用程序生成谜题"),i=await V(e))}catch(o){console.error(`生成谜题失败 (尝试 ${l}/${c}):`,o)}}if(!i){console.error("多次尝试生成谜题失败，使用备用谜题");i={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]}}const m=X(i);if(console.log("谜题数据准备完成，formattedData:",m),!m||!m.puzzle||!Array.isArray(m.puzzle)||9!==m.puzzle.length){console.error("格式化后的数据无效，使用备用谜题");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];m.puzzle=e,m.solution=t}return a(m),console.log("设置 currentPuzzle 完成"),d(m.puzzle),console.log("设置 originalPuzzle 完成"),s(m.puzzle),console.log("设置 currentBoard 完成"),f(m.solution),console.log("设置 solution 完成"),g(!0),v(!1),w(0),k(!0),T([]),M(-1),n&&n({puzzlesStarted:1}),e===nn.EXPERT?Q.success(u?"已加载专家题库题目！":"已生成专家难度题目！",{position:"top-right",autoClose:2e3}):Q.success("已生成新谜题！",{position:"top-right",autoClose:2e3}),console.log("新游戏设置完成"),m}catch(i){console.error("开始新游戏失败:",i);try{const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],r={puzzle:e,solution:t};return a(r),d(e),s(e),f(t),g(!0),v(!1),k(!0),Q.success("已使用备用谜题！",{position:"top-right",autoClose:2e3}),r}catch(l){console.error("使用备用谜题也失败:",l),Q.error("生成谜题失败，请刷新页面重试",{position:"top-right",autoClose:2e3})}return null}},generateNewPuzzle:async(e=p)=>{console.log("SudokuContext: 生成新谜题",{targetDifficulty:e});try{let r;if(k(!1),w(0),v(!1),T([]),M(-1),F(0),R(0),B(new Set),Y({}),e!==p&&(h(e),console.log("已设置新难度:",e)),e===nn.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const t=await tn();t&&t.puzzle&&t.solution?(r=t,console.log("成功从JSON文件获取专家级谜题")):(console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成"),r=await V(e))}catch(t){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",t),r=await V(e)}}else console.log("非专家难度：使用程序生成谜题"),r=await V(e);const o=X(r);return console.log("谜题数据准备完成，formattedData:",o),console.log("puzzleData.puzzle 是否存在:",!!o.puzzle),o.puzzle&&(console.log("puzzle 类型:",Array.isArray(o.puzzle)?"数组":typeof o.puzzle),console.log("puzzle 长度:",Array.isArray(o.puzzle)?o.puzzle.length:"不是数组"),Array.isArray(o.puzzle)&&o.puzzle.length>0&&console.log("puzzle 第一行:",o.puzzle[0])),a(o),console.log("设置 currentPuzzle 完成"),d(o.puzzle),console.log("设置 originalPuzzle 完成"),s(o.puzzle),console.log("设置 currentBoard 完成"),f(o.solution),console.log("设置 solution 完成"),g(!0),v(!1),w(0),k(!0),T([]),M(-1),n&&n({puzzlesStarted:1}),Q.success("已生成新谜题！",{position:"top-right",autoClose:2e3}),console.log("新谜题设置完成"),o}catch(r){return console.error("生成新谜题失败:",r),Q.error("生成谜题失败，请重试",{position:"top-right",autoClose:2e3}),null}},fillCell:(e,t,r)=>{if(!m||x)return;if(l&&l[e]&&null!==l[e][t]&&0!==l[e][t])return void console.log("Cannot modify prefilled cell:",e,t);if(H)return void(0===r?ee(e,t):Z(e,t,r));const n=[...i.map(e=>[...e])],o=`${e}-${t}`,a=K(e,t,r),c=I.slice(0,O+1);c.push({board:i,pencilNotes:{...U},row:e,col:t,prevValue:i[e][t],type:"fill"}),T(c),M(c.length-1),n[e][t]=r,s(n);const d={...U};if(0!==r&&d[o]&&delete d[o],0!==r&&a){for(let a=0;a<9;a++)if(a!==t){const t=`${e}-${a}`;d[t]&&(d[t]=d[t].filter(e=>e!==r),0===d[t].length&&delete d[t])}for(let a=0;a<9;a++)if(a!==e){const e=`${a}-${t}`;d[e]&&(d[e]=d[e].filter(e=>e!==r),0===d[e].length&&delete d[e])}const n=3*Math.floor(e/3),o=3*Math.floor(t/3);for(let a=n;a<n+3;a++)for(let n=o;n<o+3;n++)if(a!==e||n!==t){const e=`${a}-${n}`;d[e]&&(d[e]=d[e].filter(e=>e!==r),0===d[e].length&&delete d[e])}}Y(d);const u=new Set(_);0!==r?a?u.delete(o):(_.has(o)||R(e=>e+1),u.add(o),Q.error("输入错误，请重试！",{position:"top-right",autoClose:1e3,theme:"colored"})):u.delete(o),B(u),te(n)},clearCell:(e,t)=>{if(!m||x)return;if(l&&l[e]&&0!==l[e][t])return void console.log("Cannot clear prefilled cell:",e,t);const r=I.slice(0,O+1);if(r.push({board:i,pencilNotes:{...U},row:e,col:t,prevValue:i[e][t],type:"clear"}),T(r),M(r.length-1),H)return void ee(e,t);const n=[...i.map(e=>[...e])],o=`${e}-${t}`;n[e][t]=0,s(n);const a=new Set(_);a.delete(o),B(a),F(a.size)},undo:()=>{if(O>=0){const e=I[O];s(e.board),e.pencilNotes&&Y(e.pencilNotes),M(O-1),v(!1);const t=new Set;for(let r=0;r<9;r++)for(let n=0;n<9;n++){const o=e.board[r][n];0!==o&&u&&o!==u[r][n]&&t.add(`${r}-${n}`)}B(t)}},redo:()=>{if(O<I.length-1){const e=I[O+1];s(e.board),e.pencilNotes&&Y(e.pencilNotes),M(O+1);const t=new Set;for(let r=0;r<9;r++)for(let n=0;n<9;n++){const o=e.board[r][n];0!==o&&u&&o!==u[r][n]&&t.add(`${r}-${n}`)}B(t),te(e.board)}},getCandidates:async(e,t)=>{try{const r=await _r.getCandidates(i,e,t);return $(r.candidates),r.candidates}catch(r){return console.error("获取候选数失败:",r),[]}},identifyTechniques:async()=>{try{const e=await _r.identifyTechniques(i);return N(e.techniques),e.techniques}catch(e){return console.error("识别技巧失败:",e),[]}},getHint:async()=>{try{return await _r.getHint(i,u)}catch(e){return console.error("获取提示失败:",e),Q.error("获取提示失败，请重试",{position:"top-right",autoClose:2e3}),null}},validateCellInput:K};return b.jsx(rn.Provider,{value:oe,children:t})},an=()=>{const t=e.useContext(rn);if(!t)throw new Error("useSudoku must be used within a SudokuContextProvider");return t},sn=Object.freeze(Object.defineProperty({__proto__:null,DIFFICULTY_LEVELS:nn,SudokuContextProvider:on,useSudoku:an},Symbol.toStringTag,{value:"Module"})),ln=Mr.nav`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    padding: 0 15px;
  }
`,cn=Mr.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  @media (max-width: 640px) {
    flex-direction: column;
    padding: 8px 15px;
  }
`,dn=Mr(o)`
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 640px) {
    margin-bottom: 8px;
    font-size: 18px;
  }
`,un=Mr.div`
  display: flex;
  gap: 20px;
  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
`,fn=Mr(o)`
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
    color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  }
  
  &.active {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
    color: white;
  }
`,pn=Mr.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,hn=Mr.div`
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  font-size: 12px;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    display: none;
  }
`,mn=Mr.div`
  position: relative;
`,gn=Mr.button`
  background-color: transparent;
  border: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)?`${e.theme.primary}11`:"#4a6cf711"}};
  }
`,xn=Mr.div`
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
`,vn=Mr.button`
  background-color: transparent;
  border: none;
  width: 100px;
  padding: 8px 12px;
  text-align: left;
  cursor: pointer;
  font-size: 12px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  }
  
  &.selected {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)?`${e.theme.primary}22`:"#4a6cf722"}};
    color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
    font-weight: 600;
  }
`,yn=Mr.span`
  font-size: 10px;
`,bn=()=>{re();const{gameStarted:t,gameCompleted:r}=an(),o=n(),[a,i]=e.useState(window.innerHeight>window.innerWidth),[s,l]=e.useState(!1),[c,d]=e.useState("zh");e.useEffect(()=>{const e=()=>{i(window.innerHeight>window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e.useEffect(()=>{const e=e=>{e.target.closest(".language-selector")||l(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const u=()=>{const e=o.pathname;return"/"===e?"game":"/home"===e?"home":e.includes("/game")?"game":e.includes("/techniques")?"techniques":e.includes("/progress")?"progress":e.includes("/stats")?"stats":""},f=e=>{d(e),l(!1),console.log("切换语言为:",e)};return b.jsx(ln,{children:b.jsxs(cn,{children:[b.jsx(dn,{to:"/home",children:"数独学习"}),!a&&b.jsxs(b.Fragment,{children:[b.jsxs(un,{children:[b.jsx(fn,{to:"/home",className:"home"===u()?"active":"",children:"首页"}),b.jsx(fn,{to:"/game",className:"game"===u()?"active":"",children:"开始游戏"}),b.jsx(fn,{to:"/techniques",className:"techniques"===u()?"active":"",children:"技巧学习"}),b.jsx(fn,{to:"/progress",className:"progress"===u()?"active":"",children:"游戏进度"}),b.jsx(fn,{to:"/stats",className:"stats"===u()?"active":"",children:"统计信息"})]}),b.jsxs(pn,{children:[t&&b.jsx(hn,{children:t?r?"游戏已完成":"游戏进行中":""}),b.jsxs(mn,{className:"language-selector",children:[b.jsxs(gn,{onClick:()=>{l(!s)},children:[b.jsx(yn,{children:"zh"===c?"🇨🇳":"🇺🇸"}),"zh"===c?"中文":"English",b.jsx("span",{children:s?"▲":"▼"})]}),s&&b.jsxs(xn,{children:[b.jsxs(vn,{className:"zh"===c?"selected":"",onClick:()=>f("zh"),children:[b.jsx(yn,{children:"🇨🇳"})," 中文"]}),b.jsxs(vn,{className:"en"===c?"selected":"",onClick:()=>f("en"),children:[b.jsx(yn,{children:"🇺🇸"})," English"]})]})]})]})]})]})})},wn=Mr.footer`
  background-color: ${e=>e.theme.surface};
  color: ${e=>e.theme.textSecondary};
  padding: 20px 0;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`,jn=Mr.div`
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
`,kn=Mr.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
  ${e=>e.theme.mediaQueries.small} {
    gap: 15px;
  }
`,zn=Mr.a`
  color: ${e=>e.theme.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${e=>e.theme.primary};
  }
`,Sn=Mr.div`
  font-size: 14px;
  line-height: 1.5;
`,Cn=Mr.div`
  font-size: 12px;
  margin-top: 10px;
`,$n=()=>{const{theme:e}=re(),t=(new Date).getFullYear();return b.jsx(wn,{theme:e,children:b.jsxs(jn,{theme:e,children:[b.jsxs(kn,{theme:e,children:[b.jsx(zn,{href:"#",theme:e,children:"关于我们"}),b.jsx(zn,{href:"#",theme:e,children:"使用帮助"}),b.jsx(zn,{href:"#",theme:e,children:"数独规则"}),b.jsx(zn,{href:"#",theme:e,children:"联系我们"})]}),b.jsxs(Sn,{theme:e,children:["© ",t," 数独学习应用 版权所有"]}),b.jsx(Cn,{theme:e,children:"版本 1.0.0"})]})})},An=Mr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`,Pn=Mr.div`
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
`,En=Mr.div`
  color: ${e=>e.theme.text};
  font-size: 16px;
  font-weight: 500;
`,Nn=({showMessage:e=!0})=>{const{theme:t}=re(),{loadingMessage:r}=ae();return b.jsxs(An,{children:[b.jsx(Pn,{theme:t}),e&&b.jsx(En,{theme:t,children:r})]})},In=Mr.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  transition: background-color 0.3s ease, color 0.3s ease;
`,Tn=Mr.main`
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 640px) {
    padding: 15px;
  }
`,On=Mr.div`
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
`;function Mn({children:e}){re();const{isLoading:t}=ae();return b.jsxs(In,{children:[b.jsx(bn,{}),b.jsx(Tn,{children:e}),b.jsx($n,{}),t&&b.jsx(On,{children:b.jsx(Nn,{})})]})}const Dn=Mr.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0;
  @media (max-width: 640px) {
    gap: 30px;
    padding: 10px 0;
  }
`,Fn=Mr.section`
  text-align: center;
  padding: 40px 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    padding: 30px 15px;
  }
`,Ln=Mr.h1`
  font-size: 42px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`,Rn=Mr.p`
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
`,_n=Mr.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`,Bn=Mr(o)`
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
`,Hn=Mr(o)`
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
`,Wn=Mr.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  @media (max-width: 640px) {
    gap: 20px;
  }
`,Un=Mr.div`
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
`,Yn=Mr.div`
  font-size: 48px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  display: flex;
  justify-content: center;
`,qn=Mr.h3`
  font-size: 22px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`,Gn=Mr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  line-height: 1.6;
  margin: 0;
  text-align: center;
`,Vn=Mr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Jn=Mr.h2`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 26px;
  }
`,Xn=Mr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`,Kn=Mr.button`
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
`,Qn=Mr.button`
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
`,Zn=Mr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,eo=Mr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`,to=Mr.div`
  text-align: center;
  padding: 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 8px;
`,ro=Mr.div`
  font-size: 36px;
  font-weight: bold;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 10px;
  @media (max-width: 640px) {
    font-size: 30px;
  }
`,no=Mr.div`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
`,oo=()=>{re();const{userStats:e}=Lr(),{setDifficulty:t,startNewGame:n}=an(),{executeWithLoading:o,isLoading:i}=ae(),s=a(),[l,c]=r.useState(nn.MEDIUM),d=e=>{c(e)};return b.jsxs(Dn,{children:[b.jsxs(Fn,{children:[b.jsx(Ln,{children:"欢迎来到数独学习应用"}),b.jsx(Rn,{children:"提升您的数独技能，学习从基础到高级的解题技巧。适合各级别玩家，让您的数独之旅更加精彩！"}),b.jsxs(_n,{children:[b.jsx(Bn,{to:"/game",children:"开始游戏"}),b.jsx(Hn,{to:"/techniques",children:"学习技巧"})]})]}),b.jsxs(Wn,{children:[b.jsxs(Un,{children:[b.jsx(Yn,{children:"🧠"}),b.jsx(qn,{children:"多种难度"}),b.jsx(Gn,{children:"从简单到专家级别的数独谜题，适合不同水平的玩家，循序渐进提升您的技能。"})]}),b.jsxs(Un,{children:[b.jsx(Yn,{children:"💡"}),b.jsx(qn,{children:"技巧学习"}),b.jsx(Gn,{children:"详细的解题技巧讲解，从唯一候选数到高级技巧，帮助您掌握数独的精髓。"})]}),b.jsxs(Un,{children:[b.jsx(Yn,{children:"📊"}),b.jsx(qn,{children:"进度追踪"}),b.jsx(Gn,{children:"记录您的游戏进度和技巧掌握情况，分析您的表现，持续进步。"})]}),b.jsxs(Un,{children:[b.jsx(Yn,{children:"🎯"}),b.jsx(qn,{children:"实时提示"}),b.jsx(Gn,{children:"遇到困难时获得智能提示，帮助您理解下一步的解题思路和技巧应用。"})]})]}),b.jsxs(Vn,{children:[b.jsx(Jn,{children:"快速开始"}),b.jsxs(Xn,{children:[b.jsx(Kn,{selected:l===nn.EASY,onClick:()=>d(nn.EASY),children:"简单"}),b.jsx(Kn,{selected:l===nn.MEDIUM,onClick:()=>d(nn.MEDIUM),children:"中等"}),b.jsx(Kn,{selected:l===nn.HARD,onClick:()=>d(nn.HARD),children:"困难"}),b.jsx(Kn,{selected:l===nn.EXPERT,onClick:()=>d(nn.EXPERT),children:"专家"})]}),b.jsx(Qn,{onClick:async()=>{t(l);const e=await o(()=>n(null,l),"准备游戏中...");e&&s(`/game/${e.id}`)},disabled:i,children:i?b.jsx(Nn,{showMessage:!1}):"开始游戏"})]}),b.jsxs(Zn,{children:[b.jsx(Jn,{children:"您的进度"}),b.jsxs(eo,{children:[b.jsxs(to,{children:[b.jsx(ro,{children:e.puzzlesStarted}),b.jsx(no,{children:"开始的谜题"})]}),b.jsxs(to,{children:[b.jsx(ro,{children:e.puzzlesCompleted}),b.jsx(no,{children:"完成的谜题"})]}),b.jsxs(to,{children:[b.jsx(ro,{children:e.puzzlesSolved}),b.jsx(no,{children:"独立解决"})]}),b.jsxs(to,{children:[b.jsx(ro,{children:Math.floor(e.totalTimePlayed/60)}),b.jsx(no,{children:"游戏分钟"})]})]})]})]})},ao={},io=Mr.div.attrs({className:"sudoku-board"})`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  border: 3px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.gridLineThick)||"#34495e"}};
  border-radius: var(--border-radius);
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  
  // 在横屏模式下增加一些阴影深度
  @media (min-width: 992px) {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`,so=Mr.div`
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
`,lo=({notes:e=[],highlightedNumber:t=null})=>{const r=Array.isArray(e)?e:Object.keys(e).filter(t=>e[t]).map(Number),n={1:{gridRow:1,gridColumn:1},2:{gridRow:1,gridColumn:2},3:{gridRow:1,gridColumn:3},4:{gridRow:2,gridColumn:1},5:{gridRow:2,gridColumn:2},6:{gridRow:2,gridColumn:3},7:{gridRow:3,gridColumn:1},8:{gridRow:3,gridColumn:2},9:{gridRow:3,gridColumn:3}};return b.jsx("div",{style:{display:"grid",width:"100%",height:"100%",padding:"0px",boxSizing:"border-box",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gridGap:"0px"},children:r.map(e=>{const r=t===e;return b.jsx("div",{style:{...n[e],display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8rem",fontWeight:r?"bold":"500",color:r?"#007bff":"#4A6FA5",backgroundColor:r?"#d1ecf1":"transparent",margin:"0",lineHeight:"1.2",boxSizing:"border-box",width:"100%",height:"100%"},children:e},e)})})},co=({board:e,selectedCell:t,onCellClick:r,originalPuzzle:n,isPencilMode:o,pencilNotes:a,incorrectCells:i})=>{const{theme:s}=re(),l=e||Array(9).fill().map(()=>Array(9).fill(0)),c=n||Array(9).fill().map(()=>Array(9).fill(0)),d=a||{},u=i||new Set,f=(e,t,r)=>!(!c||!c[t]||null===c[t][r]||0===c[t][r]),p=e=>"error"===e,h=(e,t)=>{const r=`${e}-${t}`;return u instanceof Set?u.has(r):!!Array.isArray(u)&&u.some(r=>r.row===e&&r.col===t)},m=(e,t)=>3*Math.floor(e/3)+Math.floor(t/3),g=(e,r,n)=>{const a=[];if(d[`${e}-${r}`],f(0,e,r)&&a.push("prefilled"),(p(n)||h(e,r))&&a.push("error"),t&&t.row===e&&t.col===r)a.push("selected"),a.push(o?"pencil-selected":"normal-selected");else if(t){const o=l[t.row][t.col],f=`${t.row}-${t.col}`;d[f],n&&n===o&&a.push("same-number"),i=e,s=r,c=t.row,u=t.col,(i===c||s===u||m(i,s)===m(c,u))&&a.push("same-region")}var i,s,c,u;return a.join(" ")};return b.jsx(io,{theme:s,children:l.map((e,n)=>e.map((e,o)=>{const a=g(n,o,e),i=`${n}-${o}`,c=d[i]||[],u=c.length>0;let m=null;if(t&&void 0!==t.row&&void 0!==t.col&&l[t.row]&&l[t.row][t.col]){const e=l[t.row][t.col];if(0!==e&&"error"!==e){const r=f(0,t.row,t.col),n=p(e),o=h(t.row,t.col);(r||!n&&!o)&&(m=e)}}return b.jsx(so,{row:n,col:o,className:a,onClick:()=>((e,t)=>{r&&r(e,t)})(n,o),theme:s,children:e&&0!==e&&"error"!==e?e:u?b.jsx(lo,{notes:c,highlightedNumber:m}):""},i)}))})},uo=Mr.div.attrs({className:"control-panel"})`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  width: calc(var(--board-width) * 2 / 3);
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  box-sizing: border-box;
  transition: all 0.2s ease;
  
  /* 横屏模式下，高度与棋盘一致 */
  height: var(--board-width);
  /* 移除overflow-y: auto，避免显示滚动条 */
  overflow: hidden;
  
  /* 竖屏模式下自适应高度 */
  @media (max-width: 991px) {
    height: auto;
    width: 100%;
    padding: 12px;
    border-radius: 6px;
  }
  
  // 横屏模式下增加阴影深度
  @media (min-width: 992px) {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;Mr.h3`
  font-size: 14px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 8px 0;
  padding-bottom: 6px;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  display: none; // 隐藏标题以节省空间
`;const fo=Mr.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0;
  min-height: 0; /* 允许flex子元素缩小 */
  overflow: hidden;
`,po=Mr.div`
  display: flex;
  border-bottom: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  margin-bottom: 12px;
  padding-bottom: 4px;
`,ho=Mr(({isActive:e,...t})=>b.jsx("button",{...t}))`
  flex: 1;
  padding: 10px 16px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  font-size: 14px;
  font-weight: ${e=>e.isActive?"600":"500"};
  color: ${e=>{var t,r;return e.isActive?(null==(t=e.theme)?void 0:t.primary)||"#3498db":(null==(r=e.theme)?void 0:r.textSecondary)||"#7f8c8d"}};
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0;
  box-sizing: border-box;
  
  // 悬停效果（仅在非移动设备上）
  @media (hover: hover) {
    &:hover {
      color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
      transform: translateY(-1px);
    }
  }
  
  &.active {
    border-bottom-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
    border-bottom-width: 3px;
    color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
    transform: translateY(-1px);
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  }
  
  // 触摸反馈
  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
`,mo=Mr.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* 移除overflow-y: auto，避免显示滚动条 */
  overflow: hidden;
  margin: 0;
  padding: 2px;
`,go=Mr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 15px;
  padding: 4px;
  align-content: start;
  
  /* 竖屏模式下使用6列布局，缩小按钮尺寸 */
  @media (max-width: 991px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
    padding: 4px;
  }
`,xo=Mr(({isActive:e,disabled:t,isPencilMode:r,...n})=>b.jsx("button",{...n}))`
  background-color: ${e=>{var t,r,n;return e.disabled?(null==(t=e.theme)?void 0:t.disabled)||"#f5f5f5":e.isActive?(null==(r=e.theme)?void 0:r.primary)||"#3498db":e.isPencilMode?"#e0f7fa":(null==(n=e.theme)?void 0:n.surface)||"#ffffff"}};
  color: ${e=>{var t,r;return e.disabled?(null==(t=e.theme)?void 0:t.textDisabled)||"#bdc3c7":e.isActive?"white":e.isPencilMode?"#00838f":(null==(r=e.theme)?void 0:r.text)||"#333333"}};
  border: 2px solid ${e=>{var t;return e.isPencilMode?"#26a69a":(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
  padding: 8px;
  border-radius: 8px;
  font-size: calc(var(--board-width) * 0.055);
  font-weight: 600;
  cursor: ${e=>e.disabled?"default":"pointer"};
  transition: all 0.2s ease;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  box-sizing: border-box;
  /* 增加触摸区域大小，更适合手机操作 */
  min-height: 40px;
  max-height: 60px;
  
  /* 横屏模式下增大按钮尺寸和文字大小 */
  @media (min-width: 992px) {
    padding: 12px;
    font-size: calc(var(--board-width) * 0.065);
    min-height: 50px;
    max-height: 80px;
    border-radius: 10px;
  }
  
  /* 竖屏模式下减小按钮尺寸和字体 */
  @media (max-width: 991px) {
    padding: 6px;
    font-size: calc(var(--board-width) * 0.045);
    min-height: 36px;
    border-radius: 6px;
    border-width: 1.5px;
  }
  
  // 悬停效果（仅在非移动设备上）
  @media (hover: hover) {
    &:hover:not(:disabled) {
      background-color: ${e=>{var t,r;return e.isActive?(null==(t=e.theme)?void 0:t.primaryDark)||"#2980b9":e.isPencilMode?"#b2ebf2":((null==(r=e.theme)?void 0:r.primary)||"#3498db")+"22"}};
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
  
  // 触摸反馈
  &:active:not(:disabled) {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
`,vo=Mr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  padding: 4px;
  margin-top: auto;
  
  /* 竖屏模式下减小内边距和间距 */
  @media (max-width: 991px) {
    padding: 2px;
    gap: 4px;
  }
`,yo=Mr(({isDanger:e,isActive:t,...r})=>b.jsx("button",{...r}))`
  background-color: ${e=>{var t,r,n;return e.isDanger?(null==(t=e.theme)?void 0:t.error)||"#ff4444":e.isActive?(null==(r=e.theme)?void 0:r.primary)||"#3498db":(null==(n=e.theme)?void 0:n.surface)||"#ffffff"}};
  color: ${e=>{var t;return e.isDanger||e.isActive?"white":(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  border: 2px solid ${e=>{var t,r,n;return e.isDanger?(null==(t=e.theme)?void 0:t.error)||"#ff4444":e.isActive?(null==(r=e.theme)?void 0:r.primary)||"#3498db":(null==(n=e.theme)?void 0:n.border)||"#e0e0e0"}};
  padding: 14px 16px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  margin: 4px 0;
  box-sizing: border-box;
  /* 增加触摸区域大小 */
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* 竖屏模式下调整按钮尺寸 */
  @media (max-width: 991px) {
    padding: 10px 12px;
    font-size: 13px;
    min-height: 40px;
    margin: 2px 0;
    border-width: 1.5px;
  }
  
  // 悬停效果（仅在非移动设备上）
  @media (hover: hover) {
    &:hover {
      background-color: ${e=>{var t,r,n;return e.isDanger?((null==(t=e.theme)?void 0:t.error)||"#ff4444")+"aa":e.isActive?(null==(r=e.theme)?void 0:r.primaryDark)||"#2980b9":((null==(n=e.theme)?void 0:n.border)||"#e0e0e0")+"44"}};
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  }
  
  // 触摸反馈
  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
`,bo=Mr.div`
  padding: 12px;
  margin-bottom: 8px;
  background-color: ${e=>{var t,r;return e.isActive?((null==(t=e.theme)?void 0:t.primary)||"#3498db")+"15":(null==(r=e.theme)?void 0:r.surface)||"#ffffff"}};
  border: 1px solid ${e=>{var t,r;return e.isActive?(null==(t=e.theme)?void 0:t.primary)||"#3498db":(null==(r=e.theme)?void 0:r.border)||"#e0e0e0"}};
  border-radius: 8px;
  cursor: pointer;
  // 简化transition，只保留必要的颜色变化
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t;return((null==(t=e.theme)?void 0:t.primary)||"#3498db")+"10"}};
  }
`,wo=Mr.h4`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>{var t,r;return e.isActive?(null==(t=e.theme)?void 0:t.primary)||"#3498db":(null==(r=e.theme)?void 0:r.text)||"#34495e"}};
  margin: 0 0 4px 0;
`,jo=Mr.p`
  font-size: 12px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#7f8c8d"}};
  margin: 0;
  line-height: 1.3;
`,ko=Mr.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 10px;
`,zo=Mr.h4`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#34495e"}};
  margin: 0;
`,So=Mr.div`
  padding: 10px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 6px;
  border: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
`,Co=Mr.span`
  font-weight: 600;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
  margin-right: 8px;
`;Mr.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 8px;
  border: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  margin-top: auto;
`,Mr.span`
  font-size: 14px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#34495e"}};
  font-weight: 500;
  transition: color 0.2s ease;
`,Mr.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
`,Mr.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
  }
  
  &:checked + span:before {
    transform: translateX(26px) scale(1.1);
  }
  
  &:focus + span {
    box-shadow: 0 0 0 4px ${e=>{var t;return((null==(t=e.theme)?void 0:t.primary)||"#3498db")+"33"}};
  }
`,Mr.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 34px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  // 悬停效果（仅在非移动设备上）
  @media (hover: hover) {
    &:hover:before {
      transform: scale(1.2);
    }
  }
`;const $o=({onNumberSelect:t,onClearCell:r,onUndo:n,onTogglePencilMode:o,selectedNumber:a,isPencilMode:i})=>{var s,l;const{theme:c}=re(),[d,u]=e.useState("keyboard"),[f,p]=e.useState(null),h=[{id:"naked_single",name:"唯一数法",description:"某个单元格只有一个可能的数字可填"},{id:"hidden_single",name:"隐性唯一数法",description:"某一行/列/宫格中某个数字只能填在一个单元格"},{id:"naked_pair",name:"数对法",description:"两个单元格中只有两个可能的数字"},{id:"hidden_pair",name:"隐性数对法",description:"某一行/列/宫格中两个数字只能填在两个单元格"}];return b.jsx(uo,{theme:c,children:b.jsxs(fo,{children:[b.jsxs(po,{children:[b.jsx(ho,{isActive:"keyboard"===d,className:"keyboard"===d?"active":"",onClick:()=>u("keyboard"),children:"键盘"}),b.jsx(ho,{isActive:"techniques"===d,className:"techniques"===d?"active":"",onClick:()=>u("techniques"),children:"技巧"}),b.jsx(ho,{isActive:"solution"===d,className:"solution"===d?"active":"",onClick:()=>u("solution"),children:"解题"})]}),b.jsxs(mo,{children:["keyboard"===d&&b.jsxs(b.Fragment,{children:[b.jsx(go,{children:[1,2,3,4,5,6,7,8,9].map(e=>b.jsx(xo,{isActive:a===e,isPencilMode:i,onClick:()=>t(e),children:e},e))}),b.jsxs(vo,{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px",padding:"4px",alignItems:"center",justifyContent:"center"},children:[b.jsx(yo,{onClick:n,title:"撤回",children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:b.jsx("path",{d:"m15 18-6-6 6-6"})})}),b.jsx(yo,{onClick:r,title:"清空单元格",isDanger:!0,children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b.jsx("path",{d:"M3 6h18"}),b.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),b.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),b.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),b.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})}),b.jsx(yo,{onClick:o,title:i?"退出铅笔模式":"进入铅笔模式",isActive:i,children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:b.jsx("path",{d:"M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"})})})]})]}),"techniques"===d&&b.jsxs(b.Fragment,{children:[h.map(e=>b.jsxs(bo,{isActive:f===e.id,onClick:()=>{return t=e.id,p(t),void u("solution");var t},children:[b.jsx(wo,{isActive:f===e.id,children:e.name}),b.jsx(jo,{children:e.description})]},e.id)),0===h.length&&b.jsx("div",{style:{textAlign:"center",padding:"20px",color:(null==c?void 0:c.textSecondary)||"#666"},children:"当前没有可应用的技巧"})]}),"solution"===d&&b.jsx(ko,{children:f?b.jsxs(b.Fragment,{children:[b.jsx(zo,{children:(null==(s=h.find(e=>e.id===f))?void 0:s.name)||"技巧详解"}),null==(l={naked_single:["在宫格(1,2)中，检查所有可能的数字","发现该单元格只能填入数字5","确认行、列、宫格中没有其他5"],hidden_single:["查看第一行中数字7的可能位置","发现数字7只能填在单元格(1,5)","即使该单元格还有其他可能数字，但数字7只能填在这里"],naked_pair:["在第二行中，单元格(2,3)和(2,7)中都只有数字3和8","这两个单元格形成数对，可以排除该行其他单元格中的3和8","在该行的其他单元格中删除候选数3和8"],hidden_pair:["在第三宫格中，数字4和6只能出现在两个单元格中","这两个单元格形成隐性数对","可以删除这两个单元格中的其他候选数"]}[f])?void 0:l.map((e,t)=>b.jsxs(So,{children:[b.jsxs(Co,{children:[t+1,"."]}),e]},t))]}):b.jsx("div",{style:{textAlign:"center",padding:"40px",color:(null==c?void 0:c.textSecondary)||"#666"},children:'请先从"可用技巧"标签页选择一个技巧'})})]})]})})},Ao=Mr.div`
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
`,Po=Mr.div`
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
`,Eo=Mr.h2`
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
`,No=Mr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`,Io=Mr(({isSelected:e,...t})=>b.jsx("button",{...t}))`
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
`,To=Mr.div`
  margin-top: 4px;
  font-size: 12px;
  opacity: 0.7;
  font-weight: normal;
`,Oo=Mr.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`,Mo=Mr.button`
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
`,Do=Mr.button`
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
`,Fo={[nn.EASY]:{name:"简单",description:"初学者友好，空格较少"},[nn.MEDIUM]:{name:"中等",description:"进阶挑战，需要一定技巧"},[nn.HARD]:{name:"困难",description:"专家级别，逻辑推理"},[nn.EXPERT]:{name:"专家",description:"极高难度，需要高级技巧"}},Lo=({isOpen:e,onClose:t,onSelectDifficulty:n,initialDifficulty:o})=>{const{theme:a}=re(),[i,s]=r.useState(o||nn.MEDIUM);if(!e)return null;const l=()=>{n(i),t()};return b.jsx(Ao,{onClick:t,onKeyDown:e=>{"Escape"===e.key&&t(),"Enter"===e.key&&l()},children:b.jsxs(Po,{theme:a,onClick:e=>e.stopPropagation(),children:[b.jsx(Eo,{theme:a,children:"选择难度"}),b.jsx(No,{children:Object.entries(nn).map(([e,t])=>{const r=Fo[t];return b.jsxs(Io,{isSelected:i===t,onClick:()=>s(t),theme:a,className:e.toLowerCase(),children:[r.name,b.jsx(To,{children:r.description})]},e)})}),b.jsxs(Oo,{children:[b.jsx(Mo,{theme:a,onClick:t,children:"取消"}),b.jsx(Do,{theme:a,onClick:l,children:"开始游戏"})]})]})})},Ro=Mr.div.attrs({className:"nav-block"})`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f8f9fa"}};
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  width: 100%; // 与数独棋盘同宽
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0 0 20px 0;
  box-sizing: border-box;
  border: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  transition: all 0.3s ease;
  
  // 添加悬停效果
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  // 确保在父容器中正确对齐
  align-self: flex-start;
`;Mr.h3`
  font-size: 14px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 4px 0;
  padding-bottom: 4px;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  display: none; // 竖屏模式下隐藏标题以节省空间
`;const _o=Mr.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5个按钮平均分布
  gap: 2px;
  margin: 0;
  padding: 2px 0;
`,Bo=Mr(({isActive:e,...t})=>b.jsx("button",{...t}))`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{var t,r;return e.isActive?(null==(t=e.theme)?void 0:t.primary)||"#3498db":(null==(r=e.theme)?void 0:r.background)||"#f8f9fa"}};
  color: ${e=>{var t;return e.isActive?"white":(null==(t=e.theme)?void 0:t.text)||"#333333"}};
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
`,Ho=Mr.span`
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Wo=()=>b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})}),Uo=()=>b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}),Yo=()=>b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M8 5v14l11-7z"})}),qo=()=>b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"#FFD700",children:b.jsx("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})}),Go=()=>b.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:[b.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"transparent",stroke:"currentColor",strokeWidth:"1.5"}),b.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),b.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),b.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",children:"2"}),b.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",children:"5"})]}),Vo=()=>b.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})}),Jo=({onNewGame:t,onPauseTimer:r,onGetHint:n,onToggleNotes:o,onSettings:a,isNotesMode:i=!1,isTimerActive:s=!0})=>{re();const l=an(),{startLoading:c,stopLoading:d}=ae(),[u,f]=e.useState(!1),[p,h]=e.useState(!1);return b.jsxs(b.Fragment,{children:[b.jsx(Ro,{children:b.jsxs(_o,{children:[b.jsx(Bo,{onClick:()=>{console.log("NavigationBlock: 打开难度选择模态框"),f(!0)},title:"新建游戏",children:b.jsx(Ho,{children:b.jsx(Wo,{})})}),b.jsx(Bo,{onClick:r,title:s?"暂停计时":"继续",children:b.jsx(Ho,{children:s?b.jsx(Uo,{}):b.jsx(Yo,{})})}),b.jsx(Bo,{onClick:n,title:"技巧提示",children:b.jsx(Ho,{children:b.jsx(qo,{})})}),b.jsx(Bo,{onClick:()=>{o(),h(!0)},title:"候选数",isActive:p,children:b.jsx(Ho,{children:b.jsx(Go,{})})}),b.jsx(Bo,{onClick:a,title:"设置",children:b.jsx(Ho,{children:b.jsx(Vo,{})})})]})}),b.jsx(Lo,{isOpen:u,onClose:()=>f(!1),onSelectDifficulty:async e=>{console.log("NavigationBlock: 选择难度:",e);try{h(!1),c&&c("生成新谜题..."),(null==l?void 0:l.startNewGame)?(console.log("调用 context.startNewGame"),await l.startNewGame(null,e),console.log("startNewGame 完成")):(null==l?void 0:l.generateNewPuzzle)?(console.log("调用 context.generateNewPuzzle"),await l.generateNewPuzzle(e),console.log("generateNewPuzzle 完成")):console.error("上下文函数不可用")}catch(t){console.error("生成新游戏失败:",t)}finally{d&&d()}},initialDifficulty:(null==l?void 0:l.difficulty)||nn.MEDIUM})]})};
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
function Xo(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Ko(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,oa(n.key),n)}}function Qo(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=ia(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function Zo(e,t,r){return(t=oa(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ea(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ta(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ea(Object(r),!0).forEach(function(t){Zo(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ea(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ra(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,s=[],l=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return s}}(e,t)||ia(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function na(e){return function(e){if(Array.isArray(e))return Xo(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ia(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oa(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function aa(e){return(aa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ia(e,t){if(e){if("string"==typeof e)return Xo(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Xo(e,t):void 0}}var sa=function(){},la={},ca={},da=null,ua={mark:sa,measure:sa};try{"undefined"!=typeof window&&(la=window),"undefined"!=typeof document&&(ca=document),"undefined"!=typeof MutationObserver&&(da=MutationObserver),"undefined"!=typeof performance&&(ua=performance)}catch(Gd){}var fa=(la.navigator||{}).userAgent,pa=void 0===fa?"":fa,ha=la,ma=ca,ga=da,xa=ua;ha.document;var va,ya=!!ma.documentElement&&!!ma.head&&"function"==typeof ma.addEventListener&&"function"==typeof ma.createElement,ba=~pa.indexOf("MSIE")||~pa.indexOf("Trident/"),wa={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},ja=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],ka="classic",za="duotone",Sa="sharp",Ca="sharp-duotone",$a="chisel",Aa="etch",Pa="jelly",Ea="jelly-duo",Na="jelly-fill",Ia="notdog",Ta="notdog-duo",Oa="slab",Ma="slab-press",Da="thumbprint",Fa="utility",La="utility-duo",Ra="utility-fill",_a="whiteboard",Ba=[ka,za,Sa,Ca,$a,Aa,Pa,Ea,Na,Ia,Ta,Oa,Ma,Da,Fa,La,Ra,_a];Zo(Zo(Zo(Zo(Zo(Zo(Zo(Zo(Zo(Zo(va={},ka,"Classic"),za,"Duotone"),Sa,"Sharp"),Ca,"Sharp Duotone"),$a,"Chisel"),Aa,"Etch"),Pa,"Jelly"),Ea,"Jelly Duo"),Na,"Jelly Fill"),Ia,"Notdog"),Zo(Zo(Zo(Zo(Zo(Zo(Zo(Zo(va,Ta,"Notdog Duo"),Oa,"Slab"),Ma,"Slab Press"),Da,"Thumbprint"),Fa,"Utility"),La,"Utility Duo"),Ra,"Utility Fill"),_a,"Whiteboard");var Ha=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Wa=["fak","fa-kit","fakd","fa-kit-duotone"],Ua={fak:"kit","fa-kit":"kit"},Ya={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"};Zo(Zo({},"kit","Kit"),"kit-duotone","Kit Duotone");var qa,Ga={kit:"fak"},Va={"kit-duotone":"fakd"},Ja="duotone-group",Xa="swap-opacity",Ka="primary",Qa="secondary";Zo(Zo(Zo(Zo(Zo(Zo(Zo(Zo(Zo(Zo(qa={},"classic","Classic"),"duotone","Duotone"),"sharp","Sharp"),"sharp-duotone","Sharp Duotone"),"chisel","Chisel"),"etch","Etch"),"jelly","Jelly"),"jelly-duo","Jelly Duo"),"jelly-fill","Jelly Fill"),"notdog","Notdog"),Zo(Zo(Zo(Zo(Zo(Zo(Zo(Zo(qa,"notdog-duo","Notdog Duo"),"slab","Slab"),"slab-press","Slab Press"),"thumbprint","Thumbprint"),"utility","Utility"),"utility-duo","Utility Duo"),"utility-fill","Utility Fill"),"whiteboard","Whiteboard");Zo(Zo({},"kit","Kit"),"kit-duotone","Kit Duotone");var Za={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},ei=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"]),ti=[1,2,3,4,5,6,7,8,9,10],ri=ti.concat([11,12,13,14,15,16,17,18,19,20]),ni=[].concat(na(Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]})),["solid","regular","light","thin","duotone","brands","semibold"],["aw","fw","pull-left","pull-right"],["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ja,Xa,Ka,Qa]).concat(ti.map(function(e){return"".concat(e,"x")})).concat(ri.map(function(e){return"w-".concat(e)})),oi="___FONT_AWESOME___",ai="svg-inline--fa",ii="data-fa-i2svg",si="data-fa-pseudo-element",li="data-prefix",ci="data-icon",di="fontawesome-i2svg",ui=["HTML","HEAD","STYLE","SCRIPT"],fi=["::before","::after",":before",":after"],pi=function(){try{return!0}catch(e){return!1}}();function hi(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[ka]}})}var mi=ta({},wa);mi[ka]=ta(ta(ta(ta({},{"fa-duotone":"duotone"}),wa[ka]),Ua),Ya);var gi=hi(mi),xi=ta({},{chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}});xi[ka]=ta(ta(ta(ta({},{duotone:"fad"}),xi[ka]),Ga),Va);var vi=hi(xi),yi=ta({},Za);yi[ka]=ta(ta({},yi[ka]),{fak:"fa-kit"});var bi=hi(yi),wi=ta({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}});wi[ka]=ta(ta({},wi[ka]),{"fa-kit":"fak"}),hi(wi);var ji=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ki="fa-layers-text",zi=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;hi(ta({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}}));var Si=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ci={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$i=[].concat(na(["kit"]),na(ni)),Ai=ha.FontAwesomeConfig||{};if(ma&&"function"==typeof ma.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=ra(e,2),r=t[0],n=t[1],o=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=ma.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(r));null!=o&&(Ai[n]=o)})}var Pi={styleDefault:"solid",familyDefault:ka,cssPrefix:"fa",replacementClass:ai,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ai.familyPrefix&&(Ai.cssPrefix=Ai.familyPrefix);var Ei=ta(ta({},Pi),Ai);Ei.autoReplaceSvg||(Ei.observeMutations=!1);var Ni={};Object.keys(Pi).forEach(function(e){Object.defineProperty(Ni,e,{enumerable:!0,set:function(t){Ei[e]=t,Ii.forEach(function(e){return e(Ni)})},get:function(){return Ei[e]}})}),Object.defineProperty(Ni,"familyPrefix",{enumerable:!0,set:function(e){Ei.cssPrefix=e,Ii.forEach(function(e){return e(Ni)})},get:function(){return Ei.cssPrefix}}),ha.FontAwesomeConfig=Ni;var Ii=[];var Ti=16,Oi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mi(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function Di(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function Fi(e){return e.classList?Di(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Li(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ri(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function _i(e){return e.size!==Oi.size||e.x!==Oi.x||e.y!==Oi.y||e.rotate!==Oi.rotate||e.flipX||e.flipY}function Bi(){var e="fa",t=ai,r=Ni.cssPrefix,n=Ni.replacementClass,o=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";\n  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";\n  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}';if(r!==e||n!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(a,".".concat(r,"-")).replace(i,"--".concat(r,"-")).replace(s,".".concat(n))}return o}var Hi=!1;function Wi(){Ni.autoAddCss&&!Hi&&(!function(e){if(e&&ya){var t=ma.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=ma.head.childNodes,n=null,o=r.length-1;o>-1;o--){var a=r[o],i=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=a)}ma.head.insertBefore(t,n)}}(Bi()),Hi=!0)}var Ui={mixout:function(){return{dom:{css:Bi,insertCss:Wi}}},hooks:function(){return{beforeDOMElementCreation:function(){Wi()},beforeI2svg:function(){Wi()}}}},Yi=ha||{};Yi[oi]||(Yi[oi]={}),Yi[oi].styles||(Yi[oi].styles={}),Yi[oi].hooks||(Yi[oi].hooks={}),Yi[oi].shims||(Yi[oi].shims=[]);var qi=Yi[oi],Gi=[],Vi=function(){ma.removeEventListener("DOMContentLoaded",Vi),Ji=1,Gi.map(function(e){return e()})},Ji=!1;function Xi(e){var t=e.tag,r=e.attributes,n=void 0===r?{}:r,o=e.children,a=void 0===o?[]:o;return"string"==typeof e?Li(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(Li(e[r]),'" ')},"").trim()}(n),">").concat(a.map(Xi).join(""),"</").concat(t,">")}function Ki(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}ya&&((Ji=(ma.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ma.readyState))||ma.addEventListener("DOMContentLoaded",Vi));var Qi=function(e,t,r,n){var o,a,i,s=Object.keys(e),l=s.length,c=void 0!==n?function(e,t){return function(r,n,o,a){return e.call(t,r,n,o,a)}}(t,n):t;for(void 0===r?(o=1,i=e[s[0]]):(o=0,i=r);o<l;o++)i=c(i,e[a=s[o]],a,e);return i};function Zi(e){return 1!==na(e).length?null:e.codePointAt(0).toString(16)}function es(e){return Object.keys(e).reduce(function(t,r){var n=e[r];return!!n.icon?t[n.iconName]=n.icon:t[r]=n,t},{})}function ts(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,n=void 0!==r&&r,o=es(t);"function"!=typeof qi.hooks.addPack||n?qi.styles[e]=ta(ta({},qi.styles[e]||{}),o):qi.hooks.addPack(e,es(t)),"fas"===e&&ts("fa",t)}var rs=qi.styles,ns=qi.shims,os=Object.keys(bi),as=os.reduce(function(e,t){return e[t]=Object.keys(bi[t]),e},{}),is=null,ss={},ls={},cs={},ds={},us={};function fs(e,t){var r,n=t.split("-"),o=n[0],a=n.slice(1).join("-");return o!==e||""===a||(r=a,~$i.indexOf(r))?null:a}var ps,hs=function(){var e=function(e){return Qi(rs,function(t,r,n){return t[n]=Qi(r,e,{}),t},{})};ss=e(function(e,t,r){(t[3]&&(e[t[3]]=r),t[2])&&t[2].filter(function(e){return"number"==typeof e}).forEach(function(t){e[t.toString(16)]=r});return e}),ls=e(function(e,t,r){(e[r]=r,t[2])&&t[2].filter(function(e){return"string"==typeof e}).forEach(function(t){e[t]=r});return e}),us=e(function(e,t,r){var n=t[2];return e[r]=r,n.forEach(function(t){e[t]=r}),e});var t="far"in rs||Ni.autoFetchSvg,r=Qi(ns,function(e,r){var n=r[0],o=r[1],a=r[2];return"far"!==o||t||(o="fas"),"string"==typeof n&&(e.names[n]={prefix:o,iconName:a}),"number"==typeof n&&(e.unicodes[n.toString(16)]={prefix:o,iconName:a}),e},{names:{},unicodes:{}});cs=r.names,ds=r.unicodes,is=ys(Ni.styleDefault,{family:Ni.familyDefault})};function ms(e,t){return(ss[e]||{})[t]}function gs(e,t){return(us[e]||{})[t]}function xs(e){return cs[e]||{prefix:null,iconName:null}}function vs(){return is}ps=function(e){is=ys(e.styleDefault,{family:Ni.familyDefault})},Ii.push(ps),hs();function ys(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).family,r=void 0===t?ka:t,n=gi[r][e];if(r===za&&!e)return"fad";var o=vi[r][e]||vi[r][n],a=e in qi.styles?e:null;return o||a||null}function bs(e){return e.sort().filter(function(e,t,r){return r.indexOf(e)===t})}var ws=ei.concat(Wa);function js(e){var t,r,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).skipLookups,o=void 0!==n&&n,a=null,i=bs(e.filter(function(e){return ws.includes(e)})),s=bs(e.filter(function(e){return!ws.includes(e)})),l=ra(i.filter(function(e){return a=e,!ja.includes(e)}),1)[0],c=void 0===l?null:l,d=function(e){var t=ka,r=os.reduce(function(e,t){return e[t]="".concat(Ni.cssPrefix,"-").concat(t),e},{});return Ba.forEach(function(n){(e.includes(r[n])||e.some(function(e){return as[n].includes(e)}))&&(t=n)}),t}(i),u=ta(ta({},(t=[],r=null,s.forEach(function(e){var n=fs(Ni.cssPrefix,e);n?r=n:e&&t.push(e)}),{iconName:r,rest:t})),{},{prefix:ys(c,{family:d})});return ta(ta(ta({},u),function(e){var t=e.values,r=e.family,n=e.canonical,o=e.givenPrefix,a=void 0===o?"":o,i=e.styles,s=void 0===i?{}:i,l=e.config,c=void 0===l?{}:l,d=r===za,u=t.includes("fa-duotone")||t.includes("fad"),f="duotone"===c.familyDefault,p="fad"===n.prefix||"fa-duotone"===n.prefix;!d&&(u||f||p)&&(n.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab");if(!n.prefix&&ks.includes(r)){if(Object.keys(s).find(function(e){return zs.includes(e)})||c.autoFetchSvg){var h=Ha.get(r).defaultShortPrefixId;n.prefix=h,n.iconName=gs(n.prefix,n.iconName)||n.iconName}}"fa"!==n.prefix&&"fa"!==a||(n.prefix=vs()||"fas");return n}({values:e,family:d,styles:rs,config:Ni,canonical:u,givenPrefix:a})),function(e,t,r){var n=r.prefix,o=r.iconName;if(e||!n||!o)return{prefix:n,iconName:o};var a="fa"===t?xs(o):{},i=gs(n,o);o=a.iconName||i||o,"far"!==(n=a.prefix||n)||rs.far||!rs.fas||Ni.autoFetchSvg||(n="fas");return{prefix:n,iconName:o}}(o,a,u))}var ks=Ba.filter(function(e){return e!==ka||e!==za}),zs=Object.keys(Za).filter(function(e){return e!==ka}).map(function(e){return Object.keys(Za[e])}).flat();var Ss=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}},t=[{key:"add",value:function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(t){e.definitions[t]=ta(ta({},e.definitions[t]||{}),o[t]),ts(t,o[t]);var r=bi[ka][t];r&&ts(r,o[t]),hs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(t){var n=r[t],o=n.prefix,a=n.iconName,i=n.icon,s=i[2];e[o]||(e[o]={}),s.length>0&&s.forEach(function(t){"string"==typeof t&&(e[o][t]=i)}),e[o][a]=i}),e}}],t&&Ko(e.prototype,t),r&&Ko(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}(),Cs=[],$s={},As={},Ps=Object.keys(As);function Es(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return($s[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Ns(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];($s[e]||[]).forEach(function(e){e.apply(null,r)})}function Is(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return As[e]?As[e].apply(null,t):void 0}function Ts(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,r=e.prefix||vs();if(t)return t=gs(r,t)||t,Ki(Os.definitions,r,t)||Ki(qi.styles,r,t)}var Os=new Ss,Ms={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ya?(Ns("beforeI2svg",e),Is("pseudoElements2svg",e),Is("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.autoReplaceSvgRoot;!1===Ni.autoReplaceSvg&&(Ni.autoReplaceSvg=!0),Ni.observeMutations=!0,e=function(){Fs({autoReplaceSvgRoot:r}),Ns("watch",t)},ya&&(Ji?setTimeout(e,0):Gi.push(e))}},Ds={noAuto:function(){Ni.autoReplaceSvg=!1,Ni.observeMutations=!1,Ns("noAuto")},config:Ni,dom:Ms,parse:{icon:function(e){if(null===e)return null;if("object"===aa(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:gs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],r=ys(e[0]);return{prefix:r,iconName:gs(r,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(Ni.cssPrefix,"-"))>-1||e.match(ji))){var n=js(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||vs(),iconName:gs(n.prefix,n.iconName)||n.iconName}}if("string"==typeof e){var o=vs();return{prefix:o,iconName:gs(o,e)||e}}}},library:Os,findIconDefinition:Ts,toHtml:Xi},Fs=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,t=void 0===e?ma:e;(Object.keys(qi.styles).length>0||Ni.autoFetchSvg)&&ya&&Ni.autoReplaceSvg&&Ds.dom.i2svg({node:t})};function Ls(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Xi(e)})}}),Object.defineProperty(e,"node",{get:function(){if(ya){var t=ma.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Rs(e){var t=e.icons,r=t.main,n=t.mask,o=e.prefix,a=e.iconName,i=e.transform,s=e.symbol,l=e.maskId,c=e.extra,d=e.watchable,u=void 0!==d&&d,f=n.found?n:r,p=f.width,h=f.height,m=[Ni.replacementClass,a?"".concat(Ni.cssPrefix,"-").concat(a):""].filter(function(e){return-1===c.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(c.classes).join(" "),g={children:[],attributes:ta(ta({},c.attributes),{},{"data-prefix":o,"data-icon":a,class:m,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(h)})};(function(e){return["aria-label","aria-labelledby","title","role"].some(function(t){return t in e})})(c.attributes)||c.attributes["aria-hidden"]||(g.attributes["aria-hidden"]="true"),u&&(g.attributes[ii]="");var x=ta(ta({},g),{},{prefix:o,iconName:a,main:r,mask:n,maskId:l,transform:i,symbol:s,styles:ta({},c.styles)}),v=n.found&&r.found?Is("generateAbstractMask",x)||{children:[],attributes:{}}:Is("generateAbstractIcon",x)||{children:[],attributes:{}},y=v.children,b=v.attributes;return x.children=y,x.attributes=b,s?function(e){var t=e.prefix,r=e.iconName,n=e.children,o=e.attributes,a=e.symbol,i=!0===a?"".concat(t,"-").concat(Ni.cssPrefix,"-").concat(r):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ta(ta({},o),{},{id:i}),children:n}]}]}(x):function(e){var t=e.children,r=e.main,n=e.mask,o=e.attributes,a=e.styles,i=e.transform;if(_i(i)&&r.found&&!n.found){var s={x:r.width/r.height/2,y:.5};o.style=Ri(ta(ta({},a),{},{"transform-origin":"".concat(s.x+i.x/16,"em ").concat(s.y+i.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}(x)}function _s(e){var t=e.content,r=e.width,n=e.height,o=e.transform,a=e.extra,i=e.watchable,s=void 0!==i&&i,l=ta(ta({},a.attributes),{},{class:a.classes.join(" ")});s&&(l[ii]="");var c=ta({},a.styles);_i(o)&&(c.transform=function(e){var t=e.transform,r=e.width,n=void 0===r?16:r,o=e.height,a=void 0===o?16:o,i=e.startCentered,s=void 0!==i&&i,l="";return l+=s&&ba?"translate(".concat(t.x/Ti-n/2,"em, ").concat(t.y/Ti-a/2,"em) "):s?"translate(calc(-50% + ".concat(t.x/Ti,"em), calc(-50% + ").concat(t.y/Ti,"em)) "):"translate(".concat(t.x/Ti,"em, ").concat(t.y/Ti,"em) "),l+="scale(".concat(t.size/Ti*(t.flipX?-1:1),", ").concat(t.size/Ti*(t.flipY?-1:1),") "),l+"rotate(".concat(t.rotate,"deg) ")}({transform:o,startCentered:!0,width:r,height:n}),c["-webkit-transform"]=c.transform);var d=Ri(c);d.length>0&&(l.style=d);var u=[];return u.push({tag:"span",attributes:l,children:[t]}),u}var Bs=qi.styles;function Hs(e){var t=e[0],r=e[1],n=ra(e.slice(4),1)[0];return{found:!0,width:t,height:r,icon:Array.isArray(n)?{tag:"g",attributes:{class:"".concat(Ni.cssPrefix,"-").concat(Ci.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ni.cssPrefix,"-").concat(Ci.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(Ni.cssPrefix,"-").concat(Ci.PRIMARY),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}}}}var Ws={found:!1,width:512,height:512};function Us(e,t){var r=t;return"fa"===t&&null!==Ni.styleDefault&&(t=vs()),new Promise(function(n,o){if("fa"===r){var a=xs(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Bs[t]&&Bs[t][e])return n(Hs(Bs[t][e]));!function(e,t){pi||Ni.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),n(ta(ta({},Ws),{},{icon:Ni.showMissingIcons&&e&&Is("missingIconAbstract")||{}}))})}var Ys=function(){},qs=Ni.measurePerformance&&xa&&xa.mark&&xa.measure?xa:{mark:Ys,measure:Ys},Gs='FA "7.1.0"',Vs=function(e){qs.mark("".concat(Gs," ").concat(e," ends")),qs.measure("".concat(Gs," ").concat(e),"".concat(Gs," ").concat(e," begins"),"".concat(Gs," ").concat(e," ends"))},Js=function(e){return qs.mark("".concat(Gs," ").concat(e," begins")),function(){return Vs(e)}},Xs=function(){};function Ks(e){return"string"==typeof(e.getAttribute?e.getAttribute(ii):null)}function Qs(e){return ma.createElementNS("http://www.w3.org/2000/svg",e)}function Zs(e){return ma.createElement(e)}function el(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ceFn,r=void 0===t?"svg"===e.tag?Qs:Zs:t;if("string"==typeof e)return ma.createTextNode(e);var n=r(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(el(e,{ceFn:r}))}),n}var tl={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(el(e),t)}),null===t.getAttribute(ii)&&Ni.keepOriginalSource){var r=ma.createComment(function(e){var t=" ".concat(e.outerHTML," ");return"".concat(t,"Font Awesome fontawesome.com ")}(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){var t=e[0],r=e[1];if(~Fi(t).indexOf(Ni.replacementClass))return tl.replace(e);var n=new RegExp("".concat(Ni.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(e,t){return t===Ni.replacementClass||t.match(n)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),0===o.toNode.length?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(e){return Xi(e)}).join("\n");t.setAttribute(ii,""),t.innerHTML=a}};function rl(e){e()}function nl(e,t){var r="function"==typeof t?t:Xs;if(0===e.length)r();else{var n=rl;"async"===Ni.mutateApproach&&(n=ha.requestAnimationFrame||rl),n(function(){var t=!0===Ni.autoReplaceSvg?tl.replace:tl[Ni.autoReplaceSvg]||tl.replace,n=Js("mutate");e.map(t),n(),r()})}}var ol=!1;function al(){ol=!0}function il(){ol=!1}var sl=null;function ll(e){if(ga&&Ni.observeMutations){var t=e.treeCallback,r=void 0===t?Xs:t,n=e.nodeCallback,o=void 0===n?Xs:n,a=e.pseudoElementsCallback,i=void 0===a?Xs:a,s=e.observeMutationsRoot,l=void 0===s?ma:s;sl=new ga(function(e){if(!ol){var t=vs();Di(e).forEach(function(e){if("childList"===e.type&&e.addedNodes.length>0&&!Ks(e.addedNodes[0])&&(Ni.searchPseudoElements&&i(e.target),r(e.target)),"attributes"===e.type&&e.target.parentNode&&Ni.searchPseudoElements&&i([e.target],!0),"attributes"===e.type&&Ks(e.target)&&~Si.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){var t=e.getAttribute?e.getAttribute(li):null,r=e.getAttribute?e.getAttribute(ci):null;return t&&r}(e.target)){var n=js(Fi(e.target)),a=n.prefix,s=n.iconName;e.target.setAttribute(li,a||t),s&&e.target.setAttribute(ci,s)}else(l=e.target)&&l.classList&&l.classList.contains&&l.classList.contains(Ni.replacementClass)&&o(e.target);var l})}}),ya&&sl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function cl(e){var t,r,n=e.getAttribute("data-prefix"),o=e.getAttribute("data-icon"),a=void 0!==e.innerText?e.innerText.trim():"",i=js(Fi(e));return i.prefix||(i.prefix=vs()),n&&o&&(i.prefix=n,i.iconName=o),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=(t=i.prefix,r=e.innerText,(ls[t]||{})[r]||ms(i.prefix,Zi(e.innerText)))),!i.iconName&&Ni.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function dl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},r=cl(e),n=r.iconName,o=r.prefix,a=r.rest,i=function(e){return Di(e.attributes).reduce(function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e},{})}(e),s=Es("parseNodeAttributes",{},e),l=t.styleParser?function(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(e,t){var r=t.split(":"),n=r[0],o=r.slice(1);return n&&o.length>0&&(e[n]=o.join(":").trim()),e},{})),r}(e):[];return ta({iconName:n,prefix:o,transform:Oi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:i}},s)}var ul=qi.styles;function fl(e){var t="nest"===Ni.autoReplaceSvg?dl(e,{styleParser:!1}):dl(e);return~t.extra.classes.indexOf(ki)?Is("generateLayersText",e,t):Is("generateSvgReplacementMutation",e,t)}function pl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!ya)return Promise.resolve();var r=ma.documentElement.classList,n=function(e){return r.add("".concat(di,"-").concat(e))},o=function(e){return r.remove("".concat(di,"-").concat(e))},a=Ni.autoFetchSvg?[].concat(na(Wa),na(ei)):ja.concat(Object.keys(ul));a.includes("fa")||a.push("fa");var i=[".".concat(ki,":not([").concat(ii,"])")].concat(a.map(function(e){return".".concat(e,":not([").concat(ii,"])")})).join(", ");if(0===i.length)return Promise.resolve();var s=[];try{s=Di(e.querySelectorAll(i))}catch(d){}if(!(s.length>0))return Promise.resolve();n("pending"),o("complete");var l=Js("onTree"),c=s.reduce(function(e,t){try{var r=fl(t);r&&e.push(r)}catch(d){pi||"MissingIcon"===d.name&&console.error(d)}return e},[]);return new Promise(function(e,r){Promise.all(c).then(function(r){nl(r,function(){n("active"),n("complete"),o("pending"),"function"==typeof t&&t(),l(),e()})}).catch(function(e){l(),r(e)})})}function hl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;fl(e).then(function(e){e&&nl([e],t)})}var ml=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?Oi:r,o=t.symbol,a=void 0!==o&&o,i=t.mask,s=void 0===i?null:i,l=t.maskId,c=void 0===l?null:l,d=t.classes,u=void 0===d?[]:d,f=t.attributes,p=void 0===f?{}:f,h=t.styles,m=void 0===h?{}:h;if(e){var g=e.prefix,x=e.iconName,v=e.icon;return Ls(ta({type:"icon"},e),function(){return Ns("beforeDOMElementCreation",{iconDefinition:e,params:t}),Rs({icons:{main:Hs(v),mask:s?Hs(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:x,transform:ta(ta({},Oi),n),symbol:a,maskId:c,extra:{attributes:p,styles:m,classes:u}})})}},gl={mixout:function(){return{icon:(e=ml,function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:Ts(t||{}),o=r.mask;return o&&(o=(o||{}).icon?o:Ts(o||{})),e(n,ta(ta({},r),{},{mask:o}))})};var e},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=pl,e.nodeCallback=hl,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,r=void 0===t?ma:t,n=e.callback;return pl(r,void 0===n?function(){}:n)},e.generateSvgReplacementMutation=function(e,t){var r=t.iconName,n=t.prefix,o=t.transform,a=t.symbol,i=t.mask,s=t.maskId,l=t.extra;return new Promise(function(t,c){Promise.all([Us(r,n),i.iconName?Us(i.iconName,i.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(i){var c=ra(i,2),d=c[0],u=c[1];t([e,Rs({icons:{main:d,mask:u},prefix:n,iconName:r,transform:o,symbol:a,maskId:s,extra:l,watchable:!0})])}).catch(c)})},e.generateAbstractIcon=function(e){var t,r=e.children,n=e.attributes,o=e.main,a=e.transform,i=Ri(e.styles);return i.length>0&&(n.style=i),_i(a)&&(t=Is("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(t||o.icon),{children:r,attributes:n}}}},xl={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.classes,n=void 0===r?[]:r;return Ls({type:"layer"},function(){Ns("beforeDOMElementCreation",{assembler:e,params:t});var r=[];return e(function(e){Array.isArray(e)?e.map(function(e){r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(Ni.cssPrefix,"-layers")].concat(na(n)).join(" ")},children:r}]})}}}},vl={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.title,n=void 0===r?null:r,o=t.classes,a=void 0===o?[]:o,i=t.attributes,s=void 0===i?{}:i,l=t.styles,c=void 0===l?{}:l;return Ls({type:"counter",content:e},function(){return Ns("beforeDOMElementCreation",{content:e,params:t}),function(e){var t=e.content,r=e.extra,n=ta(ta({},r.attributes),{},{class:r.classes.join(" ")}),o=Ri(r.styles);o.length>0&&(n.style=o);var a=[];return a.push({tag:"span",attributes:n,children:[t]}),a}({content:e.toString(),title:n,extra:{attributes:s,styles:c,classes:["".concat(Ni.cssPrefix,"-layers-counter")].concat(na(a))}})})}}}},yl={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?Oi:r,o=t.classes,a=void 0===o?[]:o,i=t.attributes,s=void 0===i?{}:i,l=t.styles,c=void 0===l?{}:l;return Ls({type:"text",content:e},function(){return Ns("beforeDOMElementCreation",{content:e,params:t}),_s({content:e,transform:ta(ta({},Oi),n),extra:{attributes:s,styles:c,classes:["".concat(Ni.cssPrefix,"-layers-text")].concat(na(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var r=t.transform,n=t.extra,o=null,a=null;if(ba){var i=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();o=s.width/i,a=s.height/i}return Promise.resolve([e,_s({content:e.innerHTML,width:o,height:a,transform:r,extra:n,watchable:!0})])}}},bl=new RegExp('"',"ug"),wl=[1105920,1112319],jl=ta(ta(ta(ta({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),kl=Object.keys(jl).reduce(function(e,t){return e[t.toLowerCase()]=jl[t],e},{}),zl=Object.keys(kl).reduce(function(e,t){var r=kl[t];return e[t]=r[900]||na(Object.entries(r))[0][1],e},{});function Sl(e,t){var r="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(function(n,o){if(null!==e.getAttribute(r))return n();var a,i,s,l=Di(e.children).filter(function(e){return e.getAttribute(si)===t})[0],c=ha.getComputedStyle(e,t),d=c.getPropertyValue("font-family"),u=d.match(zi),f=c.getPropertyValue("font-weight"),p=c.getPropertyValue("content");if(l&&!u)return e.removeChild(l),n();if(u&&"none"!==p&&""!==p){var h=c.getPropertyValue("content"),m=function(e,t){var r=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),o=isNaN(n)?"normal":n;return(kl[r]||{})[o]||zl[r]}(d,f),g=function(e){return Zi(na(e.replace(bl,""))[0]||"")}(h),x=u[0].startsWith("FontAwesome"),v=function(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),r=e.getPropertyValue("content").replace(bl,""),n=r.codePointAt(0),o=n>=wl[0]&&n<=wl[1],a=2===r.length&&r[0]===r[1];return o||a||t}(c),y=ms(m,g),b=y;if(x){var w=(i=ds[a=g],s=ms("fas",a),i||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null});w.iconName&&w.prefix&&(y=w.iconName,m=w.prefix)}if(!y||v||l&&l.getAttribute(li)===m&&l.getAttribute(ci)===b)n();else{e.setAttribute(r,b),l&&e.removeChild(l);var j={iconName:null,prefix:null,transform:Oi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},k=j.extra;k.attributes[si]=t,Us(y,m).then(function(o){var a=Rs(ta(ta({},j),{},{icons:{main:o,mask:{prefix:null,iconName:null,rest:[]}},prefix:m,iconName:b,extra:k,watchable:!0})),i=ma.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(i,e.firstChild):e.appendChild(i),i.outerHTML=a.map(function(e){return Xi(e)}).join("\n"),e.removeAttribute(r),n()}).catch(o)}}else n()})}function Cl(e){return Promise.all([Sl(e,"::before"),Sl(e,"::after")])}function $l(e){return!(e.parentNode===document.head||~ui.indexOf(e.tagName.toUpperCase())||e.getAttribute(si)||e.parentNode&&"svg"===e.parentNode.tagName)}var Al=function(e){return!!e&&fi.some(function(t){return e.includes(t)})},Pl=function(e){if(!e)return[];var t,r=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()}),o=Qo(n=n.flatMap(function(e){return e.includes("(")?e:e.split(",").map(function(e){return e.trim()})}));try{for(o.s();!(t=o.n()).done;){var a=t.value;if(Al(a)){var i=fi.reduce(function(e,t){return e.replace(t,"")},a);""!==i&&"*"!==i&&r.add(i)}}}catch(s){o.e(s)}finally{o.f()}return r};function El(e){if(ya){var t;if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])t=e;else if(Ni.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r,n=new Set,o=Qo(document.styleSheets);try{for(o.s();!(r=o.n()).done;){var a=r.value;try{var i,s=Qo(a.cssRules);try{for(s.s();!(i=s.n()).done;){var l,c=i.value,d=Qo(Pl(c.selectorText));try{for(d.s();!(l=d.n()).done;){var u=l.value;n.add(u)}}catch(p){d.e(p)}finally{d.f()}}}catch(p){s.e(p)}finally{s.f()}}catch(h){Ni.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(a.href," (").concat(h.message,')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))}}}catch(p){o.e(p)}finally{o.f()}if(!n.size)return;var f=Array.from(n).join(", ");try{t=e.querySelectorAll(f)}catch(m){}}return new Promise(function(e,r){var n=Di(t).filter($l).map(Cl),o=Js("searchPseudoElements");al(),Promise.all(n).then(function(){o(),il(),e()}).catch(function(){o(),il(),r()})})}}var Nl=!1,Il=function(e){return e.toLowerCase().split(" ").reduce(function(e,t){var r=t.toLowerCase().split("-"),n=r[0],o=r.slice(1).join("-");if(n&&"h"===o)return e.flipX=!0,e;if(n&&"v"===o)return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(n){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Tl={mixout:function(){return{parse:{transform:function(e){return Il(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-transform");return r&&(e.transform=Il(r)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,r=e.transform,n=e.containerWidth,o=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*r.x,", ").concat(32*r.y,") "),s="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),c={outer:a,inner:{transform:"".concat(i," ").concat(s," ").concat(l)},path:{transform:"translate(".concat(o/2*-1," -256)")}};return{tag:"g",attributes:ta({},c.outer),children:[{tag:"g",attributes:ta({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:ta(ta({},t.icon.attributes),c.path)}]}]}}}},Ol={x:0,y:0,width:"100%",height:"100%"};function Ml(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var Dl,Fl={hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-mask"),n=r?js(r.split(" ").map(function(e){return e.trim()})):{prefix:null,iconName:null,rest:[]};return n.prefix||(n.prefix=vs()),e.mask=n,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t,r=e.children,n=e.attributes,o=e.main,a=e.mask,i=e.maskId,s=e.transform,l=o.width,c=o.icon,d=a.width,u=a.icon,f=function(e){var t=e.transform,r=e.containerWidth,n=e.iconWidth,o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(32*t.x,", ").concat(32*t.y,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:o,inner:{transform:"".concat(a," ").concat(i," ").concat(s)},path:{transform:"translate(".concat(n/2*-1," -256)")}}}({transform:s,containerWidth:d,iconWidth:l}),p={tag:"rect",attributes:ta(ta({},Ol),{},{fill:"white"})},h=c.children?{children:c.children.map(Ml)}:{},m={tag:"g",attributes:ta({},f.inner),children:[Ml(ta({tag:c.tag,attributes:ta(ta({},c.attributes),f.path)},h))]},g={tag:"g",attributes:ta({},f.outer),children:[m]},x="mask-".concat(i||Mi()),v="clip-".concat(i||Mi()),y={tag:"mask",attributes:ta(ta({},Ol),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(t=u,"g"===t.tag?t.children:[t])},y]};return r.push(b,{tag:"rect",attributes:ta({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")")},Ol)}),{children:r,attributes:n}}}};Dl={mixoutsTo:Ds}.mixoutsTo,Cs=[Ui,gl,xl,vl,yl,{hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=El,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,r=void 0===t?ma:t;Ni.searchPseudoElements&&El(r)}}},{mixout:function(){return{dom:{unwatch:function(){al(),Nl=!0}}}},hooks:function(){return{bootstrap:function(){ll(Es("mutationObserverCallbacks",{}))},noAuto:function(){sl&&sl.disconnect()},watch:function(e){var t=e.observeMutationsRoot;Nl?il():ll(Es("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},Tl,Fl,{provides:function(e){var t=!1;ha.matchMedia&&(t=ha.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:ta(ta({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=ta(ta({},n),{},{attributeName:"opacity"}),a={tag:"circle",attributes:ta(ta({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:ta(ta({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ta(ta({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(a),e.push({tag:"path",attributes:ta(ta({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:ta(ta({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:ta(ta({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ta(ta({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-symbol"),n=null!==r&&(""===r||r);return e.symbol=n,e}}}}],$s={},Object.keys(As).forEach(function(e){-1===Ps.indexOf(e)&&delete As[e]}),Cs.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){"function"==typeof t[e]&&(Dl[e]=t[e]),"object"===aa(t[e])&&Object.keys(t[e]).forEach(function(r){Dl[e]||(Dl[e]={}),Dl[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){$s[e]||($s[e]=[]),$s[e].push(r[e])})}e.provides&&e.provides(As)});var Ll=Ds.config,Rl=Ds.parse,_l=Ds.icon;function Bl(e){return t=e,(t-=0)==t?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():"")).charAt(0).toLowerCase()+e.slice(1);var t}function Hl(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Wl=new Map;function Ul(e){if(Wl.has(e))return Wl.get(e);const t={};let r=0;const n=e.length;for(;r<n;){const o=e.indexOf(";",r),a=-1===o?n:o,i=e.slice(r,a).trim();if(i){const e=i.indexOf(":");if(e>0){const r=i.slice(0,e).trim(),n=i.slice(e+1).trim();if(r&&n){const e=Bl(r);t[e.startsWith("webkit")?Hl(e):e]=n}}}r=a+1}if(1e3===Wl.size){const e=Wl.keys().next().value;e&&Wl.delete(e)}return Wl.set(e,t),t}var Yl=function e(t,r,n={}){if("string"==typeof r)return r;const o=(r.children||[]).map(r=>e(t,r)),a=r.attributes||{},i={};for(const[d,u]of Object.entries(a))switch(!0){case"class"===d:i.className=u;break;case"style"===d:i.style=Ul(String(u));break;case d.startsWith("aria-"):case d.startsWith("data-"):i[d.toLowerCase()]=u;break;default:i[Bl(d)]=u}const{style:s,"aria-label":l,...c}=n;return s&&(i.style=i.style?{...i.style,...s}:s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),t(r.tag,{...c,...i},...o)}.bind(null,r.createElement),ql=(t,r)=>{const n=e.useId();return t||(r?n:void 0)},Gl="searchPseudoElementsFullScan"in Ll?"7.0.0":"6.0.0",Vl=Number.parseInt(Gl)>=7,Jl="fa",Xl="fa-beat",Kl="fa-fade",Ql="fa-beat-fade",Zl="fa-bounce",ec="fa-shake",tc="fa-spin",rc="fa-spin-pulse",nc="fa-spin-reverse",oc="fa-pulse",ac={left:"fa-pull-left",right:"fa-pull-right"},ic={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},sc={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},lc="fa-border",cc="fa-fw",dc="fa-flip",uc="fa-flip-horizontal",fc="fa-flip-vertical",pc="fa-inverse",hc="fa-rotate-by",mc="fa-swap-opacity",gc="fa-width-auto";function xc(e){const t=Ll.cssPrefix||Ll.familyPrefix||Jl;return t===Jl?e:e.replace(new RegExp(`(?<=^|\\s)${Jl}-`,"g"),`${t}-`)}function vc(e){if(e)return(e=>"object"==typeof e&&"icon"in e&&!!e.icon)(e)?e:Rl.icon(e)}var yc=new class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t="undefined"!=typeof process&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}}("FontAwesomeIcon"),bc={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},wc=new Set(Object.keys(bc)),jc=r.forwardRef((e,t)=>{const r={...bc,...e},{icon:n,mask:o,symbol:a,title:i,titleId:s,maskId:l,transform:c}=r,d=ql(l,Boolean(o)),u=ql(s,Boolean(i)),f=vc(n);if(!f)return yc.error("Icon lookup is undefined",n),null;const p=function(e){const{beat:t,fade:r,beatFade:n,bounce:o,shake:a,spin:i,spinPulse:s,spinReverse:l,pulse:c,fixedWidth:d,inverse:u,border:f,flip:p,size:h,rotation:m,pull:g,swapOpacity:x,rotateBy:v,widthAuto:y,className:b}=e,w=[];return b&&w.push(...b.split(" ")),t&&w.push(Xl),r&&w.push(Kl),n&&w.push(Ql),o&&w.push(Zl),a&&w.push(ec),i&&w.push(tc),l&&w.push(nc),s&&w.push(rc),c&&w.push(oc),d&&w.push(cc),u&&w.push(pc),f&&w.push(lc),!0===p&&w.push(dc),"horizontal"!==p&&"both"!==p||w.push(uc),"vertical"!==p&&"both"!==p||w.push(fc),null!=h&&w.push(sc[h]),null!=m&&0!==m&&w.push(ic[m]),null!=g&&w.push(ac[g]),x&&w.push(mc),Vl?(v&&w.push(hc),y&&w.push(gc),(Ll.cssPrefix||Ll.familyPrefix||Jl)===Jl?w:w.map(xc)):w}(r),h="string"==typeof c?Rl.transform(c):c,m=vc(o),g=_l(f,{...p.length>0&&{classes:p},...h&&{transform:h},...m&&{mask:m},symbol:a,title:i,titleId:u,maskId:d});if(!g)return yc.error("Could not find icon",f),null;const{abstract:x}=g,v={ref:t};for(const y of function(e){return Object.keys(e)}(r))wc.has(y)||(v[y]=r[y]);return Yl(x[0],v)});jc.displayName="FontAwesomeIcon";const kc=()=>{a();const{isLoading:t,startLoading:r,stopLoading:n}=ae(),o=an(),i=(null==o?void 0:o.currentBoard)||Array(9).fill().map(()=>Array(9).fill(0)),s=(null==o?void 0:o.originalPuzzle)||null,l=(null==o?void 0:o.selectedCell)||null,c=(null==o?void 0:o.difficulty)||"medium",d=(null==o?void 0:o.timeElapsed)||0,u=(null==o?void 0:o.errorCount)||0,f=(null==o?void 0:o.isTimerActive)??!0,p=(null==o?void 0:o.isPencilMode)??!1,h=(null==o?void 0:o.setSelectedCell)||(()=>{}),m=(null==o?void 0:o.setDifficulty)||(()=>{});null==o||o.setBoard,null==o||o.setSolution,null==o||o.generateNewPuzzle;const g=(null==o?void 0:o.togglePencilMode)||(()=>{}),x=(null==o?void 0:o.toggleTimer)||(()=>{}),v=(null==o?void 0:o.getHint)||(()=>{}),y=(null==o?void 0:o.openSettings)||(()=>{}),w=(null==o?void 0:o.fillCell)||(()=>{}),j=(null==o?void 0:o.fillAllCandidates)||(()=>{}),k=(null==o?void 0:o.undo)||(()=>{}),[z,S]=e.useState(window.innerHeight>window.innerWidth),[C,$]=e.useState(!1),[A,P]=e.useState(!1),[E,N]=e.useState(!1),I=e.useRef(null);e.useRef(null),e.useEffect(()=>{const e=()=>{const e=window.innerWidth<992,t=window.innerHeight>window.innerWidth;S(e&&t)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]);const T=(e,t)=>{h({row:e,col:t})},O=e=>{const t=Math.floor(e/3600),r=Math.floor(e%3600/60),n=e%60;return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`},M=()=>({easy:"简单",medium:"中等",hard:"困难"}[c]||c),D=e=>{if(l)try{w(l.row,l.col,e)}catch(t){console.error("Error updating cell:",t)}},F=()=>{if(l)try{(null==o?void 0:o.clearCell)?o.clearCell(l.row,l.col):console.warn("clearCell function not available in context")}catch(e){console.error("Error clearing cell:",e)}},L=()=>{console.log("handleNewGame 被调用"),$(!0),console.log("设置 showDifficultyModal 为 true")};e.useEffect(()=>{if(!i||i.every(e=>e.every(e=>0===e))){(async()=>{try{if(r&&r("加载游戏..."),null==o?void 0:o.startNewGame)await o.startNewGame(null,c);else if(null==o?void 0:o.generateNewPuzzle)await o.generateNewPuzzle(c);else{console.log("初始化使用离线谜题");try{const{generateOfflinePuzzle:e}=await function(e,t,r){if(!t||0===t.length)return e();const n=document.getElementsByTagName("link");return Promise.all(t.map(e=>{if((e=function(e){return"/"+e}(e))in ao)return;ao[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(r)for(let r=n.length-1;r>=0;r--){const o=n[r];if(o.href===e&&(!t||"stylesheet"===o.rel))return}else if(document.querySelector(`link[href="${e}"]${o}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise((t,r)=>{a.addEventListener("load",t),a.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${e}`)))}):void 0})).then(()=>e()).catch(e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e})}(()=>Promise.resolve().then(()=>sn),void 0);if(e){const t=e(c);(null==o?void 0:o.setCurrentBoard)&&(null==o?void 0:o.setCurrentPuzzle)&&(null==o?void 0:o.setSolution)&&(o.setCurrentPuzzle(t),o.setCurrentBoard((null==t?void 0:t.puzzle)||Array(9).fill().map(()=>Array(9).fill(0))),o.setSolution((null==t?void 0:t.solution)||Array(9).fill().map(()=>Array(9).fill(0))))}}catch(e){console.error("导入离线谜题生成函数失败:",e);const t=Array(9).fill().map(()=>Array(9).fill(0));(null==o?void 0:o.setCurrentBoard)&&(null==o?void 0:o.setCurrentPuzzle)&&(null==o?void 0:o.setSolution)&&(o.setCurrentPuzzle({puzzle:t,solution:t}),o.setCurrentBoard(t),o.setSolution(t))}}}catch(t){console.error("初始化游戏失败:",t)}finally{n&&n()}})()}},[]);const R=()=>{x&&x()},_=()=>{v&&v()},B=()=>{j&&(j(),N(!0),setTimeout(()=>N(!1),2e3))},H=()=>{g&&(g(),P(!0),setTimeout(()=>P(!1),2e3))},W=()=>{y&&y()};return b.jsxs("div",{className:"sudoku-game-container",children:[!f&&b.jsx("div",{className:"pause-overlay",onClick:R,children:b.jsxs("div",{className:"pause-message",children:[b.jsx("h2",{children:"游戏已暂停"}),b.jsx("p",{children:"点击任意位置继续游戏"})]})}),b.jsx("div",{className:"main-content",children:z?b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"nav-block",children:b.jsx(Jo,{onNewGame:L,onPauseTimer:R,onGetHint:_,onToggleNotes:B,onSettings:W,isNotesMode:p,isTimerActive:f})}),b.jsxs("div",{className:"display-block",children:[b.jsxs("div",{children:["错误：",b.jsx("span",{className:"value error-count",style:{color:"#ff4d4d"},children:u})]}),b.jsx("div",{children:M()}),b.jsx("div",{children:O(d)})]}),b.jsx("div",{className:"board-container",ref:I,children:b.jsx(co,{board:i||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:s,selectedCell:l,highlightedCells:(null==o?void 0:o.highlightedCells)||[],incorrectCells:(null==o?void 0:o.incorrectCells)||new Set,onCellClick:T,isPencilMode:p,pencilNotes:(null==o?void 0:o.pencilNotes)||[]})}),b.jsx($o,{onNumberSelect:D,onClearCell:F,onUndo:k,selectedNumber:(null==l?void 0:l.value)||null,isPencilMode:p,onTogglePencilMode:H})]}):b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"top-row",children:[b.jsx("div",{className:"nav-block",children:b.jsx(Jo,{onNewGame:L,onPauseTimer:R,onGetHint:_,onToggleNotes:B,onSettings:W,isNotesMode:p,isTimerActive:f})}),b.jsxs("div",{className:"display-block",children:[b.jsxs("div",{children:["错误：",b.jsx("span",{className:"value error-count",style:{color:"#ff4d4d"},children:u})]}),b.jsx("div",{children:M()}),b.jsx("div",{children:O(d)})]})]}),b.jsxs("div",{className:"bottom-row",children:[b.jsx("div",{className:"board-container",ref:I,children:b.jsx(co,{board:i||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:s,selectedCell:l,highlightedCells:(null==o?void 0:o.highlightedCells)||[],incorrectCells:(null==o?void 0:o.incorrectCells)||new Set,onCellClick:T,isPencilMode:p,pencilNotes:(null==o?void 0:o.pencilNotes)||[]})}),b.jsx("div",{className:"controls-container",children:b.jsx($o,{onNumberSelect:D,onClearCell:F,onUndo:k,selectedNumber:(null==l?void 0:l.value)||null,isPencilMode:p,onTogglePencilMode:H})})]})]})}),t&&b.jsx("div",{className:"loading-overlay",children:b.jsx("div",{children:"加载中..."})}),b.jsx(Lo,{isOpen:C,onClose:()=>$(!1),onSelectDifficulty:async e=>{try{if(console.log(`handleDifficultySelect 被调用，选择难度: ${e}`),$(!1),console.log("关闭难度选择模态框"),r&&(r("生成新谜题..."),console.log("显示加载状态")),console.log("sudokuContext 可用:",!!o),console.log("startNewGame 方法可用:",!!(null==o?void 0:o.startNewGame)),console.log("generateNewPuzzle 方法可用:",!!(null==o?void 0:o.generateNewPuzzle)),null==o?void 0:o.startNewGame)console.log("调用 startNewGame 方法"),await o.startNewGame(null,e),console.log("startNewGame 调用完成");else if(null==o?void 0:o.generateNewPuzzle)console.log("调用 generateNewPuzzle 方法"),await o.generateNewPuzzle(e),console.log("generateNewPuzzle 调用完成");else{console.warn("无法开始新游戏：上下文函数不可用"),console.log("使用备用方案：离线谜题生成器"),m&&m(e);const t=(e=>{console.log(`生成离线谜题，难度: ${e}`);const t={easy:40,medium:50,hard:58,expert:64}[e]||50,r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],n=r.map(e=>[...e]);let o=t;for(;o>0;){const e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());0!==n[e][t]&&(n[e][t]=0,o--)}return{puzzle:n,solution:r}})(e);console.log("离线谜题生成完成"),(null==o?void 0:o.setCurrentBoard)&&(null==o?void 0:o.setCurrentPuzzle)&&(null==o?void 0:o.setSolution)&&(console.log("设置谜题到上下文"),o.setCurrentPuzzle(t),o.setCurrentBoard(t.puzzle),o.setSolution(t.solution)),h(null),console.log("重置选中单元格")}}catch(t){console.error("Error starting new game:",t),console.error("错误详情:",t.message,t.stack)}finally{n&&(n(),console.log("隐藏加载状态"))}},initialDifficulty:c}),A&&b.jsx("div",{className:"pencil-mode-instructions",children:p?"进入铅笔模式，可以添加候选数字":"退出铅笔模式，返回正常输入"}),E&&b.jsx("div",{className:"pencil-mode-instructions",children:"已为所有空白格子计算并填充候选数"})]})},zc=Mr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Sc=Mr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`,Cc=Mr.div`
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
`,$c=Mr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,Ac=Mr.h3`
  font-size: 22px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Pc=Mr.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,Ec=Mr.p`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 15px;
`,Nc=Mr.div`
  width: 100%;
  height: 8px;
  background-color: ${e=>e.theme.background};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`,Ic=Mr.div`
  height: 100%;
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  border-radius: 4px;
  width: ${e=>e.percentage}%;
  transition: width 0.3s ease;
`,Tc=Mr.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Oc=Mr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Mc=Mr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
`,Dc=Mr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Fc=Mr.button`
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
`,Lc=Mr.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Rc=Mr.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,_c=Mr.div`
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  padding: 20px;
`,Bc=Mr.ol`
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Hc=Mr.li`
  font-size: 16px;
  color: ${e=>e.theme.text};
  line-height: 1.6;
`,Wc=Mr.button`
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
`,Uc=()=>{const{theme:t}=re(),{techniquesProgress:r,incrementTechniquePractice:n}=Lr(),[o,a]=e.useState(null),i=[{id:"nakedSingles",name:"唯一候选数 (Naked Single)",description:"最简单的数独技巧，当一个格子只有一个可能的数字时填入该数字。",details:{description:"唯一候选数是最基础的数独解题技巧。当一个空格子所在的行、列和3x3宫格中已经包含了除一个数字外的所有其他数字时，这个空格子只能填入剩下的那个数字。",steps:["观察一个空格子","检查该格子所在的行，列出已经存在的数字","检查该格子所在的列，列出已经存在的数字","检查该格子所在的3x3宫格，列出已经存在的数字","如果以上三个区域已经包含了除一个数字外的所有数字（1-9），则填入剩下的那个数字"],examples:"例如：一个格子所在的行包含数字1、2、3、4、5、6、7、9，所在的列包含数字1、2、3、4、5、6、8，所在的宫格包含数字1、2、3、4、5、7、8、9。那么这个格子只能填入数字8。"}},{id:"hiddenSingles",name:"隐性唯一 (Hidden Single)",description:"当一个数字只能出现在某一行、列或宫格的某个特定格子时，填入该数字。",details:{description:"隐性唯一技巧比唯一候选数稍微复杂一些。当一个数字在某一行、列或3x3宫格中只能出现在一个特定的空格子时，即使该格子可能有其他候选数，但这个数字必须填入该格子。",steps:["选择一个数字（1-9）","检查某一行，确定该数字可能的放置位置","如果在该行中，该数字只能放在一个特定格子，则填入该数字","对每一列和每个3x3宫格重复同样的检查"],examples:"例如：在某一行中，数字5只能放在某个特定格子中，尽管该格子可能还有其他候选数（如2和5），但因为数字5在该行中没有其他可能的放置位置，所以这个格子必须填入5。"}},{id:"nakedPairs",name:"数对 (Naked Pairs)",description:"当两个格子在同一区域（行、列或宫格）中具有相同的两个候选数时，可以排除该区域其他格子中这两个数字。",details:{description:"数对技巧是一种排除法技巧。当在同一行、列或3x3宫格中有两个格子都只有相同的两个候选数时，这两个数字必须分别填入这两个格子，因此可以从该区域的其他格子的候选数中排除这两个数字。",steps:["在同一行、列或3x3宫格中寻找两个格子","确认这两个格子恰好有相同的两个候选数","从该区域的其他格子的候选数中排除这两个数字"],examples:"例如：在同一行中，两个格子都只有候选数3和7。这意味着这两个数字必须分别填入这两个格子，因此该行的其他格子中不可能是3或7，可以从它们的候选数中排除这两个数字。"}},{id:"hiddenPairs",name:"隐性数对 (Hidden Pairs)",description:"当两个数字只能出现在同一区域的两个特定格子中时，可以排除这两个格子中的其他候选数。",details:{description:"隐性数对是数对的一种变体。当在同一行、列或3x3宫格中，两个特定的数字只能出现在两个特定的格子中时，这两个格子必须包含这两个数字，可以排除这两个格子中的其他候选数。",steps:["在同一行、列或3x3宫格中选择两个数字","检查这两个数字是否只能出现在该区域的两个特定格子中","如果是，则可以从这两个格子中排除所有其他候选数，只保留这两个数字"],examples:"例如：在同一行中，数字4和6只能出现在两个特定的格子中，尽管这两个格子可能有其他候选数。这意味着这两个格子必须包含数字4和6，所以可以从这两个格子中删除其他候选数。"}},{id:"pointingPairs",name:"指向对 (Pointing Pairs)",description:"当一个数字在某个3x3宫格中只能出现在同一行或同一列时，可以排除该行或列中其他宫格内该数字的可能性。",details:{description:"指向对技巧利用3x3宫格和行/列的关系进行排除。当在某个3x3宫格中，一个数字只能出现在同一行或同一列的格子中时，这个数字在该行或列的其他3x3宫格中就不能出现在相同的行或列位置。",steps:["选择一个3x3宫格","对于某个数字，检查它在该宫格中可能的位置","如果这些位置全部位于同一行或同一列","则可以从该行或列的其他3x3宫格中排除该数字出现在相同行或列位置的可能性"],examples:"例如：在某个3x3宫格中，数字2只能出现在该宫格的第一行的两个格子中。这意味着在这一行的其他3x3宫格中，数字2不能出现在第一行的位置。"}},{id:"boxLineReduction",name:"宫行列排除 (Box-Line Reduction)",description:"当一个数字在某一行或列中只能出现在同一个3x3宫格内时，可以排除该宫格中其他格子的该数字可能性。",details:{description:"宫行列排除是指向对的反向应用。当在某一行或列中，一个数字只能出现在某个特定的3x3宫格中时，可以排除该宫格中其他格子出现该数字的可能性。",steps:["选择某一行或列","对于某个数字，检查它在该行或列中可能的位置","如果这些位置全部位于同一个3x3宫格中","则可以从该3x3宫格的其他格子中排除该数字"],examples:"例如：在某一行中，数字8只能出现在该行的前三个格子（属于第一个3x3宫格）。这意味着在第一个3x3宫格中，数字8只能出现在这三个格子中，可以从该宫格的其他六个格子中排除数字8。"}}],s=e=>{const t=r[e]||{mastered:0,practiced:0};return Math.min(100,t.practiced/10*20)};return b.jsx(zc,{children:o?b.jsxs(Oc,{theme:t,children:[b.jsxs(Mc,{children:[b.jsx(Dc,{theme:t,children:o.name}),b.jsx(Fc,{onClick:()=>{a(null)},theme:t,children:"关闭"})]}),b.jsxs(Lc,{children:[b.jsxs("div",{children:[b.jsx(Rc,{theme:t,children:"技巧说明"}),b.jsx("p",{style:{fontSize:"16px",color:t.textSecondary,lineHeight:"1.6"},children:o.details.description})]}),b.jsxs("div",{children:[b.jsx(Rc,{theme:t,children:"使用步骤"}),b.jsx(Bc,{children:o.details.steps.map((e,r)=>b.jsx(Hc,{theme:t,children:e},r))})]}),b.jsxs("div",{children:[b.jsx(Rc,{theme:t,children:"示例"}),b.jsx(_c,{theme:t,children:b.jsx("p",{style:{fontSize:"16px",color:t.textSecondary,lineHeight:"1.6"},children:o.details.examples})})]}),b.jsx(Wc,{onClick:()=>{return e=o.id,n(e),void alert(`开始练习${null==(t=i.find(t=>t.id===e))?void 0:t.name}技巧！`);var e,t},theme:t,children:"开始练习"})]})]}):b.jsxs(b.Fragment,{children:[b.jsx("h2",{style:{fontSize:"32px",color:t.text,margin:0},children:"数独技巧学习"}),b.jsx("p",{style:{fontSize:"18px",color:t.textSecondary,marginBottom:"30px"},children:"点击技巧卡片了解详情，掌握各种数独解题方法"}),b.jsx(Sc,{children:i.map(e=>{const n=r[e.id]||{mastered:0,practiced:0},o=s(e.id),i=(l=e.id,s(l)>=80);var l;return b.jsxs(Cc,{onClick:()=>(e=>{a(e)})(e),mastered:i,theme:t,children:[b.jsxs($c,{children:[b.jsx(Ac,{theme:t,children:e.name}),b.jsx(Pc,{mastered:i,theme:t,children:i?"已掌握":"学习中"})]}),b.jsx(Ec,{theme:t,children:e.description}),b.jsx(Nc,{theme:t,children:b.jsx(Ic,{percentage:o,mastered:i,theme:t})}),b.jsxs(Tc,{theme:t,children:[b.jsxs("span",{children:["练习次数: ",n.practiced]}),b.jsxs("span",{children:["掌握度: ",o.toFixed(0),"%"]})]})]},e.id)})})]})})},Yc=Mr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,qc=Mr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Gc=Mr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Vc=Mr.button`
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
`,Jc=Mr.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`,Xc=Mr.button`
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
`,Kc=Mr.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Qc=Mr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
`,Zc=Mr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,ed=Mr.h3`
  font-size: 20px;
  color: ${e=>e.theme.text};
  margin: 0;
`,td=Mr.div`
  background-color: ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,rd=Mr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
`,nd=Mr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,od=Mr.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,ad=Mr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,id=Mr.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,sd=Mr.button`
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
`,ld=Mr.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.textSecondary};
`,cd=Mr.div`
  font-size: 72px;
  margin-bottom: 20px;
  color: ${e=>e.theme.disabled};
`,dd=Mr.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 10px;
`,ud=Mr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 20px;
`,fd=Mr.button`
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
`,pd=Mr.div`
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
`,hd=Mr.div`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,md=Mr.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-top: 0;
  margin-bottom: 20px;
`,gd=Mr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 30px;
  line-height: 1.6;
`,xd=Mr.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`,vd=()=>{const{theme:t}=re(),{userId:r}=Lr(),{loadSavedGame:n}=an(),{executeWithLoading:o}=ae(),[a,i]=e.useState([]),[s,l]=e.useState("all"),[c,d]=e.useState(!1),[u,f]=e.useState(null);e.useEffect(()=>{p()},[]);const p=async()=>{try{await o(async()=>{const e=await _r.getUserProgress(r);i(e.data||[])},"加载游戏进度中...")}catch(e){console.error("加载进度失败:",e),i(h())}},h=()=>[{id:"1",puzzleId:"puzzle-1",difficulty:"easy",startTime:"2023-10-15T14:30:00",lastUpdated:"2023-10-15T15:45:00",completed:!1,completionTime:null,filledCells:42,totalCells:81,status:"in-progress",puzzleState:[]},{id:"2",puzzleId:"puzzle-2",difficulty:"medium",startTime:"2023-10-14T09:15:00",lastUpdated:"2023-10-14T10:30:00",completed:!0,completionTime:"2023-10-14T10:30:00",filledCells:81,totalCells:81,status:"completed",puzzleState:[]},{id:"3",puzzleId:"puzzle-3",difficulty:"hard",startTime:"2023-10-13T18:00:00",lastUpdated:"2023-10-13T18:30:00",completed:!1,completionTime:null,filledCells:28,totalCells:81,status:"paused",puzzleState:[]}],m=a.filter(e=>"all"===s||("completed"===s?"completed"===e.status:"in-progress"!==s||"completed"!==e.status)),g=e=>{f(e),d(!0)},x=()=>{d(!1),f(null)},v=e=>new Date(e).toLocaleString(),y=e=>{switch(e){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";case"expert":return"专家";default:return e}};return b.jsxs(Yc,{children:[b.jsxs(qc,{children:[b.jsx(Gc,{children:"游戏进度"}),a.length>0&&b.jsx(Vc,{onClick:()=>g("clear-all"),children:"清空所有进度"})]}),a.length>0&&b.jsxs(Jc,{children:[b.jsx(Xc,{active:"all"===s,onClick:()=>l("all"),children:"全部进度"}),b.jsx(Xc,{active:"in-progress"===s,onClick:()=>l("in-progress"),children:"进行中"}),b.jsx(Xc,{active:"completed"===s,onClick:()=>l("completed"),children:"已完成"})]}),m.length>0?b.jsx(Kc,{children:m.map(e=>{return b.jsxs(Qc,{status:e.status,children:[b.jsxs(Zc,{children:[b.jsxs(ed,{children:["数独游戏 #",e.id]}),b.jsx(td,{status:e.status,theme:t,children:"completed"===e.status?"已完成":"in-progress"===e.status?"进行中":"已暂停"})]}),b.jsxs(rd,{children:[b.jsxs(nd,{children:[b.jsx(od,{theme:t,children:"难度"}),b.jsx(ad,{theme:t,children:y(e.difficulty)})]}),b.jsxs(nd,{children:[b.jsx(od,{theme:t,children:"开始时间"}),b.jsx(ad,{theme:t,children:v(e.startTime)})]}),b.jsxs(nd,{children:[b.jsx(od,{theme:t,children:"最后更新"}),b.jsx(ad,{theme:t,children:v(e.lastUpdated)})]}),b.jsxs(nd,{children:[b.jsx(od,{theme:t,children:"完成进度"}),b.jsxs(ad,{theme:t,children:[(r=e.filledCells,i=e.totalCells,Math.round(r/i*100)),"%"]})]})]}),b.jsxs(id,{children:["completed"!==e.status&&b.jsx(sd,{type:"primary",onClick:()=>(async e=>{try{await o(async()=>{const t=a.find(t=>t.id===e);t&&(await n(t.puzzleState,t.puzzleId),window.location.href="/game")},"加载游戏中...")}catch(t){console.error("加载游戏失败:",t),alert("加载游戏失败，请稍后重试")}})(e.id),children:"继续游戏"}),b.jsx(sd,{type:"danger",onClick:()=>g(e.id),children:"删除进度"})]})]},e.id);var r,i})}):b.jsxs(ld,{children:[b.jsx(cd,{children:"📝"}),b.jsx(dd,{children:"暂无游戏进度"}),b.jsx(ud,{children:"all"!==s?"没有符合筛选条件的游戏进度":"您还没有开始任何数独游戏"}),b.jsx(fd,{onClick:()=>window.location.href="/game",children:"开始新游戏"})]}),c&&b.jsx(pd,{children:b.jsxs(hd,{children:[b.jsx(md,{children:"clear-all"===u?"确认清空所有进度":"确认删除进度"}),b.jsx(gd,{children:"clear-all"===u?"此操作将删除所有游戏进度，且无法恢复。确定要继续吗？":"此操作将删除选中的游戏进度，且无法恢复。确定要继续吗？"}),b.jsxs(xd,{children:[b.jsx(sd,{type:"secondary",onClick:x,children:"取消"}),b.jsx(sd,{type:"danger",onClick:()=>{"clear-all"===u?(async()=>{try{await o(async()=>{i([])},"清空进度中...")}catch(e){console.error("清空进度失败:",e),alert("清空进度失败，请稍后重试")}})():"string"==typeof u&&(async e=>{try{await o(async()=>{i(t=>t.filter(t=>t.id!==e))},"删除进度中...")}catch(t){console.error("删除进度失败:",t),alert("删除进度失败，请稍后重试")}})(u),x()},children:"确认删除"})]})]})})]})},yd=Mr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,bd=Mr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,wd=Mr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`,jd=Mr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 5px solid ${e=>e.color||e.theme.primary};
`,kd=Mr.div`
  font-size: 48px;
  font-weight: 700;
  color: ${e=>e.color||e.theme.primary};
`,zd=Mr.div`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,Sd=Mr.div`
  font-size: 14px;
  color: ${e=>e.positive?e.theme.success:e.theme.error};
`,Cd=Mr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,$d=Mr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Ad=Mr.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Pd=Mr.div`
  display: flex;
  gap: 10px;
`,Ed=Mr.button`
  background-color: ${e=>e.active?e.theme.primary:e.theme.surface};
  color: ${e=>e.active?"white":e.theme.text};
  border: 2px solid ${e=>e.active?e.theme.primary:e.theme.border};
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`,Nd=Mr.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.textSecondary};
  font-size: 18px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
`,Id=Mr.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Td=Mr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Od=Mr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Md=Mr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,Dd=Mr.span`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,Fd=Mr.div`
  width: 100%;
  height: 10px;
  background-color: ${e=>e.theme.background};
  border-radius: 5px;
  overflow: hidden;
`,Ld=Mr.div`
  height: 100%;
  background-color: ${e=>{switch(e.difficulty){case"easy":return"#4CAF50";case"medium":return"#FF9800";case"hard":return"#F44336";case"expert":return"#9C27B0";default:return e.theme.primary}}};
  border-radius: 5px;
  width: ${e=>e.percentage}%;
`,Rd=Mr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,_d=Mr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
`,Bd=Mr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  border-left: 4px solid ${e=>e.mastered?e.theme.success:e.theme.primary};
`,Hd=Mr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Wd=Mr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,Ud=Mr.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Yd=Mr.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,qd=()=>{const{theme:t}=re(),{userId:r,userStats:n,techniquesProgress:o}=Lr(),{executeWithLoading:a}=ae(),[i,s]=e.useState(null),[l,c]=e.useState("all");e.useEffect(()=>{d()},[l]);const d=async()=>{try{await a(async()=>{const e=await _r.getUserStatistics(r,l);s(e.data)},"加载统计数据中...")}catch(e){console.error("加载统计数据失败:",e),s(u())}},u=()=>({totalGames:42,completedGames:38,winRate:90.5,averageTime:1245,favoriteDifficulty:"medium",bestTime:420,currentStreak:5,longestStreak:12,totalPlayTime:145200,difficultyBreakdown:{easy:15,medium:20,hard:5,expert:2},recentPerformance:[{date:"2023-10-10",games:3,completed:3},{date:"2023-10-11",games:2,completed:2},{date:"2023-10-12",games:4,completed:3},{date:"2023-10-13",games:1,completed:1},{date:"2023-10-14",games:2,completed:2},{date:"2023-10-15",games:3,completed:3},{date:"2023-10-16",games:2,completed:2}]}),f=i||u(),p=o||{},h=e=>{if(!e)return"0:00";return`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`},m=()=>{if(f.totalGames)return f.totalGames;const e=f.difficultyBreakdown||{};return Object.values(e).reduce((e,t)=>e+t,0)},g=e=>{const t=p[e]||{practiced:0};return Math.min(100,t.practiced/10*20)};return b.jsxs(yd,{children:[b.jsx(bd,{theme:t,children:"我的统计"}),b.jsxs(wd,{children:[b.jsxs(jd,{color:t.primary,theme:t,children:[b.jsx(kd,{color:t.primary,theme:t,children:m()}),b.jsx(zd,{theme:t,children:"总游戏数"}),b.jsx(Sd,{positive:!0,theme:t,children:"+5 本周"})]}),b.jsxs(jd,{color:t.success,theme:t,children:[b.jsx(kd,{color:t.success,theme:t,children:f.completedGames}),b.jsx(zd,{theme:t,children:"完成游戏"}),b.jsx(Sd,{positive:!0,theme:t,children:"全部完成"})]}),b.jsxs(jd,{color:t.warning,theme:t,children:[b.jsxs(kd,{color:t.warning,theme:t,children:[f.winRate,"%"]}),b.jsx(zd,{theme:t,children:"胜率"}),b.jsx(Sd,{positive:!0,theme:t,children:"+2% 本月"})]}),b.jsxs(jd,{color:t.info,theme:t,children:[b.jsx(kd,{color:t.info,theme:t,children:h(f.averageTime)}),b.jsx(zd,{theme:t,children:"平均时间"}),b.jsx(Sd,{positive:!0,theme:t,children:"-30秒"})]}),b.jsxs(jd,{color:t.error,theme:t,children:[b.jsx(kd,{color:t.error,theme:t,children:h(f.bestTime)}),b.jsx(zd,{theme:t,children:"最佳时间"}),b.jsx(Sd,{positive:!0,theme:t,children:"记录保持中"})]}),b.jsxs(jd,{color:t.primary,theme:t,children:[b.jsx(kd,{color:t.primary,theme:t,children:f.currentStreak}),b.jsx(zd,{theme:t,children:"当前连续天数"}),b.jsx(Sd,{positive:f.currentStreak>1,theme:t,children:f.currentStreak>1?"🔥 加油！":"今天开始"})]})]}),b.jsxs(Cd,{theme:t,children:[b.jsxs($d,{children:[b.jsx(Ad,{theme:t,children:"游戏进度"}),b.jsxs(Pd,{children:[b.jsx(Ed,{active:"week"===l,onClick:()=>c("week"),theme:t,children:"本周"}),b.jsx(Ed,{active:"month"===l,onClick:()=>c("month"),theme:t,children:"本月"}),b.jsx(Ed,{active:"all"===l,onClick:()=>c("all"),theme:t,children:"全部"})]})]}),b.jsx(Nd,{theme:t,children:"📊 游戏进度图表"})]}),b.jsxs(Cd,{theme:t,children:[b.jsx($d,{children:b.jsx(Ad,{theme:t,children:"难度分布"})}),b.jsx(Id,{children:Object.entries(f.difficultyBreakdown||{}).map(([e,r])=>{const n=(e=>{const t=f.difficultyBreakdown||{},r=m();return r>0?t[e]/r*100:0})(e);return b.jsxs(Td,{children:[b.jsxs(Od,{children:[b.jsx(Md,{theme:t,children:{easy:"简单",medium:"中等",hard:"困难",expert:"专家"}[e]||e}),b.jsxs(Dd,{theme:t,children:[r," 局 (",n.toFixed(1),"%)"]})]}),b.jsx(Fd,{theme:t,children:b.jsx(Ld,{difficulty:e,percentage:n})})]},e)})})]}),b.jsxs(Rd,{theme:t,children:[b.jsx(Ad,{theme:t,children:"技巧掌握"}),b.jsx(_d,{children:[{id:"nakedSingles",name:"唯一候选数"},{id:"hiddenSingles",name:"隐性唯一"},{id:"nakedPairs",name:"数对"},{id:"hiddenPairs",name:"隐性数对"},{id:"pointingPairs",name:"指向对"},{id:"boxLineReduction",name:"宫行列排除"}].map(e=>{var r;const n=g(e.id),o=(a=e.id,g(a)>=80);var a;const i=(null==(r=p[e.id])?void 0:r.practiced)||0;return b.jsxs(Bd,{mastered:o,theme:t,children:[b.jsxs(Hd,{children:[b.jsx(Wd,{theme:t,children:e.name}),b.jsxs(Ud,{theme:t,children:["练习 ",i," 次 · 掌握度 ",n.toFixed(0),"%"]})]}),b.jsx(Yd,{mastered:o,theme:t,children:o?"已掌握":"学习中"})]},e.id)})})]})]})};w.createRoot(document.getElementById("root")).render(b.jsxs(r.StrictMode,{children:[b.jsx(te,{children:b.jsx(oe,{children:b.jsx(Fr,{children:b.jsx(on,{children:b.jsx(i,{children:b.jsx(Mn,{children:b.jsxs(s,{children:[b.jsx(l,{path:"/",element:b.jsx(kc,{})}),b.jsx(l,{path:"/home",element:b.jsx(oo,{})}),b.jsx(l,{path:"/game",element:b.jsx(kc,{})}),b.jsx(l,{path:"/techniques",element:b.jsx(Uc,{})}),b.jsx(l,{path:"/progress",element:b.jsx(vd,{})}),b.jsx(l,{path:"/stats",element:b.jsx(qd,{})})]})})})})})})}),b.jsx(H,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]}));
