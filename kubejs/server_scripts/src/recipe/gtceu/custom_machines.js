ServerEvents.recipes(e => {
    e.recipes.gtceu.glimmer_collector().circuit(1).posY(-63, -12).outputFluids(Fluid.of('oritong:glimmer', 30)).EUt(8).duration(30)
    let recipe_enrichment_chamber = [
        ['mekanism:enriched_redstone', 'minecraft:redstone']
    ]
    recipe_enrichment_chamber.forEach(([o, i]) => {
        e.recipes.gtceu.enrichment_chamber().itemInputs(i).itemOutputs(o).inputFluids(Fluid.of('oritong:glimmer', 160)).EUt(8).duration(20 * 8)
    })
    let recipe_infused_extracter = [
        ['gtceu:enriched_redstone', 'mekanism:enriched_redstone']
    ]
    recipe_infused_extracter.forEach(([o, i]) => {
        e.recipes.gtceu.infused_extracter().itemInputs(i).outputFluids(Fluid.of(o, 80)).EUt(8).duration(20 * 8)
    })
    e.recipes.gtceu.enrichment_infuser().itemInputs('tconstruct:obsidian_pane').itemOutputs('mekanism:basic_control_circuit').inputFluids(Fluid.of('gtceu:enriched_redstone', 120)).EUt(16).duration(20 * 8)
    e.recipes.gtceu.enrichment_infuser().itemInputs('copper_ingot').itemOutputs('mekanism:alloy_infused').inputFluids(Fluid.of('gtceu:enriched_redstone', 30)).EUt(16).duration(20 * 8)
})
