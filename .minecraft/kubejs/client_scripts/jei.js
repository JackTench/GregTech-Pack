// Jack Tench 2024
// GregTech Pack

// Hide items/blocks from JEI.

JEIEvents.hideItems(event => {

    console.log('jei.js loaded!');

    event.hide('twilightforest:uncrafting_table');

})

// Hide crafting categories from JEI.

JEIEvents.removeCategories(event => {

    event.remove('twilightforest:uncrafting');

})