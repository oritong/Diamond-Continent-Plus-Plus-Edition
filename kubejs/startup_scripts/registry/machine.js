const Tags = Java.loadClass('dev.latvian.mods.kubejs.util.Tags')
const $ParallelLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.modifier.ParallelLogic')
const $ContentModifier = Java.loadClass('com.gregtechceu.gtceu.api.recipe.content.ContentModifier')
const $CoilWorkableElectricMultiblockMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine')
const $ModifierFunction = Java.loadClass('com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction')
const $OritoChatFormatting = Java.loadClass('net.minecraft.ChatFormatting')
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
    e.create("large_rock_breaker", "multiblock")
        .rotationState(RotationState.ALL)
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
        .workableCasingModel('gtceu:block/casings/gcym/high_temperature_smelting_casing', 'gtceu:block/multiblock/electric_blast_furnace')
})

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
