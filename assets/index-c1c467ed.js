import{r as e,a as t,R as r,L as n,u as o,H as a,b as i,d as s}from"./react-vendor-33cf6efa.js";import{l}from"./utils-f1cb0791.js";import{a as c}from"./axios-8e1cd5bd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var d={exports:{}},u={},f=e,p=Symbol.for("react.element"),h=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,g=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function v(e,t,r){var n,o={},a=null,i=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(i=t.ref),t)m.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:p,type:e,key:a,ref:i,props:o,_owner:g.current}}u.Fragment=h,u.jsx=v,u.jsxs=v,d.exports=u;var b=d.exports,y={},w=t;function j(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=j(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function k(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=j(e))&&(n&&(n+=" "),n+=t);return n}y.createRoot=w.createRoot,y.hydrateRoot=w.hydrateRoot;const S=e=>"number"==typeof e&&!isNaN(e),z=e=>"string"==typeof e,C=e=>"function"==typeof e,$=e=>z(e)||C(e)?e:null,T=t=>e.isValidElement(t)||z(t)||C(t)||S(t);function A(t){let{enter:n,exit:o,appendPosition:a=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(t){let{children:l,position:c,preventExitTransition:d,done:u,nodeRef:f,isIn:p}=t;const h=a?`${n}--${c}`:n,m=a?`${o}--${c}`:o,g=e.useRef(0);return e.useLayoutEffect(()=>{const e=f.current,t=h.split(" "),r=n=>{n.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===g.current&&"animationcancel"!==n.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)},[]),e.useEffect(()=>{const e=f.current,t=()=>{e.removeEventListener("animationend",t),i?function(e,t,r){void 0===r&&(r=300);const{scrollHeight:n,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=n+"px",o.transition=`all ${r}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,r)})})}(e,u,s):u()};p||(d?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))},[p]),r.createElement(r.Fragment,null,l)}}function P(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const I={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const r=this.list.get(e).filter(e=>e!==t);return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const r=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(r)})}},E=e=>{let{theme:t,type:n,...o}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...o})},N={info:function(e){return r.createElement(E,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(E,{...e},r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(E,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(E,{...e},r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function O(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return r.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function R(e){let{delay:t,isRunning:n,closeToast:o,type:a="default",hide:i,className:s,style:l,controlledProgress:c,progress:d,rtl:u,isIn:f,theme:p}=e;const h=i||c&&0===d,m={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:h?0:1};c&&(m.transform=`scaleX(${d})`);const g=k("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":u}),x=C(s)?s({rtl:u,type:a,defaultClassName:g}):k(g,s);return r.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:x,style:m,[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]:c&&d<1?null:()=>{f&&o()}})}const F=t=>{const{isRunning:n,preventExitTransition:o,toastRef:a,eventHandlers:i}=function(t){const[r,n]=e.useState(!1),[o,a]=e.useState(!1),i=e.useRef(null),s=e.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=e.useRef(t),{autoClose:c,pauseOnHover:d,closeToast:u,onClick:f,closeOnClick:p}=t;function h(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",b),document.addEventListener("touchmove",v),document.addEventListener("touchend",b);const r=i.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=r.getBoundingClientRect(),r.style.transition="",s.x=M(e.nativeEvent),s.y=O(e.nativeEvent),"x"===t.draggableDirection?(s.start=s.x,s.removalDistance=r.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=r.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function m(e){if(s.boundingRect){const{top:r,bottom:n,left:o,right:a}=s.boundingRect;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&s.x>=o&&s.x<=a&&s.y>=r&&s.y<=n?x():g()}}function g(){n(!0)}function x(){n(!1)}function v(e){const n=i.current;s.canDrag&&n&&(s.didMove=!0,r&&x(),s.x=M(e),s.y=O(e),s.delta="x"===t.draggableDirection?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),n.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,n.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function b(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",b);const e=i.current;if(s.canDrag&&s.didMove&&e){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return a(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform=`translate${t.draggableDirection}(0)`,e.style.opacity="1"}}e.useEffect(()=>{l.current=t}),e.useEffect(()=>(i.current&&i.current.addEventListener("d",g,{once:!0}),C(t.onOpen)&&t.onOpen(e.isValidElement(t.children)&&t.children.props),()=>{const t=l.current;C(t.onClose)&&t.onClose(e.isValidElement(t.children)&&t.children.props)}),[]),e.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",g),window.addEventListener("blur",x)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",g),window.removeEventListener("blur",x))}),[t.pauseOnFocusLoss]);const y={onMouseDown:h,onTouchStart:h,onMouseUp:m,onTouchEnd:m};return c&&d&&(y.onMouseEnter=x,y.onMouseLeave=g),p&&(y.onClick=e=>{f&&f(e),s.canCloseOnClick&&u()}),{playToast:g,pauseToast:x,isRunning:r,preventExitTransition:o,toastRef:i,eventHandlers:y}}(t),{closeButton:s,children:l,autoClose:c,onClick:d,type:u,hideProgressBar:f,closeToast:p,transition:h,position:m,className:g,style:x,bodyClassName:v,bodyStyle:b,progressClassName:y,progressStyle:w,updateId:j,role:S,progress:z,rtl:$,toastId:T,deleteToast:A,isIn:P,isLoading:I,iconOut:E,closeOnClick:N,theme:F}=t,D=k("Toastify__toast",`Toastify__toast-theme--${F}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":$},{"Toastify__toast--close-on-click":N}),_=C(g)?g({rtl:$,position:m,type:u,defaultClassName:D}):k(D,g),H=!!z||!c,W={closeToast:p,type:u,theme:F};let B=null;return!1===s||(B=C(s)?s(W):e.isValidElement(s)?e.cloneElement(s,W):L(W)),r.createElement(h,{isIn:P,done:A,position:m,preventExitTransition:o,nodeRef:a},r.createElement("div",{id:T,onClick:d,className:_,...i,style:x,ref:a},r.createElement("div",{...P&&{role:S},className:C(v)?v({type:u}):k("Toastify__toast-body",v),style:b},null!=E&&r.createElement("div",{className:k("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!I})},E),r.createElement("div",null,l)),B,r.createElement(R,{...j&&!H?{key:`pb-${j}`}:{},rtl:$,theme:F,delay:c,isRunning:n,isIn:P,closeToast:p,hide:f,type:u,style:w,className:y,controlledProgress:H,progress:z||0})))},D=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},_=A(D("bounce",!0));A(D("slide",!0)),A(D("zoom")),A(D("flip"));const H=e.forwardRef((t,n)=>{const{getToastToRender:o,containerRef:a,isToastActive:i}=function(t){const[,r]=e.useReducer(e=>e+1,0),[n,o]=e.useState([]),a=e.useRef(null),i=e.useRef(new Map).current,s=e=>-1!==n.indexOf(e),l=e.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:e=>i.get(e)}).current;function c(e){let{containerId:t}=e;const{limit:r}=l.props;!r||t&&l.containerId!==t||(l.count-=l.queue.length,l.queue=[])}function d(e){o(t=>null==e?[]:t.filter(t=>t!==e))}function u(){const{toastContent:e,toastProps:t,staleId:r}=l.queue.shift();p(e,t,r)}function f(t,n){let{delay:o,staleId:s,...c}=n;if(!T(t)||(f=c,!a.current||l.props.enableMultiContainer&&f.containerId!==l.props.containerId||i.has(f.toastId)&&null==f.updateId))return;var f;const{toastId:h,updateId:m,data:g}=c,{props:x}=l,v=()=>d(h),b=null==m;b&&l.count++;const y={...x,style:x.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(c).filter(e=>{let[t,r]=e;return null!=r})),toastId:h,updateId:m,data:g,closeToast:v,isIn:!1,className:$(c.className||x.toastClassName),bodyClassName:$(c.bodyClassName||x.bodyClassName),progressClassName:$(c.progressClassName||x.progressClassName),autoClose:!c.isLoading&&(w=c.autoClose,j=x.autoClose,!1===w||S(w)&&w>0?w:j),deleteToast(){const e=P(i.get(h),"removed");i.delete(h),I.emit(4,e);const t=l.queue.length;if(l.count=null==h?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),t>0){const e=null==h?l.props.limit:1;if(1===t||1===e)l.displayedToast++,u();else{const r=e>t?t:e;l.displayedToast=r;for(let e=0;e<r;e++)u()}}else r()}};var w,j;y.iconOut=function(t){let{theme:r,type:n,isLoading:o,icon:a}=t,i=null;const s={theme:r,type:n};return!1===a||(C(a)?i=a(s):e.isValidElement(a)?i=e.cloneElement(a,s):z(a)||S(a)?i=a:o?i=N.spinner():n in N&&(i=N[n](s))),i}(y),C(c.onOpen)&&(y.onOpen=c.onOpen),C(c.onClose)&&(y.onClose=c.onClose),y.closeButton=x.closeButton,!1===c.closeButton||T(c.closeButton)?y.closeButton=c.closeButton:!0===c.closeButton&&(y.closeButton=!T(x.closeButton)||x.closeButton);let k=t;e.isValidElement(t)&&!z(t.type)?k=e.cloneElement(t,{closeToast:v,toastProps:y,data:g}):C(t)&&(k=t({closeToast:v,toastProps:y,data:g})),x.limit&&x.limit>0&&l.count>x.limit&&b?l.queue.push({toastContent:k,toastProps:y,staleId:s}):S(o)?setTimeout(()=>{p(k,y,s)},o):p(k,y,s)}function p(e,t,r){const{toastId:n}=t;r&&i.delete(r);const a={content:e,props:t};i.set(n,a),o(e=>[...e,n].filter(e=>e!==r)),I.emit(4,P(a,null==a.props.updateId?"added":"updated"))}return e.useEffect(()=>(l.containerId=t.containerId,I.cancelEmit(3).on(0,f).on(1,e=>a.current&&d(e)).on(5,c).emit(2,l),()=>{i.clear(),I.emit(3,l)}),[]),e.useEffect(()=>{l.props=t,l.isToastActive=s,l.displayedToast=n.length}),{getToastToRender:function(e){const r=new Map,n=Array.from(i.values());return t.newestOnTop&&n.reverse(),n.forEach(e=>{const{position:t}=e.props;r.has(t)||r.set(t,[]),r.get(t).push(e)}),Array.from(r,t=>e(t[0],t[1]))},containerRef:a,isToastActive:s}}(t),{className:s,style:l,rtl:c,containerId:d}=t;function u(e){const t=k("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":c});return C(s)?s({position:e,rtl:c,defaultClassName:t}):k(t,$(s))}return e.useEffect(()=>{n&&(n.current=a.current)},[]),r.createElement("div",{ref:a,className:"Toastify",id:d},o((e,t)=>{const n=t.length?{...l}:{...l,pointerEvents:"none"};return r.createElement("div",{className:u(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:o,props:a}=e;return r.createElement(F,{...a,isIn:i(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:`toast-${a.key}`},o)}))}))});H.displayName="ToastContainer",H.defaultProps={position:"top-right",transition:_,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let W,B=new Map,Y=[],U=1;function q(){return""+U++}function G(e){return e&&(z(e.toastId)||S(e.toastId))?e.toastId:q()}function J(e,t){return B.size>0?I.emit(0,e,t):Y.push({content:e,options:t}),t.toastId}function V(e,t){return{...t,type:t&&t.type||e,toastId:G(t)}}function X(e){return(t,r)=>J(t,V(e,r))}function K(e,t){return J(e,V("default",t))}K.loading=(e,t)=>J(e,V("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),K.promise=function(e,t,r){let n,{pending:o,error:a,success:i}=t;o&&(n=z(o)?K.loading(o,r):K.loading(o.render,{...r,...o}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,o)=>{if(null==t)return void K.dismiss(n);const a={type:e,...s,...r,data:o},i=z(t)?{render:t}:t;return n?K.update(n,{...a,...i}):K(i.render,{...a,...i}),o},c=C(e)?e():e;return c.then(e=>l("success",i,e)).catch(e=>l("error",a,e)),c},K.success=X("success"),K.info=X("info"),K.error=X("error"),K.warning=X("warning"),K.warn=K.warning,K.dark=(e,t)=>J(e,V("default",{theme:"dark",...t})),K.dismiss=e=>{B.size>0?I.emit(1,e):Y=Y.filter(t=>null!=e&&t.options.toastId!==e)},K.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},K.isActive=e=>{let t=!1;return B.forEach(r=>{r.isToastActive&&r.isToastActive(e)&&(t=!0)}),t},K.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{const r=function(e,t){let{containerId:r}=t;const n=B.get(r||W);return n&&n.getToast(e)}(e,t);if(r){const{props:n,content:o}=r,a={delay:100,...n,...t,toastId:t.toastId||e,updateId:q()};a.toastId!==e&&(a.staleId=e);const i=a.render||o;delete a.render,J(i,a)}},0)},K.done=e=>{K.update(e,{progress:1})},K.onChange=e=>(I.on(4,e),()=>{I.off(4,e)}),K.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},K.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,e=>{W=e.containerId||e,B.set(W,e),Y.forEach(e=>{I.emit(0,e.content,e.options)}),Y=[]}).on(3,e=>{B.delete(e.containerId||e),0===B.size&&I.off(0).off(1).off(5)});const Q=e.createContext(),Z={light:{background:"#f5f5f5",surface:"#ffffff",text:"#333333",textSecondary:"#666666",primary:"#4a6cf7",secondary:"#f5a623",success:"#4cd964",warning:"#ffcc00",error:"#ff3b30",disabled:"#cccccc",border:"#e0e0e0",gridLine:"#e0e0e0",gridLineThick:"#cccccc",highlight:"#e6f0ff",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}},dark:{background:"#121212",surface:"#1e1e1e",text:"#f5f5f5",textSecondary:"#b0b0b0",primary:"#6482f7",secondary:"#ffb74d",success:"#66df80",warning:"#ffe066",error:"#ff5757",disabled:"#666666",border:"#333333",gridLine:"#333333",gridLineThick:"#444444",highlight:"#1a237e",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}}},ee=()=>({...Z.light,name:"自定义主题"}),te=({children:t})=>{const[r,n]=e.useState(localStorage.getItem("themeMode")||"light"),[o,a]=e.useState(()=>{const e=localStorage.getItem("customTheme");return e?JSON.parse(e):ee()}),[i,s]=e.useState(()=>"custom"===r?o:Z["system"===r?"light":r]);e.useEffect(()=>{let e;if("custom"===r)e=o;else if("system"===r){const t=window.matchMedia("(prefers-color-scheme: dark)").matches;e=Z[t?"dark":"light"]}else e=Z[r];s(e)},[r,o]);const l=e=>{const t={...e,name:e.name||"自定义主题"};a(t),localStorage.setItem("customTheme",JSON.stringify(t)),"custom"===r&&s(t)};e.useEffect(()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{if("system"===r){const t=e.matches;s(Z[t?"dark":"light"])}};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[r]);const c={theme:i,themeMode:r,customTheme:o,toggleTheme:()=>{const e="light"===r?"dark":"light";n(e),localStorage.setItem("themeMode",e)},setLightTheme:()=>{n("light"),localStorage.setItem("themeMode","light")},setDarkTheme:()=>{n("dark"),localStorage.setItem("themeMode","dark")},setSystemTheme:()=>{n("system"),localStorage.setItem("themeMode","system")},setCustomThemeMode:()=>{n("custom"),localStorage.setItem("themeMode","custom")},updateCustomTheme:l,resetCustomTheme:()=>{const e=ee();a(e),localStorage.setItem("customTheme",JSON.stringify(e))},exportTheme:(e=o)=>{const t=JSON.stringify(e,null,2),r=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(r),a=document.createElement("a");a.href=n,a.download=`${e.name||"sudoku-theme"}.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(n)},importTheme:e=>new Promise((t,r)=>{const n=new FileReader;n.onload=e=>{try{const n=JSON.parse(e.target.result);n&&"object"==typeof n?(l(n),t(n)):r(new Error("无效的主题文件格式"))}catch(n){r(n)}},n.onerror=r,n.readAsText(e)})};return b.jsx(Q.Provider,{value:c,children:t})},re=()=>{const t=e.useContext(Q);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},ne=e.createContext(),oe=({children:t})=>{const[r,n]=e.useState(!1),[o,a]=e.useState("加载中..."),[i,s]=e.useState(0),l=(e="加载中...")=>{s(e=>e+1),a(e),n(!0)},c=()=>{s(e=>{const t=Math.max(0,e-1);return 0===t&&n(!1),t})},d={isLoading:r,loadingMessage:o,loadingCount:i,startLoading:l,stopLoading:c,resetLoading:()=>{s(0),n(!1),a("加载中...")},executeWithLoading:async(e,t="加载中...")=>{try{l(t);return await e()}catch(r){throw r}finally{c()}}};return b.jsx(ne.Provider,{value:d,children:t})},ae=()=>{const t=e.useContext(ne);if(!t)throw new Error("useLoading must be used within a LoadingProvider");return t};var ie=function(){return ie=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ie.apply(this,arguments)};function se(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var le="-ms-",ce="-moz-",de="-webkit-",ue="comm",fe="rule",pe="decl",he="@keyframes",me=Math.abs,ge=String.fromCharCode,xe=Object.assign;function ve(e){return e.trim()}function be(e,t){return(e=t.exec(e))?e[0]:e}function ye(e,t,r){return e.replace(t,r)}function we(e,t,r){return e.indexOf(t,r)}function je(e,t){return 0|e.charCodeAt(t)}function ke(e,t,r){return e.slice(t,r)}function Se(e){return e.length}function ze(e){return e.length}function Ce(e,t){return t.push(e),e}function $e(e,t){return e.filter(function(e){return!be(e,t)})}var Te=1,Ae=1,Pe=0,Ie=0,Ee=0,Ne="";function Me(e,t,r,n,o,a,i,s){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:Te,column:Ae,length:i,return:"",siblings:s}}function Oe(e,t){return xe(Me("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Le(e){for(;e.root;)e=Oe(e.root,{children:[e]});Ce(e,e.siblings)}function Re(){return Ee=Ie>0?je(Ne,--Ie):0,Ae--,10===Ee&&(Ae=1,Te--),Ee}function Fe(){return Ee=Ie<Pe?je(Ne,Ie++):0,Ae++,10===Ee&&(Ae=1,Te++),Ee}function De(){return je(Ne,Ie)}function _e(){return Ie}function He(e,t){return ke(Ne,e,t)}function We(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Be(e){return ve(He(Ie-1,qe(91===e?e+2:40===e?e+1:e)))}function Ye(e){for(;(Ee=De())&&Ee<33;)Fe();return We(e)>2||We(Ee)>3?"":" "}function Ue(e,t){for(;--t&&Fe()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return He(e,_e()+(t<6&&32==De()&&32==Fe()))}function qe(e){for(;Fe();)switch(Ee){case e:return Ie;case 34:case 39:34!==e&&39!==e&&qe(Ee);break;case 40:41===e&&qe(e);break;case 92:Fe()}return Ie}function Ge(e,t){for(;Fe()&&e+Ee!==57&&(e+Ee!==84||47!==De()););return"/*"+He(t,Ie-1)+"*"+ge(47===e?e:Fe())}function Je(e){for(;!We(De());)Fe();return He(e,Ie)}function Ve(e){return function(e){return Ne="",e}(Xe("",null,null,null,[""],e=function(e){return Te=Ae=1,Pe=Se(Ne=e),Ie=0,[]}(e),0,[0],e))}function Xe(e,t,r,n,o,a,i,s,l){for(var c=0,d=0,u=i,f=0,p=0,h=0,m=1,g=1,x=1,v=0,b="",y=o,w=a,j=n,k=b;g;)switch(h=v,v=Fe()){case 40:if(108!=h&&58==je(k,u-1)){-1!=we(k+=ye(Be(v),"&","&\f"),"&\f",me(c?s[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:k+=Be(v);break;case 9:case 10:case 13:case 32:k+=Ye(h);break;case 92:k+=Ue(_e()-1,7);continue;case 47:switch(De()){case 42:case 47:Ce(Qe(Ge(Fe(),_e()),t,r,l),l);break;default:k+="/"}break;case 123*m:s[c++]=Se(k)*x;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+d:-1==x&&(k=ye(k,/\f/g,"")),p>0&&Se(k)-u&&Ce(p>32?Ze(k+";",n,r,u-1,l):Ze(ye(k," ","")+";",n,r,u-2,l),l);break;case 59:k+=";";default:if(Ce(j=Ke(k,t,r,c,d,o,s,b,y=[],w=[],u,a),a),123===v)if(0===d)Xe(k,t,j,j,y,a,u,s,w);else switch(99===f&&110===je(k,3)?100:f){case 100:case 108:case 109:case 115:Xe(e,j,j,n&&Ce(Ke(e,j,j,0,0,o,s,b,o,y=[],u,w),w),o,w,u,s,n?y:w);break;default:Xe(k,j,j,j,[""],w,0,s,w)}}c=d=p=0,m=x=1,b=k="",u=i;break;case 58:u=1+Se(k),p=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==Re())continue;switch(k+=ge(v),v*m){case 38:x=d>0?1:(k+="\f",-1);break;case 44:s[c++]=(Se(k)-1)*x,x=1;break;case 64:45===De()&&(k+=Be(Fe())),f=De(),d=u=Se(b=k+=Je(_e())),v++;break;case 45:45===h&&2==Se(k)&&(m=0)}}return a}function Ke(e,t,r,n,o,a,i,s,l,c,d,u){for(var f=o-1,p=0===o?a:[""],h=ze(p),m=0,g=0,x=0;m<n;++m)for(var v=0,b=ke(e,f+1,f=me(g=i[m])),y=e;v<h;++v)(y=ve(g>0?p[v]+" "+b:ye(b,/&\f/g,p[v])))&&(l[x++]=y);return Me(e,t,r,0===o?fe:s,l,c,d,u)}function Qe(e,t,r,n){return Me(e,t,r,ue,ge(Ee),ke(e,2,-2),0,n)}function Ze(e,t,r,n,o){return Me(e,t,r,pe,ke(e,0,n),ke(e,n+1,-1),n,o)}function et(e,t,r){switch(function(e,t){return 45^je(e,0)?(((t<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 4789:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+ce+e+le+e+e;case 5936:switch(je(e,t+11)){case 114:return de+e+le+ye(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+le+ye(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+le+ye(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return de+e+le+e+e;case 6165:return de+e+le+"flex-"+e+e;case 5187:return de+e+ye(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+le+"flex-$1$2")+e;case 5443:return de+e+le+"flex-item-"+ye(e,/flex-|-self/g,"")+(be(e,/flex-|baseline/)?"":le+"grid-row-"+ye(e,/flex-|-self/g,""))+e;case 4675:return de+e+le+"flex-line-pack"+ye(e,/align-content|flex-|-self/g,"")+e;case 5548:return de+e+le+ye(e,"shrink","negative")+e;case 5292:return de+e+le+ye(e,"basis","preferred-size")+e;case 6060:return de+"box-"+ye(e,"-grow","")+de+e+le+ye(e,"grow","positive")+e;case 4554:return de+ye(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return ye(ye(ye(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return ye(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return ye(ye(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4200:if(!be(e,/flex-|baseline/))return le+"grid-column-align"+ke(e,t)+e;break;case 2592:case 3360:return le+ye(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,be(e.props,/grid-\w+-end/)})?~we(e+(r=r[t].value),"span",0)?e:le+ye(e,"-start","")+e+le+"grid-row-span:"+(~we(r,"span",0)?be(r,/\d+/):+be(r,/\d+/)-+be(e,/\d+/))+";":le+ye(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return be(e.props,/grid-\w+-start/)})?e:le+ye(ye(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ye(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Se(e)-1-t>6)switch(je(e,t+1)){case 109:if(45!==je(e,t+4))break;case 102:return ye(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+ce+(108==je(e,t+3)?"$3":"$2-$3"))+e;case 115:return~we(e,"stretch",0)?et(ye(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return ye(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,n,o,a,i,s){return le+r+":"+n+s+(o?le+r+"-span:"+(a?i:+i-+n)+s:"")+e});case 4949:if(121===je(e,t+6))return ye(e,":",":"+de)+e;break;case 6444:switch(je(e,45===je(e,14)?18:11)){case 120:return ye(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+de+(45===je(e,14)?"inline-":"")+"box$3$1"+de+"$2$3$1"+le+"$2box$3")+e;case 100:return ye(e,":",":"+le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(e,"scroll-","scroll-snap-")+e}return e}function tt(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function rt(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case pe:return e.return=e.return||e.value;case ue:return"";case he:return e.return=e.value+"{"+tt(e.children,n)+"}";case fe:if(!Se(e.value=e.props.join(",")))return""}return Se(r=tt(e.children,n))?e.return=e.value+"{"+r+"}":""}function nt(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case pe:return void(e.return=et(e.value,e.length,r));case he:return tt([Oe(e,{value:ye(e.value,"@","@"+de)})],n);case fe:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(be(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Le(Oe(e,{props:[ye(t,/:(read-\w+)/,":-moz-$1")]})),Le(Oe(e,{props:[t]})),xe(e,{props:$e(r,n)});break;case"::placeholder":Le(Oe(e,{props:[ye(t,/:(plac\w+)/,":"+de+"input-$1")]})),Le(Oe(e,{props:[ye(t,/:(plac\w+)/,":-moz-$1")]})),Le(Oe(e,{props:[ye(t,/:(plac\w+)/,le+"input-$1")]})),Le(Oe(e,{props:[t]})),xe(e,{props:$e(r,n)})}return""})}}var ot={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},at="undefined"!=typeof process&&void 0!==process.env&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",it="active",st="data-styled-version",lt="6.1.19",ct="/*!sc*/\n",dt="undefined"!=typeof window&&"undefined"!=typeof document,ut=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),ft=Object.freeze([]),pt=Object.freeze({});var ht=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gt=/(^-|-$)/g;function xt(e){return e.replace(mt,"-").replace(gt,"")}var vt=/(a)(d)/gi,bt=function(e){return String.fromCharCode(e+(e>25?39:97))};function yt(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=bt(t%52)+r;return(bt(t%52)+r).replace(vt,"$1-$2")}var wt,jt=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},kt=function(e){return jt(5381,e)};function St(e){return"string"==typeof e&&!0}var zt="function"==typeof Symbol&&Symbol.for,Ct=zt?Symbol.for("react.memo"):60115,$t=zt?Symbol.for("react.forward_ref"):60112,Tt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},At={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},It=((wt={})[$t]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wt[Ct]=Pt,wt);function Et(e){return("type"in(t=e)&&t.type.$$typeof)===Ct?Pt:"$$typeof"in e?It[e.$$typeof]:Tt;var t}var Nt=Object.defineProperty,Mt=Object.getOwnPropertyNames,Ot=Object.getOwnPropertySymbols,Lt=Object.getOwnPropertyDescriptor,Rt=Object.getPrototypeOf,Ft=Object.prototype;function Dt(e,t,r){if("string"!=typeof t){if(Ft){var n=Rt(t);n&&n!==Ft&&Dt(e,n,r)}var o=Mt(t);Ot&&(o=o.concat(Ot(t)));for(var a=Et(e),i=Et(t),s=0;s<o.length;++s){var l=o[s];if(!(l in At||r&&r[l]||i&&l in i||a&&l in a)){var c=Lt(t,l);try{Nt(e,l,c)}catch(d){}}}}return e}function _t(e){return"function"==typeof e}function Ht(e){return"object"==typeof e&&"styledComponentId"in e}function Wt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Bt(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Yt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ut(e,t,r){if(void 0===r&&(r=!1),!r&&!Yt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ut(e[n],t[n]);else if(Yt(t))for(var n in t)e[n]=Ut(e[n],t[n]);return e}function qt(e,t){Object.defineProperty(e,"toString",{value:t})}function Gt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Jt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw Gt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=n;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,a=n;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(ct);return t},e}(),Vt=new Map,Xt=new Map,Kt=1,Qt=function(e){if(Vt.has(e))return Vt.get(e);for(;Xt.has(Kt);)Kt++;var t=Kt++;return Vt.set(e,t),Xt.set(t,e),t},Zt=function(e,t){Kt=t+1,Vt.set(e,t),Xt.set(t,e)},er="style[".concat(at,"][").concat(st,'="').concat(lt,'"]'),tr=new RegExp("^".concat(at,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rr=function(e,t,r){for(var n,o=r.split(","),a=0,i=o.length;a<i;a++)(n=o[a])&&e.registerName(t,n)},nr=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(ct),o=[],a=0,i=n.length;a<i;a++){var s=n[a].trim();if(s){var l=s.match(tr);if(l){var c=0|parseInt(l[1],10),d=l[2];0!==c&&(Zt(d,c),rr(e,d,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},or=function(e){for(var t=document.querySelectorAll(er),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(at)!==it&&(nr(e,o),o.parentNode&&o.parentNode.removeChild(o))}};var ar=function(e){var t,r,n=document.head,o=e||n,a=document.createElement("style"),i=(t=o,(r=Array.from(t.querySelectorAll("style[".concat(at,"]"))))[r.length-1]),s=void 0!==i?i.nextSibling:null;a.setAttribute(at,it),a.setAttribute(st,lt);var l="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return l&&a.setAttribute("nonce",l),o.insertBefore(a,s),a},ir=function(){function e(e){this.element=ar(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw Gt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(r){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),sr=function(){function e(e){this.element=ar(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),lr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),cr=dt,dr={isServer:!dt,useCSSOMInjection:!ut},ur=function(){function e(e,t,r){void 0===e&&(e=pt),void 0===t&&(t={});var n=this;this.options=ie(ie({},dr),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&dt&&cr&&(cr=!1,or(this)),qt(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o,a=(o=r,Xt.get(o));if(void 0===a)return"continue";var i=e.names.get(a),s=t.getGroup(r);if(void 0===i||!i.size||0===s.length)return"continue";var l="".concat(at,".g").concat(r,'[id="').concat(a,'"]'),c="";void 0!==i&&i.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),n+="".concat(s).concat(l,'{content:"').concat(c,'"}').concat(ct)},a=0;a<r;a++)o(a);return n}(n)})}return e.registerId=function(e){return Qt(e)},e.prototype.rehydrate=function(){!this.server&&dt&&or(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(ie(ie({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,r=e.target,n=e.isServer?new lr(r):t?new ir(r):new sr(r),new Jt(n)));var e,t,r,n},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Qt(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Qt(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Qt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),fr=/&/g,pr=/^\s*\/\/.*$/gm;function hr(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=hr(e.children,t)),e})}var mr=new ur,gr=function(e){var t,r,n,o=void 0===e?pt:e,a=o.options,i=void 0===a?pt:a,s=o.plugins,l=void 0===s?ft:s,c=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},d=l.slice();d.push(function(e){e.type===fe&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(fr,r).replace(n,c))}),i.prefix&&d.push(nt),d.push(rt);var u=function(e,o,a,s){void 0===o&&(o=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var l=e.replace(pr,""),c=Ve(a||o?"".concat(a," ").concat(o," { ").concat(l," }"):l);i.namespace&&(c=hr(c,i.namespace));var u,f,p,h=[];return tt(c,(u=d.concat((p=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&p(e)})),f=ze(u),function(e,t,r,n){for(var o="",a=0;a<f;a++)o+=u[a](e,t,r,n)||"";return o})),h};return u.hash=l.length?l.reduce(function(e,t){return t.name||Gt(15),jt(e,t.name)},5381).toString():"",u}(),xr=r.createContext({shouldForwardProp:void 0,styleSheet:mr,stylis:gr});function vr(){return e.useContext(xr)}xr.Consumer,r.createContext(void 0);var br=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=gr);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,qt(this,function(){throw Gt(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=gr),this.name+e.hash},e}(),yr=function(e){return e>="A"&&e<="Z"};function wr(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;yr(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var jr=function(e){return null==e||!1===e||""===e},kr=function(e){var t,r,n=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!jr(a)&&(Array.isArray(a)&&a.isCss||_t(a)?n.push("".concat(wr(o),":"),a,";"):Yt(a)?n.push.apply(n,se(se(["".concat(o," {")],kr(a),!1),["}"],!1)):n.push("".concat(wr(o),": ").concat((t=o,null==(r=a)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ot||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Sr(e,t,r,n){return jr(e)?[]:Ht(e)?[".".concat(e.styledComponentId)]:_t(e)?!_t(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Sr(e(t),t,r,n):e instanceof br?r?(e.inject(r,n),[e.getName(n)]):[e]:Yt(e)?kr(e):Array.isArray(e)?Array.prototype.concat.apply(ft,e.map(function(e){return Sr(e,t,r,n)})):[e.toString()];var o}var zr=kt(lt),Cr=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(_t(r)&&!Ht(r))return!1}return!0}(e),this.componentId=t,this.baseHash=jt(zr,t),this.baseStyle=r,ur.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Wt(n,this.staticRulesId);else{var o=Bt(Sr(this.rules,e,t,r)),a=yt(jt(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=r(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}n=Wt(n,a),this.staticRulesId=a}else{for(var s=jt(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)l+=d;else if(d){var u=Bt(Sr(d,e,t,r));s=jt(s,u+c),l+=u}}if(l){var f=yt(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(l,".".concat(f),void 0,this.componentId)),n=Wt(n,f)}}return n},e}(),$r=r.createContext(void 0);$r.Consumer;var Tr={};function Ar(t,n,o){var a,i=Ht(t),s=t,l=!St(t),c=n.attrs,d=void 0===c?ft:c,u=n.componentId,f=void 0===u?function(e,t){var r="string"!=typeof e?"sc":xt(e);Tr[r]=(Tr[r]||0)+1;var n="".concat(r,"-").concat(function(e){return yt(kt(e)>>>0)}(lt+r+Tr[r]));return t?"".concat(t,"-").concat(n):n}(n.displayName,n.parentComponentId):u,p=n.displayName,h=void 0===p?St(a=t)?"styled.".concat(a):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(a),")"):p,m=n.displayName&&n.componentId?"".concat(xt(n.displayName),"-").concat(n.componentId):n.componentId||f,g=i&&s.attrs?s.attrs.concat(d).filter(Boolean):d,x=n.shouldForwardProp;if(i&&s.shouldForwardProp){var v=s.shouldForwardProp;if(n.shouldForwardProp){var b=n.shouldForwardProp;x=function(e,t){return v(e,t)&&b(e,t)}}else x=v}var y=new Cr(o,m,i?s.componentStyle:void 0);function w(t,n){return function(t,n,o){var a=t.attrs,i=t.componentStyle,s=t.defaultProps,l=t.foldedComponentIds,c=t.styledComponentId,d=t.target,u=r.useContext($r),f=vr(),p=t.shouldForwardProp||f.shouldForwardProp,h=function(e,t,r){return void 0===r&&(r=pt),e.theme!==r.theme&&e.theme||t||r.theme}(n,u,s)||pt,m=function(e,t,r){for(var n,o=ie(ie({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var i=_t(n=e[a])?n(o):n;for(var s in i)o[s]="className"===s?Wt(o[s],i[s]):"style"===s?ie(ie({},o[s]),i[s]):i[s]}return t.className&&(o.className=Wt(o.className,t.className)),o}(a,n,h),g=m.as||d,x={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===h||("forwardedAs"===v?x.as=m.forwardedAs:p&&!p(v,g)||(x[v]=m[v]));var b,y,w,j=(b=i,y=m,w=vr(),b.generateAndInjectStyles(y,w.styleSheet,w.stylis)),k=Wt(l,c);return j&&(k+=" "+j),m.className&&(k+=" "+m.className),x[St(g)&&!ht.has(g)?"class":"className"]=k,o&&(x.ref=o),e.createElement(g,x)}(j,t,n)}w.displayName=h;var j=r.forwardRef(w);return j.attrs=g,j.componentStyle=y,j.displayName=h,j.shouldForwardProp=x,j.foldedComponentIds=i?Wt(s.foldedComponentIds,s.styledComponentId):"",j.styledComponentId=m,j.target=i?s.target:t,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)Ut(e,o[n],!0);return e}({},s.defaultProps,e):e}}),qt(j,function(){return".".concat(j.styledComponentId)}),l&&Dt(j,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function Pr(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Ir=function(e){return Object.assign(e,{isCss:!0})};function Er(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(_t(e)||Yt(e))return Ir(Sr(Pr(ft,se([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Sr(n):Ir(Sr(Pr(n,t)))}function Nr(e,t,r){if(void 0===r&&(r=pt),!t)throw Gt(1,t);var n=function(n){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,r,Er.apply(void 0,se([n],o,!1)))};return n.attrs=function(n){return Nr(e,t,ie(ie({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Nr(e,t,ie(ie({},r),n))},n}var Mr=function(e){return Nr(Ar,e)},Or=Mr;ht.forEach(function(e){Or[e]=Mr(e)});const Lr=Or.nav`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
`,Rr=Or.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`,Fr=Or(n)`
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
`,Dr=Or.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`,_r=Or.div`
  position: relative;
`,Hr=Or.button`
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
  
  &:hover {
    background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surfaceHover)||"#f8f9fa"}};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`,Wr=Or.div`
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
`,Br=Or.button`
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
`;const Yr=()=>{re();const[t,r]=e.useState(!1),[n,o]=e.useState("zh");e.useEffect(()=>{const e=e=>{e.target.closest(".language-selector")||r(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const a=e=>{o(e),r(!1),console.log("切换语言为:",e)};return b.jsx(Lr,{children:b.jsxs(Rr,{children:[b.jsxs(Fr,{to:"/",children:[b.jsx(Dr,{src:"/logo-main.svg",alt:"Sudoku Logo"}),"SudokuTech"]}),b.jsxs(_r,{className:"language-selector",children:[b.jsx(Hr,{onClick:()=>{r(!t)},children:"中文"}),t&&b.jsxs(Wr,{children:[b.jsx(Br,{className:"zh"===n?"selected":"",onClick:()=>a("zh"),children:"中文"}),b.jsx(Br,{className:"en"===n?"selected":"",onClick:()=>a("en"),children:"English"})]})]})]})})},Ur=Or.footer`
  background-color: ${e=>e.theme.surface};
  color: ${e=>e.theme.textSecondary};
  padding: 20px 0;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`,qr=Or.div`
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
`,Gr=Or.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
  ${e=>e.theme.mediaQueries.small} {
    gap: 15px;
  }
`,Jr=Or.a`
  color: ${e=>e.theme.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${e=>e.theme.primary};
  }
`,Vr=Or.div`
  font-size: 14px;
  line-height: 1.5;
`,Xr=Or.div`
  font-size: 12px;
  margin-top: 10px;
`,Kr=()=>{const{theme:e}=re(),t=(new Date).getFullYear();return b.jsx(Ur,{theme:e,children:b.jsxs(qr,{theme:e,children:[b.jsxs(Gr,{theme:e,children:[b.jsx(Jr,{href:"#",theme:e,children:"关于我们"}),b.jsx(Jr,{href:"#",theme:e,children:"使用帮助"}),b.jsx(Jr,{href:"#",theme:e,children:"数独规则"}),b.jsx(Jr,{href:"#",theme:e,children:"联系我们"})]}),b.jsxs(Vr,{theme:e,children:["© ",t," 数独学习应用 版权所有"]}),b.jsx(Xr,{theme:e,children:"版本 1.0.0"})]})})},Qr=Or.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`,Zr=Or.div`
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
`,en=Or.div`
  color: ${e=>e.theme.text};
  font-size: 16px;
  font-weight: 500;
`,tn=({showMessage:e=!0})=>{const{theme:t}=re(),{loadingMessage:r}=ae();return b.jsxs(Qr,{children:[b.jsx(Zr,{theme:t}),e&&b.jsx(en,{theme:t,children:r})]})},rn=Or.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  transition: background-color 0.3s ease, color 0.3s ease;
`,nn=Or.main`
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 640px) {
    padding: 15px;
  }
`,on=Or.div`
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
`;function an({children:e}){const{theme:t}=re(),{isLoading:r}=ae();return b.jsxs(rn,{theme:t,children:[b.jsx(Yr,{}),b.jsx(nn,{children:e}),b.jsx(Kr,{}),r&&b.jsx(on,{children:b.jsx(tn,{})})]})}const sn=e.createContext(),ln=({children:t})=>{const[r,n]=e.useState(null),[o,a]=e.useState(!1),[i,s]=e.useState({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),[c,d]=e.useState({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}});e.useEffect(()=>{u()},[]);const u=async()=>{try{let e=await l.getItem("userId");e||(e="user_"+Date.now()+"_"+Math.random().toString(36).substr(2,9),await l.setItem("userId",e),K.success("欢迎使用数独学习应用！",{position:"top-right",autoClose:2e3})),n(e),a(!0);const t=await l.getItem(`stats_${e}`);t&&s(t);const r=await l.getItem(`techniques_${e}`);r&&d(r)}catch(e){console.error("初始化用户失败:",e),K.error("初始化用户数据失败",{position:"top-right",autoClose:2e3})}},f=async(e,t)=>{try{const n={...c,[e]:{...c[e],...t}};d(n),r&&await l.setItem(`techniques_${r}`,n)}catch(n){console.error("更新技巧学习进度失败:",n)}},p={userId:r,isAuthenticated:o,userStats:i,techniquesProgress:c,updateUserStats:async e=>{try{const t={...i,...e};s(t),r&&await l.setItem(`stats_${r}`,t)}catch(t){console.error("更新用户统计失败:",t)}},updateTechniqueProgress:f,incrementTechniquePractice:async e=>{const t=c[e]||{mastered:0,practiced:0};await f(e,{practiced:t.practiced+1})},resetUserData:async()=>{try{r&&(await l.removeItem(`stats_${r}`),await l.removeItem(`techniques_${r}`),await l.removeItem(`progress_${r}`)),s({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),d({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}}),K.success("用户数据已重置",{position:"top-right",autoClose:2e3})}catch(e){console.error("重置用户数据失败:",e),K.error("重置用户数据失败",{position:"top-right",autoClose:2e3})}}};return b.jsx(sn.Provider,{value:p,children:t})},cn=()=>{const t=e.useContext(sn);if(!t)throw new Error("useUser must be used within a UserContextProvider");return t},dn=c.create({baseURL:"/",timeout:1e4,headers:{"Content-Type":"application/json"}});dn.interceptors.request.use(e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),dn.interceptors.response.use(e=>e.data,e=>{var t,r,n,o;const a=(null==(r=null==(t=e.response)?void 0:t.data)?void 0:r.message)||(null==(o=null==(n=e.response)?void 0:n.data)?void 0:o.error)||"请求失败，请重试";return K.error(a,{position:"top-right",autoClose:2e3}),Promise.reject(e)});const un={generatePuzzle:async e=>{try{return await dn.post("/sudoku/puzzles/generate",{difficulty:e})}catch(t){throw console.error("生成数独谜题失败:",t),t}},getRandomPuzzleByDifficulty:async e=>{try{console.log(`Fetching puzzle with difficulty: ${e}`);const t=await dn.get(`/sudoku/puzzles/random/${e}`);if(!t||!t.puzzle)return console.error("Invalid puzzle data received from server"),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e};const{puzzle:r,solution:n,difficulty:o}=t;console.log("完整响应数据:",JSON.stringify(t));let a=n;return a&&Array.isArray(a)&&9===a.length||(console.warn("Solution data is missing or invalid"),a=Array(9).fill().map(()=>Array(9).fill(0))),{puzzle:r,solution:a,difficulty:o||e}}catch(t){return console.error("Error fetching puzzle:",t),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e}}},getPuzzleById:async e=>{try{return await dn.get(`/sudoku/puzzles/${e}`)}catch(t){throw console.error("获取谜题失败:",t),t}},solveSudoku:async e=>{try{return await dn.post("/sudoku/solve",{board:e})}catch(t){throw console.error("求解数独失败:",t),t}},validateSudoku:async e=>{try{return await dn.post("/sudoku/validate",{board:e})}catch(t){throw console.error("验证数独失败:",t),t}},getCandidates:async(e,t,r)=>{try{return await dn.post("/sudoku/candidates",{board:e,row:t,col:r})}catch(n){throw console.error("获取候选数失败:",n),n}},identifyTechniques:async e=>{try{return await dn.post("/sudoku/techniques",{board:e})}catch(t){throw console.error("识别技巧失败:",t),t}},getHint:async(e,t)=>{try{return await dn.post("/sudoku/hint",{board:e,solution:t})}catch(r){throw console.error("获取提示失败:",r),r}},getPuzzleList:async(e={})=>{try{return await dn.get("/sudoku/puzzles",{params:e})}catch(t){throw console.error("获取谜题列表失败:",t),t}},getPuzzleStats:async()=>{try{return await dn.get("/sudoku/puzzles/stats")}catch(e){throw console.error("获取谜题统计失败:",e),e}},getUserProgress:async e=>{try{return await dn.get(`/user/progress/${e}`)}catch(t){throw console.error("获取用户进度失败:",t),t}},saveUserProgress:async(e,t)=>{try{return await dn.post(`/user/progress/${e}`,t)}catch(r){throw console.error("保存用户进度失败:",r),r}},getActiveProgress:async()=>{try{return await dn.get("/user/progress/active")}catch(e){throw console.error("获取活跃进度失败:",e),e}},getCompletedPuzzles:async()=>{try{return await dn.get("/user/progress/completed")}catch(e){throw console.error("获取已完成谜题失败:",e),e}},deleteUserProgress:async e=>{try{return await dn.delete(`/user/progress/${e}`)}catch(t){throw console.error("删除用户进度失败:",t),t}},getUserTechniques:async()=>{try{return await dn.get("/user/techniques")}catch(e){throw console.error("获取用户技巧学习情况失败:",e),e}},updateTechniqueLearning:async(e,t)=>{try{return await dn.post(`/user/techniques/${e}`,t)}catch(r){throw console.error("更新技巧学习情况失败:",r),r}},incrementTechniquePractice:async e=>{try{return await dn.post(`/user/techniques/${e}/practice`)}catch(t){throw console.error("增加技巧练习次数失败:",t),t}},getUserStats:async()=>{try{return await dn.get("/user/stats")}catch(e){throw console.error("获取用户统计信息失败:",e),e}},healthCheck:async()=>{try{return(await c.get("/health")).data}catch(e){throw console.error("健康检查失败:",e),e}}};let fn=class{constructor(e,t){this.row=e,this.col=t,this.up=this,this.down=this,this.left=this,this.right=this,this.colHead=null}};class pn extends fn{constructor(e){super(-1,e),this.size=0}}const hn=()=>Array(9).fill().map(()=>Array(9).fill(0)),mn=new class{constructor(){this.root=new fn(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[]}setupSudokuMatrix(e){this.colHeaders=[];for(let r=0;r<324;r++){const e=new pn(r);this.colHeaders.push(e)}let t=this.root;for(let r=0;r<324;r++)t.right=this.colHeaders[r],this.colHeaders[r].left=t,t=this.colHeaders[r];t.right=this.root,this.root.left=t,this.rows=[];for(let r=0;r<9;r++)for(let t=0;t<9;t++)for(let n=1;n<=9;n++){if(0!==e[r][t]&&e[r][t]!==n)continue;const o=[9*r+t,81+9*r+(n-1),162+9*t+(n-1),243+9*(3*Math.floor(r/3)+Math.floor(t/3))+(n-1)],a=[];for(let e of o){const t=new fn(this.rows.length,e);t.colHead=this.colHeaders[e],a.push(t)}for(let e=0;e<a.length;e++)a[e].left=a[(e-1+a.length)%a.length],a[e].right=a[(e+1)%a.length];for(let e of a){const t=e.colHead;e.up=t.up,t.up.down=e,e.down=t,t.up=e,t.size++}this.rows.push([r,t,n])}}selectColumn(){let e=1/0,t=null;for(let r=this.root.right;r!==this.root;r=r.right)r.size<e&&(e=r.size,t=r);return t}coverColumn(e){e.left.right=e.right,e.right.left=e.left;for(let t=e.down;t!==e;t=t.down)for(let e=t.right;e!==t;e=e.right)e.up.down=e.down,e.down.up=e.up,e.colHead.size--}uncoverColumn(e){for(let t=e.up;t!==e;t=t.up)for(let e=t.left;e!==t;e=e.left)e.up.down=e,e.down.up=e,e.colHead.size++;e.left.right=e,e.right.left=e}search(e=2){const t=[],r=()=>{if(this.root.right===this.root)return t.push([...this.solution]),t.length<e;const n=this.selectColumn();this.coverColumn(n);for(let e=n.down;e!==n;e=e.down){this.solution.push(this.rows[e.row]);for(let t=e.right;t!==e;t=t.right)this.coverColumn(t.colHead);if(!r())return!1;this.solution.pop();for(let t=e.left;t!==e;t=t.left)this.uncoverColumn(t.colHead)}return this.uncoverColumn(n),!0};return r(),t}solveSudoku(e){this.root=new fn(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);const t=this.search(1);if(0===t.length)return null;const r=Array(9).fill().map(()=>Array(9).fill(0));for(let[n,o,a]of t[0])r[n][o]=a;return r}hasUniqueSolution(e){this.root=new fn(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);return 1===this.search(2).length}},gn=(e,t,r,n)=>{for(let i=0;i<9;i++)if(i!==r&&e[t][i]===n)return!1;for(let i=0;i<9;i++)if(i!==t&&e[i][r]===n)return!1;const o=3*Math.floor(t/3),a=3*Math.floor(r/3);for(let i=o;i<o+3;i++)for(let o=a;o<a+3;o++)if(i!==t&&o!==r&&e[i][o]===n)return!1;return!0},xn=e=>{for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(0===e[t][r])return[t,r];return null},vn=e=>{try{return mn.hasUniqueSolution(e)}catch(t){return console.error("验证数独唯一性时出错:",t),bn(e)}},bn=e=>{const t=e.map(e=>[...e]);let r=0;const n=()=>{if(r>1)return;const e=xn(t);if(!e)return void r++;const[o,a]=e;for(let r=1;r<=9;r++)gn(t,o,a,r)&&(t[o][a]=r,n(),t[o][a]=0)};return n(),1===r},yn=()=>{const e=[1,2,3,4,5,6,7,8,9];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},wn=async(e="medium")=>{console.log(`开始生成${e}难度的数独题目`);const t=(()=>{console.debug("开始生成完整的数独解");for(let t=1;t<=10;t++)try{const e=hn();for(let t=0;t<9;t+=3){const r=yn();let n=0;for(let o=0;o<3;o++)for(let a=0;a<3;a++)e[t+o][t+a]=r[n++]}const r=mn.solveSudoku(e);if(r&&jn(r))return console.debug(`成功生成完整数独解（尝试次数：${t}）`),r;const n=()=>{const t=xn(e);if(!t)return!0;const[r,o]=t,a=yn();for(const i of a)if(gn(e,r,o,i)){if(e[r][o]=i,n())return!0;e[r][o]=0}return!1};if(n()&&jn(e))return console.debug(`使用回溯算法成功生成完整数独解（尝试次数：${t}）`),e}catch(e){console.error(`生成数独解时出错（尝试 ${t}/10）:`,e)}return console.error("超过最大尝试次数（10），无法生成有效的数独解"),null})();if(!t)return console.error("生成完整数独解失败"),null;const r=t.map(e=>[...e]);let n;switch(e){case"easy":n=40;break;case"medium":default:n=50;break;case"hard":n=55;break;case"expert":n=60}let o=0;const a=[];for(let i=0;i<9;i++)for(let e=0;e<9;e++)a.push([i,e]);for(let i=a.length-1;i>0;i--){const e=Math.floor(Math.random()*(i+1));[a[i],a[e]]=[a[e],a[i]]}for(const[i,s]of a){if(o>=n)break;const e=r[i][s];r[i][s]=0,vn(r)?(o++,console.debug(`已移除单元格(${i},${s})，当前已移除${o}/${n}个`)):r[i][s]=e}return vn(r)||console.warn(`警告：生成的${e}难度题目可能没有唯一解，尝试重新生成`),console.log(`成功生成${e}难度数独题目，保留了${81-o}个数字`),{puzzle:r,solution:t}},jn=e=>{for(let t=0;t<9;t++){const r=new Set;for(let n=0;n<9;n++){const o=e[t][n];if(0!==o){if(r.has(o))return!1;r.add(o)}}}for(let t=0;t<9;t++){const r=new Set;for(let n=0;n<9;n++){const o=e[n][t];if(0!==o){if(r.has(o))return!1;r.add(o)}}}for(let t=0;t<3;t++)for(let r=0;r<3;r++){const n=new Set;for(let o=0;o<3;o++)for(let a=0;a<3;a++){const i=3*r+a,s=e[3*t+o][i];if(0!==s){if(n.has(s))return!1;n.add(s)}}}return!0};let kn=null,Sn=null;const zn=18e5,Cn=async()=>{try{console.log("开始获取随机专家级题目");const e=await(async()=>{try{const e=Date.now();if(kn&&Sn&&e-Sn<zn)return console.log("使用缓存的专家级题目数据"),kn;const t=await l.getItem("expert_puzzles_cache");if(t&&t.timestamp&&e-t.timestamp<zn)return console.log("从localforage加载缓存的专家级题目"),kn=t.data,Sn=t.timestamp,kn;console.log("从JSON文件加载专家级题目");const r=await fetch("/expert_puzzles.json");if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const n=await r.json();if(!n.puzzles||!Array.isArray(n.puzzles))throw new Error("无效的专家级题目数据格式");return kn=n.puzzles,Sn=e,await l.setItem("expert_puzzles_cache",{data:n.puzzles,timestamp:e}),console.log(`成功加载 ${n.puzzles.length} 个专家级题目`),n.puzzles}catch(e){return console.error("加载专家级题目失败:",e),[]}})();if(!e||0===e.length)return console.warn("没有可用的专家级题目"),null;const t=e[Math.floor(Math.random()*e.length)];if(!t||!t.puzzle||!t.solution){if(console.error("选中的谜题数据不完整:",t),e.length>1){console.log("尝试重新选择另一个谜题");const t=e.filter(e=>e&&e.puzzle&&e.solution);if(t.length>0){const e=Math.floor(Math.random()*t.length);return console.log(`重新选择有效专家级题目 #${t[e].id||"unknown"}`),t[e]}}return null}return console.log(`随机选择专家级题目 #${t.id||"unknown"}`),t}catch(e){return console.error("获取随机专家级题目失败:",e),null}},$n=(e,t)=>{const r=[];for(let n=1;n<=9;n++){let o=0,a=-1;for(let r=0;r<9&&!(0===e[t][r]&&(Pn(e,t,r,n)&&(o++,a=r),o>1));r++);1===o&&r.push({type:"hiddenSingleRow",description:"行隐性唯一数法",row:t,col:a,value:n,cells:[[t,a]],message:`在第${t+1}行中，数字${n}只能填入单元格(${t+1},${a+1})`})}return r},Tn=(e,t)=>{const r=[];for(let n=1;n<=9;n++){let o=0,a=-1;for(let r=0;r<9&&!(0===e[r][t]&&(Pn(e,r,t,n)&&(o++,a=r),o>1));r++);1===o&&r.push({type:"hiddenSingleCol",description:"列隐性唯一数法",row:a,col:t,value:n,cells:[[a,t]],message:`在第${t+1}列中，数字${n}只能填入单元格(${a+1},${t+1})`})}return r},An=(e,t)=>{const r=[],n=3*Math.floor(t/3),o=t%3*3;for(let a=1;a<=9;a++){let i=0,s=-1,l=-1;for(let t=0;t<3;t++){for(let r=0;r<3;r++){const c=n+t,d=o+r;if(0===e[c][d]&&(Pn(e,c,d,a)&&(i++,s=c,l=d),i>1))break}if(i>1)break}1===i&&r.push({type:"hiddenSingleBox",description:"宫隐性唯一数法",row:s,col:l,value:a,cells:[[s,l]],message:`在第${t+1}宫中，数字${a}只能填入单元格(${s+1},${l+1})`})}return r},Pn=(e,t,r,n)=>{for(let i=0;i<9;i++)if(e[t][i]===n)return!1;for(let i=0;i<9;i++)if(e[i][r]===n)return!1;const o=3*Math.floor(t/3),a=3*Math.floor(r/3);for(let i=o;i<o+3;i++)for(let t=a;t<a+3;t++)if(e[i][t]===n)return!1;return!0},In=(e,t={})=>{const r=t;if(0===Object.keys(t).length)for(let a=0;a<9;a++)for(let t=0;t<9;t++)if(0===e[a][t]){const n=[];for(let r=1;r<=9;r++)Pn(e,a,t,r)&&n.push(r);n.length>0&&(r[`${a}-${t}`]=n)}const n=((e,t)=>{const r=[];for(let n=0;n<9;n++)for(let o=0;o<9;o++){if(0!==e[n][o])continue;const a=t[`${n}-${o}`]||[];1===a.length&&r.push({type:"nakedSingle",description:"唯一数法",row:n,col:o,value:a[0],cells:[[n,o]],message:`单元格(${n+1},${o+1})只有数字${a[0]}可以填入`})}return r})(e,r),o=(e=>{const t=[];for(let r=0;r<9;r++){const n=$n(e,r);t.push(...n)}for(let r=0;r<9;r++){const n=Tn(e,r);t.push(...n)}for(let r=0;r<9;r++){const n=An(e,r);t.push(...n)}return t})(e);return[...n,...o]},En=e.createContext(),Nn={EASY:"easy",MEDIUM:"medium",HARD:"hard",EXPERT:"expert"},Mn=({children:t})=>{const{userId:r,updateUserStats:n}=cn(),[o,a]=e.useState(null),[i,s]=e.useState(null),[c,d]=e.useState(null),[u,f]=e.useState(null),[p,h]=e.useState(Nn.MEDIUM),[m,g]=e.useState(!1),[x,v]=e.useState(!1),[y,w]=e.useState(0),[j,k]=e.useState(!1),[S,z]=e.useState(null),[C,$]=e.useState({}),[T,A]=e.useState([]),[P,I]=e.useState([]),[E,N]=e.useState([]),[M,O]=e.useState(-1),[L,R]=e.useState(0),[F,D]=e.useState(0),[_,H]=e.useState(new Set),[W,B]=e.useState(!1),[Y,U]=e.useState({}),[q,G]=e.useState(new Set);e.useEffect(()=>{(async()=>{console.log("SudokuContext: 初始化自动生成谜题");try{U({}),N([]),O(-1),R(0),D(0),H(new Set),G(new Set),console.log("使用预设的数独题目");const e={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]};console.log("预设谜题数据:",e);const t=ee(e);console.log("格式化后的数据:",t),a(t),console.log("设置 currentPuzzle 完成"),d(t.puzzle),console.log("设置 originalPuzzle 完成"),s(t.puzzle),console.log("设置 currentBoard 完成，currentBoard:",t.puzzle),f(t.solution),console.log("设置 solution 完成"),g(!0),console.log("设置 gameStarted 为 true"),v(!1),k(!0),R(0),D(0),H(new Set),console.log("谜题初始化完成")}catch(e){console.error("自动初始化谜题失败:",e),console.error("错误详情:",e.message,e.stack)}})()},[]),e.useEffect(()=>{if(o&&i&&m&&!x){const e=setTimeout(()=>{V()},3e4);return()=>clearTimeout(e)}},[i,m,x]),e.useEffect(()=>{let e;return j&&(e=setInterval(()=>{w(e=>e+1)},1e3)),()=>{e&&clearInterval(e)}},[j]);const J=e.useCallback(async()=>{try{if(!r)return null;const e=(await l.keys()).filter(e=>e.startsWith(`progress_${r}_`));if(0===e.length)return null;let t=null,n=0;for(const r of e){const e=await l.getItem(r);e.lastModified>n&&(n=e.lastModified,t=e)}return t&&(a({id:t.puzzleId,puzzle:t.puzzle}),s(t.currentBoard),f(t.solution),h(t.difficulty),w(t.timeElapsed),g(t.gameStarted),v(t.gameCompleted),R(t.errorCount||0),D(t.errorCount||0),H(new Set(t.incorrectCells||[])),k(!1)),t}catch(e){return console.error("加载游戏进度失败:",e),null}},[r]),V=e.useCallback(async()=>{try{if(!r||!o||!i)return;const e={puzzleId:o.id,puzzle:o.puzzle,solution:u,difficulty:p,currentBoard:i,timeElapsed:y,gameStarted:m,gameCompleted:x,errorCount:F,incorrectCells:Array.from(_),lastModified:Date.now()};return await l.setItem(`progress_${r}_${o.id}`,e),!0}catch(e){return console.error("保存游戏进度失败:",e),!1}},[r,o,i,u,p,y,m,x,L,_]),X=()=>Array(9).fill().map(()=>Array(9).fill(0)),Q=async(e="medium")=>{try{console.log(`开始生成${e}难度的数独题目...`);const t=await wn(e);if(console.log("generateSudoku 返回结果:",t),!t||!t.puzzle||!t.solution)throw console.error("生成的数独数据不完整:",t),new Error("生成的数独数据不完整");const{puzzle:r,solution:n}=t;return vn(r)?(console.log(`成功生成${e}难度的数独题目，使用DLX算法验证了唯一解`),console.log("谜题数据预览:",r.slice(0,2).map(e=>e.slice(0,2).join(",")).join(";")),{puzzle:r,solution:n}):(console.warn("警告：生成的数独题目可能没有唯一解"),Q(e))}catch(t){return console.error(`生成${e}难度的数独题目时出错:`,t),await Z(e)}},Z=async(e="medium")=>{try{console.log(`使用备用方法生成${e}难度的数独题目...`);const{puzzle:t,solution:r}=await wn(e);return console.log(`备用方法成功生成${e}难度的数独题目`),{puzzle:t,solution:r}}catch(t){console.error("备用方法生成数独题目失败:",t);const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];return console.log("使用预设的简单数独题目作为最后的备用"),{puzzle:e,solution:r}}},ee=e=>{if(console.log("formatPuzzleData 输入:",e),e&&e.puzzle){if("string"==typeof e.puzzle&&81===e.puzzle.length){const t=[];for(let r=0;r<9;r++){t.push([]);for(let n=0;n<9;n++)t[r].push(parseInt(e.puzzle[9*r+n])||0)}return{puzzle:t,solution:e.solution&&"string"==typeof e.solution&&81===e.solution.length?(()=>{const t=[];for(let r=0;r<9;r++){t.push([]);for(let n=0;n<9;n++)t[r].push(parseInt(e.solution[9*r+n])||0)}return t})():t}}if(Array.isArray(e.puzzle)&&9===e.puzzle.length){const t=e.puzzle.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0));let r=t;return e.solution&&Array.isArray(e.solution)&&9===e.solution.length&&(r=e.solution.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0))),console.log("formatPuzzleData 输出:",{puzzle:t,solution:r}),{puzzle:t,solution:r}}}console.warn("formatPuzzleData: 输入数据不完整或格式不正确，返回默认空数组",e);const t=Array(9).fill().map(()=>Array(9).fill(0));return{puzzle:t,solution:t}},te=(e,t,r)=>!u||!u[e]||void 0===u[e][t]||u[e][t]===r,re=(e,t,r)=>{if(!m||x)return;if(c&&c[e]&&null!==c[e][t]&&0!==c[e][t])return void console.log("Cannot modify prefilled cell with notes:",e,t);const n=`${e}-${t}`,o={...Y},a=E.slice(0,M+1);a.push({board:i,pencilNotes:{...Y},row:e,col:t,type:"pencil"}),N(a),O(a.length-1),o[n]?o[n].includes(r)?(o[n]=o[n].filter(e=>e!==r),0===o[n].length&&delete o[n]):o[n]=[...new Set([...o[n],r])].sort((e,t)=>e-t):o[n]=[r],U(o)},ne=(e,t)=>{if(!m||x)return;const r=`${e}-${t}`;if(!Y[r])return;const n=E.slice(0,M+1);n.push({board:i,pencilNotes:{...Y},row:e,col:t,type:"clear-pencil"}),N(n),O(n.length-1);const o={...Y};delete o[r],U(o)},oe=(e,t,r)=>{if(!m||x)return;const n=`${e}-${t}`;if(c&&c[e]&&null!==c[e][t]&&0!==c[e][t])return void console.log("Cannot modify prefilled cell:",e,t);if(q.has(n))return void console.log("Cannot modify locked cell (correct answer):",e,t);if(W)return void(0===r?ne(e,t):re(e,t,r));const o=[...i.map(e=>[...e])],a=te(e,t,r);o[e][t]=r,s(o);const l={...Y};if(0!==r&&l[n]&&delete l[n],0!==r&&a){for(let a=0;a<9;a++)if(a!==t){const t=`${e}-${a}`;l[t]&&(l[t]=l[t].filter(e=>e!==r),0===l[t].length&&delete l[t])}for(let a=0;a<9;a++)if(a!==e){const e=`${a}-${t}`;l[e]&&(l[e]=l[e].filter(e=>e!==r),0===l[e].length&&delete l[e])}const n=3*Math.floor(e/3),o=3*Math.floor(t/3);for(let a=n;a<n+3;a++)for(let n=o;n<o+3;n++)if(a!==e||n!==t){const e=`${a}-${n}`;l[e]&&(l[e]=l[e].filter(e=>e!==r),0===l[e].length&&delete l[e])}}U(l);const d=E.slice(0,M+1);d.push({board:i,pencilNotes:{...Y},row:e,col:t,prevValue:i[e][t],type:"fill",isCorrectInput:0!==r&&a}),N(d),O(d.length-1);const u=new Set(_);if(0!==r)if(a){u.delete(n);const e=new Set(q);e.add(n),G(e)}else _.has(n)||D(e=>e+1),u.add(n),K.error("输入错误，请重试！",{position:"top-right",autoClose:1e3,theme:"colored"});else u.delete(n);H(u),ae(o)},ae=e=>{if(u){for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(!e[t][r]||e[t][r]!==u[t][r])return;v(!0),k(!1),H(new Set),n&&n({puzzlesCompleted:1,puzzlesSolved:1,totalTimePlayed:y}),K.success("恭喜！您成功完成了这个数独！",{position:"top-right",autoClose:3e3}),V()}},ie=e.useCallback(()=>{try{const e=In(i,Y);return I(e),e}catch(e){return console.error("识别技巧失败:",e),[]}},[i,Y]),se=e.useCallback(e=>{try{const t=((e,t)=>{const r=t.map(e=>[...e]);switch(e.type){case"nakedSingle":case"hiddenSingleRow":case"hiddenSingleCol":case"hiddenSingleBox":return r[e.row][e.col]=e.value,{board:r,operation:{type:"fill",row:e.row,col:e.col,value:e.value}};default:return console.warn("未知的技巧类型:",e.type),{board:r,operation:null}}})(e,i);if(t&&t.board){const{row:e,col:r,value:n}=t.operation,o=W;return o&&B(!1),oe(e,r,n),o&&B(!0),!0}return!1}catch(t){return console.error("应用技巧失败:",t),K.error("应用技巧失败，请重试",{position:"top-right",autoClose:2e3}),!1}},[oe,i,W]),le=(e,t)=>{if(!i)return[];const r=[];for(let n=1;n<=9;n++)ce(e,t,n)&&r.push(n);return r.sort((e,t)=>e-t)},ce=(e,t,r)=>{if(!i)return!1;for(let a=0;a<9;a++)if(i[e][a]===r)return!1;for(let a=0;a<9;a++)if(i[a][t]===r)return!1;const n=3*Math.floor(e/3),o=3*Math.floor(t/3);for(let a=n;a<n+3;a++)for(let e=o;e<o+3;e++)if(i[a][e]===r)return!1;return!0},de={currentPuzzle:o,currentBoard:i||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:c,solution:u||Array(9).fill().map(()=>Array(9).fill(0)),difficulty:p,gameStarted:m,gameCompleted:x,timeElapsed:y,timerActive:j,isTimerActive:j,selectedCell:S,candidates:C,highlightedCells:T,activeTechniques:P,lockedCells:q,history:E,historyIndex:M,errorCount:F,incorrectCells:_,isPencilMode:W,pencilNotes:Y,setDifficulty:h,setSelectedCell:z,setHighlightedCells:A,setTimerActive:k,toggleTimer:()=>{k(e=>!e)},togglePencilMode:()=>{B(e=>!e)},togglePencilNote:re,clearPencilNotes:ne,fillAllCandidates:()=>{if(!m||x||!i)return;const e={},t=E.slice(0,M+1);t.push({board:i,pencilNotes:{...Y},type:"fill-candidates"}),N(t),O(t.length-1);for(let r=0;r<9;r++)for(let t=0;t<9;t++){if(c&&c[r]&&0!==c[r][t]||i[r]&&0!==i[r][t])continue;const n=le(r,t);n.length>0&&(e[`${r}-${t}`]=n)}U(e),K.info("已为所有空白格子计算并填充候选数！",{position:"top-right",autoClose:2e3})},loadSavedProgress:J,saveGameProgress:V,startNewGame:async(e=null,t=null)=>{console.log("SudokuContext: 开始新游戏",{puzzleId:e,difficultyOverride:t});try{s(X()),U({}),B(!1),$({}),I([]),A([]),k(!1),w(0),v(!1),N([]),O(-1),R(0),D(0),H(new Set),G(new Set),g(!0),await new Promise(e=>setTimeout(e,50));const e=t||p;let i;console.log("使用难度:",e),e!==p&&h(e);let l=0;const c=3;let u=!1;for(;!i&&l<c;){l++,console.log(`尝试生成谜题 (${l}/${c})`);try{if(e===Nn.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const e=await Cn();e&&e.puzzle&&e.solution?(i=e,u=!0,console.log("成功从JSON文件获取专家级谜题")):console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成")}catch(r){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",r)}}i||(console.log("使用程序生成谜题"),i=await Q(e))}catch(o){console.error(`生成谜题失败 (尝试 ${l}/${c}):`,o)}}if(!i){console.error("多次尝试生成谜题失败，使用备用谜题");i={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]}}const m=ee(i);if(console.log("谜题数据准备完成，formattedData:",m),!m||!m.puzzle||!Array.isArray(m.puzzle)||9!==m.puzzle.length){console.error("格式化后的数据无效，使用备用谜题");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];m.puzzle=e,m.solution=t}return a(m),console.log("设置 currentPuzzle 完成"),d(m.puzzle),console.log("设置 originalPuzzle 完成"),s(m.puzzle),console.log("设置 currentBoard 完成"),f(m.solution),console.log("设置 solution 完成"),g(!0),v(!1),w(0),k(!0),N([]),O(-1),n&&n({puzzlesStarted:1}),e===Nn.EXPERT?K.success(u?"已加载专家题库题目！":"已生成专家难度题目！",{position:"top-right",autoClose:2e3}):K.success("已生成新谜题！",{position:"top-right",autoClose:2e3}),console.log("新游戏设置完成"),m}catch(i){console.error("开始新游戏失败:",i);try{const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],r={puzzle:e,solution:t};return a(r),d(e),s(e),f(t),g(!0),v(!1),k(!0),K.success("已使用备用谜题！",{position:"top-right",autoClose:2e3}),r}catch(l){console.error("使用备用谜题也失败:",l),K.error("生成谜题失败，请刷新页面重试",{position:"top-right",autoClose:2e3})}return null}},generateNewPuzzle:async(e=p)=>{console.log("SudokuContext: 生成新谜题",{targetDifficulty:e});try{let r;if(s(X()),U({}),B(!1),$({}),I([]),A([]),k(!1),w(0),v(!1),N([]),O(-1),R(0),D(0),H(new Set),G(new Set),g(!0),await new Promise(e=>setTimeout(e,50)),e!==p&&(h(e),console.log("已设置新难度:",e)),e===Nn.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const t=await Cn();t&&t.puzzle&&t.solution?(r=t,console.log("成功从JSON文件获取专家级谜题")):(console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成"),r=await Q(e))}catch(t){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",t),r=await Q(e)}}else console.log("非专家难度：使用程序生成谜题"),r=await Q(e);const o=ee(r);return console.log("谜题数据准备完成，formattedData:",o),console.log("puzzleData.puzzle 是否存在:",!!o.puzzle),o.puzzle&&(console.log("puzzle 类型:",Array.isArray(o.puzzle)?"数组":typeof o.puzzle),console.log("puzzle 长度:",Array.isArray(o.puzzle)?o.puzzle.length:"不是数组"),Array.isArray(o.puzzle)&&o.puzzle.length>0&&console.log("puzzle 第一行:",o.puzzle[0])),a(o),console.log("设置 currentPuzzle 完成"),d(o.puzzle),console.log("设置 originalPuzzle 完成"),s(o.puzzle),console.log("设置 currentBoard 完成"),f(o.solution),console.log("设置 solution 完成"),g(!0),v(!1),w(0),k(!0),N([]),O(-1),n&&n({puzzlesStarted:1}),K.success("已生成新谜题！",{position:"top-right",autoClose:2e3}),console.log("新谜题设置完成"),o}catch(r){return console.error("生成新谜题失败:",r),K.error("生成谜题失败，请重试",{position:"top-right",autoClose:2e3}),null}},fillCell:oe,clearCell:(e,t)=>{if(!m||x)return;const r=`${e}-${t}`;if(c&&c[e]&&0!==c[e][t])return void console.log("Cannot clear prefilled cell:",e,t);if(q.has(r))return void console.log("Cannot clear locked cell (correct answer):",e,t);const n=E.slice(0,M+1);if(n.push({board:i,pencilNotes:{...Y},row:e,col:t,prevValue:i[e][t],type:"clear"}),N(n),O(n.length-1),W)return void ne(e,t);const o=[...i.map(e=>[...e])];o[e][t]=0,s(o);const a=new Set(_);a.delete(r),H(a),R(a.size);const l=new Set(q);l.delete(r),G(l)},undo:()=>{if(M>=0){const e=E[M];s(e.board),e.pencilNotes&&U(e.pencilNotes),O(M-1),v(!1);const t=new Set;for(let n=0;n<9;n++)for(let r=0;r<9;r++){const o=e.board[n][r];0!==o&&u&&o!==u[n][r]&&t.add(`${n}-${r}`)}H(t);const r=new Set;for(let n=0;n<9;n++)for(let t=0;t<9;t++){const o=e.board[n][t];0!==o&&u&&o===u[n][t]&&r.add(`${n}-${t}`)}G(r)}else console.log("没有可撤销的操作")},redo:()=>{if(M<E.length-1){const e=E[M+1];s(e.board),e.pencilNotes&&U(e.pencilNotes),O(M+1);const t=new Set;for(let n=0;n<9;n++)for(let r=0;r<9;r++){const o=e.board[n][r];0!==o&&u&&o!==u[n][r]&&t.add(`${n}-${r}`)}H(t);const r=new Set;for(let n=0;n<9;n++)for(let t=0;t<9;t++){const o=e.board[n][t];0!==o&&u&&o===u[n][t]&&r.add(`${n}-${t}`)}G(r),ae(e.board)}},getCandidates:async(e,t)=>{try{const r=await un.getCandidates(i,e,t);return $(r.candidates),r.candidates}catch(r){return console.error("获取候选数失败:",r),[]}},identifyTechniques:ie,applyTechniqueToBoard:se,getHint:async()=>{try{return await un.getHint(i,u)}catch(e){return console.error("获取提示失败:",e),K.error("获取提示失败，请重试",{position:"top-right",autoClose:2e3}),null}},validateCellInput:te};return b.jsx(En.Provider,{value:de,children:t})},On=()=>{const t=e.useContext(En);if(!t)throw new Error("useSudoku must be used within a SudokuContextProvider");return t},Ln=Or.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0;
  @media (max-width: 640px) {
    gap: 30px;
    padding: 10px 0;
  }
