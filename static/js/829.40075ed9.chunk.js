"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[829],{368:function(t,e,n){n.d(e,{e:function(){return i}});var r=n(731),o=n(689),a=n(184),i=function(t){var e=t.movieList,n=(0,o.TH)();return(0,a.jsx)("div",{children:e.map((function(t){var e=t.id,o=t.title;return(0,a.jsx)("div",{children:(0,a.jsx)(r.OL,{to:"/movies/".concat(e),state:{from:n},children:o})},e)}))})}},829:function(t,e,n){n.r(e),n.d(e,{default:function(){return J}});var r=n(861),o=n(885),a=n(687),i=n.n(a),s=n(791),c=n(731);function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=n(982);function v(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=v(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}var m=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=v(t))&&(r&&(r+=" "),r+=e);return r},h=["theme","type"],y=["delay","staleId"],g=function(t){return"number"==typeof t&&!isNaN(t)},E=function(t){return"string"==typeof t},T=function(t){return"function"==typeof t},b=function(t){return E(t)||T(t)?t:null},O=function(t){return(0,s.isValidElement)(t)||E(t)||T(t)||g(t)};function C(t){var e=t.enter,n=t.exit,r=t.appendPosition,o=void 0!==r&&r,a=t.collapse,i=void 0===a||a,c=t.collapseDuration,u=void 0===c?300:c;return function(t){var r=t.children,a=t.position,c=t.preventExitTransition,l=t.done,f=t.nodeRef,d=t.isIn,v=o?"".concat(e,"--").concat(a):e,m=o?"".concat(n,"--").concat(a):n,h=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var t,e=f.current,n=v.split(" "),r=function t(r){var o;r.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===h.current&&"animationcancel"!==r.type&&(o=e.classList).remove.apply(o,(0,p.Z)(n)))};(t=e.classList).add.apply(t,(0,p.Z)(n)),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)}),[]),(0,s.useEffect)((function(){var t=f.current,e=function e(){t.removeEventListener("animationend",e),i?function(t,e,n){void 0===n&&(n=300);var r=t.scrollHeight,o=t.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(e,n)}))}))}(t,l,u):l()};d||(c?e():(h.current=1,t.className+=" ".concat(m),t.addEventListener("animationend",e)))}),[d]),s.createElement(s.Fragment,null,r)}}function _(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}var I={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,p.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(o)}))}},w=function(t){var e=t.theme,n=t.type,r=d(t,h);return s.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},x={info:function(t){return s.createElement(w,f({},t),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return s.createElement(w,f({},t),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return s.createElement(w,f({},t),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return s.createElement(w,f({},t),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function L(t){var e=(0,s.useReducer)((function(t){return t+1}),0),n=(0,o.Z)(e,2)[1],r=(0,s.useState)([]),a=(0,o.Z)(r,2),i=a[0],c=a[1],u=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,v=function(t){return-1!==i.indexOf(t)},m=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:v,getToast:function(t){return l.get(t)}}).current;function h(t){var e=t.containerId;!m.props.limit||e&&m.containerId!==e||(m.count-=m.queue.length,m.queue=[])}function C(t){c((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function w(){var t=m.queue.shift();k(t.toastContent,t.toastProps,t.staleId)}function L(t,e){var r=e.delay,o=e.staleId,a=d(e,y);if(O(t)&&!function(t){return!u.current||m.props.enableMultiContainer&&t.containerId!==m.props.containerId||l.has(t.toastId)&&null==t.updateId}(a)){var i=a.toastId,c=a.updateId,p=a.data,v=m.props,h=function(){return C(i)},L=null==c;L&&m.count++;var P,N,R=f(f(f({},v),{},{style:v.toastStyle,key:m.toastKey++},a),{},{toastId:i,updateId:c,data:p,closeToast:h,isIn:!1,className:b(a.className||v.toastClassName),bodyClassName:b(a.bodyClassName||v.bodyClassName),progressClassName:b(a.progressClassName||v.progressClassName),autoClose:!a.isLoading&&(P=a.autoClose,N=v.autoClose,!1===P||g(P)&&P>0?P:N),deleteToast:function(){var t=_(l.get(i),"removed");l.delete(i),I.emit(4,t);var e=m.queue.length;if(m.count=null==i?m.count-m.displayedToast:m.count-1,m.count<0&&(m.count=0),e>0){var r=null==i?m.props.limit:1;if(1===e||1===r)m.displayedToast++,w();else{var o=r>e?e:r;m.displayedToast=o;for(var a=0;a<o;a++)w()}}else n()}});R.iconOut=function(t){var e=t.theme,n=t.type,r=t.isLoading,o=t.icon,a=null,i={theme:e,type:n};return!1===o||(T(o)?a=o(i):(0,s.isValidElement)(o)?a=(0,s.cloneElement)(o,i):E(o)||g(o)?a=o:r?a=x.spinner():function(t){return t in x}(n)&&(a=x[n](i))),a}(R),T(a.onOpen)&&(R.onOpen=a.onOpen),T(a.onClose)&&(R.onClose=a.onClose),R.closeButton=v.closeButton,!1===a.closeButton||O(a.closeButton)?R.closeButton=a.closeButton:!0===a.closeButton&&(R.closeButton=!O(v.closeButton)||v.closeButton);var j=t;(0,s.isValidElement)(t)&&!E(t.type)?j=(0,s.cloneElement)(t,{closeToast:h,toastProps:R,data:p}):T(t)&&(j=t({closeToast:h,toastProps:R,data:p})),v.limit&&v.limit>0&&m.count>v.limit&&L?m.queue.push({toastContent:j,toastProps:R,staleId:o}):g(r)?setTimeout((function(){k(j,R,o)}),r):k(j,R,o)}}function k(t,e,n){var r=e.toastId;n&&l.delete(n);var o={content:t,props:e};l.set(r,o),c((function(t){return[].concat((0,p.Z)(t),[r]).filter((function(t){return t!==n}))})),I.emit(4,_(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return m.containerId=t.containerId,I.cancelEmit(3).on(0,L).on(1,(function(t){return u.current&&C(t)})).on(5,h).emit(2,m),function(){l.clear(),I.emit(3,m)}}),[]),(0,s.useEffect)((function(){m.props=t,m.isToastActive=v,m.displayedToast=i.length})),{getToastToRender:function(e){var n=new Map,r=Array.from(l.values());return t.newestOnTop&&r.reverse(),r.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:u,isToastActive:v}}function k(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function P(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function N(t){var e=(0,s.useState)(!1),n=(0,o.Z)(e,2),r=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),u=c[0],l=c[1],f=(0,s.useRef)(null),d=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(t),v=t.autoClose,m=t.pauseOnHover,h=t.closeToast,y=t.onClick,g=t.closeOnClick;function E(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",I),document.addEventListener("touchmove",_),document.addEventListener("touchend",I);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=k(e.nativeEvent),d.y=P(e.nativeEvent),"x"===t.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function b(e){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?C():O()}}function O(){a(!0)}function C(){a(!1)}function _(e){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&C(),d.x=k(e),d.y=P(e),d.delta="x"===t.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function I(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",I);var e=f.current;if(d.canDrag&&d.didMove&&e){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,s.useEffect)((function(){p.current=t})),(0,s.useEffect)((function(){return f.current&&f.current.addEventListener("d",O,{once:!0}),T(t.onOpen)&&t.onOpen((0,s.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;T(t.onClose)&&t.onClose((0,s.isValidElement)(t.children)&&t.children.props)}}),[]),(0,s.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",O),window.addEventListener("blur",C)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",C))}}),[t.pauseOnFocusLoss]);var w={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return v&&m&&(w.onMouseEnter=C,w.onMouseLeave=O),g&&(w.onClick=function(t){y&&y(t),d.canCloseOnClick&&h()}),{playToast:O,pauseToast:C,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:w}}function R(t){var e=t.closeToast,n=t.theme,r=t.ariaLabel,o=void 0===r?"close":r;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j(t){var e=t.delay,n=t.isRunning,r=t.closeToast,o=t.type,a=void 0===o?"default":o,i=t.hide,c=t.className,l=t.style,d=t.controlledProgress,p=t.progress,v=t.rtl,h=t.isIn,y=t.theme,g=i||d&&0===p,E=f(f({},l),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:g?0:1});d&&(E.transform="scaleX(".concat(p,")"));var b=m("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":v}),O=T(c)?c({rtl:v,type:a,defaultClassName:b}):m(b,c);return s.createElement("div",u({role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:O,style:E},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){h&&r()}))}var M=function(t){var e=N(t),n=e.isRunning,r=e.preventExitTransition,o=e.toastRef,a=e.eventHandlers,i=t.closeButton,c=t.children,u=t.autoClose,l=t.onClick,d=t.type,p=t.hideProgressBar,v=t.closeToast,h=t.transition,y=t.position,g=t.className,E=t.style,b=t.bodyClassName,O=t.bodyStyle,C=t.progressClassName,_=t.progressStyle,I=t.updateId,w=t.role,x=t.progress,L=t.rtl,k=t.toastId,P=t.deleteToast,M=t.isIn,D=t.isLoading,S=t.iconOut,Z=t.closeOnClick,B=t.theme,A=m("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":Z}),z=T(g)?g({rtl:L,position:y,type:d,defaultClassName:A}):m(A,g),F=!!x||!u,q={closeToast:v,type:d,theme:B},H=null;return!1===i||(H=T(i)?i(q):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,q):R(q)),s.createElement(h,{isIn:M,done:P,position:y,preventExitTransition:r,nodeRef:o},s.createElement("div",f(f({id:k,onClick:l,className:z},a),{},{style:E,ref:o}),s.createElement("div",f(f({},M&&{role:w}),{},{className:T(b)?b({type:d}):m("Toastify__toast-body",b),style:O}),null!=S&&s.createElement("div",{className:m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},S),s.createElement("div",null,c)),H,s.createElement(j,f(f({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:L,theme:B,delay:u,isRunning:n,isIn:M,closeToast:v,hide:p,type:d,style:_,className:C,controlledProgress:F,progress:x||0}))))},D=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},S=C(D("bounce",!0)),Z=(C(D("slide",!0)),C(D("zoom")),C(D("flip")),(0,s.forwardRef)((function(t,e){var n=L(t),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=t.className,c=t.style,u=t.rtl,l=t.containerId;function d(t){var e=m("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":u});return T(i)?i({position:t,rtl:u,defaultClassName:e}):m(e,b(i))}return(0,s.useEffect)((function(){e&&(e.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:l},r((function(t,e){var n=e.length?f({},c):f(f({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:d(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var r=t.content,o=t.props;return s.createElement(M,f(f({},o),{},{isIn:a(o.toastId),style:f(f({},o.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(o.key)}),r)})))})))})));Z.displayName="ToastContainer",Z.defaultProps={position:"top-right",transition:S,autoClose:5e3,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var B,A=new Map,z=[],F=1;function q(){return""+F++}function H(t){return t&&(E(t.toastId)||g(t.toastId))?t.toastId:q()}function V(t,e){return A.size>0?I.emit(0,t,e):z.push({content:t,options:e}),e.toastId}function Q(t,e){return f(f({},e),{},{type:e&&e.type||t,toastId:H(e)})}function U(t){return function(e,n){return V(e,Q(t,n))}}function Y(t,e){return V(t,Q("default",e))}Y.loading=function(t,e){return V(t,Q("default",f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},Y.promise=function(t,e,n){var r,o=e.pending,a=e.error,i=e.success;o&&(r=E(o)?Y.loading(o,n):Y.loading(o.render,f(f({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(t,e,o){if(null!=e){var a=f(f(f({type:t},s),n),{},{data:o}),i=E(e)?{render:e}:e;return r?Y.update(r,f(f({},a),i)):Y(i.render,f(f({},a),i)),o}Y.dismiss(r)},u=T(t)?t():t;return u.then((function(t){return c("success",i,t)})).catch((function(t){return c("error",a,t)})),u},Y.success=U("success"),Y.info=U("info"),Y.error=U("error"),Y.warning=U("warning"),Y.warn=Y.warning,Y.dark=function(t,e){return V(t,Q("default",f({theme:"dark"},e)))},Y.dismiss=function(t){A.size>0?I.emit(1,t):z=z.filter((function(e){return null!=t&&e.options.toastId!==t}))},Y.clearWaitingQueue=function(t){return void 0===t&&(t={}),I.emit(5,t)},Y.isActive=function(t){var e=!1;return A.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},Y.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,r=A.get(n||B);return r&&r.getToast(t)}(t,e);if(n){var r=n.props,o=n.content,a=f(f(f({},r),e),{},{toastId:e.toastId||t,updateId:q()});a.toastId!==t&&(a.staleId=t);var i=a.render||o;delete a.render,V(i,a)}}),0)},Y.done=function(t){Y.update(t,{progress:1})},Y.onChange=function(t){return I.on(4,t),function(){I.off(4,t)}},Y.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Y.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,(function(t){B=t.containerId||t,A.set(B,t),z.forEach((function(t){I.emit(0,t.content,t.options)})),z=[]})).on(3,(function(t){A.delete(t.containerId||t),0===A.size&&I.off(0).off(1).off(5)}));var G=n(390),W=n(184),X=function(t){var e=t.onSubmit;return(0,W.jsxs)("div",{children:[(0,W.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target.elements.search.value;""===n.trim()?Y.error("You did not enter anything to search for..."):(e(n),t.target.reset())},children:[(0,W.jsx)("input",{name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,W.jsx)("button",{type:"submit",children:"Search"})]}),(0,W.jsx)(Z,{})]})},K=n(368),J=function(){var t,e=(0,c.lr)(),n=(0,o.Z)(e,2),a=n[0],u=n[1],l=(0,s.useState)([]),f=(0,o.Z)(l,2),d=f[0],p=f[1],v=(0,s.useState)(null!==(t=a.get("query"))&&void 0!==t?t:""),m=(0,o.Z)(v,2),h=m[0],y=m[1],g=function(t){Y.error(t)};(0,s.useEffect)((function(){if(""!==h){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,G.V0)(h);case 3:0!==(e=t.sent).length?p(e):g("Sorry, but your search did not return any results."),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),g(t.t0.message);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})));return function(){return t.apply(this,arguments)}}();t()}}),[h]);var E=function(t){u(""!==t?{query:t}:{})};return(0,W.jsxs)("div",{children:[(0,W.jsx)(X,{onSubmit:function(t){y(t),E(t)}}),(0,W.jsx)(K.e,{movieList:d}),(0,W.jsx)(Z,{})]})}},390:function(t,e,n){n.d(e,{Df:function(){return c},M1:function(){return l},Pg:function(){return u},V0:function(){return d},tx:function(){return f}});var r=n(861),o=n(687),a=n.n(o),i=n(44);i.ZP.defaults.baseURL="https://api.themoviedb.org";var s="c3d65b3aa74525a580b5ea03f6c1f1d0",c=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/3/trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/3/movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/3/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/3/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/3/search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=829.40075ed9.chunk.js.map