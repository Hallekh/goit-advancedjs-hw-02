import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as m}from"./assets/vendor-651d7991.js";function u(o,t){return new Promise((s,r)=>{const e=Math.random()>.3;setTimeout(()=>{e?s({position:o,delay:t}):r({position:o,delay:t})},t)})}document.querySelector(".form").addEventListener("submit",function(o){o.preventDefault();const t=parseInt(document.querySelector('[name="delay"]').value,10),s=parseInt(document.querySelector('[name="step"]').value,10),r=parseInt(document.querySelector('[name="amount"]').value,10);for(let e=0;e<r;e++)u(e+1,t+e*s).then(({position:n,delay:i})=>{m.success({title:`✅ Fulfilled promise ${n}`,message:`in ${i}ms`,position:"topRight"})}).catch(({position:n,delay:i})=>{m.error({title:`❌ Rejected promise ${n}`,message:`in ${i}ms`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers3.js.map