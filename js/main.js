import './click-event.js';

function getEvent(){
    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.addEventListener("click",(e)=>{
            return e.target.innerHTML;
        })
    });
}
const result = document.getElementById("result");
result.innerHTML = getEvent();