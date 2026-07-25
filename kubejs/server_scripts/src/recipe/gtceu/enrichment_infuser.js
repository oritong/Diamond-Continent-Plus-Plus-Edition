ServerEvents.recipes(e => {
    e.recipes.gtceu.enrichment_infuser().itemInputs('tconstruct:obsidian_pane').itemOutputs('mekanism:basic_control_circuit').inputFluids(Fluid.of('gtceu:enriched_redstone', 120)).EUt(16).duration(20 * 8)
    e.recipes.gtceu.enrichment_infuser().itemInputs('copper_ingot').itemOutputs('mekanism:alloy_infused').inputFluids(Fluid.of('gtceu:enriched_redstone', 30)).EUt(16).duration(20 * 8)
})