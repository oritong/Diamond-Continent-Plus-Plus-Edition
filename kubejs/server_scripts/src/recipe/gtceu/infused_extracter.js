let recipe_infused_extracter = [
    ['gtceu:enriched_redstone', 'mekanism:enriched_redstone'],
    ['gtceu:enriched_diamond', 'mekanism:enriched_diamond']
]

ServerEvents.recipes(e => {
    recipe_infused_extracter.forEach(([o, i]) => {
        e.recipes.gtceu.infused_extracter().itemInputs(i).outputFluids(Fluid.of(o, 80)).EUt(8).duration(20 * 8)
    })
})
