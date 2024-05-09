import { ParamIndex } from "../data/constants/paramIndex.enum"
import { currentIndexes } from "../data/currentIndex"
import { getCurrentIndex } from "../ultils/interactWithCurrentIndex"

describe('test updating indexes', ()=>{
    test("get fact index", ()=>{
        const index = getCurrentIndex(ParamIndex.FACT)
        expect (index).toBe(0)
        expect(currentIndexes.fact_index).toBe(1)
    })
})