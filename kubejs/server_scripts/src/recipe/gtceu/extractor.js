ServerEvents.recipes(e => {
    e.recipes.gtceu.extractor().itemInputs('kubejs:wood_block').itemOutputs('mekanism:sawdust').outputFluids(Fluid.of('oritong:latex', 2000)).duration(20 * 18).EUt(3)
    e.recipes.gtceu.extractor().itemInputs('mekanism:ingot_steel').outputFluids(Fluid.of('gtceu:steel', 144)).duration(20 * 5.6).EUt(32)
    e.recipes.gtceu.extractor().itemInputs('mekanism:ingot_steel').outputFluids(Fluid.of('gtceu:steel', 144)).duration(20 * 5.6).EUt(32)
    e.recipes.gtceu.extractor().itemInputs('gtceu:steel_nugget').outputFluids(Fluid.of('gtceu:steel', 16)).duration(20 * 0.6).EUt(32)
    e.recipes.gtceu.extractor().itemInputs('gtceu:steel_block').outputFluids(Fluid.of('gtceu:steel', 1296)).duration(20 * 25.6 * 2).EUt(32)
})
