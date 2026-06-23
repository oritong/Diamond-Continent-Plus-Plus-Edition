BlockEvents.rightClicked('minecraft:dirt', e => {
    if (
        e.player.getMainHandItem().getId() === 'ars_nouveau:earth_essence' ||
        e.player.getOffHandItem().getId() === 'ars_nouveau:earth_essence'
    ) {
        e.cancel()
    }
})
