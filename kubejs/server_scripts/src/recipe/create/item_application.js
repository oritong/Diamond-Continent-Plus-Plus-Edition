ServerEvents.recipes(e => {
    e.recipes.create.item_application('tconstruct:crafting_station', ['minecraft:crafting_table', 'tconstruct:part_builder'])
    e.recipes.create.item_application('minecraft:smithing_table', ['minecraft:crafting_table', 'tconstruct:seared_table'])
    e.recipes.create.item_application('create:andesite_casing', ['gtceu:treated_wood_planks', 'create:andesite_alloy'])
    e.recipes.create.item_application('create:copper_casing', ['gtceu:treated_wood_planks', 'minecraft:copper_ingot'])
})
