let num1="";
let num2="";
let op;
let final=0;
let calculating=1;
let operatorPressedBefore=0;

let display= document.querySelector('.display')
display.textContent="Enter number: "
function add(a,b){
    return a+b;
}

function clearScreen() {
    display.textContent="Enter number: ";
    num1="";
    num2="";
    final=0;
}

function multiply(a,b){
    return a*b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,op){
    let ans;
    switch(op){
        case '+':
            ans=add(a,b);
            break;
        case '-':
            ans=subtract(a,b);
            break;
        case '*':
            ans=multiply(a,b)
            break;
        case '/':
            if(!b){
                window.alert("Can\'t divide by 0");
                return null;
            }
            ans=divide(a,b)
            break;
    }

    return ans;
}

function isOperator(a) {
    return (a=='+')||(a=='-')||(a=='*')||(a=='/')||(a=='=')
    
}

function keyPressed(a) {
    if(isOperator(a)){
        if((a=='=')||(num2!='')){
            num2=num2-0;
            console.log(a)
            final=operate(num1,num2,op)
            if(!final){
                clearScreen();
                return;
            }
            //console.log(final)
            display.textContent=final;
            num1=final;
            num2='';
            if(a=='='){
                final=0;
                calculating=0;
            }
            else{
                op=a;
                display.textContent+=op
            }
            //console.log(calculating);
        }
        else{
            num1=num1-0;
            op=a;
        }
    }
    else{
        if(typeof num1 === 'string'){
            num1+=a;
        }
        else{
            num2+=a;
        }
    }
    
}


let num=Array.from(document.querySelectorAll('.numbers button'))
num.forEach((item)=>{
    item.addEventListener('click',()=>{
        //window.alert("hi")
        let a=item.getAttribute('value');
        if(display.textContent=="Enter number: "){
            display.textContent=a;
        }
        else{
            if(calculating==0){
                console.log(calculating);
                clearScreen();
                calculating=1;
                display.textContent="";
            }
            display.textContent+=a;
        }
        keyPressed(a);
    })
});

let operator=Array.from(document.querySelectorAll('.operators button'))
operator.forEach((item)=>{
    item.addEventListener('click',()=>{
        //window.alert("hi")
        let a=item.getAttribute('value');
        if(a=='clr'){
            clearScreen();
        }
        else{
            if(display.textContent=="Enter number: "){
                display.textContent=a;
            }
            else{
                if (calculating==0) {
                    calculating=1;
                }
                
                display.textContent+=a;
            }
            
            
            keyPressed(a);
        }
        
        
    })
});


