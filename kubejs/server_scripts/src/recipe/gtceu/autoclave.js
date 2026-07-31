//高压釜
//粉做宝石
let autoclave_dust_to_gem = [
    ['ae2:fluix_dust', 'ae2:fluix_crystal']
]
ServerEvents.recipes(e=>{
    autoclave_dust_to_gem.forEach(([a, b])=>{
        e.recipes.gtceu.autoclave().itemInputs(a).chancedOutput(b, 7500, 0).inputFluids(Fluid.of('water', 250)).duration(60*20).EUt(24)
        e.recipes.gtceu.autoclave().itemInputs(a).itemOutputs(b).inputFluids(Fluid.of('gtceu:distilled_water', 50)).duration(30*20).EUt(24)
    })
    e.recipes.gtceu.autoclave().itemInputs('gtceu:steel_plate').notConsumable('oritong:diamond_upgrade_smithing_template').inputFluids(Fluid.of('gtceu:enriched_diamond', 40)).itemOutputs('oritong:diamond_upgrade_smithing_template').EUt(20).duration(8*20)
    e.recipes.gtceu.autoclave().itemInputs('tconstruct:obsidian_pane').notConsumable('oritong:steel_upgrade_smithing_template').inputFluids(Fluid.of('gtceu:steel', 144)).itemOutputs('oritong:steel_upgrade_smithing_template').EUt(20).duration(8*20)
})