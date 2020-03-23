'use strict';



function setLocalStorage(){
    localStorage.setItem('serieInfo', JSON.stringify(selectedSeries))
}

function readLocalStorage(){
    let localInfo = JSON.parse(localStorage.getItem('serieInfo'))
    if (localInfo !== null){
        return localInfo
    }else{
        return localInfo = []
    }
}


