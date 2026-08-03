//溶解罐
ServerEvents.recipes(e=>{
    e.recipes.gtceu.dissolving_tank().itemInputs('16x gtceu:aluminium_dust').inputFluids(Fluid.of('gtceu:indium_concentrate', 4000)).itemOutputs('gtceu:indium_dust', '16x gtceu:aluminium_sulfite_dust').outputFluids(Fluid.of('gtceu:lead_zinc_solution', 4000)).EUt(600).duration(10*20)
})