let assembler_rubber_ae2_use = [
    [['32x ae2:fluix_glass_cable'], '32x ae2:fluix_covered_cable', 16 * 20, 24, 1440]
]
ServerEvents.recipes(e => {
    assembler_rubber_ae2_use.forEach(([[a], b, c, d, f]) => {
        e.recipes.gtceu.assembler().itemInputs(a).itemOutputs(b).inputFluids(Fluid.of('gtceu:rubber', 4 * f)).duration(c).EUt(d)
        e.recipes.gtceu.assembler().itemInputs(a).itemOutputs(b).inputFluids(Fluid.of('gtceu:silicone_rubber', 2 * f)).duration(c).EUt(d)
        e.recipes.gtceu.assembler().itemInputs(a).itemOutputs(b).inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', f)).duration(c).EUt(d)
    })
    e.recipes.gtceu.forming_press().itemInputs('4x gtceu:silicon_plate', '4x gtceu:certus_quartz_plate', '4x gtceu:redstone_plate', '#gtceu:circuits/ulv').itemOutputs('ae2:cell_component_1k').EUt(1).duration(8 * 20)
    e.recipes.gtceu.forming_press().itemInputs('ae2:cell_component_1k', '4x gtceu:silicon_plate', '4x gtceu:certus_quartz_plate', '8x gtceu:gold_plate', '#gtceu:circuits/lv').itemOutputs('ae2:cell_component_4k').EUt(GTValues.VA[GTValues.ULV]).duration(10 * 20)
    e.recipes.gtceu.forming_press().itemInputs('ae2:cell_component_4k', '4x gtceu:silicon_plate', '4x gtceu:certus_quartz_plate', '16x gtceu:emerald_plate', '#gtceu:circuits/mv').itemOutputs('ae2:cell_component_16k').EUt(GTValues.VA[GTValues.LV]).duration(12 * 20)
    e.recipes.gtceu.forming_press().itemInputs('ae2:cell_component_16k', '4x gtceu:silicon_plate', '4x gtceu:certus_quartz_plate', '32x gtceu:diamond_plate', '#gtceu:circuits/hv').itemOutputs('ae2:cell_component_64k').EUt(GTValues.VA[GTValues.MV]).duration(14 * 20)
    e.recipes.gtceu.forming_press().itemInputs('ae2:cell_component_64k', '4x gtceu:silicon_plate', '4x gtceu:certus_quartz_plate', '64x gtceu:atomic_alloy_plate', '#gtceu:circuits/ev').itemOutputs('ae2:cell_component_256k').EUt(GTValues.VA[GTValues.HV]).duration(16 * 20)

    e.recipes.gtceu.packer().itemInputs('ae2:item_cell_housing', 'ae2:cell_component_1k').itemOutputs('ae2:item_storage_cell_1k').duration(4 * 20).EUt(32)
    e.recipes.gtceu.packer().itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_1k').itemOutputs('ae2:fluid_storage_cell_1k').duration(4 * 20).EUt(32)
    e.recipes.gtceu.packer().itemInputs('ae2:item_cell_housing', 'ae2:cell_component_4k').itemOutputs('ae2:item_storage_cell_4k').duration(4 * 20).EUt(32)
    e.recipes.gtceu.packer().itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_4k').itemOutputs('ae2:fluid_storage_cell_4k').duration(4 * 20).EUt(32)
    e.recipes.gtceu.packer().itemInputs('ae2:item_cell_housing', 'ae2:cell_component_16k').itemOutputs('ae2:item_storage_cell_16k').duration(4 * 20).EUt(32)
    e.recipes.gtceu.packer().itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_16k').itemOutputs('ae2:fluid_storage_cell_16k').duration(4 * 20).EUt(32)
    e.recipes.gtceu.packer().itemInputs('ae2:item_cell_housing', 'ae2:cell_component_64k').itemOutputs('ae2:item_storage_cell_64k').duration(4 * 20).EUt(32)
    e.recipes.gtceu.packer().itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_64k').itemOutputs('ae2:fluid_storage_cell_64k').duration(4 * 20).EUt(32)
    e.recipes.gtceu.packer().itemInputs('ae2:item_cell_housing', 'ae2:cell_component_256k').itemOutputs('ae2:item_storage_cell_256k').duration(4 * 20).EUt(32)
    e.recipes.gtceu.packer().itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_256k').itemOutputs('ae2:fluid_storage_cell_256k').duration(4 * 20).EUt(32)

    e.recipes.gtceu.electric_blast_furnace().itemInputs('4x gtceu:alumina_ceramic_dust', '3x mekanism:dust_quartz', 'ae2:certus_quartz_dust').inputFluids(Fluid.of('gtceu:glue', 500)).itemOutputs('5x gtceu:mixed_quartz_fiber_dust').EUt(120).duration(8 * 20).blastFurnaceTemp(2200)
    e.recipes.gtceu.wiremill().itemInputs('gtceu:mixed_quartz_fiber_dust').itemOutputs('3x ae2:quartz_fiber').EUt(9).duration(6 * 20)
    e.recipes.gtceu.chemical_bath().itemInputs('#ae2:glass_cable').inputFluids(Fluid.of('minecraft:water', 100)).itemOutputs('ae2:fluix_glass_cable').EUt(2).duration(2)
    e.recipes.gtceu.chemical_bath().itemInputs('#ae2:covered_cable').inputFluids(Fluid.of('minecraft:water', 100)).itemOutputs('ae2:fluix_covered_cable').EUt(2).duration(2)
    e.recipes.gtceu.chemical_bath().itemInputs('#ae2:smart_cable').inputFluids(Fluid.of('minecraft:water', 100)).itemOutputs('ae2:fluix_smart_cable').EUt(2).duration(2)
    e.recipes.gtceu.assembler().itemInputs('2x ae2:quartz_fiber', '4x ae2:fluix_dust', '2x gtceu:alumina_ceramic_plate').inputFluids(Fluid.of('gtceu:glass', 1152)).itemOutputs('16x ae2:fluix_glass_cable').EUt(28).duration(6 * 20)
    e.recipes.gtceu.assembler().itemInputs('16x ae2:fluix_covered_cable').inputFluids(Fluid.of('gtceu:blue_alloy', 288)).itemOutputs('16x ae2:fluix_smart_cable').EUt(40).duration(4 * 20)
    e.shaped('ae2:storage_bus', [
        'AB ',
        'CDE',
        'AB '
    ], {
        A: 'gtceu:copper_single_cable',
        B: 'gtceu:hv_robot_arm',
        C: 'minecraft:piston',
        D: 'ae2:cable_interface',
        E: 'gtceu:computer_monitor_cover'
    })
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:copper_single_cable', '2x gtceu:hv_robot_arm', 'minecraft:piston', 'ae2:cable_interface', 'gtceu:computer_monitor_cover').itemOutputs('ae2:storage_bus').EUt(40).duration(8 * 20)
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:alumina_ceramic_ingot', '4x gtceu:aluminium_ingot', 'ae2:fluix_crystal').itemOutputs('ae2:energy_acceptor').EUt(60).duration(12 * 20)
    e.shaped('ae2:energy_acceptor', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:alumina_ceramic_ingot',
        B: 'gtceu:aluminium_ingot',
        C: 'ae2:fluix_crystal'
    })
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:steel_rod', '2x gtceu:lv_field_generator', 'gtceu:aluminium_crate', 'ae2:fluix_crystal', 'gtceu:aluminium_drum').itemOutputs('ae2:interface').EUt(40).duration(8 * 20)
    e.recipes.gtceu.packer().itemInputs('ae2:interface').itemOutputs('ae2:cable_interface').EUt(8).duration(2 * 20)
    e.recipes.gtceu.packer().itemInputs('ae2:cable_interface').itemOutputs('ae2:interface').EUt(8).duration(2 * 20)
    e.recipes.gtceu.packer().itemInputs('ae2:cable_pattern_provider').itemOutputs('ae2:pattern_provider').EUt(8).duration(2 * 20)
    e.recipes.gtceu.packer().itemInputs('ae2:pattern_provider').itemOutputs('ae2:cable_pattern_provider').EUt(8).duration(2 * 20)
    e.recipes.gtceu.assembler().itemInputs('3x gtceu:aluminium_ingot', '2x gtceu:mv_electric_motor', 'ae2:fluix_crystal').itemOutputs('ae2:annihilation_plane').EUt(40).duration(8 * 20)
    e.shaped('ae2:interface', [
        'ABA',
        'CDE',
        'ABA'
    ], {
        A: 'gtceu:steel_rod',
        B: 'gtceu:lv_field_generator',
        C: 'gtceu:aluminium_crate',
        D: 'ae2:fluix_crystal',
        E: 'gtceu:aluminium_drum'
    })
    e.shaped('ae2:annihilation_plane', [
        'AAA',
        'BCB',
        '   '
    ], {
        A: 'gtceu:aluminium_ingot',
        B: 'gtceu:mv_electric_motor',
        C: 'ae2:fluix_crystal'
    })
    e.shaped('ae2:drive', [
        'ABC',
        'BDE',
        'FBC'
    ], {
        A: 'gtceu:blue_alloy_screw',
        B: 'gtceu:stainless_steel_plate',
        C: '#gtceu:circuits/hv',
        D: 'gtceu:hv_machine_hull',
        E: 'replication:chip_storage',
        F: 'gtceu:red_alloy_screw'
    })
    e.shaped('ae2:molecular_assembler', [
        'ABA',
        'CDE',
        'CFE'
    ], {
        A: '#gtceu:circuits/hv',
        B: 'gtceu:hv_robot_arm',
        C: 'gtceu:hv_electric_motor',
        D: 'gtceu:cleanroom_glass',
        E: 'gtceu:hv_conveyor_module',
        F: 'gtceu:stainless_steel_frame'
    })
    e.shaped('expatternprovider:ex_molecular_assembler', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#gtceu:circuits/hv',
        B: 'gtceu:tungsten_steel_frame',
        C: 'gtceu:hv_robot_arm',
        D: 'ae2:molecular_assembler'
    })
    e.recipes.gtceu.mixer().itemInputs('4x minecraft:redstone', '6x gtceu:aluminium_dust', '8x ae2:certus_quartz_dust').itemOutputs('16x ae2:fluix_dust').EUt(60).duration(6 * 20).circuit(2)
    e.shaped('ae2:pattern_provider', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:polyethylene_plate',
        B: 'gtceu:hv_electric_pump',
        C: '#gtceu:circuits/hv',
        D: 'ae2:interface',
        E: 'gtceu:hv_conveyor_module'
    })
    e.recipes.gtceu.assembler().itemInputs('4x gtceu:polyethylene_plate', 'gtceu:hv_electric_pump', '2x #gtceu:circuits/hv', 'ae2:interface', 'gtceu:hv_conveyor_module').itemOutputs('ae2:pattern_provider').EUt(80).duration(160)
    e.recipes.gtceu.assembler().itemInputs('8x gtceu:double_stainless_steel_plate', '16x gtceu:aluminium_foil', '2x gtceu:nand_memory_chip', '2x gtceu:nor_memory_chip', '4x #gtceu:circuits/mv').itemOutputs('16x ae2:blank_pattern').inputFluids(Fluid.of('gtceu:polyethylene', 1296)).EUt(GTValues.VA[GTValues.HV]).duration(8 * 20)
    e.recipes.gtceu.assembler().itemInputs('8x gtceu:double_titanium_plate', '16x gtceu:stainless_steel_foil', '4x gtceu:nand_memory_chip', '4x gtceu:nor_memory_chip', '4x #gtceu:circuits/ev').itemOutputs('64x ae2:blank_pattern').inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1296)).EUt(GTValues.VA[GTValues.EV]).duration(4 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.assembler().itemInputs('8x gtceu:double_rhodium_plated_palladium_plate', '16x gtceu:platinum_foil', '8x gtceu:nand_memory_chip', '8x gtceu:nor_memory_chip', '4x #gtceu:circuits/iv').itemOutputs('256x ae2:blank_pattern').inputFluids(Fluid.of('gtceu:polybenzimidazole', 1296)).EUt(GTValues.VA[GTValues.IV]).duration(2 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.shaped('2x ae2:semi_dark_monitor', [
        ' AB',
        ' AB',
        ' AB'
    ], {
        A: 'ae2:fluix_dust',
        B: 'gtceu:tempered_glass'
    })
    e.shaped('ae2:crafting_terminal', [
        ' AB',
        'CDE',
        ' AB'
    ], {
        A: '#gtceu:circuits/hv',
        B: 'gtceu:polyethylene_plate',
        C: 'minecraft:crafting_table',
        D: 'ae2:semi_dark_monitor',
        E: 'gtceu:computer_monitor_cover'
    })
    e.shaped('expatternprovider:ex_pattern_access_part', [
        ' AB',
        'CDE',
        ' AB'
    ], {
        A: '#gtceu:circuits/hv',
        B: 'gtceu:polyethylene_plate',
        C: 'ae2:blank_pattern',
        D: 'ae2:semi_dark_monitor',
        E: 'gtceu:computer_monitor_cover'
    })
    e.shaped('merequester:requester_terminal', [
        ' AB',
        'CDE',
        ' AB'
    ], {
        A: '#gtceu:circuits/hv',
        B: 'gtceu:polyethylene_plate',
        C: 'merequester:requester',
        D: 'ae2:semi_dark_monitor',
        E: 'gtceu:computer_monitor_cover'
    })
    e.shaped('ae2:pattern_encoding_terminal', [
        ' AB',
        'CDE',
        ' AB'
    ], {
        A: '#gtceu:circuits/hv',
        B: 'gtceu:polyethylene_plate',
        C: 'gtmthings:advanced_terminal',
        D: 'ae2:semi_dark_monitor',
        E: 'gtceu:computer_monitor_cover'
    })
    e.shaped('ae2:condenser', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'ae2:fluix_dust',
        B: '#forge:glass_panes/colorless',
        C: 'gtceu:steel_frame'
    })
    e.recipes.gtceu.assembler().itemInputs('ae2:fluid_cell_housing', '4x gtceu:mv_field_generator', 'superflatcore:super_infinite_water_cover', '8x gtceu:infinite_water_cover').circuit(1).inputFluids(Fluid.of('gtceu:polyethylene', 288)).itemOutputs(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}')).EUt(300).duration(45 * 20)
    e.recipes.gtceu.assembler().itemInputs('2x gtceu:double_damascus_steel_plate', 'gtceu:tempered_glass', 'gtceu:mv_field_generator', '8x gtceu:fine_electrum_wire').inputFluids(Fluid.of('gtceu:polyethylene', 576)).itemOutputs('ae2:item_cell_housing').EUt(GTValues.VA[GTValues.HV]).duration(8.5 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.recipes.gtceu.assembler().itemInputs('2x gtceu:double_red_steel_plate', 'gtceu:tempered_glass', 'gtceu:mv_field_generator', '8x gtceu:fine_electrum_wire').inputFluids(Fluid.of('gtceu:polyethylene', 576)).itemOutputs('ae2:fluid_cell_housing').EUt(GTValues.VA[GTValues.HV]).duration(8.5 * 20).cleanroom(CleanroomType.CLEANROOM)
    e.shaped('expatternprovider:ex_pattern_provider', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#gtceu:circuits/hv',
        B: 'ae2:pattern_provider',
        C: 'ae2:capacity_card',
        D: 'gtceu:hv_field_generator'
    })
})