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
    e.recipes.gtceu.implosion_compressor().itemInputs('avaritia:diamond_lattice', 'ifeu:empty_nether_star', '4x gtceu:nether_star_dust').itemOutputs('3x minecraft:nether_star').chancedOutput('gtceu:dark_ash_dust', 2500, 0).duration(20 * 4).EUt(2 * 4 * 4 * 4 * 4 * 0.75)
})
