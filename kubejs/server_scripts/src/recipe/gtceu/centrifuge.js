//离心机
ServerEvents.recipes(e => {
    e.recipes.gtceu.centrifuge().itemInputs('11x gtceu:lazurite_dust').itemOutputs('5x gtceu:cobalt_dust', '2x gtceu:gallium_dust', '4x gtceu:sapphire_dust').duration(20 * 10).EUt(8 * 1.5)
    e.recipes.gtceu.centrifuge().inputFluids(Fluid.of('gtceu:diamond_ore_leachate', 800)).EUt(12).duration(20 * 10).chancedOutput('gtceu:manganese_dust', 2000, 1000).chancedOutput('gtceu:phosphorus_dust', 1000, 1500).chancedOutput('gtceu:platinum_raw_dust', 200, 150).outputFluids(Fluid.of('water', 544))
    e.recipes.gtceu.centrifuge().itemInputs('14x gtceu:cinnabar_dust').outputFluids(Fluid.of('gtceu:mercury', 7000)).itemOutputs('7x minecraft:redstone', '6x gtceu:sulfur_dust', '4x gtceu:realgar_dust').duration(17.4*20).EUt(30)
    e.recipes.gtceu.centrifuge().itemInputs('3x gtceu:gelled_toluene').inputFluids(Fluid.of('industrialforegoing:latex', 1200)).outputFluids(Fluid.of('gtceu:glue', 1600)).duration(7.8*20).EUt(12)
})
