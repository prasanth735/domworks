function displayNumber(event){

    val= event.target.value//*
    
    let operators=["+","-","*","/","."] 

    currentExpLastChar=result.value.slice(-1)

    if (operators.includes(currentExpLastChar) && operators.includes(val)){
        result.value=result.value.slice(0,-1)+val// textbox.value="12"*
    }

    else{
        
        result.value+=val
    }

}



function  clearBox(){ 

    result.value=""
}




function evalExpr(){

    let currentExp=result.value

    let output=eval(currentExp)

    result.value=output
}




function backSpace(){

    let val=result.value.slice(0,-1)

    result.value=val
}



 