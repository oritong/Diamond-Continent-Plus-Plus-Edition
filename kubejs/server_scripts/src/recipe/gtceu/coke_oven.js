ServerEvents.recipes(e => {
    e.recipes.gtceu.coke_oven().itemInputs('embers:ember_grit').itemOutputs('minecraft:glowstone_dust').outputFluids(Fluid.of('gtceu:creosote', 250)).duration(20 * 30)
})
