import { Word } from "../../models/word.model"
import { beautifulWords } from "../alternatives/beautifulWords.alternative.data"
export const get_word=()=>{
    return get_from_alternatives(0)
}

const get_from_alternatives=(index: number)=>{
    return Word.fromObject(beautifulWords[index])
}