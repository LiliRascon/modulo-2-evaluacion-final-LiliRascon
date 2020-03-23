'use strict';

function addLiListener(){
    const liList = document.querySelectorAll('.listElem');
    for (let li of liList){
        li.addEventListener('click', selectSerie);
       
    }
}