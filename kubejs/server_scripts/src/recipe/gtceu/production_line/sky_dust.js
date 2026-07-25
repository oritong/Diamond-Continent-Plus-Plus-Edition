ServerEvents.recipes(e => {
    e.recipes.gtceu.mixer().itemInputs('3x ae2:sky_dust').inputFluids(Fluid.of('minecraft:water', 1000)).outputFluids(Fluid.of('gtceu:meteor_slurry', 750)).EUt(120).duration(6 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('6x embers:ember_grit').inputFluids(Fluid.of('gtceu:meteor_slurry', 1200)).outputFluids(Fluid.of('gtceu:excited_meteor_slurry', 800)).EUt(60).duration(3 * 20)
    e.recipes.gtceu.autoclave().notConsumable('32x kubejs:originium_shard').inputFluids(Fluid.of('gtceu:excited_meteor_slurry', 1000)).itemOutputs('8x gtceu:deactivated_meteor_precipitate_dust').outputFluids(Fluid.of('gtceu:excited_space_fluid', 325)).EUt(20).duration(16 * 20)
    e.recipes.gtceu.centrifuge().itemInputs('25x gtceu:deactivated_meteor_precipitate_dust').itemOutputs('8x gtceu:ash_dust', '6x gtceu:silicon_dioxide_dust', '4x ae2:certus_quartz_dust', '2x mekanism:dust_quartz').EUt(8).duration(25 * 20)
    e.recipes.gtceu.chemical_bath().itemInputs('gtceu:steel_dust').inputFluids(Fluid.of('gtceu:excited_space_fluid', 144)).itemOutputs('gtceu:damascus_steel_dust').EUt(128).duration(8 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.mixer().itemInputs('4x gtceu:deactivated_meteor_precipitate_dust').inputFluids(Fluid.of('oritong:glimmer', 750)).outputFluids(Fluid.of('gtceu:space_glimmer_mixture', 500)).EUt(40).duration(4 * 20)
})
/*
3陨石粉+1000水=750陨石浆液 搅拌 6*20t 120eu
1200陨石浆液+6余烬砂粒=800激发态陨石浆液 化反 3*20 60eu
1000激发态陨石浆液+32源石碎片（催化）=8失活陨石沉淀物粉+325激发太空流体 高压釜 16*20t 20eu
25失活陨石沉淀物粉=8灰烬+6二氧化硅粉+4赛特斯石英粉+2石英粉 离心 25*20t 8eu
钢粉+144激发太空流体=大马士革钢粉 化浸 超净 8*20t 128eu
4失活陨石沉淀物+750微光=500太空微光混合液 搅拌 4*20t 40eu
*/
