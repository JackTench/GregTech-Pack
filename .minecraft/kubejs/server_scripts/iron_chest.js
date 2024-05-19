// Jack Tench 2024
// GregTech Pack

// Config for Iron Chest recipes.

ServerEvents.recipes(event => {

    console.log('iron_chest.js loaded!');

    // Copper Chest
    event.remove({output: 'ironchest:copper_chest'});
    event.shaped('ironchest:copper_chest', [
        'CHC',
        'CWC',
        'CCC'
    ], {
        C: '#forge:plates/copper',
        H: '#forge:tools/hammers',
        W: '#forge:chests/wooden'
    });

    // Iron Chest
    event.remove({output: 'ironchest:iron_chest'});
    event.shaped('ironchest:iron_chest', [
        'IHI',
        'ICI',
        'III'
    ], {
        I: '#forge:plates/iron',
        H: '#forge:tools/hammers',
        C: 'ironchest:copper_chest'
    });

})