import{_ as g,l as w,z as v,r as h,b as a,o as S,c as x,d as s,g as l,h as V,A as I,i as y,x as B,y as T,B as k,j as E}from"./index-03c6210a.js";const u=o=>(B("data-v-cdbb6e5b"),o=o(),T(),o),C={class:"signin-view"},N=["onSubmit"],P=u(()=>s("h1",null,"Sign In",-1)),U={class:"mt-3 flex flex-column gap-2"},M=u(()=>s("label",null,"Email",-1)),j={class:"mt-3 flex flex-column gap-2"},z=u(()=>s("label",null,"Password",-1)),A={class:"mt-3"},D={__name:"SigninView",setup(o){const{showToastSuccess:d,showToastError:r}=w(),e=v({email:"",password:""}),i=h(!1);async function _(){i.value=!0;const t=await k.signInWithEmail(e.email,e.password);t.status=="success"?(d("Sign In Successfully"),E.push({name:"products"})):t.status=="fail"&&r(t.error),i.value=!1}return(t,n)=>{const m=a("InputText"),p=a("Password"),f=a("router-link"),b=a("Button");return S(),x("div",C,[s("form",{class:"signin-form",onSubmit:I(_,["prevent"])},[P,s("div",U,[M,l(m,{modelValue:e.email,"onUpdate:modelValue":n[0]||(n[0]=c=>e.email=c)},null,8,["modelValue"])]),s("div",j,[z,l(p,{class:"password-custom",modelValue:e.password,"onUpdate:modelValue":n[1]||(n[1]=c=>e.password=c),toggleMask:""},null,8,["modelValue"])]),s("div",A,[l(f,{to:"/signup"},{default:V(()=>[y("Don't have an account?")]),_:1})]),s("div",null,[l(b,{loading:i.value,class:"mt-5 w-full",label:"Submit",type:"submit"},null,8,["loading"])])],40,N)])}}},W=g(D,[["__scopeId","data-v-cdbb6e5b"]]);export{W as default};