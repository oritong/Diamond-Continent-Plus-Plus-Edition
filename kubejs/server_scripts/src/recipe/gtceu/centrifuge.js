ServerEvents.recipes(e => {
    e.recipes.gtceu.centrifuge().itemInputs('11x gtceu:lazurite_dust').itemOutputs('2x gtceu:cobalt_dust', 'gtceu:gallium_dust', '3x gtceu:sapphire_dust').duration(20 * 10).EUt(8 * 1.5)
    e.recipes.gtceu.centrifuge().inputFluids(Fluid.of('gtceu:diamond_ore_leachate', 800)).EUt(12).duration(20 * 10).chancedOutput('gtceu:manganese_dust', 2000, 1000).chancedOutput('gtceu:phosphorus_dust', 1000, 1500).chancedOutput('gtceu:platinum_raw_dust', 200, 150).outputFluids(Fluid.of('water', 544))
})
