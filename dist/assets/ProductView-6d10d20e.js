import{u as q,k as D,l as N,v as P,m as R,r as i,n as T,a as A,S as M,b as s,o as n,c as d,g as o,h as m,p,d as l,t as _,e as U,q as j,s as z}from"./index-03c6210a.js";const E={class:"view-product"},L={key:0,class:"w-full flex flex-column gap-3"},O={key:1},F={class:"mt-4 flex justify-content-between"},K={class:"text-justify"},$={class:"mt-5 flex flex-column sm:flex-row gap-5"},Q={__name:"ProductView",setup(G){const y=q(),u=D(),{showToastSuccess:S,showToastError:H}=N(),v=P.useMq(),I=R(),t=i(null),f=i(1),h=i(!1),k=T(()=>v.current=="xs"||v.current=="sm"?"vertical":"horizontal");A(async()=>{const a=I.params.productId,e=await y.getProduct(a);e.status==M.OK&&(t.value=e.data)});function w(a){h.value=u.isDuplicateItem(a.id),h.value||(u.addItem(a),S("Item added successfully!")),console.log("[onclickAdd]",z(u.getItems))}return(a,e)=>{const c=s("Skeleton"),x=s("Image"),g=s("SplitterPanel"),B=s("Rating"),V=s("InputNumber"),b=s("Button"),C=s("Splitter");return n(),d("div",E,[o(C,{layout:k.value},{default:m(()=>[o(g,{class:"splitter-panel-custom"},{default:m(()=>[t.value?(n(),p(x,{key:1,preview:"",src:t.value.image,width:"300",height:"300",imageStyle:{objectFit:"contain"}},null,8,["src"])):(n(),p(c,{key:0,height:"10rem"}))]),_:1}),o(g,{class:"splitter-panel-custom"},{default:m(()=>[t.value?(n(),d("div",O,[l("h1",null,_(t.value.title),1),l("div",F,[l("div",null,"RM "+_(t.value.price),1),o(B,{modelValue:t.value.rating.rate,"onUpdate:modelValue":e[0]||(e[0]=r=>t.value.rating.rate=r),readonly:"",cancel:!1},null,8,["modelValue"])]),l("p",K,_(t.value.description),1),l("div",$,[o(V,{modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=r=>f.value=r),class:"inputnumber-custom-product",inputId:"horizontal-buttons",showButtons:"",buttonLayout:"horizontal",step:1,incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus",min:1},null,8,["modelValue"]),U(u).isDuplicateItem(t.value.id)?j("",!0):(n(),p(b,{key:0,label:"Add to Cart",onClick:e[2]||(e[2]=r=>w(t.value))}))])])):(n(),d("div",L,[o(c,{height:"2.5rem"}),o(c,{class:"",height:"2.5rem"}),o(c,{class:"",height:"2.5rem"})]))]),_:1})]),_:1},8,["layout"])])}}};export{Q as default};