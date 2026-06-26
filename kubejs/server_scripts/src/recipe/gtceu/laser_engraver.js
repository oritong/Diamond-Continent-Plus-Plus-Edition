ServerEvents.recipes(e => {
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer', '#forge:lenses/red').itemOutputs('gtceu:ilc_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer', '#forge:lenses/green').itemOutputs('gtceu:ram_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer', '#forge:lenses/blue').itemOutputs('gtceu:ulpic_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM)
})
