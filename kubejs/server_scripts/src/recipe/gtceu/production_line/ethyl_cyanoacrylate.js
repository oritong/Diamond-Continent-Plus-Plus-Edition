ServerEvents.recipes(e => {
    e.recipes.gtceu.mixer().itemInputs('gtceu:sieved_zeolite_powder_dust').inputFluids(Fluid.of('gtceu:ethanol', 1000)).itemOutputs('gtceu:wet_sieved_zeolite_powder_dust').outputFluids(Fluid.of('gtceu:absolute_ethanol', 1000)).EUt(120).duration(5 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.dehydrator().itemInputs('gtceu:wet_sieved_zeolite_powder_dust').itemOutputs('gtceu:sieved_zeolite_powder_dust').EUt(120).duration(2.5 * 20)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('gtceu:silica_alumina_gel_powder_dust', 'gtceu:zeolite_dust').itemOutputs('gtceu:sieved_zeolite_powder_dust').EUt(120).duration(20 * 20).blastFurnaceTemp(4500)
    e.recipes.gtceu.mixer().itemInputs('5x gtceu:alumina_dust', '3x gtceu:silica_gel_powder_dust').itemOutputs('gtceu:silica_alumina_gel_powder_dust').EUt(120).duration(3 * 20)
    e.recipes.gtceu.dehydrator().inputFluids(Fluid.of('gtceu:silica_gel_matrix', 1000)).itemOutputs('3x gtceu:silica_gel_powder_dust', '2x mekanism:salt').EUt(480).duration(6.5 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.mixer().itemInputs('3x gtceu:silicon_dioxide_dust', '3x gtceu:sodium_hydroxide_dust').inputFluids(Fluid.of('gtceu:distilled_water', 1000)).outputFluids(Fluid.of('gtceu:silica_gel_matrix', 1000)).EUt(120).duration(4 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:acetic_acid', 1000), Fluid.of('gtceu:chlorine', 1000)).notConsumableFluid(Fluid.of('gtceu:acetic_anhydride', 500)).itemOutputs('gtceu:chloroacetic_acid_dust').outputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000)).EUt(192).duration(4 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:chloroacetic_acid_dust').inputFluids(Fluid.of('gtceu:absolute_ethanol', 1000), Fluid.of('gtceu:sulfuric_acid', 1000)).notConsumableFluid(Fluid.of('gtceu:benzene', 1000)).outputFluids(Fluid.of('gtceu:ethyl_chloroacetate', 1000), Fluid.of('gtceu:diluted_sulfuric_acid', 1500)).EUt(160).duration(5.5 * 20)
    e.recipes.gtceu.mixer().inputFluids(Fluid.of('gtceu:ethyl_chloroacetate', 2000), Fluid.of('gtceu:carbon_monoxide', 2000), Fluid.of('gtceu:ethanol', 2000)).outputFluids(Fluid.of('gtceu:polyethyl_acetate_mixture', 2000)).EUt(224).duration(7 * 20)
    e.recipes.gtceu.autoclave().inputFluids(Fluid.of('gtceu:polyethyl_acetate_mixture', 2000)).notConsumable('2x gtceu:cobalt_chloride_dust').notConsumable('2x gtceu:cobalt_acetate_dust').outputFluids(Fluid.of('gtceu:diethyl_malonate', 2000)).EUt(320).duration(6 * 20)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:diethyl_malonate', 2000), Fluid.of('gtceu:ammonia', 2000)).itemOutputs('2x gtceu:monoethyl_malonamide_dust').outputFluids(Fluid.of('gtceu:ethanol', 2000)).EUt(192).duration(5 * 20)
    e.recipes.gtceu.dehydrator().itemInputs('gtceu:monoethyl_malonamide_dust').outputFluids(Fluid.of('gtceu:ethyl_cyanoacetate', 1000)).EUt(128).duration(4.5 * 20)
    e.recipes.gtceu.large_chemical_reactor().itemInputs('2x gtceu:phosphorus_pentoxide_dust').inputFluids(Fluid.of('gtceu:ethyl_cyanoacetate', 2000), Fluid.of('gtceu:formaldehyde', 2000), Fluid.of('gtceu:acetonitrile', 2000), Fluid.of('gtceu:sulfur_dioxide', 500)).notConsumableFluid(Fluid.of('gtceu:pyridine', 1000)).outputFluids(Fluid.of('gtceu:ethyl_cyanoacrylate', 2000), Fluid.of('minecraft:water', 2000)).EUt(480).duration(8 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:cobalt_dust').inputFluids(Fluid.of('gtceu:nitric_acid', 1000)).outputFluids(Fluid.of('gtceu:cobalt_nitrate_solution', 1000)).EUt(160).duration(4 * 20)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:ethanol', 1000), Fluid.of('gtceu:ammonia', 1000)).outputFluids(Fluid.of('gtceu:acetonitrile', 1000), Fluid.of('minecraft:water', 1000)).EUt(128).duration(5 * 20)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:cobalt_nitrate_solution', 1000)).itemInputs('gtceu:soda_ash_dust').itemOutputs('gtceu:cobalt_carbonate_dust', '3x gtceu:sodium_nitrate_dust').EUt(256).duration(5 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:cobalt_carbonate_dust').inputFluids(Fluid.of('gtceu:acetic_acid', 1000)).itemOutputs('gtceu:cobalt_acetate_dust').outputFluids(Fluid.of('minecraft:water', 1000), Fluid.of('gtceu:carbon_dioxide', 1000)).EUt(128).duration(3.5 * 20)
    e.recipes.gtceu.pyrolyse_oven().itemInputs('8x minecraft:diamond').outputFluids(Fluid.of('gtceu:coal_tar', 16000)).chancedOutput('gtceu:ash_dust', 6000, 0).EUt(96).duration(16 * 20).circuit(8)
    e.recipes.gtceu.distillery().inputFluids(Fluid.of('gtceu:coal_tar', 1000)).outputFluids(Fluid.of('gtceu:light_oil_fraction', 50)).EUt(288).duration(6 * 20).circuit(13)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:light_oil_fraction', 1000), Fluid.of('gtceu:diluted_sulfuric_acid', 2000), Fluid.of('gtceu:ammonia_solution', 2000)).outputFluids(Fluid.of('gtceu:crude_light_pyridine', 2000)).EUt(288).duration(5.5 * 20).circuit(5)
    e.recipes.gtceu.mixer().inputFluids(Fluid.of('gtceu:crude_light_pyridine', 2000), Fluid.of('gtceu:benzene', 750)).outputFluids(Fluid.of('gtceu:benzene_crude_pyridine', 2000)).EUt(144).duration(4 * 20)
    e.recipes.gtceu.fluid_heater().inputFluids(Fluid.of('gtceu:benzene_crude_pyridine', 2000)).outputFluids(Fluid.of('gtceu:azeotropic_crude_pyridine', 2000)).EUt(192).duration(5 * 20)
    e.recipes.gtceu.centrifuge().inputFluids(Fluid.of('gtceu:azeotropic_crude_pyridine', 1000)).outputFluids(Fluid.of('gtceu:refined_crude_pyridine', 1000), Fluid.of('minecraft:water', 1000), Fluid.of('gtceu:benzene', 375)).EUt(320).duration(5 * 20)
    e.recipes.gtceu.distillery().inputFluids(Fluid.of('gtceu:refined_crude_pyridine', 2000)).outputFluids(Fluid.of('gtceu:pyridine', 2000)).EUt(256).duration(6.5 * 20)
    e.recipes.gtceu.mixer().inputFluids(Fluid.of('gtceu:ammonia', 1000), Fluid.of('minecraft:water', 1000)).outputFluids(Fluid.of('gtceu:ammonia_solution', 1000)).EUt(160).duration(4 * 20)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('minecraft:water', 1000), Fluid.of('gtceu:sulfuric_acid', 1000)).outputFluids(Fluid.of('gtceu:diluted_sulfuric_acid', 1000)).EUt(144).duration(4 * 20).circuit(5)
})
/*
过筛沸石颗粒粉+1000乙醇=湿过筛沸石颗粒粉+1000绝对乙醇 5*20t 120eu 搅拌 超净
湿过筛沸石颗粒粉=过筛沸石颗粒粉 2.5*20t 120eu 脱水
硅铝凝胶粉+沸石粉=过筛沸石颗粒粉 20*20t 120eu 4500k 电高
5氧化铝粉+3硅胶粉=硅铝凝胶粉 3*20t 120eu 搅拌
1000硅胶基质=3硅胶粉+2盐 6.5*20t 480eu 脱水 超净
3二氧化硅+3氢氧化钠+1000蒸馏水=1000硅胶基质 4*20t 120eu 搅拌 超净
*/
/*
1 乙酸 + 1000 气态氯 + 500 乙酸酐（催化） → 1 氯乙酸 + 1000 盐酸 4*20t 192eu 化反
1 氯乙酸 + 1000 无水乙醇 + 1000 硫酸 + 1000 苯（催化） → 1000 氯乙酸乙酯 + 1500 稀硫酸 5.5*20t 160eu 化反
2000 氯乙酸乙酯 + 2000 一氧化碳 + 2000 乙醇 → 2000 聚乙酸乙酯混合液 7*20t 224eu 搅拌
2000 聚乙酸乙酯混合液 + 2 氯化钴粉（催化） + 2 醋酸钴粉（催化） → 2000 丙二酸二乙酯 6*20t 320eu 高压釜
2000 丙二酸二乙酯 + 2000 氨 → 2 丙二酸单乙酯酰胺粉 + 2000 乙醇 5*20t 192eu 化反
1 丙二酸单乙酯酰胺粉 → 1000 氰乙酸乙酯 + 1000 水 4.5*20t 128eu 脱水
2000 氰乙酸乙酯 + 2000 甲醛 + 2000 乙腈 + 2000 环己烷 + 500 二氧化硫 + 吡啶（催化） → 2000 α-氰基丙烯酸乙酯 + 2000 水 7.5*20t 512eu 大化反 超净
2000 氰乙酸乙酯 + 2000 甲醛 + 2000 乙腈 + 2 五氧化二磷 + 500 二氧化硫 + 吡啶（催化） → 2000 α-氰基丙烯酸乙酯 + 2000 水 8*20t 480eu 大化反 超净
1 钴粉 + 1000 硝酸 → 1000 硝酸钴溶液 4*20t 160eu 化反
1000 硝酸钴溶液 + 1 纯碱粉 → 1 碳酸钴粉 + 3 硝酸钠粉 5*20t 256eu 化反
1 碳酸钴粉 + 1000 乙酸 → 1 醋酸钴粉 + 1000 水 + 1000 二氧化碳 3.5*20t 128eu 化反
8 钻石 → 16000 煤焦油 16*20t 96eu 热解炉 8电路
1000 煤焦油 → 50 轻油馏分 6*20t 288eu 蒸馏室 13电路
1000 轻油馏分 + 2000 稀硫酸 + 2000 氨水 → 2000 粗轻吡啶 5.5*20t 288eu 化反 5电路
2000 粗轻吡啶 + 750 苯 → 2000 含苯粗轻吡啶 4*20t 144eu 搅拌
2000 含苯粗轻吡啶 → 2000 共沸粗轻吡啶 5*20t 192eu 流体加热器
1000 共沸粗轻吡啶 → 1000 精制粗轻吡啶 + 1000 水 + 375 苯 5*20t 320eu 离心机
2000 精制粗轻吡啶 → 2000 吡啶 6.5*20t 256eu 蒸馏室
1000 氨 + 1000 水 → 1000 氨水 4*20t 160eu 搅拌
1000 水 + 1000 硫酸 → 1000 稀硫酸 4*20t 144eu 化反 5电路
*/
