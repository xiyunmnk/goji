import{jsx as o,jsxs as e}from"react/jsx-runtime";import{motion as t}from"framer-motion";function l(o,e){void 0===e&&(e={});var t=e.insertAt;if(o&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css","top"===t&&l.firstChild?l.insertBefore(d,l.firstChild):l.appendChild(d),d.styleSheet?d.styleSheet.cssText=o:d.appendChild(document.createTextNode(o))}}var d={upload:"upload-module_upload__sdJ3u"};function a(e){const{onClick:t,url:l,name:a}=e;return o("div",Object.assign({title:a,onClick:t,className:d.upload},{children:a}))}l(".upload-module_upload__sdJ3u{color:red}");var i={modal:"modal-module_modal__6lMO2",mask:"modal-module_mask__4ikYm",modalContent:"modal-module_modalContent__h8nfh"};function n(l){const{width:d=800,children:a,dontDestroyOnClose:n=!1,visible:m,onClose:s,style:r={},motionConfig:c={initial:{opacity:.1,y:0,scale:.2},animate:{opacity:1,y:100,scale:1}}}=l,u={};if(n)u.display=m?"block":"none";else if(!m)return null;return e("div",Object.assign({style:Object.assign({},u),className:i.modal},{children:[o("div",{onClick:()=>{null==s||s()},className:i.mask}),o(t.div,Object.assign({},c,{style:Object.assign({width:`${d}px`},r),className:i.modalContent},{children:a}))]}))}l(".modal-module_modal__6lMO2{bottom:0;left:0;position:fixed;right:0;top:0;width:100%}.modal-module_modal__6lMO2 .modal-module_mask__4ikYm{background-color:rgba(92,93,93,.385);bottom:0;left:0;position:fixed;right:0;top:0;z-index:10000}.modal-module_modal__6lMO2 .modal-module_modalContent__h8nfh{background-color:#fff;left:0;margin:0 auto;min-height:200px;position:absolute;right:0;top:100px;z-index:10001}");export{n as Modal,a as Upload};
//# sourceMappingURL=index.js.map