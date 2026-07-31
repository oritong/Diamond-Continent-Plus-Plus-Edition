ServerEvents.recipes(e => {
    function registerPipePacking(type) {
        let tiers = [
            'tiny_' + type,
            'small_' + type,
            'medium_' + type,
            'large_' + type,
            'huge_' + type
        ]

        for (let i = 0; i < tiers.length; i++) {
            for (let j = 0; j < tiers.length; j++) {
                if (i == j) continue

                let amount = 4 ** Math.abs(i - j)

                e.recipes.gtceu.packer()
                    .itemInputs(`${i < j ? amount : 1}x curvy_pipes:${tiers[i]}`)
                    .itemOutputs(`${i < j ? 1 : amount}x curvy_pipes:${tiers[j]}`)
                    .circuit(j + 1)
                    .EUt(16)
                    .duration(4 * 20)
            }
        }
    }
    registerPipePacking('item_pipe')
    registerPipePacking('fluid_pipe')
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
