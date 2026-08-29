//切割机
let purifiedWaterCutting = [
    ['gtceu:qbit_cpu_wafer', '4x gtceu:qbit_cpu_chip', 1920, 45, 1]
]
// [物品输入, 物品输出, EU/t, 基础时间(秒), 净化水起始等级]
ServerEvents.recipes(e => {
    purifiedWaterCutting.forEach(recipe => {
        let inputItem = recipe[0]
        let outputItem = recipe[1]
        let eu = recipe[2]
        let baseDuration = recipe[3]
        let startingGrade = recipe[4]

        for (let grade = startingGrade; grade <= 8; grade++) {
            let multiplier = Math.pow(2 / 3, grade - startingGrade)

            let waterAmount = Math.max(1, Math.floor(125 * multiplier))
            let duration = Math.max(1, Math.floor(baseDuration * multiplier))

            e.recipes.gtceu.cutter()
                .itemInputs(inputItem)
                .inputFluids(
                    Fluid.of(
                        `gtceu:grade_${grade}_purified_water`,
                        waterAmount
                    )
                )
                .itemOutputs(outputItem)
                .EUt(eu)
                .duration(duration * 20)
                .cleanroom(CleanroomType.CLEANROOM)
        }
    })
})