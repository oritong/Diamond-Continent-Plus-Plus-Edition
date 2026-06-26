ItemEvents.modification(e => {
    e.modify("minecraft:diamond", modification => {
        modification.setBurnTime(128000)
    })
    e.modify("minecraft:diamond_block", modification => {
        modification.setBurnTime(1280000)
    })
    e.modify("mekanism:dust_diamond", modification => {
        modification.setBurnTime(128000)
    })
})
