console.info('[COSMIC MANAGER] - CosmicCore KubeJS Machines Loaded Loud and Clear!')
GTCEuStartupEvents.registry('gtceu:machine', event => {
    //Steam Singleblocks
    let isHp = false
    event.create('steam_masonry_oven', 'steam', true)
        .recipeType('masonry_oven') // needs to be defined below otherwise the game will implote
        .allTiers((tier, builder) => {
            builder.workableSteamHullRenderer(isHp, GTCEu.id("block/machines/masonry_oven"))
            isHp = true
        })
        .rotationState(RotationState.NON_Y_AXIS)

    //Please Do not add anymore Steam machines, these are super fucking cursed because of the render builder being omega cursed
    //.tankScalingFunction(tier => tier * 3200) lol

    //Electri Version
    event.create('masonry_oven', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('masonry_oven', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/masonry_oven"))
    event.create('laminator', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('laminator', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/flora_nurturer")) //add this to the kube folder - Though, let Ghostipedia make these textures pls & ty
    event.create('aio_lithography_processor', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('aio_lithography_processor', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/flora_nurturer")) //add this to the kube folder - Though, let Ghostipedia make these textures pls & ty



    event.create('fake_wireless_hatch', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('fake_wireless_hatch', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/fake_wireless"))
    //Mana Fluidizer
    event.create('mana_fluidizer', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('mana_fluidizer', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .tankScalingFunction(tier => tier * 64000)
        .workableTieredHullRenderer(GTCEu.id("block/machines/mana_fluidizer"))

    event.create('flora_nurturer', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('flora_nurturer', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/flora_nurturer"))


    event.create('nether_catalyzer', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('nether_catalyzer', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/nether_catalyzer"))


    //Custom Spooling Machine for Ars
    event.create('spooling_machine', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('spooling_machine', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/spooling_machine"))
    //Tempering Autoclave
    event.create('tempering_autoclave', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('tempering_autoclave', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/autoclave"))

    event.create('mana_simulator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_simulator')
        .appearanceBlock(GTBlocks.CASING_ALUMINIUM_FROSTPROOF)
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('##B##', '##G##', '##G##', '##G##', '##G##', '##G##', '##B##')
            .aisle('#BBB#', '#G#G#', '#G#G#', '#G#G#', '#G#G#', '#G#G#', '#BBB#')
            .aisle('BBBBB', 'G###G', 'G###G', 'G###G', 'G###G', 'G###G', 'BBBBB')
            .aisle('#BBB#', '#G#G#', '#G#G#', '#G#G#', '#G#G#', '#G#G#', '#BBB#')
            .aisle('##C##', '##G##', '##G##', '##G##', '##G##', '##G##', '##B##')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('B', Predicates.blocks(GTBlocks.CASING_ALUMINIUM_FROSTPROOF.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
            .where('G', Predicates.blocks('botania:mana_glass'))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_frost_proof', 'gtceu:block/machines/mana_fluidizer', false);
    event.create('essence_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('essence_reactor')
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#####', '##A##', '##A##', '#####', '##A##', '##A##', '#####')
            .aisle('#TTT#', '##Q##', '#####', '#####', '#####', '##Q##', '#TTT#')
            .aisle('#TTT#', 'AQGQA', 'A#G#A', '##G##', 'A#G#A', 'AQGQA', '#TTT#')
            .aisle('#TCT#', '##Q##', '#####', '#####', '#####', '##Q##', '#TTT#')
            .aisle('#####', '##A##', '##A##', '#####', '##A##', '##A##', '#####')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('Q', Predicates.blocks('gtceu:aluminium_frame'))
            .where('A', Predicates.blocks(GTBlocks.CASING_ALUMINIUM_FROSTPROOF.get()))
            .where('T', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
            .where('G', Predicates.blocks('botania:mana_glass'))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_stable_titanium', 'gtceu:block/machines/mana_fluidizer', false);
    event.create('molten_salt_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('molten_salt_reactor')
        .appearanceBlock(() => Block.getBlock('cosmiccore:high_temperature_fission_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#TTT#', '#TGT#', '#TGT#', '#TGT#', '#TGT#', '#TGT#', '#TTT#')
            .aisle('TTTTT', 'TQAQT', 'TQAQT', 'TQAQT', 'TQAQT', 'TQAQT', 'TTTTT')
            .aisle('TTTTT', 'TAQAT', 'TAQAT', 'TAQAT', 'TAQAT', 'TAQAT', 'TTTTT')
            .aisle('TTTTT', 'TQAQT', 'TQAQT', 'TQAQT', 'TQAQT', 'TQAQT', 'TTTTT')
            .aisle('#TCT#', '#TGT#', '#TGT#', '#TGT#', '#TGT#', '#TGT#', '#TTT#')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('Q', Predicates.blocks(GTBlocks.CASING_TITANIUM_PIPE.get()))
            .where('A', Predicates.blocks(GTBlocks.FIREBOX_TITANIUM.get()))
            .where('T', Predicates.blocks('cosmiccore:high_temperature_fission_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .build())
        .workableCasingRenderer('cosmiccore:block/casings/solid/high_temperature_fission_casing', 'gtceu:block/multiblock/fusion_reactor', false);


    //Large Floral Propagator
    event.create('industrial_grade_floral_propagator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        ["recipeTypes(com.gregtechceu.gtceu.api.recipe.GTRecipeType[])"]([GTRecipeTypes.get('flora_nurturer'), GTRecipeTypes.get('nether_catalyzer')])
        // .recipeTypes(["flora_nurturer", "nether_catalyzer"])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBBBBBB', 'BQQQQQB', 'BQQQQQB', 'BQQQQQB', 'BBBBBBB')
            .aisle('BBBBBBB', 'QGGGGGQ', 'QRRRRRQ', 'Q#####Q', 'BLLLLLB')
            .aisle('BBBBBBB', 'QGPGPGQ', 'QR#R#RQ', 'Q#####Q', 'BPPPPPB')
            .aisle('BBBBBBB', 'QGGGGGQ', 'QRRRRRQ', 'Q#####Q', 'BLLLLLB')
            .aisle('BBBCBBB', 'BQQQQQB', 'BQQQQQB', 'BQQQQQB', 'BBBBBBB')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('B', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
            )
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('G', Predicates.blocks('minecraft:moss_block'))
            .where('R', Predicates.blocks('minecraft:flowering_azalea'))
            .where('Q', Predicates.blocks('gtceu:tempered_glass'))
            .where('L', Predicates.blocks('cosmiccore:antiblock_white'))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/machines/flora_nurturer', false);
    event.create('pulse_heat_exchanger', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        //
        .recipeType('pulse_exchange_steam_vent')
        // ["recipeTypes(com.gregtechceu.gtceu.api.recipe.GTRecipeType[])"]('pulse_exchange_steam_vent','pulse_exchange_steam' )
        .appearanceBlock(() => Block.getBlock('cosmiccore:highly_conductive_fission_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('TTT', 'TGT', 'TGT', 'TGT', 'TTT',)
            .aisle('TTT', 'GQG', 'GQG', 'GQG', 'TTT',)
            .aisle('TCT', 'TGT', 'TGT', 'TGT', 'TTT',)
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('Q', Predicates.blocks(GTBlocks.CASING_TITANIUM_PIPE.get()))
            .where('T', Predicates.blocks('cosmiccore:highly_conductive_fission_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .build())
        .workableCasingRenderer('cosmiccore:block/casings/solid/highly_conductive_fission_casing', 'gtceu:block/multiblock/fusion_reactor', false);

    event.create('fake_dimensional_energy_hub', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.HIGH_POWER_CASING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BCCCCCB', 'B#####B', 'BCCCCCB', '#######', '#######')
            .aisle('CBBBBBC', '#BBBBB#', 'CBBBBBC', '#GGGGG#', '#GGGGG#')
            .aisle('CBBBBBC', '#BSSSB#', 'CBBBBBC', '#GQQQG#', '#GGGGG#')
            .aisle('CBBBBBC', '#BSBSB#', 'CBBBBBC', '#GQQQG#', '#GGGGG#')
            .aisle('CBBBBBC', '#BSSSB#', 'CBBBBBC', '#GQQQG#', '#GGGGG#')
            .aisle('CBBBBBC', '#BBBBB#', 'CBBBBBC', '#GGGGG#', '#GGGGG#')
            .aisle('BCCMCCB', 'B#####B', 'BCCCCCB', '#######', '#######')
            .where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('S', Predicates.blocks(GTBlocks.SUPERCONDUCTING_COIL.get()))
            .where('Q', Predicates.blocks('gtceu:ev_lapotronic_battery') //NOTE : The Layer with the batteries should be extensible like the DT/PSS (4th slice)
                .or(Predicates.blocks('gtceu:ev_lapotronic_battery'))
                .or(Predicates.blocks('gtceu:iv_lapotronic_battery'))
                .or(Predicates.blocks('gtceu:luv_lapotronic_battery'))
                .or(Predicates.blocks('gtceu:zpm_lapotronic_battery'))
                .or(Predicates.blocks('gtceu:uv_lapotronic_battery'))
                .or(Predicates.blocks('gtceu:uhv_lapotronic_battery'))
            )
            .where('B', Predicates.blocks('gtceu:advanced_computer_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
            .where('C', Predicates.blocks(GTBlocks.HIGH_POWER_CASING.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
            .where('G', Predicates.blocks('gtceu:laminated_glass'))
            .build())
        .workableCasingRenderer('gtceu:block/casings/hpca/high_power_casing', 'gtceu:block/machines/mana_fluidizer', false);

    event.create('fake_dimensional_energy_substation', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.HIGH_POWER_CASING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BCB', 'CCC', 'BCB')
            .aisle('CCC', 'CSC', 'CCC')
            .aisle('BCB', 'CMC', 'BCB')
            .where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks(GTBlocks.FUSION_COIL.get()))
            .where('B', Predicates.blocks('gtceu:advanced_computer_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
            .where('C', Predicates.blocks(GTBlocks.HIGH_POWER_CASING.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
            .build())
        .workableCasingRenderer('gtceu:block/casings/hpca/high_power_casing', 'gtceu:block/machines/mana_fluidizer', false);

    event.create('arboreal_growth_facility', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('arboreal_growth_facility')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('##TTT##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##TTT##', '#######')
            .aisle('#TTTTT#', '#FTMTF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#TTTTT#', '##SSS##')
            .aisle('TTTTTTT', 'STMMMTS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'TT###TT', '#SSSSS#')
            .aisle('TTTTTTT', 'GMMMMMG', 'G#####G', 'G#####G', 'G#####G', 'G#####G', 'G#####G', 'G#####G', 'T#####T', '#SSPSS#')
            .aisle('TTTTTTT', 'STMMMTS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'TT###TT', '#SSSSS#')
            .aisle('#TTTTT#', '#FTMTF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#TTTTT#', '##SSS##')
            .aisle('##TCT##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##TTT##', '#######')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('M', Predicates.blocks('minecraft:moss_carpet'))
            .where('P', Predicates.blocks('cosmiccore:antiblock_white'))
            .where('F', Predicates.blocks('gtceu:terrasteel_frame'))
            .where('S', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('T', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
            )
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/machines/mana_fluidizer', false);


})

//Recipe Map/type - DEFINE THESE OR THE GAME WILL CRASH
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('masonry_oven')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 0, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
    event.create('aio_lithography_processor')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(6, 3, 2, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
    event.create('flora_nurturer')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(2, 3, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR);
    event.create('large_floral_propagator')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(2, 3, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE);
    event.create('molten_salt_reactor')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(3, 0, 6, 6)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE);
    event.create('fake_wireless_hatch')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 6, 6)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE);
    event.create('pulse_exchange_steam')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 6, 6)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);
    event.create('pulse_exchange_steam_vent')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 6, 6)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);
    event.create('nether_catalyzer')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(1, 3, 0, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
    event.create('mana_simulator')
        .category('frontiers')
        .setMaxIOSize(2, 2, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)
    event.create('essence_reactor')
        .category('frontiers')
        .setMaxIOSize(6, 6, 6, 6)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)
    event.create('arboreal_growth_facility')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(2, 9, 3, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)

    //Custom Spooling Machine for Ars
    event.create('spooling_machine')
        .category('frontiers')
        .setMaxIOSize(2, 2, 1, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
    event.create('tempering_autoclave')
        .category('frontiers')
        .setMaxIOSize(4, 3, 2, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
    event.create('laminator')
        .category('frontiers')
        .setMaxIOSize(2, 2, 2, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MIXER)
    event.create('mana_fluidizer')
        .category('frontiers')
        .setMaxIOSize(1, 1, 1, 1) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})