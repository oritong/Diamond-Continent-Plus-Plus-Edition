GTCEuStartupEvents.registry('gtceu:machine', e => {
    e.create('glimmer_collector', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType('glimmer_collector')
        )
        .tankScalingFunction(tier => tier * 3200)
})