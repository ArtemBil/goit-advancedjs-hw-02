import"./assets/styles-1Sn7Tb72.js";import{f as h,i as y}from"./assets/vendor-BbbuE1sJ.js";function p(e){const a=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:d,minutes:l,seconds:f}}const i=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]"),o={seconds:document.querySelector("[data-seconds]"),minutes:document.querySelector("[data-minutes]"),hours:document.querySelector("[data-hours]"),days:document.querySelector("[data-days]")},D="Please choose a date in the future";let m=null;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const[t]=e;if(t<Date.now())return n.disabled=!0,y.error({message:D,position:"topRight",timeout:3e3});n.disabled=!1,m=t}};n.addEventListener("click",e=>{const t=setInterval(()=>{const r=m.getTime()-Date.now(),{days:u,hours:c,minutes:a,seconds:d}=p(r);if(r<=0)return n.disabled=!1,i.disabled=!1,clearInterval(t);o.days.innerText=s(u),o.hours.innerText=s(c),o.minutes.innerText=s(a),o.seconds.innerText=s(d)},1e3);n.disabled=!0,i.disabled=!0});function s(e){return e.toString().padStart(2,"0")}h(i,S);
//# sourceMappingURL=1-timer.js.map
