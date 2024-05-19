// Jack Tench 2024
// GregTech Pack

// Hide items/blocks from JEI.

JEIEvents.hideItems(event => {

    console.log('jei.js loaded!');

    // Follows format of disable.js

    event.hide('minecraft:iron_pickaxe');
    event.hide('minecraft:iron_shovel');
    event.hide('minecraft:iron_axe');
    event.hide('minecraft:iron_hoe');
    event.hide('minecraft:iron_sword');

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

    event.hide('ironchest:dirt_chest');
    event.hide('ironchest:trapped_dirt_chest');

    event.hide('ironchest:iron_to_gold_chest_upgrade');
    event.hide('ironchest:gold_to_diamond_chest_upgrade');
    event.hide('ironchest:copper_to_iron_chest_upgrade');
    event.hide('ironchest:diamond_to_crystal_chest_upgrade');
    event.hide('ironchest:wood_to_iron_chest_upgrade');
    event.hide('ironchest:wood_to_copper_chest_upgrade');
    event.hide('ironchest:diamond_to_obsidian_chest_upgrade');

    event.hide('ironshulkerbox:iron_to_gold_shulker_box_upgrade');
    event.hide('ironshulkerbox:gold_to_diamond_shulker_box_upgrade');
    event.hide('ironshulkerbox:copper_to_iron_shulker_box_upgrade');
    event.hide('ironshulkerbox:diamond_to_crystal_shulker_box_upgrade');
    event.hide('ironshulkerbox:vanilla_to_iron_shulker_box_upgrade');
    event.hide('ironshulkerbox:vanilla_to_copper_shulker_box_upgrade');
    event.hide('ironshulkerbox:diamond_to_obsidian_shulker_box_upgrade');

})

// Hide crafting categories from JEI.

JEIEvents.removeCategories(event => {

    event.remove('twilightforest:uncrafting');
    event.remove('jumbofurnace:jumbo_furnace_upgrade');
    event.remove('jumbofurnace:jumbo_smelting');

})