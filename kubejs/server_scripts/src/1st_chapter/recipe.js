ServerEvents.recipes(e => {
    let dust_convert = [
        'mekanism:dust_diamond',
        'gtceu:lazurite_dust',
        'gtceu:cinnabar_dust',
        "occultism:gold_dust",
        'gtceu:silver_dust',
        'gtceu:iron_dust',
        'gtceu:copper_dust',
        'gtceu:tin_dust',
        'gtceu:lead_dust',
        'gtceu:zinc_dust',
        'gtceu:quartzite_dust',
        'gtceu:stone_dust',
        "mekanism:sawdust"
    ]
    let ingot_convert = [
        'minecraft:diamond',
        'gtceu:lazurite_gem',
        'gtceu:cinnabar_gem',
        "minecraft:gold_ingot",
        'gtceu:silver_ingot',
        'minecraft:iron_ingot',
        'minecraft:copper_ingot',
        'gtceu:tin_ingot',
        'gtceu:lead_ingot',
        'gtceu:zinc_ingot',
        'gtceu:quartzite_gem',
        'minecart:stone',
        'kubejs:wood_ingot'
    ]
    let block_convert = [
        'minecraft:diamond_block',
        'gtceu:cinnabar_block',
        'gtceu:lazurite_block',
        'minecraft:gold_block',
        'gtceu:silver_block',
        'minecraft:iron_block',
        'minecraft:copper_block',
        'gtceu:tin_block',
        'gtceu:lead_block',
        'gtceu:zinc_block',
        'gtceu:quartzite_block',
        '9x minecart:stone'
    ]
    let dyes = [
        'minecraft:white_dye',
        'minecraft:orange_dye',
        'minecraft:magenta_dye',
        'minecraft:light_blue_dye',
        'minecraft:yellow_dye',
        'minecraft:lime_dye',
        'minecraft:pink_dye',
        'minecraft:gray_dye',
        'minecraft:light_gray_dye',
        'minecraft:cyan_dye',
        'minecraft:purple_dye',
        'minecraft:blue_dye',
        'minecraft:brown_dye',
        'minecraft:green_dye',
        'minecraft:red_dye',
        'minecraft:black_dye'
    ]
    for (let i = 0; i < dust_convert.length - 1; i++) {
        let dust_convert_input = dust_convert[i]
        let dust_convert_output = dust_convert[i + 1]
        e.recipes.lychee.item_inside(dust_convert_input, BlockPredicate.of('oritong:glimmer')).post([Post.drop_item(dust_convert_output)]).time(5)
        e.custom({
            "type": "cmr:custom_fan",
            "ingredients": [
                {
                    "item": dust_convert_input
                },
                {
                    "amount": 1000,
                    "fluid": "oritong:glimmer",
                    "nbt": {}
                }
            ],
            "results": [
                {
                    "item": dust_convert_output
                }
            ]
        })
    }
    for (let i = 0; i < ingot_convert.length - 1; i++) {
        let ingot_convert_input = ingot_convert[i]
        let ingot_convert_output = ingot_convert[i + 1]
        e.recipes.lychee.item_inside(ingot_convert_input, BlockPredicate.of('oritong:glimmer')).post([Post.drop_item(ingot_convert_output)]).time(5)
    }
    for (let i = 0; i < block_convert.length - 1; i++) {
        let block_convert_input = block_convert[i]
        let block_convert_output = block_convert[i + 1]
        e.recipes.lychee.item_inside(block_convert_input, BlockPredicate.of('oritong:glimmer')).post([Post.drop_item(block_convert_output)]).time(20)
    }
    for (let i = 0; i < block_convert.length - 2; i++) {
        let block_convert_input = block_convert[i]
        let block_convert_output = block_convert[i + 1]
        e.custom({
            "type": "cmr:custom_fan",
            "ingredients": [
                {
                    "item": block_convert_input
                },
                {
                    "amount": 1000,
                    "fluid": "oritong:glimmer",
                    "nbt": {}
                }
            ],
            "results": [
                {
                    "item": block_convert_output
                }
            ]
        })
    }
    for (let i = 0; i < ingot_convert.length - 2; i++) {
        let ingot_convert_input = ingot_convert[i]
        let ingot_convert_output = ingot_convert[i + 1]
        e.custom({
            "type": "cmr:custom_fan",
            "ingredients": [
                {
                    "item": ingot_convert_input
                },
                {
                    "amount": 1000,
                    "fluid": "oritong:glimmer",
                    "nbt": {}
                }
            ],
            "results": [
                {
                    "item": ingot_convert_output
                }
            ]
        })
    }
    for (let i = 0; i < dyes.length; i++) {
        let input = dyes[i]
        let output = dyes[(i + 1) % dyes.length]

        e.recipes.lychee.item_inside(input, BlockPredicate.of('oritong:glimmer'))
            .post([Post.drop_item(output)])
            .time(5)
        e.custom({
            "type": "cmr:custom_fan",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "amount": 1000,
                    "fluid": "oritong:glimmer",
                    "nbt": {}
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }
    e.custom({
        "type": "cmr:custom_fan",
        "ingredients": [
            {
                "item": 'minecart:stone'
            },
            {
                "amount": 1000,
                "fluid": "oritong:glimmer",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": 'kubejs:wood_block'
            }
        ]
    })
    e.custom({
        "type": "cmr:custom_fan",
        "ingredients": [
            {
                "item": 'gtceu:quartzite_block'
            },
            {
                "amount": 1000,
                "fluid": "oritong:glimmer",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": 'minecart:stone',
                "count": 9
            }
        ]
    })


    e.recipes.gtceu.glimmer_collector().circuit(1).posY(-63, -12).outputFluids(Fluid.of('oritong:glimmer', 30)).EUt(8).duration(30)
    e.recipes.lychee.block_crushing('minecraft:diamond_block').post([Post.drop_item('4x gtceu:diamond_plate')])
    e.recipes.lychee.block_crushing('gtceu:quartzite_block').post([Post.drop_item('4x gtceu:quartzite_plate')])
    e.recipes.lychee.block_crushing('gtceu:lazurite_block').post([Post.drop_item('4x gtceu:lazurite_plate')])
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'gtceu:diamond_plate'
        },
        "cast_consumed": true,
        "cooling_time": 75,
        "fluid": {
            "amount": 144,
            "fluid": "gtceu:rose_gold"
        },
        "result": 'embers:dawnstone_ingot'
    })
    e.recipes.minecraft.smelting('2x tconstruct:seared_brick', 'tconstruct:grout', 0.3, 10 * 20)
    e.recipes.minecraft.blasting('2x tconstruct:seared_brick', 'tconstruct:grout', 0.3, 5 * 20)
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'minecraft:iron_nugget'
        },
        "cast_consumed": true,
        "cooling_time": 100,
        "fluid": {
            "amount": 144,
            "fluid": "gtceu:iron"
        },
        "result": 'gtceu:wrought_iron_ingot'
    })
    e.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": 'minecraft:iron_ingot'
        },
        "cast_consumed": true,
        "cooling_time": 800,
        "fluid": {
            "amount": 1296,
            "fluid": "gtceu:iron"
        },
        "result": 'gtceu:wrought_iron_block'
    })
    e.recipes.lychee.item_inside('embers:dawnstone_ingot', 'oritong:glimmer').post([Post.place('minecraft:water'), Post.drop_item('gtceu:lead_dust')]).time(45)
    e.recipes.lychee.item_inside('minecart:stone', 'minecraft:water').post([Post.drop_item('minecraft:cobblestone'), Post.drop_item('minecraft:bone_meal').withChance('0.12'), Post.drop_item('mysticalagriculture:soulstone').withChance('0.04')]).time(10)
    e.recipes.lychee.item_inside('minecraft:sand', 'minecraft:water').post([Post.place("*"), Post.drop_item('minecraft:clay')]).time(10)
    e.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "item": 'minecraft:dirt'
            },
            {
                "item": 'mekanism:dust_diamond'
            }
        ],
        "result": {
            "item": 'kubejs:the_source_of_the_earth'
        }
    })
    e.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "oritong:glimmer"
        },
        "ingredients": [
            {
                "item": 'minecraft:cobblestone'
            },
            {
                "item": 'mysticalagriculture:inferium_essence'
            }
        ],
        "result": {
            "item": 'minecraft:cobblestone',
            'count': 5
        }
    })
    e.recipes.minecraft.smelting('botania:apothecary_plains', 'kubejs:raw_apothecary')
    e.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
            {
                "tag": 'forge:dyes/white'
            },
            {
                "tag": 'forge:dyes/white'
            },
            {
                "tag": 'forge:dyes/white'
            },
            {
                "tag": 'forge:dyes/white'
            },
            {
                "item": 'mysticalagriculture:soul_dust'
            }
        ],
        "output": {
            "item": 'botania:pure_daisy'
        },
        "reagent": {
            "item": 'kubejs:the_source_of_the_earth'
        }
    })
    e.recipes.botania.pure_daisy('minecraft:amethyst_block', 'minecraft:diamond_block', 60)
    e.recipes.botania.pure_daisy('ars_nouveau:sourcestone', 'minecraft:stone', 60)
    e.recipes.botania.pure_daisy('minecraft:lava', 'minecraft:magma_block')

    e.recipes.lychee.item_inside('minecraft:iron_ingot', 'minecraft:lava').post([Post.drop_item('8x gtceu:wrought_iron_nugget')]).time(5)
    e.recipes.lychee.item_inside('gtceu:diamond_plate', 'minecraft:lava').post([Post.drop_item('embers:caminite_plate')]).time(15)
    e.recipes.lychee.item_inside('minecraft:iron_block', 'minecraft:lava').post([Post.drop_item('8x gtceu:wrought_iron_ingot')]).time(20)
    e.recipes.create.item_application('tconstruct:crafting_station', ['minecraft:crafting_table', 'tconstruct:part_builder'])
    e.recipes.create.item_application('minecraft:smithing_table', ['minecraft:crafting_table', 'tconstruct:seared_table'])
    e.recipes.farmersdelight.cutting('embers:caminite_bricks', '#minecraft:pickaxes', '4x embers:caminite_brick')
    e.custom({
        "type": "embers:boring",
        "dimensions": [
            "minecraft:overworld"
        ],
        "max_height": -57,
        "output": {
            "item": 'kubejs:originium'
        },
        "required_block": {
            "amount": 3,
            "block_tag": "embers:world_bottom"
        },
        "weight": 0.5
    })
    e.custom({
        "type": "embers:boring",
        "dimensions": [
            "minecraft:overworld"
        ],
        "max_height": -57,
        "output": {
            "item": 'kubejs:originium_shard'
        },
        "required_block": {
            "amount": 3,
            "block_tag": "embers:world_bottom"
        },
        "weight": 2
    })
    e.recipes.botania.pure_daisy('industrialforegoing:latex', 'kubejs:wood_block').id('oritong:hide0')
    e.recipes.lychee.item_inside('gtceu:andesite_alloy_dust', 'industrialforegoing:latex').post([Post.drop_item('create:andesite_alloy')]).time(32.5).hide_in_viewer(true)
    e.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": 'create:andesite_alloy'
        },
        "cast_consumed": true,
        "cooling_time": 200,
        "fluid": {
            "amount": 500,
            "fluid": "tconstruct:molten_clay"
        },
        "result": 'gtceu:coke_oven_bricks'
    })
    e.recipes.gtceu.coke_oven().itemInputs('embers:ember_grit').itemOutputs('minecraft:glowstone_dust').outputFluids(Fluid.of('gtceu:creosote', 250)).duration(20 * 30)
    e.recipes.lychee.item_inside('kubejs:wood_block', 'gtceu:creosote').post([Post.drop_item('gtceu:treated_wood_planks')]).time(45)
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'gtceu:andesite_alloy_dust'
        },
        "cast_consumed": true,
        "cooling_time": 20,
        "fluid": {
            "amount": 50,
            "fluid": "industrialforegoing:latex"
        },
        "result": 'create:andesite_alloy'
    })
    e.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": 'minecraft:barrel'
        },
        "cast_consumed": true,
        "cooling_time": 150,
        "fluid": {
            "amount": 200,
            "fluid": "industrialforegoing:latex"
        },
        "result": 'gtceu:wood_drum'
    })



    e.recipes.farmersdelight.cutting('minecraft:bone_meal', '#gtceu:tools/crafting_hammers', [Item.of('minecraft:white_dye').withChance(0.6), Item.of('minecraft:white_dye').withChance(0.4), Item.of('minecraft:white_dye').withChance(0.2)])
    e.recipes.lychee.block_crushing('kubejs:raw_compressed_fireclay').post([Post.drop_item('gtceu:compressed_fireclay')])
    e.recipes.gtceu.primitive_blast_furnace().itemInputs('gtceu:wrought_iron_ingot', 'embers:ember_shard').itemOutputs('mekanism:ingot_steel').chancedOutput('gtceu:tiny_glowstone_dust', 2000, 0).duration(20 * 75)
    e.recipes.gtceu.primitive_blast_furnace().itemInputs('6x gtceu:wrought_iron_ingot', 'embers:ember_crystal').itemOutputs('6x mekanism:ingot_steel', 'gtceu:small_glowstone_dust').duration(20 * 180)
    e.recipes.minecraft.smelting('gtceu:rubber_plate', 'industrialforegoing:dryrubber')
    e.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": 'kubejs:wood_block'
        },
        "cast_consumed": true,
        "cooling_time": 100,
        "fluid": {
            "amount": 125,
            "fluid": "gtceu:creosote"
        },
        "result": 'gtceu:treated_wood_planks'
    })
    e.recipes.create.item_application('create:andesite_casing', ['kubejs:machine_core_1', 'create:andesite_alloy'])
    e.recipes.create.item_application('create:copper_casing', ['kubejs:machine_core_1', 'minecraft:copper_ingot'])
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'gtceu:caminite_brick_ingot'
            },
            {
                "item": 'gtceu:caminite_brick_ingot'
            },
            {
                "item": 'gtceu:caminite_brick_ingot'
            },
            {
                "item": 'gtceu:caminite_brick_ingot'
            },
            {
                "item": 'gtceu:diamond_plate'
            },
            {
                "item": 'gtceu:lead_plate'
            },
            {
                "item": 'gtceu:diamond_plate'
            }
        ],
        "inputFluid": "{Amount:125,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": 'kubejs:machine_core_1'
        },
        "processingTime": 200
    })
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'gtceu:copper_single_wire'
            }
        ],
        "inputFluid": "{Amount:144,FluidName:\"gtceu:rubber\"}",
        "output": {
            "count": 1,
            "item": 'gtceu:copper_single_cable'
        },
        "processingTime": 140
    })




    //格雷搅拌机转机霸搅拌机（ULV）
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

                    if (c.ingredient && c.ingredient.item)
                        inputs.push(c.ingredient.item)

                    if (c.ingredient && c.ingredient.tag)
                        inputs.push("#" + c.ingredient.tag)

                })

            if (j.inputs && j.inputs.fluid)
                j.inputs.fluid.forEach(f => {

                    let amount = f.content.amount

                    if (divideFluid)
                        amount = amount / 5

                    let fluid = ""

                    let v = f.content.value ? f.content.value[0] : null

                    if (v && v.tag) {

                        if (v.tag == "forge:water")
                            fluid = "minecraft:water"

                        else if (v.tag == "forge:lava")
                            fluid = "minecraft:lava"

                        else
                            fluid = v.tag.replace("forge:", "gtceu:")

                    }

                    else if (v && v.fluid)
                        fluid = v.fluid

                    if (fluid)
                        inputs.push(Fluid.of(fluid, amount))

                })

            if (j.outputs && j.outputs.item)
                j.outputs.item.forEach(o => {

                    let c = o.content
                    let item = c.ingredient.item
                    let count = c.count ? c.count : 1

                    if (count > 1)
                        outputs.push(Item.of(item, count))
                    else
                        outputs.push(item)

                })

            if (j.outputs && j.outputs.fluid)
                j.outputs.fluid.forEach(f => {

                    let amount = f.content.amount

                    if (divideFluid)
                        amount = amount / 5

                    let v = f.content.value ? f.content.value[0] : null

                    if (v && v.fluid)
                        outputs.push(Fluid.of(v.fluid, amount))

                })

            let duration = j.duration * 2

            e.recipes.create.mixing(outputs, inputs, duration)

        }

        catch (err) { }

    })

    //ULV研磨机换石磨
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

        }

        catch (err) { }

    })

    //ULV轧机做线材轧机0和1号电路
    e.forEachRecipe({ type: "gtceu:wiremill" }, r => {

        let j = JSON.parse(String(r.json))

        let eu = j.tickInputs.eu[0].content
        if (eu > 8) return

        let circuit = null
        let input = null

        j.inputs.item.forEach(i => {

            let c = i.content

            if (c.type == "gtceu:circuit") {
                circuit = c.configuration
                return
            }

            if (c.type == "gtceu:sized") {

                if (c.ingredient.tag) {

                    input = {
                        tag: c.ingredient.tag
                    }

                } else if (c.ingredient.item) {

                    input = {
                        item: c.ingredient.item
                    }

                }

            }

        })

        if (circuit != null && circuit != 1) return

        if (!input) return

        let out = j.outputs.item[0].content.ingredient.item
        let count = j.outputs.item[0].content.count

        e.custom({
            type: "createaddition:rolling",
            input: input,
            result: {
                item: out,
                count: count
            }
        })

    })

    //ULV动力锯做车床
    e.forEachRecipe({ type: "gtceu:lathe" }, r => {

        let j = JSON.parse(String(r.json))

        let eu = j.tickInputs.eu[0].content

        let c = j.inputs.item[0].content

        let input = null
        let ingotTag = false

        if (c.ingredient.item) {

            input = c.ingredient.item

        } else if (c.ingredient.tag) {

            input = "#" + c.ingredient.tag

            if (c.ingredient.tag.startsWith("forge:ingots/")) {
                ingotTag = true
            }

        }

        if (!input) return

        let duration = 0

        if (eu <= 8) {

            duration = j.duration * 4

        } else if (ingotTag && eu <= 32) {

            duration = j.duration * 6

        } else {

            return

        }

        let outputs = []

        j.outputs.item.forEach(o => {

            let count = o.content.count
            let item = o.content.ingredient.item

            if (count == 1) {

                outputs.push(item)

            } else {

                outputs.push(count + "x " + item)

            }

        })

        e.recipes.create.cutting(
            outputs,
            input,
            duration
        )

    })

    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'minecraft:dropper'
            },
            {
                "item": 'minecraft:dropper'
            }
        ],
        "inputFluid": "{Amount:3000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 16,
            "item": 'pipez:item_pipe'
        },
        "processingTime": 320
    })
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'mekanism:ingot_steel'
            },
            {
                "item": 'minecraft:bucket'
            },
            {
                "item": 'minecraft:bucket'
            }
        ],
        "inputFluid": "{Amount:3000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 16,
            "item": 'pipez:fluid_pipe'
        },
        "processingTime": 320
    })
    e.recipes.botania.pure_daisy('minecraft:lava', 'gtceu:creosote')
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'tconstruct:obsidian_pane'
        },
        "cast_consumed": true,
        "cooling_time": 100,
        "fluid": {
            "amount": 576,
            "fluid": "gtceu:steel"
        },
        "result": 'oritong:steel_upgrade_smithing_template'
    })
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'oritong:steel_upgrade_smithing_template'
            },
            {
                "item": 'tconstruct:obsidian_pane'
            }
        ],
        "inputFluid": "{Amount:144,FluidName:\"gtceu:steel\"}",
        "output": {
            "count": 2,
            "item": 'oritong:steel_upgrade_smithing_template'
        },
        "processingTime": 80
    })
    e.recipes.mekanism.metallurgic_infusing('oritong:diamond_upgrade_smithing_template', 'gtceu:dense_steel_plate', '540x mekanism:diamond')
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'oritong:diamond_upgrade_smithing_template'
            },
            {
                "item": 'gtceu:steel_plate'
            }
        ],
        "inputFluid": "{Amount:100,FluidName:\"tconstruct:molten_diamond\"}",
        "output": {
            "count": 2,
            "item": 'oritong:diamond_upgrade_smithing_template'
        },
        "processingTime": 100
    })
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": 'tconstruct:casts/single_use/gem'
        },
        "cast_consumed": true,
        "cooling_time": 180,
        "fluid": {
            "amount": 100,
            "fluid": "tconstruct:molten_glass"
        },
        "result": 'gtceu:glass_tube'
    })
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": 'tconstruct:casts/multi_use/gem'
        },
        "cast_consumed": false,
        "cooling_time": 180,
        "fluid": {
            "amount": 100,
            "fluid": "tconstruct:molten_glass"
        },
        "result": 'gtceu:glass_tube'
    })
    e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'gtceu:steel_bolt'
            },
            {
                "item": 'gtceu:steel_bolt'
            },
            {
                "item": 'gtceu:copper_single_wire'
            },
            {
                "item": 'gtceu:copper_single_wire'
            },
            {
                "item": 'gtceu:copper_single_wire'
            },
            {
                "item": 'gtceu:glass_tube'
            }
        ],
        "inputFluid": "{Amount:9,FluidName:\"gtceu:red_alloy\"}",
        "output": {
            "count": 1,
            "item": 'kubejs:raw_vacuum_tube'
        },
        "processingTime": 140
    })
    e.recipes.create.compacting(['tconstruct:plate_cast', 'gtceu:stone_plate'], ['2x gtceu:stone_dust', 'tconstruct:plate_cast'])
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'tgears:whisk_cast_with_part'
        },
        "cast_consumed": true,
        "cooling_time": 250,
        "fluid": {
            "amount": 1296,
            "fluid": "gtceu:iron"
        },
        "result": 'tgears:whisk_cast_with_whisk'
    })
    e.recipes.create.filling('tgears:whisk_cast_with_whisk', [Fluid.of('gtceu:iron', 1296), 'tgears:whisk_cast_with_part'])
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'tgears:hand_cast_with_part'
        },
        "cast_consumed": true,
        "cooling_time": 250,
        "fluid": {
            "amount": 1296,
            "fluid": "gtceu:brass"
        },
        "result": 'tgears:hand_cast_with_brass_hand'
    })
    e.recipes.create.filling('tgears:hand_cast_with_brass_hand', [Fluid.of('gtceu:brass', 1296), 'tgears:hand_cast_with_part'])
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'create:brass_hand'
        },
        "cast_consumed": false,
        "cooling_time": 100,
        "fluid": {
            "amount": 144,
            "fluid": "gtceu:gold"
        },
        "result": 'tgears:hand_cast_with_brass_hand'
    })
    e.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'create:whisk'
        },
        "cast_consumed": false,
        "cooling_time": 100,
        "fluid": {
            "amount": 144,
            "fluid": "gtceu:gold"
        },
        "result": 'tgears:whisk_cast_with_whisk'
    })

    e.recipes.create.milling(Item.of('minecraft:redstone').withChance(0.2), 'gtceu:cinnabar_dust')
    e.recipes.create.filling('kubejs:watered_raw_vacuum_tube', ['kubejs:raw_vacuum_tube', Fluid.of('minecraft:water', 500)])
    e.recipes.create.emptying(['gtceu:vacuum_tube', Fluid.of('minecraft:water', 500)], 'kubejs:watered_raw_vacuum_tube')
})