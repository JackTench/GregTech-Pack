// Jack Tench 2024
// GregTech Pack

// Config for Translocators recipes.

ServerEvents.recipes(event => {

    console.log('translocators.js loaded!');

    event.remove({mod: 'translocators'});

    event.recipes.createSequencedAssembly(
        'translocators:item_translocator',
        '#forge:plates/steel',
        [
            event.recipes.createDeploying('kubejs:isa_item_translocator', [
                '#forge:plates/steel', 'gtceu:tin_large_item_pipe'
            ]),
            event.recipes.createDeploying('kubejs:isa_item_translocator', [
                'kubejs:isa_item_translocator', '#minecraft:buttons'
            ]),
            event.recipes.createDeploying('kubejs:isa_item_translocator', [
                'kubejs:isa_item_translocator', 'minecraft:ender_pearl'
            ]),
            event.recipes.createPressing('translocators:item_translocator', 'kubejs:isa_item_translocator')
        ]
    ).transitionalItem('kubejs:isa_item_translocator').loops(1);

})