ServerEvents.recipes(e => {
    let circuits = [
        ['ulv', 1],
        ['lv', 2],
        ['mv', 3],
        ['hv', 4],
        ['ev', 5],
        ['iv', 6],
        ['luv', 7],
        ['zpm', 8],
        ['uv', 9],
        ['uhv', 10],
        ['uev', 11],
        ['uiv', 12],
        ['uxv', 13],
        ['opv', 14],
        ['max', 15]
    ]
    circuits.forEach(([tier, level]) => {
        e.recipes.gtceu.packer().itemInputs(`#gtceu:circuits/${tier}`).itemOutputs(`kubejs:general_circuit_${tier}`).circuit(13).duration(level * 2 * 20).EUt(level * 4)
    })
})
