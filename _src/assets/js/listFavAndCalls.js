'use strict';

const seriesInput = document.querySelector('#serieName');
const btnElem = document.querySelector('#btn');
const listSerieElem = document.querySelector('.listSerie');
const listFavorite = document.querySelector('.listFavorite1'); 
const textSerieExistElem = document.querySelector('.textSerieExist');
const imageDefault = 'https://via.placeholder.com/210x295/434750/FFFFFF/?text=TV';
const selectedSeries = readLocalStorage();


let series = null;



function selectSerie (event) {
    let touchFav = event.currentTarget;
    touchFav.classList.add('backFav');
    const selected = event.currentTarget.id;
    const object = getSerieObject(selected);
   
    if (selectedSeries.indexOf(selected) === -1) {
        selectedSeries.push(object.show);
        setLocalStorage();
        renderFavourites(selectedSeries);
    } else {
        alert('Esa serie ya está en favoritos')
    }
    
}

function getSerieObject (idSerie) {
    for(let serie of series) {
        if(serie.show.id === parseInt(idSerie)) {
          return serie;
        }
    }
}

function renderFavourites(selectedSeries) {
    listFavorite.innerHTML = '';
    for(let fav of selectedSeries) {
        if(fav.image !== null) {
            listFavorite.innerHTML += `<li id=${fav.id} class="listElem"><div class="container"><img class="sizeImg" src=${fav.image.medium} title="imagen de tu serie favorita"></div><span class="titleSerie">${fav.name}</span><button class="btnX" type='button' title="elimina de tus favoritos">x</button></li>`
        } else {
            listFavorite.innerHTML += `<li id=${fav.id} class="listElem"><div class="container"><img class="sizeImg" src=${imageDefault} title="imagen de tu serie favorita por defecto"></div><span class="titleSerie">${fav.name}</span><button class="btnX" type='button' title="elimina de tus favoritos">x</button></li>`
        }
    }
}



renderFavourites(selectedSeries);
btnElem.addEventListener('click', getInfo);









//console.log('>> Ready :)');
