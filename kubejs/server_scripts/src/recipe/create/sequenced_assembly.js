//动力装配
ServerEvents.recipes(e => {
    e.recipes.create.sequenced_assembly(
        'gtceu:dense_steel_plate',
        'mekanism:ingot_steel',
        [
            e.recipes.create.pressing('kubejs:incomplete_dense_steel_plate', 'kubejs:incomplete_dense_steel_plate'),
            e.recipes.create.deploying('kubejs:incomplete_dense_steel_plate', ['kubejs:incomplete_dense_steel_plate', 'mekanism:ingot_steel']),
            e.recipes.create.pressing('kubejs:incomplete_dense_steel_plate', 'kubejs:incomplete_dense_steel_plate'),
            e.recipes.create.filling('kubejs:incomplete_dense_steel_plate', ['kubejs:incomplete_dense_steel_plate', Fluid.of('water', 448)])
        ]).transitionalItem('kubejs:incomplete_dense_steel_plate').loops(11)
})