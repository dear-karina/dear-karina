import dotenv from 'dotenv';
import { get_fact } from '../data/data_getters/fact.getter';
import {transfer_fact, transfer_photo, transfer_quote, transfer_riddle, transfer_word} from '../ultils/transferToMDSyntax.ultils'
import {write_to_file} from '../ultils/writeFile.ultils'
import { get_quote } from '../data/data_getters/quote.getter';
import { get_word } from '../data/data_getters/word.getter';
import { get_riddle } from '../data/data_getters/riddle.getter';
import { get_photos } from '../data/data_getters/photo.getter';
dotenv.config();

describe('testing writing md file',  ()=>{
    test('write fact and quote', async ()=>{
        const fact = get_fact()
        const quote= await get_quote()
        const word = get_word()
        const riddle= await get_riddle()
        const photo = await get_photos(1)
        const _md = `##### 🐬 Every day, on behalf of Yejunie, I deliver a story about the marine.\n${transfer_fact(fact)}\n##### 🦙 Every day, on behalf of our Noah, I share an interesting quote.\n${transfer_quote(quote)}\n##### 🦌 Every day, on behalf of dear Bamby-nie, I share a beautiful word with meaning.\n${transfer_word(word)}\n##### 🐺 Every day, on behalf of Silver-ho, I offer a riddle.\n${transfer_riddle(riddle)}\n\n##### 🐈‍⬛ OKAYY!! Lastly, on behalf of Haminie, I share a photo you may like to see.\n${transfer_photo(photo[0])}\n`;

        await write_to_file(_md, 'test.md')
    })
})
