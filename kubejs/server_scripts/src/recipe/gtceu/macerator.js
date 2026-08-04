//研磨
ServerEvents.recipes(e=>{
    e.recipes.gtceu.macerator().itemInputs('embers:ember_crystal').itemOutputs('6x embers:ember_grit').duration(1*20).EUt(8)
    e.recipes.gtceu.macerator().itemInputs('embers:ember_shard').itemOutputs('embers:ember_grit').duration(1*20).EUt(8)
})