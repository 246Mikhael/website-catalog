import { deleteFleshMessage } from "./modules/functions.js";

let categoryWrap = document.querySelectorAll('.category-wrap');


for (let elem of categoryWrap){
    
    elem.addEventListener( 'mouseover', function() {
        elem.classList.add('increased-category-wrap');
    });
    elem.addEventListener( 'mouseout', function() {
        elem.classList.remove('increased-category-wrap');
    });
}

deleteFleshMessage();


