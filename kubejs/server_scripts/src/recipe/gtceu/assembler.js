// priority: 3
ServerEvents.recipes(e => {
    //等级 等级 副材料 主材料 线缆 液体
    let machine_hull = [
        ['lv', '1', 'gtceu:wrought_iron_plate', 'gtceu:steel_plate', 'gtceu:tin_single_cable', 'oritong:latex'],
        ['mv', '2', 'gtceu:rose_gold_plate', 'gtceu:aluminium_plate', 'gtceu:copper_single_cable', 'gtceu:polyethylene'],
        ['hv', '2', 'gtceu:sterling_silver_plate', 'gtceu:stainless_steel_plate', 'gtceu:gold_single_cable', 'gtceu:polyethylene'],
        ['ev', '3', 'gtceu:niobium_nitride_plate', 'gtceu:titanium_plate', 'gtceu:aluminium_single_cable', 'gtceu:polytetrafluoroethylene']
    ]
    machine_hull.forEach(([a, b, c, d, f, g], i) => {
        e.recipes.gtceu.assembler().itemInputs(`kubejs:machine_core_${b}`, `4x ${d}`, `2x ${c}`, `2x ${f}`).itemOutputs(`gtceu:${a}_machine_hull`).EUt(4 ** (i + 1)).duration(20 * 4).inputFluids(Fluid.of(g, 288))
        e.remove({ output: `gtceu:${a}_machine_hull` })
    })
    let assembler_convert_blacklist = [
        'gtceu:assembler/resistor_carbon',
        'gtceu:assembler/resistor_coal',
        'gtceu:assembler/resistor_charcoal_annealed',
        'gtceu:assembler/resistor_coal_annealed',
        'gtceu:assembler/resistor_charcoal',
        'gtceu:assembler/resistor_carbon_annealed',
        'gtceu:assembler/dual_import_bus_lv_glue'
    ]
    e.forEachRecipe({ type: "gtceu:assembler" }, r => {
        try {
            if (assembler_convert_blacklist.indexOf(r.getId()) !== -1) return
            let j = JSON.parse(String(r.json))
            let hasGlue = false
            let glueAmount = 0
            if (j.inputs && j.inputs.fluid)
                j.inputs.fluid.forEach(f => {
                    let v = f.content.value ? f.content.value[0] : null
                    if (v && v.tag && v.tag == "forge:glue") {
                        hasGlue = true
                        glueAmount = f.content.amount
                    }
                })
            if (!hasGlue) return
            let eu = 0
            if (j.tickInputs && j.tickInputs.eu && j.tickInputs.eu.length > 0) {
                let rawEu = Number(j.tickInputs.eu[0].content)
                if (Number.isFinite(rawEu)) eu = rawEu
            }
            let rawDuration = Number(j.duration)
            if (!Number.isFinite(rawDuration) || rawDuration <= 0) rawDuration = 1
            let duration = Math.max(1, Math.ceil(rawDuration * 0.7))
            let inputs = []
            let circuit = null
            if (j.inputs && j.inputs.item)
                j.inputs.item.forEach(i => {
                    let c = i.content
                    if (c.type == "gtceu:circuit") { circuit = c.configuration; return }
                    let count = c.count ? c.count : 1
                    let item = null
                    if (c.ingredient && c.ingredient.item) item = c.ingredient.item
                    if (c.ingredient && c.ingredient.tag) item = "#" + c.ingredient.tag
                    if (item) inputs.push(count + "x " + item)
                })
            let outputs = []
            if (j.outputs && j.outputs.item)
                j.outputs.item.forEach(o => {
                    let c = o.content
                    let item = c.ingredient.item
                    let count = c.count ? c.count : 1
                    if (count > 1) outputs.push(Item.of(item, count))
                    else outputs.push(item)
                })
            let recipe = e.recipes.gtceu.assembler('kubejs:assembler/ethyl_cyanoacrylate_' + String(r.getId()).replace(/[:/]/g, '_'))
            if (circuit !== null) recipe.circuit(circuit)
            inputs.forEach(i => recipe.itemInputs(i))
            outputs.forEach(o => recipe.itemOutputs(o))
            recipe.inputFluids(Fluid.of('gtceu:ethyl_cyanoacrylate', Math.max(1, Math.floor(glueAmount / 2))))
            recipe.EUt(Math.max(1, Math.ceil(eu * 0.95))).duration(duration)
        } catch (err) { }
    })
    let sfm_cable = ['hv', 'ev', 'iv', 'luv', 'zpm', 'uv']
    sfm_cable.forEach((a, n) => {
        e.recipes.gtceu.assembler().duration(600 / (n + 1)).EUt(120 * (4 ** (n + 1))).itemInputs(`${4 ** (n + 1)}x gtceu:inert_machine_casing`, `${4 ** (n + 1)}x minecraft:ender_eye`, `${Math.round(2 ** ((n * 1.5) + 1))}x gtceu:${a}_conveyor_module`, `${Math.round(2 ** ((n * 1.5) + 1))}x gtceu:${a}_electric_pump`).itemOutputs(`${16 ** ((n / 2) + 1)}x sfm:cable`).circuit(3)
    })
    e.recipes.gtceu.assembler().EUt(8).duration(4.5 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:dropper').itemOutputs('16x pipez:item_pipe').inputFluids(Fluid.of('oritong:latex', 2500))
    e.recipes.gtceu.assembler().EUt(8).duration(4.5 * 20).itemInputs('6x mekanism:ingot_steel', '2x minecraft:bucket').itemOutputs('16x pipez:fluid_pipe').inputFluids(Fluid.of('oritong:latex', 2500))
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
    e.recipes.gtceu.assembler().EUt(8).duration(4.5 * 20).itemInputs('6x mekanism:ingot_steel', '2x gtceu:infused_alloy_octal_wire').itemOutputs('16x pipez:energy_pipe').inputFluids(Fluid.of('oritong:latex', 2500))
    e.recipes.gtceu.assembler().EUt(24).duration(3.75 * 20).itemInputs('6x mekanism:ingot_steel', '2x gtceu:infused_alloy_octal_wire').itemOutputs('16x pipez:energy_pipe').inputFluids(Fluid.of('gtceu:polyethylene', 800))
    e.recipes.gtceu.assembler().EUt(20).duration(3 * 20).itemInputs('6x mekanism:ingot_steel', '2x gtceu:infused_alloy_octal_wire').itemOutputs('16x pipez:energy_pipe').inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 800))
    e.recipes.gtceu.assembler().EUt(106).duration(2.5 * 20).itemInputs('6x mekanism:ingot_steel', '2x gtceu:infused_alloy_octal_wire').itemOutputs('16x pipez:energy_pipe').inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 600))
    e.recipes.gtceu.assembler().EUt(475).duration(2 * 20).itemInputs('6x mekanism:ingot_steel', '2x gtceu:infused_alloy_octal_wire').itemOutputs('16x pipez:energy_pipe').inputFluids(Fluid.of('gtceu:epoxy', 400))
    e.recipes.gtceu.assembler().EUt(1070).duration(1 * 20).itemInputs('6x mekanism:ingot_steel', '2x gtceu:infused_alloy_octal_wire').itemOutputs('16x pipez:energy_pipe').inputFluids(Fluid.of('gtceu:polybenzimidazole', 200))
    e.recipes.gtceu.assembler().itemInputs('mekanism:sawdust').circuit(1).inputFluids(Fluid.of('oritong:latex', 100)).itemOutputs('gtceu:phenolic_circuit_board').EUt(30).duration(20 * 10)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:caminite_brick_plate', '2x gtceu:diamond_plate', 'gtceu:lead_plate').inputFluids(Fluid.of('oritong:latex', 125)).duration(6 * 20).EUt(8).circuit(13).itemOutputs('kubejs:machine_core_1')
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:aluminium_plate', '2x gtceu:invar_plate', 'gtceu:caminite_brick_plate').circuit(13).inputFluids(Fluid.of('gtceu:polyethylene', 144)).itemOutputs('kubejs:machine_core_2').EUt(32).duration(20 * 6)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:beryllium_copper_plate', '2x gtceu:molybdenum_disilicide_plate', 'gtceu:aluminium_plate').circuit(13).inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144)).itemOutputs('kubejs:machine_core_3').EUt(GTValues.VA[GTValues.HV]).duration(20 * 6)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:osmiridium_plate', '2x gtceu:indium_gallium_phosphide_plate', 'gtceu:beryllium_copper_plate').circuit(13).inputFluids(Fluid.of('gtceu:reinforced_epoxy_resin', 144)).itemOutputs('kubejs:machine_core_4').EUt(GTValues.VA[GTValues.EV]).duration(20 * 6)
    e.recipes.gtceu.assembler().itemInputs('rainrot:data_pearl', '3x #gtceu:circuits/ulv', 'createaddition:diamond_grit_sandpaper').inputFluids(Fluid.of('oritong:glimmer', 1250)).itemOutputs('replication:matter_blueprint').EUt(24).duration(20 * 60)
    e.recipes.gtceu.assembler().itemInputs('3x gtceu:steel_turbine_blade', 'gtceu:lv_electric_motor', '5x mekanism:ingot_steel', '3x gtceu:manasteel_rod', '2x gtceu:tin_single_cable', '4x #gtceu:circuits/lv', '3x botania:rune_air').itemOutputs('mekanismgenerators:wind_generator').EUt(32).duration(45 * 20).inputFluids(Fluid.of('gtceu:red_alloy', 576))
    e.recipes.gtceu.assembler().itemInputs('8x gtceu:fine_red_alloy_wire', '4x gtceu:fine_copper_wire', 'gtceu:lv_electric_motor', 'create:shaft', '4x gtceu:tin_single_cable', '2x #gtceu:circuits/lv', '12x gtceu:steel_plate').itemOutputs('createaddition:alternator').EUt(16).duration(20 * 20)
    e.recipes.gtceu.assembler().itemInputs('gtceu:wood_plate', '4x gtceu:copper_foil').itemOutputs('gtceu:resin_printed_circuit_board').EUt(7).duration(11.5 * 20).inputFluids(Fluid.of('oritong:latex', 150))
    e.recipes.gtceu.assembler().itemInputs('mekanism:dust_diamond', '4x gtceu:fine_annealed_copper_wire').itemOutputs('4x gtceu:resistor').EUt(6 * 1.2).duration(160 * 0.6).inputFluids(Fluid.of('gtceu:ethyl_cyanoacrylate', 50))
    e.recipes.gtceu.assembler().itemInputs('mekanism:dust_diamond', '4x gtceu:fine_copper_wire').itemOutputs('2x gtceu:resistor').EUt(6 * 1.2).duration(160 * 0.6).inputFluids(Fluid.of('gtceu:ethyl_cyanoacrylate', 50))
    e.recipes.gtceu.assembler().itemInputs('mekanism:dust_diamond', '4x gtceu:fine_annealed_copper_wire').itemOutputs('4x gtceu:resistor').EUt(6).duration(160 * 1.2).inputFluids(Fluid.of('oritong:latex', 150))
    e.recipes.gtceu.assembler().itemInputs('mekanism:dust_diamond', '4x gtceu:fine_copper_wire').itemOutputs('2x gtceu:resistor').EUt(6).duration(160 * 1.2).inputFluids(Fluid.of('oritong:latex', 150))
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:fine_electrum_wire', '4x gtceu:red_alloy_screw', '2x gtceu:steel_plate', 'gtceu:long_lead_rod').inputFluids(Fluid.of('oritong:latex', 750)).itemOutputs('ae2:basic_card').EUt(14).duration(20 * 4)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:fine_electrum_wire', '4x gtceu:red_alloy_screw', '2x gtceu:steel_plate', 'gtceu:long_lead_rod').inputFluids(Fluid.of('gtceu:polyethylene', 576)).itemOutputs('ae2:basic_card').EUt(28).duration(20 * 2)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:fine_electrum_wire', '4x gtceu:red_alloy_screw', '2x gtceu:steel_plate', 'gtceu:long_lead_rod').inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288)).itemOutputs('ae2:basic_card').EUt(56).duration(20 * 1)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:fine_electrum_wire', '4x gtceu:red_alloy_screw', '2x gtceu:steel_plate', 'gtceu:long_lead_rod').inputFluids(Fluid.of('gtceu:polybenzimidazole', 144)).itemOutputs('ae2:basic_card').EUt(112).duration(20 * 0.5)
    e.recipes.gtceu.assembler().itemInputs('ae2:basic_card', '4x gtceu:diamond_bolt', '#gtceu:circuits/ulv').inputFluids(Fluid.of('gtceu:blue_alloy', 288)).itemOutputs('pipez:improved_upgrade').EUt(24).duration(20 * 8)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:fine_aluminium_wire', '4x gtceu:blue_alloy_screw', '2x gtceu:stainless_steel_plate', 'gtceu:long_red_steel_rod').inputFluids(Fluid.of('gtceu:polyethylene', 576)).itemOutputs('ae2:advanced_card').EUt(28 * 4).duration(20 * 2)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:fine_aluminium_wire', '4x gtceu:blue_alloy_screw', '2x gtceu:stainless_steel_plate', 'gtceu:long_red_steel_rod').inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288)).itemOutputs('ae2:advanced_card').EUt(56 * 4).duration(20 * 1)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:fine_aluminium_wire', '4x gtceu:blue_alloy_screw', '2x gtceu:stainless_steel_plate', 'gtceu:long_red_steel_rod').inputFluids(Fluid.of('gtceu:polybenzimidazole', 144)).itemOutputs('ae2:advanced_card').EUt(112 * 4).duration(20 * 0.5)
    e.recipes.gtceu.assembler().itemInputs('ae2:advanced_card', '2x mekanism:dust_refined_obsidian', '#gtceu:circuits/mv').inputFluids(Fluid.of('gtceu:vanadium_steel', 288)).itemOutputs('pipez:advanced_upgrade').EUt(24 * 4).duration(20 * 8 * 2)
    e.recipes.gtceu.assembler().itemInputs('6x gtceu:polyethylene_plate', '4x gtceu:black_steel_plate', '2x gtceu:annealed_copper_plate', 'gtceu:aluminium_frame', 'tconstruct:seared_bricks', 'gtceu:computer_monitor_cover', '#forge:glass_panes/colorless', '2x #gtceu:circuits/mv').inputFluids(Fluid.of('gtceu:concrete', 288)).circuit(2).itemOutputs('tconstruct:smeltery_controller').EUt(34).duration(20 * 10)
    e.recipes.gtceu.assembler().itemInputs('3x gtceu:annealed_copper_single_cable', '2x gtceu:alumina_ceramic_plate', 'gtceu:mv_machine_hull', 'gtceu:ulpic_chip').itemOutputs('gtceu:mv_energy_input_hatch').EUt(120).duration(200)
    e.recipes.gtceu.assembler().itemInputs('16x gtceu:damascus_steel_ingot', '16x gtceu:treated_wood_plate', '8x mekanism:ingot_steel', '2x create:shaft').inputFluids(Fluid.of('gtceu:soldering_alloy', 576)).circuit(2).itemOutputs('2x create:crushing_wheel').EUt(60).duration(18 * 20)
    e.recipes.gtceu.assembler().itemInputs('16x gtceu:red_steel_plate', '4x #gtceu:circuits/hv', '4x kubejs:machine_core_2', '4x gtceu:stainless_steel_frame', '4x gtceu:aluminium_gear', '4x gtceu:polytetrafluoroethylene_large_fluid_pipe').circuit(19).inputFluids(Fluid.of('gtceu:andesite_alloy', 14112)).itemOutputs('gtnn:exxonmobil_chemical_plant').EUt(240).duration(150 * 20)
    e.recipes.gtceu.assembler().itemInputs('gtceu:clean_machine_casing', '2x gtceu:maintenance_hatch', '2x gtceu:hv_robot_arm', '4x #gtceu:circuits/hv', '2x gtceu:lv_field_generator').itemOutputs('gtceu:auto_maintenance_hatch').inputFluids(Fluid.of('gtceu:ethyl_cyanoacrylate', 250)).EUt(GTValues.VA[GTValues.HV]).duration(6 * 20)
    e.recipes.gtceu.assembler().itemInputs('gtceu:hv_machine_hull', '4x gtceu:stainless_steel_frame', '8x gtceu:damascus_steel_drill_head', '4x gtceu:mv_fluid_drilling_rig', '4x gtmthings:lv_digital_miner', '4x gtmthings:mv_digital_miner', '4x gtmthings:hv_digital_miner', '4x gtceu:red_steel_gear').circuit(2).itemOutputs('gtceu:directional_void_miner').EUt(GTValues.VA[GTValues.HV]).duration(10 * 20)
    e.recipes.gtceu.assembler().itemInputs('gtceu:lv_machine_hull', 'sfm:cable', '4x #gtceu:circuits/hv', 'gtceu:computer_monitor_cover').inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1296)).itemOutputs('sfm:manager').EUt(GTValues.VA[GTValues.HV] * 0.75).duration(8 * 20)
    e.recipes.gtceu.assembler().itemInputs('gtceu:hv_machine_hull', '2x gtceu:titanium_nitride_ceramic_plate', '2x gtceu:gold_single_cable', '2x gtceu:lpic_chip', 'gtceu:hv_voltage_coil').inputFluids(Fluid.of('gtceu:sodium_potassium', 1000)).itemOutputs('gtceu:hv_energy_input_hatch').EUt(480).duration(200)
    e.recipes.gtceu.assembler().itemInputs('4x minecraft:redstone', '4x gtceu:clay_dust').itemOutputs('16x curvy_pipes:redstone_cable').inputFluids(Fluid.of('minecraft:water', 1000)).EUt(8).duration(14 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:bronze_dust', '4x gtceu:clay_dust').itemOutputs('16x curvy_pipes:tiny_item_pipe').inputFluids(Fluid.of('minecraft:water', 1000)).EUt(8).duration(14 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:steel_dust', '4x gtceu:clay_dust').itemOutputs('16x curvy_pipes:tiny_fluid_pipe').inputFluids(Fluid.of('minecraft:water', 1000)).EUt(8).duration(14 * 20)
    e.recipes.gtceu.assembler().itemInputs('pipez:item_pipe', 'pipez:fluid_pipe', 'pipez:energy_pipe').itemOutputs('3x pipez:universal_pipe').EUt(8).duration(20 * 0.8)
    e.recipes.gtceu.assembler().itemOutputs('pipez:item_pipe', 'pipez:fluid_pipe', 'pipez:energy_pipe').itemInputs('3x pipez:universal_pipe').EUt(8).duration(20 * 0.8)
    e.recipes.gtceu.assembler().itemInputs('gtceu:magnetic_steel_rod', '2x gtceu:steel_plate', '2x minecraft:redstone', '#forge:glass_panes/colorless').itemOutputs('pipez:filter_destination_tool').inputFluids(Fluid.of('gtceu:polyethylene', 576)).EUt(14).duration(7.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('2x gtceu:damascus_steel_plate', '2x gtceu:lv_sodium_battery', '2x gtceu:hv_emitter', '2x gtceu:hv_sensor', 'occultism:wormhole_frame', 'gtceu:computer_monitor_cover').itemOutputs('mekanism:portable_teleporter').inputFluids(Fluid.of('gtceu:polyethylene', 288)).EUt(GTValues.VA[GTValues.HV] * 0.65).duration(35 * 20)
    e.recipes.gtceu.assembler().itemInputs('gtceu:auto_maintenance_hatch', '6x gtceu:filter_casing', '2x kubejs:machine_core_3', '4x #gtceu:circuits/hv', '4x gtceu:mv_field_generator', '2x gtceu:hv_robot_arm').inputFluids(Fluid.of('gtceu:titanium', 576)).itemOutputs('gtceu:cleaning_maintenance_hatch').EUt(GTValues.VA[GTValues.HV]).duration(17.5 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.assembler().itemInputs('64x minecraft:smooth_stone').inputFluids(Fluid.of('gtceu:concrete', 12000)).itemOutputs('9x industrial_platform:industrial_platform').EUt(33).duration(150 * 20)
    e.recipes.gtceu.assembler().itemInputs('kubejs:machine_core_3', 'minecraft:ender_eye').notConsumable('entangled:block').notConsumable('embers:iron_aspectus').notConsumable('embers:copper_aspectus').notConsumable('embers:lead_aspectus').notConsumable('embers:silver_aspectus').notConsumable('embers:dawnstone_aspectus').inputFluids(Fluid.of('gtceu:pink_glimmer', 5000)).itemOutputs('entangled:block').cleanroom(CleanroomType.CLEANROOM).EUt(GTValues.VA[GTValues.HV] * 0.2).duration(16 * 20)
    e.recipes.gtceu.assembler().itemInputs('kubejs:machine_core_3', 'gtceu:black_steel_frame', '4x gtceu:double_stainless_steel_plate', '2x gtceu:electrum_single_cable', 'gtceu:mv_field_generator').inputFluids(Fluid.of('gtceu:ethyl_cyanoacrylate', 200)).itemOutputs('kubejs:multi_functional_casing').EUt(GTValues.VA[GTValues.HV] * 0.45).duration(6 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:hsla_steel_plate', '2x gtceu:titanium_plate', 'gtceu:stainless_steel_frame').itemOutputs('2x gtceu:high_temperature_smelting_casing').circuit(6).EUt(16).duration(2.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:atomic_alloy_plate', '2x gtceu:red_alloy_plate', 'gtceu:hsla_steel_frame').itemOutputs('2x gtceu:large_scale_assembler_casing').circuit(6).EUt(16).duration(2.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:hsla_steel_plate', '2x gtceu:blue_steel_plate', 'gtceu:black_steel_frame').itemOutputs('2x gtceu:stress_proof_casing').circuit(6).EUt(16).duration(2.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:red_alloy_plate', '2x gtceu:blue_alloy_plate', 'gtceu:titanium_frame').itemOutputs('2x gtceu:laser_safe_engraving_casing').circuit(6).EUt(16).duration(2.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:blue_steel_plate', '2x gtceu:atomic_alloy_plate', 'gtceu:blue_steel_frame').itemOutputs('2x gtceu:reaction_safe_mixing_casing').circuit(6).EUt(16).duration(2.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:beryllium_copper_plate', '2x gtceu:titanium_plate', 'gtceu:stainless_steel_frame').itemOutputs('2x gtceu:vibration_safe_casing').circuit(6).EUt(16).duration(2.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:beryllium_copper_plate', '2x gtceu:atomic_alloy_plate', 'gtceu:blue_steel_frame').itemOutputs('2x gtceu:watertight_casing').circuit(6).EUt(16).duration(2.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:red_alloy_plate', '2x gtceu:hsla_steel_plate', 'gtceu:titanium_frame').itemOutputs('2x gtceu:shock_proof_cutting_casing').circuit(6).EUt(16).duration(2.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:blue_steel_plate', '2x gtceu:black_steel_plate', 'gtceu:titanium_frame').itemOutputs('2x gtceu:secure_maceration_casing').circuit(6).EUt(16).duration(2.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('gtceu:nonconducting_casing', '5x gtceu:platinum_double_wire', 'gtceu:vanadium_gallium_single_cable').itemOutputs('2x gtceu:electrolytic_cell').EUt(16).duration(2.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('gtceu:secure_maceration_casing', '4x create:crushing_wheel', '2x gtceu:ev_electric_motor').itemOutputs('2x gtceu:crushing_wheels').EUt(16).duration(2.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('gtceu:shock_proof_cutting_casing', '4x gtceu:titanium_buzz_saw_blade', '2x gtceu:ev_electric_motor').itemOutputs('2x gtceu:slicing_blades').EUt(16).duration(2.5 * 20)
    e.recipes.gtceu.assembler().itemInputs('12x gtceu:mv_gas_collector', '12x gtceu:hv_gas_collector', '12x gtceu:ev_gas_collector', '16x gtceu:mv_field_generator', '8x gtceu:hv_field_generator', '4x gtceu:ev_field_generator', '4x #gtceu:circuits/luv', '4x gtceu:hastelloy_x_frame').inputFluids(Fluid.of('gtceu:ethyl_cyanoacrylate', 10000)).circuit(2).itemOutputs('gtceu:large_gas_collector').EUt(GTValues.VA[GTValues.EV] * 0.75).duration(40 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:hastelloy_x_plate', 'gtceu:tungsten_steel_frame', 'gtceu:iv_electric_motor', 'gtceu:ev_field_generator', 'gtceu:ev_emitter', 'gtceu:ev_sensor', '4x #gtceu:circuits/luv', 'gtceu:ev_assembler', 'gtceu:ev_circuit_assembler').itemOutputs('2x gtceu:assembly_line_casing').inputFluids(Fluid.of('gtceu:ethyl_cyanoacrylate', 1000)).EUt(GTValues.VA[GTValues.EV] * 0.95).duration(32.5 * 20)
})
