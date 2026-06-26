ServerEvents.recipes(e => {
    e.recipes.create.filling('tgears:whisk_cast_with_whisk', [Fluid.of('gtceu:iron', 1296), 'tgears:whisk_cast_with_part'])
    e.recipes.create.filling('tgears:hand_cast_with_brass_hand', [Fluid.of('gtceu:brass', 1296), 'tgears:hand_cast_with_part'])
    e.recipes.create.filling('kubejs:watered_raw_vacuum_tube', ['kubejs:raw_vacuum_tube', Fluid.of('minecraft:water', 500)])
})
