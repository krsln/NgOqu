import './polyfills.server.mjs';
import{c as N}from"./chunk-EIGW5XBB.mjs";import{$a as H,Da as f,G as a,La as C,Ma as L,N as c,O as A,P as i,Q as n,R as p,Ra as b,Ta as x,V as h,Va as d,Ya as M,Za as F,_a as S,ca as u,ga as s,ha as r,j as m,va as y}from"./chunk-VLYQPH6D.mjs";var R=(()=>{let t=class t{constructor(){this.title="NgOqu"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["app-root"]],standalone:!0,features:[s],decls:1,vars:0,template:function(o,l){o&1&&p(0,"router-outlet")},dependencies:[f,d],styles:['@font-face{font-family:AmiriQuran-Regular;src:font_url("assets/fonts/AmiriQuran-Regular.ttf") format("truetype");font-weight:400;font-style:normal}@font-face{font-family:AmiriQuran-Colored;src:font_url("assets/fonts/AmiriQuranColored.ttf") format("truetype");font-weight:400;font-style:normal}']});let e=t;return e})();var E=()=>["/Home"],g=()=>({exact:!1}),D=()=>["/Home/Surah/1"],Q=()=>["/Home/Test"],k=(()=>{let t=class t{constructor(){this.toggle=!1}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["app-layout-main"]],standalone:!0,features:[s],decls:14,vars:17,consts:[[1,"Navbar","Navbar-expand-lg","Navbar-dark","Bg-dark","Position-fixed","Top-0","W-100",2,"z-index","1030"],[1,"Container-fluid"],[1,"Navbar-brand",3,"routerLink","routerLinkActive","routerLinkActiveOptions"],["type","button","data-ls-toggle","collapse","data-ls-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"Navbar-toggler",3,"click"],[1,"Navbar-toggler-icon"],["id","navbarNavAltMarkup",1,"Collapse","Navbar-collapse"],[1,"Navbar-nav"],[1,"Nav-link",3,"routerLink","routerLinkActive","routerLinkActiveOptions"],[1,"Container-fluid",2,"margin-top","60px"]],template:function(o,l){o&1&&(i(0,"nav",0)(1,"div",1)(2,"a",2),u(3,"Home"),n(),i(4,"button",3),h("click",function(){return l.toggle=!l.toggle}),p(5,"span",4),n(),i(6,"div",5)(7,"div",6)(8,"a",7),u(9,"Surahs"),n(),i(10,"a",7),u(11,"Test"),n()()()()(),i(12,"div",8),p(13,"router-outlet"),n()),o&2&&(a(2),c("routerLink",r(11,E))("routerLinkActive","Active")("routerLinkActiveOptions",r(12,g)),a(4),A("Show",l.toggle),a(2),c("routerLink",r(13,D))("routerLinkActive","Active")("routerLinkActiveOptions",r(14,g)),a(2),c("routerLink",r(15,Q))("routerLinkActive","Active")("routerLinkActiveOptions",r(16,g)))},dependencies:[f,H,d,M,F]});let e=t;return e})();var O=[{path:"Home",component:k,loadChildren:()=>import("./chunk-JQCVCWIX.mjs").then(e=>e.HomeModule)},{path:"",component:k,children:[{path:"",redirectTo:"/Home",pathMatch:"full"}]}];var T={providers:[S(O),C(L()),x()]};var P={providers:[N()]},_=y(T,P);var q=()=>b(R,_),lt=q;export{lt as a};
