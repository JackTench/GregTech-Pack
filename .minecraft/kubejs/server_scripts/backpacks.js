// Jack Tench 2024
// GregTech Pack

// Config for Sophisticated Backpacks recipes.

ServerEvents.recipes(event => {

    console.log('backpacks.js loaded!');

    event.remove({output: 'sophisticatedbackpacks:backpack'});
    event.shaped('sophisticatedbackpacks:backpack', [
        'SDS',
        'LCL',
        'LRL'
    ], {
        S: 'minecraft:string',
        D: '#forge:tools/screwdrivers',
        L: 'minecraft:leather',
        C: 'ironchest:iron_chest',
        R: 'gtceu:iron_ring'
    });

})