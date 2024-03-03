import {FRUITS} from './Data.js';
export const searchResult = (keyword) =>{
    const filteredResults = filterResult(keyword);
    return new Promise((resolve)=>{
        return setTimeout(()=>{
            resolve(filteredResults)
        }, 1000)
    })
}

const filterResult = (keyword) => {
    const results = [];
    FRUITS.forEach(value=>{
        if(value.toLocaleLowerCase().includes(keyword)){
            results.push(value)
        }
    })
    return results
}