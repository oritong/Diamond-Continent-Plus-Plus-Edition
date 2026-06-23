ServerEvents.recipes(e => {
    let dust_convert = [
        'mekanism:dust_diamond',
        'gtceu:lazurite_dust',
        'gtceu:cinnabar_dust',
        "occultism:gold_dust",
        'gtceu:silver_dust',
        'gtceu:iron_dust',
        'gtceu:copper_dust',
        'gtceu:tin_dust',
        'gtceu:lead_dust',
        'gtceu:zinc_dust',
        'gtceu:quartzite_dust',
        'gtceu:stone_dust',
        "mekanism:sawdust"
    ]
    let ingot_convert = [
        'minecraft:diamond',
        'gtceu:lazurite_gem',
        'gtceu:cinnabar_gem',
        "minecraft:gold_ingot",
        'gtceu:silver_ingot',
        'minecraft:iron_ingot',
        'minecraft:copper_ingot',
        'gtceu:tin_ingot',
        'gtceu:lead_ingot',
        'gtceu:zinc_ingot',
        'gtceu:quartzite_gem',
        'minecart:stone',
        'kubejs:wood_ingot'
    ]
    let block_convert = [
        'minecraft:diamond_block',
        'gtceu:cinnabar_block',
        'gtceu:lazurite_block',
        'minecraft:gold_block',
        'gtceu:silver_block',
        'minecraft:iron_block',
        'minecraft:copper_block',
        'gtceu:tin_block',
        'gtceu:lead_block',
        'gtceu:zinc_block',
        'gtceu:quartzite_block',
        '9x minecart:stone'
    ]
    let dyes = [
        'minecraft:white_dye',
        'minecraft:orange_dye',
        'minecraft:magenta_dye',
        'minecraft:light_blue_dye',
        'minecraft:yellow_dye',
        'minecraft:lime_dye',
        'minecraft:pink_dye',
        'minecraft:gray_dye',
        'minecraft:light_gray_dye',
        'minecraft:cyan_dye',
        'minecraft:purple_dye',
        'minecraft:blue_dye',
        'minecraft:brown_dye',
        'minecraft:green_dye',
        'minecraft:red_dye',
        'minecraft:black_dye'
    ]
    for (let i = 0; i < dust_convert.length - 1; i++) {
        let dust_convert_input = dust_convert[i]
        let dust_convert_output = dust_convert[i + 1]
        e.recipes.lychee.item_inside(dust_convert_input, BlockPredicate.of('oritong:glimmer')).post([Post.drop_item(dust_convert_output)]).time(5)
        e.custom({
            "type": "cmr:custom_fan",
            "ingredients": [
                {
                    "item": dust_convert_input
                },
                {
                    "amount": 1000,
                    "fluid": "oritong:glimmer",
                    "nbt": {}
                }
            ],
            "results": [
                {
                    "item": dust_convert_output
                }
            ]
        })
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
        e.custom({
            "type": "cmr:custom_fan",
            "ingredients": [
                {
                    "item": block_convert_input
                },
                {
                    "amount": 1000,
                    "fluid": "oritong:glimmer",
                    "nbt": {}
                }
            ],
            "results": [
                {
                    "item": block_convert_output
                }
            ]
        })
    }
    for (let i = 0; i < ingot_convert.length - 2; i++) {
        let ingot_convert_input = ingot_convert[i]
        let ingot_convert_output = ingot_convert[i + 1]
        e.custom({
            "type": "cmr:custom_fan",
            "ingredients": [
                {
                    "item": ingot_convert_input
                },
                {
                    "amount": 1000,
                    "fluid": "oritong:glimmer",
                    "nbt": {}
                }
            ],
            "results": [
                {
                    "item": ingot_convert_output
                }
            ]
        })
    }
    for (let i = 0; i < dyes.length; i++) {
        let input = dyes[i]
        let output = dyes[(i + 1) % dyes.length]

        e.recipes.lychee.item_inside(input, BlockPredicate.of('oritong:glimmer'))
            .post([Post.drop_item(output)])
            .time(5)
        e.custom({
            "type": "cmr:custom_fan",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "amount": 1000,
                    "fluid": "oritong:glimmer",
                    "nbt": {}
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    e.custom({
        "type": "cmr:custom_fan",
        "ingredients": [
            {
                "item": 'minecart:stone'
            },
            {
                "amount": 1000,
                "fluid": "oritong:glimmer",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": 'kubejs:wood_block'
            }
        ]
    })
    e.custom({
        "type": "cmr:custom_fan",
        "ingredients": [
            {
                "item": 'gtceu:quartzite_block'
            },
            {
                "amount": 1000,
                "fluid": "oritong:glimmer",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": 'minecart:stone',
                "count": 9
            }
        ]
    })

    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_pickaxe', Item.of('tconstruct:pick_head', '{Material:"gm_construct:wrought_iron"}').strongNBT(), Item.of('tconstruct:tool_binding', '{Material:"gm_construct:wrought_iron"}').strongNBT(), 'gtceu:stone_rod')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_mortar', Item.of('tconstruct:tough_handle', '{Material:"gm_construct:wrought_iron"}').strongNBT(), 'minecraft:stone', 'minecraft:stone')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_knife', Item.of('tconstruct:small_blade', '{Material:"gm_construct:wrought_iron"}').strongNBT(), Item.of('tconstruct:tool_binding', '{Material:"gm_construct:wrought_iron"}').strongNBT(), 'gtceu:stone_rod')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_hammer', 'gtceu:wrought_iron_block', Item.of('tconstruct:tool_binding', '{Material:"gm_construct:wrought_iron"}').strongNBT(), 'gtceu:stone_rod')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_saw', 'gtceu:wrought_iron_plate', Item.of('tconstruct:large_plate', '{Material:"gm_construct:wrought_iron"}').strongNBT(), 'gtceu:stone_rod')

    e.recipes.gtceu.glimmer_collector().circuit(1).posY(-63, -12).outputFluids(Fluid.of('oritong:glimmer', 30)).EUt(8).duration(30)
    e.recipes.kubejs.shapeless('kubejs:wood_block', ['kubejs:wood_ingot', 'kubejs:wood_ingot', 'kubejs:wood_ingot', 'kubejs:wood_ingot', 'kubejs:wood_ingot', 'kubejs:wood_ingot', 'kubejs:wood_ingot', 'kubejs:wood_ingot', 'kubejs:wood_ingot'])
    e.recipes.kubejs.shapeless('9x kubejs:wood_ingot', ['kubejs:wood_block'])
    e.recipes.lychee.block_crushing('minecraft:diamond_block').post([Post.drop_item('4x gtceu:diamond_plate')])
    e.recipes.lychee.block_crushing('gtceu:quartzite_block').post([Post.drop_item('4x gtceu:quartzite_plate')])
    e.recipes.lychee.block_crushing('gtceu:lazurite_block').post([Post.drop_item('4x gtceu:lazurite_plate')])
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'gtceu:diamond_plate'
        },
        "cast_consumed": true,
        "cooling_time": 75,
        "fluid": {
            "amount": 144,
            "fluid": "gtceu:rose_gold"
        },
        "result": 'embers:dawnstone_ingot'
    })
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
    e.recipes.minecraft.smelting('2x tconstruct:seared_brick', 'tconstruct:grout', 0.3, 10 * 20)
    e.recipes.minecraft.blasting('2x tconstruct:seared_brick', 'tconstruct:grout', 0.3, 5 * 20)
    e.recipes.kubejs.shapeless('6x tconstruct:grout', ['mekanism:dust_diamond', 'mekanism:dust_diamond', 'mekanism:dust_diamond', 'minecraft:gravel', 'minecraft:gravel', 'minecraft:sand', 'minecraft:sand', 'minecraft:sand', 'minecraft:sand'])
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'minecraft:iron_nugget'
        },
        "cast_consumed": true,
        "cooling_time": 100,
        "fluid": {
            "amount": 144,
            "fluid": "gtceu:iron"
        },
        "result": 'gtceu:wrought_iron_ingot'
    })
    e.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": 'minecraft:iron_ingot'
        },
        "cast_consumed": true,
        "cooling_time": 800,
        "fluid": {
            "amount": 1296,
            "fluid": "gtceu:iron"
        },
        "result": 'gtceu:wrought_iron_block'
    })
    e.recipes.lychee.item_inside('embers:dawnstone_ingot', 'oritong:glimmer').post([Post.place('minecraft:water'), Post.drop_item('gtceu:lead_dust')]).time(45)
    e.recipes.lychee.item_inside('minecart:stone', 'minecraft:water').post([Post.drop_item('minecraft:cobblestone'), Post.drop_item('minecraft:bone_meal').withChance('0.12'), Post.drop_item('mysticalagriculture:soulstone').withChance('0.04')]).time(10)
    e.recipes.kubejs.shapeless('4x gtceu:rose_gold_dust', ['gtceu:copper_dust', 'occultism:gold_dust', 'occultism:gold_dust', 'occultism:gold_dust'])
    e.shaped('kubejs:stone_hammer', [
        'AA ',
        'AAB',
        'AA '
    ], {
        A: 'minecraft:cobblestone',
        B: 'gtceu:stone_rod'
    })
    e.recipes.lychee.item_inside('minecraft:sand', 'minecraft:water').post([Post.place("*"), Post.drop_item('minecraft:clay')]).time(10)
    e.recipes.kubejs.shapeless('minecraft:gravel', ['#forge:tools/hammers', 'minecraft:cobblestone']).damageIngredient('#forge:tools/hammers')
    e.recipes.kubejs.shapeless('minecraft:sand', ['#forge:tools/hammers', 'minecraft:gravel']).damageIngredient('#forge:tools/hammers')
    e.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "item": 'minecraft:dirt'
            },
            {
                "item": 'mekanism:dust_diamond'
            }
        ],
        "result": {
            "item": 'kubejs:the_source_of_the_earth'
        }
    })
    e.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "oritong:glimmer"
        },
        "ingredients": [
            {
                "item": 'minecraft:cobblestone'
            },
            {
                "item": 'mysticalagriculture:inferium_essence'
            }
        ],
        "result": {
            "item": 'minecraft:cobblestone',
            'count': 5
        }
    })
    e.shaped('kubejs:raw_apothecary', [
        'AAA',
        ' B ',
        'ABA'
    ], {
        A: 'minecraft:clay_ball',
        B: 'minecraft:clay'
    })
    e.recipes.minecraft.smelting('botania:apothecary_plains', 'kubejs:raw_apothecary')
    e.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
            {
                "tag": 'forge:dyes/white'
            },
            {
                "tag": 'forge:dyes/white'
            },
            {
                "tag": 'forge:dyes/white'
            },
            {
                "tag": 'forge:dyes/white'
            },
            {
                "item": 'mysticalagriculture:soul_dust'
            }
        ],
        "output": {
            "item": 'botania:pure_daisy'
        },
        "reagent": {
            "item": 'kubejs:the_source_of_the_earth'
        }
    })
    e.recipes.botania.pure_daisy('minecraft:amethyst_block', 'minecraft:diamond_block', 60)
    e.recipes.botania.pure_daisy('ars_nouveau:sourcestone', 'minecraft:stone', 60)
    e.shaped('tconstruct:seared_ingot_gauge', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'gtceu:quartzite_plate',
        B: 'tconstruct:seared_brick'
    })
    e.recipes.botania.pure_daisy('minecraft:lava', 'minecraft:magma_block')
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
    e.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": 'gtceu:glass_dust'
        },
        "result": {
            "amount": 1000,
            "fluid": "tconstruct:molten_glass"
        },
        "temperature": 750,
        "time": 88
    })
    e.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": "tconstruct:seared_melter"
        },
        "result": {
            "amount": 2250,
            "fluid": "tconstruct:seared_stone"
        },
        "temperature": 600,
        "time": 187
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
    e.recipes.lychee.item_inside('minecraft:iron_ingot', 'minecraft:lava').post([Post.drop_item('8x gtceu:wrought_iron_nugget')]).time(5)
    e.recipes.lychee.item_inside('gtceu:diamond_plate', 'minecraft:lava').post([Post.drop_item('embers:caminite_plate')]).time(15)
    e.recipes.lychee.item_inside('minecraft:iron_block', 'minecraft:lava').post([Post.drop_item('8x gtceu:wrought_iron_ingot')]).time(20)
    e.recipes.minecraft.smithing_transform('tconstruct:part_builder', 'kubejs:wood_block', 'kubejs:wood_ingot', 'kubejs:wood_ingot')
    e.recipes.create.item_application('tconstruct:crafting_station', ['minecraft:crafting_table', 'tconstruct:part_builder'])
    e.recipes.create.item_application('minecraft:smithing_table', ['minecraft:crafting_table', 'tconstruct:seared_table'])
    e.shaped('embers:caminite_bricks', [
        'AA ',
        'AA ',
        '   '
    ], {
        A: 'embers:caminite_plate'
    })
    e.recipes.farmersdelight.cutting('embers:caminite_bricks', '#minecraft:pickaxes', '4x embers:caminite_brick')
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
    e.custom({
        "type": "embers:boring",
        "dimensions": [
            "minecraft:overworld"
        ],
        "max_height": -57,
        "output": {
            "item": 'kubejs:originium'
        },
        "required_block": {
            "amount": 3,
            "block_tag": "embers:world_bottom"
        },
        "weight": 0.5
    })
    e.custom({
        "type": "embers:boring",
        "dimensions": [
            "minecraft:overworld"
        ],
        "max_height": -57,
        "output": {
            "item": 'kubejs:originium_shard'
        },
        "required_block": {
            "amount": 3,
            "block_tag": "embers:world_bottom"
        },
        "weight": 2
    })
    e.recipes.botania.pure_daisy('industrialforegoing:latex', 'kubejs:wood_block').id('oritong:hide0')
    e.recipes.kubejs.shapeless('8x gtceu:andesite_alloy_dust', ['gtceu:stone_dust', 'gtceu:stone_dust', 'gtceu:stone_dust', 'gtceu:stone_dust', 'gtceu:stone_dust', 'gtceu:stone_dust', 'gtceu:wrought_iron_dust', 'gtceu:wrought_iron_dust', 'embers:ember_grit'])
    e.recipes.lychee.item_inside('gtceu:andesite_alloy_dust', 'industrialforegoing:latex').post([Post.drop_item('create:andesite_alloy')]).time(32.5).hide_in_viewer(true)
    e.shaped('embers:ember_grit', [
        '   ',
        ' A ',
        ' B '
    ], {
        A: 'embers:ember_shard',
        B: '#forge:tools/mortars'
    }).damageIngredient('#forge:tools/mortars')
    e.shaped('6x embers:ember_grit', [
        '   ',
        ' A ',
        ' B '
    ], {
        A: 'embers:ember_crystal',
        B: '#forge:tools/mortars'
    }).damageIngredient('#forge:tools/mortars')
    e.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": 'create:andesite_alloy'
        },
        "cast_consumed": true,
        "cooling_time": 200,
        "fluid": {
            "amount": 500,
            "fluid": "tconstruct:molten_clay"
        },
        "result": 'gtceu:coke_oven_bricks'
    })
    e.recipes.gtceu.coke_oven().itemInputs('embers:ember_grit').itemOutputs('minecraft:glowstone_dust').outputFluids(Fluid.of('gtceu:creosote', 250)).duration(20 * 30)
    e.shaped('8x gtceu:treated_wood_planks', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'kubejs:wood_block',
        B: 'gtceu:creosote_bucket'
    }).replaceIngredient('gtceu:creosote_bucket', 'minecraft:bucket')
    e.recipes.lychee.item_inside('kubejs:wood_block', 'gtceu:creosote').post([Post.drop_item('gtceu:treated_wood_planks')]).time(45)
    e.shaped('kubejs:machine_core_1', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'embers:caminite_bricks',
        B: 'gtceu:diamond_plate',
        C: 'gtceu:lead_plate'
    })
    e.replaceInput({ id: 'embers:ember_bore' }, 'embers:mechanical_core', 'kubejs:machine_core_1')
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
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'gtceu:andesite_alloy_dust'
        },
        "cast_consumed": true,
        "cooling_time": 20,
        "fluid": {
            "amount": 50,
            "fluid": "industrialforegoing:latex"
        },
        "result": 'create:andesite_alloy'
    })
    e.recipes.minecraft.smithing_transform('avaritia:blaze_pickaxe', 'embers:dawnstone_block', 'gtceu:wrought_iron_pickaxe', 'minecraft:diamond')
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
    }).damageIngredient('#gtceu:tools/crafting_hammers')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_screwdriver', 'gtceu:wrought_iron_screwdriver_tip', 'gtceu:wrought_iron_rod', 'gtceu:stone_rod')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_file', 'gtceu:wrought_iron_plate', 'gtceu:wrought_iron_plate', 'gtceu:stone_rod')
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
    }).damageIngredient('#gtceu:tools/crafting_screwdrivers').replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
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
    }).damageIngredient('#gtceu:tools/crafting_hammers')
    e.shaped('minecraft:barrel', [
        ' A ',
        'BCB',
        'BCB'
    ], {
        A: '#gtceu:tools/crafting_hammers',
        B: 'gtceu:treated_wood_planks',
        C: 'gtceu:long_wrought_iron_rod'
    }).damageIngredient('#gtceu:tools/crafting_hammers')
    e.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": 'minecraft:barrel'
        },
        "cast_consumed": true,
        "cooling_time": 150,
        "fluid": {
            "amount": 200,
            "fluid": "industrialforegoing:latex"
        },
        "result": 'gtceu:wood_drum'
    })
    e.shaped('ars_nouveau:archwood_chest', [
        ' A ',
        'BA ',
        ' C '
    ], {
        A: 'gtceu:long_electrum_rod',
        B: '#gtceu:tools/crafting_hammers',
        C: 'minecraft:chest'
    }).damageIngredient('#gtceu:tools/crafting_hammers')
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
    }).damageIngredient('#gtceu:tools/crafting_hammers')
    e.shaped('minecraft:anvil', [
        'AAA',
        ' B ',
        'BBB'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:iron_ingot'
    })
    e.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": "forge:storage_blocks/wrought_iron"
        },
        "result": {
            "amount": 1296,
            "fluid": "gtceu:wrought_iron"
        },
        "temperature": 800,
        "time": 216
    })
    e.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": "forge:ingots/wrought_iron"
        },
        "result": {
            "amount": 144,
            "fluid": "gtceu:wrought_iron"
        },
        "temperature": 800,
        "time": 72
    })
    e.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": "forge:nuggets/wrought_iron"
        },
        "result": {
            "amount": 16,
            "fluid": "gtceu:wrought_iron"
        },
        "temperature": 800,
        "time": 24
    })
    e.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": 'create:whisk'
        },
        "result": {
            "amount": 1296,
            "fluid": "gtceu:iron"
        },
        "temperature": 800,
        "time": 18
    })
    e.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": 'create:brass_hand'
        },
        "result": {
            "amount": 1296,
            "fluid": "gtceu:brass"
        },
        "temperature": 800,
        "time": 25
    })
    e.shaped('farmersdelight:cutting_board', [
        'AAB',
        'AAB',
        '   '
    ], {
        A: 'kubejs:wood_ingot',
        B: 'gtceu:stone_rod'
    })
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_shovel', Item.of('tconstruct:adze_head', '{Material:"gm_construct:wrought_iron"}').strongNBT(), Item.of('tconstruct:tool_binding', '{Material:"gm_construct:wrought_iron"}').strongNBT(), 'gtceu:stone_rod')
    e.recipes.farmersdelight.cutting('minecraft:bone_meal', '#gtceu:tools/crafting_hammers', [Item.of('minecraft:white_dye').withChance(0.6), Item.of('minecraft:white_dye').withChance(0.4), Item.of('minecraft:white_dye').withChance(0.2)])
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
    e.recipes.kubejs.shapeless('3x gtceu:electrum_dust', ['occultism:gold_dust', 'gtceu:silver_dust', 'occultism:gold_dust', 'gtceu:silver_dust'])
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_wire_cutter', Item.of('tconstruct:tough_handle', '{Material:"gm_construct:wrought_iron"}').strongNBT(), Item.of('tconstruct:tough_binding', '{Material:"gm_construct:wrought_iron"}').strongNBT(), Item.of('tconstruct:tough_handle', '{Material:"gm_construct:wrought_iron"}').strongNBT())
    e.shaped('gtceu:caminite_brick_dust', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: 'gtceu:caminite_brick_ingot',
        B: '#gtceu:tools/crafting_mortars'
    }).damageIngredient('#gtceu:tools/crafting_mortars')
    e.recipes.kubejs.shapeless('kubejs:raw_compressed_fireclay', ['gtceu:brick_dust', 'gtceu:caminite_brick_dust', 'gtceu:brick_wooden_form']).keepIngredient('gtceu:brick_wooden_form')
    e.replaceInput({ output: 'gtceu:fireclay_dust' }, 'gtceu:clay_dust', 'gtceu:caminite_brick_dust')
    e.recipes.lychee.block_crushing('kubejs:raw_compressed_fireclay').post([Post.drop_item('gtceu:compressed_fireclay')])
    e.recipes.gtceu.primitive_blast_furnace().itemInputs('gtceu:wrought_iron_ingot', 'embers:ember_shard').itemOutputs('mekanism:ingot_steel').chancedOutput('gtceu:tiny_glowstone_dust', 2000, 0).duration(20 * 75)
    e.recipes.gtceu.primitive_blast_furnace().itemInputs('6x gtceu:wrought_iron_ingot', 'embers:ember_crystal').itemOutputs('6x mekanism:ingot_steel', 'gtceu:small_glowstone_dust').duration(20 * 180)
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
    }).damageIngredient('#gtceu:tools/crafting_screwdrivers').damageIngredient('#gtceu:tools/crafting_hammers', 2)
    e.replaceInput({ id: 'gtceu:shaped/electric_motor_lv_iron' }, 'gtceu:tin_single_cable', 'gtceu:tin_double_wire')
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
    e.recipes.minecraft.smelting('gtceu:rubber_plate', 'industrialforegoing:dryrubber')
    e.shaped('2x create:belt_connector', [
        'AAA',
        'AAA',
        '   '
    ], {
        A: 'gtceu:rubber_plate'
    })
    e.shaped('4x create:belt_connector', [
        'AAA',
        'AAA',
        '   '
    ], {
        A: 'gtceu:silicone_rubber_plate'
    })
    e.shaped('8x create:belt_connector', [
        'AAA',
        'AAA',
        '   '
    ], {
        A: 'gtceu:styrene_butadiene_rubber_plate'
    })
    e.replaceInput({ output: 'gtceu:treated_wood_planks' }, 'minecraft:oak_planks', 'kubejs:wood_block')
    e.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": 'kubejs:wood_block'
        },
        "cast_consumed": true,
        "cooling_time": 100,
        "fluid": {
            "amount": 125,
            "fluid": "gtceu:creosote"
        },
        "result": 'gtceu:treated_wood_planks'
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
    e.recipes.create.item_application('create:andesite_casing', ['kubejs:machine_core_1', 'create:andesite_alloy'])
    e.recipes.create.item_application('create:copper_casing', ['kubejs:machine_core_1', 'minecraft:copper_ingot'])
    e.recipes.minecraft.smithing_transform('create:mechanical_saw', 'gtceu:steel_buzz_saw_blade', 'create:andesite_casing', 'create:shaft')
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
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'gtceu:caminite_brick_ingot'
            },
            {
                "item": 'gtceu:caminite_brick_ingot'
            },
            {
                "item": 'gtceu:caminite_brick_ingot'
            },
            {
                "item": 'gtceu:caminite_brick_ingot'
            },
            {
                "item": 'gtceu:diamond_plate'
            },
            {
                "item": 'gtceu:lead_plate'
            },
            {
                "item": 'gtceu:diamond_plate'
            }
        ],
        "inputFluid": "{Amount:125,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": 'kubejs:machine_core_1'
        },
        "processingTime": 200
    })
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'gtceu:copper_single_wire'
            }
        ],
        "inputFluid": "{Amount:144,FluidName:\"gtceu:rubber\"}",
        "output": {
            "count": 1,
            "item": 'gtceu:copper_single_cable'
        },
        "processingTime": 140
    })
    e.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": 'forge:plates/rubber'
        },
        "result": {
            "amount": 144,
            "fluid": "gtceu:rubber"
        },
        "temperature": 300,
        "time": 40
    })
    e.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": 'forge:ingots/rubber'
        },
        "result": {
            "amount": 144,
            "fluid": "gtceu:rubber"
        },
        "temperature": 300,
        "time": 40
    })
    e.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": 'gtceu:rubber_ring'
        },
        "result": {
            "amount": 36,
            "fluid": "gtceu:rubber"
        },
        "temperature": 300,
        "time": 40
    })
    e.recipes.minecraft.smithing_transform('create:encased_fan', 'gtceu:wrought_iron_rotor', 'create:andesite_casing', 'create:shaft')
    e.recipes.minecraft.smithing_transform('create:mechanical_press', 'gtceu:wrought_iron_block', 'create:andesite_casing', 'create:shaft')

    //格雷卷板机锭变板转机霸冲压
    e.forEachRecipe({ type: "gtceu:bender" }, r => {

        let j = JSON.parse(String(r.json))

        let circuit1 = false
        let ingotTag = null

        j.inputs.item.forEach(i => {

            let c = i.content

            if (c.type == "gtceu:circuit" && c.configuration == 1) {
                circuit1 = true
            }

            if (c.type == "gtceu:sized") {
                if (c.ingredient && c.ingredient.tag) {

                    let tag = c.ingredient.tag

                    if (tag.startsWith("forge:ingots/")) {
                        ingotTag = tag
                    }

                }
            }

        })

        if (!circuit1 || !ingotTag) return

        let out = j.outputs.item[0].content.ingredient.item

        e.recipes.create.pressing(
            out,
            "#" + ingotTag
        )

    })

    //格雷搅拌机转机霸搅拌机（ULV）
    e.forEachRecipe({ type: "gtceu:mixer" }, r => {

        try {

            let j = JSON.parse(String(r.json))

            let eu = 0
            if (j.tickInputs && j.tickInputs.eu && j.tickInputs.eu.length > 0)
                eu = j.tickInputs.eu[0].content

            if (eu > 8) return

            let inputs = []
            let outputs = []

            let divideFluid = false

            if (j.inputs && j.inputs.fluid)
                j.inputs.fluid.forEach(f => {
                    if (f.content && f.content.amount > 1000)
                        divideFluid = true
                })

            if (j.outputs && j.outputs.fluid)
                j.outputs.fluid.forEach(f => {
                    if (f.content && f.content.amount > 1000)
                        divideFluid = true
                })

            if (j.inputs && j.inputs.item)
                j.inputs.item.forEach(i => {

                    let c = i.content

                    if (c.type == "gtceu:circuit") return

                    if (c.ingredient && c.ingredient.item)
                        inputs.push(c.ingredient.item)

                    if (c.ingredient && c.ingredient.tag)
                        inputs.push("#" + c.ingredient.tag)

                })

            if (j.inputs && j.inputs.fluid)
                j.inputs.fluid.forEach(f => {

                    let amount = f.content.amount

                    if (divideFluid)
                        amount = amount / 5

                    let fluid = ""

                    let v = f.content.value ? f.content.value[0] : null

                    if (v && v.tag) {

                        if (v.tag == "forge:water")
                            fluid = "minecraft:water"

                        else if (v.tag == "forge:lava")
                            fluid = "minecraft:lava"

                        else
                            fluid = v.tag.replace("forge:", "gtceu:")

                    }

                    else if (v && v.fluid)
                        fluid = v.fluid

                    if (fluid)
                        inputs.push(Fluid.of(fluid, amount))

                })

            if (j.outputs && j.outputs.item)
                j.outputs.item.forEach(o => {

                    let c = o.content
                    let item = c.ingredient.item
                    let count = c.count ? c.count : 1

                    if (count > 1)
                        outputs.push(Item.of(item, count))
                    else
                        outputs.push(item)

                })

            if (j.outputs && j.outputs.fluid)
                j.outputs.fluid.forEach(f => {

                    let amount = f.content.amount

                    if (divideFluid)
                        amount = amount / 5

                    let v = f.content.value ? f.content.value[0] : null

                    if (v && v.fluid)
                        outputs.push(Fluid.of(v.fluid, amount))

                })

            let duration = j.duration * 2

            e.recipes.create.mixing(outputs, inputs, duration)

        }

        catch (err) { }

    })

    //ULV研磨机换石磨
    e.forEachRecipe({ type: "gtceu:macerator" }, r => {

        try {

            let j = JSON.parse(String(r.json))

            let eu = 0
            if (j.tickInputs && j.tickInputs.eu && j.tickInputs.eu.length > 0)
                eu = j.tickInputs.eu[0].content

            if (eu > 8) return

            let input = null
            let output = null

            if (j.inputs && j.inputs.item && j.inputs.item.length > 0) {
                let c = j.inputs.item[0].content
                input = c.ingredient.item
            }

            if (j.outputs && j.outputs.item && j.outputs.item.length > 0) {
                let c = j.outputs.item[0].content
                let item = c.ingredient.item
                let count = c.count ? c.count : 1
                output = count > 1 ? Item.of(item, count) : item
            }

            if (!input || !output) return

            let duration = j.duration

            e.recipes.create.milling(output, input, duration)

        }

        catch (err) { }

    })

    //ULV轧机做线材轧机0和1号电路
    e.forEachRecipe({ type: "gtceu:wiremill" }, r => {

        let j = JSON.parse(String(r.json))

        let eu = j.tickInputs.eu[0].content
        if (eu > 8) return

        let circuit = null
        let input = null

        j.inputs.item.forEach(i => {

            let c = i.content

            if (c.type == "gtceu:circuit") {
                circuit = c.configuration
                return
            }

            if (c.type == "gtceu:sized") {

                if (c.ingredient.tag) {

                    input = {
                        tag: c.ingredient.tag
                    }

                } else if (c.ingredient.item) {

                    input = {
                        item: c.ingredient.item
                    }

                }

            }

        })

        if (circuit != null && circuit != 1) return

        if (!input) return

        let out = j.outputs.item[0].content.ingredient.item
        let count = j.outputs.item[0].content.count

        e.custom({
            type: "createaddition:rolling",
            input: input,
            result: {
                item: out,
                count: count
            }
        })

    })

    //ULV动力锯做车床
    e.forEachRecipe({ type: "gtceu:lathe" }, r => {

        let j = JSON.parse(String(r.json))

        let eu = j.tickInputs.eu[0].content

        let c = j.inputs.item[0].content

        let input = null
        let ingotTag = false

        if (c.ingredient.item) {

            input = c.ingredient.item

        } else if (c.ingredient.tag) {

            input = "#" + c.ingredient.tag

            if (c.ingredient.tag.startsWith("forge:ingots/")) {
                ingotTag = true
            }

        }

        if (!input) return

        let duration = 0

        if (eu <= 8) {

            duration = j.duration * 4

        } else if (ingotTag && eu <= 32) {

            duration = j.duration * 6

        } else {

            return

        }

        let outputs = []

        j.outputs.item.forEach(o => {

            let count = o.content.count
            let item = o.content.ingredient.item

            if (count == 1) {

                outputs.push(item)

            } else {

                outputs.push(count + "x " + item)

            }

        })

        e.recipes.create.cutting(
            outputs,
            input,
            duration
        )

    })

    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'minecraft:dropper'
            },
            {
                "item": 'minecraft:dropper'
            }
        ],
        "inputFluid": "{Amount:3000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 16,
            "item": 'pipez:item_pipe'
        },
        "processingTime": 320
    })
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'minecraft:bucket'
            },
            {
                "item": 'minecraft:bucket'
            }
        ],
        "inputFluid": "{Amount:3000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 16,
            "item": 'pipez:fluid_pipe'
        },
        "processingTime": 320
    })
    e.recipes.kubejs.shapeless('2x pipez:universal_pipe', ['pipez:item_pipe', 'pipez:fluid_pipe', 'pipez:energy_pipe', 'pipez:gas_pipe'])
    e.shaped('minecraft:dropper', [
        'AAA',
        'A A',
        'ABA'
    ], {
        A: 'minecraft:cobblestone',
        B: 'gtceu:cinnabar_gem'
    })
    e.recipes.botania.pure_daisy('minecraft:lava', 'gtceu:creosote')
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'tconstruct:obsidian_pane'
        },
        "cast_consumed": true,
        "cooling_time": 100,
        "fluid": {
            "amount": 576,
            "fluid": "gtceu:steel"
        },
        "result": 'oritong:steel_upgrade_smithing_template'
    })
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'oritong:steel_upgrade_smithing_template'
            },
            {
                "item": 'tconstruct:obsidian_pane'
            }
        ],
        "inputFluid": "{Amount:144,FluidName:\"gtceu:steel\"}",
        "output": {
            "count": 2,
            "item": 'oritong:steel_upgrade_smithing_template'
        },
        "processingTime": 80
    })
    e.recipes.mekanism.metallurgic_infusing('oritong:diamond_upgrade_smithing_template', 'gtceu:dense_steel_plate', '540x mekanism:diamond')
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'oritong:diamond_upgrade_smithing_template'
            },
            {
                "item": 'gtceu:steel_plate'
            }
        ],
        "inputFluid": "{Amount:100,FluidName:\"tconstruct:molten_diamond\"}",
        "output": {
            "count": 2,
            "item": 'oritong:diamond_upgrade_smithing_template'
        },
        "processingTime": 100
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
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": 'tconstruct:casts/single_use/gem'
        },
        "cast_consumed": true,
        "cooling_time": 180,
        "fluid": {
            "amount": 100,
            "fluid": "tconstruct:molten_glass"
        },
        "result": 'gtceu:glass_tube'
    })
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": 'tconstruct:casts/multi_use/gem'
        },
        "cast_consumed": false,
        "cooling_time": 180,
        "fluid": {
            "amount": 100,
            "fluid": "tconstruct:molten_glass"
        },
        "result": 'gtceu:glass_tube'
    })
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'gtceu:steel_bolt'
            },
            {
                "item": 'gtceu:steel_bolt'
            },
            {
                "item": 'gtceu:copper_single_wire'
            },
            {
                "item": 'gtceu:copper_single_wire'
            },
            {
                "item": 'gtceu:copper_single_wire'
            },
            {
                "item": 'gtceu:glass_tube'
            }
        ],
        "inputFluid": "{Amount:9,FluidName:\"gtceu:red_alloy\"}",
        "output": {
            "count": 1,
            "item": 'kubejs:raw_vacuum_tube'
        },
        "processingTime": 140
    })
    e.recipes.create.compacting(['tconstruct:plate_cast', 'gtceu:stone_plate'], ['2x gtceu:stone_dust', 'tconstruct:plate_cast'])
    e.shaped('tgears:whisk_cast', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: '#gtceu:tools/crafting_hammers',
        B: 'gtceu:gold_plate',
        C: '#gtceu:tools/crafting_files'
    }).damageIngredient('#gtceu:tools/crafting_hammers').damageIngredient('#gtceu:tools/crafting_files', 4)
    e.shaped('tgears:hand_cast', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: '#gtceu:tools/crafting_hammers',
        B: 'gtceu:gold_plate',
        C: '#gtceu:tools/crafting_files'
    }).damageIngredient('#gtceu:tools/crafting_hammers').damageIngredient('#gtceu:tools/crafting_files', 4)
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'tgears:whisk_cast_with_part'
        },
        "cast_consumed": true,
        "cooling_time": 250,
        "fluid": {
            "amount": 1296,
            "fluid": "gtceu:iron"
        },
        "result": 'tgears:whisk_cast_with_whisk'
    })
    e.recipes.create.filling('tgears:whisk_cast_with_whisk', [Fluid.of('gtceu:iron', 1296), 'tgears:whisk_cast_with_part'])
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'tgears:hand_cast_with_part'
        },
        "cast_consumed": true,
        "cooling_time": 250,
        "fluid": {
            "amount": 1296,
            "fluid": "gtceu:brass"
        },
        "result": 'tgears:hand_cast_with_brass_hand'
    })
    e.recipes.create.filling('tgears:hand_cast_with_brass_hand', [Fluid.of('gtceu:brass', 1296), 'tgears:hand_cast_with_part'])
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'create:brass_hand'
        },
        "cast_consumed": false,
        "cooling_time": 100,
        "fluid": {
            "amount": 144,
            "fluid": "gtceu:gold"
        },
        "result": 'tgears:hand_cast_with_brass_hand'
    })
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'create:whisk'
        },
        "cast_consumed": false,
        "cooling_time": 100,
        "fluid": {
            "amount": 144,
            "fluid": "gtceu:gold"
        },
        "result": 'tgears:whisk_cast_with_whisk'
    })
    e.recipes.minecraft.smithing_transform('create:millstone', 'gtceu:stone_gear', 'create:andesite_casing', 'minecraft:smooth_stone')
    e.recipes.minecraft.smithing_transform('create:mechanical_mixer', 'create:whisk', 'create:andesite_casing', 'create:cogwheel')
    e.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": 'gtceu:red_alloy_dust'
        },
        "result": {
            "amount": 144,
            "fluid": "gtceu:red_alloy"
        },
        "temperature": 325,
        "time": 20
    })
    e.recipes.create.milling(Item.of('minecraft:redstone').withChance(0.2), 'gtceu:cinnabar_dust')
    e.replaceInput({}, 'create:electron_tube', 'gtceu:vacuum_tube')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_wrench', 'gtceu:wrought_iron_plate', 'gtceu:stone_rod', 'gtceu:wrought_iron_plate')
    e.recipes.minecraft.smithing_transform('gtceu:wrought_iron_axe', 'gtceu:wrought_iron_plate', 'gtceu:wrought_iron_ingot', 'gtceu:stone_rod')

    //锻铁工具变钢工具
    let tools_upgrade = [
        'axe',
        'pickaxe',
        'hammer',
        'saw',
        'wrench',
        'file',
        'knife',
        'wire_cutter',
        'screwdriver',
        'shovel'
    ]
    tools_upgrade.forEach(a => {
        e.recipes.minecraft.smithing_transform(`gtceu:steel_${a}`, 'oritong:steel_upgrade_smithing_template', `gtceu:wrought_iron_${a}`, 'gtceu:double_steel_plate')
        e.recipes.minecraft.smithing_transform(`gtceu:diamond_${a}`, 'oritong:diamond_upgrade_smithing_template', `gtceu:steel_${a}`, 'gtceu:flawless_diamond_gem')
    })
    e.recipes.minecraft.smithing_transform(`gtceu:steel_mortar`, 'oritong:steel_upgrade_smithing_template', `gtceu:wrought_iron_mortar`, 'gtceu:double_steel_plate')
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
    }).damageIngredient('#gtceu:tools/crafting_hammers', 2)
    e.shaped('mekanism:dust_diamond', [
        '   ',
        ' A ',
        ' B '
    ], {
        A: 'minecraft:diamond',
        B: '#gtceu:tools/crafting_mortars'
    }).damageIngredient('#gtceu:tools/crafting_mortars')
    e.shaped('gtceu:brick_wooden_form', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: '#gtceu:tools/crafting_knives',
        B: 'kubejs:wood_ingot'
    }).damageIngredient('#gtceu:tools/crafting_knives', 2)
    e.recipes.kubejs.shapeless('create:large_cogwheel', ['create:cogwheel', 'gtceu:treated_wood_planks'])
    e.recipes.kubejs.shapeless('create:cogwheel', ['create:shaft', 'gtceu:treated_wood_planks'])
    e.recipes.kubejs.shapeless('create:large_cogwheel', ['create:shaft', 'gtceu:treated_wood_planks', 'gtceu:treated_wood_planks'])
    e.recipes.create.filling('kubejs:watered_raw_vacuum_tube', ['kubejs:raw_vacuum_tube', Fluid.of('minecraft:water', 500)])
    e.recipes.create.emptying(['gtceu:vacuum_tube', Fluid.of('minecraft:water', 500)], 'kubejs:watered_raw_vacuum_tube'),
    e.recipes.minecraft.smithing_transform('create:item_drain', 'minecraft:copper_ingot', 'create:copper_casing', 'minecraft:iron_bars')
    e.recipes.minecraft.smithing_transform('create:spout', '#forge:glass', 'create:copper_casing', 'gtceu:rubber_plate')
    e.recipes.minecraft.smithing_transform('create:spout', '#forge:glass', 'create:copper_casing', 'gtceu:styrene_butadiene_rubber_plate')
    e.recipes.minecraft.smithing_transform('create:spout', '#forge:glass', 'create:copper_casing', 'gtceu:silicone_rubber_plate')
    e.shaped('tiab:time_in_a_bottle', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'kubejs:fear_in_a_bottle',
        B: 'kubejs:fighting_spirit_in_a_bottle',
        C: 'kubejs:fog_in_a_bottle',
        D: 'kubejs:vaporeon_in_a_bottle',
        E: 'botania:mana_bottle',
        F: 'kubejs:glaceon_in_a_bottle',
        G: 'kubejs:sleppy_in_a_bottle',
        H: 'kubejs:sand_storm_in_a_bottle',
        I: 'kubejs:happiness_in_a_bottle'
    })
    e.recipes.minecraft.smithing_transform('createaddition:rolling_mill', 'create:shaft', 'create:andesite_casing', 'create:shaft')
})