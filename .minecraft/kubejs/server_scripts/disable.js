// Jack Tench 2024
// GregTech Pack

// Disable unwanted blocks/items.

ServerEvents.recipes(event => {

    console.log('disable.js loaded!');

    // Disable Uncrafting Table from Twilight Forest.
    event.remove({output: 'twilightforest:uncrafting_table'});

    // Disable Iron Furnaces junk.
    event.remove({output: 'ironfurnaces:diamond_furnace'});
    event.remove({output: 'ironfurnaces:emerald_furnace'});
    event.remove({output: 'ironfurnaces:obsidian_furnace'});
    event.remove({output: 'ironfurnaces:crystal_furnace'});
    event.remove({output: 'ironfurnaces:netherite_furnace'});
    event.remove({output: 'ironfurnaces:silver_furnace'});
    event.remove({output: 'ironfurnaces:upgrade_iron'});
    event.remove({output: 'ironfurnaces:upgrade_gold'});
    event.remove({output: 'ironfurnaces:upgrade_diamond'});
    event.remove({output: 'ironfurnaces:upgrade_emerald'});
    event.remove({output: 'ironfurnaces:upgrade_obsidian'});
    event.remove({output: 'ironfurnaces:upgrade_crystal'});
    event.remove({output: 'ironfurnaces:upgrade_netherite'});
    event.remove({output: 'ironfurnaces:upgrade_copper'});
    event.remove({output: 'ironfurnaces:upgrade_silver'});
    event.remove({output: 'ironfurnaces:upgrade_obsidian2'});
    event.remove({output: 'ironfurnaces:upgrade_iron2'});
    event.remove({output: 'ironfurnaces:upgrade_gold2'});
    event.remove({output: 'ironfurnaces:upgrade_silver2'});
    event.remove({output: 'ironfurnaces:heater'});
    event.remove({output: 'ironfurnaces:item_heater'});
    event.remove({output: 'ironfurnaces:augment_blasting'});
    event.remove({output: 'ironfurnaces:augment_smoking'});
    event.remove({output: 'ironfurnaces:augment_factory'});
    event.remove({output: 'ironfurnaces:augment_generator'});
    event.remove({output: 'ironfurnaces:augment_speed'});
    event.remove({output: 'ironfurnaces:augment_fuel'});
    event.remove({output: 'ironfurnaces:item_spooky'});
    event.remove({output: 'ironfurnaces:item_xmas'});
    event.remove({output: 'ironfurnaces:item_copy'});
    event.remove({output: 'ironfurnaces:rainbow_core'});
    event.remove({output: 'ironfurnaces:rainbow_plating'});
    event.remove({output: 'ironfurnaces:million_furnace'});
    event.remove({output: 'ironfurnaces:rainbow_coal'});

})