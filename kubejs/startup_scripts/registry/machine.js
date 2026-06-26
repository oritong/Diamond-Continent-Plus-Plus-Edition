GTCEuStartupEvents.registry('gtceu:machine', e => {
    e.create('glimmer_collector', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('glimmer_collector')
        )
        .tankScalingFunction(tier => tier * 3200)
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
})