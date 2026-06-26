// priority: 1
ServerEvents.recipes(e => {
    banthings.forEach(Item => {
        e.remove({ output: Item })
    })
    banlists.forEach(Lists => {
        e.remove({ id: Lists })
    })
    e.remove({ output: '#minecraft:pickaxes' })
    ban_gt_tools.forEach(a => {
        ban_gt_materials.forEach(b => {
            e.remove({ id: `gtceu:shaped/${a}_${b}` })
        })
    })
    e.remove({ type: 'gtceu:primitive_blast_furnace' })
    e.remove({ not: { id: 'mekanism:metallurgic_infusing/alloy/infused' }, output: 'mekanism:alloy_infused' })
    e.remove({ type: 'createaddition:rolling' })
    e.remove({ type: 'create:cutting' })
    e.remove({ type: 'replication:matter_value' })
    e.remove({ not: { type: 'gtceu:cutter' }, output: 'gtceu:alumina_ceramic_plate' })
})

let banthings = [
    'botania:apothecary_plains',
    'botania:apothecary_default',
    'botania:apothecary_forest',
    'botania:apothecary_swamp',
    'botania:apothecary_mountain',
    'botania:apothecary_fungal',
    'botania:apothecary_mesa',
    'botania:apothecary_desert',
    'botania:apothecary_taiga',
    'botania:apothecary_mossy',
    'botania:apothecary_livingrock',
    'botania:apothecary_deepslate',
    'botania:pure_daisy',
    'botania:mana_spreader',
    'botania:mana_void',
    'embers:caminite_blend',
    'embers:caminite_brick',
    'embers:raw_caminite_plate',
    'embers:caminite_plate',
    'tconstruct:crafting_station',
    'embers:ancient_codex',
    'ars_nouveau:source_jar',
    'gtceu:coke_oven_bricks',
    'gtceu:compressed_coke_clay',
    'gtceu:coke_oven_brick',
    'embers:ember_bore',
    'gtceu:pump_hatch',
    'gtceu:primitive_pump',
    'gtceu:pump_deck',
    'minecraft:barrel',
    'minecraft:chest',
    'ars_nouveau:archwood_chest',
    'avaritia:compressed_chest',
    'ars_nouveau:volcanic_sourcelink',
    'industrialforegoing:pitiful_generator',
    'industrialforegoing:latex_processing_unit',
    'create:belt_connector',
    'create:large_water_wheel',
    'create:water_wheel',
    'create:andesite_casing',
    'gtceu:infused_alloy_nugget',
    'gtceu:tiny_infused_alloy_dust',
    'gtceu:infused_alloy_dust',
    'gtceu:small_infused_alloy_dust',
    'gtceu:infused_alloy_block',
    'industrialforegoing:dissolution_chamber',
    'create:encased_fan',
    'create:mechanical_press',
    'gtceu:caminite_brick_block',
    'pipez:item_pipe',
    'pipez:fluid_pipe',
    'pipez:energy_pipe',
    'pipez:gas_pipe',
    'gtceu:powderbarrel',
    'pneumaticcraft:pressure_chamber_interface',
    'pneumaticcraft:pressure_chamber_wall',
    'pneumaticcraft:pressure_chamber_valve',
    'pneumaticcraft:pressure_chamber_glass',
    'create:millstone',
    'create:mechanical_mixer',
    'gtceu:brick_wooden_form',
    'create:cogwheel',
    'create:large_cogwheel',
    'mekanism:enrichment_chamber',
    'mekanism:metallurgic_infuser',
    'create:item_drain',
    'create:spout',
    'create:copper_casing',
    'minecraft:smithing_table'
]
let banlists = [
    'minecraft:crafting_table',
    'gtceu:assembler/crafting_table',
    'tconstruct:smeltery/seared/seared_brick_kiln',
    'tconstruct:smeltery/seared/seared_brick',
    'tconstruct:smeltery/seared/grout',
    'tconstruct:smeltery/seared/grout_multiple',
    'tconstruct:smeltery/melting/glass/sand',
    'tconstruct:smeltery/melting/glass/sand_cast',
    'tconstruct:smeltery/melting/seared/melter',
    'ars_nouveau:arcane_pedestal',
    'tconstruct:tables/part_builder',
    'gtceu:smelting/wrought_iron_nugget',
    'create:crafting/materials/andesite_alloy',
    'create:crafting/materials/andesite_alloy_from_zinc',
    'tconstruct:compat/create/andesite_alloy_iron',
    'tconstruct:compat/create/andesite_alloy_zinc',
    'gtceu:coke_oven/coal_to_coke',
    'gtceu:coke_oven/coal_to_coke_block',
    'gtceu:coke_oven/log_to_charcoal',
    'avaritia:blaze_pickaxe',
    'botania:twig_wand',
    'gtceu:shapeless/block_decompress_andesite_alloy',
    'gtceu:smelting/smelt_dust_andesite_alloy_to_ingot',
    'create:mixing/andesite_alloy_from_zinc',
    'create:mixing/andesite_alloy',
    'gtceu:arc_furnace/arc_andesite_alloy_dust',
    'create:crafting/kinetics/shaft',
    'create:cutting/andesite_alloy',
    'gtceu:assembler/wood_barrel',
    'gtceu:shaped/wooden_barrel',
    'gtceu:shaped/anvil',
    'gm_construct:smeltery/melting/metal/wrought_iron/nugget',
    'gm_construct:smeltery/melting/metal/wrought_iron/ingot',
    'gm_construct:smeltery/melting/metal/wrought_iron/block',
    'farmersdelight:cutting_board',
    'gtceu:shaped/plate_double_caminite_brick',
    'gtceu:bender/bend_caminite_brick_plate_to_double_plate',
    'gtceu:bender/bend_caminite_brick_ingot_to_double_plate',
    'gtceu:shaped/bronze_primitive_blast_furnace',
    'industrialforegoing:plastic',
    'gtceu:shaped_fluid_container/treated_wood_planks',
    'tconstruct:compat/treated_wood',
    'create:crafting/kinetics/mechanical_saw',
    'mekanism:infusion_conversion/diamond/from_dust',
    'mekanism:infusion_conversion/redstone/from_block',
    'mekanism:infusion_conversion/redstone/from_dust',
    'gtceu:assembler/vacuum_tube_plain',
    'gtceu:shaped/vacuum_tube',
    'mekanism:processing/steel/ingot/from_dust_smelting',
    'create:crafting/kinetics/whisk',
    'tgears:filling/whisk/iron',
    'tgears:casting/whisk/iron',
    'tgears:melting/whisk',
    'pneumaticcraft:air_compressor',
    'gtceu:shaped/drill_head_wrought_iron',
    'tgears:casting/hand/cast',
    'tgears:casting/whisk/cast',
    'tgears:melting/brass_hand',
    'create:crafting/kinetics/brass_hand',
    'tgears:casting/hand/brass',
    'tgears:filling/hand/brass',
    'create:sequenced_assembly/sturdy_sheet',
    'industrialforegoing:latex_processing_unit',
    'industrialforegoing:pitiful_generator',
    'industrialforegoing:dissolution_chamber',
    'create:crafting/kinetics/basin',
    'createaddition:crafting/rolling_mill',
    'rainrot:five_pebbsi_vending_machine',
    'mekanism:infusion_conversion/carbon/from_enriched',
    'mekanism:infusion_conversion/carbon/from_charcoal_block',
    'mekanism:infusion_conversion/carbon/from_coal',
    'mekanism:infusion_conversion/redstone/from_enriched',
    'mekanism:infusion_conversion/diamond/from_enriched',
    'mekanism:infusion_conversion/carbon/from_coal_block',
    'mekanismgenerators:generator/heat',
    'mekanism:control_circuit/basic',
    'gtceu:shaped/resistor_wire_carbon',
    'gtceu:shaped/resistor_wire_fine_carbon',
    'gtceu:shaped/resistor_wire_fine',
    'gtceu:shaped/resistor_wire_charcoal',
    'ifeu:dissolution_chamber/nether_star',
    'gtceu:implosion_compressor/implode_dust_nether_star_tnt',
    'gtceu:implosion_compressor/implode_dust_nether_star_dynamite',
    'gtceu:implosion_compressor/implode_dust_nether_star_itnt',
    'gtceu:implosion_compressor/implode_dust_nether_star_powderbarrel',
    'gtceu:shaped/basic_circuit_board',
    'ars_nouveau:imbuement_chamber',
    'botania:pure_daisy/livingrock',
    'mekanism:control_circuit/advanced',
    'mekanism:metallurgic_infusing/alloy/infused',
    'embers:mechanical_core',
    'moreburners:ember_burner',
    'embers:mini_boiler',
    'botania:mana_infusion/mana_powder_dust',
    'botania:mana_infusion/mana_powder_dye',
    'botania:runic_altar/water',
    'botania:runic_altar/fire',
    'botania:runic_altar/spring',
    'botania:ender_hand',
    'gtceu:bender/bend_obsidian_plate_to_dense_plate',
    'gtceu:shaped/cleanroom',
    'gtceu:shaped/lv_machine_hull',
    'gtceu:assembler/hull_lv',
    'gtceu:laser_engraver/engrave_ilc_silicon',
    'gtceu:laser_engraver/engrave_ram_silicon',
    'gtceu:laser_engraver/engrave_ulpic_silicon',
    'farmersdelight:book_from_canvas',
    'minecraft:book',
    'tconstruct:tables/book_substitute',
    'create:crafting/appliances/book',
    'gtceu:assembler/book_from_leather',
    'minecraft:replica_ingot_from_blasting',
    'minecraft:replica_ingot_from_furnace',
    'mekanism:processing/refined_glowstone/ingot/from_dust',
    'gtceu:smelting/smelt_dust_alumina_ceramic_to_ingot',
    'gtceu:shapeless/nugget_disassembling_alumina_ceramic',
    'gtceu:shapeless/block_decompress_alumina_ceramic',
    'gtceu:arc_furnace/arc_alumina_ceramic_dust',
    'gtceu:bender/bend_alumina_ceramic_plate_to_double_plate'
]
let ban_gt_tools = [
    'pickaxe',
    'mortar',
    'hammer',
    'knife',
    'screwdriver',
    'file',
    'saw',
    'shovel',
    'wire_cutter',
    'wrench',
    'spade',
    'mining_hammer',
    'axe',
    'scythe',
    'hoe',
    'butchery_knife',
    'sword'
]
let ban_gt_materials = [
    'wrought_iron',
    'bronze',
    'rose_gold',
    'flint',
    'iron',
    'diamond',
    'steel'
]
/*
// 物品过滤器例子 + 配方移除例子
// 移除所有配方:
event.remove({}) 
// 移除输出物品为石斧的配方：
event.remove({output: 'minecraft:stone_pickaxe'}) 
// 移除输出物品带有羊毛tag的配方：
event.remove({output: '#minecraft:wool'})
// 移除输入物品带有红石tag的配方：
event.remove({input: '#forge:dusts/redstone'})
// 移除农夫乐事添加的配方：
event.remove({mod: 'farmersdelight'})
// 移除所有营火配方：
event.remove({type: 'minecraft:campfire_cooking'}) 
// 移除除熔炉以外所有输出物品为石头的配方:
event.remove({not:{type:"minecraft:smelting"},output:"stone"}) 
// 移除输出物品为熟鸡肉的营火配方：
event.remove({output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking'})
// 移除熔炉或高炉的输出物品为铁锭的配方：
event.remove([{type:'minecraft:smelting',output:'minecraft:iron_ingot'}, {type:'minecraft:blasting', output:'minecraft:iron_ingot'}])	  
// 通过ID移除配方（data/minecraft/recipes/glowstone.json）：
// 注：配方ID和输出物品是两个概念！
event.remove({id: 'minecraft:glowstone'})

*/
