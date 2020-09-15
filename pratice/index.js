const hi = document.querySelector("#hi");

const CLICKED_CLASS = "clicked";

function handleClick() {
    hi.classList.toggle(CLICKED_CLASS);
    //     const hasClass = hi.classList.contains(CLICKED_CLASS);

    //     if(!hasClass){
    //         hi.classList.add(CLICKED_CLASS);
    //     } else{
    //         hi.classList.remove(CLICKED_CLASS);
    //     }
}

function init() {
    hi.addEventListener("click", handleClick);
}

init();