`,Rn=Or.section`
  text-align: center;
  padding: 40px 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    padding: 30px 15px;
  }
`,Fn=Or.h1`
  font-size: 42px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`,Dn=Or.p`
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
`,_n=Or.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`,Hn=Or(n)`
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
`,Wn=Or(n)`
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
`,Bn=Or.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  @media (max-width: 640px) {
    gap: 20px;
  }
`,Yn=Or.div`
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
`,Un=Or.div`
  font-size: 48px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  display: flex;
  justify-content: center;
`,qn=Or.h3`
  font-size: 22px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`,Gn=Or.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  line-height: 1.6;
  margin: 0;
  text-align: center;
`,Jn=Or.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Vn=Or.h2`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 26px;
  }
`,Xn=Or.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`,Kn=Or.button`
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
`,Qn=Or.button`
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
`,Zn=Or.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,eo=Or.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`,to=Or.div`
  text-align: center;
  padding: 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 8px;
`,ro=Or.div`
  font-size: 36px;
  font-weight: bold;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 10px;
  @media (max-width: 640px) {
    font-size: 30px;
  }
`,no=Or.div`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
`,oo=()=>{re();const{userStats:e}=cn(),{setDifficulty:t,startNewGame:n}=On(),{executeWithLoading:a,isLoading:i}=ae(),s=o(),[l,c]=r.useState(Nn.MEDIUM),d=e=>{c(e)};return b.jsxs(Ln,{children:[b.jsxs(Rn,{children:[b.jsx(Fn,{children:"欢迎来到数独学习应用"}),b.jsx(Dn,{children:"提升您的数独技能，学习从基础到高级的解题技巧。适合各级别玩家，让您的数独之旅更加精彩！"}),b.jsxs(_n,{children:[b.jsx(Hn,{to:"/game",children:"开始游戏"}),b.jsx(Wn,{to:"/techniques",children:"学习技巧"})]})]}),b.jsxs(Bn,{children:[b.jsxs(Yn,{children:[b.jsx(Un,{children:"🧠"}),b.jsx(qn,{children:"多种难度"}),b.jsx(Gn,{children:"从简单到专家级别的数独谜题，适合不同水平的玩家，循序渐进提升您的技能。"})]}),b.jsxs(Yn,{children:[b.jsx(Un,{children:"💡"}),b.jsx(qn,{children:"技巧学习"}),b.jsx(Gn,{children:"详细的解题技巧讲解，从唯一候选数到高级技巧，帮助您掌握数独的精髓。"})]}),b.jsxs(Yn,{children:[b.jsx(Un,{children:"📊"}),b.jsx(qn,{children:"进度追踪"}),b.jsx(Gn,{children:"记录您的游戏进度和技巧掌握情况，分析您的表现，持续进步。"})]}),b.jsxs(Yn,{children:[b.jsx(Un,{children:"🎯"}),b.jsx(qn,{children:"实时提示"}),b.jsx(Gn,{children:"遇到困难时获得智能提示，帮助您理解下一步的解题思路和技巧应用。"})]})]}),b.jsxs(Jn,{children:[b.jsx(Vn,{children:"快速开始"}),b.jsxs(Xn,{children:[b.jsx(Kn,{selected:l===Nn.EASY,onClick:()=>d(Nn.EASY),children:"简单"}),b.jsx(Kn,{selected:l===Nn.MEDIUM,onClick:()=>d(Nn.MEDIUM),children:"中等"}),b.jsx(Kn,{selected:l===Nn.HARD,onClick:()=>d(Nn.HARD),children:"困难"}),b.jsx(Kn,{selected:l===Nn.EXPERT,onClick:()=>d(Nn.EXPERT),children:"专家"})]}),b.jsx(Qn,{onClick:async()=>{t(l);const e=await a(()=>n(null,l),"准备游戏中...");e&&s(`/game/${e.id}`)},disabled:i,children:i?b.jsx(tn,{showMessage:!1}):"开始游戏"})]}),b.jsxs(Zn,{children:[b.jsx(Vn,{children:"您的进度"}),b.jsxs(eo,{children:[b.jsxs(to,{children:[b.jsx(ro,{children:e.puzzlesStarted}),b.jsx(no,{children:"开始的谜题"})]}),b.jsxs(to,{children:[b.jsx(ro,{children:e.puzzlesCompleted}),b.jsx(no,{children:"完成的谜题"})]}),b.jsxs(to,{children:[b.jsx(ro,{children:e.puzzlesSolved}),b.jsx(no,{children:"独立解决"})]}),b.jsxs(to,{children:[b.jsx(ro,{children:Math.floor(e.totalTimePlayed/60)}),b.jsx(no,{children:"游戏分钟"})]})]})]})]})},ao=Or.div.attrs({className:"sudoku-board"})`
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
`,io=Or.div`
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
`,so=({notes:e=[],highlightedNumber:t=null})=>{const r=Array.isArray(e)?e:[],n={display:"flex",alignItems:"center",justifyContent:"center",fontSize:"calc(var(--board-width) * 0.025)",fontWeight:"500",color:"#4A6FA5",padding:"1px"},o={color:"#ffffff",backgroundColor:"#3498db",borderRadius:"50%",fontWeight:"bold",width:"80%",height:"80%"};return b.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr",width:"100%",height:"100%",boxSizing:"border-box"},children:r.map(e=>{const r=(e-1)%3,a=Math.floor((e-1)/3),i=t&&e===t;return b.jsx("div",{style:{...n,gridColumn:r+1,gridRow:a+1,...i&&o},children:e},e)})})},lo=({board:e,selectedCell:t,onCellClick:r,originalPuzzle:n,isPencilMode:o,pencilNotes:a,incorrectCells:i,highlightedCells:s})=>{const{theme:l}=re(),c=e||Array(9).fill().map(()=>Array(9).fill(0)),d=n||Array(9).fill().map(()=>Array(9).fill(0)),u=a||{},f=i||new Set,p=(e,t)=>3*Math.floor(e/3)+Math.floor(t/3),h=(e,r,n)=>{const a=[];if(u[`${e}-${r}`],((e,t,r)=>!(!d||!d[t]||null===d[t][r]||0===d[t][r]))(0,e,r)&&a.push("prefilled"),((e=>"error"===e)(n)||((e,t)=>{const r=`${e}-${t}`;return f instanceof Set?f.has(r):!!Array.isArray(f)&&f.some(r=>r.row===e&&r.col===t)})(e,r))&&a.push("error"),!t&&s&&Array.isArray(s)){s.some(t=>t.row===e&&t.col===r)&&a.push("highlighted")}if(t&&t.row===e&&t.col===r)a.push("selected"),a.push(o?"pencil-selected":"normal-selected");else if(t){const o=c[t.row][t.col],s=`${t.row}-${t.col}`;u[s],n&&n===o&&a.push("same-number"),i=e,l=r,h=t.row,m=t.col,(i===h||l===m||p(i,l)===p(h,m))&&a.push("same-region")}var i,l,h,m;return a.join(" ")};return b.jsx(ao,{theme:l,children:c.map((e,n)=>e.map((e,o)=>{const a=h(n,o,e),i=`${n}-${o}`,d=u[i]||[],f=d.length>0;let p=null;if(t&&void 0!==t.row&&void 0!==t.col&&c[t.row]&&c[t.row][t.col]){const e=c[t.row][t.col];0!==e&&"error"!==e&&(p=e)}if(!p&&s&&Array.isArray(s)&&s.length>0){const e=s[0];e&&e.number&&0!==e.number&&"error"!==e.number&&(p=e.number)}return b.jsx(io,{row:n,col:o,className:a,onClick:()=>((e,t)=>{r&&r(e,t)})(n,o),theme:l,children:e&&0!==e&&"error"!==e?e:f?b.jsx(so,{notes:d,highlightedNumber:p}):""},i)}))})},co=({onNumberSelect:t,onClearCell:r,onUndo:n,onTogglePencilMode:o,selectedNumber:a,isPencilMode:i,remainingNumbers:s={}})=>{re();const[l,c]=e.useState("keyboard"),[d,u]=e.useState(null),{identifyTechniques:f,applyTechniqueToBoard:p,gameStarted:h,currentBoard:m,setHighlightedCells:g,setSelectedCell:x}=On(),[v,y]=e.useState([]),[w,j]=e.useState([]);e.useEffect(()=>{c("keyboard"),u(null),j([]),y([]),g&&g([])},[h,m]);const k=e.useCallback(()=>{if(f&&m)try{const e=f();y(e||[])}catch(e){console.error("查找技巧失败:",e),y([])}else y([])},[f,m]);e.useEffect(()=>{"techniques"===l&&h&&m&&k()},[l,k,h,m]),e.useEffect(()=>{y([])},[h,m]);return b.jsxs("div",{className:"control-panel",style:{backgroundColor:"#ffffff",borderRadius:"12px",padding:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.12)",display:"flex",flexDirection:"column",fontFamily:"Arial, Microsoft YaHei, sans-serif",margin:0,boxSizing:"border-box",border:"1px solid #e0e0e0",position:"relative",height:window.innerWidth<=576?"auto":"var(--board-width)",overflow:"hidden",outline:"none",WebkitTapHighlightColor:"transparent"},children:[b.jsx("h3",{style:{display:"none"},children:"控制面板"}),b.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,margin:0,minHeight:0,overflow:"hidden"},children:[b.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #e0e0e0",marginBottom:"8px",paddingBottom:0},children:[b.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"keyboard"===l?"#3498db15":"transparent",border:"none",borderRadius:"6px 6px 0 0",fontSize:"14px",fontWeight:"keyboard"===l?"700":"500",color:"keyboard"===l?"#3498db":"#7f8c8d",cursor:"pointer",margin:"0 2px",boxSizing:"border-box",minHeight:"32px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>c("keyboard"),children:"键盘"}),b.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"techniques"===l?"#3498db15":"transparent",border:"none",borderRadius:"6px 6px 0 0",fontSize:"14px",fontWeight:"techniques"===l?"700":"500",color:"techniques"===l?"#3498db":"#7f8c8d",cursor:"pointer",margin:"0 2px",boxSizing:"border-box",minHeight:"32px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>{c("techniques"),x&&x(null)},children:"技巧"}),b.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"solution"===l?"#3498db15":"transparent",border:"none",borderRadius:"6px 6px 0 0",fontSize:"14px",fontWeight:"solution"===l?"700":"500",color:"solution"===l?"#3498db":"#7f8c8d",cursor:"pointer",margin:"0 2px",boxSizing:"border-box",minHeight:"32px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>c("solution"),children:"解题"})]}),b.jsxs("div",{style:{flex:1,padding:"4px 0",overflow:"hidden",position:"relative",display:"flex",flexDirection:"column",minHeight:0},children:["keyboard"===l&&b.jsx(b.Fragment,{children:window.innerWidth<=768?b.jsxs(b.Fragment,{children:[b.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"4px",marginBottom:"8px"},children:[1,2,3,4,5,6].map(e=>{const r=s.hasOwnProperty(e)?s[e]:9,n=0===r;return b.jsxs("button",{className:"number-button",disabled:n,onClick:r=>{r.stopPropagation(),!n&&t(e)},style:{position:"relative",backgroundColor:a===e||i?"#3498db":"#ffffff",color:a===e||i?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:n?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[b.jsx("span",{style:{fontSize:"clamp(40px, 12vw, 80px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),b.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",backgroundColor:"transparent",color:a===e||i?"white":"#3498db",fontSize:"14px",fontWeight:"bold",padding:"1px 4px",borderRadius:"8px",minWidth:"16px",textAlign:"center",display:i||0===r?"none":"inline-block"},children:r})]},e)})}),b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"4px"},children:[[7,8,9].map(e=>{const r=s.hasOwnProperty(e)?s[e]:9,n=0===r;return b.jsxs("button",{className:"number-button",disabled:n,onClick:r=>{r.stopPropagation(),!n&&t(e)},style:{position:"relative",backgroundColor:a===e||i?"#3498db":"#ffffff",color:a===e||i?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:n?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",transition:"all 0.2s ease"},children:[b.jsx("span",{style:{fontSize:"clamp(40px, 12vw, 80px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),b.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",backgroundColor:"transparent",color:a===e||i?"white":"#3498db",fontSize:"14px",fontWeight:"bold",padding:"1px 4px",borderRadius:"8px",minWidth:"16px",textAlign:"center",display:i||0===r?"none":"inline-block"},children:r})]},e)}),b.jsx("button",{onClick:e=>{e.stopPropagation(),n()},title:"撤回",style:{position:"relative",backgroundColor:"#ffffff",color:"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"60px !important",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b.jsx("path",{d:"M3 7v6h6"}),b.jsx("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})},"undo"),b.jsx("button",{onClick:e=>{e.stopPropagation(),r()},title:"清空单元格",style:{position:"relative",backgroundColor:"#ff4444",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"24px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:b.jsxs("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b.jsx("path",{d:"M3 6h18"}),b.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),b.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),b.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),b.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})},"clear"),b.jsx("button",{onClick:e=>{e.stopPropagation(),o()},title:i?"退出铅笔模式":"进入铅笔模式",style:{position:"relative",backgroundColor:i?"#3498db":"#ffffff",color:i?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"24px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:b.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})},"pencil")]})]}):b.jsxs("div",{className:"number-pad",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"6px",width:"100%",maxHeight:"100%",overflow:"visible",padding:"4px",boxSizing:"border-box"},children:[[1,2,3,4,5,6,7,8,9].map(e=>{const r=s.hasOwnProperty(e)?s[e]:9,n=0===r;return b.jsxs("button",{className:"number-button",disabled:n,onClick:r=>{r.stopPropagation(),!n&&t(e)},style:{position:"relative",backgroundColor:a===e||i?"#3498db":"#ffffff",color:a===e||i?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"400",lineHeight:"1",cursor:n?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",fontSize:"0",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[b.jsx("span",{style:{fontSize:"clamp(30px, 8vw, 70px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),b.jsx("span",{style:{position:"absolute",top:"4px",right:"4px",backgroundColor:"transparent",color:a===e||i?"white":"#3498db",fontSize:"16px",fontWeight:"bold",padding:"2px 6px",borderRadius:"10px",minWidth:"20px",textAlign:"center",display:i||0===r?"none":"inline-block"},children:r})]},e)}),b.jsx("button",{onClick:e=>{e.stopPropagation(),n()},title:"撤回",style:{position:"relative",backgroundColor:"#ffffff",color:"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b.jsx("path",{d:"M3 7v6h6"}),b.jsx("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})},"undo"),b.jsx("button",{onClick:e=>{e.stopPropagation(),r()},title:"清空单元格",style:{position:"relative",backgroundColor:"#ff4444",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:b.jsxs("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b.jsx("path",{d:"M3 6h18"}),b.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),b.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),b.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),b.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})},"clear"),b.jsx("button",{onClick:e=>{e.stopPropagation(),o()},title:i?"退出铅笔模式":"进入铅笔模式",style:{position:"relative",backgroundColor:i?"#3498db":"#ffffff",color:i?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:b.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})},"pencil")]})}),"techniques"===l&&b.jsxs("div",{style:{overflowY:"auto",padding:"8px"},children:[b.jsx("h4",{style:{margin:"0 0 12px 0",color:"#34495e",fontSize:"16px",fontWeight:"600"},children:"可用技巧"}),0===v.length?b.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#7f8c8d",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:"当前棋盘没有找到可用技巧"}):b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"12px"},children:v.map((e,t)=>{const r=e.row+1,n=e.col+1;return b.jsxs("div",{onClick:()=>(e=>{u(e);const t=[],r=e.row+1,n=e.col+1,o=`R${r}C${n}`;if("nakedSingle"===e.type)t.push({step:1,description:`查看单元格(${r},${n})`,highlight:o},{step:2,description:"检查其所在行、列和宫已存在的数字",highlight:`R${r}, C${n}, B${3*Math.floor((r-1)/3)+Math.floor((n-1)/3)+1}`},{step:3,description:`发现该单元格只剩下数字${e.value}可以填入`,highlight:o},{step:4,description:`使用唯一数法填入数字${e.value}`,highlight:o});else{const a=e.type.includes("Row")?"行":e.type.includes("Col")?"列":"宫",i=e.type.includes("Row")?r:e.type.includes("Col")?n:3*Math.floor((r-1)/3)+Math.floor((n-1)/3)+1;t.push({step:1,description:`检查数字${e.value}在${a}${i}中的可能位置`,highlight:""},{step:2,description:`发现在${a}${i}中，数字${e.value}只能填入单元格(${r},${n})`,highlight:o},{step:3,description:`使用隐性唯一数法填入数字${e.value}`,highlight:o})}if(j(t),g){const t=e.notes||(Array.isArray(e.cells)&&e.cells.length>0?[e.value]:[]);g([{row:e.row,col:e.col,techniqueIndicator:!0,number:e.value,notes:t}])}c("solution")})(e),style:{padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef",cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#e9ecef",e.currentTarget.style.borderColor="#3498db"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#f8f9fa",e.currentTarget.style.borderColor="#e9ecef"},children:[b.jsx("div",{style:{fontWeight:"600",color:"#34495e",marginBottom:"4px"},children:e.description}),b.jsxs("div",{style:{fontSize:"14px",color:"#7f8c8d"},children:["位置: (",r,",",n,")"]}),b.jsxs("div",{style:{fontSize:"14px",color:"#7f8c8d"},children:["值: ",e.value]})]},t)})}),b.jsx("button",{onClick:k,style:{width:"100%",padding:"8px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600"},children:"刷新技巧列表"})]}),"solution"===l&&b.jsxs("div",{style:{overflowY:"auto",padding:"8px"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[b.jsx("h4",{style:{margin:0,color:"#34495e",fontSize:"16px",fontWeight:"600"},children:"解题步骤"}),d&&b.jsx("button",{onClick:()=>{if(d){p(d)&&(g&&g([]),x&&x(null),k())}},style:{width:"120px",height:"36px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 10px rgba(52, 152, 219, 0.3), 0 1px 3px rgba(0, 0, 0, 0.12)",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#2980b9",e.currentTarget.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)",e.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#3498db",e.currentTarget.style.boxShadow="0 4px 10px rgba(52, 152, 219, 0.3), 0 1px 3px rgba(0, 0, 0, 0.12)",e.currentTarget.style.transform="translateY(0)"},children:"应用技巧"})]}),d?b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"12px"},children:w.map(e=>b.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[b.jsx("div",{style:{minWidth:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#3498db",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold"},children:e.step}),b.jsx("div",{style:{flex:1,fontSize:"14px",color:"#34495e",lineHeight:"1.5"},children:e.description})]},e.step))}):b.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#7f8c8d",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:"请先从技巧列表中选择一个技巧"})]})]})]})]})},uo=Or.div`
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
`,fo=Or.div`
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
`,po=Or.h2`
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
`,ho=Or.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`,mo=Or(({isSelected:e,...t})=>b.jsx("button",{...t}))`
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
`,go=Or.div`
  margin-top: 4px;
  font-size: 12px;
  opacity: 0.7;
  font-weight: normal;
`,xo=Or.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`,vo=Or.button`
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
`,bo=Or.button`
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
`,yo={[Nn.EASY]:{name:"简单",description:"初学者友好，空格较少"},[Nn.MEDIUM]:{name:"中等",description:"进阶挑战，需要一定技巧"},[Nn.HARD]:{name:"困难",description:"专家级别，逻辑推理"},[Nn.EXPERT]:{name:"专家",description:"极高难度，需要高级技巧"}},wo=({isOpen:e,onClose:t,onSelectDifficulty:n,initialDifficulty:o})=>{const{theme:a}=re(),[i,s]=r.useState(o||Nn.MEDIUM);if(!e)return null;const l=()=>{n(i),t()};return b.jsx(uo,{onClick:t,onKeyDown:e=>{"Escape"===e.key&&t(),"Enter"===e.key&&l()},children:b.jsxs(fo,{theme:a,onClick:e=>e.stopPropagation(),children:[b.jsx(po,{theme:a,children:"选择难度"}),b.jsx(ho,{children:Object.entries(Nn).map(([e,t])=>{const r=yo[t];return b.jsxs(mo,{isSelected:i===t,onClick:()=>s(t),theme:a,className:e.toLowerCase(),children:[r.name,b.jsx(go,{children:r.description})]},e)})}),b.jsxs(xo,{children:[b.jsx(vo,{theme:a,onClick:t,children:"取消"}),b.jsx(bo,{theme:a,onClick:l,children:"开始游戏"})]})]})})},jo=Or.div.attrs({className:"nav-block"})`
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
`;const ko=Or.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5个按钮平均分布
  gap: 2px;
  margin: 0;
  padding: 2px 0;
`,So=Or(({isActive:e,...t})=>b.jsx("button",{...t}))`
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
`,zo=Or.span`
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Co=()=>b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})}),$o=()=>b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}),To=()=>b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M8 5v14l11-7z"})}),Ao=()=>b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"#FFD700",children:b.jsx("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})}),Po=()=>b.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:[b.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"transparent",stroke:"currentColor",strokeWidth:"1.5"}),b.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),b.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),b.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",children:"2"}),b.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",children:"5"})]}),Io=()=>b.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})}),Eo=({onNewGame:t,onPauseTimer:r,onGetHint:n,onToggleNotes:o,onSettings:a,isNotesMode:i=!1,isTimerActive:s=!0,gameCompleted:l=!1})=>{re();const c=On(),{startLoading:d,stopLoading:u}=ae(),[f,p]=e.useState(!1),[h,m]=e.useState(!1);return b.jsxs(b.Fragment,{children:[b.jsx(jo,{children:b.jsxs(ko,{children:[b.jsx(So,{onClick:()=>{console.log("NavigationBlock: 打开难度选择模态框"),p(!0)},title:"新建游戏",children:b.jsx(zo,{children:b.jsx(Co,{})})}),b.jsx(So,{onClick:l?void 0:r,disabled:l,title:l?"游戏已完成":s?"暂停计时":"继续",children:b.jsx(zo,{children:l||s?b.jsx($o,{}):b.jsx(To,{})})}),b.jsx(So,{onClick:n,title:"技巧提示",children:b.jsx(zo,{children:b.jsx(Ao,{})})}),b.jsx(So,{onClick:()=>{o(),m(!0)},title:"候选数",isActive:h,children:b.jsx(zo,{children:b.jsx(Po,{})})}),b.jsx(So,{onClick:a,title:"设置",children:b.jsx(zo,{children:b.jsx(Io,{})})})]})}),b.jsx(wo,{isOpen:f,onClose:()=>p(!1),onSelectDifficulty:async e=>{console.log("NavigationBlock: 选择难度:",e);try{m(!1),d&&d("生成新谜题..."),(null==c?void 0:c.startNewGame)?(console.log("调用 context.startNewGame"),await c.startNewGame(null,e),console.log("startNewGame 完成")):(null==c?void 0:c.generateNewPuzzle)?(console.log("调用 context.generateNewPuzzle"),await c.generateNewPuzzle(e),console.log("generateNewPuzzle 完成")):console.error("上下文函数不可用")}catch(t){console.error("生成新游戏失败:",t)}finally{u&&u()}},initialDifficulty:(null==c?void 0:c.difficulty)||Nn.MEDIUM})]})},No=({notes:e=[],cellWidth:t})=>{const r=Array.isArray(e)?e:[],n=`${Math.max(12,.18*t)}px`;return b.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:30},children:r.map(e=>{const r=(e=>({1:{top:"15%",left:"15%"},2:{top:"15%",left:"50%"},3:{top:"15%",left:"85%"},4:{top:"50%",left:"15%"},5:{top:"50%",left:"50%"},6:{top:"50%",left:"85%"},7:{top:"85%",left:"15%"},8:{top:"85%",left:"50%"},9:{top:"85%",left:"85%"}}[e]||{top:"50%",left:"50%"}))(e);return b.jsx("div",{style:{position:"absolute",left:r.left,top:r.top,transform:"translate(-50%, -50%)",backgroundColor:"#2ecc71",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:n,fontWeight:"bold",color:"#ffffff",border:"1px solid #ffffff",boxShadow:"none",width:.28*t+"px",height:.28*t+"px",lineHeight:.28*t+"px",opacity:1,pointerEvents:"none"},children:e},e)})})},Mo=({highlightedCells:e,boardWidth:t})=>{if(!e||!Array.isArray(e))return null;const r=e.filter(e=>e&&!0===e.techniqueIndicator&&"number"==typeof e.row&&"number"==typeof e.col&&e.row>=0&&e.row<9&&e.col>=0&&e.col<9);if(0===r.length)return null;const n=t/9;return b.jsx("div",{className:"technique-overlay",style:{position:"absolute",top:0,left:0,width:`${t}px`,height:`${t}px`,pointerEvents:"none",zIndex:15,boxSizing:"border-box",background:"transparent"},children:r.map(e=>{const t=e.notes&&Array.isArray(e.notes)&&e.notes.length>0;return b.jsx("div",{style:{position:"absolute",left:e.col*n+"px",top:e.row*n+"px",width:`${n}px`,height:`${n}px`,pointerEvents:"none",zIndex:20,backgroundColor:"#ffeaa7",border:"2px solid #f39c12",boxSizing:"border-box",borderRadius:"4px"},children:t&&b.jsx(No,{notes:e.notes,cellWidth:n})},`tech-${e.row}-${e.col}`)})})};
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
function Oo(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Lo(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Bo(n.key),n)}}function Ro(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=Uo(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function Fo(e,t,r){return(t=Bo(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Do(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Do(Object(r),!0).forEach(function(t){Fo(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Do(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Ho(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,s=[],l=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return s}}(e,t)||Uo(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Wo(e){return function(e){if(Array.isArray(e))return Oo(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Uo(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Bo(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function Yo(e){return(Yo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Uo(e,t){if(e){if("string"==typeof e)return Oo(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Oo(e,t):void 0}}var qo=function(){},Go={},Jo={},Vo=null,Xo={mark:qo,measure:qo};try{"undefined"!=typeof window&&(Go=window),"undefined"!=typeof document&&(Jo=document),"undefined"!=typeof MutationObserver&&(Vo=MutationObserver),"undefined"!=typeof performance&&(Xo=performance)}catch(Nu){}var Ko=(Go.navigator||{}).userAgent,Qo=void 0===Ko?"":Ko,Zo=Go,ea=Jo,ta=Vo,ra=Xo;Zo.document;var na,oa=!!ea.documentElement&&!!ea.head&&"function"==typeof ea.addEventListener&&"function"==typeof ea.createElement,aa=~Qo.indexOf("MSIE")||~Qo.indexOf("Trident/"),ia={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},sa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],la="classic",ca="duotone",da="sharp",ua="sharp-duotone",fa="chisel",pa="etch",ha="jelly",ma="jelly-duo",ga="jelly-fill",xa="notdog",va="notdog-duo",ba="slab",ya="slab-press",wa="thumbprint",ja="utility",ka="utility-duo",Sa="utility-fill",za="whiteboard",Ca=[la,ca,da,ua,fa,pa,ha,ma,ga,xa,va,ba,ya,wa,ja,ka,Sa,za];Fo(Fo(Fo(Fo(Fo(Fo(Fo(Fo(Fo(Fo(na={},la,"Classic"),ca,"Duotone"),da,"Sharp"),ua,"Sharp Duotone"),fa,"Chisel"),pa,"Etch"),ha,"Jelly"),ma,"Jelly Duo"),ga,"Jelly Fill"),xa,"Notdog"),Fo(Fo(Fo(Fo(Fo(Fo(Fo(Fo(na,va,"Notdog Duo"),ba,"Slab"),ya,"Slab Press"),wa,"Thumbprint"),ja,"Utility"),ka,"Utility Duo"),Sa,"Utility Fill"),za,"Whiteboard");var $a=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Ta=["fak","fa-kit","fakd","fa-kit-duotone"],Aa={fak:"kit","fa-kit":"kit"},Pa={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"};Fo(Fo({},"kit","Kit"),"kit-duotone","Kit Duotone");var Ia,Ea={kit:"fak"},Na={"kit-duotone":"fakd"},Ma="duotone-group",Oa="swap-opacity",La="primary",Ra="secondary";Fo(Fo(Fo(Fo(Fo(Fo(Fo(Fo(Fo(Fo(Ia={},"classic","Classic"),"duotone","Duotone"),"sharp","Sharp"),"sharp-duotone","Sharp Duotone"),"chisel","Chisel"),"etch","Etch"),"jelly","Jelly"),"jelly-duo","Jelly Duo"),"jelly-fill","Jelly Fill"),"notdog","Notdog"),Fo(Fo(Fo(Fo(Fo(Fo(Fo(Fo(Ia,"notdog-duo","Notdog Duo"),"slab","Slab"),"slab-press","Slab Press"),"thumbprint","Thumbprint"),"utility","Utility"),"utility-duo","Utility Duo"),"utility-fill","Utility Fill"),"whiteboard","Whiteboard");Fo(Fo({},"kit","Kit"),"kit-duotone","Kit Duotone");var Fa={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Da=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"]),_a=[1,2,3,4,5,6,7,8,9,10],Ha=_a.concat([11,12,13,14,15,16,17,18,19,20]),Wa=[].concat(Wo(Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]})),["solid","regular","light","thin","duotone","brands","semibold"],["aw","fw","pull-left","pull-right"],["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ma,Oa,La,Ra]).concat(_a.map(function(e){return"".concat(e,"x")})).concat(Ha.map(function(e){return"w-".concat(e)})),Ba="___FONT_AWESOME___",Ya="svg-inline--fa",Ua="data-fa-i2svg",qa="data-fa-pseudo-element",Ga="data-prefix",Ja="data-icon",Va="fontawesome-i2svg",Xa=["HTML","HEAD","STYLE","SCRIPT"],Ka=["::before","::after",":before",":after"],Qa=function(){try{return!0}catch(e){return!1}}();function Za(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[la]}})}var ei=_o({},ia);ei[la]=_o(_o(_o(_o({},{"fa-duotone":"duotone"}),ia[la]),Aa),Pa);var ti=Za(ei),ri=_o({},{chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}});ri[la]=_o(_o(_o(_o({},{duotone:"fad"}),ri[la]),Ea),Na);var ni=Za(ri),oi=_o({},Fa);oi[la]=_o(_o({},oi[la]),{fak:"fa-kit"});var ai=Za(oi),ii=_o({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}});ii[la]=_o(_o({},ii[la]),{"fa-kit":"fak"}),Za(ii);var si=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,li="fa-layers-text",ci=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;Za(_o({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}}));var di=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ui={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fi=[].concat(Wo(["kit"]),Wo(Wa)),pi=Zo.FontAwesomeConfig||{};if(ea&&"function"==typeof ea.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=Ho(e,2),r=t[0],n=t[1],o=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=ea.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(r));null!=o&&(pi[n]=o)})}var hi={styleDefault:"solid",familyDefault:la,cssPrefix:"fa",replacementClass:Ya,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pi.familyPrefix&&(pi.cssPrefix=pi.familyPrefix);var mi=_o(_o({},hi),pi);mi.autoReplaceSvg||(mi.observeMutations=!1);var gi={};Object.keys(hi).forEach(function(e){Object.defineProperty(gi,e,{enumerable:!0,set:function(t){mi[e]=t,xi.forEach(function(e){return e(gi)})},get:function(){return mi[e]}})}),Object.defineProperty(gi,"familyPrefix",{enumerable:!0,set:function(e){mi.cssPrefix=e,xi.forEach(function(e){return e(gi)})},get:function(){return mi.cssPrefix}}),Zo.FontAwesomeConfig=gi;var xi=[];var vi=16,bi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yi(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function wi(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function ji(e){return e.classList?wi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ki(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Si(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function zi(e){return e.size!==bi.size||e.x!==bi.x||e.y!==bi.y||e.rotate!==bi.rotate||e.flipX||e.flipY}function Ci(){var e="fa",t=Ya,r=gi.cssPrefix,n=gi.replacementClass,o=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";\n  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";\n  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}';if(r!==e||n!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(a,".".concat(r,"-")).replace(i,"--".concat(r,"-")).replace(s,".".concat(n))}return o}var $i=!1;function Ti(){gi.autoAddCss&&!$i&&(!function(e){if(e&&oa){var t=ea.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=ea.head.childNodes,n=null,o=r.length-1;o>-1;o--){var a=r[o],i=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=a)}ea.head.insertBefore(t,n)}}(Ci()),$i=!0)}var Ai={mixout:function(){return{dom:{css:Ci,insertCss:Ti}}},hooks:function(){return{beforeDOMElementCreation:function(){Ti()},beforeI2svg:function(){Ti()}}}},Pi=Zo||{};Pi[Ba]||(Pi[Ba]={}),Pi[Ba].styles||(Pi[Ba].styles={}),Pi[Ba].hooks||(Pi[Ba].hooks={}),Pi[Ba].shims||(Pi[Ba].shims=[]);var Ii=Pi[Ba],Ei=[],Ni=function(){ea.removeEventListener("DOMContentLoaded",Ni),Mi=1,Ei.map(function(e){return e()})},Mi=!1;function Oi(e){var t=e.tag,r=e.attributes,n=void 0===r?{}:r,o=e.children,a=void 0===o?[]:o;return"string"==typeof e?ki(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(ki(e[r]),'" ')},"").trim()}(n),">").concat(a.map(Oi).join(""),"</").concat(t,">")}function Li(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}oa&&((Mi=(ea.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ea.readyState))||ea.addEventListener("DOMContentLoaded",Ni));var Ri=function(e,t,r,n){var o,a,i,s=Object.keys(e),l=s.length,c=void 0!==n?function(e,t){return function(r,n,o,a){return e.call(t,r,n,o,a)}}(t,n):t;for(void 0===r?(o=1,i=e[s[0]]):(o=0,i=r);o<l;o++)i=c(i,e[a=s[o]],a,e);return i};function Fi(e){return 1!==Wo(e).length?null:e.codePointAt(0).toString(16)}function Di(e){return Object.keys(e).reduce(function(t,r){var n=e[r];return!!n.icon?t[n.iconName]=n.icon:t[r]=n,t},{})}function _i(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,n=void 0!==r&&r,o=Di(t);"function"!=typeof Ii.hooks.addPack||n?Ii.styles[e]=_o(_o({},Ii.styles[e]||{}),o):Ii.hooks.addPack(e,Di(t)),"fas"===e&&_i("fa",t)}var Hi=Ii.styles,Wi=Ii.shims,Bi=Object.keys(ai),Yi=Bi.reduce(function(e,t){return e[t]=Object.keys(ai[t]),e},{}),Ui=null,qi={},Gi={},Ji={},Vi={},Xi={};function Ki(e,t){var r,n=t.split("-"),o=n[0],a=n.slice(1).join("-");return o!==e||""===a||(r=a,~fi.indexOf(r))?null:a}var Qi,Zi=function(){var e=function(e){return Ri(Hi,function(t,r,n){return t[n]=Ri(r,e,{}),t},{})};qi=e(function(e,t,r){(t[3]&&(e[t[3]]=r),t[2])&&t[2].filter(function(e){return"number"==typeof e}).forEach(function(t){e[t.toString(16)]=r});return e}),Gi=e(function(e,t,r){(e[r]=r,t[2])&&t[2].filter(function(e){return"string"==typeof e}).forEach(function(t){e[t]=r});return e}),Xi=e(function(e,t,r){var n=t[2];return e[r]=r,n.forEach(function(t){e[t]=r}),e});var t="far"in Hi||gi.autoFetchSvg,r=Ri(Wi,function(e,r){var n=r[0],o=r[1],a=r[2];return"far"!==o||t||(o="fas"),"string"==typeof n&&(e.names[n]={prefix:o,iconName:a}),"number"==typeof n&&(e.unicodes[n.toString(16)]={prefix:o,iconName:a}),e},{names:{},unicodes:{}});Ji=r.names,Vi=r.unicodes,Ui=os(gi.styleDefault,{family:gi.familyDefault})};function es(e,t){return(qi[e]||{})[t]}function ts(e,t){return(Xi[e]||{})[t]}function rs(e){return Ji[e]||{prefix:null,iconName:null}}function ns(){return Ui}Qi=function(e){Ui=os(e.styleDefault,{family:gi.familyDefault})},xi.push(Qi),Zi();function os(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).family,r=void 0===t?la:t,n=ti[r][e];if(r===ca&&!e)return"fad";var o=ni[r][e]||ni[r][n],a=e in Ii.styles?e:null;return o||a||null}function as(e){return e.sort().filter(function(e,t,r){return r.indexOf(e)===t})}var is=Da.concat(Ta);function ss(e){var t,r,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).skipLookups,o=void 0!==n&&n,a=null,i=as(e.filter(function(e){return is.includes(e)})),s=as(e.filter(function(e){return!is.includes(e)})),l=Ho(i.filter(function(e){return a=e,!sa.includes(e)}),1)[0],c=void 0===l?null:l,d=function(e){var t=la,r=Bi.reduce(function(e,t){return e[t]="".concat(gi.cssPrefix,"-").concat(t),e},{});return Ca.forEach(function(n){(e.includes(r[n])||e.some(function(e){return Yi[n].includes(e)}))&&(t=n)}),t}(i),u=_o(_o({},(t=[],r=null,s.forEach(function(e){var n=Ki(gi.cssPrefix,e);n?r=n:e&&t.push(e)}),{iconName:r,rest:t})),{},{prefix:os(c,{family:d})});return _o(_o(_o({},u),function(e){var t=e.values,r=e.family,n=e.canonical,o=e.givenPrefix,a=void 0===o?"":o,i=e.styles,s=void 0===i?{}:i,l=e.config,c=void 0===l?{}:l,d=r===ca,u=t.includes("fa-duotone")||t.includes("fad"),f="duotone"===c.familyDefault,p="fad"===n.prefix||"fa-duotone"===n.prefix;!d&&(u||f||p)&&(n.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab");if(!n.prefix&&ls.includes(r)){if(Object.keys(s).find(function(e){return cs.includes(e)})||c.autoFetchSvg){var h=$a.get(r).defaultShortPrefixId;n.prefix=h,n.iconName=ts(n.prefix,n.iconName)||n.iconName}}"fa"!==n.prefix&&"fa"!==a||(n.prefix=ns()||"fas");return n}({values:e,family:d,styles:Hi,config:gi,canonical:u,givenPrefix:a})),function(e,t,r){var n=r.prefix,o=r.iconName;if(e||!n||!o)return{prefix:n,iconName:o};var a="fa"===t?rs(o):{},i=ts(n,o);o=a.iconName||i||o,"far"!==(n=a.prefix||n)||Hi.far||!Hi.fas||gi.autoFetchSvg||(n="fas");return{prefix:n,iconName:o}}(o,a,u))}var ls=Ca.filter(function(e){return e!==la||e!==ca}),cs=Object.keys(Fa).filter(function(e){return e!==la}).map(function(e){return Object.keys(Fa[e])}).flat();var ds=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}},t=[{key:"add",value:function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(t){e.definitions[t]=_o(_o({},e.definitions[t]||{}),o[t]),_i(t,o[t]);var r=ai[la][t];r&&_i(r,o[t]),Zi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(t){var n=r[t],o=n.prefix,a=n.iconName,i=n.icon,s=i[2];e[o]||(e[o]={}),s.length>0&&s.forEach(function(t){"string"==typeof t&&(e[o][t]=i)}),e[o][a]=i}),e}}],t&&Lo(e.prototype,t),r&&Lo(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}(),us=[],fs={},ps={},hs=Object.keys(ps);function ms(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return(fs[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function gs(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];(fs[e]||[]).forEach(function(e){e.apply(null,r)})}function xs(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ps[e]?ps[e].apply(null,t):void 0}function vs(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,r=e.prefix||ns();if(t)return t=ts(r,t)||t,Li(bs.definitions,r,t)||Li(Ii.styles,r,t)}var bs=new ds,ys={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return oa?(gs("beforeI2svg",e),xs("pseudoElements2svg",e),xs("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.autoReplaceSvgRoot;!1===gi.autoReplaceSvg&&(gi.autoReplaceSvg=!0),gi.observeMutations=!0,e=function(){js({autoReplaceSvgRoot:r}),gs("watch",t)},oa&&(Mi?setTimeout(e,0):Ei.push(e))}},ws={noAuto:function(){gi.autoReplaceSvg=!1,gi.observeMutations=!1,gs("noAuto")},config:gi,dom:ys,parse:{icon:function(e){if(null===e)return null;if("object"===Yo(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ts(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],r=os(e[0]);return{prefix:r,iconName:ts(r,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(gi.cssPrefix,"-"))>-1||e.match(si))){var n=ss(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||ns(),iconName:ts(n.prefix,n.iconName)||n.iconName}}if("string"==typeof e){var o=ns();return{prefix:o,iconName:ts(o,e)||e}}}},library:bs,findIconDefinition:vs,toHtml:Oi},js=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,t=void 0===e?ea:e;(Object.keys(Ii.styles).length>0||gi.autoFetchSvg)&&oa&&gi.autoReplaceSvg&&ws.dom.i2svg({node:t})};function ks(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Oi(e)})}}),Object.defineProperty(e,"node",{get:function(){if(oa){var t=ea.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Ss(e){var t=e.icons,r=t.main,n=t.mask,o=e.prefix,a=e.iconName,i=e.transform,s=e.symbol,l=e.maskId,c=e.extra,d=e.watchable,u=void 0!==d&&d,f=n.found?n:r,p=f.width,h=f.height,m=[gi.replacementClass,a?"".concat(gi.cssPrefix,"-").concat(a):""].filter(function(e){return-1===c.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(c.classes).join(" "),g={children:[],attributes:_o(_o({},c.attributes),{},{"data-prefix":o,"data-icon":a,class:m,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(h)})};(function(e){return["aria-label","aria-labelledby","title","role"].some(function(t){return t in e})})(c.attributes)||c.attributes["aria-hidden"]||(g.attributes["aria-hidden"]="true"),u&&(g.attributes[Ua]="");var x=_o(_o({},g),{},{prefix:o,iconName:a,main:r,mask:n,maskId:l,transform:i,symbol:s,styles:_o({},c.styles)}),v=n.found&&r.found?xs("generateAbstractMask",x)||{children:[],attributes:{}}:xs("generateAbstractIcon",x)||{children:[],attributes:{}},b=v.children,y=v.attributes;return x.children=b,x.attributes=y,s?function(e){var t=e.prefix,r=e.iconName,n=e.children,o=e.attributes,a=e.symbol,i=!0===a?"".concat(t,"-").concat(gi.cssPrefix,"-").concat(r):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_o(_o({},o),{},{id:i}),children:n}]}]}(x):function(e){var t=e.children,r=e.main,n=e.mask,o=e.attributes,a=e.styles,i=e.transform;if(zi(i)&&r.found&&!n.found){var s={x:r.width/r.height/2,y:.5};o.style=Si(_o(_o({},a),{},{"transform-origin":"".concat(s.x+i.x/16,"em ").concat(s.y+i.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}(x)}function zs(e){var t=e.content,r=e.width,n=e.height,o=e.transform,a=e.extra,i=e.watchable,s=void 0!==i&&i,l=_o(_o({},a.attributes),{},{class:a.classes.join(" ")});s&&(l[Ua]="");var c=_o({},a.styles);zi(o)&&(c.transform=function(e){var t=e.transform,r=e.width,n=void 0===r?16:r,o=e.height,a=void 0===o?16:o,i=e.startCentered,s=void 0!==i&&i,l="";return l+=s&&aa?"translate(".concat(t.x/vi-n/2,"em, ").concat(t.y/vi-a/2,"em) "):s?"translate(calc(-50% + ".concat(t.x/vi,"em), calc(-50% + ").concat(t.y/vi,"em)) "):"translate(".concat(t.x/vi,"em, ").concat(t.y/vi,"em) "),l+="scale(".concat(t.size/vi*(t.flipX?-1:1),", ").concat(t.size/vi*(t.flipY?-1:1),") "),l+"rotate(".concat(t.rotate,"deg) ")}({transform:o,startCentered:!0,width:r,height:n}),c["-webkit-transform"]=c.transform);var d=Si(c);d.length>0&&(l.style=d);var u=[];return u.push({tag:"span",attributes:l,children:[t]}),u}var Cs=Ii.styles;function $s(e){var t=e[0],r=e[1],n=Ho(e.slice(4),1)[0];return{found:!0,width:t,height:r,icon:Array.isArray(n)?{tag:"g",attributes:{class:"".concat(gi.cssPrefix,"-").concat(ui.GROUP)},children:[{tag:"path",attributes:{class:"".concat(gi.cssPrefix,"-").concat(ui.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(gi.cssPrefix,"-").concat(ui.PRIMARY),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}}}}var Ts={found:!1,width:512,height:512};function As(e,t){var r=t;return"fa"===t&&null!==gi.styleDefault&&(t=ns()),new Promise(function(n,o){if("fa"===r){var a=rs(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Cs[t]&&Cs[t][e])return n($s(Cs[t][e]));!function(e,t){Qa||gi.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),n(_o(_o({},Ts),{},{icon:gi.showMissingIcons&&e&&xs("missingIconAbstract")||{}}))})}var Ps=function(){},Is=gi.measurePerformance&&ra&&ra.mark&&ra.measure?ra:{mark:Ps,measure:Ps},Es='FA "7.1.0"',Ns=function(e){Is.mark("".concat(Es," ").concat(e," ends")),Is.measure("".concat(Es," ").concat(e),"".concat(Es," ").concat(e," begins"),"".concat(Es," ").concat(e," ends"))},Ms=function(e){return Is.mark("".concat(Es," ").concat(e," begins")),function(){return Ns(e)}},Os=function(){};function Ls(e){return"string"==typeof(e.getAttribute?e.getAttribute(Ua):null)}function Rs(e){return ea.createElementNS("http://www.w3.org/2000/svg",e)}function Fs(e){return ea.createElement(e)}function Ds(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ceFn,r=void 0===t?"svg"===e.tag?Rs:Fs:t;if("string"==typeof e)return ea.createTextNode(e);var n=r(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(Ds(e,{ceFn:r}))}),n}var _s={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Ds(e),t)}),null===t.getAttribute(Ua)&&gi.keepOriginalSource){var r=ea.createComment(function(e){var t=" ".concat(e.outerHTML," ");return"".concat(t,"Font Awesome fontawesome.com ")}(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){var t=e[0],r=e[1];if(~ji(t).indexOf(gi.replacementClass))return _s.replace(e);var n=new RegExp("".concat(gi.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(e,t){return t===gi.replacementClass||t.match(n)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),0===o.toNode.length?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(e){return Oi(e)}).join("\n");t.setAttribute(Ua,""),t.innerHTML=a}};function Hs(e){e()}function Ws(e,t){var r="function"==typeof t?t:Os;if(0===e.length)r();else{var n=Hs;"async"===gi.mutateApproach&&(n=Zo.requestAnimationFrame||Hs),n(function(){var t=!0===gi.autoReplaceSvg?_s.replace:_s[gi.autoReplaceSvg]||_s.replace,n=Ms("mutate");e.map(t),n(),r()})}}var Bs=!1;function Ys(){Bs=!0}function Us(){Bs=!1}var qs=null;function Gs(e){if(ta&&gi.observeMutations){var t=e.treeCallback,r=void 0===t?Os:t,n=e.nodeCallback,o=void 0===n?Os:n,a=e.pseudoElementsCallback,i=void 0===a?Os:a,s=e.observeMutationsRoot,l=void 0===s?ea:s;qs=new ta(function(e){if(!Bs){var t=ns();wi(e).forEach(function(e){if("childList"===e.type&&e.addedNodes.length>0&&!Ls(e.addedNodes[0])&&(gi.searchPseudoElements&&i(e.target),r(e.target)),"attributes"===e.type&&e.target.parentNode&&gi.searchPseudoElements&&i([e.target],!0),"attributes"===e.type&&Ls(e.target)&&~di.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){var t=e.getAttribute?e.getAttribute(Ga):null,r=e.getAttribute?e.getAttribute(Ja):null;return t&&r}(e.target)){var n=ss(ji(e.target)),a=n.prefix,s=n.iconName;e.target.setAttribute(Ga,a||t),s&&e.target.setAttribute(Ja,s)}else(l=e.target)&&l.classList&&l.classList.contains&&l.classList.contains(gi.replacementClass)&&o(e.target);var l})}}),oa&&qs.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Js(e){var t,r,n=e.getAttribute("data-prefix"),o=e.getAttribute("data-icon"),a=void 0!==e.innerText?e.innerText.trim():"",i=ss(ji(e));return i.prefix||(i.prefix=ns()),n&&o&&(i.prefix=n,i.iconName=o),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=(t=i.prefix,r=e.innerText,(Gi[t]||{})[r]||es(i.prefix,Fi(e.innerText)))),!i.iconName&&gi.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Vs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},r=Js(e),n=r.iconName,o=r.prefix,a=r.rest,i=function(e){return wi(e.attributes).reduce(function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e},{})}(e),s=ms("parseNodeAttributes",{},e),l=t.styleParser?function(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(e,t){var r=t.split(":"),n=r[0],o=r.slice(1);return n&&o.length>0&&(e[n]=o.join(":").trim()),e},{})),r}(e):[];return _o({iconName:n,prefix:o,transform:bi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:i}},s)}var Xs=Ii.styles;function Ks(e){var t="nest"===gi.autoReplaceSvg?Vs(e,{styleParser:!1}):Vs(e);return~t.extra.classes.indexOf(li)?xs("generateLayersText",e,t):xs("generateSvgReplacementMutation",e,t)}function Qs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!oa)return Promise.resolve();var r=ea.documentElement.classList,n=function(e){return r.add("".concat(Va,"-").concat(e))},o=function(e){return r.remove("".concat(Va,"-").concat(e))},a=gi.autoFetchSvg?[].concat(Wo(Ta),Wo(Da)):sa.concat(Object.keys(Xs));a.includes("fa")||a.push("fa");var i=[".".concat(li,":not([").concat(Ua,"])")].concat(a.map(function(e){return".".concat(e,":not([").concat(Ua,"])")})).join(", ");if(0===i.length)return Promise.resolve();var s=[];try{s=wi(e.querySelectorAll(i))}catch(d){}if(!(s.length>0))return Promise.resolve();n("pending"),o("complete");var l=Ms("onTree"),c=s.reduce(function(e,t){try{var r=Ks(t);r&&e.push(r)}catch(d){Qa||"MissingIcon"===d.name&&console.error(d)}return e},[]);return new Promise(function(e,r){Promise.all(c).then(function(r){Ws(r,function(){n("active"),n("complete"),o("pending"),"function"==typeof t&&t(),l(),e()})}).catch(function(e){l(),r(e)})})}function Zs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Ks(e).then(function(e){e&&Ws([e],t)})}var el=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?bi:r,o=t.symbol,a=void 0!==o&&o,i=t.mask,s=void 0===i?null:i,l=t.maskId,c=void 0===l?null:l,d=t.classes,u=void 0===d?[]:d,f=t.attributes,p=void 0===f?{}:f,h=t.styles,m=void 0===h?{}:h;if(e){var g=e.prefix,x=e.iconName,v=e.icon;return ks(_o({type:"icon"},e),function(){return gs("beforeDOMElementCreation",{iconDefinition:e,params:t}),Ss({icons:{main:$s(v),mask:s?$s(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:x,transform:_o(_o({},bi),n),symbol:a,maskId:c,extra:{attributes:p,styles:m,classes:u}})})}},tl={mixout:function(){return{icon:(e=el,function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:vs(t||{}),o=r.mask;return o&&(o=(o||{}).icon?o:vs(o||{})),e(n,_o(_o({},r),{},{mask:o}))})};var e},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Qs,e.nodeCallback=Zs,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,r=void 0===t?ea:t,n=e.callback;return Qs(r,void 0===n?function(){}:n)},e.generateSvgReplacementMutation=function(e,t){var r=t.iconName,n=t.prefix,o=t.transform,a=t.symbol,i=t.mask,s=t.maskId,l=t.extra;return new Promise(function(t,c){Promise.all([As(r,n),i.iconName?As(i.iconName,i.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(i){var c=Ho(i,2),d=c[0],u=c[1];t([e,Ss({icons:{main:d,mask:u},prefix:n,iconName:r,transform:o,symbol:a,maskId:s,extra:l,watchable:!0})])}).catch(c)})},e.generateAbstractIcon=function(e){var t,r=e.children,n=e.attributes,o=e.main,a=e.transform,i=Si(e.styles);return i.length>0&&(n.style=i),zi(a)&&(t=xs("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(t||o.icon),{children:r,attributes:n}}}},rl={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.classes,n=void 0===r?[]:r;return ks({type:"layer"},function(){gs("beforeDOMElementCreation",{assembler:e,params:t});var r=[];return e(function(e){Array.isArray(e)?e.map(function(e){r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(gi.cssPrefix,"-layers")].concat(Wo(n)).join(" ")},children:r}]})}}}},nl={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.title,n=void 0===r?null:r,o=t.classes,a=void 0===o?[]:o,i=t.attributes,s=void 0===i?{}:i,l=t.styles,c=void 0===l?{}:l;return ks({type:"counter",content:e},function(){return gs("beforeDOMElementCreation",{content:e,params:t}),function(e){var t=e.content,r=e.extra,n=_o(_o({},r.attributes),{},{class:r.classes.join(" ")}),o=Si(r.styles);o.length>0&&(n.style=o);var a=[];return a.push({tag:"span",attributes:n,children:[t]}),a}({content:e.toString(),title:n,extra:{attributes:s,styles:c,classes:["".concat(gi.cssPrefix,"-layers-counter")].concat(Wo(a))}})})}}}},ol={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?bi:r,o=t.classes,a=void 0===o?[]:o,i=t.attributes,s=void 0===i?{}:i,l=t.styles,c=void 0===l?{}:l;return ks({type:"text",content:e},function(){return gs("beforeDOMElementCreation",{content:e,params:t}),zs({content:e,transform:_o(_o({},bi),n),extra:{attributes:s,styles:c,classes:["".concat(gi.cssPrefix,"-layers-text")].concat(Wo(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var r=t.transform,n=t.extra,o=null,a=null;if(aa){var i=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();o=s.width/i,a=s.height/i}return Promise.resolve([e,zs({content:e.innerHTML,width:o,height:a,transform:r,extra:n,watchable:!0})])}}},al=new RegExp('"',"ug"),il=[1105920,1112319],sl=_o(_o(_o(_o({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),ll=Object.keys(sl).reduce(function(e,t){return e[t.toLowerCase()]=sl[t],e},{}),cl=Object.keys(ll).reduce(function(e,t){var r=ll[t];return e[t]=r[900]||Wo(Object.entries(r))[0][1],e},{});function dl(e,t){var r="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(function(n,o){if(null!==e.getAttribute(r))return n();var a,i,s,l=wi(e.children).filter(function(e){return e.getAttribute(qa)===t})[0],c=Zo.getComputedStyle(e,t),d=c.getPropertyValue("font-family"),u=d.match(ci),f=c.getPropertyValue("font-weight"),p=c.getPropertyValue("content");if(l&&!u)return e.removeChild(l),n();if(u&&"none"!==p&&""!==p){var h=c.getPropertyValue("content"),m=function(e,t){var r=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),o=isNaN(n)?"normal":n;return(ll[r]||{})[o]||cl[r]}(d,f),g=function(e){return Fi(Wo(e.replace(al,""))[0]||"")}(h),x=u[0].startsWith("FontAwesome"),v=function(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),r=e.getPropertyValue("content").replace(al,""),n=r.codePointAt(0),o=n>=il[0]&&n<=il[1],a=2===r.length&&r[0]===r[1];return o||a||t}(c),b=es(m,g),y=b;if(x){var w=(i=Vi[a=g],s=es("fas",a),i||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null});w.iconName&&w.prefix&&(b=w.iconName,m=w.prefix)}if(!b||v||l&&l.getAttribute(Ga)===m&&l.getAttribute(Ja)===y)n();else{e.setAttribute(r,y),l&&e.removeChild(l);var j={iconName:null,prefix:null,transform:bi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},k=j.extra;k.attributes[qa]=t,As(b,m).then(function(o){var a=Ss(_o(_o({},j),{},{icons:{main:o,mask:{prefix:null,iconName:null,rest:[]}},prefix:m,iconName:y,extra:k,watchable:!0})),i=ea.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(i,e.firstChild):e.appendChild(i),i.outerHTML=a.map(function(e){return Oi(e)}).join("\n"),e.removeAttribute(r),n()}).catch(o)}}else n()})}function ul(e){return Promise.all([dl(e,"::before"),dl(e,"::after")])}function fl(e){return!(e.parentNode===document.head||~Xa.indexOf(e.tagName.toUpperCase())||e.getAttribute(qa)||e.parentNode&&"svg"===e.parentNode.tagName)}var pl=function(e){return!!e&&Ka.some(function(t){return e.includes(t)})},hl=function(e){if(!e)return[];var t,r=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()}),o=Ro(n=n.flatMap(function(e){return e.includes("(")?e:e.split(",").map(function(e){return e.trim()})}));try{for(o.s();!(t=o.n()).done;){var a=t.value;if(pl(a)){var i=Ka.reduce(function(e,t){return e.replace(t,"")},a);""!==i&&"*"!==i&&r.add(i)}}}catch(s){o.e(s)}finally{o.f()}return r};function ml(e){if(oa){var t;if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])t=e;else if(gi.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r,n=new Set,o=Ro(document.styleSheets);try{for(o.s();!(r=o.n()).done;){var a=r.value;try{var i,s=Ro(a.cssRules);try{for(s.s();!(i=s.n()).done;){var l,c=i.value,d=Ro(hl(c.selectorText));try{for(d.s();!(l=d.n()).done;){var u=l.value;n.add(u)}}catch(p){d.e(p)}finally{d.f()}}}catch(p){s.e(p)}finally{s.f()}}catch(h){gi.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(a.href," (").concat(h.message,')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))}}}catch(p){o.e(p)}finally{o.f()}if(!n.size)return;var f=Array.from(n).join(", ");try{t=e.querySelectorAll(f)}catch(m){}}return new Promise(function(e,r){var n=wi(t).filter(fl).map(ul),o=Ms("searchPseudoElements");Ys(),Promise.all(n).then(function(){o(),Us(),e()}).catch(function(){o(),Us(),r()})})}}var gl=!1,xl=function(e){return e.toLowerCase().split(" ").reduce(function(e,t){var r=t.toLowerCase().split("-"),n=r[0],o=r.slice(1).join("-");if(n&&"h"===o)return e.flipX=!0,e;if(n&&"v"===o)return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(n){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},vl={mixout:function(){return{parse:{transform:function(e){return xl(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-transform");return r&&(e.transform=xl(r)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,r=e.transform,n=e.containerWidth,o=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*r.x,", ").concat(32*r.y,") "),s="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),c={outer:a,inner:{transform:"".concat(i," ").concat(s," ").concat(l)},path:{transform:"translate(".concat(o/2*-1," -256)")}};return{tag:"g",attributes:_o({},c.outer),children:[{tag:"g",attributes:_o({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:_o(_o({},t.icon.attributes),c.path)}]}]}}}},bl={x:0,y:0,width:"100%",height:"100%"};function yl(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var wl,jl={hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-mask"),n=r?ss(r.split(" ").map(function(e){return e.trim()})):{prefix:null,iconName:null,rest:[]};return n.prefix||(n.prefix=ns()),e.mask=n,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t,r=e.children,n=e.attributes,o=e.main,a=e.mask,i=e.maskId,s=e.transform,l=o.width,c=o.icon,d=a.width,u=a.icon,f=function(e){var t=e.transform,r=e.containerWidth,n=e.iconWidth,o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(32*t.x,", ").concat(32*t.y,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:o,inner:{transform:"".concat(a," ").concat(i," ").concat(s)},path:{transform:"translate(".concat(n/2*-1," -256)")}}}({transform:s,containerWidth:d,iconWidth:l}),p={tag:"rect",attributes:_o(_o({},bl),{},{fill:"white"})},h=c.children?{children:c.children.map(yl)}:{},m={tag:"g",attributes:_o({},f.inner),children:[yl(_o({tag:c.tag,attributes:_o(_o({},c.attributes),f.path)},h))]},g={tag:"g",attributes:_o({},f.outer),children:[m]},x="mask-".concat(i||yi()),v="clip-".concat(i||yi()),b={tag:"mask",attributes:_o(_o({},bl),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(t=u,"g"===t.tag?t.children:[t])},b]};return r.push(y,{tag:"rect",attributes:_o({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")")},bl)}),{children:r,attributes:n}}}};wl={mixoutsTo:ws}.mixoutsTo,us=[Ai,tl,rl,nl,ol,{hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=ml,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,r=void 0===t?ea:t;gi.searchPseudoElements&&ml(r)}}},{mixout:function(){return{dom:{unwatch:function(){Ys(),gl=!0}}}},hooks:function(){return{bootstrap:function(){Gs(ms("mutationObserverCallbacks",{}))},noAuto:function(){qs&&qs.disconnect()},watch:function(e){var t=e.observeMutationsRoot;gl?Us():Gs(ms("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},vl,jl,{provides:function(e){var t=!1;Zo.matchMedia&&(t=Zo.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:_o(_o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=_o(_o({},n),{},{attributeName:"opacity"}),a={tag:"circle",attributes:_o(_o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:_o(_o({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_o(_o({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(a),e.push({tag:"path",attributes:_o(_o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:_o(_o({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:_o(_o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_o(_o({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-symbol"),n=null!==r&&(""===r||r);return e.symbol=n,e}}}}],fs={},Object.keys(ps).forEach(function(e){-1===hs.indexOf(e)&&delete ps[e]}),us.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){"function"==typeof t[e]&&(wl[e]=t[e]),"object"===Yo(t[e])&&Object.keys(t[e]).forEach(function(r){wl[e]||(wl[e]={}),wl[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){fs[e]||(fs[e]=[]),fs[e].push(r[e])})}e.provides&&e.provides(ps)});var kl=ws.config,Sl=ws.parse,zl=ws.icon;function Cl(e){return t=e,(t-=0)==t?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():"")).charAt(0).toLowerCase()+e.slice(1);var t}function $l(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Tl=new Map;function Al(e){if(Tl.has(e))return Tl.get(e);const t={};let r=0;const n=e.length;for(;r<n;){const o=e.indexOf(";",r),a=-1===o?n:o,i=e.slice(r,a).trim();if(i){const e=i.indexOf(":");if(e>0){const r=i.slice(0,e).trim(),n=i.slice(e+1).trim();if(r&&n){const e=Cl(r);t[e.startsWith("webkit")?$l(e):e]=n}}}r=a+1}if(1e3===Tl.size){const e=Tl.keys().next().value;e&&Tl.delete(e)}return Tl.set(e,t),t}var Pl=function e(t,r,n={}){if("string"==typeof r)return r;const o=(r.children||[]).map(r=>e(t,r)),a=r.attributes||{},i={};for(const[d,u]of Object.entries(a))switch(!0){case"class"===d:i.className=u;break;case"style"===d:i.style=Al(String(u));break;case d.startsWith("aria-"):case d.startsWith("data-"):i[d.toLowerCase()]=u;break;default:i[Cl(d)]=u}const{style:s,"aria-label":l,...c}=n;return s&&(i.style=i.style?{...i.style,...s}:s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),t(r.tag,{...c,...i},...o)}.bind(null,r.createElement),Il=(t,r)=>{const n=e.useId();return t||(r?n:void 0)},El="searchPseudoElementsFullScan"in kl?"7.0.0":"6.0.0",Nl=Number.parseInt(El)>=7,Ml="fa",Ol="fa-beat",Ll="fa-fade",Rl="fa-beat-fade",Fl="fa-bounce",Dl="fa-shake",_l="fa-spin",Hl="fa-spin-pulse",Wl="fa-spin-reverse",Bl="fa-pulse",Yl={left:"fa-pull-left",right:"fa-pull-right"},Ul={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},ql={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Gl="fa-border",Jl="fa-fw",Vl="fa-flip",Xl="fa-flip-horizontal",Kl="fa-flip-vertical",Ql="fa-inverse",Zl="fa-rotate-by",ec="fa-swap-opacity",tc="fa-width-auto";function rc(e){const t=kl.cssPrefix||kl.familyPrefix||Ml;return t===Ml?e:e.replace(new RegExp(`(?<=^|\\s)${Ml}-`,"g"),`${t}-`)}function nc(e){if(e)return(e=>"object"==typeof e&&"icon"in e&&!!e.icon)(e)?e:Sl.icon(e)}var oc=new class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t="undefined"!=typeof process&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}}("FontAwesomeIcon"),ac={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},ic=new Set(Object.keys(ac)),sc=r.forwardRef((e,t)=>{const r={...ac,...e},{icon:n,mask:o,symbol:a,title:i,titleId:s,maskId:l,transform:c}=r,d=Il(l,Boolean(o)),u=Il(s,Boolean(i)),f=nc(n);if(!f)return oc.error("Icon lookup is undefined",n),null;const p=function(e){const{beat:t,fade:r,beatFade:n,bounce:o,shake:a,spin:i,spinPulse:s,spinReverse:l,pulse:c,fixedWidth:d,inverse:u,border:f,flip:p,size:h,rotation:m,pull:g,swapOpacity:x,rotateBy:v,widthAuto:b,className:y}=e,w=[];return y&&w.push(...y.split(" ")),t&&w.push(Ol),r&&w.push(Ll),n&&w.push(Rl),o&&w.push(Fl),a&&w.push(Dl),i&&w.push(_l),l&&w.push(Wl),s&&w.push(Hl),c&&w.push(Bl),d&&w.push(Jl),u&&w.push(Ql),f&&w.push(Gl),!0===p&&w.push(Vl),"horizontal"!==p&&"both"!==p||w.push(Xl),"vertical"!==p&&"both"!==p||w.push(Kl),null!=h&&w.push(ql[h]),null!=m&&0!==m&&w.push(Ul[m]),null!=g&&w.push(Yl[g]),x&&w.push(ec),Nl?(v&&w.push(Zl),b&&w.push(tc),(kl.cssPrefix||kl.familyPrefix||Ml)===Ml?w:w.map(rc)):w}(r),h="string"==typeof c?Sl.transform(c):c,m=nc(o),g=zl(f,{...p.length>0&&{classes:p},...h&&{transform:h},...m&&{mask:m},symbol:a,title:i,titleId:u,maskId:d});if(!g)return oc.error("Could not find icon",f),null;const{abstract:x}=g,v={ref:t};for(const b of function(e){return Object.keys(e)}(r))ic.has(b)||(v[b]=r[b]);return Pl(x[0],v)});sc.displayName="FontAwesomeIcon";
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
var lc={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},cc={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},dc={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},uc={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},fc={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},pc={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},hc={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},mc={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z"]},gc={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z"]};const xc=()=>{var t,r;o();const{isLoading:n,startLoading:a,stopLoading:i}=ae(),s=On(),l=(null==s?void 0:s.currentBoard)||Array(9).fill().map(()=>Array(9).fill(0)),c=(null==s?void 0:s.originalPuzzle)||null,d=(null==s?void 0:s.selectedCell)||null,u=(null==s?void 0:s.difficulty)||"medium",f=(null==s?void 0:s.timeElapsed)||0,p=(null==s?void 0:s.errorCount)||0,h=(null==s?void 0:s.isTimerActive)??!0,m=(null==s?void 0:s.isPencilMode)??!1,g=(null==s?void 0:s.setSelectedCell)||(()=>{}),x=(null==s?void 0:s.setHighlightedCells)||(()=>{}),v=(null==s?void 0:s.setDifficulty)||(()=>{});null==s||s.setBoard,null==s||s.setSolution,null==s||s.generateNewPuzzle;const y=(null==s?void 0:s.togglePencilMode)||(()=>{}),w=(null==s?void 0:s.toggleTimer)||(()=>{}),j=(null==s?void 0:s.getHint)||(()=>{}),k=(null==s?void 0:s.identifyTechniques)||(()=>[]),S=(null==s?void 0:s.openSettings)||(()=>{}),z=(null==s?void 0:s.fillCell)||(()=>{}),C=(null==s?void 0:s.fillAllCandidates)||(()=>{}),$=(null==s?void 0:s.undo)||(()=>{}),T=(null==s?void 0:s.solution)||Array(9).fill().map(()=>Array(9).fill(0)),A=(null==s?void 0:s.highlightedCells)||[],P=(null==s?void 0:s.pencilNotes)||[],I=(()=>{const e={};for(let t=1;t<=9;t++)e[t]=9;for(let t=0;t<9;t++)for(let r=0;r<9;r++){const n=l[t][r];0!==n&&T[t][r]===n&&e[n]--}return e})(),[E,N]=e.useState(window.innerHeight>window.innerWidth),[M,O]=e.useState(!1),[L,R]=e.useState(!1),[F,D]=e.useState(!1),_=e.useRef(null);e.useRef(null);const H=e.useRef(null);e.useEffect(()=>{const e=()=>{const e=window.innerWidth<992,t=window.innerHeight>window.innerWidth;N(e&&t)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]);const W=e=>{const t=e.target.closest("div[row]")||e.target.closest("div[col]"),r=e.target.closest(".board-container"),n=e.target.closest(".controls-container"),o=e.target.closest(".nav-block"),a=e.target.closest(".display-block");t||r||n||o||a||(g(null),(null==s?void 0:s.setHighlightedCells)&&s.setHighlightedCells([]))};e.useEffect(()=>{const e=H.current;return e&&e.addEventListener("click",W),()=>{e&&e.removeEventListener("click",W)}},[d]);const B=(e,t)=>{g({row:e,col:t})},Y=e=>{const t=Math.floor(e/3600),r=Math.floor(e%3600/60),n=e%60;return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`},U=()=>({easy:"简单",medium:"中等",hard:"困难"}[u]||u),q=e=>{try{if(!d){const t=[];for(let r=0;r<9;r++)for(let n=0;n<9;n++){const o=l&&l[r]?l[r][n]:0,a=c&&c[r]&&c[r][n]===e,i=o===e&&(null==s?void 0:s.lockedCells)&&s.lockedCells.has(`${r}-${n}`);(a||i)&&e>0&&t.push({row:r,col:n,number:e})}return void((null==s?void 0:s.setHighlightedCells)&&s.setHighlightedCells(t))}if(c&&c[d.row]&&0!==c[d.row][d.col])return void g(null);const t=`${d.row}-${d.col}`;if((null==s?void 0:s.lockedCells)&&s.lockedCells.has(t))return void g(null);z(d.row,d.col,e)}catch(t){console.error("Error updating cell:",t)}},G=()=>{if(d)try{(null==s?void 0:s.clearCell)?s.clearCell(d.row,d.col):console.warn("clearCell function not available in context")}catch(e){console.error("Error clearing cell:",e)}},J=()=>{console.log("handleNewGame 被调用"),O(!0),console.log("设置 showDifficultyModal 为 true")};e.useEffect(()=>{if(!l||l.every(e=>e.every(e=>0===e))){(async()=>{try{a&&a("加载游戏..."),console.log("直接使用本地预设谜题初始化游戏");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];(null==s?void 0:s.setCurrentBoard)&&(null==s?void 0:s.setOriginalPuzzle)&&(null==s?void 0:s.setSolution)?(s.setCurrentBoard(e),s.setOriginalPuzzle(e),s.setSolution(t)):(console.log("尝试使用上下文的其他方法初始化游戏"),(null==s?void 0:s.startNewGame)?await s.startNewGame(null,u):(null==s?void 0:s.generateNewPuzzle)&&await s.generateNewPuzzle(u))}catch(e){console.error("初始化游戏失败:",e),console.error("错误详情:",e.message,e.stack)}finally{i&&i()}})()}},[]);const V=()=>{w&&w()},X=e.useCallback(async()=>{if(g(null),j)try{const e=await j();e&&void 0!==e.row&&void 0!==e.col&&void 0!==e.value&&(x([[e.row,e.col]]),K.info(`提示：在(${e.row+1},${e.col+1})填入${e.value}`,{position:"top-right",autoClose:2e3}))}catch(e){console.error("获取提示失败:",e)}},[j,x,g]),Q=e.useCallback(()=>{g(null);const e=k();e.length>0?K.info(`找到${e.length}个可用技巧，可在技巧标签页中查看详情`,{position:"top-right",autoClose:2e3}):K.info("当前棋盘没有找到可用技巧，请尝试其他解法或获取提示",{position:"top-right",autoClose:2e3})},[k,g]),Z=()=>{C&&(C(),D(!0),setTimeout(()=>D(!1),2e3))},ee=()=>{y&&(y(),R(!0),setTimeout(()=>R(!1),2e3))},te=()=>{S&&S()};return b.jsxs("div",{className:"sudoku-game-container",ref:H,children:[!h&&!(null==s?void 0:s.gameCompleted)&&b.jsx("div",{className:"pause-overlay",onClick:V,children:b.jsxs("div",{className:"pause-message",children:[b.jsx("h2",{children:"游戏已暂停"}),b.jsx("p",{children:"点击任意位置继续游戏"})]})}),b.jsx("div",{className:"main-content",children:E?b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"nav-block",children:b.jsx(Eo,{onNewGame:J,onPauseTimer:V,onGetHint:X,onShowTechniques:Q,onToggleNotes:Z,onSettings:te,isNotesMode:m,isTimerActive:h,gameCompleted:(null==s?void 0:s.gameCompleted)||!1})}),b.jsxs("div",{className:"display-block",children:[b.jsxs("div",{children:["错误：",b.jsx("span",{className:"value error-count",style:{color:"#ff4d4d"},children:p})]}),b.jsx("div",{children:U()}),b.jsx("div",{children:Y(f)})]}),b.jsxs("div",{className:"board-container",ref:_,onClick:e=>e.stopPropagation(),style:{position:"relative"},children:[b.jsx(lo,{board:l||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:c,selectedCell:d,highlightedCells:((null==s?void 0:s.highlightedCells)||[]).filter(e=>!e.techniqueIndicator),incorrectCells:(null==s?void 0:s.incorrectCells)||new Set,onCellClick:B,isPencilMode:m,pencilNotes:(null==s?void 0:s.pencilNotes)||[]}),b.jsx(Mo,{highlightedCells:((null==s?void 0:s.highlightedCells)||[]).filter(e=>e.techniqueIndicator),boardWidth:(null==(t=_.current)?void 0:t.offsetWidth)||450})]}),b.jsx("div",{className:"controls-container",onClick:e=>e.stopPropagation(),children:b.jsx(co,{onNumberSelect:q,onClearCell:G,onUndo:$,selectedNumber:(null==d?void 0:d.value)||null,isPencilMode:m,onTogglePencilMode:ee,remainingNumbers:I})})]}):b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"top-row",children:[b.jsx("div",{className:"nav-block",children:b.jsx(Eo,{onNewGame:J,onPauseTimer:V,onGetHint:X,onShowTechniques:Q,onToggleNotes:Z,onSettings:te,isNotesMode:m,isTimerActive:h})}),b.jsxs("div",{className:"display-block",children:[b.jsxs("div",{children:["错误：",b.jsx("span",{className:"value error-count",style:{color:"#ff4d4d"},children:p})]}),b.jsx("div",{children:U()}),b.jsx("div",{children:Y(f)})]})]}),b.jsxs("div",{className:"bottom-row",children:[b.jsxs("div",{className:"board-container",ref:_,onClick:e=>e.stopPropagation(),style:{position:"relative"},children:[b.jsx(lo,{board:l||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:c,selectedCell:d,highlightedCells:A.filter(e=>!e.techniqueIndicator),incorrectCells:(null==s?void 0:s.incorrectCells)||new Set,onCellClick:B,isPencilMode:m,pencilNotes:P}),b.jsx(Mo,{highlightedCells:A.filter(e=>e.techniqueIndicator),boardWidth:(null==(r=_.current)?void 0:r.offsetWidth)||450})]}),b.jsx("div",{className:"controls-container",onClick:e=>e.stopPropagation(),children:b.jsx(co,{onNumberSelect:q,onClearCell:G,onUndo:$,selectedNumber:(null==d?void 0:d.value)||null,isPencilMode:m,onTogglePencilMode:ee,remainingNumbers:I})})]})]})}),n&&b.jsx("div",{className:"loading-overlay",children:b.jsx("div",{children:"加载中..."})}),b.jsx(wo,{isOpen:M,onClose:()=>O(!1),onSelectDifficulty:async e=>{try{if(console.log(`handleDifficultySelect 被调用，选择难度: ${e}`),O(!1),console.log("关闭难度选择模态框"),a&&(a("生成新谜题..."),console.log("显示加载状态")),console.log("sudokuContext 可用:",!!s),console.log("startNewGame 方法可用:",!!(null==s?void 0:s.startNewGame)),console.log("generateNewPuzzle 方法可用:",!!(null==s?void 0:s.generateNewPuzzle)),null==s?void 0:s.startNewGame)console.log("调用 startNewGame 方法"),await s.startNewGame(null,e),console.log("startNewGame 调用完成");else if(null==s?void 0:s.generateNewPuzzle)console.log("调用 generateNewPuzzle 方法"),await s.generateNewPuzzle(e),console.log("generateNewPuzzle 调用完成");else{console.warn("无法开始新游戏：上下文函数不可用"),console.log("使用备用方案：离线谜题生成器"),v&&v(e);const t=(e=>{console.log(`生成离线谜题，难度: ${e}`);const t={easy:40,medium:50,hard:58,expert:64}[e]||50,r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],n=r.map(e=>[...e]);let o=t;for(;o>0;){const e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());0!==n[e][t]&&(n[e][t]=0,o--)}return{puzzle:n,solution:r}})(e);console.log("离线谜题生成完成"),(null==s?void 0:s.setCurrentBoard)&&(null==s?void 0:s.setCurrentPuzzle)&&(null==s?void 0:s.setSolution)&&(console.log("设置谜题到上下文"),s.setCurrentPuzzle(t),s.setCurrentBoard(t.puzzle),s.setSolution(t.solution)),g(null),console.log("重置选中单元格")}}catch(t){console.error("Error starting new game:",t),console.error("错误详情:",t.message,t.stack)}finally{i&&(i(),console.log("隐藏加载状态"))}},initialDifficulty:u}),L&&b.jsx("div",{className:"pencil-mode-instructions",children:m?"进入铅笔模式，可以添加候选数字":"退出铅笔模式，返回正常输入"}),F&&b.jsx("div",{className:"pencil-mode-instructions",children:"已为所有空白格子计算并填充候选数"})]})},vc=Or.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,bc=Or.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`,yc=Or.div`
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
`,wc=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,jc=Or.h3`
  font-size: 22px;
  color: ${e=>e.theme.text};
  margin: 0;
