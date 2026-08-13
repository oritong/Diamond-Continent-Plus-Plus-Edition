ServerEvents.recipes(e => {
    //独居石↓
    e.recipes.gtceu.digester().itemInputs('2x gtceu:crushed_monazite_ore').inputFluids(Fluid.of('gtceu:nitric_acid', 700)).itemOutputs('gtceu:silicon_dioxide_dust').outputFluids(Fluid.of('gtceu:monazite_rare_earth_turbid_slurry', 400)).EUt(1920).duration(20 * 20)
    e.recipes.gtceu.dissolving_tank().itemInputs('9x gtceu:saltpeter_dust').inputFluids(Fluid.of('gtceu:monazite_rare_earth_turbid_slurry', 9000), Fluid.of('minecraft:water', 90000)).itemOutputs('4x gtceu:hafnium_zirconium_oxide_mixture_dust', '9x gtceu:thorite_dust', '2x gtceu:monazite_dust').outputFluids(Fluid.of('gtceu:diluted_monazite_rare_earth_mud_slurry', 99000)).EUt(480).duration(405 * 20)
    e.recipes.gtceu.centrifuge().itemInputs('gtceu:hafnium_zirconium_oxide_mixture_dust').itemOutputs('3x gtceu:hafnium_oxide_dust', '3x gtceu:zirconium_oxide_dust').EUt(1920).duration(30 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('3x gtceu:thorite_dust', '2x gtceu:magnesium_dust').itemOutputs('gtceu:thorium_dust', '4x gtceu:magnesia_dust').EUt(30).duration(50 * 20)
    e.recipes.gtceu.chemical_bath().itemInputs('3x gtceu:zirconium_oxide_dust').inputFluids(Fluid.of('gtceu:hydrochloric_acid', 4000)).itemOutputs('5x gtceu:zirconium_tetrachloride_dust').outputFluids(Fluid.of('minecraft:water', 2000)).EUt(30).duration(15 * 20)
    e.recipes.gtceu.chemical_bath().itemInputs('3x gtceu:hafnium_oxide_dust').inputFluids(Fluid.of('gtceu:hydrochloric_acid', 4000)).itemOutputs('5x gtceu:hafnium_tetrachloride_dust').outputFluids(Fluid.of('minecraft:water', 2000)).EUt(30).duration(15 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('5x gtceu:zirconium_tetrachloride_dust').inputFluids(Fluid.of('minecraft:water', 1000)).outputFluids(Fluid.of('gtceu:zirconium_tetrachloride_solution', 1000)).EUt(30).duration(10 * 20)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('2x gtceu:magnesium_dust').inputFluids(Fluid.of('gtceu:zirconium_tetrachloride_solution', 1000)).itemOutputs('gtceu:hot_zirconium_ingot', '6x gtceu:magnesium_chloride_dust').EUt(1920).duration(30 * 20).circuit(2).blastFurnaceTemp(4500)
    e.recipes.gtceu.chemical_reactor().itemInputs('5x gtceu:hafnium_tetrachloride_dust').inputFluids(Fluid.of('minecraft:water', 1000)).outputFluids(Fluid.of('gtceu:hafnium_tetrachloride_solution', 1000)).EUt(30).duration(10 * 20)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('2x gtceu:magnesium_dust').inputFluids(Fluid.of('gtceu:hafnium_tetrachloride_solution', 1000)).itemOutputs('6x gtceu:magnesium_chloride_dust', 'gtceu:low_purity_hafnium_dust').EUt(1920).duration(30 * 20).circuit(2).blastFurnaceTemp(2700)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:low_purity_hafnium_dust').inputFluids(Fluid.of('gtceu:iodine', 4000)).itemOutputs('5x gtceu:hafnium_iodide_dust').EUt(30).duration(15 * 20).circuit(1)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('45x gtceu:hafnium_iodide_dust').itemOutputs('9x gtceu:hafnium_ingot', 'gtceu:hafnium_waste_dust').outputFluids(Fluid.of('gtceu:iodine', 36000)).EUt(480).duration(241.5 * 20).circuit(13).blastFurnaceTemp(3400)
    e.recipes.gtceu.centrifuge().inputFluids(Fluid.of('gtceu:diluted_monazite_rare_earth_mud_slurry', 1000)).chancedOutput('gtceu:monazite_sulfate_dust', 9000, 0).chancedOutput('gtceu:silicon_dioxide_dust', 7500, 0).chancedOutput('gtceu:rutile_dust', 2000, 0).chancedOutput('gtceu:ilmenite_dust', 2000, 0).chancedOutput('gtceu:red_zircon_dust', 500, 0).EUt(240).duration(20 * 20)
    e.recipes.gtceu.electrolyzer().itemInputs('6x gtceu:red_zircon_dust').itemOutputs('gtceu:silicon_dioxide_dust', 'gtceu:zirconium_dust').outputFluids(Fluid.of('gtceu:oxygen', 2000)).EUt(90).duration(12.5 * 20)
    e.recipes.gtceu.mixer().itemInputs('gtceu:monazite_sulfate_dust').inputFluids(Fluid.of('minecraft:water', 6000)).outputFluids(Fluid.of('gtceu:diluted_sulfuric_monazite_solution', 7000)).EUt(400).duration(24 * 20)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:nitric_acid', 1000), Fluid.of('gtceu:ammonia', 1000)).outputFluids(Fluid.of('gtceu:ammonium_nitrate_solution', 1000)).EUt(400).duration(1.5 * 20).circuit(12)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:diluted_sulfuric_monazite_solution', 9000), Fluid.of('gtceu:ammonium_nitrate_solution', 1800)).itemOutputs('3x gtceu:acidic_monazite_dust').EUt(480).duration(216 * 20).circuit(14)
    e.recipes.gtceu.sifter().itemInputs('gtceu:acidic_monazite_dust').chancedOutput('gtceu:monazite_rare_earth_residue_dust', 9000, 0).chancedOutput('gtceu:thorium_phosphate_filter_cake_dust', 7000, 0).EUt(240).duration(30 * 20)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('gtceu:thorium_phosphate_filter_cake_dust').itemOutputs('gtceu:thorium_phosphate_concentrate_dust').EUt(120).duration(15 * 20).blastFurnaceTemp(1500)
    e.recipes.gtceu.thermal_centrifuge().itemInputs('gtceu:thorium_phosphate_concentrate_dust').itemOutputs('gtceu:phosphate_dust', 'gtceu:thorium_dust').EUt(480).duration(10 * 20)
    e.recipes.gtceu.chemical_bath().itemInputs('gtceu:monazite_rare_earth_residue_dust').inputFluids(Fluid.of('gtceu:ammonium_nitrate_solution', 320)).itemOutputs('gtceu:neutralized_monazite_rare_earth_residue_dust').EUt(240).duration(6 * 20)
    e.recipes.gtceu.sifter().itemInputs('gtceu:neutralized_monazite_rare_earth_residue_dust').chancedOutput('gtceu:concentrated_monazite_hydroxide_dust', 9000, 0).chancedOutput('gtceu:uranium_residue_dust', 5000, 0).chancedOutput('gtceu:uranium_residue_dust', 4000, 0).EUt(480).duration(40 * 20)
    e.recipes.gtceu.chemical_bath().itemInputs('gtceu:uranium_residue_dust').inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 100)).itemOutputs('gtceu:neutralized_uranium_residue_dust').EUt(120).duration(18 * 20)
    e.recipes.gtceu.sifter().itemInputs('gtceu:neutralized_uranium_residue_dust').chancedOutput('gtceu:uranium_dust', 4500, 0).chancedOutput('gtceu:uranium_dust', 4000, 0).chancedOutput('gtceu:uranium_dust', 3000, 0).chancedOutput('gtceu:uranium_235_dust', 3000, 0).chancedOutput('gtceu:uranium_235_dust', 2000, 0).EUt(30).duration(50 * 20)
    e.recipes.gtceu.dehydrator().itemInputs('gtceu:concentrated_monazite_hydroxide_dust').itemOutputs('gtceu:dried_concentrated_monazite_rare_earth_dust').EUt(120).duration(15 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:dried_concentrated_monazite_rare_earth_dust').inputFluids(Fluid.of('gtceu:nitric_acid', 500)).outputFluids(Fluid.of('gtceu:concentrated_nitrated_monazite_rare_earth_solution', 1000)).EUt(480).duration(25 * 20)
    e.recipes.gtceu.mixer().inputFluids(Fluid.of('gtceu:concentrated_nitrated_monazite_rare_earth_solution', 1000), Fluid.of('minecraft:water', 1000)).outputFluids(Fluid.of('gtceu:nitric_monazite_leaching_mixture', 1000)).EUt(120).duration(10 * 20)
    e.recipes.gtceu.centrifuge().inputFluids(Fluid.of('gtceu:nitric_monazite_leaching_mixture', 1000)).chancedOutput('gtceu:cerium_dioxide_dust', 1100, 0).outputFluids(Fluid.of('gtceu:concentrated_nitric_monazite_leach_solution', 1000)).EUt(240).duration(20 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('3x gtceu:cerium_dioxide_dust').inputFluids(Fluid.of('gtceu:hydrogen', 1000), Fluid.of('gtceu:ammonium_chloride', 3000)).itemOutputs('4x gtceu:cerium_chloride_dust').outputFluids(Fluid.of('gtceu:steam', 2000), Fluid.of('gtceu:ammonia', 3000)).EUt(450).duration(15 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('8x gtceu:cerium_chloride_dust').inputFluids(Fluid.of('gtceu:oxalic_acid', 3000)).itemOutputs('5x gtceu:cerium_oxalate_dust').outputFluids(Fluid.of('gtceu:hydrochloric_acid', 6000)).EUt(450).duration(15 * 20).circuit(1)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('5x gtceu:cerium_oxalate_dust', '3x gtceu:carbon_dust').itemOutputs('5x gtceu:cerium_oxide_iii_dust').outputFluids(Fluid.of('gtceu:carbon_monoxide', 9000)).EUt(480).duration(10 * 20).blastFurnaceTemp(800)
    e.recipes.gtceu.chemical_reactor().itemInputs('24x minecraft:sugar').inputFluids(Fluid.of('gtceu:nitric_acid', 6000)).notConsumable('gtceu:vanadium_pentoxide_dust').outputFluids(Fluid.of('gtceu:oxalic_acid', 3000), Fluid.of('gtceu:nitric_oxide', 6000)).EUt(120).duration(30 * 20).circuit(1)
    e.recipes.gtceu.vacuum_freezer().inputFluids(Fluid.of('gtceu:concentrated_nitric_monazite_leach_solution', 1000)).itemOutputs('gtceu:cooled_concentrated_nitric_monazite_leach_dust').EUt(240).duration(5 * 20)
    e.recipes.gtceu.electromagnetic_separator().itemInputs('gtceu:cooled_concentrated_nitric_monazite_leach_dust').chancedOutput('gtceu:monazite_rare_earth_precipitate_dust', 9000, 0).chancedOutput('5x gtceu:europium_oxide_iii_dust', 500, 0).EUt(1920).duration(30 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('5x gtceu:europium_oxide_iii_dust', 'gtceu:europium_dust').itemOutputs('6x gtceu:europium_oxide_dust').EUt(8400).duration(15 * 20)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('gtceu:monazite_rare_earth_precipitate_dust').inputFluids(Fluid.of('gtceu:chlorine', 1000)).itemOutputs('gtceu:heterogeneous_monazite_rare_earth_halide_mixture_dust').EUt(480).duration(25 * 20).blastFurnaceTemp(1200)
    e.recipes.gtceu.mixer().itemInputs('gtceu:heterogeneous_monazite_rare_earth_halide_mixture_dust', 'mekanism:salt').inputFluids(Fluid.of('gtceu:acetone', 1000)).itemOutputs('gtceu:saturated_monazite_rare_earth_dust').EUt(240).duration(10 * 20)
    e.recipes.gtceu.centrifuge().itemInputs('4x gtceu:saturated_monazite_rare_earth_dust').itemOutputs('3x gtceu:samarium_precipitate_dust').outputFluids(Fluid.of('gtceu:chloromethane', 400)).EUt(1920).duration(157.5 * 20)
    e.recipes.gtceu.sifter().itemInputs('3x gtceu:samarium_precipitate_dust').itemOutputs('2x gtceu:samarium_dust', 'gtceu:gadolinium_dust').EUt(1920).duration(6.65 * 20)

    //氟碳镧铈↓
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:silicon_dust').inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 6000)).outputFluids(Fluid.of('gtceu:fluorosilicic_acid', 1000), Fluid.of('gtceu:hydrogen', 4000)).EUt(120).duration(20 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('4x mekanism:salt').inputFluids(Fluid.of('gtceu:fluorosilicic_acid', 1000)).itemOutputs('1000x gtceu:sodium_fluorosilicate_dust').outputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000)).EUt(450).duration(30 * 20)
    e.recipes.gtceu.digester().itemInputs('2x gtceu:crushed_bastnasite_ore').inputFluids(Fluid.of('gtceu:nitric_acid', 700)).itemOutputs('gtceu:silicon_dioxide_dust').outputFluids(Fluid.of('gtceu:fluorocarbon_lanthanum_cerium_rare_earth_turbid_slurry', 400)).EUt(1920).duration(20 * 20)
    e.recipes.gtceu.cracker().inputFluids(Fluid.of('gtceu:fluorocarbon_lanthanum_cerium_rare_earth_turbid_slurry', 1000), Fluid.of('gtceu:steam', 1000)).outputFluids(Fluid.of('gtceu:steam_cracked_fluorocarbon_lanthanum_cerium_slurry', 2000)).EUt(480).duration(30 * 20).circuit(1)
    e.recipes.gtceu.mixer().itemInputs('320x gtceu:sodium_fluorosilicate_dust').inputFluids(Fluid.of('gtceu:steam_cracked_fluorocarbon_lanthanum_cerium_slurry', 1000)).outputFluids(Fluid.of('gtceu:prepared_fluorocarbon_lanthanum_cerium_slurry', 1320)).EUt(120).duration(40 * 20).circuit(6)
    e.recipes.gtceu.dissolving_tank().itemInputs('gtceu:saltpeter_dust').inputFluids(Fluid.of('gtceu:prepared_fluorocarbon_lanthanum_cerium_slurry', 1000), Fluid.of('minecraft:water', 10000)).itemOutputs('gtceu:gangue_dust_dust').outputFluids(Fluid.of('gtceu:diluted_fluorocarbon_lanthanum_cerium_slurry', 11000)).EUt(1920).duration(50 * 20)
    e.recipes.gtceu.centrifuge().notConsumable('gtceu:fluid_filter').inputFluids(Fluid.of('gtceu:diluted_fluorocarbon_lanthanum_cerium_slurry', 1000)).chancedOutput('gtceu:silicon_dioxide_dust', 9000, 0).chancedOutput('gtceu:rutile_dust', 7500, 0).chancedOutput('gtceu:red_zircon_dust', 1000, 0).chancedOutput('gtceu:ilmenite_dust', 500, 0).outputFluids(Fluid.of('gtceu:filtered_fluorocarbon_lanthanum_cerium_slurry', 400)).EUt(240).duration(20 * 20)
    e.recipes.gtceu.electric_blast_furnace().inputFluids(Fluid.of('gtceu:filtered_fluorocarbon_lanthanum_cerium_slurry', 1000)).itemOutputs('gtceu:fluorocarbon_lanthanum_cerium_rare_earth_oxide_dust').EUt(600).duration(25 * 20).circuit(1).blastFurnaceTemp(600)
    e.recipes.gtceu.chemical_bath().itemInputs('gtceu:fluorocarbon_lanthanum_cerium_rare_earth_oxide_dust').inputFluids(Fluid.of('gtceu:hydrochloric_acid', 500)).itemOutputs('gtceu:acid_leached_fluorocarbon_lanthanum_cerium_rare_earth_oxide_dust').EUt(30).duration(10 * 20)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('gtceu:acid_leached_fluorocarbon_lanthanum_cerium_rare_earth_oxide_dust').inputFluids(Fluid.of('gtceu:oxygen', 1000)).itemOutputs('gtceu:roasted_rare_earth_oxide_dust').outputFluids(Fluid.of('gtceu:fluorine', 13)).EUt(120).duration(30 * 20).circuit(1).blastFurnaceTemp(120)
    e.recipes.gtceu.mixer().itemInputs('gtceu:roasted_rare_earth_oxide_dust').inputFluids(Fluid.of('minecraft:water', 200)).itemOutputs('gtceu:wet_rare_earth_oxide_dust').EUt(30).duration(5 * 20).circuit(7)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:wet_rare_earth_oxide_dust').inputFluids(Fluid.of('gtceu:fluorine', 4000)).itemOutputs('gtceu:cerium_rich_rare_earth_oxide_dust').outputFluids(Fluid.of('gtceu:hydrofluoric_acid', 4000)).EUt(480).duration(15 * 20)
    e.recipes.gtceu.centrifuge().itemInputs('gtceu:cerium_rich_rare_earth_oxide_dust').itemOutputs('gtceu:cerium_dioxide_dust').chancedOutput('gtceu:fluorocarbon_lanthanum_cerium_residual_rare_earth_oxide_dust', 9000, 0).EUt(480).duration(30 * 20)
    e.recipes.gtceu.mixer().itemInputs('gtceu:fluorocarbon_lanthanum_cerium_residual_rare_earth_oxide_dust').inputFluids(Fluid.of('gtceu:nitric_acid', 400)).outputFluids(Fluid.of('gtceu:nitrated_fluorocarbon_lanthanum_cerium_residual_rare_earth_oxide', 1000)).EUt(480).duration(15 * 20)
    e.recipes.gtceu.chemical_reactor().inputFluids(Fluid.of('gtceu:nitrated_fluorocarbon_lanthanum_cerium_residual_rare_earth_oxide', 1000), Fluid.of('gtceu:acetone', 1000)).outputFluids(Fluid.of('gtceu:fluorocarbon_lanthanum_cerium_residual_rare_earth_oxide_suspension', 1000)).EUt(480).duration(35 * 20)
    e.recipes.gtceu.centrifuge().inputFluids(Fluid.of('gtceu:fluorocarbon_lanthanum_cerium_residual_rare_earth_oxide_suspension', 1000)).chancedOutput('gtceu:neodymium_rare_earth_concentrate_dust', 8000, 0).chancedOutput('gtceu:samarium_rare_earth_concentrate_dust', 5000, 0).outputFluids(Fluid.of('gtceu:diluted_acetone', 750)).EUt(480).duration(45 * 20)
    e.recipes.gtceu.fluid_heater().inputFluids(Fluid.of('gtceu:diluted_acetone', 50)).outputFluids(Fluid.of('gtceu:acetone', 30)).EUt(120).duration(1.2 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('2x gtceu:neodymium_rare_earth_concentrate_dust').inputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000)).itemOutputs('gtceu:lanthanum_chloride_dust', 'gtceu:neodymium_oxide_dust').EUt(800).duration(45 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:samarium_rare_earth_concentrate_dust').inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 2000)).itemOutputs('gtceu:samarium_fluoride_concentrate_dust').EUt(480).duration(15 * 20).circuit(1)
    e.recipes.gtceu.electric_blast_furnace().itemInputs('8x gtceu:samarium_fluoride_concentrate_dust', '4x gtceu:calcium_dust').itemOutputs('4x gtceu:samarium_terbium_mixture_dust', 'gtceu:holmium_dust').outputFluids(Fluid.of('gtceu:calcium_fluoride', 12000)).EUt(1920).duration(61 * 20).blastFurnaceTemp(1200)
    e.recipes.gtceu.fluid_solidifier().inputFluids(Fluid.of('gtceu:calcium_fluoride', 1000)).itemOutputs('gtceu:calcium_fluoride_dust').EUt(30).duration(1.25 * 20).circuit(1)
    e.recipes.gtceu.chemical_plant().inputFluids(Fluid.of('gtceu:nitric_acid', 4000), Fluid.of('gtceu:ammonia', 4000)).outputFluids(Fluid.of('gtceu:hydrated_ammonium_nitrate_slurry', 5184)).EUt(120).duration(60 * 20).circuit(21)
    e.recipes.gtceu.dehydrator().inputFluids(Fluid.of('gtceu:hydrated_ammonium_nitrate_slurry', 1152)).itemOutputs('8x gtceu:ammonium_nitrate_dust').outputFluids(Fluid.of('minecraft:water', 2000)).EUt(480).duration(90 * 20).circuit(8)
    e.recipes.gtceu.chemical_reactor().itemInputs('gtceu:samarium_terbium_mixture_dust', '9x gtceu:ammonium_nitrate_dust').itemOutputs('gtceu:nitrated_samarium_terbium_mixture_dust').EUt(480).duration(30 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('4x gtceu:nitrated_samarium_terbium_mixture_dust', 'gtceu:copper_dust').itemOutputs('2x gtceu:samarium_precipitate_dust', '2x gtceu:terbium_nitrate_dust').EUt(1920).duration(160 * 20)
    //稀土酸洗↓
    e.recipes.gtceu.dissolving_tank().itemInputs('3x gtceu:rare_earth_dust').inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000)).itemOutputs('2x gtceu:rare_earth_i_dust', '2x gtceu:rare_earth_i_dust', '2x gtceu:rare_earth_i_dust').chancedOutput('mekanism:dust_quartz', 1100, 0).chancedOutput('gtceu:yttrium_dust', 1100, 0).EUt(30).duration(30 * 20)
    e.recipes.gtceu.dissolving_tank().itemInputs('3x gtceu:rare_earth_dust').inputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000)).chancedOutput('2x gtceu:rare_earth_ii_dust', 9000, 0).chancedOutput('2x gtceu:rare_earth_ii_dust', 8000, 0).chancedOutput('2x gtceu:rare_earth_ii_dust', 7000, 0).chancedOutput('gtceu:sculk_dust', 1100, 0).chancedOutput('gtceu:neodymium_dust', 1100, 0).EUt(480).duration(15 * 20)
    e.recipes.gtceu.dissolving_tank().itemInputs('3x gtceu:rare_earth_dust').inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 2000)).chancedOutput('2x gtceu:rare_earth_iii_dust', 9000, 0).chancedOutput('2x gtceu:rare_earth_iii_dust', 8000, 0).chancedOutput('2x gtceu:rare_earth_iii_dust', 7000, 0).chancedOutput('2x gtceu:cerium_rich_mixture_dust', 1100, 0).chancedOutput('gtceu:erbium_dust', 1100, 0).EUt(7680).duration(10 * 20)
    e.recipes.gtceu.dehydrator().itemInputs('gtceu:rare_earth_i_dust').chancedOutput('gtceu:cadmium_sulfide_dust', 1100, 0).chancedOutput('gtceu:lanthanite_dust', 1100, 0).chancedOutput('gtceu:yttrium_arsenic_copper_ore_dust', 1100, 0).chancedOutput('gtceu:yttrium_thorium_silicate_dust', 1100, 0).chancedOutput('mekanism:dust_quartz', 1100, 0).chancedOutput('gtceu:galena_dust', 1100, 0).chancedOutput('gtceu:chalcopyrite_dust', 1100, 0).chancedOutput('gtceu:cryolite_dust', 1100, 0).chancedOutput('gtceu:yttrium_dust', 1100, 0).EUt(30).duration(5.8 * 20)
    e.recipes.gtceu.electrolyzer().itemInputs('11x gtceu:lanthanite_dust').itemOutputs('2x gtceu:cerium_rich_mixture_dust', '3x gtceu:calcium_dust').outputFluids(Fluid.of('gtceu:oxygen', 4000), Fluid.of('gtceu:hydrogen', 2000)).EUt(16).duration(6.3 * 20)
    e.recipes.gtceu.mixer().itemInputs('3x gtceu:cerium_rich_mixture_dust').inputFluids(Fluid.of('gtceu:concentrated_nitrated_monazite_rare_earth_solution', 1000)).outputFluids(Fluid.of('gtceu:nitric_monazite_leaching_mixture', 2000)).EUt(120).duration(11 * 20)
    e.recipes.gtceu.chemical_reactor().itemInputs('15x gtceu:cerium_rich_mixture_dust').inputFluids(Fluid.of('gtceu:hydrochloric_acid', 750)).itemOutputs('gtceu:cerium_chloride_dust', 'gtceu:monazite_dust').outputFluids(Fluid.of('minecraft:water', 750)).EUt(GTValues.VA[GTValues.ZPM]).duration(25 * 20)
    e.recipes.gtceu.dehydrator().itemInputs('gtceu:rare_earth_ii_dust').chancedOutput('gtceu:yttrium_dust', 1100, 0).chancedOutput('gtceu:lanthanite_dust', 1100, 0).chancedOutput('gtceu:yttrium_arsenic_copper_ore_dust', 1100, 0).chancedOutput('gtceu:yttrium_thorium_silicate_dust', 1100, 0).chancedOutput('gtceu:nichrome_dust', 1100, 0).chancedOutput('gtceu:red_lead_ore_dust', 1100, 0).chancedOutput('gtceu:black_matter_dust', 1100, 0).chancedOutput('gtceu:sculk_dust', 1100, 0).EUt(30).duration(5.8 * 20)
    e.recipes.gtceu.dehydrator().itemInputs('gtceu:rare_earth_iii_dust').chancedOutput('gtceu:yttrium_niobium_ore_dust', 1100, 0).chancedOutput('gtceu:lepersonite_dust', 1100, 0).chancedOutput('gtceu:fluorocarbon_cerium_ore_dust', 1100, 0).chancedOutput('gtceu:strontium_oxide_dust', 1100, 0).chancedOutput('gtceu:erbium_dust', 1100, 0).EUt(30).duration(5.8 * 20)
    e.recipes.gtceu.alloy_blast_smelter().itemInputs('8x gtceu:strontium_oxide_dust').notConsumableFluid(Fluid.of('gtceu:aluminium', 1152)).outputFluids(Fluid.of('gtceu:strontium', 1152)).EUt(1920).duration(120 * 20).blastFurnaceTemp(5199).circuit(17)
    e.recipes.gtceu.dehydrator().itemInputs('63x gtceu:lepersonite_dust').itemOutputs('gtceu:calcium_dust', '3x gtceu:yttrium_dust', '2x gtceu:gadolinium_dust', '2x gtceu:uranium_235_dust').outputFluids(Fluid.of('minecraft:water', 12000)).EUt(GTValues.VA[GTValues.ZPM]).duration(4 * 20)
    e.recipes.gtceu.dehydrator().itemInputs('41x gtceu:fluorocarbon_cerium_ore_dust').itemOutputs('5x gtceu:calcium_dust', '5x gtceu:strontium_oxide_dust', '5x gtceu:cerium_rich_mixture_dust', '3x gtceu:phosphorus_dust', '5x gtceu:sodium_dust').outputFluids(Fluid.of('gtceu:fluorine', 6000)).EUt(GTValues.VA[GTValues.LuV]).duration(8 * 20)
})
/*
线路 机器（数字代表几号电路） 时间 EU 热量（如果有的话） 
独居石线路↓
1. 2粉碎独居石矿石 + 700硝酸 = 二氧化硅 + 400独居石稀土浊浑液 煮解池 20*20 1920
2. 9000独居石稀土浊浑液 + 90000水 + 9硝石粉 = 4氧化铪-氧化锆混合物粉 + 99000稀释独居石稀土泥浆 + 9方钍石粉 + 2独居石粉 溶解罐 405*20 480
3. 氧化铪-氧化锆混合物粉 = 3氧化铪粉 + 3氧化锆粉 离心 30*20 1920
4. 3方钍石粉 + 2镁粉 = 钍粉 + 4氧化镁粉 化反 50*20 30
5. 3氧化锆粉 + 4000盐酸 = 2000水 + 5四氯化锆粉 化浸 15*20 30
6. 3氧化铪粉 + 4000盐酸 = 2000水 + 5四氯化铪粉 化浸 15*20 30
7. 5四氯化锆粉 + 1000水 = 1000四氯化锆溶液 化反 10*20 30
8. 1000四氯化锆溶液 + 2镁粉 = 热锆锭 + 6氯化镁粉 电高2 30*20 1920 4500
9. 5四氯化铪粉 + 1000水 = 1000四氯化铪溶液 化反 10*20 30
10. 1000四氯化铪溶液 + 2镁粉 = 6氯化镁粉 + 低纯铪粉 电高2 30*20 1920 2700
11. 低纯铪粉 + 4000碘蒸汽 = 5碘化铪粉 化反1 15*20 30
12. 45碘化铪粉 = 9铪锭 + 36000碘蒸汽 + 铪废料粉 电高13 241.5*20 480 3400
13. 1000稀释独居石稀土泥浆 = 5%红锆石粉 + 75%二氧化硅粉 + 20%金红石粉 + 20%钛铁矿粉 + 90%硫酸独居石粉 离心 20*20 240
14. 6红锆石粉 = 1二氧化硅粉 + 1锆粉 + 2000气态氧 电解 12.5*20 90
15. 硫酸独居石粉 + 6000水 = 7000稀释硫酸独居石溶液 搅拌 24*20 400
16. 1000硝酸 + 1000氨 = 1000硝酸铵溶液 化反12 1.5*20 400
17. 9000稀释硫酸独居石溶液 + 1800硝酸铵溶液 = 3酸性独居石粉 化反14 216*20 480
18. 酸性独居石粉 = 70%磷酸钍滤饼粉 + 90%独居石稀土滤渣粉 筛选 30*20 240
19. 磷酸钍滤饼粉 = 磷酸钍精粉 电高 15*20 120 1500
20. 磷酸钍精粉 = 磷酸盐粉 + 钍粉 热离 10*20 480
21. 独居石稀土滤渣粉 + 320硝酸铵溶液 = 中和独居石稀土滤渣粉 化浸 6*20 240
22. 中和独居石稀土滤渣粉 = 40%铀滤渣粉 + 50%铀滤渣粉 + 90%浓缩独居石氢氧化物粉 筛选 40*20 480
23. 铀滤渣粉 + 100氢氟酸 = 中和铀滤渣粉 浸洗 18*20 120
24. 中和铀滤渣粉 = 45%铀粉 + 40%铀粉+ 30% 铀粉+ 30% 铀-235粉 + 20% 铀-235粉 筛选 50*20 30
25. 浓缩独居石氢氧化物粉 = 干燥浓缩独居石稀土粉 脱水 15*20 120
26. 干燥浓缩独居石稀土粉 + 500硝酸 = 1000浓缩氮化独居石稀土溶液 化反 25*20 480
27. 1000浓缩氮化独居石稀土溶液 + 1000水 = 1000硝酸独居石浸出混合物 搅拌 10*20 120
28. 1000硝酸独居石浸出混合物 = 11%二氧化铈粉 + 1000浓缩硝酸独居石浸出溶液 离心 20*20 240
29. 3二氧化铈粉 + 1000气态氢 + 3000氯化铵 = 4氯化铈粉 + 2000蒸汽 + 3000氨 化反 15*20 450
30. 8氯化铈粉 + 3000草酸 = 6000盐酸 + 5草酸铈粉 化反1 15*20 450
31. 5草酸铈粉 + 3碳粉 = 9000一氧化碳 + 5氧化铈(III)粉 电高 10*20 480 800
32. 氧化铈(III)粉 = 铈粉 + 气态氧 电解 ——不参与流程，不需要写配方——
33. 24糖 + 6000硝酸 + 五氧化二钒粉（催化）= 3000草酸 + 6000一氧化氮 化反1 30*20 120
34. 1000浓缩硝酸独居石浸出溶液 = 冷却浓缩硝酸独居石浸出粉 冷冻 5*20 240
35. 冷却浓缩硝酸独居石浸出粉 = 5% 5x氧化铕(III)粉 + 90% 独居石罕土沉淀粉 电磁选矿 30*20 1920
36. 5氧化铕(III)粉 + 铕粉 = 6氧化铕粉 化反 15*20 8400
37. 氧化铕 = 铕粉 + 气态氧 电解 ——不参与流程，不需要写配方——
38. 独居石罕土沉淀粉 + 1000气态氯 = 异质卤化独居石稀土混合物粉 电高 25*20 480 1200
39. 异质卤化独居石稀土混合物粉 + 盐 + 1000丙酮 = 饱和独居石稀土粉 搅拌 10*20 240
40. 4饱和独居石稀土粉 = 3钐沉淀粉 + 400氯甲烷 离心 157.5*20 1920
41. 3钐沉淀粉 = 2钐粉 + 钆粉 筛选 6.65 1920
氟碳镧铈线路↓
1. 硅粉 + 6000氢氟酸 = 1000氟硅酸 + 4000气态氢 化反 20*20 120
2. 1000氟硅酸 + 4盐 = 1000氟硅酸钠 + 2000盐酸 化反 30*20 450
3. 2粉碎氟碳镧铈矿矿石 + 700硝酸 = 二氧化硅粉 + 400氟碳镧铈稀土浊浑液 煮解 20*20 1920
4. 1000氟碳镧铈稀土浊浑液 + 1000蒸汽 = 2000蒸汽裂化氟碳镧铈泥浆 裂化1 30*20 480
5. 1000蒸汽裂化氟碳镧铈泥浆 + 320氟硅酸钠 = 1320调制氟碳镧铈泥浆 搅拌6 40*20 120
6. 1000调制氟碳镧铈泥浆 + 10000水 + 硝石粉 = 脉石粉 + 11000稀释氟碳镧铈泥浆 溶解 50*20 1920
7. 1000稀释氟碳镧铈泥浆 + 流体过滤卡（催化） = 400过滤氟碳镧铈泥浆 + 90%二氧化硅粉 + 10%红锆石粉 + 5%钛铁矿粉 + 75%金红石粉 离心 20*20 240
8. 1000过滤氟碳镧铈泥浆 = 氟碳镧铈稀土氧化物粉 电高1 25*20 600
9. 氟碳镧铈稀土氧化物粉 + 500盐酸 = 酸浸氟碳镧铈稀土氧化物粉 化浸 10*20 30
10. 酸浸氟碳镧铈稀土氧化物粉 + 1000气态氧 = 13气态氟 + 焙烧稀土氧化物粉 电高1 30*20 120
11. 焙烧稀土氧化物粉 + 200水 = 湿稀土氧化物粉 搅拌7 5*20 30
12. 湿稀土氧化物粉 + 4000气态氟 = 4000氢氟酸 + 氧化铈稀土氧化物粉 化反 15*20 480
13. 氧化铈稀土氧化物粉 = 二氧化铈粉 + 90%氟碳镧铈罕土氧化物粉 离心 30*20 480
14. 氟碳镧铈罕土氧化物粉 + 400硝酸 = 1000氮化氟碳镧铈罕土氧化物 搅拌 15*20 480
15. 1000氮化氟碳镧铈罕土氧化物 + 1000丙酮 = 1000氟碳镧铈罕土氧化物悬浊液 化反 35*20 480
16. 1000氟碳镧铈罕土氧化物悬浊液 = 80%钕稀土精粉 + 750稀释丙酮 + 50%钐稀土精粉 离心 45*20 480
17. 50稀释丙酮 = 30丙酮 流体加热 1.2*20 120
18. 2钕稀土精粉 + 2000盐酸 = 氯化镧粉 + 氧化钕粉 化反 45*20 800
19. 氯化镧粉 = 镧粉 + 气态氯 电解 ——不参与流程，不需要写配方——
20. 氧化钕粉 = 钕粉 + 气态氧 电解 ——不参与流程，不需要写配方——
21. 钐稀土精粉 + 2000氢氟酸 = 氟化钐精粉 化反1 15*20 480
22. 8氟化钐精粉 + 4钙粉 = 12000氟化钙 + 4钐-铽混合物粉 + 钬粉 电高 61*20 1920 1200
23. 1000氟化钙 = 氟化钙粉 流体固化1 1.25*20 30
24. 氟化钙粉 = 气态氟 + 钙粉 电解 ——不参与流程，不需要写配方——
25. 4000硝酸 + 4000氨 = 5184水合硝酸铵浆液 化工21 60*20 120
26. 1152水合硝酸铵浆液 = 8硝酸铵粉 + 2000水 脱水8 90*20 480
27. 钐-铽混合物粉 + 9硝酸铵粉 = 氮化钐-铽混合物粉 化反 30*20 480
28. 4氮化钐-铽混合物粉 + 铜粉 = 2钐沉淀粉 + 2硝酸铽粉 化反 160*20 1920
29. 硝酸铽粉 = 铽粉 + 气态氧 + 气态氮 电解 ——不参与流程，不需要写配方——
稀土酸洗↓
3稀土粉+1000硫酸=2稀土(I)粉+2稀土(I)粉+2稀土(I)粉+11%石英粉+11%钇粉 溶解 30*20 30
3稀土粉+2000盐酸=90% 2稀土(II)粉+80% 2稀土(II)粉+70% 2稀土(II)粉+11%幽匿粉+11%钕粉 溶解 15*20 480
3稀土粉+2000氢氟酸=90% 2稀土(III)粉+80% 2稀土(III)粉+70% 2稀土(III)粉+11% 2富铈混合物粉+11%铒粉 溶解 10*20 7680
稀土(I)粉=11%硫镉粉+11%镧石粉+11%钇砷铜矿粉+11%硅钍钇矿粉+11%石英粉+11%方铅矿粉+11%黄铜矿粉+11%冰晶石粉+11%钇粉 脱水 5.8*20 30
11镧石粉=2富铈混合物粉+3钙粉+4000气态氧+2000气态氢 电解 6.3*20 16
1000浓缩氮化独居石稀土溶液 + 3富铈混合物粉 = 2000硝酸独居石浸出混合物 搅拌 11*20 120
15富铈混合物粉+750盐酸=氯化铈粉+独居石粉+750水 化反 25*20 GTValues.VA[GTValues.ZPM]
稀土(II)粉=11%钇粉+11%镧石粉+11%钇砷铜矿粉+11%硅钍钇矿粉+11%镍铬合金粉+11%赤铅矿粉+11%黑物质粉+11%幽匿粉 脱水 5.8*20 30
稀土(III)粉=11%铌钇矿粉+11%莱普生石粉+11%氟碳铈矿粉+11%氧化锶粉+11%铒粉 脱水 5.8*20 30
8氧化锶粉+1152液态铝（催化剂）=1152液态锶 合金冶炼17 120*20 1920 5199
63莱普生石粉=钙粉+3钇粉+2钆粉+2镝粉+2铀-235粉+12000水 脱水 4*20 GTValues.VA[GTValues.ZPM]
41氟碳铈矿粉=5钙粉+5氧化锶粉+5富铈混合物粉+3磷+5钠粉+6000气态氟 脱水 8*20 GTValues.VA[GTValues.LuV]
*/
