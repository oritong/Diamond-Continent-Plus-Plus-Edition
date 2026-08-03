//聚爆压缩
//输入x4，输出x3
let explode_dust_to_gem = [
    ['ae2:fluix_dust', 'ae2:fluix_crystal']
]

ServerEvents.recipes(e => {
    explode_dust_to_gem.forEach(([a, b])=>{
        e.recipes.gtceu.implosion_compressor().itemInputs(`4x ${a}`, '8x gtceu:powderbarrel').itemOutputs(`3x ${b}`).EUt(30).duration(20)
        e.recipes.gtceu.implosion_compressor().itemInputs(`4x ${a}`, '4x minecraft:tnt').itemOutputs(`3x ${b}`).EUt(30).duration(20)
        e.recipes.gtceu.implosion_compressor().itemInputs(`4x ${a}`, '2x gtceu:dynamite').itemOutputs(`3x ${b}`).EUt(30).duration(20)
        e.recipes.gtceu.implosion_compressor().itemInputs(`4x ${a}`, 'gtceu:industrial_tnt').itemOutputs(`3x ${b}`).EUt(30).duration(20)
    })
    e.recipes.gtceu.implosion_compressor().itemInputs('3x gtceu:industrial_tnt', '2x ifeu:empty_nether_star', '5x gtceu:nether_star_dust').itemOutputs('3x minecraft:nether_star').chancedOutput('gtceu:dark_ash_dust', 3250, 0).duration(20 * 3.25).EUt(1325)
})
