// Jack Tench 2024
// GregTech Pack

// Config for Farmer's Delight (and addons) recipes.

ServerEvents.recipes(event => {

    console.log('farmers.js loaded!');

    // Cutting Board
    event.remove({output: 'farmersdelight:cutting_board'});
    event.shaped('farmersdelight:cutting_board', [
        ' WW',
        'BWW',
        'SD '
    ], {
        W: '#minecraft:planks',
        B: '#forge:tools/saws',
        S: 'gtceu:long_wood_rod',
        D: '#forge:tools/screwdrivers'
    });

})