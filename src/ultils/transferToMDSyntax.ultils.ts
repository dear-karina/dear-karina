import { Fact } from "../models/fact.model"
import { Photo } from "../models/photo.model"
import { Quote } from "../models/quote.model"
import { Riddle } from "../models/riddle.model"
import { Word } from "../models/word.model"

export const transfer_fact=(fact: Fact): string=>{
    return `>${fact.description}`
}

export const transfer_quote=(quote: Quote): string=>{
    return `>${quote.quote}`
}
export const transfer_word=(word: Word): string=>{
    return `> ${word.word}\n>\n> > (${word.form})  \n> > ${word.meaning}.`
}
export const transfer_riddle=(riddle: Riddle): string=>{
    return `> ${riddle.question}\n\n<details close>\n\n<summary>🕺🏻 Reveal the answer here 🕺🏻</summary>\n\n${riddle.answer}\n</details>`
}
export const transfer_photo=(photo: Photo): string=>{
    return `<img src="${photo.url}" width="1050px">\n<p align="center">${photo.description}</p>`
}
