// priority: 99
ServerEvents.recipes(e => {
    banthings.forEach(Item => {
        e.remove({ output: Item })
    })
    banlists.forEach(Lists => {
        e.remove({ id: Lists })
    })
    ban_gt_tools.forEach(a => {
        ban_gt_materials.forEach(b => {
            e.remove({ id: `gtceu:shaped/${a}_${b}` })
        })
    })
    e.remove({ type: 'gtceu:primitive_blast_furnace' })
    e.remove({ not: { id: 'mekanism:metallurgic_infusing/alloy/infused' }, output: 'mekanism:alloy_infused' })
    e.remove({ type: 'createaddition:rolling' })
    e.remove({ type: 'create:cutting' })
    e.remove({ type: 'mekanism:crushing' })
    e.remove({ type: 'replication:matter_value' })
    e.remove({ not: { type: 'gtceu:cutter' }, output: 'gtceu:alumina_ceramic_plate' })
    e.remove({ type: 'botania:mana_infusion' })
    e.remove({ type: 'mekanism:chemical_infusing' })
    e.remove({ type: 'mekanism:injecting' })
    e.remove({ type: 'mekanism:rotary' })
    e.remove({ type: 'mekanism:reaction' })
    e.remove({ type: 'minecraft:crafting_shaped', output: 'gtceu:lv_conveyor_module' })
    e.remove({ type: 'minecraft:crafting_shaped', output: 'gtceu:mv_conveyor_module' })
    e.remove({ type: 'minecraft:crafting_shaped', output: 'gtceu:hv_conveyor_module' })
    e.remove({ type: 'minecraft:crafting_shaped', output: 'gtceu:ev_conveyor_module' })
    e.remove({ type: 'mekanism:metallurgic_infusing' })
    e.remove({ type: 'cmr:block_spouting' })
})
let tconstruct_melting_whitelist = [
    "rose_gold"
]
ServerEvents.recipes(e => {

    let allowed_dust = []


    // 获取所有普通熔炉可以烧成锭的粉
    e.forEachRecipe({ type: "minecraft:smelting" }, r => {

        try {

            let j = JSON.parse(String(r.json))

            let ingredient = j.ingredient
            let result = j.result

            if (!ingredient || !ingredient.tag)
                return


            let match = ingredient.tag.match(/dusts\/(.+)/)

            if (!match)
                return


            let material = match[1]


            // 检查输出是否为对应锭
            if (
                result.includes(material + "_ingot")
            ) {
                allowed_dust.push(material)
            }


        } catch (err) { }

    })


    console.log("Allowed dust: " + allowed_dust)


    // 删除非法匠魂熔炼
    e.forEachRecipe({ type: "tconstruct:melting" }, r => {

        try {

            let j = JSON.parse(String(r.json))

            let ingredient = j.ingredient

            if (!ingredient || !ingredient.tag)
                return


            let match = ingredient.tag.match(/dusts\/(.+)/)

            if (!match)
                return


            let material = match[1]


            // 白名单
            if (tconstruct_melting_whitelist.includes(material))
                return


            // 不存在粉烧锭
            if (!allowed_dust.includes(material)) {

                console.log(
                    "Remove TConstruct melting: "
                    + r.getId()
                    + " dusts/" + material
                )

                e.remove({
                    id: r.getId()
                })
            }


        } catch (err) { }

    })

})
let banthings = [
    'botania:apothecary_plains',
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
    'minecraft:smithing_table',
    'create:super_glue',
    'replication:replication_terminal',
    'replication:matter_network_pipe',
    'botania:alchemy_catalyst',
    'replication:replicator',
    'replication:disintegrator',
    'replication:identification_chamber',
    'replication:matter_tank',
    'replication:chip_storage',
    'replication:memory_chip',
    "angelring:angel_ring",
    "mekanism:elite_control_circuit",
    '#gtceu:tools/crafting_mallets',
    "gtceu:wood_mallet",
    "gtceu:styrene_butadiene_rubber_mallet",
    "gtceu:rubber_mallet",
    "gtceu:polybenzimidazole_mallet",
    "gtceu:polyethylene_mallet",
    "gtceu:silicone_rubber_mallet",
    "gtceu:polytetrafluoroethylene_mallet",
    "pipez:improved_upgrade",
    "pipez:advanced_upgrade",
    "pipez:ultimate_upgrade",
    "ae2:basic_card",
    "ae2:advanced_card",
    "botania:rune_winter",
    "botania:rune_earth",
    "botania:rune_summer",
    "botania:rune_air",
    'gtceu:mv_energy_input_hatch',
    "gtceu:hv_machine_hull",
    'industrialforegoing:pink_slime_ingot',
    'shrink:shrinking_device',
    'occultism:wormhole_frame',
    'sfm:cable',
    'sfm:fancy_cable',
    'sfm:labelgun',
    "sfm:tunnelled_manager",
    "sfm:manager",
    "sfm:tough_cable",
    "sfm:tough_fancy_cable",
    "sfm:tunnelled_cable",
    "sfm:tunnelled_fancy_cable",
    'sfm:network_tool',
    'gtceu:hv_energy_input_hatch',
    "curvy_pipes:redstone_cable",
    "functionalstorage:oak_1",
    "functionalstorage:oak_2",
    "functionalstorage:oak_4",
    "functionalstorage:fluid_1",
    "functionalstorage:fluid_2",
    "functionalstorage:fluid_4",
    "functionalstorage:linking_tool",
    "functionalstorage:configuration_tool",
    "functionalstorage:compacting_drawer",
    "functionalstorage:compacting_framed_drawer",
    "functionalstorage:storage_controller",
    "functionalstorage:framed_storage_controller",
    "functionalstorage:controller_extension",
    "functionalstorage:framed_controller_extension",
    "functionalstorage:copper_upgrade",
    "functionalstorage:iron_downgrade",
    "functionalstorage:collector_upgrade",
    "functionalstorage:redstone_upgrade",
    "functionalstorage:armory_cabinet",
    "functionalstorage:void_upgrade",
    "functionalstorage:puller_upgrade",
    "functionalstorage:pusher_upgrade",
    'pipez:filter_destination_tool',
    "mekanism:teleporter",
    "mekanism:teleporter_frame",
    "mekanism:teleportation_core",
    "mekanism:portable_teleporter",
    'mekanism:hdpe_elytra',
    'avaritia:infinity_elytra',
    'gtceu:cleaning_maintenance_hatch',
    'ae2:not_so_mysterious_cube',
    'industrial_platform:industrial_platform',
    'moreburners:electric_burner',
    "gtceu:large_circuit_assembler",
    "gtceu:large_assembler",
    "gtceu:large_packer",
    "gtceu:large_electromagnet",
    "gtceu:large_electrolyzer",
    "gtceu:large_maceration_tower",
    "gtceu:large_mixer",
    "gtceu:large_centrifuge",
    "gtceu:large_chemical_bath",
    "gtnn:large_dehydrator",
    "gtceu:large_wiremill",
    "gtceu:large_solidifier",
    "gtceu:large_extruder",
    "gtceu:large_extractor",
    "gtceu:large_distillery",
    "gtceu:large_cutter",
    "gtceu:large_brewer",
    "gtceu:large_material_press",
    "gtceu:large_autoclave",
    "gtceu:large_sifting_funnel",
    "gtceu:large_engraving_laser",
    "gtceu:large_arc_smelter",
    "gtceu:high_temperature_smelting_casing",
    "gtceu:large_scale_assembler_casing",
    "gtceu:stress_proof_casing",
    "gtceu:laser_safe_engraving_casing",
    "gtceu:reaction_safe_mixing_casing",
    "gtceu:vibration_safe_casing",
    "gtceu:watertight_casing",
    "gtceu:shock_proof_cutting_casing",
    "gtceu:secure_maceration_casing",
    "gtceu:slicing_blades",
    "gtceu:crushing_wheels",
    "gtceu:electrolytic_cell",
    "expatternprovider:ingredient_buffer",
    "industrialforegoing:range_addon0",
    "industrialforegoing:range_addon1",
    "industrialforegoing:range_addon2",
    "industrialforegoing:efficiency_addon_2",
    "industrialforegoing:efficiency_addon_1",
    "industrialforegoing:range_addon8",
    "industrialforegoing:range_addon11",
    "industrialforegoing:speed_addon_2",
    "industrialforegoing:processing_addon_1",
    "ifeu:speed_addon_4",
    "ifeu:processing_addon_5",
    "industrialforegoing:range_addon3",
    "industrialforegoing:range_addon5",
    "industrialforegoing:range_addon6",
    "industrialforegoing:range_addon7",
    "industrialforegoing:range_addon9",
    "ifeu:speed_addon_5",
    "ifeu:speed_addon_6",
    "ifeu:efficiency_addon_4",
    "ifeu:efficiency_addon_5",
    "ifeu:processing_addon_3",
    "industrialforegoing:range_addon4",
    "industrialforegoing:range_addon10",
    "industrialforegoing:processing_addon_2",
    "ifeu:speed_addon_3",
    "ifeu:efficiency_addon_3",
    "ifeu:processing_addon_4",
    "industrialforegoing:speed_addon_1",
    "ifeu:efficiency_addon_6",
    "ifeu:processing_addon_6",
    'bettergtae:large_molecular_assembler',
    'gtceu:assembly_line_casing',
    'bettergtae:crafting_pattern_hatch',
    'gtceu:iv_parallel_hatch',
    'industrialforegoing:meat_feeder',
    'pylons:infusion_pylon',
    'pylons:potion_filter',
    'ifeu:empty_nether_star',
    'create:brass_funnel',
    'create:andesite_funnel',
    'embers:fluid_pipe',
    'moreburners:heat_upgrade',
    'create:mechanical_drill'
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
    'gtceu:bender/bend_alumina_ceramic_plate_to_double_plate',
    'createaddition:crafting/diamond_grit_sandpaper',
    'gtceu:large_chemical_reactor/rhodium_sulfate_to_solution_l',
    'gtceu:large_chemical_reactor/rhodium_sulfate_to_solution',
    'gtceu:chemical_reactor/rhodium_sulfate_to_solution',
    'gtceu:large_chemical_reactor/large_platinum_dusts',
    'gtceu:large_chemical_reactor/tiny_platinum_dusts',
    'gtceu:large_chemical_reactor/pgs_from_chalcocite',
    'gtceu:large_chemical_reactor/pgs_from_chalcocite_p',
    'gtceu:large_chemical_reactor/pgs_from_pentlandite_p',
    'gtceu:large_chemical_reactor/dissolve_platinum_metallic_powder',
    'gtceu:large_chemical_reactor/pgs_from_cooperite_p',
    'gtceu:large_chemical_reactor/pgs_from_pentlandite',
    'gtceu:large_chemical_reactor/pgs_from_tetrahedrite_p',
    'gtceu:large_chemical_reactor/pgs_from_cooperite',
    'gtceu:large_chemical_reactor/dissolve_platinum_metallic_powder9',
    'gtceu:large_chemical_reactor/pgs_from_tetrahedrite',
    'gtceu:large_chemical_reactor/pgs_from_bornite_p',
    'gtceu:large_chemical_reactor/pgs_from_chalcopyrite',
    'gtceu:large_chemical_reactor/pgs_from_bornite',
    'gtceu:large_chemical_reactor/pgs_from_chalcopyrite_p',
    'gtceu:chemical_reactor/pgs_from_chalcocite',
    'gtceu:chemical_reactor/pgs_from_chalcocite_p',
    'gtceu:chemical_reactor/dissolve_platinum_metallic_powder',
    'gtceu:chemical_reactor/pgs_from_chalcopyrite',
    'gtceu:chemical_reactor/pgs_from_tetrahedrite_p',
    'gtceu:chemical_reactor/pgs_from_bornite_p',
    'gtceu:chemical_reactor/pgs_from_bornite',
    'gtceu:chemical_reactor/pgs_from_pentlandite',
    'gtceu:chemical_reactor/pgs_from_chalcopyrite_p',
    'gtceu:chemical_reactor/pgs_from_cooperite',
    'gtceu:chemical_reactor/pgs_from_pentlandite_p',
    'gtceu:chemical_reactor/pgs_from_tetrahedrite',
    'gtceu:chemical_reactor/dissolve_platinum_metallic_powder9',
    'gtceu:chemical_reactor/pgs_from_cooperite_p',
    'gtceu:electric_blast_furnace/refined_platinum_salt_dust_ebf',
    'gtceu:large_chemical_reactor/iridium_chloride_separation',
    'gtceu:chemical_reactor/iridium_chloride_separation',
    'mekanismgenerators:generator/wind',
    'createaddition:mechanical_crafting/alternator',
    'mekanism:paper',
    'farmersdelight:paper_from_tree_bark',
    'gtceu:shaped/resistor_wire',
    'gtceu:shaped/resistor_wire_fine_charcoal',
    'gtceu:large_chemical_reactor/hydrogen_peroxide',
    'industrialforegoing:gold_gear',
    'pipez:universal_pipe',
    'gtceu:centrifuge/decomposition_centrifuging__cinnabar',
    'gtceu:shaped/paper_dust',
    'gtceu:chemical_bath/paper_from_sugar_cane_distilled',
    'create:pressing/sugar_cane',
    'gtceu:chemical_bath/paper_from_sugar_cane',
    'mekanism:cardboard_box',
    'industrialforegoing:diamond_gear',
    'gtceu:mixer/palladium_on_carbon',
    'gtceu:shapeless/centrifuged_ore_to_dust_neutronium',
    'tconstruct:smeltery/casting/seared/smeltery_controller',
    'gtceu:centrifuge/quartz_sand_separation',
    'gtceu:alloy_smelter/alloy_smelt_alumina_ceramic_dust_to_block',
    'ars_nouveau:dominion_wand',
    'create:mechanical_crafting/crushing_wheel',
    'industrialforegoing:mob_slaughter_factory',
    'gtceu:assembler/chemical_plant',
    'gm_construct:smeltery/melting/metal/aluminium/dust',
    'createaddition:compat/tconstruct/rose_gold',
    'create:milling/cobblestone',
    'gtceu:bender/bend_titanium_nitride_ceramic_to_plate',
    'gtceu:assembler/dual_import_bus_lv_polyethylene',
    'gtceu:shaped/maintenance_hatch_automatic',
    'gtceu:laser_engraver/engrave_ssoc_silicon',
    'gtceu:forge_hammer/hammer_titanium_nitride_ceramic_to_plate',
    'gtceu:extruder/extrude_titanium_nitride_ceramic_to_plate',
    'gtceu:shaped/plate_titanium_nitride_ceramic',
    'gtceu:alloy_smelter/alloy_smelt_titanium_nitride_ceramic_dust_to_block',
    'gtceu:smelting/smelt_dust_titanium_nitride_ceramic_to_ingot',
    'sfm:program_copy',
    'sfm:disk',
    'moreburners:converter_cover',
    'moreburners:item_application/heat_converter',
    'curvy_pipes:item_base',
    'curvy_pipes:fluid_base',
    'sophisticatedbackpacks:backpack',
    'ars_nouveau:imbuement_earth_essence',
    'ars_nouveau:imbuement_fire_essence',
    'minecraft:fire_charge',
    'ars_nouveau:fire_essence_to_charge',
    'tconstruct:smeltery/scorched/scorched_brick_kiln',
    'tconstruct:smeltery/scorched/scorched_brick',
    'tgears:compacting/scorched_brick',
    'embers:alchemy/archaic_brick',
    'tconstruct:smeltery/casting/scorched/brick_composite',
    'entangled:block',
    'ars_nouveau:imbuement_water_essence',
    'expatternprovider:water_cell',
    'gtceu:electrolyzer/tungstic_acid_electrolysis',
    'gtceu:electrolyzer/decomposition_electrolyzing_tungsten_trioxide',
    'gtceu:large_chemical_reactor/indium_concentrate_separation_4x',
    'gtceu:chemical_reactor/indium_concentrate_separation_4x',
    'createaddition:mixing/netherrack',
    'gtceu:chemical_plant/hydrogen_peroxide_air',
    'gtceu:chemical_reactor/hydrogen_peroxide',
    'gtceu:pyrolyse_oven/log_to_coal_gas',
    'gtceu:large_chemical_reactor/indium_concentrate_separation',
    'gtceu:electric_blast_furnace/blast_kanthal',
    'gtceu:electric_blast_furnace/blast_kanthal_gas'
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
