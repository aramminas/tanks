(this.webpackJsonptanks=this.webpackJsonptanks||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),c=a.n(i),s=a(9),r=a.n(s),o=a(16),l=a(19),d=a(42),m="GAME_MAP",j="GAME_TANKS",p="CHANGE_GAME_STATE",h="CHANGE_GAME_INFO",u="primary.png",b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case m:return n;default:return e}},f="abrams.png",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case j:return n;default:return e}},O=a(7),v={state:0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case p:return Object(O.a)(Object(O.a)({},e),{},{state:n});default:return e}},y={life:100,enemy:10,x:50,y:600,height:53,width:140,pos:"p-0-",eX:void 0,eY:void 0,eHeight:void 0,eWidth:void 0,ePos:void 0},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case h:return Object(O.a)(Object(O.a)({},e),n);default:return e}},w=Object(l.combineReducers)({mapsData:b,tanksData:g,gameStateData:x,gameInfoData:k}),N=Object(l.createStore)(w,{},Object(l.compose)(Object(d.composeWithDevTools)(l.applyMiddleware.apply(void 0,[]))));a(59),a(60);var M=function(){var e=Array.apply(null,{length:5}).map((function(e,t){return Object(n.jsx)("span",{children:"\u2605"},t)}));return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsx)("h2",{className:"main-star",children:Object(n.jsx)("span",{children:"\u269d"})}),Object(n.jsxs)("h1",{children:[Object(n.jsx)("span",{children:"\u269e"}),"Battle of tanks",Object(n.jsx)("span",{children:"\u269f"})]}),Object(n.jsx)("h2",{children:e})]})},S=a(21),A=a(95),D=a(100),C=a(102),T=a(101),G=a(99),I=function(e){return{type:p,payload:e}},E=function(e){return{type:h,payload:e}},_={maps:[{id:1,name:"Primary",path:"primary.png"},{id:2,name:"Afghanistan",path:"afghanistan.png"},{id:3,name:"Airport",path:"airport.jpg"},{id:4,name:"Columbia",path:"columbia.jpg"},{id:5,name:"Computer Sees",path:"computer-sees.jpg"},{id:6,name:"Myxedema",path:"myxedema.png"},{id:7,name:"Rivers",path:"rivers.png"},{id:8,name:"Routs",path:"routs.jpg"},{id:9,name:"Saratoga",path:"saratoga.jpg"}],tanks:[{id:1,name:"Abrams",path:"abrams.png"},{id:2,name:"Fafnir",path:"fafnir.png"},{id:3,name:"Merkava",path:"merkava.png"},{id:4,name:"T 72",path:"t72.png"},{id:5,name:"Tiger",path:"tiger.png"},{id:6,name:"Widower",path:"widower.png"}],sound:{music:"./audio/bgm.wav"}},P=_.maps,F=_.tanks,R=_.sound.music,W=Object(A.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,width:"80%"},selectEmpty:{marginTop:e.spacing(2)},soundIcon:{textAlign:"right","& input":{width:35,display:"inline-block"}}}}));var H=Object(o.b)((function(e){return Object(O.a)({},e)}),(function(e){return{setMapData:function(t){e(function(e){return{type:m,payload:e}}(t))},setTankData:function(t){e(function(e){return{type:j,payload:e}}(t))},changeGameState:function(t){e(I(t))},changeGameInfo:function(t){e(E(t))}}}))((function(e){var t=W(),a=Object(i.useState)(null),c=Object(S.a)(a,2),s=c[0],r=c[1],o=Object(i.useState)(Object(O.a)({},P[0])),l=Object(S.a)(o,2),d=l[0],m=l[1],j=Object(i.useState)(Object(O.a)({},F[0])),p=Object(S.a)(j,2),h=p[0],u=p[1],b=Object(i.useState)({sound:!1,image:"speaker_delete.png"}),f=Object(S.a)(b,2),g=f[0],v=f[1],x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";g.sound||"mute"===e?(s&&(s.pause(),s.currentTime=0),v((function(){return{sound:!1,image:"speaker_delete.png"}})),r(null)):(s?s.play():r((function(){var e=new Audio(R);return e.play(),e})),v((function(){return{sound:!0,image:"speaker_accept.png"}})))},y=function(t){var a=t.target.name,n=t.target.value;if("map"===a){var i=P.filter((function(e){return e.id===+n}))[0];m(Object(O.a)({},i)),e.setMapData(i.path)}else if("tank"===a){var c=F.filter((function(e){return e.id===+n}))[0];u(Object(O.a)({},c)),e.setTankData(c.path)}};return Object(n.jsxs)("section",{className:"property",children:[Object(n.jsx)("h3",{className:"title",children:" - Select a map and a tank to start the battle - "}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"map-section",children:[Object(n.jsx)("figure",{children:Object(n.jsx)("img",{src:"./images/maps/".concat(d.path),alt:"map"})}),Object(n.jsx)("div",{children:Object(n.jsxs)(T.a,{variant:"outlined",className:t.formControl,children:[Object(n.jsx)(C.a,{htmlFor:"outlined-map",children:"Maps"}),Object(n.jsxs)(G.a,{native:!0,value:d.id,onChange:y,label:"Maps",inputProps:{name:"map",id:"outlined-map"},children:[Object(n.jsx)("option",{"aria-label":"None",value:""}),P.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})})]}),Object(n.jsxs)("div",{className:"tank-section",children:[Object(n.jsx)("h3",{className:"title tank-title",children:" - Select a tank - "}),Object(n.jsx)("figure",{className:"tank-image",children:Object(n.jsx)("img",{src:"./images/tanks/".concat(h.path),alt:"tank"})}),Object(n.jsx)("div",{children:Object(n.jsxs)(T.a,{variant:"outlined",className:t.formControl,children:[Object(n.jsx)(C.a,{htmlFor:"outlined-tank",children:"Tanks"}),Object(n.jsxs)(G.a,{native:!0,value:h.id,onChange:y,label:"Tanks",inputProps:{name:"tank",id:"outlined-tank"},children:[Object(n.jsx)("option",{"aria-label":"None",value:""}),F.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})})]}),Object(n.jsxs)("div",{className:"instruction-section",children:[Object(n.jsx)("h3",{className:"title instruction-title",children:" - Instruction - "}),Object(n.jsxs)("div",{className:"instruction-content",children:[Object(n.jsx)("h4",{children:"Movement buttons"}),Object(n.jsxs)("div",{className:"movement",children:[Object(n.jsxs)("p",{children:["Move left ",Object(n.jsx)("span",{className:"left",children:"\u27ac"})]}),Object(n.jsxs)("p",{children:["Move right ",Object(n.jsx)("span",{children:"\u27ac"})]}),Object(n.jsxs)("p",{children:["Move up ",Object(n.jsx)("span",{className:"up",children:"\u27ab"})]}),Object(n.jsxs)("p",{children:["Move down ",Object(n.jsx)("span",{className:"down",children:"\u27ab"})]})]}),Object(n.jsx)("h4",{children:"Fire buttons"}),Object(n.jsx)("div",{className:"fire",children:Object(n.jsxs)("p",{children:["Space ",Object(n.jsx)("span",{className:"space",children:"\u2759"})]})}),Object(n.jsx)("div",{className:t.soundIcon,children:Object(n.jsx)("input",{type:"image",onClick:function(){return x()},src:"./images/others/".concat(g.sound?"speaker_delete.png":"speaker_accept.png"),alt:"sound"})})]})]}),Object(n.jsx)("div",{className:"btn-start",children:Object(n.jsx)(D.a,{variant:"contained",color:"primary",onClick:function(){return x("mute"),e.changeGameState(1),void e.changeGameInfo(Object(O.a)(Object(O.a)({},e.infoData),{},{life:100,enemy:10}))},children:"Start"})})]})]})}));a(61);var B=function(e){return Object(n.jsx)("main",{className:"main-menu container",children:Object(n.jsx)(H,{infoData:e.infoData})})};var L=function(e){var t=e.data,a=t.life,i=t.enemy;return Object(n.jsxs)("div",{className:"game-info",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"game-info-title",children:"Streak of life"}),Object(n.jsx)("div",{children:Object(n.jsx)("progress",{max:"100",value:a,className:"life",children:Object(n.jsx)("div",{className:"progress-bar",children:Object(n.jsxs)("span",{style:{width:"".concat(a,"%")},children:[a,"%"]})})})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"game-info-title enemy",children:"Enemy number"}),Object(n.jsx)("p",{className:"enemy-count",children:i})]})]})};var Y=function(e){var t=e.win,a=e.data;return Object(n.jsxs)("div",{className:"win-lose",children:[t?Object(n.jsx)("div",{className:"win-lose-image",children:Object(n.jsx)("img",{src:"./images/others/you-win.jpg",alt:"win"})}):Object(n.jsx)("div",{className:"win-lose-image",children:Object(n.jsx)("img",{src:"./images/others/you-lose.png",alt:"lose"})}),Object(n.jsxs)("div",{className:"win-lose-result",children:[Object(n.jsx)("h2",{children:"Game results"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Player health:"})," ",a.life,"."]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Destroyed tanks:"})," ",10-a.enemy,"."]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Tanks left:"})," ",a.enemy,"."]})]})]})},X=a(43),J="tank",q="map",K="ammunition",z="explosion",Q="enemy",U="enemy_explosion",V="enemy_ammunition",Z={player:"ammunition-1.png",enemy:"ammunition-2.png",explosion:"explosion.png",enemyTank:"widower.png",enemyExplosion:"tank-explosion.png"};var $=function(e){var t,a,c,s,r,o,l,d,m,j,p,h,u=e.destroyed,b=e.damage,f=e.gameResult,g=Object(X.a)(e,["destroyed","damage","gameResult"]),v=e.game.height,x=e.game.width,y=e.game.pos,k=!1,w=10,N=50,M="",S=[],A=!1,D=!1,C=e.game.ePos||["p-0-","p-1-","p-2-","p-3-"][Math.round(3*Math.random())],T=e.game.eHeight||70,G=e.game.eWidth||130,I=!1,E=!1,_="",P=10,F=50,R=[],W=Object(i.useRef)(null),H=function(n,i){n.clearRect(0,0,n.canvas.width,n.canvas.height),t=t||e.game.x,a=a||e.game.y,l=l||Math.floor(Math.random()*(n.canvas.width-G-G)+G),d=d||Math.floor(Math.random()*(n.canvas.height-T-T)+T),B(n,q,i.map,0,0),B(n,J,i.tank,t,a),k&&B(n,K,i.player,c,s),1===S.length&&Y(n.canvas.width,n.canvas.height),A&&B(n,z,i.explosion,r,o),e.game.life>0&&e.game.enemy>0&&(I||($(n.canvas.height,n.canvas.width),te(),B(n,Q,i.enemyTank,l,d),0===R.length&&(ne(),E=!0)),1===R.length&&(ee(n.canvas.width,n.canvas.height),ae())),I&&(m=l,j=d,B(n,U,i.enemyExplosion,m,j)),E&&B(n,V,i.enemy,p,h)},B=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0,r=new Image;n===J?(r.src="./images/tanks/".concat(y).concat(i),t=v,a=x):n===q?(r.src="./images/maps/".concat(i),t=e.canvas.height,a=e.canvas.width):n===K?(r.src="./images/ammunition/".concat(y).concat(i),t=w,a=N):n===z?(r.src="./images/ammunition/".concat(i),t=50,a=50):n===Q?(r.src="./images/tanks/".concat(C).concat(i),t=T,a=G):n===U?(r.src="./images/ammunition/".concat(i),t=110,a=110):n===V&&(r.src="./images/ammunition/".concat(C).concat(i),t=P,a=F),r.onload=function(e,n){e.drawImage(n,c,s,a,t)}(e,r)},L=Object(i.useCallback)((function(n){if(n.preventDefault(),32===n.keyCode){if(0===S.length){if(k=!0,A=!0,M=y,"p-0-"===y){if(N<w){var i=[N,w];w=i[0],N=i[1]}c=t+x,s=a+(v-w)/2,r=t+x,o=a+(v-50)/2}else if("p-1-"===y){if(N>w){var l=[N,w];w=l[0],N=l[1]}c=t+(x-N+2)/2,s=a+v,r=t,o=a+v}else if("p-2-"===y){if(N<w){var d=[N,w];w=d[0],N=d[1]}c=t-N,s=a+(v-w)/2,r=t-50,o=a}else if("p-3-"===y){if(N>w){var m=[N,w];w=m[0],N=m[1]}c=t+(x-N-2)/2,s=a-w,r=t,o=a-50}S.push({x:c,y:s,height:w,width:N}),ie(),setTimeout((function(){A=!1}),300)}}else if(37===n.keyCode){if(t>=4&&(t-=8),"p-2-"!==y&&(y="p-2-",v>x)){var j=[x,v];v=j[0],x=j[1]}D||se()}else if(38===n.keyCode){if(a>=4&&(a-=8),"p-3-"!==y&&(y="p-3-",v<x)){var p=[x,v];v=p[0],x=p[1]}D||se()}else if(39===n.keyCode){if(t<=e.height-x+v&&(t+=8),"p-0-"!==y&&(y="p-0-",v>x)){var h=[x,v];v=h[0],x=h[1]}D||se()}else if(40===n.keyCode){if(a<=e.height-v&&(a+=8),"p-1-"!==y&&(y="p-1-",v<x)){var u=[x,v];v=u[0],x=u[1]}D||se()}}),[H]),Y=function(e,t){"p-0-"===M?(S[0].x+=5,(c=S[0].x)>e&&(S.pop(),k=!1)):"p-1-"===M?(S[0].y+=5,(s=S[0].y)>t&&(S.pop(),k=!1)):"p-2-"===M?(S[0].x-=5,(c=S[0].x)<=-N&&(S.pop(),k=!1)):"p-3-"===M&&(S[0].y-=5,(s=S[0].y)<-w&&(S.pop(),k=!1))},$=function(e,t){if("p-0-"===C){if(l<t-G)l+=1;else{var a=Math.round(2*Math.random());C=["p-1-","p-2-","p-3-"][a]}if(T>G){var n=[T,G];G=n[0],T=n[1]}}else if("p-1-"===C){if(d<e-T)d+=1;else{var i=Math.round(2*Math.random());C=["p-0-","p-2-","p-3-"][i]}if(T<G){var c=[T,G];G=c[0],T=c[1]}}else if("p-2-"===C){if(l>G)l-=1;else{var s=Math.round(2*Math.random());C=["p-0-","p-1-","p-3-"][s]}if(T>G){var r=[T,G];G=r[0],T=r[1]}}else if("p-3-"===C){if(d>T)d-=1;else{var o=Math.round(2*Math.random());C=["p-0-","p-1-","p-2-"][o]}if(T<G){var m=[T,G];G=m[0],T=m[1]}}},ee=function(e,t){"p-0-"===_?(R[0].x+=5,(p=R[0].x)>e&&(R.pop(),E=!1)):"p-1-"===_?(R[0].y+=5,(h=R[0].y)>t&&(R.pop(),E=!1)):"p-2-"===_?(R[0].x-=5,(p=R[0].x)<=-F&&(R.pop(),E=!1)):"p-3-"===_&&(R[0].y-=5,(h=R[0].y)<-P&&(R.pop(),E=!1))},te=function(){if(c>l&&c<l+G&&s>d&&s<d+T)return I=!0,k=!1,S.pop(),ce(),1===e.game.enemy?(f("player"),!0):(setTimeout((function(){u(t,a,y,v,x,void 0,void 0,void 0,void 0,void 0)}),2e3),!0)},ae=function(){if(p>t&&p<t+x&&h>a&&h<a+v)return E=!1,R.pop(),ce(),25===e.game.life?(f("enemy"),!0):(b(t,a,y,v,x,l,d,C,T,G),!0)},ne=function(){if(E=!0,"p-0-"===(_=C)){if(F<P){var e=[F,P];P=e[0],F=e[1]}p=l+G,h=d+(T-P)/2}else if("p-1-"===_){if(F>P){var t=[F,P];P=t[0],F=t[1]}p=l+(G-F+2)/2,h=d+T}else if("p-2-"===_){if(F<P){var a=[F,P];P=a[0],F=a[1]}p=l-F,h=d+(T-P)/2}else if("p-3-"===_){if(F>P){var n=[F,P];P=n[0],F=n[1]}p=l+(G-F-2)/2,h=d-P}R.push({x:p,y:h,height:P,width:F})},ie=function(){return new Audio("./audio/shot-2.mp3").play()},ce=function(){return new Audio("./audio/shot-7.mp3").play()},se=function(){return setTimeout((function(){D=!1}),102500),D=!0,new Audio("./audio/engine-sound-2.mp3").play()};return Object(i.useEffect)((function(){var t,a=W.current.getContext("2d");Z=Object(O.a)(Object(O.a)({},Z),{},{main:e.data,map:e.map,tank:e.tank});return function e(){H(a,Z),t=window.requestAnimationFrame(e)}(),document.addEventListener("keydown",L,!1),function(){window.cancelAnimationFrame(t),document.removeEventListener("keydown",L,!1)}}),[H]),Object(n.jsx)("canvas",Object(O.a)({ref:W},g))};a(62);var ee=Object(o.b)((function(e){return Object(O.a)({},e)}),(function(e){return{changeGameState:function(t){e(I(t))},changeGameInfo:function(t){e(E(t))}}}))((function(e){var t=Object(i.useState)(!1),a=Object(S.a)(t,2),c=a[0],s=a[1],r=Object(i.useState)(!1),l=Object(S.a)(r,2),d=l[0],m=l[1],j=Object(o.c)((function(e){return e})),p=j.gameInfoData,h=j.gameStateData,u=j.mapsData,b=j.tanksData;return Object(n.jsxs)("section",{className:"game-area",children:[Object(n.jsx)("div",{className:"game-info-block",children:Object(n.jsx)(L,{data:p})}),Object(n.jsx)("div",{className:"battlefield",children:c?Object(n.jsx)(Y,{win:d,data:p}):Object(n.jsx)($,{width:750,height:700,data:h,map:u,tank:b,game:p,destroyed:function(t,a,n,i,c,s,r,o,l,d){e.changeGameInfo(Object(O.a)(Object(O.a)({},p),{},{x:t,y:a,pos:n,height:i,width:c,eX:s,eY:r,ePos:o,eHeight:l,eWidth:d,enemy:p.enemy-1}))},damage:function(t,a,n,i,c,s,r,o,l,d){e.changeGameInfo(Object(O.a)(Object(O.a)({},p),{},{x:t,y:a,pos:n,height:i,width:c,eX:s,eY:r,ePos:o,eHeight:l,eWidth:d,life:p.life-25}))},gameResult:function(t){"player"===t?(e.changeGameInfo(Object(O.a)(Object(O.a)({},p),{},{enemy:0})),m(t)):"enemy"===t&&e.changeGameInfo(Object(O.a)(Object(O.a)({},p),{},{life:0})),s(!0)}})}),Object(n.jsx)("div",{className:"end-game",children:Object(n.jsx)(D.a,{onClick:function(){e.changeGameState(0)},variant:"contained",color:"secondary",children:c?"Back to the main menu":"End game"})})]})}));var te=function(){var e=Object(o.c)((function(e){return e})),t=e.gameStateData,a=e.gameInfoData,i=t.state?"game-mode":"";return Object(n.jsx)("main",{className:"container",children:Object(n.jsx)("div",{className:"main-area ".concat(i),children:t.state?Object(n.jsx)(ee,{}):Object(n.jsx)(B,{infoData:a})})})};a(63);var ae=function(){var e=(new Date).getFullYear(),t=["Privacy Policy","About us","Support"].map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:e})},t)}));return Object(n.jsx)("footer",{children:Object(n.jsx)("div",{className:"footer_bottom",children:Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"copyright_column",children:[Object(n.jsx)("ul",{id:"menu-copyright",children:t}),Object(n.jsxs)("span",{children:["\xa9 ",e," The Art of Programming"]})]})})})})};a(64);var ne=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(M,{}),Object(n.jsx)(te,{}),Object(n.jsx)(ae,{})]})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,104)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};r.a.render(Object(n.jsx)(o.a,{store:N,children:Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(ne,{})})}),document.getElementById("root")),ie()}},[[65,1,2]]]);
//# sourceMappingURL=main.1fe45ac0.chunk.js.map