ServerEvents.recipes(e => {
    e.recipes.gtceu.mixer('oritong:ana_2nd_ender_dust').EUt(28).duration(6 * 20).itemInputs('6x gtceu:lazurite_dust', '4x gtceu:silver_dust', '2x mekanism:dust_diamond', 'gtceu:manasteel_dust').notConsumable('botania:ender_hand').itemOutputs('36x gtceu:ender_pearl_dust').circuit(5).inputFluids(Fluid.of('gtceu:nitrogen', 2000))
    e.recipes.gtceu.mixer().EUt(GTValues.VA[GTValues.MV]).duration(20*1).circuit(3).itemInputs('6x gtceu:stone_dust', '2x gtceu:wrought_iron_dust', 'embers:ember_grit').itemOutputs('10x gtceu:andesite_alloy_dust')
    e.recipes.gtceu.mixer().EUt(6).duration(20).itemInputs('minecraft:paper', 'mekanism:dust_diamond').itemOutputs('createaddition:diamond_grit_sandpaper')
    e.recipes.gtceu.mixer().EUt(96).duration(20*4).itemInputs('3x gtceu:sodium_hydroxide_dust').inputFluids(Fluid.of('minecraft:water', 1000)).outputFluids(Fluid.of('gtceu:sodium_hydroxide_solution', 1000))
})
