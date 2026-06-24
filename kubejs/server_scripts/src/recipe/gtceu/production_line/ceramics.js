ServerEvents.recipes(e => {
    e.recipes.gtceu.chemical_reactor().itemInputs('5x gtceu:green_sapphire_dust', '6x gtceu:sodium_hydroxide_dust').itemOutputs('8x gtceu:sodium_aluminate_dust').outputFluids(Fluid.of('minecraft:water', 1000)).EUt(120).duration(100)
    e.recipes.gtceu.chemical_reactor().itemInputs('5x gtceu:sapphire_dust', '6x gtceu:sodium_hydroxide_dust').itemOutputs('8x gtceu:sodium_aluminate_dust').outputFluids(Fluid.of('minecraft:water', 1000)).EUt(120).duration(100)
    e.recipes.gtceu.mixer().itemInputs('4x gtceu:sodium_aluminate_dust').inputFluids(Fluid.of('minecraft:water', 3000)).itemOutputs('7x gtceu:aluminum_hydroxide_dust').outputFluids(Fluid.of('gtceu:sodium_hydroxide_solution', 1000)).EUt(30).duration(120)
    e.recipes.gtceu.dehydrator().inputFluids(Fluid.of('gtceu:sodium_hydroxide_solution', 1000)).itemOutputs('3x gtceu:sodium_hydroxide_dust').EUt(30).duration(140)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('14x gtceu:aluminum_hydroxide_dust').itemOutputs('5x gtceu:alumina_dust').outputFluids(Fluid.of('gtceu:steam', 1000)).EUt(120).duration(100).blastFurnaceTemp(2600)
    e.recipes.gtceu.sifter().itemInputs('2x gtceu:alumina_dust').chancedOutput('gtceu:alumina_ceramic_dust', 8000, 0).chancedOutput('gtceu:alumina_ceramic_dust', 6000, 0).chancedOutput('gtceu:alumina_ceramic_dust', 4000, 0).chancedOutput('gtceu:alumina_ceramic_dust', 2000, 0).EUt(120).duration(7.5 * 20)
    e.recipes.gtceu.compressor().itemInputs('12x gtceu:alumina_ceramic_dust').itemOutputs('kubejs:raw_alumina_ceramic_block').EUt(120).duration(800)
    e.recipes.gtceu.chemical_bath().itemInputs('9x gtceu:alumina_ceramic_dust').inputFluids(Fluid.of('gtceu:glue', 1000)).itemOutputs('kubejs:raw_alumina_ceramic_block').EUt(500).duration(200)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('kubejs:raw_alumina_ceramic_block').inputFluids(Fluid.of('gtceu:nitrogen', 500)).itemOutputs('gtceu:alumina_ceramic_block').EUt(120).duration(600).blastFurnaceTemp(2700)
})
//氧化铝陶瓷
/*
5(绿色)蓝宝石粉+6氢氧化钠粉=8铝酸钠粉+1000水 100t 120EU 化反chemical_reactor
4铝酸钠+3000水=7氢氧化铝+1000氢氧化钠溶液 120t 30eu 搅拌mixer
1000氢氧化钠溶液=3氢氧化钠粉 140t 30eu 脱水dehydrator
14氢氧化铝=5氧化铝+1000蒸汽 100t 2600k 120eu 电高electric_blast_furnace
2氧化铝=0.8+0.6+0.4+0.2氧化铝陶瓷粉 7.5*20t 120eu 筛选sifter
12氧化铝陶瓷粉=氧化铝陶瓷粗坯 800t 120eu 压缩compressor
9氧化铝陶瓷粉+1B胶水=氧化铝陶瓷粗坯 200t 500eu 化浸chemical_bath
氧化铝陶瓷粗坯+500气态氮=氧化铝陶瓷块 600t 2700k 120eu 电高
*/
