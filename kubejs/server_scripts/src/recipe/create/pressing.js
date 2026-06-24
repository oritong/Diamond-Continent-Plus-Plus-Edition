// priority: 0
//格雷卷板机锭变板转机霸冲压
ServerEvents.recipes(e => {
    e.forEachRecipe({ type: "gtceu:bender" }, r => {

        let j = JSON.parse(String(r.json))

        let circuit1 = false
        let ingotTag = null

        j.inputs.item.forEach(i => {

            let c = i.content

            if (c.type == "gtceu:circuit" && c.configuration == 1) {
                circuit1 = true
            }

            if (c.type == "gtceu:sized") {
                if (c.ingredient && c.ingredient.tag) {

                    let tag = c.ingredient.tag

                    if (tag.startsWith("forge:ingots/")) {
                        ingotTag = tag
                    }

                }
            }

        })

        if (!circuit1 || !ingotTag) return

        let out = j.outputs.item[0].content.ingredient.item

        e.recipes.create.pressing(
            out,
            "#" + ingotTag
        )

    })
})