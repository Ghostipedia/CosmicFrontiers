
ServerEvents.recipes(event => {
    let floraOverworld = [
        'minecraft:carrot',
        'minecraft:potato',
        'minecraft:sweet_berries',
        'minecraft:glow_berries',
        'minecraft:kelp',
        'minecraft:brown_mushroom',
        'minecraft:red_mushroom',
        'minecraft:dandelion',
        'minecraft:poppy',
        'minecraft:blue_orchid',
        'minecraft:allium',
        'minecraft:azure_bluet',
        'minecraft:red_tulip',
        'minecraft:orange_tulip',
        'minecraft:white_tulip',
        'minecraft:pink_tulip',
        'minecraft:oxeye_daisy',
        'minecraft:cornflower',
        'minecraft:lily_of_the_valley',
        'minecraft:pink_petals',
        'minecraft:spore_blossom',
        'minecraft:sugar_cane',
        'minecraft:vine',
        'minecraft:sunflower',
        'minecraft:lilac',
        'minecraft:rose_bush',
        'minecraft:peony',
        'minecraft:big_dripleaf',
        'minecraft:small_dripleaf',
        'minecraft:lily_pad',
        'minecraft:seagrass',
        'minecraft:sea_pickle',
        'minecraft:tube_coral_block',
        'minecraft:brain_coral_block',
        'minecraft:bubble_coral_block',
        'minecraft:fire_coral_block',
        'minecraft:horn_coral_block',
        'minecraft:tube_coral',
        'minecraft:brain_coral',
        'minecraft:bubble_coral',
        'minecraft:fire_coral',
        'minecraft:horn_coral',
        'minecraft:tube_coral_fan',
        'minecraft:brain_coral_fan',
        'minecraft:bubble_coral_fan',
        'minecraft:fire_coral_fan',
        'minecraft:horn_coral_fan',
        'minecraft:moss_block',
        'minecraft:moss_carpet',
        'farmersdelight:onion',
        'miners_delight:cave_carrot',
        'vintagedelight:peanut',
        'vintagedelight:gearo_berry',
        'delightful:green_tea_leaf',
        'biomesoplenty:reed',
        'biomesoplenty:cattail',
        'biomesoplenty:huge_lily_pad',
        'biomesoplenty:wilted_lily',
        'biomesoplenty:icy_iris',
        'biomesoplenty:white_petals',
        'biomesoplenty:waterlily',
        'biomesoplenty:pink_hibiscus',
        'biomesoplenty:pink_daffodil',
        'biomesoplenty:orange_cosmos',
        'biomesoplenty:goldenrod',
        'biomesoplenty:wildflower',
        'biomesoplenty:blue_hydrangea',
        'biomesoplenty:lavender',
        'biomesoplenty:violet',
        'biomesoplenty:rose',
        'biomesoplenty:glowing_moss_carpet',
        'biomesoplenty:glowing_moss_block',
        'biomesoplenty:glowshroom',
        'biomesoplenty:toadstool',
    ]

    floraOverworld.forEach(floraOw => {
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nether`)
            .notConsumable(`1x ${floraOw}`)
            .notConsumable('1x minecraft:dirt')
            .inputFluids('gtceu:nether_sediment_sludge 100')
            .itemOutputs(`2x ${floraOw}`)
            .chancedOutput(`1x ${floraOw}`, 5000, 500)
            .duration(160)
            .EUt(GTValues.VA[GTValues.LV] / 2)
        event.recipes.gtceu.flora_nurturer(`${floraOw}_aether`)
            .notConsumable(`1x ${floraOw}`)
            .notConsumable('1x minecraft:dirt')
            .inputFluids('gtceu:aether_augmented_sediment 100')
            .itemOutputs(`4x ${floraOw}`)
            .chancedOutput(`2x ${floraOw}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2)
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nutrient_solution`)
            .notConsumable(`1x ${floraOw}`)
            .notConsumable('minecraft:moss_block')
            .inputFluids('gtceu:nutrient_solution 50')
            .itemOutputs(`24x ${floraOw}`)
            .chancedOutput(`16x ${floraOw}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2)
    })

    event.recipes.gtceu.flora_nurturer(`cactus_nether`)
        .notConsumable('1x minecraft:cactus')
        .notConsumable('1x minecraft:sand')
        .inputFluids('gtceu:nether_sediment_sludge 100')
        .itemOutputs('2x minecraft:cactus')
        .chancedOutput(`1x minecraft:cactus`, 5000, 500)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.flora_nurturer(`cactus_aether`)
        .notConsumable('1x minecraft:cactus')
        .notConsumable('1x minecraft:sand')
        .inputFluids('gtceu:aether_augmented_sediment 100')
        .itemOutputs('4x minecraft:cactus')
        .chancedOutput(`2x minecraft:cactus`, 5000, 500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.flora_nurturer(`cactus_nutrient_solution`)
        .notConsumable('1x minecraft:cactus')
        .notConsumable('1x minecraft:sand')
        .inputFluids('gtceu:nutrient_solution 50')
        .itemOutputs('16x minecraft:cactus')
        .chancedOutput(`8x minecraft:cactus`, 5000, 500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    let floraOverworldSeeds = [
        'minecraft:wheat',
        'minecraft:beetroot',
        'minecraft:melon',
        'minecraft:pumpkin',
        'minecraft:torchflower',
        'farmersdelight:cabbage',
        'farmersdelight:tomato',
        'supplementaries:flax',
        'occultism:datura',
        'delightful:cantaloupe',
        'vintagedelight:oat',
        'vintagedelight:ghost_pepper',
        'vintagedelight:cucumber',
        'corn_delight:corn',
        'croptopia:vanilla',
    ]

    floraOverworldSeeds.forEach(floraOw => {
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nether`)
            .notConsumable(`1x ${floraOw}_seeds`)
            .notConsumable('minecraft:dirt')
            .inputFluids('gtceu:nether_sediment_sludge 100')
            .itemOutputs(`2x ${floraOw}`)
            .chancedOutput(`1x ${floraOw}`, 5000, 500)
            .duration(160)
            .EUt(GTValues.VA[GTValues.LV] / 2)
        event.recipes.gtceu.flora_nurturer(`${floraOw}_aether`)
            .notConsumable(`1x ${floraOw}_seeds`)
            .notConsumable('minecraft:dirt')
            .inputFluids('gtceu:aether_augmented_sediment 100')
            .itemOutputs(`4x ${floraOw}`)
            .chancedOutput(`2x ${floraOw}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2)
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nutrient_solution`)
            .notConsumable(`1x ${floraOw}_seeds`)
            .notConsumable('minecraft:moss_block')
            .inputFluids('gtceu:nutrient_solution 50')
            .itemOutputs(`24x ${floraOw}`)
            .chancedOutput(`16x ${floraOw}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2)
    })

    let floraOverworldSeed = [
        'croptopia:artichoke',
        'croptopia:asparagus',
        'croptopia:barley',
        'croptopia:basil',
        'croptopia:bellpepper',
        'croptopia:blackbean',
        'croptopia:blackberry',
        'croptopia:blueberry',
        'croptopia:broccoli',
        'croptopia:cabbage',
        'croptopia:cantaloupe',
        'croptopia:cauliflower',
        'croptopia:celery',
        'croptopia:chile_pepper',
        'croptopia:corn',
        'croptopia:cranberry',
        'croptopia:cucumber',
        'croptopia:currant',
        'croptopia:eggplant',
        'croptopia:elderberry',
        'croptopia:garlic',
        'croptopia:ginger',
        'croptopia:grape',
        'croptopia:greenbean',
        'croptopia:greenonion',
        'croptopia:honeydew',
        'croptopia:hops',
        'croptopia:kale',
        'croptopia:kiwi',
        'croptopia:leek',
        'croptopia:lettuce',
        'croptopia:mustard',
        'croptopia:oat',
        'croptopia:olive',
        'croptopia:onion',
        'croptopia:peanut',
        'croptopia:pepper',
        'croptopia:pineapple',
        'croptopia:radish',
        'croptopia:raspberry',
        'croptopia:rhubarb',
        'croptopia:rice',
        'croptopia:rutabaga',
        'croptopia:saguaro',
        'croptopia:soybean',
        'croptopia:spinach',
        'croptopia:squash',
        'croptopia:strawberry',
        'croptopia:sweetpotato', ,
        'croptopia:tomatillo',
        'croptopia:tomato',
        'croptopia:turmeric',
        'croptopia:turnip',
        'croptopia:yam',
        'croptopia:zucchini'
    ]

    floraOverworldSeed.forEach(floraOw => {
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nether`)
            .notConsumable(`1x ${floraOw}_seed`)
            .notConsumable('minecraft:dirt')
            .inputFluids('gtceu:nether_sediment_sludge 100')
            .itemOutputs(`2x ${floraOw}`)
            .chancedOutput(`1x ${floraOw}`, 5000, 500)
            .duration(160)
            .EUt(GTValues.VA[GTValues.LV] / 2)
        event.recipes.gtceu.flora_nurturer(`${floraOw}_aether`)
            .notConsumable(`1x ${floraOw}_seed`)
            .notConsumable('minecraft:dirt')
            .inputFluids('gtceu:aether_augmented_sediment 100')
            .itemOutputs(`4x ${floraOw}`)
            .chancedOutput(`2x ${floraOw}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2)
        event.recipes.gtceu.flora_nurturer(`${floraOw}_nutrient_solution`)
            .notConsumable(`1x ${floraOw}_seed`)
            .notConsumable('minecraft:moss_block')
            .inputFluids('gtceu:nutrient_solution 50')
            .itemOutputs(`24x ${floraOw}`)
            .chancedOutput(`16x ${floraOw}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2)
    })

    //Coffee
    event.recipes.gtceu.flora_nurturer('coffee_nether')
        .notConsumable('croptopia:coffee_seed')
        .notConsumable('minecraft:dirt')
        .inputFluids('gtceu:nether_sediment_sludge 100')
        .itemOutputs('2x croptopia:coffee_beans')
        .chancedOutput(`1x croptopia:coffee_beans`, 5000, 500)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.flora_nurturer('coffee_aether')
        .notConsumable('croptopia:coffee_seed')
        .notConsumable('minecraft:dirt')
        .inputFluids('gtceu:aether_augmented_sediment 100')
        .itemOutputs('4x croptopia:coffee_beans')
        .chancedOutput(`2x croptopia:coffee_beans`, 5000, 500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV] / 2)
    //Tea
    event.recipes.gtceu.flora_nurturer('tea_nether')
        .notConsumable('croptopia:tea_seed')
        .notConsumable('minecraft:dirt')
        .inputFluids('gtceu:nether_sediment_sludge 100')
        .itemOutputs('2x croptopia:tea_leaves')
        .chancedOutput(`2x croptopia:tea_leaves`, 5000, 500)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.flora_nurturer('tea_aether')
        .notConsumable('croptopia:tea_seed')
        .notConsumable('minecraft:dirt')
        .inputFluids('gtceu:aether_augmented_sediment 100')
        .itemOutputs('4x croptopia:tea_leaves')
        .chancedOutput(`2x croptopia:tea_leaves`, 5000, 500)
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV] / 2)
    //Soul Sprout
    event.recipes.gtceu.flora_nurturer('soul_cultivation')
        .notConsumable('cold_sweat:soul_sprout')
        .notConsumable('minecraft:soul_sand')
        .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 500))
        .itemOutputs('cold_sweat:soul_sprout')
        .chancedOutput(Item.of('cold_sweat:soul_sprout', 1), 2500, 500)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV] / 2);
    event.recipes.gtceu.flora_nurturer('soul_cultivation_nutrient_sol')
        .notConsumable('cold_sweat:soul_sprout')
        .notConsumable('minecraft:soul_sand')
        .inputFluids('gtceu:nutrient_solution 50')
        .itemOutputs('16x cold_sweat:soul_sprout')
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV] / 2);
    let floraNether = [
        'biomesoplenty:glowflower',
        'biomesoplenty:burning_blossom',
        'biomesoplenty:bramble',
        'minecraft:nether_wart',
        'minecraft:twisting_vines',
        'minecraft:weeping_vines',
        'minecraft:nether_sprouts',
        'minecraft:warped_roots',
        'minecraft:crimson_roots',
        'minecraft:warped_fungus',
        'minecraft:crimson_fungus'
    ]

    floraNether.forEach(floraNe => {
        event.recipes.gtceu.flora_nurturer(`${floraNe}_nether`)
            .notConsumable(`1x ${floraNe}`)
            .notConsumable('1x minecraft:netherrack')
            .inputFluids('gtceu:nether_sediment_sludge 200')
            .itemOutputs(`2x ${floraNe}`)
            .chancedOutput(`1x ${floraNe}`, 5000, 500)
            .duration(160)
            .EUt(GTValues.VA[GTValues.LV] / 2)
        event.recipes.gtceu.flora_nurturer(`${floraNe}_aether`)
            .notConsumable(`1x ${floraNe}`)
            .notConsumable('1x minecraft:netherrack')
            .inputFluids('gtceu:aether_augmented_sediment 100')
            .itemOutputs(`4x ${floraNe}`)
            .chancedOutput(`2x ${floraNe}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2 / 2)
    })

    let floraAether = [
        'deep_aether:lightcap_mushrooms',
        'deep_aether:radiant_orchid',
        'deep_aether:aerlavender',
        'deep_aether:aether_cattails',
        'deep_aether:golden_flower',
        'deep_aether:enchanted_blossom',
        'deep_aether:sky_tulips',
        'deep_aether:iaspove',
        'deep_aether:golden_aspess',
        'deep_aether:echaisy',
        'aether:purple_flower',
        'aether:white_flower',
        'aether:aechor_petal'
    ]

    floraAether.forEach(floraAe => {
        event.recipes.gtceu.flora_nurturer(`${floraAe}_aether`)
            .notConsumable(`1x ${floraAe}`)
            .notConsumable('1x aether:aether_dirt')
            .inputFluids('gtceu:aether_augmented_sediment 100')
            .itemOutputs(`2x ${floraAe}`)
            .chancedOutput(`1x ${floraAe}`, 5000, 500)
            .duration(120)
            .EUt(GTValues.VA[GTValues.MV] / 2)
    })

    event.recipes.gtceu.flora_nurturer('berry_aether')
        .notConsumable('1x aether:berry_bush')
        .notConsumable('1x aether:aether_dirt')
        .inputFluids('gtceu:aether_augmented_sediment 200')
        .itemOutputs('1x aether:blue_berry')
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV] / 2)

    event.recipes.gtceu.flora_nurturer('amber_aether')
        .notConsumable('1x aether:golden_oak_sapling')
        .notConsumable('1x aether:aether_dirt')
        .inputFluids('gtceu:aether_augmented_sediment 200')
        .itemOutputs('1x aether:golden_amber')
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV] / 2)

    let floraUndergarden = [

    ]
    let floraLunar = [

    ]
    //Flora Nurturer Recipes



    //Industrial Grade Floral Propagator controller block
    event.recipes.gtceu.assembler('Industrial_Propagator')
        .itemInputs(['1x gtceu:hv_machine_hull','4x #gtceu:circuits/hv','2x gtceu:hv_robot_arm','gtceu:hv_electric_pump','1x minecraft:redstone_lamp','2x gtceu:terrasteel_screw'])
        .inputFluids('gtceu:aether_augmented_sediment 1250')
        .itemOutputs('1x gtceu:industrial_grade_floral_propagator')
        .duration(200)
        .circuit(2)
        .EUt(GTValues.VA[GTValues.HV])






    // event.recipes.gtceu.('cosmiccore:pearl_cultivation')
    // .notConsumable('nethersdelight:propelpearl')
    // .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 500))
    // .itemOutputs('2x cosmiccore:overloaded_pearls')
    // .itemOutputs('2x nethersdelight:propelpearl')
    // .chancedOutput(Item.of('nethersdelight:propelpearl', 1), 5000, 500)
    // .duration(160)
    // .EUt(16);
})