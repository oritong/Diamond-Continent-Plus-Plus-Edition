ServerEvents.recipes(e => {
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('oritong:latex', 200), Fluid.of('water', 500)).itemInputs('minecraft:clay_ball').outputFluids(Fluid.of('gtceu:rubber', 288)).EUt(4).duration(6 * 20).circuit(3)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('oritong:latex', 350), Fluid.of('water', 1000)).itemInputs('3x minecraft:clay_ball', 'gtceu:sulfur_dust').outputFluids(Fluid.of('gtceu:rubber', 1728)).EUt(10).duration(8 * 20)
    e.recipes.gtceu.large_chemical_reactor().inputFluids(Fluid.of('oritong:latex', 350), Fluid.of('water', 1000)).itemInputs('3x minecraft:clay_ball', 'gtceu:sulfur_dust').outputFluids(Fluid.of('gtceu:rubber', 1728)).EUt(10).duration(8 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:calcium_hydroxide_dust').inputFluids(Fluid.of('gtceu:formaldehyde', 8000)).itemOutputs('2x minecraft:sugar', 'tgears:crushed_scorchia').outputFluids(Fluid.of('gtceu:methanol', 1000), Fluid.of('gtceu:formic_acid', 1000)).EUt(120).duration(4*20)
})
