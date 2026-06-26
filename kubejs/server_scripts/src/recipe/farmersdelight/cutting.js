ServerEvents.recipes(e => {
    e.recipes.farmersdelight.cutting('embers:caminite_bricks', '#minecraft:pickaxes', '4x embers:caminite_brick')
    e.recipes.farmersdelight.cutting('minecraft:bone_meal', '#gtceu:tools/crafting_hammers', [Item.of('minecraft:white_dye').withChance(0.6), Item.of('minecraft:white_dye').withChance(0.4), Item.of('minecraft:white_dye').withChance(0.2)])
})
