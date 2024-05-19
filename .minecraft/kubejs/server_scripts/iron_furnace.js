// Jack Tench 2024
// GregTech Pack

// Config for Iron Furnaces recipes.

ServerEvents.recipes(event => {

    console.log('iron_furnace.js loaded!');

    // Copper Furnace
    event.remove({output: 'ironfurnaces:copper_furnace'});
    event.shaped('ironfurnaces:copper_furnace', [
        'CHC',
        'CFC',
        'CCC'
    ], {
        C: '#forge:plates/copper',
        H: '#forge:tools/hammers',
        F: 'minecraft:furnace'
    });

    // Iron Furnace
    event.remove({output: 'ironfurnaces:iron_furnace'});
    event.shaped('ironfurnaces:iron_furnace', [
        'IHI',
        'IFI',
        'III'
    ], {
        I: '#forge:plates/iron',
        H: '#forge:tools/hammers',
        F: 'ironfurnaces:copper_furnace'
    });

})