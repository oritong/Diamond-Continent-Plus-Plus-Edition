// priority: 0
ServerEvents.recipes(e => {
    e.forEachRecipe({ type: "gtceu:lathe" }, r => {
        let j = JSON.parse(String(r.json))
        let eu = j.tickInputs.eu[0].content
        let c = j.inputs.item[0].content
        let input = null
        let ingotTag = false
        if (c.ingredient.item) input = c.ingredient.item
        else if (c.ingredient.tag) {
            input = "#" + c.ingredient.tag
            if (c.ingredient.tag.startsWith("forge:ingots/")) ingotTag = true
        }
        if (!input) return
        let duration = 0
        if (eu <= 8) duration = j.duration * 4
        else if (ingotTag && eu <= 32) duration = j.duration * 6
        else return
        let outputs = []
        j.outputs.item.forEach(o => {
            let count = o.content.count
            let item = o.content.ingredient.item
            if (count == 1) outputs.push(item)
            else outputs.push(count + "x " + item)
        })
        e.recipes.create.cutting(outputs, input, duration)
    })
    e.recipes.create.cutting('3x create:shaft', 'create:andesite_alloy', 320)
})
