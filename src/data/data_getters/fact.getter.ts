import { Fact } from "../../models/fact.model"
import { marineFacts } from "../alternatives/marineFacts.alternative.data"

export const get_fact=()=>{
    return get_from_alternatives(0)
}

const get_from_alternatives=(index: number)=>{
    return Fact.fromObject(marineFacts[index])
}