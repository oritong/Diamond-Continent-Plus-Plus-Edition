ServerEvents.recipes(e => {
    e.recipes.gtceu.enrichment_infuser().itemInputs('tconstruct:obsidian_pane').itemOutputs('mekanism:basic_control_circuit').inputFluids(Fluid.of('gtceu:enriched_redstone', 120)).EUt(16).duration(20 * 12)
    e.recipes.gtceu.enrichment_infuser().itemInputs('copper_ingot').itemOutputs('mekanism:alloy_infused').inputFluids(Fluid.of('gtceu:enriched_redstone', 30)).EUt(16).duration(20 * 12)
    e.recipes.gtceu.enrichment_infuser().itemInputs('mekanism:alloy_infused').itemOutputs('mekanism:alloy_reinforced').inputFluids(Fluid.of('gtceu:enriched_diamond', 30)).EUt(16).duration(20 * 12)
    e.recipes.gtceu.enrichment_infuser().itemInputs('mekanism:alloy_reinforced').itemOutputs('mekanism:alloy_atomic').inputFluids(Fluid.of('gtceu:enriched_obsidian', 30)).EUt(16).duration(20 * 12)
    e.recipes.gtceu.enrichment_infuser().itemInputs('gtceu:obsidian_dust').itemOutputs('mekanism:dust_refined_obsidian').inputFluids(Fluid.of('gtceu:enriched_diamond', 40)).EUt(16).duration(20 * 12)
    e.recipes.gtceu.enrichment_infuser().itemInputs('gtceu:dense_steel_plate').itemOutputs('oritong:diamond_upgrade_smithing_template').inputFluids(Fluid.of('gtceu:enriched_diamond', 540)).EUt(16).duration(20 * 12)
})