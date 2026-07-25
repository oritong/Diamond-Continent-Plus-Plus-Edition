let assembler_rubber_ae2_use = [
    [['32x ae2:fluix_glass_cable'], '32x ae2:fluix_covered_cable', 16 * 20, 24, 1440]
]
ServerEvents.recipes(e => {
    assembler_rubber_ae2_use.forEach(([[a], b, c, d, f]) => {
        e.recipes.gtceu.assembler().itemInputs(a).itemOutputs(b).inputFluids(Fluid.of('gtceu:rubber', 4 * f)).duration(c).EUt(d)
        e.recipes.gtceu.assembler().itemInputs(a).itemOutputs(b).inputFluids(Fluid.of('gtceu:silicone_rubber', 2 * f)).duration(c).EUt(d)
        e.recipes.gtceu.assembler().itemInputs(a).itemOutputs(b).inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', f)).duration(c).EUt(d)
    })
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
    C: 'kubejs:general_circuit_hv',
    D: 'gtceu:hv_machine_hull',
    E: 'replication:chip_storage',
    F: 'gtceu:red_alloy_screw'
})
})