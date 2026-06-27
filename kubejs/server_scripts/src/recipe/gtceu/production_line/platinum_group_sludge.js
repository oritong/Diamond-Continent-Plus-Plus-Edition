ServerEvents.recipes(e => {
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:concentrated_platinum', 36000), Fluid.of('gtceu:ammonium_chloride', 3600)).itemOutputs('16x gtceu:platinum_salt_dust', '4x gtceu:platinum_raw_dust').outputFluids(Fluid.of('gtceu:palladium_rich_ammonia', 3600), Fluid.of('gtceu:nitrogen_dioxide', 9000), Fluid.of('gtceu:hydrochloric_acid', 27000)).EUt(480).duration(35 * 20).circuit(3)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:concentrated_platinum', 8000), Fluid.of('gtceu:ammonium_chloride', 400)).itemOutputs('32x gtceu:tiny_platinum_salt_dust', '8x gtceu:tiny_platinum_raw_dust').outputFluids(Fluid.of('gtceu:palladium_rich_ammonia', 400), Fluid.of('gtceu:nitrogen_dioxide', 1000), Fluid.of('gtceu:hydrochloric_acid', 3000)).EUt(30).duration(60 * 20).circuit(1)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('gtceu:refined_platinum_salt_dust').itemOutputs('gtceu:platinum_metal_dust').outputFluids(Fluid.of('gtceu:chlorine', 87)).EUt(120).duration(10 * 20).blastFurnaceTemp(900).circuit(1)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:platinum_metal_dust').inputFluids(Fluid.of('gtceu:aqua_regia', 2000)).outputFluids(Fluid.of('gtceu:concentrated_platinum', 2000)).itemOutputs('gtceu:tiny_platinum_slag_dust').EUt(30).duration(12.5 * 20).circuit(1)
    e.recipes.gtceu.chemical_reactor().itemInputs('9x gtceu:platinum_metal_dust').inputFluids(Fluid.of('gtceu:aqua_regia', 18000)).outputFluids(Fluid.of('gtceu:concentrated_platinum', 18000)).itemOutputs('gtceu:platinum_slag_dust').EUt(30).duration(112.5 * 20).circuit(9)
    e.recipes.gtceu.chemical_reactor().itemInputs('9x gtceu:purified_chalcocite_ore', '9x gtceu:platinum_metal_dust').inputFluids(Fluid.of('gtceu:aqua_regia', 18000)).outputFluids(Fluid.of('gtceu:concentrated_platinum', 18000)).itemOutputs('gtceu:platinum_slag_dust').EUt(30).duration(112.5 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('9x gtceu:purified_cooperite_ore', '9x gtceu:platinum_metal_dust').inputFluids(Fluid.of('gtceu:aqua_regia', 18000)).outputFluids(Fluid.of('gtceu:concentrated_platinum', 18000)).itemOutputs('gtceu:platinum_slag_dust').EUt(30).duration(112.5 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('9x gtceu:purified_pentlandite_ore', '9x gtceu:platinum_metal_dust').inputFluids(Fluid.of('gtceu:aqua_regia', 18000)).outputFluids(Fluid.of('gtceu:concentrated_platinum', 18000)).itemOutputs('gtceu:platinum_slag_dust').EUt(30).duration(112.5 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('9x gtceu:purified_chalcopyrite_ore', '9x gtceu:platinum_metal_dust').inputFluids(Fluid.of('gtceu:aqua_regia', 18000)).outputFluids(Fluid.of('gtceu:concentrated_platinum', 18000)).itemOutputs('gtceu:platinum_slag_dust').EUt(30).duration(112.5 * 20)
    e.recipes.gtceu.large_chemical_reactor().inputFluids(Fluid.of('minecraft:water', 36000), Fluid.of('gtceu:rhodium_sulfate_gas', 39600)).itemOutputs('4x gtceu:inert_metal_mixture_dust').outputFluids(Fluid.of('gtceu:rhodium_sulfate', 39600), Fluid.of('gtceu:potassium', 7200)).EUt(30).duration(60 * 20).circuit(3)
    e.recipes.gtceu.large_chemical_reactor().inputFluids(Fluid.of('minecraft:water', 10000), Fluid.of('gtceu:rhodium_sulfate_gas', 11000)).itemOutputs('10x gtceu:tiny_inert_metal_mixture_dust').outputFluids(Fluid.of('gtceu:rhodium_sulfate', 11000), Fluid.of('gtceu:potassium', 2000)).EUt(30).duration(15 * 20).circuit(1)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:iridium_chloride_dust', 'gtceu:calcium_dust').itemOutputs('gtceu:metal_sludge_dust', 'gtceu:iridium_dust').outputFluids(Fluid.of('gtceu:calcium_chloride', 3000)).EUt(1920).duration(15 * 20)
    e.recipes.gtceu.centrifuge().itemInputs('2x gtceu:metal_sludge_dust').itemOutputs('gtceu:nickel_dust', 'gtceu:copper_dust').EUt(10).duration(1.5 * 20)
    e.recipes.gtceu.fluid_solidifier().inputFluids(Fluid.of('gtceu:calcium_chloride', 1000)).itemOutputs('gtceu:calcium_chloride_dust').EUt(30).duration(1.8 * 20).circuit(1)
})
/*
36000浓缩铂+3600液态氯化铵=16铂盐粉+4粗铂粉+3600富钯氨+9000二氧化氮+27000盐酸 化反3 480eu 35*20t
8000浓缩铂+400液态氯化铵=32小撮铂盐粉+8小撮粗铂粉+400富钯氨+1000二氧化氮+3000盐酸 化反1 30eu 60*20t
精炼铂盐粉=铂金属粉+87气态氯 电高1 120eu 10*20t 900k
铂金属粉+2000王水=2000浓缩铂+小撮铂渣粉 化反1 30eu 12.5*20t
9铂金属粉+18000王水=18000浓缩铂+铂渣粉 化反9 30eu 112.5*20t
9四种矿石+9铂金属粉+18000王水=18000浓缩铂+铂渣粉 化反 30eu 112.5*20t
36000水+39600硫酸铑=4惰性金属混合物+39600硫酸铑溶液+7200液态钾 大化反3 30eu 60*20t
10000水+11000硫酸铑=10小撮惰性金属混合物+11000硫酸铑溶液+2000液态钾 大化反1 30eu 15*20t
氯化铱粉+钙粉=金属泥渣粉+铱粉+3000氯化钙 化反 1920eu 15*20t
2金属泥渣粉=镍粉+铜粉 离心 10eu 1.5*20t
1000氯化钙=氯化钙粉 固化1 30eu 1.8*20t
*/
