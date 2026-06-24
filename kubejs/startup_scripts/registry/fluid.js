StartupEvents.registry('fluid', e => {
    e.create('oritong:glimmer').thinTexture(0xddffbf).viscosity(100).luminosity(4).tag('oritong:glimmer')
})
GTCEuStartupEvents.registry('gtceu:material', e => {
    e.create('enriched_redstone').liquid().color(0xe60000)
    e.create('diamond_ore_leachate').liquid().color(0xb7fff7)
    e.create('enriched_diamond').liquid().color(0x00f0ff)
    e.create('sodium_hydroxide_solution').liquid().color(0x80f0f0)
})
