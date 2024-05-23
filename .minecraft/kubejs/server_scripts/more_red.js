// Jack Tench 2024
// GregTech Pack

// Config for More Red recipes.

ServerEvents.recipes(event => {

    console.log('more_red.js loaded!');

    // Replace mod red alloy with GT red alloy in recipes.
    event.replaceInput(
        {},
        'morered:red_alloy_ingot',
        'gtceu:red_alloy_ingot'
    );

    // Red alloy wire.
    event.remove({output: 'morered:red_alloy_wire'});
    event.shaped('4x morered:red_alloy_wire', [
        'RRR'
    ], {
        R: 'gtceu:red_alloy_ingot'
    });

})