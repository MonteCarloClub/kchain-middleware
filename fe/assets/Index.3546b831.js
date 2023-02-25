import{h as b,i as $,o as y,d as f,q,v as j,b as c,s as V,t as w,p as H,a as L,u as p,e as k,x as C,y as W,z as M,F as K,B as O,j as U}from"./vendor.82ee877c.js";import{_ as N,o as Z,L as G,N as J,K as Q,a as X,b as Y,S as ee}from"./index.ac35c7db.js";import{s as R}from"./shuffle.cbddf0eb.js";const te=a=>(H("data-v-328de324"),a=a(),L(),a),se={class:"group"},ae=te(()=>c("span",{class:"bar"},null,-1)),oe=b({props:{placeholder:{type:String,default:"\u8BF7\u5728\u6B64\u8F93\u5165"}},setup(a){const e=$("");return(n,i)=>(y(),f("div",se,[q(c("input",{type:"text",required:"","onUpdate:modelValue":i[0]||(i[0]=d=>e.value=d),onKeydown:i[1]||(i[1]=V(d=>p(Z)(e.value),["enter"]))},null,544),[[j,e.value]]),ae,c("label",null,w(a.placeholder),1)]))}});var ne=N(oe,[["__scopeId","data-v-328de324"]]);const re=a=>(H("data-v-3c9d1d4c"),a=a(),L(),a),le={class:"header"},ce={class:"logo"},ie=re(()=>c("div",null,null,-1)),de=b({setup(a){return(e,n)=>(y(),f("div",le,[c("div",ce,[k(G)]),ie,k(J)]))}});var pe=N(de,[["__scopeId","data-v-3c9d1d4c"]]);function he(a,e={}){var B,x,A,z;const n=(B=e.blockWidth)!=null?B:100,i=(x=e.gap)!=null?x:80,d=(A=e.rows)!=null?A:3,l=(z=e.cols)!=null?z:4,E=a.width,I=a.height,_=a.getContext("2d");function g(){this.crosses=[],this.init()}g.prototype.init=function(){for(let s=0;s<d;s++){let o=[];for(let t=0;t<l;t++)o.push({x:n/2+t*(n+i),y:n/2+s*(n+i)});this.crosses.push(o)}},g.prototype.randomPath=function(){const s=parseInt(Math.random()*l),o=parseInt(Math.random()*d);let t=parseInt(Math.random()*l);for(;t===s;)t=parseInt(Math.random()*l);let u=parseInt(Math.random()*d);for(;u===o;)u=parseInt(Math.random()*d);const D=Math.abs(t-s),P=Math.abs(u-o);let F=0,T=0;return P>D?F=u-o>0?1:-1:T=t-s>0?1:-1,{from:this.crosses[o][s],dis:n+i,dir:{x:T,y:F}}};const S=new g;var r={count:d*l+10,spawnChance:.3,sparkChance:.1,sparkDist:10,sparkSize:2,speed:2.5,neonSize:3,repaintAlpha:.9,shadowToTimePropMult:6,color:"hsl(6, 100%, 0%)"};let m=[];function v(){this.reset()}v.prototype.reset=function(){const{from:s,dis:o,dir:t}=S.randomPath();this.distance=o,this.x=s.x,this.y=s.y,this.vx=r.speed*t.x,this.vy=r.speed*t.y,this.process=0},v.prototype.step=function(){const s=this.process/this.distance;s>.99&&this.reset();const o=this.vx*(2-s),t=this.vy*(2-s);if(this.process+=Math.sqrt(o*o+t*t),this.x+=o,this.y+=t,_.shadowBlur=s*r.shadowToTimePropMult,_.fillStyle=_.shadowColor=this.color,_.fillRect(this.x,this.y,r.neonSize,r.neonSize),Math.random()<r.sparkChance){const u=this.x+Math.random()*r.sparkDist*(Math.random()<.5?1:-1)-r.sparkSize/2,D=this.y+Math.random()*r.sparkDist*(Math.random()<.5?1:-1)-r.sparkSize/2;_.fillRect(u,D,r.sparkSize,r.sparkSize)}};function h(){requestAnimationFrame(h);for(var s=_.getImageData(0,0,E,I).data,o=_.createImageData(E,I),t=0;t<o.data.length;t+=4){o.data[t+0]=s[t+0],o.data[t+1]=s[t+1],o.data[t+2]=s[t+2];let u=s[t+3]*r.repaintAlpha;o.data[t+3]=u>20?u:0}_.putImageData(o,0,0),m.length<r.count&&Math.random()<r.spawnChance&&m.push(new v),m.map(function(u){u.step()})}return{init:function(){requestAnimationFrame(h)}}}const ue="%E5%BC%A0%E4%BA%AE%20%E8%94%A1%E6%A0%8B%E6%A2%81%20%E5%86%AF%E7%90%A6%20%E9%99%88%E9%80%B8%E9%A3%9E%20%E7%8E%8B%E8%89%BA%E8%B1%AA%20%E6%9E%97%E5%8D%9A%E9%9F%AC%20%E8%92%8B%E6%B7%87%E6%B7%87%20%E9%99%B6%E9%9D%99%E6%80%A1%20%E8%B7%AF%E5%B0%8F%E5%87%A1%20%E5%BC%A0%E5%B1%95%E9%B9%8F%20%E9%BB%84%E9%87%91%E8%8D%A3%20%E5%86%89%E6%B4%A5%E8%B1%AA%20%E4%BB%B2%E5%B4%87%E9%B9%8F%20%E6%9C%B1%E5%B0%8A%E9%9B%84%20%E8%B5%B5%E4%BA%91%E6%BD%87%20%E9%99%88%E8%89%BA%E4%B8%B9";function _e(a){let e=R(decodeURIComponent(ue).split(" ")),n=[];for(let l=0;l<a;l++)n.push(l*.5+Math.random());n=R(n);const i=[],d=[];for(let l=0;l<a;l++)i.push(e[l%e.length]),d.push({animationDelay:`${n[l%e.length]}s`});return{names:i,styles:d}}const me={class:"container"},ve=["onClick"],ye={class:"shining neonText"},fe=b({props:{width:{type:Number,default:800},height:{type:Number,default:500},blockSize:{type:Number,default:100},gap:{type:Number,default:80},rows:{type:Number,default:4},cols:{type:Number,default:4},layerHeight:{type:Number,default:15}},setup(a){const e=a,n=C(()=>e.cols*e.rows),{names:i,styles:d}=_e(n.value);let l=$(!1);Math.round(Math.random()*n.value);function E(m){}const I=C(()=>({gap:`${e.gap}px`,gridTemplateRows:`repeat(${e.rows}, ${e.blockSize}px)`,gridTemplateColumns:`repeat(${e.cols}, ${e.blockSize}px)`})),_=C(()=>({transform:`translateZ(${e.layerHeight}px)`})),g=C(()=>({transform:`translateZ(${2*e.layerHeight}px)`})),S=$(null),r=$(null);return W(()=>{var x,A;const m=(x=r.value)==null?void 0:x.offsetWidth,v=(A=r.value)==null?void 0:A.offsetHeight,h=S.value;if(h){h.width=m!=null?m:e.width,h.height=v!=null?v:e.height;var B=he(h,{blockWidth:e.blockSize,gap:e.gap,rows:e.rows,cols:e.cols,speed:2.5,neonSize:3});B.init()}}),(m,v)=>(y(),f("div",me,[c("div",{ref_key:"gridsContainerEl",ref:r,class:"cluster"},[c("div",{class:"grids",style:M(p(I))},[(y(!0),f(K,null,O(p(n),h=>(y(),f("div",{key:h,class:"grid block"},[c("div",{class:"grid-layer block",style:M([p(g),"animationDelay:"+h%4/p(n)*2+"s"]),onClick:B=>E()},null,12,ve),p(l)?(y(),f("div",{key:0,class:"board",style:M([p(d)[h-1]])},[c("p",ye,w(p(i)[h-1]),1)],4)):U("",!0)]))),128))],4),c("canvas",{ref_key:"canvasEl",ref:S,class:"path-canvas",style:M(p(_))},null,4)],512)]))}});var Ee=N(fe,[["__scopeId","data-v-50cc56e0"]]);const ge={class:"background"},Be={class:"page"},xe={class:"left"},Ae={class:"desc"},we=b({setup(a){const e=Q,n=X,i=Y,d=ee;return(l,E)=>(y(),f(K,null,[c("div",ge,[k(Ee,{cols:5})]),c("div",Be,[k(pe),c("div",xe,[c("h1",null,w(p(e)),1),c("h2",null,w(p(n)),1),c("div",Ae,w(p(i)),1),k(ne,{placeholder:p(d)},null,8,["placeholder"])])])],64))}});var be=N(we,[["__scopeId","data-v-07e18b35"]]);export{be as default};