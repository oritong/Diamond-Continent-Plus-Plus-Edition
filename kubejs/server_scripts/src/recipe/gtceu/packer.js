ServerEvents.recipes(e => {
    let circuits = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv', 'max']
    circuits.forEach((a, n) => {
        let tier = n + 1
        e.recipes.gtceu.packer().itemInputs(`#gtceu:circuits/${a}`).itemOutputs(`kubejs:general_circuit_${a}`).circuit(13).duration(tier * 2 * 20).EUt(tier * 4)
    })
    let packet_round = [
        ['sfm:manager', 'sfm:tunnelled_manager']
    ]
    packet_round.forEach(([a, b]) => {
        e.recipes.gtceu.packer().itemInputs(a).itemOutputs(b).duration(20).EUt(12)
        e.recipes.gtceu.packer().itemInputs(b).itemOutputs(a).duration(20).EUt(12)
    })
    let packet_procced = [
    ]
    packet_procced.forEach(([a, b]) => {
        e.recipes.gtceu.packer().itemInputs(a).itemOutputs(b).duration(20).EUt(12)
    })
    e.recipes.gtceu.packer().itemInputs('sfm:cable').itemOutputs('sfm:tunnelled_cable').duration(20).EUt(12).circuit(1)
    e.recipes.gtceu.packer().itemInputs('sfm:cable').itemOutputs('sfm:tough_cable').duration(20).EUt(12).itemInputs('gtceu:small_obsidian_dust')
    e.recipes.gtceu.packer().itemInputs('sfm:tough_cable').itemOutputs('sfm:tunnelled_cable').duration(20).EUt(12).circuit(1)
    e.recipes.gtceu.packer().itemInputs('sfm:tough_cable').itemOutputs('sfm:cable').duration(20).EUt(12).circuit(2)
    e.recipes.gtceu.packer().itemInputs('sfm:tunnelled_cable').itemOutputs('sfm:tough_cable').duration(20).EUt(12).itemInputs('gtceu:small_obsidian_dust')
    e.recipes.gtceu.packer().itemInputs('sfm:tunnelled_cable').itemOutputs('sfm:cable').duration(20).EUt(12).circuit(2)
    e.recipes.gtceu.packer().itemInputs('sfm:fancy_cable').itemOutputs('sfm:tunnelled_fancy_cable').duration(20).EUt(12).circuit(1)
    e.recipes.gtceu.packer().itemInputs('sfm:fancy_cable').itemOutputs('sfm:tough_fancy_cable').duration(20).EUt(12).itemInputs('gtceu:small_obsidian_dust')
    e.recipes.gtceu.packer().itemInputs('sfm:tough_fancy_cable').itemOutputs('sfm:tunnelled_fancy_cable').duration(20).EUt(12).circuit(1)
    e.recipes.gtceu.packer().itemInputs('sfm:tough_fancy_cable').itemOutputs('sfm:fancy_cable').duration(20).EUt(12).circuit(2)
    e.recipes.gtceu.packer().itemInputs('sfm:tunnelled_fancy_cable').itemOutputs('sfm:tough_fancy_cable').duration(20).EUt(12).itemInputs('gtceu:small_obsidian_dust')
    e.recipes.gtceu.packer().itemInputs('sfm:tunnelled_fancy_cable').itemOutputs('sfm:fancy_cable').duration(20).EUt(12).circuit(2)
    e.recipes.gtceu.packer().itemInputs('sfm:fancy_cable').itemOutputs('sfm:cable').duration(20).EUt(12).circuit(3)
    e.recipes.gtceu.packer().itemInputs('sfm:tough_fancy_cable').itemOutputs('sfm:tough_cable').duration(20).EUt(12).circuit(3)
    e.recipes.gtceu.packer().itemInputs('sfm:tunnelled_fancy_cable').itemOutputs('sfm:tunnelled_cable').duration(20).EUt(12).circuit(3)
})
