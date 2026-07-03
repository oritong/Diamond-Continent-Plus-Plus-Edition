ServerEvents.recipes(e => {
    let machine_hull = [
        ['lv', '1', 'gtceu:wrought_iron_plate', 'gtceu:steel_plate', 'gtceu:tin_single_cable', 'industrialforegoing:latex'],
        ['mv', '2', 'gtceu:invar_plate', 'gtceu:aluminium_plate', 'gtceu:copper_single_cable', 'gtceu:polyethylene']
    ]
    machine_hull.forEach(([a, b, c, d, f, g]) => {
        e.recipes.gtceu.assembler().itemInputs(`kubejs:machine_core_${b}`, `4x ${d}`, `2x ${c}`, `2x ${f}`).itemOutputs(`gtceu:${a}_machine_hull`).EUt(4 ** parseInt(b)).duration(20 * 4).inputFluids(Fluid.of(g, 288))
        e.remove({ output: `gtceu:${a}_machine_hull` })
    })
    e.forEachRecipe({ type: "gtceu:assembler" }, r => {
        try {
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
            let duration = Math.floor(j.duration * 0.6)
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
            recipe.EUt(Math.ceil(eu * 1.2)).duration(duration)
        } catch (err) { }
    })
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
    e.recipes.gtceu.assembler().EUt(8).duration(4.5 * 20).itemInputs('6x mekanism:ingot_steel', '2x gtceu:infused_alloy_octal_wire').itemOutputs('16x pipez:energy_pipe').inputFluids(Fluid.of('industrialforegoing:latex', 2500))
    e.recipes.gtceu.assembler().EUt(24).duration(3.75 * 20).itemInputs('6x mekanism:ingot_steel', '2x gtceu:infused_alloy_octal_wire').itemOutputs('16x pipez:energy_pipe').inputFluids(Fluid.of('gtceu:polyethylene', 800))
    e.recipes.gtceu.assembler().EUt(20).duration(3 * 20).itemInputs('6x mekanism:ingot_steel', '2x gtceu:infused_alloy_octal_wire').itemOutputs('16x pipez:energy_pipe').inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 800))
    e.recipes.gtceu.assembler().EUt(106).duration(2.5 * 20).itemInputs('6x mekanism:ingot_steel', '2x gtceu:infused_alloy_octal_wire').itemOutputs('16x pipez:energy_pipe').inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 600))
    e.recipes.gtceu.assembler().EUt(475).duration(2 * 20).itemInputs('6x mekanism:ingot_steel', '2x gtceu:infused_alloy_octal_wire').itemOutputs('16x pipez:energy_pipe').inputFluids(Fluid.of('gtceu:epoxy', 400))
    e.recipes.gtceu.assembler().EUt(1070).duration(1 * 20).itemInputs('6x mekanism:ingot_steel', '2x gtceu:infused_alloy_octal_wire').itemOutputs('16x pipez:energy_pipe').inputFluids(Fluid.of('gtceu:polybenzimidazole', 200))
    e.recipes.gtceu.assembler().itemInputs('mekanism:sawdust').circuit(1).inputFluids(Fluid.of('industrialforegoing:latex', 100)).itemOutputs('gtceu:phenolic_circuit_board').EUt(30).duration(20 * 10)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:caminite_brick_plate', '2x gtceu:diamond_plate', 'gtceu:lead_plate').inputFluids(Fluid.of('industrialforegoing:latex', 125)).duration(6 * 20).EUt(8).circuit(13).itemOutputs('kubejs:machine_core_1')
    e.recipes.gtceu.assembler().itemInputs('16x gtnn:supracausal_mainframe', '8x gtceu:shadow_steel_plate', '8x gtceu:refined_radiance_plate', 'create:andesite_casing', 'gtceu:neutronium_frame', '2x gtceu:dense_naquadah_alloy_plate', 'gtceu:polybenzimidazole_rod', 'gtceu:tritanium_round').inputFluids(Fluid.of('gtceu:high_octane_gasoline', 750)).itemOutputs('kubejs:physics_assembler').EUt(8 * 4 * 4 * 4 * 4 * 4 * 4 * 1.75).duration(150 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:aluminium_plate', '2x gtceu:invar_plate', 'gtceu:caminite_brick_plate').circuit(13).inputFluids(Fluid.of('gtceu:polyethylene', 144)).itemOutputs('kubejs:machine_core_2').EUt(32).duration(20 * 6)
    e.recipes.gtceu.assembler().itemInputs('rainrot:data_pearl', '3x #gtceu:circuits/ulv', 'createaddition:diamond_grit_sandpaper').inputFluids(Fluid.of('oritong:glimmer', 1250)).itemOutputs('replication:matter_blueprint').EUt(24).duration(20 * 60)
    e.recipes.gtceu.assembler().itemInputs('3x gtceu:steel_turbine_blade', 'gtceu:lv_electric_motor', '5x mekanism:ingot_steel', '3x gtceu:manasteel_rod', '2x gtceu:tin_single_cable', '4x #gtceu:circuits/lv', '3x botania:rune_air').itemOutputs('mekanismgenerators:wind_generator').EUt(32).duration(45 * 20).inputFluids(Fluid.of('gtceu:red_alloy', 576))
    e.recipes.gtceu.assembler().itemInputs('8x gtceu:fine_red_alloy_wire', '4x gtceu:fine_copper_wire', 'gtceu:lv_electric_motor', 'create:shaft', '4x gtceu:tin_single_cable', '2x #gtceu:circuits/lv', '12x gtceu:steel_plate').itemOutputs('createaddition:alternator').EUt(16).duration(20 * 20)
    e.recipes.gtceu.assembler().itemInputs('gtceu:wood_plate', '4x gtceu:copper_foil').itemOutputs('gtceu:resin_printed_circuit_board').EUt(7).duration(11.5 * 20).inputFluids(Fluid.of('industrialforegoing:latex', 150))
})
