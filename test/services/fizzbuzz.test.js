const fizzbuzzService = require("../../lib/services/fizzbuzzService");
const explorers = require("../../explorers.json")

describe('Testing para FizzbuzzService',()=>{
    test('1. Crear propiedad objeto.trick = "Fizz" si, parameter%3 === 0', ()=>{
        const filter3 = explorers.filter((explorer)=> explorer.score %3 === 0)
        const filter3Modified = fizzbuzzService.applyValidationInExplorer(filter3[0])

        expect(filter3Modified).toMatch(/FIZZ/)
    }),
    test('2. Crear propiedad objeto.trick = "Buzz" si, parameter%3 === 0', ()=>{
        const filter5 = explorers.filter((explorer)=> explorer.score %5 === 0)
        const filter3Modified = fizzbuzzService.applyValidationInExplorer(filter5[0])

        expect(filter3Modified).toMatch(/BUZZ/)
        }),
        test('3.. Crear propiedad objeto.trick = "FizzBUzz" si parameter%3 && parameter%5 === 0', ()=>{
            const filter3y5 = explorers.filter((explorer)=> explorer.score %3 ===0 && explorer.score %5 ===0)
            const filter3Modified = fizzbuzzService.applyValidationInExplorer(filter3y5[0])
    
            expect(filter3Modified).toMatch(/BUZZ/)
            })
})