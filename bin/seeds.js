const mongoose = require("mongoose");
const Recipe = require("../models/Recipe");

const recipes = [
  {
    title: "Potato wedges",
    ingredients: [
      "sea salt",
      "freshly ground black pepper",
      "600 g baking potatoes",
      "olive oil",
    ],
    categories: "Vegan",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/416_1_1441271895.jpg",
    preparationTime: 45,
    description: [
      "To prepare and cook your potato wedges: Preheat your oven to 200˚C/400˚F/gas 6. Put a large pan of salted water on to boil.",
      "Scrub the potatoes clean and get rid of any gnarly bits. Cut the potatoes into chunky wedges. Add to the pan of boiling water and parboil for 8 minutes. Drain in a colander and leave to steam dry for a couple of minutes.",
      "Transfer to a roasting tray and add a good lug of olive oil and a pinch of salt and pepper. Toss together so all the wedges are coated in the oil then spread out in one layer. Cook in the hot oven for 30 minutes until golden, crisp and cooked through. Delicious served with steak or chicken.",
    ],
    serves: 4,
    rating: 5,
  },
  {
    title: "Asparagus & halloumi salad",
    ingredients: [
      "450 g asparagus",
      "250 g halloumi",
      "1 bulb of fennel",
      "1 red onion",
      "2 tablespoons extra virgin olive oil",
      "½ an orange",
    ],
    categories: "Vegetarian",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/Fd81XIj6qkXAVB9r59DRHB.jpg",
    preparationTime: 15,
    description: [
      "In a large pan of boiling salted water, boil the asparagus until tender, then refresh in cold water.",
      "Preheat a griddle pan over a high heat. Slice and add the halloumi, then cook until charred, turning occasionally.",
      "Trim and finely slice the fennel, then peel and finely slice the onion.",
      "Place into a bowl with the asparagus and halloumi.",
      "Combine the oil with the orange zest and juice, then season well with sea salt and black pepper.",
      "Pour the dressing over the other ingredients, toss well and serve on a platter while the halloumi is still warm.",
    ],
    serves: 3,
    rating: 4,
  },
  {
    title: "Italian baked eggs",
    ingredients: [
      "olive oil",
      "4 large free-range eggs",
      "6 cherry tomatoes, (60g)",
      "¼ x 125 g ball of mozzarella",
      "1-2 sprigs of fresh marjoram, or basil",
    ],
    categories: "Breakfast",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/90303518.jpg",
    preparationTime: 15,
    description: [
      "Preheat the oven to full whack.",
      "Lightly grease a small skillet pan or round baking dish with olive oil, then crack in the eggs.",
      "Halve, or quarter, the tomatoes and dot them around the eggs.",
      "Tear over the mozzarella and drizzle with a little more oil, then season with a little sea salt and black pepper.",
      "Bake in the oven for 7 to 10 minutes or until the whites are set but the yolks are still runny.",
      "Pick over a few marjoram or basil leaves, and tuck in. Delicious served with hot buttered toast.",
    ],
    serves: 2,
    rating: 5,
  },
  {
    title: "White chocolate & cranberry cookies",
    ingredients: [
      "100 g unsalted butter",
      "85 g icing sugar",
      "1 vanilla pod, or ½ teaspoon vanilla paste, optional",
      "100 g self-raising flour",
      "30 g cornflour",
      "4 tablespoons rolled oats",
      "50 g white chocolate, roughly chopped",
      "50 g cranberries, (fresh, defrosted or rehydrated)",
    ],
    categories: "Dessert",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/EjyfIPnpKyb8TPE8huVvtg.jpg",
    preparationTime: 35,
    description: [
      "Beat the butter and icing sugar till pale. Halve the vanilla pod lengthways (if using), scrape out the seeds and add to the butter.",
      "Combine the flour, cornflour and oats, then add to the butter. Mix in the chocolate and berries, then shape the dough into a roll. Wrap in clingfilm and refrigerate for at least 1 hour.",
      "Preheat the oven to 180ºC/gas 4.",
      "Slice the dough into 1cm rounds, place on a baking tray lined with greaseproof paper and bake for 12 to 15 minutes, until light golden brown, but soft to the touch.",
      "Carefully transfer the cookies onto a cooling rack and allow to cool and crisp a little before eating.",
    ],
    serves: 14,
    rating: 4,
  },
  {
    title: "Green shakshuka",
    ingredients: [
      "4 spring onions",
      "1 clove of garlic",
      "1 teaspoon cumin seeds",
      "2 teaspoons coriander seeds",
      "1 teaspoon dried oregano",
      "olive oil",
      "100 g cavolo nero",
      "½ a lemon",
      "100 g baby spinach",
      "50 g frozen peas",
      "4 large free-range eggs",
      "½ a bunch of mint",
      "½ a bunch of dill",
      "40 g feta cheese",
    ],
    categories: "Breakfast",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/50242469.jpg",
    preparationTime: 25,
    description: [
      "Trim and roughly chop the spring onions, then peel and finely chop the garlic.",
      "In a large frying pan, toast the cumin and coriander seeds for 1 to 2 minutes, or until golden and fragrant. Transfer to a pestle and mortar and bash with the oregano and 1 pinch of sea salt until fine.",
      "Add a good lug of oil to the frying pan and fry the spring onion and garlic over a medium-low heat until softened and golden. Add the spice mix, stir and cook for another minute.",
      "Remove and discard the stalks from the cavolo nero and roughly slice the leaves. Add to the pan with the lemon juice, stirring while it wilts.",
      "Add the spinach and peas, season with salt and black pepper, then stir and cook for a further 2 to 3 minutes, or until the spinach has wilted.",
      "Crack the eggs into the pan and leave to cook for 2 to 3 minutes, then pop a lid on to steam the tops. Season the yolks with salt and pepper.",
      "Pick and roughly chop the mint leaves and dill, then sprinkle over the eggs. Crumble over the feta and serve straight away.",
    ],
    serves: 2,
    rating: 5,
  },
  {
    title: "Chicken & garlic bread kebabs",
    ingredients: [
      "2 sprigs of fresh rosemary",
      "2 cloves of garlic",
      "extra virgin olive oil",
      "1 tablespoon white wine vinegar",
      "cayenne pepper",
      "2 x 120 g skinless free-range chicken breasts",
      "2 thick slices of wholemeal bread",
      "8 fresh bay leaves",
      "2 blood oranges, (use regular oranges if out of season)",
      "100 g baby spinach",
      "1 lemon",
      "1 tablespoon balsamic vinegar",
      "20 g feta cheese",
    ],
    categories: "Mains",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1582_9_1439906331.jpg",
    preparationTime: 30,
    description: [
      "Pick the rosemary leaves and smash up in a pestle and mortar with a pinch of sea salt. Peel and crush in the garlic, then muddle in 1 tablespoon of oil, the vinegar and a generous pinch of cayenne.",
      "Chop the chicken and bread into 2cm chunks and, in a bowl, toss and mix well with the marinade until evenly coated.",
      "Take a little care in skewering up the chicken and bread chunks, randomly interspersing them with the bay leaves on four short skewers and using hardy rosemary stalks, wooden or metal skewers as appropriate. Of course, check that the skewers will fit inside your largest non-stick frying pan.",
      "Place the frying pan on a medium-high heat. Lay the skewers in the pan and cook for 4 to 5 minutes on each side, or until cooked through and golden. I like to place a lid and weight on top so that the chicken makes really nice contact with the pan and gets super-crispy.",
      "Meanwhile, top and tail the blood oranges, trim off the peel, then slice into rounds. Dress the spinach with a squeeze of lemon juice and a drizzle of oil, arrange on your plates with the blood oranges and drizzle with the balsamic. Top with the kebabs, crumble over the feta and serve with lemon wedges.",
    ],
    serves: 2,
    rating: 5,
  },
  {
    title: "Crêpes with banana & Greek yoghurt",
    ingredients: [
      "130 g flour",
      "300 ml whole milk",
      "2 tablespoons full-fat Greek yoghurt",
      "2 large free-range eggs",
      "unsalted butter, coconut oil or duck fat, for frying",
      "4 ripe bananas, or other fruit",
      "1 lemon",
      "50 g flaked almonds, or shredded coconut",
      "100 g full-fat Greek yoghurt",
      "runny honey or maple syrup",
    ],
    categories: "Breakfast",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/1IBDHO5lKH7AVZd2_oLVl1.jpg",
    preparationTime: 15,
    description: [
      "Between 6 to 12 hours before you plan to cook your crêpes, whisk the flour, milk and yoghurt together in a bowl. Cover and leave at room temperature.",
      "For the filling, slice the bananas thickly at an angle. Place them in a bowl and squeeze in enough lemon juice to coat the slices, turning them gently. Lemon zest is a delicious addition too, so finely grate some in, if you like.",
      "Toast the flaked almonds or coconut in a dry pan and add to the bananas, giving a final gentle turn (or add untoasted, if you prefer).",
      "When you are ready to cook the crêpes, whisk in the eggs and a large pinch of sea salt – the consistency should be like double cream, so add a little more milk, if needed.",
      "Heat a heavy-based frying pan over a medium heat. Brush lightly with butter, using a heatproof brush or a folded wad of kitchen paper.",
      "Pour a small ladleful of batter into the pan and swirl it around to give you a thin crêpe (if there are lots of bubbly holes, you have the pan a little too hot.) When the underside is golden brown, loosen gently with a palette knife and flip over to cook the other side briefly. Keep warm in a low oven while you cook the rest, interleaving the cooked crêpes in the oven with pieces of baking parchment to stop them sticking together.",
      "Spread each crêpe with some Greek yoghurt and add a spoonful of banana. Fold in half and fold again into quarters. Drizzle with a little honey or maple syrup to serve.",
    ],
    serves: 4,
    rating: 5,
  },
  {
    title: "Steaming ramen",
    ingredients: [
      "8 higher-welfare chicken wings",
      "1 handful of pork bones , (ask your butcher)",
      "750 g higher-welfare pork belly , (skin removed and reserved)",
      "2 thumb-sized pieces of ginger",
      "5 cloves of garlic",
      "sesame oil",
      "1 heaped tablespoon miso paste",
      "400 g baby spinach",
      "500 g dried soba or ramen noodles",
      "8 small handfuls of beansprouts , (ready to eat)",
      "8 spring onions",
      "1–2 fresh red chilles",
      "2 sheets of wakame seaweed",
      "8 tablespoons kimchee",
      "chilli oil",
      "4 large free-range eggs",
      "200 ml low-salt soy sauce",
      "1 splash of mirin",
      "4 star anise",
      "1 thumb-sized piece of ginger",
      "2 cloves of garlic",
    ],
    categories: "Mains",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1358_1_1440773135.jpg",
    preparationTime: 320,
    description: [
      "To make the soy sauce eggs, boil the eggs for 5 minutes, then refresh in cold water and peel.",
      "Pour the soy sauce and 250ml of water into a small pan with the mirin and star anise. Peel, slice and add the ginger and garlic, then bring to the boil, remove from the heat, leave to cool and pour into a sandwich bag with the eggs.",
      "Squeeze out the air, seal, and pop into the fridge for 6 hours, then drain (this is important).",
      "Preheat the oven to 200°C/400°F/gas 6.",
      "Put the chicken wings and pork bones into a large casserole pan. Bash and add the unpeeled ginger and garlic, then toss with a good drizzle of sesame oil.",
      "Put the pork skin on a baking tray and place both tray and casserole pan in the oven for around 40 minutes, or until the skin is perfectly crackled, then remove for garnish.",
      "This is also the perfect time to transfer the casserole pan to the hob, adding in the pork belly and miso. Cover with 3 litres of water, bring to the boil, then simmer gently on a low heat for around 3 hours, or until the pork belly is beautifully tender, skimming the surface occasionally.",
      "Lift the pork belly onto a tray and put aside, then sieve the broth and pour back into the pan. Return to the heat and reduce the liquid down to around 2.5 litres.",
      "While doing this, put a large colander over the pan and steam the spinach until it’s wilted. Let it cool, then squeeze out the excess moisture and divide into 8.",
      "In a separate pan, cook the noodles according to packet instructions, then drain and divide between 8 large warm bowls with the beansprouts and spinach.",
      "Slice and divide up the pork, then halve the eggs and place around the bowls. Trim the spring onions, finely slice with the chilli, and sprinkle between the bowls.",
      "Taste the broth and season with soy sauce, then ladle the steaming broth over everything.",
      "Tear over the seaweed and divide up the kimchee. Drizzle with chilli oil, then break over the crackling. Slurp away!",
    ],
    serves: 8,
    rating: 4,
  },
  {
    title: "Spinach & tortellini soup",
    ingredients: [
      "1 litre organic chicken or vegetable stock",
      "2 fresh bay leaves",
      "200 g tortellini",
      "50 g frozen peas",
      "1 large handful of spinach",
    ],
    categories: "Vegetarian",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/1ckZ9_2ZaUj8HYAsrn56sz.jpg",
    preparationTime: 15,
    description: [
      "Pour the stock into a large pan, add the bay leaves and bring to the boil.",
      "Add the tortellini and cook for 4 minutes.",
      "Add the peas, cook for a further 3 minutes, then add the spinach and cook until just wilted.",
      "Ladle into bowls and serve with some crusty bread, if you like.",
    ],
    serves: 2,
    rating: 5,
  },
  {
    title: "Cherry brownies",
    ingredients: [
      "130 g butter",
      "150 g dark chocolate (70% cocoa solids)",
      "55 g cherries",
      "55 g roasted pecans",
      "225 g caster sugar",
      "55 g cocoa powder",
      "75 g plain flour",
      "¾ teaspoon baking powder",
      "3 large free-range eggs",
      "50 g milk or dark chocolate, optional",
    ],
    categories: "Dessert",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/46256698.jpg",
    preparationTime: 20,
    description: [
      "Preheat the oven to 180ºC/gas 4. Line a 20cm square baking tin (or the equivalent) with greaseproof paper.",
      "Melt the butter and dark chocolate in a bowl over a saucepan of simmering water (don’t let the bowl touch the water).",
      "Destone the cherries and roughly chop them along with the pecans. Stir into the melted chocolate, then take off the heat.",
      "In another bowl, add the sugar, then sift in the cocoa powder, flour and baking powder. Add to the melted chocolate mixture and stir till well combined.",
      "Beat the eggs and mix in. Roughly chop and stir through the milk or dark chocolate (if using).",
      "Transfer the mixture to the tin, then bake in the oven for 15 to 20 minutes. You want them a little gooey in the middle.",
      "Remove from the oven and cool in the tray, before cutting into squares.",
    ],
    serves: 16,
    rating: 5,
  },
  {
    title: "Mexican-style steak",
    ingredients: [
      "1 thick sirloin steak, (300g)",
      "1 Maris Piper potato, (300g)",
      "3 fresh green chillies",
      "olive oil",
      "½ a bunch of fresh coriander, (15g)",
      "½ a bunch of fresh mint, (15g)",
      "½ a clove of garlic",
      "1 fresh red chilli",
      "2 spring onions",
      "1 ripe tomato, on the vine",
      "1 lime",
      "extra virgin olive oil",
      "50 g unsalted peanuts",
      "25 g sesame seeds",
      "½ teaspoon cumin seeds",
      "1 clove of garlic",
      "1 sprig of fresh thyme",
      "½ teaspoon dried oregano",
      "½ a dried smoked chipotle chilli",
      "1 tablespoon tequila",
      "1-2 limes",
      "½ a fresh green chilli",
    ],
    categories: "Mains",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/85128277.jpg",
    preparationTime: 30,
    description: [
      "Preheat to the oven to 180°C/350°F/gas 4.",
      "Take your steak out of the fridge and let it come up to room temperature.",
      "For the salsa, pick and reserve a few coriander leaves, then roughly chop the rest (stalks and all). Pick and roughly chop the mint leaves. Peel the garlic, trim the chilli (deseed if you like) and spring onions, then roughly chop, along with the tomato. Mix with the herbs and continue chopping everything together until very fine.",
      "Squeeze the lime juice into a serving bowl with a good lug of of extra virgin olive oil and season with sea salt and black pepper. Add the chopped ingredients and toss to coat in the dressing. Set aside until needed.",
      "For the peanut sauce, put the nuts and the sesame and cumin seeds in a large dry frying pan over a medium heat. Peel and roughly slice the garlic and add to the pan, along with the thyme and oregano. Tear in the chipotle chilli and toast for a few minutes until lightly golden.",
      "Tip into a blender, just cover with water, then add the tequila, the juice of 1 lime, the fresh chilli, and a pinch each of sea salt and black pepper. Whiz until super-smooth, adding a splash more water if needed. Have a taste and adjust with more salt, chilli or lime juice. Set aside until needed.",
      "Scrub the potatoes and cut into 1cm-thick slices with a crinkle-cut knife. Pull the fat off the steak (discard the sinew) and finely slice. Place the fat in a cold non-stick frying pan over a medium heat and cook until golden. Add the potatoes and chillies and cook for 7 to 8 minutes on each side, or until golden and crispy. Tip the potatoes onto a plate lined with kitchen paper and keep warm in the preheated oven.",
      "Season the steak with salt and pepper, and place into the same pan as you cooked the potatoes, turning every minute until cooked to your liking – (about 7 minutes for medium rare). Remove from the pan, drizzle with a little oil and leave to rest for a few minutes, then slice 1cm thick.",
      "Spread a little peanut sauce over a large serving platter or divide between plates, and place the steak on top.",
      "Finish with a few dollops of salsa, a scattering of the reserved coriander, drizzle over any resting juices, then serve up with the crispy potatoes and tuck in.",
    ],
    serves: 2,
    rating: 5,
  },
  {
    title: "Christmas pudding vodka",
    ingredients: [
      "1 piece of blade mace",
      "2 sticks of cinnamon",
      "2 teaspoons ground mixed spice",
      "1 lemon",
      "1 orange",
      "300 g currants",
      "200 g chopped mixed peel",
      "450 g light muscovado sugar",
      "1 litre quality vodka",
    ],
    categories: "Drinks",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/63fZyP83q00A4IzT-xK73H.jpg",
    preparationTime: 15,
    description: [
      "Warm the spices in a dry pan over a low heat for 10 minutes, or until the aromas are released.",
      "Grate the lemon and orange rind into in a bowl, then squeeze in 2 tablespoons of each juice.",
      "Combine with the rest of the ingredients, including the warmed spices. Mix well, cover and chill for 3 to 4 days, stirring a few times daily, if you can.",
      "To bottle the vodka, line a sieve with muslin and strain. Discard the cinnamon sticks, but reserve the soaked fruits for other uses.",
      "Decant the vodka into clean bottles and seal – this will store for up to one year, and can be served from the freezer or at room temperature.",
    ],
    serves: 4,
    rating: 5,
  },
  {
    title: "Watermelon glory",
    ingredients: [
      "2 shots of golden rum",
      "400 g watermelon flesh",
      "1-2 tablespoons vanilla syrup, to taste",
      "ice cubes",
    ],
    categories: "Drinks",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/2oE1DDG9450AV4P1g0SsfC.jpg",
    preparationTime: 5,
    description: [
      "Blitz the rum, watermelon and 1 tablespoon of syrup with some ice cubes in a blender.",
      "Have a taste and add a little more syrup, if needed.",
      "Pour into glasses and serve with extra slices of watermelon, if you like.",
    ],
    serves: 2,
    rating: 5,
  },
  {
    title: "Margarita",
    ingredients: [
      "1 part Cazadores Tequila",
      "½ part triple sec liqueur",
      "1 whole lime, juiced",
      "1 a pinch of salt",
      "cubed ice",
    ],
    categories: "Drinks",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1198_1_1436865046.jpg",
    preparationTime: 5,
    description: [
      "Chill your glass (the easiest way is to fill it with ice)",
      "Put lots of ice and all of the ingredients into a shaker, then shake hard for about 30 seconds to chill the liquid really well.",
      "Run a lime wedge around the outside of the rim of your glass before rolling the rim in salt.",
      "Double strain the mix into the glass.",
    ],
    serves: 1,
    rating: 5,
  },
  {
    title: "Pasta peperonata",
    ingredients: [
      "2 red peppers",
      "2 yellow peppers",
      "extra virgin olive oil",
      "2 red onions",
      "2 cloves of garlic",
      "2 handfuls of fresh flat-leaf parsley",
      "2 tablespoons red wine vinegar or balsamic vinegar",
      "2 handfuls of Parmesan cheese",
      "2 heaped tablespoons mascarpone cheese or crème fraîche",
      "optional 455 g rigatoni, penne or spaghetti",
    ],
    categories: "Vegetarian",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/382_1_1438867908.jpg",
    preparationTime: 60,
    description: [
      "Deseed and slice the peppers and put them in a large frying pan over a medium heat with a little olive oil and a pinch of sea salt and black pepper. Place a lid on, and cook slowly for 15 minutes until softened. Don't rush this too much, as cooking the peppers slowly like this really helps to bring out the flavour.",
      "Add the onion to the pan and cook for a further 20 minutes. Then add the garlic and parsley stalks and toss around, keeping everything moving in the pan. Cook for about 3 minutes most. Have a little taste, and season with a bit more salt and pepper. Add the vinegar – it will sizzle away, so give everything a good toss.",
      "Grate the Parmesan and add one handful of the Parmesan and the mascarpone or crème fraîche, if using, and turn the heat down to minimum while you cook the pasta.",
      "Meanwhile, put a large pot of salted water on to boil. Add the pasta to the boiling water and cook according to the packet instructions. When cooked, drain in a colander, reserving some of the cooking water.",
      "Put the peppers, pasta and parsley leaves into a large warmed bowl. Give them a good toss together, then add a little of the pasta cooking water and a few good lugs of extra virgin olive oil to coat the pasta nicely. Serve straight away sprinkled with the rest of the Parmesan.",
    ],
    serves: 4,
    rating: 5,
  },
  {
    title: "Vegan chocolate cake",
    ingredients: [
      "450 ml rice milk",
      "1 tablespoon cider vinegar",
      "300 g caster sugar",
      "300 g gluten-free self-raising flour",
      "100 g cocoa powder",
      "1 tablespoon gluten-free baking powder",
      "1 teaspoon bicarbonate of soda",
      "¼ teaspoon xanthan gum",
      "1 pinch of salt",
      "160 ml sunflower oil",
      "2 tablespoons vanilla extract",
    ],
    categories: "Vegan",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/4DZY5r6eary8o0yEiT5grl.jpg",
    preparationTime: 50,
    description: [
      "Preheat the oven to 220°C/200°C fan/425°F/gas 7. Line the base of two 20cm cake tins with baking paper and lightly grease the paper and tins with oil.",
      "Mix the rice milk and cider vinegar together and set aside. Don’t worry if it separates – you are effectively making a buttermilk that will give the cake a light texture and help to activate the raising agents.",
      "Put in the sugar in a large mixing bowl. Sift in the flour and cocoa powder, then add baking powder, bicarb of soda, xantham gum and salt. Mix together really well.",
      "Pour the oil, vanilla and the rice milk and vinegar mixture into the dry ingredients. Mix them together really well either by hand or gently using a handheld blender.",
      "Divide the mixture between the two prepared tins. Tap the tins on your work surface to remove any large air bubbles and place on the middle shelf in the oven. Bake for about 30 to 35 minutes (test with a skewer or sharp knife – if it comes out clean, it's cooked).",
      "Leave the cakes to cool in their tins for 5 minutes before turning out onto wire racks to cool completely.",
      "To make the icing, put the sunflower spread in a bowl. Sift in the icing sugar and cocoa powder, then whisk to combine.",
      "Break the chocolate up into pieces in a microwave-safe bowl and cook on high in 10-second bursts until it has just melted. Mix into the icing.",
      "Spread an even layer of icing on one of the cooled cakes and then place the other cake on top. Top the cake with the rest of the icing. Decorate with dairy-free chocolate buttons (or fresh berries if preferred).",
    ],
    serves: 12,
    rating: 5,
  },
  {
    title: "Prawns snack",
    ingredients: [
      "3 baby gem lettuces",
      "300 g smoked salmon , from sustainable sources",
      "24 large cooked peeled prawns , from sustainable sources",
      "1 lime",
      "extra virgin olive oil",
      "½ a large clove of garlic",
      "2 cm piece of ginger",
      "1 spring onion",
      "a few sprigs of fresh coriander",
      "4 tablespoons free-range mayonnaise",
      "4 tablespoons tomato ketchup",
      "2 tablespoons chilli sauce",
      "1 teaspoon English mustard",
    ],
    categories: "Snack",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/60037505.jpg",
    preparationTime: 15,
    description: [
      "Peel and finely grate the garlic and ginger, trim and slice the spring onion, pick and finely chop the coriander leaves, then add to a bowl with the rest of the cocktail sauce ingredients. Mix well to combine, then chill in the fridge for 1 hour.",
      "Trim the lettuce, separate the leaves and divide between plates. Drape over the smoked salmon, then arrange the prawns on top.",
      "Dress the lettuce and seafood generously with the cocktail sauce. Cut the lime into wedges and squeeze a little juice over each plate, drizzle over some oil and finish with a good grinding of black pepper.",
    ],
    serves: 6,
    rating: 5,
  },
  {
    title: "Seared turmeric chicken",
    ingredients: [
      "200 g seasonal greens, such as baby spinach",
      "150 g wholewheat couscous",
      "½ a bunch of fresh mint, (15g)",
      "1 lemon",
      "1 tablespoon blanched hazelnuts",
      "2 large roasted peeled red peppers in brine",
      "¼ x skinny homemade houmous, or 2 tablespoons natural yoghurt",
      "hot chilli sauce, optional",
      "2 sprigs of fresh oregano",
      "1 level teaspoon ground tumeric",
      "olive oil",
      "2 x 120 g skinless free-range chicken breasts",
    ],
    categories: "Mains",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1589_9_1439908028.jpg",
    preparationTime: 30,
    description: [
      "Pick and finely chop the oregano leaves, then place in a bowl with the turmeric, a pinch each of sea salt and black pepper and 2 tablespoons of oil to make a marinade. Toss the chicken in the marinade and leave aside.",
      "Blanch the greens in a large pan of boiling water until just tender enough to eat but still vibrant in colour, then drain, reserving the water.",
      "In a bowl, just cover the couscous with boiling greens water, season, pop a plate on top and leave for 10 minutes. Pick and finely chop the mint leaves and stir into the fluffy couscous with the juice of half a lemon, then season to perfection.",
      "Toast the hazelnuts in a large dry non-stick frying pan on a medium-high heat, removing and crushing in a pestle and mortar once lightly golden.",
      "Return the frying pan to a high heat and cook the chicken for 4 minutes on each side, or until cooked through, turning halfway and adding the peppers when you flip the chicken. Reheat the greens, if needed.",
      "Meanwhile, you can either make a quick houmous (put three-quarters into the fridge for another day if making a full batch) or simply use yoghurt – both options are delicious.",
      "Serve the chicken with the couscous, peppers, greens and houmous or yoghurt, scattered with the hazelnuts and with a lemon wedge on the side. Nice with a drizzle of hot chilli sauce too.",
    ],
    serves: 2,
    rating: 5,
  },
  {
    title: "Winter daiquiri",
    ingredients: [
      "50 ml Bacardi 8 Year Old Rum",
      "25 ml clementine juice",
      "1 tsp maple syrup",
      "cinnamon stick",
    ],
    categories: "Drinks",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1407_18_1417192355.jpg",
    preparationTime: 5,
    description: [
      "Shake all the ingredients in a cocktail shaker with ice cubes, then strain into a cocktail glass. Crumble over the cinnamon stick to garnish.",
    ],
    serves: 1,
    rating: 5,
  },
  {
    title: "Chai martini",
    ingredients: [
      "100 ml chai tea",
      "50 ml cognac",
      "1 tbsp honey",
      "1 gingerbread biscuit, to serve",
    ],
    categories: "Drinks",
    image:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1383_33_1417102803.jpg",
    preparationTime: 5,
    description: [
      "Put the chai, cognac and honey in a pan, then heat gently. Take off the heat and leave for a minute to infuse.",
      "Pour into a handled coffee glass, then serve with the gingerbread biscuit on the side.",
    ],
    serves: 1,
    rating: 5,
  },
];

mongoose
  .connect("mongodb://localhost/cook-now")
  .then(() => console.log("connected"))
  .catch((err) => console.log(er));

Recipe.insertMany(recipes)
  .then((documents) => {
    console.log(`Success" ${documents.length} recipes were added`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