`,kc=Or.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,Sc=Or.p`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 15px;
`,zc=Or.div`
  width: 100%;
  height: 8px;
  background-color: ${e=>e.theme.background};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`,Cc=Or.div`
  height: 100%;
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  border-radius: 4px;
  width: ${e=>e.percentage}%;
  transition: width 0.3s ease;
`,$c=Or.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Tc=Or.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Ac=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
`,Pc=Or.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Ic=Or.button`
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
`,Ec=Or.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Nc=Or.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Mc=Or.div`
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  padding: 20px;
`,Oc=Or.ol`
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Lc=Or.li`
  font-size: 16px;
  color: ${e=>e.theme.text};
  line-height: 1.6;
`,Rc=Or.button`
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
`,Fc=()=>{const{theme:t}=re(),{techniquesProgress:r,incrementTechniquePractice:n}=cn(),[o,a]=e.useState(null),i=[{id:"nakedSingles",name:"唯一候选数 (Naked Single)",description:"最简单的数独技巧，当一个格子只有一个可能的数字时填入该数字。",details:{description:"唯一候选数是最基础的数独解题技巧。当一个空格子所在的行、列和3x3宫格中已经包含了除一个数字外的所有其他数字时，这个空格子只能填入剩下的那个数字。",steps:["观察一个空格子","检查该格子所在的行，列出已经存在的数字","检查该格子所在的列，列出已经存在的数字","检查该格子所在的3x3宫格，列出已经存在的数字","如果以上三个区域已经包含了除一个数字外的所有数字（1-9），则填入剩下的那个数字"],examples:"例如：一个格子所在的行包含数字1、2、3、4、5、6、7、9，所在的列包含数字1、2、3、4、5、6、8，所在的宫格包含数字1、2、3、4、5、7、8、9。那么这个格子只能填入数字8。"}},{id:"hiddenSingles",name:"隐性唯一 (Hidden Single)",description:"当一个数字只能出现在某一行、列或宫格的某个特定格子时，填入该数字。",details:{description:"隐性唯一技巧比唯一候选数稍微复杂一些。当一个数字在某一行、列或3x3宫格中只能出现在一个特定的空格子时，即使该格子可能有其他候选数，但这个数字必须填入该格子。",steps:["选择一个数字（1-9）","检查某一行，确定该数字可能的放置位置","如果在该行中，该数字只能放在一个特定格子，则填入该数字","对每一列和每个3x3宫格重复同样的检查"],examples:"例如：在某一行中，数字5只能放在某个特定格子中，尽管该格子可能还有其他候选数（如2和5），但因为数字5在该行中没有其他可能的放置位置，所以这个格子必须填入5。"}},{id:"nakedPairs",name:"数对 (Naked Pairs)",description:"当两个格子在同一区域（行、列或宫格）中具有相同的两个候选数时，可以排除该区域其他格子中这两个数字。",details:{description:"数对技巧是一种排除法技巧。当在同一行、列或3x3宫格中有两个格子都只有相同的两个候选数时，这两个数字必须分别填入这两个格子，因此可以从该区域的其他格子的候选数中排除这两个数字。",steps:["在同一行、列或3x3宫格中寻找两个格子","确认这两个格子恰好有相同的两个候选数","从该区域的其他格子的候选数中排除这两个数字"],examples:"例如：在同一行中，两个格子都只有候选数3和7。这意味着这两个数字必须分别填入这两个格子，因此该行的其他格子中不可能是3或7，可以从它们的候选数中排除这两个数字。"}},{id:"hiddenPairs",name:"隐性数对 (Hidden Pairs)",description:"当两个数字只能出现在同一区域的两个特定格子中时，可以排除这两个格子中的其他候选数。",details:{description:"隐性数对是数对的一种变体。当在同一行、列或3x3宫格中，两个特定的数字只能出现在两个特定的格子中时，这两个格子必须包含这两个数字，可以排除这两个格子中的其他候选数。",steps:["在同一行、列或3x3宫格中选择两个数字","检查这两个数字是否只能出现在该区域的两个特定格子中","如果是，则可以从这两个格子中排除所有其他候选数，只保留这两个数字"],examples:"例如：在同一行中，数字4和6只能出现在两个特定的格子中，尽管这两个格子可能有其他候选数。这意味着这两个格子必须包含数字4和6，所以可以从这两个格子中删除其他候选数。"}},{id:"pointingPairs",name:"指向对 (Pointing Pairs)",description:"当一个数字在某个3x3宫格中只能出现在同一行或同一列时，可以排除该行或列中其他宫格内该数字的可能性。",details:{description:"指向对技巧利用3x3宫格和行/列的关系进行排除。当在某个3x3宫格中，一个数字只能出现在同一行或同一列的格子中时，这个数字在该行或列的其他3x3宫格中就不能出现在相同的行或列位置。",steps:["选择一个3x3宫格","对于某个数字，检查它在该宫格中可能的位置","如果这些位置全部位于同一行或同一列","则可以从该行或列的其他3x3宫格中排除该数字出现在相同行或列位置的可能性"],examples:"例如：在某个3x3宫格中，数字2只能出现在该宫格的第一行的两个格子中。这意味着在这一行的其他3x3宫格中，数字2不能出现在第一行的位置。"}},{id:"boxLineReduction",name:"宫行列排除 (Box-Line Reduction)",description:"当一个数字在某一行或列中只能出现在同一个3x3宫格内时，可以排除该宫格中其他格子的该数字可能性。",details:{description:"宫行列排除是指向对的反向应用。当在某一行或列中，一个数字只能出现在某个特定的3x3宫格中时，可以排除该宫格中其他格子出现该数字的可能性。",steps:["选择某一行或列","对于某个数字，检查它在该行或列中可能的位置","如果这些位置全部位于同一个3x3宫格中","则可以从该3x3宫格的其他格子中排除该数字"],examples:"例如：在某一行中，数字8只能出现在该行的前三个格子（属于第一个3x3宫格）。这意味着在第一个3x3宫格中，数字8只能出现在这三个格子中，可以从该宫格的其他六个格子中排除数字8。"}}],s=e=>{const t=r[e]||{mastered:0,practiced:0};return Math.min(100,t.practiced/10*20)};return b.jsx(vc,{children:o?b.jsxs(Tc,{theme:t,children:[b.jsxs(Ac,{children:[b.jsx(Pc,{theme:t,children:o.name}),b.jsx(Ic,{onClick:()=>{a(null)},theme:t,children:"关闭"})]}),b.jsxs(Ec,{children:[b.jsxs("div",{children:[b.jsx(Nc,{theme:t,children:"技巧说明"}),b.jsx("p",{style:{fontSize:"16px",color:t.textSecondary,lineHeight:"1.6"},children:o.details.description})]}),b.jsxs("div",{children:[b.jsx(Nc,{theme:t,children:"使用步骤"}),b.jsx(Oc,{children:o.details.steps.map((e,r)=>b.jsx(Lc,{theme:t,children:e},r))})]}),b.jsxs("div",{children:[b.jsx(Nc,{theme:t,children:"示例"}),b.jsx(Mc,{theme:t,children:b.jsx("p",{style:{fontSize:"16px",color:t.textSecondary,lineHeight:"1.6"},children:o.details.examples})})]}),b.jsx(Rc,{onClick:()=>{return e=o.id,n(e),void alert(`开始练习${null==(t=i.find(t=>t.id===e))?void 0:t.name}技巧！`);var e,t},theme:t,children:"开始练习"})]})]}):b.jsxs(b.Fragment,{children:[b.jsx("h2",{style:{fontSize:"32px",color:t.text,margin:0},children:"数独技巧学习"}),b.jsx("p",{style:{fontSize:"18px",color:t.textSecondary,marginBottom:"30px"},children:"点击技巧卡片了解详情，掌握各种数独解题方法"}),b.jsx(bc,{children:i.map(e=>{const n=r[e.id]||{mastered:0,practiced:0},o=s(e.id),i=(l=e.id,s(l)>=80);var l;return b.jsxs(yc,{onClick:()=>(e=>{a(e)})(e),mastered:i,theme:t,children:[b.jsxs(wc,{children:[b.jsx(jc,{theme:t,children:e.name}),b.jsx(kc,{mastered:i,theme:t,children:i?"已掌握":"学习中"})]}),b.jsx(Sc,{theme:t,children:e.description}),b.jsx(zc,{theme:t,children:b.jsx(Cc,{percentage:o,mastered:i,theme:t})}),b.jsxs($c,{theme:t,children:[b.jsxs("span",{children:["练习次数: ",n.practiced]}),b.jsxs("span",{children:["掌握度: ",o.toFixed(0),"%"]})]})]},e.id)})})]})})},Dc=Or.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,_c=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Hc=Or.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Wc=Or.button`
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
`,Bc=Or.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`,Yc=Or.button`
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
`,Uc=Or.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,qc=Or.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
`,Gc=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,Jc=Or.h3`
  font-size: 20px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Vc=Or.div`
  background-color: ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,Xc=Or.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
`,Kc=Or.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Qc=Or.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Zc=Or.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,ed=Or.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,td=Or.button`
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
`,rd=Or.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.textSecondary};
`,nd=Or.div`
  font-size: 72px;
  margin-bottom: 20px;
  color: ${e=>e.theme.disabled};
