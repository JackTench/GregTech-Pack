// Jack Tench 2024
// GregTech Pack

// Config for Create recipes.

ServerEvents.recipes(event => {

    console.log('create.js loaded!');

    // Hand Crank
    event.remove({output: 'create:hand_crank'});
    event.shaped('create:hand_crank', [
        'WWW',
        '  S',
        '  D'
    ], {
        W: '#minecraft:planks',
        S: 'gtceu:iron_screw',
        D: '#forge:tools/screwdrivers'
    });

    // Water Wheel
    event.replaceInput(
        {output: 'create:water_wheel'},
        '#minecraft:planks',
        'kubejs:water_fin'
    );

    // GT Andesite Alloy recipes.
    event.remove({output: 'create:andesite_alloy'});
    event.recipes.gtceu.alloy_smelter('gt_andesite_alloy')
        .itemInputs(
            '3x gtceu:andesite_dust',
            '1x minecraft:iron_ingot'
        )
        .itemOutputs('create:andesite_alloy')
        .duration(200)
        .EUt(7);

})