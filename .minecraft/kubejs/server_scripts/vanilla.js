// Jack Tench 2024
// GregTech Pack

// Config for Vanilla recipes.

ServerEvents.recipes(event => {

    console.log('vanilla.js loaded!');

    // Craft 3 gravel into flint. Recipe from GTNH.
    event.shapeless('minecraft:flint', ['3x minecraft:gravel']);

})