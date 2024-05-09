import fs from 'fs';

import { currentIndexes } from "../data/currentIndex";
import { ParamIndex } from "../data/constants/paramIndex.enum";
export const getCurrentIndex=(index_type:ParamIndex)=>{
    let value;
    switch (index_type) {
        case ParamIndex.FACT:
            value=currentIndexes.fact_index;
            break;
        case ParamIndex.PHOTO:
            value = currentIndexes.photo_index ;
            break;
        case ParamIndex.QUOTE:
            value = currentIndexes.quote_index ;
            break;
        case ParamIndex.RIDDLE:
            value = currentIndexes.riddle_index ;
            break;
        case ParamIndex.WORD:
            value = currentIndexes.word_index ;
            break;
        default:
            throw new Error("Invalid ParamIndex");
    }
    updateIndex(index_type)
    return value
}
const updateIndex=(index_type:ParamIndex)=>{
    switch (index_type) {
        case ParamIndex.FACT:
            currentIndexes.fact_index+=1;
            break;
        case ParamIndex.PHOTO:
            currentIndexes.photo_index+=1 ;
            break;
        case ParamIndex.QUOTE:
            currentIndexes.quote_index+=1 ;
            break;
        case ParamIndex.RIDDLE:
            currentIndexes.riddle_index +=1;
            break;
        case ParamIndex.WORD:
            currentIndexes.word_index +=1;
            break;
        default:
            throw new Error("Invalid ParamIndex");
    }
    overideIndexFile()
}

const overideIndexFile=()=>{
    const jsonData = JSON.stringify(currentIndexes, null, 2);
    const content= `export const currentIndexes=${jsonData}`
    fs.writeFileSync('src/data/currentIndex.ts', content);
}