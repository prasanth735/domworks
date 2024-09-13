function tempConverter(event){
    
    let temp=+box.value
    let op=event.target.value

    let result=0

    if (op=="celsius"){     
        result=(temp-32)*5/9
        }
    else if (op=="Fahrenheit"){
        result=temp*9/5+32
    }
    document.querySelector("#root").innerHTML=result
}