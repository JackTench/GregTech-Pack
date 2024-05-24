// Jack Tench 2024
// GregTech Pack

// Config for custom item recipes.

ServerEvents.recipes(event => {

    console.log('kjs.js loaded!');

    // Water Wheel Fin
    event.shaped('kubejs:water_fin', [
        'H  ',
        'W  ',
        'SS '
    ], {
        H: '#forge:tools/hammers',
        W: '#minecraft:planks',
        S: '#minecraft:wooden_slabs'
    });

})