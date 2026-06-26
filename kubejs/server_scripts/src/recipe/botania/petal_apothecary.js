ServerEvents.recipes(e => {
    e.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
            {"tag": 'forge:dyes/white'},{"tag": 'forge:dyes/white'},{"tag": 'forge:dyes/white'},{"tag": 'forge:dyes/white'},
            {"item": 'mysticalagriculture:soul_dust'}
        ],
        "output": {"item": 'botania:pure_daisy'},
        "reagent": {"item": 'kubejs:the_source_of_the_earth'}
    })
})
