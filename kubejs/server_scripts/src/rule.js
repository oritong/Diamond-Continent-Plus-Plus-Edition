ServerEvents.loaded(e=>{
    e.server.gameRules.set('keepInventory', true)
    e.server.gameRules.set('doMobSpawning', false)
    e.server.gameRules.set('doWeatherCycle', false)
    e.server.gameRules.set('doDaylightCycle', false)
})