ServerEvents.recipes(e => {
    e.recipes.gtceu.assembler().EUt(8).duration(4.5 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:dropper').itemOutputs('16x pipez:item_pipe').inputFluids(Fluid.of('industrialforegoing:latex', 2500))
    e.recipes.gtceu.assembler().EUt(8).duration(4.5 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:bucket').itemOutputs('16x pipez:fluid_pipe').inputFluids(Fluid.of('industrialforegoing:latex', 2500))
    e.recipes.gtceu.assembler().EUt(24).duration(3.75 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:dropper').itemOutputs('16x pipez:item_pipe').inputFluids(Fluid.of('gtceu:polyethylene', 800))
    e.recipes.gtceu.assembler().EUt(24).duration(3.75 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:bucket').itemOutputs('16x pipez:fluid_pipe').inputFluids(Fluid.of('gtceu:polyethylene', 800))
    e.recipes.gtceu.assembler().EUt(20).duration(3 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:dropper').itemOutputs('16x pipez:item_pipe').inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 800))
    e.recipes.gtceu.assembler().EUt(20).duration(3 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:bucket').itemOutputs('16x pipez:fluid_pipe').inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 800))
    e.recipes.gtceu.assembler().EUt(106).duration(2.5 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:dropper').itemOutputs('16x pipez:item_pipe').inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 600))
    e.recipes.gtceu.assembler().EUt(106).duration(2.5 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:bucket').itemOutputs('16x pipez:fluid_pipe').inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 600))
    e.recipes.gtceu.assembler().EUt(475).duration(2 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:dropper').itemOutputs('16x pipez:item_pipe').inputFluids(Fluid.of('gtceu:epoxy', 400))
    e.recipes.gtceu.assembler().EUt(475).duration(2 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:bucket').itemOutputs('16x pipez:fluid_pipe').inputFluids(Fluid.of('gtceu:epoxy', 400))
    e.recipes.gtceu.assembler().EUt(1070).duration(1 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:dropper').itemOutputs('16x pipez:item_pipe').inputFluids(Fluid.of('gtceu:polybenzimidazole', 200))
    e.recipes.gtceu.assembler().EUt(1070).duration(1 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:bucket').itemOutputs('16x pipez:fluid_pipe').inputFluids(Fluid.of('gtceu:polybenzimidazole', 200))
    //e.recipes.gtceu.combustion_generator().inputFluids(Fluid.of('gtceu:creosote', 2)).EUt(32).duration(0.35*20)
    e.shaped('gtceu:lv_enrichment_chamber', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'gtceu:steel_plate',
        B: 'tconstruct:clear_glass_pane',
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
        B: '#gtceu:circuits/ulv',
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
    //元素富集器
    let recipe_enrichment_chamber = [
        ['mekanism:enriched_redstone', 'minecraft:redstone']
    ]
    recipe_enrichment_chamber.forEach(([o, i]) => {
        e.recipes.gtceu.enrichment_chamber().itemInputs(i).itemOutputs(o).inputFluids(Fluid.of('oritong:glimmer', 160)).EUt(8).duration(20 * 8)
    })
    //富集提取器
    let recipe_infused_extracter = [
        ['gtceu:enriched_redstone', 'mekanism:enriched_redstone']
    ]
    recipe_infused_extracter.forEach(([o, i]) => {
        e.recipes.gtceu.infused_extracter().itemInputs(i).outputFluids(Fluid.of(o, 80)).EUt(8).duration(20 * 8)
    })

    e.recipes.gtceu.enrichment_infuser().itemInputs('tconstruct:obsidian_pane').itemOutputs('mekanism:basic_control_circuit').inputFluids(Fluid.of('gtceu:enriched_redstone', 120)).EUt(16).duration(20 * 8)
    e.recipes.gtceu.enrichment_infuser().itemInputs('copper_ingot').itemOutputs('mekanism:alloy_infused').inputFluids(Fluid.of('gtceu:enriched_redstone', 30)).EUt(16).duration(20 * 8)
    e.replaceInput({ output: 'gtceu:resistor' }, 'gtceu:charcoal_dust', 'mekanism:dust_diamond')
    e.replaceInput({ output: 'gtceu:resistor' }, 'gtceu:coal_dust', 'mekanism:dust_diamond')
    e.replaceInput({ output: 'gtceu:resistor' }, 'gtceu:carbon_dust', 'mekanism:dust_diamond')
    e.recipes.gtceu.implosion_compressor().itemInputs('avaritia:diamond_lattice', 'ifeu:empty_nether_star', '4x gtceu:nether_star_dust').itemOutputs('3x minecraft:nether_star').chancedOutput('gtceu:dark_ash_dust', 2500, 0).duration(20 * 4).EUt(2 * 4 * 4 * 4 * 4 * 0.75)
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'gtceu:copper_foil'
            },
            {
                "item": 'gtceu:copper_foil'
            },
            {
                "item": 'gtceu:copper_foil'
            },
            {
                "item": 'gtceu:copper_foil'
            },
            {
                "item": 'gtceu:copper_foil'
            },
            {
                "item": 'gtceu:copper_foil'
            },
            {
                "item": 'gtceu:treated_wood_plate'
            }
        ],
        "inputFluid": "{Amount:125,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": 'gtceu:resin_printed_circuit_board'
        },
        "processingTime": 200
    })
    e.recipes.create.compacting(['tconstruct:plate_cast', 'gtceu:treated_wood_plate'], ['gtceu:treated_wood_dust', 'tconstruct:plate_cast'], 200)
    e.recipes.gtceu.extractor().itemInputs('kubejs:wood_block').itemOutputs('mekanism:sawdust').outputFluids(Fluid.of('industrialforegoing:latex', 1000)).duration(20 * 30).EUt(3)
    e.shaped('ars_nouveau:imbuement_chamber', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'gtceu:electrum_ingot',
        B: 'kubejs:wood_ingot',
        C: 'gtceu:cobalt_bucket'
    }).replaceIngredient({ item: 'gtceu:cobalt_bucket' }, Item.of('minecraft:bucket'))
    e.recipes.gtceu.centrifuge().itemInputs('11x gtceu:lazurite_dust').itemOutputs('2x gtceu:cobalt_dust', 'gtceu:gallium_dust', '3x gtceu:sapphire_dust').duration(20 * 10).EUt(8 * 1.5)
    e.recipes.gtceu.assembler().itemInputs('mekanism:sawdust').circuit(1).inputFluids(Fluid.of('industrialforegoing:latex', 100)).itemOutputs('gtceu:phenolic_circuit_board').EUt(30).duration(20 * 10)
    e.recipes.ars_nouveau.imbuement('minecraft:smooth_stone', 'botania:livingrock', 500, [])
    e.recipes.gtceu.circuit_assembler().itemInputs('2x mekanism:basic_control_circuit', 'mekanism:enriched_redstone', 'gtceu:manasteel_plate', 'mekanism:dust_diamond').itemOutputs('mekanism:advanced_control_circuit').duration(8 * 20).EUt(8 * 1.5).inputFluids(Fluid.of('industrialforegoing:latex', 80))
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:caminite_brick_plate', '2x gtceu:diamond_plate', 'gtceu:lead_plate').inputFluids(Fluid.of('industrialforegoing:latex', 125)).duration(6 * 20).EUt(8).circuit(13).itemOutputs('kubejs:machine_core_1')
    e.recipes.gtceu.chemical_bath().itemInputs('gtceu:diamond_plate').inputFluids(Fluid.of('minecraft:lava', 75)).itemOutputs('gtceu:caminite_brick_plate').duration(1.5 * 20).EUt(6)
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
    e.recipes.botania.pure_daisy('minecraft:emerald_block', 'botania:mana_diamond_block')
    e.recipes.gtceu.assembler().itemInputs('16x gtnn:supracausal_mainframe', '8x gtceu:shadow_steel_plate', '8x gtceu:refined_radiance_plate', 'create:andesite_casing', 'gtceu:neutronium_frame', '2x gtceu:dense_naquadah_alloy_plate', 'gtceu:polybenzimidazole_rod', 'gtceu:tritanium_round').inputFluids(Fluid.of('gtceu:high_octane_gasoline', 750)).itemOutputs('kubejs:physics_assembler').EUt(8 * 4 * 4 * 4 * 4 * 4 * 4 * 1.75).duration(150 * 20)
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
    e.custom({
        "type": "embers:boring",
        "dimensions": [
            "minecraft:overworld"
        ],
        "max_height": -57,
        "output": {
            "item": 'gtceu:oilsands_dust'
        },
        "required_block": {
            "amount": 6,
            "block_tag": "oritong:grizzly_chute"
        },
        "weight": 100
    })
    e.custom({
        "type": "embers:boring",
        "dimensions": [
            "minecraft:overworld"
        ],
        "max_height": 128,
        "output": {
            "item": 'gtceu:raw_diamond_block'
        },
        "required_block": {
            "amount": 9,
            "block_tag": 'oritong:compress/diamond'
        },
        "weight": 100
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
    e.recipes.create.compacting([Fluid.of('gtceu:oil_medium', 800), Fluid.of('gtceu:oil_light', 400), Item.of('sand').withChance('0.1')], '#forge:dusts/oilsands').heated()
    e.replaceInput({ output: 'embers:alchemy_tablet' }, 'gtceu:copper_plate', 'botania:manasteel_ingot')
    e.shaped('kubejs:grizzly_chute', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:aluminium_screw',
        B: 'minecraft:iron_bars',
        C: 'gtceu:solid_machine_casing'
    })
    e.replaceInput({ output: 'botania:rune_mana' }, 'botania:mana_pearl', 'botania:mana_diamond')
    e.recipes.botania.mana_infusion('botania:mana_powder', 'mekanism:dust_diamond', 450)
    e.recipes.botania.runic_altar('2x botania:rune_water', ['botania:mana_powder', 'embers:dawnstone_ingot', 'minecraft:amethyst_shard', 'gtceu:clay_dust', 'minecraft:sand'], 5200)
    e.recipes.botania.runic_altar('2x botania:rune_fire', ['gtceu:caminite_brick_plate', 'kubejs:originium_shard', 'embers:ember_grit', 'botania:manasteel_ingot', 'botania:mana_powder'], 5200)
    e.recipes.botania.runic_altar('botania:rune_spring', ['kubejs:the_source_of_the_earth', 'kubejs:the_source_of_the_earth', 'kubejs:the_source_of_the_earth', 'ars_nouveau:earth_essence', 'botania:rune_water', 'botania:rune_fire'], 10400)
    e.custom({
        "type": "embers:alchemy",
        "aspects": [
            {
                "tag": "embers:aspectus/iron"
            },
            {
                "tag": "embers:aspectus/silver"
            }
        ],
        "inputs": [
            {
                "item": 'gtceu:dense_obsidian_plate'
            },
            {
                "item": 'botania:rune_mana'
            },
            {
                "item": 'gtceu:dense_obsidian_plate'
            },
            {
                "item": 'botania:rune_greed'
            }
        ],
        "output": {
            "count": 1,
            "item": 'botania:ender_hand'
        },
        "tablet": {
            "item": 'kubejs:the_source_of_the_earth'
        }
    })
    e.recipes.gtceu.bender().EUt(24).duration(20 * 45).itemInputs('9x tconstruct:obsidian_pane').circuit(9).itemOutputs('gtceu:dense_obsidian_plate')
    e.recipes.gtceu.mixer('oritong:ana_2nd_ender_dust').EUt(28).duration(6 * 20).itemInputs('6x gtceu:lazurite_dust', '4x gtceu:silver_dust', '2x mekanism:dust_diamond', 'gtceu:manasteel_dust').notConsumable('botania:ender_hand').itemOutputs('36x gtceu:ender_pearl_dust').circuit(5).inputFluids(Fluid.of('gtceu:nitrogen', 2000))
    e.replaceInput({ output: 'botania:manasteel_ingot' }, 'minecraft:iron_ingot', 'mekanism:ingot_steel')
    e.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": 'gtceu:ender_pearl_dust'
        },
        "result": {
            "amount": 250,
            "fluid": "tconstruct:molten_ender"
        },
        "temperature": 200,
        "time": 60
    })
    e.custom({
        "type": "tconstruct:casting_basin",
        "cooling_time": 120,
        "fluid": {
            "amount": 2250,
            "fluid": "tconstruct:molten_ender"
        },
        "result": 'gtceu:ender_pearl_block'
    })
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:aluminium_plate', '2x gtceu:invar_plate', 'gtceu:caminite_brick_plate').circuit(13).inputFluids(Fluid.of('gtceu:polyethylene', 144)).itemOutputs('kubejs:machine_core_2').EUt(32).duration(20 * 6)

    //机器外壳
    let machine_hull = [
        ['lv', '1', 'gtceu:wrought_iron_plate', 'gtceu:steel_plate', 'gtceu:tin_single_cable', 'industrialforegoing:latex'],
        ['mv', '2', 'gtceu:invar_plate', 'gtceu:aluminium_plate', 'gtceu:copper_single_cable', 'gtceu:polyethylene']
    ]
    machine_hull.forEach(([a, b, c, d, f, g]) => {
        e.recipes.gtceu.assembler().itemInputs(`kubejs:machine_core_${b}`, `4x ${d}`, `2x ${c}`, `2x ${f}`).itemOutputs(`gtceu:${a}_machine_hull`).EUt(4 ** parseInt(b)).duration(20 * 4).inputFluids(Fluid.of(g, 288))
        e.remove({ output: `gtceu:${a}_machine_hull` })
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
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('industrialforegoing:latex', 200), Fluid.of('water', 500)).itemInputs('minecraft:clay_ball').outputFluids(Fluid.of('gtceu:rubber', 288)).EUt(4).duration(6 * 20)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('industrialforegoing:latex', 350), Fluid.of('water', 1000)).itemInputs('3x minecraft:clay_ball', 'gtceu:sulfur_dust').outputFluids(Fluid.of('gtceu:rubber', 1728)).EUt(10).duration(8 * 20)
    e.recipes.gtceu.large_chemical_reactor().inputFluids(Fluid.of('industrialforegoing:latex', 350), Fluid.of('water', 1000)).itemInputs('3x minecraft:clay_ball', 'gtceu:sulfur_dust').outputFluids(Fluid.of('gtceu:rubber', 1728)).EUt(10).duration(8 * 20)

    //MV阶段
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
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer', '#forge:lenses/red').itemOutputs('gtceu:ilc_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer', '#forge:lenses/green').itemOutputs('gtceu:ram_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer', '#forge:lenses/blue').itemOutputs('gtceu:ulpic_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.compressor().itemInputs('64x minecraft:diamond_block').itemOutputs('kubejs:compress_diamond_block').EUt(32 * 4).duration(9 * 20)
    e.recipes.gtceu.chemical_bath().itemInputs('gtceu:crushed_diamond_ore').inputFluids(Fluid.of('oritong:glimmer', 200)).outputFluids(Fluid.of('gtceu:diamond_ore_leachate', 250)).chancedOutput('mekanism:sawdust', 4000, 0).EUt(32 * 1.5).duration(20 * 5)
    e.recipes.gtceu.centrifuge().inputFluids(Fluid.of('gtceu:diamond_ore_leachate', 800)).EUt(12).duration(20 * 10).chancedOutput('gtceu:manganese_dust', 2000, 1000).chancedOutput('gtceu:phosphorus_dust', 1000, 1500).chancedOutput('gtceu:platinum_raw_dust', 200, 150).outputFluids(Fluid.of('water', 544))
    e.recipes.gtceu.electric_blast_furnace().itemInputs('replication:raw_replica').inputFluids(Fluid.of('gtceu:glowstone', 144)).itemOutputs('replication:replica_ingot').EUt(16).duration(18.8 * 20).blastFurnaceTemp(1465)
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
})

//氧化铝陶瓷
/*
5(蓝)宝石粉+6氢氧化钠粉=8铝酸钠粉+1000水 100t 120EU 化反
4铝酸钠+3000水=7氢氧化铝+1000氢氧化钠溶液 120t 30eu 搅拌
1000氢氧化钠溶液=3氢氧化钠粉 140t 30eu 脱水
14氢氧化铝=5氧化铝+1000蒸汽 100t 2600k 120eu 电高
2氧化铝=0.8+0.6+0.4+0.2氧化铝陶瓷粉 7.5*20t 120eu 筛选
12氧化铝陶瓷粉=氧化铝陶瓷粗坯 800t 120eu 压缩
9氧化铝陶瓷粉+1B胶水=氧化铝陶瓷粗坯 200t 500eu 化浸
氧化铝陶瓷粗坯+500气态氮=氧化铝陶瓷块 600t 2700k 120eu 电高
*/