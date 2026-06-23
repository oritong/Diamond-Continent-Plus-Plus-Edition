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

StartupEvents.registry('item', e => {
    e.create('stone_hammer', 'basic').maxDamage(65).tag('forge:tools/hammers')
    e.create('raw_apothecary')
    e.create('the_source_of_the_earth')
    e.create('originium').rarity('uncommon')
    e.create('originium_shard').rarity('uncommon')
    e.create('orundum').rarity('rare')
    e.create('raw_compressed_fireclay')
    e.create('oritong:steel_upgrade_smithing_template')
    e.create('oritong:diamond_upgrade_smithing_template')
    e.create('raw_vacuum_tube')
    e.create('watered_raw_vacuum_tube')
    e.create('wood_ingot').tag('forge:ingots').texture('gtceu:item/empty_wooden_form')
})

const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty')
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty')

GTCEuStartupEvents.registry('gtceu:material', e => {
    GTMaterials.WroughtIron.addFlags(GTMaterialFlags.GENERATE_ROTOR)
    //GTMaterials.Diamond.addFlags(GTMaterialFlags.GENERATE_PLATE)
    e.create('caminite_brick').ingot().color(0xedd7af).iconSet(GTMaterialIconSet.SHINY).flags(GTMaterialFlags.GENERATE_PLATE)
    e.create('infused_alloy').ingot().color(0xea463e).iconSet(GTMaterialIconSet.BRIGHT).cableProperties(GTValues.V[GTValues.LV], 16, 0, true)
    e.create('dragon').ingot().color(0x9600ff).iconSet(GTMaterialIconSet.BRIGHT).cableProperties(GTValues.V[GTValues.UXV], 16, 2, false).flags(GTMaterialFlags.GENERATE_PLATE).flags(GTMaterialFlags.GENERATE_GEAR).flags(GTMaterialFlags.GENERATE_ROD)
    //e.create('diamond').toolStats(ToolProperty.Builder.of(1.8, 1.7, 700, 3, [GTToolType.MORTAR]).build())
})

// GTCEuStartupEvents.materialModification(e => {
//     GTMaterials.Diamond.setProperty(PropertyKey.TOOL,
//         ToolProperty.Builder.of(10, 9, 768, 4,
//         [
//             GTToolType.MORTAR
//         ]
//     ).build())
// });