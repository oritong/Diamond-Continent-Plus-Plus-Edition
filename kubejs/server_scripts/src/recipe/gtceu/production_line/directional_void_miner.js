ServerEvents.recipes(e => {
    const overworld_raw_ores =
        [[["3x gtceu:raw_bentonite",
            "2x gtceu:raw_magnetite",
            "2x gtceu:raw_olivine",
            "1x gtceu:raw_glauconite_sand"], "1"],

        [["9x gtceu:raw_almandine",
            "6x gtceu:raw_pyrope",
            "3x gtceu:raw_sapphire",
            "3x gtceu:raw_green_sapphire"], "2"],

        [["3x gtceu:raw_goethite",
            "12x gtceu:raw_yellow_limonite",
            "12x gtceu:raw_hematite",
            "6x gtceu:raw_malachite"], "3"],

        [["6x gtceu:raw_soapstone",
            "4x gtceu:raw_talc",
            "4x gtceu:raw_glauconite_sand",
            "2x gtceu:raw_pentlandite"], "4"],

        [["3x gtceu:raw_grossular",
            "2x gtceu:raw_spessartine",
            "2x gtceu:raw_pyrolusite",
            "1x gtceu:raw_tantalite"], "5"],

        [["13x gtceu:raw_chalcopyrite",
            "1x gtceu:raw_zeolite",
            "1x gtceu:raw_cassiterite",
            "3x gtceu:raw_realgar",
            "64x gtceu:raw_diamond"], "6"],

        [["12x gtceu:raw_coal",
            "64x gtceu:raw_diamond"], "7"],

        [["2x gtceu:raw_chalcopyrite",
            "8x minecraft:raw_iron",
            "8x gtceu:raw_pyrite",
            "8x minecraft:raw_copper"], "8"],

        [["12x gtceu:raw_magnetite",
            "8x gtceu:raw_vanadium_magnetite",
            "4x minecraft:raw_gold",
            "64x gtceu:raw_diamond"], "9"],

        [["6x gtceu:raw_lazurite",
            "4x gtceu:raw_sodalite",
            "4x gtceu:raw_lapis",
            "2x gtceu:raw_calcite"], "10"],

        [["6x gtceu:raw_galena",
            "4x gtceu:raw_silver",
            "2x gtceu:raw_lead",
            "64x gtceu:raw_diamond"], "11"],

        [["3x gtceu:raw_kyanite",
            "2x gtceu:raw_mica",
            "1x gtceu:raw_pollucite",
            "64x gtceu:raw_diamond"], "12"],

        [["16x gtceu:raw_tin",
            "8x gtceu:raw_cassiterite",
            "64x gtceu:raw_diamond"], "13"],

        [["6x gtceu:raw_red_garnet",
            "4x gtceu:raw_yellow_garnet",
            "4x gtceu:raw_amethyst",
            "2x gtceu:raw_opal"], "14"],

        [["12x gtceu:raw_basaltic_mineral_sand",
            "8x gtceu:raw_granitic_mineral_sand",
            "8x gtceu:raw_fullers_earth",
            "4x gtceu:raw_gypsum"], "15"],

        [["8x gtceu:raw_rock_salt",
            "1x gtceu:raw_salt",
            "3x gtceu:raw_lepidolite",
            "3x gtceu:raw_spodumene"], "16"],

        [["9x gtceu:raw_redstone",
            "6x gtceu:raw_ruby",
            "3x gtceu:raw_cinnabar",
            "64x gtceu:raw_diamond"], "17"],

        [["6x gtceu:raw_apatite",
            "4x gtceu:raw_tricalcium_phosphate",
            "64x gtceu:raw_diamond"], "18"],

        [["12x gtceu:raw_cassiterite_sand",
            "8x gtceu:raw_garnet_sand",
            "8x gtceu:raw_asbestos",
            "4x gtceu:raw_diatomite"], "19"],

        [["12x gtceu:raw_oilsands"], "20"],

        [["6x gtceu:raw_graphite",
            "64x gtceu:raw_diamond",
            "2x gtceu:raw_coal"], "21"],

        [["6x gtceu:raw_garnierite",
            "4x gtceu:raw_nickel",
            "4x gtceu:raw_cobaltite",
            "2x gtceu:raw_pentlandite"], "22"]]

    overworld_raw_ores.forEach((overworld_ore) => {
        let recipe = e.recipes.gtceu.directional_void_miner("overworld_void_ore_" + overworld_ore[1])
            .inputFluids(Fluid.of('gtceu:drilling_fluid', 1000), Fluid.of('gtceu:sapphire_slurry', 20))
            .notConsumable('kubejs:overworld_data')
            .circuit(parseInt(overworld_ore[1]))
            .EUt(GTValues.VA[GTValues.MV])
            .duration(20)
        let output = overworld_ore[0]
        output.forEach(item => {
            recipe.chancedOutput(item, 2000, 0)
        })
    })

    const nether_raw_ores =
        [[["14x gtceu:raw_tetrahedrite",
            "7x minecraft:raw_copper",
            "4x gtceu:raw_stibnite",
            'minecraft:ancient_debris'], "1"],

        [["8x gtceu:raw_bauxite",
            "4x gtceu:raw_ilmenite",
            "4x gtceu:raw_aluminium",
            'minecraft:ancient_debris'], "2"],

        [["9x gtceu:raw_redstone",
            "6x gtceu:raw_ruby",
            "3x gtceu:raw_cinnabar",
            'minecraft:ancient_debris'], "3"],

        [["6x gtceu:raw_saltpeter",
            "4x gtceu:raw_diatomite",
            "4x gtceu:raw_electrotine",
            "2x gtceu:raw_alunite"], "4"],

        [["5x gtceu:raw_beryllium",
            "6x gtceu:raw_emerald",
            'minecraft:ancient_debris',
            '3x embers:ember_crystal'], "5"],

        [["3x gtceu:raw_grossular",
            "2x gtceu:raw_pyrolusite",
            "1x gtceu:raw_tantalite",
            'minecraft:ancient_debris'], "6"],

        [["8x gtceu:raw_wulfenite",
            "5x gtceu:raw_molybdenite",
            "3x gtceu:raw_molybdenum",
            "3x gtceu:raw_powellite"], "7"],

        [["5x gtceu:raw_goethite",
            "3x gtceu:raw_yellow_limonite",
            "3x gtceu:raw_hematite",
            "2x minecraft:raw_gold"], "8"],

        [["6x gtceu:raw_quartzite",
            "4x gtceu:raw_certus_quartz",
            "2x gtceu:raw_barite",
            'minecraft:ancient_debris'], "9"],

        [["11x gtceu:raw_blue_topaz",
            "7x gtceu:raw_topaz",
            "7x gtceu:raw_chalcocite",
            "4x gtceu:raw_bornite"], "10"],

        [["12x gtceu:raw_nether_quartz",
            "4x gtceu:raw_quartzite",
            'minecraft:ancient_debris',
            '3x embers:ember_crystal'], "11"],

        [["15x gtceu:raw_sulfur",
            "10x gtceu:raw_pyrite",
            "5x gtceu:raw_sphalerite",
            'minecraft:ancient_debris'], "12"],

        [["6x gtceu:raw_scheelite",
            "4x gtceu:raw_tungstate",
            "2x gtceu:raw_lithium",
            'minecraft:ancient_debris'], "13"],

        [["9x gtceu:raw_pitchblende",
            "6x gtceu:raw_uraninite",
            'minecraft:ancient_debris',
            '3x embers:ember_crystal'], "14"],

        [['24x gtceu:raw_pyrochlore',
            '8x gtceu:raw_plutonium',
            'minecraft:ancient_debris',
            '3x embers:ember_crystal'], '15']]

    nether_raw_ores.forEach((nether_ore) => {
        let recipe = e.recipes.gtceu.directional_void_miner("nether_void_ore_" + nether_ore[1])
            .inputFluids(Fluid.of('gtceu:drilling_fluid', 1000), Fluid.of('gtceu:green_sapphire_slurry', 20))
            .notConsumable('kubejs:nether_data')
            .circuit(parseInt(nether_ore[1]))
            .EUt(2 * GTValues.VA[GTValues.HV])
            .duration(20)
        let output = nether_ore[0]
        output.forEach(item => {
            recipe.chancedOutput(item, 2000, 0)
        })
    })

    const end_raw_ores =
        [[["9x gtceu:raw_magnetite",
            "6x gtceu:raw_vanadium_magnetite",
            "6x gtceu:raw_chromite",
            "3x minecraft:raw_gold"], "1"],

        [["5x gtceu:raw_bastnasite",
            "2x gtceu:raw_molybdenum",
            "2x gtceu:raw_neodymium",
            "2x gtceu:raw_monazite"], "2"],

        [["3x gtceu:raw_bornite",
            "2x gtceu:raw_cooperite",
            "2x gtceu:raw_platinum",
            "1x gtceu:raw_palladium"], "3"],

        [["9x gtceu:raw_naquadah",
            "3x gtceu:raw_plutonium"], "4"]]

    end_raw_ores.forEach((end_ore) => {
        let recipe = e.recipes.gtceu.directional_void_miner("end_void_ore_" + end_ore[1])
            .inputFluids(Fluid.of('gtceu:drilling_fluid', 1000), Fluid.of('gtceu:ruby_slurry', 20))
            .notConsumable('kubejs:end_data')
            .circuit(parseInt(end_ore[1]))
            .EUt(GTValues.VA[GTValues.EV])
            .duration(20)
        let output = end_ore[0]
        output.forEach(item => {
            recipe.chancedOutput(item, 2000, 0)
        })
    })

    let fluid_void_miner = [
        ['gtceu:oil_light', 1.5, 'green_sapphire'],
        ['gtceu:oil_medium', 1.5, 'green_sapphire'],
        ['gtceu:oil', 1.5, 'green_sapphire'],
        ['gtceu:oil_heavy', 1.5, 'green_sapphire'],
        ['gtceu:natural_gas', 1, 'ruby'],
        ['minecraft:water', 4, 'sapphire'],
        ['minecraft:lava', 2, 'ruby'],
        ['gtceu:salt_water', 1.5, 'sapphire']
    ]
    fluid_void_miner.forEach(([a, b, c], i) => {
        e.recipes.gtceu.directional_void_miner().inputFluids(Fluid.of('gtceu:drilling_fluid', 1000), Fluid.of(`gtceu:${c}_slurry`, 20)).outputFluids(Fluid.of(a, b * 2000)).EUt(120).duration(2 * 20).circuit(32 - i).notConsumable('8x gtceu:hv_electric_pump')
        e.recipes.gtceu.directional_void_miner().inputFluids(Fluid.of('gtceu:drilling_fluid', 1000), Fluid.of(`gtceu:${c}_slurry`, 20)).outputFluids(Fluid.of(a, b * 3000)).EUt(200).duration(1 * 20).circuit(32 - i).notConsumable('8x gtceu:ev_electric_pump')
        e.recipes.gtceu.directional_void_miner().inputFluids(Fluid.of('gtceu:drilling_fluid', 1000), Fluid.of(`gtceu:${c}_slurry`, 20)).outputFluids(Fluid.of(a, b * 6000)).EUt(360).duration(1 * 20).circuit(32 - i).notConsumable('8x gtceu:iv_electric_pump')
    })

})