`,od=Or.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 10px;
`,ad=Or.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 20px;
`,id=Or.button`
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
`,sd=Or.div`
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
`,ld=Or.div`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,cd=Or.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-top: 0;
  margin-bottom: 20px;
`,dd=Or.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 30px;
  line-height: 1.6;
`,ud=Or.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`,fd=()=>{const{theme:t}=re(),{userId:r}=cn(),{loadSavedGame:n}=On(),{executeWithLoading:o}=ae(),[a,i]=e.useState([]),[s,l]=e.useState("all"),[c,d]=e.useState(!1),[u,f]=e.useState(null);e.useEffect(()=>{p()},[]);const p=async()=>{try{await o(async()=>{const e=await un.getUserProgress(r);i(e.data||[])},"加载游戏进度中...")}catch(e){console.error("加载进度失败:",e),i(h())}},h=()=>[{id:"1",puzzleId:"puzzle-1",difficulty:"easy",startTime:"2023-10-15T14:30:00",lastUpdated:"2023-10-15T15:45:00",completed:!1,completionTime:null,filledCells:42,totalCells:81,status:"in-progress",puzzleState:[]},{id:"2",puzzleId:"puzzle-2",difficulty:"medium",startTime:"2023-10-14T09:15:00",lastUpdated:"2023-10-14T10:30:00",completed:!0,completionTime:"2023-10-14T10:30:00",filledCells:81,totalCells:81,status:"completed",puzzleState:[]},{id:"3",puzzleId:"puzzle-3",difficulty:"hard",startTime:"2023-10-13T18:00:00",lastUpdated:"2023-10-13T18:30:00",completed:!1,completionTime:null,filledCells:28,totalCells:81,status:"paused",puzzleState:[]}],m=a.filter(e=>"all"===s||("completed"===s?"completed"===e.status:"in-progress"!==s||"completed"!==e.status)),g=e=>{f(e),d(!0)},x=()=>{d(!1),f(null)},v=e=>new Date(e).toLocaleString(),y=e=>{switch(e){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";case"expert":return"专家";default:return e}};return b.jsxs(Dc,{children:[b.jsxs(_c,{children:[b.jsx(Hc,{children:"游戏进度"}),a.length>0&&b.jsx(Wc,{onClick:()=>g("clear-all"),children:"清空所有进度"})]}),a.length>0&&b.jsxs(Bc,{children:[b.jsx(Yc,{active:"all"===s,onClick:()=>l("all"),children:"全部进度"}),b.jsx(Yc,{active:"in-progress"===s,onClick:()=>l("in-progress"),children:"进行中"}),b.jsx(Yc,{active:"completed"===s,onClick:()=>l("completed"),children:"已完成"})]}),m.length>0?b.jsx(Uc,{children:m.map(e=>{return b.jsxs(qc,{status:e.status,children:[b.jsxs(Gc,{children:[b.jsxs(Jc,{children:["数独游戏 #",e.id]}),b.jsx(Vc,{status:e.status,theme:t,children:"completed"===e.status?"已完成":"in-progress"===e.status?"进行中":"已暂停"})]}),b.jsxs(Xc,{children:[b.jsxs(Kc,{children:[b.jsx(Qc,{theme:t,children:"难度"}),b.jsx(Zc,{theme:t,children:y(e.difficulty)})]}),b.jsxs(Kc,{children:[b.jsx(Qc,{theme:t,children:"开始时间"}),b.jsx(Zc,{theme:t,children:v(e.startTime)})]}),b.jsxs(Kc,{children:[b.jsx(Qc,{theme:t,children:"最后更新"}),b.jsx(Zc,{theme:t,children:v(e.lastUpdated)})]}),b.jsxs(Kc,{children:[b.jsx(Qc,{theme:t,children:"完成进度"}),b.jsxs(Zc,{theme:t,children:[(r=e.filledCells,i=e.totalCells,Math.round(r/i*100)),"%"]})]})]}),b.jsxs(ed,{children:["completed"!==e.status&&b.jsx(td,{type:"primary",onClick:()=>(async e=>{try{await o(async()=>{const t=a.find(t=>t.id===e);t&&(await n(t.puzzleState,t.puzzleId),window.location.href="/game")},"加载游戏中...")}catch(t){console.error("加载游戏失败:",t),alert("加载游戏失败，请稍后重试")}})(e.id),children:"继续游戏"}),b.jsx(td,{type:"danger",onClick:()=>g(e.id),children:"删除进度"})]})]},e.id);var r,i})}):b.jsxs(rd,{children:[b.jsx(nd,{children:"📝"}),b.jsx(od,{children:"暂无游戏进度"}),b.jsx(ad,{children:"all"!==s?"没有符合筛选条件的游戏进度":"您还没有开始任何数独游戏"}),b.jsx(id,{onClick:()=>window.location.href="/game",children:"开始新游戏"})]}),c&&b.jsx(sd,{children:b.jsxs(ld,{children:[b.jsx(cd,{children:"clear-all"===u?"确认清空所有进度":"确认删除进度"}),b.jsx(dd,{children:"clear-all"===u?"此操作将删除所有游戏进度，且无法恢复。确定要继续吗？":"此操作将删除选中的游戏进度，且无法恢复。确定要继续吗？"}),b.jsxs(ud,{children:[b.jsx(td,{type:"secondary",onClick:x,children:"取消"}),b.jsx(td,{type:"danger",onClick:()=>{"clear-all"===u?(async()=>{try{await o(async()=>{i([])},"清空进度中...")}catch(e){console.error("清空进度失败:",e),alert("清空进度失败，请稍后重试")}})():"string"==typeof u&&(async e=>{try{await o(async()=>{i(t=>t.filter(t=>t.id!==e))},"删除进度中...")}catch(t){console.error("删除进度失败:",t),alert("删除进度失败，请稍后重试")}})(u),x()},children:"确认删除"})]})]})})]})},pd=Or.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,hd=Or.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,md=Or.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`,gd=Or.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 5px solid ${e=>e.color||e.theme.primary};
`,xd=Or.div`
  font-size: 48px;
  font-weight: 700;
  color: ${e=>e.color||e.theme.primary};
