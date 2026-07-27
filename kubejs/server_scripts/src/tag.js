ServerEvents.tags('fluid', e => {
    e.remove('minecraft:water', 'createaddition:seed_oil')
    e.remove('minecraft:water', 'createaddition:flowing_seed_oil')
    e.remove('minecraft:water', 'createaddition:bioethanol')
    e.remove('minecraft:water', 'createaddition:flowing_bioethanol')
    e.add('oritong:glimmer', 'oritong:glimmer')
    // e.remove('forge:steam', 'embers:flowing_steam')
    // e.remove('forge:steam', 'mekanism:flowing_steam')
    // e.remove('forge:steam', 'embers:steam')
    // e.remove('forge:steam', 'mekanism:steam')
})
ServerEvents.tags('item', e => {
    no_fire_burn.forEach(a => {
        e.add('lychee:fire_immune', a)
    })
    e.add('minecraft:pickaxes', 'avaritia:blaze_pickaxe')
    e.add('gtceu:circuits/ulv', 'mekanism:basic_control_circuit')
    e.add('gtceu:circuits/lv', 'mekanism:advanced_control_circuit')
    e.add('gtceu:circuits/mv', 'mekanism:elite_control_circuit')
    e.add('forge:dusts/nether_quartz', 'mekanism:dust_quartz')
})
ServerEvents.tags('block', e => {
    wrench_pickup.forEach(a => {
        e.add('create:wrench_pickup', a)
    })
    e.add('oritong:grizzly_chute', 'kubejs:grizzly_chute')
    e.add('oritong:compress/diamond', 'kubejs:compress_diamond_block')
})
let no_fire_burn = [
    'gtceu:wrought_iron_nugget',
    'gtceu:wrought_iron_ingot',
    'embers:caminite_plate',
    'minecraft:iron_ingot',
    'minecraft:iron_block',
    'gtceu:diamond_plate',
    'gtceu:coke_oven_bricks',
    'gtceu:caminite_brick_plate',
    'mekanism:cardboard_box'
]
let wrench_pickup = [
    'minecraft:cobblestone',
    'tconstruct:seared_melter',
    'tconstruct:seared_heater',
    'tconstruct:seared_ingot_gauge',
    'tconstruct:seared_table',
    'tconstruct:seared_basin',
    'tconstruct:seared_faucet',
    'tconstruct:seared_channel',
    'minecraft:anvil',
    'minecraft:chipped_anvil',
    'minecraft:damaged_anvil',
    'mekanism:cardboard_box'
]
