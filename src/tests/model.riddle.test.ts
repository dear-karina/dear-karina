import { Riddle } from "../model/riddle.model";

describe('testing riddle model', ()=>{
    test('should convert jsonString to attributes correctly', ()=>{
        const jsonResponse= `[
            {
              "title": "Age 25 Man",
              "question": "A man was born in 1984 and died in 1964.He was 25 years old before his death. How is this possible?",
              "answer": "1984 and 1964 are room Numbers! not years"
            }
          ]`
        const riddle= Riddle.fromJson( jsonResponse)
        expect (riddle.id === 0)
        expect (riddle.title === "Age 25 Man")
        expect (riddle.question === "A man was born in 1984 and died in 1964.He was 25 years old before his death. How is this possible?")
        expect (riddle.answer === "1984 and 1964 are room Numbers! not years")
    })
})