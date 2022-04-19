
let keypad = document.querySelector(".keypad");

let display = document.querySelector(".display");

let operators = ["+","-","*","/","%"];


let filter = x => {

    let current = display.innerText;
    let lastChr = current[current.length-1];

    
    
    if(current.length >= 7){
        return false;
    }
   

    if(current == "0" && x !="."){
        clearLast()
    }

    if(operators.includes(x) && operators.includes(lastChr)){

        return false;
    }

    return true;
}

let showInDisplay = x =>{

    if(filter(x)){

        display.innerText += x;
    }

}

let calc = _ =>{  
    

    if(!operators.includes(display.innerText[display.innerText.length - 1])){
        display.innerText = eval(display.innerText)
    }

}

let clearAll = _ => display.innerText = "";

let clearLast = _ => display.innerText = display.innerText.substring(0,display.innerText.length -1);

 keypad.addEventListener("click",_=>{
    if(display.innerText.length>7){
        display.style.fontSize = 15+"px";
    }else if(display.innerText.length>5){
        display.style.fontSize = 60+"px";
    }
})

