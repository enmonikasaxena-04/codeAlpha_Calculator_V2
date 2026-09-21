let display = document.querySelector('.display') || document.getElementById('display') || document.querySelector('input') || document.querySelector('.screen');
if(!display){
  // aapke screenshot wala display
  display = document.querySelectorAll('div')[5] || document.createElement('div');
}
const screen = document.querySelector('.display, #display,.screen, input') || document.querySelector('div[style*="white"]') || document.getElementsByTagName('div')[1];

let current = "";
function updateDisplay(val){
  let d = document.querySelector('input') || document.querySelector('.display') || document.querySelector('#result');
  if(!d){
    d = document.querySelectorAll('div')[2];
  }
  // Aapke design ke liye - upar wala white box
  const box = document.querySelector('div > div > div:first-child') || document.querySelector('div');
  if(document.querySelector('input')){
    document.querySelector('input').value = val;
  }
  // Simple fallback
  const disp = document.querySelectorAll('div')[1] || document.querySelectorAll('div')[0];
}

// Final simple working logic
document.addEventListener('DOMContentLoaded', ()=>{
  const displayBox = document.querySelector('div div div') || document.querySelector('input') || document.getElementById('display');
  const buttons = document.querySelectorAll('button');
  let expr = "";
  const out = document.querySelector('div[style*="background: white"]') || document.querySelectorAll('div')[1] || document.querySelector('div');

  // Find display - white box
  let displayEl = document.querySelectorAll('div')[1];
  // Actually first white div is display
  const allDivs = document.querySelectorAll('div');
  for(let d of allDivs){
    if(window.getComputedStyle(d).backgroundColor.includes('255')){
      displayEl = d;
      break;
    }
  }

  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      let t = btn.innerText.trim();
      if(t==='AC'){
        expr="";
        if(displayEl) displayEl.innerText="";
      } else if(t==='DEL'){
        expr = expr.slice(0,-1);
        if(displayEl) displayEl.innerText = expr;
      } else if(t==='='){
        try{
          let calc = expr.replace(/%/g,'/100').replace(/×/g,'*');
          let res = eval(calc);
          if(displayEl) displayEl.innerText = res;
          expr = res.toString();
        }catch(e){
          if(displayEl) displayEl.innerText = "Error";
          expr="";
        }
      } else {
        if(t==='×') t='*';
        if(t==='÷') t='/';
        expr+=t;
        if(displayEl) displayEl.innerText = expr;
      }
    });
  });
});
