
let i = 0
let fookinlong = '';
for (i = 0; i < 19; ++i) fookinlong += Math.floor(Math.random() * 10);


let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', itemName)
    event.add('forge:viewers/hidden_from_recipe', itemName)
  })
}
let DESTROY = ['mae2:256x_crafting_accelerator', 'mae2:64x_crafting_accelerator', 'mae2:16x_crafting_accelerator', 'mae2:4x_crafting_accelerator']

ServerEvents.tags('item', event => {
  event.add('forge:viewers/hidden_from_recipe', DESTROY)
  event.add('c:hidden_from_recipe_viewers', DESTROY)
})

ServerEvents.recipes(event => {
  DESTROY.forEach(yeetus => {
    event.remove({ output: `${yeetus}` })
  })
})

//Oh jeebus AE2 Recipe Yeeting
yeet('gtceu:me_input_bus')
yeet('gtceu:me_input_hatch')
yeet('ae2:fluix_glass_cable')
yeet('ae2:fluix_covered_cable')
yeet('ae2:fluix_covered_dense_cable')
yeet('ae2:printed_calculation_processor')
yeet('ae2:printed_silicon')
yeet('ae2:printed_engineering_processor')
yeet('ae2:printed_logic_processor')
yeet('ae2:logic_processor')
yeet('ae2:calculation_processor')
yeet('ae2:engineering_processor')
yeet('megacells:accumulation_processor_press')
yeet('megacells:printed_accumulation_processor')
yeet('megacells:accumulation_processor')
yeet('ae2:certus_quartz_axe')
yeet('ae2:nether_quartz_axe')
yeet('ae2:fluix_axe')
yeet('ae2:certus_quartz_hoe')
yeet('ae2:nether_quartz_hoe')
yeet('ae2:fluix_hoe')
yeet('ae2:certus_quartz_shovel')
yeet('ae2:nether_quartz_shovel')
yeet('ae2:fluix_shovel')
yeet('ae2:certus_quartz_pickaxe')
yeet('ae2:nether_quartz_pickaxe')
yeet('ae2:fluix_pickaxe')
yeet('ae2:certus_quartz_sword')
yeet('ae2:nether_quartz_sword')
yeet('ae2:fluix_sword')
yeet('ae2:fluix_crystal')
yeet('ae2:fluix_dust')
yeet('ae2:certus_quartz_crystal')
yeet('ae2:certus_quartz_dust')
yeet('ae2:quartz_cluster')
yeet('ae2:large_quartz_bud')
yeet('ae2:medium_quartz_bud')
yeet('ae2:small_quartz_bud')
yeet('ae2:damaged_budding_quartz')
yeet('ae2:chipped_budding_quartz')
yeet('ae2:flawed_budding_quartz')
yeet('ae2:flawless_budding_quartz')
yeet('ae2:fluix_block')
yeet('ae2:fluix_stairs')
yeet('ae2:fluix_slab')
yeet('ae2:fluix_wall')
yeet('ae2:ender_dust')
yeet('ae2:engineering_processor_press')
yeet('ae2:calculation_processor_press')
yeet('ae2:silicon_press')
yeet('ae2:logic_processor_press')
yeet('ae2:sky_dust')
yeet('ae2:inscriber')
yeet('expatternprovider:ex_inscriber')
yeet('ae2:sky_stone_chest')
yeet('ae2:smooth_sky_stone_chest')
yeet('ae2:sky_stone_tank')
yeet('ae2:silicon')
yeet('megacells:cable_mega_interface')
yeet('megacells:cable_mega_pattern_provider')
yeet('megacells:mega_interface')
yeet('megacells:mega_pattern_provider')
yeet('ae2:vibration_chamber')
//Purging Recipes Containing these - JEI moment
// This is Incredibly Destructive, but due to how AE2 Nests/Autogens Recipes and The Migration to JEI from REI due to stability, there's some extra work I've needed to do.
let miscRemovals = ['ae2:growth_accelerator', 'ae2:condenser', 'ae2:spatial_io_port', 'ae2:spatial_pylon']
let denseCoverHidding = ['ae2:black_covered_dense_cable', 'ae2:red_covered_dense_cable', 'ae2:green_covered_dense_cable', 'ae2:brown_covered_dense_cable', 'ae2:blue_covered_dense_cable', 'ae2:purple_covered_dense_cable', 'ae2:cyan_covered_dense_cable', 'ae2:light_gray_covered_dense_cable', 'ae2:gray_covered_dense_cable', 'ae2:pink_covered_dense_cable', 'ae2:lime_covered_dense_cable', 'ae2:yellow_covered_dense_cable', 'ae2:light_blue_covered_dense_cable', 'ae2:magenta_covered_dense_cable', 'ae2:orange_covered_dense_cable', 'ae2:white_covered_dense_cable']
let quartzCableHidding = ['ae2:black_glass_cable', 'ae2:red_glass_cable', 'ae2:green_glass_cable', 'ae2:brown_glass_cable', 'ae2:blue_glass_cable', 'ae2:purple_glass_cable', 'ae2:cyan_glass_cable', 'ae2:light_gray_glass_cable', 'ae2:gray_glass_cable', 'ae2:pink_glass_cable', 'ae2:lime_glass_cable', 'ae2:yellow_glass_cable', 'ae2:light_blue_glass_cable', 'ae2:magenta_glass_cable', 'ae2:orange_glass_cable', 'ae2:white_glass_cable']
let coveredCableHidding = ['ae2:black_covered_cable', 'ae2:red_covered_cable', 'ae2:green_covered_cable', 'ae2:brown_covered_cable', 'ae2:blue_covered_cable', 'ae2:purple_covered_cable', 'ae2:cyan_covered_cable', 'ae2:light_gray_covered_cable', 'ae2:gray_covered_cable', 'ae2:pink_covered_cable', 'ae2:lime_covered_cable', 'ae2:yellow_covered_cable', 'ae2:light_blue_covered_cable', 'ae2:magenta_covered_cable', 'ae2:orange_covered_cable', 'ae2:white_covered_cable']
let processors = ['ae2:logic_processor', 'ae2:calculation_processor', 'ae2:engineering_processor', 'megacells:accumulation_processor']
ServerEvents.recipes(event => {
  event.remove({ output: 'ae2:fluix_glass_cable' })
  event.remove({ input: 'ae2:fluix_glass_cable' })
  event.remove({ output: 'ae2:fluix_crystal' })
  event.remove({ input: 'ae2:fluix_crystal' })
  event.remove({ output: 'ae2:fluix_dust' })
  event.remove({ input: 'ae2:fluix_dust' })

  event.remove({ output: miscRemovals })
  event.remove({ input: miscRemovals })
  event.remove({ output: processors })
  event.remove({ input: processors })
  event.remove({ output: denseCoverHidding })
  event.remove({ output: quartzCableHidding })
  event.remove({ output: coveredCableHidding })
  event.remove({ input: denseCoverHidding })
  event.remove({ input: quartzCableHidding })
  event.remove({ input: coveredCableHidding })
})

