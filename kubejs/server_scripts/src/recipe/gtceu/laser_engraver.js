ServerEvents.recipes(e => {
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer').itemOutputs('gtceu:ilc_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM).notConsumable('#forge:lenses/red')
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer').itemOutputs('gtceu:ram_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM).notConsumable('#forge:lenses/green')
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer').itemOutputs('gtceu:ulpic_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM).notConsumable('#forge:lenses/blue')
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer').itemOutputs('gtceu:cpu_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM).notConsumable('#forge:lenses/light_blue')
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer').itemOutputs('gtceu:lpic_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM).notConsumable('#forge:lenses/orange')
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer').itemOutputs('gtceu:simple_soc_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM).notConsumable('gtceu:cyan_glass_lens')
})