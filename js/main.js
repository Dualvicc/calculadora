let currentOperation = document.getElementById("currentOperation");
let lastOperation = document.getElementById("lastOperation");
const buttons = document.querySelectorAll("button")
let operator = "";
let result = 0;


function getEvent(){

    buttons.forEach(button => {

        button.addEventListener("click",(e)=>{   
          
            if(button.innerHTML == "=" || button.innerHTML == "+" || button.innerHTML == "-" || button.innerHTML == "x" || button.innerHTML == "÷" || button.innerHTML == "%" || button.innerHTML == "1/x" || button.innerHTML == "x²" || button.innerHTML == "√x"  ){
                operator = button.innerHTML;
                if(button.innerHTML == "+" || button.innerHTML == "-" || button.innerHTML == "x" || button.innerHTML == "÷"){
                    lastOperation.value = currentOperation.value + operator;
                    currentOperation.value = 0;
                }
            }else{
                if(button.innerHTML == "del"){
                    currentOperation.value = currentOperation.value.slice(0,-1);
                }
                if(button.innerHTML == "C"){
                    currentOperation.value = 0;
                    lastOperation.value = 0;
                }
                if(button.innerHTML == "CE"){
                    currentOperation.value = 0;
                }
                if(currentOperation.value == 0 && button.innerHTML!= "del" && button.innerHTML!= "C" && button.innerHTML!= "CE" && button.innerHTML!= "=") { 
                    currentOperation.value = button.innerHTML;
                }else if(button.innerHTML!= "del" && button.innerHTML!= "C" && button.innerHTML!= "CE"){
                    currentOperation.value += button.innerHTML;
                }
            }

            if(button.innerHTML == "="){
                result = currentOperation.value
                currentOperation.value = eval(lastOperation.value + result);
                lastOperation.value = lastOperation.value + result + "=";
            }
           
            if(operator == "x²"){
                result = currentOperation.value
                lastOperation.value = ("(" + result + ")" + "²");
                currentOperation.value = (parseInt(result)*parseInt(result));
            }
            if(operator == "1/x"){
                lastOperation.value = ("1/" + currentOperation.value);
                currentOperation.value = (1/parseInt(currentOperation.value));
            }
            if(operator == "√x"){
                lastOperation.value = ("√" + currentOperation.value);
                currentOperation.value = Math.sqrt(parseInt(currentOperation.value));
            }
        })
    });
}

getEvent();