`,vd=Or.div`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,bd=Or.div`
  font-size: 14px;
  color: ${e=>e.positive?e.theme.success:e.theme.error};
`,yd=Or.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,wd=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,jd=Or.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,kd=Or.div`
  display: flex;
  gap: 10px;
`,Sd=Or.button`
  background-color: ${e=>e.active?e.theme.primary:e.theme.surface};
  color: ${e=>e.active?"white":e.theme.text};
  border: 2px solid ${e=>e.active?e.theme.primary:e.theme.border};
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`,zd=Or.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.textSecondary};
  font-size: 18px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
`,Cd=Or.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,$d=Or.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Td=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ad=Or.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,Pd=Or.span`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,Id=Or.div`
  width: 100%;
  height: 10px;
  background-color: ${e=>e.theme.background};
  border-radius: 5px;
  overflow: hidden;
`,Ed=Or.div`
  height: 100%;
  background-color: ${e=>{switch(e.difficulty){case"easy":return"#4CAF50";case"medium":return"#FF9800";case"hard":return"#F44336";case"expert":return"#9C27B0";default:return e.theme.primary}}};
  border-radius: 5px;
  width: ${e=>e.percentage}%;
`,Nd=Or.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Md=Or.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
`,Od=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  border-left: 4px solid ${e=>e.mastered?e.theme.success:e.theme.primary};
`,Ld=Or.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Rd=Or.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,Fd=Or.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Dd=Or.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,_d=()=>{const{theme:t}=re(),{userId:r,userStats:n,techniquesProgress:o}=cn(),{executeWithLoading:a}=ae(),[i,s]=e.useState(null),[l,c]=e.useState("all");e.useEffect(()=>{d()},[l]);const d=async()=>{try{await a(async()=>{const e=await un.getUserStatistics(r,l);s(e.data)},"加载统计数据中...")}catch(e){console.error("加载统计数据失败:",e),s(u())}},u=()=>({totalGames:42,completedGames:38,winRate:90.5,averageTime:1245,favoriteDifficulty:"medium",bestTime:420,currentStreak:5,longestStreak:12,totalPlayTime:145200,difficultyBreakdown:{easy:15,medium:20,hard:5,expert:2},recentPerformance:[{date:"2023-10-10",games:3,completed:3},{date:"2023-10-11",games:2,completed:2},{date:"2023-10-12",games:4,completed:3},{date:"2023-10-13",games:1,completed:1},{date:"2023-10-14",games:2,completed:2},{date:"2023-10-15",games:3,completed:3},{date:"2023-10-16",games:2,completed:2}]}),f=i||u(),p=o||{},h=e=>{if(!e)return"0:00";return`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`},m=()=>{if(f.totalGames)return f.totalGames;const e=f.difficultyBreakdown||{};return Object.values(e).reduce((e,t)=>e+t,0)},g=e=>{const t=p[e]||{practiced:0};return Math.min(100,t.practiced/10*20)};return b.jsxs(pd,{children:[b.jsx(hd,{theme:t,children:"我的统计"}),b.jsxs(md,{children:[b.jsxs(gd,{color:t.primary,theme:t,children:[b.jsx(xd,{color:t.primary,theme:t,children:m()}),b.jsx(vd,{theme:t,children:"总游戏数"}),b.jsx(bd,{positive:!0,theme:t,children:"+5 本周"})]}),b.jsxs(gd,{color:t.success,theme:t,children:[b.jsx(xd,{color:t.success,theme:t,children:f.completedGames}),b.jsx(vd,{theme:t,children:"完成游戏"}),b.jsx(bd,{positive:!0,theme:t,children:"全部完成"})]}),b.jsxs(gd,{color:t.warning,theme:t,children:[b.jsxs(xd,{color:t.warning,theme:t,children:[f.winRate,"%"]}),b.jsx(vd,{theme:t,children:"胜率"}),b.jsx(bd,{positive:!0,theme:t,children:"+2% 本月"})]}),b.jsxs(gd,{color:t.info,theme:t,children:[b.jsx(xd,{color:t.info,theme:t,children:h(f.averageTime)}),b.jsx(vd,{theme:t,children:"平均时间"}),b.jsx(bd,{positive:!0,theme:t,children:"-30秒"})]}),b.jsxs(gd,{color:t.error,theme:t,children:[b.jsx(xd,{color:t.error,theme:t,children:h(f.bestTime)}),b.jsx(vd,{theme:t,children:"最佳时间"}),b.jsx(bd,{positive:!0,theme:t,children:"记录保持中"})]}),b.jsxs(gd,{color:t.primary,theme:t,children:[b.jsx(xd,{color:t.primary,theme:t,children:f.currentStreak}),b.jsx(vd,{theme:t,children:"当前连续天数"}),b.jsx(bd,{positive:f.currentStreak>1,theme:t,children:f.currentStreak>1?"🔥 加油！":"今天开始"})]})]}),b.jsxs(yd,{theme:t,children:[b.jsxs(wd,{children:[b.jsx(jd,{theme:t,children:"游戏进度"}),b.jsxs(kd,{children:[b.jsx(Sd,{active:"week"===l,onClick:()=>c("week"),theme:t,children:"本周"}),b.jsx(Sd,{active:"month"===l,onClick:()=>c("month"),theme:t,children:"本月"}),b.jsx(Sd,{active:"all"===l,onClick:()=>c("all"),theme:t,children:"全部"})]})]}),b.jsx(zd,{theme:t,children:"📊 游戏进度图表"})]}),b.jsxs(yd,{theme:t,children:[b.jsx(wd,{children:b.jsx(jd,{theme:t,children:"难度分布"})}),b.jsx(Cd,{children:Object.entries(f.difficultyBreakdown||{}).map(([e,r])=>{const n=(e=>{const t=f.difficultyBreakdown||{},r=m();return r>0?t[e]/r*100:0})(e);return b.jsxs($d,{children:[b.jsxs(Td,{children:[b.jsx(Ad,{theme:t,children:{easy:"简单",medium:"中等",hard:"困难",expert:"专家"}[e]||e}),b.jsxs(Pd,{theme:t,children:[r," 局 (",n.toFixed(1),"%)"]})]}),b.jsx(Id,{theme:t,children:b.jsx(Ed,{difficulty:e,percentage:n})})]},e)})})]}),b.jsxs(Nd,{theme:t,children:[b.jsx(jd,{theme:t,children:"技巧掌握"}),b.jsx(Md,{children:[{id:"nakedSingles",name:"唯一候选数"},{id:"hiddenSingles",name:"隐性唯一"},{id:"nakedPairs",name:"数对"},{id:"hiddenPairs",name:"隐性数对"},{id:"pointingPairs",name:"指向对"},{id:"boxLineReduction",name:"宫行列排除"}].map(e=>{var r;const n=g(e.id),o=(a=e.id,g(a)>=80);var a;const i=(null==(r=p[e.id])?void 0:r.practiced)||0;return b.jsxs(Od,{mastered:o,theme:t,children:[b.jsxs(Ld,{children:[b.jsx(Rd,{theme:t,children:e.name}),b.jsxs(Fd,{theme:t,children:["练习 ",i," 次 · 掌握度 ",n.toFixed(0),"%"]})]}),b.jsx(Dd,{mastered:o,theme:t,children:o?"已掌握":"学习中"})]},e.id)})})]})]})},Hd={"zh-CN":{home:"首页",game:"游戏",techniques:"技巧",progress:"进度",statistics:"统计",settings:"设置",settingsPageTitle:"设置",language:"语言",theme:"主题",lightTheme:"浅色主题",darkTheme:"深色主题",systemTheme:"跟随系统",customTheme:"自定义主题",editTheme:"编辑主题",saveChanges:"保存更改",cancel:"取消",themeEditor:"主题编辑器",backgroundColor:"背景颜色",surfaceColor:"表面颜色",textColor:"文字颜色",textSecondaryColor:"次要文字颜色",primaryColor:"主色调",secondaryColor:"次色调",successColor:"成功颜色",warningColor:"警告颜色",errorColor:"错误颜色",borderColor:"边框颜色",gridLineColor:"网格线颜色",gridLineThickColor:"粗网格线颜色",highlightColor:"高亮颜色",preview:"预览",reset:"重置",exportTheme:"导出主题",importTheme:"导入主题",confirm:"确认",delete:"删除",back:"返回",continue:"继续",complete:"完成",start:"开始",pause:"暂停",resume:"继续",newGame:"新游戏",difficulty:"难度",easy:"简单",medium:"中等",hard:"困难",expert:"专家"},"en-US":{home:"Home",game:"Game",techniques:"Techniques",progress:"Progress",statistics:"Statistics",settings:"Settings",settingsPageTitle:"Settings",language:"Language",theme:"Theme",lightTheme:"Light Theme",darkTheme:"Dark Theme",systemTheme:"System Theme",customTheme:"Custom Theme",editTheme:"Edit Theme",saveChanges:"Save Changes",cancel:"Cancel",themeEditor:"Theme Editor",backgroundColor:"Background Color",surfaceColor:"Surface Color",textColor:"Text Color",textSecondaryColor:"Secondary Text Color",primaryColor:"Primary Color",secondaryColor:"Secondary Color",successColor:"Success Color",warningColor:"Warning Color",errorColor:"Error Color",borderColor:"Border Color",gridLineColor:"Grid Line Color",gridLineThickColor:"Thick Grid Line Color",highlightColor:"Highlight Color",preview:"Preview",reset:"Reset",exportTheme:"Export Theme",importTheme:"Import Theme",confirm:"Confirm",delete:"Delete",back:"Back",continue:"Continue",complete:"Complete",start:"Start",pause:"Pause",resume:"Resume",newGame:"New Game",difficulty:"Difficulty",easy:"Easy",medium:"Medium",hard:"Hard",expert:"Expert"}},Wd=e.createContext(),Bd=({children:t})=>{const[r,n]=e.useState(localStorage.getItem("language")||("zh-CN"===navigator.language?"zh-CN":"en-US")),o={language:r,t:e=>{var t;return(null==(t=Hd[r])?void 0:t[e])||e},changeLanguage:e=>{n(e),localStorage.setItem("language",e)},availableLanguages:[{code:"zh-CN",name:"中文简体"},{code:"en-US",name:"English"}]};return b.jsx(Wd.Provider,{value:o,children:t})},Yd=()=>{const t=e.useContext(Wd);if(!t)throw new Error("useLanguage must be used within a LanguageProvider");return t},Ud=Or.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`,qd=Or.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,Gd=Or(n)`
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
`,Jd=Or.h1`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  flex: 1;
`,Vd=Or.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`,Xd=Or.h2`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 20px 0;
  border-bottom: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  padding-bottom: 10px;
`,Kd=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  
  &:last-child {
    border-bottom: none;
  }
