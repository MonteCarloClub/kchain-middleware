import{A as l}from"./AntListItem.dd295d4b.js";import{S as B}from"./SubTitle.7c259136.js";import{d as g}from"./index.5827a974.js";import{_ as v}from"./index.ac35c7db.js";import{h as k,i as D,C as p,r as c,o as _,d as y,e as a,w as e,F as j,D as s,t as n,u,c as h,L as I,M as S}from"./vendor.82ee877c.js";const b=s(" \u6210\u529F "),F=s(" \u5931\u8D25 "),L=k({props:{hash:String},setup(f){const C=f,x=D(!1);let o=p({});const A=p({tx_hash:C.hash||"123"});return g(A).then(d=>{d&&d.data?(o=d.data.tx,x.value=!0):console.log("\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A")}),(d,N)=>{const i=c("a-tag"),m=c("router-link"),E=c("a-list");return _(),y(j,null,[a(B,{title:"\u4EA4\u6613\u8BE6\u60C5",type:"h1"}),a(E,{class:"container"},{default:e(()=>[a(l,{title:"\u4EA4\u6613\u54C8\u5E0C"},{default:e(()=>[s(n(f.hash),1)]),_:1}),a(l,{title:"\u72B6\u6001"},{default:e(()=>{var t;return[((t=u(o))==null?void 0:t.status)===1?(_(),h(i,{key:0,color:"#000"},{icon:e(()=>[a(u(I))]),default:e(()=>[b]),_:1})):(_(),h(i,{key:1,color:"default"},{icon:e(()=>[a(u(S))]),default:e(()=>[F]),_:1}))]}),_:1}),a(l,{title:"\u533A\u5757\u9AD8\u5EA6"},{default:e(()=>{var t;return[s(n((t=u(o))==null?void 0:t.height),1)]}),_:1}),a(l,{title:"Nonce"},{default:e(()=>{var t;return[s(n((t=u(o))==null?void 0:t.nonce),1)]}),_:1}),a(l,{title:"\u53D1\u9001\u8005"},{default:e(()=>{var t;return[a(m,{to:"/address/"+((t=u(o))==null?void 0:t.from)},{default:e(()=>{var r;return[s(n((r=u(o))==null?void 0:r.from),1)]}),_:1},8,["to"])]}),_:1}),a(l,{title:"\u63A5\u6536\u65B9"},{default:e(()=>{var t;return[a(m,{to:"/address/"+((t=u(o))==null?void 0:t.to)},{default:e(()=>{var r;return[s(n((r=u(o))==null?void 0:r.to),1)]}),_:1},8,["to"])]}),_:1}),a(l,{title:"\u7B7E\u540D"},{default:e(()=>[a(i,null,{default:e(()=>{var t;return[s(n((t=u(o))==null?void 0:t.signature),1)]}),_:1})]),_:1}),a(l,{title:"\u5B58\u8BC1"},{default:e(()=>{var t;return[s(n((t=u(o))==null?void 0:t.data),1)]}),_:1})]),_:1})],64)}}});var R=v(L,[["__scopeId","data-v-63e0a375"]]);export{R as default};
