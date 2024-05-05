import dotenv from 'dotenv';
dotenv.config();

import { get_fact } from "../data/data_getters/fact.getter";
import { get_quote } from "../data/data_getters/quote.getter";
import { Fact } from "../models/fact.model";
import { inspirationalQuotes } from '../data/alternatives/inspirationalQuotes.alternative.data';

describe('testing data getters', ()=>{
    test.skip('should return alternative[0] fact', ()=>{
        const fact = get_fact()
        expect (fact.id).toBe(0)
    })
    test('should return api quote', async ()=>{
        const quote = await get_quote()
        console.log(quote)
        const isContainedInAlternatives= inspirationalQuotes.some((item)=> item.quote===quote.quote)
        expect (isContainedInAlternatives).toBe(false)
    })
})