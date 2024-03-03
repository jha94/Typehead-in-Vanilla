import {searchResult} from './Utils.js'
const input = document.getElementById('input');
const searchResults = document.getElementById('searchResults');
input.addEventListener('input', ({target:{value}})=>{
    if(value){
    searchResult(value).then(results=>{
        renderSearchResult(results)
    })
}
})

function renderSearchResult (results) {
    searchResults.innerHTML= results.map(value=>`<div class='results' style="margin-top:5px; cursor:pointer">${value}</div>`).join('');
    selectResult()
}

function selectResult(){
    const results = document.getElementsByClassName('results');
    for(let val of results){
        val.addEventListener('click', ()=>{
            input.value = val.innerHTML;
            searchResults.innerHTML = ''
        })
    }
}

