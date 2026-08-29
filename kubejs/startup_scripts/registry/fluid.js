const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
let addFluid = (mat, key) => {
    let prop = new $FluidProperty();
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
    mat.setProperty(PropertyKey.FLUID, prop);
}
const PURIFIED_WATER_COLORS = [
    0x0058cd,
    0x2374d8,
    0x4a91e1,
    0x73ace8,
    0x9bc6ef,
    0xc0dcf5,
    0xe1eef9,
    0xfafdff
]
StartupEvents.registry('fluid', e => {
    e.create('oritong:glimmer').thinTexture(0xddffbf).viscosity(100).luminosity(4).tag('oritong:glimmer')
})
GTCEuStartupEvents.registry('gtceu:material', e => {
    addFluid(GTMaterials.Iodine, $FluidStorageKeys.GAS)
    addFluid(GTMaterials.Strontium, $FluidStorageKeys.LIQUID)
    addFluid(GTMaterials.Terbium, $FluidStorageKeys.LIQUID)
    addFluid(GTMaterials.Hafnium, $FluidStorageKeys.LIQUID)
    addFluid(GTMaterials.Gadolinium, $FluidStorageKeys.LIQUID)
    addFluid(GTMaterials.Zirconium, $FluidStorageKeys.LIQUID)
    addFluid(GTMaterials.Holmium, $FluidStorageKeys.LIQUID)
    addFluid(GTMaterials.Erbium, $FluidStorageKeys.LIQUID)

    e.create('enriched_redstone').liquid().color(0xe60000)
    e.create('diamond_ore_leachate').liquid().color(0xb7fff7)
    e.create('enriched_diamond').liquid().color(0x00f0ff)
    e.create('enriched_obsidian').liquid().color(0x5c009c)
    e.create('sodium_hydroxide_solution').liquid().color(0x80f0f0)
    e.create('absolute_ethanol').liquid().color(0xffa500).components("2x carbon", "6x hydrogen", "1x oxygen")
    e.create('silica_gel_matrix').liquid().color(0x006060)
    e.create('ethyl_chloroacetate').liquid().color(0xe0f0ff).components("4x carbon", "7x hydrogen", "1x chlorine", "2x oxygen")
    e.create('polyethyl_acetate_mixture').liquid().color(0xffe8a0)
    e.create('diethyl_malonate').liquid().color(0xd0e8ff).components("7x carbon", "12x hydrogen", "4x oxygen")
    e.create('ethyl_cyanoacetate').liquid().color(0xf0ffe0).components("5x carbon", "7x hydrogen", "1x nitrogen", "2x oxygen")
    e.create('ethyl_cyanoacrylate').liquid().color(0xc8e8ff).components("6x carbon", "7x hydrogen", "1x nitrogen", "2x oxygen")
    e.create('pyridine').liquid().color(0xe8e0d0).components("5x carbon", "5x hydrogen", "1x nitrogen")
    e.create('cobalt_nitrate_solution').liquid().color(0xe04040)
    e.create('light_oil_fraction').liquid().color(0xe8d080)
    e.create('ammonia_solution').liquid().color(0xd8e8f8)
    e.create('crude_light_pyridine').liquid().color(0xb88030)
    e.create('benzene_crude_pyridine').liquid().color(0x906020)
    e.create('azeotropic_crude_pyridine').liquid().color(0xc09840)
    e.create('refined_crude_pyridine').liquid().color(0xd8b850)
    e.create('acetonitrile').liquid().color(0xe8f0e8).components("2x carbon", "3x hydrogen", "1x nitrogen")
    e.create('palladium_nitrate').liquid().color(0xe8a08a).components("1x palladium", "2x nitrogen", "6x oxygen")
    e.create('benzyl_chloride').liquid().color(0x006400).components("7x carbon", "7x hydrogen", "1x chlorine")
    e.create('benzylamine_hydrochloride').liquid().color(0x90ee90).components("7x carbon", "10x hydrogen", "1x chlorine", "1x nitrogen")
    e.create('benzylamine').liquid().color(0xf0e060).components("7x carbon", "9x hydrogen", "1x nitrogen")
    e.create('dried_benzylamine').liquid().color(0xf5ee80)
    e.create('refined_benzylamine').liquid().color(0xfaf0a0)
    e.create('bromobenzene').liquid().color(0x400000).components("6x carbon", "5x hydrogen", "1x bromine")
    e.create('hydrobromic_acid').liquid().color(0xff6060).components("1x hydrogen", "1x bromine")
    e.create('ethylene_oxide').liquid().color(0x00ffff).components("2x carbon", "4x hydrogen", "1x oxygen")
    e.create('wet_ethylene_oxide').liquid().color(0x0080ff)
    e.create('silver_nitrate').liquid().color(0xd0d0ff).components("1x silver", "1x nitrogen", "3x oxygen")
    e.create('fuming_sulfuric_acid').liquid().color(0xf0e080).components("2x hydrogen", "2x sulfur", "7x oxygen")
    e.create('fuming_nitric_acid').liquid().color(0xe0a000).components("1x hydrogen", "1x nitrogen", "3x oxygen")
    e.create('fuming_nitric_acid_mixture').liquid().color(0xd09000)
    e.create('ethylene_glycol').liquid().color(0xc8a070).components("2x carbon", "6x hydrogen", "2x oxygen")
    e.create('gaseous_ethylene_glycol').gas().color(0xc8a070)
    e.create('glyoxal').liquid().color(0xd0c000).components("2x carbon", "2x hydrogen", "2x oxygen")
    e.create('pink_glimmer').liquid().color(0xe47ca9)
    e.create('meteor_slurry').liquid().color(0x1a1a1a)
    e.create('excited_meteor_slurry').liquid().color(0xffaa00)
    e.create('excited_space_fluid').liquid().color(0x004040)
    e.create('space_glimmer_mixture').liquid().color(0x7fff00)
    e.create('monazite_rare_earth_turbid_slurry').liquid().color(0x8b5a2b).components("1x lanthanum", "1x cerium", "1x neodymium", "1x thorium", "1x phosphorus", "4x oxygen", "1x hydrogen", "1x nitrogen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('diluted_monazite_rare_earth_mud_slurry').liquid().color(0xa58b6a).components("1x lanthanum", "1x cerium", "1x neodymium", "1x thorium", "1x phosphorus", "5x oxygen", "3x hydrogen", "1x nitrogen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('zirconium_tetrachloride_solution').liquid().color(0x4f3835).components("1x zirconium", "4x chlorine", "2x hydrogen", "1x oxygen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('hafnium_tetrachloride_solution').liquid().color(0x4f3835).components("1x hafnium", "4x chlorine", "2x hydrogen", "1x oxygen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('diluted_sulfuric_monazite_solution').liquid().color(0xc69a62).components("1x lanthanum", "1x cerium", "1x neodymium", "2x hydrogen", "1x sulfur", "4x oxygen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('ammonium_nitrate_solution').liquid().color(0xc0c0c0).components("2x nitrogen", "4x hydrogen", "3x oxygen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('concentrated_nitrated_monazite_rare_earth_solution').liquid().color(0xb58a3e).components("1x lanthanum", "1x cerium", "1x neodymium", "3x nitrogen", "9x oxygen", "3x hydrogen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('nitric_monazite_leaching_mixture').liquid().color(0x121212).components("1x lanthanum", "1x cerium", "1x neodymium", "3x nitrogen", "9x oxygen", "3x hydrogen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('concentrated_nitric_monazite_leach_solution').liquid().color(0xb58a3e).components("1x lanthanum", "1x cerium", "1x neodymium", "3x nitrogen", "9x oxygen", "3x hydrogen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('oxalic_acid').liquid().color(0xd4e8d0).components("2x carbon", "2x hydrogen", "4x oxygen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('fluorosilicic_acid').liquid().color(0xd8f0e6).components("2x hydrogen", "1x silicon", "6x fluorine").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('fluorocarbon_lanthanum_cerium_rare_earth_turbid_slurry').liquid().color(0xb07c32).components("1x lanthanum", "1x cerium", "1x neodymium", "1x samarium", "1x terbium", "1x holmium", "6x carbon", "19x oxygen", "6x fluorine", "1x hydrogen", "1x nitrogen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('steam_cracked_fluorocarbon_lanthanum_cerium_slurry').liquid().color(0x9e702d).components("1x lanthanum", "1x cerium", "1x neodymium", "1x samarium", "1x terbium", "1x holmium", "6x carbon", "19x oxygen", "6x fluorine", "3x hydrogen", "1x nitrogen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('prepared_fluorocarbon_lanthanum_cerium_slurry').liquid().color(0x8d7d42).components("1x lanthanum", "1x cerium", "1x neodymium", "1x samarium", "1x terbium", "1x holmium", "6x carbon", "1x sodium", "1x silicon", "19x oxygen", "12x fluorine", "3x hydrogen", "1x nitrogen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('diluted_fluorocarbon_lanthanum_cerium_slurry').liquid().color(0xb79e72).components("1x lanthanum", "1x cerium", "1x neodymium", "1x samarium", "1x terbium", "1x holmium", "6x carbon", "1x sodium", "1x silicon", "22x oxygen", "12x fluorine", "5x hydrogen", "1x nitrogen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('filtered_fluorocarbon_lanthanum_cerium_slurry').liquid().color(0x9b7a4c).components("1x lanthanum", "1x cerium", "1x neodymium", "1x samarium", "1x terbium", "1x holmium", "6x carbon", "18x oxygen", "6x fluorine", "5x hydrogen", "1x nitrogen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('fluorocarbon_lanthanum_cerium_residual_rare_earth_oxide_suspension').liquid().color(0x877653).components("1x lanthanum", "1x neodymium", "1x samarium", "1x terbium", "1x holmium", "3x carbon", "6x hydrogen", "9x oxygen", "3x nitrogen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('nitrated_fluorocarbon_lanthanum_cerium_residual_rare_earth_oxide').liquid().color(0x8c9e58).components("1x lanthanum", "1x neodymium", "1x samarium", "1x terbium", "1x holmium", "3x nitrogen", "11x oxygen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('diluted_acetone').liquid().color(0xdbe7ee).components("3x carbon", "6x hydrogen", "1x oxygen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    e.create('hydrated_ammonium_nitrate_slurry').liquid().color(0xd4d8cc).components("2x nitrogen", "6x hydrogen", "4x oxygen").flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    for (let index = 1; index <= 8; index++) {
        e.create("grade_" + index + "_purified_water")
            .fluid()
            .components("1x minecraft:water")
            .color(PURIFIED_WATER_COLORS[index - 1])
            .iconSet(GTMaterialIconSet.FLUID)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    }
})
