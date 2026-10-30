const products = [
    // Animal Feed Products
    {
        id: "maize-gluten-meal-60",
        name: "Corn Gluten Meal (60%)",
        shortDescription: "High-protein concentrate (60%) derived from corn wet milling process for poultry, aqua & livestock.",
        description: "Corn Gluten Meal 60% is a high-protein byproduct of the corn wet milling process. It is highly digestible and provides a rich source of amino acids, making it an excellent ingredient for poultry, aqua, and livestock feed to enhance growth and productivity.",
        image: "images/products/maize-gluten-meal.jpg",
        category: "Animal Feed",
        specifications: [
            { label: "Protein", value: "60% Min" },
            { label: "Moisture", value: "10% Max" },
            { label: "Fat", value: "3% Max" },
            { label: "Fiber", value: "2.5% Max" }
        ]
    },
    {
        id: "yellow-corn",
        name: "Indian Yellow Maize",
        shortDescription: "Premium quality yellow corn sourced from top Indian agricultural regions.",
        description: "We are leading suppliers of Indian Yellow Maize (Corn). Sourced from the best agricultural regions of India, it is processed under hygienic conditions and widely used for flour, grits, and livestock energy feed.",
        image: "images/products/indian-yellow-maize.jpg",
        category: "Grains",
        specifications: [
            { label: "Moisture", value: "14% Max" },
            { label: "Foreign Matter", value: "1% Max" },
            { label: "Broken Kernels", value: "2% Max" },
            { label: "Starch Content", value: "70-75%" }
        ]
    },
    {
        id: "soya-meal",
        name: "Soya Meal",
        shortDescription: "High-protein soybean meal, essential for balanced animal nutrition.",
        description: "Soya Meal is the residue remaining after extracting oil from whole soybeans. It is the most important protein source used to feed farm animals across cattle, poultry, and aquaculture.",
        image: "images/products/soya-meal.jpg",
        category: "Animal Feed",
        specifications: [
            { label: "Protein", value: "46-48% Min" },
            { label: "Moisture", value: "12% Max" },
            { label: "Fat", value: "1.5% Max" }
        ]
    },
    {
        id: "corn-starch",
        name: "Pure Maize Starch",
        shortDescription: "Pure white corn starch for industrial and food applications.",
        description: "Maize starch is derived from high-grade corn grain. It is a common food ingredient used in thickening sauces, soups, confectionery, and textile/paper industrial processing.",
        image: "images/products/maize-starch.jpg",
        category: "Food Products",
        specifications: [
            { label: "Appearance", value: "Fine White Powder" },
            { label: "Starch Content", value: "98% Min" },
            { label: "Moisture", value: "12% Max" }
        ]
    },
    {
        id: "liquid-glucose",
        name: "Liquid Glucose",
        shortDescription: "High-quality sweetener used in confectionery and bakery.",
        description: "Liquid Glucose is a clear, viscous aqueous solution of saccharides obtained from the hydrolysis of starch. It is widely used in confectionery to control crystallization.",
        image: "images/products/liquid-glucose.jpg",
        category: "Food Products",
        specifications: [
            { label: "Appearance", value: "Clear Viscous Liquid" },
            { label: "Dextrose Equivalent", value: "38-42" },
            { label: "DS", value: "80-85%" }
        ]
    },
    {
        id: "rapeseed-meal",
        name: "Rapeseed Meal",
        shortDescription: "Nutritious animal feed ingredient with high protein content.",
        description: "Rapeseed meal is a high-protein oilseed meal produced after oil extraction from rapeseed. It is an excellent source of protein for cattle, poultry, and swine diets.",
        image: "images/products/rapeseed-meal.jpg",
        category: "Animal Feed",
        specifications: [
            { label: "Protein", value: "36-38% Min" },
            { label: "Moisture", value: "10% Max" }
        ]
    },
    {
        id: "de-oiled-rice-bran",
        name: "De-Oiled Rice Bran (DORB)",
        shortDescription: "Extracted rice bran, an essential protein source for poultry and cattle.",
        description: "De-Oiled Rice Bran is obtained after oil extraction from raw rice bran. It is a highly valued poultry and cattle feed ingredient rich in fiber and minerals.",
        image: "images/products/dorb.jpg",
        category: "Animal Feed",
        specifications: [
            { label: "Protein", value: "14-16% Min" },
            { label: "Moisture", value: "12% Max" },
            { label: "Fiber", value: "14-16% Max" }
        ]
    },
    {
        id: "guar-meal",
        name: "Guar Meal",
        shortDescription: "High protein meal, a byproduct of Guar Gum industry.",
        description: "Guar meal is a high-protein supplement often used in poultry and cattle feed to enhance nutritional intake.",
        image: "images/products/guar-meal.jpg",
        category: "Animal Feed",
        specifications: [
            { label: "Protein", value: "50-55% Min" },
            { label: "Moisture", value: "10% Max" }
        ]
    },
    {
        id: "cotton-seed-meal",
        name: "Cotton Seed Meal",
        shortDescription: "Essential protein source for the dairy industry.",
        description: "Cottonseed meal is a high-protein byproduct used in feeding cattle, particularly valuable for dairy cows.",
        image: "images/products/cotton-seed-meal.jpg",
        category: "Animal Feed",
        specifications: [
            { label: "Protein", value: "36-40% Min" },
            { label: "Fiber", value: "14% Max" }
        ]
    },
    {
        id: "corn-ddgs",
        name: "Corn DDGS",
        shortDescription: "By-product of ethanol production; excellent source of protein & energy.",
        description: "Corn Distillers Dried Grains with Solubles (Corn DDGS) is a high-value byproduct of ethanol production. Excellent for ruminants and poultry feed.",
        image: "images/products/corn-gluten-meal-60.png",
        category: "Animal Feed",
        specifications: [
            { label: "Protein", value: "26-28% Min" },
            { label: "Fat", value: "8-10% Min" }
        ]
    },
    {
        id: "brown-raisins",
        name: "Brown Raisins",
        shortDescription: "Sun-dried premium brown raisins for bakery and snacks.",
        description: "Our brown raisins are sun-dried and processed naturally to preserve sweet taste and nutritional value.",
        image: "images/products/brown-raisins.jpg",
        category: "Spices & Fruits",
        specifications: [{ label: "Type", value: "Sun-dried Brown" }]
    },
    {
        id: "black-raisins",
        name: "Black Raisins",
        shortDescription: "Premium black raisins, rich in antioxidants and naturally sweet.",
        description: "High-quality black raisins sourced from selected vineyards in India. Ideal for confectionery and health-conscious consumers.",
        image: "images/products/black-raisins.jpg",
        category: "Spices & Fruits",
        specifications: [{ label: "Type", value: "Premium Black" }]
    },
    {
        id: "golden-raisins",
        name: "Golden Raisins",
        shortDescription: "Specially selected golden raisins for premium culinary use.",
        description: "These raisins are processed to maintain vibrant golden color and tender texture. Perfect for bakery and dessert applications.",
        image: "images/products/golden-raisins.jpg",
        category: "Spices & Fruits",
        specifications: [{ label: "Type", value: "Extra Golden" }]
    },
    {
        id: "cinnamon-sticks",
        name: "Cinnamon Sticks",
        shortDescription: "Whole cinnamon sticks with rich flavor and aroma.",
        description: "Carefully selected and dried cinnamon sticks, used widely in culinary arts and traditional remedies.",
        image: "images/products/cinnamon-sticks.jpg",
        category: "Spices & Fruits",
        specifications: [{ label: "Type", value: "Whole Sticks" }]
    },
    {
        id: "cinnamon",
        name: "Cinnamon Powder",
        shortDescription: "Aromatic and high-quality cinnamon powder for global export.",
        description: "We supply premium quality cinnamon powder, known for its distinct aroma and flavor, sourced from the best plantations.",
        image: "images/products/cinnamon.jpg",
        category: "Spices & Fruits",
        specifications: [{ label: "Form", value: "Powder" }]
    },
    {
        id: "millet",
        name: "Millet",
        shortDescription: "Nutrient-rich ancient grain, gluten-free and versatile.",
        description: "Millets are small-seeded grasses, widely grown around the world as cereal crops for fodder and human food.",
        image: "images/products/millet.jpg",
        category: "Grains",
        specifications: [{ label: "Type", value: "Cleaned Grain" }]
    },
    {
        id: "bajra",
        name: "Bajra (Pearl Millet)",
        shortDescription: "Indian Bajra, high in protein and fiber.",
        description: "Bajra is a traditional Indian crop known for high nutritional value, essential for food and feed.",
        image: "images/products/bajra.jpg",
        category: "Grains",
        specifications: [{ label: "Moisture", value: "12% Max" }]
    },
    {
        id: "jowar",
        name: "Jowar (Sorghum)",
        shortDescription: "White Jowar, a staple grain with excellent digestibility.",
        description: "Jowar is a major food grain in India, used for making flour and as a nutritious feed for livestock.",
        image: "images/products/jowar.jpg",
        category: "Grains",
        specifications: [{ label: "Type", value: "White Grain" }]
    },
    {
        id: "milling-wheat",
        name: "Milling Wheat",
        shortDescription: "High-gluten wheat perfect for flour production.",
        description: "Specially selected wheat varieties with high protein and gluten content, ideal for producing premium flour.",
        image: "images/products/milling-wheat.jpg",
        category: "Grains",
        specifications: [{ label: "Gluten", value: "26% Min" }]
    },
    {
        id: "dextrose-monohydrate",
        name: "Dextrose Monohydrate",
        shortDescription: "For beverages and pharmaceutical application.",
        description: "Dextrose Monohydrate is a common form of glucose. It is used as a sweetener in food, beverages, and pharmaceuticals.",
        image: "images/products/sweetener.jpg",
        category: "Food Products",
        specifications: [{ label: "Purity", value: "99.5% Min" }]
    },
    {
        id: "sorbitol",
        name: "Sorbitol",
        shortDescription: "Sugar substitute in confectionery and cosmetics.",
        description: "Sorbitol is a sugar alcohol used as a sugar substitute in sugar-free products and humectant in cosmetics.",
        image: "images/products/liquid-glucose.jpg",
        category: "Food Products",
        specifications: [{ label: "Purity", value: "70% Solution" }]
    },
    {
        id: "corn-flour",
        name: "Corn Flour",
        shortDescription: "Fine ground corn flour for culinary and industrial use.",
        description: "Finely milled corn flour, versatile for use in baking, cooking, and industrial starch processes.",
        image: "images/products/corn-flour.jpg",
        category: "Food Products",
        specifications: [{ label: "Form", value: "Fine Flour" }]
    },
    {
        id: "maize-grit",
        name: "Maize Grit",
        shortDescription: "Coarse corn grits for brewing and snack industries.",
        description: "Maize grits are used in the cereal, snack food, and brewing industries for their consistent quality.",
        image: "images/products/maize-grit.jpg",
        category: "Food Products",
        specifications: [{ label: "Usage", value: "Cereal & Brewing" }]
    },
    {
        id: "cattle-feed",
        name: "Cattle Feed",
        shortDescription: "Balanced nutritional feed for healthy livestock.",
        description: "Custom-formulated cattle feed that provides the perfect balance of vitamins, minerals, and proteins.",
        image: "images/products/cattle-feed.jpg",
        category: "Animal Feed",
        specifications: [{ label: "Type", value: "Nutritional Pellets" }]
    },
    {
        id: "poultry-feed",
        name: "Poultry Feed",
        shortDescription: "High-energy feed for optimum poultry growth.",
        description: "Standardized poultry feed designed to meet the nutritional requirements of broilers and layers.",
        image: "images/products/poultry-feed.jpg",
        category: "Animal Feed",
        specifications: [{ label: "Energy", value: "High Energy Formulated" }]
    }
];
