import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as m,a as d,C as l,i as f,n as b,k as u,u as w,R as g,b as y,A as C,J as T,h as v}from"./index-DDfImu0-.js";import{b as E}from"./index-OdW2YDQM.js";import{t as L}from"./index-gLC8fJ24.js";m.init();const e=new d,a=document.createElement("bim-viewport");a.name="viewer";const A=e.get(l),t=A.create(),o=new f(e);o.setup();t.scene=o;const c=new b(e,a);t.renderer=c;const r=new u(e);t.camera=r;a.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const I=e.get(w);I.create(t);e.init();const $=e.get(g);await $.setup();const p=e.get(y);p.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[h,k]=L.classificationTree({components:e,classifications:{}}),i=e.get(C);p.onFragmentsLoaded.add(async n=>{i.byEntity(n),await i.byPredefinedType(n),k({classifications:{Entities:["entities"],"Predefined Types":["predefinedTypes"]}})});const z=T.create(()=>{const[n]=E.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${h}
    </bim-panel-section>
   </bim-panel> 
  `}),s=document.createElement("bim-grid");s.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:z,viewport:a}}};s.layout="main";document.body.append(s);
