const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'I love programming!';

let ind = 1;
let speed = 300 / speedEl.value;

writeText ();

function writeText() {
    textEl.innerText = text.slice(0, ind);
   
    ind++;

    if(ind > text.length){
        ind = 1;
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);