const btn = document.getElementById('btn')
const nav = document.getElementById('nav')
const click = document.getElementById('click')
const container = document.getElementById('container')
const welcomeBox = document.getElementById('box')

console.log(welcomeBox)

btn.addEventListener('click',()=>{
    btn.classList.toggle('active')
    nav.classList.toggle('active')
})

click.addEventListener('click',()=>{
    createNotify();
})

function createNotify(){
 const notify = document.createElement('div');
 notify.classList.add('toast')
 notify.innerText= 'Thank you for clicking me'

 container.appendChild(notify)

 setTimeout(()=>{
     notify.remove()
 },3000)
}

const text = 'Welcome to my page';

let index = 0;

function welcomeMessage() {
    welcomeBox.innerText = text.slice
    (0, index);
    index++;
    console.log(index)
    if (index > text.length) {
        index = 0
    }
}
setInterval( welcomeMessage, 100);