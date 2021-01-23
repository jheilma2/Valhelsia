onEvent('item.tags', event => {
  // Allows Autumnity snail slime to be used in a few recipes.
  event.add('forge:slime', 'autumnity:snail_slime')
  event.add('forge:slimeballs', 'autumnity:snail_slime')
  event.add('forge:storageblocks/slime', 'autumnity:snail_slime_block')

  // Farmer's Delight Knife Compat
  var knives = [
    'mysticalworld:amethyst_knife',
    'mysticalworld:cactus_knife',
    'mysticalworld:copper_knife',
    'mysticalworld:lead_knife',
    'mysticalworld:quicksilver_knife',
    'mysticalworld:silver_knife',
    'mysticalworld:tin_knife',
    'mysticalworld:stone_knife',
    'mysticalworld:wood_knife',
    'mysticalworld:diamond_knife',
    'mysticalworld:gold_knife',
    'mysticalworld:iron_knife'
  ]

  event.get('farmersdelight:tools/knives').add(knives)
  event.get('forge:tools/knives').add(knives)

  // Missing #forge:seed item tags.
  var seeds = [
    'mysticalworld:aubergine_seeds'
  ]
  event.get('forge:seeds').add(seeds)

  // Mekanism Bio Fuel Compat
  event.add('forge:sapling', 'quark:yellow_blossom_sapling')
  event.add('forge:sapling', 'quark:lavender_blossom_sapling')
  event.add('forge:sapling', 'quark:pink_blossom_sapling')
  event.add('forge:sapling', 'quark:blue_blossom_sapling')
  event.add('forge:sapling', 'quark:orange_blossom_sapling')
  event.add('forge:sapling', 'quark:red_blossom_sapling')
  event.add('forge:sapling', 'autumnity:red_maple_sapling')
  event.add('forge:sapling', 'autumnity:orange_maple_sapling')
  event.add('forge:sapling', 'autumnity:yellow_maple_sapling')
  event.add('forge:sapling', 'autumnity:maple_sapling')
  event.add('forge:sapling', 'upgrade_aquatic:river_sapling')
  event.add('forge:sapling', 'atmospheric:rosewood_sapling')
  event.add('forge:sapling', 'atmospheric:morado_sapling')
  event.add('forge:sapling', 'atmospheric:yucca_sapling')
  event.add('forge:sapling', 'atmospheric:kousa_sapling')
  event.add('forge:sapling', 'atmospheric:aspen_sapling')
  event.add('forge:sapling', 'atmospheric:grimwood_sapling')
  event.add('forge:sapling', 'biomesoplenty:origin_sapling')
  event.add('forge:sapling', 'biomesoplenty:flowering_oak_sapling')
  event.add('forge:sapling', 'biomesoplenty:rainbow_birch_sapling')
  event.add('forge:sapling', 'biomesoplenty:yellow_autumn_sapling')
  event.add('forge:sapling', 'biomesoplenty:orange_autumn_sapling')
  event.add('forge:sapling', 'biomesoplenty:maple_sapling')
  event.add('forge:sapling', 'biomesoplenty:fir_sapling')
  event.add('forge:sapling', 'biomesoplenty:redwood_sapling')
  event.add('forge:sapling', 'biomesoplenty:white_cherry_sapling')
  event.add('forge:sapling', 'biomesoplenty:pink_cherry_sapling')
  event.add('forge:sapling', 'biomesoplenty:mahogany_sapling')
  event.add('forge:sapling', 'biomesoplenty:jacaranda_sapling')
  event.add('forge:sapling', 'biomesoplenty:palm_sapling')
  event.add('forge:sapling', 'biomesoplenty:willow_sapling')
  event.add('forge:sapling', 'biomesoplenty:dead_sapling')
  event.add('forge:sapling', 'biomesoplenty:magic_sapling')
  event.add('forge:sapling', 'biomesoplenty:umbran_sapling')
  event.add('forge:sapling', 'biomesoplenty:hellbark_sapling')
  event.add('forge:sapling', 'druidcraft:darkwood_sapling')
  event.add('forge:sapling', 'druidcraft:elder_sapling')
  event.add('forge:sapling', 'forbidden_arcanus:cherrywood_sapling')
  event.add('forge:sapling', 'forbidden_arcanus:mysterywood_sapling')
  
  // Misc Missing Tags
  event.add('forge:seeds/aubergine', 'mysticalworld:aubergine_seeds')
})