// Jack Tench 2024
// GregTech Pack

// Config for recipes from Storage Drawers.

ServerEvents.recipes(event => {

    console.log('storage_drawers.js loaded!');

    event.remove({output: 'storagedrawers:controller'});
    event.shaped('storagedrawers:controller', [
        'SPS',
        'CRC',
        'PDP'
    ], {
        S: 'gtceu:iron_screw',
        P: '#forge:plates/iron',
        C: 'ulvcovm:ulv_conveyor_module',
        R: 'ulvcovm:ulv_robot_arm',
        D: '#forge:tools/screwdrivers'
    });

})