function changeColor(event){

    let div=document.querySelector("#circle")
    
    let color=event.target.value

    if (color=="red"){
        div.style.backgroundColor="red"
    }

    else if (color=="green"){
        div.style.backgroundColor="green"
    }

    else if (color=="blue"){
        div.style.backgroundColor="blue"
    }
}