ServerEvents.tags('item', event => {
  event.add('forge:viewers/hidden_from_recipe', denseCoverHidding)
  event.add('c:hidden_from_recipe_viewers', denseCoverHidding)

  event.add('forge:viewers/hidden_from_recipe', quartzCableHidding)
  event.add('c:hidden_from_recipe_viewers', quartzCableHidding)

  event.add('forge:viewers/hidden_from_recipe', coveredCableHidding)
  event.add('c:hidden_from_recipe_viewers', coveredCableHidding)

  // event.add('forge:viewers/hidden_from_recipe', denseCoverHidding)
  // event.add('c:hidden_from_recipe_viewers', denseCoverHidding)
})

ServerEvents.recipes(event => {
  event.remove({ output: 'ae2:item_cell_housing' })
  event.remove({ output: 'ae2:fluid_cell_housing' })
  event.remove({ output: 'appbot:mana_cell_housing' })
  event.remove({ output: 'megacells:mega_item_cell_housing' })
  event.remove({ output: 'megacells:mega_fluid_cell_housing' })
  event.remove({ output: 'megacells:mega_mana_cell_housing' })
  event.remove({ output: 'ae2:cable_anchor' })
  event.remove({ output: 'ae2:cable_anchor' })
  event.remove({ output: 'ae2:molecular_assembler' })
  event.remove({ output: 'ae2:pattern_provider' })
  event.remove({ output: 'ae2:quartz_fiber' })
  event.remove({ output: 'ae2:quartz_glass' })
  event.remove({ output: 'ae2:interface' })
  event.remove({ id: 'ae2:network/parts/panels_semi_dark_monitor' })
  event.remove({ id: 'ae2:network/parts/storage_bus' })
  // event.remove({ output:  })
  // event.remove({ output:  })
  event.recipes.gtceu.assembly_line('assline_creative_cell_recipe')
    .itemInputs('64x megacells:mega_energy_cell', '8x #gtceu:circuits/luv', '16x gtceu:superconducting_coil', '64x ae2:fluix_smart_dense_cable', '64x ae2:fluix_smart_dense_cable', '32x gtceu:neutron_reflector')
    .itemOutputs('ae2:creative_energy_cell')
    .inputFluids(
      Fluid.of('gtceu:uu_matter', 666),
      Fluid.of('gtceu:titanium_tungsten_carbide', 4608),
      Fluid.of('gtceu:soldering_alloy', 8192),

    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('megacells:mega_energy_cell')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(500)
    .EUt(GTValues.VA[GTValues.LuV])

  event.recipes.gtceu.assembler(`ae2:singularity_creation`)
    .itemInputs(['ae2:dense_energy_cell', '4x gtceu:hv_emitter', '4x gtceu:hv_sensor', 'gtceu:hv_field_generator'])
    .itemOutputs('ae2:singularity')
    .duration(12000)
    .EUt(GTValues.VA[GTValues.HV]);

  event.shaped('ae2:io_port', [
    'SCS',
    'BDB',
    'SSS'
  ], {
    S: 'gtceu:aluminium_plate',
    C: '#gtceu:circuits/mv',
    D: 'ae2:drive',
    B: 'gtceu:mv_conveyor_module'
  })
  event.shaped('expatternprovider:ex_io_port', [
    'SCS',
    'BDB',
    'SSS'
  ], {
    S: 'cosmiccore:prismatic_tungstensteel_plate',
    C: '#gtceu:circuits/ev',
    D: 'expatternprovider:ex_drive',
    B: 'gtceu:ev_conveyor_module'
  })
  event.shaped('ae2:chest', [
    'SCS',
    'SDS',
    'SSS'
  ], {
    S: 'gtceu:aluminium_plate',
    C: 'ae2:terminal',
    D: 'ae2:drive',
    B: 'gtceu:mv_conveyor_module'
  })



  //Lord forgive me for what I'm about to make

  //This just doesn't work, will be disabled and have to make them in world for now... Entangled gates are only needed to be done rarely so it's not a huge issue imo...
  // event.recipes.gtceu.assembler(`ae2:singularity_creation_entangled`)
  //   .itemInputs(['ae2:singularity'])
  //   .itemOutputs(Item.of('2x ae2:quantum_entangled_singularity', `{freq:${fookinlong}L}`))
  //   .duration(10)
  //   .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.laminator(`ae2:fluix_pearl_lamination`)
    .itemInputs(['2x minecraft:ender_pearl', '8x gtceu:fluix_dust'])
    .itemOutputs('2x ae2:fluix_pearl')
    .duration(100)
    .EUt(GTValues.VA[GTValues.MV]);
  event.recipes.gtceu.laminator(`ae2:quartz_glass_lamination`)
    .itemInputs('gtceu:tempered_glass', 'gtceu:certus_quartz_dust')
    .itemOutputs('ae2:quartz_glass')
    .duration(100)
    .EUt(GTValues.VA[GTValues.MV]);

  event.remove({ output: 'ae2:charged_certus_quartz_crystal' })
  event.remove({ input: 'ae2:charged_certus_quartz_crystal' })
  event.recipes.gtceu.polarizer('ae2:fuck_it_we_ball')
    .itemInputs('gtceu:certus_quartz_gem')
    .itemOutputs('ae2:charged_certus_quartz_crystal')
    .duration(80)
    .EUt(GTValues.VA[GTValues.HV]);
  //Craft Core Blank
  event.recipes.gtceu.assembler('ae2:crafting_core_empty')
    .itemInputs(['gtceu:stainless_steel_frame', '4x gtceu:stainless_steel_plate', '4x gtceu:galvanized_ethersteel_plate', '4x gtceu:galvanized_ethersteel_screw', '#gtceu:circuits/hv'])
    .itemOutputs('ae2:crafting_unit')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV]);
  //Molec Assem
  event.recipes.gtceu.assembler('ae2:molecular_assembler_assembly')
    .itemInputs(['gtceu:stainless_steel_frame', '6x gtceu:glass_plate', '4x gtceu:galvanized_ethersteel_screw', 'gtceu:hv_robot_arm', 'minecraft:crafting_table'])
    .itemOutputs('ae2:molecular_assembler')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.assembler('expatternprovider:ex_molecular_assembler_assembly')
    .itemInputs(['cosmiccore:prismatic_tungstensteel_frame', '6x cosmiccore:prismatic_tungstensteel_plate', '4x gtceu:virtue_meld_screw', 'gtceu:iv_robot_arm', '4x ae2:molecular_assembler'])
    .inputFluids('gtceu:soldering_alloy 576')
    .itemOutputs('expatternprovider:ex_molecular_assembler')
    .duration(200)
    .EUt(GTValues.VA[GTValues.IV]);
  //Pattern Crafting Terminal
  event.recipes.gtceu.assembler('ae2:pattern_crafting_terminal')
    .itemInputs(['32x gtceu:fine_red_alloy_wire', '32x gtceu:fine_manasteel_wire', 'ae2:terminal', 'botania:auto_crafting_halo', 'gtceu:hv_emitter'])
    .itemOutputs('ae2:pattern_encoding_terminal')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV]);
  //Quantum Ring
  event.recipes.gtceu.assembler('ae2:quantum_ring_outside_assem')
    .itemInputs(['ae2:dense_energy_cell', '4x gtceu:galvanized_ethersteel_plate', '3x #gtceu:circuits/hv', 'ae2:fluix_smart_dense_cable'])
    .itemOutputs('ae2:quantum_ring')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV]);
  //GT Screen
  event.remove({ id: 'gtceu:assembler/cover_screen' })
  event.recipes.gtceu.assembler('gt_cover_screen')
    .itemInputs(['gtceu:glass_plate', '4x gtceu:steel_foil', '#gtceu:circuits/lv', '4x gtceu:fine_copper_wire'])
    .itemOutputs('gtceu:computer_monitor_cover')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  //Energy Cell
  event.recipes.gtceu.assembler('ae2:cell_assem')
    .itemInputs(['4x gtceu:steel_plate', '4x ae2:charged_certus_quartz_crystal', 'ae2:energy_acceptor', 'gtceu:lv_sodium_battery'])
    .itemOutputs('ae2:energy_cell')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  //Dense cell
  event.recipes.gtceu.assembler('ae2:dense_cell_assem')
    .itemInputs(['8x ae2:energy_cell', '16x gtceu:galvanized_ethersteel_plate', '32x gtceu:electrum_foil', '8x gtceu:terrasteel_double_wire'])
    .itemOutputs('ae2:dense_energy_cell')
    .duration(320)
    .EUt(GTValues.VA[GTValues.HV]);
  //Pattern Crafting Terminal
  //Pattern Terminal
  event.recipes.gtceu.assembler('ae2:data_terminal')
    .itemInputs(['32x gtceu:fine_electrum_wire', 'ae2:blank_pattern', 'ae2:terminal', 'gtceu:computer_monitor_cover'])
    .itemOutputs('ae2:pattern_access_terminal')
    .duration(320)
    .EUt(GTValues.VA[GTValues.HV]);
  //Adv Pattern Terminal
  event.recipes.gtceu.assembler('ae2:extended_data_terminal')
    .itemInputs(['32x gtceu:fine_electrum_wire', 'ae2:pattern_access_terminal', 'gtceu:data_stick'])
    .itemOutputs('expatternprovider:ex_pattern_access_part')
    .duration(320)
    .EUt(GTValues.VA[GTValues.HV]);
  //P2P Tunnel
  event.remove({ output: 'ae2:me_p2p_tunnel' })
  event.recipes.gtceu.assembler('ae2:p2p_assembly')
    .itemInputs(['4x gtceu:stainless_steel_plate', '4x ae2:charged_certus_quartz_crystal', '2x ae2:semi_dark_monitor', '#gtceu:circuits/mv', 'ae2:formation_core', 'ae2:annihilation_core'])
    .itemOutputs('4x ae2:me_p2p_tunnel')
    .duration(160)
    .EUt(GTValues.VA[GTValues.MV]);
  //Acceptor
  event.remove({ output: 'ae2:energy_acceptor' })
  event.recipes.gtceu.assembler('ae2:acceptor_assembly')
    .itemInputs(['6x gtceu:steel_plate', '4x gtceu:lv_voltage_coil', '4x #gtceu:circuits/lv', 'gtceu:lv_machine_hull'])
    .itemOutputs('ae2:energy_acceptor')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  //Controller
  event.recipes.gtceu.assembler('ae2:controller_assembly')
    .itemInputs(['8x gtceu:manasteel_hex_wire', '4x #gtceu:circuits/mv', 'ae2:energy_acceptor'])
    .itemOutputs('ae2:controller')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  //ControllerMK2
  event.recipes.gtceu.assembler('ae2:controller_assembly2')
    .itemInputs(['gtceu:galvanized_ethersteel_double_wire', '#gtceu:circuits/hv', 'ae2:energy_acceptor'])
    .itemOutputs('ae2:controller')
    .duration(80)
    .EUt(GTValues.VA[GTValues.HV]);
  //Drive Bay
  event.recipes.gtceu.assembler('ae2:drive_assembly')
    .itemInputs(['8x gtceu:steel_plate', '4x ae2:fluix_smart_cable', '2x #gtceu:circuits/lv', 'gtceu:steel_frame'])
    .itemOutputs('ae2:drive')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('expatternprovider:ex_drive_assembly')
    .itemInputs(['2x ae2:drive','8x cosmiccore:prismatic_tungstensteel_plate', '16x ae2:fluix_smart_dense_cable', '4x #gtceu:circuits/ev', 'gtceu:titanium_frame'])
    .inputFluids('gtceu:soldering_alloy 576')
    .circuit(1)
    .itemOutputs('expatternprovider:ex_drive')
    .duration(200)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.assembler('expatternprovider:drive_upgrade_assembly')
    .itemInputs(['1x ae2:drive','8x cosmiccore:prismatic_tungstensteel_plate', '16x ae2:fluix_smart_dense_cable', '4x #gtceu:circuits/ev', 'gtceu:titanium_frame'])
    .inputFluids('gtceu:soldering_alloy 576')
    .circuit(2)
    .itemOutputs('expatternprovider:drive_upgrade')
    .duration(160)
    .EUt(GTValues.VA[GTValues.EV]);
  //Illuminated Panel
  event.recipes.gtceu.assembler('ae2:monitor_assembly')
    .itemInputs(['8x gtceu:fine_annealed_copper_wire', '3x gtceu:glass_plate', 'gtceu:computer_monitor_cover', 'gtceu:steel_plate'])
    .itemOutputs('ae2:semi_dark_monitor')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  //Formation Cores
  event.recipes.gtceu.assembler('ae2:formation_assembly')
    .itemInputs(['4x #forge:flawless_gems/quartzite', 'gtceu:computer_monitor_cover', '2x #gtceu:circuits/lv'])
    .itemOutputs('4x ae2:formation_core')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('ae2:formation_assemblymk2')
    .itemInputs(['8x #forge:flawless_gems/quartzite', 'gtceu:computer_monitor_cover', '#gtceu:circuits/hv'])
    .itemOutputs('8x ae2:formation_core')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.assembler('ae2:formation_assemblymk3')
    .itemInputs(['16x #forge:flawless_gems/quartzite', '2x gtceu:computer_monitor_cover', '#gtceu:circuits/iv'])
    .itemOutputs('16x ae2:formation_core')
    .duration(160)
    .EUt(GTValues.VA[GTValues.IV]);
  event.recipes.gtceu.assembler('ae2:formation_assemblymk4')
    .itemInputs(['32x #forge:flawless_gems/quartzite', '4x gtceu:computer_monitor_cover', '#gtceu:circuits/luv'])
    .itemOutputs('32x ae2:formation_core')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LuV]);
  //Annihilation Cores
  event.recipes.gtceu.assembler('ae2:annihilation_assembly')
    .itemInputs(['4x #forge:flawless_gems/certus_quartz', 'gtceu:computer_monitor_cover', '2x #gtceu:circuits/lv'])
    .itemOutputs('4x ae2:annihilation_core')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('ae2:annihilation_assemblymk2')
    .itemInputs(['8x #forge:flawless_gems/certus_quartz', 'gtceu:computer_monitor_cover', '#gtceu:circuits/hv'])
    .itemOutputs('8x ae2:annihilation_core')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.assembler('ae2:annihilation_assemblymk3')
    .itemInputs(['16x #forge:flawless_gems/certus_quartz', '2x gtceu:computer_monitor_cover', '#gtceu:circuits/iv'])
    .itemOutputs('16x ae2:annihilation_core')
    .duration(160)
    .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.assembler('ae2:annihilation_assemblymk4')
    .itemInputs(['32x #forge:flawless_gems/certus_quartz', '4x gtceu:computer_monitor_cover', '#gtceu:circuits/luv'])
    .itemOutputs('32x ae2:annihilation_core')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LuV]);
  //Terminal Basic
  event.recipes.gtceu.assembler('ae2:terminal_assembly')
    .itemInputs(['32x gtceu:fine_annealed_copper_wire', '2x ae2:formation_core', '2x ae2:annihilation_core', 'gtceu:terminal', 'ae2:semi_dark_monitor'])
    .itemOutputs('ae2:terminal')
    .duration(320)
    .EUt(GTValues.VA[GTValues.LV]);
  //Terminal Crafting
  event.recipes.gtceu.assembler('ae2:terminal_crafting_assembly')
    .itemInputs(['32x gtceu:fine_electrum_wire', 'craftingstation:crafting_station', 'ae2:terminal'])
    .itemOutputs('ae2:crafting_terminal')
    .duration(320)
    .EUt(GTValues.VA[GTValues.LV]);
  //Interface 1x Craft
  event.recipes.gtceu.assembler('ae2:interface_assembly_t3')
    .itemInputs(['4x gtceu:steel_plate', '2x #gtceu:circuits/lv', '2x gtceu:lv_robot_arm', 'gtceu:lv_machine_hull'])
    .itemOutputs('ae2:interface')
    .duration(320)
    .EUt(GTValues.VA[GTValues.LV]);
  //Interface 4x Craft
  event.recipes.gtceu.assembler('ae2:interface_assembly_t2')
    .itemInputs(['4x gtceu:stainless_steel_plate', '2x #gtceu:circuits/hv', '2x gtceu:hv_robot_arm', 'gtceu:hv_machine_hull'])
    .itemOutputs('4x ae2:interface')
    .duration(320)
    .EUt(512);
  //Interface 8x Craft
  event.recipes.gtceu.assembler('ae2:interface_assembly_t1')
    .itemInputs(['4x gtceu:tungsten_steel_plate', '2x #gtceu:circuits/iv', '2x gtceu:iv_robot_arm', 'gtceu:iv_machine_hull'])
    .itemOutputs('8x ae2:interface')
    .duration(320)
    .EUt(8192);
  //Pattern Providers
  //Pattern Provide 1x Craft
  event.recipes.gtceu.assembler('ae2:pattern_assembly_t3')
    .itemInputs(['4x gtceu:galvanized_ethersteel_plate', '2x #gtceu:circuits/hv', '2x gtceu:hv_robot_arm', 'gtceu:hv_machine_hull'])
    .itemOutputs('ae2:pattern_provider')
    .duration(320)
    .EUt(GTValues.VA[GTValues.HV]);
  //Pattern Provide 4x Craft
  event.recipes.gtceu.assembler('ae2:pattern_assembly_t2')
    .itemInputs(['4x cosmiccore:prismatic_tungstensteel_plate', '2x #gtceu:circuits/iv', '2x gtceu:iv_robot_arm', 'gtceu:iv_machine_hull'])
    .itemOutputs('4x ae2:pattern_provider')
    .duration(320)
    .EUt(GTValues.VA[GTValues.IV]);
  //Pattern Provide 8x Craft
  event.recipes.gtceu.assembler('ae2:pattern_assembly_t1')
    .itemInputs(['4x gtceu:virtue_meld_plate', '2x #gtceu:circuits/luv', '2x gtceu:luv_robot_arm', 'gtceu:luv_machine_hull'])
    .itemOutputs('8x ae2:pattern_provider')
    .duration(320)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.assembler('ae2:item_cell_housing')
    .itemInputs(['3x gtceu:steel_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable', 'ae2:formation_core', 'ae2:annihilation_core'])
    .inputFluids(`gtceu:redstone 144`)
    .itemOutputs('ae2:item_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('ae2:fluid_cell_housing')
    .itemInputs(['3x gtceu:annealed_copper_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable', 'ae2:formation_core', 'ae2:annihilation_core'])
    .inputFluids(`gtceu:redstone 144`)
    .itemOutputs('ae2:fluid_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('appbot:mana_cell_housing')
    .itemInputs(['3x gtceu:manasteel_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable', 'ae2:formation_core', 'ae2:annihilation_core'])
    .inputFluids(`gtceu:redstone 144`)
    .itemOutputs('appbot:mana_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('arseng:source_cell_housing')
    .itemInputs(['3x gtceu:rose_gold_plate', '2x gtceu:tempered_glass', '2x gtceu:red_alloy_single_cable', 'ae2:formation_core', 'ae2:annihilation_core'])
    .inputFluids(`gtceu:redstone 144`)
    .itemOutputs('arseng:source_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('megacells:mega_item_cell_housing')
    .itemInputs(['3x gtceu:naquadah_alloy_plate','2x gtceu:fusion_glass','2x gtceu:hssg_single_cable','4x ae2:formation_core','4x ae2:annihilation_core'])
    .inputFluids('gtceu:polybenzimidazole 576')
    .itemOutputs('megacells:mega_item_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.assembler('megacells:mega_fluid_cell_housing')
    .itemInputs(['3x gtceu:trinium_plate','2x gtceu:fusion_glass','2x gtceu:hssg_single_cable','4x ae2:formation_core','4x ae2:annihilation_core'])
    .inputFluids('gtceu:polybenzimidazole 576')
    .itemOutputs('megacells:mega_fluid_cell_housing')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LuV]);
  event.recipes.gtceu.assembler('arseng:basic_card_craft')
    .itemInputs(['16x gtceu:fine_red_alloy_wire', '4x gtceu:steel_plate', '4x gtceu:rose_gold_plate', '#gtceu:circuits/mv'])
    .inputFluids(`gtceu:soldering_alloy 144`)
    .itemOutputs('4x ae2:basic_card')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.assembler('arseng:adv_card_craft')
    .itemInputs(['16x gtceu:fine_red_alloy_wire', '4x gtceu:steel_plate', '3x gtceu:diamond_plate', '#gtceu:circuits/mv'])
    .inputFluids(`gtceu:soldering_alloy 144`)
    .itemOutputs('4x ae2:advanced_card')
    .duration(80)
    .EUt(GTValues.VA[GTValues.LV]);
  //The Wireless thingy
  event.recipes.gtceu.assembler('ae2:wap')
    .itemInputs(['ae2:wireless_receiver', 'gtceu:galvanized_ethersteel_plate', 'ae2:cable_anchor'])
    .inputFluids(`gtceu:soldering_alloy 144`)
    .itemOutputs('ae2:wireless_access_point')
    .duration(15)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.mixer('ae2:gt_fluix')
    .itemInputs(['gtceu:certus_quartz_dust', 'gtceu:nether_quartz_dust', 'minecraft:redstone'])
    .itemOutputs('2x gtceu:fluix_dust')
    .duration(15)
    .EUt(GTValues.VA[GTValues.HV]);
  //Pattern Modifier
  event.recipes.gtceu.assembler('pattern_modifier_recipe_item')
    .itemInputs(['ae2:pattern_encoding_terminal', '#gtceu:circuits/ev', 'ae2:item_storage_cell_1k'])
    .itemOutputs('expatternprovider:pattern_modifier')
    .duration(15)
    .EUt(GTValues.VA[GTValues.MV]);
  //Patterns bc apparently we lost em
  event.recipes.gtceu.assembler('pattern_recipe')
    .itemInputs(['32x gtceu:fine_galvanized_ethersteel_wire', '16x gtceu:stainless_steel_plate', '2x #gtceu:circuits/hv', 'gtceu:diamond_lens'])
    .inputFluids(`gtceu:soldering_alloy 576`)
    .itemOutputs('8x ae2:blank_pattern')
    .duration(90)
    .EUt(GTValues.VA[GTValues.HV]);

  //Extended Ae2
  event.recipes.gtceu.assembler('extended_interface')
    .itemInputs(['4x ae2:interface', '4x cosmiccore:prismatic_tungstensteel_plate', 'gtceu:ev_robot_arm'])
    .inputFluids(`gtceu:soldering_alloy 576`)
    .itemOutputs('expatternprovider:ex_interface')
    .circuit(1)
    .duration(90)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.assembler('extended_provider')
    .itemInputs(['4x ae2:pattern_provider', '4x cosmiccore:prismatic_tungstensteel_plate', 'gtceu:ev_robot_arm'])
    .inputFluids(`gtceu:soldering_alloy 576`)
    .itemOutputs('expatternprovider:ex_pattern_provider')
    .circuit(1)
    .duration(90)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.assembler('extended_interface_upgrade')
    .itemInputs(['3x ae2:interface', '4x cosmiccore:prismatic_tungstensteel_plate', 'gtceu:ev_robot_arm'])
    .inputFluids(`gtceu:soldering_alloy 576`)
    .itemOutputs('expatternprovider:interface_upgrade')
    .circuit(2)
    .duration(90)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.assembler('extended_provider_upgrade')
    .itemInputs(['3x ae2:pattern_provider', '4x cosmiccore:prismatic_tungstensteel_plate', 'gtceu:ev_robot_arm'])
    .inputFluids(`gtceu:soldering_alloy 576`)
    .itemOutputs('expatternprovider:pattern_provider_upgrade')
    .circuit(2)
    .duration(90)
    .EUt(GTValues.VA[GTValues.EV]);

  //extended buses
  event.recipes.gtceu.assembler('extended_bus_upgrade_kit')
    .itemInputs(['4x ae2:speed_card', '3x ae2:annihilation_core', '3x ae2:formation_core', 'gtceu:ev_robot_arm'])
    .inputFluids(`gtceu:soldering_alloy 576`)
    .itemOutputs('2x expatternprovider:io_bus_upgrade')
    .circuit(1)
    .duration(90)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.assembler('extended_export_bus_upgrade_from_bus')
    .itemInputs(['16x gtceu:fine_red_alloy_wire', 'ae2:export_bus', 'expatternprovider:io_bus_upgrade'])
    .inputFluids(`gtceu:soldering_alloy 576`)
    .itemOutputs('expatternprovider:ex_export_bus_part')
    .circuit(3)
    .duration(90)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.assembler('extended_import_bus_upgrade_from_bus')
    .itemInputs(['16x gtceu:fine_red_alloy_wire', 'ae2:import_bus', 'expatternprovider:io_bus_upgrade'])
    .inputFluids(`gtceu:soldering_alloy 576`)
    .itemOutputs('expatternprovider:ex_import_bus_part')
    .circuit(3)
    .duration(90)
    .EUt(GTValues.VA[GTValues.EV]);

  event.shaped('2x expatternprovider:wireless_connect', [
    'RDE',
    'QHQ',
    'SDR'
  ], {
    S: 'gtceu:hv_sensor',
    E: 'gtceu:hv_emitter',
    R: 'ae2:wireless_receiver',
    H: 'gtceu:ev_machine_hull',
    D: 'ae2:fluix_smart_dense_cable',
    Q: 'ae2wtlib:quantum_bridge_card'
  })

  //Interface Full to Thin and Thin to Full
  event.shapeless('ae2:cable_interface', [
    'ae2:interface'
  ])
  event.shapeless('ae2:interface', [
    'ae2:cable_interface'
  ])
  event.shapeless('ae2:pattern_provider', [
    'ae2:cable_pattern_provider'
  ])
  event.shapeless('ae2:crafting_accelerator', [
    'ae2:crafting_unit', '#gtceu:circuits/ev'
  ])
  event.shapeless('ae2:view_cell', [
    'ae2:item_cell_housing', 'gtceu:certus_quartz_gem'
  ])
  event.shapeless('2x ae2:speed_card', [
    'ae2:advanced_card', 'gtceu:flawless_fluix_gem'
  ])
  event.shapeless('ae2:void_card', [
    'ae2:basic_card', 'trashcans:item_trash_can'
  ])
  event.shapeless('ae2:equal_distribution_card', [
    'ae2:advanced_card', 'gtceu:lv_robot_arm'
  ])
  event.shapeless('ae2:memory_card', [
    'ae2:basic_card', 'ae2:cell_component_1k'
  ])
  event.shapeless('2x ae2:capacity_card', [
    'ae2:basic_card', 'gtceu:steel_crate'
  ])
  event.shapeless('ae2:wireless_booster', [
    'gtceu:mv_emitter', 'gtceu:flawless_fluix_gem', 'gtceu:flawless_fluix_gem'
  ])
  event.shapeless('ae2:cell_workbench', [
    'ae2:item_cell_housing', 'minecraft:crafting_table'
  ])
  event.shapeless('ae2:network_tool', [
    'gtceu:steel_wrench', 'ae2:energy_cell', 'ae2:terminal'
  ])
  event.shapeless('ae2netanalyser:network_analyser', [
    'ae2:network_tool', 'gtceu:diamond_lens'
  ])
  event.shapeless('expatternprovider:wireless_tool', [
    'ae2:network_tool', 'ae2:wireless_receiver'
  ])
  event.shapeless('expatternprovider:tag_storage_bus', [
    'ae2:storage_bus', 'gtceu:item_filter', 'gtceu:item_tag_filter', 'gtceu:fluid_filter'
  ])
  event.shapeless('expatternprovider:tag_export_bus', [
    'ae2:export_bus', 'gtceu:item_filter', 'gtceu:item_tag_filter', 'gtceu:fluid_filter'
  ])
  event.shapeless('expatternprovider:mod_storage_bus', [
    'ae2:storage_bus', 'gtceu:item_filter'
  ])
  event.shapeless('expatternprovider:mod_export_bus', [
    'ae2:export_bus', 'gtceu:item_filter'
  ])
  event.shapeless('expatternprovider:precise_storage_bus', [
    'ae2:storage_bus', 'gtceu:lv_robot_arm', 'gtceu:lv_fluid_regulator'
  ])
  event.shapeless('expatternprovider:precise_export_bus', [
    'ae2:export_bus', 'gtceu:lv_robot_arm', 'gtceu:lv_fluid_regulator'
  ])
  event.shapeless('expatternprovider:threshold_export_bus', [
    'ae2:export_bus', 'expatternprovider:threshold_level_emitter'
  ])
  //Storage Components (Automatic Recipe Generation)
  let machineTier = [
    'lv',
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv'
  ]
  let tierFineWire = [
    'annealed_copper',
    'electrum',
    'manasteel',
    'aluminium',
    'tungsten_steel',
    'yttrium_barium_cuprate',
    'naquadah',
    'uranium_rhodium_dinaquadide'
  ]
  let tierPlate = [
    'steel',
    'aluminium',
    'stainless_steel',
    'tungsten_steel',
    'rhodium_plated_palladium',
    'naquadah_alloy',
    'darmstadtium',
    'neutronium'
  ]
  let componentTier = [
    'ae2:cell_component_1k',
    'ae2:cell_component_4k',
    'ae2:cell_component_16k',
    'ae2:cell_component_64k',
    'ae2:cell_component_256k',
    'megacells:cell_component_1m',
    'megacells:cell_component_4m',
    'megacells:cell_component_16m'
  ]
  let euScale = [
    GTValues.VA[GTValues.LV],
    GTValues.VA[GTValues.MV],
    GTValues.VA[GTValues.HV],
    GTValues.VA[GTValues.EV],
    GTValues.VA[GTValues.IV],
    GTValues.VA[GTValues.LuV],
    GTValues.VA[GTValues.ZPM],
    GTValues.VA[GTValues.UV],
  ]
  machineTier.forEach((tier, index) => {
    let fineWireMaterial = tierFineWire[index]
    let plateType = tierPlate[index]
    let componentType = componentTier[index]
    let euType = euScale[index]

    event.recipes.gtceu.assembler(`ae2:${tier}_component_assembly`)
      .itemInputs(`32x gtceu:fine_${fineWireMaterial}_wire`, `4x #gtceu:circuits/${tier}`, `4x gtceu:${plateType}_plate`, 'ae2:formation_core', 'ae2:annihilation_core')
      .inputFluids('gtceu:redstone 288')
      .itemOutputs(`${componentType}`)
      .duration(100)
      .EUt(`${euType}`);
  })


  let ae2Components = [
    '1',
    '4',
    '16',
    '64',
    '256'
  ]


  ae2Components.forEach(ae2comp => {
    event.remove({ output: `ae2:item_storage_cell_${ae2comp}k` })
    event.remove({ output: `ae2:fluid_storage_cell_${ae2comp}k` })
    event.remove({ output: `appbot:mana_storage_cell_${ae2comp}k` })
    event.remove({ output: `megacells:item_storage_cell_${ae2comp}m` })
    event.remove({ output: `megacells:fluid_storage_cell_${ae2comp}m` })
    event.remove({ output: `megacells:mana_storage_cell_${ae2comp}m` })
    event.shapeless(`ae2:item_storage_cell_${ae2comp}k`, [
      'ae2:item_cell_housing',
      `ae2:cell_component_${ae2comp}k`

    ])
    event.shapeless(`ae2:fluid_storage_cell_${ae2comp}k`, [
      'ae2:fluid_cell_housing',
      `ae2:cell_component_${ae2comp}k`

    ])
    event.shapeless(`appbot:mana_storage_cell_${ae2comp}k`, [
      'appbot:mana_cell_housing',
      `ae2:cell_component_${ae2comp}k`

    ])
    //Now the Mega Cells
    event.shapeless(`megacells:item_storage_cell_${ae2comp}m`, [
      'megacells:mega_item_cell_housing',
      `megacells:cell_component_${ae2comp}m`

    ])
    event.shapeless(`megacells:fluid_storage_cell_${ae2comp}m`, [
      'megacells:mega_fluid_cell_housing',
      `megacells:cell_component_${ae2comp}m`

    ])
    event.shapeless(`megacells:mana_storage_cell_${ae2comp}m`, [
      'megacells:mega_mana_cell_housing',
      `megacells:cell_component_${ae2comp}m`

    ])
  })

  let tierCable = [
    'tin',
    'copper',
    'gold',
    'aluminium',
    'platinum',
    'niobium_titanium',
    'vanadium_gallium',
    'yttrium_barium_cuprate'
  ]
  let lamFluids = [
    'tin',
    'annealed_copper',
    'gold',
    'aluminium',
    'platinum',
    'niobium_titanium',
    'vanadium_steel',
    'yttrium_barium_cuprate'
  ]
  let outputAmount = [
    '1',
    '4',
    '8',
    '12',
    '16',
    '32',
    '48',
    '64',
  ]
  tierCable.forEach((tier, index) => {
    //Adding Relevant Indexes for some reason the fluid index is also fucked so uh, neat...
    let euType = euScale[index]
    let fluids = lamFluids[index]
    let output = outputAmount[index]
    var polymer;
    if (index === 1) {
      polymer = 'gtceu:rubber_foil'
    } else if (index < 3) {
      polymer = 'gtceu:polyethylene_foil'
    } else if (index < 7) {
      polymer = 'gtceu:polytetrafluoroethylene_foil'
    } else {
      polymer = 'gtceu:polybenzimidazole_foil'
    }


    event.recipes.gtceu.laminator(`smart_cable_${tier}`)
      .itemInputs([`gtceu:${tier}_single_cable`, `${polymer}`])
      .inputFluids(`gtceu:${fluids} 144`)
      .itemOutputs(`${output}x ae2:fluix_smart_cable`)
      .duration(100)
      .EUt(`${euType}`);
    event.recipes.gtceu.laminator(`dense_cable_${tier}`)
      .itemInputs([`gtceu:${tier}_quadruple_cable`, `16x ${polymer}`])
      .inputFluids(`gtceu:${fluids} 144`)
      .itemOutputs(`${output}x ae2:fluix_smart_dense_cable`)
      .duration(100)
      .EUt(`${euType}`);
    event.recipes.gtceu.cutter(`ae2:${tier}_cable_anchor`)
      .itemInputs(`gtceu:${fluids}_bolt`)
      .itemOutputs(`${output}x ae2:cable_anchor`)
      .duration(100)
      .EUt(`${euType}`);
  })

  event.recipes.gtceu.lathe(`ae2:fiber`)
    .itemInputs('minecraft:quartz')
    .itemOutputs('ae2:quartz_fiber')
    .duration(20)
    .EUt(GTValues.VA[GTValues.LV])


  event.recipes.gtceu.assembler('ae2:storage_bus')
    .itemInputs(['ae2:cable_interface', '#forge:chests', 'ae2:formation_core', 'ae2:annihilation_core'])
    .itemOutputs('ae2:storage_bus')
    .duration(160)
    .EUt(GTValues.VA[GTValues.LV]);

  //level emitters
  event.recipes.gtceu.assembler(`ae2:level_emitter`)
    .itemInputs('16x gtceu:fine_annealed_copper_wire')
    .itemInputs('4x gtceu:steel_plate')
    .itemInputs('minecraft:redstone_torch')
    .itemInputs('#gtceu:circuits/mv')
    .itemOutputs('ae2:level_emitter')
    .duration(100)
    .EUt(GTValues.VA[GTValues.MV])

  event.recipes.gtceu.assembler(`ae2:energy_level_emitter`)
    .itemInputs('16x gtceu:fine_annealed_copper_wire')
    .itemInputs('4x gtceu:tin_plate')
    .itemInputs('minecraft:redstone_torch')
    .itemInputs('#gtceu:circuits/mv')
    .itemOutputs('ae2:energy_level_emitter')
    .duration(100)
    .EUt(GTValues.VA[GTValues.MV])

  event.recipes.gtceu.assembler(`expatternprovider:threshold_level_emitter`)
    .itemInputs('16x gtceu:fine_annealed_copper_wire')
    .itemInputs('4x gtceu:aluminium_plate')
    .itemInputs('minecraft:redstone_torch')
    .itemInputs('#gtceu:circuits/hv')
    .itemOutputs('expatternprovider:threshold_level_emitter')
    .duration(100)
    .EUt(GTValues.VA[GTValues.HV])
  
  //merequesters
  event.recipes.gtceu.assembler(`merequester:requester`)
    .itemInputs('gtceu:ev_machine_hull')
    .itemInputs('8x gtceu:platinum_double_wire')
    .itemInputs('2x #gtceu:circuits/ev')
    .itemInputs('expatternprovider:threshold_level_emitter')
    .itemInputs('ae2:level_emitter')
    .itemOutputs('merequester:requester')
    .duration(200)
    .EUt(GTValues.VA[GTValues.EV])

  event.recipes.gtceu.assembler(`merequester:requester_terminal`)
    .itemInputs('merequester:requester')
    .itemInputs('ae2:terminal')
    .itemInputs('16x gtceu:fine_galvanized_ethersteel_wire')
    .itemOutputs('merequester:requester_terminal')
    .duration(200)
    .EUt(GTValues.VA[GTValues.EV])
 
  //advanced memory card
  event.recipes.gtceu.assembler(`betterp2p:advanced_memory_card_assembly`)
    .itemInputs('ae2:memory_card')
    .itemInputs('ae2netanalyser:network_analyser')
    .itemInputs('ae2:cell_component_64k')
    .itemOutputs('betterp2p:advanced_memory_card')
    .duration(400)
    .EUt(GTValues.VA[GTValues.EV])












  event.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "fluid",
      "tag": "minecraft:water"
    },
    "ingredients": [
      {
        "tag": "forge:gems/quartz"
      },
      {
        "tag": "forge:gems/quartzite"
      },
      {
        "tag": "forge:dusts/redstone"
      }
    ],
    "result": {
      "count": 2,
      "item": "gtceu:certus_quartz_flawless_gem"
    }
  })
  event.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "fluid",
      "tag": "minecraft:lava"
    },
    "ingredients": [
      {
        "tag": "forge:ingots/iron"
      },
      {
        "tag": "forge:dusts/charcoal"
      }
    ],
    "result": {
      "count": 1,
      "item": "gtceu:wrought_iron_ingot"
    }
  })




})