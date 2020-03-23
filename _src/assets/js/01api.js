'use strict';

function getInfo() {

    const urlBase = 'http://api.tvmaze.com/search/shows?q=' + seriesInput.value;
    fetch(urlBase)
    .then(response => response.json())
    .then(data => {
    series = data;
    console.log (series);  
    renderSerie(series);    
    });  
}