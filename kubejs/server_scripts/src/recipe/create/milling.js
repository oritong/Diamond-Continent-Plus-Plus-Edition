ServerEvents.recipes(e => {
    e.recipes.create.milling(Item.of('minecraft:redstone').withChance(0.2), 'gtceu:cinnabar_dust')
    e.forEachRecipe({ type: "gtceu:macerator" }, r => {
        try {
            let j = JSON.parse(String(r.json))
            let eu = 0
            if (j.tickInputs && j.tickInputs.eu && j.tickInputs.eu.length > 0)
                eu = j.tickInputs.eu[0].content
            if (eu > 8) return
            let input = null
            let output = null
            if (j.inputs && j.inputs.item && j.inputs.item.length > 0) {
                let c = j.inputs.item[0].content
                input = c.ingredient.item
            }
            if (j.outputs && j.outputs.item && j.outputs.item.length > 0) {
                let c = j.outputs.item[0].content
                let item = c.ingredient.item
                let count = c.count ? c.count : 1
                output = count > 1 ? Item.of(item, count) : item
            }
            if (!input || !output) return
            let duration = j.duration
            e.recipes.create.milling(output, input, duration)
        } catch (err) { }
    })
})
