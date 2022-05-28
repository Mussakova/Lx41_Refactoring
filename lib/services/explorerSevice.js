class explorerService{
    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer)=> explorer.mission === mission)
        return explorerByMission
    }
    
    static getAmountOfExplorersByMission(explorers, mission){
        const amountExplorersByMission = explorers.filter((explorer)=> explorer.mission === mission)
        return amountExplorersByMission.length
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const amountExplorersByMission = explorers.filter((explorer)=> explorer.mission === mission)
        const explorersUsernamesByMission = amountExplorersByMission.map((explorer)=> explorer.githubUsername)
        return explorersUsernamesByMission
    }
}

module.exports = explorerService