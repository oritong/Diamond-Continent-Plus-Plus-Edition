//扫描仪
ServerEvents.recipes(e=>{
    e.recipes.gtceu.scanner().itemInputs('replication:matter_blueprint').circuit(1).inputFluids(Fluid.of('gtceu:steel', 1225)).itemOutputs(Item.of('replication:matter_blueprint', '{Item:{Count:1b,id:"gtceu:lv_super_chest"},Progress:1.0d}')).duration(20*10).EUt(16)
    e.recipes.gtceu.scanner().itemInputs('replication:matter_blueprint').circuit(2).inputFluids(Fluid.of('gtceu:steel', 1225)).itemOutputs(Item.of('replication:matter_blueprint', '{Item:{Count:1b,id:"gtceu:lv_super_tank"},Progress:1.0d}')).duration(20*10).EUt(16)
    e.recipes.gtceu.scanner().itemInputs('replication:matter_blueprint').circuit(1).inputFluids(Fluid.of('gtceu:rubber', 1225)).itemOutputs(Item.of('replication:matter_blueprint', '{Item:{Count:1b,id:"gtceu:fluid_cell"},Progress:1.0d}')).duration(20*10).EUt(16)
    e.recipes.gtceu.scanner().itemInputs('gtceu:data_stick', '64x gtceu:stone_dust').inputFluids(Fluid.of('gtceu:air', 16000)).itemOutputs('kubejs:overworld_data').EUt(GTValues.VA[GTValues.HV]).duration(100*20)
    e.recipes.gtceu.scanner().itemInputs('gtceu:data_stick', '64x create:cinder_flour').inputFluids(Fluid.of('gtceu:nether_air', 32000)).itemOutputs('kubejs:nether_data').EUt(GTValues.VA[GTValues.EV]).duration(100*20)
    e.recipes.gtceu.scanner().itemInputs('gtceu:data_stick', '64x occultism:crushed_end_stone').inputFluids(Fluid.of('gtceu:liquid_ender_air', 64000)).itemOutputs('kubejs:end_data').EUt(GTValues.VA[GTValues.IV]).duration(100*20)
})