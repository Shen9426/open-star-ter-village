(this["webpackJsonp@open-star-ter-village/webapp-client"]=this["webpackJsonp@open-star-ter-village/webapp-client"]||[]).push([[0],{113:function(e,r,t){"use strict";t.r(r);var s=t(3),n=t(67),c=t.n(n),o=(t(75),t.p+"static/media/logo.6ce24c58.svg"),a=(t(76),t(68)),i=t(69),l=t(39),p=Object(i.a)({game:a.OpenStarTerVillage,multiplayer:Object(l.a)()}),d=t(13);var u=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(d.jsxs)("p",{children:["Edit ",Object(d.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(d.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]}),Object(d.jsx)(p,{playerID:"0"}),Object(d.jsx)(p,{playerID:"1"}),Object(d.jsx)(p,{})]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,115)).then((function(r){var t=r.getCLS,s=r.getFID,n=r.getFCP,c=r.getLCP,o=r.getTTFB;t(e),s(e),n(e),c(e),o(e)}))};c.a.render(Object(d.jsx)(s.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),f()},68:function(e,r,t){"use strict";var s=this&&this.__assign||function(){return(s=Object.assign||function(e){for(var r,t=1,s=arguments.length;t<s;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},n=this&&this.__rest||function(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)r.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(t[s[n]]=e[s[n]])}return t};Object.defineProperty(r,"__esModule",{value:!0}),r.OpenStarTerVillage=void 0,r.OpenStarTerVillage={setup:function(e){return{rules:{},decks:{projects:{pile:[],discardPile:[]},resources:{pile:[],discardPile:[]},events:{pile:[],discardPile:[]}},table:{projects:[],max:0},players:e.playOrder.reduce((function(e,r){return e[r]={hand:{projects:[],resources:[]},workerTokens:0,closedProjects:0},e}),{})}},moves:{},phases:{play:{start:!0,onBegin:function(e,r){var t,s;for(var n in e.decks.events.pile=r.random.Shuffle(e.decks.events.pile),e.decks.projects.pile=r.random.Shuffle(e.decks.projects.pile),e.decks.resources.pile=r.random.Shuffle(e.decks.resources.pile),e.decks.projects,e.players){var c=e.decks.projects.pile.splice(0,2);(t=e.players[n].hand.projects).push.apply(t,c)}for(var n in e.decks.resources,e.players){c=e.decks.resources.pile.splice(0,5);(s=e.players[n].hand.resources).push.apply(s,c)}for(var n in e.players)e.players[n].workerTokens=10}}},turn:{onBegin:function(){},stages:{action:{moves:{createProject:function(){},recruit:function(){},contribute:function(){}},next:"settle"},settle:{next:"discard"},discard:{moves:{discardProjects:{noLimit:!0,move:function(){}},discardResources:{noLimit:!0,move:function(){}}},next:"refill"},refill:{moves:{drawProjects:function(){},drawResources:function(){}}}},onEnd:function(){}},playerView:function(e,r,t){e.decks;var c=e.players,o=n(e,["decks","players"]),a={};for(var i in c){var l=c[i],p=(l.hand,n(l,["hand"]));a[i]=p}return t&&(a[t]=c[t]),s(s({},o),{players:a})}}},75:function(e,r,t){},76:function(e,r,t){}},[[113,1,2]]]);
//# sourceMappingURL=main.67314280.chunk.js.map