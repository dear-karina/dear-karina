import { Fact } from "../models/fact.model"
import { Quote } from "../models/quote.model"

export const transfer_fact=(fact: Fact): string=>{
    return `>${fact.description}`
}

export const transfer_quote=(quote: Quote): string=>{
    return `>${quote.quote}`
}
