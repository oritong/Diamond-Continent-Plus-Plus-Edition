//精密组装
ServerEvents.recipes(e => {
    e.recipes.gtceu.precision_assembly().itemInputs('2x gtceu:tungsten_carbide_frame', '2x gtceu:laminated_glass', '8x gtceu:beryllium_plate', '14x gtceu:tiny_ender_eye_dust').itemOutputs('6x ifeu:empty_nether_star').inputFluids(Fluid.of('gtceu:blaze', 576), Fluid.of('gtceu:uranium_235', 72)).EUt(GTValues.VA[GTValues.EV] * 0.55).duration(3.25 * 20)
})