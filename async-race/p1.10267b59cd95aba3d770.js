(()=>{"use strict";var e={711:(e,t,a)=>{a.r(t)},307:(e,t,a)=>{a.r(t)},522:(e,t,a)=>{a.r(t)},483:(e,t,a)=>{a.r(t)},601:(e,t,a)=>{a.r(t)},729:(e,t,a)=>{a.r(t)},175:(e,t,a)=>{a.r(t)},915:(e,t,a)=>{a.r(t)},576:(e,t,a)=>{a.r(t)},477:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const n=a(232),r=a(355),s=a(957);t.App=class{gameListener;constructor(){this.gameListener=new EventTarget,this.createAppView()}createAppView(){const e=new r.HeaderView(this.gameListener),t=new s.MainView(this.gameListener),a=new n.FooterView;document.body.append(e.getElement(),t.getElement(),a.getElement())}}},654:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.gameData=t.carModels=t.carBrands=t.carEngineStatuses=t.path=t.requestUrl=void 0,t.requestUrl="http://localhost:3000",t.path={garage:"/garage",engine:"/engine",winners:"/winners"},t.carEngineStatuses={start:"started",stop:"stopped",drive:"drive"},t.carBrands=["Porsche","Lamborgini","Ferrari","Maserati","Lotus","Dodge","Tesla","BMW","Mercedes","Ford"],t.carModels=["Diablo","Enzo","911s","GranTurizmo","Elise","Viper","ModelX","M6","SLR","Mustang"],t.gameData={currentPage:1,selectedCarID:0,selectedCarName:"",selectedCarColor:"#000000",numberOfRandomCars:100,carLength:60,carsOnPage:[],carsActive:[],raceActive:!1,maxPage:1}},85:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createRandomCars=t.getRandomCarColor=t.getRandomCarName=void 0;const n=a(654),r=a(821);t.getRandomCarName=()=>`${n.carBrands[Math.floor(Math.random()*n.carBrands.length)]} ${n.carModels[Math.floor(Math.random()*n.carModels.length)]}`,t.getRandomCarColor=()=>{let e="";for(let t=0;t<6;t+=1)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return`#${e}`},t.createRandomCars=async()=>{const e=new Array(100).fill("").map((()=>(0,r.createCar)((0,t.getRandomCarName)(),(0,t.getRandomCarColor)())));Promise.all(e).then((()=>{}),(e=>{throw new Error(e)}))}},73:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ElementCreator=void 0,t.ElementCreator=class{element;constructor(e){const{tag:t,classes:a,textContent:n,listeners:r}=e;this.element=this.createElement(t),this.setTextContent(n),this.setCssClasses(a),r&&this.addListeners(r)}createElement(e){return document.createElement(e)}getElement(){return this.element}setElementAttributes(e){e.forEach((e=>this.element.setAttribute(e.attribute,e.value)))}setTextContent(e){this.element.textContent=e}setCssClasses(e){e.forEach((e=>{e&&this.element.classList.add(e)}))}addListeners(e){Object.entries(e).forEach((([e,t])=>{this.element.addEventListener(e,t)}))}addElement(e){e&&this.element.append(e)}removeChildren(){for(;this.element.firstChild;)this.element.firstChild.remove()}}},266:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buttonNextPageProps=t.buttonPrevPageProps=t.modalWindowProps=t.winnersProps=t.raceRoadFlagProps=t.raceRoadCarProps=t.raceRoadStopButtonProps=t.raceRoadStartButtonProps=t.raceTrackRoadProps=t.raceTrackCarNameProps=t.raceTrackButtonDeleteProps=t.raceTrackButtonSelectProps=t.raceSubtitleProps=t.raceTitleProps=t.buttonGenerateCarsProps=t.buttonResetProps=t.buttonRaceProps=t.InputElementCreatorUpdateProps=t.buttonUpdateProps=t.inputColorUpdateProps=t.inputNameUpdateProps=t.inputBlockUpdateProps=t.InputElementCreatorCreateProps=t.buttonCreateProps=t.inputColorCreateProps=t.inputNameCreateProps=t.inputBlockCreateProps=t.raceTrackProps=t.raceProps=t.controlPanelProps=t.garageProps=t.mainProps=t.rsSchoolLinkProps=t.rsSchoolProps=t.thisYearProps=t.githubLinkProps=t.githubProps=t.footerProps=t.winnersButtonProps=t.garageButtonProps=t.headerProps=void 0,t.headerProps={tag:"div",classes:["header"],textContent:"",listeners:null},t.garageButtonProps={tag:"button",classes:["garage-button"],textContent:"To garage",listeners:null},t.winnersButtonProps={tag:"button",classes:["winners-button"],textContent:"To winners",listeners:null},t.footerProps={tag:"div",classes:["footer"],textContent:"",listeners:null},t.githubProps={tag:"div",classes:["github"],textContent:"",listeners:null},t.githubLinkProps={tag:"a",classes:["github-link"],textContent:"@Lev1ossa",listeners:null},t.thisYearProps={tag:"div",classes:["year"],textContent:"2023",listeners:null},t.rsSchoolProps={tag:"img",classes:["rsschool"],textContent:"",listeners:null},t.rsSchoolLinkProps={tag:"a",classes:["rsschool-link"],textContent:"",listeners:null},t.mainProps={tag:"div",classes:["main"],textContent:"",listeners:null},t.garageProps={tag:"div",classes:["garage"],textContent:"",listeners:null},t.controlPanelProps={tag:"div",classes:["control-panel"],textContent:"",listeners:null},t.raceProps={tag:"div",classes:["race"],textContent:"",listeners:null},t.raceTrackProps={tag:"div",classes:["race-track"],textContent:"",listeners:null},t.inputBlockCreateProps={tag:"div",classes:["input-block","input-block-create"],textContent:"",listeners:null},t.inputNameCreateProps={tag:"input",classes:["input-name","input-name-create"],textContent:"",listeners:null},t.inputColorCreateProps={tag:"input",classes:["input-color","input-color-create"],textContent:"",listeners:null},t.buttonCreateProps={tag:"button",classes:["input-button","button-create"],textContent:"",listeners:null},t.InputElementCreatorCreateProps={blockProps:t.inputBlockCreateProps,inputProps:t.inputNameCreateProps,inputColorProps:t.inputColorCreateProps,buttonProps:t.buttonCreateProps,buttonName:"Create"},t.inputBlockUpdateProps={tag:"div",classes:["input-block","input-block-update"],textContent:"",listeners:null},t.inputNameUpdateProps={tag:"input",classes:["input-name","input-name-update"],textContent:"",listeners:null},t.inputColorUpdateProps={tag:"input",classes:["input-color","input-color-update"],textContent:"",listeners:null},t.buttonUpdateProps={tag:"button",classes:["input-button","button-update"],textContent:"",listeners:null},t.InputElementCreatorUpdateProps={blockProps:t.inputBlockUpdateProps,inputProps:t.inputNameUpdateProps,inputColorProps:t.inputColorUpdateProps,buttonProps:t.buttonUpdateProps,buttonName:"Update"},t.buttonRaceProps={tag:"button",classes:["control-button","button-race"],textContent:"Race",listeners:null},t.buttonResetProps={tag:"button",classes:["control-button","button-reset"],textContent:"Reset",listeners:null},t.buttonGenerateCarsProps={tag:"button",classes:["control-button","button-generate-cars"],textContent:"Generate-cars",listeners:null},t.raceTitleProps={tag:"h1",classes:["race-title"],textContent:"Garage()",listeners:null},t.raceSubtitleProps={tag:"h2",classes:["race-subtitle"],textContent:"Page #",listeners:null},t.raceTrackButtonSelectProps={tag:"button",classes:["race-track-button-select"],textContent:"Select",listeners:null},t.raceTrackButtonDeleteProps={tag:"button",classes:["race-track-button-delete"],textContent:"Delete",listeners:null},t.raceTrackCarNameProps={tag:"span",classes:["race-track-car-name"],textContent:"Car name",listeners:null},t.raceTrackRoadProps={tag:"div",classes:["race-track-road"],textContent:"",listeners:null},t.raceRoadStartButtonProps={tag:"button",classes:["race-road-start-button"],textContent:"Start",listeners:null},t.raceRoadStopButtonProps={tag:"button",classes:["race-road-stop-button"],textContent:"Stop",listeners:null},t.raceRoadCarProps={tag:"svg",classes:["race-road-car"],textContent:"",listeners:null},t.raceRoadFlagProps={tag:"div",classes:["race-road-flag"],textContent:"",listeners:null},t.winnersProps={tag:"div",classes:["winners"],textContent:"",listeners:null},t.modalWindowProps={tag:"div",classes:["modal-window","hidden"],textContent:"",listeners:null},t.buttonPrevPageProps={tag:"button",classes:["button-prev"],textContent:"Prev page",listeners:null},t.buttonNextPageProps={tag:"button",classes:["button-next"],textContent:"Next page",listeners:null}},828:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getCarSvg=void 0,t.getCarSvg=e=>`<svg fill="${e}" width="60px" height="30px" viewBox="0 0 125 30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="enable-background:new 0 0 122.88 35.03" xml:space="preserve" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)">\n  <g id="SVGRepo_bgCarrier" stroke-width="0"/>\n  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>\n  <g id="SVGRepo_iconCarrier"> <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style> <g> <path class="st0" d="M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 C88.69,18.37,93.49,13.57,99.42,13.57L99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5 L79.05,5z M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 C18.87,21.54,21.1,19.31,23.86,19.31L23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31L99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14L46.14,12.5z M23.86,13.57 c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57 L23.86,13.57z M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89c-0.06-0.05,0.06,0.19-0.15-0.17 c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3L40.82,10.3z"/> </g> </g>\n  </svg>`},881:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InputElementCreator=void 0;const n=a(73);class r extends n.ElementCreator{input;inputColor;button;constructor(e){const{blockProps:t,inputProps:a,inputColorProps:r,buttonProps:s,buttonName:o}=e;super(t),this.input=new n.ElementCreator(a),this.inputColor=new n.ElementCreator(r),this.button=new n.ElementCreator(s),this.constructView(o)}constructView(e){this.inputColor.setElementAttributes([{attribute:"type",value:"color"}]),this.button.element.innerText=e,this.getElement().append(this.input.getElement()),this.getElement().append(this.inputColor.getElement()),this.getElement().append(this.button.getElement())}}t.InputElementCreator=r},821:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.updateWinner=t.CreateWinner=t.deleteWinner=t.getWinner=t.getCar=t.patchCarEngine=t.deleteCar=t.updateCar=t.createCar=t.getGarageData=void 0;const n=a(654);t.getGarageData=async e=>fetch(`${n.requestUrl}${n.path.garage}?_page=${e}&_limit=7`).then((e=>e.json().then((t=>{const a=Number(e.headers.get("X-Total-Count"));return{cars:t,carsNumber:a,carsPagesNumber:Math.ceil(a/7)}}),(e=>{throw new Error(e)}))),(e=>{throw new Error(e)})),t.createCar=async(e,t)=>fetch(`${n.requestUrl}${n.path.garage}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,color:t})}).then((e=>e.json().then((e=>e),(e=>{throw new Error(e)}))),(e=>{throw new Error(e)})),t.updateCar=async(e,t,a)=>fetch(`${n.requestUrl}${n.path.garage}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,color:a})}).then((e=>e.json().then((e=>e),(e=>{throw new Error(e)}))),(e=>{throw new Error(e)})),t.deleteCar=async e=>{fetch(`${n.requestUrl}${n.path.garage}/${e}`,{method:"DELETE"}).then((()=>{}),(e=>{throw new Error(e)}))},t.patchCarEngine=async(e,t)=>fetch(`${n.requestUrl}${n.path.engine}?id=${e}&status=${t}`,{method:"PATCH"}).then((t=>{const{status:a}=t;return t.json().then((t=>{const n={engineProps:t,carId:e,status:a};return console.log(n),n}),(e=>{const t=new Error(e);throw t.message="500",t}))}),(e=>{throw new Error(e)})),t.getCar=async e=>fetch(`${n.requestUrl}${n.path.garage}/${e}`,{method:"GET"}).then((e=>e.json().then((e=>e),(e=>{throw new Error(e)}))),(e=>{throw new Error(e)})),t.getWinner=async e=>fetch(`${n.requestUrl}${n.path.winners}/${e}`,{method:"GET"}).then((e=>e.json().then((e=>e),(e=>{throw new Error(e)}))),(e=>{throw new Error(e)})),t.deleteWinner=async e=>fetch(`${n.requestUrl}${n.path.winners}/${e}`,{method:"DELETE"}).then((()=>{}),(e=>{throw new Error(e)})),t.CreateWinner=async(e,t,a)=>fetch(`${n.requestUrl}${n.path.winners}/${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,wins:t,time:a})}).then((()=>{}),(e=>{throw new Error(e)})),t.updateWinner=async(e,t,a)=>fetch(`${n.requestUrl}${n.path.winners}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({wins:t,time:a})}).then((()=>{}),(e=>{throw new Error(e)}))},718:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AppView=void 0;const n=a(73);t.AppView=class{elementCreator;constructor(e){this.elementCreator=this.createView(e)}createView(e){return new n.ElementCreator(e)}getElement(){return this.elementCreator.getElement()}}},232:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FooterView=void 0;const n=a(73),r=a(266),s=a(718);a(711);class o extends s.AppView{constructor(){super(r.footerProps),this.constructView()}constructView(){const e=new n.ElementCreator(r.githubProps),t=new n.ElementCreator(r.githubLinkProps);t.setElementAttributes([{attribute:"href",value:"https://github.com/Lev1ossa"}]),e.addElement(t.getElement()),this.elementCreator.addElement(e.getElement());const a=new n.ElementCreator(r.thisYearProps);this.elementCreator.addElement(a.getElement());const s=new n.ElementCreator(r.rsSchoolProps);s.setElementAttributes([{attribute:"src",value:"https://rs.school/images/rs_school_js.svg"},{attribute:"alt",value:"RSS logo"}]);const o=new n.ElementCreator(r.rsSchoolLinkProps);o.setElementAttributes([{attribute:"href",value:"https://rs.school/js/"}]),o.addElement(s.getElement()),this.elementCreator.addElement(o.getElement())}}t.FooterView=o},355:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderView=void 0;const n=a(73),r=a(266),s=a(718);a(307);class o extends s.AppView{gameListener;constructor(e){super(r.headerProps),this.gameListener=e,this.constructView()}constructView(){const e=new n.ElementCreator(r.garageButtonProps),t=e.getElement();t.disabled=!0;const a=new n.ElementCreator(r.winnersButtonProps),s=a.getElement();s.disabled=!1,e.addListeners({click:()=>{this.gameListener.dispatchEvent(new CustomEvent("pageGarage")),t.disabled=!0,s.disabled=!1}}),a.addListeners({click:()=>{this.gameListener.dispatchEvent(new CustomEvent("pageWinners")),t.disabled=!1,s.disabled=!0}}),this.elementCreator.addElement(e.getElement()),this.elementCreator.addElement(a.getElement())}}t.HeaderView=o},867:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ControlPanelView=void 0;const n=a(85),r=a(73),s=a(266),o=a(881),i=a(821),l=a(718);a(522);class c extends l.AppView{gameListener;gameData;buttonRace;buttonReset;buttonGenerateCars;inputCarCreate;inputCarUpdate;constructor(e,t){super(s.controlPanelProps),this.buttonRace=new r.ElementCreator(s.buttonRaceProps),this.buttonReset=new r.ElementCreator(s.buttonResetProps),this.inputCarCreate=new o.InputElementCreator(s.InputElementCreatorCreateProps),this.inputCarUpdate=new o.InputElementCreator(s.InputElementCreatorUpdateProps),this.buttonGenerateCars=new r.ElementCreator(s.buttonGenerateCarsProps),this.gameData=e,this.gameListener=t,this.constructView()}constructView(){this.createInputCarCreate(),this.CreateInputCarUpdate(),this.CreateButtonRace(),this.CreateButtonReset(),this.CreateButtonGenerateCars()}createInputCarCreate(){this.inputCarCreate.button.addListeners({click:()=>{const e=this.inputCarCreate.input.getElement(),t=this.inputCarCreate.inputColor.getElement(),a=e.value;a&&(0,i.createCar)(a,t.value).then((()=>{this.gameListener.dispatchEvent(new CustomEvent("carsUpdated")),e.value="",t.value="#000000"}),(()=>{}))}}),this.elementCreator.addElement(this.inputCarCreate.getElement())}CreateInputCarUpdate(){this.inputCarUpdate.button.addListeners({click:()=>{const e=this.inputCarUpdate.input.getElement(),t=this.inputCarUpdate.inputColor.getElement(),a=e.value,n=this.gameData.selectedCarID;a&&n&&(0,i.updateCar)(n,a,t.value).then((()=>{this.gameListener.dispatchEvent(new CustomEvent("carsUpdated")),this.gameData.selectedCarID=0,this.gameData.selectedCarName="",e.value="",t.value="#000000"}),(()=>{}))}}),this.gameListener.addEventListener("carSelected",(()=>{const e=this.inputCarUpdate.input.getElement(),t=this.inputCarUpdate.inputColor.getElement();e.value=this.gameData.selectedCarName,t.value=this.gameData.selectedCarColor})),this.elementCreator.addElement(this.inputCarUpdate.getElement())}CreateButtonGenerateCars(){this.buttonGenerateCars.addListeners({click:()=>{(0,n.createRandomCars)().then((()=>{this.gameListener.dispatchEvent(new CustomEvent("carsUpdated"))}),(()=>{}))}}),this.elementCreator.addElement(this.buttonGenerateCars.getElement())}CreateButtonRace(){this.setRaceDisableHandlers(),this.buttonRace.addListeners({click:()=>this.startRaceHandler()}),this.elementCreator.addElement(this.buttonRace.getElement())}startRaceHandler(){this.gameData.raceActive=!0;const e=this.buttonReset.getElement();this.raceStartDisableButtons();const t=this.gameData.carsOnPage.map((async e=>e.startCarEngine()));Promise.all(t).then((t=>{const a=this.gameData.carsOnPage.map((async e=>{const a=t.find((t=>t.carId===e.carData.id)),n=a.engineProps.distance/a.engineProps.velocity;return e.startCarAnimation(n),e.setCarEngineDriveMode(n).then((t=>({carId:e.carData.id,carTime:t})),(e=>{throw new Error(e)}))}));Promise.any(a).then((t=>{e.disabled=!1,this.winHandler(t)}),(()=>{}))}),(()=>{}))}raceStartDisableButtons(){const e=this.buttonRace.getElement(),t=this.buttonReset.getElement(),a=this.buttonGenerateCars.getElement(),n=this.inputCarCreate.button.getElement(),r=this.inputCarUpdate.button.getElement();e.disabled=!0,t.disabled=!0,n.disabled=!0,r.disabled=!0,a.disabled=!0,this.gameData.carsOnPage.forEach((e=>{const t=e.buttonStart.getElement();t.disabled=!0;const a=e.buttonDelete.getElement();t.disabled=!0,a.disabled=!0})),this.gameListener.dispatchEvent(new CustomEvent("garagePaginationBlock"))}setRaceDisableHandlers(){const e=this.buttonRace.getElement();this.gameListener.addEventListener("blockRace",(()=>{e.disabled=!0})),this.gameListener.addEventListener("unblockRace",(()=>{e.disabled=!1}))}winHandler(e){(0,i.getCar)(e.carId).then((t=>{const a=+(e.carTime/1e3).toFixed(2),n=`${t.name} win race in ${a}`;this.gameListener.dispatchEvent(new CustomEvent("modal-show",{detail:{modalText:n}})),(0,i.getWinner)(t.id).then((t=>{a>t.carTime&&(0,i.updateWinner)(t.carId,t.carWins+1,e.carTime)}),(()=>{(0,i.updateWinner)(t.id,1,a)}))}),(()=>{}))}CreateButtonReset(){this.buttonReset.addListeners({click:()=>{this.resetRaceHandler()}}),this.elementCreator.addElement(this.buttonReset.getElement())}resetRaceHandler(){this.gameData.raceActive=!1,this.gameData.carsActive.splice(0,this.gameData.carsActive.length);const e=this.inputCarCreate.button.getElement(),t=this.inputCarUpdate.button.getElement(),a=this.buttonGenerateCars.getElement(),n=this.buttonRace.getElement(),r=this.buttonReset.getElement();n.disabled=!0,r.disabled=!0,this.gameListener.dispatchEvent(new CustomEvent("garagePaginationUnblock"));const s=this.gameData.carsOnPage.map((async e=>e.stopCarEngine()));Promise.all(s).then((r=>{n.disabled=!1,e.disabled=!1,t.disabled=!1,a.disabled=!1,r.forEach((async e=>{e.buttonDelete.getElement().disabled=!1,e.stopCarAnimation()})),this.gameListener.dispatchEvent(new CustomEvent("carsUpdated")),this.gameListener.dispatchEvent(new CustomEvent("modal-hide"))}),(()=>{}))}}t.ControlPanelView=c},111:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GarageView=void 0;const n=a(73),r=a(266),s=a(718),o=a(867);a(483);const i=a(878);class l extends s.AppView{gameData;raceView;gameListener;prevButton;nextButton;constructor(e,t){super(r.garageProps),this.gameListener=t,this.gameData=e,this.raceView=new i.RaceView(this.gameData,this.gameListener),this.prevButton=new n.ElementCreator(r.buttonPrevPageProps),this.nextButton=new n.ElementCreator(r.buttonNextPageProps),this.resetButtons(),this.constructView()}constructView(){const e=new o.ControlPanelView(this.gameData,this.gameListener),t=new n.ElementCreator(r.modalWindowProps);this.elementCreator.addElement(e.getElement()),this.elementCreator.addElement(this.raceView.getElement()),this.redrawRaceView(),this.gameListener.addEventListener("carsUpdated",(()=>{this.redrawRaceView(),this.resetButtons()})),this.gameListener.addEventListener("modal-hide",(()=>{t.getElement().classList.add("hidden")})),this.gameListener.addEventListener("modal-show",(e=>{const a=e;t.getElement().textContent=a.detail.modalText,t.getElement().classList.remove("hidden")})),this.elementCreator.addElement(t.getElement()),this.createPrevPage(),this.createNextPage();const a=this.prevButton.getElement(),s=this.nextButton.getElement();this.gameListener.addEventListener("garagePaginationBlock",(()=>{a.disabled=!0,s.disabled=!0})),this.gameListener.addEventListener("garagePaginationUnblock",(()=>{this.resetButtons()}))}createPrevPage(){const e=this.prevButton.getElement();this.prevButton.addListeners({click:()=>{1===this.gameData.currentPage?e.disabled=!0:(e.disabled=!1,this.gameData.currentPage-=1),this.gameListener.dispatchEvent(new CustomEvent("carsUpdated"))}}),this.elementCreator.addElement(this.prevButton.getElement())}createNextPage(){const e=this.nextButton.getElement();this.nextButton.addListeners({click:()=>{this.gameData.currentPage===this.gameData.maxPage?e.disabled=!0:(e.disabled=!1,this.gameData.currentPage+=1),this.gameListener.dispatchEvent(new CustomEvent("carsUpdated"))}}),this.elementCreator.addElement(this.nextButton.getElement())}resetButtons(){const e=this.prevButton.getElement(),t=this.nextButton.getElement();1===this.gameData.currentPage?e.disabled=!0:e.disabled=!1,this.gameData.currentPage===this.gameData.maxPage?t.disabled=!0:t.disabled=!1}redrawRaceView(){const e=new i.RaceView(this.gameData,this.gameListener);this.raceView.getElement().replaceWith(e.getElement()),this.raceView=e}}t.GarageView=l},734:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RaceTrackView=void 0;const n=a(654),r=a(73),s=a(266),o=a(828),i=a(821),l=a(718);a(729);class c extends l.AppView{buttonSelect;buttonDelete;carNameTitle;road;buttonStart;buttonStop;raceCar;raceFlag;carData;gameListener;gameData;constructor(e,t,a){super(s.raceTrackProps),this.carData=e,this.buttonSelect=new r.ElementCreator(s.raceTrackButtonSelectProps),this.buttonDelete=new r.ElementCreator(s.raceTrackButtonDeleteProps),this.carNameTitle=new r.ElementCreator(s.raceTrackCarNameProps),this.road=new r.ElementCreator(s.raceTrackRoadProps),this.buttonStart=new r.ElementCreator(s.raceRoadStartButtonProps),this.buttonStop=new r.ElementCreator(s.raceRoadStopButtonProps),this.raceCar=new r.ElementCreator(s.raceRoadCarProps),this.raceFlag=new r.ElementCreator(s.raceRoadFlagProps),this.gameListener=t,this.gameData=a,this.constructView()}constructView(){this.stopCarAnimation(),this.raceCar.getElement().innerHTML=(0,o.getCarSvg)(this.carData.color),this.raceCar.element=this.raceCar.getElement().firstElementChild,this.carNameTitle.setTextContent(this.carData.name),this.createButtonSelect(),this.createButtonDelete(),this.elementCreator.addElement(this.carNameTitle.getElement()),this.createButtonStart(),this.createButtonStop(),this.road.addElement(this.raceCar.getElement()),this.road.addElement(this.raceFlag.getElement()),this.elementCreator.addElement(this.road.getElement())}createButtonSelect(){this.buttonSelect.addListeners({click:()=>{const{id:e,name:t,color:a}=this.carData;this.gameData.selectedCarID=e,this.gameData.selectedCarName=t,this.gameData.selectedCarColor=a,this.gameListener.dispatchEvent(new CustomEvent("carSelected"))}}),this.elementCreator.addElement(this.buttonSelect.getElement())}createButtonDelete(){this.buttonDelete.addListeners({click:()=>{(0,i.deleteCar)(this.carData.id).then((()=>{(0,i.deleteWinner)(this.carData.id).then((()=>{this.gameListener.dispatchEvent(new CustomEvent("carsUpdated"))}),(()=>{}))}),(()=>{}))}}),this.elementCreator.addElement(this.buttonDelete.getElement())}createButtonStart(){this.buttonStart.addListeners({click:()=>{this.gameData.carsActive.push(this.carData.id),this.gameListener.dispatchEvent(new CustomEvent("blockRace")),this.carMove().then((()=>{}),(()=>{}))}}),this.road.addElement(this.buttonStart.getElement())}createButtonStop(){this.buttonStop.getElement().disabled=!0,this.buttonStop.addListeners({click:()=>{this.CarStop().then((()=>{}),(()=>{}))}}),this.road.addElement(this.buttonStop.getElement())}async carMove(){return this.buttonStart.getElement().disabled=!0,this.startCarEngine().then((e=>{const t=e.engineProps.distance/e.engineProps.velocity;return this.startCarAnimation(t),this.setCarEngineDriveMode(t).then((e=>({carId:this.carData.id,carTime:e})),(e=>{throw new Error(e)}))}),(e=>{throw new Error(e)}))}async startCarEngine(){return(0,i.patchCarEngine)(this.carData.id,n.carEngineStatuses.start).then((e=>(this.buttonStop.getElement().disabled=!1,e)),(()=>{throw new Error}))}async CarStop(){return this.buttonStop.getElement().disabled=!0,this.stopCarEngine().then((()=>{this.gameData.carsActive.splice(this.gameData.carsActive.findIndex((e=>e===this.carData.id)),1),0!==this.gameData.carsActive.length||this.gameData.raceActive||this.gameListener.dispatchEvent(new CustomEvent("unblockRace")),this.stopCarAnimation()}),(()=>{}))}async stopCarEngine(){return(0,i.patchCarEngine)(this.carData.id,n.carEngineStatuses.stop).then((()=>(this.buttonStart.getElement().disabled=!1,this)),(e=>{throw new Error(e)}))}async setCarEngineDriveMode(e){return(0,i.patchCarEngine)(this.carData.id,n.carEngineStatuses.drive).then((()=>e),(e=>{throw"500"===e.message&&this.gameListener.dispatchEvent(new CustomEvent("carStop",{detail:{carId:this.carData.id}})),new Error(e)}))}startCarAnimation(e){const t=this.road.getElement().offsetWidth-this.gameData.carLength,a=e/t,n=this.raceCar.getElement();n.style.left="0px";let r=0;const s=setInterval((()=>{r<t&&(r+=1,n.style.left=`${r}px`)}),a);this.gameListener.addEventListener("carStop",(e=>{e.detail.carId===this.carData.id&&clearInterval(s)})),this.gameListener.addEventListener("carStopAnimation",(e=>{e.detail.carId===this.carData.id&&(clearInterval(s),n.style.left="0px")})),this.gameListener.addEventListener("allCarsStop",(()=>{clearInterval(s),n.style.left="0px"}),{once:!0})}stopCarAnimation(){this.gameListener.dispatchEvent(new CustomEvent("carStopAnimation",{detail:{carId:this.carData.id}}))}}t.RaceTrackView=c},878:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RaceView=void 0;const n=a(73),r=a(266),s=a(821),o=a(718);a(601);const i=a(734);class l extends o.AppView{gameData;gameListener;constructor(e,t){super(r.raceProps),this.gameListener=t,this.gameData=e,this.constructView()}async constructView(){(0,s.getGarageData)(this.gameData.currentPage).then((e=>{if(e){this.gameData.maxPage=e.carsPagesNumber,this.gameData.carsOnPage.length=0;const{cars:t,carsNumber:a}=e,s=new n.ElementCreator(r.raceTitleProps);s.setTextContent(`Garage(${a})`);const o=new n.ElementCreator(r.raceSubtitleProps);o.setTextContent(`Page #(${this.gameData.currentPage})`),this.elementCreator.addElement(s.getElement()),this.elementCreator.addElement(o.getElement()),t.forEach((e=>{const t=new i.RaceTrackView(e,this.gameListener,this.gameData);this.gameData.carsOnPage.push(t),this.elementCreator.addElement(t.getElement())}))}}),(()=>{}))}}t.RaceView=l},957:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MainView=void 0;const n=a(654),r=a(266),s=a(718),o=a(111);a(175);const i=a(731);class l extends s.AppView{gameData;gameListener;garage;winners;constructor(e){super(r.mainProps),this.gameData=n.gameData,this.gameListener=e,this.garage=new o.GarageView(this.gameData,this.gameListener),this.winners=new i.WinnersView,this.constructView(),this.setChangeViewListeners()}constructView(){this.elementCreator.addElement(this.garage.getElement())}setChangeViewListeners(){this.gameListener.addEventListener("pageGarage",(()=>{this.elementCreator.removeChildren(),this.elementCreator.addElement(this.garage.getElement())})),this.gameListener.addEventListener("pageWinners",(()=>{this.elementCreator.removeChildren(),this.elementCreator.addElement(this.winners.getElement())}))}}t.MainView=l},731:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WinnersView=void 0;const n=a(266),r=a(718);a(915);class s extends r.AppView{constructor(){super(n.winnersProps),this.constructView()}constructView(){}}t.WinnersView=s}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=a(477);a(576),alert("Уважаемый проверяющий! Если есть возможность, отложи, пожалуйста, проверку до 26.07. Мне нужно ещё немного времени. Спасибо!"),new e.App})()})();