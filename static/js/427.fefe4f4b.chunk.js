"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[427],{3549:function(e,n,r){r.d(n,{B:function(){return x}});var a=r(5705),i=r(1614),o=r(4554),t=r(3044),l=r(890),s=r(9485),m=r(3736),u=r(1889),d=r(533),h=r(403),c=r(7633),p=r(3329),x=function(e){var n=e.authType,r=e.btnTitle,x=e.onSubmit,b=(0,a.TA)({initialValues:{name:"",email:"",password:""},validationSchema:"login"===n?c.dm:c.gY,onSubmit:function(e){x(e)}});return(0,p.jsx)(i.Z,{component:"div",maxWidth:"xs",style:{minWidth:"420px"},children:(0,p.jsxs)(o.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,p.jsx)(t.Z,{sx:{m:1,bgcolor:"#1976d2"},children:(0,p.jsx)(h.Z,{})}),(0,p.jsx)(l.Z,{component:"h1",variant:"h5",children:r}),(0,p.jsxs)(o.Z,{component:"form",sx:{mt:1},onSubmit:b.handleSubmit,children:["register"===n&&(0,p.jsx)(s.Z,{margin:"normal",fullWidth:!0,type:"text",id:"name",label:"Name *",name:"name",value:b.values.name,onChange:b.handleChange,error:b.touched.name&&Boolean(b.errors.name),helperText:b.touched.name&&b.errors.name}),(0,p.jsx)(s.Z,{margin:"normal",fullWidth:!0,type:"email",id:"email",label:"Email *",name:"email",value:b.values.email,onChange:b.handleChange,error:b.touched.email&&Boolean(b.errors.email),helperText:b.touched.email&&b.errors.email}),(0,p.jsx)(s.Z,{margin:"normal",fullWidth:!0,type:"password",id:"password",label:"Password *",name:"password",value:b.values.password,onChange:b.handleChange,error:b.touched.password&&Boolean(b.errors.password),helperText:b.touched.password&&b.errors.password}),(0,p.jsx)(m.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:r}),(0,p.jsxs)(u.ZP,{container:!0,children:[(0,p.jsx)(u.ZP,{item:!0,xs:!0}),(0,p.jsx)(u.ZP,{item:!0,children:"Login"===r?(0,p.jsx)(d.Z,{href:"/phonebook/register",variant:"body2",children:"Don't have an account? Register"}):(0,p.jsx)(d.Z,{href:"/phonebook/login",variant:"body2",children:"Already have an account? Login"})})]})]})]})})}},7427:function(e,n,r){r.r(n),r.d(n,{Login:function(){return l}});var a=r(9434),i=r(3549),o=r(5599),t=r(3329),l=function(){var e=(0,a.I0)();return(0,t.jsx)(i.B,{authType:"login",btnTitle:"Login",onSubmit:function(n){e((0,o.pH)(n))}})}},7633:function(e,n,r){r.d(n,{OD:function(){return t},dm:function(){return i},gY:function(){return o}});var a=r(6727),i=a.Ry({email:a.Z_().email().required(),password:a.Z_().min(6).required()}),o=a.Ry({name:a.Z_().min(3).max(15).required(),email:a.Z_().email().required(),password:a.Z_().min(6).required()}),t=a.Ry({name:a.Z_().min(3).max(15).required(),number:a.Z_().matches(/[0-9]/,"number must contain only numbers").max(13).required()})}}]);
//# sourceMappingURL=427.fefe4f4b.chunk.js.map