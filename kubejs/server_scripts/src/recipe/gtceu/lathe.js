// priority: 2
//车床
ServerEvents.recipes(e=>{
    e.recipes.gtceu.lathe().itemInputs('create:andesite_alloy').itemOutputs('4x create:shaft').duration(4*20).EUt(8)
})