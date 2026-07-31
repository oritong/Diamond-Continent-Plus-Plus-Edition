ServerEvents.recipes(e => {
    e.shaped('2x gtceu:stone_rod', [
        ' A ',
        ' A ',
        '   '
    ], {
        A: 'minecraft:cobblestone'
    })
    e.shaped('minecraft:crafting_table', [
        'AA ',
        'BB ',
        '   '
    ], {
        A: 'gtceu:stone_rod',
        B: 'minecraft:cobblestone'
    })
    e.shaped('kubejs:stone_hammer', [
        'AA ',
        'AAB',
        'AA '
    ], {
        A: 'minecraft:cobblestone',
        B: 'gtceu:stone_rod'
    })
    e.shaped('kubejs:raw_apothecary', [
        'AAA',
        ' B ',
        'ABA'
    ], {
        A: 'minecraft:clay_ball',
        B: 'minecraft:clay'
    })
    e.shaped('tconstruct:seared_ingot_gauge', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'gtceu:quartzite_plate',
        B: 'tconstruct:seared_brick'
    })
    e.shaped('botania:mana_spreader', [
        '   ',
        'ABC',
        '   '
    ], {
        A: 'kubejs:wood_block',
        B: 'gtceu:electrum_ingot',
        C: 'gtceu:diamond_plate'
    })
    e.shaped('botania:mana_void', [
        'AAA',
        ' B ',
        'AAA'
    ], {
        A: 'minecraft:clay_ball',
        B: 'gtceu:electrum_ingot'
    })
    e.shaped('ars_nouveau:arcane_pedestal', [
        'ABA',
        'CAC',
        'CAC'
    ], {
        A: 'ars_nouveau:sourcestone',
        B: 'minecraft:amethyst_shard',
        C: 'gtceu:electrum_nugget'
    })
    e.shaped('embers:caminite_bricks', [
        'AA ',
        'AA ',
        '   '
    ], {
        A: 'embers:caminite_plate'
    })
    e.shaped('embers:ancient_codex', [
        ' A ',
        ' A ',
        ' A '
    ], {
        A: 'embers:caminite_plate'
    })
    e.shaped('ars_nouveau:source_jar', [
        'ABA',
        'C C',
        'ADA'
    ], {
        A: 'embers:dawnstone_ingot',
        B: 'gtceu:electrum_nugget',
        C: '#forge:glass/colorless',
        D: 'gtceu:electrum_ingot'
    })
    e.shaped('embers:ember_grit', [
        '   ',
        ' A ',
        ' B '
    ], {
        A: 'embers:ember_shard',
        B: '#forge:tools/mortars'
    })
    e.shaped('6x embers:ember_grit', [
        '   ',
        ' A ',
        ' B '
    ], {
        A: 'embers:ember_crystal',
        B: '#forge:tools/mortars'
    })
    e.shaped('8x gtceu:treated_wood_planks', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'kubejs:wood_block',
        B: 'gtceu:creosote_bucket'
    }).replaceIngredient('gtceu:creosote_bucket', 'minecraft:bucket')
    e.shaped('kubejs:machine_core_1', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'embers:caminite_bricks',
        B: 'gtceu:diamond_plate',
        C: 'gtceu:lead_plate'
    })
    e.shaped('embers:ember_bore', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'embers:caminite_bricks',
        B: 'ironfurnaces:silver_furnace',
        C: 'gtceu:copper_plate',
        D: 'kubejs:machine_core_1',
        E: 'gtceu:wrought_iron_buzz_saw_blade',
        F: 'gtceu:wrought_iron_drill_head'
    })
    e.shaped('botania:twig_wand', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: 'botania:pure_daisy',
        B: 'gtceu:stone_rod'
    })
    e.shaped('4x create:shaft', [
        ' A ',
        ' A ',
        '   '
    ], {
        A: 'create:andesite_alloy'
    })
    e.shaped('gtceu:pump_deck', [
        ' A ',
        'CDC',
        'CEC'
    ], {
        A: '#gtceu:tools/crafting_hammers',
        C: 'gtceu:wrought_iron_bolt',
        D: 'gtceu:treated_wood_slab',
        E: 'embers:caminite_bricks_slab'
    })
    e.shaped('gtceu:primitive_pump', [
        ' A ',
        'BCD',
        'EFE'
    ], {
        A: '#gtceu:tools/crafting_screwdrivers',
        B: 'kubejs:machine_core_1',
        C: 'gtceu:wrought_iron_rotor',
        D: 'gtceu:wrought_iron_screw',
        E: 'minecraft:water_bucket',
        F: 'gtceu:pump_deck'
    }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    e.shaped('gtceu:pump_hatch', [
        'ABA',
        'ACD',
        'AEA'
    ], {
        A: 'gtceu:wrought_iron_bolt',
        B: 'gtceu:treated_wood_normal_fluid_pipe',
        C: 'gtceu:wood_drum',
        D: '#gtceu:tools/crafting_hammers',
        E: 'gtceu:pump_deck'
    })
    e.shaped('minecraft:barrel', [
        ' A ',
        'BCB',
        'BCB'
    ], {
        A: '#gtceu:tools/crafting_hammers',
        B: 'gtceu:treated_wood_planks',
        C: 'gtceu:long_wrought_iron_rod'
    })
    e.shaped('ars_nouveau:archwood_chest', [
        ' A ',
        'BA ',
        ' C '
    ], {
        A: 'gtceu:long_electrum_rod',
        B: '#gtceu:tools/crafting_hammers',
        C: 'minecraft:chest'
    })
    e.shaped('minecraft:chest', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'kubejs:wood_ingot'
    })
    e.shaped('avaritia:compressed_chest', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: 'minecraft:chest',
        B: '#gtceu:tools/crafting_hammers',
        C: 'ars_nouveau:archwood_chest'
    })
    e.shaped('minecraft:anvil', [
        'AAA',
        ' B ',
        'BBB'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:iron_ingot'
    })
    e.shaped('farmersdelight:cutting_board', [
        'AAB',
        'AAB',
        '   '
    ], {
        A: 'kubejs:wood_ingot',
        B: 'gtceu:stone_rod'
    })
    e.shaped('ars_nouveau:volcanic_sourcelink', [
        ' A ',
        'BCB',
        'DBD'
    ], {
        A: 'minecraft:amethyst_block',
        B: 'gtceu:electrum_ingot',
        C: 'tconstruct:seared_heater',
        D: 'ars_nouveau:sourcestone'
    })
    e.shaped('gtceu:caminite_brick_dust', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: 'gtceu:caminite_brick_ingot',
        B: '#gtceu:tools/crafting_mortars'
    })
    e.shaped('gtceu:primitive_blast_furnace', [
        'ABC',
        'DEF',
        'GBC'
    ], {
        A: '#gtceu:tools/crafting_hammers',
        B: 'gtceu:wrought_iron_rod',
        C: 'gtceu:wrought_iron_bolt',
        D: 'gtceu:wrought_iron_plate',
        E: 'gtceu:treated_wood_frame',
        F: 'kubejs:machine_core_1',
        G: '#gtceu:tools/crafting_screwdrivers'
    })
    e.shaped('industrialforegoing:pitiful_generator', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'gtceu:wrought_iron_bolt',
        B: 'gtceu:lv_electric_motor',
        C: 'minecraft:furnace',
        D: 'kubejs:machine_core_1',
        E: 'gtceu:steel_plate',
        F: 'gtceu:pump_deck'
    })
    e.shaped('industrialforegoing:latex_processing_unit', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:wrought_iron_plate',
        B: 'gtceu:lv_electric_motor',
        C: 'minecraft:bucket',
        D: 'kubejs:machine_core_1',
        E: 'minecraft:smooth_stone'
    })
    e.shaped('create:belt_connector', [
        'AAA',
        'AAA',
        '   '
    ], {
        A: 'gtceu:rubber_plate'
    })
    e.shaped('2x create:belt_connector', [
        'AAA',
        'AAA',
        '   '
    ], {
        A: 'gtceu:silicone_rubber_plate'
    })
    e.shaped('4x create:belt_connector', [
        'AAA',
        'AAA',
        '   '
    ], {
        A: 'gtceu:styrene_butadiene_rubber_plate'
    })
    e.shaped('create:water_wheel', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'gtceu:treated_wood_planks',
        B: 'create:shaft'
    })
    e.shaped('create:large_water_wheel', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'gtceu:treated_wood_planks',
        B: 'create:water_wheel'
    })
    e.shaped('industrialforegoing:dissolution_chamber', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:lv_electric_pump',
        C: 'gtceu:lv_conveyor_module',
        D: 'kubejs:machine_core_1',
        E: 'gtceu:tin_single_cable',
        F: 'minecraft:smooth_stone'
    })
    e.shaped('gtceu:lv_conveyor_module', [
        'A A',
        'BCB',
        'A A'
    ], {
        A: 'gtceu:tin_single_cable',
        B: 'gtceu:lv_electric_motor',
        C: 'create:belt_connector'
    })
    e.shaped('minecraft:dropper', [
        'AAA',
        'A A',
        'ABA'
    ], {
        A: 'minecraft:cobblestone',
        B: 'gtceu:cinnabar_gem'
    })
    e.shaped('gtceu:powderbarrel', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'embers:ember_grit',
        B: 'minecraft:sand',
        C: 'kubejs:wood_block'
    })
    e.shaped('tgears:whisk_cast', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: '#gtceu:tools/crafting_hammers',
        B: 'gtceu:gold_plate',
        C: '#gtceu:tools/crafting_files'
    })
    e.shaped('tgears:hand_cast', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: '#gtceu:tools/crafting_hammers',
        B: 'gtceu:gold_plate',
        C: '#gtceu:tools/crafting_files'
    })
    e.shaped('4x create:basin', [
        '   ',
        'A A',
        'BCB'
    ], {
        A: 'create:andesite_alloy',
        B: 'gtceu:wrought_iron_ingot',
        C: 'mekanism:ingot_steel'
    })
    e.shaped('2x create:basin', [
        '   ',
        'A A',
        'AAA'
    ], {
        A: 'gtceu:wrought_iron_ingot'
    })
    e.shaped('8x create:basin', [
        '   ',
        'A A',
        'AAA'
    ], {
        A: 'mekanism:ingot_steel'
    })
    e.shaped('gtceu:wrought_iron_drill_head', [
        'ABA',
        'ABA',
        'BCB'
    ], {
        A: 'gtceu:wrought_iron_plate',
        B: 'gtceu:diamond_plate',
        C: '#gtceu:tools/crafting_hammers'
    })
    e.shaped('mekanism:dust_diamond', [
        '   ',
        ' A ',
        ' B '
    ], {
        A: 'minecraft:diamond',
        B: '#gtceu:tools/crafting_mortars'
    })
    e.shaped('gtceu:brick_wooden_form', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: '#gtceu:tools/crafting_knives',
        B: 'kubejs:wood_ingot'
    })
    e.shaped('gtceu:lv_enrichment_chamber', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'gtceu:steel_plate',
        B: '#forge:glass_panes/colorless',
        C: 'gtceu:lv_electric_motor',
        D: 'gtceu:lv_machine_hull',
        E: '#gtceu:circuits/lv',
        F: 'minecraft:furnace'
    })
    e.shaped('mekanismgenerators:heat_generator', [
        'ABA',
        'ACA',
        'DDD'
    ], {
        A: 'gtceu:steel_plate',
        B: '#gtceu:circuits/lv',
        C: 'industrialforegoing:pitiful_generator',
        D: 'minecraft:copper_ingot'
    })
    e.shaped('gtceu:lv_infused_extracter', [
        'ABA',
        'CDC',
        'CEC'
    ], {
        A: 'gtceu:lv_electric_motor',
        B: '#gtceu:circuits/lv',
        C: 'gtceu:steel_plate',
        D: 'gtceu:lv_machine_hull',
        E: 'gtceu:tin_rotor'
    })
    e.shaped('gtceu:lv_enrichment_infuser', [
        'AAA',
        'BCD',
        'EFE'
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:lv_conveyor_module',
        C: 'gtceu:lv_machine_hull',
        D: 'gtceu:lv_electric_pump',
        E: '#gtceu:circuits/lv',
        F: 'gtceu:lv_electric_motor'
    })
    e.shaped('ars_nouveau:imbuement_chamber', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'gtceu:electrum_ingot',
        B: 'kubejs:wood_ingot',
        C: 'gtceu:cobalt_bucket'
    }).replaceIngredient({ item: 'gtceu:cobalt_bucket' }, Item.of('minecraft:bucket'))
    e.shaped('gtceu:mv_sensor', [
        'A B',
        'AC ',
        'DAA'
    ], {
        A: 'gtceu:aluminium_plate',
        B: 'botania:mana_diamond',
        C: 'gtceu:electrum_rod',
        D: '#gtceu:circuits/mv'
    })
    e.shaped('gtceu:mv_emitter', [
        'ABC',
        'BDB',
        'CBA'
    ], {
        A: 'gtceu:copper_single_cable',
        B: 'gtceu:electrum_rod',
        C: '#gtceu:circuits/mv',
        D: 'botania:mana_diamond'
    })
    e.shaped('embers:mechanical_core', [
        'AAA',
        'BCB',
        'DBD'
    ], {
        A: 'gtceu:caminite_brick_plate',
        B: 'gtceu:tin_small_item_pipe',
        C: 'kubejs:machine_core_1',
        D: 'gtceu:lead_ingot'
    })
    e.shaped('moreburners:ember_burner', [
        'AAA',
        'BCB',
        'BDB'
    ], {
        A: 'gtceu:cupronickel_foil',
        B: 'gtceu:caminite_brick_plate',
        C: 'embers:mechanical_core',
        D: 'embers:mini_boiler'
    })
    e.shaped('embers:mini_boiler', [
        'AAA',
        'B  ',
        'BAA'
    ], {
        A: 'mekanism:ingot_steel',
        B: 'gtceu:wrought_iron_plate'
    })
    e.shaped('kubejs:grizzly_chute', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:aluminium_screw',
        B: 'minecraft:iron_bars',
        C: 'gtceu:solid_machine_casing'
    })
    e.shaped('gtceu:lv_machine_hull', [
        'AEA',
        'BCB',
        'DBD'
    ], {
        A: 'gtceu:double_wrought_iron_plate',
        B: 'gtceu:double_steel_plate',
        C: 'kubejs:machine_core_1',
        D: 'gtceu:tin_single_cable',
        E: '#forge:tools/wrenches'
    })
    e.shaped('gtceu:cleanroom', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: 'gtceu:item_filter',
        B: 'gtceu:aluminium_rotor',
        C: 'gtceu:mv_machine_hull',
        D: 'gtceu:mv_electric_motor',
        E: '#gtceu:circuits/mv'
    })
    e.shaped('rainrot:five_pebbsi_vending_machine', [
        'AAB',
        'CDE',
        'FDG'
    ], {
        A: '#gtceu:circuits/mv',
        B: 'gtceu:mv_item_passthrough_hatch',
        C: 'gtceu:mv_electric_motor',
        D: 'gtceu:blue_steel_block',
        E: 'gtceu:mv_robot_arm',
        F: 'gtceu:mv_output_bus',
        G: 'embers:caminite_button'
    })
    e.shaped('replication:replication_terminal', [
        ' AA',
        'BCD',
        ' AA'
    ], {
        A: 'replication:replica_ingot',
        B: 'replication:matter_network_pipe',
        C: 'gtceu:computer_monitor_cover',
        D: '#forge:glass_panes/colorless'
    })
    e.shaped('16x replication:matter_network_pipe', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'replication:replica_ingot',
        B: '#forge:glass/colorless',
        C: 'gtceu:infused_alloy_quadruple_wire'
    })
    e.shaped('botania:alchemy_catalyst', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'botania:mana_diamond',
        B: 'botania:livingrock',
        C: 'mekanism:block_refined_glowstone'
    })
    e.shaped('replication:replicator', [
        'ABA',
        'FAC',
        'ABE'
    ], {
        A: 'replication:replica_ingot',
        B: 'mekanism:ingot_steel',
        C: 'botania:rune_greed',
        E: 'botania:rune_mana',
        F: 'replication:matter_network_pipe'
    })
    e.shaped('replication:identification_chamber', [
        'ABA',
        'CDA',
        'AEA'
    ], {
        A: 'replication:replica_ingot',
        B: 'botania:rune_greed',
        C: 'replication:matter_network_pipe',
        D: 'botania:rune_lust',
        E: 'botania:mana_diamond'
    })
    e.shaped('replication:disintegrator', [
        'ABC',
        'DEC',
        'AAA'
    ], {
        A: 'replication:replica_ingot',
        B: 'botania:rune_gluttony',
        C: 'replication:matter_tank',
        D: 'replication:matter_network_pipe',
        E: 'gtceu:steel_buzz_saw_blade'
    })
    e.shaped('replication:matter_tank', [
        'AAA',
        'B B',
        'CAC'
    ], {
        A: 'replication:replica_ingot',
        B: '#forge:glass/colorless',
        C: 'mekanism:ingot_steel'
    })
    e.shaped('replication:chip_storage', [
        'AAB',
        'CBD',
        'CCC'
    ], {
        A: 'mekanism:ingot_steel',
        B: 'gtceu:wrought_iron_plate',
        C: 'gtceu:potin_ingot',
        D: 'minecraft:iron_trapdoor'
    })
    e.shaped('replication:memory_chip', [
        'ABC',
        'BCD',
        'CDE'
    ], {
        A: '#forge:glass_panes/colorless',
        B: 'mekanism:enriched_redstone',
        C: 'replication:replica_ingot',
        D: 'gtceu:gold_plate',
        E: 'gtceu:electrum_foil'
    })
    e.shaped('kubejs:wood_block', [
        'AA ',
        'AA ',
        '   '
    ], {
        A: 'kubejs:wood_ingot'
    })
    e.shaped('2x gtceu:paper_dust', [
        '   ',
        'AAA',
        ' B '
    ], {
        A: 'mekanism:sawdust',
        B: '#gtceu:tools/crafting_mortars'
    })
    e.shaped('mekanism:cardboard_box', [
        ' A ',
        'A A',
        ' A '
    ], {
        A: 'mekanism:sawdust'
    }),
        e.shaped('gtceu:ulv_input_bus', [
            ' A ',
            ' B ',
            '   '
        ], {
            A: 'minecraft:chest',
            B: 'gtceu:ulv_machine_hull'
        })
    e.shaped('gtceu:ulv_input_bus', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: 'minecraft:chest',
        B: 'gtceu:ulv_machine_hull'
    })
    e.shaped('gtceu:lv_input_hatch', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: 'gtceu:wood_drum',
        B: 'gtceu:lv_machine_hull'
    })
    e.shaped('gtceu:lv_input_bus', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: 'gtceu:wood_crate',
        B: 'gtceu:lv_machine_hull'
    })
    e.shaped('gtceu:mv_energy_input_hatch', [
        'AB ',
        'ACD',
        'AB '
    ], {
        A: 'gtceu:annealed_copper_single_cable',
        B: 'gtceu:alumina_ceramic_plate',
        C: 'gtceu:mv_machine_hull',
        D: 'gtceu:ulpic_chip'
    })
    e.shaped('industrialforegoing:mob_slaughter_factory', [
        'ABA',
        'CDC',
        'EBE'
    ], {
        A: 'create:crushing_wheel',
        B: '#gtceu:circuits/hv',
        C: 'gtceu:hv_electric_motor',
        D: 'gtceu:hv_machine_hull',
        E: 'gtceu:aluminium_fluid_cell'
    })
    e.shaped('gtnn:homemade_bedrock_ore_machine', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'gtceu:ulv_solar_panel',
        B: 'gtceu:polytetrafluoroethylene_frame',
        C: '#gtceu:circuits/hv',
        D: 'gtceu:hv_machine_hull',
        E: 'gtceu:red_steel_plate',
        F: 'gtceu:stainless_steel_drill_head'
    })
    e.shaped('shrink:shrinking_device', [
        'ABC',
        'DAB',
        'BDA'
    ], {
        A: 'minecraft:ender_eye',
        B: 'industrialforegoing:pink_slime_ingot',
        C: '#forge:glass_panes/colorless',
        D: 'embers:caminite_button'
    })
    e.shaped('2x occultism:wormhole_frame', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:electrum_ingot',
        B: 'gtceu:damascus_steel_ingot',
        C: 'minecraft:ender_eye'
    })
    e.shaped('sfm:labelgun', [
        'AAB',
        'CDA',
        'DC '
    ], {
        A: 'gtceu:polyethylene_ingot',
        B: 'gtceu:name_casting_mold',
        C: 'gtceu:chemical_red_dye',
        D: 'gtceu:polytetrafluoroethylene_rod'
    })
    e.shaped('sfm:network_tool', [
        'ABC',
        'DEB',
        'FDA'
    ], {
        A: 'gtceu:lv_sodium_battery',
        B: '#gtceu:circuits/hv',
        C: 'gtceu:computer_monitor_cover',
        D: 'gtceu:ulv_solar_panel',
        E: 'gtceu:double_iron_plate',
        F: 'gtceu:polyethylene_ingot'
    })
    e.shaped('functionalstorage:configuration_tool', [
        'AAB',
        'CDB',
        'EEC'
    ], {
        A: 'gtceu:iron_plate',
        B: 'gtceu:fine_gold_wire',
        C: 'minecraft:paper',
        D: 'minecraft:black_dye',
        E: 'gtceu:emerald_plate'
    })
    e.shaped('functionalstorage:linking_tool', [
        'AAB',
        'CDB',
        'EEC'
    ], {
        A: 'gtceu:iron_plate',
        B: 'gtceu:fine_gold_wire',
        C: 'minecraft:paper',
        D: 'minecraft:black_dye',
        E: 'gtceu:diamond_plate'
    })
    e.shaped('4x minecraft:chest', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'kubejs:wood_block'
    })
    e.shaped('functionalstorage:oak_1', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'kubejs:wood_ingot',
        B: '#forge:chests/wooden'
    })
    e.shaped('2x functionalstorage:oak_2', [
        'ABA',
        'AAA',
        'ABA'
    ], {
        A: 'kubejs:wood_ingot',
        B: '#forge:chests/wooden'
    })
    e.shaped('4x functionalstorage:oak_4', [
        'ABA',
        'BBB',
        'ABA'
    ], {
        A: '#forge:chests/wooden',
        B: 'kubejs:wood_ingot'
    })
    e.shaped('functionalstorage:fluid_1', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:smooth_stone_slab',
        B: 'minecraft:bucket'
    })
    e.shaped('2x functionalstorage:fluid_2', [
        'ABA',
        'AAA',
        'ABA'
    ], {
        A: 'minecraft:smooth_stone_slab',
        B: 'minecraft:bucket'
    })
    e.shaped('4x functionalstorage:fluid_4', [
        'ABA',
        'BBB',
        'ABA'
    ], {
        A: 'minecraft:bucket',
        B: 'minecraft:smooth_stone_slab'
    })
    e.shaped('functionalstorage:copper_upgrade', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:copper_ingot',
        B: 'minecraft:copper_block',
        C: '#forge:chests/wooden',
        D: 'gtceu:steel_plate'
    })
    e.shaped('functionalstorage:storage_controller', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:smooth_stone',
        B: 'gtceu:dense_steel_plate',
        C: 'minecraft:quartz_block',
        D: 'minecraft:ender_eye'
    })
    e.shaped('functionalstorage:framed_storage_controller', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_nugget',
        B: 'functionalstorage:storage_controller'
    })
    e.shaped('functionalstorage:framed_controller_extension', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_nugget',
        B: 'functionalstorage:controller_extension'
    })
    e.shaped('functionalstorage:controller_extension', [
        'ABA',
        'ABA',
        'CCC'
    ], {
        A: 'minecraft:smooth_stone',
        B: 'minecraft:quartz_block',
        C: 'gtceu:steel_plate'
    })
    e.shaped('functionalstorage:compacting_drawer', [
        'ABA',
        'ACA',
        'DED'
    ], {
        A: 'minecraft:smooth_stone',
        B: 'functionalstorage:oak_1',
        C: 'minecraft:piston',
        D: 'gtceu:dense_steel_plate',
        E: 'functionalstorage:oak_2'
    })
    e.shaped('functionalstorage:compacting_framed_drawer', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_nugget',
        B: 'functionalstorage:compacting_drawer'
    })
    e.shaped('functionalstorage:iron_downgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'gtceu:steel_plate'
    })
    e.shaped('functionalstorage:collector_upgrade', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:iron_nugget',
        B: 'minecraft:hopper',
        C: 'minecraft:redstone',
        D: 'gtceu:steel_plate'
    })
    e.shaped('functionalstorage:puller_upgrade', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'minecraft:iron_nugget',
        B: 'minecraft:hopper',
        C: 'gtceu:steel_plate',
        D: 'minecraft:redstone'
    })
    e.shaped('functionalstorage:pusher_upgrade', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'minecraft:iron_nugget',
        B: 'minecraft:redstone',
        C: 'gtceu:steel_plate',
        D: 'minecraft:hopper'
    })
    e.shaped('functionalstorage:void_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:iron_nugget',
        B: 'tconstruct:obsidian_pane',
        C: 'gtceu:steel_plate'
    })
    e.shaped('functionalstorage:redstone_upgrade', [
        'ABA',
        'CDC',
        'EBE'
    ], {
        A: 'minecraft:redstone_torch',
        B: 'minecraft:comparator',
        C: 'minecraft:redstone',
        D: 'gtceu:steel_plate',
        E: 'minecraft:redstone_block'
    })
    e.shaped('functionalstorage:armory_cabinet', [
        'ABA',
        'BCB',
        'ACA'
    ], {
        A: 'functionalstorage:oak_4',
        B: 'minecraft:smooth_stone',
        C: 'gtceu:dense_steel_plate'
    })
    e.shaped('sophisticatedbackpacks:backpack', [
        'ABA',
        'ACA',
        'BBB'
    ], {
        A: 'gtceu:steel_rod',
        B: 'gtceu:carbon_fiber_plate',
        C: '#forge:chests/wooden'
    })
    e.shaped('gtceu:mv_conveyor_module', [
        'A A',
        'BCB',
        'A A'
    ], {
        A: 'gtceu:copper_single_cable',
        B: 'gtceu:mv_electric_motor',
        C: 'create:belt_connector'
    })
    e.shaped('2x mekanism:teleporter_frame', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:beryllium_ingot',
        B: 'gtceu:damascus_steel_ingot',
        C: 'occultism:wormhole_frame'
    })
    e.shaped('mekanism:teleporter', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'gtceu:beryllium_ingot',
        B: 'mekanism:teleporter_frame',
        C: 'mekanism:teleportation_core',
        D: 'occultism:wormhole_frame'
    })
    e.shaped('mekanism:teleportation_core', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:alloy_reinforced',
        C: 'mekanism:alloy_infused',
        D: 'gtceu:exquisite_emerald_gem'
    })
    e.shaped('mekanism:hdpe_elytra', [
        'ABA',
        'C C',
        'C C'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'gtceu:fine_steel_wire',
        C: 'gtceu:polyethylene_plate'
    })
    e.shaped('moreburners:electric_burner', [
        'ABA',
        'CCC',
        ' C '
    ], {
        A: 'gtceu:copper_quadruple_cable',
        B: 'gtceu:cupronickel_coil_block',
        C: 'gtceu:steel_plate'
    })
})