'use strict';

function renderSerie(serieArr) {
    listSerieElem.innerHTML = '';
     for (let serie of serieArr){
       
           if (serie.show.image !== null){
               listSerieElem.innerHTML += `<li id=${serie.show.id} class="listElem"><div class="container"><p class="titleSerie">${serie.show.name}</p><img class="spaceImg" src= ${serie.show.image.medium} alt="serie" title= "img Serie"></div></li>` 
           }else{
           listSerieElem.innerHTML += `<li id="${serie.show.id}"  class="listElem"><div class="container"><p class="titleSerie">${serie.show.name}</p><img class="spaceImg" src= ${imageDefault} alt="serie" title="default img serie"></div></li>`    
       };
       
       addLiListener();     
       }
   }