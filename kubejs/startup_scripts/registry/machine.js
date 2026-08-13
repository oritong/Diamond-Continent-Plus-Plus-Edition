const Tags = Java.loadClass('dev.latvian.mods.kubejs.util.Tags')
const $ParallelLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.modifier.ParallelLogic')
const $ContentModifier = Java.loadClass('com.gregtechceu.gtceu.api.recipe.content.ContentModifier')
const $CoilWorkableElectricMultiblockMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine')
const $GTRecipeModifiers = Java.loadClass('com.gregtechceu.gtceu.common.data.GTRecipeModifiers')
const $ModifierFunction = Java.loadClass('com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction')
const $IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO')
const $ArrayList = Java.loadClass('java.util.ArrayList')
const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const $OritoChatFormatting = Java.loadClass('net.minecraft.ChatFormatting')
const $CoilMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine')
let $FluidIngredient = null
let $FluidRecipeCapability = null
let $BlazeFluid = null
let $IceFluid = null
function getCoilEutMultiplier(machine) {
    if (!(machine instanceof $CoilMachine)) return 1.0
    return Math.max(0, 1.0 - machine.getCoilTier() * 0.1)
}
function CoilEnergyOnly(machine, recipe) {
    const multiplier = getCoilEutMultiplier(machine)
    return $ModifierFunction.builder()
        .eutMultiplier(multiplier)
        .build()
}
function LargeChemicalPlantCoilBonus(machine, recipe) {
    const multiplier = getCoilEutMultiplier(machine)
    return $ModifierFunction.builder()
        .eutMultiplier(multiplier)
        .durationMultiplier(1.5 * multiplier)
        .build()
}
function platdurSGateRunningSpeed(machine) {
    const coilTier = machine.getCoilTier()
    return coilTier === 0 ? 0.75 : (coilTier + 1) / 2
}
function PlatdurSGatePyrolyseOverclock(machine, recipe) {
    return $GTRecipeModifiers.pyrolyseOvenOverclock(machine, recipe)
}
function petrochemicalFactoryRunningSpeed(machine) {
    const coilTier = machine.getCoilTier()
    return coilTier === 0 ? 0.75 : (coilTier + 1) / 2
}
function PetrochemicalFactoryPyrolyseOverclock(machine, recipe) {
    return $GTRecipeModifiers.pyrolyseOvenOverclock(machine, recipe)
}
function CoilTemperatureParallel(machine, recipe) {
    if (!(machine instanceof $CoilWorkableElectricMultiblockMachine)) {
        return $ModifierFunction.NULL
    }

    // 每 900K 翻倍一次：parallel = 2 ^ floor(coilTemp / 900)
    let temp = machine.getCoilType().getCoilTemperature()
    let maxParallel = Math.min(2147483647, Math.floor(Math.pow(2, Math.floor(temp / 900))))

    let parallels = $ParallelLogic.getParallelAmount(machine, recipe, maxParallel)
    if (parallels == 0) return $ModifierFunction.NULL
    if (parallels == 1) return $ModifierFunction.IDENTITY

    return $ModifierFunction.builder()
        .modifyAllContents($ContentModifier.multiplier(parallels))
        .eutMultiplier(parallels)
        .parallels(parallels)
        .build()
}
function FixedParallel64(machine, recipe) {
    let parallels = $ParallelLogic.getParallelAmount(machine, recipe, 64)

    if (parallels == 0) return ModifierFunction.NULL
    if (parallels == 1) return ModifierFunction.IDENTITY

    return ModifierFunction.builder()
        .modifyAllContents($ContentModifier.multiplier(parallels))
        .eutMultiplier(parallels)
        .parallels(parallels)
        .build()
}
function blazeBlastFurnaceTemperature(machine) {
    return machine.getCoilType().getCoilTemperature() +
        100 * Math.max(0, machine.getTier() - GTValues.MV)
}
function BlazeBlastFurnaceTemperature(machine, recipe) {
    if (!(machine instanceof $CoilMachine)) return $ModifierFunction.NULL

    const temperature = blazeBlastFurnaceTemperature(machine)
    if (!recipe.data.contains('ebf_temp') || recipe.data.getInt('ebf_temp') > temperature) {
        return $ModifierFunction.NULL
    }
    return $ModifierFunction.IDENTITY
}
function BlazeBlastFurnaceParallel(machine, recipe) {
    const parallels = $ParallelLogic.getParallelAmount(machine, recipe, 256)
    if (parallels === 0) return $ModifierFunction.NULL

    return $ModifierFunction.builder()
        .modifyAllContents($ContentModifier.multiplier(parallels))
        .eutMultiplier(parallels)
        .parallels(parallels)
        .build()
}
function BlazeBlastFurnaceEfficiency(machine, recipe) {
    return $ModifierFunction.builder()
        .durationMultiplier(0.7)
        .eutMultiplier(0.85)
        .build()
}
function ColdIceFreezerParallel(machine, recipe) {
    const parallels = $ParallelLogic.getParallelAmount(machine, recipe, 256)
    if (parallels === 0) return $ModifierFunction.NULL

    return $ModifierFunction.builder()
        .modifyAllContents($ContentModifier.multiplier(parallels))
        .eutMultiplier(parallels)
        .parallels(parallels)
        .build()
}
function ColdIceFreezerEfficiency(machine, recipe) {
    return $ModifierFunction.builder()
        .durationMultiplier(0.7)
        .eutMultiplier(0.85)
        .build()
}
function blazeBlastFurnaceFuelPerSecond(machine) {
    const power = GTValues.VA[machine.getTier()]
    return Math.round(18 * Math.sqrt(power / 120))
}
function blazeBlastSmelterFuelPerSecond(machine) {
    const power = GTValues.VA[machine.getTier()]
    return Math.round(36 * Math.sqrt(power / 120))
}
function coldIceFreezerFuelPerSecond(machine) {
    const power = GTValues.VA[machine.getTier()]
    return Math.round(72 * Math.sqrt(power / 120))
}
function initializeBlazeFuelApi() {
    if ($FluidRecipeCapability !== null) return

    $FluidIngredient = Java.loadClass('com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient')
    $FluidRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.FluidRecipeCapability')
    $BlazeFluid = $ForgeRegistries.FLUIDS.getValue(new $ResourceLocation('gtceu', 'blaze'))
}
function blazeFuelRequest(amount) {
    initializeBlazeFuelApi()
    const request = new $ArrayList()
    request.add($FluidIngredient.of($BlazeFluid, amount))
    return request
}
function canDrainBlazeFuel(machine, recipe, amount) {
    let remaining = blazeFuelRequest(amount)
    const handlers = machine.getCapabilitiesFlat($IO.IN, $FluidRecipeCapability.CAP)
    for (let i = 0; i < handlers.size(); i++) {
        remaining = handlers.get(i).handleRecipe($IO.IN, recipe, remaining, true)
        if (remaining === null || remaining.isEmpty()) return true
    }
    return false
}
function drainBlazeFuel(machine, recipe, amount) {
    let remaining = blazeFuelRequest(amount)
    const handlers = machine.getCapabilitiesFlat($IO.IN, $FluidRecipeCapability.CAP)
    for (let i = 0; i < handlers.size(); i++) {
        remaining = handlers.get(i).handleRecipe($IO.IN, recipe, remaining, false)
        if (remaining === null || remaining.isEmpty()) return true
    }
    return false
}
function BlazeBlastFurnaceWorking(machine) {
    if (!(machine instanceof $CoilMachine)) return false
    if (machine.getProgress() % 20 !== 0) return true

    const amount = blazeBlastFurnaceFuelPerSecond(machine)
    const recipe = machine.getRecipeLogic().getLastRecipe()
    return canDrainBlazeFuel(machine, recipe, amount) && drainBlazeFuel(machine, recipe, amount)
}
function BlazeBlastSmelterWorking(machine) {
    if (!(machine instanceof $CoilMachine)) return false
    if (machine.getProgress() % 20 !== 0) return true

    const amount = blazeBlastSmelterFuelPerSecond(machine)
    const recipe = machine.getRecipeLogic().getLastRecipe()
    return canDrainBlazeFuel(machine, recipe, amount) && drainBlazeFuel(machine, recipe, amount)
}
function initializeIceFuelApi() {
    if ($FluidRecipeCapability === null) {
        $FluidIngredient = Java.loadClass('com.gregtechceu.gtceu.api.recipe.ingredient.FluidIngredient')
        $FluidRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.FluidRecipeCapability')
    }
    if ($IceFluid === null) {
        $IceFluid = $ForgeRegistries.FLUIDS.getValue(new $ResourceLocation('gtceu', 'ice'))
    }
}
function iceFuelRequest(amount) {
    initializeIceFuelApi()
    const request = new $ArrayList()
    request.add($FluidIngredient.of($IceFluid, amount))
    return request
}
function canDrainIceFuel(machine, recipe, amount) {
    let remaining = iceFuelRequest(amount)
    const handlers = machine.getCapabilitiesFlat($IO.IN, $FluidRecipeCapability.CAP)
    for (let i = 0; i < handlers.size(); i++) {
        remaining = handlers.get(i).handleRecipe($IO.IN, recipe, remaining, true)
        if (remaining === null || remaining.isEmpty()) return true
    }
    return false
}
function drainIceFuel(machine, recipe, amount) {
    let remaining = iceFuelRequest(amount)
    const handlers = machine.getCapabilitiesFlat($IO.IN, $FluidRecipeCapability.CAP)
    for (let i = 0; i < handlers.size(); i++) {
        remaining = handlers.get(i).handleRecipe($IO.IN, recipe, remaining, false)
        if (remaining === null || remaining.isEmpty()) return true
    }
    return false
}
function ColdIceFreezerWorking(machine) {
    if (machine.getProgress() % 20 !== 0) return true

    const amount = coldIceFreezerFuelPerSecond(machine)
    const recipe = machine.getRecipeLogic().getLastRecipe()
    return canDrainIceFuel(machine, recipe, amount) && drainIceFuel(machine, recipe, amount)
}
const DTPF_AISLES = [
    [" ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", " ddd   ddd   d     d   ddd   ddd ", "         d   d     d   d         ", "         d   d     d   d         ", "                                 ", "                                 ", "                                 ", "         d   d     d   d         ", "         d   d     d   d         ", "         d   d     d   d         ", "                                 "],
    ["dbbbd dbbbd    d d    dbbbd dbbbd", " CCC   CCC             CCC   CCC ", " CCC   CCC             CCC   CCC ", " CCC   CCC             CCC   CCC ", "dbbbd dbbbd           dbbbd dbbbd", "  d     d               d     d  ", "  d     d               d     d  ", "                                 ", "  d     d               d     d  ", "  d     d               d     d  ", "dbbbd dbbbd           dbbbd dbbbd", " CCC   CCC             CCC   CCC ", " CCC   CCC             CCC   CCC ", " CCC   CCC   d     d   CCC   CCC ", "dbbbd dbbdCCCb     bCCCdbbd dbbbd", "         bCCCb     bCCCb         ", "         bCCCb     bCCCb         ", "         d   d     d   d         ", "                                 ", "         d   d     d   d         ", "         bCCCb     bCCCb         ", "         bCCCb     bCCCb         ", "         bCCCb     bCCCb         ", "         d   d     d   d         "],
    ["dbbbd dbbbdddddsdsdddddbbbd dbbbd", " CbC   CbC             CbC   CbC ", " CbC   CbC             CbC   CbC ", " CbC   CbC             CbC   CbC ", "dbbbd dbbbd           dbbbd dbbbd", " ddd   ddd             ddd   ddd ", " ddd   ddd             ddd   ddd ", "  s     s               s     s  ", " ddd   ddd             ddd   ddd ", " ddd   ddd             ddd   ddd ", "dbbbd dbbbd           dbbbd dbbbd", " CbC   CbC             CbC   CbC ", " CbC   CbC             CbC   CbC ", " CbC   CbC   d     d   CbC   CbC ", "dbbbd dbbdCCCb     bCCCdbbd dbbbd", "  d     sbbbbbddsddbbbbbs     d  ", "  d      bCCCb     bCCCb      d  ", "  d      d   d     d   d      d  ", "   s                         s   ", "   s     d   d     d   d     s   ", "    ss   bCCCb     bCCCb   ss    ", "      dddbbbbbddsddbbbbbddd      ", "         bCCCb     bCCCb         ", "         d   d     d   d         "],
    ["dbbbdddbbbd    ded    dbbbdddbbbd", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC             CCCCCCCCC ", "dbbbdddbbbd           dbbbdddbbbd", "  d     d               d     d  ", "  d     d               d     d  ", "                                 ", "  d     d               d     d  ", "  d     d               d     d  ", "dbbbdddbbbd           dbbbdddbbbd", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC   d     d   CCCCCCCCC ", "dbbbdddbbdCCCb     bCCCdbbdddbbbd", "         bCCCb     bCCCb         ", "         bCCCb     bCCCb         ", "         dCCCd     dCCCd         ", "  s      dCCCd     dCCCd      s  ", "  s      dCCCd     dCCCd      s  ", "         bCCCb     bCCCb         ", "    ss   bCCCb     bCCCb   ss    ", "         bCCCb     bCCCb         ", "         d   d     d   d         "],
    [" ddd   ddd     ded     ddd   ddd ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " ddd   dd    d     d    dd   ddd ", "         d   d     d   d         ", "         dCCCd     dCCCd         ", "                                 ", "                                 ", "                                 ", "  s      dCCCd     dCCCd      s  ", "   s     d   d     d   d     s   ", "         d   d     d   d         ", "                                 "],
    ["   d   d       ded       d   d   ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   d   d                 d   d   ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "   d   d                 d   d   ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   d   d                 d   d   ", "                                 ", "         dCCCd     dCCCd         ", "                                 ", "                                 ", "                                 ", "  s      dCCCd     dCCCd      s  ", "   s                         s   ", "                                 ", "                                 "],
    [" ddd   ddd     ded     ddd   ddd ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " ddd   dd    d     d    dd   ddd ", "         d   d     d   d         ", "         dCCCd     dCCCd         ", "                                 ", "                                 ", "                                 ", "         dCCCd     dCCCd         ", "  d      d   d     d   d      d  ", "         d   d     d   d         ", "                                 "],
    ["dbbbdddbbbd    ded    dbbbdddbbbd", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC             CCCCCCCCC ", "dbbbdddbbbd           dbbbdddbbbd", "  d     d               d     d  ", "  d     d               d     d  ", "                                 ", "  d     d               d     d  ", "  d     d               d     d  ", "dbbbdddbbbd           dbbbdddbbbd", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC   d     d   CCCCCCCCC ", "dbbbdddbbdCCCb     bCCCdbbdddbbbd", "         bCCCb     bCCCb         ", "         bCCCb     bCCCb         ", "         dCCCd     dCCCd         ", "         dCCCd     dCCCd         ", "         dCCCd     dCCCd         ", "         bCCCb     bCCCb         ", "  d      bCCCb     bCCCb      d  ", "         bCCCb     bCCCb         ", "         d   d     d   d         "],
    ["dbbbd dbbbdddddsdsdddddbbbd dbbbd", " CbC   CbC             CbC   CbC ", " CbC   CbC             CbC   CbC ", " CbC   CbC             CbC   CbC ", "dbbbd dbbbd           dbbbd dbbbd", " ddd   ddd             ddd   ddd ", " ddd   ddd             ddd   ddd ", "  s     s               s     s  ", " ddd   ddd             ddd   ddd ", " ddd   ddd             ddd   ddd ", "dbbbd dbbbd           dbbbd dbbbd", " CbC   CbC             CbC   CbC ", " CbC   CbC             CbC   CbC ", " CbC   CbC   d     d   CbC   CbC ", "dbbbd dbbdCCCb     bCCCdbbd dbbbd", "  s     sbbbbbddsddbbbbbs     s  ", "         bCCCb     bCCCb         ", "         d   d     d   d         ", "                                 ", "         d   d     d   d         ", "         bCCCb     bCCCb         ", "  d     sbbbbbddsddbbbbbs     d  ", "         bCCCb     bCCCb         ", "         d   d     d   d         "],
    ["dbbbd dbbbd    ded    dbbbd dbbbd", " CCC   CCC             CCC   CCC ", " CCC   CCC             CCC   CCC ", " CCC   CCC             CCC   CCC ", "dbbbd dbbbd           dbbbd dbbbd", "  d     d               d     d  ", "  d     d               d     d  ", "                                 ", "  d     d               d     d  ", "  d     d               d     d  ", "dbbbd dbbbd           dbbbd dbbbd", " CCC   CCC             CCC   CCC ", " CCC   CCC             CCC   CCC ", " CCC   CCC   d     d   CCC   CCC ", "dddd   dddCCCb     bCCCddd   dddd", "dbbbd dbbdCCCb     bCCCdbbd dbbbd", "dbbbdddbbdCCCb     bCCCdbbdddbbbd", " ddd   ddd   d     d   ddd   ddd ", "   d   d                 d   d   ", " ddd   ddd   d     d   ddd   ddd ", "dbbbdddbbdCCCb     bCCCdbbdddbbbd", "dbbbd dbbdCCCb     bCCCdbbd dbbbd", "dbbbd dbbdCCCb     bCCCdbbd dbbbd", " ddd   ddd   d     d   ddd   ddd "],
    [" ddd   ddd     ded     ddd   ddd ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", " CCC   CCC   d     d   CCC   CCC ", " CbC   CbC   d     d   CbC   CbC ", " CCCCCCCCC   d     d   CCCCCCCCC ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " CCCCCCCCC   d     d   CCCCCCCCC ", " CbC   CbC   d     d   CbC   CbC ", " CCC   CCC   d     d   CCC   CCC ", "                                 "],
    ["  d     d      ded      d     d  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " CCC   CCC             CCC   CCC ", " CbC   CbC             CbC   CbC ", " CCCCCCCCC             CCCCCCCCC ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " CCCCCCCCC             CCCCCCCCC ", " CbC   CbC             CbC   CbC ", " CCC   CCC             CCC   CCC ", "                                 "],
    ["  d     d      ded      d     d  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " CCC   CCC             CCC   CCC ", " CbC   CbC             CbC   CbC ", " CCCCCCCCC             CCCCCCCCC ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " CCCCCCCCC             CCCCCCCCC ", " CbC   CbC             CbC   CbC ", " CCC   CCC             CCC   CCC ", "                                 "],
    ["  d     d     dsdsd     d     d  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "dbbbd dbbbd           dbbbd dbbbd", "dbbbd dbbbd           dbbbd dbbbd", "dbbbdddbbbd           dbbbdddbbbd", " ddd   ddd             ddd   ddd ", "   d   d                 d   d   ", " ddd   ddd             ddd   ddd ", "dbbbdddbbbd           dbbbdddbbbd", "dbbbd dbbbd           dbbbd dbbbd", "dbbbd dbbbd           dbbbd dbbbd", " ddd   ddd             ddd   ddd "],
    ["  d     d    deeeeed    d     d  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "  d     d               d     d  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "  d     d               d     d  ", "                                 ", "                                 "],
    [" dsdddddsddddseedeesddddsdddddsd ", "                d                ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "  d     d               d     d  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "  d     d               d     d  ", "                                 ", "                                 "],
    ["  deeeeedeeeededddedeeeedeeeeed  ", "               ddd               ", "                a                ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "  s     s               s     s  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "  s     s               s     s  ", "                                 ", "                                 "],
    [" dsdddddsddddseedeesddddsdddddsd ", "                d                ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "  d     d               d     d  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "  d     d               d     d  ", "                                 ", "                                 "],
    ["  d     d    deeeeed    d     d  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "  d     d               d     d  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "  d     d               d     d  ", "                                 ", "                                 "],
    ["  d     d     dsdsd     d     d  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "dbbbd dbbbd           dbbbd dbbbd", "dbbbd dbbbd           dbbbd dbbbd", "dbbbdddbbbd           dbbbdddbbbd", " ddd   ddd             ddd   ddd ", "   d   d                 d   d   ", " ddd   ddd             ddd   ddd ", "dbbbdddbbbd           dbbbdddbbbd", "dbbbd dbbbd           dbbbd dbbbd", "dbbbd dbbbd           dbbbd dbbbd", " ddd   ddd             ddd   ddd "],
    ["  d     d      ded      d     d  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " CCC   CCC             CCC   CCC ", " CbC   CbC             CbC   CbC ", " CCCCCCCCC             CCCCCCCCC ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " CCCCCCCCC             CCCCCCCCC ", " CbC   CbC             CbC   CbC ", " CCC   CCC             CCC   CCC ", "                                 "],
    ["  d     d      ded      d     d  ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " CCC   CCC             CCC   CCC ", " CbC   CbC             CbC   CbC ", " CCCCCCCCC             CCCCCCCCC ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " CCCCCCCCC             CCCCCCCCC ", " CbC   CbC             CbC   CbC ", " CCC   CCC             CCC   CCC ", "                                 "],
    [" ddd   ddd     ded     ddd   ddd ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", " CCC   CCC   d     d   CCC   CCC ", " CbC   CbC   d     d   CbC   CbC ", " CCCCCCCCC   d     d   CCCCCCCCC ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " CCCCCCCCC   d     d   CCCCCCCCC ", " CbC   CbC   d     d   CbC   CbC ", " CCC   CCC   d     d   CCC   CCC ", "                                 "],
    ["dbbbd dbbbd    ded    dbbbd dbbbd", " CCC   CCC             CCC   CCC ", " CCC   CCC             CCC   CCC ", " CCC   CCC             CCC   CCC ", "dbbbd dbbbd           dbbbd dbbbd", "  d     d               d     d  ", "  d     d               d     d  ", "                                 ", "  d     d               d     d  ", "  d     d               d     d  ", "dbbbd dbbbd           dbbbd dbbbd", " CCC   CCC             CCC   CCC ", " CCC   CCC             CCC   CCC ", " CCC   CCC   d     d   CCC   CCC ", "dddd   dddCCCb     bCCCddd   dddd", "dbbbd dbbdCCCb     bCCCdbbd dbbbd", "dbbbdddbbdCCCb     bCCCdbbdddbbbd", " ddd   ddd   d     d   ddd   ddd ", "   d   d                 d   d   ", " ddd   ddd   d     d   ddd   ddd ", "dbbbdddbbdCCCb     bCCCdbbdddbbbd", "dbbbd dbbdCCCb     bCCCdbbd dbbbd", "dbbbd dbbdCCCb     bCCCdbbd dbbbd", " ddd   ddd   d     d   ddd   ddd "],
    ["dbbbd dbbbdddddsdsdddddbbbd dbbbd", " CbC   CbC             CbC   CbC ", " CbC   CbC             CbC   CbC ", " CbC   CbC             CbC   CbC ", "dbbbd dbbbd           dbbbd dbbbd", " ddd   ddd             ddd   ddd ", " ddd   ddd             ddd   ddd ", "  s     s               s     s  ", " ddd   ddd             ddd   ddd ", " ddd   ddd             ddd   ddd ", "dbbbd dbbbd           dbbbd dbbbd", " CbC   CbC             CbC   CbC ", " CbC   CbC             CbC   CbC ", " CbC   CbC   d     d   CbC   CbC ", "dbbbd dbbdCCCb     bCCCdbbd dbbbd", "  s     sbbbbbddsddbbbbbs     s  ", "         bCCCb     bCCCb         ", "         d   d     d   d         ", "                                 ", "         d   d     d   d         ", "         bCCCb     bCCCb         ", "  d     sbbbbbddsddbbbbbs     d  ", "         bCCCb     bCCCb         ", "         d   d     d   d         "],
    ["dbbbdddbbbd    ded    dbbbdddbbbd", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC             CCCCCCCCC ", "dbbbdddbbbd           dbbbdddbbbd", "  d     d               d     d  ", "  d     d               d     d  ", "                                 ", "  d     d               d     d  ", "  d     d               d     d  ", "dbbbdddbbbd           dbbbdddbbbd", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC   d     d   CCCCCCCCC ", "dbbbdddbbdCCCb     bCCCdbbdddbbbd", "         bCCCb     bCCCb         ", "         bCCCb     bCCCb         ", "         dCCCd     dCCCd         ", "         dCCCd     dCCCd         ", "         dCCCd     dCCCd         ", "         bCCCb     bCCCb         ", "  d      bCCCb     bCCCb      d  ", "         bCCCb     bCCCb         ", "         d   d     d   d         "],
    [" ddd   ddd     ded     ddd   ddd ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " ddd   dd    d     d    dd   ddd ", "         d   d     d   d         ", "         dCCCd     dCCCd         ", "                                 ", "                                 ", "                                 ", "         dCCCd     dCCCd         ", "  d      d   d     d   d      d  ", "         d   d     d   d         ", "                                 "],
    ["   d   d       ded       d   d   ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   d   d                 d   d   ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", "   d   d                 d   d   ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   d   d                 d   d   ", "                                 ", "         dCCCd     dCCCd         ", "                                 ", "                                 ", "                                 ", "  s      dCCCd     dCCCd      s  ", "   s                         s   ", "                                 ", "                                 "],
    [" ddd   ddd     ded     ddd   ddd ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "   C   C                 C   C   ", "   C   C                 C   C   ", "   C   C                 C   C   ", " ddd   dd    d     d    dd   ddd ", "         d   d     d   d         ", "         dCCCd     dCCCd         ", "                                 ", "                                 ", "                                 ", "  s      dCCCd     dCCCd      s  ", "   s     d   d     d   d     s   ", "         d   d     d   d         ", "                                 "],
    ["dbbbdddbbbd    ded    dbbbdddbbbd", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC             CCCCCCCCC ", "dbbbdddbbbd           dbbbdddbbbd", "  d     d               d     d  ", "  d     d               d     d  ", "                                 ", "  d     d               d     d  ", "  d     d               d     d  ", "dbbbdddbbbd           dbbbdddbbbd", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC             CCCCCCCCC ", " CCCCCCCCC   d     d   CCCCCCCCC ", "dbbbdddbbdCCCb     bCCCdbbdddbbbd", "         bCCCb     bCCCb         ", "         bCCCb     bCCCb         ", "         dCCCd     dCCCd         ", "  s      dCCCd     dCCCd      s  ", "  s      dCCCd     dCCCd      s  ", "         bCCCb     bCCCb         ", "    ss   bCCCb     bCCCb   ss    ", "         bCCCb     bCCCb         ", "         d   d     d   d         "],
    ["dbbbd dbbbdddddsdsdddddbbbd dbbbd", " CbC   CbC             CbC   CbC ", " CbC   CbC             CbC   CbC ", " CbC   CbC             CbC   CbC ", "dbbbd dbbbd           dbbbd dbbbd", " ddd   ddd             ddd   ddd ", " ddd   ddd             ddd   ddd ", "  s     s               s     s  ", " ddd   ddd             ddd   ddd ", " ddd   ddd             ddd   ddd ", "dbbbd dbbbd           dbbbd dbbbd", " CbC   CbC             CbC   CbC ", " CbC   CbC             CbC   CbC ", " CbC   CbC   d     d   CbC   CbC ", "dbbbd dbbdCCCb     bCCCdbbd dbbbd", "  d     sbbbbbddsddbbbbbs     d  ", "  d      bCCCb     bCCCb      d  ", "  d      d   d     d   d      d  ", "   s                         s   ", "   s     d   d     d   d     s   ", "    ss   bCCCb     bCCCb   ss    ", "      dddbbbbbddsddbbbbbddd      ", "         bCCCb     bCCCb         ", "         d   d     d   d         "],
    ["dbbbd dbbbd    d d    dbbbd dbbbd", " CCC   CCC             CCC   CCC ", " CCC   CCC             CCC   CCC ", " CCC   CCC             CCC   CCC ", "dbbbd dbbbd           dbbbd dbbbd", "  d     d               d     d  ", "  d     d               d     d  ", "                                 ", "  d     d               d     d  ", "  d     d               d     d  ", "dbbbd dbbbd           dbbbd dbbbd", " CCC   CCC             CCC   CCC ", " CCC   CCC             CCC   CCC ", " CCC   CCC   d     d   CCC   CCC ", "dbbbd dbbdCCCb     bCCCdbbd dbbbd", "         bCCCb     bCCCb         ", "         bCCCb     bCCCb         ", "         d   d     d   d         ", "                                 ", "         d   d     d   d         ", "         bCCCb     bCCCb         ", "         bCCCb     bCCCb         ", "         bCCCb     bCCCb         ", "         d   d     d   d         "],
    [" ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", "                                 ", "                                 ", " ddd   ddd             ddd   ddd ", "                                 ", "                                 ", "                                 ", " ddd   ddd   d     d   ddd   ddd ", "         d   d     d   d         ", "         d   d     d   d         ", "                                 ", "                                 ", "                                 ", "         d   d     d   d         ", "         d   d     d   d         ", "         d   d     d   d         ", "                                 "],
]

function addPatternAisles(pattern, aisles) {
    aisles.forEach(aisle => pattern.aisle(
        aisle[0], aisle[1], aisle[2], aisle[3], aisle[4], aisle[5],
        aisle[6], aisle[7], aisle[8], aisle[9], aisle[10], aisle[11],
        aisle[12], aisle[13], aisle[14], aisle[15], aisle[16], aisle[17],
        aisle[18], aisle[19], aisle[20], aisle[21], aisle[22], aisle[23]
    ))
    return pattern
}

//GTRecipeModifiers.MULTIPLERECIPE可以做跨配方
GTCEuStartupEvents.registry('gtceu:machine', e => {
    e.create('glimmer_collector', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('glimmer_collector')
                .workableTieredHullModel("gtceu:block/machines/fluid_solidifier")
        )
        .tankScalingFunction(tier => tier * 16000)
    e.create('enrichment_chamber', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('enrichment_chamber')
                .workableTieredHullModel("gtceu:block/machines/scanner")
        )
        .tankScalingFunction(tier => tier * 4000)
    e.create('infused_extracter', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('infused_extracter')
                .workableTieredHullModel("gtceu:block/machines/extractor")
        )
        .tankScalingFunction(tier => tier * 2000)
    e.create('enrichment_infuser', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('enrichment_infuser')
                .workableTieredHullModel("gtceu:block/machines/chemical_bath")
        )
        .tankScalingFunction(tier => tier * 4000)
    e.create('directional_void_miner', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('directional_void_miner')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAA", " C ", " C ", " C ", "   ", "   ", "   ")
            .aisle("ADA", "CDC", "CDC", "CDC", " C ", " C ", " C ")
            .aisle("ABA", " C ", " C ", " C ", "   ", "   ", "   ")

            .where('B', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks('gtceu:clean_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('D', Predicates.blocks('gtceu:clean_machine_casing'))
            .where('C', Predicates.blocks('gtceu:stainless_steel_frame'))
            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/large_miner')
    e.create("digester", "multiblock")
        .machine(holder => new $CoilMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("digester")
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, CoilEnergyOnly])
        .additionalDisplay((machine, components) => {
            if (machine instanceof $CoilMachine && machine.isFormed()) {
                const multiplier = getCoilEutMultiplier(machine)
                components.add(
                    Component.translatable(
                        'kubejs.multiblock.digester.current_eut_multiplier',
                        Component.literal(multiplier.toFixed(1) + 'x').darkPurple()
                    ).gray()
                )
            }
        })
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(" AAAAA ", " ABBBA ", "  AAA  ", "   H   ", "       ")
            .aisle("AACCCAA", "AD E DA", " DFEFD ", " DGFGD ", "  HHH  ")
            .aisle("ACCCCCA", "B     B", "AF   FA", " G   G ", " HH HH ")
            .aisle("ACCCCCA", "BE   EB", "AE   EA", "HF   FH", " H   H ")
            .aisle("ACCCCCA", "B     B", "AF   FA", " G   G ", " HH HH ")
            .aisle("AACCCAA", "AD E DA", " DFEFD ", " DGFGD ", "  HHH  ")
            .aisle(" AAKAA ", " ABBBA ", "  AAA  ", "   H   ", "       ")
            .where("K", Predicates.controller(Predicates.blocks(definition.get())))
            .where("A", Predicates.blocks('gtceu:robust_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            )
            .where("C", Predicates.blocks('gtceu:corrosion_proof_casing'))
            .where("B", Predicates.heatingCoils())
            .where("E", Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .where("D", Predicates.blocks('gtceu:inert_machine_casing'))
            .where("H", Predicates.blocks('gtceu:robust_machine_casing'))
            .where("F", Predicates.blocks('gtceu:watertight_casing'))
            .where("G", Predicates.blocks('gtceu:reaction_safe_mixing_casing'))
            .build()
        )
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_robust_tungstensteel", "gtceu:block/multiblock/distillation_tower")
    e.create("large_rock_breaker", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("rock_breaker")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK])
        .appearanceBlock(GCYMBlocks.CASING_SECURE_MACERATION)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAA", "AAAAA", "AAAAA", "AAAAA")
            .aisle("AAAAA", "ABBBA", "ADDDA", "AEEEA")
            .aisle("AAAAA", "F B F", "A D A", "A E A")
            .aisle("AAAAA", "ABCBA", "ADDDA", "AEEEA")
            .aisle("AAAAA", "AA AA", "AAAAA", "AAAAA")
            .where("C", Predicates.controller(Predicates.blocks(definition.get())))
            .where("A", Predicates.blocks(GCYMBlocks.CASING_SECURE_MACERATION.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where("B", Predicates.blocks('gtceu:titanium_pipe_casing'))
            .where("D", Predicates.blocks("gtceu:crushing_wheels"))
            .where("E", Predicates.blocks('gtceu:blue_steel_frame'))
            .where("F", Predicates.blocks('gtceu:tempered_glass'))
            .build()
        )
        .workableCasingModel("gtceu:block/casings/gcym/secure_maceration_casing", "gtceu:block/multiblock/fluid_drilling_rig")
    e.create("blaze_blast_furnace", "multiblock")
        .machine(holder => new $CoilMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType('electric_blast_furnace')
        .recipeModifiers([
            BlazeBlastFurnaceTemperature,
            BlazeBlastFurnaceParallel,
            GTRecipeModifiers.OC_PERFECT,
            BlazeBlastFurnaceEfficiency
        ])
        .beforeWorking((machine, recipe) =>
            canDrainBlazeFuel(machine, recipe, blazeBlastFurnaceFuelPerSecond(machine)))
        .onWorking(BlazeBlastFurnaceWorking)
        .additionalDisplay((machine, components) => {
            if (machine instanceof $CoilMachine && machine.isFormed()) {
                components.add(
                    Component.translatable(
                        'kubejs.multiblock.blaze_blast_furnace.heat_capacity',
                        Component.literal(String(blazeBlastFurnaceTemperature(machine)))
                            .withStyle($OritoChatFormatting.RED)
                    ).withStyle($OritoChatFormatting.GRAY)
                )
            }
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAA", "CDDDC", "CDDDC", "CDDDC", "CDDDC", "CDDDC", "AAAAA")
            .aisle("AAAAA", "D   D", "D   D", "D   D", "D   D", "D   D", "AAEAA")
            .aisle("AAAAA", "D   D", "D   D", "D   D", "D   D", "D   D", "AEAEA")
            .aisle("AAAAA", "D   D", "D   D", "D   D", "D   D", "D   D", "AAEAA")
            .aisle("AABAA", "CDDDC", "CDDDC", "CDDDC", "CDDDC", "CDDDC", "AAAAA")
            .where("B", Predicates.controller(Predicates.blocks(definition.get())))
            .where("A", Predicates.blocks('kubejs:blaze_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where("C", Predicates.blocks('gtceu:naquadah_alloy_frame'))
            .where('E', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(4))
            .where("D", Predicates.heatingCoils())
            .build()
        )
        .workableCasingModel("kubejs:block/blaze_casing", "gtceu:block/multiblock/blast_furnace")
    e.create("blaze_blast_smelter", "multiblock")
        .machine(holder => new $CoilMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType('alloy_blast_smelter')
        .recipeModifiers([
            BlazeBlastFurnaceTemperature,
            BlazeBlastFurnaceParallel,
            GTRecipeModifiers.OC_PERFECT,
            BlazeBlastFurnaceEfficiency
        ])
        .beforeWorking((machine, recipe) =>
            canDrainBlazeFuel(machine, recipe, blazeBlastSmelterFuelPerSecond(machine)))
        .onWorking(BlazeBlastSmelterWorking)
        .additionalDisplay((machine, components) => {
            if (machine instanceof $CoilMachine && machine.isFormed()) {
                components.add(
                    Component.translatable(
                        'kubejs.multiblock.blaze_blast_smelter.heat_capacity',
                        Component.literal(String(blazeBlastFurnaceTemperature(machine)))
                            .withStyle($OritoChatFormatting.RED)
                    ).withStyle($OritoChatFormatting.GRAY)
                )
            }
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAAAAAA", "B   C   B", "B   C   B", "B   C   B", "BCCCICCCB", "B   C   B", "B   C   B", "B   C   B", "AAAAAAAAA")
            .aisle("AAAAAAAAA", " EEEEEEE ", "         ", "    F    ", "C  F F  C", "    F    ", "         ", " EEEEEEE ", "AAAAAAAAA")
            .aisle("AAAAAAAAA", " E     E ", "    F    ", "   F F   ", "C FF FF C", "   F F   ", "    F    ", " E     E ", "AAAAAAAAA")
            .aisle("AAAAAAAAA", " E  F  E ", "   F F   ", "  F   F  ", "CFFFFFFFC", "  F   F  ", "   F F   ", " E  F  E ", "AAAAAAAAA")
            .aisle("AAAAAAAAA", "CCCF FCCC", "C F   F C", "CF     FC", "I  F F  I", "CF     FC", "C F   F C", "CCCF FCCC", "AAAAIAAAA")
            .aisle("AAAAAAAAA", " E  F  E ", "   F F   ", "  F   F  ", "CFFFFFFFC", "  F   F  ", "   F F   ", " E  F  E ", "AAAAAAAAA")
            .aisle("AAAAAAAAA", " E  C  E ", "    F    ", "   F F   ", "C FF FF C", "   F F   ", "    F    ", " E  C  E ", "AAAAAAAAA")
            .aisle("AAAAAAAAA", " EEECEEE ", "         ", "    F    ", "C  F F  C", "    F    ", "         ", " EEECEEE ", "AAAAAAAAA")
            .aisle("AAAAKAAAA", "B   C   B", "B   C   B", "B   C   B", "BCCCICCCB", "B   C   B", "B   C   B", "B   C   B", "AAAAAAAAA")
            .where("K", Predicates.controller(Predicates.blocks(definition.get())))
            .where("A", Predicates.blocks('kubejs:blaze_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where("F", Predicates.heatingCoils())
            .where("B", Predicates.blocks('gtceu:naquadah_alloy_frame'))
            .where('I', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(5))
            .where("C", Predicates.blocks('gtceu:heat_vent'))
            .where("E", Predicates.blocks('gtceu:atomic_casing'))
            .build()
        )
        .workableCasingModel("kubejs:block/blaze_casing", "gtceu:block/multiblock/blast_furnace")
    e.create("cold_ice_freezer", "multiblock")
        .rotationState(RotationState.ALL)
        .recipeType('vacuum_freezer')
        .recipeModifiers([
            ColdIceFreezerParallel,
            GTRecipeModifiers.OC_PERFECT,
            ColdIceFreezerEfficiency
        ])
        .beforeWorking((machine, recipe) =>
            canDrainIceFuel(machine, recipe, coldIceFreezerFuelPerSecond(machine)))
        .onWorking(ColdIceFreezerWorking)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAA", "CD DC", "CD DC", "CD DC", "AAAAA")
            .aisle("AAAAA", "DEFED", "DEIED", "DEFED", "AAAAA")
            .aisle("AAAAA", "E   E", "E   E", "E   E", "AAAAA")
            .aisle("AAAAA", "G H G", "G H G", "G H G", "AAAAA")
            .aisle("AAAAA", "E   E", "E   E", "E   E", "AAAAA")
            .aisle("AAAAA", "DEFED", "DEIED", "DEFED", "AAAAA")
            .aisle("AABAA", "CD DC", "CD DC", "CD DC", "AAAAA")
            .where("B", Predicates.controller(Predicates.blocks(definition.get())))
            .where("A", Predicates.blocks('kubejs:cold_ice_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where("F", Predicates.blocks('kubejs:cold_ice_casing'))
            .where('I', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(2))
            .where("C", Predicates.blocks('gtceu:naquadah_alloy_frame'))
            .where("D", Predicates.blocks('gtceu:heat_vent'))
            .where("E", Predicates.blocks('gtceu:luv_hermetic_casing'))
            .where("G", Predicates.blocks('gtceu:tempered_glass'))
            .where("H", Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .build()
        )
        .workableCasingModel('kubejs:block/cold_ice_casing', 'gtceu:block/multiblock/vacuum_freezer')
    e.create('clarifier_purification_unit', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('clarifier_purification_unit')
        .appearanceBlock(GCYMBlocks.CASING_WATERTIGHT)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ABBBBBBBA", "ACCCCCCCA", "AAAAAAAAA", "AAAAAAAAA", "D       D", "DD     DD", "D D   D D", "D  D D  D", "DDDDDDDDD", "D  AAA  D", "D AAAAA D", "DAAAAAAAD", "AAAAAAAAA", "AEEEAEEEA")
            .aisle("BAAAAAAAB", "CLLLLLLLC", "ALLLLLLLA", "AAAAAAAAA", "         ", "D       D", "         ", "         ", "D  AAA  D", "  ALFLA  ", " ALLLLLA ", "AGLLLLLGA", "ALLLHLLLA", "ECCCECCCE")
            .aisle("BAAAAAAAB", "CLLLLLLLC", "ALLLLLLLA", "AAALLLAAA", "   III   ", "   III   ", "D  AAA  D", "   AAA   ", "D AJJJA D", " ALLFLLA ", "ALLLLLLLA", "ALGLLLGLA", "ALLLHLLLA", "ECCCECCCE")
            .aisle("BAAAAAAAB", "CLLLLLLLC", "ALLLLLLLA", "AALLLLLAA", "  IKKKI  ", "  IKKKI  ", "  ALLLA  ", "D ALLLA D", "DAJLLLJAD", "ALLLFLLLA", "ALLLLLLLA", "ALLGLGLLA", "ALLLHLLLA", "ECCCECCCE")
            .aisle("BAAAAAAAB", "CLLLLLLLC", "ALLLLLLLA", "AALLLLLAA", "  IKKKI  ", "  IKKKI  ", "  ALHLA  ", "  ALHLA  ", "DAJLHLJAD", "AFFFHFFFA", "ALLLHLLLA", "ALLLHLLLA", "AHHHHHHHA", "AEEEZEEEA")
            .aisle("BAAAAAAAB", "CLLLLLLLC", "ALLLLLLLA", "AALLLLLAA", "  IKKKI  ", "  IKKKI  ", "  ALLLA  ", "D ALLLA D", "DAJLLLJAD", "ALLLFLLLA", "ALLLLLLLA", "ALLGLGLLA", "ALLLHLLLA", "ECCCECCCE")
            .aisle("BAAAAAAAB", "CLLLLLLLC", "ALLLLLLLA", "AAALLLAAA", "   III   ", "   III   ", "D  AAA  D", "   AAA   ", "D AJJJA D", " ALLFLLA ", "ALLLLLLLA", "ALGLLLGLA", "ALLLHLLLA", "ECCCECCCE")
            .aisle("BAAAAAAAB", "CLLLLLLLC", "ALLLLLLLA", "AAAAAAAAA", "         ", "D       D", "         ", "         ", "D  AAA  D", "  ALFLA  ", " ALLLLLA ", "AGLLLLLGA", "ALLLHLLLA", "ECCCECCCE")
            .aisle("ABBBBBBBA", "ACCCCCCCA", "AAAAAAAAA", "AAAAAAAAA", "D       D", "DD     DD", "D D   D D", "D  D D  D", "DDDDDDDDD", "D  AAA  D", "D AAAAA D", "DAAAAAAAD", "AAAAAAAAA", "AEEEAEEEA")
            .where('Z', Predicates.controller(Predicates.blocks(definition.get())))
            .where('E', Predicates.blocks('gtceu:watertight_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
            )
            .where('I', Predicates.blocks('gtceu:watertight_casing')
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
            )
            .where('B', Predicates.blocks('gtceu:watertight_casing')
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
            )
            .where('A', Predicates.blocks('gtceu:watertight_casing'))
            .where('C', Predicates.blocks('gtceu:tempered_glass'))
            .where('D', Predicates.blocks('gtceu:tungsten_steel_frame'))
            .where('F', Predicates.blocks('gtceu:stainless_steel_frame'))
            .where('G', Predicates.blocks('gtceu:hastelloy_x_frame'))
            .where('H', Predicates.blocks('gtceu:tungstensteel_gearbox'))
            .where('J', Predicates.blocks('gtceu:tungsten_frame'))
            .where('K', Predicates.blocks('gtceu:filter_casing'))
            .where('L', Predicates.air())
            .build()
        )
        .workableCasingModel('gtceu:block/casings/gcym/watertight_casing', 'gtceu:block/multiblock/cleanroom')
    e.create('pcb_factory', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('pcb_factory')
        .appearanceBlock(GCYMBlocks.CASING_WATERTIGHT)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("    BQQQQQB    ", "    BQQGQQB    ", "    BQQGQQB    ", "    BQQGQQB    ", "    BQQGQQB    ", "    BQQGQQB    ", "    BQQGQQB    ", "    BQQGQQB    ", "    BBBBBBB    ", "               ", "               ", "               ", "               ", "               ")
            .aisle("    QIIIIIQ    ", "    QLLLLLQ    ", "    QLLLLLQ    ", "    QLLLLLQ    ", "    QLLLLLQ    ", "    QLLLLLQ    ", "    QLLLLLQ    ", "    QLLLLLQ    ", "    BQPPPQB    ", "     B   B     ", "     B   B     ", "     B   B     ", "     B   B     ", "     BBBBB     ")
            .aisle("    QIIIIIQ    ", "    QLLRLLQ    ", "    QLLRLLQ    ", "    QLLRLLQ    ", "    QLLRLLQ    ", "    QLLRLLQ    ", "    QLLRLLQ    ", "    QLLRLLQ    ", "    BPIIIPB    ", "      QGQ      ", "      QGQ      ", "      QGQ      ", "      QGQ      ", "     BQQQB     ")
            .aisle("    QIIIIIQ    ", "    GLRSRLG    ", "    GLRSRLG    ", "    GLRSRLG    ", "    GLRSRLG    ", "    GLRSRLG    ", "    GLRSRLG    ", "    GLRSRLG    ", "    BPIIIPB    ", "      GRG      ", "      GRG      ", "      GRG      ", "      GRG      ", "     BQZQB     ")
            .aisle("    QIIIIIQ    ", "    QLLRLLQ    ", "    QLLRLLQ    ", "    QLLRLLQ    ", "    QLLRLLQ    ", "    QLLRLLQ    ", "    QLLRLLQ    ", "    QLLRLLQ    ", "    BPIIIPB    ", "      QGQ      ", "      QGQ      ", "      QGQ      ", "      QGQ      ", "     BQQQB     ")
            .aisle("    QIIIIIQ    ", "    QLLLLLQ    ", "    QLLLLLQ    ", "    QLLLLLQ    ", "    QLLLLLQ    ", "    QLLLLLQ    ", "    QLLLLLQ    ", "    QLLLLLQ    ", "    BQPPPQB    ", "     B   B     ", "     B   B     ", "     B   B     ", "     B   B     ", "     BBBBB     ")
            .aisle("    IQQQQQI    ", "    BQQQQQB    ", "    BQQQQQB    ", "    BQQQQQB    ", "    BQQQQQB    ", "    BQQQQQB    ", "    BQQQQQB    ", "    BQQQQQB    ", "    BBBBBBB    ", "               ", "               ", "               ", "               ", "               ")
            .aisle("AAA IPPOPPI    ", "BCB    O       ", "AAA    O       ", "       O       ", "       O       ", "       O       ", "       O       ", "       O       ", "       O       ", "               ", "               ", "               ", "               ", "               ")
            .aisle("AAA IPPOPPIDDDE", "CFC    O   GGGE", "AFA        HHHE", " I             ", " I             ", " I             ", "               ", "               ", "               ", "               ", "               ", "               ", "               ", "               ")
            .aisle("AAA OOOOOOOIIIE", "CLC MOOOOOMDLLE", "ACA MOOOOOMDDDE", "    MOOOOOMGGGE", "    OOOOOOOHHHE", " I             ", "               ", "               ", "               ", "               ", "               ", "               ", "               ", "               ")
            .aisle("AAA OIIIIIOIIIE", "CLC OLLLLLFLLLE", "ACA OLLLLLFLLLE", "    OLLLLLFLLLE", "    OOOOOOODDDE", " I         HHHH", "               ", "               ", "               ", "               ", "               ", "               ", "               ", "               ")
            .aisle("AAA OIIIIIOIIIE", "CLC OLLFLLFLLDH", "ACA OLLFLLFLLDH", "    OLLFLLFLLDH", "    OOOFOOOLLDH", " IIIIIII   GGGH", "               ", "               ", "               ", "               ", "               ", "               ", "               ", "               ")
            .aisle("AAA OIIIIIOIIIE", "CLC OLLLLLFLLLE", "ACA OLLLLLFLLLE", "    OLLLLLFLLLE", "    OOOOOOODDDE", " I         HHHH", "               ", "               ", "               ", "               ", "               ", "               ", "               ", "               ")
            .aisle("AAA JJJKJJJIIIE", "CLC MNNNNNMDLLE", "ACA MNNNNNMDDDE", "    MNNNNNMGGGE", "    JJJJJJJHHHE", " I             ", "               ", "               ", "               ", "               ", "               ", "               ", "               ", "               ")
            .aisle("AAA        DDDE", "CFC        GGGE", "AFA        HHHE", " I             ", " I             ", " I             ", "               ", "               ", "               ", "               ", "               ", "               ", "               ", "               ")
            .aisle("AAA            ", "BCB            ", "AAA            ", "               ", "               ", "               ", "               ", "               ", "               ", "               ", "               ", "               ", "               ", "               ")
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('J', Predicates.blocks('gtceu:watertight_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('O', Predicates.blocks('gtceu:watertight_casing'))
            .where('D', Predicates.blocks('gtceu:sturdy_machine_casing'))
            .where('E', Predicates.blocks('gtceu:robust_machine_casing'))
            .where('G', Predicates.blocks('gtceu:heat_vent'))
            .where('H', Predicates.blocks('gtceu:ruridit_frame'))
            .where('P', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('Q', Predicates.blocks('gtceu:stainless_steel_turbine_casing'))
            .where('N', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('C', Predicates.blocks('gtceu:laminated_glass'))
            .where('A', Predicates.blocks('gtceu:clean_machine_casing'))
            .where('B', Predicates.blocks('gtceu:stainless_steel_frame'))
            .where('I', Predicates.blocks('gtceu:inert_machine_casing'))
            .where('F', Predicates.blocks('gtnn:polybenzimidazole_pipe'))
            .where('S', Predicates.blocks('gtceu:ultimet_frame'))
            .where('R', Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .where('M', Predicates.blocks('gtceu:tungsten_frame'))
            .where('Z', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('L', Predicates.air())
            .build()
        )
        .workableCasingModel('gtceu:block/casings/gcym/watertight_casing', 'gtceu:block/multiblock/assembly_line')
    e.create('petrochemical_factory', 'multiblock')
        .machine(holder => new $CoilMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('petrochemical_factory')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, PetrochemicalFactoryPyrolyseOverclock])
        .additionalDisplay((machine, components) => {
            if (machine instanceof $CoilMachine && machine.isFormed()) {
                components.add(
                    Component.translatable(
                        'kubejs.multiblock.petrochemical_factory.current_speed',
                        Component.literal(petrochemicalFactoryRunningSpeed(machine).toFixed(2) + 'x')
                            .withStyle($OritoChatFormatting.AQUA)
                    ).withStyle($OritoChatFormatting.GRAY)
                )
            }
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAAAAAAAAAAAAAAAA", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "             L     ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "   J   J     J     ", "   J   J     J     ", "   J   J     J     ", "   J   J     J     ", "   GGGGGGGGGGG     ", "      G      G     ", "      G      G     ", "      G     LGLLL  ", "      G      P     ", "      G            ", "      G            ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "            J J    ", "            J J    ", "            J J    ", "            J J    ", "   G       LLLLL   ", "          LLLLLLL  ", "          LLLLLLL  ", "          LLLGLLL  ", "          LLLLLLL  ", "          LLLLLLL  ", "      G    LLLLL   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "                   ", "                   ", "                   ", "           LLLLL   ", "   G      L     L  ", "         L       L ", "         L       L ", "         L   G   L ", "         L       L ", "         L       L ", "      G   L     L  ", "           LLLLL   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " ELLME             ", " ELMLE             ", " EMLLE             ", " ELLLE     LLLLL   ", " ELGLE    L     L  ", " ELLLE   L       L ", " ELLME   L       L ", " ELMLE   L   G   L ", " EMLLE   L       L ", " ELLLE   L       L ", " ELNLEG   L     L  ", " ELLLE     LLLLL   ", " ELLME             ", " ELMLE             ", " EMLLE             ", " ELLLE             ", " ELNLE             ", " ELLLE             ", " ELLME             ", " ELMLE             ", " EMLLE             ", " EEEEE             ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " LLLLLJ            ", " LR RLJ            ", " L   LJ            ", " M R LJ    LLLLL   ", " L   LJ   L     L  ", " L R MJ  L       L ", " L   LJ  L       L ", " LR RLJ  L   G   L ", " L   LJ  L       L ", " M R LJ  L       L ", " L   LG   L     L  ", " L R M     LLLLL   ", " L   L             ", " LR RL             ", " L   L             ", " M R L             ", " L   L             ", " L R M             ", " L   L             ", " LR RL             ", " L   L             ", " ELLLE             ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " LLLLL             ", " N   N             ", " L   L             ", " LR RL     LLLLL   ", " M   M    L     L  ", " LR RL   L       L ", " L   L   L       L ", " N   N   L   G   L ", " L   L   L       L ", " LR RL   L       L ", " M   MG   L     L  ", " LR RL     LLLLL   ", " L   L             ", " N   N             ", " L   L             ", " LR RL             ", " M   M             ", " LR RL             ", " L   L             ", " N   N             ", " L   L             ", " ELPLE             ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " LLLLL             ", " LR RL             ", " L   L             ", " L R M     MMMMM   ", " L   L    M     M  ", " M R L   M       M ", " L   L   M       M ", " LR RL   M   G   M ", " L   L   M       M ", " L R M   M       M ", " L   LG   M     M  ", " M R L     MMMMM   ", " L   L             ", " LR RL             ", " L   L             ", " L R M             ", " L   L             ", " M R L             ", " L   L             ", " LR RL             ", " L   L             ", " ELLLE             ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " EMLLE             ", " ELMLE             ", " ELLME             ", " ELLLE     MMMMM   ", " ELGLE    M     M  ", " ELLLE   M       M ", " EMLLE   M       M ", " ELMLE   M   G   M ", " ELLME   M       M ", " ELLLE   M       M ", " ELGLEG   M     M  ", " ELLLE     MMMMM   ", " EMLLE             ", " ELMLE             ", " ELLME             ", " ELLLE             ", " ELGLE             ", " ELLLE             ", " EMLLE             ", " ELMLE             ", " ELLME             ", " EEEEE             ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "   J  J            ", "   J  J            ", "   J  J            ", "   J  J    LLLLL   ", "   G  J   L     L  ", "   G  J  L       L ", "   G  J  L       L ", "   G  J  L   G   L ", "   G  J  L       L ", "   G  J  L       L ", "   G  G   L     L  ", "   G       LLLLL   ", "   G               ", "   G               ", "   G               ", "   G               ", "   G               ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "         J   J   J ", "         J   J   J ", "         J   K   J ", "         J LLKLL J ", "         JL     LJ ", "         L       L ", "         L       L ", "         L   G   L ", "         L       L ", "         L       L ", "      G   L     L  ", "           LLLLL   ", "                   ", "                   ", "                   ", "                   ", "   G               ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "   J   J     K     ", "   J   J     K     ", "   J   J     K     ", "   J   J   LLLLL   ", "   J   J  L     L  ", "   J   J L       L ", "   J   J L       L ", "   J   J L   G   L ", "   J   J L       L ", "   J   J L       L ", "   J  GJ  L     L  ", "   J   J   LLLLL   ", "   J   J     J     ", "   J   J     J     ", "   J   J     J     ", "   J   J     J     ", "   GGGGGGGGGGG     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " BBBBB       K     ", " BNMNB             ", " BNMNB             ", " BNMNB     MMMMM   ", " BBBBB    M     M  ", " BNMNB   M       M ", " BNMNB   M       M ", " BNMNB   M   G   M ", " BNMNB   M       M ", " BNMNB   M       M ", " BBBBBG   M     M  ", "           MMMMM   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " BBMBB       K     ", " O   O             ", " O   O             ", " O   O     MMMMM   ", " BBMBB    M     M  ", " O   O   M       M ", " O   O   M       M ", " O   O   M   G   M ", " O   O   M       M ", " O   O   M       M ", " BBMBBG   M     M  ", "           MMMMM   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " BBMKKKKKKKKKK     ", " O   O       K     ", " P   P       K     ", " O   O     LLLLL   ", " BBMBB    L     L  ", " O   O   L       L ", " O   O   L       L ", " P   P   L   G   L ", " O   O   L       L ", " O   O   L       L ", " BBMBBG   L     L  ", "           LLLLL   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " BBMBB   J   J   J ", " O   O   J   J   J ", " O   O   J   K   J ", " O   O   J LLKLL J ", " BBMBB   JL     LJ ", " O   O   L       L ", " O   O   L       L ", " O   O   L   G   L ", " O   O   L       L ", " O   O   L       L ", " BBMBBG   L     L  ", "           LLLLL   ", "             J     ", "             J     ", "             J     ", "             J     ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " BBBBB       K     ", " BNMNB       K     ", " BNMNB       K     ", " BNMNGG    LLLLL   ", " BBMBBG   L     L  ", " O   OG  L       L ", " O   OG  L       L ", " O   GG  L   G   L ", " O   OG  L       L ", " O   OG  L       L ", " BBMBBG   L     L  ", "           LLLLL   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " BBBBB  J    K     ", " BNMNB  J          ", " BNMNB  J          ", " BNMNGG J  MMMMM   ", " BBMBBG J M     M  ", " O   OG JM       M ", " O   OG JM       M ", " O   GG JM   G   M ", " O   OG JM       M ", " O   OG JM       M ", " BBMBBG J M     M  ", "      G J  MMMMM   ", "      G J          ", "      G J          ", "      G J          ", "      G J          ", "      GGGGGGGG     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " BBMBB       K     ", " O   O             ", " O   O             ", " O   O     MMMMM   ", " BBMBB    M     M  ", " O   O   M       M ", " O   O   M       M ", " O   O   M   G   M ", " O   O   M       M ", " O   O   M       M ", " BBMBB    M     M  ", "           MMMMM   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " BBMKKKKKKKKKK     ", " O   O       K     ", " P   P       K     ", " O   O     LLLLL   ", " BBMBB    L     L  ", " O   O   L       L ", " O   O   L       L ", " P   P   L   G   L ", " O   O   L       L ", " O   O   L       L ", " BBMBB    L     L  ", "           LLLLL   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " BBMBB   J   J   J ", " O   O   J   J   J ", " O   O   J   K   J ", " O   O   J LLKLL J ", " BBMBB   JL     LJ ", " O   O   L       L ", " O   O   L       L ", " O   O   L   G   L ", " O   O   L       L ", " O   O   L       L ", " BBMBB    L     L  ", "           LLLLL   ", "             J     ", "             J     ", "             J     ", "             J     ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", " BKBKB             ", " BNMNB             ", " BNMNB             ", " BNMNB     LLLLL   ", " BBBBB    L     L  ", " BNMNB   L       L ", " BNMNB   L       L ", " BNMNB   L   G   L ", " BNMNB   L       L ", " BNMNB   L       L ", " BBBBB    L     L  ", "           LLLLL   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "  KKK              ", "                   ", "                   ", "           MMMMM   ", "          M     M  ", "         M       M ", "         M       M ", "         M   G   M ", "         M       M ", "         M       M ", "          M     M  ", "           MMMMM   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "   K               ", "                   ", "                   ", "           MMMMM   ", "          M     M  ", "         M       M ", "         M       M ", "         M   G   M ", "         M       M ", "         M       M ", "          M     M  ", "           MMMMM   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "   K               ", "                   ", "                   ", "           LLLLL   ", "          L     L  ", "         L       L ", "         L       L ", "         L   G   L ", "         L       L ", "         L       L ", "          L     L  ", "           LLLLL   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "   K               ", "                   ", "                   ", "           LLLLL   ", "          L     L  ", "         L       L ", "         L       L ", "         L   G   L ", "         L       L ", "         L       L ", "          L     L  ", "           LLLLL   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "   K               ", "   K               ", "   K               ", "   K       LLLLL   ", "   K      L     L  ", "         L       L ", "         L       L ", "         L   G   L ", "         L       L ", "         L       L ", "          L     L  ", "           LLLLL   ", "             J     ", "             J     ", "             J     ", "             J     ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "                   ", "                   ", "                   ", "           LLLLL   ", "   K      LL   LL  ", "         LL     LL ", "         L       L ", "         L   G   L ", "         L       L ", "         LL     LL ", "          LL   LL  ", "           LLLLL   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "   J        J J    ", "   J        J J    ", "   J        J J    ", "   J        JLJ    ", "   K        L L    ", "           L   L   ", "          L     L  ", "         L   G   L ", "          L     L  ", "           L   L   ", "            L L    ", "             L     ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAAA", "                   ", "                   ", "                   ", "                   ", "   K         L     ", "            L L    ", "           L   L   ", "          L  G  L  ", "           L   L   ", "            L L    ", "             L     ", "                   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAA ", " EFFFE             ", " EHHHE             ", " EHHHE             ", " EHHHE             ", " EHKHE             ", " EHHHE       L     ", " EFFFE      LLL    ", "           LLGLL   ", "            LLL    ", "             L     ", "             J     ", "             J     ", "             J     ", "             J     ", "             J     ", "             J     ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAA ", " FFFFF       G     ", " H   H       G     ", " H I H       G     ", " H   H       G     ", " H I H       G     ", " H   H       G     ", " FFFFF       G     ", "            GGG    ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAA ", " FFFFF J GGG G     ", " H I H J G         ", " HIIIH J G         ", " H I H J G         ", " HIIIH J G         ", " H I H J G         ", " FFIFF J G         ", "   GGGGGGG   J     ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAA ", " FFFFF     G G     ", " H   H             ", " H I H             ", " H   H             ", " H I H             ", " H   H             ", " FFFFF             ", "             J     ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAA ", " EFFFE    BGBGBBB  ", " EHHHE    BBBBBBB  ", " EHHHE    BBBBBBB  ", " EHHHE    BBBBBBB  ", " EHHHE    BBBGBBB  ", " EHHHE       G     ", " EFFFE       G     ", "             G     ", "             G     ", "             G     ", "             G     ", "             G     ", "             G     ", "             G     ", "             G     ", "             G     ", "             G     ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("AAAAAAAAAAAAAAAAAA ", "          BBBBBBB  ", "          BCCCCCB  ", "          BCCDCCB  ", "          BCCCCCB  ", "          BBBBBBB  ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("         AAAAAAAAA ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .aisle("         AAAAAAAAA ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ")
            .where('D', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtceu:high_power_casing')
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('M', Predicates.heatingCoils())
            .where('A', Predicates.blocks('gtceu:stress_proof_casing'))
            .where('P', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(10)
            )
            .where('B', Predicates.blocks('gtceu:atomic_casing'))
            .where('E', Predicates.blocks('gtceu:tungsten_carbide_frame'))
            .where('F', Predicates.blocks('gtceu:watertight_casing'))
            .where('G', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('H', Predicates.blocks('gtceu:tempered_glass'))
            .where('I', Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .where('J', Predicates.blocks('gtceu:stainless_steel_frame'))
            .where('K', Predicates.blocks('gtceu:titanium_pipe_casing'))
            .where('L', Predicates.blocks('gtceu:clean_machine_casing'))
            .where('N', Predicates.blocks('gtceu:heat_vent'))
            .where('O', Predicates.blocks('gtceu:luv_hermetic_casing'))
            .where('R', Predicates.blocks('gtceu:steel_pipe_casing'))
            .build()
        )
        .workableCasingModel('gtceu:block/casings/hpca/high_power_casing', 'gtceu:block/multiblock/blast_furnace')
    e.create('platdur_s_gate', 'multiblock')
        .machine(holder => new $CoilMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('platdur_s_gate')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, PlatdurSGatePyrolyseOverclock])
        .additionalDisplay((machine, components) => {
            if (machine instanceof $CoilMachine && machine.isFormed()) {
                components.add(
                    Component.translatable(
                        'kubejs.multiblock.platdur_s_gate.current_speed',
                        Component.literal(platdurSGateRunningSpeed(machine).toFixed(2) + 'x')
                            .withStyle($OritoChatFormatting.AQUA)
                    ).withStyle($OritoChatFormatting.GRAY)
                )
            }
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("          A   A   ADCCCCCD   ", "          AAAAAAAAADEEEEED   ", "          A   A   ADEEEEED   ", "      FFF AAAAAAAAADEEEEED   ", "     FFFFFA   A   ADCCCCCD   ", "      FFF                GGG ", "   GGG                   GGG ", "   GGG                    G  ", "   GGG                       ", "   GGG                   HHH ", "A   A                    HHH ", "AAAAA            III     HHH ", "A   A            III     HHH ", "AAAAA            III     HHH ", "A   A            JJJJGGG  K  ", "AAAAA            JJJJGGG     ", "A   A            JJJJGGG     ", "AAAAA                        ", "A   A                        ", " DCCCCCD                     ", " DEEEEED                     ", " DEEEEED                     ", " DEEEEED                     ", " DCCCCCD                     ", "      F                      ", "     FFFFF               LLL ", "     FFF                 LLL ", "     FFFFFMMMMMA   A   A LLL ", "      F   MMMMMAAAAAAAAA LLL ", "          MMMMMA   A   A     ", "          MMMMMAAAAAAAAA     ", "               A   A   A     ")
            .aisle("          AAAAAAAAADEEEEED   ", "          AEEEAEEEAD     D   ", "          ANNNANNNAD     O   ", "     FFFFFAEEEAEEEAD     D   ", "     F P FAAAAAAAAADEEEEED   ", "     FFFFF              GGGGG", "  GGGGG                 G   G", "  GP PG                  G G ", "  GP PG                  GGG ", "  GGGGG                 HHHHH", "AAAAA                   H Q H", "AEEEA            EEE    H   H", "ANNNA            E E    H Q H", "AEEEA            EEE    H   H", "AAAAA            JJJJGGG  K  ", "AEEEA            JRRJGPG     ", "ANNNA            JRRJGGG     ", "AEEEA                        ", "AAAAA                        ", " DEEEEED                     ", " D     D                     ", " O     D                     ", " D     D                     ", " DEEEEED                     ", "     FFFFF                L  ", "      TT F              LL LL", "      TTFF              L   L", "      TT FMMMMMAAAAAAAAALUUUL", "     FFFFFMVVVMAEEEAEEEALLLLL", "          MVVVMANNNANNNA     ", "          M   MAEEEAEEEA     ", "               AAAAAAAAA     ")
            .aisle("          A   A   ADEEEEED   ", "          ANNNANNNAD     O   ", "          AEEEAEEEAD     D   ", "     FFFFFANNNANNNAD     O   ", "     FP PFA   A   ADEEEEED   ", "     FFFFF              GGGGG", "  GGGGG                 G   G", "  G   G                 G P G", "  G   G                  GGG ", "  GGGGG                 HHHHH", "A   A                   HQQQH", "ANNNA            III    H Q H", "AEEEA            O I    HQQQH", "ANNNA            III    H X H", "A   A            JJJJGGGKKXKK", "ANNNA            JRRJG G     ", "AEEEA            JRRJGGG     ", "ANNNA                        ", "A   A                        ", " DEEEEED                     ", " O     D                     ", " D     D                     ", " O     D                     ", " DEEEEED                     ", "     FFF                 LLL ", "      TTFF              L P L", "      TT F              L P L", "      TTFFMMMMMA   A   ALUPUL", "     FFF  MVVVMANNNANNNALLLLL", "          MVVVMAEEEAEEEA     ", "          M   MANNNANNNA     ", "               A   A   A     ")
            .aisle("          AAAAAAAAADEEEEED   ", "          AEEEAEEEAD     D   ", "          ANNNANNNAD     O   ", "     FFFFFAEEEAEEEAD     D   ", "     F P FAAAAAAAAADEEEEED   ", "     FFFFF              GGGGG", "  GGGGG                 G   G", "  GP PG                  G G ", "  GP PG                  GGG ", "  GGGGG                 HHHHH", "AAAAA                   H Q H", "AEEEA            EEE    H   H", "ANNNA            E E    H Q H", "AEEEA            EEE    H   H", "AAAAA            JJJJGGG  K  ", "AEEEA            JRRJGPG     ", "ANNNA            JRRJGGG     ", "AEEEA                        ", "AAAAA                        ", " DEEEEED                     ", " D     D                     ", " O     D                     ", " D     D                     ", " DEEEEED                     ", "     FFFFF                L  ", "      TT F              LL LL", "      TTFF              L   L", "      TT FMMMMMAAAAAAAAALUUUL", "     FFFFFMVVVMAEEEAEEEALLLLL", "          MVVVMANNNANNNA     ", "          M   MAEEEAEEEA     ", "               AAAAAAAAA     ")
            .aisle("          A   A   ABCCCCCD   ", "          AAAAAAAAADEEEEED   ", "          A   A   ADEEEEED   ", "      FFF AAAAAAAAADEEEEED   ", "     FFFFFA   A   ADCCCCCD   ", "      FFF                GGG ", "   GGG                   GGG ", "   GGG                    G  ", "   GGG                       ", "   GGG                   HHH ", "A   A                    HHH ", "AAAAA            III     HHH ", "A   A            III     HHH ", "AAAAA            III     HHH ", "A   A            JJJJGGG  K  ", "AAAAA            JJJJGGG     ", "A   A            JJJJGGG     ", "AAAAA                        ", "A   A                        ", " DCCCCCD                     ", " DEEEEED                     ", " DEEEEED                     ", " DEEEEED                     ", " DCCCCCD                     ", "      F                      ", "     FFFFF               LLL ", "     FFF                 LLL ", "     FFFFFMMMMMA   A   A LLL ", "      F   MMMMMAAAAAAAAA LLL ", "          MMMMMA   A   A     ", "          MMMMMAAAAAAAAA     ", "               A   A   A     ")
            .where('B', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks('kubejs:blaze_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_LASER).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('A', Predicates.blocks('gtceu:inert_machine_casing'))
            .where('C', Predicates.blocks('gtceu:naquadah_alloy_frame'))
            .where('E', Predicates.heatingCoils())
            .where('F', Predicates.blocks('gtceu:vibration_safe_casing'))
            .where('G', Predicates.blocks('gtceu:watertight_casing'))
            .where('H', Predicates.blocks('gtceu:reaction_safe_mixing_casing'))
            .where('I', Predicates.blocks('gtceu:clean_machine_casing'))
            .where('J', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('K', Predicates.blocks('gtceu:hastelloy_x_frame'))
            .where('L', Predicates.blocks('gtceu:corrosion_proof_casing'))
            .where('M', Predicates.blocks('gtceu:secure_maceration_casing'))
            .where('N', Predicates.blocks('gtnn:polybenzimidazole_pipe'))
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(9)
            )
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('Q', Predicates.blocks('gtceu:titanium_pipe_casing'))
            .where('R', Predicates.blocks('gtceu:electrolytic_cell'))
            .where('T', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('U', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
            .where('V', Predicates.blocks('gtceu:crushing_wheels'))
            .where('X', Predicates.blocks('gtceu:stainless_steel_gearbox'))
            .build()
        )
        .workableCasingModel('kubejs:block/blaze_casing', 'gtceu:block/multiblock/large_chemical_reactor')
    e.create('dissolving_tank', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('dissolving_tank')
        .appearanceBlock(GCYMBlocks.CASING_WATERTIGHT)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.PROPORTIONAL_INPUT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("A   A", "ABBBA", "ADDDA", "ADDDA", " AAA ")
            .aisle("     ", "BEEEB", "DLLLD", "DLLLD", "AFAFA")
            .aisle("     ", "BEEEB", "DLGLD", "DLGLD", "AAHAA")
            .aisle("     ", "BEEEB", "DLLLD", "DLLLD", "AFAFA")
            .aisle("A   A", "ABCBA", "ADDDA", "ADDDA", " AAA ")
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:watertight_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('A', Predicates.blocks('gtceu:watertight_casing'))
            .where('E', Predicates.blocks('gtceu:corrosion_proof_casing'))
            .where('G', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('D', Predicates.blocks('gtceu:tempered_glass'))
            .where('F', Predicates.blocks('gtceu:heat_vent'))
            .where('M', Predicates.blocks('gtceu:tungsten_frame'))
            .where('H', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('L', Predicates.air())
            .build()
        )
        .workableCasingModel('gtceu:block/casings/gcym/watertight_casing', 'gtceu:block/multiblock/large_chemical_reactor')
    e.create('large_gas_collector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_gas_collector')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ABBBBBA", "BCCDCCB", "BCCDCCB", "BDDEDDB", "BCCDCCB", "BCCDCCB", "ABBBBBA")
            .aisle("BFFFFFB", "CGGHGGC", "CGHIHGC", "DHIJIHD", "CGHIHGC", "CGGHGGC", "BKKKKKB")
            .aisle("BFFFFFB", "CGHIHGC", "CHIJIHC", "DIJLJID", "CHIJIHC", "CGHIHGC", "BKKKKKB")
            .aisle("BFFFFFB", "DHIJIHD", "DIJLJID", "EJLMLJE", "DIJLJID", "DHIJIHD", "BKKNKKB")
            .aisle("BFFFFFB", "CGHIHGC", "CHIJIHC", "DIJLJID", "CHIJIHC", "CGHIHGC", "BKKKKKB")
            .aisle("BFFFFFB", "CGGHGGC", "CGHIHGC", "DHIJIHD", "CGHIHGC", "CGGHGGC", "BKKKKKB")
            .aisle("ABBBBBA", "BCCDCCB", "BCCDCCB", "BDDEDDB", "BCCDCCB", "BCCDCCB", "ABBBBBA")
            .where('N', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('A', Predicates.blocks('gtceu:solid_machine_casing'))
            .where('G', Predicates.blocks('gtceu:tungstensteel_gearbox'))
            .where('F', Predicates.blocks('gtceu:frostproof_machine_casing'))
            .where('K', Predicates.blocks('gtceu:heatproof_machine_casing'))
            .where('H', Predicates.blocks('gtceu:filter_casing'))
            .where('I', Predicates.blocks('gtceu:hsss_frame'))
            .where('J', Predicates.blocks('gtceu:ev_hermetic_casing'))
            .where('L', Predicates.blocks('gtceu:iv_hermetic_casing'))
            .where('M', Predicates.blocks('gtceu:luv_hermetic_casing'))
            .where('C', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('D', Predicates.blocks('gtceu:engine_intake_casing'))
            .where('E', Predicates.blocks('gtceu:extreme_engine_intake_casing'))
            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/cleanroom')
    e.create('large_metallurgic_infuser', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeTypes(['enrichment_chamber', 'infused_extracter', 'enrichment_infuser'])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("A   A", "AAAAA", "A   A", "AAAAA", "A   A")
            .aisle("CCCCC", "CDDDC", "CEEEC", "CDDDC", "CCCCC")
            .aisle("A   A", "AEEEA", "ADDDA", "AEEEA", "A   A")
            .aisle("CCCCC", "CDDDC", "CEEEC", "CDDDC", "CCCCC")
            .aisle("A   A", "BAAAA", "A   A", "AAAAA", "A   A")
            .where('B', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks('gtceu:high_temperature_smelting_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('C', Predicates.blocks('gtceu:corrosion_proof_casing'))
            .where('D', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
            .where('E', Predicates.blocks('gtceu:titanium_pipe_casing'))
            .build()
        )
        .workableCasingModel('gtceu:block/casings/gcym/high_temperature_smelting_casing', 'gtceu:block/multiblock/large_chemical_reactor')
    e.create('large_chemical_plant', 'multiblock')
        .machine(holder => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType('large_chemical_reactor')
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .recipeModifiers([
            (machine, recipe) => CoilTemperatureParallel(machine, recipe),
            (machine, recipe) => LargeChemicalPlantCoilBonus(machine, recipe),
            GTRecipeModifiers.OC_PERFECT_SUBTICK
        ])
        .additionalDisplay((machine, components) => {
            if (machine instanceof $CoilWorkableElectricMultiblockMachine && machine.isFormed()) {
                let temp = machine.getCoilType().getCoilTemperature()
                let maxParallel = Math.min(2147483647, Math.floor(Math.pow(2, Math.floor(temp / 900))))
                let coilMultiplier = getCoilEutMultiplier(machine)
                let durationMultiplier = 1.5 * coilMultiplier

                components.add(
                    Component.translatable(
                        'kubejs.multiblock.large_chemical_plant.coil_parallel',
                        Component.literal(String(maxParallel)).withStyle($OritoChatFormatting.DARK_PURPLE)
                    ).withStyle($OritoChatFormatting.GRAY)
                )
                components.add(
                    Component.translatable(
                        'kubejs.multiblock.large_chemical_plant.current_duration_multiplier',
                        Component.literal(durationMultiplier.toFixed(1) + 'x').withStyle($OritoChatFormatting.DARK_PURPLE)
                    ).withStyle($OritoChatFormatting.GRAY)
                )
                components.add(
                    Component.translatable(
                        'kubejs.multiblock.large_chemical_plant.current_eut_multiplier',
                        Component.literal(coilMultiplier.toFixed(1) + 'x').withStyle($OritoChatFormatting.DARK_PURPLE)
                    ).withStyle($OritoChatFormatting.GRAY)
                )
            }
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("A   A", "AAAAA", "A   A", "AAAAA", "A   A")
            .aisle("AAAAA", "ACCCA", "ADDDA", "ACCCA", "AAAAA")
            .aisle("A   A", "ADDDA", "ACCCA", "ADDDA", "A   A")
            .aisle("AAAAA", "ACCCA", "ADDDA", "ACCCA", "AAAAA")
            .aisle("A   A", "BAAAA", "A   A", "AAAAA", "A   A")
            .where('B', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks('gtceu:inert_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where("C", Predicates.heatingCoils())
            .where('D', Predicates.blocks('gtnn:polybenzimidazole_pipe'))
            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_inert_ptfe', 'gtceu:block/multiblock/large_chemical_reactor')
    e.create('dimensionally_transcendent_isomolecular_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine(holder => new $CoilWorkableElectricMultiblockMachine(holder))
        .recipeTypes(['large_chemical_reactor', 'chemical_bath', 'super_chemical_plant', 'pcb_factory'])
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .recipeModifiers([
            (machine, recipe) => FastLowPowerModifier(machine, recipe),
            (machine, recipe) => CoilTemperatureParallel(machine, recipe),
            GTRecipeModifiers.OC_PERFECT,
            GTRecipeModifiers.MULTIPLERECIPE,
            GTRecipeModifiers.BATCH_MODE
        ])
        .additionalDisplay((machine, components) => {
            if (machine instanceof $CoilWorkableElectricMultiblockMachine && machine.isFormed()) {
                let temp = machine.getCoilType().getCoilTemperature()
                let maxParallel = Math.min(2147483647, Math.floor(Math.pow(2, Math.floor(temp / 900))))
                components.add(
                    Component.translatable(
                        'kubejs.multiblock.dtpf.coil_parallel',
                        Component.literal(String(maxParallel)).withStyle($OritoChatFormatting.DARK_PURPLE)
                    ).withStyle($OritoChatFormatting.GRAY)
                )
            }
        })
        .pattern(definition => addPatternAisles(FactoryBlockPattern.start(), DTPF_AISLES)
            .where("a", Predicates.controller(Predicates.blocks(definition.get())))
            .where("e", Predicates.blocks('gtceu:inert_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_LASER).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where("b", Predicates.blocks('kubejs:dimension_injection_casing'))
            .where("C", Predicates.heatingCoils())
            .where("d", Predicates.blocks('gtceu:inert_machine_casing'))
            .where("s", Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_inert_ptfe', 'gtceu:block/multiblock/large_chemical_reactor')
    e.create('dimensionally_transcendent_isothermal_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine(holder => new $CoilWorkableElectricMultiblockMachine(holder))
        .recipeTypes(['electric_furnace', 'alloy_smelter', 'electric_blast_furnace', 'alloy_blast_smelter'])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .recipeModifiers([
            (machine, recipe) => FastLowPowerModifier(machine, recipe),
            (machine, recipe) => CoilTemperatureParallel(machine, recipe),
            GTRecipeModifiers.OC_PERFECT,
            GTRecipeModifiers.MULTIPLERECIPE,
            GTRecipeModifiers.BATCH_MODE
        ])
        .additionalDisplay((machine, components) => {
            if (machine instanceof $CoilWorkableElectricMultiblockMachine && machine.isFormed()) {
                let temp = machine.getCoilType().getCoilTemperature()
                let maxParallel = Math.min(2147483647, Math.floor(Math.pow(2, Math.floor(temp / 900))))
                components.add(
                    Component.translatable(
                        'kubejs.multiblock.dtpf.coil_parallel',
                        Component.literal(String(maxParallel)).withStyle($OritoChatFormatting.DARK_PURPLE)
                    ).withStyle($OritoChatFormatting.GRAY)
                )
            }
        })
        .pattern(definition => addPatternAisles(FactoryBlockPattern.start(), DTPF_AISLES)
            .where("a", Predicates.controller(Predicates.blocks(definition.get())))
            .where("e", Predicates.blocks('gtceu:high_temperature_smelting_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_LASER).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where("b", Predicates.blocks('kubejs:dimension_injection_casing'))
            .where("C", Predicates.heatingCoils())
            .where("d", Predicates.blocks('gtceu:high_temperature_smelting_casing'))
            .where("s", Predicates.blocks('gtceu:uv_muffler_hatch'))
            .build()
        )
        .workableCasingModel('gtceu:block/casings/gcym/high_temperature_smelting_casing', 'gtceu:block/multiblock/blast_furnace')
    e.create('dimensionally_transcendent_isovac_freezer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['vacuum_freezer', 'plasma_freezer'])
        .appearanceBlock(GTBlocks.CASING_ALUMINIUM_FROSTPROOF)
        .recipeModifiers([
            (machine, recipe) => FastLowPowerModifier(machine, recipe),
            GTRecipeModifiers.OC_PERFECT,
            GTRecipeModifiers.MULTIPLERECIPE,
            GTRecipeModifiers.BATCH_MODE,
            GTRecipeModifiers.PARALLEL_HATCH
        ])
        .pattern(definition => addPatternAisles(FactoryBlockPattern.start(), DTPF_AISLES)
            .where("a", Predicates.controller(Predicates.blocks(definition.get())))
            .where("e", Predicates.blocks('gtceu:frostproof_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_LASER).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where("b", Predicates.blocks('kubejs:dimension_injection_casing'))
            .where("C", Predicates.blocks('gtceu:heat_vent'))
            .where("d", Predicates.blocks('gtceu:frostproof_machine_casing'))
            .where("s", Predicates.blocks('gtceu:extreme_engine_intake_casing'))
            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_frost_proof', 'gtceu:block/multiblock/implosion_compressor')
})


/*
GTRecipeModifiers.PARALLEL_HATCH	读取并行仓当前设置，自动并行配方，输入/输出/EU/t 都乘并行数
GTRecipeModifiers.BATCH_MODE	批处理模式，按配置把短配方合批，主要拉长时长和放大输入输出
GTRecipeModifiers.OC_PERFECT	完美超频
GTRecipeModifiers.OC_NON_PERFECT	普通非完美超频
GTRecipeModifiers.OC_PERFECT_SUBTICK	完美超频，支持 sub-tick 级别
GTRecipeModifiers.OC_NON_PERFECT_SUBTICK	非完美超频，支持 sub-tick 级别
GTRecipeModifiers.DEFAULT_ENVIRONMENT_REQUIREMENT	默认环境需求检测，主要和环境危害/医疗状态相关
GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(...)	自己传一个 OverclockingLogic 生成电力超频 modifier
GTRecipeModifiers.ENVIRONMENT_REQUIREMENT.apply(condition, maxStrength)	自定义环境需求 modifier
--------------------------------------
GTRecipeModifiers.crackerOverclock(machine, recipe)	裂化机一类，线圈等级越高 EU/t 有折扣
GTRecipeModifiers.ebfOverclock(machine, recipe)	电弧/高炉类，需要配方里有 ebf_temp 数据，会检查线圈温度
GTRecipeModifiers.pyrolyseOvenOverclock(machine, recipe)	热解炉逻辑，线圈影响速度
GTRecipeModifiers.multiSmelterParallel(machine, recipe)	多方块熔炉，按线圈等级给并行
GTRecipeModifiers.hatchParallel(machine, recipe)	PARALLEL_HATCH 本体
GTRecipeModifiers.batchMode(machine, recipe)	BATCH_MODE 本体

*/
//     e.create('large_coke_oven', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('coke_oven')
//         .appearanceBlock(GTBlocks.CASING_COKE_BRICKS)
//         .recipeModifiers([(machine, recipe) => FixedParallel64(machine, recipe)])
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle("   AAAAA   ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ")
//             .aisle("  AAAAAAA  ", "   BBBBB   ", "   BBBBB   ", "   AAAAA   ", "   AAAAA   ", "           ", "           ", "           ", "           ", "           ", "           ")
//             .aisle(" AAAAAAAAA ", "  B  D  B  ", "  B     B  ", "  A     A  ", "  A     A  ", "   AAAAA   ", "     A     ", "     A     ", "     A     ", "           ", "           ")
//             .aisle("AAAAAAAAAAA", " B   D   B ", " B       B ", " A       A ", " A       A ", "  AAAAAAA  ", "    ADA    ", "    A A    ", "    A A    ", "    AAA    ", "           ")
//             .aisle("AAAAAAAAAAA", " B   D   B ", " B       B ", " A       A ", " A       A ", "  AA   AA  ", "   A D A   ", "   A   A   ", "   A   A   ", "   AAAAA   ", "    AAA    ")
//             .aisle("AAAAAAAAAAA", " BDDDDDDDB ", " B   D   B ", " A   D   A ", " A   D   A ", "  AA D AA  ", "  ADDDDDA  ", "  A  D  A  ", "  A  D  A  ", "   AADAA   ", "    AEA    ")
//             .aisle("AAAAAAAAAAA", " B   D   B ", " B       B ", " A       A ", " A       A ", "  AA   AA  ", "   A D A   ", "   A   A   ", "   A   A   ", "   AAAAA   ", "    AAA    ")
//             .aisle("AAAAAAAAAAA", " B   D   B ", " B       B ", " A       A ", " A       A ", "  AAAAAAA  ", "    ADA    ", "    A A    ", "    A A    ", "    AAA    ", "           ")
//             .aisle(" AAAAAAAAA ", "  B  D  B  ", "  B     B  ", "  A     A  ", "  A     A  ", "   AAAAA   ", "     A     ", "     A     ", "     A     ", "           ", "           ")
//             .aisle("  AAAAAAA  ", "   BBCBB   ", "   BBBBB   ", "   AAAAA   ", "   AAAAA   ", "           ", "           ", "           ", "           ", "           ", "           ")
//             .aisle("   AAAAA   ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ")
//             .where('C', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('B', Predicates.blocks('gtceu:coke_oven_bricks')
//                 .or(Predicates.autoAbilities(definition.getRecipeTypes()))
//             )
//             .where('A', Predicates.blocks('gtceu:coke_oven_bricks'))
//             .where('D', Predicates.blocks('gtceu:bronze_pipe_casing'))
//             .where('E', Predicates.blocks('gtceu:robust_machine_casing'))
//             .where('E', Predicates.abilities(PartAbility.MUFFLER)
//                 .setExactLimit(1)
//             )
//             .build()
//         )
//         .workableCasingModel('gtceu:block/casings/solid/machine_coke_bricks', 'gtceu:block/casings/multiblock/coke_oven')
