ServerEvents.recipes(event => {

    event.recipes.gtceu.gas_collector('aether_air_collection')
        .outputFluids('gtceu:aether_air 10000')
        .duration(200)
        .circuit(4)
        .dimension('aether:the_aether')
        .EUt(GTValues.VA[GTValues.HV]);
    //Liquid Aether Air
    event.recipes.gtceu.vacuum_freezer('aether_air_condensing')
        .inputFluids('gtceu:aether_air 4000')
        .outputFluids('gtceu:liquid_aether_air 4000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.distillation_tower('aether_air_distillation')
        .disableDistilleryRecipes(true)
        .inputFluids('gtceu:liquid_aether_air 50000')
        .outputFluids('gtceu:nitrogen 15000')
        .outputFluids('gtceu:tears_of_the_sky 11000')
        .outputFluids('gtceu:ammonia_rich_aerocloud_solution 6000')
        .outputFluids('gtceu:carbon_dioxide 5000')
        .outputFluids('gtceu:oxygen 5000')
        .outputFluids('gtceu:thundering_aerocloud_solution 4000')
        .outputFluids('gtceu:argon 2000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.mixer('nutritious_tears_of_the_sky')
        .itemInputs('4x aether:aechor_petal', '1x aether:golden_amber')
        .inputFluids('gtceu:tears_of_the_sky 1000')
        .outputFluids('gtceu:nutritious_tears_of_the_sky 1000')
        .duration(150)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.fluid_heater('heated_nether_sediment_sludge')
        .inputFluids('gtceu:nether_sediment_sludge 200')
        .outputFluids('gtceu:heated_nether_sediment_sludge 200')
        .duration(32)
        .EUt(GTValues.VA[GTValues.LV]);
    //Changed From 2x Phosphorus to 1x Apatite
    event.recipes.gtceu.mixer('aether_augmented_sediment')
        .itemInputs('gtceu:apatite_dust')
        .inputFluids('gtceu:nutritious_tears_of_the_sky 250', 'gtceu:heated_nether_sediment_sludge 1000')
        .outputFluids('gtceu:aether_augmented_sediment 1250')
        .duration(80)
        .EUt(GTValues.VA[GTValues.MV]);

    event.remove({ id: 'gtceu:macerator/macerate_sugar_cane' })
    event.recipes.gtceu.macerator('macerate_sugar_cane_new')
        .itemInputs('minecraft:sugar_cane')
        .itemOutputs('minecraft:sugar')
        .duration(40)
        .EUt(GTValues.VA[GTValues.ULV]);


})