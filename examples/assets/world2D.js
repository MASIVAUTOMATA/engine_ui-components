import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as g,f as w,a as f,s as u,n as h,N as v,u as y}from"./index-B0-P1mHm.js";import{Y as b,v as E,g as A}from"./index-fPhLdcPC.js";import{M}from"./index-B_bVUTm2.js";import"./state-CdSmRkb4.js";g.init();M.init();const r=new w,N=r.get(f),e=N.create();e.scene=new u(r);e.scene.setup();const i=document.createElement("bim-viewport");e.renderer=new b(r,i);e.camera=new h(r);i.addEventListener("resize",()=>{var t;(t=e.renderer)==null||t.resize(),e.camera.updateAspect()});r.init();const S=r.get(v);S.create(e);const x=r.get(y),z=await fetch("/resources/road.frag"),B=await z.arrayBuffer(),P=new Uint8Array(B),s=x.load(P);e.scene.three.add(s);const o=new E(r);o.world=e;o.draw(s);o.highlighter.hoverCurve.material.color.set(1,1,1);const{material:n}=o.highlighter.hoverPoints;if(Array.isArray(n)){const t=n[0];"color"in t&&t.color.set(1,1,1)}else"color"in n&&n.color.set(1,1,1);const c=new A(r),a=document.createElement("bim-world-2d");a.components=r;if(!a.world)throw new Error("World not found!");c.world=a.world;await c.draw(s);c.onHighlight.add(({mesh:t})=>{o.highlighter.select(t);const p=t.curve.index,l=t.curve.alignment.absolute[p];l.mesh.geometry.computeBoundingSphere();const m=l.mesh.geometry.boundingSphere;m&&e.camera.controls.fitToSphere(m,!0)});const d=document.createElement("bim-grid");d.layouts={main:{template:`
    "world2d" 2fr
    "container" 3fr
    `,elements:{world2d:a,container:i}}};d.layout="main";document.body.append(d);