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
})