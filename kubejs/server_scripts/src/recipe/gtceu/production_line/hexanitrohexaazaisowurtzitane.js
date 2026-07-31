ServerEvents.recipes(e => {
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:toluene', 1000), Fluid.of('gtceu:chlorine', 1000)).notConsumable('gtceu:blacklight').outputFluids(Fluid.of('gtceu:benzyl_chloride', 1000), Fluid.of('gtceu:hydrochloric_acid', 1000)).EUt(4000).duration(8 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.mixer().inputFluids(Fluid.of('gtceu:formaldehyde', 6000), Fluid.of('gtceu:ammonia_solution', 4000)).itemOutputs('gtceu:hexamethylenetetramine_dust').outputFluids(Fluid.of('minecraft:water', 6000)).EUt(950).duration(6 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:hexamethylenetetramine_dust').inputFluids(Fluid.of('gtceu:benzyl_chloride', 1000)).itemOutputs('gtceu:benzyl_hexamethylenetetramine_chloride_dust').EUt(1500).duration(7.5 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.chemical_plant().itemInputs('gtceu:benzyl_hexamethylenetetramine_chloride_dust').inputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000), Fluid.of('minecraft:water', 1000)).outputFluids(Fluid.of('gtceu:benzylamine_hydrochloride', 1000), Fluid.of('gtceu:formaldehyde', 1000), Fluid.of('gtceu:ammonium_chloride', 1000)).EUt(600).duration(20 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:benzylamine_hydrochloride', 1000), Fluid.of('gtceu:sodium_hydroxide_solution', 1000)).outputFluids(Fluid.of('gtceu:benzylamine', 1000), Fluid.of('gtceu:salt_water', 1000), Fluid.of('minecraft:water', 1000)).EUt(1200).duration(7.5 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.brewery().inputFluids(Fluid.of('gtceu:benzylamine', 1000)).notConsumable('4x gtceu:sodium_hydroxide_dust').outputFluids(Fluid.of('gtceu:dried_benzylamine', 1000)).EUt(256).duration(8 * 20)
    e.recipes.gtceu.distillation_tower().inputFluids(Fluid.of('gtceu:dried_benzylamine', 1000)).outputFluids(Fluid.of('gtceu:refined_benzylamine', 800)).EUt(1070).duration(10 * 20)
    e.recipes.gtceu.vacuum_freezer().itemInputs('9x gtceu:silver_nugget').inputFluids(Fluid.of('gtceu:nitric_acid', 2000)).outputFluids(Fluid.of('gtceu:silver_nitrate', 1000), Fluid.of('gtceu:nitrogen_dioxide', 1000), Fluid.of('minecraft:water', 1000)).EUt(325).duration(325 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('gtceu:alumina_dust', 'gtceu:phosphorus_dust').inputFluids(Fluid.of('gtceu:silver_nitrate', 1000)).itemOutputs('kubejs:silver_catalyst').EUt(2048).duration(8 * 20).blastFurnaceTemp(2000)
    e.recipes.gtceu.fluid_heater().inputFluids(Fluid.of('gtceu:ethylene_glycol', 1000)).outputFluids(Fluid.of('gtceu:gaseous_ethylene_glycol', 1000)).EUt(400).duration(20 * 20)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:ethylene', 1000), Fluid.of('gtceu:oxygen', 1000)).outputFluids(Fluid.of('gtceu:ethylene_oxide', 1000)).EUt(480).duration(5 * 20).circuit(5)
    e.recipes.gtceu.mixer().inputFluids(Fluid.of('gtceu:ethylene_oxide', 1000), Fluid.of('minecraft:water', 1000)).outputFluids(Fluid.of('gtceu:wet_ethylene_oxide', 1000)).EUt(120).duration(7 * 20)
    e.recipes.gtceu.fluid_heater().inputFluids(Fluid.of('gtceu:wet_ethylene_oxide', 1000)).outputFluids(Fluid.of('gtceu:ethylene_glycol', 1000)).EUt(120).duration(6.5 * 20)
    e.recipes.gtceu.electric_blast_furnace().inputFluids(Fluid.of('gtceu:gaseous_ethylene_glycol', 1000)).notConsumable('kubejs:silver_catalyst').outputFluids(Fluid.of('gtceu:glyoxal', 1000)).EUt(100).duration(20 * 4.5).blastFurnaceTemp(800)
    e.recipes.gtceu.chemical_plant().inputFluids(Fluid.of('gtceu:benzene', 1000), Fluid.of('gtceu:bromine', 1000)).notConsumable('4x gtceu:tiny_iron_dust').outputFluids(Fluid.of('gtceu:bromobenzene', 1000), Fluid.of('gtceu:hydrobromic_acid', 1000)).EUt(300).duration(20 * 10)
    e.recipes.gtceu.chemical_plant().inputFluids(Fluid.of('gtceu:refined_benzylamine', 6000), Fluid.of('gtceu:glyoxal', 3000)).notConsumableFluid(Fluid.of('gtceu:bromobenzene', 1000)).notConsumableFluid(Fluid.of('gtceu:formic_acid', 1000)).itemOutputs('gtceu:hexabenzylhexaazaisowurtzitane_dust').EUt(1000).duration(20 * 5)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:palladium_dust').inputFluids(Fluid.of('gtceu:nitric_acid', 2000), Fluid.of('gtceu:hydrogen_peroxide', 1000)).outputFluids(Fluid.of('gtceu:palladium_nitrate', 1000), Fluid.of('minecraft:water', 2000)).EUt(240).duration(5 * 20)
    e.recipes.gtceu.chemical_bath().itemInputs('gtceu:activated_carbon_dust').inputFluids(Fluid.of('gtceu:palladium_nitrate', 1000)).itemOutputs('gtceu:palladium_activated_carbon_dust').EUt(340).duration(12.5 * 20)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('gtceu:palladium_activated_carbon_dust').inputFluids(Fluid.of('gtceu:hydrogen', 2000)).itemOutputs('gtnn:palladium_on_carbon_catalyst').EUt(400).duration(15 * 20).blastFurnaceTemp(600)
    e.recipes.gtceu.chemical_plant().itemInputs('gtceu:hexabenzylhexaazaisowurtzitane_dust', 'gtnn:palladium_on_carbon_catalyst').inputFluids(Fluid.of('gtceu:hydrogen', 4000), Fluid.of('gtceu:acetic_anhydride', 4000)).itemOutputs('gtceu:tetraacetyldibenzylhexaazaisowurtzitane_dust').EUt(2000).duration(20 * 5).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:tetraacetyldibenzylhexaazaisowurtzitane_dust').inputFluids(Fluid.of('gtceu:hydrogen', 2000)).itemOutputs('gtceu:tetraacetylhexaazaisowurtzitane_dust').outputFluids(Fluid.of('gtceu:toluene', 2000)).EUt(2600).duration(20 * 5).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000), Fluid.of('gtceu:sulfur_trioxide', 1000)).outputFluids(Fluid.of('gtceu:fuming_sulfuric_acid', 1000)).EUt(120).duration(10 * 20)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:nitrogen_dioxide', 1000), Fluid.of('gtceu:nitric_acid', 1000)).outputFluids(Fluid.of('gtceu:fuming_nitric_acid', 1000)).EUt(120).duration(10 * 20)
    e.recipes.gtceu.mixer().inputFluids(Fluid.of('gtceu:fuming_nitric_acid', 1000), Fluid.of('gtceu:fuming_sulfuric_acid', 2000)).outputFluids(Fluid.of('gtceu:fuming_nitric_acid_mixture', 2000)).EUt(160).duration(4 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:tetraacetylhexaazaisowurtzitane_dust').inputFluids(Fluid.of('gtceu:fuming_nitric_acid_mixture', 4000)).itemOutputs('gtceu:hexanitrohexaazaisowurtzitane_dust').outputFluids(Fluid.of('gtceu:acetic_acid', 4000), Fluid.of('gtceu:diluted_sulfuric_acid', 24000)).EUt(32768).duration(20 * 5).cleanroom(CleanroomType.CLEANROOM)
})
/*
1. 1000甲苯 + 1000气态氯 + 紫外线灯（催化） → 1000氯卞 + 1000盐酸 化反 4000eu 8*20t
2. 6000甲醛 + 4000氨水 → 六亚甲基四胺 + 6000水 搅拌 950eu 6*20t
3. 1000氯卞 + 六亚甲基四胺→ 氯化苄基六亚甲基四胺 化反 1500eu 7.5*20t
4. 氯化苄基六亚甲基四胺 + 1000盐酸+1000水→ 1000苄胺盐酸盐 + 1000甲醛 + 1000氯化铵 化工 20*20t 600eu
5. 1000苄胺盐酸盐 + 1000氢氧化钠溶液 → 1000苄胺 +1000盐水+1000水 化反 1200eu 7.5*20t
6. 1000苄胺 +4氢氧化钠粉（催化）→1000干燥苄胺 酿造 256eu 8*20t
7. 1000干燥苄胺 → 800精制苄胺 蒸馏塔 1070eu 10*20t
9. 9银粒 + 2000硝酸 → 1000硝酸银 + 二氧化氮 + 水 冷冻 325*20t 325eu
10. 1000硝酸银 + 氧化铝 + 磷 → 银基催化剂 电高 2048eu 8*20t 2000k
11. 1000乙二醇 → 1000气态乙二醇 流体加热 400eu 20*20t
12. 1000乙烯 + 1000氧 → 1000环氧乙烷 化反5 480eu 5*20t
13. 1000环氧乙烷 + 1000水 → 1000湿环氧乙烷 搅拌 120eu 7*20t
14. 1000湿环氧乙烷 → 1000乙二醇 流体加热 120eu 6.5*20t
15. 银基催化剂（催化） +1000气态乙二醇 → 1000乙二醛 电高 20*4.5t 100eu 800k
16. 1000苯 + 1000溴 + 4小撮铁粉（催化） → 1000溴苯（催化） + 1000氢溴酸 化工 20*10t 300eu
17. 6000精制苄胺 + 3000乙二醛 + 1000溴苯（催化） + 1000甲酸（催化）→ 六苄基六氮杂异伍兹烷 化工 1000eu 20*5t
18. 钯粉 + 2000硝酸 + 1000过氧化氢 → 1000硝酸钯 + 2000水 化反 240eu 5*20t
19. 1000硝酸钯 + 活性炭 → 吸附钯离子的活性炭 化浸 340eu 12.5*20t
20. 吸附钯离子的活性炭 + 2000气态氢 → 钯基催化剂 电高 400eu 600k 15*20t
21. 六苄基六氮杂异伍兹烷 + 钯基催化剂+ 4000气态氢 + 4000乙酸酐 → 四乙酰基二苄基六氮杂异伍兹烷 化工 2000eu 20*5t
22. 四乙酰基二苄基六氮杂异伍兹烷 + 2000气态氢 → 四乙酰基六氮杂异伍兹烷 + 2000甲苯 化反 2600eu 20*5t
23. 1000硫酸 + 1000三氧化硫 → 1000发烟硫酸 化反 120eu 10*20t
24. 1000二氧化氮 + 1000硝酸 → 1000发烟硝酸 化反 120eu 10*20t
25. 1000发烟硝酸 + 2000发烟硫酸 → 2000发烟硝酸混酸 搅拌 160eu 4*20t
26. 四乙酰基六氮杂异伍兹烷 + 4000发烟硝酸混酸 → 六硝基六氮杂异伍兹烷 + 4000乙酸 + 24000稀硫酸 化反 32768eu 20*5t
*/
