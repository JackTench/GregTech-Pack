// Jack Tench 2024
// GregTech Pack

// Registry file for items.

StartupEvents.registry('item', event => {

    console.log('item.js loaded!');

    // Incomplete sequenced assembly crafts.
    event.create('isa_item_translocator').displayName("Incomplete Item Translocator");

    event.create('water_fin').displayName("Wooden Water Fin");

})