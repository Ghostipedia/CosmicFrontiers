ServerEvents.recipes(event => {
    // event.remove({ output: Fluid.of(itemName) })
    event.recipes.gtceu.essence_reactor(`prisma_acid`)
        .itemInputs(['bloodmagic:reagentwater', 'bloodmagic:reagentlava'])
        .inputFluids('gtceu:hydrofluoric_acid 8000')
        .inputFluids('gtceu:sulfuric_acid 8000')
        .outputFluids('gtceu:astraline_corrosion_agent 16000')
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.mixer(`prisma_solution`)
        .itemInputs('8x minecraft:prismarine_shard')
        .itemInputs('4x gtceu:luminite_dust')
        .inputFluids('gtceu:astraline_corrosion_agent 1000')
        .outputFluids('gtceu:astraline_prismatic_solution 2000')
        .duration(360)
        .EUt(GTValues.VA[GTValues.HV]);
    //Fuckin stupid DT lost all it's special functionality :weary:
    event.recipes.gtceu.distillation_tower(`prisma_fluid`)
        .inputFluids('gtceu:astraline_prismatic_solution 2000')
        .outputFluids('cosmiccore:prisma 1000')
        .outputFluids('gtceu:astraline_corrosion_agent 1000')
        .duration(240)
        .EUt(GTValues.VA[GTValues.EV]);

    //T1 Essences
    event.recipes.gtceu.essence_reactor(`water_reagent`)
        .itemInputs('4x biomesoplenty:waterlily')
        .itemInputs('4x minecraft:lily_pad')
        .itemInputs('8x botania:mana_powder')
        .inputFluids('gtceu:potent_mana 500')
        .inputFluids('gtceu:source_oils 500')
        .itemOutputs('8x bloodmagic:reagentwater')
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.essence_reactor(`lava_reagent`)
        .itemInputs('16x gtceu:sulfur_dust')
        .itemInputs('8x nethersdelight:propelpearl')
        .itemInputs('8x botania:mana_powder')
        .inputFluids('minecraft:lava 2000')
        .inputFluids('gtceu:potent_mana 500')
        .inputFluids('gtceu:source_oils 500')
        .itemOutputs('8x bloodmagic:reagentlava')
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.essence_reactor(`air_reagent`)
        .itemInputs('8x botania:mana_powder')
        .inputFluids('gtceu:air 1000')
        .inputFluids('gtceu:nether_air 1000')
        .inputFluids('gtceu:ender_air 1000')
        .inputFluids('gtceu:tears_of_the_sky 1000')
        .inputFluids('gtceu:potent_mana 500')
        .inputFluids('gtceu:source_oils 500')
        .itemOutputs('8x bloodmagic:reagentair')
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.essence_reactor(`growth_reagent`)
        .itemInputs('2x gtceu:calcium_dust')
        .itemInputs('4x gtceu:apatite_dust')
        .itemInputs('8x botania:mana_powder')
        .inputFluids('gtceu:aether_augmented_sediment 1000')
        .inputFluids('gtceu:potent_mana 500')
        .inputFluids('gtceu:source_oils 500')
        .itemOutputs('8x bloodmagic:reagentgrowth')
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.assembler(`essence_reactor_controller`)
        .itemInputs(['botania:alfheim_portal', 'gtceu:ev_machine_hull', 'gtceu:terrasteel_frame', '4x gtceu:long_terrasteel_rod', '2x gtceu:micro_processor_computer'])
        .inputFluids('gtceu:potent_mana 1000')
        .itemOutputs('gtceu:essence_reactor')
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV]);

    //Chromatic Floatation Plant
    event.shaped('cosmiccore:chromatic_flotation_plant',[
        'ABA',
        'CDC',
        'EBE'
    ], {
        A: 'gtceu:tungsten_steel_drum',
        B: '#gtceu:circuits/luv',
        C: 'gtceu:iv_electric_pump',
        D: 'gtceu:iv_machine_hull',
        E: 'gtceu:iv_conveyor_module'
    })
})