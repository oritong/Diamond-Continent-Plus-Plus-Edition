//离心机
ServerEvents.recipes(e => {
    e.recipes.gtceu.centrifuge().itemInputs('11x gtceu:lazurite_dust').itemOutputs('5x gtceu:cobalt_dust', '2x gtceu:gallium_dust', '4x gtceu:sapphire_dust').duration(20 * 10).EUt(8 * 1.5)
    e.recipes.gtceu.centrifuge().inputFluids(Fluid.of('gtceu:diamond_ore_leachate', 800)).EUt(12).duration(20 * 10).chancedOutput('gtceu:manganese_dust', 4000, 1000).chancedOutput('gtceu:phosphorus_dust', 2000, 1500).chancedOutput('gtceu:chromium_dust', 1800, 1200).chancedOutput('gtceu:vanadium_magnetite_dust', 2400, 800).chancedOutput('gtceu:platinum_raw_dust', 1000, 500).outputFluids(Fluid.of('water', 544))
    e.recipes.gtceu.centrifuge().itemInputs('14x gtceu:cinnabar_dust').outputFluids(Fluid.of('gtceu:mercury', 7000)).itemOutputs('24x minecraft:redstone', '9x gtceu:ruby_dust', '6x gtceu:sulfur_dust', '4x gtceu:realgar_dust').duration(17.4*20).EUt(30)
    e.recipes.gtceu.centrifuge().itemInputs('3x gtceu:gelled_toluene').inputFluids(Fluid.of('oritong:latex', 1200)).outputFluids(Fluid.of('gtceu:glue', 1600)).duration(3.25*20).EUt(32*4*4)
    e.recipes.gtceu.centrifuge().itemInputs('4x gtceu:quartzite_dust').itemOutputs('2x mekanism:dust_quartz', 'gtceu:mica_dust', 'gtceu:biotite_dust').duration(3*20).EUt(48)
    e.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__realgar').itemInputs('2x gtceu:realgar_dust').itemOutputs("gtceu:arsenic_dust", "gtceu:sulfur_dust", "gtceu:small_antimony_dust").duration(7.95*20).EUt(30)
    e.recipes.gtceu.centrifuge().itemInputs('8x mekanism:dust_diamond').itemOutputs('3x gtceu:graphite_dust').duration(38*20).EUt(15)
})
