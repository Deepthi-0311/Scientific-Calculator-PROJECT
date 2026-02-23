let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{

        let value = btn.innerText;

        if(value==="C")
            display.value="";

        else if(value==="⌫")
            display.value = display.value.slice(0,-1);

        else if(value==="=")
            calculate();

        else if(value==="√")
            display.value = Math.sqrt(eval(display.value));

        else if(value==="x²")
            display.value = Math.pow(eval(display.value),2);

        else if(value==="x³")
            display.value = Math.pow(eval(display.value),3);

        else if(value==="π")
            display.value += Math.PI.toFixed(8);

        else if(value==="log")
            display.value = Math.log10(eval(display.value)).toFixed(6);

        else if(value==="log²"){
            let v = Math.log10(eval(display.value));
            display.value = (v*v).toFixed(6);
        }

        else if(value==="sin")
            display.value = Math.sin(toRad(eval(display.value))).toFixed(6);

        else if(value==="cos")
            display.value = Math.cos(toRad(eval(display.value))).toFixed(6);

        else if(value==="tan")
            display.value = Math.tan(toRad(eval(display.value))).toFixed(6);

        else
            display.value += value;
    });
});

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

function toRad(d){
    return d*Math.PI/180;
}

/* Keyboard Support */
document.addEventListener("keydown",function(e){

if("0123456789+-*/.%".includes(e.key))
    display.value += e.key;

else if(e.key==="Enter")
    calculate();

else if(e.key==="Backspace")
    display.value = display.value.slice(0,-1);

else if(e.key==="Escape")
    display.value="";
});