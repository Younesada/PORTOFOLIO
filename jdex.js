const menu = document.getElementById("menu");
const actions =document.getElementById("action");
 
menu.addEventListener("click", ()=>{
    hundleMenu();
    });
function hundleMenu(){
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}