ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('arboreal_growth_facility')
        .itemInputs(['gtceu:hv_machine_hull', '4x #gtceu:circuits/hv', '2x gtceu:hv_robot_arm', 'gtceu:hv_electric_pump', 'minecraft:redstone_lamp', '2x gtceu:terrasteel_screw'])
        .inputFluids('gtceu:aether_augmented_sediment 1250')
        .itemOutputs('gtceu:arboreal_growth_facility')
        .circuit(3)
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    let TreesOW = [
        'minecraft:oak',
        'minecraft:spruce',
        'minecraft:birch',
        'minecraft:jungle',
        'minecraft:acacia',
        'minecraft:dark_oak',
        'minecraft:cherry',
        'biomesoplenty:fir',
        'biomesoplenty:redwood',
        'biomesoplenty:mahogany',
        'biomesoplenty:jacaranda',
        'biomesoplenty:palm',
        'biomesoplenty:willow',
        'biomesoplenty:dead',
        'biomesoplenty:magic',
        'biomesoplenty:umbran',
        'biomesoplenty:hellbark',
        'occultism:otherworld',
        'architects_palette:twisted',
   ]

   TreesOW.forEach(tree => {
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_nether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs(`3x ${tree}_log`, '3x minecraft:stick')
        .chancedOutput(`1x ${tree}_log`, 5000, 500)
        .chancedOutput('1x minecraft:stick', 5000, 500)
        .chancedOutput(`${tree}_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs(`6x ${tree}_log`, '6x minecraft:stick')
        .chancedOutput(`2x ${tree}_log`, 5000, 500)
        .chancedOutput('2x minecraft:stick', 5000, 500)
        .chancedOutput(`${tree}_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV] / 2)
   })

    event.recipes.gtceu.arboreal_growth_facility(`mangrove_nether_sediment`)
        .notConsumable(`1x minecraft:mangrove_propagule`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs(`3x minecraft:mangrove_log`, '3x minecraft:mangrove_roots', '3x minecraft:stick')
        .chancedOutput(`1x minecraft:mangrove_log`, 5000, 500)
        .chancedOutput(`1x minecraft:mangrove_roots`, 5000, 500)
        .chancedOutput('1x minecraft:stick', 5000, 500)
        .chancedOutput(`minecraft:mangrove_propagule`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.arboreal_growth_facility(`mangrove_aether_sediment`)
        .notConsumable(`1x minecraft:mangrove_propagule`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs(`6x minecraft:mangrove_log`, '6x minecraft:mangrove_roots', '6x minecraft:stick')
        .chancedOutput(`2x minecraft:mangrove_log`, 5000, 500)
        .chancedOutput(`2x minecraft:mangrove_roots`, 5000, 500)
        .chancedOutput('2x minecraft:stick', 5000, 500)
        .chancedOutput(`minecraft:mangrove_propagule`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV] / 2)
        
    event.recipes.gtceu.arboreal_growth_facility(`rubber_nether_sediment`)
        .notConsumable(`1x gtceu:rubber_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs(`3x gtceu:rubber_log`, '3x gtceu:sticky_resin', '3x minecraft:stick')
        .chancedOutput(`1x gtceu:rubber_log`, 5000, 500)
        .chancedOutput(`1x gtceu:sticky_resin`, 5000, 500)
        .chancedOutput('1x minecraft:stick', 5000, 500)
        .chancedOutput(`1x gtceu:rubber_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.arboreal_growth_facility(`rubber_aether_sediment`)
        .notConsumable(`1x gtceu:rubber_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs(`6x gtceu:rubber_log`, '6x gtceu:sticky_resin', '6x minecraft:stick')
        .chancedOutput(`2x gtceu:rubber_log`, 5000, 500)
        .chancedOutput(`2x gtceu:sticky_resin`, 5000, 500)
        .chancedOutput('2x minecraft:stick', 5000, 500)
        .chancedOutput(`1x gtceu:rubber_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV] / 2)

    event.recipes.gtceu.arboreal_growth_facility(`menril_nether_sediment`)
        .notConsumable(`1x integrateddynamics:menril_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs(`3x integrateddynamics:menril_log`, '3x integrateddynamics:menril_berries', '3x minecraft:stick')
        .chancedOutput(`1x integrateddynamics:menril_log`, 5000, 500)
        .chancedOutput(`1x integrateddynamics:menril_berries`, 5000, 500)
        .chancedOutput('1x minecraft:stick', 5000, 500)
        .chancedOutput(`1x integrateddynamics:menril_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.arboreal_growth_facility(`menril_aether_sediment`)
        .notConsumable(`1x integrateddynamics:menril_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs(`6x integrateddynamics:menril_log`, '6x integrateddynamics:menril_berries', '6x minecraft:stick')
        .chancedOutput(`2x integrateddynamics:menril_log`, 5000, 500)
        .chancedOutput(`2x integrateddynamics:menril_berries`, 5000, 500)
        .chancedOutput('2x minecraft:stick', 5000, 500)
        .chancedOutput(`1x integrateddynamics:menril_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV] / 2)


   let TreesFruit = [
    'croptopia:almond',
    'croptopia:apricot',
    'croptopia:avocado',
    'croptopia:banana',
    'croptopia:cashew',
    'croptopia:cherry',
    'croptopia:coconut',
    'croptopia:date',
    'croptopia:dragonfruit',
    'croptopia:fig',
    'croptopia:grapefruit',
    'croptopia:kumquat',
    'croptopia:lemon',
    'croptopia:lime',
    'croptopia:mango',
    'croptopia:nectarine',
    'croptopia:nutmeg',
    'croptopia:orange',
    'croptopia:peach',
    'croptopia:pear',
    'croptopia:pecan',
    'croptopia:persimmon',
    'croptopia:plum',
    'croptopia:starfruit',
    'croptopia:walnut',
    'croptopia:cinnamon'
   ]

   TreesFruit.forEach(tree => {
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_nether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs('3x minecraft:oak_log', `3x ${tree}`, '3x minecraft:stick')
        .chancedOutput(`1x minecraft:oak_log`, 5000, 500)
        .chancedOutput(`1x ${tree}`, 5000, 500)
        .chancedOutput('1x minecraft:stick', 5000, 500)
        .chancedOutput(`${tree}_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs('6x minecraft:oak_log', `6x ${tree}`, '6x minecraft:stick')
        .chancedOutput(`2x minecraft:oak_log`, 5000, 500)
        .chancedOutput(`2x ${tree}`, 5000, 500)
        .chancedOutput('2x minecraft:stick', 5000, 500)
        .chancedOutput(`${tree}_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV] / 2)   
   })

   event.recipes.gtceu.arboreal_growth_facility(`apple_nether_sediment`)
        .notConsumable(`1x croptopia:apple_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs('3x minecraft:oak_log', '3x minecraft:apple', '3x minecraft:stick')
        .chancedOutput(`1x minecraft:oak_log`, 5000, 500)
        .chancedOutput(`1x minecraft:apple`, 5000, 500)
        .chancedOutput('1x minecraft:stick', 5000, 500)
        .chancedOutput(`1x croptopia:apple_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.arboreal_growth_facility(`apple_aether_sediment`)
        .notConsumable(`1x croptopia:apple_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs('6x minecraft:oak_log', '6x minecraft:apple', '6x minecraft:stick')
        .chancedOutput(`2x minecraft:oak_log`, 5000, 500)
        .chancedOutput(`2x minecraft:apple`, 5000, 500)
        .chancedOutput('2x minecraft:stick', 5000, 500)
        .chancedOutput(`1x croptopia:apple_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV] / 2)


   let TreesArs = [
    'ars_nouveau:green_archwood',
    'ars_nouveau:purple_archwood',
    'ars_nouveau:red_archwood',
    'ars_nouveau:blue_archwood',
   ]
   let FruitsArs = [
    'ars_nouveau:mendosteen_pod',
    'ars_nouveau:bastion_pod',
    'ars_nouveau:bombegranate_pod',
    'ars_nouveau:frostaya_pod',
   ]

   TreesArs.forEach((tree,index) => {
    let fruit = FruitsArs[index]
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_nether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100', 'gtceu:source_oils 50'])
        .itemOutputs(`3x ${tree}_log`, `3x ${fruit}`, '3x minecraft:stick')
        .chancedOutput(`1x ${tree}_log`, 5000, 500)
        .chancedOutput(`1x ${fruit}`, 5000, 500)
        .chancedOutput('1x minecraft:stick', 5000, 500)
        .chancedOutput(`${tree}_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100', 'gtceu:source_oils 50'])
        .itemOutputs(`6x ${tree}_log`, `6x ${fruit}`, '6x minecraft:stick')
        .chancedOutput(`2x ${tree}_log`, 5000, 500)
        .chancedOutput(`2x ${fruit}`, 5000, 500)
        .chancedOutput('2x minecraft:stick', 5000, 500)
        .chancedOutput(`${tree}_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV] / 2)
   })

   let FungiNE = [
    'minecraft:warped',
    'minecraft:crimson'
   ]

   FungiNE.forEach(tree => {
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_nether_sediment`)
        .notConsumable(`1x ${tree}_fungus`)
        .notConsumable(`1x ${tree}_nylium`)
        .inputFluids(['gtceu:nether_sediment_sludge 200', 'gtceu:nether_air 100'])
        .itemOutputs(`3x ${tree}_stem`,'3x minecraft:shroomlight')
        .chancedOutput(`1x ${tree}_stem`, 5000, 500)
        .chancedOutput(`1x minecraft:shroomlight`, 5000, 500)
        .chancedOutput(`${tree}_fungus`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
        .notConsumable(`1x ${tree}_fungus`)
        .notConsumable(`1x ${tree}_nylium`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:nether_air 100'])
        .itemOutputs(`6x ${tree}_stem`, '6x minecraft:shroomlight')
        .chancedOutput(`2x ${tree}_stem`, 5000, 500)
        .chancedOutput(`2x minecraft:shroomlight`, 5000, 500)
        .chancedOutput(`${tree}_fungus`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV] / 2)
   })

   let TreesAE = [
    'aether:golden_oak',
    'deep_aether:roseroot',
    'deep_aether:yagroot',
    'deep_aether:cruderoot',
    'deep_aether:conberry',
    'deep_aether:sunroot',
    'aether:skyroot'
   ]

   TreesAE.forEach(tree => {
    if (tree == 'aether:golden_oak') {
        event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
            .notConsumable(`1x ${tree}_sapling`)
            .notConsumable('1x aether:enchanted_aether_grass_block')
            .inputFluids(['gtceu:aether_augmented_sediment 200', 'gtceu:aether_air 100'])
            .itemOutputs(`3x ${tree}_log`, '3x aether:golden_amber', '3x minecraft:stick')
            .chancedOutput(`1x ${tree}_log`, 5000, 500)
            .chancedOutput(`1x aether:golden_amber`, 5000, 500)
            .chancedOutput('1x minecraft:stick', 5000, 500)
            .chancedOutput(`${tree}_sapling`, 1000, 0)
            .duration(100)
            .EUt(GTValues.VA[GTValues.MV] / 2)
    } else {
        event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
            .notConsumable(`1x ${tree}_sapling`)
            .notConsumable('1x aether:aether_dirt')
            .inputFluids(['gtceu:aether_augmented_sediment 200', 'gtceu:aether_air 100'])
            .itemOutputs(`3x ${tree}_log`, '3x minecraft:stick')
            .chancedOutput(`2x ${tree}_log`, 5000, 500)
            .chancedOutput('2x minecraft:stick', 5000, 500)
            .chancedOutput(`${tree}_sapling`, 1000, 0)
            .duration(100)
            .EUt(GTValues.VA[GTValues.MV] / 2)
    }
   })
})