`,Qd=Or.div`
  font-size: 18px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-weight: 500;
`,Zd=Or.div`
  display: flex;
  gap: 10px;
`,eu=Or.button`
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
`,tu=Or.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,ru=Or.button`
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
`,nu=Or.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,ou=Or(n)`
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
`,au=Or.span`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  font-style: italic;
`,iu=()=>{const{theme:e,themeMode:t,setLightTheme:r,setDarkTheme:n,setSystemTheme:a,setCustomThemeMode:i,customTheme:s}=re(),{language:l,changeLanguage:c,availableLanguages:d,t:u}=Yd();return o(),b.jsxs(Ud,{children:[b.jsxs(qd,{children:[b.jsx(Gd,{to:"/",theme:e,children:b.jsx(sc,{icon:hc,size:"lg"})}),b.jsx(Jd,{theme:e,children:u("settingsPageTitle")})]}),b.jsxs(Vd,{theme:e,children:[b.jsx(Xd,{theme:e,children:u("language")}),b.jsxs(Kd,{children:[b.jsx(Qd,{theme:e,children:u("language")}),b.jsx(Zd,{children:d.map(t=>b.jsx(eu,{active:l===t.code,onClick:()=>c(t.code),theme:e,children:t.name},t.code))})]})]}),b.jsxs(Vd,{theme:e,children:[b.jsx(Xd,{theme:e,children:u("theme")}),b.jsxs(tu,{children:[b.jsxs(ru,{active:"light"===t,onClick:r,theme:e,children:[b.jsx(sc,{icon:cc,size:"lg"}),u("lightTheme")]}),b.jsxs(ru,{active:"dark"===t,onClick:n,theme:e,children:[b.jsx(sc,{icon:dc,size:"lg"}),u("darkTheme")]}),b.jsxs(ru,{active:"system"===t,onClick:a,theme:e,children:[b.jsx(sc,{icon:gc,size:"lg"}),u("systemTheme")]})]}),b.jsxs(Kd,{style:{marginTop:"20px"},children:[b.jsx(Qd,{theme:e,children:u("customTheme")}),b.jsxs(nu,{children:[b.jsxs(ou,{to:"/settings/theme-editor",theme:e,children:[b.jsx(sc,{icon:uc,size:"lg"}),u("editTheme")]}),b.jsx(au,{theme:e,children:"custom"===t&&`${u("customTheme")} - ${s.name}`})]})]})]})]})},su=Or.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`,lu=Or.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,cu=Or(n)`
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
`,du=Or.h1`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  flex: 1;
`,uu=Or.div`
  display: flex;
  gap: 10px;
`,fu=Or.button`
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
`,pu=Or.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,hu=Or.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,mu=Or.section`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 600px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`,gu=Or.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,xu=Or.h2`
  color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.text)||"#333333"}};
  margin: 0;
  font-size: 24px;
`,vu=Or.button`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.primary)||"#4a6cf7"}};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
`,bu=Or.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.gridLine)||"#e0e0e0"}};
  border-radius: 8px;
  padding: 2px;
  margin: 0 auto 30px;
  width: 300px;
  height: 300px;
