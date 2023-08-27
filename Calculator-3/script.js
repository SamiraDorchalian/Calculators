const buttonEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result"); 


for (let i = 0; i < buttonEl.length; i++){
    buttonEl[i].addEventListener("click", () =>{
        const buttonValue = buttonEl[i].textContent;
        
        if(buttonValue === "C"){
            clearResult();
        } else if (buttonValue === "="){
            calculatorResult();
        } else{
            appendValue(buttonValue);
        }
    });
}
function clearResult(){
    inputFieldEl.value = "";
}
function calculatorResult(){
    inputFieldEl.value = eval(inputFieldEl.value);
}
function appendValue(buttonValue){
    inputFieldEl.value += buttonValue;
}