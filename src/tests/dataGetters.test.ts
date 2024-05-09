import dotenv from 'dotenv';
dotenv.config();

import { get_fact } from "../data/data_getters/fact.getter";
import { get_quote } from "../data/data_getters/quote.getter";
import { get_word } from '../data/data_getters/word.getter';
import { get_riddle } from '../data/data_getters/riddle.getter';
import { inspirationalQuotes } from '../data/alternatives/inspirationalQuotes.alternative.data';
import { get_photos } from '../data/data_getters/photo.getter';
import { plavePhotos } from '../data/alternatives/plavePhotos.alternative.data';
import { funRiddles } from '../data/alternatives/funRiddles.alternative.data';
import { get_weather } from '../data/data_getters/weather.getter';
describe('testing data getters', ()=>{
    test('should return alternative[0] fact', ()=>{
        const fact = get_fact()
        expect (fact.title).toBe("They are dark")
    })
    test('should return api quote', async ()=>{
        const quote = await get_quote()
        expect (quote.quote).toBeDefined
        const isContainedInAlternatives= inspirationalQuotes.some((item)=> item.quote===quote.quote)
        expect (isContainedInAlternatives).toBe(false)
    })
    test('should return alternative[0] word', async ()=>{
        const word = get_word()
        expect (word.word).toBe('serendipity')
    })
    test('should return api riddle', async ()=>{
        const riddle = await get_riddle()
        expect (riddle.title).toBeDefined
        const isContainedInAlternatives= funRiddles.some((item)=> item.title===riddle.title)
        expect (isContainedInAlternatives).toBe(false)
    })
    test('should return api photos', async ()=>{
        const photos = await get_photos(4)
        console.log(photos)
        expect (photos.length).toBe(4)
        const isContainedInAlternatives= photos.every((item)=> plavePhotos.includes(item))
        expect (isContainedInAlternatives).toBe(false)
    })
    test.only('should return api weather', async ()=>{
        const weather = await get_weather()
        console.log(weather)
        expect (weather).not.toBe(null)
    })
})