`,yu=Or.div`
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
`,wu=Or.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`,ju=Or.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,ku=Or.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  border: 2px solid ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.border)||"#e0e0e0"}};
`,Su=Or.span`
  color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.text)||"#333333"}};
  font-size: 14px;
`,zu=Or.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,Cu=Or.label`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`,$u=Or.input`
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
`,Tu=Or.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Au=Or.input`
  width: 60px;
  height: 44px;
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  background: none;
`,Pu=Or.input`
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
`,Iu=Or.input`
  display: none;
`,Eu=()=>{const{theme:t,customTheme:r,updateCustomTheme:n,resetCustomTheme:a,exportTheme:i,importTheme:s}=re(),{t:l}=Yd();o();const c=e.useRef(null),[d,u]=e.useState({...r});e.useEffect(()=>{u({...r})},[r]);const f=(e,t)=>{u(r=>({...r,[e]:t}))},p=[{key:"background",label:l("backgroundColor")},{key:"surface",label:l("surfaceColor")},{key:"text",label:l("textColor")},{key:"textSecondary",label:l("textSecondaryColor")},{key:"primary",label:l("primaryColor")},{key:"secondary",label:l("secondaryColor")},{key:"success",label:l("successColor")},{key:"warning",label:l("warningColor")},{key:"error",label:l("errorColor")},{key:"border",label:l("borderColor")},{key:"gridLine",label:l("gridLineColor")},{key:"gridLineThick",label:l("gridLineThickColor")},{key:"highlight",label:l("highlightColor")}];return b.jsxs(su,{children:[b.jsxs(lu,{children:[b.jsx(cu,{to:"/settings",theme:t,children:b.jsx(sc,{icon:hc,size:"lg"})}),b.jsx(du,{theme:t,children:l("themeEditor")}),b.jsxs(uu,{children:[b.jsxs(fu,{type:"secondary",onClick:()=>{a(),K.info("主题已重置",{position:"top-right",autoClose:2e3})},theme:t,children:[b.jsx(sc,{icon:mc,size:"lg"}),l("reset")]}),b.jsxs(fu,{type:"primary",onClick:()=>{n(d),K.success("主题已保存",{position:"top-right",autoClose:2e3})},theme:t,children:[b.jsx(sc,{icon:lc,size:"lg"}),l("saveChanges")]})]})]}),b.jsxs(pu,{children:[b.jsxs(hu,{theme:t,children:[b.jsx(Pu,{type:"text",value:d.name||"",onChange:e=>{u(t=>({...t,name:e.target.value}))},placeholder:l("customTheme"),theme:t}),p.map(e=>b.jsxs(zu,{children:[b.jsx(Cu,{theme:t,children:e.label}),b.jsxs(Tu,{children:[b.jsx($u,{type:"text",value:d[e.key]||"",onChange:t=>f(e.key,t.target.value),placeholder:"#000000",theme:t}),b.jsx(Au,{type:"color",value:d[e.key]||"#000000",onChange:t=>f(e.key,t.target.value)})]})]},e.key)),b.jsxs(uu,{style:{marginTop:"30px"},children:[b.jsxs(fu,{type:"secondary",onClick:()=>{var e;return null==(e=c.current)?void 0:e.click()},theme:t,children:[b.jsx(sc,{icon:pc,size:"lg"}),l("importTheme")]}),b.jsx(Iu,{ref:c,type:"file",accept:".json",onChange:async e=>{const t=e.target.files[0];if(t)try{await s(t),K.success("主题导入成功",{position:"top-right",autoClose:2e3}),e.target.value=""}catch(r){K.error("主题导入失败: "+r.message,{position:"top-right",autoClose:3e3})}}}),b.jsxs(fu,{type:"secondary",onClick:()=>{i(d),K.info("主题已导出",{position:"top-right",autoClose:2e3})},theme:t,children:[b.jsx(sc,{icon:fc,size:"lg"}),l("exportTheme")]})]})]}),b.jsxs(mu,{previewTheme:d,children:[b.jsxs(gu,{previewTheme:d,children:[b.jsx(xu,{previewTheme:d,children:l("preview")}),b.jsx(vu,{previewTheme:d,children:l("preview")})]}),b.jsx(bu,{previewTheme:d,children:(()=>{const e=[];for(let t=0;t<9;t++)for(let r=0;r<9;r++){const n=4===t&&4===r||0===t&&0===r||8===t&&8===r;e.push(b.jsx(yu,{row:t,col:r,isHighlighted:n,previewTheme:d,children:Math.floor(9*Math.random())+1},`${t}-${r}`))}return e})()}),b.jsxs(wu,{children:[b.jsxs(ju,{previewTheme:d,children:[b.jsx(ku,{color:d.primary,previewTheme:d}),b.jsx(Su,{previewTheme:d,children:l("primaryColor")})]}),b.jsxs(ju,{previewTheme:d,children:[b.jsx(ku,{color:d.success,previewTheme:d}),b.jsx(Su,{previewTheme:d,children:l("successColor")})]}),b.jsxs(ju,{previewTheme:d,children:[b.jsx(ku,{color:d.warning,previewTheme:d}),b.jsx(Su,{previewTheme:d,children:l("warningColor")})]}),b.jsxs(ju,{previewTheme:d,children:[b.jsx(ku,{color:d.error,previewTheme:d}),b.jsx(Su,{previewTheme:d,children:l("errorColor")})]})]})]})]})]})};y.createRoot(document.getElementById("root")).render(b.jsxs(r.StrictMode,{children:[b.jsx(te,{children:b.jsx(Bd,{children:b.jsx(oe,{children:b.jsx(ln,{children:b.jsx(Mn,{children:b.jsx(a,{children:b.jsx(an,{children:b.jsxs(i,{children:[b.jsx(s,{path:"/",element:b.jsx(xc,{})}),b.jsx(s,{path:"/home",element:b.jsx(oo,{})}),b.jsx(s,{path:"/game",element:b.jsx(xc,{})}),b.jsx(s,{path:"/techniques",element:b.jsx(Fc,{})}),b.jsx(s,{path:"/progress",element:b.jsx(fd,{})}),b.jsx(s,{path:"/stats",element:b.jsx(_d,{})}),b.jsx(s,{path:"/settings",element:b.jsx(iu,{})}),b.jsx(s,{path:"/settings/theme-editor",element:b.jsx(Eu,{})})]})})})})})})})}),b.jsx(H,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]}));
