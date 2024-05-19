// Jack Tench 2024
// GregTech Pack

// Disable unwanted blocks/items.

ServerEvents.recipes(event => {

    console.log('disable.js loaded!');

    event.remove({output: 'twilightforest:uncrafting_table'});

})