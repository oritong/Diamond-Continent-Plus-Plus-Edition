ServerEvents.recipes(e => {
    e.recipes.gtceu.large_gas_collector().notConsumable('kubejs:overworld_data').circuit(1).outputFluids(Fluid.of('gtceu:air', 5000000)).EUt(GTValues.VA[GTValues.EV] * 0.6).duration(100 * 20)
    e.recipes.gtceu.large_gas_collector().notConsumable('kubejs:nether_data').circuit(1).outputFluids(Fluid.of('gtceu:air', 4250000)).EUt(GTValues.VA[GTValues.EV] * 0.8).duration(120 * 20)
    e.recipes.gtceu.large_gas_collector().notConsumable('kubejs:end_data').circuit(1).outputFluids(Fluid.of('gtceu:air', 3000000)).EUt(GTValues.VA[GTValues.EV]).duration(150 * 20)
    e.recipes.gtceu.large_gas_collector().notConsumable('kubejs:overworld_data').notConsumable('gtceu:vacuum_freezer').outputFluids(Fluid.of('gtceu:liquid_air', 5000000)).EUt(GTValues.VA[GTValues.EV]).duration(100 * 20)
    e.recipes.gtceu.large_gas_collector().notConsumable('kubejs:nether_data').notConsumable('gtceu:vacuum_freezer').outputFluids(Fluid.of('gtceu:liquid_nether_air', 4250000)).EUt(GTValues.VA[GTValues.EV] * 1.1).duration(120 * 20)
    e.recipes.gtceu.large_gas_collector().notConsumable('kubejs:end_data').notConsumable('gtceu:vacuum_freezer').outputFluids(Fluid.of('gtceu:liquid_ender_air', 3000000)).EUt(GTValues.VA[GTValues.EV] * 1.2).duration(150 * 20)
})