ServerEvents.recipes(e => {
    let dust_convert = [
        'mekanism:dust_diamond','gtceu:lazurite_dust','gtceu:cinnabar_dust',"occultism:gold_dust",
        'gtceu:silver_dust','gtceu:iron_dust','gtceu:copper_dust','gtceu:tin_dust',
        'gtceu:lead_dust','gtceu:zinc_dust','gtceu:quartzite_dust','gtceu:stone_dust',"mekanism:sawdust"
    ]
    let ingot_convert = [
        'minecraft:diamond','gtceu:lazurite_gem','gtceu:cinnabar_gem',"minecraft:gold_ingot",
        'gtceu:silver_ingot','minecraft:iron_ingot','minecraft:copper_ingot','gtceu:tin_ingot',
        'gtceu:lead_ingot','gtceu:zinc_ingot','gtceu:quartzite_gem','minecart:stone','kubejs:wood_ingot'
    ]
    let block_convert = [
        'minecraft:diamond_block','gtceu:cinnabar_block','gtceu:lazurite_block','minecraft:gold_block',
        'gtceu:silver_block','minecraft:iron_block','minecraft:copper_block','gtceu:tin_block',
        'gtceu:lead_block','gtceu:zinc_block','gtceu:quartzite_block','9x minecart:stone'
    ]
    let dyes = [
        'minecraft:white_dye','minecraft:orange_dye','minecraft:magenta_dye','minecraft:light_blue_dye',
        'minecraft:yellow_dye','minecraft:lime_dye','minecraft:pink_dye','minecraft:gray_dye',
        'minecraft:light_gray_dye','minecraft:cyan_dye','minecraft:purple_dye','minecraft:blue_dye',
        'minecraft:brown_dye','minecraft:green_dye','minecraft:red_dye','minecraft:black_dye'
    ]
    for (let i = 0; i < dust_convert.length - 1; i++) {
        let dust_convert_input = dust_convert[i]
        let dust_convert_output = dust_convert[i + 1]
        e.recipes.lychee.item_inside(dust_convert_input, BlockPredicate.of('oritong:glimmer')).post([Post.drop_item(dust_convert_output)]).time(5)
        e.custom({"type":"cmr:custom_fan","ingredients":[{"item":dust_convert_input},{"amount":1000,"fluid":"oritong:glimmer","nbt":{}}],"results":[{"item":dust_convert_output}]})
    }
    for (let i = 0; i < ingot_convert.length - 1; i++) {
        let ingot_convert_input = ingot_convert[i]
        let ingot_convert_output = ingot_convert[i + 1]
        e.recipes.lychee.item_inside(ingot_convert_input, BlockPredicate.of('oritong:glimmer')).post([Post.drop_item(ingot_convert_output)]).time(5)
    }
    for (let i = 0; i < block_convert.length - 1; i++) {
        let block_convert_input = block_convert[i]
        let block_convert_output = block_convert[i + 1]
        e.recipes.lychee.item_inside(block_convert_input, BlockPredicate.of('oritong:glimmer')).post([Post.drop_item(block_convert_output)]).time(20)
    }
    for (let i = 0; i < block_convert.length - 2; i++) {
        let block_convert_input = block_convert[i]
        let block_convert_output = block_convert[i + 1]
        e.custom({"type":"cmr:custom_fan","ingredients":[{"item":block_convert_input},{"amount":1000,"fluid":"oritong:glimmer","nbt":{}}],"results":[{"item":block_convert_output}]})
    }
    for (let i = 0; i < ingot_convert.length - 2; i++) {
        let ingot_convert_input = ingot_convert[i]
        let ingot_convert_output = ingot_convert[i + 1]
        e.custom({"type":"cmr:custom_fan","ingredients":[{"item":ingot_convert_input},{"amount":1000,"fluid":"oritong:glimmer","nbt":{}}],"results":[{"item":ingot_convert_output}]})
    }
    for (let i = 0; i < dyes.length; i++) {
        let input = dyes[i]
        let output = dyes[(i + 1) % dyes.length]
        e.recipes.lychee.item_inside(input, BlockPredicate.of('oritong:glimmer')).post([Post.drop_item(output)]).time(5)
        e.custom({"type":"cmr:custom_fan","ingredients":[{"item":input},{"amount":1000,"fluid":"oritong:glimmer","nbt":{}}],"results":[{"item":output}]})
    }
    e.custom({"type":"cmr:custom_fan","ingredients":[{"item":'minecart:stone'},{"amount":1000,"fluid":"oritong:glimmer","nbt":{}}],"results":[{"item":'kubejs:wood_block'}]})
    e.custom({"type":"cmr:custom_fan","ingredients":[{"item":'gtceu:quartzite_block'},{"amount":1000,"fluid":"oritong:glimmer","nbt":{}}],"results":[{"item":'minecart:stone',"count":9}]})
    e.recipes.lychee.block_crushing('minecraft:diamond_block').post([Post.drop_item('4x gtceu:diamond_plate')])
    e.recipes.lychee.block_crushing('gtceu:quartzite_block').post([Post.drop_item('4x gtceu:quartzite_plate')])
    e.recipes.lychee.block_crushing('gtceu:lazurite_block').post([Post.drop_item('4x gtceu:lazurite_plate')])
    e.recipes.lychee.block_crushing('kubejs:raw_compressed_fireclay').post([Post.drop_item('gtceu:compressed_fireclay')])
    e.recipes.lychee.item_inside('embers:dawnstone_ingot', 'oritong:glimmer').post([Post.place('minecraft:water'), Post.drop_item('gtceu:lead_dust')]).time(45)
    e.recipes.lychee.item_inside('minecart:stone', 'minecraft:water').post([Post.drop_item('minecraft:cobblestone'), Post.drop_item('minecraft:bone_meal').withChance('0.12'), Post.drop_item('mysticalagriculture:soulstone').withChance('0.04')]).time(10)
    e.recipes.lychee.item_inside('minecraft:sand', 'minecraft:water').post([Post.place("*"), Post.drop_item('minecraft:clay')]).time(10)
    e.recipes.lychee.item_inside('minecraft:iron_ingot', 'minecraft:lava').post([Post.drop_item('8x gtceu:wrought_iron_nugget')]).time(5)
    e.recipes.lychee.item_inside('gtceu:diamond_plate', 'minecraft:lava').post([Post.drop_item('embers:caminite_plate')]).time(15)
    e.recipes.lychee.item_inside('minecraft:iron_block', 'minecraft:lava').post([Post.drop_item('8x gtceu:wrought_iron_ingot')]).time(20)
    e.recipes.lychee.item_inside('gtceu:andesite_alloy_dust', 'industrialforegoing:latex').post([Post.drop_item('create:andesite_alloy')]).time(32.5).hide_in_viewer(true)
    e.recipes.lychee.item_inside('kubejs:wood_block', 'gtceu:creosote').post([Post.drop_item('gtceu:treated_wood_planks')]).time(45)
})
