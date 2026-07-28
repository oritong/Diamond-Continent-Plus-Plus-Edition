// priority: 3
ServerEvents.recipes(e => {
    //等级 等级 副材料 主材料 线缆 液体
    let machine_hull = [
        ['lv', '1', 'gtceu:wrought_iron_plate', 'gtceu:steel_plate', 'gtceu:tin_single_cable', 'oritong:latex'],
        ['mv', '2', 'gtceu:rose_gold_plate', 'gtceu:aluminium_plate', 'gtceu:copper_single_cable', 'gtceu:polyethylene'],
        ['hv', '2', 'gtceu:sterling_silver_plate', 'gtceu:stainless_steel_plate', 'gtceu:gold_single_cable', 'gtceu:polyethylene']
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
            if (j.tickInputs && j.tickInputs.eu && j.tickInputs.eu.length > 0)
                eu = j.tickInputs.eu[0].content
            let duration = Math.floor(j.duration * 0.7)
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
            let recipe = e.recipes.gtceu.assembler()
            if (circuit !== null) recipe.circuit(circuit)
            inputs.forEach(i => recipe.itemInputs(i))
            outputs.forEach(o => recipe.itemOutputs(o))
            recipe.inputFluids(Fluid.of('gtceu:ethyl_cyanoacrylate', Math.floor(glueAmount / 2)))
            recipe.EUt(Math.ceil(eu * 0.95)).duration(duration)
        } catch (err) { }
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
    e.recipes.gtceu.assembler().itemInputs('16x gtnn:supracausal_mainframe', '8x gtceu:shadow_steel_plate', '8x gtceu:refined_radiance_plate', 'create:andesite_casing', 'gtceu:neutronium_frame', '2x gtceu:dense_naquadah_alloy_plate', 'gtceu:polybenzimidazole_rod', 'gtceu:tritanium_round').inputFluids(Fluid.of('gtceu:high_octane_gasoline', 750)).itemOutputs('kubejs:physics_assembler').EUt(8 * 4 * 4 * 4 * 4 * 4 * 4 * 1.75).duration(150 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:aluminium_plate', '2x gtceu:invar_plate', 'gtceu:caminite_brick_plate').circuit(13).inputFluids(Fluid.of('gtceu:polyethylene', 144)).itemOutputs('kubejs:machine_core_2').EUt(32).duration(20 * 6)
    e.recipes.gtceu.assembler().itemInputs('rainrot:data_pearl', '3x #gtceu:circuits/ulv', 'createaddition:diamond_grit_sandpaper').inputFluids(Fluid.of('oritong:glimmer', 1250)).itemOutputs('replication:matter_blueprint').EUt(24).duration(20 * 60)
    e.recipes.gtceu.assembler().itemInputs('3x gtceu:steel_turbine_blade', 'gtceu:lv_electric_motor', '5x mekanism:ingot_steel', '3x gtceu:manasteel_rod', '2x gtceu:tin_single_cable', '4x #gtceu:circuits/lv', '3x botania:rune_air').itemOutputs('mekanismgenerators:wind_generator').EUt(32).duration(45 * 20).inputFluids(Fluid.of('gtceu:red_alloy', 576))
    e.recipes.gtceu.assembler().itemInputs('8x gtceu:fine_red_alloy_wire', '4x gtceu:fine_copper_wire', 'gtceu:lv_electric_motor', 'create:shaft', '4x gtceu:tin_single_cable', '2x #gtceu:circuits/lv', '12x gtceu:steel_plate').itemOutputs('createaddition:alternator').EUt(16).duration(20 * 20)
    e.recipes.gtceu.assembler().itemInputs('gtceu:wood_plate', '4x gtceu:copper_foil').itemOutputs('gtceu:resin_printed_circuit_board').EUt(7).duration(11.5 * 20).inputFluids(Fluid.of('oritong:latex', 150))
    e.recipes.gtceu.assembler().itemInputs('mekanism:dust_diamond', '4x gtceu:fine_annealed_copper_wire').itemOutputs('4x gtceu:resistor').EUt(6*1.2).duration(160*0.6).inputFluids(Fluid.of('gtceu:ethyl_cyanoacrylate', 50))
    e.recipes.gtceu.assembler().itemInputs('mekanism:dust_diamond', '4x gtceu:fine_copper_wire').itemOutputs('2x gtceu:resistor').EUt(6*1.2).duration(160*0.6).inputFluids(Fluid.of('gtceu:ethyl_cyanoacrylate', 50))
    e.recipes.gtceu.assembler().itemInputs('mekanism:dust_diamond', '4x gtceu:fine_annealed_copper_wire').itemOutputs('4x gtceu:resistor').EUt(6).duration(160*1.2).inputFluids(Fluid.of('oritong:latex', 150))
    e.recipes.gtceu.assembler().itemInputs('mekanism:dust_diamond', '4x gtceu:fine_copper_wire').itemOutputs('2x gtceu:resistor').EUt(6).duration(160*1.2).inputFluids(Fluid.of('oritong:latex', 150))
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:fine_electrum_wire', '4x gtceu:red_alloy_screw', '2x gtceu:steel_plate', 'gtceu:long_lead_rod').inputFluids(Fluid.of('oritong:latex', 750)).itemOutputs('ae2:basic_card').EUt(14).duration(20*4)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:fine_electrum_wire', '4x gtceu:red_alloy_screw', '2x gtceu:steel_plate', 'gtceu:long_lead_rod').inputFluids(Fluid.of('gtceu:polyethylene', 576)).itemOutputs('ae2:basic_card').EUt(28).duration(20*2)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:fine_electrum_wire', '4x gtceu:red_alloy_screw', '2x gtceu:steel_plate', 'gtceu:long_lead_rod').inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288)).itemOutputs('ae2:basic_card').EUt(56).duration(20*1)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:fine_electrum_wire', '4x gtceu:red_alloy_screw', '2x gtceu:steel_plate', 'gtceu:long_lead_rod').inputFluids(Fluid.of('gtceu:polybenzimidazole', 144)).itemOutputs('ae2:basic_card').EUt(112).duration(20*0.5)
    e.recipes.gtceu.assembler().itemInputs('ae2:basic_card', '4x gtceu:diamond_bolt', '#gtceu:circuits/ulv').inputFluids(Fluid.of('gtceu:blue_alloy', 288)).itemOutputs('pipez:improved_upgrade').EUt(24).duration(20*8)
    e.recipes.gtceu.assembler().itemInputs('6x gtceu:polyethylene_plate', '4x gtceu:black_steel_plate', '2x gtceu:annealed_copper_plate', 'gtceu:aluminium_frame', 'tconstruct:seared_bricks', 'gtceu:computer_monitor_cover', '#forge:glass_panes/colorless', '2x #gtceu:circuits/mv').inputFluids(Fluid.of('gtceu:concrete', 288)).circuit(2).itemOutputs('tconstruct:smeltery_controller').EUt(34).duration(20*10)
    e.recipes.gtceu.assembler().itemInputs('3x gtceu:annealed_copper_single_cable', '2x gtceu:alumina_ceramic_plate', 'gtceu:mv_machine_hull', 'gtceu:ulpic_chip').itemOutputs('gtceu:mv_energy_input_hatch').EUt(120).duration(200)
    e.recipes.gtceu.assembler().itemInputs('16x gtceu:damascus_steel_ingot', '16x gtceu:treated_wood_plate', '8x mekanism:ingot_steel', '2x create:shaft').inputFluids(Fluid.of('gtceu:soldering_alloy', 576)).circuit(2).itemOutputs('2x create:crushing_wheel').EUt(60).duration(18*20)
    e.recipes.gtceu.assembler().itemInputs('16x gtceu:red_steel_plate', '4x #gtceu:circuits/hv', '4x kubejs:machine_core_2', '4x gtceu:stainless_steel_frame', '4x gtceu:aluminium_gear', '4x gtceu:polytetrafluoroethylene_large_fluid_pipe').circuit(19).inputFluids(Fluid.of('gtceu:andesite_alloy', 14112)).itemOutputs('gtnn:exxonmobil_chemical_plant').EUt(240).duration(150*20)
    e.recipes.gtceu.assembler().itemInputs('gtceu:clean_machine_casing', '2x gtceu:maintenance_hatch', '2x gtceu:hv_robot_arm', '4x kubejs:general_circuit_hv', '2x gtceu:lv_field_generator').itemOutputs('gtceu:auto_maintenance_hatch').inputFluids(Fluid.of('gtceu:ethyl_cyanoacrylate', 250)).EUt(GTValues.VA[GTValues.HV]).duration(6*20)
})
