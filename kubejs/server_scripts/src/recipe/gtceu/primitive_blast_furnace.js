ServerEvents.recipes(e => {
    e.recipes.gtceu.primitive_blast_furnace().itemInputs('gtceu:wrought_iron_ingot', 'embers:ember_shard').itemOutputs('mekanism:ingot_steel').chancedOutput('gtceu:tiny_glowstone_dust', 2000, 0).duration(20 * 75)
    e.recipes.gtceu.primitive_blast_furnace().itemInputs('6x gtceu:wrought_iron_ingot', 'embers:ember_crystal').itemOutputs('6x mekanism:ingot_steel', 'gtceu:small_glowstone_dust').duration(20 * 180)
})
