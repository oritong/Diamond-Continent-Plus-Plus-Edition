ServerEvents.recipes(e => {
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_pickaxe', Item.of('tconstruct:pick_head', '{Material:"gm_construct:wrought_iron"}').strongNBT(), Item.of('tconstruct:tool_binding', '{Material:"gm_construct:wrought_iron"}').strongNBT(), 'gtceu:stone_rod')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_mortar', Item.of('tconstruct:tough_handle', '{Material:"gm_construct:wrought_iron"}').strongNBT(), 'minecraft:stone', 'minecraft:stone')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_knife', Item.of('tconstruct:small_blade', '{Material:"gm_construct:wrought_iron"}').strongNBT(), Item.of('tconstruct:tool_binding', '{Material:"gm_construct:wrought_iron"}').strongNBT(), 'gtceu:stone_rod')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_hammer', 'gtceu:wrought_iron_block', Item.of('tconstruct:tool_binding', '{Material:"gm_construct:wrought_iron"}').strongNBT(), 'gtceu:stone_rod')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_saw', 'gtceu:wrought_iron_plate', Item.of('tconstruct:large_plate', '{Material:"gm_construct:wrought_iron"}').strongNBT(), 'gtceu:stone_rod')
    e.recipes.minecraft.smithing_transform('tconstruct:part_builder', 'kubejs:wood_block', 'kubejs:wood_ingot', 'kubejs:wood_ingot')
    e.recipes.minecraft.smithing_transform('avaritia:blaze_pickaxe', 'embers:dawnstone_block', 'gtceu:wrought_iron_pickaxe', 'minecraft:diamond')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_screwdriver', 'gtceu:wrought_iron_screwdriver_tip', 'gtceu:wrought_iron_rod', 'gtceu:stone_rod')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_file', 'gtceu:wrought_iron_plate', 'gtceu:wrought_iron_plate', 'gtceu:stone_rod')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_shovel', Item.of('tconstruct:adze_head', '{Material:"gm_construct:wrought_iron"}').strongNBT(), Item.of('tconstruct:tool_binding', '{Material:"gm_construct:wrought_iron"}').strongNBT(), 'gtceu:stone_rod')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_wire_cutter', Item.of('tconstruct:tough_handle', '{Material:"gm_construct:wrought_iron"}').strongNBT(), Item.of('tconstruct:tough_binding', '{Material:"gm_construct:wrought_iron"}').strongNBT(), Item.of('tconstruct:tough_handle', '{Material:"gm_construct:wrought_iron"}').strongNBT())
    e.recipes.minecraft.smithing_transform('create:mechanical_saw', 'gtceu:steel_buzz_saw_blade', 'create:andesite_casing', 'create:shaft')
    e.recipes.minecraft.smithing_transform('create:encased_fan', 'gtceu:wrought_iron_rotor', 'create:andesite_casing', 'create:shaft')
    e.recipes.minecraft.smithing_transform('create:mechanical_press', 'gtceu:wrought_iron_block', 'create:andesite_casing', 'create:shaft')
    e.recipes.minecraft.smithing_transform('create:millstone', 'gtceu:stone_gear', 'create:andesite_casing', 'minecraft:smooth_stone')
    e.recipes.minecraft.smithing_transform('create:mechanical_mixer', 'create:whisk', 'create:andesite_casing', 'create:cogwheel')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_wrench', 'gtceu:wrought_iron_plate', 'gtceu:stone_rod', 'gtceu:wrought_iron_plate')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_axe', 'gtceu:wrought_iron_plate', 'gtceu:wrought_iron_ingot', 'gtceu:stone_rod')
    e.recipes.minecraft.smithing_transform(`gtceu:steel_mortar`, 'oritong:steel_upgrade_smithing_template', `gtceu:wrought_iron_mortar`, 'gtceu:double_steel_plate')
    e.recipes.minecraft.smithing_transform('create:item_drain', 'minecraft:copper_ingot', 'create:copper_casing', 'minecraft:iron_bars')
    e.recipes.minecraft.smithing_transform('create:spout', '#forge:glass', 'create:copper_casing', 'gtceu:rubber_plate')
    e.recipes.minecraft.smithing_transform('create:spout', '#forge:glass', 'create:copper_casing', 'gtceu:styrene_butadiene_rubber_plate')
    e.recipes.minecraft.smithing_transform('create:spout', '#forge:glass', 'create:copper_casing', 'gtceu:silicone_rubber_plate')
    e.recipes.minecraft.smithing_transform('createaddition:rolling_mill', 'create:shaft', 'create:andesite_casing', 'create:shaft')
    e.recipes.minecraft.smithing_transform('gtceu:wood_mallet', 'kubejs:wood_block', 'kubejs:wood_block', 'gtceu:treated_wood_rod')
    e.recipes.minecraft.smithing_transform('ars_nouveau:dominion_wand', 'kubejs:the_source_of_the_earth', 'gtceu:long_electrum_rod', 'minecraft:amethyst_block')
})

ServerEvents.recipes(e => {
    //锻铁工具变钢工具
    let tools_upgrade = ['axe', 'pickaxe', 'hammer', 'saw', 'wrench', 'file', 'knife', 'wire_cutter', 'screwdriver', 'shovel']
    tools_upgrade.forEach(a => {
        e.recipes.minecraft.smithing_transform(`gtceu:steel_${a}`, 'oritong:steel_upgrade_smithing_template', `gtceu:wrought_iron_${a}`, 'gtceu:double_steel_plate')
        e.recipes.minecraft.smithing_transform(`gtceu:diamond_${a}`, 'oritong:diamond_upgrade_smithing_template', `gtceu:steel_${a}`, 'gtceu:flawless_diamond_gem')
    })
})

