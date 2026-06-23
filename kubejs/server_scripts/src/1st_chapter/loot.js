LootJS.modifiers(e => {
    e.addBlockLootModifier('minecraft:infested_stone').addSequenceLoot(LootEntry.of('minecraft:cobblestone').when((c) => c.randomChance(0.5)))
    //e.addBlockLootModifier('minecraft:deepslate_diamond_ore').matchMainHand('#forge:tools/wrench').addSequenceLoot(LootEntry.of('gtceu:small_diamond_dust').when((c) => c.randomChance(0.8)),LootEntry.of('gtceu:small_diamond_dust').when((c) => c.randomChance(0.6)),LootEntry.of('gtceu:small_diamond_dust').when((c) => c.randomChance(0.4)),LootEntry.of('gtceu:small_diamond_dust').when((c) => c.randomChance(0.2)))
    //e.addBlockLootModifier('minecraft:diamond_ore').addSequenceLoot(LootEntry.of('gtceu:small_diamond_dust').when((c) => c.randomChance(0.8)),LootEntry.of('gtceu:small_diamond_dust').when((c) => c.randomChance(0.6)),LootEntry.of('gtceu:small_diamond_dust').when((c) => c.randomChance(0.4)),LootEntry.of('gtceu:small_diamond_dust').when((c) => c.randomChance(0.2)))
})

BlockEvents.rightClicked('minecraft:diamond_ore', event => {
    const { player, item, block, level, hand } = event
    if (hand == "OFF_HAND") return
    if (player == null) return
    if (player.isCrouching() && item.hasTag('forge:tools/wrench')) {

        let count = Math.floor(Math.random() * 4) + 1

        let spawnItem = level.createEntity("item")
        spawnItem.x = block.x + 0.5
        spawnItem.y = block.y + 0.5
        spawnItem.z = block.z + 0.5
        spawnItem.item = Item.of('gtceu:small_diamond_dust', count)
        spawnItem.spawn()

        level.destroyBlock(block.pos, false)
        item.setDamageValue(item.getDamageValue() + 1)
        event.cancel()
    }
})
BlockEvents.rightClicked('minecraft:deepslate_diamond_ore', event => {
    const { player, item, block, level, hand } = event
    if (hand == "OFF_HAND") return
    if (player == null) return
    if (player.isCrouching() && item.hasTag('forge:tools/wrench')) {

        let count = Math.floor(Math.random() * 4) + 1

        let spawnItem = level.createEntity("item")
        spawnItem.x = block.x + 0.5
        spawnItem.y = block.y + 0.5
        spawnItem.z = block.z + 0.5
        spawnItem.item = Item.of('gtceu:small_diamond_dust', count)
        spawnItem.spawn()

        level.destroyBlock(block.pos, false)
        item.setDamageValue(item.getDamageValue() + 1)
        event.cancel()
    }
})