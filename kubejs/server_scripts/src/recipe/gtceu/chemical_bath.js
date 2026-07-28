ServerEvents.recipes(e => {
    e.recipes.gtceu.chemical_bath().itemInputs('gtceu:diamond_plate').inputFluids(Fluid.of('minecraft:lava', 75)).itemOutputs('gtceu:caminite_brick_plate').duration(1.5 * 20).EUt(6)
    e.recipes.gtceu.chemical_bath().itemInputs('gtceu:crushed_diamond_ore').inputFluids(Fluid.of('oritong:glimmer', 200)).outputFluids(Fluid.of('gtceu:diamond_ore_leachate', 250)).chancedOutput('mekanism:sawdust', 4000, 0).EUt(32 * 1.5).duration(20 * 5)
    e.recipes.gtceu.chemical_bath().itemInputs('gtceu:aluminium_dust').inputFluids(Fluid.of('gtceu:pink_glimmer', 80)).itemOutputs('gtceu:rutile_dust').EUt(GTValues.VA[GTValues.HV]*0.8).duration(0.8*20)
})
