import{a as K,I as R,i as g,r as V,s as $}from"./Icon.B_APJlpK.js";import{p as q,m as z,l as A,n as B,t as d,e as E,a as F,b as G,c as J,g as _,h as t,j as v,i as a,k as x,r as s}from"./render.DXsOrPE0.js";import{t as h}from"./class.Bvena8yX.js";import{b as L}from"./input.iozRzVv0.js";import{I as y}from"./zh_TW.BKK9jcS0.js";import{b as M,c as w,d as k}from"./setting-utils.De4sCiaH.js";var N=J('<div id="display-setting" class="float-panel float-panel-closed absolute transition-all w-80 right-4 px-4 py-4 svelte-1s19bex"><div class="flex flex-row gap-2 mb-3 items-center justify-between"><div class="flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3\n            before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)]\n            before:absolute before:-left-3 before:top-[0.33rem]"> <button aria-label="Reset to Default" class="btn-regular w-7 h-7 rounded-md  active:scale-90"><div class="text-[var(--btn-content)]"><!></div></button></div> <div class="flex gap-1"><div id="hueValue" class="transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center\n            font-bold text-sm items-center text-[var(--btn-content)]"> </div></div></div> <div class="w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded select-none"><input type="range" min="0" max="360" class="slider svelte-1s19bex" id="colorSlider" step="5" style="width: 100%"></div></div>');function Y(e,r){q(r,!1);let l=z(M());const o=w();A((()=>(t(l),k)),(()=>{(t(l)||0===t(l))&&k(t(l))})),B(),K();var i=N(),n=a(i),c=a(n),f=a(c);d((()=>x(f,`${g(y.themeColor)??""} `)));var b=v(f),m=a(b),p=a(m);R(p,{icon:"fa6-solid:arrow-rotate-left",class:"text-[0.875rem]"}),s(m),s(b),s(c);var u=v(c,2),j=a(u),C=a(j,!0);s(j),s(u),s(n);var D=v(n,2),I=a(D);V(I),d((()=>$(I,"aria-label",g(y.themeColor)))),s(D),s(i),d((()=>{h(b,"opacity-0",t(l)===o),h(b,"pointer-events-none",t(l)===o),x(C,t(l))})),E("click",b,(function(){_(l,w())})),L(I,(()=>t(l)),(e=>_(l,e))),F(e,i),G()}export{Y as default};