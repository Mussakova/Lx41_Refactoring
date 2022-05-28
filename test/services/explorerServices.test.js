const explorerService = require("../../lib/services/explorerSevice")
const reader = require("../../lib/utils/reader")
const explorers = reader.readJsonFile("explorers.json")

describe('Test para explorerService',()=>{
    test('1. Filtrar explorers por mission', ()=>{
        const explorersInNode = explorerService.filterByMission(explorers, "node")
        // const validationExplorerTrick = explorersInNode.forEach(element => {
        //     fizzbuzzService.applyValidationInExplorer(element)
        // })
            expect(explorersInNode[1].mission).toBe('node')
        }),
    test('2. Obtener la cantidad de explorers por mission ', ()=>{
        const explorersInNode = explorerService.filterByMission(explorers, 'node')
        expect(explorersInNode.length).toBe(10)
    }),
    test('3. Obtener Usernames de Explorers por mission a la que pertenecen', ()=>{
        const explorersInNode = explorerService.filterByMission(explorers, 'node')
        const explorersInJava = explorerService.filterByMission(explorers, 'java' )
        
            expect().toBe()
        })
})