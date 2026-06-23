GTCEuStartupEvents.registry('gtceu:recipe_type', e=>{
    e.create('glimmer_collector').setEUIO('in').setMaxIOSize(1, 0, 0, 1).setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY).setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT).setSound(GTSoundEntries.BOILER)
})