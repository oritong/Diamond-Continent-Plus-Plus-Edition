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
    "ae2:drive",
    'ae2:pattern_access_terminal',
    "ae2:pattern_encoding_terminal",
    "merequester:requester_terminal",
    "ae2:crafting_terminal",
    "expatternprovider:ex_pattern_access_part",
    'ae2:condenser',
    "ae2:cell_component_1k",
    "ae2:cell_component_4k",
    "ae2:cell_component_16k",
    "ae2:cell_component_64k",
    "ae2:cell_component_256k",
    "ae2:item_cell_housing",
    "ae2:fluid_cell_housing",
    "ae2:fluid_storage_cell_256k",
    "ae2:item_storage_cell_1k",
    "ae2:item_storage_cell_4k",
    "ae2:item_storage_cell_16k",
    "ae2:fluid_storage_cell_256k",
    "ae2:fluid_storage_cell_4k",
    "ae2:fluid_storage_cell_1k",
    "ae2:item_storage_cell_64k",
    "ae2:fluid_storage_cell_16k",
    "ae2:item_storage_cell_256k",
    "ae2:fluid_storage_cell_64k"
]
let banae2lists = [
    'ae2:network/blocks/energy_energy_acceptor',
    'ae2:network/blocks/interfaces_interface',
    'expatternprovider:ex_molecular_assembler',
    'ae2:network/blocks/pattern_providers_interface',
    'ae2:network/parts/panels_semi_dark_monitor'
]