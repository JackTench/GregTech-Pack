// Jack Tench 2024
// GregTech Pack

// Config for Hang Glider recipes.

ServerEvents.recipes(event => {

    console.log('hang_glider.js loaded!');

    event.remove({output: 'hangglider:glider_framework'});
    event.shaped('hangglider:glider_framework', [
        'FOS',
        'RHR',
        'III'
    ], {
        F: '#forge:tools/files',
        O: 'gtceu:iron_ring',
        S: '#forge:tools/screwdrivers',
        R: '#forge:rods/iron',
        H: '#forge:tools/hammers',
        I: 'minecraft:iron_ingot'
    });

    event.remove({output: 'hangglider:hang_glider'});
    event.shaped('hangglider:hang_glider' ,[
        ' S ',
        'WFW',
        ' D '
    ], {
        S: '#forge:tools/wrenches',
        W: 'hangglider:glider_wing',
        F: 'hangglider:glider_framework',
        D: '#forge:tools/screwdrivers'
    });

})