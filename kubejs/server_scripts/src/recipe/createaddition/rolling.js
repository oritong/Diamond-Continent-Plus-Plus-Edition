ServerEvents.recipes(e => {
    e.forEachRecipe({ type: "gtceu:wiremill" }, r => {
        let j = JSON.parse(String(r.json))
        let eu = j.tickInputs.eu[0].content
        if (eu > 8) return
        let circuit = null
        let input = null
        j.inputs.item.forEach(i => {
            let c = i.content
            if (c.type == "gtceu:circuit") { circuit = c.configuration; return }
            if (c.type == "gtceu:sized") {
                if (c.ingredient.tag) input = { tag: c.ingredient.tag }
                else if (c.ingredient.item) input = { item: c.ingredient.item }
            }
        })
        if (circuit != null && circuit != 1) return
        if (!input) return
        let out = j.outputs.item[0].content.ingredient.item
        let count = j.outputs.item[0].content.count
        e.custom({ type: "createaddition:rolling", input: input, result: { item: out, count: count } })
    })
})
