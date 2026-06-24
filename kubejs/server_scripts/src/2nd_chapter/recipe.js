ServerEvents.recipes(e => {
    //e.recipes.gtceu.combustion_generator().inputFluids(Fluid.of('gtceu:creosote', 2)).EUt(32).duration(0.35*20)
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
    e.recipes.gtceu.centrifuge().itemInputs('11x gtceu:lazurite_dust').itemOutputs('2x gtceu:cobalt_dust', 'gtceu:gallium_dust', '3x gtceu:sapphire_dust').duration(20 * 10).EUt(8 * 1.5)
    e.recipes.ars_nouveau.imbuement('minecraft:smooth_stone', 'botania:livingrock', 500, [])
    e.recipes.gtceu.circuit_assembler().itemInputs('2x mekanism:basic_control_circuit', 'mekanism:enriched_redstone', 'gtceu:manasteel_plate', 'mekanism:dust_diamond').itemOutputs('mekanism:advanced_control_circuit').duration(8 * 20).EUt(8 * 1.5).inputFluids(Fluid.of('industrialforegoing:latex', 80))
    e.recipes.gtceu.chemical_bath().itemInputs('gtceu:diamond_plate').inputFluids(Fluid.of('minecraft:lava', 75)).itemOutputs('gtceu:caminite_brick_plate').duration(1.5 * 20).EUt(6)
    e.recipes.botania.pure_daisy('minecraft:emerald_block', 'botania:mana_diamond_block')
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
    e.recipes.create.compacting([Fluid.of('gtceu:oil_medium', 800), Fluid.of('gtceu:oil_light', 400), Item.of('sand').withChance('0.1')], '#forge:dusts/oilsands').heated()
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

    e.custom({
        "type": "tconstruct:casting_basin",
        "cooling_time": 120,
        "fluid": {
            "amount": 2250,
            "fluid": "tconstruct:molten_ender"
        },
        "result": 'gtceu:ender_pearl_block'
    })

    //机器外壳
    let machine_hull = [
        ['lv', '1', 'gtceu:wrought_iron_plate', 'gtceu:steel_plate', 'gtceu:tin_single_cable', 'industrialforegoing:latex'],
        ['mv', '2', 'gtceu:invar_plate', 'gtceu:aluminium_plate', 'gtceu:copper_single_cable', 'gtceu:polyethylene']
    ]
    machine_hull.forEach(([a, b, c, d, f, g]) => {
        e.recipes.gtceu.assembler().itemInputs(`kubejs:machine_core_${b}`, `4x ${d}`, `2x ${c}`, `2x ${f}`).itemOutputs(`gtceu:${a}_machine_hull`).EUt(4 ** parseInt(b)).duration(20 * 4).inputFluids(Fluid.of(g, 288))
        e.remove({ output: `gtceu:${a}_machine_hull` })
    })

    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('industrialforegoing:latex', 200), Fluid.of('water', 500)).itemInputs('minecraft:clay_ball').outputFluids(Fluid.of('gtceu:rubber', 288)).EUt(4).duration(6 * 20)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('industrialforegoing:latex', 350), Fluid.of('water', 1000)).itemInputs('3x minecraft:clay_ball', 'gtceu:sulfur_dust').outputFluids(Fluid.of('gtceu:rubber', 1728)).EUt(10).duration(8 * 20)
    e.recipes.gtceu.large_chemical_reactor().inputFluids(Fluid.of('industrialforegoing:latex', 350), Fluid.of('water', 1000)).itemInputs('3x minecraft:clay_ball', 'gtceu:sulfur_dust').outputFluids(Fluid.of('gtceu:rubber', 1728)).EUt(10).duration(8 * 20)

    //MV阶段
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer', '#forge:lenses/red').itemOutputs('gtceu:ilc_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer', '#forge:lenses/green').itemOutputs('gtceu:ram_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.laser_engraver().itemInputs('gtceu:silicon_wafer', '#forge:lenses/blue').itemOutputs('gtceu:ulpic_wafer').duration(45 * 20).EUt(120).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.compressor().itemInputs('64x minecraft:diamond_block').itemOutputs('kubejs:compress_diamond_block').EUt(32 * 4).duration(9 * 20)
    e.recipes.gtceu.chemical_bath().itemInputs('gtceu:crushed_diamond_ore').inputFluids(Fluid.of('oritong:glimmer', 200)).outputFluids(Fluid.of('gtceu:diamond_ore_leachate', 250)).chancedOutput('mekanism:sawdust', 4000, 0).EUt(32 * 1.5).duration(20 * 5)
    e.recipes.gtceu.centrifuge().inputFluids(Fluid.of('gtceu:diamond_ore_leachate', 800)).EUt(12).duration(20 * 10).chancedOutput('gtceu:manganese_dust', 2000, 1000).chancedOutput('gtceu:phosphorus_dust', 1000, 1500).chancedOutput('gtceu:platinum_raw_dust', 200, 150).outputFluids(Fluid.of('water', 544))
    e.recipes.gtceu.electric_blast_furnace().itemInputs('replication:raw_replica').inputFluids(Fluid.of('oritong:glimmer', 800)).itemOutputs('replication:replica_ingot').EUt(16).duration(18.8 * 20).blastFurnaceTemp(1465)
})
