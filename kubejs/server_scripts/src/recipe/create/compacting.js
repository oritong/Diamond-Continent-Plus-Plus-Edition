ServerEvents.recipes(e => {
    e.recipes.create.compacting(['tconstruct:plate_cast', 'gtceu:stone_plate'], ['2x gtceu:stone_dust', 'tconstruct:plate_cast'])
    e.recipes.create.compacting(['tconstruct:plate_cast', 'gtceu:treated_wood_plate'], ['gtceu:treated_wood_dust', 'tconstruct:plate_cast'], 200)
    e.recipes.create.compacting([Fluid.of('gtceu:oil_medium', 800), Fluid.of('gtceu:oil_light', 400), Item.of('sand').withChance('0.1')], '#forge:dusts/oilsands').heated()
})
