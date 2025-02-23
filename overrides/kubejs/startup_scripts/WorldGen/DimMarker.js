GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {
    event.create('ad_astra:earth_orbit')
        .iconSupplier(() => Item.of('ad_astra:earth_globe').getItem())
        .tier(0)
        .overrideName('Earth Orbit')
    event.create('undergarden:undergarden')
        .iconSupplier(() => Item.of('kubejs:undergarden_dim').getItem())
        .tier(0)
        .overrideName('The Undergarden')
})