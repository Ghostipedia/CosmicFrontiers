//Removing Byproducts from particular ore steps
ServerEvents.recipes(event => {
    //Decomp Removal Sheldonite/Cooperite
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_cooperite' })
    event.remove({ id: 'gtceu:chemical_bath/bathe_nickel_crushed_ore_to_purified_ore' })
    event.remove({ id: 'gtceu:centrifuge/pgs_separation' })
    event.remove({ id: 'gtceu:electrolyzer/rhodium_sulfate_separation' })
    event.remove({ id: 'gtceu:large_chemical_reactor/ruthenium_tetroxide_separation' })
    event.remove({ id: 'gtceu:chemical_reactor/ruthenium_tetroxide_separation' })
    event.remove({ id: 'gtceu:chemical_reactor/osmium_tetroxide_separation' })
    event.remove({ id: 'gtceu:large_chemical_reactor/osmium_tetroxide_separation' })
    event.remove({ id: 'gtceu:chemical_reactor/iridium_chloride_separation' })
    event.remove({ id: 'gtceu:large_chemical_reactor/iridium_chloride_separation' })
    event.remove({ id: 'gtceu:vomahine_industrial_chemvat/iridium_chloride_separation' })
    event.remove({ id: 'gtceu:electrolyzer/raw_platinum_separation' })
    event.remove({ id: 'gtceu:chemical_reactor/inert_metal_mixture_separation' })
    event.remove({ id: 'gtceu:large_chemical_reactor/inert_metal_mixture_separation' })
    // event.remove({ output: 'gtceu:platinum_group_sludge_dust' })
    event.replaceOutput({ type: 'gtceu:large_chemical_reactor' }, 'gtceu:platinum_group_sludge_dust', 'gtceu:insoluble_plat_group_residue_dust')
    event.replaceOutput({ type: 'gtceu:chemical_reactor' }, 'gtceu:platinum_group_sludge_dust', 'gtceu:insoluble_plat_group_residue_dust')
    event.replaceOutput({ type: 'gtceu:vomahine_industrial_chemvat' }, 'gtceu:platinum_group_sludge_dust', 'gtceu:insoluble_plat_group_residue_dust')
    event.replaceOutput({ id: 'gtceu:centrifuge/endstone_separation' }, 'gtceu:platinum_dust', 'gtceu:cooperite_dust')

    event.recipes.gtceu.chemical_reactor('ammonium_chloride_dust')
        .inputFluids('gtceu:ammonia 1000')
        .inputFluids('gtceu:hydrochloric_acid 1000')
        .itemOutputs('2x gtceu:ammonium_chloride_dust')
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('acetic_acid_reproc')
        .itemInputs('8x gtceu:sodium_acetate_dust')
        .inputFluids('gtceu:hydrochloric_acid 1000')
        .itemOutputs('2x gtceu:salt_dust')
        .outputFluids('gtceu:acetic_acid 1000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.electrolyzer('zinc_sulfate_reproc')
        .notConsumable('gtceu:zinc_plate')
        .itemInputs('6x gtceu:zinc_sulfate_dust')
        .notConsumableFluid('gtceu:sulfuric_acid 1000')
        .itemOutputs('gtceu:zinc_dust')
        .outputFluids('gtceu:sulfur_dioxide 1000')
        .outputFluids('gtceu:oxygen 2000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_bath('gtceu:chemical_bath/bathe_nickel_crushed_ore_to_purified_ore')
        .itemInputs('gtceu:crushed_nickel_ore')
        .inputFluids('gtceu:mercury 100')
        .itemOutputs('gtceu:purified_nickel_ore')
        .chancedOutput(Item.of('gtceu:insoluble_plat_group_residue_dust', 1), 5000, 500)
        .chancedOutput(Item.of('gtceu:stone_dust', 1), 4000, 0)
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.remove({ id: 'gtceu:macerator/macerate_nickel_refined_ore_to_dust' })
    event.recipes.gtceu.macerator('gtceu:macerator/macerate_nickel_refined_ore_to_dust')
        .itemInputs('gtceu:refined_nickel_ore')
        .itemOutputs('gtceu:nickel_dust')
        .chancedOutput(Item.of('gtceu:insoluble_plat_group_residue_dust', 1), 1500, 500)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('hydrogen_peroxide_craft')
        .inputFluids('gtceu:methane 1000')
        .inputFluids('gtceu:oxygen 6000')
        .outputFluids('gtceu:hydrogen_peroxide 2000')
        .outputFluids('gtceu:carbon_dioxide 1000')
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('hydrazine_craft')
        .inputFluids('gtceu:hydrogen_peroxide 1000')
        .inputFluids('gtceu:ammonia 6000')
        .outputFluids('gtceu:hydrazine 1000')
        .outputFluids('minecraft:water 2000')
        .duration(320)
        .EUt(GTValues.VA[GTValues.MV]);
    //Bad Plat Recipe
    event.recipes.gtceu.electric_blast_furnace('bad_plat')
        .itemInputs('6x gtceu:cooperite_dust')
        .itemOutputs('4x gtceu:platinum_nugget')
        .duration(600)
        .circuit(2)
        .blastFurnaceTemp(2700)
        .EUt(GTValues.VA[GTValues.HV]);
    //Roasted Cooperite

    event.recipes.gtceu.electric_blast_furnace('cooperite_roasting')
        .itemInputs('6x gtceu:cooperite_dust')
        .inputFluids('gtceu:oxygen 2000')
        .itemOutputs('5x gtceu:roasted_cooperite_dust')
        .outputFluids('gtceu:sulfur_dioxide 1000')
        .circuit(1)
        .duration(1200)
        .blastFurnaceTemp(2700)
        .EUt(GTValues.VA[GTValues.MV]);
    //Nickel Depleted Cooperite    
    // Double Checked Formula
    event.recipes.gtceu.chemical_bath('cooperite_nickel_removal')
        .itemInputs('5x gtceu:roasted_cooperite_dust')
        .inputFluids('gtceu:carbon_monoxide 4000')
        .itemOutputs('4x gtceu:nickel_depleted_cooperite_dust')
        .outputFluids('gtceu:nickel_carbonyl 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    //Nickel Carbonyl to Nickel dust and CO
    // Double Checked Formula
    event.recipes.gtceu.chemical_dehydrator('carbonyl_dehydrating')
        .inputFluids('gtceu:nickel_carbonyl 1000')
        .itemOutputs('gtceu:nickel_dust')
        .outputFluids('gtceu:carbon_monoxide 4000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    //Cooperite Solution
    // Double Checked Formula
    // NEW FORMULA : Pt3Pd + 22HCl + 14 HNO3 -> (3 H2PtCl6)(H2PdCl4)(14 H2O) + 14NO2
    event.recipes.gtceu.large_chemical_reactor('cooperite_solution_craft')
        .itemInputs('4x gtceu:nickel_depleted_cooperite_dust')
        .inputFluids('gtceu:hydrochloric_acid 22000')
        .inputFluids('gtceu:nitric_acid 14000')
        .outputFluids('gtceu:cooperite_solution 8000')
        .outputFluids('gtceu:nitrogen_dioxide 14000')
        .duration(400)
        .EUt(240);
    //Platinate
    //SOUP TIME
    // Double Checked Formula
    // NEW FORMULA 6 NH3 + (3 H2PtCl6)(H2PdCl4)(14 H2O) -> 3 (NH4)2PtCl6 + (H2PdCl4)(14 H2O)
    //Plat Soup Ft What the FUCK are these ratios.
    event.recipes.gtceu.large_chemical_reactor('ammonium_hexachloroplatinate_dust_craft')
        .inputFluids('gtceu:ammonia 6000')
        .inputFluids('gtceu:cooperite_solution 8000')
        .itemOutputs('27x gtceu:ammonium_hexachloroplatinate_dust')
        .outputFluids('gtceu:plat_depleted_cooperite_solution 8000')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV]);
    //Plat Routes 
    event.recipes.gtceu.large_chemical_reactor('platinum_dust_craft')
        .itemInputs('9x gtceu:ammonium_hexachloroplatinate_dust')
        .inputFluids('gtceu:hydrogen 4000')
        .itemOutputs('gtceu:platinum_dust')
        .itemOutputs('4x gtceu:ammonium_chloride_dust')
        .outputFluids('gtceu:hydrochloric_acid 4000')
        .circuit(1)
        .duration(240)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.large_chemical_reactor('platinum_dust_craft_better')
        .itemInputs('9x gtceu:ammonium_hexachloroplatinate_dust')
        .inputFluids('gtceu:hydrazine 1000')
        .itemOutputs('gtceu:platinum_dust')
        .itemOutputs('4x gtceu:ammonium_chloride_dust')
        .outputFluids('gtceu:hydrochloric_acid 4000')
        .outputFluids('gtceu:nitrogen 2000')
        .circuit(2)
        .duration(190)
        .EUt(GTValues.VA[GTValues.HV]);
    //Palladate and PGS
    //H2PdCl4 (aq) + Cl2 (g) + 2NH4Cl (s) -> (NH4)2PdCl6 (s) + 2HCl (aq)
    event.recipes.gtceu.chemical_dehydrator('ammonium_hexachloropalladate_dust_craft')
        .itemInputs('4x gtceu:ammonium_chloride_dust')
        .inputFluids('gtceu:chlorine 2000')
        .inputFluids('gtceu:plat_depleted_cooperite_solution 8000')
        .itemOutputs('gtceu:insoluble_plat_group_residue_dust') // (RhIrOsRu) Ejected Here -> 
        .itemOutputs('9x gtceu:ammonium_hexachloropalladate_dust')
        .outputFluids('gtceu:hydrochloric_acid 2000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    //3(NH4)2PdCl6 (s) + 20NH3 (g) -> 3Pd(NH3)4Cl2 (s) + 12NH4Cl (s) + N2 (g)
    event.recipes.gtceu.large_chemical_reactor('tetraammine_palladium_chloride_dust_craft')
        .itemInputs('27x gtceu:ammonium_hexachloropalladate_dust')
        .inputFluids('gtceu:ammonia 20000')
        .itemOutputs('27x gtceu:tetraammine_palladium_chloride_dust')
        .itemOutputs('24x gtceu:ammonium_chloride_dust')
        .outputFluids('gtceu:nitrogen 2000')
        .circuit(4)
        .duration(152)
        .EUt(GTValues.VA[GTValues.MV]);
    //Pd(NH3)4Cl2 (s) + 2HCl (aq) -> Pd(NH3)2Cl2 (s) + 2NH4Cl (s)
    event.recipes.gtceu.large_chemical_reactor('diamine_dichloropalladium_dust_craft')
        .itemInputs('9x gtceu:tetraammine_palladium_chloride_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('3x gtceu:diamine_dichloropalladium_dust')
        .itemOutputs('4x gtceu:ammonium_chloride_dust')
        .circuit(3)
        .duration(152)
        .EUt(GTValues.VA[GTValues.MV]);

    //Route 1 for Diamine Dichloropalladium
    // 3Pd(NH3)2Cl2 (s) —> 3Pd (s) + 4NH4Cl (s) + 2HCl (g) + N2 (g)

    event.recipes.gtceu.large_chemical_reactor('palladium_craft_slow')
        .itemInputs('9x gtceu:diamine_dichloropalladium_dust')
        .itemOutputs('3x gtceu:palladium_dust')
        .itemOutputs('8x gtceu:ammonium_chloride_dust')
        .outputFluids('gtceu:hydrochloric_acid 2000')
        .outputFluids('gtceu:nitrogen 2000')
        .circuit(1)
        .duration(480)
        .EUt(GTValues.VA[GTValues.EV]);

    //Route 2 for Diamine Dichloropalladium
    // 2Pd(NH3)2Cl2 (s) + N2H4 (l) —> 2Pd (s) + 4NH4Cl (s) + N2 (g)
    event.recipes.gtceu.large_chemical_reactor('palladium_craft_fast')
        .itemInputs('6x gtceu:diamine_dichloropalladium_dust')
        .inputFluids('gtceu:hydrazine 1000')
        .itemOutputs('2x gtceu:palladium_dust')
        .itemOutputs('8x gtceu:ammonium_chloride_dust')
        .outputFluids('gtceu:nitrogen 2000')
        .circuit(2)
        .duration(180)
        .EUt(GTValues.VA[GTValues.HV]);





    //OLD PALLADIUM
    // // H2PdCl4 + 2 NH4Cl -> (NH4)2PdCl4 + 2 HCl
    // event.recipes.gtceu.chemical_dehydrator('ammonium_hexachloropalladate_dust_craft')
    //     .itemInputs('4x gtceu:ammonium_chloride_dust')
    //     .inputFluids('gtceu:plat_depleted_cooperite_solution 7500')
    //     .itemOutputs('10x gtceu:ammonium_hexachloropalladate_dust')
    //     .itemOutputs('gtceu:insoluble_plat_group_residue_dust')
    //     .outputFluids('gtceu:hydrochloric_acid 2000')
    //     .duration(200)
    //     .EUt(GTValues.VA[GTValues.MV]);
    // // (NH4)2PdCl4 + 4 NH3 -> Pd(NH3)4Cl2 + 2 NH4Cl
    // event.recipes.gtceu.large_chemical_reactor('tetraammine_palladium_chloride_dust_craft')
    //     .itemInputs('10x gtceu:ammonium_hexachloropalladate_dust')
    //     .inputFluids('gtceu:ammonia 4000')
    //     .itemOutputs('5x gtceu:tetraammine_palladium_chloride_dust')
    //     .itemOutputs('4x gtceu:ammonium_chloride_dust')
    //     .duration(152)
    //     .EUt(GTValues.VA[GTValues.MV]);
    // // Pd(NH3)4Cl2 + N2H4 -> ???????  // Current : 2 Pd(NH3)4Cl2 + N2H4 -> 2Pd + 4NH4Cl + 4 NH3 + 2 N
    // event.recipes.gtceu.large_chemical_reactor('palladium_dust_craft')
    //     .itemInputs('10x gtceu:tetraammine_palladium_chloride_dust')
    //     .inputFluids('gtceu:hydrazine 1000')
    //     .itemOutputs('2x gtceu:palladium_dust')
    //     .itemOutputs('8x gtceu:ammonium_chloride_dust')
    //     .outputFluids('gtceu:ammonia 4000')
    //     .outputFluids('gtceu:nitrogen 2000')
    //     .duration(152)
    //     .EUt(GTValues.VA[GTValues.MV]);

    // Extractions from the IPGS dusts
    event.recipes.gtceu.electric_blast_furnace('ipgs_to_rhdpgs')
        .itemInputs('9x gtceu:insoluble_plat_group_residue_dust')
        .itemInputs('42x gtceu:sodium_bisulfate_dust')
        .inputFluids('minecraft:water 7000')
        .blastFurnaceTemp(4500)
        .itemOutputs('gtceu:rhodium_depleted_plat_group_residue_dust')
        .outputFluids('gtceu:rhodium_sulfate_solution 1000')
        .duration(128)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.electric_blast_furnace('rhdpgr_to_irpgr')
        .itemInputs('gtceu:rhodium_depleted_plat_group_residue_dust')
        .itemInputs('17x gtceu:sodium_peroxide_dust')
        .inputFluids('minecraft:water 15000')
        .blastFurnaceTemp(4500)
        .itemOutputs('gtceu:iridium_rich_plat_group_residue_dust')
        .outputFluids('gtceu:sodium_ruthenate_perosomate 1000')
        .duration(420)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.electric_blast_furnace('irpgr_ircl')
        .itemInputs('gtceu:iridium_rich_plat_group_residue_dust')
        .itemInputs('8x gtceu:barium_peroxide_dust')
        .inputFluids('gtceu:hydrochloric_acid 12000')
        .blastFurnaceTemp(4500)
        .itemOutputs('6x gtceu:barium_oxide_dust')
        .outputFluids('gtceu:chloroiridic_acid 6000')
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV]);

    //BARIUM STUFF???
    event.recipes.gtceu.chemical_reactor('barium_oxide')
        .itemInputs('gtceu:barium_dust')
        .inputFluids('gtceu:oxygen 2000')
        .itemOutputs('3x gtceu:barium_oxide_dust')
        .circuit(3)
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('barium_peroxide')
        .itemInputs('3x gtceu:barium_oxide_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('4x gtceu:barium_peroxide_dust')
        .circuit(4)
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV]);
    //Chloroiridic to Hexa
    event.recipes.gtceu.chemical_reactor('iridic_to_hexa')
        .itemInputs('10x gtceu:ammonium_chloride_dust')
        .inputFluids('gtceu:chloroiridic_acid 3000')
        .itemOutputs('10x gtceu:ammonium_hexachloroiridate_dust')
        .outputFluids('gtceu:hydrochloric_acid 2000')
        .outputFluids('minecraft:water 2000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV]);
    //Iridium
    event.recipes.gtceu.large_chemical_reactor('hexair_to_iridium')
        .itemInputs('10x gtceu:ammonium_hexachloroiridate_dust')
        .inputFluids('gtceu:iron_ii_chloride 4000')
        .itemOutputs('gtceu:iridium_dust')
        .outputFluids('gtceu:iron_iii_chloride 4000')
        .outputFluids('gtceu:ammonia 2000')
        .outputFluids('gtceu:hydrochloric_acid 2000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.chemical_reactor('iron_ii_chloride')
        .itemInputs('gtceu:iron_dust')
        .inputFluids('gtceu:chlorine 2000')
        .outputFluids('gtceu:iron_ii_chloride 1000')
        .circuit(4)
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV]);

    //RHODIUM CHAIN
    event.recipes.gtceu.chemical_dehydrator('rhodium_sulfate_to_crude_rhodium')
        .itemInputs('6x gtceu:zinc_dust')
        .inputFluids('gtceu:rhodium_sulfate_solution 1000')
        .itemOutputs(['2x gtceu:crude_rhodium_dust', '36x gtceu:zinc_sulfate_dust', '18x gtceu:sodium_hydroxide_dust'])
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.large_chemical_reactor('crude_to_chlororhodate')
        .itemInputs(['gtceu:crude_rhodium_dust', '6x gtceu:salt_dust'])
        .inputFluids('gtceu:chlorine 3000')
        .itemOutputs('10x gtceu:sodium_hexachlororhodate_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.large_chemical_reactor('chlorodate_to_rhodium')
        .itemInputs(['10x gtceu:sodium_hexachlororhodate_dust', '9x gtceu:sodium_hydroxide_dust'])
        .inputFluids('gtceu:hydrazine 750')
        .itemOutputs(['gtceu:rhodium_dust', '12x gtceu:salt_dust'])
        .outputFluids('minecraft:water 3000')
        .outputFluids('gtceu:nitrogen 1500')
        .duration(360)
        .EUt(GTValues.VA[GTValues.EV]);
    //RUTHENIUM CHAIN
    event.recipes.gtceu.cracker('ruthen_perosomate_to_tetroxide')
        .inputFluids('gtceu:sodium_ruthenate_perosomate 1000')
        .inputFluids('gtceu:chlorine 3000')
        .circuit(1)
        .outputFluids('gtceu:ruthenium_osmium_tetroxides 1000')
        .duration(500)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.mixer('tetroxide_to_chlororuthenic')
        .inputFluids('gtceu:ruthenium_osmium_tetroxides 100')
        .inputFluids('gtceu:hydrochloric_acid 4600')
        .outputFluids('gtceu:chlororuthenic_acid_osmium_tetroxide_solution 3100')
        .duration(50)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.distillation_tower('chlororuthenic_to_pure_ruthenic')
        .inputFluids('gtceu:chlororuthenic_acid_osmium_tetroxide_solution 31000')
        .itemOutputs('20x gtceu:impure_osmium_tetroxide_dust')
        .outputFluids('gtceu:chlororuthenic_acid 9000')
        .outputFluids('gtceu:chlorine 12000')
        .outputFluids('minecraft:water 22000')
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.large_chemical_reactor('pure_ruthenic_to_chlororuthenate')
        .inputFluids('gtceu:chlororuthenic_acid 3000')
        .itemInputs('10x gtceu:ammonium_chloride_dust')
        .itemOutputs('10x gtceu:ammonium_hexachlororuthenate_dust')
        .outputFluids('gtceu:hydrochloric_acid 2000')
        .outputFluids('minecraft:water 2000')
        .duration(240)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.large_chemical_reactor('chlororuthenate_to_ruthenium')
        .inputFluids('gtceu:hydrogen 4000')
        .itemInputs('10x gtceu:ammonium_hexachlororuthenate_dust')
        .itemOutputs('gtceu:ruthenium_dust')
        .outputFluids('gtceu:ammonia 2000')
        .outputFluids('gtceu:hydrochloric_acid 6000')
        .duration(240)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.chemical_reactor('carbon_tetrachloride')
        .inputFluids('gtceu:methane 1000')
        .inputFluids('gtceu:chlorine 4000')
        .circuit(4)
        .outputFluids('gtceu:carbon_tetrachloride 1000')
        .outputFluids('gtceu:hydrochloric_acid 4000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.HV]);
    //Sodium Oxide and Peroxide
    event.recipes.gtceu.chemical_reactor('sodium_oxide')
        .inputFluids('gtceu:oxygen 1000')
        .itemInputs('2x gtceu:sodium_dust')
        .circuit(2)
        .itemOutputs('3x gtceu:sodium_oxide_dust')
        .duration(60)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('sodium_peroxide')
        .inputFluids('gtceu:oxygen 1000')
        .itemInputs('3x gtceu:sodium_oxide_dust')
        .circuit(3)
        .itemOutputs('4x gtceu:sodium_peroxide_dust')
        .duration(60)
        .EUt(GTValues.VA[GTValues.MV]);
    //This is an awful placeholder recipe, ask bun/tech if there's a better way to 'recycle/decomp' this ~G
    event.recipes.gtceu.electrolyzer('sodium_accetate_decomp')
        .inputFluids('8x gtceu:sodium_accetate_dust')
        .itemInputs('10x gtceu:ammonium_hexachlororuthenate_dust')
        .itemOutputs(['2x gtceu:carbon_dust', 'gtceu:sodium_dust'])
        .outputFluids('gtceu:oxygen 2000')
        .outputFluids('gtceu:hydrogen 3000')
        .outputFluids('gtceu:hydrochloric_acid 6000')
        .duration(240)
        .EUt(GTValues.VA[GTValues.IV]);
    //Osmium Time, this one I have the least confidence about the chemline balance, will need to check the stuff with stoik soonish
    event.recipes.gtceu.chemical_dehydrator('dry_impure_osmium_tetroxide')
        .itemInputs('10x gtceu:impure_osmium_tetroxide_dust')
        .inputFluids('gtceu:carbon_tetrachloride 100')
        .itemOutputs(['10x gtceu:osmium_tetroxide_dust', '34x gtceu:salt_dust'])
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.large_chemical_reactor('osmium_tetroxide_to_sodium_osmate')
        .itemInputs(['20x gtceu:osmium_tetroxide_dust', '15x gtceu:sodium_hydroxide_dust'])
        .inputFluids('gtceu:ethanol 1000')
        .itemOutputs(['20x gtceu:sodium_osmate_dust', '8x gtceu:sodium_acetate_dust'])
        .duration(240)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.large_chemical_reactor('sodium_osmate_dust_to_osyml_chloride')
        .itemInputs(['10x gtceu:sodium_osmate_dust', '20x gtceu:ammonium_chloride_dust'])
        .itemOutputs(['10x gtceu:tetraammine_osmyl_chloride_dust', '4x gtceu:salt_dust'])
        .outputFluids('minecraft:water 4000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.large_chemical_reactor('osmyl_to_osmium_dust')
        .itemInputs('10x gtceu:tetraammine_osmyl_chloride_dust')
        .inputFluids('gtceu:hydrogen 6000')
        .itemOutputs('gtceu:osmium_dust')
        .outputFluids('gtceu:hydrochloric_acid 2000')
        .outputFluids('gtceu:ammonia 4000')
        .outputFluids('minecraft:water 2000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV]);

})