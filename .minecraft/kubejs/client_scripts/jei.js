// Jack Tench 2024
// GregTech Pack

// Hide items/blocks from JEI.

JEIEvents.hideItems(event => {

    console.log('jei.js loaded!');

    // Follows format of disable.js

    event.hide('twilightforest:uncrafting_table');

    event.hide('ironfurnaces:diamond_furnace');
    event.hide('ironfurnaces:emerald_furnace');
    event.hide('ironfurnaces:obsidian_furnace');
    event.hide('ironfurnaces:crystal_furnace');
    event.hide('ironfurnaces:netherite_furnace');
    event.hide('ironfurnaces:silver_furnace');
    event.hide('ironfurnaces:upgrade_iron');
    event.hide('ironfurnaces:upgrade_gold');
    event.hide('ironfurnaces:upgrade_diamond');
    event.hide('ironfurnaces:upgrade_emerald');
    event.hide('ironfurnaces:upgrade_obsidian');
    event.hide('ironfurnaces:upgrade_crystal');
    event.hide('ironfurnaces:upgrade_netherite');
    event.hide('ironfurnaces:upgrade_copper');
    event.hide('ironfurnaces:upgrade_silver');
    event.hide('ironfurnaces:upgrade_obsidian2');
    event.hide('ironfurnaces:upgrade_iron2');
    event.hide('ironfurnaces:upgrade_gold2');
    event.hide('ironfurnaces:upgrade_silver2');
    event.hide('ironfurnaces:heater');
    event.hide('ironfurnaces:item_heater');
    event.hide('ironfurnaces:augment_blasting');
    event.hide('ironfurnaces:augment_smoking');
    event.hide('ironfurnaces:augment_factory');
    event.hide('ironfurnaces:augment_generator');
    event.hide('ironfurnaces:augment_speed');
    event.hide('ironfurnaces:augment_fuel');
    event.hide('ironfurnaces:item_spooky');
    event.hide('ironfurnaces:item_xmas');
    event.hide('ironfurnaces:item_copy');
    event.hide('ironfurnaces:rainbow_core');
    event.hide('ironfurnaces:rainbow_plating');
    event.hide('ironfurnaces:million_furnace');
    event.hide('ironfurnaces:rainbow_coal');

})

// Hide crafting categories from JEI.

JEIEvents.removeCategories(event => {

    event.remove('twilightforest:uncrafting');

})