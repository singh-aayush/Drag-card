const card = document.querySelector('#card');
const cardheader = card.querySelector('header');
const resetbtn = document.querySelector('.reset');

let clicked = false;
let starttop = card.offsetTop;
let startleft = card.offsetLeft;
let offsetX, offsetY;

cardheader.addEventListener('mousedown', (e) =>{
    clicked = true;
    offsetX = e.clientX - card.offsetLeft;
    offsetY = e.clientY - card.offsetTop;
});

document.addEventListener('mouseup', () =>{
    clicked = false;
});

document.addEventListener('mousemove', (e)=>{
    if(!clicked) return;
    const {clientX, clientY} = e;
    card.style.left = `${clientX - offsetX}px`;
    card.style.top = `${clientY - offsetY}px`;
});

function resetPosition(){
    card.style.left = `${startleft}px`;
    card.style.top = `${starttop}px`;
}

resetbtn.addEventListener('click', resetPosition);