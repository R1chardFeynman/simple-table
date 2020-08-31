(this["webpackJsonptable-data-editor"]=this["webpackJsonptable-data-editor"]||[]).push([[0],{162:function(e,t,a){e.exports=a(335)},335:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),i=a(99),o=a(42),u=a(41),m=a(381),d=a(382),s=a(387),f=a(374),p=a(371),E=a(388),O=a(386),g=a(384),b=a(390),x=a(368),h=a(383),y=a(375),j=a(141),S=Object(x.a)({root:{marginBottom:"12px"}}),v=Object(x.a)({root:{justifyContent:"space-around"}}),C=function(e){var t=e.type,a=e.elementToEdit,r=e.open,c=e.handleOnClose,i=e.handleOnAdd,m=e.handleOnEdit,d=e.isExtraSmall,x={name:"",type:"side",color:"#ffffff"},C=S(),k=v(),N=Object(n.useState)(x),z=Object(u.a)(N,2),w=z[0],A=z[1],T=Object(n.useState)("#ffffff"),I=Object(u.a)(T,2),P=I[0],D=I[1],J=Object(n.useState)(!1),M=Object(u.a)(J,2),B=M[0],F=M[1];Object(n.useEffect)((function(){a&&(A(a),D(a.color))}),[a]);var R=function(){D("#ffffff"),F(!1),A(x)},q=function(e,t){var a=Object(o.a)({},w);a[t]=e.target.value,A(a)};return l.a.createElement(s.a,{fullScreen:d,open:r},l.a.createElement(E.a,null,{edit:"Edit",add:"Add"}[t]),l.a.createElement(p.a,null,l.a.createElement(h.a,{display:"flex",flexDirection:"column"},l.a.createElement(O.a,{onChange:function(e){return q(e,"name")},value:w.name,error:B,label:"Name",type:"text",className:C.root}),l.a.createElement(g.a,{label:"Type",onChange:function(e){return q(e,"type")},value:w.type,className:C.root},l.a.createElement(b.a,{value:"main"},"main"),l.a.createElement(b.a,{value:"side"},"side")),l.a.createElement(h.a,{margin:"8px auto"},l.a.createElement(j.SketchPicker,{color:P,onChange:function(e){D(e.rgb)},onChangeComplete:function(e){var t=e.hex+Math.round(255*e.rgb.a).toString(16);A(Object(o.a)(Object(o.a)({},w),{},{color:t}))}})),l.a.createElement(f.a,{className:k.root},l.a.createElement(y.a,{onClick:function(){var e={add:i,edit:m};!w.name&&(F(!0),1)||((0,e[t])(w),c(),R())}},"Submit"),l.a.createElement(y.a,{onClick:function(){R(),c()}},"Cancel")))))};C.defaultProps={elementToEdit:null};var k=C,N=a(377),z=a(379),w=a(378),A=a(145),T=a.n(A),I=a(146),P=a.n(I),D=a(147),J=a.n(D),M=a(376),B=Object(x.a)({root:{padding:4}}),F=function(e){var t=e.type,a=e.size,n=e.handleOnClick,r={edit:T.a,delete:P.a,add:J.a}[t],c=B();return l.a.createElement(M.a,{className:c.root,onClick:n},l.a.createElement(r,{fontSize:a}))};F.defaultProps={size:"medium",handleOnClick:void 0};var R=F,q=a(4),G=a.n(q),H=function(e){var t=e.actions,a=e.colAmount,n=e.isExtraSmall,r=Object(x.a)({root:{borderBottom:"none",padding:function(){return"".concat(n?"16px 8px":"16px")}}})();return l.a.createElement(w.a,null,Array.from({length:a-1},(function(e,t){return t})).map((function(){return l.a.createElement(N.a,{className:r.root})})),l.a.createElement(N.a,{className:r.root},l.a.createElement(h.a,{display:"flex",justifyContent:"flex-end"},t.map((function(e){return l.a.createElement(R,{type:e.type,handleOnClick:e.handleOnClick})})))))};G.a.shape([{type:G.a.string,handleOnClick:G.a.func}]);H.defaultProps={isExtraSmall:!1};var K=H,L=function(e){var t=e.columns,a=e.actions,n=e.isExtraSmall,r=Object(x.a)({root:{padding:function(){return"".concat(n?"16px 8px":"16px")}}})();return l.a.createElement(z.a,null,l.a.createElement(K,{isExtraSmall:n,colAmount:t.length,actions:a}),l.a.createElement(w.a,null,t.map((function(e){return l.a.createElement(N.a,{className:r.root,align:e.align,padding:e.padding},e.title)}))))};L.defaultProps={isExtraSmall:!1};var Q=L,U=a(380),V=function(e){var t=e.data,a=e.rowStructure,n=e.handleOnDelete,r=e.handleOnEdit,c=e.isExtraSmall,i=Object(x.a)({root:{padding:function(){return"".concat(c?"16px 8px":"16px")},"&.MuiTableCell-sizeSmall.MuiTableCell-paddingCheckbox:last-child":{padding:function(){return"".concat(c?"16px 8px":"16px")}}}})();return l.a.createElement(U.a,null,t.map((function(e){return l.a.createElement(w.a,null,a.map((function(t){var a=t.key,n=t.align,r=t.padding;return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{className:"".concat(i.root," ").concat(i.sizeSmall),align:n,padding:r},e[a]))})),l.a.createElement(N.a,{className:i.root,padding:"checkbox",size:"small",align:"center"},l.a.createElement(h.a,{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"},l.a.createElement(R,{type:"edit",size:"small",handleOnClick:function(){return r(e)}}),l.a.createElement(R,{type:"delete",size:"small",handleOnClick:function(){return n(e)}}))))})))},W=function(){var e={isOpen:!1,type:"",element:null},t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(e),f=Object(u.a)(s,2),p=f[0],E=f[1];Object(n.useEffect)((function(){var e=localStorage.getItem("data");if(e){var t=JSON.parse(e);c(t)}}),[]),Object(n.useEffect)((function(){localStorage.setItem("data",JSON.stringify(r))}),[r]);var O=Object(m.a)("(max-width: 380px"),g=function(e,t){E(Object(o.a)(Object(o.a)({},p),{},{type:e,isOpen:!0,element:t||null}))},b=function(){E(e)},x=[{type:"add",handleOnClick:function(){g("add")}}];return l.a.createElement(d.a,null,l.a.createElement(k,{elementToEdit:p.element,handleOnClose:b,handleOnAdd:function(e){c([].concat(Object(i.a)(r),[e]))},handleOnEdit:function(e){var t=Object(i.a)(r),a=t.findIndex((function(e){return e.name===p.element.name}));t[a]=e,c(t),b()},open:p.isOpen,type:p.type,isExtraSmall:O}),l.a.createElement(Q,{columns:[{title:"Name"},{title:"Type",align:"right"},{title:"Color",align:"right"},{title:"Actions",align:"center"}],actions:x,isExtraSmall:O}),l.a.createElement(V,{isExtraSmall:O,data:r,rowStructure:[{key:"name"},{key:"type",align:"right"},{key:"color",align:"right"}],handleOnEdit:function(e){g("edit",e)},handleOnDelete:function(e){c(r.filter((function(t){return t.name!==e.name})))}}))};var X=function(){return l.a.createElement("div",null,l.a.createElement(h.a,{width:{xs:"100%",sm:"60%",md:"35%",lg:"30%"},margin:"0 auto",border:"1px solid rgba(224, 224, 224, 1)",borderRadius:"5px",boxSizing:"border-box"},l.a.createElement(W,null)))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(X,null)),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.1c2be29d.chunk.js.map