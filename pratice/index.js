function handleClick(){
    if(some.style.color !== "blue"){
        some.style.color = "blue";
    }else{
        some.style.color = "red";
    }
}

some.addEventListener("mouseenter", handleClick);
//javascript DOM event MDN!!