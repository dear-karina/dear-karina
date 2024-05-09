import { Fact } from "../../models/fact.model"
import { getCurrentIndex } from "../../ultils/interactWithCurrentIndex"
import { marineFacts } from "../alternatives/marineFacts.alternative.data"
import { ParamIndex } from "../constants/paramIndex.enum"

export const get_fact=()=>{
    return get_from_alternatives()
}

const get_from_alternatives=()=>{
    const index= getCurrentIndex(ParamIndex.FACT)
    return Fact.fromObject(marineFacts[index])
}