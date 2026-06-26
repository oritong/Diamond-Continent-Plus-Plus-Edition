ServerEvents.recipes(e => {
    e.recipes.create.item_application('tconstruct:crafting_station', ['minecraft:crafting_table', 'tconstruct:part_builder'])
    e.recipes.create.item_application('minecraft:smithing_table', ['minecraft:crafting_table', 'tconstruct:seared_table'])
    e.recipes.create.item_application('create:andesite_casing', ['kubejs:machine_core_1', 'create:andesite_alloy'])
    e.recipes.create.item_application('create:copper_casing', ['kubejs:machine_core_1', 'minecraft:copper_ingot'])
})
