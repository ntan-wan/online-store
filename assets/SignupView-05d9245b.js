import{_ as w,l as g,z as v,r as S,b as c,o as b,c as h,d as s,g as u,A as x,x as V,y as I,B as y,j as B}from"./index-03c6210a.js";const i=o=>(V("data-v-7c9bccae"),o=o(),I(),o),U={class:"signup-view"},T=["onSubmit"],E=i(()=>s("h1",null,"Sign Up",-1)),k={class:"mt-3 flex flex-column gap-2"},P=i(()=>s("label",null,"Email",-1)),C={class:"mt-3 flex flex-column gap-2"},M=i(()=>s("label",null,"Password",-1)),N={__name:"SignupView",setup(o){const{showToastSuccess:d,showToastError:p}=g(),e=v({email:"",password:""}),l=S(!1);async function r(){l.value=!0;const t=await y.signUpWithEmail(e.email,e.password);t.status=="success"?(d("Sign Up Successfully"),B.push({name:"products"})):t.status=="fail"&&p(t.error),l.value=!1}return(t,a)=>{const _=c("InputText"),m=c("Password"),f=c("Button");return b(),h("div",U,[s("form",{class:"signup-form",onSubmit:x(r,["prevent"])},[E,s("div",k,[P,u(_,{modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=n=>e.email=n)},null,8,["modelValue"])]),s("div",C,[M,u(m,{class:"password-custom",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=n=>e.password=n),toggleMask:""},null,8,["modelValue"])]),s("div",null,[u(f,{loading:l.value,class:"mt-5 w-full",label:"Submit",type:"submit"},null,8,["loading"])])],40,T)])}}},z=w(N,[["__scopeId","data-v-7c9bccae"]]);export{z as default};
