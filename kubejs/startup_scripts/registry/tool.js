GTCEuStartupEvents.materialModification(event => {
    const PropertyKey = Java.loadClass(
        'com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey'
    )
    const GTToolType = Java.loadClass(
        'com.gregtechceu.gtceu.api.item.tool.GTToolType'
    )

    const steelTool = GTMaterials.Steel.getProperty(PropertyKey.TOOL)
    steelTool.setDurability(888)

    const diamondTool = GTMaterials.Diamond.getProperty(PropertyKey.TOOL)
    diamondTool.setDurability(1677)

    if (!diamondTool.hasType(GTToolType.MORTAR)) {
        diamondTool.addTypes(GTToolType.MORTAR)
    }
})