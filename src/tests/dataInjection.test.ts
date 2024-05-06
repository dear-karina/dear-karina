import dotenv from 'dotenv';
import { get_fact } from '../data/data_getters/fact.getter';
import {transfer_fact, transfer_quote} from '../ultils/transferToMDSyntax.ultils'
import {write_to_file} from '../ultils/writeFile.ultils'
import { get_quote } from '../data/data_getters/quote.getter';
dotenv.config();

describe('testing writing md file',  ()=>{
    test('write fact and quote', async ()=>{
        const fact = get_fact()
        const quote= await get_quote()
        const _md = `##### 🐬 Every day, on behalf of Yejunie, I deliver a story about the marine.\n${transfer_fact(fact)}\n##### 🦙 Every day, on behalf of our Noah, I share an interesting quote.\n${transfer_quote(quote)}\n`;

        await write_to_file(_md, 'test_write_fact.md')
    })
})
