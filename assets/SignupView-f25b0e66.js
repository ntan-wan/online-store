import{_ as f,l as g,z as v,r as h,b as u,o as S,c as x,d as s,g as i,A as V,x as b,y as I,B as y,j as B}from"./index-300dbb3f.js";const c=o=>(b("data-v-681ed985"),o=o(),I(),o),U={class:"signup-view"},T=["onSubmit"],E=c(()=>s("h1",null,"Sign Up",-1)),k={class:"mt-3 flex flex-column gap-2"},P=c(()=>s("label",null,"Email",-1)),C={class:"mt-3 flex flex-column gap-2"},M=c(()=>s("label",null,"Password",-1)),N={__name:"SignupView",setup(o){const{showToastSuccess:d,showToastError:p}=g(),e=v({email:"",password:""}),a=h(!1);async function _(){a.value=!0,await y.signUpWithEmail(e.email,e.password).then(l=>{d("Sign Up Successfully"),B.push({name:"products"})}).catch(l=>{p(l)}),a.value=!1}return(l,t)=>{const r=u("InputText"),m=u("Password"),w=u("Button");return S(),x("div",U,[s("form",{class:"signup-form",onSubmit:V(_,["prevent"])},[E,s("div",k,[P,i(r,{modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=n=>e.email=n)},null,8,["modelValue"])]),s("div",C,[M,i(m,{class:"password-custom",modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=n=>e.password=n),toggleMask:""},null,8,["modelValue"])]),s("div",null,[i(w,{loading:a.value,class:"mt-5 w-full",label:"Submit",type:"submit"},null,8,["loading"])])],40,T)])}}},z=f(N,[["__scopeId","data-v-681ed985"]]);export{z as default};