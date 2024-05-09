import { Word } from "../../models/word.model"
import { getCurrentIndex } from "../../ultils/interactWithCurrentIndex"
import { beautifulWords } from "../alternatives/beautifulWords.alternative.data"
import { ParamIndex } from "../constants/paramIndex.enum"
export const get_word=()=>{
    return get_from_alternatives()
}

const get_from_alternatives=()=>{

    const index= getCurrentIndex(ParamIndex.WORD)
    return Word.fromObject(beautifulWords[index])
}