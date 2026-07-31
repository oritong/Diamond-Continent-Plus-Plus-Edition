let recipe_enrichment_chamber = [
    ['mekanism:enriched_redstone', 'minecraft:redstone'],
    ['mekanism:enriched_diamond', 'mekanism:dust_diamond'],
    ['mekanism:enriched_refined_obsidian', 'mekanism:dust_refined_obsidian']
]

ServerEvents.recipes(e => {
    recipe_enrichment_chamber.forEach(([o, i]) => {
        e.recipes.gtceu.enrichment_chamber().itemInputs(i).itemOutputs(o).inputFluids(Fluid.of('oritong:glimmer', 160)).EUt(8).duration(20 * 12)
    })
})