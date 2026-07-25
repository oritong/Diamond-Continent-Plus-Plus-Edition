// priority: 6
ServerEvents.recipes(e => {
    banae2things.forEach(Item => {
        e.remove({ output: Item })
    })
    banae2lists.forEach(Lists => {
        e.remove({ id: Lists })
    })
})

let banae2things = [
    'ae2:quartz_fiber',
    'ae2:fluix_glass_cable',
    'ae2:fluix_crystal',
    'ae2:fluix_covered_cable',
    "ae2:fluix_smart_cable",
    'ae2:storage_bus',
    'ae2:annihilation_plane',
    "ae2:molecular_assembler",
    "ae2:blank_pattern",
    "ae2:drive"
]
let banae2lists = [
    'ae2:network/blocks/energy_energy_acceptor',
    'ae2:network/blocks/interfaces_interface'
]