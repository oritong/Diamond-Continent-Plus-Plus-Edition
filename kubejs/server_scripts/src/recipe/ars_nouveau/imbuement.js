ServerEvents.recipes(e => {
    e.recipes.ars_nouveau.imbuement('minecraft:smooth_stone', 'botania:livingrock', 500, [])
    e.recipes.ars_nouveau.imbuement('minecraft:emerald', 'ars_nouveau:earth_essence', 2500, ['kubejs:the_source_of_the_earth', 'minecraft:dirt', 'botania:manasteel_ingot'])
    e.recipes.ars_nouveau.imbuement('gtceu:ruby_gem', 'ars_nouveau:fire_essence', 2500, ['gtceu:industrial_tnt', 'gtceu:carbon_fiber_plate', Item.of('tconstruct:large_plate', '{Material:"tconstruct:flint"}').strongNBT()])
    e.recipes.ars_nouveau.imbuement('gtceu:sapphire_gem', 'ars_nouveau:water_essence', 2500, ['minecraft:water_bucket', 'gtceu:oxygen_bucket', 'gtceu:steam_bucket', 'gtceu:hydrogen_bucket'])
})
