ServerEvents.recipes(e => {
    e.forEachRecipe({ type: "gtceu:mixer" }, r => {
        try {
            let j = JSON.parse(String(r.json))
            let eu = 0
            if (j.tickInputs && j.tickInputs.eu && j.tickInputs.eu.length > 0)
                eu = j.tickInputs.eu[0].content
            if (eu > 8) return
            let inputs = []
            let outputs = []
            let divideFluid = false
            if (j.inputs && j.inputs.fluid)
                j.inputs.fluid.forEach(f => {
                    if (f.content && f.content.amount > 1000)
                        divideFluid = true
                })
            if (j.outputs && j.outputs.fluid)
                j.outputs.fluid.forEach(f => {
                    if (f.content && f.content.amount > 1000)
                        divideFluid = true
                })
            if (j.inputs && j.inputs.item)
                j.inputs.item.forEach(i => {
                    let c = i.content
                    if (c.type == "gtceu:circuit") return
                    let count = c.count ? c.count : 1
                    let item = null
                    if (c.ingredient && c.ingredient.item) item = c.ingredient.item
                    if (c.ingredient && c.ingredient.tag) item = "#" + c.ingredient.tag
                    if (item) for (let k = 0; k < count; k++) inputs.push(item)
                })
            if (j.inputs && j.inputs.fluid)
                j.inputs.fluid.forEach(f => {
                    let amount = f.content.amount
                    if (divideFluid) amount = amount / 5
                    let fluid = ""
                    let v = f.content.value ? f.content.value[0] : null
                    if (v && v.tag) {
                        if (v.tag == "forge:water") fluid = "minecraft:water"
                        else if (v.tag == "forge:lava") fluid = "minecraft:lava"
                        else fluid = v.tag.replace("forge:", "gtceu:")
                    } else if (v && v.fluid) fluid = v.fluid
                    if (fluid) inputs.push(Fluid.of(fluid, amount))
                })
            if (j.outputs && j.outputs.item)
                j.outputs.item.forEach(o => {
                    let c = o.content
                    let item = c.ingredient.item
                    let count = c.count ? c.count : 1
                    if (count > 1) outputs.push(Item.of(item, count))
                    else outputs.push(item)
                })
            if (j.outputs && j.outputs.fluid)
                j.outputs.fluid.forEach(f => {
                    let amount = f.content.amount
                    if (divideFluid) amount = amount / 5
                    let v = f.content.value ? f.content.value[0] : null
                    if (v && v.fluid) outputs.push(Fluid.of(v.fluid, amount))
                })
            let duration = j.duration * 2
            e.recipes.create.mixing(outputs, inputs, duration)
        } catch (err) { }
    })
})
