//none of the materials that have ores generate atm because i still don't understand kubejs gt ore generation, i (would)/(will) (if i could)/(when i can)
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('sodium_hydroxide_bauxite')
          .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0x713800)
    event.create('heated_sodium_hydroxide_bauxite')
          .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0x713800)
    event.create('red_mud')
          .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0x696981)
    event.create('neutralised_red_mud')
          .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0x696981).iconSet(GTMaterialIconSet.FLUID)
    event.create('red_mud_slurry')
          .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0x696981)
    event.create('sodium_aluminate_solution')
          .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0x713800)
    event.create('sodium_aluminate')
        .dust()
        .color(0xC86420)
    event.create('sodium_silicate')
        .dust()
        .color(0xC86420)
    event.create('gallium_liquor')
          .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xC86420)
    event.create('gallium_amalgam')
        .dust()
        .color(0xC86420)
    event.create('sodium_amalgam')
        .dust()
        .color(0xC86420)
    event.create('aluminium_hydroxide')
        .dust()
        .color(0xC86420)
    event.create('cryolite')
        .dust()
          .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xC86420)
    event.create('sodium_fluoride')
        .dust()
        .color(0xC86420)
    event.create('aluminium_trifluoride')
        .dust()
        .color(0xC86420)
    event.create('sodium_hydroxide_solution')
          .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xC86420)
       
})
