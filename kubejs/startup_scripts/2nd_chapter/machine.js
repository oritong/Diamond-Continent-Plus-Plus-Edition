GTCEuStartupEvents.registry('gtceu:machine', e => {
    e.create('enrichment_chamber', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('enrichment_chamber')
        )
        .tankScalingFunction(tier => tier * 1500)
    e.create('infused_extracter', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('infused_extracter')
        )
        .tankScalingFunction(tier => tier * 800)
    e.create('enrichment_infuser', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('enrichment_infuser')
        )
        .tankScalingFunction(tier => tier * 800)
    // e.create('slurry_power_generator', 'simple')
    // .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
    // .definition((tier, builder) =>
    //         builder
    //             .rotationState(RotationState.NON_Y_AXIS)
    //             .recipeType('slurry_power_generation')
    //     )
    //     .tankScalingFunction(tier => tier * 15000)
})