//电高
ServerEvents.recipes(e => {
    e.recipes.gtceu.electric_blast_furnace().itemInputs('replication:raw_replica').inputFluids(Fluid.of('oritong:glimmer', 800)).itemOutputs('replication:replica_ingot').EUt(16).duration(18.8 * 20).blastFurnaceTemp(1465)
    e.recipes.gtceu.electric_blast_furnace().itemOutputs('embers:iron_aspectus').inputFluids(Fluid.of('gtceu:iron', 648)).itemInputs('embers:ember_crystal').EUt(16).duration(16 * 20).blastFurnaceTemp(1250)
    e.recipes.gtceu.electric_blast_furnace().itemOutputs('embers:copper_aspectus').inputFluids(Fluid.of('gtceu:copper', 648)).itemInputs('embers:ember_crystal').EUt(16).duration(16 * 20).blastFurnaceTemp(1250)
    e.recipes.gtceu.electric_blast_furnace().itemOutputs('embers:lead_aspectus').inputFluids(Fluid.of('gtceu:lead', 648)).itemInputs('embers:ember_crystal').EUt(16).duration(16 * 20).blastFurnaceTemp(1250)
    e.recipes.gtceu.electric_blast_furnace().itemOutputs('embers:silver_aspectus').inputFluids(Fluid.of('gtceu:silver', 648)).itemInputs('embers:ember_crystal').EUt(16).duration(16 * 20).blastFurnaceTemp(1250)
    e.recipes.gtceu.electric_blast_furnace().itemOutputs('embers:dawnstone_aspectus').inputFluids(Fluid.of('embers:molten_dawnstone', 648)).itemInputs('embers:ember_crystal').EUt(16).duration(16 * 20).blastFurnaceTemp(1250)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('4x gtceu:obsidian_dust', '2x ars_nouveau:fire_essence', 'tgears:crushed_scorchia').itemOutputs('6x tconstruct:scorched_brick').inputFluids(Fluid.of('lava', 1000)).EUt(233).duration(28 * 20).blastFurnaceTemp(2048)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('gtceu:kanthal_dust').itemOutputs('gtceu:hot_kanthal_ingot').circuit(1).duration(60 * 20).EUt(GTValues.VA[GTValues.MV] * 0.48).blastFurnaceTemp(1650)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('gtceu:kanthal_dust').itemOutputs('gtceu:hot_kanthal_ingot').inputFluids(Fluid.of('gtceu:nitrogen', 1000)).circuit(2).duration(40 * 20).EUt(GTValues.VA[GTValues.MV] * 0.48).blastFurnaceTemp(1650)
})
