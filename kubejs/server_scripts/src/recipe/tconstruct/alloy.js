ServerEvents.recipes(e => {

    // 只转换这四个 Recipe ID
    let recipeIds = [
        'gtceu:alloy_smelter/copper_ingot_and_nickel_ingot_into_cupronickel',
        'gtceu:alloy_smelter/iron_ingot_and_tin_ingot_into_tin_alloy',
        'gtceu:alloy_smelter/lead_ingot_and_antimony_ingot_into_battery_alloy',
        'gtceu:alloy_smelter/magnesium_dust_and_aluminium_ingot_into_magnalium'
    ]


    e.forEachRecipe({ type: "gtceu:alloy_smelter" }, r => {

        if (!recipeIds.includes(String(r.id))) return

        let j = JSON.parse(String(r.json))

        console.log("========== Converting Alloy Smelter ==========")
        console.log("Recipe ID: " + r.id)


        // =========================
        // 转换物品 / Tag
        // =========================

        function convertItem(item) {

            let name = item.substring(item.lastIndexOf(":") + 1)

            if (name.endsWith("_ingot")) {
                name = name.substring(0, name.length - "_ingot".length)
            }
            else if (name.endsWith("_dust")) {
                name = name.substring(0, name.length - "_dust".length)
            }
            else {
                return null
            }

            return "forge:" + name
        }


        function convertTag(tag) {

            let name = tag.substring(tag.lastIndexOf("/") + 1)

            if (
                tag.startsWith("forge:ingots/") ||
                tag.startsWith("forge:dusts/")
            ) {
                return "forge:" + name
            }

            return null
        }


        // =========================
        // 输入
        // =========================

        let inputs = []

        if (j.inputs && j.inputs.item) {

            j.inputs.item.forEach(o => {

                let content = o.content
                let ingredient = content.ingredient
                let count = content.count

                let tag = null


                // -------------------------
                // 直接物品
                // -------------------------

                if (ingredient.item) {

                    tag = convertItem(ingredient.item)

                    if (tag) {

                        let amount = count * 144

                        inputs.push({
                            amount: amount,
                            tag: tag
                        })

                        console.log(
                            "Input: " +
                            count + "x " +
                            ingredient.item +
                            " -> " +
                            amount + " mB " +
                            tag
                        )
                    }
                }


                // -------------------------
                // Forge Tag
                // -------------------------

                else if (ingredient.tag) {

                    tag = convertTag(ingredient.tag)

                    if (tag) {

                        let amount = count * 144

                        inputs.push({
                            amount: amount,
                            tag: tag
                        })

                        console.log(
                            "Input: " +
                            count + "x #" +
                            ingredient.tag +
                            " -> " +
                            amount + " mB " +
                            tag
                        )
                    }
                }
            })
        }


        // =========================
        // 输出
        // =========================

        let result = null

        if (j.outputs && j.outputs.item) {

            let o = j.outputs.item[0]

            let content = o.content
            let ingredient = content.ingredient
            let count = content.count

            let tag = null


            // -------------------------
            // 直接物品
            // -------------------------

            if (ingredient.item) {

                tag = convertItem(ingredient.item)

                if (tag) {

                    let amount = count * 144

                    result = {
                        amount: amount,
                        tag: tag
                    }

                    console.log(
                        "Output: " +
                        count + "x " +
                        ingredient.item +
                        " -> " +
                        amount + " mB " +
                        tag
                    )
                }
            }


            // -------------------------
            // Tag 输出
            // -------------------------

            else if (ingredient.tag) {

                tag = convertTag(ingredient.tag)

                if (tag) {

                    let amount = count * 144

                    result = {
                        amount: amount,
                        tag: tag
                    }

                    console.log(
                        "Output: " +
                        count + "x #" +
                        ingredient.tag +
                        " -> " +
                        amount + " mB " +
                        tag
                    )
                }
            }
        }


        // =========================
        // 检查转换结果
        // =========================

        if (inputs.length == 0 || !result) {

            console.log("Skipped: invalid conversion")
            console.log("Converted Inputs: " + JSON.stringify(inputs))
            console.log("Converted Result: " + JSON.stringify(result))
            console.log("==============================================")

            return
        }


        // =========================
        // 温度
        // =========================

        let temperature = 850


        // =========================
        // 添加 TConstruct Alloy 配方
        // =========================

        e.custom({
            type: "tconstruct:alloy",

            inputs: inputs,

            result: result,

            temperature: temperature
        })


        // =========================
        // Log
        // =========================

        console.log(
            "Converted Inputs: " +
            JSON.stringify(inputs)
        )

        console.log(
            "Converted Result: " +
            JSON.stringify(result)
        )

        console.log(
            "Temperature: " +
            temperature
        )

        console.log("TConstruct Alloy Recipe Added")

        console.log("==============================================")
    })

})