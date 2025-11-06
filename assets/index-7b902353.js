import{r as e,a as r,R as o,u as n,L as i,B as a,b as l,d as s}from"./react-vendor-ce3df769.js";import{l as c}from"./utils-b9091abe.js";import{a as d}from"./axios-8e1cd5bd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var u={exports:{}},f={},p=e,h=Symbol.for("react.element"),m=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,x=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function b(e,t,r){var o,n={},i=null,a=null;for(o in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)g.call(t,o)&&!y.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===n[o]&&(n[o]=t[o]);return{$$typeof:h,type:e,key:i,ref:a,props:n,_owner:x.current}}f.Fragment=m,f.jsx=b,f.jsxs=b,u.exports=f;var v=u.exports,w={},C=r;function k(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=k(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function j(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=k(e))&&(o&&(o+=" "),o+=t);return o}w.createRoot=C.createRoot,w.hydrateRoot=C.hydrateRoot;const $=e=>"number"==typeof e&&!isNaN(e),S=e=>"string"==typeof e,z=e=>"function"==typeof e,T=e=>S(e)||z(e)?e:null,A=t=>e.isValidElement(t)||S(t)||z(t)||$(t);function P(t){let{enter:r,exit:n,appendPosition:i=!1,collapse:a=!0,collapseDuration:l=300}=t;return function(t){let{children:s,position:c,preventExitTransition:d,done:u,nodeRef:f,isIn:p}=t;const h=i?`${r}--${c}`:r,m=i?`${n}--${c}`:n,g=e.useRef(0);return e.useLayoutEffect(()=>{const e=f.current,t=h.split(" "),r=o=>{o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===g.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)},[]),e.useEffect(()=>{const e=f.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,r){void 0===r&&(r=300);const{scrollHeight:o,style:n}=e;requestAnimationFrame(()=>{n.minHeight="initial",n.height=o+"px",n.transition=`all ${r}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(t,r)})})}(e,u,l):u()};p||(d?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))},[p]),o.createElement(o.Fragment,null,s)}}function N(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const I={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const r=this.list.get(e).filter(e=>e!==t);return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const r=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(r)})}},R=e=>{let{theme:t,type:r,...n}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${r})`,...n})},E={info:function(e){return o.createElement(R,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(R,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(R,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(R,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function F(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){let{closeToast:t,theme:r,ariaLabel:n="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":n},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function W(e){let{delay:t,isRunning:r,closeToast:n,type:i="default",hide:a,className:l,style:s,controlledProgress:c,progress:d,rtl:u,isIn:f,theme:p}=e;const h=a||c&&0===d,m={...s,animationDuration:`${t}ms`,animationPlayState:r?"running":"paused",opacity:h?0:1};c&&(m.transform=`scaleX(${d})`);const g=j("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),x=z(l)?l({rtl:u,type:i,defaultClassName:g}):j(g,l);return o.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:x,style:m,[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]:c&&d<1?null:()=>{f&&n()}})}const O=t=>{const{isRunning:r,preventExitTransition:n,toastRef:i,eventHandlers:a}=function(t){const[r,o]=e.useState(!1),[n,i]=e.useState(!1),a=e.useRef(null),l=e.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=e.useRef(t),{autoClose:c,pauseOnHover:d,closeToast:u,onClick:f,closeOnClick:p}=t;function h(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",b),document.addEventListener("touchmove",y),document.addEventListener("touchend",b);const r=a.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=r.getBoundingClientRect(),r.style.transition="",l.x=M(e.nativeEvent),l.y=F(e.nativeEvent),"x"===t.draggableDirection?(l.start=l.x,l.removalDistance=r.offsetWidth*(t.draggablePercent/100)):(l.start=l.y,l.removalDistance=r.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function m(e){if(l.boundingRect){const{top:r,bottom:o,left:n,right:i}=l.boundingRect;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&l.x>=n&&l.x<=i&&l.y>=r&&l.y<=o?x():g()}}function g(){o(!0)}function x(){o(!1)}function y(e){const o=a.current;l.canDrag&&o&&(l.didMove=!0,r&&x(),l.x=M(e),l.y=F(e),l.delta="x"===t.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),o.style.transform=`translate${t.draggableDirection}(${l.delta}px)`,o.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function b(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",b);const e=a.current;if(l.canDrag&&l.didMove&&e){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return i(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform=`translate${t.draggableDirection}(0)`,e.style.opacity="1"}}e.useEffect(()=>{s.current=t}),e.useEffect(()=>(a.current&&a.current.addEventListener("d",g,{once:!0}),z(t.onOpen)&&t.onOpen(e.isValidElement(t.children)&&t.children.props),()=>{const t=s.current;z(t.onClose)&&t.onClose(e.isValidElement(t.children)&&t.children.props)}),[]),e.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",g),window.addEventListener("blur",x)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",g),window.removeEventListener("blur",x))}),[t.pauseOnFocusLoss]);const v={onMouseDown:h,onTouchStart:h,onMouseUp:m,onTouchEnd:m};return c&&d&&(v.onMouseEnter=x,v.onMouseLeave=g),p&&(v.onClick=e=>{f&&f(e),l.canCloseOnClick&&u()}),{playToast:g,pauseToast:x,isRunning:r,preventExitTransition:n,toastRef:a,eventHandlers:v}}(t),{closeButton:l,children:s,autoClose:c,onClick:d,type:u,hideProgressBar:f,closeToast:p,transition:h,position:m,className:g,style:x,bodyClassName:y,bodyStyle:b,progressClassName:v,progressStyle:w,updateId:C,role:k,progress:$,rtl:S,toastId:T,deleteToast:A,isIn:P,isLoading:N,iconOut:I,closeOnClick:R,theme:E}=t,O=j("Toastify__toast",`Toastify__toast-theme--${E}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":R}),D=z(g)?g({rtl:S,position:m,type:u,defaultClassName:O}):j(O,g),q=!!$||!c,H={closeToast:p,type:u,theme:E};let B=null;return!1===l||(B=z(l)?l(H):e.isValidElement(l)?e.cloneElement(l,H):L(H)),o.createElement(h,{isIn:P,done:A,position:m,preventExitTransition:n,nodeRef:i},o.createElement("div",{id:T,onClick:d,className:D,...a,style:x,ref:i},o.createElement("div",{...P&&{role:k},className:z(y)?y({type:u}):j("Toastify__toast-body",y),style:b},null!=I&&o.createElement("div",{className:j("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},I),o.createElement("div",null,s)),B,o.createElement(W,{...C&&!q?{key:`pb-${C}`}:{},rtl:S,theme:E,delay:c,isRunning:r,isIn:P,closeToast:p,hide:f,type:u,style:w,className:v,controlledProgress:q,progress:$||0})))},D=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},q=P(D("bounce",!0));P(D("slide",!0)),P(D("zoom")),P(D("flip"));const H=e.forwardRef((t,r)=>{const{getToastToRender:n,containerRef:i,isToastActive:a}=function(t){const[,r]=e.useReducer(e=>e+1,0),[o,n]=e.useState([]),i=e.useRef(null),a=e.useRef(new Map).current,l=e=>-1!==o.indexOf(e),s=e.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:l,getToast:e=>a.get(e)}).current;function c(e){let{containerId:t}=e;const{limit:r}=s.props;!r||t&&s.containerId!==t||(s.count-=s.queue.length,s.queue=[])}function d(e){n(t=>null==e?[]:t.filter(t=>t!==e))}function u(){const{toastContent:e,toastProps:t,staleId:r}=s.queue.shift();p(e,t,r)}function f(t,o){let{delay:n,staleId:l,...c}=o;if(!A(t)||(f=c,!i.current||s.props.enableMultiContainer&&f.containerId!==s.props.containerId||a.has(f.toastId)&&null==f.updateId))return;var f;const{toastId:h,updateId:m,data:g}=c,{props:x}=s,y=()=>d(h),b=null==m;b&&s.count++;const v={...x,style:x.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(c).filter(e=>{let[t,r]=e;return null!=r})),toastId:h,updateId:m,data:g,closeToast:y,isIn:!1,className:T(c.className||x.toastClassName),bodyClassName:T(c.bodyClassName||x.bodyClassName),progressClassName:T(c.progressClassName||x.progressClassName),autoClose:!c.isLoading&&(w=c.autoClose,C=x.autoClose,!1===w||$(w)&&w>0?w:C),deleteToast(){const e=N(a.get(h),"removed");a.delete(h),I.emit(4,e);const t=s.queue.length;if(s.count=null==h?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),t>0){const e=null==h?s.props.limit:1;if(1===t||1===e)s.displayedToast++,u();else{const r=e>t?t:e;s.displayedToast=r;for(let e=0;e<r;e++)u()}}else r()}};var w,C;v.iconOut=function(t){let{theme:r,type:o,isLoading:n,icon:i}=t,a=null;const l={theme:r,type:o};return!1===i||(z(i)?a=i(l):e.isValidElement(i)?a=e.cloneElement(i,l):S(i)||$(i)?a=i:n?a=E.spinner():o in E&&(a=E[o](l))),a}(v),z(c.onOpen)&&(v.onOpen=c.onOpen),z(c.onClose)&&(v.onClose=c.onClose),v.closeButton=x.closeButton,!1===c.closeButton||A(c.closeButton)?v.closeButton=c.closeButton:!0===c.closeButton&&(v.closeButton=!A(x.closeButton)||x.closeButton);let k=t;e.isValidElement(t)&&!S(t.type)?k=e.cloneElement(t,{closeToast:y,toastProps:v,data:g}):z(t)&&(k=t({closeToast:y,toastProps:v,data:g})),x.limit&&x.limit>0&&s.count>x.limit&&b?s.queue.push({toastContent:k,toastProps:v,staleId:l}):$(n)?setTimeout(()=>{p(k,v,l)},n):p(k,v,l)}function p(e,t,r){const{toastId:o}=t;r&&a.delete(r);const i={content:e,props:t};a.set(o,i),n(e=>[...e,o].filter(e=>e!==r)),I.emit(4,N(i,null==i.props.updateId?"added":"updated"))}return e.useEffect(()=>(s.containerId=t.containerId,I.cancelEmit(3).on(0,f).on(1,e=>i.current&&d(e)).on(5,c).emit(2,s),()=>{a.clear(),I.emit(3,s)}),[]),e.useEffect(()=>{s.props=t,s.isToastActive=l,s.displayedToast=o.length}),{getToastToRender:function(e){const r=new Map,o=Array.from(a.values());return t.newestOnTop&&o.reverse(),o.forEach(e=>{const{position:t}=e.props;r.has(t)||r.set(t,[]),r.get(t).push(e)}),Array.from(r,t=>e(t[0],t[1]))},containerRef:i,isToastActive:l}}(t),{className:l,style:s,rtl:c,containerId:d}=t;function u(e){const t=j("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":c});return z(l)?l({position:e,rtl:c,defaultClassName:t}):j(t,T(l))}return e.useEffect(()=>{r&&(r.current=i.current)},[]),o.createElement("div",{ref:i,className:"Toastify",id:d},n((e,t)=>{const r=t.length?{...s}:{...s,pointerEvents:"none"};return o.createElement("div",{className:u(e),style:r,key:`container-${e}`},t.map((e,r)=>{let{content:n,props:i}=e;return o.createElement(O,{...i,isIn:a(i.toastId),style:{...i.style,"--nth":r+1,"--len":t.length},key:`toast-${i.key}`},n)}))}))});H.displayName="ToastContainer",H.defaultProps={position:"top-right",transition:q,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let B,_=new Map,Y=[],G=1;function U(){return""+G++}function X(e){return e&&(S(e.toastId)||$(e.toastId))?e.toastId:U()}function Z(e,t){return _.size>0?I.emit(0,e,t):Y.push({content:e,options:t}),t.toastId}function V(e,t){return{...t,type:t&&t.type||e,toastId:X(t)}}function J(e){return(t,r)=>Z(t,V(e,r))}function K(e,t){return Z(e,V("default",t))}K.loading=(e,t)=>Z(e,V("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),K.promise=function(e,t,r){let o,{pending:n,error:i,success:a}=t;n&&(o=S(n)?K.loading(n,r):K.loading(n.render,{...r,...n}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(null==t)return void K.dismiss(o);const i={type:e,...l,...r,data:n},a=S(t)?{render:t}:t;return o?K.update(o,{...i,...a}):K(a.render,{...i,...a}),n},c=z(e)?e():e;return c.then(e=>s("success",a,e)).catch(e=>s("error",i,e)),c},K.success=J("success"),K.info=J("info"),K.error=J("error"),K.warning=J("warning"),K.warn=K.warning,K.dark=(e,t)=>Z(e,V("default",{theme:"dark",...t})),K.dismiss=e=>{_.size>0?I.emit(1,e):Y=Y.filter(t=>null!=e&&t.options.toastId!==e)},K.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},K.isActive=e=>{let t=!1;return _.forEach(r=>{r.isToastActive&&r.isToastActive(e)&&(t=!0)}),t},K.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{const r=function(e,t){let{containerId:r}=t;const o=_.get(r||B);return o&&o.getToast(e)}(e,t);if(r){const{props:o,content:n}=r,i={delay:100,...o,...t,toastId:t.toastId||e,updateId:U()};i.toastId!==e&&(i.staleId=e);const a=i.render||n;delete i.render,Z(a,i)}},0)},K.done=e=>{K.update(e,{progress:1})},K.onChange=e=>(I.on(4,e),()=>{I.off(4,e)}),K.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},K.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,e=>{B=e.containerId||e,_.set(B,e),Y.forEach(e=>{I.emit(0,e.content,e.options)}),Y=[]}).on(3,e=>{_.delete(e.containerId||e),0===_.size&&I.off(0).off(1).off(5)});const Q=e.createContext(),ee={light:{background:"#f5f5f5",surface:"#ffffff",text:"#333333",textSecondary:"#666666",primary:"#4a6cf7",secondary:"#f5a623",success:"#4cd964",warning:"#ffcc00",error:"#ff3b30",disabled:"#cccccc",border:"#e0e0e0",gridLine:"#e0e0e0",gridLineThick:"#cccccc",highlight:"#e6f0ff",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}},dark:{background:"#121212",surface:"#1e1e1e",text:"#f5f5f5",textSecondary:"#b0b0b0",primary:"#6482f7",secondary:"#ffb74d",success:"#66df80",warning:"#ffe066",error:"#ff5757",disabled:"#666666",border:"#333333",gridLine:"#333333",gridLineThick:"#444444",highlight:"#1a237e",mediaQueries:{small:"@media (max-width: 640px)",medium:"@media (max-width: 768px)",large:"@media (max-width: 1024px)"}}},te=()=>({...ee.light,name:"自定义主题"}),re=({children:t})=>{const[r,o]=e.useState(localStorage.getItem("themeMode")||"light"),[n,i]=e.useState(()=>{const e=localStorage.getItem("customTheme");return e?JSON.parse(e):te()}),[a,l]=e.useState(()=>"custom"===r?n:ee["system"===r?"light":r]);e.useEffect(()=>{let e;if("custom"===r)e=n;else if("system"===r){const t=window.matchMedia("(prefers-color-scheme: dark)").matches;e=ee[t?"dark":"light"]}else e=ee[r];l(e)},[r,n]);const s=e=>{const t={...e,name:e.name||"自定义主题"};i(t),localStorage.setItem("customTheme",JSON.stringify(t)),"custom"===r&&l(t)};e.useEffect(()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{if("system"===r){const t=e.matches;l(ee[t?"dark":"light"])}};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[r]);const c={theme:a,themeMode:r,customTheme:n,toggleTheme:()=>{const e="light"===r?"dark":"light";o(e),localStorage.setItem("themeMode",e)},setLightTheme:()=>{o("light"),localStorage.setItem("themeMode","light")},setDarkTheme:()=>{o("dark"),localStorage.setItem("themeMode","dark")},setSystemTheme:()=>{o("system"),localStorage.setItem("themeMode","system")},setCustomThemeMode:()=>{o("custom"),localStorage.setItem("themeMode","custom")},updateCustomTheme:s,resetCustomTheme:()=>{const e=te();i(e),localStorage.setItem("customTheme",JSON.stringify(e))},exportTheme:(e=n)=>{const t=JSON.stringify(e,null,2),r=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(r),i=document.createElement("a");i.href=o,i.download=`${e.name||"sudoku-theme"}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(o)},importTheme:e=>new Promise((t,r)=>{const o=new FileReader;o.onload=e=>{try{const o=JSON.parse(e.target.result);o&&"object"==typeof o?(s(o),t(o)):r(new Error("无效的主题文件格式"))}catch(o){r(o)}},o.onerror=r,o.readAsText(e)})};return v.jsx(Q.Provider,{value:c,children:t})},oe=()=>{const t=e.useContext(Q);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},ne={"zh-CN":{home:"首页",game:"游戏",techniques:"技巧",loading:"加载中...",generatingNewPuzzle:"生成新谜题...",loadingGame:"加载游戏...",gamePaused:"游戏已暂停",clickToResume:"点击任意位置继续",progress:"进度",statistics:"统计",settings:"设置",ok:"确定",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",back:"返回",yes:"是",no:"否",newGame:"新建游戏",pauseTimer:"暂停计时",resume:"继续",gameCompleted:"游戏已完成",hint:"技巧提示",notes:"候选数",learningMode:"学习",gameMode:"游戏",switchToLearningMode:"切换到学习模式",switchToGameMode:"切换到游戏模式",learningModeActive:"当前学习模式，已开启技巧辅助",gameModeActive:"当前游戏模式，已关闭技巧辅助",learningModeDescription:"提供技巧学习辅助，帮助您学习数独解题技巧。",gameModeDescription:"关闭技巧学习辅助功能，专注于游戏体验。",gameCompletedMessage:"恭喜！您成功完成了这个数独！",generatePuzzleFailed:"生成谜题失败，请重试",generatePuzzleFailedRefresh:"生成谜题失败，请刷新页面重试",selectDifficulty:"选择难度",difficultyDescription:{easy:"初学者友好，空格较少",medium:"进阶挑战，需要一定技巧",hard:"专家级别，逻辑推理",expert:"极高难度，需要高级技巧"},startGame:"开始游戏",startNewGame:"开始新游戏",clearAllProgress:"清空所有进度",allProgress:"全部进度",inProgress:"进行中",completed:"已完成",paused:"已暂停",sudokuGame:"数独游戏",difficulty:"难度",startTime:"开始时间",lastUpdated:"最后更新",completionProgress:"完成进度",continueGame:"继续游戏",deleteProgress:"删除进度",noProgress:"暂无游戏进度",noFilteredProgress:"没有符合筛选条件的游戏进度",noStartedGames:"您还没有开始任何数独游戏",confirmClearAllProgress:"确认清空所有进度",confirmDeleteProgress:"确认删除进度",clearAllProgressWarning:"此操作将删除所有游戏进度，且无法恢复。确定要继续吗？",deleteProgressWarning:"此操作将删除选中的游戏进度，且无法恢复。确定要继续吗？",confirmDelete:"确认删除",settingsPageTitle:"设置",language:"语言",theme:"主题",lightTheme:"浅色主题",darkTheme:"深色主题",systemTheme:"跟随系统",customTheme:"自定义主题",editTheme:"编辑主题",saveChanges:"保存更改",themeSelection:"主题选择",gameSettings:"游戏设置",soundEffects:"音效",autoCheck:"自动检查",showHints:"显示提示",themeEditor:"主题编辑器",backgroundColor:"背景颜色",surfaceColor:"表面颜色",textColor:"文字颜色",textSecondaryColor:"次要文字颜色",primaryColor:"主色调",secondaryColor:"次色调",successColor:"成功颜色",warningColor:"警告颜色",errorColor:"错误颜色",borderColor:"边框颜色",gridLineColor:"网格线颜色",gridLineThickColor:"粗网格线颜色",highlightColor:"高亮颜色",preview:"预览",reset:"重置",exportTheme:"导出主题",importTheme:"导入主题",confirm:"确认",continue:"继续",complete:"完成",start:"开始",pause:"暂停",time:"时间",easy:"简单",medium:"中等",hard:"困难",expert:"专家",languageSwitch:"切换语言",languageOptions:{"zh-CN":"中文","en-US":"English"},welcomeTitle:"欢迎免费玩数独、学习数独高阶技巧",welcomeContent:"我们提供免费的在线数独游戏，让您随时享受解谜的乐趣。无论您是初学者还是数独高手，都能在这里找到适合自己的挑战。同时，我们精心设计了数独技巧学习模块，帮助您掌握从初级到高级的数独解法，提升解题能力。本项目在GitHub上免费开源，欢迎访问和贡献。",rulesTitle:"数独基本规则",rulesContent:"数独是一种基于逻辑的数字填充游戏，标准数独由9×9网格组成，分为9个3×3的子网格。游戏目标是在空格中填入数字1-9，使得每行、每列和每个3×3子网格中的数字不重复。玩家需要利用已知数字，通过逻辑推理填充剩余空格，完成整个数独。",techniquesTitle:"数独技巧介绍",techniquesContent:"数独技巧可分为多个难度等级：<br><strong>基础技巧</strong>：唯一数法（Singles）、宫排除法（Block/Box Line Reduction）、显式数对（Naked Pairs）、隐式数对（Hidden Pairs）、显式三链数（Naked Triples）<br><strong>进阶技巧</strong>：X-Wing、剑鱼（Swordfish）、XY-Wing、XYZ-Wing、唯一矩形（UR Type 1）<br><strong>高阶技巧</strong>：简单链（Simple Chains）、XY-Chain、ALS-XZ Rule、唯一矩形（UR Type 2-4）、双值格链（AIC）",pointingPairs:"指向对法",boxLineReduction:"宫行列删减法",swordfish:"剑鱼法",jellyfish:"水母法",skyscraper:"摩天楼法",twoStringKite:"双绳风筝法",emptyRectangle:"空矩形法",uniquenessRectangle:"唯一矩形法",hiddenRectangle:"隐藏矩形法",uniqueRectangleType1:"唯一矩形类型1",uniqueRectangleType2:"唯一矩形类型2",uniqueRectangleType3:"唯一矩形类型3",uniqueRectangleType4:"唯一矩形类型4",xYChain:"XY链",xChain:"X链",simpleColoring:"简单着色法",forcingChain:"强制链",alternatingInferenceChain:"交替推理链",niceLoop:"尼斯环",alS_XZ:"ALS-XZ规则",alS_XY_Wing:"ALS-XY-Wing",alS_Wing:"ALS-Wing",deathBlossom:"死亡绽放",sueDeCoq:"Sue De Coq",wXYZ_Wing:"WXYZ-Wing",remotePairs:"远程数对",bivalueUniversalGrave:"双值格全墓地",almostLockedSet:"几乎锁定集",loadGameFailed:"加载游戏失败，请稍后重试",deleteProgressFailed:"删除进度失败，请稍后重试",clearProgressFailed:"清空进度失败，请稍后重试",startPractice:"开始练习{techniqueName}技巧！",aboutUs:"关于我们",help:"使用帮助",sudokuRules:"数独规则",contactUs:"联系我们",copyright:"版权所有",version:"版本",appName:"数独学习应用",themeSaved:"主题已保存",themeReset:"主题已重置",themeExported:"主题已导出",themeImported:"主题导入成功",themeImportFailed:"主题导入失败: ",enterPencilMode:"进入铅笔模式，可以添加候选数字",exitPencilMode:"退出铅笔模式，返回正常输入",notesCalculated:"已为所有空白格子计算并填充候选数",foundRandomTechnique:"随机发现技巧：",findSingleCandidateCell:"查找仅有唯一可填数字的单元格",cellOnlyHasSingleCandidate:"单元格{position}只有唯一可填数字{value}",fillNumber:"填入数字{value}",findHiddenSingleInRegion:"在{regionType}{regionNum}中查找隐藏的唯一数字",numberOnlyInPosition:"数字{value}在{regionType}{regionNum}中只能出现在{position}",row:"行",col:"列",box:"宫",multipleCells:"多单元格",error:"错误",nakedSingleTechnique:"唯一余数",nakedPairTechnique:"显性数对",hiddenPairTechnique:"隐性数对",nakedTripleTechnique:"显性三链数",hiddenTripleTechnique:"隐性三链数",pointingPairsTechnique:"指向对",boxLineReductionTechnique:"宫线摒除",swordfishTechnique:"剑鱼",xyzWingTechnique:"XYZ-Wing",nakedSingle:"唯一数法",hiddenSingleRow:"隐性唯一数法(行)",hiddenSingleCol:"隐性唯一数法(列)",hiddenSingleBox:"隐性唯一数法(宫)",nakedPairsRow:"显性数对法(行)",nakedPairsCol:"显性数对法(列)",nakedPairsBox:"显性数对法(宫)",hiddenPairsRow:"隐性数对法(行)",hiddenPairsCol:"隐性数对法(列)",hiddenPairsBox:"隐性数对法(宫)",nakedTripleRow:"显性三链数法(行)",nakedTripleCol:"显性三链数法(列)",nakedTripleBox:"显性三链数法(宫)",hiddenTripleRow:"隐性三链数法(行)",hiddenTripleCol:"隐性三链数法(列)",hiddenTripleBox:"隐性三链数法(宫)",swordfishRow:"剑鱼法(行)",swordfishCol:"剑鱼法(列)",xyzWing:"XYZ-Wing法",unknownTechnique:"未知技巧",rowSuffix:"(行)",colSuffix:"(列)",boxSuffix:"(宫)",nakedPair:"显性数对法",nakedPairRow:"行显性数对",nakedPairCol:"列显性数对",nakedPairBox:"宫显性数对",hiddenPair:"隐性数对法",hiddenPairRow:"行隐性数对",hiddenPairCol:"列隐性数对",hiddenPairBox:"宫隐性数对",nakedTriple:"显性三链数法",hiddenTriple:"隐性三链数法",notesSingleTechnique:"候选数唯一法",keyboardTab:"键盘",techniquesTab:"技巧",solutionTab:"解题",pencilMode:"铅笔模式",undoAction:"撤销",clearCell:"清空单元格",fillCandidates:"刷新候选数",applyTechnique:"应用",nextStep:"下一步",apply:"应用",solutionSteps:"解题步骤",selectTechniqueFirst:"请先从技巧列表中选择一个技巧",noTechniquesAvailable:"没有可用的技巧",refreshCandidatesTooltip:"点击刷新候选数并加载所有技巧求解",candidatesTab:"候选数",hintsTab:"提示",solveStep:"解题一步",solveAll:"全部解题",relatedPosition:"相关位置: {position}",relatedNumber:"涉及数字: {number}",analysisCompleted:"分析完成",findPairInRegion:"在{regionType}{regionNum}中查找数对",foundNakedPair:"发现数字{numbers}的显性数对，位于单元格{cells}",removeCandidatesFromTargets:"这些数字只能出现在这两个单元格中，需要从目标单元格{targets}中删除候选数{numbers}",findHiddenPairInRegion:"在{regionType}{regionNum}中查找只能出现在两个单元格中的数字对",foundNumbersOnlyInCells:"发现数字{numbers}只能出现在单元格{cells}",removeOtherCandidates:"目标单元格{cells}中只能填入数字{numbers}，需要移除其他候选数",findTripleInRegion:"在{regionType}{regionNum}中查找三链数",foundNakedTriple:"发现数字{numbers}的显性三链数，位于单元格{cells}",findPointingPairsInBox:"在第{boxNum}宫，数字{number}只能出现在第{lineNum}{lineType}",removePointingPairsFromTargets:"从第{lineNum}{lineType}的目标单元格{targets}中移除候选数{number}",findBoxLineReductionInLine:"在第{lineNum}{lineType}，数字{number}只能出现在第{boxNum}宫",removeBoxLineReductionFromTargets:"从第{boxNum}宫的目标单元格{targets}中移除候选数{number}",findHiddenTripleInRegion:"在{regionType}{regionNum}中查找只能出现在三个单元格中的数字组",findXWingInWings:"在{wingType}中查找数字{number}的X-Wing结构",xWingFormRectangle:"数字{number}在源单元格{sourceCells}中形成矩形结构",removeXWingFromTargets:"从目标单元格{targets}中移除候选数{number}",findYWingStructure:"发现Y-Wing结构：枢纽{anchor}，翼{xz}和{yz}",yWingShareCandidates:"枢纽{anchor}与翼{xz}共享候选数{x}，枢纽{anchor}与翼{yz}共享候选数{y}，翼{xz}和{yz}都包含候选数{z}",removeYWingFromTargets:"从目标单元格{targets}中移除候选数{number}",findSwordfishInWings:"在{wingType}中查找数字{number}的Swordfish结构",swordfishFormStructure:"数字{number}在源单元格{sourceCells}中形成三行三列的结构",removeSwordfishFromTargets:"从目标单元格{targets}中移除候选数{number}",findXYZWingStructure:"发现XYZ-Wing结构：枢纽{anchor}，翼{xz}和{yz}",xyzWingShareCandidates:"枢纽{anchor}与翼{xz}共享候选数{x}，枢纽{anchor}与翼{yz}共享候选数{y}，翼{xz}和{yz}都包含候选数{z}",removeXYZWingFromTargets:"从目标单元格{targets}中移除候选数{number}",cellNotEmpty:"该单元格已有数字，无法填充候选数",cellPrefilled:"该单元格为预填数字，无法填充候选数",cellCandidatesFilled:"已为单元格({row},{col})计算并填充候选数！",selectCellForCandidates:"请先选择一个空白单元格",candidatesFilled:"已为所有空白格子计算并填充候选数！",emptyCandidateCellsFound:"发现无候选数的空白单元格，重新计算候选数...",candidatesComplete:"候选数正确完整，直接计算技巧机会！",candidateErrorDetected:"存在候选数删减错误，数据刷新",manualCandidateRemovalRequired:"请手动清除选定候选数",pairTechniqueIdentified:"技巧已识别，请手动移除相关候选数"},"en-US":{welcomeTitle:"Welcome to Free Sudoku & Advanced Techniques Learning",welcomeContent:"We offer free online Sudoku games for you to enjoy puzzle-solving anytime. Whether you are a beginner or a Sudoku expert, you can find suitable challenges here. Meanwhile, we have carefully designed a Sudoku technique learning module to help you master Sudoku solving methods from beginner to advanced levels and improve your solving skills. This project is free and open-source on GitHub, welcome to visit and contribute.",rulesTitle:"Basic Sudoku Rules",rulesContent:"Sudoku is a logic-based number placement puzzle. A standard Sudoku consists of a 9×9 grid divided into nine 3×3 subgrids. The objective is to fill the grid with digits from 1 to 9, such that each row, column, and each of the nine 3×3 subgrids contains all of the digits from 1 to 9 without repetition. Players need to use known numbers to logically deduce the remaining empty cells to complete the Sudoku.",techniquesTitle:"Sudoku Techniques Introduction",techniquesContent:"Sudoku techniques can be divided into multiple difficulty levels:<br><strong>Basic Techniques</strong>: Singles, Block/Box Line Reduction, Naked Pairs, Hidden Pairs, Naked Triples<br><strong>Intermediate Techniques</strong>: X-Wing, Swordfish, XY-Wing, XYZ-Wing, Unique Rectangle (Type 1)<br><strong>Advanced Techniques</strong>: Simple Chains, XY-Chain, ALS-XZ Rule, Unique Rectangle (Types 2-4), Alternating Inference Chains (AIC)",home:"Home",game:"Game",techniques:"Techniques",loading:"Loading...",generatingNewPuzzle:"Generating new puzzle...",loadingGame:"Loading game...",gamePaused:"Game Paused",clickToResume:"Click anywhere to resume",progress:"Progress",statistics:"Statistics",settings:"Settings",ok:"OK",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",back:"Back",yes:"Yes",no:"No",newGame:"New Game",pauseTimer:"Pause Timer",resume:"Resume",gameCompleted:"Game Completed",hint:"Hint",notes:"Notes",learningMode:"Learning",gameMode:"Game",switchToLearningMode:"Switch to Learning Mode",switchToGameMode:"Switch to Game Mode",learningModeActive:"Current learning mode, technique assistance enabled",gameModeActive:"Current game mode, technique assistance disabled",learningModeDescription:"Provides technique learning assistance to help you learn Sudoku solving techniques.",gameModeDescription:"Disables technique learning assistance for a focused gaming experience.",gameCompletedMessage:"Congratulations! You have successfully completed this Sudoku!",generatePuzzleFailed:"Failed to generate puzzle, please try again",generatePuzzleFailedRefresh:"Failed to generate puzzle, please refresh the page and try again",foundRandomTechnique:"Random technique found: ",selectDifficulty:"Select Difficulty",difficultyDescription:{easy:"Beginner friendly, fewer empty cells",medium:"Moderate challenge, requires some techniques",hard:"Expert level, logical reasoning required",expert:"Extremely difficult, advanced techniques needed"},startGame:"Start Game",startNewGame:"Start New Game",clearAllProgress:"Clear All Progress",allProgress:"All Progress",inProgress:"In Progress",completed:"Completed",paused:"Paused",sudokuGame:"Sudoku Game",difficulty:"Difficulty",startTime:"Start Time",lastUpdated:"Last Updated",completionProgress:"Completion Progress",continueGame:"Continue Game",deleteProgress:"Delete Progress",noProgress:"No Game Progress",noFilteredProgress:"No game progress matches the filter criteria",noStartedGames:"You haven't started any Sudoku games yet",confirmClearAllProgress:"Confirm Clear All Progress",confirmDeleteProgress:"Confirm Delete Progress",clearAllProgressWarning:"This action will delete all game progress and cannot be undone. Are you sure you want to continue?",deleteProgressWarning:"This action will delete the selected game progress and cannot be undone. Are you sure you want to continue?",confirmDelete:"Confirm Delete",settingsPageTitle:"Settings",language:"Language",theme:"Theme",lightTheme:"Light Theme",darkTheme:"Dark Theme",systemTheme:"System Theme",customTheme:"Custom Theme",editTheme:"Edit Theme",saveChanges:"Save Changes",themeSelection:"Theme Selection",gameSettings:"Game Settings",soundEffects:"Sound Effects",autoCheck:"Auto Check",showHints:"Show Hints",themeEditor:"Theme Editor",backgroundColor:"Background Color",surfaceColor:"Surface Color",textColor:"Text Color",textSecondaryColor:"Secondary Text Color",primaryColor:"Primary Color",secondaryColor:"Secondary Color",successColor:"Success Color",warningColor:"Warning Color",errorColor:"Error Color",borderColor:"Border Color",gridLineColor:"Grid Line Color",gridLineThickColor:"Thick Grid Line Color",highlightColor:"Highlight Color",preview:"Preview",reset:"Reset",exportTheme:"Export Theme",importTheme:"Import Theme",confirm:"Confirm",continue:"Continue",complete:"Complete",start:"Start",pause:"Pause",time:"Time",easy:"Easy",medium:"Medium",hard:"Hard",expert:"Expert",errors:{invalidInput:"Invalid Input",puzzleNotFound:"Puzzle Not Found",saveFailed:"Save Failed",loadFailed:"Load Failed",validationFailed:"Validation Failed",networkError:"Network Error"},loadGameFailed:"Failed to load game, please try again later",deleteProgressFailed:"Failed to delete progress, please try again later",clearProgressFailed:"Failed to clear progress, please try again later",startPractice:"Start practicing {techniqueName}!",aboutUs:"About Us",help:"Help",sudokuRules:"Sudoku Rules",contactUs:"Contact Us",copyright:"All Rights Reserved",version:"Version",appName:"Sudoku Learning App",themeSaved:"Theme saved successfully",themeReset:"Theme has been reset",themeExported:"Theme exported",themeImported:"Theme imported successfully",themeImportFailed:"Failed to import theme: ",enterPencilMode:"Enter pencil mode, you can add candidate numbers",exitPencilMode:"Exit pencil mode, return to normal input",notesCalculated:"Candidate numbers have been calculated and filled for all empty cells",findSingleCandidateCell:"Find cells with only one possible number",cellOnlyHasSingleCandidate:"Cell {position} can only contain number {value}",fillNumber:"Fill in number {value}",findHiddenSingleInRegion:"Find hidden single number in {regionType} {regionNum}",numberOnlyInPosition:"Number {value} can only appear at {position} in {regionType} {regionNum}",row:"Row",col:"Column",box:"Box",multipleCells:"Multiple cells",error:"Mistake",nakedSingle:"Naked Single",hiddenSingleRow:"Hidden Single (Row)",hiddenSingleCol:"Hidden Single (Column)",hiddenSingleBox:"Hidden Single (Box)",nakedPairsRow:"Naked Pairs (Row)",nakedPairsCol:"Naked Pairs (Column)",nakedPairsBox:"Naked Pairs (Box)",hiddenPairsRow:"Hidden Pairs (Row)",hiddenPairsCol:"Hidden Pairs (Column)",hiddenPairsBox:"Hidden Pairs (Box)",nakedTripleRow:"Naked Triples (Row)",nakedTripleCol:"Naked Triples (Column)",nakedTripleBox:"Naked Triples (Box)",hiddenTripleRow:"Hidden Triples (Row)",hiddenTripleCol:"Hidden Triples (Column)",hiddenTripleBox:"Hidden Triples (Box)",swordfishRow:"Swordfish (Row)",swordfishCol:"Swordfish (Column)",xyzWing:"XYZ-Wing",unknownTechnique:"Unknown Technique",rowSuffix:"(Row)",colSuffix:"(Column)",boxSuffix:"(Box)",nakedPair:"Naked Pair",nakedPairRow:"Naked Pair (Row)",nakedPairCol:"Naked Pair (Column)",nakedPairBox:"Naked Pair (Box)",hiddenPair:"Hidden Pair",hiddenPairRow:"Hidden Pair (Row)",hiddenPairCol:"Hidden Pair (Column)",hiddenPairBox:"Hidden Pair (Box)",nakedTriple:"Naked Triple",hiddenTriple:"Hidden Triple",nakedSingleTechnique:"naked single",nakedPairTechnique:"Naked Pair",hiddenPairTechnique:"Hidden Pair",nakedTripleTechnique:"Naked Triple",hiddenTripleTechnique:"Hidden Triple",pointingPairsTechnique:"Pointing Pairs",boxLineReductionTechnique:"Box-Line Reduction",swordfishTechnique:"Swordfish",xyzWingTechnique:"XYZ-Wing",keyboardTab:"Keyboard",techniquesTab:"Techniques",solutionTab:"Solution",pencilMode:"Pencil Mode",undoAction:"Undo",clearCell:"Clear Cell",fillCandidates:"Refresh Candidates",applyTechnique:"Apply",nextStep:"Next",apply:"Apply",solutionSteps:"Solution Steps",selectTechniqueFirst:"Please select a technique from the list first",noTechniquesAvailable:"No techniques available for the current board",refreshCandidatesTooltip:"Click to refresh candidates and load all solving techniques",candidatesTab:"Candidates",hintsTab:"Hints",solveStep:"Solve Step",solveAll:"Solve All",relatedPosition:"Related Position: {position}",relatedNumber:"Involving Number: {number}",analysisCompleted:"Analysis Completed",findPairInRegion:"Find pair in {regionType} {regionNum}",foundNakedPair:"Found naked pair of numbers {numbers} in cells {cells}",removeCandidatesFromTargets:"These numbers can only appear in these two cells, need to remove candidates {numbers} from target cells {targets}",findHiddenPairInRegion:"Find numbers that can only appear in two cells in {regionType} {regionNum}",foundNumbersOnlyInCells:"Found numbers {numbers} that can only appear in cells {cells}",removeOtherCandidates:"Only numbers {numbers} can be filled in target cells {cells}, need to remove other candidates",findTripleInRegion:"Find triple in {regionType} {regionNum}",foundNakedTriple:"Found naked triple of numbers {numbers} in cells {cells}",findPointingPairsInBox:"In box {boxNum}, number {number} can only appear in {lineNum} {lineType}",removePointingPairsFromTargets:"Remove candidate {number} from target cells {targets} in {lineNum} {lineType}",findBoxLineReductionInLine:"In {lineNum} {lineType}, number {number} can only appear in box {boxNum}",removeBoxLineReductionFromTargets:"Remove candidate {number} from target cells {targets} in box {boxNum}",findHiddenTripleInRegion:"Find number groups that can only appear in three cells in {regionType} {regionNum}",findXWingInWings:"Find X-Wing structure for number {number} in {wingType}",xWingFormRectangle:"Number {number} forms a rectangle structure in source cells {sourceCells}",removeXWingFromTargets:"Remove candidate {number} from target cells {targets}",findYWingStructure:"Found Y-Wing structure: anchor {anchor}, wings {xy} and {yz}",yWingShareCandidates:"Anchor {anchor} shares candidate {x} with wing {xy}, anchor {anchor} shares candidate {y} with wing {yz}, wings {xy} and {yz} both contain candidate {z}",removeYWingFromTargets:"Remove candidate {number} from target cells {targets}",findSwordfishInWings:"Find Swordfish structure for number {number} in {wingType}",swordfishFormStructure:"Number {number} forms a three-row three-column structure in source cells {sourceCells}",removeSwordfishFromTargets:"Remove candidate {number} from target cells {targets}",findXYZWingStructure:"Found XYZ-Wing structure: pivot {anchor}, wings {xz} and {yz}",xyzWingShareCandidates:"Pivot {anchor} shares candidate {x} with wing {xz}, pivot {anchor} shares candidate {y} with wing {yz}, wings {xz} and {yz} both contain candidate {z}",removeXYZWingFromTargets:"Remove candidate {number} from target cells {targets}",manualCandidateRemovalRequired:"Please manually clear selected candidates",pairTechniqueIdentified:"Technique identified, please manually remove related candidates"}},ie=e.createContext(),ae=({children:t})=>{const[r,o]=e.useState(()=>{const e=localStorage.getItem("language");return e||"en-US"}),n={language:r,t:(e,t={})=>{if(!e)return e;let o=ne[r];const n=e.split(".");for(const r of n){if(!o||"object"!=typeof o)return e;o=o[r]}return void 0===o?e:"string"==typeof o&&Object.keys(t).length>0?o.replace(/\{([^}]+)\}/g,(e,r)=>void 0!==t[r]?t[r]:e):o},changeLanguage:e=>{o(e),localStorage.setItem("language",e)},availableLanguages:[{code:"zh-CN",name:"中文简体"},{code:"en-US",name:"English"}]};return v.jsx(ie.Provider,{value:n,children:t})},le=()=>{const t=e.useContext(ie);if(!t)throw new Error("useLanguage must be used within a LanguageProvider");return t},se=e.createContext(),ce=({children:t})=>{const{t:r}=le(),[o,n]=e.useState(!1),[i,a]=e.useState(""),[l,s]=e.useState(0);e.useEffect(()=>{""===i&&a(r("loading"))},[r]);const c=e=>{s(e=>e+1),a(e||r("loading")),n(!0)},d=()=>{s(e=>{const t=Math.max(0,e-1);return 0===t&&n(!1),t})},u={isLoading:o,loadingMessage:i,loadingCount:l,startLoading:c,stopLoading:d,resetLoading:()=>{s(0),n(!1),a(r("loading"))},executeWithLoading:async(e,t="加载中...")=>{try{c(t);return await e()}catch(r){throw r}finally{d()}}};return v.jsx(se.Provider,{value:u,children:t})},de=()=>{const t=e.useContext(se);if(!t)throw new Error("useLoading must be used within a LoadingProvider");return t},ue=e.createContext(),fe=({children:t})=>{const[r,o]=e.useState("game");return v.jsx(ue.Provider,{value:{mode:r,setMode:o},children:t})};var pe=function(){return pe=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},pe.apply(this,arguments)};function he(e,t,r){if(r||2===arguments.length)for(var o,n=0,i=t.length;n<i;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var me="-ms-",ge="-moz-",xe="-webkit-",ye="comm",be="rule",ve="decl",we="@keyframes",Ce=Math.abs,ke=String.fromCharCode,je=Object.assign;function $e(e){return e.trim()}function Se(e,t){return(e=t.exec(e))?e[0]:e}function ze(e,t,r){return e.replace(t,r)}function Te(e,t,r){return e.indexOf(t,r)}function Ae(e,t){return 0|e.charCodeAt(t)}function Pe(e,t,r){return e.slice(t,r)}function Ne(e){return e.length}function Ie(e){return e.length}function Re(e,t){return t.push(e),e}function Ee(e,t){return e.filter(function(e){return!Se(e,t)})}var Me=1,Fe=1,Le=0,We=0,Oe=0,De="";function qe(e,t,r,o,n,i,a,l){return{value:e,root:t,parent:r,type:o,props:n,children:i,line:Me,column:Fe,length:a,return:"",siblings:l}}function He(e,t){return je(qe("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Be(e){for(;e.root;)e=He(e.root,{children:[e]});Re(e,e.siblings)}function _e(){return Oe=We>0?Ae(De,--We):0,Fe--,10===Oe&&(Fe=1,Me--),Oe}function Ye(){return Oe=We<Le?Ae(De,We++):0,Fe++,10===Oe&&(Fe=1,Me++),Oe}function Ge(){return Ae(De,We)}function Ue(){return We}function Xe(e,t){return Pe(De,e,t)}function Ze(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ve(e){return $e(Xe(We-1,Qe(91===e?e+2:40===e?e+1:e)))}function Je(e){for(;(Oe=Ge())&&Oe<33;)Ye();return Ze(e)>2||Ze(Oe)>3?"":" "}function Ke(e,t){for(;--t&&Ye()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return Xe(e,Ue()+(t<6&&32==Ge()&&32==Ye()))}function Qe(e){for(;Ye();)switch(Oe){case e:return We;case 34:case 39:34!==e&&39!==e&&Qe(Oe);break;case 40:41===e&&Qe(e);break;case 92:Ye()}return We}function et(e,t){for(;Ye()&&e+Oe!==57&&(e+Oe!==84||47!==Ge()););return"/*"+Xe(t,We-1)+"*"+ke(47===e?e:Ye())}function tt(e){for(;!Ze(Ge());)Ye();return Xe(e,We)}function rt(e){return function(e){return De="",e}(ot("",null,null,null,[""],e=function(e){return Me=Fe=1,Le=Ne(De=e),We=0,[]}(e),0,[0],e))}function ot(e,t,r,o,n,i,a,l,s){for(var c=0,d=0,u=a,f=0,p=0,h=0,m=1,g=1,x=1,y=0,b="",v=n,w=i,C=o,k=b;g;)switch(h=y,y=Ye()){case 40:if(108!=h&&58==Ae(k,u-1)){-1!=Te(k+=ze(Ve(y),"&","&\f"),"&\f",Ce(c?l[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:k+=Ve(y);break;case 9:case 10:case 13:case 32:k+=Je(h);break;case 92:k+=Ke(Ue()-1,7);continue;case 47:switch(Ge()){case 42:case 47:Re(it(et(Ye(),Ue()),t,r,s),s);break;default:k+="/"}break;case 123*m:l[c++]=Ne(k)*x;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+d:-1==x&&(k=ze(k,/\f/g,"")),p>0&&Ne(k)-u&&Re(p>32?at(k+";",o,r,u-1,s):at(ze(k," ","")+";",o,r,u-2,s),s);break;case 59:k+=";";default:if(Re(C=nt(k,t,r,c,d,n,l,b,v=[],w=[],u,i),i),123===y)if(0===d)ot(k,t,C,C,v,i,u,l,w);else switch(99===f&&110===Ae(k,3)?100:f){case 100:case 108:case 109:case 115:ot(e,C,C,o&&Re(nt(e,C,C,0,0,n,l,b,n,v=[],u,w),w),n,w,u,l,o?v:w);break;default:ot(k,C,C,C,[""],w,0,l,w)}}c=d=p=0,m=x=1,b=k="",u=a;break;case 58:u=1+Ne(k),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==_e())continue;switch(k+=ke(y),y*m){case 38:x=d>0?1:(k+="\f",-1);break;case 44:l[c++]=(Ne(k)-1)*x,x=1;break;case 64:45===Ge()&&(k+=Ve(Ye())),f=Ge(),d=u=Ne(b=k+=tt(Ue())),y++;break;case 45:45===h&&2==Ne(k)&&(m=0)}}return i}function nt(e,t,r,o,n,i,a,l,s,c,d,u){for(var f=n-1,p=0===n?i:[""],h=Ie(p),m=0,g=0,x=0;m<o;++m)for(var y=0,b=Pe(e,f+1,f=Ce(g=a[m])),v=e;y<h;++y)(v=$e(g>0?p[y]+" "+b:ze(b,/&\f/g,p[y])))&&(s[x++]=v);return qe(e,t,r,0===n?be:l,s,c,d,u)}function it(e,t,r,o){return qe(e,t,r,ye,ke(Oe),Pe(e,2,-2),0,o)}function at(e,t,r,o,n){return qe(e,t,r,ve,Pe(e,0,o),Pe(e,o+1,-1),o,n)}function lt(e,t,r){switch(function(e,t){return 45^Ae(e,0)?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}(e,t)){case 5103:return xe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+e+e;case 4789:return ge+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+e+ge+e+me+e+e;case 5936:switch(Ae(e,t+11)){case 114:return xe+e+me+ze(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return xe+e+me+ze(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return xe+e+me+ze(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return xe+e+me+e+e;case 6165:return xe+e+me+"flex-"+e+e;case 5187:return xe+e+ze(e,/(\w+).+(:[^]+)/,xe+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return xe+e+me+"flex-item-"+ze(e,/flex-|-self/g,"")+(Se(e,/flex-|baseline/)?"":me+"grid-row-"+ze(e,/flex-|-self/g,""))+e;case 4675:return xe+e+me+"flex-line-pack"+ze(e,/align-content|flex-|-self/g,"")+e;case 5548:return xe+e+me+ze(e,"shrink","negative")+e;case 5292:return xe+e+me+ze(e,"basis","preferred-size")+e;case 6060:return xe+"box-"+ze(e,"-grow","")+xe+e+me+ze(e,"grow","positive")+e;case 4554:return xe+ze(e,/([^-])(transform)/g,"$1"+xe+"$2")+e;case 6187:return ze(ze(ze(e,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),e,"")+e;case 5495:case 3959:return ze(e,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return ze(ze(e,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+e+e;case 4200:if(!Se(e,/flex-|baseline/))return me+"grid-column-align"+Pe(e,t)+e;break;case 2592:case 3360:return me+ze(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,Se(e.props,/grid-\w+-end/)})?~Te(e+(r=r[t].value),"span",0)?e:me+ze(e,"-start","")+e+me+"grid-row-span:"+(~Te(r,"span",0)?Se(r,/\d+/):+Se(r,/\d+/)-+Se(e,/\d+/))+";":me+ze(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return Se(e.props,/grid-\w+-start/)})?e:me+ze(ze(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ze(e,/(.+)-inline(.+)/,xe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ne(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(45!==Ae(e,t+4))break;case 102:return ze(e,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+ge+(108==Ae(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Te(e,"stretch",0)?lt(ze(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return ze(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,o,n,i,a,l){return me+r+":"+o+l+(n?me+r+"-span:"+(i?a:+a-+o)+l:"")+e});case 4949:if(121===Ae(e,t+6))return ze(e,":",":"+xe)+e;break;case 6444:switch(Ae(e,45===Ae(e,14)?18:11)){case 120:return ze(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(45===Ae(e,14)?"inline-":"")+"box$3$1"+xe+"$2$3$1"+me+"$2box$3")+e;case 100:return ze(e,":",":"+me)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ze(e,"scroll-","scroll-snap-")+e}return e}function st(e,t){for(var r="",o=0;o<e.length;o++)r+=t(e[o],o,e,t)||"";return r}function ct(e,t,r,o){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case ve:return e.return=e.return||e.value;case ye:return"";case we:return e.return=e.value+"{"+st(e.children,o)+"}";case be:if(!Ne(e.value=e.props.join(",")))return""}return Ne(r=st(e.children,o))?e.return=e.value+"{"+r+"}":""}function dt(e,t,r,o){if(e.length>-1&&!e.return)switch(e.type){case ve:return void(e.return=lt(e.value,e.length,r));case we:return st([He(e,{value:ze(e.value,"@","@"+xe)})],o);case be:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(Se(t,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Be(He(e,{props:[ze(t,/:(read-\w+)/,":-moz-$1")]})),Be(He(e,{props:[t]})),je(e,{props:Ee(r,o)});break;case"::placeholder":Be(He(e,{props:[ze(t,/:(plac\w+)/,":"+xe+"input-$1")]})),Be(He(e,{props:[ze(t,/:(plac\w+)/,":-moz-$1")]})),Be(He(e,{props:[ze(t,/:(plac\w+)/,me+"input-$1")]})),Be(He(e,{props:[t]})),je(e,{props:Ee(r,o)})}return""})}}var ut={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ft="undefined"!=typeof process&&void 0!==process.env&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",pt="active",ht="data-styled-version",mt="6.1.19",gt="/*!sc*/\n",xt="undefined"!=typeof window&&"undefined"!=typeof document,yt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),bt=Object.freeze([]),vt=Object.freeze({});var wt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ct=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kt=/(^-|-$)/g;function jt(e){return e.replace(Ct,"-").replace(kt,"")}var $t=/(a)(d)/gi,St=function(e){return String.fromCharCode(e+(e>25?39:97))};function zt(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=St(t%52)+r;return(St(t%52)+r).replace($t,"$1-$2")}var Tt,At=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Pt=function(e){return At(5381,e)};function Nt(e){return"string"==typeof e&&!0}var It="function"==typeof Symbol&&Symbol.for,Rt=It?Symbol.for("react.memo"):60115,Et=It?Symbol.for("react.forward_ref"):60112,Mt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ft={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wt=((Tt={})[Et]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tt[Rt]=Lt,Tt);function Ot(e){return("type"in(t=e)&&t.type.$$typeof)===Rt?Lt:"$$typeof"in e?Wt[e.$$typeof]:Mt;var t}var Dt=Object.defineProperty,qt=Object.getOwnPropertyNames,Ht=Object.getOwnPropertySymbols,Bt=Object.getOwnPropertyDescriptor,_t=Object.getPrototypeOf,Yt=Object.prototype;function Gt(e,t,r){if("string"!=typeof t){if(Yt){var o=_t(t);o&&o!==Yt&&Gt(e,o,r)}var n=qt(t);Ht&&(n=n.concat(Ht(t)));for(var i=Ot(e),a=Ot(t),l=0;l<n.length;++l){var s=n[l];if(!(s in Ft||r&&r[s]||a&&s in a||i&&s in i)){var c=Bt(t,s);try{Dt(e,s,c)}catch(d){}}}}return e}function Ut(e){return"function"==typeof e}function Xt(e){return"object"==typeof e&&"styledComponentId"in e}function Zt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Vt(e,t){if(0===e.length)return"";for(var r=e[0],o=1;o<e.length;o++)r+=t?t+e[o]:e[o];return r}function Jt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Kt(e,t,r){if(void 0===r&&(r=!1),!r&&!Jt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=Kt(e[o],t[o]);else if(Jt(t))for(var o in t)e[o]=Kt(e[o],t[o]);return e}function Qt(e,t){Object.defineProperty(e,"toString",{value:t})}function er(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,n=o;e>=n;)if((n<<=1)<0)throw er(16,"".concat(e));this.groupSizes=new Uint32Array(n),this.groupSizes.set(r),this.length=n;for(var i=o;i<n;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),o=r+t;this.groupSizes[e]=0;for(var n=r;n<o;n++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],o=this.indexOfGroup(e),n=o+r,i=o;i<n;i++)t+="".concat(this.tag.getRule(i)).concat(gt);return t},e}(),rr=new Map,or=new Map,nr=1,ir=function(e){if(rr.has(e))return rr.get(e);for(;or.has(nr);)nr++;var t=nr++;return rr.set(e,t),or.set(t,e),t},ar=function(e,t){nr=t+1,rr.set(e,t),or.set(t,e)},lr="style[".concat(ft,"][").concat(ht,'="').concat(mt,'"]'),sr=new RegExp("^".concat(ft,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cr=function(e,t,r){for(var o,n=r.split(","),i=0,a=n.length;i<a;i++)(o=n[i])&&e.registerName(t,o)},dr=function(e,t){for(var r,o=(null!==(r=t.textContent)&&void 0!==r?r:"").split(gt),n=[],i=0,a=o.length;i<a;i++){var l=o[i].trim();if(l){var s=l.match(sr);if(s){var c=0|parseInt(s[1],10),d=s[2];0!==c&&(ar(d,c),cr(e,d,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(l)}}},ur=function(e){for(var t=document.querySelectorAll(lr),r=0,o=t.length;r<o;r++){var n=t[r];n&&n.getAttribute(ft)!==pt&&(dr(e,n),n.parentNode&&n.parentNode.removeChild(n))}};var fr=function(e){var t,r,o=document.head,n=e||o,i=document.createElement("style"),a=(t=n,(r=Array.from(t.querySelectorAll("style[".concat(ft,"]"))))[r.length-1]),l=void 0!==a?a.nextSibling:null;i.setAttribute(ft,pt),i.setAttribute(ht,mt);var s="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return s&&i.setAttribute("nonce",s),n.insertBefore(i,l),i},pr=function(){function e(e){this.element=fr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,o=t.length;r<o;r++){var n=t[r];if(n.ownerNode===e)return n}throw er(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(r){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),hr=function(){function e(e){this.element=fr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),mr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),gr=xt,xr={isServer:!xt,useCSSOMInjection:!yt},yr=function(){function e(e,t,r){void 0===e&&(e=vt),void 0===t&&(t={});var o=this;this.options=pe(pe({},xr),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&xt&&gr&&(gr=!1,ur(this)),Qt(this,function(){return function(e){for(var t=e.getTag(),r=t.length,o="",n=function(r){var n,i=(n=r,or.get(n));if(void 0===i)return"continue";var a=e.names.get(i),l=t.getGroup(r);if(void 0===a||!a.size||0===l.length)return"continue";var s="".concat(ft,".g").concat(r,'[id="').concat(i,'"]'),c="";void 0!==a&&a.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),o+="".concat(l).concat(s,'{content:"').concat(c,'"}').concat(gt)},i=0;i<r;i++)n(i);return o}(o)})}return e.registerId=function(e){return ir(e)},e.prototype.rehydrate=function(){!this.server&&xt&&ur(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(pe(pe({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,r=e.target,o=e.isServer?new mr(r):t?new pr(r):new hr(r),new tr(o)));var e,t,r,o},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ir(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(ir(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ir(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),br=/&/g,vr=/^\s*\/\/.*$/gm;function wr(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=wr(e.children,t)),e})}var Cr=new yr,kr=function(e){var t,r,o,n=void 0===e?vt:e,i=n.options,a=void 0===i?vt:i,l=n.plugins,s=void 0===l?bt:l,c=function(e,o,n){return n.startsWith(r)&&n.endsWith(r)&&n.replaceAll(r,"").length>0?".".concat(t):e},d=s.slice();d.push(function(e){e.type===be&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(br,r).replace(o,c))}),a.prefix&&d.push(dt),d.push(ct);var u=function(e,n,i,l){void 0===n&&(n=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,r=n,o=new RegExp("\\".concat(r,"\\b"),"g");var s=e.replace(vr,""),c=rt(i||n?"".concat(i," ").concat(n," { ").concat(s," }"):s);a.namespace&&(c=wr(c,a.namespace));var u,f,p,h=[];return st(c,(u=d.concat((p=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&p(e)})),f=Ie(u),function(e,t,r,o){for(var n="",i=0;i<f;i++)n+=u[i](e,t,r,o)||"";return n})),h};return u.hash=s.length?s.reduce(function(e,t){return t.name||er(15),At(e,t.name)},5381).toString():"",u}(),jr=o.createContext({shouldForwardProp:void 0,styleSheet:Cr,stylis:kr});function $r(){return e.useContext(jr)}jr.Consumer,o.createContext(void 0);var Sr=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=kr);var o=r.name+t.hash;e.hasNameForId(r.id,o)||e.insertRules(r.id,o,t(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Qt(this,function(){throw er(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=kr),this.name+e.hash},e}(),zr=function(e){return e>="A"&&e<="Z"};function Tr(e){for(var t="",r=0;r<e.length;r++){var o=e[r];if(1===r&&"-"===o&&"-"===e[0])return e;zr(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var Ar=function(e){return null==e||!1===e||""===e},Pr=function(e){var t,r,o=[];for(var n in e){var i=e[n];e.hasOwnProperty(n)&&!Ar(i)&&(Array.isArray(i)&&i.isCss||Ut(i)?o.push("".concat(Tr(n),":"),i,";"):Jt(i)?o.push.apply(o,he(he(["".concat(n," {")],Pr(i),!1),["}"],!1)):o.push("".concat(Tr(n),": ").concat((t=n,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ut||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function Nr(e,t,r,o){return Ar(e)?[]:Xt(e)?[".".concat(e.styledComponentId)]:Ut(e)?!Ut(n=e)||n.prototype&&n.prototype.isReactComponent||!t?[e]:Nr(e(t),t,r,o):e instanceof Sr?r?(e.inject(r,o),[e.getName(o)]):[e]:Jt(e)?Pr(e):Array.isArray(e)?Array.prototype.concat.apply(bt,e.map(function(e){return Nr(e,t,r,o)})):[e.toString()];var n}var Ir=Pt(mt),Rr=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ut(r)&&!Xt(r))return!1}return!0}(e),this.componentId=t,this.baseHash=At(Ir,t),this.baseStyle=r,yr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=Zt(o,this.staticRulesId);else{var n=Vt(Nr(this.rules,e,t,r)),i=zt(At(this.baseHash,n)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(n,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}o=Zt(o,i),this.staticRulesId=i}else{for(var l=At(this.baseHash,r.hash),s="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)s+=d;else if(d){var u=Vt(Nr(d,e,t,r));l=At(l,u+c),s+=u}}if(s){var f=zt(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(s,".".concat(f),void 0,this.componentId)),o=Zt(o,f)}}return o},e}(),Er=o.createContext(void 0);Er.Consumer;var Mr={};function Fr(t,r,n){var i,a=Xt(t),l=t,s=!Nt(t),c=r.attrs,d=void 0===c?bt:c,u=r.componentId,f=void 0===u?function(e,t){var r="string"!=typeof e?"sc":jt(e);Mr[r]=(Mr[r]||0)+1;var o="".concat(r,"-").concat(function(e){return zt(Pt(e)>>>0)}(mt+r+Mr[r]));return t?"".concat(t,"-").concat(o):o}(r.displayName,r.parentComponentId):u,p=r.displayName,h=void 0===p?Nt(i=t)?"styled.".concat(i):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(i),")"):p,m=r.displayName&&r.componentId?"".concat(jt(r.displayName),"-").concat(r.componentId):r.componentId||f,g=a&&l.attrs?l.attrs.concat(d).filter(Boolean):d,x=r.shouldForwardProp;if(a&&l.shouldForwardProp){var y=l.shouldForwardProp;if(r.shouldForwardProp){var b=r.shouldForwardProp;x=function(e,t){return y(e,t)&&b(e,t)}}else x=y}var v=new Rr(n,m,a?l.componentStyle:void 0);function w(t,r){return function(t,r,n){var i=t.attrs,a=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,c=t.styledComponentId,d=t.target,u=o.useContext(Er),f=$r(),p=t.shouldForwardProp||f.shouldForwardProp,h=function(e,t,r){return void 0===r&&(r=vt),e.theme!==r.theme&&e.theme||t||r.theme}(r,u,l)||vt,m=function(e,t,r){for(var o,n=pe(pe({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var a=Ut(o=e[i])?o(n):o;for(var l in a)n[l]="className"===l?Zt(n[l],a[l]):"style"===l?pe(pe({},n[l]),a[l]):a[l]}return t.className&&(n.className=Zt(n.className,t.className)),n}(i,r,h),g=m.as||d,x={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===h||("forwardedAs"===y?x.as=m.forwardedAs:p&&!p(y,g)||(x[y]=m[y]));var b,v,w,C=(b=a,v=m,w=$r(),b.generateAndInjectStyles(v,w.styleSheet,w.stylis)),k=Zt(s,c);return C&&(k+=" "+C),m.className&&(k+=" "+m.className),x[Nt(g)&&!wt.has(g)?"class":"className"]=k,n&&(x.ref=n),e.createElement(g,x)}(C,t,r)}w.displayName=h;var C=o.forwardRef(w);return C.attrs=g,C.componentStyle=v,C.displayName=h,C.shouldForwardProp=x,C.foldedComponentIds=a?Zt(l.foldedComponentIds,l.styledComponentId):"",C.styledComponentId=m,C.target=a?l.target:t,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var o=0,n=t;o<n.length;o++)Kt(e,n[o],!0);return e}({},l.defaultProps,e):e}}),Qt(C,function(){return".".concat(C.styledComponentId)}),s&&Gt(C,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Lr(e,t){for(var r=[e[0]],o=0,n=t.length;o<n;o+=1)r.push(t[o],e[o+1]);return r}var Wr=function(e){return Object.assign(e,{isCss:!0})};function Or(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ut(e)||Jt(e))return Wr(Nr(Lr(bt,he([e],t,!0))));var o=e;return 0===t.length&&1===o.length&&"string"==typeof o[0]?Nr(o):Wr(Nr(Lr(o,t)))}function Dr(e,t,r){if(void 0===r&&(r=vt),!t)throw er(1,t);var o=function(o){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return e(t,r,Or.apply(void 0,he([o],n,!1)))};return o.attrs=function(o){return Dr(e,t,pe(pe({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return Dr(e,t,pe(pe({},r),o))},o}var qr=function(e){return Dr(Fr,e)},Hr=qr;wt.forEach(function(e){Hr[e]=qr(e)});const Br=Hr.nav`
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
`,Gr=Hr.img`
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
`,Zr=Hr.div`
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
`,Vr=Hr.button`
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
`;const Jr=({langCode:e,size:t=20})=>"zh-CN"===e?v.jsxs("svg",{width:t,height:.667*t,viewBox:"0 0 30 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[v.jsx("rect",{width:"30",height:"20",fill:"#DE2910"}),v.jsx("path",{d:"M4 3 L6 4.5 L4 6 L3 4.5 Z",fill:"#FFDE00"}),v.jsx("path",{d:"M7.5 1.5 L8 2.5 L9 2.5 L8.25 3.25 L8.5 4 L7.5 3.25 L6.5 4 L6.75 3.25 L6 2.5 L7 2.5 Z",fill:"#FFDE00",transform:"rotate(-30 7.5 3)"}),v.jsx("path",{d:"M9.5 2.5 L10 3.5 L11 3.5 L10.25 4.25 L10.5 5 L9.5 4.25 L8.5 5 L8.75 4.25 L8 3.5 L9 3.5 Z",fill:"#FFDE00",transform:"rotate(-10 9.5 4)"}),v.jsx("path",{d:"M9.5 5.5 L10 6.5 L11 6.5 L10.25 7.25 L10.5 8 L9.5 7.25 L8.5 8 L8.75 7.25 L8 6.5 L9 6.5 Z",fill:"#FFDE00",transform:"rotate(70 9.5 7)"}),v.jsx("path",{d:"M7.5 7 L8 8 L9 8 L8.25 8.75 L8.5 9.5 L7.5 8.75 L6.5 9.5 L6.75 8.75 L6 8 L7 8 Z",fill:"#FFDE00",transform:"rotate(110 7.5 8.5)"})]}):v.jsxs("svg",{width:t,height:.667*t,viewBox:"0 0 30 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[v.jsx("rect",{width:"30",height:"20",fill:"#B22234"}),v.jsx("rect",{y:"2",width:"30",height:"2",fill:"white"}),v.jsx("rect",{y:"6",width:"30",height:"2",fill:"white"}),v.jsx("rect",{y:"10",width:"30",height:"2",fill:"white"}),v.jsx("rect",{y:"14",width:"30",height:"2",fill:"white"}),v.jsx("rect",{y:"18",width:"30",height:"2",fill:"white"}),v.jsx("rect",{width:"12",height:"11",fill:"#3C3B6E"}),v.jsxs("g",{fill:"white",children:[v.jsx("rect",{x:"1",y:"1",width:"1",height:"1"}),v.jsx("rect",{x:"3",y:"1",width:"1",height:"1"}),v.jsx("rect",{x:"5",y:"1",width:"1",height:"1"}),v.jsx("rect",{x:"7",y:"1",width:"1",height:"1"}),v.jsx("rect",{x:"9",y:"1",width:"1",height:"1"}),v.jsx("rect",{x:"1",y:"3",width:"1",height:"1"}),v.jsx("rect",{x:"3",y:"3",width:"1",height:"1"}),v.jsx("rect",{x:"5",y:"3",width:"1",height:"1"}),v.jsx("rect",{x:"7",y:"3",width:"1",height:"1"}),v.jsx("rect",{x:"9",y:"3",width:"1",height:"1"}),v.jsx("rect",{x:"1",y:"5",width:"1",height:"1"}),v.jsx("rect",{x:"3",y:"5",width:"1",height:"1"}),v.jsx("rect",{x:"5",y:"5",width:"1",height:"1"}),v.jsx("rect",{x:"7",y:"5",width:"1",height:"1"}),v.jsx("rect",{x:"9",y:"5",width:"1",height:"1"}),v.jsx("rect",{x:"1",y:"7",width:"1",height:"1"}),v.jsx("rect",{x:"3",y:"7",width:"1",height:"1"}),v.jsx("rect",{x:"5",y:"7",width:"1",height:"1"}),v.jsx("rect",{x:"7",y:"7",width:"1",height:"1"}),v.jsx("rect",{x:"9",y:"7",width:"1",height:"1"}),v.jsx("rect",{x:"1",y:"9",width:"1",height:"1"}),v.jsx("rect",{x:"3",y:"9",width:"1",height:"1"}),v.jsx("rect",{x:"5",y:"9",width:"1",height:"1"}),v.jsx("rect",{x:"7",y:"9",width:"1",height:"1"}),v.jsx("rect",{x:"9",y:"9",width:"1",height:"1"})]})]}),Kr=()=>v.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})}),Qr=()=>{oe();const{language:t,changeLanguage:r}=le(),o=n(),[i,a]=e.useState(!1);e.useEffect(()=>{const e=e=>{e.target.closest(".language-selector")||a(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const l=e=>{r(e),a(!1)};return v.jsx(Br,{children:v.jsxs(_r,{children:[v.jsxs(Yr,{to:"/",children:[v.jsx(Gr,{src:"/sudoku-app-logo.svg",alt:"Sudoku Logo"}),"SudokuTech"]}),v.jsxs("div",{style:{display:"flex",gap:"10px"},children:[v.jsxs(Ur,{className:"language-selector",children:[v.jsxs(Xr,{onClick:()=>{a(!i)},children:[v.jsx(Jr,{langCode:t,size:20}),"zh-CN"===t?"中文":"English"]}),i&&v.jsxs(Zr,{children:[v.jsxs(Vr,{className:"zh-CN"===t?"selected":"",onClick:()=>l("zh-CN"),children:[v.jsx(Jr,{langCode:"zh-CN",size:16}),"中文"]}),v.jsxs(Vr,{className:"en-US"===t?"selected":"",onClick:()=>l("en-US"),children:[v.jsx(Jr,{langCode:"en-US",size:16}),"English"]})]})]}),v.jsx(Xr,{onClick:()=>{o("/settings")},title:"设置",children:v.jsx(Kr,{})})]})]})})},eo=Hr.footer`
  background-color: ${e=>e.theme.surface};
  color: ${e=>e.theme.textSecondary};
  padding: 20px 0;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`,to=Hr.div`
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
`,ro=Hr.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
  ${e=>e.theme.mediaQueries.small} {
    gap: 15px;
  }
`,oo=Hr.a`
  color: ${e=>e.theme.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${e=>e.theme.primary};
  }
`,no=Hr.div`
  font-size: 14px;
  line-height: 1.5;
`,io=Hr.div`
  font-size: 12px;
  margin-top: 10px;
`,ao=()=>{const{theme:e}=oe(),{t:t}=le(),r=(new Date).getFullYear();return v.jsx(eo,{theme:e,children:v.jsxs(to,{theme:e,children:[v.jsxs(ro,{theme:e,children:[v.jsx(oo,{href:"#",theme:e,children:t("aboutUs")}),v.jsx(oo,{href:"#",theme:e,children:t("help")}),v.jsx(oo,{href:"#",theme:e,children:t("sudokuRules")}),v.jsx(oo,{href:"#",theme:e,children:t("contactUs")})]}),v.jsxs(no,{theme:e,children:["© ",r," ",t("appName")," ",t("copyright")]}),v.jsxs(io,{theme:e,children:[t("version")," ","1.0.1"]})]})})},lo=Hr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`,so=Hr.div`
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
`,co=Hr.div`
  color: ${e=>e.theme.text};
  font-size: 16px;
  font-weight: 500;
`,uo=({showMessage:e=!0})=>{const{theme:t}=oe(),{loadingMessage:r}=de();return v.jsxs(lo,{children:[v.jsx(so,{theme:t}),e&&v.jsx(co,{theme:t,children:r})]})},fo=Hr.div`
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
`,ho=Hr.div`
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
`;function mo({children:e}){const{theme:t}=oe(),{isLoading:r}=de();return v.jsxs(fe,{children:[" ",v.jsxs(fo,{theme:t,children:[v.jsx(Qr,{}),v.jsx(po,{children:e}),v.jsx(ao,{}),r&&v.jsx(ho,{children:v.jsx(uo,{})})]})]})}const go=e.createContext(),xo=({children:t})=>{const[r,o]=e.useState(null),[n,i]=e.useState(!1),[a,l]=e.useState({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),[s,d]=e.useState({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}}),u=e.useRef(!1);e.useEffect(()=>{f()},[]);const f=async()=>{try{let e=await c.getItem("userId");e||(e="user_"+Date.now()+"_"+Math.random().toString(36).substr(2,9),await c.setItem("userId",e),u.current||(u.current=!0,K.success("欢迎使用数独学习应用！",{position:"top-right",autoClose:2e3}))),o(e),i(!0);const t=await c.getItem(`stats_${e}`);t&&l(t);const r=await c.getItem(`techniques_${e}`);r&&d(r)}catch(e){console.error("初始化用户失败:",e),K.error("初始化用户数据失败",{position:"top-right",autoClose:2e3})}},p=async(e,t)=>{try{const o={...s,[e]:{...s[e],...t}};d(o),r&&await c.setItem(`techniques_${r}`,o)}catch(o){console.error("更新技巧学习进度失败:",o)}},h={userId:r,isAuthenticated:n,userStats:a,techniquesProgress:s,updateUserStats:async e=>{try{const t={...a,...e};l(t),r&&await c.setItem(`stats_${r}`,t)}catch(t){console.error("更新用户统计失败:",t)}},updateTechniqueProgress:p,incrementTechniquePractice:async e=>{const t=s[e]||{mastered:0,practiced:0};await p(e,{practiced:t.practiced+1})},resetUserData:async()=>{try{r&&(await c.removeItem(`stats_${r}`),await c.removeItem(`techniques_${r}`),await c.removeItem(`progress_${r}`)),l({puzzlesStarted:0,puzzlesCompleted:0,puzzlesSolved:0,totalTimePlayed:0,favoriteDifficulty:"medium"}),d({nakedSingles:{mastered:0,practiced:0},hiddenSingles:{mastered:0,practiced:0},nakedPairs:{mastered:0,practiced:0},hiddenPairs:{mastered:0,practiced:0},pointingPairs:{mastered:0,practiced:0},boxLineReduction:{mastered:0,practiced:0}}),K.success("用户数据已重置",{position:"top-right",autoClose:2e3})}catch(e){console.error("重置用户数据失败:",e),K.error("重置用户数据失败",{position:"top-right",autoClose:2e3})}}};return v.jsx(go.Provider,{value:h,children:t})},yo=()=>{const t=e.useContext(go);if(!t)throw new Error("useUser must be used within a UserContextProvider");return t},bo=d.create({baseURL:"/",timeout:1e4,headers:{"Content-Type":"application/json"}});bo.interceptors.request.use(e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),bo.interceptors.response.use(e=>e.data,e=>{var t,r,o,n;const i=(null==(r=null==(t=e.response)?void 0:t.data)?void 0:r.message)||(null==(n=null==(o=e.response)?void 0:o.data)?void 0:n.error)||"请求失败，请重试";return K.error(i,{position:"top-right",autoClose:2e3}),Promise.reject(e)});const vo={generatePuzzle:async e=>{try{return await bo.post("/sudoku/puzzles/generate",{difficulty:e})}catch(t){throw console.error("生成数独谜题失败:",t),t}},getRandomPuzzleByDifficulty:async e=>{try{console.log(`Fetching puzzle with difficulty: ${e}`);const t=await bo.get(`/sudoku/puzzles/random/${e}`);if(!t||!t.puzzle)return console.error("Invalid puzzle data received from server"),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e};const{puzzle:r,solution:o,difficulty:n}=t;console.log("完整响应数据:",JSON.stringify(t));let i=o;return i&&Array.isArray(i)&&9===i.length||(console.warn("Solution data is missing or invalid"),i=Array(9).fill().map(()=>Array(9).fill(0))),{puzzle:r,solution:i,difficulty:n||e}}catch(t){return console.error("Error fetching puzzle:",t),{puzzle:Array(9).fill().map(()=>Array(9).fill(0)),solution:Array(9).fill().map(()=>Array(9).fill(0)),difficulty:e}}},getPuzzleById:async e=>{try{return await bo.get(`/sudoku/puzzles/${e}`)}catch(t){throw console.error("获取谜题失败:",t),t}},solveSudoku:async e=>{try{return await bo.post("/sudoku/solve",{board:e})}catch(t){throw console.error("求解数独失败:",t),t}},validateSudoku:async e=>{try{return await bo.post("/sudoku/validate",{board:e})}catch(t){throw console.error("验证数独失败:",t),t}},getCandidates:async(e,t,r)=>{try{return await bo.post("/sudoku/candidates",{board:e,row:t,col:r})}catch(o){throw console.error("获取候选数失败:",o),o}},identifyTechniques:async e=>{try{return await bo.post("/sudoku/techniques",{board:e})}catch(t){throw console.error("识别技巧失败:",t),t}},getHint:async(e,t)=>{try{return await bo.post("/sudoku/hint",{board:e,solution:t})}catch(r){throw console.error("获取提示失败:",r),r}},getPuzzleList:async(e={})=>{try{return await bo.get("/sudoku/puzzles",{params:e})}catch(t){throw console.error("获取谜题列表失败:",t),t}},getPuzzleStats:async()=>{try{return await bo.get("/sudoku/puzzles/stats")}catch(e){throw console.error("获取谜题统计失败:",e),e}},getUserProgress:async e=>{try{return await bo.get(`/user/progress/${e}`)}catch(t){throw console.error("获取用户进度失败:",t),t}},saveUserProgress:async(e,t)=>{try{return await bo.post(`/user/progress/${e}`,t)}catch(r){throw console.error("保存用户进度失败:",r),r}},getActiveProgress:async()=>{try{return await bo.get("/user/progress/active")}catch(e){throw console.error("获取活跃进度失败:",e),e}},getCompletedPuzzles:async()=>{try{return await bo.get("/user/progress/completed")}catch(e){throw console.error("获取已完成谜题失败:",e),e}},deleteUserProgress:async e=>{try{return await bo.delete(`/user/progress/${e}`)}catch(t){throw console.error("删除用户进度失败:",t),t}},getUserTechniques:async()=>{try{return await bo.get("/user/techniques")}catch(e){throw console.error("获取用户技巧学习情况失败:",e),e}},updateTechniqueLearning:async(e,t)=>{try{return await bo.post(`/user/techniques/${e}`,t)}catch(r){throw console.error("更新技巧学习情况失败:",r),r}},incrementTechniquePractice:async e=>{try{return await bo.post(`/user/techniques/${e}/practice`)}catch(t){throw console.error("增加技巧练习次数失败:",t),t}},getUserStats:async()=>{try{return await bo.get("/user/stats")}catch(e){throw console.error("获取用户统计信息失败:",e),e}},healthCheck:async()=>{try{return(await d.get("/health")).data}catch(e){throw console.error("健康检查失败:",e),e}}};let wo=class{constructor(e,t){this.row=e,this.col=t,this.up=this,this.down=this,this.left=this,this.right=this,this.colHead=null}};class Co extends wo{constructor(e){super(-1,e),this.size=0}}const ko=()=>Array(9).fill().map(()=>Array(9).fill(0)),jo=new class{constructor(){this.root=new wo(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[]}setupSudokuMatrix(e){this.colHeaders=[];for(let r=0;r<324;r++){const e=new Co(r);this.colHeaders.push(e)}let t=this.root;for(let r=0;r<324;r++)t.right=this.colHeaders[r],this.colHeaders[r].left=t,t=this.colHeaders[r];t.right=this.root,this.root.left=t,this.rows=[];for(let r=0;r<9;r++)for(let t=0;t<9;t++)for(let o=1;o<=9;o++){if(0!==e[r][t]&&e[r][t]!==o)continue;const n=[9*r+t,81+9*r+(o-1),162+9*t+(o-1),243+9*(3*Math.floor(r/3)+Math.floor(t/3))+(o-1)],i=[];for(let e of n){const t=new wo(this.rows.length,e);t.colHead=this.colHeaders[e],i.push(t)}for(let e=0;e<i.length;e++)i[e].left=i[(e-1+i.length)%i.length],i[e].right=i[(e+1)%i.length];for(let e of i){const t=e.colHead;e.up=t.up,t.up.down=e,e.down=t,t.up=e,t.size++}this.rows.push([r,t,o])}}selectColumn(){let e=1/0,t=null;for(let r=this.root.right;r!==this.root;r=r.right)r.size<e&&(e=r.size,t=r);return t}coverColumn(e){e.left.right=e.right,e.right.left=e.left;for(let t=e.down;t!==e;t=t.down)for(let e=t.right;e!==t;e=e.right)e.up.down=e.down,e.down.up=e.up,e.colHead.size--}uncoverColumn(e){for(let t=e.up;t!==e;t=t.up)for(let e=t.left;e!==t;e=e.left)e.up.down=e,e.down.up=e,e.colHead.size++;e.left.right=e,e.right.left=e}search(e=2){const t=[],r=()=>{if(this.root.right===this.root)return t.push([...this.solution]),t.length<e;const o=this.selectColumn();this.coverColumn(o);for(let e=o.down;e!==o;e=e.down){this.solution.push(this.rows[e.row]);for(let t=e.right;t!==e;t=t.right)this.coverColumn(t.colHead);if(!r())return!1;this.solution.pop();for(let t=e.left;t!==e;t=t.left)this.uncoverColumn(t.colHead)}return this.uncoverColumn(o),!0};return r(),t}solveSudoku(e){this.root=new wo(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);const t=this.search(1);if(0===t.length)return null;const r=Array(9).fill().map(()=>Array(9).fill(0));for(let[o,n,i]of t[0])r[o][n]=i;return r}hasUniqueSolution(e){this.root=new wo(-1,-1),this.colHeaders=[],this.solution=[],this.rows=[],this.setupSudokuMatrix(e);return 1===this.search(2).length}},$o=(e,t,r,o)=>{for(let a=0;a<9;a++)if(a!==r&&e[t][a]===o)return!1;for(let a=0;a<9;a++)if(a!==t&&e[a][r]===o)return!1;const n=3*Math.floor(t/3),i=3*Math.floor(r/3);for(let a=n;a<n+3;a++)for(let n=i;n<i+3;n++)if(a!==t&&n!==r&&e[a][n]===o)return!1;return!0},So=e=>{for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(0===e[t][r])return[t,r];return null},zo=e=>{try{return jo.hasUniqueSolution(e)}catch(t){return console.error("验证数独唯一性时出错:",t),To(e)}},To=e=>{const t=e.map(e=>[...e]);let r=0;const o=()=>{if(r>1)return;const e=So(t);if(!e)return void r++;const[n,i]=e;for(let r=1;r<=9;r++)$o(t,n,i,r)&&(t[n][i]=r,o(),t[n][i]=0)};return o(),1===r},Ao=()=>{const e=[1,2,3,4,5,6,7,8,9];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},Po=async(e="medium")=>{console.log(`开始生成${e}难度的数独题目`);const t=(()=>{console.debug("开始生成完整的数独解");for(let t=1;t<=10;t++)try{const e=ko();for(let t=0;t<9;t+=3){const r=Ao();let o=0;for(let n=0;n<3;n++)for(let i=0;i<3;i++)e[t+n][t+i]=r[o++]}const r=jo.solveSudoku(e);if(r&&No(r))return console.debug(`成功生成完整数独解（尝试次数：${t}）`),r;const o=()=>{const t=So(e);if(!t)return!0;const[r,n]=t,i=Ao();for(const a of i)if($o(e,r,n,a)){if(e[r][n]=a,o())return!0;e[r][n]=0}return!1};if(o()&&No(e))return console.debug(`使用回溯算法成功生成完整数独解（尝试次数：${t}）`),e}catch(e){console.error(`生成数独解时出错（尝试 ${t}/10）:`,e)}return console.error("超过最大尝试次数（10），无法生成有效的数独解"),null})();if(!t)return console.error("生成完整数独解失败"),null;const r=t.map(e=>[...e]);let o;switch(e){case"easy":o=40;break;case"medium":default:o=50;break;case"hard":o=55;break;case"expert":o=60}let n=0;const i=[];for(let a=0;a<9;a++)for(let e=0;e<9;e++)i.push([a,e]);for(let a=i.length-1;a>0;a--){const e=Math.floor(Math.random()*(a+1));[i[a],i[e]]=[i[e],i[a]]}for(const[a,l]of i){if(n>=o)break;const e=r[a][l];r[a][l]=0,zo(r)?(n++,console.debug(`已移除单元格(${a},${l})，当前已移除${n}/${o}个`)):r[a][l]=e}return zo(r)||console.warn(`警告：生成的${e}难度题目可能没有唯一解，尝试重新生成`),console.log(`成功生成${e}难度数独题目，保留了${81-n}个数字`),{puzzle:r,solution:t}},No=e=>{for(let t=0;t<9;t++){const r=new Set;for(let o=0;o<9;o++){const n=e[t][o];if(0!==n){if(r.has(n))return!1;r.add(n)}}}for(let t=0;t<9;t++){const r=new Set;for(let o=0;o<9;o++){const n=e[o][t];if(0!==n){if(r.has(n))return!1;r.add(n)}}}for(let t=0;t<3;t++)for(let r=0;r<3;r++){const o=new Set;for(let n=0;n<3;n++)for(let i=0;i<3;i++){const a=3*r+i,l=e[3*t+n][a];if(0!==l){if(o.has(l))return!1;o.add(l)}}}return!0};let Io=null,Ro=null;const Eo=18e5,Mo=async()=>{try{console.log("开始获取随机专家级题目");const e=await(async()=>{try{const e=Date.now();if(Io&&Ro&&e-Ro<Eo)return console.log("使用缓存的专家级题目数据"),Io;const t=await c.getItem("expert_puzzles_cache");if(t&&t.timestamp&&e-t.timestamp<Eo)return console.log("从localforage加载缓存的专家级题目"),Io=t.data,Ro=t.timestamp,Io;console.log("从JSON文件加载专家级题目");const r=await fetch("/expert_puzzles.json");if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const o=await r.json();if(!o.puzzles||!Array.isArray(o.puzzles))throw new Error("无效的专家级题目数据格式");return Io=o.puzzles,Ro=e,await c.setItem("expert_puzzles_cache",{data:o.puzzles,timestamp:e}),console.log(`成功加载 ${o.puzzles.length} 个专家级题目`),o.puzzles}catch(e){return console.error("加载专家级题目失败:",e),[]}})();if(!e||0===e.length)return console.warn("没有可用的专家级题目"),null;const t=e[Math.floor(Math.random()*e.length)];if(!t||!t.puzzle||!t.solution){if(console.error("选中的谜题数据不完整:",t),e.length>1){console.log("尝试重新选择另一个谜题");const t=e.filter(e=>e&&e.puzzle&&e.solution);if(t.length>0){const e=Math.floor(Math.random()*t.length);return console.log(`重新选择有效专家级题目 #${t[e].id||"unknown"}`),t[e]}}return null}return console.log(`随机选择专家级题目 #${t.id||"unknown"}`),t}catch(e){return console.error("获取随机专家级题目失败:",e),null}},Fo=(e,t,r)=>{const o=[],n={};for(let i=1;i<=9;i++)n[i]=[];for(let i=0;i<9;i++){if(0!==e[r][i])continue;(t[`${r}-${i}`]||[]).forEach(e=>{n[e]&&n[e].push(i)})}for(let i=1;i<=9;i++)if(1===n[i].length){const e=n[i][0],a=t[`${r}-${e}`]||[];o.push({type:"notesSingle",description:"notesSingle",row:r,col:e,value:i,cells:[[r,e]],notes:a,message:`在第${r+1}行中，候选数${i}只能填入单元格(${r+1},${e+1})`})}return o},Lo=(e,t,r)=>{const o=[],n={};for(let i=1;i<=9;i++)n[i]=[];for(let i=0;i<9;i++){if(0!==e[i][r])continue;(t[`${i}-${r}`]||[]).forEach(e=>{n[e]&&n[e].push(i)})}for(let i=1;i<=9;i++)if(1===n[i].length){const e=n[i][0],a=t[`${e}-${r}`]||[];o.push({type:"notesSingle",description:"notesSingle",row:e,col:r,value:i,cells:[[e,r]],notes:a,message:`在第${r+1}列中，候选数${i}只能填入单元格(${e+1},${r+1})`})}return o},Wo=(e,t,r)=>{const o=[],n=3*Math.floor(r/3),i=r%3*3,a={};for(let l=1;l<=9;l++)a[l]=[];for(let l=0;l<3;l++)for(let r=0;r<3;r++){const o=n+l,s=i+r;if(0!==e[o][s])continue;(t[`${o}-${s}`]||[]).forEach(e=>{a[e]&&a[e].push({row:o,col:s,r:l,c:r})})}for(let l=1;l<=9;l++)if(1===a[l].length){const{row:e,col:n}=a[l][0],i=t[`${e}-${n}`]||[];o.push({type:"notesSingle",description:"notesSingle",row:e,col:n,value:l,cells:[[e,n]],notes:i,message:`在第${r+1}宫中，候选数${l}只能填入单元格(${e+1},${n+1})`})}return o},Oo=(e,t)=>{const r=[];for(let o=1;o<=9;o++){let n=0,i=-1;for(let r=0;r<9&&!(0===e[t][r]&&($o(e,t,r,o)&&(n++,i=r),n>1));r++);1===n&&r.push({type:"hiddenSingleRow",description:"hiddenSingleRow",row:t,col:i,value:o,cells:[[t,i]],message:`在第${t+1}行中，数字${o}只能填入单元格(${t+1},${i+1})`})}return r},Do=(e,t)=>{const r=[];for(let o=1;o<=9;o++){let n=0,i=-1;for(let r=0;r<9&&!(0===e[r][t]&&($o(e,r,t,o)&&(n++,i=r),n>1));r++);1===n&&r.push({type:"hiddenSingleCol",description:"hiddenSingleCol",row:i,col:t,value:o,cells:[[i,t]],message:`在第${t+1}列中，数字${o}只能填入单元格(${i+1},${t+1})`})}return r},qo=(e,t)=>{const r=[],o=3*Math.floor(t/3),n=t%3*3;for(let i=1;i<=9;i++){let a=0,l=-1,s=-1;for(let t=0;t<3;t++){for(let r=0;r<3;r++){const c=o+t,d=n+r;if(0===e[c][d]&&($o(e,c,d,i)&&(a++,l=c,s=d),a>1))break}if(a>1)break}1===a&&r.push({type:"hiddenSingleBox",description:"hiddenSingleBox",row:l,col:s,value:i,cells:[[l,s]],message:`在第${t+1}宫中，数字${i}只能填入单元格(${l+1},${s+1})`})}return r},Ho=(e,t={},r=!0)=>{const o=(e=>{const t=[];for(let r=0;r<9;r++)for(let o=0;o<9;o++){if(0!==e[r][o])continue;const n=[];for(let t=1;t<=9;t++)$o(e,r,o,t)&&n.push(t);1===n.length&&t.push({type:"nakedSingle",description:"nakedSingle",row:r,col:o,value:n[0],cells:[[r,o]],message:`单元格(${r+1},${o+1})只有数字${n[0]}可以填入`})}return t})(e),n=(e=>{const t=[],r=new Set;for(let o=0;o<9;o++){const n=Oo(e,o);for(const o of n){const n=`${o.row}-${o.col}`;r.has(n)||0!==e[o.row][o.col]||(r.add(n),t.push(o))}}for(let o=0;o<9;o++){const n=Do(e,o);for(const o of n){const n=`${o.row}-${o.col}`;r.has(n)||0!==e[o.row][o.col]||(r.add(n),t.push(o))}}for(let o=0;o<9;o++){const n=qo(e,o);for(const o of n){const n=`${o.row}-${o.col}`;r.has(n)||0!==e[o.row][o.col]||(r.add(n),t.push(o))}}return t})(e),i=r&&Object.keys(t).length>0?((e,t={})=>{const r=[],o=new Set;for(let n=0;n<9;n++){const i=Fo(e,t,n);for(const t of i){const n=`${t.row}-${t.col}`;o.has(n)||0!==e[t.row][t.col]||(o.add(n),r.push(t))}}for(let n=0;n<9;n++){const i=Lo(e,t,n);for(const t of i){const n=`${t.row}-${t.col}`;o.has(n)||0!==e[t.row][t.col]||(o.add(n),r.push(t))}}for(let n=0;n<9;n++){const i=Wo(e,t,n);for(const t of i){const n=`${t.row}-${t.col}`;o.has(n)||0!==e[t.row][t.col]||(o.add(n),r.push(t))}}return r})(e,t):[];let a=[],l=[],s=[],c=[],d=[],u=[],f=[],p=[],h=[],m=[];if(r&&Object.keys(t).length>0){a=((e,t={})=>{const r=[],o=o=>{const n=[];for(let r=0;r<9;r++){if(0!==e[o][r])continue;const i=t[`${o}-${r}`]||[];2===i.length&&n.push({row:o,col:r,notes:i})}for(let i=0;i<n.length-1;i++)for(let a=i+1;a<n.length;a++){const l=n[i],s=n[a];if(l.notes.sort().join(",")===s.notes.sort().join(",")){let n=!1;const i=[],a=[];for(let r=0;r<9;r++){if(r===l.col||r===s.col)continue;if(0!==e[o][r])continue;const c=(t[`${o}-${r}`]||[]).filter(e=>l.notes.includes(e));c.length>0&&(n=!0,i.push([o,r]),c.forEach(e=>a.push(e)))}n&&r.push({type:"nakedPairRow",description:"显性数对法(行)",cells:[[l.row,l.col],[s.row,s.col]],values:l.notes,targetCells:i,targetCellsDetails:i.map((e,r)=>{const[o,n]=e;return{row:o,col:n,notesToRemove:(t[`${o}-${n}`]||[]).filter(e=>l.notes.includes(e))}}),removableCandidates:a,message:`在第${o+1}行，单元格(${l.col+1})和(${s.col+1})形成显性数对[${l.notes.join(",")}]`})}}},n=o=>{const n=[];for(let r=0;r<9;r++){if(0!==e[r][o])continue;const i=t[`${r}-${o}`]||[];2===i.length&&n.push({row:r,col:o,notes:i})}for(let i=0;i<n.length-1;i++)for(let a=i+1;a<n.length;a++){const l=n[i],s=n[a];if(l.notes.sort().join(",")===s.notes.sort().join(",")){let n=!1;const i=[],a=[];for(let r=0;r<9;r++){if(r===l.row||r===s.row)continue;if(0!==e[r][o])continue;const c=(t[`${r}-${o}`]||[]).filter(e=>l.notes.includes(e));c.length>0&&(n=!0,i.push([r,o]),c.forEach(e=>a.push(e)))}n&&r.push({type:"nakedPairCol",description:"显性数对法(列)",cells:[[l.row,l.col],[s.row,s.col]],values:l.notes,targetCells:i,targetCellsDetails:i.map((e,r)=>{const[o,n]=e;return{row:o,col:n,notesToRemove:(t[`${o}-${n}`]||[]).filter(e=>l.notes.includes(e))}}),removableCandidates:a,message:`在第${o+1}列，单元格(${l.row+1})和(${s.row+1})形成显性数对[${l.notes.join(",")}]`})}}},i=(o,n)=>{const i=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const l=3*o+r,s=3*n+a;if(0!==e[l][s])continue;const c=t[`${l}-${s}`]||[];2===c.length&&i.push({row:l,col:s,notes:c})}for(let a=0;a<i.length-1;a++)for(let l=a+1;l<i.length;l++){const s=i[a],c=i[l];if(s.notes.sort().join(",")===c.notes.sort().join(",")){let i=!1;const a=[],l=[];for(let r=0;r<3;r++)for(let d=0;d<3;d++){const u=3*o+r,f=3*n+d;if(u===s.row&&f===s.col||u===c.row&&f===c.col)continue;if(0!==e[u][f])continue;const p=(t[`${u}-${f}`]||[]).filter(e=>s.notes.includes(e));p.length>0&&(i=!0,a.push([u,f]),p.forEach(e=>l.push(e)))}i&&r.push({type:"nakedPairBox",description:"显性数对法(宫)",cells:[[s.row,s.col],[c.row,c.col]],values:s.notes,targetCells:a,targetCellsDetails:a.map((e,r)=>{const[o,n]=e;return{row:o,col:n,notesToRemove:(t[`${o}-${n}`]||[]).filter(e=>s.notes.includes(e))}}),removableCandidates:l,message:`在第${3*o+n+1}宫，单元格(${s.row+1},${s.col+1})和(${c.row+1},${c.col+1})形成显性数对[${s.notes.join(",")}]`})}}};for(let a=0;a<9;a++)o(a),n(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),l=((e,t={})=>{const r=[],o=o=>{const n={};for(let e=1;e<=9;e++)n[e]=[];for(let r=0;r<9;r++)0===e[o][r]&&(t[`${o}-${r}`]||[]).forEach(e=>{n[e]&&n[e].push(r)});const i=Object.keys(n).map(Number).filter(e=>2===n[e].length);for(let e=0;e<i.length-1;e++)for(let a=e+1;a<i.length;a++){const l=i[e],s=i[a];if(n[l].sort().join(",")===n[s].sort().join(",")){const e=n[l];let i=!1;const a=[],c=[],d=[];e.forEach(e=>{const r=(t[`${o}-${e}`]||[]).filter(e=>e!==l&&e!==s);r.length>0&&(i=!0,a.push([o,e]),r.forEach(e=>c.push(e)),d.push({row:o,col:e,notesToRemove:r}))}),i&&r.push({type:"hiddenPairRow",description:"隐性数对法(行)",cells:[[o,e[0]],[o,e[1]]],values:[l,s],targetCells:a,targetCellsDetails:d,removableCandidates:c,message:`在第${o+1}行，数字${l}和${s}只能出现在单元格(${e[0]+1})和(${e[1]+1})中`})}}},n=o=>{const n={};for(let e=1;e<=9;e++)n[e]=[];for(let r=0;r<9;r++)0===e[r][o]&&(t[`${r}-${o}`]||[]).forEach(e=>{n[e]&&n[e].push(r)});const i=Object.keys(n).map(Number).filter(e=>2===n[e].length);for(let e=0;e<i.length-1;e++)for(let a=e+1;a<i.length;a++){const l=i[e],s=i[a];if(n[l].sort().join(",")===n[s].sort().join(",")){const e=n[l];let i=!1;const a=[],c=[],d=[];e.forEach(e=>{const r=(t[`${e}-${o}`]||[]).filter(e=>e!==l&&e!==s);r.length>0&&(i=!0,a.push([e,o]),r.forEach(e=>c.push(e)),d.push({row:e,col:o,notesToRemove:r}))}),i&&r.push({type:"hiddenPairCol",description:"隐性数对法(列)",cells:[[e[0],o],[e[1],o]],values:[l,s],targetCells:a,targetCellsDetails:d,removableCandidates:c,message:`在第${o+1}列，数字${l}和${s}只能出现在单元格(${e[0]+1})和(${e[1]+1})中`})}}},i=(o,n)=>{const i={};for(let e=1;e<=9;e++)i[e]=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const l=3*o+r,s=3*n+a;0===e[l][s]&&(t[`${l}-${s}`]||[]).forEach(e=>{i[e]&&i[e].push({row:l,col:s})})}const a=Object.keys(i).map(Number).filter(e=>2===i[e].length);for(let e=0;e<a.length-1;e++)for(let l=e+1;l<a.length;l++){const s=a[e],c=a[l],d=i[s].map(e=>`${e.row}-${e.col}`).sort(),u=i[c].map(e=>`${e.row}-${e.col}`).sort();if(d.join(",")===u.join(",")){const e=i[s];let a=!1;const l=[],d=[],u=[];e.forEach(e=>{const r=`${e.row}-${e.col}`,o=(t[r]||[]).filter(e=>e!==s&&e!==c);o.length>0&&(a=!0,l.push([e.row,e.col]),o.forEach(e=>d.push(e)),u.push({row:e.row,col:e.col,notesToRemove:o}))}),a&&r.push({type:"hiddenPairBox",description:"隐性数对法(宫)",cells:e.map(e=>[e.row,e.col]),values:[s,c],targetCells:l,targetCellsDetails:u,removableCandidates:d,message:`在第${3*o+n+1}宫，数字${s}和${c}只能出现在单元格(${e[0].row+1},${e[0].col+1})和(${e[1].row+1},${e[1].col+1})中`})}}};for(let a=0;a<9;a++)o(a),n(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),s=((e,t={})=>{const r=[];for(let o=0;o<3;o++)for(let n=0;n<3;n++)for(let i=1;i<=9;i++){const a=[];for(let t=0;t<3;t++)for(let r=0;r<3;r++){const l=3*o+t,s=3*n+r;0===e[l][s]&&$o(e,l,s,i)&&a.push({row:l,col:s,r:t,c:r})}if(a.length<2)continue;const l=a.every(e=>e.r===a[0].r),s=a.every(e=>e.c===a[0].c);if(l){const l=3*o+a[0].r,s=[],c=[],d=[];for(let r=0;r<9;r++)r>=3*n&&r<3*(n+1)||0!==e[l][r]||!$o(e,l,r,i)||(t[`${l}-${r}`]||[]).includes(i)&&(s.push([l,r]),c.push(i),d.push({row:l,col:r,notesToRemove:[i]}));s.length>0&&r.push({type:"pointingPairsRow",description:"指向对法(行)",boxRow:o,boxCol:n,row:l,number:i,sourceCells:a.map(e=>[e.row,e.col]),targetCells:s,targetCellsDetails:d,removableCandidates:c,message:`在第${3*o+n+1}宫，数字${i}只能出现在第${l+1}行，可以排除该行其他宫格中数字${i}的可能性`})}else if(s){const l=3*n+a[0].c,s=[],c=[],d=[];for(let r=0;r<9;r++)r>=3*o&&r<3*(o+1)||0!==e[r][l]||!$o(e,r,l,i)||(t[`${r}-${l}`]||[]).includes(i)&&(s.push([r,l]),c.push(i),d.push({row:r,col:l,notesToRemove:[i]}));s.length>0&&r.push({type:"pointingPairsCol",description:"指向对法(列)",boxRow:o,boxCol:n,col:l,number:i,sourceCells:a.map(e=>[e.row,e.col]),targetCells:s,targetCellsDetails:d,removableCandidates:c,message:`在第${3*o+n+1}宫，数字${i}只能出现在第${l+1}列，可以排除该列其他宫格中数字${i}的可能性`})}}return r})(e,t),c=((e,t={})=>{const r=[];for(let o=0;o<9;o++)for(let n=1;n<=9;n++){const i=[];for(let t=0;t<9;t++)0===e[o][t]&&$o(e,o,t,n)&&i.push({row:o,col:t});if(i.length<1)continue;const a=i.map(e=>Math.floor(e.col/3));if(a.every(e=>e===a[0])){const l=a[0],s=Math.floor(o/3),c=[],d=[],u=[];for(let r=3*s;r<3*(s+1);r++)if(r!==o)for(let o=3*l;o<3*(l+1);o++)0===e[r][o]&&$o(e,r,o,n)&&(t[`${r}-${o}`]||[]).includes(n)&&(c.push([r,o]),d.push(n),u.push({row:r,col:o,notesToRemove:[n]}));c.length>0&&r.push({type:"boxLineReductionRow",description:"宫行列排除法(行)",row:o,boxRow:s,boxCol:l,number:n,sourceCells:i.map(e=>[e.row,e.col]),targetCells:c,targetCellsDetails:u,removableCandidates:d,message:`在第${o+1}行，数字${n}只能出现在第${3*s+l+1}宫，可以排除该宫中其他行数字${n}的可能性`})}}for(let o=0;o<9;o++)for(let n=1;n<=9;n++){const i=[];for(let t=0;t<9;t++)0===e[t][o]&&$o(e,t,o,n)&&i.push({row:t,col:o});if(i.length<1)continue;const a=i.map(e=>Math.floor(e.row/3));if(a.every(e=>e===a[0])){const l=a[0],s=Math.floor(o/3),c=[],d=[],u=[];for(let r=3*l;r<3*(l+1);r++)for(let i=3*s;i<3*(s+1);i++)i!==o&&0===e[r][i]&&$o(e,r,i,n)&&(t[`${r}-${i}`]||[]).includes(n)&&(c.push([r,i]),d.push(n),u.push({row:r,col:i,notesToRemove:[n]}));c.length>0&&r.push({type:"boxLineReductionCol",description:"宫行列排除法(列)",col:o,boxRow:l,boxCol:s,number:n,sourceCells:i.map(e=>[e.row,e.col]),targetCells:c,targetCellsDetails:u,removableCandidates:d,message:`在第${o+1}列，数字${n}只能出现在第${3*l+s+1}宫，可以排除该宫中其他列数字${n}的可能性`})}}return r})(e,t),d=((e,t={})=>{const r=[],o=o=>{const n=[];for(let r=0;r<9;r++){if(0!==e[o][r])continue;const i=t[`${o}-${r}`]||[];i.length>=1&&i.length<=3&&n.push({row:o,col:r,notes:i})}for(let i=0;i<n.length-2;i++)for(let a=i+1;a<n.length-1;a++)for(let l=a+1;l<n.length;l++){const s=n[i],c=n[a],d=n[l],u=[...new Set([...s.notes,...c.notes,...d.notes])];if(3===u.length){const n=s.notes.every(e=>u.includes(e)),i=c.notes.every(e=>u.includes(e)),a=d.notes.every(e=>u.includes(e));if(n&&i&&a){let n=!1;const i=[],a=[];for(let r=0;r<9;r++){if(r===s.col||r===c.col||r===d.col)continue;if(0!==e[o][r])continue;const l=(t[`${o}-${r}`]||[]).filter(e=>u.includes(e));l.length>0&&(n=!0,i.push([o,r]),l.forEach(e=>a.push(e)))}n&&r.push({type:"nakedTripleRow",description:"显性三链数法(行)",cells:[[s.row,s.col],[c.row,c.col],[d.row,d.col]],values:u,targetCells:i,removableCandidates:a,conditionCellsDetails:[{row:s.row,col:s.col,notes:s.notes},{row:c.row,col:c.col,notes:c.notes},{row:d.row,col:d.col,notes:d.notes}],targetCellsDetails:i.map((e,r)=>{const[o,n]=e;return{row:o,col:n,notesToRemove:(t[`${o}-${n}`]||[]).filter(e=>u.includes(e))}}),message:`在第${o+1}行，单元格(${s.col+1})、(${c.col+1})和(${d.col+1})形成显性三链数[${u.join(",")}]`})}}}},n=o=>{const n=[];for(let r=0;r<9;r++){if(0!==e[r][o])continue;const i=t[`${r}-${o}`]||[];i.length>=1&&i.length<=3&&n.push({row:r,col:o,notes:i})}for(let i=0;i<n.length-2;i++)for(let a=i+1;a<n.length-1;a++)for(let l=a+1;l<n.length;l++){const s=n[i],c=n[a],d=n[l],u=[...new Set([...s.notes,...c.notes,...d.notes])];if(3===u.length){const n=s.notes.every(e=>u.includes(e)),i=c.notes.every(e=>u.includes(e)),a=d.notes.every(e=>u.includes(e));if(n&&i&&a){let n=!1;const i=[],a=[];for(let r=0;r<9;r++){if(r===s.row||r===c.row||r===d.row)continue;if(0!==e[r][o])continue;const l=(t[`${r}-${o}`]||[]).filter(e=>u.includes(e));l.length>0&&(n=!0,i.push([r,o]),l.forEach(e=>a.push(e)))}n&&r.push({type:"nakedTripleCol",description:"显性三链数法(列)",cells:[[s.row,s.col],[c.row,c.col],[d.row,d.col]],values:u,targetCells:i,removableCandidates:a,conditionCellsDetails:[{row:s.row,col:s.col,notes:s.notes},{row:c.row,col:c.col,notes:c.notes},{row:d.row,col:d.col,notes:d.notes}],targetCellsDetails:i.map((e,r)=>{const[o,n]=e;return{row:o,col:n,notesToRemove:(t[`${o}-${n}`]||[]).filter(e=>u.includes(e))}}),message:`在第${o+1}列，单元格(${s.row+1})、(${c.row+1})和(${d.row+1})形成显性三链数[${u.join(",")}]`})}}}},i=(o,n)=>{const i=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const l=3*o+r,s=3*n+a;if(0!==e[l][s])continue;const c=t[`${l}-${s}`]||[];c.length>=1&&c.length<=3&&i.push({row:l,col:s,notes:c})}for(let a=0;a<i.length-2;a++)for(let l=a+1;l<i.length-1;l++)for(let s=l+1;s<i.length;s++){const c=i[a],d=i[l],u=i[s],f=[...new Set([...c.notes,...d.notes,...u.notes])];if(3===f.length){const i=c.notes.every(e=>f.includes(e)),a=d.notes.every(e=>f.includes(e)),l=u.notes.every(e=>f.includes(e));if(i&&a&&l){let i=!1;const a=[],l=[];for(let r=0;r<3;r++)for(let s=0;s<3;s++){const p=3*o+r,h=3*n+s;if(p===c.row&&h===c.col||p===d.row&&h===d.col||p===u.row&&h===u.col)continue;if(0!==e[p][h])continue;const m=(t[`${p}-${h}`]||[]).filter(e=>f.includes(e));m.length>0&&(i=!0,a.push([p,h]),m.forEach(e=>l.push(e)))}i&&r.push({type:"nakedTripleBox",description:"显性三链数法(宫)",cells:[[c.row,c.col],[d.row,d.col],[u.row,u.col]],values:f,targetCells:a,removableCandidates:l,conditionCellsDetails:[{row:c.row,col:c.col,notes:c.notes},{row:d.row,col:d.col,notes:d.notes},{row:u.row,col:u.col,notes:u.notes}],targetCellsDetails:a.map((e,r)=>{const[o,n]=e;return{row:o,col:n,notesToRemove:(t[`${o}-${n}`]||[]).filter(e=>f.includes(e))}}),message:`在第${3*o+n+1}宫，单元格(${c.row+1},${c.col+1})、(${d.row+1},${d.col+1})和(${u.row+1},${u.col+1})形成显性三链数[${f.join(",")}]`})}}}};for(let a=0;a<9;a++)o(a),n(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),u=((e,t={})=>{const r=[],o=o=>{const n={};for(let e=1;e<=9;e++)n[e]=[];for(let r=0;r<9;r++)0===e[o][r]&&(t[`${o}-${r}`]||[]).forEach(e=>{n[e]&&n[e].push(r)});const i=Object.keys(n).map(Number).filter(e=>3===n[e].length);for(let e=0;e<i.length-2;e++)for(let a=e+1;a<i.length-1;a++)for(let l=a+1;l<i.length;l++){const s=i[e],c=i[a],d=i[l],u=n[s].sort().join(","),f=n[c].sort().join(","),p=n[d].sort().join(",");if(u===f&&f===p){const e=n[s];let i=!1;const a=[],l=[],u=[];e.forEach(e=>{const r=(t[`${o}-${e}`]||[]).filter(e=>e!==s&&e!==c&&e!==d);r.length>0&&(i=!0,a.push([o,e]),r.forEach(e=>l.push(e)),u.push({row:o,col:e,notesToRemove:r}))}),i&&r.push({type:"hiddenTripleRow",description:"隐性三链数法(行)",cells:[[o,e[0]],[o,e[1]],[o,e[2]]],values:[s,c,d],targetCells:a,targetCellsDetails:u,removableCandidates:l,message:`在第${o+1}行，数字${s}、${c}和${d}只能出现在单元格(${e[0]+1})、(${e[1]+1})和(${e[2]+1})中`})}}},n=o=>{const n={};for(let e=1;e<=9;e++)n[e]=[];for(let r=0;r<9;r++)0===e[r][o]&&(t[`${r}-${o}`]||[]).forEach(e=>{n[e]&&n[e].push(r)});const i=Object.keys(n).map(Number).filter(e=>3===n[e].length);for(let e=0;e<i.length-2;e++)for(let a=e+1;a<i.length-1;a++)for(let l=a+1;l<i.length;l++){const s=i[e],c=i[a],d=i[l],u=n[s].sort().join(","),f=n[c].sort().join(","),p=n[d].sort().join(",");if(u===f&&f===p){const e=n[s];let i=!1;const a=[],l=[],u=[];e.forEach(e=>{const r=(t[`${e}-${o}`]||[]).filter(e=>e!==s&&e!==c&&e!==d);r.length>0&&(i=!0,a.push([e,o]),r.forEach(e=>l.push(e)),u.push({row:e,col:o,notesToRemove:r}))}),i&&r.push({type:"hiddenTripleCol",description:"隐性三链数法(列)",cells:[[e[0],o],[e[1],o],[e[2],o]],values:[s,c,d],targetCells:a,targetCellsDetails:u,removableCandidates:l,message:`在第${o+1}列，数字${s}、${c}和${d}只能出现在单元格(${e[0]+1})、(${e[1]+1})和(${e[2]+1})中`})}}},i=(o,n)=>{const i={};for(let e=1;e<=9;e++)i[e]=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++){const l=3*o+r,s=3*n+a;0===e[l][s]&&(t[`${l}-${s}`]||[]).forEach(e=>{i[e]&&i[e].push({row:l,col:s})})}const a=Object.keys(i).map(Number).filter(e=>3===i[e].length);for(let e=0;e<a.length-2;e++)for(let l=e+1;l<a.length-1;l++)for(let s=l+1;s<a.length;s++){const c=a[e],d=a[l],u=a[s],f=i[c].map(e=>`${e.row}-${e.col}`).sort().join(","),p=i[d].map(e=>`${e.row}-${e.col}`).sort().join(","),h=i[u].map(e=>`${e.row}-${e.col}`).sort().join(",");if(f===p&&p===h){const e=i[c];let a=!1;const l=[],s=[],f=[];e.forEach(e=>{const r=`${e.row}-${e.col}`,o=(t[r]||[]).filter(e=>e!==c&&e!==d&&e!==u);o.length>0&&(a=!0,l.push([e.row,e.col]),o.forEach(e=>s.push(e)),f.push({row:e.row,col:e.col,notesToRemove:o}))}),a&&r.push({type:"hiddenTripleBox",description:"隐性三链数法(宫)",cells:e.map(e=>[e.row,e.col]),values:[c,d,u],targetCells:l,targetCellsDetails:f,removableCandidates:s,message:`在第${3*o+n+1}宫，数字${c}、${d}和${u}只能出现在单元格(${e[0].row+1},${e[0].col+1})、(${e[1].row+1},${e[1].col+1})和(${e[2].row+1},${e[2].col+1})中`})}}};for(let a=0;a<9;a++)o(a),n(a);for(let a=0;a<3;a++)for(let e=0;e<3;e++)i(a,e);return r})(e,t),f=((e,t={})=>{const r=[];return(()=>{for(let o=1;o<=9;o++){const n=[];for(let r=0;r<9;r++){const i=[];for(let n=0;n<9;n++){if(0!==e[r][n])continue;const a=t[`${r}-${n}`]||[];$o(e,r,n,o)&&a.includes(o)&&i.push(n)}2===i.length&&n.push({row:r,cols:i})}for(let i=0;i<n.length-1;i++)for(let a=i+1;a<n.length;a++){const l=n[i],s=n[a],c=new Set(l.cols),d=new Set(s.cols);if(c.size===d.size&&[...c].every(e=>d.has(e))){const n=[],i=[],a=[];l.cols.forEach(r=>{for(let c=0;c<9;c++)c!==l.row&&c!==s.row&&0===e[c][r]&&(t[`${c}-${r}`]||[]).includes(o)&&(n.push([c,r]),i.push(o),a.push({row:c,col:r,notesToRemove:[o]}))}),n.length>0&&r.push({type:"xWingRow",description:"X-Wing(行)",number:o,cells:[[l.row,l.cols[0]],[l.row,l.cols[1]],[s.row,s.cols[0]],[s.row,s.cols[1]]],targetCells:n,targetCellsDetails:a,removableCandidates:i,message:`X-Wing技巧：在第${l.row+1}行和第${s.row+1}行中，数字${o}只出现在第${l.cols[0]+1}列和第${l.cols[1]+1}列中，形成一个矩形结构。由于这个数字在这两行中只能出现在相同的两列，因此可以确定该数字在这两列的其他行中不可能存在，可以删除第${l.cols[0]+1}列和第${l.cols[1]+1}列中除这两行外其他单元格的数字${o}候选数`})}}}})(),(()=>{for(let o=1;o<=9;o++){const n=[];for(let r=0;r<9;r++){const i=[];for(let n=0;n<9;n++){if(0!==e[n][r])continue;const a=t[`${n}-${r}`]||[];$o(e,n,r,o)&&a.includes(o)&&i.push(n)}2===i.length&&n.push({col:r,rows:i})}for(let i=0;i<n.length-1;i++)for(let a=i+1;a<n.length;a++){const l=n[i],s=n[a],c=new Set(l.rows),d=new Set(s.rows);if(c.size===d.size&&[...c].every(e=>d.has(e))){const n=[],i=[],a=[];l.rows.forEach(r=>{for(let c=0;c<9;c++)c!==l.col&&c!==s.col&&0===e[r][c]&&(t[`${r}-${c}`]||[]).includes(o)&&(n.push([r,c]),i.push(o),a.push({row:r,col:c,notesToRemove:[o]}))}),n.length>0&&r.push({type:"xWingCol",description:"X-Wing(列)",number:o,cells:[[l.rows[0],l.col],[l.rows[1],l.col],[s.rows[0],s.col],[s.rows[1],s.col]],targetCells:n,targetCellsDetails:a,removableCandidates:i,message:`X-Wing技巧：在第${l.col+1}列和第${s.col+1}列中，数字${o}只出现在第${l.rows[0]+1}行和第${l.rows[1]+1}行中，形成一个矩形结构。由于这个数字在这两列中只能出现在相同的两行，因此可以确定该数字在这两行的其他列中不可能存在，可以删除第${l.rows[0]+1}行和第${l.rows[1]+1}行中除这两列外其他单元格的数字${o}候选数`})}}}})(),r})(e,t),p=((e,t={})=>{const r=[],o=(e,t)=>{if(e.row===t.row)return!0;if(e.col===t.col)return!0;const r=Math.floor(e.row/3),o=Math.floor(e.col/3),n=Math.floor(t.row/3),i=Math.floor(t.col/3);return r===n&&o===i},n=(e,t)=>e.filter(e=>t.includes(e)),i=(()=>{const r=[];for(let o=0;o<9;o++)for(let n=0;n<9;n++){if(0!==e[o][n])continue;const i=t[`${o}-${n}`]||[];2===i.length&&r.push({row:o,col:n,notes:i})}return r})();for(let a=0;a<i.length;a++){const l=i[a],[s,c]=l.notes,d=[],u=[];for(let e=0;e<i.length;e++){if(a===e)continue;const t=i[e];if(!o(l,t))continue;const r=n(l.notes,t.notes);if(1===r.length){if(r[0]===s&&t.notes.includes(s)&&t.notes.includes(c))continue;if(r[0]===s){const e=t.notes.find(e=>e!==s);e&&e!==c&&d.push({...t,z:e})}else if(r[0]===c){const e=t.notes.find(e=>e!==c);e&&e!==s&&u.push({...t,z:e})}}}for(const o of d)for(const n of u){if(o.z!==n.z)continue;const i=o.z,a=[],d=[],u=[];for(let r=0;r<9;r++)for(let s=0;s<9;s++){if(0!==e[r][s])continue;if(r===l.row&&s===l.col||r===o.row&&s===o.col||r===n.row&&s===n.col)continue;const c=r===o.row||s===o.col||Math.floor(r/3)===Math.floor(o.row/3)&&Math.floor(s/3)===Math.floor(o.col/3),f=r===n.row||s===n.col||Math.floor(r/3)===Math.floor(n.row/3)&&Math.floor(s/3)===Math.floor(n.col/3);c&&f&&(t[`${r}-${s}`]||[]).includes(i)&&(a.push([r,s]),d.push(i),u.push({row:r,col:s,notesToRemove:[i]}))}a.length>0&&r.push({type:"yWing",description:"Y-Wing(XY-Wing)",anchorCell:[l.row,l.col],xzCell:[o.row,o.col],yzCell:[n.row,n.col],cells:[[l.row,l.col],[o.row,o.col],[n.row,n.col]],x:s,y:c,z:i,targetCells:a,targetCellsDetails:u,removableCandidates:d,message:`Y-Wing技巧：这是一个由三个双候选数单元格组成的特殊结构。锚点单元格(${l.row+1},${l.col+1})包含候选数[${s},${c}]，XZ单元格(${o.row+1},${o.col+1})包含候选数[${s},${i}]，YZ单元格(${n.row+1},${n.col+1})包含候选数[${c},${i}]。由于锚点单元格与XZ、YZ单元格分别共享候选数x和y，且XZ和YZ单元格都包含候选数z，因此可以确定在同时受XZ和YZ单元格影响的交叉单元格中，候选数z不可能存在，可以删除这些交叉单元格中的数字${i}候选数`})}}return r})(e,t),h=((e,t={})=>{const r=[];return(()=>{for(let o=1;o<=9;o++){const n=[];for(let r=0;r<9;r++){const i=[];for(let n=0;n<9;n++){if(0!==e[r][n])continue;const a=t[`${r}-${n}`]||[];$o(e,r,n,o)&&a.includes(o)&&i.push(n)}2!==i.length&&3!==i.length||n.push({row:r,cols:i})}for(let i=0;i<n.length-2;i++)for(let a=i+1;a<n.length-1;a++)for(let l=a+1;l<n.length;l++){const s=n[i],c=n[a],d=n[l],u=new Set(s.cols),f=new Set(c.cols),p=new Set(d.cols),h=new Set([...s.cols,...c.cols,...d.cols]);if(3===h.size&&[...h].every(e=>u.has(e)||f.has(e)||p.has(e))){const n=[],i=[],a=[],l=[...h];l.forEach(r=>{for(let l=0;l<9;l++)l!==s.row&&l!==c.row&&l!==d.row&&0===e[l][r]&&(t[`${l}-${r}`]||[]).includes(o)&&(n.push([l,r]),i.push(o),a.push({row:l,col:r,notesToRemove:[o]}))}),n.length>0&&r.push({type:"swordfishRow",description:"Swordfish(行)",number:o,cells:[...s.cols.map(e=>[s.row,e]),...c.cols.map(e=>[c.row,e]),...d.cols.map(e=>[d.row,e])],targetCells:n,targetCellsDetails:a,removableCandidates:i,message:`Swordfish技巧：在第${s.row+1}行、第${c.row+1}行和第${d.row+1}行中，数字${o}只出现在第${l.map(e=>e+1).join("、")}列中，形成一个三行三列的结构。由于这个数字在这三行中只能出现在相同的三列，因此可以确定该数字在这三列的其他行中不可能存在，可以删除第${l.map(e=>e+1).join("、")}列中除这三行外其他单元格的数字${o}候选数`})}}}})(),(()=>{for(let o=1;o<=9;o++){const n=[];for(let r=0;r<9;r++){const i=[];for(let n=0;n<9;n++){if(0!==e[n][r])continue;const a=t[`${n}-${r}`]||[];$o(e,n,r,o)&&a.includes(o)&&i.push(n)}2!==i.length&&3!==i.length||n.push({col:r,rows:i})}for(let i=0;i<n.length-2;i++)for(let a=i+1;a<n.length-1;a++)for(let l=a+1;l<n.length;l++){const s=n[i],c=n[a],d=n[l],u=new Set(s.rows),f=new Set(c.rows),p=new Set(d.rows),h=new Set([...s.rows,...c.rows,...d.rows]);if(3===h.size&&[...h].every(e=>u.has(e)||f.has(e)||p.has(e))){const n=[],i=[],a=[],l=[...h];l.forEach(r=>{for(let l=0;l<9;l++)l!==s.col&&l!==c.col&&l!==d.col&&0===e[r][l]&&(t[`${r}-${l}`]||[]).includes(o)&&(n.push([r,l]),i.push(o),a.push({row:r,col:l,notesToRemove:[o]}))}),n.length>0&&r.push({type:"swordfishCol",description:"Swordfish(列)",number:o,cells:[...s.rows.map(e=>[e,s.col]),...c.rows.map(e=>[e,c.col]),...d.rows.map(e=>[e,d.col])],targetCells:n,targetCellsDetails:a,removableCandidates:i,message:`Swordfish技巧：在第${s.col+1}列、第${c.col+1}列和第${d.col+1}列中，数字${o}只出现在第${l.map(e=>e+1).join("、")}行中，形成一个三行三列的结构。由于这个数字在这三列中只能出现在相同的三行，因此可以确定该数字在这三行的其他列中不可能存在，可以删除第${l.map(e=>e+1).join("、")}行中除这三列外其他单元格的数字${o}候选数`})}}}})(),r})(e,t),m=((e,t={})=>{const r=[],o=(e,t)=>{if(e.row===t.row)return!0;if(e.col===t.col)return!0;const r=Math.floor(e.row/3),o=Math.floor(e.col/3),n=Math.floor(t.row/3),i=Math.floor(t.col/3);return r===n&&o===i},n=(e,t)=>e.filter(e=>t.includes(e)),i=(()=>{const r=[];for(let o=0;o<9;o++)for(let n=0;n<9;n++){if(0!==e[o][n])continue;const i=t[`${o}-${n}`]||[];2===i.length&&r.push({row:o,col:n,notes:i})}return r})(),a=(()=>{const r=[];for(let o=0;o<9;o++)for(let n=0;n<9;n++){if(0!==e[o][n])continue;const i=t[`${o}-${n}`]||[];3===i.length&&r.push({row:o,col:n,notes:i})}return r})();for(let l=0;l<a.length;l++){const s=a[l],[c,d,u]=s.notes,f=[];for(let e=0;e<i.length;e++){const t=i[e];if(!o(s,t))continue;const r=n(s.notes,t.notes);r.length>=1&&f.push({...t,shared:r})}for(let n=0;n<f.length;n++)for(let i=n+1;i<f.length;i++){const a=f[n],l=f[i];if((a.row!==l.row||a.col!==l.col)&&a.shared.filter(e=>l.shared.includes(e)).includes(u)){const n=a.notes.includes(c)&&a.notes.includes(u)||a.notes.includes(d)&&a.notes.includes(u),i=l.notes.includes(c)&&l.notes.includes(u)||l.notes.includes(d)&&l.notes.includes(u);if(n&&i&&a.notes.includes(u)&&l.notes.includes(u)){const n=[],i=[],f=[];for(let r=0;r<9;r++)for(let c=0;c<9;c++){if(0!==e[r][c])continue;if(r===s.row&&c===s.col||r===a.row&&c===a.col||r===l.row&&c===l.col)continue;const d=o({row:r,col:c},a),p=o({row:r,col:c},l);d&&p&&(t[`${r}-${c}`]||[]).includes(u)&&(n.push([r,c]),i.push(u),f.push({row:r,col:c,notesToRemove:[u]}))}n.length>0&&r.push({type:"xyzWing",description:"XYZ-Wing",pivotCell:[s.row,s.col],xzCell:[a.row,a.col],yzCell:[l.row,l.col],cells:[[s.row,s.col],[a.row,a.col],[l.row,l.col]],x:c,y:d,z:u,common:u,targetCells:n,targetCellsDetails:f,removableCandidates:i,message:`XYZ-Wing技巧：这是一个由一个三候选数单元格和两个双候选数单元格组成的特殊结构。枢纽单元格(${s.row+1},${s.col+1})包含候选数[${c},${d},${u}]，XZ单元格(${a.row+1},${a.col+1})包含候选数[${a.notes.join(",")}],YZ单元格(${l.row+1},${l.col+1})包含候选数[${l.notes.join(",")}].由于枢纽单元格与XZ、YZ单元格分别共享候选数，且XZ和YZ单元格都包含候选数${u}，因此可以确定在同时受XZ和YZ单元格影响的交叉单元格中，候选数${u}不可能存在，可以删除这些交叉单元格中的数字${u}候选数`})}}}}return r})(e,t);const r=new Set,i=e=>{e.forEach(e=>{e.cells&&e.cells.forEach(([e,t])=>{r.add(`${e}-${t}`)})})};i(o),i(n)}const g=[...o,...n,...i];return r&&Object.keys(t).length>0&&(g.push(...a),g.push(...l),g.push(...s),g.push(...c),g.push(...d),g.push(...u),g.push(...f),g.push(...p),g.push(...h),g.push(...m)),g},Bo=e.createContext(),_o={EASY:"easy",MEDIUM:"medium",HARD:"hard",EXPERT:"expert"},Yo=({children:t})=>{const{userId:r,updateUserStats:o}=yo(),{t:n}=le(),[i,a]=e.useState(null),[l,s]=e.useState(null),[d,u]=e.useState(null),[f,p]=e.useState(null),[h,m]=e.useState(_o.MEDIUM),[g,x]=e.useState(!1),[y,b]=e.useState(!1),[w,C]=e.useState(0),[k,j]=e.useState(!1),[$,S]=e.useState(!1),[z,T]=e.useState(null),[A,P]=e.useState({}),[N,I]=e.useState([]),[R,E]=e.useState([]),[M,F]=e.useState([]),[L,W]=e.useState(-1),[O,D]=e.useState(0),[q,H]=e.useState(0),[B,_]=e.useState(new Set),[Y,G]=e.useState(!1),[U,X]=e.useState({}),[Z,V]=e.useState(new Set),[J,Q]=e.useState(!1);e.useEffect(()=>{(async()=>{S(!0),console.log("SudokuContext: 初始化自动生成谜题");try{X({}),F([]),W(-1),D(0),H(0),_(new Set),V(new Set),console.log("使用预设的数独题目");const e={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]};console.log("预设谜题数据:",e);const t=ie(e);console.log("格式化后的数据:",t),a(t),console.log("设置 currentPuzzle 完成"),u(t.puzzle),console.log("设置 originalPuzzle 完成"),s(t.puzzle),console.log("设置 currentBoard 完成，currentBoard:",t.puzzle),p(t.solution),console.log("设置 solution 完成"),x(!0),console.log("设置 gameStarted 为 true"),b(!1),j(!0),D(0),H(0),_(new Set),console.log("谜题初始化完成")}catch(e){console.error("自动初始化谜题失败:",e),console.error("错误详情:",e.message,e.stack)}finally{S(!1)}})()},[]),e.useEffect(()=>{if(i&&l&&g&&!y){const e=setTimeout(()=>{te()},3e4);return()=>clearTimeout(e)}},[l,g,y]),e.useEffect(()=>{let e;return k&&(e=setInterval(()=>{C(e=>e+1)},1e3)),()=>{e&&clearInterval(e)}},[k]);const ee=e.useCallback(async()=>{try{if(!r)return null;const e=(await c.keys()).filter(e=>e.startsWith(`progress_${r}_`));if(0===e.length)return null;let t=null,o=0;for(const r of e){const e=await c.getItem(r);e.lastModified>o&&(o=e.lastModified,t=e)}return t&&(a({id:t.puzzleId,puzzle:t.puzzle}),s(t.currentBoard),p(t.solution),m(t.difficulty),C(t.timeElapsed),x(t.gameStarted),b(t.gameCompleted),D(t.errorCount||0),H(t.errorCount||0),_(new Set(t.incorrectCells||[])),j(!1)),t}catch(e){return console.error("加载游戏进度失败:",e),null}},[r]),te=e.useCallback(async()=>{try{if(!r||!i||!l)return;const e={puzzleId:i.id,puzzle:i.puzzle,solution:f,difficulty:h,currentBoard:l,timeElapsed:w,gameStarted:g,gameCompleted:y,errorCount:q,incorrectCells:Array.from(B),lastModified:Date.now()};return await c.setItem(`progress_${r}_${i.id}`,e),!0}catch(e){return console.error("保存游戏进度失败:",e),!1}},[r,i,l,f,h,w,g,y,O,B]),re=()=>Array(9).fill().map(()=>Array(9).fill(0)),oe=async(e="medium")=>{try{console.log(`开始生成${e}难度的数独题目...`);const t=await Po(e);if(console.log("generateSudoku 返回结果:",t),!t||!t.puzzle||!t.solution)throw console.error("生成的数独数据不完整:",t),new Error("生成的数独数据不完整");const{puzzle:r,solution:o}=t;return zo(r)?(console.log(`成功生成${e}难度的数独题目，使用DLX算法验证了唯一解`),console.log("谜题数据预览:",r.slice(0,2).map(e=>e.slice(0,2).join(",")).join(";")),{puzzle:r,solution:o}):(console.warn("警告：生成的数独题目可能没有唯一解"),oe(e))}catch(t){return console.error(`生成${e}难度的数独题目时出错:`,t),await ne(e)}},ne=async(e="medium")=>{try{console.log(`使用备用方法生成${e}难度的数独题目...`);const{puzzle:t,solution:r}=await Po(e);return console.log(`备用方法成功生成${e}难度的数独题目`),{puzzle:t,solution:r}}catch(t){console.error("备用方法生成数独题目失败:",t);const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];return console.log("使用预设的简单数独题目作为最后的备用"),{puzzle:e,solution:r}}},ie=e=>{if(console.log("formatPuzzleData 输入:",e),e&&e.puzzle){if("string"==typeof e.puzzle&&81===e.puzzle.length){const t=[];for(let r=0;r<9;r++){t.push([]);for(let o=0;o<9;o++)t[r].push(parseInt(e.puzzle[9*r+o])||0)}return{puzzle:t,solution:e.solution&&"string"==typeof e.solution&&81===e.solution.length?(()=>{const t=[];for(let r=0;r<9;r++){t.push([]);for(let o=0;o<9;o++)t[r].push(parseInt(e.solution[9*r+o])||0)}return t})():t}}if(Array.isArray(e.puzzle)&&9===e.puzzle.length){const t=e.puzzle.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0));let r=t;return e.solution&&Array.isArray(e.solution)&&9===e.solution.length&&(r=e.solution.map(e=>Array.isArray(e)&&9===e.length?e:Array(9).fill(0))),console.log("formatPuzzleData 输出:",{puzzle:t,solution:r}),{puzzle:t,solution:r}}}console.warn("formatPuzzleData: 输入数据不完整或格式不正确，返回默认空数组",e);const t=Array(9).fill().map(()=>Array(9).fill(0));return{puzzle:t,solution:t}},ae=(e,t,r)=>!f||!f[e]||void 0===f[e][t]||f[e][t]===r,se=(e,t,r)=>{if(!g||y)return;if(d&&d[e]&&null!==d[e][t]&&0!==d[e][t])return void console.log("Cannot modify prefilled cell with notes:",e,t);const o=`${e}-${t}`,n={...U},i=M.slice(0,L+1);i.push({board:l,pencilNotes:{...U},row:e,col:t,type:"pencil"}),F(i),W(i.length-1),n[o]?n[o].includes(r)?(n[o]=n[o].filter(e=>e!==r),0===n[o].length&&delete n[o]):n[o]=[...new Set([...n[o],r])].sort((e,t)=>e-t):n[o]=[r],X(n)},ce=(e,t)=>{if(!g||y)return;const r=`${e}-${t}`;if(!U[r]||0===U[r].length)return;const o=M.slice(0,L+1);o.push({board:l,pencilNotes:{...U},row:e,col:t,type:"clear-pencil"}),F(o),W(o.length-1);const n={...U};delete n[r],X(n),console.log(`已清除单元格(${e+1},${t+1})的候选数标注`)},de=(e,t)=>{if(!g||y)return;const r=`${e}-${t}`;if(console.log("clearCandidates called for cell:",r),d&&d[e]&&0!==d[e][t])return void console.log("Cannot clear candidates for prefilled cell:",e,t);if(!U[r]||0===U[r].length)return void console.log("No candidates to clear in cell:",e,t);console.log("Clearing candidates:",U[r]);const o=M.slice(0,L+1);o.push({board:l,pencilNotes:{...U},row:e,col:t,type:"clear-candidates"}),F(o),W(o.length-1);const n={...U};delete n[r],X(n),console.log(`已清除单元格(${e+1},${t+1})的所有候选数`)},ue=(e,t,r,o=!1)=>{if(!g||y)return;const n=`${e}-${t}`;if(d&&d[e]&&null!==d[e][t]&&0!==d[e][t])return void console.log("Cannot modify prefilled cell:",e,t);if(Z.has(n))return void console.log("Cannot modify locked cell (correct answer):",e,t);if(Y&&!o)return void(0===r?ce(e,t):se(e,t,r));const i=[...l.map(e=>[...e])],a=ae(e,t,r);i[e][t]=r,s(i);const c={...U};if(0!==r&&c[n]&&delete c[n],0!==r&&a){for(let i=0;i<9;i++)if(i!==t){const t=`${e}-${i}`;c[t]&&(c[t]=c[t].filter(e=>e!==r),0===c[t].length&&delete c[t])}for(let i=0;i<9;i++)if(i!==e){const e=`${i}-${t}`;c[e]&&(c[e]=c[e].filter(e=>e!==r),0===c[e].length&&delete c[e])}const o=3*Math.floor(e/3),n=3*Math.floor(t/3);for(let i=o;i<o+3;i++)for(let o=n;o<n+3;o++)if(i!==e||o!==t){const e=`${i}-${o}`;c[e]&&(c[e]=c[e].filter(e=>e!==r),0===c[e].length&&delete c[e])}}X(c);const u=M.slice(0,L+1);u.push({board:l,pencilNotes:{...U},row:e,col:t,prevValue:l[e][t],type:"fill",isCorrectInput:0!==r&&a}),F(u),W(u.length-1);const f=new Set(B);if(0!==r)if(a){f.delete(n);const e=new Set(Z);e.add(n),V(e)}else B.has(n)||H(e=>e+1),f.add(n),K.error("输入错误，请重试！",{position:"top-right",autoClose:1e3,theme:"colored"});else f.delete(n);_(f),fe(i)},fe=e=>{if(f){for(let t=0;t<9;t++)for(let r=0;r<9;r++)if(!e[t][r]||e[t][r]!==f[t][r])return;b(!0),j(!1),_(new Set),o&&o({puzzlesCompleted:1,puzzlesSolved:1,totalTimePlayed:w}),K.success(n("gameCompletedMessage"),{position:"top-right",autoClose:3e3}),te(),setTimeout(()=>{window.dispatchEvent(new CustomEvent("openNewGameWindow"))},3e3)}},pe=e.useCallback(()=>{try{const e=U&&"object"==typeof U&&Object.keys(U).length>0,t=Ho(l,U,e);return E(t),t}catch(e){return console.error("识别技巧失败:",e),[]}},[l,U]),he=e.useCallback(e=>{const t=Y;let r=!1;const o=e.type&&("nakedSingle"===e.type||"notesSingle"===e.type||"hiddenSingleRow"===e.type||"hiddenSingleCol"===e.type||"hiddenSingleBox"===e.type);try{o&&t&&(G(!1),r=!0);const i=((e,t)=>{const r=t.map(e=>[...e]);switch(e.type){case"nakedSingle":case"notesSingle":case"hiddenSingleRow":case"hiddenSingleCol":case"hiddenSingleBox":if(void 0!==e.row&&void 0!==e.col&&void 0!==e.value)return r[e.row][e.col]=e.value,{board:r,operation:{type:"fill",row:e.row,col:e.col,value:e.value}};break;case"nakedPairRow":case"nakedPairCol":case"nakedPairBox":case"hiddenPairRow":case"hiddenPairCol":case"hiddenPairBox":case"nakedTripleRow":case"nakedTripleCol":case"nakedTripleBox":case"hiddenTripleRow":case"hiddenTripleCol":case"hiddenTripleBox":case"pointingPairsRow":case"pointingPairsCol":case"boxLineReductionRow":case"boxLineReductionCol":case"swordfishRow":case"swordfishCol":case"xyzWing":return{board:r,operation:{type:"highlight",cells:e.cells||e.sourceCells,targetCells:e.targetCells,values:e.values||[e.number],removableCandidates:e.removableCandidates}};default:return console.warn("未知的技巧类型:",e.type),{board:r,operation:null}}return{board:r,operation:null}})(e,l);if(i&&i.board){const t=i.operation;if(t&&"fill"===t.type&&"number"==typeof t.row&&"number"==typeof t.col&&"number"==typeof t.value){const{row:e,col:r,value:o}=t;return ue(e,r,o,!0),!0}if(t&&"removeCandidates"===t.type&&Array.isArray(t.cells)){const r={...A};return t.cells.forEach(e=>{if("number"==typeof e.row&&"number"==typeof e.col&&Array.isArray(e.valuesToRemove)){const t=`${e.row}-${e.col}`,o=(A[t]||[]).filter(t=>!e.valuesToRemove.includes(t));r[t]=o}}),P(r),console.log("成功移除候选数:",e.type),K.success(n("candidatesRemovedSuccess",{defaultMessage:"候选数已成功移除"}),{position:"top-right",autoClose:2e3}),!0}return t&&"highlight"===t.type?(console.log("技巧应用成功（高亮提示）:",e.type),e.type&&(e.type.includes("Pair")||e.type.includes("pair"))?K.success(n("pairTechniqueIdentified",{defaultMessage:"数对技巧已识别，建议手动移除相关候选数"}),{position:"top-right",autoClose:3e3}):K.success(n("pairTechniqueIdentified",{defaultMessage:"技巧已识别，建议手动移除相关候选数"}),{position:"top-right",autoClose:3e3}),!0):(console.warn("无法应用技巧：操作信息不完整或类型不支持",t),K.info(n("techniqueOnlyForHint",{defaultMessage:"此技巧主要用于提示，暂不支持自动应用"}),{position:"top-right",autoClose:2e3}),!1)}return!1}catch(i){return console.error("应用技巧失败:",i),K.error(n("techniqueApplyFailed",{defaultMessage:"应用技巧失败，请重试"}),{position:"top-right",autoClose:2e3}),r&&G(!0),!1}finally{r&&G(!0)}},[ue,l,Y,A,P,G]),me=(e,t)=>{if(!l)return[];const r=[];for(let o=1;o<=9;o++)ge(e,t,o)&&r.push(o);return r.sort((e,t)=>e-t)},ge=(e,t,r)=>{if(!l)return!1;for(let i=0;i<9;i++)if(l[e][i]===r)return!1;for(let i=0;i<9;i++)if(l[i][t]===r)return!1;const o=3*Math.floor(e/3),n=3*Math.floor(t/3);for(let i=o;i<o+3;i++)for(let e=n;e<n+3;e++)if(l[i][e]===r)return!1;return!0},xe={currentPuzzle:i,currentBoard:l||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:d,solution:f||Array(9).fill().map(()=>Array(9).fill(0)),difficulty:h,gameStarted:g,gameCompleted:y,timeElapsed:w,timerActive:k,isTimerActive:k,isLoading:$,selectedCell:z,candidates:A,highlightedCells:N,activeTechniques:R,lockedCells:Z,history:M,historyIndex:L,errorCount:q,incorrectCells:B,isPencilMode:Y,pencilNotes:U,setDifficulty:m,setSelectedCell:T,setHighlightedCells:I,setTimerActive:j,toggleTimer:()=>{j(e=>!e)},togglePencilMode:()=>{G(e=>!e)},togglePencilNote:se,clearPencilNotes:ce,clearCandidates:de,fillAllCandidates:()=>{if(!g||y||!l)return;const e=M.slice(0,L+1);e.push({board:l,pencilNotes:{...U},type:"fill-candidates"}),F(e),W(e.length-1);const t={};for(let r=0;r<9;r++)for(let e=0;e<9;e++){if(d&&d[r]&&0!==d[r][e]||l[r]&&0!==l[r][e])continue;const o=me(r,e);o.length>0&&(t[`${r}-${e}`]=o)}return X(t),K.info(n("candidatesFilled",{defaultMessage:"已为所有空白格子计算并填充候选数！"}),{position:"top-right",autoClose:2e3}),!0},fillSelectedCellCandidates:(e,t)=>{if(!g||y||!l||void 0===e||void 0===t)return;if(0!==l[e][t])return void K.info(n("cellNotEmpty",{defaultMessage:"该单元格已有数字，无法填充候选数"}),{position:"top-right",autoClose:2e3});if(d&&d[e]&&0!==d[e][t])return void K.info(n("cellPrefilled",{defaultMessage:"该单元格为预填数字，无法填充候选数"}),{position:"top-right",autoClose:2e3});const r=M.slice(0,L+1);r.push({board:l,pencilNotes:{...U},type:"fill-cell-candidates"}),F(r),W(r.length-1);const o=me(e,t),i={...U};return o.length>0?i[`${e}-${t}`]=o:delete i[`${e}-${t}`],X(i),K.info(n("cellCandidatesFilled",{row:e+1,col:t+1,defaultMessage:`已为单元格(${e+1},${t+1})计算并填充候选数！`}),{position:"top-right",autoClose:2e3}),o},calculateTechniques:()=>{if(!g||y||!l)return;let e=!1;for(let r=0;r<9;r++){for(let t=0;t<9;t++){if(d&&d[r]&&0!==d[r][t]||l[r]&&0!==l[r][t])continue;const o=`${r}-${t}`;if(!(U[o]&&U[o].length>0)){e=!0;break}}if(e)break}if(e)return K.info(n("emptyCandidateCellsFound",{defaultMessage:"发现无候选数的空白单元格，重新计算候选数..."}),{position:"top-right",autoClose:2e3}),!0;let t=!1;if(f)for(let r=0;r<9;r++){for(let e=0;e<9;e++){if(d&&d[r]&&0!==d[r][e]||l[r]&&0!==l[r][e])continue;const o=U[`${r}-${e}`]||[],n=f[r][e];if(!o.includes(n)){t=!0;break}}if(t)break}return t?(K.error(n("candidateErrorDetected",{defaultMessage:"存在候选数删减错误，数据刷新"}),{position:"top-right",autoClose:3e3}),!0):(K.info(n("candidatesComplete",{defaultMessage:"候选数正确完整，直接计算技巧机会！"}),{position:"top-right",autoClose:2e3}),!1)},loadSavedProgress:ee,saveGameProgress:te,startNewGame:async(e=null,t=null,r=!0)=>{console.log("SudokuContext: 开始新游戏",{puzzleId:e,difficultyOverride:t});try{x(!1),s(re()),X({}),G(!1),P({}),E([]),I([]),T(null),j(!1),C(0),b(!1),F([]),W(-1),D(0),H(0),_(new Set),V(new Set),Q(!1),await new Promise(e=>setTimeout(e,50)),x(!0),await new Promise(e=>setTimeout(e,50));const e=t||h;let n;console.log("使用难度:",e),e!==h&&m(e);let c=0;const d=3;let f=!1;for(;!n&&c<d;){c++,console.log(`尝试生成谜题 (${c}/${d})`);try{if(e===_o.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const e=await Mo();e&&e.puzzle&&e.solution?(n=e,f=!0,console.log("成功从JSON文件获取专家级谜题")):console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成")}catch(i){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",i)}}n||(console.log("使用程序生成谜题"),n=await oe(e))}catch(l){console.error(`生成谜题失败 (尝试 ${c}/${d}):`,l)}}if(!n){console.error("多次尝试生成谜题失败，使用备用谜题");n={puzzle:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],solution:[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]}}const g=ie(n);if(console.log("谜题数据准备完成，formattedData:",g),!g||!g.puzzle||!Array.isArray(g.puzzle)||9!==g.puzzle.length){console.error("格式化后的数据无效，使用备用谜题");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];g.puzzle=e,g.solution=t}return a(g),console.log("设置 currentPuzzle 完成"),u(g.puzzle),console.log("设置 originalPuzzle 完成"),s(g.puzzle),console.log("设置 currentBoard 完成"),p(g.solution),console.log("设置 solution 完成"),x(!0),b(!1),C(0),j(!0),F([]),W(-1),o&&o({puzzlesStarted:1}),r&&(e===_o.EXPERT?K.success(f?"Expert puzzle loaded!":"Expert puzzle generated!",{position:"top-right",autoClose:2e3}):r&&K.success("New puzzle generated!",{position:"top-right",autoClose:2e3})),console.log("新游戏设置完成"),g}catch(c){console.error("开始新游戏失败:",c);try{const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],o={puzzle:e,solution:t};return a(o),u(e),s(e),p(t),x(!0),b(!1),j(!0),r&&K.success("Backup puzzle used!",{position:"top-right",autoClose:2e3}),o}catch(d){console.error("使用备用谜题也失败:",d),r&&K.error(n("generatePuzzleFailedRefresh"),{position:"top-right",autoClose:2e3})}return null}},generateNewPuzzle:async(e=h,t=!0)=>{console.log("SudokuContext: 生成新谜题",{targetDifficulty:e});try{let t;if(s(re()),X({}),G(!1),P({}),E([]),I([]),j(!1),C(0),b(!1),F([]),W(-1),D(0),H(0),_(new Set),V(new Set),Q(!1),x(!0),await new Promise(e=>setTimeout(e,50)),e!==h&&(m(e),console.log("已设置新难度:",e)),e===_o.EXPERT){console.log("专家难度：尝试从JSON文件获取谜题");try{const r=await Mo();r&&r.puzzle&&r.solution?(t=r,console.log("成功从JSON文件获取专家级谜题")):(console.warn("从JSON文件获取的谜题数据不完整，回退到程序生成"),t=await oe(e))}catch(r){console.warn("从JSON文件获取专家级谜题失败，回退到程序生成:",r),t=await oe(e)}}else console.log("非专家难度：使用程序生成谜题"),t=await oe(e);const n=ie(t);return console.log("谜题数据准备完成，formattedData:",n),console.log("puzzleData.puzzle 是否存在:",!!n.puzzle),n.puzzle&&(console.log("puzzle 类型:",Array.isArray(n.puzzle)?"数组":typeof n.puzzle),console.log("puzzle 长度:",Array.isArray(n.puzzle)?n.puzzle.length:"不是数组"),Array.isArray(n.puzzle)&&n.puzzle.length>0&&console.log("puzzle 第一行:",n.puzzle[0])),a(n),console.log("设置 currentPuzzle 完成"),u(n.puzzle),console.log("设置 originalPuzzle 完成"),s(n.puzzle),console.log("设置 currentBoard 完成"),p(n.solution),console.log("设置 solution 完成"),x(!0),b(!1),C(0),j(!0),F([]),W(-1),o&&o({puzzlesStarted:1}),K.success("New puzzle generated!",{position:"top-right",autoClose:2e3}),console.log("新谜题设置完成"),n}catch(i){return console.error("生成新谜题失败:",i),t&&K.error(n("generatePuzzleFailed"),{position:"top-right",autoClose:2e3}),null}},fillCell:ue,clearCell:(e,t)=>{if(!g||y)return;const r=`${e}-${t}`;if(d&&d[e]&&0!==d[e][t])return void console.log("Cannot clear prefilled cell:",e,t);if(Z.has(r))return void console.log("Cannot clear locked cell (correct answer):",e,t);const o=M.slice(0,L+1);if(o.push({board:l,pencilNotes:{...U},row:e,col:t,prevValue:l[e][t],type:"clear"}),F(o),W(o.length-1),Y){console.log("铅笔模式：尝试清除单元格",e,t);const r=`${e}-${t}`;if(console.log("候选数状态:",U[r]),U[r]&&U[r].length>0)console.log("清除候选数标注"),de(e,t);else if(console.log("没有候选数标注，检查是否有数字"),0!==l[e][t]){console.log("清除数字内容");const o=[...l.map(e=>[...e])];o[e][t]=0,s(o);const n=new Set(B);n.delete(r),_(n),D(n.size);const i=new Set(Z);i.delete(r),V(i)}else console.log("单元格既没有候选数也没有数字");return}const n=[...l.map(e=>[...e])];n[e][t]=0,s(n),U[r]&&U[r].length>0&&(console.log("普通模式：清除候选数标注"),de(e,t));const i=new Set(B);i.delete(r),_(i),D(i.size);const a=new Set(Z);a.delete(r),V(a)},undo:()=>{if(L>=0){const e=M[L];s(e.board),e.pencilNotes&&X(e.pencilNotes),W(L-1),b(!1);const t=new Set;for(let o=0;o<9;o++)for(let r=0;r<9;r++){const n=e.board[o][r];0!==n&&f&&n!==f[o][r]&&t.add(`${o}-${r}`)}_(t);const r=new Set;for(let o=0;o<9;o++)for(let t=0;t<9;t++){const n=e.board[o][t];0!==n&&f&&n===f[o][t]&&r.add(`${o}-${t}`)}V(r)}else console.log("没有可撤销的操作")},redo:()=>{if(L<M.length-1){const e=M[L+1];s(e.board),e.pencilNotes&&X(e.pencilNotes),W(L+1);const t=new Set;for(let o=0;o<9;o++)for(let r=0;r<9;r++){const n=e.board[o][r];0!==n&&f&&n!==f[o][r]&&t.add(`${o}-${r}`)}_(t);const r=new Set;for(let o=0;o<9;o++)for(let t=0;t<9;t++){const n=e.board[o][t];0!==n&&f&&n===f[o][t]&&r.add(`${o}-${t}`)}V(r),fe(e.board)}},getCandidates:async(e,t)=>{try{const r=await vo.getCandidates(l,e,t);return P(r.candidates),r.candidates}catch(r){return console.error("获取候选数失败:",r),[]}},identifyTechniques:pe,applyTechniqueToBoard:he,getHint:async()=>{try{return await vo.getHint(l,f)}catch(e){return console.error("获取提示失败:",e),K.error("获取提示失败，请重试",{position:"top-right",autoClose:2e3}),null}},validateCellInput:ae};return v.jsx(Bo.Provider,{value:xe,children:t})},Go=()=>{const t=e.useContext(Bo);if(!t)throw new Error("useSudoku must be used within a SudokuContextProvider");return t},Uo=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0;
  @media (max-width: 640px) {
    gap: 30px;
    padding: 10px 0;
  }
`,Xo=Hr.section`
  text-align: center;
  padding: 40px 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    padding: 30px 15px;
  }
`,Zo=Hr.h1`
  font-size: 42px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`,Vo=Hr.p`
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
`,Jo=Hr.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`,Ko=Hr(i)`
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
`,Qo=Hr(i)`
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
`,en=Hr.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  @media (max-width: 640px) {
    gap: 20px;
  }
`,tn=Hr.div`
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
`,rn=Hr.div`
  font-size: 48px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  display: flex;
  justify-content: center;
`,on=Hr.h3`
  font-size: 22px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`,nn=Hr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  line-height: 1.6;
  margin: 0;
  text-align: center;
`,an=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,ln=Hr.h2`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 26px;
  }
`,sn=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`,cn=Hr.button`
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
`,dn=Hr.button`
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
`,un=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,fn=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`,pn=Hr.div`
  text-align: center;
  padding: 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 8px;
`,hn=Hr.div`
  font-size: 36px;
  font-weight: bold;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#4a6cf7"}};
  margin-bottom: 10px;
  @media (max-width: 640px) {
    font-size: 30px;
  }
`,mn=Hr.div`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
`,gn=()=>{oe();const{userStats:e}=yo(),{setDifficulty:t,startNewGame:r}=Go(),{executeWithLoading:i,isLoading:a}=de(),l=n(),[s,c]=o.useState(_o.MEDIUM),d=e=>{c(e)};return v.jsxs(Uo,{children:[v.jsxs(Xo,{children:[v.jsx(Zo,{children:"欢迎来到数独学习应用"}),v.jsx(Vo,{children:"提升您的数独技能，学习从基础到高级的解题技巧。适合各级别玩家，让您的数独之旅更加精彩！"}),v.jsxs(Jo,{children:[v.jsx(Ko,{to:"/game",children:"开始游戏"}),v.jsx(Qo,{to:"/techniques",children:"学习技巧"})]})]}),v.jsxs(en,{children:[v.jsxs(tn,{children:[v.jsx(rn,{children:"🧠"}),v.jsx(on,{children:"多种难度"}),v.jsx(nn,{children:"从简单到专家级别的数独谜题，适合不同水平的玩家，循序渐进提升您的技能。"})]}),v.jsxs(tn,{children:[v.jsx(rn,{children:"💡"}),v.jsx(on,{children:"技巧学习"}),v.jsx(nn,{children:"详细的解题技巧讲解，从唯一候选数到高级技巧，帮助您掌握数独的精髓。"})]}),v.jsxs(tn,{children:[v.jsx(rn,{children:"📊"}),v.jsx(on,{children:"进度追踪"}),v.jsx(nn,{children:"记录您的游戏进度和技巧掌握情况，分析您的表现，持续进步。"})]}),v.jsxs(tn,{children:[v.jsx(rn,{children:"🎯"}),v.jsx(on,{children:"实时提示"}),v.jsx(nn,{children:"遇到困难时获得智能提示，帮助您理解下一步的解题思路和技巧应用。"})]})]}),v.jsxs(an,{children:[v.jsx(ln,{children:"快速开始"}),v.jsxs(sn,{children:[v.jsx(cn,{selected:s===_o.EASY,onClick:()=>d(_o.EASY),children:"简单"}),v.jsx(cn,{selected:s===_o.MEDIUM,onClick:()=>d(_o.MEDIUM),children:"中等"}),v.jsx(cn,{selected:s===_o.HARD,onClick:()=>d(_o.HARD),children:"困难"}),v.jsx(cn,{selected:s===_o.EXPERT,onClick:()=>d(_o.EXPERT),children:"专家"})]}),v.jsx(dn,{onClick:async()=>{t(s);const e=await i(()=>r(null,s),"准备游戏中...");e&&l(`/game/${e.id}`)},disabled:a,children:a?v.jsx(uo,{showMessage:!1}):"开始游戏"})]}),v.jsxs(un,{children:[v.jsx(ln,{children:"您的进度"}),v.jsxs(fn,{children:[v.jsxs(pn,{children:[v.jsx(hn,{children:e.puzzlesStarted}),v.jsx(mn,{children:"开始的谜题"})]}),v.jsxs(pn,{children:[v.jsx(hn,{children:e.puzzlesCompleted}),v.jsx(mn,{children:"完成的谜题"})]}),v.jsxs(pn,{children:[v.jsx(hn,{children:e.puzzlesSolved}),v.jsx(mn,{children:"独立解决"})]}),v.jsxs(pn,{children:[v.jsx(hn,{children:Math.floor(e.totalTimePlayed/60)}),v.jsx(mn,{children:"游戏分钟"})]})]})]})]})},xn=Hr.div.attrs({className:"sudoku-board"})`
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
`,yn=Hr.div`
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
`,bn=({notes:e=[],highlightedNumber:t=null,selected:r=!1})=>{const o=Array.isArray(e)?e:[],n={display:"flex",alignItems:"center",justifyContent:"center",fontSize:"calc(var(--board-width) * 0.025)",fontWeight:"500",color:r?"#ffffff":"#4A6FA5",padding:"1px"},i={backgroundColor:"#42a5f5",color:"white",borderRadius:"4px",fontWeight:"bold",width:"80%",height:"80%",margin:"auto",display:"flex",alignItems:"center",justifyContent:"center",padding:"0"};return v.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr",width:"100%",height:"100%",boxSizing:"border-box"},children:[1,2,3,4,5,6,7,8,9].map(e=>{const r=(e-1)%3,a=Math.floor((e-1)/3),l=o.includes(e),s=t&&e===t;return v.jsx("div",{style:{...n,gridColumn:r+1,gridRow:a+1,paddingTop:0===a?"2px":"1px",paddingBottom:2===a?window.innerHeight>window.innerWidth?"3px":"2px":"1px",paddingLeft:0===r?"2px":"1px",paddingRight:2===r?"2px":"1px",...l&&s&&i,opacity:l?1:0},children:l&&e},e)})})},vn=({board:e,selectedCell:t,onCellClick:r,originalPuzzle:o,isPencilMode:n,pencilNotes:i,incorrectCells:a,highlightedCells:l})=>{const{theme:s}=oe(),c=e||Array(9).fill().map(()=>Array(9).fill(0)),d=o||Array(9).fill().map(()=>Array(9).fill(0)),u=i||{},f=a||new Set,p=(e,t)=>3*Math.floor(e/3)+Math.floor(t/3),h=(e,r,o)=>{const i=[];if(u[`${e}-${r}`],((e,t,r)=>!(!d||!d[t]||null===d[t][r]||0===d[t][r]))(0,e,r)&&i.push("prefilled"),((e=>"error"===e)(o)||((e,t)=>{const r=`${e}-${t}`;return f instanceof Set?f.has(r):!!Array.isArray(f)&&f.some(r=>r.row===e&&r.col===t)})(e,r))&&i.push("error"),!t&&l&&Array.isArray(l)){l.some(t=>t.row===e&&t.col===r)&&i.push("highlighted")}if(t&&t.row===e&&t.col===r)i.push("selected"),i.push(n?"pencil-selected":"normal-selected");else if(t){const n=c[t.row][t.col],l=`${t.row}-${t.col}`;u[l],o&&o===n&&i.push("same-number"),a=e,s=r,h=t.row,m=t.col,(a===h||s===m||p(a,s)===p(h,m))&&i.push("same-region")}var a,s,h,m;return i.join(" ")};return v.jsx(xn,{theme:s,children:c.map((e,o)=>e.map((e,n)=>{const i=h(o,n,e),a=`${o}-${n}`,d=u[a]||[],f=d.length>0;let p=null;if(t&&void 0!==t.row&&void 0!==t.col&&c[t.row]&&c[t.row][t.col]){const e=c[t.row][t.col];0!==e&&"error"!==e&&(p=e)}if(!p&&l&&Array.isArray(l)&&l.length>0){const e=l.find(e=>e.number&&0!==e.number&&"error"!==e.number);if(e)p=e.number;else{const e=l[0];e&&e.number&&0!==e.number&&"error"!==e.number&&(p=e.number)}}const m=e=>((e,t,o)=>{o&&(o.stopPropagation(),"touchstart"===o.type&&o.preventDefault()),r&&r(e,t)})(o,n,e);return v.jsx(yn,{row:o,col:n,className:i,onClick:m,onTouchStart:m,onMouseDown:m,style:{touchAction:"manipulation",userSelect:"none"},theme:s,children:e&&0!==e&&"error"!==e?e:f?v.jsx(bn,{notes:d,highlightedNumber:p,selected:t&&t.row===o&&t.col===n}):""},a)}))})},wn=()=>v.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"white",children:[v.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",stroke:"white",strokeWidth:"1.5",fill:"transparent"}),v.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"white",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"white",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",fill:"white",children:"2"}),v.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",fill:"white",children:"5"})]}),Cn=({onNumberSelect:t,onClearCell:r,onUndo:o,togglePencilMode:n,fillAllCandidates:i,calculateTechniques:a,selectedNumber:l,isPencilMode:s,remainingNumbers:c={}})=>{const d=()=>window.innerHeight>window.innerWidth,[u,f]=e.useState(d());e.useEffect(()=>{const e=()=>{f(d())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),oe();const{t:p}=le(),{mode:h}=e.useContext(ue),[m,g]=e.useState("keyboard"),[x,y]=e.useState(null),[b,w]=e.useState(0),C=Go(),{identifyTechniques:k,applyTechniqueToBoard:j,gameStarted:$,currentBoard:S,setHighlightedCells:z,setSelectedCell:T,selectedCell:A}=C||{},P=e.useCallback(()=>{g("keyboard"),z&&z([]),y(null),w(0)},[z]);e.useEffect(()=>{A&&P()},[A,P]);const[N,I]=e.useState([]),[R,E]=e.useState([]);e.useEffect(()=>{g("keyboard"),y(null),E([]),I([]),w(0),z&&z([])},[$,S]),e.useEffect(()=>{"learning"!==h&&(g("keyboard"),y(null),E([]),I([]),w(0),z&&z([]))},[h]);const M=e.useCallback(()=>{if(k&&S)try{const e=k();I(e||[])}catch(e){console.error("查找技巧失败:",e),I([])}else I([])},[k,S]);e.useEffect(()=>{"techniques"===m&&$&&S&&M()},[m,M,$,S]),e.useEffect(()=>{I([])},[$]);return v.jsxs("div",{className:"control-panel",style:{backgroundColor:"#ffffff",borderRadius:"var(--border-radius, 8px)",padding:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.12)",display:"flex",flexDirection:"column",fontFamily:"Arial, Microsoft YaHei, sans-serif",margin:0,boxSizing:"border-box",border:"1px solid #e0e0e0",position:"relative",height:u?"auto":"var(--board-width)",maxHeight:u?"400px":"var(--board-width)",minHeight:u?"200px":"var(--board-width)",overflow:"hidden",outline:"none",WebkitTapHighlightColor:"transparent"},children:[v.jsx("h3",{style:{display:"none"},children:"控制面板"}),v.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,margin:0,minHeight:0,overflow:"hidden"},children:[v.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #e0e0e0",marginBottom:"8px",paddingBottom:0},children:[v.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"keyboard"===m?"#3498db15":"transparent",border:"none",borderRadius:"4px 4px 0 0",color:"keyboard"===m?"#3498db":"#7f8c8d",cursor:"pointer",outline:"none",WebkitTapHighlightColor:"transparent",transition:"background-color 0.3s, color 0.3s"},onClick:()=>{g("keyboard"),T&&T(null)},children:p("keyboard")}),"learning"===h&&v.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"techniques"===m?"#3498db15":"transparent",border:"none",borderRadius:"4px 4px 0 0",color:"techniques"===m?"#3498db":"#7f8c8d",cursor:"pointer",outline:"none",WebkitTapHighlightColor:"transparent",transition:"background-color 0.3s, color 0.3s"},onClick:()=>{g("techniques"),T&&T(null)},children:p("techniques")}),"learning"===h&&v.jsx("button",{style:{flex:1,padding:"4px 8px",backgroundColor:"solution"===m?"#3498db15":"transparent",border:"none",borderRadius:"6px 6px 0 0",fontSize:"14px",fontWeight:"solution"===m?"700":"500",color:"solution"===m?"#3498db":"#7f8c8d",cursor:"pointer",margin:"0 2px",boxSizing:"border-box",minHeight:"32px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>{g("solution"),T&&T(null),s&&n&&n()},children:p("solutionTab")})]}),v.jsxs("div",{style:{flex:1,padding:"4px 0",overflow:"visible",position:"relative",display:"flex",flexDirection:"column",minHeight:0},children:["keyboard"===m&&v.jsx(v.Fragment,{children:window.innerWidth<=768?v.jsxs(v.Fragment,{children:[v.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"4px",marginBottom:"8px",padding:"0 2px"},children:[1,2,3,4,5,6].map(e=>{const r=c.hasOwnProperty(e)?c[e]:9,o=0===r;return v.jsxs("button",{className:"number-button",disabled:o,onClick:r=>{r.stopPropagation(),!o&&t(e)},style:{position:"relative",backgroundColor:l===e||s?"#3498db":"#ffffff",color:l===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:o?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[v.jsx("span",{style:{fontSize:"clamp(40px, 12vw, 80px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),v.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",backgroundColor:"transparent",color:l===e||s?"white":"#3498db",fontSize:"14px",fontWeight:"bold",padding:"1px 4px",borderRadius:"8px",minWidth:"16px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)})}),v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"4px",padding:"0 2px"},children:[[7,8,9].map(e=>{const r=c.hasOwnProperty(e)?c[e]:9,o=0===r;return v.jsxs("button",{className:"number-button",disabled:o,onClick:r=>{r.stopPropagation(),!o&&t(e)},style:{position:"relative",backgroundColor:l===e||s?"#3498db":"#ffffff",color:l===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:o?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[v.jsx("span",{style:{fontSize:"clamp(40px, 12vw, 80px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),v.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",backgroundColor:"transparent",color:l===e||s?"white":"#3498db",fontSize:"14px",fontWeight:"bold",padding:"1px 4px",borderRadius:"8px",minWidth:"16px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)}),v.jsx("button",{onClick:e=>{e.stopPropagation(),o()},title:p("undoAction"),style:{position:"relative",backgroundColor:"#ffffff",color:"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"60px !important",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 7v6h6"}),v.jsx("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})},"undo"),v.jsx("button",{onClick:e=>{e.stopPropagation(),A?r():alert("请先选择一个单元格")},title:p("clearCell"),style:{position:"relative",backgroundColor:"#ff4444",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"24px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsxs("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 6h18"}),v.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),v.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),v.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),v.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})},"clear"),v.jsx("button",{onClick:e=>{e.stopPropagation(),n()},title:p(s?"exitPencilMode":"enterPencilMode"),style:{position:"relative",backgroundColor:s?"#3498db":"#ffffff",color:s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"8px",fontSize:"24px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})},"pencil")]})]}):v.jsxs("div",{className:"number-pad",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"6px",width:"100%",maxHeight:"100%",overflow:"visible",padding:"4px",boxSizing:"border-box",marginTop:"-10px"},children:[[1,2,3,4,5,6,7,8,9].map(e=>{const r=c.hasOwnProperty(e)?c[e]:9,o=0===r;return v.jsxs("button",{className:"number-button",disabled:o,onClick:r=>{r.stopPropagation(),!o&&t(e)},style:{position:"relative",backgroundColor:l===e||s?"#3498db":"#ffffff",color:l===e||s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"400",lineHeight:"1",cursor:o?"not-allowed":"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",fontSize:"0",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:[v.jsx("span",{style:{fontSize:"clamp(30px, 8vw, 70px)",fontWeight:"400",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",height:"100%",boxSizing:"border-box"},children:e}),v.jsx("span",{style:{position:"absolute",top:"4px",right:"4px",backgroundColor:"transparent",color:l===e||s?"white":"#3498db",fontSize:"16px",fontWeight:"bold",padding:"2px 6px",borderRadius:"10px",minWidth:"20px",textAlign:"center",display:s||0===r?"none":"inline-block"},children:r})]},e)}),v.jsx("button",{onClick:e=>{e.stopPropagation(),o()},title:p("undoAction"),style:{position:"relative",backgroundColor:"#ffffff",color:"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 7v6h6"}),v.jsx("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})},"undo"),v.jsx("button",{onClick:e=>{e.stopPropagation(),A?r():alert("请先选择一个单元格")},title:p("clearCell"),style:{position:"relative",backgroundColor:"#ff4444",color:"white",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsxs("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 6h18"}),v.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),v.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),v.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),v.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})},"clear"),v.jsx("button",{onClick:e=>{e.stopPropagation(),n()},title:p(s?"exitPencilMode":"enterPencilMode"),style:{position:"relative",backgroundColor:s?"#3498db":"#ffffff",color:s?"white":"#3498db",border:"none",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontWeight:"600",lineHeight:"1.2",cursor:"pointer",boxSizing:"border-box",width:"100%",aspectRatio:"1",minHeight:"60px",maxHeight:"150px",overflow:"visible",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})},"pencil")]})}),"techniques"===m&&"learning"===h&&v.jsxs("div",{style:{overflowY:"auto",padding:"4px 8px 8px 8px"},children:[0===N.length?v.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#7f8c8d",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:p("noTechniquesAvailable")}):v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px"},children:N.map((e,t)=>{let r="",o="";if("number"==typeof e.row&&"number"==typeof e.col){r=`(${e.row+1},${e.col+1})`,o=void 0!==e.value?` ${p("number")}: ${e.value}`:""}else if(Array.isArray(e.cells)&&e.cells.length>0){if(1===e.cells.length&&Array.isArray(e.cells[0])){r=`(${e.cells[0][0]+1},${e.cells[0][1]+1})`}else r=p("multipleCells");Array.isArray(e.values)&&e.values.length>0&&(o=` ${p("number")}: [${e.values.join(",")}]`)}else if(e.type.includes("pointingPairs")&&Array.isArray(e.sourceCells)&&e.sourceCells.length>0){if(e.sourceCells.length>0){const t=e.sourceCells[0];if(Array.isArray(t)&&t.length>=2){r=`(${t[0]+1},${t[1]+1})`}else if(t&&"object"==typeof t){r=`(${(void 0!==t.row?t.row:t[0])+1},${(void 0!==t.col?t.col:t[1])+1})`}else r=p("multipleCells")}else r=p("multipleCells");void 0!==e.number&&(o=` ${p("number")}: ${e.number}`)}else if(e.type.includes("pointingPairs")){if(void 0!==e.boxRow&&void 0!==e.boxCol){const t=3*e.boxRow+e.boxCol+1;r=`${p("box")} ${t}`}else r=p("multipleCells");void 0!==e.number&&(o=` ${p("number")}: ${e.number}`)}else if(e.type.includes("boxLineReduction")&&Array.isArray(e.sourceCells)&&e.sourceCells.length>0){if(e.sourceCells.length>0){const t=e.sourceCells[0];if(Array.isArray(t)&&t.length>=2){r=`(${t[0]+1},${t[1]+1})`}else if(t&&"object"==typeof t){r=`(${(void 0!==t.row?t.row:t[0])+1},${(void 0!==t.col?t.col:t[1])+1})`}else r=p("multipleCells")}else r=p("multipleCells");void 0!==e.number&&(o=` ${p("number")}: ${e.number}`)}else if(e.type.includes("boxLineReduction")){if(void 0!==e.boxRow&&void 0!==e.boxCol){const t=3*e.boxRow+e.boxCol+1;r=`${p("box")} ${t}`}else r=p("multipleCells");void 0!==e.number&&(o=` ${p("number")}: ${e.number}`)}else r=p("unknownPosition");let n="",i="";const a=["X-Wing","Y-Wing","XY-Wing","XYZ-Wing","Swordfish","Jellyfish"];if("nakedSingle"===e.type||"naked_single"===e.type)n=p("nakedSingleTechnique");else if("notesSingle"===e.type||"singleCandidateTechnique"===e.type)n=p("notesSingleTechnique");else if(e.type.includes("hidden_single")||e.type.includes("hiddenSingle"))e.type.includes("row")||e.type.includes("Row")?n=p("hiddenSingleRow"):e.type.includes("col")||e.type.includes("Col")?n=p("hiddenSingleCol"):(e.type.includes("box")||e.type.includes("Box"))&&(n=p("hiddenSingleBox")),i="";else if("nakedPairs"===e.type||"naked_pairs"===e.type||e.type.includes("nakedPair"))n=p("nakedPairTechnique"),e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")?i=p("colSuffix"):e.type.includes("Box")&&(i=p("boxSuffix"));else if("hiddenPairs"===e.type||"hidden_pairs"===e.type||e.type.includes("hiddenPair"))n=p("hiddenPairTechnique"),e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")?i=p("colSuffix"):e.type.includes("Box")&&(i=p("boxSuffix"));else if(e.type.includes("nakedTriple"))n=p("nakedTripleTechnique"),e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")?i=p("colSuffix"):e.type.includes("Box")&&(i=p("boxSuffix"));else if(e.type.includes("hiddenTriple"))n=p("hiddenTripleTechnique"),e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")?i=p("colSuffix"):e.type.includes("Box")&&(i=p("boxSuffix"));else if(e.type.includes("pointingPairs"))n=p("pointingPairsTechnique"),e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")&&(i=p("colSuffix"));else if(e.type.includes("boxLineReduction"))n=p("boxLineReductionTechnique"),e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")&&(i=p("colSuffix"));else if(e.type.includes("xWing")||e.type.includes("x-wing"))n="X-Wing",e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")&&(i=p("colSuffix"));else if(e.type.includes("yWing")||e.type.includes("y-wing"))n="Y-Wing",i="";else if(e.type.includes("xyWing")||e.type.includes("xy-wing"))n="XY-Wing",i="";else if(e.type.includes("xyzWing")||e.type.includes("xyz-wing"))n="XYZ-Wing",i="";else if(e.type.includes("swordfish"))n="Swordfish",e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")&&(i=p("colSuffix"));else if(e.type.includes("jellyfish"))n="Jellyfish",e.type.includes("Row")?i=p("rowSuffix"):e.type.includes("Col")&&(i=p("colSuffix"));else{let t=!1;for(const r of a)if(e.description&&e.description.includes(r)){n=r,t=!0;break}t||(n=p("unknownTechnique"))}const l=n+(i?` ${i}`:"");return v.jsx("div",{onClick:()=>(e=>{y(e);const t=[],r="number"==typeof e.row&&"number"==typeof e.col,o=r?e.row:0,n=r?e.col:0,i=r?`(${o+1},${n+1})`:p("multipleCells");let a="";if(e&&(a=e.value||"",a||void 0===e.number||(a=e.number),!a&&e.result&&e.result.value&&(a=e.result.value),!a&&e.cells&&Array.isArray(e.cells)&&e.cells.length>0)){const t=e.cells[0];t&&t.value&&(a=t.value)}if("nakedSingle"===e.type)t.push({step:1,description:p("findSingleCandidateCell"),highlight:""},{step:2,description:p("cellOnlyHasSingleCandidate").replace("{position}",i).replace("{value}",a),highlight:i},{step:3,description:p("fillNumber").replace("{value}",a),highlight:i});else if(e.type.includes("hiddenSingle")){const l=e.type.includes("Row")?p("row"):e.type.includes("Col")?p("col"):p("box");let s=0;if(r)s=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&l===p("row"))s=e.row+1;else if(void 0!==e.col&&l===p("col"))s=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?l===p("col")&&"number"==typeof t[1]?s=t[1]+1:"number"==typeof t[0]&&(s=t[0]+1):t&&(l===p("col")&&void 0!==t.col?s=t.col+1:void 0!==t.row&&(s=t.row+1))}t.push({step:1,description:p("findHiddenSingleInRegion").replace("{regionType}",l).replace("{regionNum}",s),highlight:""},{step:2,description:p("numberOnlyInPosition").replace("{value}",a).replace("{regionType}",l).replace("{regionNum}",s).replace("{position}",i),highlight:i},{step:3,description:p("fillNumber").replace("{value}",a),highlight:i})}else if(e.type.includes("NakedPairs")||e.type.includes("nakedPairs")||e.type.includes("nakedPair")){const a=e.type.includes("Row")?p("row"):e.type.includes("Col")?p("col"):p("box");let l=0;if(r)l=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&a===p("row"))l=e.row+1;else if(void 0!==e.col&&a===p("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===p("col")&&"number"==typeof t[1]?l=t[1]+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(a===p("col")&&void 0!==t.col?l=t.col+1:void 0!==t.row&&(l=t.row+1))}const s=Array.isArray(e.values)?e.values.join(","):"数对",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i,d=[];if(a===p("row")&&l>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===l-1&&e[1]===t||void 0!==e.row&&e.row===l-1&&e.col===t),o=S&&S[l-1]&&S[l-1][t]>0;r||o||d.push([l-1,t])}else if(a===p("col")&&l>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===t&&e[1]===l-1||void 0!==e.row&&e.row===t&&e.col===l-1),o=S&&S[t]&&S[t][l-1]>0;r||o||d.push([t,l-1])}else if(a===p("box")&&l>0){const t=3*Math.floor((l-1)/3),r=(l-1)%3*3;for(let o=0;o<3;o++)for(let n=0;n<3;n++){const i=t+o,a=r+n,l=e.cells.some(e=>Array.isArray(e)&&e[0]===i&&e[1]===a||void 0!==e.row&&e.row===i&&e.col===a),s=S&&S[i]&&S[i][a]>0;l||s||d.push([i,a])}}const u=d.length>0?d.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):p("multipleCells");t.push({step:1,description:`在${a}${l}中查找数对`,highlight:""},{step:2,description:p("foundNakedPair",{numbers:s,cells:c}),highlight:i},{step:3,description:p("removeCandidatesFromTargets",{numbers:s,targets:u}),highlight:i})}else if(e.type.includes("HiddenPairs")||e.type.includes("hiddenPairs")||e.type.includes("hiddenPair")){const a=e.type.includes("Row")?p("row"):e.type.includes("Col")?p("col"):p("box");let l=0;if(r)l=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&a===p("row"))l=e.row+1;else if(void 0!==e.col&&a===p("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===p("col")&&"number"==typeof t[1]?l=t[1]+1:a===p("box")&&"number"==typeof t[0]&&"number"==typeof t[1]?l=3*Math.floor(t[0]/3)+Math.floor(t[1]/3)+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(a===p("col")&&void 0!==t.col?l=t.col+1:a===p("box")&&void 0!==t.row&&void 0!==t.col?l=3*Math.floor(t.row/3)+Math.floor(t.col/3)+1:void 0!==t.row&&(l=t.row+1))}const s=Array.isArray(e.values)?e.values.join(","):"数对",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i;t.push({step:1,description:p("findHiddenPairInRegion",{regionType:a,regionNum:l}),highlight:""},{step:2,description:p("foundNumbersOnlyInCells",{numbers:s,cells:c}),highlight:i},{step:3,description:p("removeOtherCandidates",{cells:c,numbers:s}),highlight:i})}else if(e.type.includes("nakedTriple")){const a=e.type.includes("Row")?p("row"):e.type.includes("Col")?p("col"):p("box");let l=0;if(r)l=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&a===p("row"))l=e.row+1;else if(void 0!==e.col&&a===p("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===p("col")&&"number"==typeof t[1]?l=t[1]+1:a===p("box")&&"number"==typeof t[0]&&"number"==typeof t[1]?l=3*Math.floor(t[0]/3)+Math.floor(t[1]/3)+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(a===p("col")&&void 0!==t.col?l=t.col+1:a===p("box")&&void 0!==t.row&&void 0!==t.col?l=3*Math.floor(t.row/3)+Math.floor(t.col/3)+1:void 0!==t.row&&(l=t.row+1))}const s=Array.isArray(e.values)?e.values.join(","):"三链数",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i,d=[];if(a===p("row")&&l>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===l-1&&e[1]===t||void 0!==e.row&&e.row===l-1&&e.col===t),o=S&&S[l-1]&&S[l-1][t]>0;r||o||d.push([l-1,t])}else if(a===p("col")&&l>0)for(let t=0;t<9;t++){const r=e.cells.some(e=>Array.isArray(e)&&e[0]===t&&e[1]===l-1||void 0!==e.row&&e.row===t&&e.col===l-1),o=S&&S[t]&&S[t][l-1]>0;r||o||d.push([t,l-1])}else if(a===p("box")&&l>0){const t=3*Math.floor((l-1)/3),r=(l-1)%3*3;for(let o=0;o<3;o++)for(let n=0;n<3;n++){const i=t+o,a=r+n,l=e.cells.some(e=>Array.isArray(e)&&e[0]===i&&e[1]===a||void 0!==e.row&&e.row===i&&e.col===a),s=S&&S[i]&&S[i][a]>0;l||s||d.push([i,a])}}const u=d.length>0?d.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):p("relatedCells");t.push({step:1,description:p("findTripleInRegion",{regionType:a,regionNum:l}),highlight:""},{step:2,description:p("foundNakedTriple",{numbers:s,cells:c}),highlight:i},{step:3,description:p("removeCandidatesFromTargets",{numbers:s,targets:u}),highlight:i})}else if(e.type.includes("hiddenTriple")){const a=e.type.includes("Row")?p("row"):e.type.includes("Col")?p("col"):p("box");let l=0;if(r)l=e.type.includes("Row")?o+1:e.type.includes("Col")?n+1:3*Math.floor(o/3)+Math.floor(n/3)+1;else if(void 0!==e.row&&a===p("row"))l=e.row+1;else if(void 0!==e.col&&a===p("col"))l=e.col+1;else if(e.cells&&Array.isArray(e.cells)&&e.cells.length>0){const t=e.cells[0];Array.isArray(t)?a===p("col")&&"number"==typeof t[1]?l=t[1]+1:a===p("box")&&"number"==typeof t[0]&&"number"==typeof t[1]?l=3*Math.floor(t[0]/3)+Math.floor(t[1]/3)+1:"number"==typeof t[0]&&(l=t[0]+1):t&&(a===p("col")&&void 0!==t.col?l=t.col+1:a===p("box")&&void 0!==t.row&&void 0!==t.col?l=3*Math.floor(t.row/3)+Math.floor(t.col/3)+1:void 0!==t.row&&(l=t.row+1))}const s=Array.isArray(e.values)?e.values.join(","):"三链数",c=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>Array.isArray(e)?`(${"number"==typeof e[0]?e[0]+1:"?"},${"number"==typeof e[1]?e[1]+1:"?"})`:`(${void 0!==e.row?e.row+1:"?"},${void 0!==e.col?e.col+1:"?"})`).join(" "):i;t.push({step:1,description:p("findHiddenTripleInRegion",{regionType:a,regionNum:l}),highlight:""},{step:2,description:p("foundNumbersOnlyInCells",{numbers:s,cells:c}),highlight:i},{step:3,description:p("removeOtherCandidates",{cells:c,numbers:s}),highlight:i})}else if(e.type.includes("pointingPairs")){const r=e.type.includes("Row")?p("row"):p("col"),o=3*e.boxRow+e.boxCol+1,n=(r===p("row")?e.row:e.col)+1;e.sourceCells&&Array.isArray(e.sourceCells)?e.sourceCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells");const a=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells");t.push({step:1,description:p("findPointingPairsInBox",{boxNum:o,number:e.number,lineType:r,lineNum:n}),highlight:""},{step:2,description:p("removePointingPairsFromTargets",{number:e.number,targets:a,lineType:r,lineNum:n}),highlight:i})}else if(e.type.includes("boxLineReduction")){const r=e.type.includes("Row")?p("row"):p("col"),o=3*e.boxRow+e.boxCol+1,n=(r===p("row")?e.row:e.col)+1;e.sourceCells&&Array.isArray(e.sourceCells)?e.sourceCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells");const a=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells");t.push({step:1,description:p("findBoxLineReductionInLine",{lineType:r,lineNum:n,number:e.number,boxNum:o}),highlight:""},{step:2,description:p("removeBoxLineReductionFromTargets",{number:e.number,targets:a,boxNum:o}),highlight:i})}else if(e.type.includes("xWing")||e.type.includes("x-wing")){const r=e.type.includes("Row")?p("row"):p("col"),o=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells"),n=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells");t.push({step:1,description:p("findXWingInWings",{wingType:r,number:e.number}),highlight:""},{step:2,description:p("xWingFormRectangle",{sourceCells:o,number:e.number}),highlight:i},{step:3,description:p("removeXWingFromTargets",{number:e.number,targets:n}),highlight:i})}else if(e.type.includes("yWing")||e.type.includes("y-wing")){const r=`(${e.anchorCell[0]+1},${e.anchorCell[1]+1})`,o=`(${e.xzCell[0]+1},${e.xzCell[1]+1})`,n=`(${e.yzCell[0]+1},${e.yzCell[1]+1})`,a=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells");t.push({step:1,description:p("findYWingStructure",{anchor:r,xz:o,yz:n}),highlight:""},{step:2,description:p("yWingShareCandidates",{anchor:r,xz:o,yz:n,x:e.x,y:e.y,z:e.z}),highlight:i},{step:3,description:p("removeYWingFromTargets",{number:e.z,targets:a}),highlight:i})}else if(e.type.includes("swordfish")){const r=e.type.includes("Row")?p("row"):p("col"),o=e.cells&&Array.isArray(e.cells)?e.cells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells"),n=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells");t.push({step:1,description:p("findSwordfishInWings",{wingType:r,number:e.number}),highlight:""},{step:2,description:p("swordfishFormStructure",{sourceCells:o,number:e.number}),highlight:i},{step:3,description:p("removeSwordfishFromTargets",{number:e.number,targets:n}),highlight:i})}else if(e.type.includes("xyzWing")||e.type.includes("xyz-wing")){const r=`(${e.pivotCell[0]+1},${e.pivotCell[1]+1})`,o=`(${e.xzCell[0]+1},${e.xzCell[1]+1})`,n=`(${e.yzCell[0]+1},${e.yzCell[1]+1})`,a=e.targetCells&&Array.isArray(e.targetCells)?e.targetCells.map(e=>`(${e[0]+1},${e[1]+1})`).join(" "):p("multipleCells");t.push({step:1,description:p("findXYZWingStructure",{anchor:r,xz:o,yz:n}),highlight:""},{step:2,description:p("xyzWingShareCandidates",{anchor:r,xz:o,yz:n,x:e.x,y:e.y,z:e.common}),highlight:i},{step:3,description:p("removeXYZWingFromTargets",{number:e.common,targets:a}),highlight:i})}else t.push({step:1,description:p("applyTechnique",{technique:p(e.description)||e.type}),highlight:""},{step:2,description:p("relatedPosition",{position:i}),highlight:i},{step:3,description:a?p("relatedNumber",{number:a}):p("analysisCompleted"),highlight:i});if(E(t),w(0),z){const t=(e=>{const t=[],{cells:r=[],targetCells:o=[],values:n=[],removableCandidates:i=[],result:a={}}=e,{operation:l}=a,s=e.type&&("nakedSingle"===e.type||"notesSingle"===e.type||e.type.includes("hiddenSingle"));if(e.type&&(e.type.includes("nakedPair")||e.type.includes("naked_pairs")||"nakedPairs"===e.type)){if(Array.isArray(r)&&r.length>0&&r.forEach(r=>{const o=Array.isArray(r)?r[0]:"number"==typeof r.row?r.row:null,n=Array.isArray(r)?r[1]:"number"==typeof r.col?r.col:null;null!==o&&null!==n&&t.push({row:o,col:n,techniqueIndicator:!0,techniqueType:e.type,highlightType:"pair",isTarget:!1,pairNotes:e.values||[],backgroundColor:"transparent",borderColor:"transparent"})}),Array.isArray(o)&&o.length>0&&o.forEach(r=>{const o=Array.isArray(r)?r[0]:"number"==typeof r.row?r.row:null,n=Array.isArray(r)?r[1]:"number"==typeof r.col?r.col:null;if(null!==o&&null!==n){const r=t.findIndex(e=>e.row===o&&e.col===n);-1===r?t.push({row:o,col:n,techniqueIndicator:!0,techniqueType:e.type,highlightType:"target",isTarget:!0,backgroundColor:"transparent",borderColor:"transparent"}):(t[r].highlightType="target",t[r].isTarget=!0,t[r].backgroundColor="transparent",t[r].borderColor="transparent")}}),Array.isArray(i)&&i.length>0){const r={};e.targetCellsDetails&&Array.isArray(e.targetCellsDetails)?e.targetCellsDetails.forEach(e=>{const t=`${e.row}-${e.col}`;r[t]||(r[t]=[]),Array.isArray(e.notesToRemove)&&e.notesToRemove.forEach(e=>{r[t].includes(e)||r[t].push(e)})}):o.forEach((e,t)=>{const o=Array.isArray(e)?e[0]:"number"==typeof e.row?e.row:null,n=Array.isArray(e)?e[1]:"number"==typeof e.col?e.col:null;if(null!==o&&null!==n){const e=`${o}-${n}`;if(r[e]||(r[e]=[]),t<i.length){const o=i[t];r[e].includes(o)||r[e].push(o)}}}),Object.keys(r).forEach(o=>{const[n,i]=o.split("-").map(Number),a=Array.isArray(r[o])?r[o]:[],l=t.findIndex(e=>e.row===n&&e.col===i);if(-1===l)t.push({row:n,col:i,techniqueIndicator:!0,techniqueType:e.type,highlightType:"removal",notesToRemove:a,backgroundColor:"transparent",borderColor:"transparent"});else{const e=t[l].notesToRemove||[],r=[...new Set([...e,...a])];t[l].notesToRemove=r,t[l].highlightType="removal",t[l].backgroundColor="transparent",t[l].borderColor="transparent"}})}}else if(s){const a=(e,r,o=null,n=[])=>{t.push({row:e,col:r,techniqueIndicator:!0,highlightType:"primary",number:o,notesToRemove:n,isTarget:!0,backgroundColor:"rgba(76, 175, 80, 0.2)",borderColor:"#4CAF50"})},s=(e,r,o=null)=>{t.push({row:e,col:r,techniqueIndicator:!0,highlightType:"secondary",number:o,isTarget:!0,backgroundColor:"rgba(33, 150, 243, 0.2)",borderColor:"#2196F3"})},c=(e,r,o,n=!1)=>{t.push({row:e,col:r,techniqueIndicator:!0,highlightType:"removal",notesToRemove:o,isTarget:!1,backgroundColor:n?"rgba(244, 67, 54, 0.1)":"transparent",borderColor:"#F44336",borderStyle:"dashed"})};Array.isArray(r)&&r.length>0&&r.forEach(r=>{const o=Array.isArray(r)?r[0]:"number"==typeof r.row?r.row:null,n=Array.isArray(r)?r[1]:"number"==typeof r.col?r.col:null;null!==o&&null!==n&&(t.some(e=>e.row===o&&e.col===e)||a(o,n,r.value||e.number,r.notes||[]))}),Array.isArray(o)&&o.length>0&&o.forEach(r=>{const o=Array.isArray(r)?r[0]:"number"==typeof r.row?r.row:null,n=Array.isArray(r)?r[1]:"number"==typeof r.col?r.col:null;null!==o&&null!==n&&(t.some(e=>e.row===o&&e.col===e)||s(o,n,e.number))});const d=e&&"number"==typeof e.row&&"number"==typeof e.col,u=d?e.row:0,f=d?e.col:0;let p="";if(e&&(p=e.value||"",p||void 0===e.number||(p=e.number),!p&&e.result&&e.result.value&&(p=e.result.value),!p&&e.cells&&Array.isArray(e.cells)&&e.cells.length>0)){const t=e.cells[0];t&&t.value&&(p=t.value)}if(d&&"number"==typeof u&&"number"==typeof f)if(t.some(e=>e.row===u&&e.col===f)||a(u,f,p),t.forEach(t=>{t.row===u&&t.col===f&&(!t.number&&p&&(t.number=p),!t.techniqueType&&e.type&&(t.techniqueType=e.type))}),["nakedSingle","notesSingle"].includes(e.type))t.forEach(e=>{e.row===u&&e.col===f&&(e.relatedAreas=["row","col","box"])});else if(e.type.startsWith("hiddenSingle")){const r=e.type.replace("hiddenSingle","").toLowerCase();t.forEach(e=>{e.row===u&&e.col===f&&(e.relatedAreas=[r])})}l&&"removeCandidates"===l.type&&Array.isArray(l.cells)&&l.cells.forEach(e=>{if("number"==typeof e.row&&"number"==typeof e.col&&Array.isArray(e.valuesToRemove)){const{row:r,col:o,valuesToRemove:n}=e,i=t.findIndex(e=>e.row===r&&e.col===o);-1===i?c(r,o,n,!0):(t[i].notesToRemove=n,t[i].highlightType="primary"===t[i].highlightType?"primary-removal":"removal")}}),Array.isArray(n)&&n.length>0&&t.forEach(e=>{e.highlightedValues||(e.highlightedValues=n)}),Array.isArray(i)&&i.length>0&&t.forEach(e=>{e.notesToRemove||(e.notesToRemove=i)}),(e.type||"").includes("pointingPairs")&&e.sourceCells&&Array.isArray(e.sourceCells)&&e.sourceCells.forEach(e=>{const r=Array.isArray(e)?e[0]:e.row;Array.isArray(e)?e[1]:e.col;const o=t.findIndex(e=>e.row===r&&e.col===e);-1!==o&&(t[o].highlightType="primary",t[o].isTarget=!0)})}else{const n=(e,t,r)=>{if(e.type&&e.type.includes("nakedTriple")&&e.conditionCellsDetails){const o=e.conditionCellsDetails.find(e=>e.row===t&&e.col===r);if(o&&Array.isArray(o.notes))return o.notes}if(e.type&&e.type.includes("yWing")){if(void 0!==e.x&&void 0!==e.y&&void 0!==e.z){const o=e.anchorCell&&(Array.isArray(e.anchorCell)&&e.anchorCell[0]===t&&e.anchorCell[1]===r||e.anchorCell.row===t&&e.anchorCell.col===r),n=e.xzCell&&(Array.isArray(e.xzCell)&&e.xzCell[0]===t&&e.xzCell[1]===r||e.xzCell.row===t&&e.xzCell.col===r),i=e.yzCell&&(Array.isArray(e.yzCell)&&e.yzCell[0]===t&&e.yzCell[1]===r||e.yzCell.row===t&&e.yzCell.col===r);if(o)return[e.x,e.y];if(n)return[e.x,e.z];if(i)return[e.y,e.z]}if(void 0!==e.x&&void 0!==e.y)return[e.x,e.y]}else if(e.type&&e.type.includes("xyzWing")){if(void 0!==e.x&&void 0!==e.y&&void 0!==e.z){const o=e.pivotCell&&(Array.isArray(e.pivotCell)&&e.pivotCell[0]===t&&e.pivotCell[1]===r||e.pivotCell.row===t&&e.pivotCell.col===r),n=e.xzCell&&(Array.isArray(e.xzCell)&&e.xzCell[0]===t&&e.xzCell[1]===r||e.xzCell.row===t&&e.xzCell.col===r),i=e.yzCell&&(Array.isArray(e.yzCell)&&e.yzCell[0]===t&&e.yzCell[1]===r||e.yzCell.row===t&&e.yzCell.col===r);if(o)return[e.x,e.y,e.z];if(n)return[e.x,e.z];if(i)return[e.y,e.z]}if(void 0!==e.x&&void 0!==e.y&&void 0!==e.z)return[e.x,e.y,e.z]}else if(e.type&&(e.type.includes("pointingPairs")||e.type.includes("boxLineReduction"))){if(void 0!==e.number)return[e.number]}else{if(void 0!==e.number)return[e.number];if(Array.isArray(e.values)&&e.values.length>0)return e.values}return[]},a=e.type&&(e.type.includes("pointingPairs")||e.type.includes("boxLineReduction"))?e.sourceCells||[]:r;if(Array.isArray(a)&&a.length>0&&a.forEach(r=>{const o=Array.isArray(r)?r[0]:"number"==typeof r.row?r.row:null,i=Array.isArray(r)?r[1]:"number"==typeof r.col?r.col:null;if(null!==o&&null!==i){const r={row:o,col:i,techniqueIndicator:!0,techniqueType:e.type,highlightType:"condition",isTarget:!1,highlightedValues:n(e,o,i),backgroundColor:"transparent",borderColor:"transparent"};e.type&&e.type.includes("yWing")&&void 0!==e.z&&(r.zValue=e.z),e.type&&e.type.includes("xyzWing")&&void 0!==e.z&&(r.zValue=e.z,r.x=e.x,r.y=e.y,r.z=e.z,r.pivotCell=e.pivotCell,r.xzCell=e.xzCell,r.yzCell=e.yzCell),t.push(r)}}),Array.isArray(o)&&o.length>0){const r={};e.targetCellsDetails&&Array.isArray(e.targetCellsDetails)?e.targetCellsDetails.forEach(e=>{const t=`${e.row}-${e.col}`;r[t]||(r[t]=[]),Array.isArray(e.notesToRemove)&&e.notesToRemove.forEach(e=>{r[t].includes(e)||r[t].push(e)})}):o.length>0&&i.length>0&&(i.length===o.length?o.forEach((e,t)=>{const o=Array.isArray(e)?e[0]:"number"==typeof e.row?e.row:null,n=Array.isArray(e)?e[1]:"number"==typeof e.col?e.col:null;if(null!==o&&null!==n){const e=`${o}-${n}`;r[e]||(r[e]=[]);const a=i[t];r[e].includes(a)||r[e].push(a)}}):o.forEach(e=>{const t=Array.isArray(e)?e[0]:"number"==typeof e.row?e.row:null,o=Array.isArray(e)?e[1]:"number"==typeof e.col?e.col:null;if(null!==t&&null!==o){const e=`${t}-${o}`;r[e]||(r[e]=[]),i.forEach(t=>{r[e].includes(t)||r[e].push(t)})}})),Object.keys(r).forEach(o=>{const[n,i]=o.split("-").map(Number),a=Array.isArray(r[o])?r[o]:[],l=t.findIndex(e=>e.row===n&&e.col===i);if(-1===l)t.push({row:n,col:i,techniqueIndicator:!0,techniqueType:e.type,highlightType:"removal",notesToRemove:a,backgroundColor:"transparent",borderColor:"transparent"});else{const e=t[l].notesToRemove||[],r=[...new Set([...e,...a])];t[l].notesToRemove=r,t[l].highlightType="removal",t[l].backgroundColor="transparent",t[l].borderColor="transparent"}})}}return t})(e);z(t)}g("solution")})(e),style:{padding:"8px 10px",backgroundColor:"#f8f9fa",borderRadius:"6px",border:"1px solid #e9ecef",cursor:"pointer",transition:"all 0.2s ease",marginBottom:"6px"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#e9ecef",e.currentTarget.style.borderColor="#3498db"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#f8f9fa",e.currentTarget.style.borderColor="#e9ecef"},children:v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontWeight:"600",color:"#34495e",flexWrap:"wrap"},children:[v.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flexShrink:0},children:l}),v.jsxs("span",{style:{fontSize:"14px",color:"#7f8c8d",fontWeight:"normal",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:1,minWidth:0},children:[p("position"),": ",r,o]})]})},t)})}),v.jsx("button",{onClick:()=>{let e=!0;if(a){!1===a()&&(e=!1)}e&&i&&i(),e&&(M(),g("techniques"))},style:{width:"100%",padding:"8px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",transition:"background-color 0.2s ease"},title:p("refreshCandidatesTooltip"),children:v.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[v.jsx(wn,{}),p("fillCandidates")]})})]}),"solution"===m&&"learning"===h&&v.jsx("div",{style:{overflowY:"auto",padding:"8px",flex:1,minHeight:"200px",maxHeight:"400px"},children:x?v.jsx(v.Fragment,{children:v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"12px"},children:(()=>{const e=R.length;let t=[],r=!1,o=!1;if(2===e)0===b?(t=[R[0]],r=!0):(t=[R[1]],o=!0);else if(3===e)0===b?(t=[R[0],R[1]],r=!0):(t=[R[2]],o=!0);else if(e>=4){const n=2*b,i=Math.min(n+2,e);t=R.slice(n,i),i<e?r=!0:o=!0}else t=R,o=!0;return v.jsxs(v.Fragment,{children:[t.map((e,t)=>0===t&&(r||o)?v.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef",position:"relative"},children:[v.jsx("div",{style:{minWidth:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#3498db",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold"},children:e.step}),v.jsx("div",{style:{flex:1,fontSize:"14px",color:"#34495e",lineHeight:"1.5",paddingRight:"80px",minHeight:"40px"},children:e.description}),v.jsxs("div",{style:{position:"absolute",right:"12px",top:u?"8px":"12px",display:"flex",gap:"6px"},children:[r&&v.jsx("button",{onClick:()=>w(b+1),style:{width:u?"60px":"70px",height:u?"18px":"32px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:u?"5px":"13px",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 4px rgba(52, 152, 219, 0.4), 0 1px 2px rgba(0, 0, 0, 0.15)",transition:"all 0.2s ease",whiteSpace:"nowrap"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#2980b9",e.currentTarget.style.boxShadow="0 2px 4px rgba(0, 0, 0, 0.3)",e.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#3498db",e.currentTarget.style.boxShadow="0 2px 6px rgba(52, 152, 219, 0.3), 0 1px 2px rgba(0, 0, 0, 0.12)",e.currentTarget.style.transform="translateY(0)"},children:p("nextStep")}),o&&v.jsx("button",{onClick:e=>{console.log("Apply button clicked"),(()=>{if(console.log("handleApplyTechnique called",{selectedTechnique:x,isPencilMode:s,togglePencilMode:n}),x){const e=x.type&&("nakedSingle"===x.type||"notesSingle"===x.type||x.type.includes("hiddenSingle"));console.log("Technique type check",{isBasicTechnique:e,techniqueType:x.type}),e?(console.log("Applying basic technique"),j(x)&&(z&&z([]),T&&T(null),M())):(console.log("Applying non-basic technique"),K.info(p("manualCandidateRemovalRequired",{defaultMessage:"请手动清除选定候选数"}),{position:"top-right",autoClose:3e3}),z&&z([]),T&&T(null),g("keyboard"),y(null),E([]),w(0))}else console.log("No selected technique")})()},style:{width:u?"60px":"70px",height:u?"18px":"32px",backgroundColor:"#2ecc71",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:u?"5px":"13px",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 4px rgba(46, 204, 113, 0.4), 0 1px 2px rgba(0, 0, 0, 0.15)",transition:"all 0.2s ease",whiteSpace:"nowrap"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#27ae60",e.currentTarget.style.boxShadow="0 2px 4px rgba(0, 0, 0, 0.3)",e.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#2ecc71",e.currentTarget.style.boxShadow="0 2px 6px rgba(46, 204, 113, 0.3), 0 1px 2px rgba(0, 0, 0, 0.12)",e.currentTarget.style.transform="translateY(0)"},children:p("apply")})]})]},e.step):v.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[v.jsx("div",{style:{minWidth:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#3498db",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold"},children:e.step}),v.jsx("div",{style:{flex:1,fontSize:"14px",color:"#34495e",lineHeight:"1.5"},children:e.description})]},e.step)),t.length>0&&!(r||o)&&t[0]!==t[t.length-1]&&v.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"12px"},children:v.jsx("button",{onClick:()=>w(b+1),style:{width:u?"75px":"90px",height:u?"22px":"40px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:u?"5px":"14px",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 8px rgba(52, 152, 219, 0.4), 0 2px 4px rgba(0, 0, 0, 0.15)",transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#2980b9",e.currentTarget.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)",e.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#3498db",e.currentTarget.style.boxShadow="0 4px 10px rgba(52, 152, 219, 0.3), 0 1px 3px rgba(0, 0, 0, 0.12)",e.currentTarget.style.transform="translateY(0)"},children:p("nextStep")})})]})})()})}):v.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#7f8c8d",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:p("selectTechniqueFirst")})})]})]})]})};"undefined"!=typeof window&&(window.debugSudokuTechnique=()=>{if(console.log("=== 实际应用技巧对象调试 ==="),document.querySelector(".control-panel")){console.log("找到ControlPanel组件"),window.selectedTechnique&&console.log("window.selectedTechnique:",window.selectedTechnique);const e=localStorage.getItem("selectedTechnique");e&&console.log("localStorage selectedTechnique:",JSON.parse(e))}console.log("=== 调试结束 ===")},window.storeSelectedTechnique=e=>{window.selectedTechnique=e,localStorage.setItem("selectedTechnique",JSON.stringify(e)),console.log("技巧对象已存储到全局变量:",e)},console.log("调试函数已加载:"),console.log("- 在控制台输入 debugSudokuTechnique() 检查技巧对象"),console.log("- 技巧对象会自动存储到 window.selectedTechnique"));const kn=Hr.div`
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
`,jn=Hr.div`
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
`,$n=Hr.h2`
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
`,Sn=Hr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`,zn=Hr(({isSelected:e,...t})=>v.jsx("button",{...t}))`
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
`,Tn=Hr.div`
  margin-top: 4px;
  font-size: 12px;
  opacity: 0.7;
  font-weight: normal;
`,An=Hr.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`,Pn=Hr.button`
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
`,Nn=Hr.button`
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
`,In=({isOpen:e,onClose:t,onSelectDifficulty:r,initialDifficulty:n})=>{const{theme:i}=oe(),{t:a}=le(),[l,s]=o.useState(n||_o.MEDIUM),c={[_o.EASY]:{name:a("easy"),description:a("difficultyDescription.easy")},[_o.MEDIUM]:{name:a("medium"),description:a("difficultyDescription.medium")},[_o.HARD]:{name:a("hard"),description:a("difficultyDescription.hard")},[_o.EXPERT]:{name:a("expert"),description:a("difficultyDescription.expert")}};if(!e)return null;const d=()=>{r(l),t()};return v.jsx(kn,{onClick:t,onKeyDown:e=>{"Escape"===e.key&&t(),"Enter"===e.key&&d()},children:v.jsxs(jn,{theme:i,onClick:e=>e.stopPropagation(),children:[v.jsx($n,{theme:i,children:a("selectDifficulty")}),v.jsx(Sn,{children:Object.entries(_o).map(([e,t])=>{const r=c[t];return v.jsxs(zn,{isSelected:l===t,onClick:()=>s(t),theme:i,className:e.toLowerCase(),children:[r.name,v.jsx(Tn,{children:r.description})]},e)})}),v.jsxs(An,{children:[v.jsx(Pn,{theme:i,onClick:t,children:a("cancel")}),v.jsx(Nn,{theme:i,onClick:d,children:a("startGame")})]})]})})},Rn=Hr.div`
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
`,En=Hr.div`
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
`,Mn=Hr.h2`
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 20px 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`,Fn=Hr.div`
  padding: 16px;
  margin-bottom: 20px;
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 8px;
  border-left: 4px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
  text-align: center;
`,Ln=Hr.div`
  font-weight: 600;
  margin-bottom: 8px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.primary)||"#3498db"}};
  font-size: 18px;
`,Wn=Hr.div`
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.5;
`,On=Hr.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 16px;
`,Dn=Hr.button`
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
`,Hn=({isOpen:e,onClose:t,currentMode:r,onConfirm:o})=>{const{theme:n}=oe(),{t:i}=le(),a="game"===r?"learning":"game";if(!e)return null;return v.jsx(Rn,{onClick:t,onKeyDown:e=>{"Escape"===e.key&&t()},children:v.jsxs(En,{theme:n,onClick:e=>e.stopPropagation(),children:[v.jsx(Mn,{theme:n,children:"game"===r?i("switchToLearningMode","切换到学习模式"):i("switchToGameMode","切换到游戏模式")}),v.jsxs(Fn,{theme:n,children:[v.jsx(Ln,{theme:n,children:"learning"===a?i("learningMode","学习模式"):i("gameMode","游戏模式")}),v.jsx(Wn,{theme:n,children:"learning"===a?i("learningModeDescription","提供技巧学习辅助，帮助您学习数独解题技巧。"):i("gameModeDescription","关闭技巧学习辅助功能，专注于游戏体验。")})]}),v.jsxs(On,{children:[v.jsx(Dn,{theme:n,onClick:t,children:i("cancel","取消")}),v.jsx(qn,{theme:n,onClick:o,children:"learning"===a?i("switchToLearningMode","切换到学习模式"):i("switchToGameMode","切换到游戏模式")})]})]})})},Bn=Hr.div.attrs({className:"nav-block"})`
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
`;const _n=Hr.div`
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
`,Yn=Hr(({isActive:e,...t})=>v.jsx("button",{...t}))`
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
`,Gn=Hr.span`
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Un=()=>v.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})}),Xn=()=>v.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}),Zn=()=>v.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M8 5v14l11-7z"})}),Vn=()=>v.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"#FFD700",children:v.jsx("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})}),Jn=()=>v.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:[v.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"transparent",stroke:"currentColor",strokeWidth:"1.5"}),v.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",children:"2"}),v.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",children:"5"}),v.jsx("text",{x:"25",y:"6",fontSize:"7",fontWeight:"900",fill:"currentColor",children:"1"})]}),Kn=()=>v.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 256 256",fill:"currentColor",children:[v.jsx("path",{d:"m18 82.85c-2.3 3.07-1.51 73.57 0 76s105.83 59.7 108.54 59.7 111.26-62.11 111.86-64.22 1.81-67.54 0-69-54.22-29.33-57.54-29.33-50.65 26.53-53.37 26.53-49.14-27.11-52.76-27.11-54.88 25.02-56.73 27.43z"}),v.jsx("path",{d:"m126.59 226.53c-2.48 0-4.11 0-58.58-29.93s-55.41-31.38-56.75-33.53c-1.2-1.92-2.44-3.9-2.64-41.94-.21-38.76 1.29-40.76 3-43.08 1.2-1.59 2.55-3.4 30.57-17s30.64-13.63 32.54-13.63c3.33 0 6.33 1.28 33.23 16 6.7 3.67 15.43 8.45 19.59 10.51 4.35-2.07 13.65-7 20.78-10.73 26.67-14.06 29.37-15.2 32.53-15.2 2.32 0 4.16 0 33 15 4.54 2.35 27.31 14.18 29.67 16.15 3.29 2.74 3.5 6 3.73 17.11.15 7.47.12 16.85.06 23.41-.11 12.58-.42 34.1-1.21 36.87-1 3.33-3.11 4.69-8.31 7.95-3 1.87-7.23 4.44-12.65 7.66-9.9 5.88-23.36 13.71-37.9 22-14.25 8.21-27.88 15.85-38.25 21.64-19.38 10.74-20 10.74-22.41 10.74zm-101.14-72.31c14.41 8.86 85.68 48.05 101.07 55.58 15.71-8 89.25-50.18 104.23-59.78.52-11.66 1-48.65.35-59.82-10.07-5.62-41.48-22-50.19-25.72-4.85 2.19-16.82 8.5-25.12 12.87-24.1 12.7-25.4 13.19-28.3 13.19s-4.19-.48-27.22-13.09c-8.54-4.67-20.92-11.45-25.74-13.64-8.53 3.29-40.18 18.59-49.28 23.84-1.09 11.6-.74 54.56.2 66.57z"}),v.jsx("path",{d:"m18 82.85c-2.3 3.07-1.51 73.57 0 76s105.83 59.7 108.54 59.7 111.26-62.11 111.86-64.22 1.81-67.54 0-69-54.22-29.33-57.54-29.33-50.65 26.53-53.37 26.53-49.14-27.11-52.76-27.11-54.88 25.02-56.73 27.43z"}),v.jsx("path",{d:"m69.43 110.77c-.9 3.61-2.07 7.49-10.58 8.39-11 1.16-11 11.87 0 13.17 6.77.8 10 5.39 10.24 7.84 1.53 14.82 13.36 17.48 15.74 2.44.92-5.81 2.22-9.9 8.86-10.85 11.76-1.68 11.92-10.69 2.14-12.83-3-.66-8.77-1.17-10.24-7.79-2.86-12.89-12.49-15.04-16.16-.37z"}),v.jsx("path",{d:"m189.74 106.26c0 6.08-6 12.51-10.77 11.92-5.5-.69-10.54-5.61-10.54-11.69s4.24-10.1 10.31-10.31c6.64-.23 11 4 11 10.08z"}),v.jsx("path",{d:"m168.42 148.13c0-6.08 6-12.51 10.77-11.92 5.5.69 10.54 5.61 10.54 11.69s-4.24 10.1-10.31 10.31c-6.64.23-11-4.01-11-10.08z"}),v.jsx("path",{d:"m200 137.85c-6.08 0-12.51-6-11.92-10.77.69-5.5 5.61-10.54 11.69-10.54s10.1 4.24 10.31 10.31c.25 6.64-3.99 11-10.08 11z"}),v.jsx("path",{d:"m158.15 116.54c6.08 0 12.51 6 11.92 10.77-.69 5.5-5.61 10.54-11.69 10.54s-10.1-4.24-10.31-10.31c-.23-6.65 4-11 10.08-11z"}),v.jsx("path",{d:"M40 110h24v-24h24v24h24v24h-24v24h-24v-24h-24v-24z",fill:"white",stroke:"black",strokeWidth:"4"}),v.jsx("circle",{cx:"190",cy:"95",r:"14",fill:"white",stroke:"black",strokeWidth:"4"}),v.jsx("circle",{cx:"214",cy:"119",r:"14",fill:"white",stroke:"black",strokeWidth:"4"}),v.jsx("circle",{cx:"190",cy:"143",r:"14",fill:"white",stroke:"black",strokeWidth:"4"}),v.jsx("circle",{cx:"166",cy:"119",r:"14",fill:"white",stroke:"black",strokeWidth:"4"})]}),Qn=()=>v.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:[v.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"}),v.jsx("path",{d:"M12 15.4l-3.78 1.98 0.69-4.06-2.97-2.88 4.08-0.6 1.98-3.7 1.98 3.7 4.08 0.6-2.97 2.88 0.69 4.06L12 15.4z"})]}),ei=({onNewGame:t,onPauseTimer:r,onGetHint:o,onShowTechniques:n,onToggleNotes:i,onSettings:a,isNotesMode:l=!1,isTimerActive:s=!0,gameCompleted:c=!1})=>{oe();const{t:d}=le(),{mode:u,setMode:f}=e.useContext(ue),p=Go(),{startLoading:h,stopLoading:m}=de(),[g,x]=e.useState(!1),[y,b]=e.useState(!1),[w,C]=e.useState(!1),[k,j]=e.useState(!1),[$,S]=e.useState(!1),[z,T]=e.useState(0),A=e.useRef(null),P=e.useRef(null);e.useEffect(()=>{const e=()=>{console.log("NavigationBlock: 接收到打开新游戏窗口的事件"),b(!1),x(!0)};return window.addEventListener("openNewGameWindow",e),()=>{window.removeEventListener("openNewGameWindow",e)}},[]);const N=()=>{S(!0),T(0);const e=Date.now(),t=()=>{const r=Date.now()-e,o=Math.min(r/3e3*100,100);T(o),o<100?P.current=requestAnimationFrame(t):F()};P.current=requestAnimationFrame(t)},I=()=>{A.current&&(clearTimeout(A.current),A.current=null),P.current&&(cancelAnimationFrame(P.current),P.current=null),$&&z<100&&M(),S(!1),T(0)},[R,E]=e.useState(!1),M=()=>{if(!R){if(E(!0),console.log("候选数按钮短点击"),console.log("sudokuContext:",p),!p)return console.log("sudokuContext不存在"),toast.info(d("errorOccurred",{defaultMessage:"系统错误，请刷新页面重试"}),{position:"top-right",autoClose:2e3}),void setTimeout(()=>E(!1),500);if(p.selectedCell){const{row:e,col:t}=p.selectedCell;console.log("选中的单元格:",e,t),p.currentBoard&&p.currentBoard[e]&&0===p.currentBoard[e][t]?(console.log("单元格是空白的，准备填充候选数"),p.fillSelectedCellCandidates?(console.log("调用fillSelectedCellCandidates方法"),p.fillSelectedCellCandidates(e,t)):(console.log("fillSelectedCellCandidates方法不存在"),toast.info(d("functionNotAvailable",{defaultMessage:"该功能暂不可用"}),{position:"top-right",autoClose:2e3}))):(console.log("单元格不是空白的或currentBoard不存在"),toast.info(d("selectEmptyCell",{defaultMessage:"请选择一个空白单元格"}),{position:"top-right",autoClose:2e3}))}else console.log("没有选中的单元格"),toast.info(d("selectCellForCandidates",{defaultMessage:"请先选择一个空白单元格"}),{position:"top-right",autoClose:2e3});setTimeout(()=>E(!1),500)}},F=()=>{console.log("候选数按钮长按"),j(!0),i&&(i(),b(!0)),setTimeout(()=>{j(!1),S(!1),T(0)},3e3)};return v.jsxs(v.Fragment,{children:[v.jsx(Bn,{children:v.jsxs(_n,{children:[v.jsx(Yn,{onClick:()=>{console.log("NavigationBlock: 打开难度选择模态框"),b(!1),x(!0)},title:d("newGame"),children:v.jsx(Gn,{children:v.jsx(Un,{})})}),v.jsx(Yn,{onClick:c?void 0:r,disabled:c,title:d(c?"gameCompleted":s?"pauseTimer":"resume"),children:v.jsx(Gn,{children:c||s?v.jsx(Xn,{}):v.jsx(Zn,{})})}),v.jsx(Yn,{onClick:o,title:d("hint"),children:v.jsx(Gn,{children:v.jsx(Vn,{})})}),v.jsxs(Yn,{onMouseDown:N,onMouseUp:I,onMouseLeave:I,onTouchStart:e=>{N()},onTouchEnd:e=>{I()},title:d("notes"),isActive:y||k,style:{position:"relative"},children:[v.jsx(Gn,{children:k?v.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:[v.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",fill:"transparent",stroke:"currentColor",strokeWidth:"1.5"}),v.jsx("line",{x1:"12",y1:"4",x2:"12",y2:"20",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12",stroke:"currentColor",strokeWidth:"1",strokeDasharray:"1"}),v.jsx("text",{x:"7",y:"10",fontSize:"6",fontWeight:"bold",children:"2"}),v.jsx("text",{x:"15",y:"18",fontSize:"6",fontWeight:"bold",children:"5"}),v.jsx("text",{x:"18",y:"6",fontSize:"6",fontWeight:"900",fill:"currentColor",children:"All"})]}):v.jsx(Jn,{})}),$&&v.jsx("div",{style:{position:"absolute",top:0,left:0,width:`${z}%`,height:"100%",backgroundColor:"rgba(52, 152, 219, 0.3)",zIndex:-1,transition:"width 0.1s linear"}})]}),v.jsx(Yn,{onClick:()=>{C(!0)},title:"game"===u?d("switchToLearningMode")||"切换到学习模式":d("switchToGameMode")||"切换到游戏模式",children:v.jsx(Gn,{children:"game"===u?v.jsx(Kn,{}):v.jsx(Qn,{})})})]})}),v.jsx(In,{isOpen:g,onClose:()=>x(!1),onSelectDifficulty:async e=>{console.log("NavigationBlock: 选择难度:",e);try{b(!1),n&&console.log("将在生成新游戏时重置技巧状态"),h&&h(d("generatingNewPuzzle")),(null==p?void 0:p.startNewGame)?(console.log("调用 context.startNewGame"),await p.startNewGame(null,e),console.log("startNewGame 完成")):(null==p?void 0:p.generateNewPuzzle)?(console.log("调用 context.generateNewPuzzle"),await p.generateNewPuzzle(e),console.log("generateNewPuzzle 完成")):console.error("上下文函数不可用")}catch(t){console.error("生成新游戏失败:",t)}finally{m&&m()}},initialDifficulty:(null==p?void 0:p.difficulty)||_o.MEDIUM}),v.jsx(Hn,{isOpen:w,onClose:()=>{C(!1)},currentMode:u,onConfirm:()=>{f("game"===u?"learning":"game"),C(!1)}})]})},ti=Hr(({theme:e,...t})=>v.jsx("div",{...t})).attrs({className:"display-block"})`
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
`,ri=Hr.div`
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
`,oi=Hr.span`
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.error)||"#ff3b30"}};
  font-weight: 600;
`,ni=Hr.div`
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
`,ii=Hr.div`
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
`,ai=({errorCount:e,difficulty:t,time:r})=>{oe();const{t:o}=le();return v.jsxs(ti,{children:[v.jsxs(ri,{children:[o("error"),": ",v.jsx(oi,{children:e})]}),v.jsx(ni,{children:o(t)}),v.jsx(ii,{children:r})]})},li=({highlightedCells:t,boardWidth:r,boardHeight:o,isPortrait:n=!1})=>{if(!t||!Array.isArray(t))return null;const i=t.filter(e=>e&&!0===e.techniqueIndicator&&"number"==typeof e.row&&"number"==typeof e.col&&e.row>=0&&e.row<9&&e.col>=0&&e.col<9);if(0===i.length)return null;let a,l,s,c;n&&o?(a=r/9,l=o/9,s=`${Math.max(16,.45*Math.min(a,l))}px`,c=o):(a=r/9,l=a,s=`${Math.max(16,.45*a)}px`,c=r);const d=e.useMemo(()=>{const e=[];return i.forEach(t=>{if(t.techniqueType&&("nakedSingle"===t.techniqueType||"notesSingle"===t.techniqueType||t.techniqueType.includes("hiddenSingle"))&&t.relatedAreas&&Array.isArray(t.relatedAreas)){const{row:r,col:o}=t;if(t.relatedAreas.includes("row")&&e.push({type:"row",row:r,key:`row-${r}`}),t.relatedAreas.includes("col")&&e.push({type:"col",col:o,key:`col-${o}`}),t.relatedAreas.includes("box")){const t=Math.floor(r/3),n=Math.floor(o/3);e.push({type:"box",boxRow:t,boxCol:n,key:`box-${t}-${n}`})}}}),e},[i,a,l]),u=e=>e.notesToRemove&&Array.isArray(e.notesToRemove)&&0!==e.notesToRemove.length?e.notesToRemove.map(t=>{if("number"!=typeof t||t<1||t>9)return null;const r=t-1,o=Math.floor(r/3),n=r%3,i=.35*Math.min(a,l),s=.05*Math.min(a,l),c=(Math.min(a,l)-2*s)/3,d=s+n*c+(c-i)/2,u=s+o*c+(c-i)/2;return v.jsx("div",{style:{position:"absolute",left:`${d}px`,top:`${u}px`,width:`${i}px`,height:`${i}px`,backgroundColor:"#FF0000",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,fontWeight:"bold",border:"1px solid rgba(255, 255, 255, 0.5)",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)"},children:v.jsx("span",{style:{fontSize:.7*i+"px",fontWeight:"bold",color:"#FFFFFF",zIndex:65,textShadow:"1px 1px 1px rgba(0, 0, 0, 0.5)"},children:t})},`removable-note-${e.row}-${e.col}-${t}`)}):null,f=e=>{const t=e.pairNotes||e.highlightedValues||[];return Array.isArray(t)&&0!==t.length?t.map(t=>{if("number"!=typeof t||t<1||t>9)return null;const r=t-1,o=Math.floor(r/3),n=r%3,i=.35*Math.min(a,l),s=.05*Math.min(a,l),c=(Math.min(a,l)-2*s)/3,d=s+n*c+(c-i)/2,u=s+o*c+(c-i)/2;let f="#00FF00",p="#000000";if(e.techniqueType&&e.techniqueType.includes("yWing")&&e.zValue===t&&(f="#ADD8E6",p="#000000"),e.techniqueType&&e.techniqueType.includes("xyzWing")&&e.zValue===t&&(f="#ADD8E6",p="#000000"),e.techniqueType&&e.techniqueType.includes("xyzWing")&&void 0!==e.x&&void 0!==e.y&&void 0!==e.z){const r=e.pivotCell&&(Array.isArray(e.pivotCell)&&e.pivotCell[0]===e.row&&e.pivotCell[1]===e.col||e.pivotCell.row===e.row&&e.pivotCell.col===e.col),o=e.xzCell&&(Array.isArray(e.xzCell)&&e.xzCell[0]===e.row&&e.xzCell[1]===e.col||e.xzCell.row===e.row&&e.xzCell.col===e.col),n=e.yzCell&&(Array.isArray(e.yzCell)&&e.yzCell[0]===e.row&&e.yzCell[1]===e.col||e.yzCell.row===e.row&&e.yzCell.col===e.col);!r||t!==e.x&&t!==e.y||(f="#00FF00",p="#000000"),o&&t===e.x&&(f="#00FF00",p="#000000"),n&&t===e.y&&(f="#00FF00",p="#000000")}return v.jsx("div",{style:{position:"absolute",left:`${d}px`,top:`${u}px`,width:`${i}px`,height:`${i}px`,backgroundColor:f,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,fontWeight:"bold",border:"1px solid rgba(255, 255, 255, 0.5)",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)"},children:v.jsx("span",{style:{fontSize:.7*i+"px",fontWeight:"bold",color:p,zIndex:65,textShadow:"1px 1px 1px rgba(255, 255, 255, 0.5)"},children:t})},`condition-note-${e.row}-${e.col}-${t}`)}):null};return v.jsxs("div",{className:"technique-overlay",style:{position:"absolute",top:0,left:0,width:`${r}px`,height:`${c}px`,pointerEvents:"none",zIndex:12,boxSizing:"border-box",background:"transparent"},children:[d.map(e=>{if(i.some(e=>e.techniqueType&&("nakedSingle"===e.techniqueType||"notesSingle"===e.techniqueType||e.techniqueType.includes("hiddenSingle")))){if("row"===e.type)return v.jsx("div",{style:{position:"absolute",left:0,top:e.row*l+"px",width:`${r}px`,height:`${l}px`,backgroundColor:"rgba(52, 152, 219, 0.25)",border:"1px solid rgba(52, 152, 219, 0.5)",zIndex:15,pointerEvents:"none"}},e.key);if("col"===e.type)return v.jsx("div",{style:{position:"absolute",left:e.col*a+"px",top:0,width:`${a}px`,height:`${c}px`,backgroundColor:"rgba(52, 152, 219, 0.25)",border:"1px solid rgba(52, 152, 219, 0.5)",zIndex:15,pointerEvents:"none"}},e.key);if("box"===e.type)return v.jsx("div",{style:{position:"absolute",left:3*e.boxCol*a+"px",top:3*e.boxRow*l+"px",width:3*a+"px",height:3*l+"px",backgroundColor:"rgba(46, 204, 113, 0.25)",border:"2px solid rgba(46, 204, 113, 0.6)",borderRadius:"6px",zIndex:16,pointerEvents:"none"}},e.key)}return null}),i.map(e=>{const t=(e=>{const t={position:"absolute",left:e.col*a+"px",top:e.row*l+"px",width:`${a}px`,height:`${l}px`,pointerEvents:"none",boxSizing:"border-box",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease"};if(e.techniqueType&&("nakedSingle"===e.techniqueType||"notesSingle"===e.techniqueType||e.techniqueType.includes("hiddenSingle"))){const r={primary:{backgroundColor:e.backgroundColor||"rgba(76, 175, 80, 0.3)",borderColor:e.borderColor||"#4CAF50",border:`3px solid ${e.borderColor||"#4CAF50"}`,zIndex:35},"primary-removal":{backgroundColor:e.backgroundColor||"rgba(76, 175, 80, 0.3)",borderColor:e.borderColor||"#4CAF50",border:`3px solid ${e.borderColor||"#4CAF50"}`,zIndex:35},secondary:{backgroundColor:e.backgroundColor||"rgba(33, 150, 243, 0.3)",borderColor:e.borderColor||"#2196F3",border:`3px solid ${e.borderColor||"#2196F3"}`,zIndex:30},removal:{backgroundColor:e.backgroundColor||"rgba(144, 238, 144, 0.3)",borderColor:e.borderColor||"rgba(0, 0, 0, 0.5)",border:`1px solid ${e.borderColor||"rgba(0, 0, 0, 0.5)"}`,zIndex:25},row:{backgroundColor:"rgba(52, 152, 219, 0.3)",border:"1px solid #3498db",zIndex:20},col:{backgroundColor:"rgba(231, 76, 60, 0.3)",border:"1px solid #e74c3c",zIndex:20},box:{backgroundColor:"rgba(46, 204, 113, 0.3)",border:"1px solid #2ecc71",zIndex:20}};if(e.isTarget){const r=e.techniqueType&&e.techniqueType.includes("hiddenSingle");return{...t,backgroundColor:r?"rgba(76, 175, 80, 0.85)":"rgba(76, 175, 80, 0.8)",border:"3px solid #4CAF50",zIndex:30,color:"white"}}return e.highlightType&&r[e.highlightType]?{...t,...r[e.highlightType]}:{...t,backgroundColor:"rgba(249, 231, 159, 0.5)",border:"3px solid #ffffff",zIndex:25}}return{...t,backgroundColor:"transparent",border:"none",zIndex:25}})(e),r=e.techniqueType&&("nakedSingle"===e.techniqueType||"notesSingle"===e.techniqueType||e.techniqueType.includes("hiddenSingle"));return v.jsxs("div",{style:t,children:[r&&e.number&&v.jsx("span",{style:{fontSize:e.isTarget?`calc(${s} * 1.35)`:s,fontWeight:e.isTarget?"normal":"600",color:e.isTarget?"white":"#2196F3",zIndex:50,textShadow:(e.isTarget,"none"),fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"1",margin:"0",padding:"0"},children:e.number}),f(e),u(e)]},`tech-${e.row}-${e.col}-${e.highlightType||"default"}-${e.isTarget?"target":"normal"}`)})]})},si=({highlightedCells:e,boardWidth:t,boardHeight:r,isPortrait:o=!1})=>{if(!e||!Array.isArray(e))return null;const n=e.filter(e=>e&&!0===e.techniqueIndicator&&"number"==typeof e.row&&"number"==typeof e.col&&e.row>=0&&e.row<9&&e.col>=0&&e.col<9);if(0===n.length)return null;let i,a,l;o&&r?(i=t/9,a=r/9,l=r):(i=t/9,a=i,l=t);if(!n.some(e=>{if("nakedSingle"===e.techniqueType)return!0;if(e.technique&&e.technique.includes("nakedSingle"))return!0;if("primary"===e.highlightType&&e.isTarget){if(1===n.filter(e=>e.isTarget).length)return!0}const t=n.some(e=>"row"===e.highlightType),r=n.some(e=>"col"===e.highlightType),o=n.some(e=>"box"===e.highlightType);if(t&&r&&o){if(1===n.filter(e=>e.isTarget).length)return!0}return!1}))return null;const s=[];n.forEach(e=>{const{row:t,col:r,highlightType:o,relatedAreas:n}=e;if(s.some(e=>"cell"===e.type&&e.row===t&&e.col===r)||s.push({type:"cell",row:t,col:r,key:`cell-${t}-${r}`}),n&&Array.isArray(n)&&n.forEach(e=>{if("row"===e&&(s.some(e=>"row"===e.type&&e.row===t)||s.push({type:"row",row:t,key:`row-${t}`})),"col"===e&&(s.some(e=>"col"===e.type&&e.col===r)||s.push({type:"col",col:r,key:`col-${r}`})),"box"===e){const e=Math.floor(t/3),o=Math.floor(r/3);s.some(t=>"box"===t.type&&t.boxRow===e&&t.boxCol===o)||s.push({type:"box",boxRow:e,boxCol:o,key:`box-${e}-${o}`})}}),"row"===o&&(s.some(e=>"row"===e.type&&e.row===t)||s.push({type:"row",row:t,key:`row-${t}`})),"col"===o&&(s.some(e=>"col"===e.type&&e.col===r)||s.push({type:"col",col:r,key:`col-${r}`})),"box"===o){const e=Math.floor(t/3),o=Math.floor(r/3);s.some(t=>"box"===t.type&&t.boxRow===e&&t.boxCol===o)||s.push({type:"box",boxRow:e,boxCol:o,key:`box-${e}-${o}`})}});const c=[];if(0===s.length)c.push({top:0,left:0,width:t,height:l,key:"full-mask"});else{const e=Array(9).fill().map(()=>Array(9).fill(!1));s.forEach(t=>{if("row"===t.type)for(let r=0;r<9;r++)e[t.row][r]=!0;if("col"===t.type)for(let r=0;r<9;r++)e[r][t.col]=!0;if("box"===t.type){const r=3*t.boxRow,o=3*t.boxCol;for(let t=r;t<r+3;t++)for(let r=o;r<o+3;r++)e[t][r]=!0}"cell"===t.type&&(e[t.row][t.col]=!0)});for(let t=0;t<9;t++)for(let r=0;r<9;r++)e[t][r]||c.push({top:t*a,left:r*i,width:i,height:a,key:`cell-${t}-${r}`})}return v.jsx("div",{className:"technique-mask-overlay",style:{position:"absolute",top:0,left:0,width:`${t}px`,height:`${l}px`,pointerEvents:"none",zIndex:10,boxSizing:"border-box"},children:c.map(e=>v.jsx("div",{style:{position:"absolute",top:`${e.top}px`,left:`${e.left}px`,width:`${e.width}px`,height:`${e.height}px`,backgroundColor:"rgba(0, 0, 0, 0.4)",pointerEvents:"none",zIndex:1}},e.key))})},ci=({highlightedCells:e,boardWidth:t,boardHeight:r,isPortrait:o=!1})=>{if(!e||!Array.isArray(e))return null;const n=e.filter(e=>e&&!0===e.techniqueIndicator&&e.techniqueType&&e.techniqueType.includes("nakedPair")&&"number"==typeof e.row&&"number"==typeof e.col&&e.row>=0&&e.row<9&&e.col>=0&&e.col<9);if(0===n.length)return null;let i,a,l;o&&r?(i=t/9,a=r/9,l=r):(i=t/9,a=i,l=t);const s=e=>e.pairNotes&&Array.isArray(e.pairNotes)&&0!==e.pairNotes.length?e.pairNotes.map(t=>{if("number"!=typeof t||t<1||t>9)return null;const r=t-1,o=Math.floor(r/3),n=r%3,l=.35*Math.min(i,a),s=.05*Math.min(i,a),c=(Math.min(i,a)-2*s)/3,d=s+n*c+(c-l)/2,u=s+o*c+(c-l)/2;return v.jsx("div",{style:{position:"absolute",left:`${d}px`,top:`${u}px`,width:`${l}px`,height:`${l}px`,backgroundColor:"#00FF00",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,fontWeight:"bold",border:"1px solid rgba(255, 255, 255, 0.5)",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)"},children:v.jsx("span",{style:{fontSize:.7*l+"px",fontWeight:"bold",color:"#000000",zIndex:65,textShadow:"1px 1px 1px rgba(255, 255, 255, 0.5)"},children:t})},`pair-note-${e.row}-${e.col}-${t}`)}):null,c=e=>e.notesToRemove&&Array.isArray(e.notesToRemove)&&0!==e.notesToRemove.length?e.notesToRemove.map(t=>{if("number"!=typeof t||t<1||t>9)return null;const r=t-1,o=Math.floor(r/3),n=r%3,l=.35*Math.min(i,a),s=.05*Math.min(i,a),c=(Math.min(i,a)-2*s)/3,d=s+n*c+(c-l)/2,u=s+o*c+(c-l)/2;return v.jsx("div",{style:{position:"absolute",left:`${d}px`,top:`${u}px`,width:`${l}px`,height:`${l}px`,backgroundColor:"#FF0000",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60,fontWeight:"bold",border:"1px solid rgba(255, 255, 255, 0.5)",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.3)"},children:v.jsx("span",{style:{fontSize:.7*l+"px",fontWeight:"bold",color:"#FFFFFF",zIndex:65,textShadow:"1px 1px 1px rgba(0, 0, 0, 0.5)"},children:t})},`removable-note-${e.row}-${e.col}-${t}`)}):null;return v.jsx("div",{className:"naked-pair-overlay",style:{position:"absolute",top:0,left:0,width:`${t}px`,height:`${l}px`,pointerEvents:"none",zIndex:14,boxSizing:"border-box",background:"transparent"},children:n.map(e=>{const t=(e=>{const t={position:"absolute",left:e.col*i+"px",top:e.row*a+"px",width:`${i}px`,height:`${a}px`,pointerEvents:"none",boxSizing:"border-box",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease"},r={pair:{backgroundColor:"transparent",borderColor:"transparent",border:"none",zIndex:35},target:{backgroundColor:"transparent",borderColor:"transparent",border:"none",zIndex:30},removal:{backgroundColor:"transparent",borderColor:"transparent",border:"none",zIndex:25},default:{backgroundColor:"transparent",borderColor:"transparent",border:"none",zIndex:35}};return e.highlightType&&r[e.highlightType]?{...t,...r[e.highlightType]}:e.isTarget?{...t,...r.target}:{...t,...r.pair}})(e);return v.jsxs("div",{style:t,children:[s(e),c(e)]},`naked-pair-${e.row}-${e.col}-${e.highlightType||"default"}-${e.isTarget?"target":"normal"}`)})})};
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
function di(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function ui(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,yi(o.key),o)}}function fi(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=vi(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}function pi(e,t,r){return(t=yi(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function hi(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function mi(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?hi(Object(r),!0).forEach(function(t){pi(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):hi(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function gi(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,i,a,l=[],s=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(o=i.call(r)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(d){c=!0,n=d}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw n}}return l}}(e,t)||vi(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xi(e){return function(e){if(Array.isArray(e))return di(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||vi(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function yi(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function bi(e){return(bi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function vi(e,t){if(e){if("string"==typeof e)return di(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?di(e,t):void 0}}var wi=function(){},Ci={},ki={},ji=null,$i={mark:wi,measure:wi};try{"undefined"!=typeof window&&(Ci=window),"undefined"!=typeof document&&(ki=document),"undefined"!=typeof MutationObserver&&(ji=MutationObserver),"undefined"!=typeof performance&&($i=performance)}catch(sf){}var Si=(Ci.navigator||{}).userAgent,zi=void 0===Si?"":Si,Ti=Ci,Ai=ki,Pi=ji,Ni=$i;Ti.document;var Ii,Ri=!!Ai.documentElement&&!!Ai.head&&"function"==typeof Ai.addEventListener&&"function"==typeof Ai.createElement,Ei=~zi.indexOf("MSIE")||~zi.indexOf("Trident/"),Mi={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Fi=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Li="classic",Wi="duotone",Oi="sharp",Di="sharp-duotone",qi="chisel",Hi="etch",Bi="jelly",_i="jelly-duo",Yi="jelly-fill",Gi="notdog",Ui="notdog-duo",Xi="slab",Zi="slab-press",Vi="thumbprint",Ji="utility",Ki="utility-duo",Qi="utility-fill",ea="whiteboard",ta=[Li,Wi,Oi,Di,qi,Hi,Bi,_i,Yi,Gi,Ui,Xi,Zi,Vi,Ji,Ki,Qi,ea];pi(pi(pi(pi(pi(pi(pi(pi(pi(pi(Ii={},Li,"Classic"),Wi,"Duotone"),Oi,"Sharp"),Di,"Sharp Duotone"),qi,"Chisel"),Hi,"Etch"),Bi,"Jelly"),_i,"Jelly Duo"),Yi,"Jelly Fill"),Gi,"Notdog"),pi(pi(pi(pi(pi(pi(pi(pi(Ii,Ui,"Notdog Duo"),Xi,"Slab"),Zi,"Slab Press"),Vi,"Thumbprint"),Ji,"Utility"),Ki,"Utility Duo"),Qi,"Utility Fill"),ea,"Whiteboard");var ra=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),oa=["fak","fa-kit","fakd","fa-kit-duotone"],na={fak:"kit","fa-kit":"kit"},ia={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"};pi(pi({},"kit","Kit"),"kit-duotone","Kit Duotone");var aa,la={kit:"fak"},sa={"kit-duotone":"fakd"},ca="duotone-group",da="swap-opacity",ua="primary",fa="secondary";pi(pi(pi(pi(pi(pi(pi(pi(pi(pi(aa={},"classic","Classic"),"duotone","Duotone"),"sharp","Sharp"),"sharp-duotone","Sharp Duotone"),"chisel","Chisel"),"etch","Etch"),"jelly","Jelly"),"jelly-duo","Jelly Duo"),"jelly-fill","Jelly Fill"),"notdog","Notdog"),pi(pi(pi(pi(pi(pi(pi(pi(aa,"notdog-duo","Notdog Duo"),"slab","Slab"),"slab-press","Slab Press"),"thumbprint","Thumbprint"),"utility","Utility"),"utility-duo","Utility Duo"),"utility-fill","Utility Fill"),"whiteboard","Whiteboard");pi(pi({},"kit","Kit"),"kit-duotone","Kit Duotone");var pa={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},ha=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"]),ma=[1,2,3,4,5,6,7,8,9,10],ga=ma.concat([11,12,13,14,15,16,17,18,19,20]),xa=[].concat(xi(Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]})),["solid","regular","light","thin","duotone","brands","semibold"],["aw","fw","pull-left","pull-right"],["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ca,da,ua,fa]).concat(ma.map(function(e){return"".concat(e,"x")})).concat(ga.map(function(e){return"w-".concat(e)})),ya="___FONT_AWESOME___",ba="svg-inline--fa",va="data-fa-i2svg",wa="data-fa-pseudo-element",Ca="data-prefix",ka="data-icon",ja="fontawesome-i2svg",$a=["HTML","HEAD","STYLE","SCRIPT"],Sa=["::before","::after",":before",":after"],za=function(){try{return!0}catch(e){return!1}}();function Ta(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[Li]}})}var Aa=mi({},Mi);Aa[Li]=mi(mi(mi(mi({},{"fa-duotone":"duotone"}),Mi[Li]),na),ia);var Pa=Ta(Aa),Na=mi({},{chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}});Na[Li]=mi(mi(mi(mi({},{duotone:"fad"}),Na[Li]),la),sa);var Ia=Ta(Na),Ra=mi({},pa);Ra[Li]=mi(mi({},Ra[Li]),{fak:"fa-kit"});var Ea=Ta(Ra),Ma=mi({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}});Ma[Li]=mi(mi({},Ma[Li]),{"fa-kit":"fak"}),Ta(Ma);var Fa=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,La="fa-layers-text",Wa=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;Ta(mi({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}}));var Oa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Da={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qa=[].concat(xi(["kit"]),xi(xa)),Ha=Ti.FontAwesomeConfig||{};if(Ai&&"function"==typeof Ai.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=gi(e,2),r=t[0],o=t[1],n=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=Ai.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(r));null!=n&&(Ha[o]=n)})}var Ba={styleDefault:"solid",familyDefault:Li,cssPrefix:"fa",replacementClass:ba,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ha.familyPrefix&&(Ha.cssPrefix=Ha.familyPrefix);var _a=mi(mi({},Ba),Ha);_a.autoReplaceSvg||(_a.observeMutations=!1);var Ya={};Object.keys(Ba).forEach(function(e){Object.defineProperty(Ya,e,{enumerable:!0,set:function(t){_a[e]=t,Ga.forEach(function(e){return e(Ya)})},get:function(){return _a[e]}})}),Object.defineProperty(Ya,"familyPrefix",{enumerable:!0,set:function(e){_a.cssPrefix=e,Ga.forEach(function(e){return e(Ya)})},get:function(){return _a.cssPrefix}}),Ti.FontAwesomeConfig=Ya;var Ga=[];var Ua=16,Xa={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Za(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function Va(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function Ja(e){return e.classList?Va(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ka(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qa(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function el(e){return e.size!==Xa.size||e.x!==Xa.x||e.y!==Xa.y||e.rotate!==Xa.rotate||e.flipX||e.flipY}function tl(){var e="fa",t=ba,r=Ya.cssPrefix,o=Ya.replacementClass,n=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";\n  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";\n  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}';if(r!==e||o!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(r,"-")).replace(a,"--".concat(r,"-")).replace(l,".".concat(o))}return n}var rl=!1;function ol(){Ya.autoAddCss&&!rl&&(!function(e){if(e&&Ri){var t=Ai.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=Ai.head.childNodes,o=null,n=r.length-1;n>-1;n--){var i=r[n],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(o=i)}Ai.head.insertBefore(t,o)}}(tl()),rl=!0)}var nl={mixout:function(){return{dom:{css:tl,insertCss:ol}}},hooks:function(){return{beforeDOMElementCreation:function(){ol()},beforeI2svg:function(){ol()}}}},il=Ti||{};il[ya]||(il[ya]={}),il[ya].styles||(il[ya].styles={}),il[ya].hooks||(il[ya].hooks={}),il[ya].shims||(il[ya].shims=[]);var al=il[ya],ll=[],sl=function(){Ai.removeEventListener("DOMContentLoaded",sl),cl=1,ll.map(function(e){return e()})},cl=!1;function dl(e){var t=e.tag,r=e.attributes,o=void 0===r?{}:r,n=e.children,i=void 0===n?[]:n;return"string"==typeof e?Ka(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(Ka(e[r]),'" ')},"").trim()}(o),">").concat(i.map(dl).join(""),"</").concat(t,">")}function ul(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}Ri&&((cl=(Ai.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ai.readyState))||Ai.addEventListener("DOMContentLoaded",sl));var fl=function(e,t,r,o){var n,i,a,l=Object.keys(e),s=l.length,c=void 0!==o?function(e,t){return function(r,o,n,i){return e.call(t,r,o,n,i)}}(t,o):t;for(void 0===r?(n=1,a=e[l[0]]):(n=0,a=r);n<s;n++)a=c(a,e[i=l[n]],i,e);return a};function pl(e){return 1!==xi(e).length?null:e.codePointAt(0).toString(16)}function hl(e){return Object.keys(e).reduce(function(t,r){var o=e[r];return!!o.icon?t[o.iconName]=o.icon:t[r]=o,t},{})}function ml(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,o=void 0!==r&&r,n=hl(t);"function"!=typeof al.hooks.addPack||o?al.styles[e]=mi(mi({},al.styles[e]||{}),n):al.hooks.addPack(e,hl(t)),"fas"===e&&ml("fa",t)}var gl=al.styles,xl=al.shims,yl=Object.keys(Ea),bl=yl.reduce(function(e,t){return e[t]=Object.keys(Ea[t]),e},{}),vl=null,wl={},Cl={},kl={},jl={},$l={};function Sl(e,t){var r,o=t.split("-"),n=o[0],i=o.slice(1).join("-");return n!==e||""===i||(r=i,~qa.indexOf(r))?null:i}var zl,Tl=function(){var e=function(e){return fl(gl,function(t,r,o){return t[o]=fl(r,e,{}),t},{})};wl=e(function(e,t,r){(t[3]&&(e[t[3]]=r),t[2])&&t[2].filter(function(e){return"number"==typeof e}).forEach(function(t){e[t.toString(16)]=r});return e}),Cl=e(function(e,t,r){(e[r]=r,t[2])&&t[2].filter(function(e){return"string"==typeof e}).forEach(function(t){e[t]=r});return e}),$l=e(function(e,t,r){var o=t[2];return e[r]=r,o.forEach(function(t){e[t]=r}),e});var t="far"in gl||Ya.autoFetchSvg,r=fl(xl,function(e,r){var o=r[0],n=r[1],i=r[2];return"far"!==n||t||(n="fas"),"string"==typeof o&&(e.names[o]={prefix:n,iconName:i}),"number"==typeof o&&(e.unicodes[o.toString(16)]={prefix:n,iconName:i}),e},{names:{},unicodes:{}});kl=r.names,jl=r.unicodes,vl=Rl(Ya.styleDefault,{family:Ya.familyDefault})};function Al(e,t){return(wl[e]||{})[t]}function Pl(e,t){return($l[e]||{})[t]}function Nl(e){return kl[e]||{prefix:null,iconName:null}}function Il(){return vl}zl=function(e){vl=Rl(e.styleDefault,{family:Ya.familyDefault})},Ga.push(zl),Tl();function Rl(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).family,r=void 0===t?Li:t,o=Pa[r][e];if(r===Wi&&!e)return"fad";var n=Ia[r][e]||Ia[r][o],i=e in al.styles?e:null;return n||i||null}function El(e){return e.sort().filter(function(e,t,r){return r.indexOf(e)===t})}var Ml=ha.concat(oa);function Fl(e){var t,r,o=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).skipLookups,n=void 0!==o&&o,i=null,a=El(e.filter(function(e){return Ml.includes(e)})),l=El(e.filter(function(e){return!Ml.includes(e)})),s=gi(a.filter(function(e){return i=e,!Fi.includes(e)}),1)[0],c=void 0===s?null:s,d=function(e){var t=Li,r=yl.reduce(function(e,t){return e[t]="".concat(Ya.cssPrefix,"-").concat(t),e},{});return ta.forEach(function(o){(e.includes(r[o])||e.some(function(e){return bl[o].includes(e)}))&&(t=o)}),t}(a),u=mi(mi({},(t=[],r=null,l.forEach(function(e){var o=Sl(Ya.cssPrefix,e);o?r=o:e&&t.push(e)}),{iconName:r,rest:t})),{},{prefix:Rl(c,{family:d})});return mi(mi(mi({},u),function(e){var t=e.values,r=e.family,o=e.canonical,n=e.givenPrefix,i=void 0===n?"":n,a=e.styles,l=void 0===a?{}:a,s=e.config,c=void 0===s?{}:s,d=r===Wi,u=t.includes("fa-duotone")||t.includes("fad"),f="duotone"===c.familyDefault,p="fad"===o.prefix||"fa-duotone"===o.prefix;!d&&(u||f||p)&&(o.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab");if(!o.prefix&&Ll.includes(r)){if(Object.keys(l).find(function(e){return Wl.includes(e)})||c.autoFetchSvg){var h=ra.get(r).defaultShortPrefixId;o.prefix=h,o.iconName=Pl(o.prefix,o.iconName)||o.iconName}}"fa"!==o.prefix&&"fa"!==i||(o.prefix=Il()||"fas");return o}({values:e,family:d,styles:gl,config:Ya,canonical:u,givenPrefix:i})),function(e,t,r){var o=r.prefix,n=r.iconName;if(e||!o||!n)return{prefix:o,iconName:n};var i="fa"===t?Nl(n):{},a=Pl(o,n);n=i.iconName||a||n,"far"!==(o=i.prefix||o)||gl.far||!gl.fas||Ya.autoFetchSvg||(o="fas");return{prefix:o,iconName:n}}(n,i,u))}var Ll=ta.filter(function(e){return e!==Li||e!==Wi}),Wl=Object.keys(pa).filter(function(e){return e!==Li}).map(function(e){return Object.keys(pa[e])}).flat();var Ol=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}},t=[{key:"add",value:function(){for(var e=this,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){e.definitions[t]=mi(mi({},e.definitions[t]||{}),n[t]),ml(t,n[t]);var r=Ea[Li][t];r&&ml(r,n[t]),Tl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(t){var o=r[t],n=o.prefix,i=o.iconName,a=o.icon,l=a[2];e[n]||(e[n]={}),l.length>0&&l.forEach(function(t){"string"==typeof t&&(e[n][t]=a)}),e[n][i]=a}),e}}],t&&ui(e.prototype,t),r&&ui(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}(),Dl=[],ql={},Hl={},Bl=Object.keys(Hl);function _l(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];return(ql[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(o))}),t}function Yl(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];(ql[e]||[]).forEach(function(e){e.apply(null,r)})}function Gl(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Hl[e]?Hl[e].apply(null,t):void 0}function Ul(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,r=e.prefix||Il();if(t)return t=Pl(r,t)||t,ul(Xl.definitions,r,t)||ul(al.styles,r,t)}var Xl=new Ol,Zl={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ri?(Yl("beforeI2svg",e),Gl("pseudoElements2svg",e),Gl("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.autoReplaceSvgRoot;!1===Ya.autoReplaceSvg&&(Ya.autoReplaceSvg=!0),Ya.observeMutations=!0,e=function(){Jl({autoReplaceSvgRoot:r}),Yl("watch",t)},Ri&&(cl?setTimeout(e,0):ll.push(e))}},Vl={noAuto:function(){Ya.autoReplaceSvg=!1,Ya.observeMutations=!1,Yl("noAuto")},config:Ya,dom:Zl,parse:{icon:function(e){if(null===e)return null;if("object"===bi(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Pl(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],r=Rl(e[0]);return{prefix:r,iconName:Pl(r,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(Ya.cssPrefix,"-"))>-1||e.match(Fa))){var o=Fl(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||Il(),iconName:Pl(o.prefix,o.iconName)||o.iconName}}if("string"==typeof e){var n=Il();return{prefix:n,iconName:Pl(n,e)||e}}}},library:Xl,findIconDefinition:Ul,toHtml:dl},Jl=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,t=void 0===e?Ai:e;(Object.keys(al.styles).length>0||Ya.autoFetchSvg)&&Ri&&Ya.autoReplaceSvg&&Vl.dom.i2svg({node:t})};function Kl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return dl(e)})}}),Object.defineProperty(e,"node",{get:function(){if(Ri){var t=Ai.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Ql(e){var t=e.icons,r=t.main,o=t.mask,n=e.prefix,i=e.iconName,a=e.transform,l=e.symbol,s=e.maskId,c=e.extra,d=e.watchable,u=void 0!==d&&d,f=o.found?o:r,p=f.width,h=f.height,m=[Ya.replacementClass,i?"".concat(Ya.cssPrefix,"-").concat(i):""].filter(function(e){return-1===c.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(c.classes).join(" "),g={children:[],attributes:mi(mi({},c.attributes),{},{"data-prefix":n,"data-icon":i,class:m,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(h)})};(function(e){return["aria-label","aria-labelledby","title","role"].some(function(t){return t in e})})(c.attributes)||c.attributes["aria-hidden"]||(g.attributes["aria-hidden"]="true"),u&&(g.attributes[va]="");var x=mi(mi({},g),{},{prefix:n,iconName:i,main:r,mask:o,maskId:s,transform:a,symbol:l,styles:mi({},c.styles)}),y=o.found&&r.found?Gl("generateAbstractMask",x)||{children:[],attributes:{}}:Gl("generateAbstractIcon",x)||{children:[],attributes:{}},b=y.children,v=y.attributes;return x.children=b,x.attributes=v,l?function(e){var t=e.prefix,r=e.iconName,o=e.children,n=e.attributes,i=e.symbol,a=!0===i?"".concat(t,"-").concat(Ya.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:mi(mi({},n),{},{id:a}),children:o}]}]}(x):function(e){var t=e.children,r=e.main,o=e.mask,n=e.attributes,i=e.styles,a=e.transform;if(el(a)&&r.found&&!o.found){var l={x:r.width/r.height/2,y:.5};n.style=Qa(mi(mi({},i),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}(x)}function es(e){var t=e.content,r=e.width,o=e.height,n=e.transform,i=e.extra,a=e.watchable,l=void 0!==a&&a,s=mi(mi({},i.attributes),{},{class:i.classes.join(" ")});l&&(s[va]="");var c=mi({},i.styles);el(n)&&(c.transform=function(e){var t=e.transform,r=e.width,o=void 0===r?16:r,n=e.height,i=void 0===n?16:n,a=e.startCentered,l=void 0!==a&&a,s="";return s+=l&&Ei?"translate(".concat(t.x/Ua-o/2,"em, ").concat(t.y/Ua-i/2,"em) "):l?"translate(calc(-50% + ".concat(t.x/Ua,"em), calc(-50% + ").concat(t.y/Ua,"em)) "):"translate(".concat(t.x/Ua,"em, ").concat(t.y/Ua,"em) "),s+="scale(".concat(t.size/Ua*(t.flipX?-1:1),", ").concat(t.size/Ua*(t.flipY?-1:1),") "),s+"rotate(".concat(t.rotate,"deg) ")}({transform:n,startCentered:!0,width:r,height:o}),c["-webkit-transform"]=c.transform);var d=Qa(c);d.length>0&&(s.style=d);var u=[];return u.push({tag:"span",attributes:s,children:[t]}),u}var ts=al.styles;function rs(e){var t=e[0],r=e[1],o=gi(e.slice(4),1)[0];return{found:!0,width:t,height:r,icon:Array.isArray(o)?{tag:"g",attributes:{class:"".concat(Ya.cssPrefix,"-").concat(Da.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ya.cssPrefix,"-").concat(Da.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Ya.cssPrefix,"-").concat(Da.PRIMARY),fill:"currentColor",d:o[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:o}}}}var os={found:!1,width:512,height:512};function ns(e,t){var r=t;return"fa"===t&&null!==Ya.styleDefault&&(t=Il()),new Promise(function(o,n){if("fa"===r){var i=Nl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ts[t]&&ts[t][e])return o(rs(ts[t][e]));!function(e,t){za||Ya.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),o(mi(mi({},os),{},{icon:Ya.showMissingIcons&&e&&Gl("missingIconAbstract")||{}}))})}var is=function(){},as=Ya.measurePerformance&&Ni&&Ni.mark&&Ni.measure?Ni:{mark:is,measure:is},ls='FA "7.1.0"',ss=function(e){as.mark("".concat(ls," ").concat(e," ends")),as.measure("".concat(ls," ").concat(e),"".concat(ls," ").concat(e," begins"),"".concat(ls," ").concat(e," ends"))},cs=function(e){return as.mark("".concat(ls," ").concat(e," begins")),function(){return ss(e)}},ds=function(){};function us(e){return"string"==typeof(e.getAttribute?e.getAttribute(va):null)}function fs(e){return Ai.createElementNS("http://www.w3.org/2000/svg",e)}function ps(e){return Ai.createElement(e)}function hs(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ceFn,r=void 0===t?"svg"===e.tag?fs:ps:t;if("string"==typeof e)return Ai.createTextNode(e);var o=r(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){o.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){o.appendChild(hs(e,{ceFn:r}))}),o}var ms={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(hs(e),t)}),null===t.getAttribute(va)&&Ya.keepOriginalSource){var r=Ai.createComment(function(e){var t=" ".concat(e.outerHTML," ");return"".concat(t,"Font Awesome fontawesome.com ")}(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){var t=e[0],r=e[1];if(~Ja(t).indexOf(Ya.replacementClass))return ms.replace(e);var o=new RegExp("".concat(Ya.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(e,t){return t===Ya.replacementClass||t.match(o)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),0===n.toNode.length?t.removeAttribute("class"):t.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(e){return dl(e)}).join("\n");t.setAttribute(va,""),t.innerHTML=i}};function gs(e){e()}function xs(e,t){var r="function"==typeof t?t:ds;if(0===e.length)r();else{var o=gs;"async"===Ya.mutateApproach&&(o=Ti.requestAnimationFrame||gs),o(function(){var t=!0===Ya.autoReplaceSvg?ms.replace:ms[Ya.autoReplaceSvg]||ms.replace,o=cs("mutate");e.map(t),o(),r()})}}var ys=!1;function bs(){ys=!0}function vs(){ys=!1}var ws=null;function Cs(e){if(Pi&&Ya.observeMutations){var t=e.treeCallback,r=void 0===t?ds:t,o=e.nodeCallback,n=void 0===o?ds:o,i=e.pseudoElementsCallback,a=void 0===i?ds:i,l=e.observeMutationsRoot,s=void 0===l?Ai:l;ws=new Pi(function(e){if(!ys){var t=Il();Va(e).forEach(function(e){if("childList"===e.type&&e.addedNodes.length>0&&!us(e.addedNodes[0])&&(Ya.searchPseudoElements&&a(e.target),r(e.target)),"attributes"===e.type&&e.target.parentNode&&Ya.searchPseudoElements&&a([e.target],!0),"attributes"===e.type&&us(e.target)&&~Oa.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){var t=e.getAttribute?e.getAttribute(Ca):null,r=e.getAttribute?e.getAttribute(ka):null;return t&&r}(e.target)){var o=Fl(Ja(e.target)),i=o.prefix,l=o.iconName;e.target.setAttribute(Ca,i||t),l&&e.target.setAttribute(ka,l)}else(s=e.target)&&s.classList&&s.classList.contains&&s.classList.contains(Ya.replacementClass)&&n(e.target);var s})}}),Ri&&ws.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ks(e){var t,r,o=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),i=void 0!==e.innerText?e.innerText.trim():"",a=Fl(Ja(e));return a.prefix||(a.prefix=Il()),o&&n&&(a.prefix=o,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&i.length>0&&(a.iconName=(t=a.prefix,r=e.innerText,(Cl[t]||{})[r]||Al(a.prefix,pl(e.innerText)))),!a.iconName&&Ya.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function js(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},r=ks(e),o=r.iconName,n=r.prefix,i=r.rest,a=function(e){return Va(e.attributes).reduce(function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e},{})}(e),l=_l("parseNodeAttributes",{},e),s=t.styleParser?function(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(e,t){var r=t.split(":"),o=r[0],n=r.slice(1);return o&&n.length>0&&(e[o]=n.join(":").trim()),e},{})),r}(e):[];return mi({iconName:o,prefix:n,transform:Xa,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},l)}var $s=al.styles;function Ss(e){var t="nest"===Ya.autoReplaceSvg?js(e,{styleParser:!1}):js(e);return~t.extra.classes.indexOf(La)?Gl("generateLayersText",e,t):Gl("generateSvgReplacementMutation",e,t)}function zs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!Ri)return Promise.resolve();var r=Ai.documentElement.classList,o=function(e){return r.add("".concat(ja,"-").concat(e))},n=function(e){return r.remove("".concat(ja,"-").concat(e))},i=Ya.autoFetchSvg?[].concat(xi(oa),xi(ha)):Fi.concat(Object.keys($s));i.includes("fa")||i.push("fa");var a=[".".concat(La,":not([").concat(va,"])")].concat(i.map(function(e){return".".concat(e,":not([").concat(va,"])")})).join(", ");if(0===a.length)return Promise.resolve();var l=[];try{l=Va(e.querySelectorAll(a))}catch(d){}if(!(l.length>0))return Promise.resolve();o("pending"),n("complete");var s=cs("onTree"),c=l.reduce(function(e,t){try{var r=Ss(t);r&&e.push(r)}catch(d){za||"MissingIcon"===d.name&&console.error(d)}return e},[]);return new Promise(function(e,r){Promise.all(c).then(function(r){xs(r,function(){o("active"),o("complete"),n("pending"),"function"==typeof t&&t(),s(),e()})}).catch(function(e){s(),r(e)})})}function Ts(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Ss(e).then(function(e){e&&xs([e],t)})}var As=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,o=void 0===r?Xa:r,n=t.symbol,i=void 0!==n&&n,a=t.mask,l=void 0===a?null:a,s=t.maskId,c=void 0===s?null:s,d=t.classes,u=void 0===d?[]:d,f=t.attributes,p=void 0===f?{}:f,h=t.styles,m=void 0===h?{}:h;if(e){var g=e.prefix,x=e.iconName,y=e.icon;return Kl(mi({type:"icon"},e),function(){return Yl("beforeDOMElementCreation",{iconDefinition:e,params:t}),Ql({icons:{main:rs(y),mask:l?rs(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:x,transform:mi(mi({},Xa),o),symbol:i,maskId:c,extra:{attributes:p,styles:m,classes:u}})})}},Ps={mixout:function(){return{icon:(e=As,function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(t||{}).icon?t:Ul(t||{}),n=r.mask;return n&&(n=(n||{}).icon?n:Ul(n||{})),e(o,mi(mi({},r),{},{mask:n}))})};var e},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=zs,e.nodeCallback=Ts,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,r=void 0===t?Ai:t,o=e.callback;return zs(r,void 0===o?function(){}:o)},e.generateSvgReplacementMutation=function(e,t){var r=t.iconName,o=t.prefix,n=t.transform,i=t.symbol,a=t.mask,l=t.maskId,s=t.extra;return new Promise(function(t,c){Promise.all([ns(r,o),a.iconName?ns(a.iconName,a.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(a){var c=gi(a,2),d=c[0],u=c[1];t([e,Ql({icons:{main:d,mask:u},prefix:o,iconName:r,transform:n,symbol:i,maskId:l,extra:s,watchable:!0})])}).catch(c)})},e.generateAbstractIcon=function(e){var t,r=e.children,o=e.attributes,n=e.main,i=e.transform,a=Qa(e.styles);return a.length>0&&(o.style=a),el(i)&&(t=Gl("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(t||n.icon),{children:r,attributes:o}}}},Ns={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.classes,o=void 0===r?[]:r;return Kl({type:"layer"},function(){Yl("beforeDOMElementCreation",{assembler:e,params:t});var r=[];return e(function(e){Array.isArray(e)?e.map(function(e){r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(Ya.cssPrefix,"-layers")].concat(xi(o)).join(" ")},children:r}]})}}}},Is={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.title,o=void 0===r?null:r,n=t.classes,i=void 0===n?[]:n,a=t.attributes,l=void 0===a?{}:a,s=t.styles,c=void 0===s?{}:s;return Kl({type:"counter",content:e},function(){return Yl("beforeDOMElementCreation",{content:e,params:t}),function(e){var t=e.content,r=e.extra,o=mi(mi({},r.attributes),{},{class:r.classes.join(" ")}),n=Qa(r.styles);n.length>0&&(o.style=n);var i=[];return i.push({tag:"span",attributes:o,children:[t]}),i}({content:e.toString(),title:o,extra:{attributes:l,styles:c,classes:["".concat(Ya.cssPrefix,"-layers-counter")].concat(xi(i))}})})}}}},Rs={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,o=void 0===r?Xa:r,n=t.classes,i=void 0===n?[]:n,a=t.attributes,l=void 0===a?{}:a,s=t.styles,c=void 0===s?{}:s;return Kl({type:"text",content:e},function(){return Yl("beforeDOMElementCreation",{content:e,params:t}),es({content:e,transform:mi(mi({},Xa),o),extra:{attributes:l,styles:c,classes:["".concat(Ya.cssPrefix,"-layers-text")].concat(xi(i))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var r=t.transform,o=t.extra,n=null,i=null;if(Ei){var a=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();n=l.width/a,i=l.height/a}return Promise.resolve([e,es({content:e.innerHTML,width:n,height:i,transform:r,extra:o,watchable:!0})])}}},Es=new RegExp('"',"ug"),Ms=[1105920,1112319],Fs=mi(mi(mi(mi({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),Ls=Object.keys(Fs).reduce(function(e,t){return e[t.toLowerCase()]=Fs[t],e},{}),Ws=Object.keys(Ls).reduce(function(e,t){var r=Ls[t];return e[t]=r[900]||xi(Object.entries(r))[0][1],e},{});function Os(e,t){var r="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(function(o,n){if(null!==e.getAttribute(r))return o();var i,a,l,s=Va(e.children).filter(function(e){return e.getAttribute(wa)===t})[0],c=Ti.getComputedStyle(e,t),d=c.getPropertyValue("font-family"),u=d.match(Wa),f=c.getPropertyValue("font-weight"),p=c.getPropertyValue("content");if(s&&!u)return e.removeChild(s),o();if(u&&"none"!==p&&""!==p){var h=c.getPropertyValue("content"),m=function(e,t){var r=e.replace(/^['"]|['"]$/g,"").toLowerCase(),o=parseInt(t),n=isNaN(o)?"normal":o;return(Ls[r]||{})[n]||Ws[r]}(d,f),g=function(e){return pl(xi(e.replace(Es,""))[0]||"")}(h),x=u[0].startsWith("FontAwesome"),y=function(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),r=e.getPropertyValue("content").replace(Es,""),o=r.codePointAt(0),n=o>=Ms[0]&&o<=Ms[1],i=2===r.length&&r[0]===r[1];return n||i||t}(c),b=Al(m,g),v=b;if(x){var w=(a=jl[i=g],l=Al("fas",i),a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null});w.iconName&&w.prefix&&(b=w.iconName,m=w.prefix)}if(!b||y||s&&s.getAttribute(Ca)===m&&s.getAttribute(ka)===v)o();else{e.setAttribute(r,v),s&&e.removeChild(s);var C={iconName:null,prefix:null,transform:Xa,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},k=C.extra;k.attributes[wa]=t,ns(b,m).then(function(n){var i=Ql(mi(mi({},C),{},{icons:{main:n,mask:{prefix:null,iconName:null,rest:[]}},prefix:m,iconName:v,extra:k,watchable:!0})),a=Ai.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(a,e.firstChild):e.appendChild(a),a.outerHTML=i.map(function(e){return dl(e)}).join("\n"),e.removeAttribute(r),o()}).catch(n)}}else o()})}function Ds(e){return Promise.all([Os(e,"::before"),Os(e,"::after")])}function qs(e){return!(e.parentNode===document.head||~$a.indexOf(e.tagName.toUpperCase())||e.getAttribute(wa)||e.parentNode&&"svg"===e.parentNode.tagName)}var Hs=function(e){return!!e&&Sa.some(function(t){return e.includes(t)})},Bs=function(e){if(!e)return[];var t,r=new Set,o=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()}),n=fi(o=o.flatMap(function(e){return e.includes("(")?e:e.split(",").map(function(e){return e.trim()})}));try{for(n.s();!(t=n.n()).done;){var i=t.value;if(Hs(i)){var a=Sa.reduce(function(e,t){return e.replace(t,"")},i);""!==a&&"*"!==a&&r.add(a)}}}catch(l){n.e(l)}finally{n.f()}return r};function _s(e){if(Ri){var t;if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])t=e;else if(Ya.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r,o=new Set,n=fi(document.styleSheets);try{for(n.s();!(r=n.n()).done;){var i=r.value;try{var a,l=fi(i.cssRules);try{for(l.s();!(a=l.n()).done;){var s,c=a.value,d=fi(Bs(c.selectorText));try{for(d.s();!(s=d.n()).done;){var u=s.value;o.add(u)}}catch(p){d.e(p)}finally{d.f()}}}catch(p){l.e(p)}finally{l.f()}}catch(h){Ya.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(h.message,')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))}}}catch(p){n.e(p)}finally{n.f()}if(!o.size)return;var f=Array.from(o).join(", ");try{t=e.querySelectorAll(f)}catch(m){}}return new Promise(function(e,r){var o=Va(t).filter(qs).map(Ds),n=cs("searchPseudoElements");bs(),Promise.all(o).then(function(){n(),vs(),e()}).catch(function(){n(),vs(),r()})})}}var Ys=!1,Gs=function(e){return e.toLowerCase().split(" ").reduce(function(e,t){var r=t.toLowerCase().split("-"),o=r[0],n=r.slice(1).join("-");if(o&&"h"===n)return e.flipX=!0,e;if(o&&"v"===n)return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(o){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Us={mixout:function(){return{parse:{transform:function(e){return Gs(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-transform");return r&&(e.transform=Gs(r)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,r=e.transform,o=e.containerWidth,n=e.iconWidth,i={transform:"translate(".concat(o/2," 256)")},a="translate(".concat(32*r.x,", ").concat(32*r.y,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),s="rotate(".concat(r.rotate," 0 0)"),c={outer:i,inner:{transform:"".concat(a," ").concat(l," ").concat(s)},path:{transform:"translate(".concat(n/2*-1," -256)")}};return{tag:"g",attributes:mi({},c.outer),children:[{tag:"g",attributes:mi({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:mi(mi({},t.icon.attributes),c.path)}]}]}}}},Xs={x:0,y:0,width:"100%",height:"100%"};function Zs(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var Vs,Js={hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-mask"),o=r?Fl(r.split(" ").map(function(e){return e.trim()})):{prefix:null,iconName:null,rest:[]};return o.prefix||(o.prefix=Il()),e.mask=o,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t,r=e.children,o=e.attributes,n=e.main,i=e.mask,a=e.maskId,l=e.transform,s=n.width,c=n.icon,d=i.width,u=i.icon,f=function(e){var t=e.transform,r=e.containerWidth,o=e.iconWidth,n={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)");return{outer:n,inner:{transform:"".concat(i," ").concat(a," ").concat(l)},path:{transform:"translate(".concat(o/2*-1," -256)")}}}({transform:l,containerWidth:d,iconWidth:s}),p={tag:"rect",attributes:mi(mi({},Xs),{},{fill:"white"})},h=c.children?{children:c.children.map(Zs)}:{},m={tag:"g",attributes:mi({},f.inner),children:[Zs(mi({tag:c.tag,attributes:mi(mi({},c.attributes),f.path)},h))]},g={tag:"g",attributes:mi({},f.outer),children:[m]},x="mask-".concat(a||Za()),y="clip-".concat(a||Za()),b={tag:"mask",attributes:mi(mi({},Xs),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(t=u,"g"===t.tag?t.children:[t])},b]};return r.push(v,{tag:"rect",attributes:mi({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(x,")")},Xs)}),{children:r,attributes:o}}}};Vs={mixoutsTo:Vl}.mixoutsTo,Dl=[nl,Ps,Ns,Is,Rs,{hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=_s,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,r=void 0===t?Ai:t;Ya.searchPseudoElements&&_s(r)}}},{mixout:function(){return{dom:{unwatch:function(){bs(),Ys=!0}}}},hooks:function(){return{bootstrap:function(){Cs(_l("mutationObserverCallbacks",{}))},noAuto:function(){ws&&ws.disconnect()},watch:function(e){var t=e.observeMutationsRoot;Ys?vs():Cs(_l("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},Us,Js,{provides:function(e){var t=!1;Ti.matchMedia&&(t=Ti.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:mi(mi({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=mi(mi({},o),{},{attributeName:"opacity"}),i={tag:"circle",attributes:mi(mi({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:mi(mi({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:mi(mi({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(i),e.push({tag:"path",attributes:mi(mi({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:mi(mi({},n),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:mi(mi({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:mi(mi({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-symbol"),o=null!==r&&(""===r||r);return e.symbol=o,e}}}}],ql={},Object.keys(Hl).forEach(function(e){-1===Bl.indexOf(e)&&delete Hl[e]}),Dl.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){"function"==typeof t[e]&&(Vs[e]=t[e]),"object"===bi(t[e])&&Object.keys(t[e]).forEach(function(r){Vs[e]||(Vs[e]={}),Vs[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){ql[e]||(ql[e]=[]),ql[e].push(r[e])})}e.provides&&e.provides(Hl)});var Ks=Vl.config,Qs=Vl.parse,ec=Vl.icon;function tc(e){return t=e,(t-=0)==t?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():"")).charAt(0).toLowerCase()+e.slice(1);var t}function rc(e){return e.charAt(0).toUpperCase()+e.slice(1)}var oc=new Map;function nc(e){if(oc.has(e))return oc.get(e);const t={};let r=0;const o=e.length;for(;r<o;){const n=e.indexOf(";",r),i=-1===n?o:n,a=e.slice(r,i).trim();if(a){const e=a.indexOf(":");if(e>0){const r=a.slice(0,e).trim(),o=a.slice(e+1).trim();if(r&&o){const e=tc(r);t[e.startsWith("webkit")?rc(e):e]=o}}}r=i+1}if(1e3===oc.size){const e=oc.keys().next().value;e&&oc.delete(e)}return oc.set(e,t),t}var ic=function e(t,r,o={}){if("string"==typeof r)return r;const n=(r.children||[]).map(r=>e(t,r)),i=r.attributes||{},a={};for(const[d,u]of Object.entries(i))switch(!0){case"class"===d:a.className=u;break;case"style"===d:a.style=nc(String(u));break;case d.startsWith("aria-"):case d.startsWith("data-"):a[d.toLowerCase()]=u;break;default:a[tc(d)]=u}const{style:l,"aria-label":s,...c}=o;return l&&(a.style=a.style?{...a.style,...l}:l),s&&(a["aria-label"]=s,a["aria-hidden"]="false"),t(r.tag,{...c,...a},...n)}.bind(null,o.createElement),ac=(t,r)=>{const o=e.useId();return t||(r?o:void 0)},lc="searchPseudoElementsFullScan"in Ks?"7.0.0":"6.0.0",sc=Number.parseInt(lc)>=7,cc="fa",dc="fa-beat",uc="fa-fade",fc="fa-beat-fade",pc="fa-bounce",hc="fa-shake",mc="fa-spin",gc="fa-spin-pulse",xc="fa-spin-reverse",yc="fa-pulse",bc={left:"fa-pull-left",right:"fa-pull-right"},vc={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},wc={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Cc="fa-border",kc="fa-fw",jc="fa-flip",$c="fa-flip-horizontal",Sc="fa-flip-vertical",zc="fa-inverse",Tc="fa-rotate-by",Ac="fa-swap-opacity",Pc="fa-width-auto";function Nc(e){const t=Ks.cssPrefix||Ks.familyPrefix||cc;return t===cc?e:e.replace(new RegExp(`(?<=^|\\s)${cc}-`,"g"),`${t}-`)}function Ic(e){if(e)return(e=>"object"==typeof e&&"icon"in e&&!!e.icon)(e)?e:Qs.icon(e)}var Rc=new class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t="undefined"!=typeof process&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}}("FontAwesomeIcon"),Ec={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Mc=new Set(Object.keys(Ec)),Fc=o.forwardRef((e,t)=>{const r={...Ec,...e},{icon:o,mask:n,symbol:i,title:a,titleId:l,maskId:s,transform:c}=r,d=ac(s,Boolean(n)),u=ac(l,Boolean(a)),f=Ic(o);if(!f)return Rc.error("Icon lookup is undefined",o),null;const p=function(e){const{beat:t,fade:r,beatFade:o,bounce:n,shake:i,spin:a,spinPulse:l,spinReverse:s,pulse:c,fixedWidth:d,inverse:u,border:f,flip:p,size:h,rotation:m,pull:g,swapOpacity:x,rotateBy:y,widthAuto:b,className:v}=e,w=[];return v&&w.push(...v.split(" ")),t&&w.push(dc),r&&w.push(uc),o&&w.push(fc),n&&w.push(pc),i&&w.push(hc),a&&w.push(mc),s&&w.push(xc),l&&w.push(gc),c&&w.push(yc),d&&w.push(kc),u&&w.push(zc),f&&w.push(Cc),!0===p&&w.push(jc),"horizontal"!==p&&"both"!==p||w.push($c),"vertical"!==p&&"both"!==p||w.push(Sc),null!=h&&w.push(wc[h]),null!=m&&0!==m&&w.push(vc[m]),null!=g&&w.push(bc[g]),x&&w.push(Ac),sc?(y&&w.push(Tc),b&&w.push(Pc),(Ks.cssPrefix||Ks.familyPrefix||cc)===cc?w:w.map(Nc)):w}(r),h="string"==typeof c?Qs.transform(c):c,m=Ic(n),g=ec(f,{...p.length>0&&{classes:p},...h&&{transform:h},...m&&{mask:m},symbol:i,title:a,titleId:u,maskId:d});if(!g)return Rc.error("Could not find icon",f),null;const{abstract:x}=g,y={ref:t};for(const b of function(e){return Object.keys(e)}(r))Mc.has(b)||(y[b]=r[b]);return ic(x[0],y)});Fc.displayName="FontAwesomeIcon";
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
var Lc={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Wc={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},Oc={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},Dc={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},qc={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Hc={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},Bc={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},_c={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z"]},Yc={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z"]};const Gc=()=>{var t,r,o,i,a,l,s,c,d,u,f,p;n();const{isLoading:h,startLoading:m,stopLoading:g}=de(),x=Go(),{t:y}=le(),b=(null==x?void 0:x.currentBoard)||Array(9).fill().map(()=>Array(9).fill(0)),w=(null==x?void 0:x.originalPuzzle)||null,C=(null==x?void 0:x.selectedCell)||null,k=(null==x?void 0:x.difficulty)||"medium",j=(null==x?void 0:x.timeElapsed)||0,$=(null==x?void 0:x.errorCount)||0,S=(null==x?void 0:x.isTimerActive)??!0,z=(null==x?void 0:x.isPencilMode)??!1,T=(null==x?void 0:x.setSelectedCell)||(()=>{}),A=(null==x?void 0:x.setHighlightedCells)||(()=>{}),P=(null==x?void 0:x.setDifficulty)||(()=>{});null==x||x.setBoard,null==x||x.setSolution,null==x||x.generateNewPuzzle;const N=(null==x?void 0:x.togglePencilMode)||(()=>{}),I=(null==x?void 0:x.toggleTimer)||(()=>{});null==x||x.getHint;const R=(null==x?void 0:x.clearCell)||(()=>{}),E=(null==x?void 0:x.identifyTechniques)||(()=>[]),M=(null==x?void 0:x.openSettings)||(()=>{}),F=(null==x?void 0:x.fillCell)||(()=>{}),L=(null==x?void 0:x.fillAllCandidates)||(()=>{}),W=(null==x?void 0:x.undo)||(()=>{}),O=(null==x?void 0:x.solution)||Array(9).fill().map(()=>Array(9).fill(0)),D=(null==x?void 0:x.highlightedCells)||[],q=(null==x?void 0:x.pencilNotes)||[],H=(null==x?void 0:x.calculateTechniques)||(()=>{}),B=(()=>{const e={};for(let t=1;t<=9;t++)e[t]=9;for(let t=0;t<9;t++)for(let r=0;r<9;r++){const o=b[t][r];0!==o&&O[t][r]===o&&e[o]--}return e})(),[_,Y]=e.useState(window.innerHeight>window.innerWidth),[G,U]=e.useState(!1),[X,Z]=e.useState(!1),[V,J]=e.useState(!1),Q=e.useRef(null);e.useRef(null);const ee=e.useRef(null);e.useEffect(()=>{const e=()=>{const e=window.innerWidth<992,t=window.innerHeight>window.innerWidth;Y(e&&t)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]);const te=e=>{const t=e.target.closest("div[row]")||e.target.closest("div[col]"),r=e.target.closest(".board-container"),o=e.target.closest(".controls-container"),n=e.target.closest(".nav-block"),i=e.target.closest(".display-block");t||r||o||n||i||(T(null),(null==x?void 0:x.setHighlightedCells)&&x.setHighlightedCells([]))};e.useEffect(()=>{const e=ee.current;return e&&e.addEventListener("click",te),()=>{e&&e.removeEventListener("click",te)}},[C]);const re=(e,t)=>{T({row:e,col:t}),(null==x?void 0:x.setHighlightedCells)&&x.setHighlightedCells([])},oe=e=>{const t=Math.floor(e/3600),r=Math.floor(e%3600/60),o=e%60;return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`},ne=e=>{try{if(!C){const t=[];for(let r=0;r<9;r++)for(let o=0;o<9;o++){const n=b&&b[r]?b[r][o]:0,i=w&&w[r]&&w[r][o]===e,a=n===e&&(null==x?void 0:x.lockedCells)&&x.lockedCells.has(`${r}-${o}`);(i||a)&&e>0&&t.push({row:r,col:o,number:e})}return void((null==x?void 0:x.setHighlightedCells)&&x.setHighlightedCells(t))}if(w&&w[C.row]&&0!==w[C.row][C.col])return void T(null);const t=`${C.row}-${C.col}`;if((null==x?void 0:x.lockedCells)&&x.lockedCells.has(t))return void T(null);F(C.row,C.col,e)}catch(t){console.error("Error updating cell:",t)}},ie=()=>{if(C)try{R(C.row,C.col)}catch(e){console.error("Error clearing cell:",e)}},ae=()=>{console.log("handleNewGame 被调用"),J(!1),Z(!1),T(null),(null==x?void 0:x.setHighlightedCells)&&x.setHighlightedCells([]),U(!0),console.log("设置 showDifficultyModal 为 true")};e.useEffect(()=>{if(!b||b.every(e=>e.every(e=>0===e))){(async()=>{try{if(m&&m(y("loadingGame")),(null==x?void 0:x.setCurrentBoard)&&(null==x?void 0:x.setOriginalPuzzle)&&(null==x?void 0:x.setSolution)){console.log("直接使用本地预设谜题初始化游戏");const e=[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];x.setCurrentBoard(e),x.setOriginalPuzzle(e),x.setSolution(t),x.setGameStarted(!0),x.setTimerActive(!0)}else console.log("尝试使用上下文的其他方法初始化游戏")}catch(e){console.error("初始化游戏失败:",e),console.error("错误详情:",e.message,e.stack)}finally{g&&g()}})()}},[]);const se=()=>{I&&I()},ce=e.useCallback(()=>{if(T(null),E){const e=E();if(e&&e.length>0){const t=e[Math.floor(Math.random()*e.length)];let r=y("foundRandomTechnique","找到随机技巧：");if(r+=y(t.type)||y("unknownTechnique")||t.type,void 0!==t.row&&void 0!==t.col){r+=` ${y("position",{defaultMessage:"位置"})}:(${t.row+1},${t.col+1})`,A([[t.row,t.col]])}if(void 0!==t.value){r+=` ${y("number",{defaultMessage:"数字"})}:${t.value}`}K.info(r,{position:"top-right",autoClose:3e3})}else K.info(y("noTechniquesAvailable",{defaultMessage:"当前没有可用的技巧机会"}),{position:"top-right",autoClose:2e3})}else console.error("identifyTechniques 函数不可用")},[E,A,T,y]),ue=e.useCallback(()=>{T(null);const e=E();e.length>0?K.info(`找到${e.length}个可用技巧，可在技巧标签页中查看详情`,{position:"top-right",autoClose:2e3}):K.info("当前棋盘没有找到可用技巧，请尝试其他解法或获取提示",{position:"top-right",autoClose:2e3})},[E,T]),fe=()=>{L&&(L(),J(!0),setTimeout(()=>J(!1),2e3))},pe=()=>{N&&(N(),Z(!0),setTimeout(()=>Z(!1),2e3))},he=()=>{M&&M()};return v.jsxs("div",{className:"sudoku-game-container",ref:ee,children:[!S&&!(null==x?void 0:x.gameCompleted)&&(null==x?void 0:x.gameStarted)&&!(null==x?void 0:x.isLoading)&&v.jsx("div",{className:"pause-overlay",onClick:se,children:v.jsxs("div",{className:"pause-message",children:[v.jsx("h2",{children:y("gamePaused")}),v.jsx("p",{children:y("clickToResume")})]})}),v.jsx("div",{className:"main-content",children:_?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"scroll-hint"}),v.jsx(ai,{errorCount:$,difficulty:k,time:oe(j)}),v.jsx(ei,{onNewGame:ae,onPauseTimer:se,onGetHint:ce,onShowTechniques:ue,onToggleNotes:fe,onSettings:he,isNotesMode:z,isTimerActive:S,gameCompleted:(null==x?void 0:x.gameCompleted)||!1}),v.jsxs("div",{className:"board-container",ref:Q,onClick:e=>e.stopPropagation(),style:{position:"relative"},children:[v.jsx(vn,{board:b||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:w,selectedCell:C,highlightedCells:((null==x?void 0:x.highlightedCells)||[]).filter(e=>!e.techniqueIndicator),incorrectCells:(null==x?void 0:x.incorrectCells)||new Set,onCellClick:re,isPencilMode:z,pencilNotes:(null==x?void 0:x.pencilNotes)||[]}),v.jsx(si,{highlightedCells:D.filter(e=>e.techniqueIndicator),boardWidth:(null==(t=Q.current)?void 0:t.offsetWidth)||450,boardHeight:(null==(r=Q.current)?void 0:r.offsetHeight)||450,isPortrait:_}),v.jsx(li,{highlightedCells:D.filter(e=>e.techniqueIndicator),boardWidth:(null==(o=Q.current)?void 0:o.offsetWidth)||450,boardHeight:(null==(i=Q.current)?void 0:i.offsetHeight)||450,isPortrait:_}),v.jsx(ci,{highlightedCells:D.filter(e=>!0===e.techniqueIndicator&&e.techniqueType&&e.techniqueType.includes("nakedPair")),boardWidth:(null==(a=Q.current)?void 0:a.offsetWidth)||450,boardHeight:(null==(l=Q.current)?void 0:l.offsetHeight)||450,isPortrait:_})]}),v.jsx("div",{className:"controls-container",onClick:e=>e.stopPropagation(),children:v.jsx(Cn,{onNumberSelect:ne,onClearCell:ie,onUndo:W,selectedNumber:(null==C?void 0:C.value)||null,isPencilMode:z,togglePencilMode:pe,fillAllCandidates:L,calculateTechniques:H,remainingNumbers:B})})]}):v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"top-row",children:[v.jsx("div",{className:"nav-block",children:v.jsx(ei,{onNewGame:ae,onPauseTimer:se,onGetHint:ce,onShowTechniques:ue,onToggleNotes:fe,onSettings:he,isNotesMode:z,isTimerActive:S})}),v.jsxs("div",{className:"display-block",children:[v.jsxs("div",{children:[y("error"),"：",v.jsx("span",{className:"value error-count",style:{color:"#ff4d4d"},children:$})]}),v.jsx("div",{children:y(k)}),v.jsx("div",{children:oe(j)})]})]}),v.jsxs("div",{className:"bottom-row",children:[v.jsxs("div",{className:"board-container",ref:Q,onClick:e=>e.stopPropagation(),style:{position:"relative"},children:[v.jsx(vn,{board:b||Array(9).fill().map(()=>Array(9).fill(0)),originalPuzzle:w,selectedCell:C,highlightedCells:D.filter(e=>!e.techniqueIndicator),incorrectCells:(null==x?void 0:x.incorrectCells)||new Set,onCellClick:re,isPencilMode:z,pencilNotes:q}),v.jsx(si,{highlightedCells:D.filter(e=>e.techniqueIndicator),boardWidth:(null==(s=Q.current)?void 0:s.offsetWidth)||450,boardHeight:(null==(c=Q.current)?void 0:c.offsetHeight)||450,isPortrait:_}),v.jsx(li,{highlightedCells:D.filter(e=>e.techniqueIndicator),boardWidth:(null==(d=Q.current)?void 0:d.offsetWidth)||450,boardHeight:(null==(u=Q.current)?void 0:u.offsetHeight)||450,isPortrait:_}),v.jsx(ci,{highlightedCells:D.filter(e=>!0===e.techniqueIndicator&&e.techniqueType&&e.techniqueType.includes("nakedPair")),boardWidth:(null==(f=Q.current)?void 0:f.offsetWidth)||450,boardHeight:(null==(p=Q.current)?void 0:p.offsetHeight)||450,isPortrait:_})]}),v.jsx("div",{className:"controls-container",onClick:e=>e.stopPropagation(),children:v.jsx(Cn,{onNumberSelect:ne,onClearCell:ie,onUndo:W,selectedNumber:(null==C?void 0:C.value)||null,isPencilMode:z,togglePencilMode:pe,fillAllCandidates:L,calculateTechniques:H,remainingNumbers:B})})]})]})}),v.jsxs("div",{className:"sudoku-info-section",children:[v.jsxs("div",{className:"info-block welcome-section",children:[v.jsx("h2",{children:y("welcomeTitle")}),v.jsx("p",{children:y("welcomeContent")})]}),v.jsxs("div",{className:"info-block rules-section",children:[v.jsx("h2",{children:y("rulesTitle")}),v.jsx("p",{children:y("rulesContent")})]}),v.jsxs("div",{className:"info-block techniques-section",children:[v.jsx("h2",{children:y("techniquesTitle")}),v.jsx("div",{className:"techniques-container",dangerouslySetInnerHTML:{__html:y("techniquesContent")}})]})]}),h&&v.jsx("div",{className:"loading-overlay",children:v.jsx("div",{children:"加载中..."})}),v.jsx(In,{isOpen:G,onClose:()=>U(!1),onSelectDifficulty:async e=>{try{if(console.log(`handleDifficultySelect 被调用，选择难度: ${e}`),U(!1),console.log("关闭难度选择模态框"),m&&(m(y("generatingNewPuzzle")),console.log("显示加载状态")),console.log("sudokuContext 可用:",!!x),console.log("startNewGame 方法可用:",!!(null==x?void 0:x.startNewGame)),console.log("generateNewPuzzle 方法可用:",!!(null==x?void 0:x.generateNewPuzzle)),null==x?void 0:x.startNewGame)console.log("调用 startNewGame 方法"),await x.startNewGame(null,e),console.log("startNewGame 调用完成");else if(null==x?void 0:x.generateNewPuzzle)console.log("调用 generateNewPuzzle 方法"),await x.generateNewPuzzle(e),console.log("generateNewPuzzle 调用完成");else{console.warn("无法开始新游戏：上下文函数不可用"),console.log("使用备用方案：离线谜题生成器"),P&&P(e);const t=(e=>{console.log(`生成离线谜题，难度: ${e}`);const t={easy:40,medium:50,hard:58,expert:64}[e]||50,r=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],o=r.map(e=>[...e]);let n=t;for(;n>0;){const e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());0!==o[e][t]&&(o[e][t]=0,n--)}return{puzzle:o,solution:r}})(e);console.log("离线谜题生成完成"),(null==x?void 0:x.setCurrentBoard)&&(null==x?void 0:x.setCurrentPuzzle)&&(null==x?void 0:x.setSolution)&&(console.log("设置谜题到上下文"),x.setCurrentPuzzle(t),x.setCurrentBoard(t.puzzle),x.setSolution(t.solution)),T(null),console.log("重置选中单元格")}}catch(t){console.error("Error starting new game:",t),console.error("错误详情:",t.message,t.stack)}finally{g&&(g(),console.log("隐藏加载状态"))}},initialDifficulty:k}),X&&v.jsx("div",{className:"pencil-mode-instructions",children:y(z?"enterPencilMode":"exitPencilMode")}),V&&v.jsx("div",{className:"pencil-mode-instructions",children:y("notesCalculated")})]})},Uc=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Xc=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`,Zc=Hr.div`
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
`,Vc=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,Jc=Hr.h3`
  font-size: 22px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Kc=Hr.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,Qc=Hr.p`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 15px;
`,ed=Hr.div`
  width: 100%;
  height: 8px;
  background-color: ${e=>e.theme.background};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`,td=Hr.div`
  height: 100%;
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  border-radius: 4px;
  width: ${e=>e.percentage}%;
  transition: width 0.3s ease;
`,rd=Hr.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,od=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,nd=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
`,id=Hr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,ad=Hr.button`
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
`,ld=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,sd=Hr.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,cd=Hr.div`
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  padding: 20px;
`,dd=Hr.ol`
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,ud=Hr.li`
  font-size: 16px;
  color: ${e=>e.theme.text};
  line-height: 1.6;
`,fd=Hr.button`
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
`,pd=()=>{const{theme:r}=oe(),{techniquesProgress:o,incrementTechniquePractice:n}=yo(),[i,a]=e.useState(null),l=[{id:"nakedSingles",name:"唯一候选数",description:"最简单的数独技巧，当一个格子只有一个可能的数字时填入该数字。",details:{description:"唯一候选数是最基础的数独解题技巧。当一个空格子所在的行、列和3x3宫格中已经包含了除一个数字外的所有其他数字时，这个空格子只能填入剩下的那个数字。",steps:["观察一个空格子","检查该格子所在的行，列出已经存在的数字","检查该格子所在的列，列出已经存在的数字","检查该格子所在的3x3宫格，列出已经存在的数字","如果以上三个区域已经包含了除一个数字外的所有数字（1-9），则填入剩下的那个数字"],examples:"例如：一个格子所在的行包含数字1、2、3、4、5、6、7、9，所在的列包含数字1、2、3、4、5、6、8，所在的宫格包含数字1、2、3、4、5、7、8、9。那么这个格子只能填入数字8。"}},{id:"hiddenSingles",name:"隐性唯一",description:"当一个数字只能出现在某一行、列或宫格的某个特定格子时，填入该数字。",details:{description:"隐性唯一技巧比唯一候选数稍微复杂一些。当一个数字在某一行、列或3x3宫格中只能出现在一个特定的空格子时，即使该格子可能有其他候选数，但这个数字必须填入该格子。",steps:["选择一个数字（1-9）","检查某一行，确定该数字可能的放置位置","如果在该行中，该数字只能放在一个特定格子，则填入该数字","对每一列和每个3x3宫格重复同样的检查"],examples:"例如：在某一行中，数字5只能放在某个特定格子中，尽管该格子可能还有其他候选数（如2和5），但因为数字5在该行中没有其他可能的放置位置，所以这个格子必须填入5。"}},{id:"nakedPairs",name:"数对 (Naked Pairs)",description:"当两个格子在同一区域（行、列或宫格）中具有相同的两个候选数时，可以排除该区域其他格子中这两个数字。",details:{description:"数对技巧是一种排除法技巧。当在同一行、列或3x3宫格中有两个格子都只有相同的两个候选数时，这两个数字必须分别填入这两个格子，因此可以从该区域的其他格子的候选数中排除这两个数字。",steps:["在同一行、列或3x3宫格中寻找两个格子","确认这两个格子恰好有相同的两个候选数","从该区域的其他格子的候选数中排除这两个数字"],examples:"例如：在同一行中，两个格子都只有候选数3和7。这意味着这两个数字必须分别填入这两个格子，因此该行的其他格子中不可能是3或7，可以从它们的候选数中排除这两个数字。"}},{id:"hiddenPairs",name:"隐性数对 (Hidden Pairs)",description:"当两个数字只能出现在同一区域的两个特定格子中时，可以排除这两个格子中的其他候选数。",details:{description:"隐性数对是数对的一种变体。当在同一行、列或3x3宫格中，两个特定的数字只能出现在两个特定的格子中时，这两个格子必须包含这两个数字，可以排除这两个格子中的其他候选数。",steps:["在同一行、列或3x3宫格中选择两个数字","检查这两个数字是否只能出现在该区域的两个特定格子中","如果是，则可以从这两个格子中排除所有其他候选数，只保留这两个数字"],examples:"例如：在同一行中，数字4和6只能出现在两个特定的格子中，尽管这两个格子可能有其他候选数。这意味着这两个格子必须包含数字4和6，所以可以从这两个格子中删除其他候选数。"}},{id:"pointingPairs",name:"指向对 (Pointing Pairs)",description:"当一个数字在某个3x3宫格中只能出现在同一行或同一列时，可以排除该行或列中其他宫格内该数字的可能性。",details:{description:"指向对技巧利用3x3宫格和行/列的关系进行排除。当在某个3x3宫格中，一个数字只能出现在同一行或同一列的格子中时，这个数字在该行或列的其他3x3宫格中就不能出现在相同的行或列位置。",steps:["选择一个3x3宫格","对于某个数字，检查它在该宫格中可能的位置","如果这些位置全部位于同一行或同一列","则可以从该行或列的其他3x3宫格中排除该数字出现在相同行或列位置的可能性"],examples:"例如：在某个3x3宫格中，数字2只能出现在该宫格的第一行的两个格子中。这意味着在这一行的其他3x3宫格中，数字2不能出现在第一行的位置。"}},{id:"boxLineReduction",name:"宫行列排除 (Box-Line Reduction)",description:"当一个数字在某一行或列中只能出现在同一个3x3宫格内时，可以排除该宫格中其他格子的该数字可能性。",details:{description:"宫行列排除是指向对的反向应用。当在某一行或列中，一个数字只能出现在某个特定的3x3宫格中时，可以排除该宫格中其他格子出现该数字的可能性。",steps:["选择某一行或列","对于某个数字，检查它在该行或列中可能的位置","如果这些位置全部位于同一个3x3宫格中","则可以从该3x3宫格的其他格子中排除该数字"],examples:"例如：在某一行中，数字8只能出现在该行的前三个格子（属于第一个3x3宫格）。这意味着在第一个3x3宫格中，数字8只能出现在这三个格子中，可以从该宫格的其他六个格子中排除数字8。"}}],s=e=>{const t=o[e]||{mastered:0,practiced:0};return Math.min(100,t.practiced/10*20)};return v.jsx(Uc,{children:i?v.jsxs(od,{theme:r,children:[v.jsxs(nd,{children:[v.jsx(id,{theme:r,children:i.name}),v.jsx(ad,{onClick:()=>{a(null)},theme:r,children:"关闭"})]}),v.jsxs(ld,{children:[v.jsxs("div",{children:[v.jsx(sd,{theme:r,children:"技巧说明"}),v.jsx("p",{style:{fontSize:"16px",color:r.textSecondary,lineHeight:"1.6"},children:i.details.description})]}),v.jsxs("div",{children:[v.jsx(sd,{theme:r,children:"使用步骤"}),v.jsx(dd,{children:i.details.steps.map((e,t)=>v.jsx(ud,{theme:r,children:e},t))})]}),v.jsxs("div",{children:[v.jsx(sd,{theme:r,children:"示例"}),v.jsx(cd,{theme:r,children:v.jsx("p",{style:{fontSize:"16px",color:r.textSecondary,lineHeight:"1.6"},children:i.details.examples})})]}),v.jsx(fd,{onClick:()=>(e=>{var r;n(e);const o=null==(r=l.find(t=>t.id===e))?void 0:r.name;K.info(t("startPractice",{techniqueName:o}),{position:"top-right",autoClose:2e3})})(i.id),theme:r,children:"开始练习"})]})]}):v.jsxs(v.Fragment,{children:[v.jsx("h2",{style:{fontSize:"32px",color:r.text,margin:0},children:"数独技巧学习"}),v.jsx("p",{style:{fontSize:"18px",color:r.textSecondary,marginBottom:"30px"},children:"点击技巧卡片了解详情，掌握各种数独解题方法"}),v.jsx(Xc,{children:l.map(e=>{const t=o[e.id]||{mastered:0,practiced:0},n=s(e.id),i=(l=e.id,s(l)>=80);var l;return v.jsxs(Zc,{onClick:()=>(e=>{a(e)})(e),mastered:i,theme:r,children:[v.jsxs(Vc,{children:[v.jsx(Jc,{theme:r,children:e.name}),v.jsx(Kc,{mastered:i,theme:r,children:i?"已掌握":"学习中"})]}),v.jsx(Qc,{theme:r,children:e.description}),v.jsx(ed,{theme:r,children:v.jsx(td,{percentage:n,mastered:i,theme:r})}),v.jsxs(rd,{theme:r,children:[v.jsxs("span",{children:["练习次数: ",t.practiced]}),v.jsxs("span",{children:["掌握度: ",n.toFixed(0),"%"]})]})]},e.id)})})]})})},hd=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,md=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,gd=Hr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,xd=Hr.button`
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
`,yd=Hr.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`,bd=Hr.button`
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
`,vd=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,wd=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
`,Cd=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,kd=Hr.h3`
  font-size: 20px;
  color: ${e=>e.theme.text};
  margin: 0;
`,jd=Hr.div`
  background-color: ${e=>{switch(e.status){case"in-progress":return e.theme.warning;case"completed":return e.theme.success;case"paused":return e.theme.info;default:return e.theme.primary}}};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,$d=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
`,Sd=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,zd=Hr.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,Td=Hr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,Ad=Hr.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,Pd=Hr.button`
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
`,Nd=Hr.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.textSecondary};
`,Id=Hr.div`
  font-size: 72px;
  margin-bottom: 20px;
  color: ${e=>e.theme.disabled};
`,Rd=Hr.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-bottom: 10px;
`,Ed=Hr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 20px;
`,Md=Hr.button`
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
`,Fd=Hr.div`
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
`,Ld=Hr.div`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,Wd=Hr.h3`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin-top: 0;
  margin-bottom: 20px;
`,Od=Hr.p`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  margin-bottom: 30px;
  line-height: 1.6;
`,Dd=Hr.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`,qd=()=>{const{theme:t}=oe(),{userId:r}=yo(),{loadSavedGame:o}=Go(),{executeWithLoading:n}=de(),{t:i}=le(),[a,l]=e.useState([]),[s,c]=e.useState("all"),[d,u]=e.useState(!1),[f,p]=e.useState(null);e.useEffect(()=>{h()},[]);const h=async()=>{try{await n(async()=>{const e=await vo.getUserProgress(r);l(e.data||[])},"加载游戏进度中...")}catch(e){console.error("加载进度失败:",e),l(m())}},m=()=>[{id:"1",puzzleId:"puzzle-1",difficulty:"easy",startTime:"2023-10-15T14:30:00",lastUpdated:"2023-10-15T15:45:00",completed:!1,completionTime:null,filledCells:42,totalCells:81,status:"in-progress",puzzleState:[]},{id:"2",puzzleId:"puzzle-2",difficulty:"medium",startTime:"2023-10-14T09:15:00",lastUpdated:"2023-10-14T10:30:00",completed:!0,completionTime:"2023-10-14T10:30:00",filledCells:81,totalCells:81,status:"completed",puzzleState:[]},{id:"3",puzzleId:"puzzle-3",difficulty:"hard",startTime:"2023-10-13T18:00:00",lastUpdated:"2023-10-13T18:30:00",completed:!1,completionTime:null,filledCells:28,totalCells:81,status:"paused",puzzleState:[]}],g=a.filter(e=>"all"===s||("completed"===s?"completed"===e.status:"in-progress"!==s||"completed"!==e.status)),x=e=>{p(e),u(!0)},y=()=>{u(!1),p(null)},b=e=>new Date(e).toLocaleString(),w=e=>{switch(e){case"easy":return i("easy");case"medium":return i("medium");case"hard":return i("hard");case"expert":return i("expert");default:return e}};return v.jsxs(hd,{children:[v.jsxs(md,{children:[v.jsx(gd,{children:i("progress")}),a.length>0&&v.jsx(xd,{onClick:()=>x("clear-all"),children:i("clearAllProgress")})]}),a.length>0&&v.jsxs(yd,{children:[v.jsx(bd,{active:"all"===s,onClick:()=>c("all"),children:i("allProgress")}),v.jsx(bd,{active:"in-progress"===s,onClick:()=>c("in-progress"),children:i("inProgress")}),v.jsx(bd,{active:"completed"===s,onClick:()=>c("completed"),children:i("completed")})]}),g.length>0?v.jsx(vd,{children:g.map(e=>{return v.jsxs(wd,{status:e.status,children:[v.jsxs(Cd,{children:[v.jsxs(kd,{children:[i("sudokuGame")," #",e.id]}),v.jsx(jd,{status:e.status,theme:t,children:"completed"===e.status?i("completed"):"in-progress"===e.status?i("inProgress"):i("paused")})]}),v.jsxs($d,{children:[v.jsxs(Sd,{children:[v.jsx(zd,{theme:t,children:i("difficulty")}),v.jsx(Td,{theme:t,children:w(e.difficulty)})]}),v.jsxs(Sd,{children:[v.jsx(zd,{theme:t,children:i("startTime")}),v.jsx(Td,{theme:t,children:b(e.startTime)})]}),v.jsxs(Sd,{children:[v.jsx(zd,{theme:t,children:i("lastUpdated")}),v.jsx(Td,{theme:t,children:b(e.lastUpdated)})]}),v.jsxs(Sd,{children:[v.jsx(zd,{theme:t,children:i("completionProgress")}),v.jsxs(Td,{theme:t,children:[(r=e.filledCells,l=e.totalCells,Math.round(r/l*100)),"%"]})]})]}),v.jsxs(Ad,{children:["completed"!==e.status&&v.jsx(Pd,{type:"primary",onClick:()=>(async e=>{try{await n(async()=>{const t=a.find(t=>t.id===e);t&&(await o(t.puzzleState,t.puzzleId),window.location.href="/game")},"加载游戏中...")}catch(t){console.error("加载游戏失败:",t),K.error(i("loadGameFailed"),{position:"top-right",autoClose:2e3})}})(e.id),children:i("continueGame")}),v.jsx(Pd,{type:"danger",onClick:()=>x(e.id),children:i("deleteProgress")})]})]},e.id);var r,l})}):v.jsxs(Nd,{children:[v.jsx(Id,{children:"📝"}),v.jsx(Rd,{children:i("noProgress")}),v.jsx(Ed,{children:i("all"!==s?"noFilteredProgress":"noStartedGames")}),v.jsx(Md,{onClick:()=>window.location.href="/game",children:i("startNewGame")})]}),d&&v.jsx(Fd,{children:v.jsxs(Ld,{children:[v.jsx(Wd,{children:i("clear-all"===f?"confirmClearAllProgress":"confirmDeleteProgress")}),v.jsx(Od,{children:i("clear-all"===f?"clearAllProgressWarning":"deleteProgressWarning")}),v.jsxs(Dd,{children:[v.jsx(Pd,{type:"secondary",onClick:y,children:i("cancel")}),v.jsx(Pd,{type:"danger",onClick:()=>{"clear-all"===f?(async()=>{try{await n(async()=>{l([])},"清空进度中...")}catch(e){console.error("清空进度失败:",e),K.error(i("clearProgressFailed"),{position:"top-right",autoClose:2e3})}})():"string"==typeof f&&(async e=>{try{await n(async()=>{l(t=>t.filter(t=>t.id!==e))},"删除进度中...")}catch(t){console.error("删除进度失败:",t),K.error(i("deleteProgressFailed"),{position:"top-right",autoClose:2e3})}})(f),y()},children:i("confirmDelete")})]})]})})]})},Hd=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Bd=Hr.h2`
  font-size: 32px;
  color: ${e=>e.theme.text};
  margin: 0;
`,_d=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`,Yd=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 5px solid ${e=>e.color||e.theme.primary};
`,Gd=Hr.div`
  font-size: 48px;
  font-weight: 700;
  color: ${e=>e.color||e.theme.primary};
`,Ud=Hr.div`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,Xd=Hr.div`
  font-size: 14px;
  color: ${e=>e.positive?e.theme.success:e.theme.error};
`,Zd=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Vd=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Jd=Hr.h3`
  font-size: 24px;
  color: ${e=>e.theme.text};
  margin: 0;
`,Kd=Hr.div`
  display: flex;
  gap: 10px;
`,Qd=Hr.button`
  background-color: ${e=>e.active?e.theme.primary:e.theme.surface};
  color: ${e=>e.active?"white":e.theme.text};
  border: 2px solid ${e=>e.active?e.theme.primary:e.theme.border};
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`,eu=Hr.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.textSecondary};
  font-size: 18px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
`,tu=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,ru=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,ou=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nu=Hr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,iu=Hr.span`
  font-size: 16px;
  color: ${e=>e.theme.textSecondary};
`,au=Hr.div`
  width: 100%;
  height: 10px;
  background-color: ${e=>e.theme.background};
  border-radius: 5px;
  overflow: hidden;
`,lu=Hr.div`
  height: 100%;
  background-color: ${e=>{switch(e.difficulty){case"easy":return"#4CAF50";case"medium":return"#FF9800";case"hard":return"#F44336";case"expert":return"#9C27B0";default:return e.theme.primary}}};
  border-radius: 5px;
  width: ${e=>e.percentage}%;
`,su=Hr.div`
  background-color: ${e=>e.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,cu=Hr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
`,du=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>e.theme.background};
  border-radius: 8px;
  border-left: 4px solid ${e=>e.mastered?e.theme.success:e.theme.primary};
`,uu=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,fu=Hr.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.text};
`,pu=Hr.span`
  font-size: 14px;
  color: ${e=>e.theme.textSecondary};
`,hu=Hr.div`
  background-color: ${e=>e.mastered?e.theme.success:e.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`,mu=()=>{const{theme:t}=oe(),{userId:r,userStats:o,techniquesProgress:n}=yo(),{executeWithLoading:i}=de(),[a,l]=e.useState(null),[s,c]=e.useState("all");e.useEffect(()=>{d()},[s]);const d=async()=>{try{await i(async()=>{const e=await vo.getUserStatistics(r,s);l(e.data)},"加载统计数据中...")}catch(e){console.error("加载统计数据失败:",e),l(u())}},u=()=>({totalGames:42,completedGames:38,winRate:90.5,averageTime:1245,favoriteDifficulty:"medium",bestTime:420,currentStreak:5,longestStreak:12,totalPlayTime:145200,difficultyBreakdown:{easy:15,medium:20,hard:5,expert:2},recentPerformance:[{date:"2023-10-10",games:3,completed:3},{date:"2023-10-11",games:2,completed:2},{date:"2023-10-12",games:4,completed:3},{date:"2023-10-13",games:1,completed:1},{date:"2023-10-14",games:2,completed:2},{date:"2023-10-15",games:3,completed:3},{date:"2023-10-16",games:2,completed:2}]}),f=a||u(),p=n||{},h=e=>{if(!e)return"0:00";return`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`},m=()=>{if(f.totalGames)return f.totalGames;const e=f.difficultyBreakdown||{};return Object.values(e).reduce((e,t)=>e+t,0)},g=e=>{const t=p[e]||{practiced:0};return Math.min(100,t.practiced/10*20)};return v.jsxs(Hd,{children:[v.jsx(Bd,{theme:t,children:"我的统计"}),v.jsxs(_d,{children:[v.jsxs(Yd,{color:t.primary,theme:t,children:[v.jsx(Gd,{color:t.primary,theme:t,children:m()}),v.jsx(Ud,{theme:t,children:"总游戏数"}),v.jsx(Xd,{positive:!0,theme:t,children:"+5 本周"})]}),v.jsxs(Yd,{color:t.success,theme:t,children:[v.jsx(Gd,{color:t.success,theme:t,children:f.completedGames}),v.jsx(Ud,{theme:t,children:"完成游戏"}),v.jsx(Xd,{positive:!0,theme:t,children:"全部完成"})]}),v.jsxs(Yd,{color:t.warning,theme:t,children:[v.jsxs(Gd,{color:t.warning,theme:t,children:[f.winRate,"%"]}),v.jsx(Ud,{theme:t,children:"胜率"}),v.jsx(Xd,{positive:!0,theme:t,children:"+2% 本月"})]}),v.jsxs(Yd,{color:t.info,theme:t,children:[v.jsx(Gd,{color:t.info,theme:t,children:h(f.averageTime)}),v.jsx(Ud,{theme:t,children:"平均时间"}),v.jsx(Xd,{positive:!0,theme:t,children:"-30秒"})]}),v.jsxs(Yd,{color:t.error,theme:t,children:[v.jsx(Gd,{color:t.error,theme:t,children:h(f.bestTime)}),v.jsx(Ud,{theme:t,children:"最佳时间"}),v.jsx(Xd,{positive:!0,theme:t,children:"记录保持中"})]}),v.jsxs(Yd,{color:t.primary,theme:t,children:[v.jsx(Gd,{color:t.primary,theme:t,children:f.currentStreak}),v.jsx(Ud,{theme:t,children:"当前连续天数"}),v.jsx(Xd,{positive:f.currentStreak>1,theme:t,children:f.currentStreak>1?"🔥 加油！":"今天开始"})]})]}),v.jsxs(Zd,{theme:t,children:[v.jsxs(Vd,{children:[v.jsx(Jd,{theme:t,children:"游戏进度"}),v.jsxs(Kd,{children:[v.jsx(Qd,{active:"week"===s,onClick:()=>c("week"),theme:t,children:"本周"}),v.jsx(Qd,{active:"month"===s,onClick:()=>c("month"),theme:t,children:"本月"}),v.jsx(Qd,{active:"all"===s,onClick:()=>c("all"),theme:t,children:"全部"})]})]}),v.jsx(eu,{theme:t,children:"📊 游戏进度图表"})]}),v.jsxs(Zd,{theme:t,children:[v.jsx(Vd,{children:v.jsx(Jd,{theme:t,children:"难度分布"})}),v.jsx(tu,{children:Object.entries(f.difficultyBreakdown||{}).map(([e,r])=>{const o=(e=>{const t=f.difficultyBreakdown||{},r=m();return r>0?t[e]/r*100:0})(e);return v.jsxs(ru,{children:[v.jsxs(ou,{children:[v.jsx(nu,{theme:t,children:{easy:"简单",medium:"中等",hard:"困难",expert:"专家"}[e]||e}),v.jsxs(iu,{theme:t,children:[r," 局 (",o.toFixed(1),"%)"]})]}),v.jsx(au,{theme:t,children:v.jsx(lu,{difficulty:e,percentage:o})})]},e)})})]}),v.jsxs(su,{theme:t,children:[v.jsx(Jd,{theme:t,children:"技巧掌握"}),v.jsx(cu,{children:[{id:"nakedSingles",name:"唯一候选数"},{id:"hiddenSingles",name:"隐性唯一"},{id:"nakedPairs",name:"数对"},{id:"hiddenPairs",name:"隐性数对"},{id:"pointingPairs",name:"指向对"},{id:"boxLineReduction",name:"宫行列排除"}].map(e=>{var r;const o=g(e.id),n=(i=e.id,g(i)>=80);var i;const a=(null==(r=p[e.id])?void 0:r.practiced)||0;return v.jsxs(du,{mastered:n,theme:t,children:[v.jsxs(uu,{children:[v.jsx(fu,{theme:t,children:e.name}),v.jsxs(pu,{theme:t,children:["练习 ",a," 次 · 掌握度 ",o.toFixed(0),"%"]})]}),v.jsx(hu,{mastered:n,theme:t,children:n?"已掌握":"学习中"})]},e.id)})})]})]})},gu=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`,xu=Hr.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,yu=Hr(i)`
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
`,bu=Hr.h1`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  flex: 1;
`,vu=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`,wu=Hr.h2`
  font-size: 24px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0 0 20px 0;
  border-bottom: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  padding-bottom: 10px;
`,Cu=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  
  &:last-child {
    border-bottom: none;
  }
`,ku=Hr.div`
  font-size: 18px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-weight: 500;
`,ju=Hr.div`
  display: flex;
  gap: 10px;
`,$u=Hr.button`
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
`,Su=Hr.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,zu=Hr.button`
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
`,Tu=Hr.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Au=Hr(i)`
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
`,Pu=Hr.span`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.textSecondary)||"#666666"}};
  font-style: italic;
`,Nu=()=>{const{theme:e,themeMode:t,setLightTheme:r,setDarkTheme:o,setSystemTheme:i,setCustomThemeMode:a,customTheme:l}=oe(),{language:s,changeLanguage:c,availableLanguages:d,t:u}=le();return n(),v.jsxs(gu,{children:[v.jsxs(xu,{children:[v.jsx(yu,{to:"/",theme:e,children:v.jsx(Fc,{icon:Bc,size:"lg"})}),v.jsx(bu,{theme:e,children:u("settingsPageTitle")})]}),v.jsxs(vu,{theme:e,children:[v.jsx(wu,{theme:e,children:u("language")}),v.jsxs(Cu,{children:[v.jsx(ku,{theme:e,children:u("language")}),v.jsx(ju,{children:d.map(t=>v.jsx($u,{active:s===t.code,onClick:()=>c(t.code),theme:e,children:t.name},t.code))})]})]}),v.jsxs(vu,{theme:e,children:[v.jsx(wu,{theme:e,children:u("theme")}),v.jsxs(Su,{children:[v.jsxs(zu,{active:"light"===t,onClick:r,theme:e,children:[v.jsx(Fc,{icon:Wc,size:"lg"}),u("lightTheme")]}),v.jsxs(zu,{active:"dark"===t,onClick:o,theme:e,children:[v.jsx(Fc,{icon:Oc,size:"lg"}),u("darkTheme")]}),v.jsxs(zu,{active:"system"===t,onClick:i,theme:e,children:[v.jsx(Fc,{icon:Yc,size:"lg"}),u("systemTheme")]})]}),v.jsxs(Cu,{style:{marginTop:"20px"},children:[v.jsx(ku,{theme:e,children:u("customTheme")}),v.jsxs(Tu,{children:[v.jsxs(Au,{to:"/settings/theme-editor",theme:e,children:[v.jsx(Fc,{icon:Dc,size:"lg"}),u("editTheme")]}),v.jsx(Pu,{theme:e,children:"custom"===t&&`${u("customTheme")} - ${l.name}`})]})]})]})]})},Iu="custom_theme",Ru={id:"custom",name:"自定义主题",background:"#f5f5f5",surface:"#ffffff",text:"#333333",textSecondary:"#666666",primary:"#4a6cf7",secondary:"#6c757d",success:"#28a745",warning:"#ffc107",error:"#dc3545",info:"#17a2b8",border:"#e0e0e0",gridLine:"#cccccc",gridLineThick:"#999999",highlight:"#e6f0ff"},Eu=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`,Mu=Hr.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,Fu=Hr(i)`
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
`,Lu=Hr.h1`
  font-size: 32px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  margin: 0;
  flex: 1;
`,Wu=Hr.div`
  display: flex;
  gap: 10px;
`,Ou=Hr.button`
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
`,Du=Hr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,qu=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Hu=Hr.section`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.background)||"#f5f5f5"}};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 600px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`,Bu=Hr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,_u=Hr.h2`
  color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.text)||"#333333"}};
  margin: 0;
  font-size: 24px;
`,Yu=Hr.button`
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.primary)||"#4a6cf7"}};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
`,Gu=Hr.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.gridLine)||"#e0e0e0"}};
  border-radius: 8px;
  padding: 2px;
  margin: 0 auto 30px;
  width: 300px;
  height: 300px;
`,Uu=Hr.div`
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
`,Xu=Hr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`,Zu=Hr.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.surface)||"#ffffff"}};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Vu=Hr.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  border: 2px solid ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.border)||"#e0e0e0"}};
`,Ju=Hr.span`
  color: ${e=>{var t;return(null==(t=e.previewTheme)?void 0:t.text)||"#333333"}};
  font-size: 14px;
`,Ku=Hr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,Qu=Hr.label`
  font-size: 16px;
  color: ${e=>{var t;return(null==(t=e.theme)?void 0:t.text)||"#333333"}};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`,ef=Hr.input`
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
`,tf=Hr.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,rf=Hr.input`
  width: 60px;
  height: 44px;
  border: 2px solid ${e=>{var t;return(null==(t=e.theme)?void 0:t.border)||"#e0e0e0"}};
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  background: none;
`,of=Hr.input`
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
`,nf=Hr.input`
  display: none;
`,af=()=>{const{theme:t,customTheme:r}=oe(),{t:o}=le();n();const i=e.useRef(null),[a,l]=e.useState({...r});useEffect(()=>{l({...r})},[r]);const s=(e,t)=>{l(r=>({...r,[e]:t}))},d=[{key:"background",label:o("backgroundColor")},{key:"surface",label:o("surfaceColor")},{key:"text",label:o("textColor")},{key:"textSecondary",label:o("textSecondaryColor")},{key:"primary",label:o("primaryColor")},{key:"secondary",label:o("secondaryColor")},{key:"success",label:o("successColor")},{key:"warning",label:o("warningColor")},{key:"error",label:o("errorColor")},{key:"border",label:o("borderColor")},{key:"gridLine",label:o("gridLineColor")},{key:"gridLineThick",label:o("gridLineThickColor")},{key:"highlight",label:o("highlightColor")}];return v.jsxs(Eu,{children:[v.jsxs(Mu,{children:[v.jsx(Fu,{to:"/settings",theme:t,children:v.jsx(Fc,{icon:Bc,size:"lg"})}),v.jsx(Lu,{theme:t,children:o("themeEditor")}),v.jsxs(Wu,{children:[v.jsxs(Ou,{type:"secondary",onClick:()=>{(async()=>{try{await c.setItem(Iu,Ru)}catch(e){throw console.error("重置自定义主题失败:",e),e}})(),K.info(o("themeReset"),{position:"top-right",autoClose:2e3})},theme:t,children:[v.jsx(Fc,{icon:_c,size:"lg"}),o("reset")]}),v.jsxs(Ou,{type:"primary",onClick:()=>{(async e=>{try{await c.setItem(Iu,e)}catch(t){throw console.error("更新自定义主题失败:",t),t}})(a),K.success(o("themeSaved"),{position:"top-right",autoClose:2e3})},theme:t,children:[v.jsx(Fc,{icon:Lc,size:"lg"}),o("saveChanges")]})]})]}),v.jsxs(Du,{children:[v.jsxs(qu,{theme:t,children:[v.jsx(of,{type:"text",value:a.name||"",onChange:e=>{l(t=>({...t,name:e.target.value}))},placeholder:o("customTheme"),theme:t}),d.map(e=>v.jsxs(Ku,{children:[v.jsx(Qu,{theme:t,children:e.label}),v.jsxs(tf,{children:[v.jsx(ef,{type:"text",value:a[e.key]||"",onChange:t=>s(e.key,t.target.value),placeholder:"#000000",theme:t}),v.jsx(rf,{type:"color",value:a[e.key]||"#000000",onChange:t=>s(e.key,t.target.value)})]})]},e.key)),v.jsxs(Wu,{style:{marginTop:"30px"},children:[v.jsxs(Ou,{type:"secondary",onClick:()=>{var e;return null==(e=i.current)?void 0:e.click()},theme:t,children:[v.jsx(Fc,{icon:Hc,size:"lg"}),o("importTheme")]}),v.jsx(nf,{ref:i,type:"file",accept:".json",onChange:async e=>{const t=e.target.files[0];if(t)try{await(async e=>{try{return new Promise((t,r)=>{const o=new FileReader;o.onload=e=>{try{const o=JSON.parse(e.target.result);"object"==typeof o&&null!==o?t(o):r(new Error("无效的主题文件格式"))}catch(o){r(new Error("解析主题文件失败: "+o.message))}},o.onerror=()=>{r(new Error("读取主题文件失败"))},o.readAsText(e)})}catch(t){throw console.error("导入主题失败:",t),t}})(t),K.success(o("themeImported"),{position:"top-right",autoClose:2e3}),e.target.value=""}catch(r){K.error(o("themeImportFailed")+r.message,{position:"top-right",autoClose:3e3})}}}),v.jsxs(Ou,{type:"secondary",onClick:()=>{(e=>{try{const t=JSON.stringify(e,null,2),r=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=`${e.name||"theme"}.json`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(o)}catch(t){throw console.error("导出主题失败:",t),t}})(a),K.info(o("themeExported"),{position:"top-right",autoClose:2e3})},theme:t,children:[v.jsx(Fc,{icon:qc,size:"lg"}),o("exportTheme")]})]})]}),v.jsxs(Hu,{previewTheme:a,children:[v.jsxs(Bu,{previewTheme:a,children:[v.jsx(_u,{previewTheme:a,children:o("preview")}),v.jsx(Yu,{previewTheme:a,children:o("preview")})]}),v.jsx(Gu,{previewTheme:a,children:(()=>{const e=[];for(let t=0;t<9;t++)for(let r=0;r<9;r++){const o=4===t&&4===r||0===t&&0===r||8===t&&8===r;e.push(v.jsx(Uu,{row:t,col:r,isHighlighted:o,previewTheme:a,children:Math.floor(9*Math.random())+1},`${t}-${r}`))}return e})()}),v.jsxs(Xu,{children:[v.jsxs(Zu,{previewTheme:a,children:[v.jsx(Vu,{color:a.primary,previewTheme:a}),v.jsx(Ju,{previewTheme:a,children:o("primaryColor")})]}),v.jsxs(Zu,{previewTheme:a,children:[v.jsx(Vu,{color:a.success,previewTheme:a}),v.jsx(Ju,{previewTheme:a,children:o("successColor")})]}),v.jsxs(Zu,{previewTheme:a,children:[v.jsx(Vu,{color:a.warning,previewTheme:a}),v.jsx(Ju,{previewTheme:a,children:o("warningColor")})]}),v.jsxs(Zu,{previewTheme:a,children:[v.jsx(Vu,{color:a.error,previewTheme:a}),v.jsx(Ju,{previewTheme:a,children:o("errorColor")})]})]})]})]})]})};Object.defineProperty(document,"title",{get:function(){return"Sudoku Advanced Techniques - Open Source Sudoku Game | Expert Sudoku Challenges"},set:function(e){console.log("标题修改尝试已阻止")},configurable:!0});const lf=()=>{const e=document.querySelector('meta[property="og:title"]'),t=document.querySelector('meta[name="twitter:title"]');e&&(e.content="SudokuTech - Sudoku Techniques Learning Platform"),t&&(t.content="SudokuTech - Sudoku Techniques Learning Platform")};lf(),window.addEventListener("DOMContentLoaded",lf),window.addEventListener("load",lf);w.createRoot(document.getElementById("root")).render(v.jsxs(o.StrictMode,{children:[v.jsx(re,{children:v.jsx(ae,{children:v.jsx(ce,{children:v.jsx(xo,{children:v.jsx(Yo,{children:v.jsx(a,{children:v.jsx(mo,{children:v.jsxs(l,{children:[v.jsx(s,{path:"/",element:v.jsx(Gc,{})}),v.jsx(s,{path:"/home",element:v.jsx(gn,{})}),v.jsx(s,{path:"/game",element:v.jsx(Gc,{})}),v.jsx(s,{path:"/techniques",element:v.jsx(pd,{})}),v.jsx(s,{path:"/progress",element:v.jsx(qd,{})}),v.jsx(s,{path:"/stats",element:v.jsx(mu,{})}),v.jsx(s,{path:"/settings",element:v.jsx(Nu,{})}),v.jsx(s,{path:"/settings/theme-editor",element:v.jsx(af,{})})]})})})})})})})}),v.jsx(H,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(e=>{console.log("ServiceWorker 注册成功:",e.scope)}).catch(e=>{console.log("ServiceWorker 注册失败:",e)})});
