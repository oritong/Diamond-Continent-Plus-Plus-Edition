ServerEvents.recipes(e => {
    e.recipes.gtceu.fluid_solidifier().itemInputs('gtceu:iron_round').inputFluids(Fluid.of('gtceu:polyethylene', 576)).itemOutputs('oritong:super_glue_package').EUt(30).duration(5 * 20)
    e.recipes.gtceu.fluid_solidifier().itemInputs('minecraft:barrel').inputFluids(Fluid.of('oritong:latex', 200)).itemOutputs('gtceu:wood_drum').EUt(6).duration(2 * 20)
})