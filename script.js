//click events
const buttons=document.querySelectorAll('button');
const display=document.querySelector(".display");
buttons.forEach((button)=>{
    button.addEventListener("click",Calculate);

})

function Calculate(event){
const clickedvalue=event.target.value;
if(clickedvalue==="="){
    if(display.value!==""){
        display.value = eval(display.value);
    }
}
else if(clickedvalue==="c"){
    display.value="";

}
else{
    display.value+=clickedvalue;
}

}
//keypress events
document.addEventListener("keypress",function(event){
    
    let pk=event.key;
    if(pk=="1"||pk=="2"||pk=="3"||pk=="4"||pk=="5"||pk=="6"||pk=="7"||pk=="8"||pk=="9"||
    pk=="0"||pk=="+"||pk=="-"||pk=="*"||pk=="/"){
        display.value+=pk;
        
    }
    else if(pk=="="||pk=="Enter"){

        if(display.value!=""){
            try{display.value=eval(display.value)
            }
            catch{
                alert("please enter valid input")
            }
        }
    }
    else if(pk=="c"){
        display.value="";
    }
    else{
        alert('please enter only numbers')
    }
})