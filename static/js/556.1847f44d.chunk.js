"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[556],{6971:function(n,e,t){var r=t(5264);r.Notify.init({position:"center-top"}),e.Z=r.Notify},5556:function(n,e,t){t.r(e),t.d(e,{Contacts:function(){return On}});var r,i,a,o,l,s,c,d,p,u,m,x,h,f,g,b,Z,w,v,j,y,k,P,C,S,I,D=t(2791),T=t(9434),_=t(5705),q=t(1614),W=t(4554),z=t(9485),N=t(3736),A=t(6971),F=t(6916),L=function(n){return n.contacts.items},B=function(n){return n.contacts.isLoading},V=function(n){return n.contacts.error},O=(0,F.P1)([L,function(n){return n.filter}],(function(n,e){var t=e.toLowerCase();return""===e?n:n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),R=t(1555),K=t(7633),U=t(3329),E=function(){var n=(0,T.I0)(),e=(0,T.v9)(L),t=(0,_.TA)({initialValues:{name:"",number:""},validationSchema:K.OD,onSubmit:function(r){e.find((function(n){return n.name.toLowerCase()===r.name.trim().toLowerCase()}))?A.Z.failure('"'.concat(r.name,'" is already in contacts')):(n((0,R.uK)(r)),t.resetForm(),A.Z.success('Contact "'.concat(r.name,'" successfully created')))}});return(0,U.jsx)(q.Z,{component:"div",maxWidth:"xs",children:(0,U.jsx)(W.Z,{sx:{marginTop:2,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,U.jsxs)(W.Z,{component:"form",sx:{mt:1},onSubmit:t.handleSubmit,children:[(0,U.jsx)(z.Z,{margin:"normal",fullWidth:!0,id:"name",label:"Name *",name:"name",value:t.values.name,onChange:t.handleChange,error:t.touched.name&&Boolean(t.errors.name),helperText:t.touched.name&&t.errors.name}),(0,U.jsx)(z.Z,{margin:"normal",fullWidth:!0,id:"number",label:"Number *",name:"number",value:t.values.number,onChange:t.handleChange,error:t.touched.number&&Boolean(t.errors.number),helperText:t.touched.number&&t.errors.number}),(0,U.jsx)(N.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})})})},G=t(1634),J=t(292),M=t(3466),X=t(1421),Y=t(168),$=t(7691),H=$.ZP.label(r||(r=(0,Y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  }\n"]))),Q=function(){var n=(0,T.I0)();return(0,U.jsx)(H,{children:(0,U.jsx)(J.Z,{id:"input-with-icon-adornment",placeholder:"Find contact",onChange:function(e){return n((0,G.M)(e.target.value))},startAdornment:(0,U.jsx)(M.Z,{position:"start",children:(0,U.jsx)(X.Z,{"aria-label":"search"})})})})},nn=t(3433),en=t(9439),tn=t(8402),rn=$.ZP.div(i||(i=(0,Y.Z)(["\n  position: absolute;\n  // top: 470px;\n  // left: 500px;\n  top: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  justify-content: center;\n\n  // margin-left: auto;\n  // margin-right: auto;\n"]))),an=function(){var n=(0,T.v9)(B);return(0,U.jsx)(rn,{children:n&&(0,U.jsx)(tn.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"40",visible:!0})})},on=t(1413),ln=t(8384),sn=t(6711),cn=$.ZP.div(a||(a=(0,Y.Z)(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #d8d4d4a1;\n"]))),dn=$.ZP.form(o||(o=(0,Y.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -100%);\n  background-color: #ffffff;\n  gap: 10px;\n  width: calc(100% - 40px);\n  height: 200px;\n  border: 1px solid #c8c6c6;\n  border-radius: 5px;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n  padding: 10px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 380px) {\n    height: 100px;\n    display: flex;\n    align-items: center;\n  }\n\n  @media screen and (min-width: 480px) {\n    width: 420px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 560px;\n  }\n"]))),pn=$.ZP.div(l||(l=(0,Y.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 10px;\n\n  @media screen and (min-width: 380px) {\n    flex-direction: column;\n    gap: 10px;\n  }\n"]))),un=$.ZP.button(s||(s=(0,Y.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 20px;\n  height: 20px;\n"]))),mn=(0,$.ZP)(ln.Z)(c||(c=(0,Y.Z)(["\n  fill: green !important;\n  cursor: pointer;\n\n  &:hover {\n    scale: 1.1;\n    transition: 250ms;\n  }\n"]))),xn=(0,$.ZP)(sn.Z)(d||(d=(0,Y.Z)(["\n  fill: red !important;\n  cursor: pointer;\n\n  &:hover {\n    scale: 1.1;\n    transition: 250ms;\n  }\n"]))),hn=function(n){var e=n.setIsUpdate,t=n.contact,r=(0,T.I0)(),i=function(){e(!1)},a=(0,_.TA)({initialValues:{name:t.name,number:t.number},validationSchema:K.OD,onSubmit:function(n){r((0,R.Tk)((0,on.Z)({id:t.id},n))),i(),A.Z.success('Contact "'.concat(n.name,'" updated successfully'))}});return(0,U.jsx)(cn,{children:(0,U.jsxs)(dn,{onSubmit:a.handleSubmit,children:[(0,U.jsx)(z.Z,{margin:"normal",fullWidth:!0,autoFocus:!0,id:"name",label:"Name *",name:"name",defaultValue:a.values.name,onChange:a.handleChange,error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name}),(0,U.jsx)(z.Z,{margin:"normal",fullWidth:!0,id:"number",label:"Number *",name:"number",defaultValue:a.values.number,onChange:a.handleChange,error:a.touched.number&&Boolean(a.errors.number),helperText:a.touched.number&&a.errors.number}),(0,U.jsxs)(pn,{children:[(0,U.jsx)(un,{type:"submit",children:(0,U.jsx)(mn,{"aria-label":"confirm"})}),(0,U.jsx)(xn,{"aria-label":"cancel",onClick:i})]})]})})},fn=t(9952),gn=t(1286),bn=t(383),Zn=$.ZP.div(p||(p=(0,Y.Z)(["\n  position: relative;\n  box-sizing: border-box;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  padding: 60px 0 20px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 480px) {\n    width: 440px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 600px;\n  }\n"]))),wn=$.ZP.ul(u||(u=(0,Y.Z)(["\n  padding-left: 10px;\n  overflow-y: scroll;\n  min-height: 222px;\n  height: calc(100vh - 507px);\n\n  ::-webkit-scrollbar-track {\n    background-color: transparent;\n    border-radius: 2px;\n  }\n\n  ::-webkit-scrollbar {\n    width: 6px;\n    background-color: transparent;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #1976d2;\n    border-radius: 5px;\n\n    &:hover {\n      background-color: #1565c0;\n    }\n  }\n"]))),vn=$.ZP.li(m||(m=(0,Y.Z)(["\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: calc(100% - 30px);\n  height: 40px;\n  border-radius: 4px;\n  background-color: #1976d2;\n  color: #ffffff;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n  padding: 0 10px;\n  margin-bottom: 5px;\n\n  &:hover {\n    scale: 1.03;\n    background-color: #1565c0;\n    transition: 250ms;\n  }\n\n  @media screen and (max-width: 419px) {\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: 50px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n"]))),jn=$.ZP.div(x||(x=(0,Y.Z)(["\n  display: flex;\n  align-items: center;\n  width: 150px;\n"]))),yn=$.ZP.p(h||(h=(0,Y.Z)(["\n  @media screen and (max-width: 419px) {\n    margin-left: 20px;\n  }\n"]))),kn=$.ZP.div(f||(f=(0,Y.Z)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 419px) {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 14px;\n  }\n"]))),Pn=(0,$.ZP)(fn.Z)(g||(g=(0,Y.Z)(["\n  margin-right: 5px;\n\n  @media screen and (min-width: 480px) {\n    margin-right: 10px;\n  }\n"]))),Cn=(0,$.ZP)(gn.Z)(b||(b=(0,Y.Z)(["\n  cursor: pointer;\n  margin-right: 5px;\n\n  &:hover {\n    color: #30f52a;\n    scale: 1.1;\n  }\n\n  @media screen and (min-width: 480px) {\n    margin-right: 10px;\n  }\n"]))),Sn=(0,$.ZP)(bn.Z)(Z||(Z=(0,Y.Z)(["\n  cursor: pointer;\n\n  &:hover {\n    color: #eb4b5b;\n    scale: 1.1;\n  }\n"]))),In=t(9388),Dn=$.ZP.div(w||(w=(0,Y.Z)(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #d8d4d4a1;\n"]))),Tn=$.ZP.form(v||(v=(0,Y.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -100%);\n  background-color: #ffffff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: calc(100% - 40px);\n  height: 100px;\n  border: 1px solid #c8c6c6;\n  border-radius: 5px;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n  padding: 10px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 480px) {\n    width: 420px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 560px;\n  }\n"]))),_n=(0,$.ZP)(In.Z)(j||(j=(0,Y.Z)(["\n  width: 30px !important;\n  height: 30px !important;\n  fill: red !important;\n\n  @media screen and (min-width: 480px) {\n    width: 40px !important;\n    height: 40px !important;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 50px !important;\n    height: 50px !important;\n  }\n"]))),qn=$.ZP.p(y||(y=(0,Y.Z)(["\n  text-align: center;\n  margin-left: 10px;\n  margin-right: 10px;\n"]))),Wn=$.ZP.div(k||(k=(0,Y.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n"]))),zn=$.ZP.button(P||(P=(0,Y.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 20px;\n  height: 20px;\n"]))),Nn=(0,$.ZP)(ln.Z)(C||(C=(0,Y.Z)(["\n  fill: green !important;\n  cursor: pointer;\n\n  &:hover {\n    scale: 1.1;\n    transition: 250ms;\n  }\n"]))),An=(0,$.ZP)(sn.Z)(S||(S=(0,Y.Z)(["\n  fill: red !important;\n  cursor: pointer;\n\n  &:hover {\n    scale: 1.1;\n    transition: 250ms;\n  }\n"]))),Fn=function(n){var e=n.setIsDelete,t=n.contact,r=(0,T.I0)(),i=function(){e(!1)};return(0,U.jsx)(Dn,{children:(0,U.jsxs)(Tn,{onSubmit:function(n){n.preventDefault(),r((0,R.GK)(t.id)),i(),A.Z.success('Contact "'.concat(t.name,'" deleted successfully'))},children:[(0,U.jsx)(_n,{"aria-label":"warning"}),(0,U.jsxs)(qn,{children:['Are you sure you want to delete the contact "',t.name,'"?']}),(0,U.jsxs)(Wn,{children:[(0,U.jsx)(zn,{type:"submit",children:(0,U.jsx)(Nn,{"aria-label":"confirm"})}),(0,U.jsx)(An,{"aria-label":"cancel",onClick:i})]})]})})},Ln=function(){var n=(0,D.useState)(!1),e=(0,en.Z)(n,2),t=e[0],r=e[1],i=(0,D.useState)({}),a=(0,en.Z)(i,2),o=a[0],l=a[1],s=(0,D.useState)(!1),c=(0,en.Z)(s,2),d=c[0],p=c[1],u=(0,T.v9)(O);return(0,U.jsxs)(U.Fragment,{children:[t&&(0,U.jsx)(hn,{setIsUpdate:r,contact:o}),d&&(0,U.jsx)(Fn,{setIsDelete:p,contact:o}),(0,U.jsxs)(Zn,{children:[(0,U.jsx)(an,{}),(0,U.jsx)(wn,{children:(0,nn.Z)(u).sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){var e=n._id,t=n.name,i=n.number;return(0,U.jsxs)(vn,{children:[(0,U.jsxs)(jn,{children:[(0,U.jsx)(Pn,{"aria-label":"avatar"}),(0,U.jsx)("p",{children:t})]}),(0,U.jsx)(yn,{children:i}),(0,U.jsxs)(kn,{children:[(0,U.jsx)(Cn,{"aria-label":"edit",onClick:function(){return n={id:e,name:t,number:i},r(!0),void l(n);var n}}),(0,U.jsx)(Sn,{"aria-label":"delete",onClick:function(){return function(n){p(!0),l(n)}({id:e,name:t,number:i})}})]})]},e)}))})]})]})},Bn=t(4289),Vn=$.ZP.div(I||(I=(0,Y.Z)(["\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),On=function(){var n=(0,T.I0)(),e=(0,T.v9)(V),t=(0,T.v9)(Bn.Jt);return(0,D.useEffect)((function(){t&&n((0,R.yF)())}),[n,t]),e?(0,U.jsx)("p",{children:"Download error"}):(0,U.jsxs)(Vn,{children:[(0,U.jsx)(E,{}),(0,U.jsx)(Q,{}),(0,U.jsx)(Ln,{})]})}},7633:function(n,e,t){t.d(e,{OD:function(){return o},dm:function(){return i},gY:function(){return a}});var r=t(6727),i=r.Ry({email:r.Z_().email().required(),password:r.Z_().min(6).required()}),a=r.Ry({name:r.Z_().min(3).max(15).required(),email:r.Z_().email().required(),password:r.Z_().min(6).required()}),o=r.Ry({name:r.Z_().min(3).max(15).required(),number:r.Z_().matches(/^([+]?[0-9])*$/,"number must contain only numbers").max(13).required()})}}]);
//# sourceMappingURL=556.1847f44d.chunk.js.map