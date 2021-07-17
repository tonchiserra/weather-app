(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var i=c(1),l=c.n(i),r=c(4),s=c.n(r),h=(c(9),c(2)),j=(c(10),c(14)),x=c(0);function a(e){var t=e.loc,c=e.browseWeatherByHistory,i=t.id,l=t.location;return Object(x.jsx)("button",{className:"item-history",onClick:function(){c(i)},children:l})}function n(e){var t=e.locHistory,c=e.browseWeatherByLocation,l=e.showCLWindow,r=e.setLocHistory,s=Object(i.useRef)(),h=function(e){var t=JSON.parse(localStorage.getItem("locHistory")).find((function(t){return t.id===e}));c(t.location),l()};return Object(x.jsxs)("div",{className:"change-location-window",children:[Object(x.jsxs)("div",{className:"second-nav",children:[Object(x.jsx)("input",{className:"input-text",type:"text",name:"location",placeholder:"Enter location",ref:s}),Object(x.jsx)("input",{className:"btn-search",type:"submit",value:"Browse",onClick:function(){var e=s.current.value;if(""!==e){s.current.value=null,c(e),l();var t={location:e,id:Object(j.a)()},i=JSON.parse(localStorage.getItem("locHistory"));null===i?i=[t]:(7===i.length&&i.shift(),i.push(t)),localStorage.setItem("locHistory",JSON.stringify(i)),r(i)}}}),Object(x.jsx)("button",{className:"btn-close",onClick:l,children:"X"})]}),Object(x.jsx)("div",{className:"location-history",children:t.map((function(e){return Object(x.jsx)(a,{loc:e,browseWeatherByHistory:h},e.id)}))})]})}function w(e){var t=e.weather,c=e.name,i=e.unit;return Object(x.jsxs)("div",{className:"current-hightlights-target",children:[Object(x.jsx)("h3",{children:c}),Object(x.jsxs)("div",{className:"wind",children:[t,Object(x.jsx)("p",{children:i})]})]})}function o(e){var t=e.weather,c=e.icon;return Object(x.jsxs)("div",{className:"weather-info",children:[Object(x.jsxs)("div",{className:"current-principal",children:[c,Object(x.jsxs)("div",{className:"temperature",children:[t.temperature,Object(x.jsx)("p",{children:"\xb0C"})]}),Object(x.jsx)("p",{className:"main",children:t.main}),Object(x.jsx)("p",{className:"description",children:t.description}),Object(x.jsx)("p",{className:"date",children:t.date}),Object(x.jsxs)("p",{className:"loc-name",children:[Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(x.jsx)("g",{children:Object(x.jsx)("rect",{fill:"none",height:"24",width:"24",y:"0"})}),Object(x.jsx)("g",{children:Object(x.jsx)("path",{d:"M12,2c-4.2,0-8,3.22-8,8.2c0,3.18,2.45,6.92,7.34,11.23c0.38,0.33,0.95,0.33,1.33,0 C17.55,17.12,20,13.38,20,10.2C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2 C14,11.1,13.1,12,12,12z","enable-background":"new"})})]}),t.locName]})]}),Object(x.jsxs)("div",{className:"current-hightlights",children:[Object(x.jsx)(w,{weather:t.feelsLike,name:"Feels Like",unit:"\xb0C"}),Object(x.jsx)(w,{weather:t.wind,name:"Wind",unit:"m/s"}),Object(x.jsx)(w,{weather:t.humidity,name:"Humidity",unit:"%"}),Object(x.jsx)(w,{weather:t.airPressure,name:"Air Pressure",unit:"mb"})]})]})}function b(){return Object(x.jsx)("footer",{className:"footer",children:Object(x.jsxs)("p",{children:["Web App developed by ",Object(x.jsx)("a",{href:"https://gserra.netlify.app/",target:"_blank",title:"Web de Gonzalo Serra",rel:"noopener noreferrer",children:"Gonzalo Serra"}),"."]})})}var f=function(){var e=Object(i.useState)({}),t=Object(h.a)(e,2),c=t[0],l=t[1],r=Object(i.useState)(),s=Object(h.a)(r,2),j=s[0],a=s[1],w=Object(i.useState)(),f=Object(h.a)(w,2),O=f[0],d=f[1],y=Object(i.useState)([]),g=Object(h.a)(y,2),m=g[0],p=g[1],u=function(e){localStorage.setItem("currentLocation",JSON.stringify(e));var t=new Request("http://api.openweathermap.org/data/2.5/find?q=".concat(e,"&units=metric&appid=1bc031be45fada06ac09b44c3665f8de"));fetch(t).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){if(e.count<=0);else{var t=new Date,c={temperature:Math.trunc(e.list[0].main.temp),main:e.list[0].weather[0].main,description:e.list[0].weather[0].description,date:t.toDateString(),locName:e.list[0].name,feelsLike:Math.trunc(e.list[0].main.feels_like),wind:e.list[0].wind.speed,humidity:e.list[0].main.humidity,airPressure:e.list[0].main.pressure};switch(l(c),e.list[0].weather[0].icon){case"01d":a(Object(x.jsx)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("circle",{cx:"50",cy:"50",r:"50",fill:"#FBFF37"})}));break;case"01n":a(Object(x.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("circle",{cx:"50",cy:"50",r:"50",fill:"#D1D1D1"}),Object(x.jsx)("circle",{cx:"40.5",cy:"20.5",r:"7.5",fill:"#BAB8B8"}),Object(x.jsx)("circle",{cx:"25",cy:"40",r:"10",fill:"#BAB8B8"}),Object(x.jsx)("circle",{cx:"48",cy:"40",r:"6",fill:"#BAB8B8"})]}));break;case"02d":a(Object(x.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("circle",{cx:"70",cy:"38",r:"30",fill:"#FBFF37"}),Object(x.jsx)("circle",{cx:"24",cy:"68",r:"24",fill:"white"}),Object(x.jsx)("circle",{cx:"80",cy:"72",r:"20",fill:"white"}),Object(x.jsx)("circle",{cx:"43",cy:"48",r:"24",fill:"white"}),Object(x.jsx)("circle",{cx:"67",cy:"51",r:"17",fill:"white"}),Object(x.jsx)("rect",{x:"24",y:"65",width:"56",height:"27",fill:"white"})]}));break;case"02n":a(Object(x.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("circle",{cx:"70",cy:"38",r:"30",fill:"#D1D1D1"}),Object(x.jsx)("circle",{cx:"64.3",cy:"20.3",r:"4.5",fill:"#BAB8B8"}),Object(x.jsx)("circle",{cx:"55",cy:"32",r:"6",fill:"#BAB8B8"}),Object(x.jsx)("circle",{cx:"68.7999",cy:"32",r:"3.6",fill:"#BAB8B8"}),Object(x.jsx)("circle",{cx:"24",cy:"68",r:"24",fill:"white"}),Object(x.jsx)("circle",{cx:"80",cy:"72",r:"20",fill:"white"}),Object(x.jsx)("circle",{cx:"43",cy:"48",r:"24",fill:"white"}),Object(x.jsx)("circle",{cx:"67",cy:"51",r:"17",fill:"white"}),Object(x.jsx)("rect",{x:"24",y:"65",width:"56",height:"27",fill:"white"})]}));break;case"03d":case"03n":a(Object(x.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("circle",{cx:"24",cy:"60",r:"24",fill:"white"}),Object(x.jsx)("circle",{cx:"80",cy:"64",r:"20",fill:"white"}),Object(x.jsx)("circle",{cx:"43",cy:"40",r:"24",fill:"white"}),Object(x.jsx)("circle",{cx:"67",cy:"43",r:"17",fill:"white"}),Object(x.jsx)("rect",{x:"24",y:"57",width:"56",height:"27",fill:"white"})]}));break;case"04d":case"04n":a(Object(x.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("circle",{cx:"37.6157",cy:"51.9622",r:"19.6157",fill:"#919191"}),Object(x.jsx)("circle",{cx:"83.3858",cy:"55.2315",r:"16.3465",fill:"#919191"}),Object(x.jsx)("circle",{cx:"53.1449",cy:"35.6157",r:"19.6157",fill:"#919191"}),Object(x.jsx)("circle",{cx:"72.7606",cy:"38.0677",r:"13.8945",fill:"#919191"}),Object(x.jsx)("rect",{x:"37.6157",y:"49.5102",width:"45.7701",height:"22.0677",fill:"#919191"}),Object(x.jsx)("circle",{cx:"19.6157",cy:"62.9622",r:"19.6157",fill:"white"}),Object(x.jsx)("circle",{cx:"65.3858",cy:"66.2315",r:"16.3465",fill:"white"}),Object(x.jsx)("circle",{cx:"35.1449",cy:"46.6157",r:"19.6157",fill:"white"}),Object(x.jsx)("circle",{cx:"54.7606",cy:"49.0677",r:"13.8945",fill:"white"}),Object(x.jsx)("rect",{x:"19.6157",y:"60.5102",width:"45.7701",height:"22.0677",fill:"white"})]}));break;case"09d":case"09n":a(Object(x.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("circle",{cx:"37.6157",cy:"38.9622",r:"19.6157",fill:"#919191"}),Object(x.jsx)("circle",{cx:"83.3858",cy:"42.2315",r:"16.3465",fill:"#919191"}),Object(x.jsx)("circle",{cx:"53.1449",cy:"22.6157",r:"19.6157",fill:"#919191"}),Object(x.jsx)("circle",{cx:"72.7606",cy:"25.0677",r:"13.8945",fill:"#919191"}),Object(x.jsx)("rect",{x:"37.6158",y:"36.5102",width:"45.7701",height:"22.0677",fill:"#919191"}),Object(x.jsx)("circle",{cx:"19.6157",cy:"50.5843",r:"19.6157",fill:"white"}),Object(x.jsx)("circle",{cx:"65.3858",cy:"53.8536",r:"16.3465",fill:"white"}),Object(x.jsx)("circle",{cx:"35.1449",cy:"34.2378",r:"19.6157",fill:"white"}),Object(x.jsx)("circle",{cx:"54.7606",cy:"36.6898",r:"13.8945",fill:"white"}),Object(x.jsx)("rect",{x:"19.6158",y:"48.1323",width:"45.7701",height:"22.0677",fill:"white"}),Object(x.jsx)("circle",{cx:"20.5",cy:"90.96",r:"6.5",fill:"white"}),Object(x.jsx)("path",{d:"M26.48 88.36H14.52L20.5 79L26.48 88.36Z",fill:"white"}),Object(x.jsx)("circle",{cx:"64.5",cy:"84.96",r:"6.5",fill:"white"}),Object(x.jsx)("path",{d:"M70.48 82.36H58.52L64.5 73L70.48 82.36Z",fill:"white"}),Object(x.jsx)("circle",{cx:"39",cy:"80.36",r:"4",fill:"white"}),Object(x.jsx)("path",{d:"M42.68 78.76H35.32L39 73L42.68 78.76Z",fill:"white"}),Object(x.jsx)("circle",{cx:"87",cy:"72.36",r:"4",fill:"white"}),Object(x.jsx)("path",{d:"M90.68 70.76H83.32L87 65L90.68 70.76Z",fill:"white"})]}));break;case"10d":a(Object(x.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("circle",{cx:"69",cy:"28",r:"28",fill:"#FBFF37"}),Object(x.jsx)("circle",{cx:"25.56",cy:"56.44",r:"22.56",fill:"white"}),Object(x.jsx)("circle",{cx:"78.2",cy:"60.2",r:"18.8",fill:"white"}),Object(x.jsx)("circle",{cx:"43.42",cy:"37.64",r:"22.56",fill:"white"}),Object(x.jsx)("circle",{cx:"65.98",cy:"40.46",r:"15.98",fill:"white"}),Object(x.jsx)("rect",{x:"25.56",y:"53.62",width:"52.64",height:"25.38",fill:"white"}),Object(x.jsx)("circle",{cx:"54",cy:"88.36",r:"4",fill:"white"}),Object(x.jsx)("path",{d:"M57.68 86.76H50.32L54 81L57.68 86.76Z",fill:"white"}),Object(x.jsx)("circle",{cx:"25",cy:"93.36",r:"4",fill:"white"}),Object(x.jsx)("path",{d:"M28.68 91.76H21.32L25 86L28.68 91.76Z",fill:"white"}),Object(x.jsx)("circle",{cx:"78",cy:"95.36",r:"4",fill:"white"}),Object(x.jsx)("path",{d:"M81.68 93.76H74.32L78 88L81.68 93.76Z",fill:"white"})]}));break;case"10n":a(Object(x.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("circle",{cx:"69",cy:"28",r:"28",fill:"#D1D1D1"}),Object(x.jsx)("circle",{cx:"63.6801",cy:"11.48",r:"4.2",fill:"#BAB8B8"}),Object(x.jsx)("circle",{cx:"55",cy:"22.4",r:"5.6",fill:"#BAB8B8"}),Object(x.jsx)("circle",{cx:"67.8799",cy:"22.4",r:"3.36",fill:"#BAB8B8"}),Object(x.jsx)("circle",{cx:"25.56",cy:"56.44",r:"22.56",fill:"white"}),Object(x.jsx)("circle",{cx:"78.2",cy:"60.2",r:"18.8",fill:"white"}),Object(x.jsx)("circle",{cx:"43.42",cy:"37.64",r:"22.56",fill:"white"}),Object(x.jsx)("circle",{cx:"65.98",cy:"40.46",r:"15.98",fill:"white"}),Object(x.jsx)("rect",{x:"25.5601",y:"53.62",width:"52.64",height:"25.38",fill:"white"}),Object(x.jsx)("circle",{cx:"54",cy:"88.36",r:"4",fill:"white"}),Object(x.jsx)("path",{d:"M57.6799 86.76H50.3199L53.9999 81L57.6799 86.76Z",fill:"white"}),Object(x.jsx)("circle",{cx:"25",cy:"93.36",r:"4",fill:"white"}),Object(x.jsx)("path",{d:"M28.6799 91.76H21.3199L24.9999 86L28.6799 91.76Z",fill:"white"}),Object(x.jsx)("circle",{cx:"78",cy:"95.36",r:"4",fill:"white"}),Object(x.jsx)("path",{d:"M81.6799 93.76H74.3199L77.9999 88L81.6799 93.76Z",fill:"white"})]}));break;case"11d":case"11n":a(Object(x.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("circle",{cx:"37.6157",cy:"37.9622",r:"19.6157",fill:"#919191"}),Object(x.jsx)("circle",{cx:"83.3858",cy:"41.2315",r:"16.3465",fill:"#919191"}),Object(x.jsx)("circle",{cx:"53.1449",cy:"21.6157",r:"19.6157",fill:"#919191"}),Object(x.jsx)("circle",{cx:"72.7606",cy:"24.0677",r:"13.8945",fill:"#919191"}),Object(x.jsx)("rect",{x:"37.6158",y:"35.5102",width:"45.7701",height:"22.0677",fill:"#919191"}),Object(x.jsx)("circle",{cx:"19.6157",cy:"49.5843",r:"19.6157",fill:"white"}),Object(x.jsx)("circle",{cx:"65.3858",cy:"52.8536",r:"16.3465",fill:"white"}),Object(x.jsx)("circle",{cx:"35.1449",cy:"33.2378",r:"19.6157",fill:"white"}),Object(x.jsx)("circle",{cx:"54.7606",cy:"35.6898",r:"13.8945",fill:"white"}),Object(x.jsx)("rect",{x:"19.6158",y:"47.1323",width:"45.7701",height:"22.0677",fill:"white"}),Object(x.jsx)("path",{d:"M28 78.8387L34.9767 62H45.4419L38.4651 71.871H53L30.3256 98L38.4651 78.8387H28Z",fill:"#FBFF37"}),Object(x.jsx)("circle",{cx:"15.5",cy:"87.96",r:"6.5",fill:"white"}),Object(x.jsx)("path",{d:"M21.48 85.36H9.51999L15.5 76L21.48 85.36Z",fill:"white"}),Object(x.jsx)("circle",{cx:"63.5",cy:"83.96",r:"6.5",fill:"white"}),Object(x.jsx)("path",{d:"M69.48 81.36H57.52L63.5 72L69.48 81.36Z",fill:"white"}),Object(x.jsx)("circle",{cx:"87",cy:"72.36",r:"4",fill:"white"}),Object(x.jsx)("path",{d:"M90.68 70.76H83.32L87 65L90.68 70.76Z",fill:"white"})]}));break;case"13d":case"13n":a(Object(x.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("path",{d:"M67.0001 51C67.0001 60.3888 59.3889 68 50.0001 68C40.6112 68 33.0001 60.3888 33.0001 51C33.0001 41.6112 40.6112 34 50.0001 34C59.3889 34 67.0001 41.6112 67.0001 51ZM41.7092 51C41.7092 55.5789 45.4211 59.2909 50.0001 59.2909C54.579 59.2909 58.291 55.5789 58.291 51C58.291 46.4211 54.579 42.7091 50.0001 42.7091C45.4211 42.7091 41.7092 46.4211 41.7092 51Z",fill:"white"}),Object(x.jsx)("rect",{x:"45.6066",y:"4",width:"8",height:"34",rx:"4",fill:"white"}),Object(x.jsx)("rect",{x:"62.5563",y:"4.3934",width:"8",height:"22",rx:"4",transform:"rotate(45 62.5563 4.3934)",fill:"white"}),Object(x.jsx)("rect",{x:"31",y:"10.0503",width:"8",height:"22",rx:"4",transform:"rotate(-45 31 10.0503)",fill:"white"}),Object(x.jsx)("rect",{x:"53.6066",y:"96",width:"8",height:"34",rx:"4",transform:"rotate(-180 53.6066 96)",fill:"white"}),Object(x.jsx)("rect",{x:"36.6569",y:"95.6066",width:"8",height:"22",rx:"4",transform:"rotate(-135 36.6569 95.6066)",fill:"white"}),Object(x.jsx)("rect",{x:"68.2131",y:"89.9497",width:"8",height:"22",rx:"4",transform:"rotate(135 68.2131 89.9497)",fill:"white"}),Object(x.jsx)("rect",{x:"85.2291",y:"21.965",width:"8",height:"34",rx:"4",transform:"rotate(55 85.2291 21.965)",fill:"white"}),Object(x.jsx)("rect",{x:"94.6288",y:"36.075",width:"8",height:"22",rx:"4",transform:"rotate(100 94.6288 36.075)",fill:"white"}),Object(x.jsx)("rect",{x:"71.8951",y:"13.4703",width:"8",height:"22",rx:"4",transform:"rotate(10 71.8951 13.4703)",fill:"white"}),Object(x.jsx)("rect",{x:"45.6066",y:"4",width:"8",height:"34",rx:"4",fill:"white"}),Object(x.jsx)("rect",{x:"62.5563",y:"4.3934",width:"8",height:"22",rx:"4",transform:"rotate(45 62.5563 4.3934)",fill:"white"}),Object(x.jsx)("rect",{x:"31",y:"10.0503",width:"8",height:"22",rx:"4",transform:"rotate(-45 31 10.0503)",fill:"white"}),Object(x.jsx)("rect",{x:"45.6066",y:"4",width:"8",height:"34",rx:"4",fill:"white"}),Object(x.jsx)("rect",{x:"62.5563",y:"4.3934",width:"8",height:"22",rx:"4",transform:"rotate(45 62.5563 4.3934)",fill:"white"}),Object(x.jsx)("rect",{x:"31",y:"10.0503",width:"8",height:"22",rx:"4",transform:"rotate(-45 31 10.0503)",fill:"white"}),Object(x.jsx)("rect",{x:"13.9667",y:"78.0198",width:"8",height:"34",rx:"4",transform:"rotate(-125 13.9667 78.0198)",fill:"white"}),Object(x.jsx)("rect",{x:"4.56683",y:"63.9098",width:"8",height:"22",rx:"4",transform:"rotate(-80 4.56683 63.9098)",fill:"white"}),Object(x.jsx)("rect",{x:"27.3006",y:"86.5145",width:"8",height:"22",rx:"4",transform:"rotate(-170 27.3006 86.5145)",fill:"white"}),Object(x.jsx)("rect",{x:"89.8179",y:"71.4666",width:"8",height:"34",rx:"4",transform:"rotate(125 89.8179 71.4666)",fill:"white"}),Object(x.jsx)("rect",{x:"79.7736",y:"85.1253",width:"8",height:"22",rx:"4",transform:"rotate(170 79.7736 85.1253)",fill:"white"}),Object(x.jsx)("rect",{x:"93.2397",y:"56.0313",width:"8",height:"22",rx:"4",transform:"rotate(80 93.2397 56.0313)",fill:"white"}),Object(x.jsx)("rect",{x:"9.37793",y:"30.5182",width:"8",height:"34",rx:"4",transform:"rotate(-55 9.37793 30.5182)",fill:"white"}),Object(x.jsx)("rect",{x:"19.4222",y:"16.8595",width:"8",height:"22",rx:"4",transform:"rotate(-10 19.4222 16.8595)",fill:"white"}),Object(x.jsx)("rect",{x:"5.95599",y:"45.9535",width:"8",height:"22",rx:"4",transform:"rotate(-100 5.95599 45.9535)",fill:"white"})]}));break;case"50d":case"50n":a(Object(x.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("circle",{cx:"24",cy:"44",r:"24",fill:"white"}),Object(x.jsx)("circle",{cx:"80",cy:"48",r:"20",fill:"white"}),Object(x.jsx)("circle",{cx:"43.0001",cy:"24",r:"24",fill:"white"}),Object(x.jsx)("circle",{cx:"67",cy:"27",r:"17",fill:"white"}),Object(x.jsx)("rect",{x:"24",y:"41",width:"56",height:"27",fill:"white"}),Object(x.jsx)("rect",{y:"73",width:"42",height:"5",rx:"2.5",fill:"white"}),Object(x.jsx)("rect",{x:"45",y:"73",width:"14",height:"5",rx:"2.5",fill:"white"}),Object(x.jsx)("rect",{x:"62",y:"73",width:"31",height:"5",rx:"2.5",fill:"white"}),Object(x.jsx)("rect",{y:"83",width:"19",height:"5",rx:"2.5",fill:"white","fill-opacity":"0.5"}),Object(x.jsx)("rect",{x:"13",y:"93",width:"49",height:"5",rx:"2.5",fill:"white","fill-opacity":"0.3"}),Object(x.jsx)("rect",{x:"65",y:"93",width:"35",height:"5",rx:"2.5",fill:"white","fill-opacity":"0.3"}),Object(x.jsx)("rect",{x:"22",y:"83",width:"19",height:"5",rx:"2.5",fill:"white","fill-opacity":"0.5"}),Object(x.jsx)("rect",{x:"44",y:"83",width:"38",height:"5",rx:"2.5",fill:"white","fill-opacity":"0.5"}),Object(x.jsx)("rect",{x:"85",y:"83",width:"15",height:"5",rx:"2.5",fill:"white","fill-opacity":"0.5"})]}));break;default:a("Imagen no disponible")}}})).catch((function(e){console.log("Oops... We couldn't find that location")}))};Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("currentLocation"));null===e?d(!1):(u(e),d(!0));var t=JSON.parse(localStorage.getItem("locHistory"));p(null===t?[]:t)}),[]);var v=function(){document.querySelector(".change-location-window").classList.toggle("clw-is-active")};return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("section",{className:"app-container",children:[Object(x.jsx)("nav",{className:"nav-main",children:Object(x.jsx)("button",{className:"btn-change-location",onClick:v,children:"Change location"})}),Object(x.jsx)(n,{locHistory:m,browseWeatherByLocation:u,showCLWindow:v,setLocHistory:p}),Object(x.jsx)("section",{className:"current-weather-window",children:O?Object(x.jsx)(o,{weather:c,icon:j}):Object(x.jsx)("div",{className:"message-content",children:Object(x.jsx)("p",{className:"message",children:"Select a location"})})}),Object(x.jsx)(b,{})]})})};s.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.2c0f2763.chunk.js.map