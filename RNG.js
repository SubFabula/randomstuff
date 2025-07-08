const RNGBtn = document.getElementById("RNG-Button");

let r = 0, g = 0, b = 0;
let RNGBtnColor = `rgb(${r}, ${g}, ${b})`;
let x = 0;
const maxCycle = 151;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

async function RNGBtnTextCycle() {
  const states = ["Zar Dönüyor.", "Zar Dönüyor..", "Zar Dönüyor..."];
  let i = 0;

  for (let cycle = 0; cycle < maxCycle / 3; cycle++) {
    RNGBtn.value = states[i % states.length];
    i++;
    await sleep(500); // 0.5 seconds
  }

  RNGBtn.value = "Bana tıklayın!";
}

async function RNGBtnColorRnd() {
  for (let i = 0; i < maxCycle; i++) {
    r = getRndInteger(20, 256);
    g = getRndInteger(80, 256);
    b = getRndInteger(10, 256);
    
    RNGBtnColor = `rgb(${r}, ${g}, ${b})`;
    RNGBtn.style.backgroundColor = RNGBtnColor;
    RNGBtn.style.borderColor = RNGBtnColor;

    console.log(`Cycle: ${i}`);
    x += 1;
    await sleep((i + x) * 1); // 0.001+ seconds 
  }
    
  console.log(`Color: ${RNGBtnColor}`);  
}

async function RNGGo() {
  RNGBtn.disabled = true;

  await Promise.all([
    RNGBtnColorRnd(),
    RNGBtnTextCycle()
  ]);

  setTimeout(() => {
    RNGBtn.disabled = false;
  }, 1000); // 1 second
}

RNGBtn.addEventListener("click", RNGGo);
