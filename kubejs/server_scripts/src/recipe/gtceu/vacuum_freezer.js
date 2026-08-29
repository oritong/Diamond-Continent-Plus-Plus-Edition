//真空冷冻
ServerEvents.recipes(e => {
    e.recipes.gtceu.vacuum_freezer().itemInputs('4x gtceu:frostproof_machine_casing').inputFluids(Fluid.of('gtceu:ice', 8000), Fluid.of('gtceu:terbium', 288)).itemOutputs('4x kubejs:cold_ice_casing').duration(60 * 20).EUt(GTValues.VA[GTValues.IV] * 0.35).cleanroom(CleanroomType.CLEANROOM)
})