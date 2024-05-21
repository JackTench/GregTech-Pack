// Jack Tench 2024
// GregTech Pack

// Disable unwanted blocks/items.

ServerEvents.recipes(event => {

    console.log('disable.js loaded!');

    // Disable vanilla tools, replace them in crafting with GregTech tools.
    event.remove({output: 'minecraft:iron_pickaxe'});
    event.replaceInput(
        {},
        'minecraft:iron_pickaxe',
        'gtceu:iron_pickaxe'
    );
    event.remove({output: 'minecraft:iron_shovel'});
    event.replaceInput(
        {},
        'minecraft:iron_shovel',
        'gtceu:iron_shovel'
    );
    event.remove({output: 'minecraft:iron_axe'});
    event.replaceInput(
        {},
        'minecraft:iron_axe',
        'gtceu:iron_axe'
    );
    event.remove({output: 'minecraft:iron_hoe'});
    event.replaceInput(
        {},
        'minecraft:iron_hoe',
        'gtceu:iron_hoe'
    );
    event.remove({output: 'minecraft:iron_sword'});
    event.replaceInput(
        {},
        'minecraft:iron_sword',
        'gtceu:iron_sword'
    );

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

    // Disable Iron Chest junk.
    event.remove({output: 'ironchest:dirt_chest'});
    event.remove({output: 'ironchest:trapped_dirt_chest'});

    // Disable Iron Chest upgrades.
    event.remove({output: 'ironchest:iron_to_gold_chest_upgrade'});
    event.remove({output: 'ironchest:gold_to_diamond_chest_upgrade'});
    event.remove({output: 'ironchest:copper_to_iron_chest_upgrade'});
    event.remove({output: 'ironchest:diamond_to_crystal_chest_upgrade'});
    event.remove({output: 'ironchest:wood_to_iron_chest_upgrade'});
    event.remove({output: 'ironchest:wood_to_copper_chest_upgrade'});
    event.remove({output: 'ironchest:diamond_to_obsidian_chest_upgrade'});

    // Disable Iron Shulker upgrades.
    event.remove({output: 'ironshulkerbox:iron_to_gold_shulker_box_upgrade'});
    event.remove({output: 'ironshulkerbox:gold_to_diamond_shulker_box_upgrade'});
    event.remove({output: 'ironshulkerbox:copper_to_iron_shulker_box_upgrade'});
    event.remove({output: 'ironshulkerbox:diamond_to_crystal_shulker_box_upgrade'});
    event.remove({output: 'ironshulkerbox:vanilla_to_iron_shulker_box_upgrade'});
    event.remove({output: 'ironshulkerbox:vanilla_to_copper_shulker_box_upgrade'});
    event.remove({output: 'ironshulkerbox:diamond_to_obsidian_shulker_box_upgrade'});

    // Disable reinforced hang glider.
    event.remove({output: 'hangglider:reinforced_hang_glider'});

    // Disable create stuff for unification.
    event.remove({output: 'create:raw_zinc'});
    event.remove({output: 'create:zinc_ingot'});
    event.remove({output: 'create:brass_ingot'});
    event.remove({output: 'create:copper_nugget'});
    event.remove({output: 'create:zinc_nugget'});
    event.remove({output: 'create:brass_nugget'});
    event.remove({output: 'create:copper_sheet'});
    event.remove({output: 'create:brass_sheet'});
    event.remove({output: 'create:iron_sheet'});
    event.remove({output: 'create:golden_sheet'});
    event.remove({output: 'create:crushed_raw_iron'});
    event.remove({output: 'create:crushed_raw_gold'});
    event.remove({output: 'create:crushed_raw_copper'});
    event.remove({output: 'create:crushed_raw_zinc'});
    event.remove({output: 'create:crushed_raw_platinum'});
    event.remove({output: 'create:crushed_raw_silver'});
    event.remove({output: 'create:crushed_raw_tin'});
    event.remove({output: 'create:crushed_raw_lead'});
    event.remove({output: 'create:crushed_raw_nickel'});
    event.remove({output: 'createaddition:electrum_ingot'});
    event.remove({output: 'createaddition:electrum_nugget'});
    event.remove({output: 'createaddition:electrum_sheet'});
    event.remove({output: 'createaddition:zinc_sheet'});
    event.remove({output: 'createaddition:copper_wire'});
    event.remove({output: 'createaddition:iron_wire'});
    event.remove({output: 'createaddition:gold_wire'});
    event.remove({output: 'createaddition:electrum_wire'});
    event.remove({output: 'createaddition:spool'});
    event.remove({output: 'createaddition:copper_spool'});
    event.remove({output: 'createaddition:gold_spool'});
    event.remove({output: 'createaddition:electrum_spool'});
    event.remove({output: 'createaddition:festive_spool'});
    event.remove({output: 'createaddition:copper_rod'});
    event.remove({output: 'createaddition:iron_rod'});
    event.remove({output: 'createaddition:gold_rod'});
    event.remove({output: 'createaddition:electrum_rod'});
    event.remove({output: 'createaddition:brass_rod'});
    event.remove({output: 'createaddition:straw'});
    event.remove({output: 'createaddition:seed_oil_bucket'});
    event.remove({output: 'createaddition:bioethanol_bucket'});
    event.remove({output: 'createaddition:seed_oil'});
    event.remove({output: 'createaddition:bioethanol'});

})