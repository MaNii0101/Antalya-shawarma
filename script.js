// ========================================
// ANTALYA SHAWARMA UK - COMPLETE SYSTEM
// VERSION: 3.0.0 - FULLY FEATURED UK SYSTEM
// All 163 Features + Complete Menu
// ========================================

// ========================================
// UK DELIVERY CONFIGURATION
// ========================================
const UK_CONFIG = {
    restaurant: {
        name: 'Antalya Shawarma',
        address: '181 Market St, Hyde SK14 1HF',
        phone: '+44 121 293 0395',
        lat: 53.4514,
        lng: -2.0839
    },
    deliveryZones: {
        free: { max: 1, price: 0 },
        zone1: { min: 1, max: 3, price: 3.99 },
        zone2: { min: 3, max: 6, price: 5.99 }
    },
    maxDeliveryDistance: 6,
    currency: '£'
};

// ========================================
// CREDENTIALS
// ========================================
const OWNER_CREDENTIALS = {
    email: 'admin@antalyashawarma.com',
    password: 'admin2024',
    pin: '1234'
};

const RESTAURANT_CREDENTIALS = {
    email: 'staff@antalyashawarma.com',
    password: 'staff2024'
};

// ========================================
// COMPLETE ANTALYA SHAWARMA MENU DATA
// ========================================
const menuData = {
    // SHAWARMA WRAPS & SANDWICHES
    shawarma: [
        { 
            id: 101, 
            name: 'Chicken Shawarma Wrap', 
            price: 6.99, 
            icon: '🌯', 
            desc: 'Tender marinated chicken with garlic sauce, salad & pickles in fresh naan',
            options: [
                {name: 'Extra Meat', price: 2.00},
                {name: 'Extra Garlic Sauce', price: 0.50},
                {name: 'Add Cheese', price: 1.00},
                {name: 'Add Hummus', price: 1.00},
                {name: 'Make it Spicy', price: 0},
                {name: 'Extra Pickles', price: 0.50}
            ]
        },
        { 
            id: 102, 
            name: 'Lamb Shawarma Wrap', 
            price: 7.99, 
            icon: '🌯', 
            desc: 'Juicy lamb shawarma with tahini sauce, fresh salad in naan bread',
            options: [
                {name: 'Extra Meat', price: 2.50},
                {name: 'Extra Tahini', price: 0.50},
                {name: 'Add Cheese', price: 1.00},
                {name: 'Add Hummus', price: 1.00},
                {name: 'Make it Spicy', price: 0}
            ]
        },
        { 
            id: 103, 
            name: 'Mixed Shawarma Wrap', 
            price: 8.99, 
            icon: '🌯', 
            desc: 'Best of both - chicken & lamb shawarma combo with all sauces',
            options: [
                {name: 'Extra Meat', price: 3.00},
                {name: 'Add Cheese', price: 1.00},
                {name: 'Extra Sauce', price: 0.50},
                {name: 'Add Hummus', price: 1.00}
            ]
        },
        { 
            id: 104, 
            name: 'Chicken Shawarma Sandwich', 
            price: 5.99, 
            icon: '🥪', 
            desc: 'Chicken shawarma in Turkish bread with salad and sauce',
            options: [
                {name: 'Extra Meat', price: 2.00},
                {name: 'Add Cheese', price: 1.00},
                {name: 'Extra Sauce', price: 0.50}
            ]
        },
        { 
            id: 105, 
            name: 'Lamb Shawarma Sandwich', 
            price: 6.99, 
            icon: '🥪', 
            desc: 'Lamb shawarma in Turkish bread with salad and tahini',
            options: [
                {name: 'Extra Meat', price: 2.50},
                {name: 'Add Cheese', price: 1.00},
                {name: 'Extra Tahini', price: 0.50}
            ]
        },
        { 
            id: 106, 
            name: 'Falafel Wrap', 
            price: 5.99, 
            icon: '🌯', 
            desc: 'Crispy falafel with hummus, salad and tahini in fresh naan',
            options: [
                {name: 'Extra Falafel (3pc)', price: 1.50},
                {name: 'Extra Hummus', price: 1.00},
                {name: 'Add Halloumi', price: 2.00}
            ]
        }
    ],
    
    // SHAWARMA PORTIONS - CHIPS
    portions_chips: [
        { 
            id: 201, 
            name: 'Chicken Shawarma & Chips', 
            price: 8.99, 
            icon: '🍟', 
            desc: 'Savoury chicken shawarma served with crispy chips, salad and sauce',
            options: [
                {name: 'Extra Meat', price: 2.50},
                {name: 'Large Chips', price: 1.50},
                {name: 'Extra Sauce', price: 0.50},
                {name: 'Add Cheese on Chips', price: 1.00}
            ]
        },
        { 
            id: 202, 
            name: 'Lamb Shawarma & Chips', 
            price: 9.99, 
            icon: '🍟', 
            desc: 'Tender lamb shawarma served with crispy chips, salad and sauce',
            options: [
                {name: 'Extra Meat', price: 3.00},
                {name: 'Large Chips', price: 1.50},
                {name: 'Extra Sauce', price: 0.50},
                {name: 'Add Cheese on Chips', price: 1.00}
            ]
        },
        { 
            id: 203, 
            name: 'Mixed Shawarma & Chips', 
            price: 10.99, 
            icon: '🍟', 
            desc: 'Chicken & lamb shawarma combo with chips, salad and sauce',
            options: [
                {name: 'Extra Meat', price: 3.50},
                {name: 'Large Chips', price: 1.50},
                {name: 'Extra Sauce', price: 0.50}
            ]
        }
    ],
    
    // SHAWARMA PORTIONS - RICE
    portions_rice: [
        { 
            id: 301, 
            name: 'Chicken Shawarma & Rice', 
            price: 9.99, 
            icon: '🍚', 
            desc: 'Juicy chicken shawarma with basmati rice, soup, naan, and salad',
            options: [
                {name: 'Extra Meat', price: 2.50},
                {name: 'Biryani Rice', price: 1.00},
                {name: 'Extra Naan', price: 1.00}
            ]
        },
        { 
            id: 302, 
            name: 'Lamb Shawarma & Rice', 
            price: 10.99, 
            icon: '🍚', 
            desc: 'Tender lamb shawarma with basmati rice, soup, naan, and salad',
            options: [
                {name: 'Extra Meat', price: 3.00},
                {name: 'Biryani Rice', price: 1.00},
                {name: 'Extra Naan', price: 1.00}
            ]
        },
        { 
            id: 303, 
            name: 'Mixed Shawarma & Rice', 
            price: 11.99, 
            icon: '🍚', 
            desc: 'Chicken & lamb shawarma with rice or biryani, soup, naan and salad',
            options: [
                {name: 'Extra Meat', price: 3.50},
                {name: 'Biryani Rice', price: 1.00},
                {name: 'Extra Naan', price: 1.00}
            ]
        }
    ],
    
    // GRILL PORTIONS
    grill: [
        { 
            id: 401, 
            name: 'Grill Mix Chicken & Lamb', 
            price: 14.99, 
            icon: '🍖', 
            desc: 'Boneless chicken & lamb pieces, served with salad, sauce & naan',
            options: [
                {name: 'Extra Meat', price: 4.00},
                {name: 'Add Rice', price: 2.00},
                {name: 'Extra Naan', price: 1.00}
            ]
        },
        { 
            id: 402, 
            name: 'Lamb Back Strap Fillet', 
            price: 16.99, 
            icon: '🥩', 
            desc: 'Premium lamb fillet served with salad, sauce & naan',
            options: [
                {name: 'Extra Fillet', price: 5.00},
                {name: 'Add Rice', price: 2.00},
                {name: 'Extra Naan', price: 1.00}
            ]
        },
        { 
            id: 403, 
            name: 'Chicken Tikka Portion', 
            price: 11.99, 
            icon: '🍗', 
            desc: 'Marinated chicken tikka served with salad, sauce & naan',
            options: [
                {name: 'Extra Tikka', price: 3.00},
                {name: 'Add Rice', price: 2.00},
                {name: 'Extra Naan', price: 1.00}
            ]
        },
        { 
            id: 404, 
            name: 'Lamb Tikka Portion', 
            price: 13.99, 
            icon: '🍖', 
            desc: 'Tender lamb tikka served with salad, sauce & naan',
            options: [
                {name: 'Extra Tikka', price: 4.00},
                {name: 'Add Rice', price: 2.00},
                {name: 'Extra Naan', price: 1.00}
            ]
        },
        { 
            id: 405, 
            name: 'Adana Kebab', 
            price: 12.99, 
            icon: '🥙', 
            desc: 'Spicy minced lamb kebab served with salad, sauce & naan',
            options: [
                {name: 'Extra Kebab', price: 4.00},
                {name: 'Add Rice', price: 2.00},
                {name: 'Extra Spicy', price: 0}
            ]
        },
        { 
            id: 406, 
            name: 'Kofta Kebab', 
            price: 11.99, 
            icon: '🥙', 
            desc: 'Minced lamb kofta served with salad, sauce & naan',
            options: [
                {name: 'Extra Kofta', price: 3.50},
                {name: 'Add Rice', price: 2.00},
                {name: 'Extra Naan', price: 1.00}
            ]
        },
        { 
            id: 407, 
            name: 'Chicken Wings (5pc)', 
            price: 6.99, 
            icon: '🍗', 
            desc: 'Crispy marinated chicken wings served with sauce',
            options: [
                {name: 'Extra Wings (5pc)', price: 5.00},
                {name: 'Extra Spicy', price: 0},
                {name: 'Add Chips', price: 2.50}
            ]
        }
    ],
    
    // FAMILY PLATTERS
    platters: [
        { 
            id: 501, 
            name: 'Antalya Platter 1', 
            price: 24.99, 
            icon: '🍽️', 
            desc: 'Adana kebab, lamb tikka, chicken tikka, 5 wings, large chips. With salad, hummus, rice, bulgur & 3 naans',
            options: [
                {name: 'Extra Naans (3pc)', price: 2.00},
                {name: 'Extra Hummus', price: 1.50},
                {name: '2 Extra Drinks', price: 3.00}
            ]
        },
        { 
            id: 502, 
            name: 'Antalya Platter 2', 
            price: 34.99, 
            icon: '🍽️', 
            desc: 'Adana, kofta, lamb tikka, chicken tikka, 5 wings, shawarma, large chips. With salad, hummus, rice & 3 naans & 2 drinks',
            options: [
                {name: 'Extra Naans (3pc)', price: 2.00},
                {name: 'Extra Hummus', price: 1.50},
                {name: 'Upgrade Drinks', price: 2.00}
            ]
        },
        { 
            id: 503, 
            name: 'Family Mix Grill', 
            price: 44.99, 
            icon: '🍽️', 
            desc: 'Lamb shish, chicken shish, lamb kofta, wings, ribs, lamb chops, shawarma. With salads and 4 naans',
            options: [
                {name: 'Extra Portion', price: 8.00},
                {name: 'Extra Naans (4pc)', price: 3.00}
            ]
        }
    ],
    
    // RICE & BIRYANI
    rice: [
        { 
            id: 601, 
            name: 'Lamb Biryani', 
            price: 12.99, 
            icon: '🍚', 
            desc: 'Spring juicy pure lamb served with rice or biryani, soup, naan, and salad',
            options: [
                {name: 'Extra Lamb', price: 4.00},
                {name: 'Extra Naan', price: 1.00},
                {name: 'Large Portion', price: 3.00}
            ]
        },
        { 
            id: 602, 
            name: 'Chicken Biryani', 
            price: 10.99, 
            icon: '🍚', 
            desc: 'Half chicken served with rice or biryani, soup, naan, and salad',
            options: [
                {name: 'Full Chicken', price: 5.00},
                {name: 'Extra Naan', price: 1.00},
                {name: 'Extra Rice', price: 2.00}
            ]
        },
        { 
            id: 603, 
            name: 'Vegetable Biryani', 
            price: 8.99, 
            icon: '🍚', 
            desc: 'Mixed vegetable biryani with soup, naan, and salad',
            options: [
                {name: 'Extra Vegetables', price: 2.00},
                {name: 'Extra Naan', price: 1.00},
                {name: 'Add Halloumi', price: 2.50}
            ]
        }
    ],
    
    // ROASTED CHICKEN
    chicken: [
        { 
            id: 701, 
            name: 'Half Roasted Chicken', 
            price: 9.99, 
            icon: '🍗', 
            desc: 'Half chicken served with chips or rice, salad and sauce',
            options: [
                {name: 'Upgrade to Full', price: 5.00},
                {name: 'Extra Chips', price: 2.00},
                {name: 'Extra Sauce', price: 0.50}
            ]
        },
        { 
            id: 702, 
            name: 'Full Roasted Chicken', 
            price: 14.99, 
            icon: '🍗', 
            desc: 'Whole roasted chicken with chips or rice, salad and sauce',
            options: [
                {name: 'Large Chips', price: 2.00},
                {name: 'Extra Sauce', price: 0.50},
                {name: 'Add Naan (2pc)', price: 1.50}
            ]
        },
        { 
            id: 703, 
            name: 'Chicken Tenders (6pc)', 
            price: 7.99, 
            icon: '🍗', 
            desc: 'Crispy chicken strips served with chips and dip',
            options: [
                {name: 'Extra Tenders (3pc)', price: 3.00},
                {name: 'Extra Dip', price: 0.50},
                {name: 'Large Chips', price: 1.50}
            ]
        },
        { 
            id: 704, 
            name: 'Hot Wings (6pc)', 
            price: 6.99, 
            icon: '🍗', 
            desc: 'Spicy buffalo wings served with chips and blue cheese dip',
            options: [
                {name: 'Extra Wings (6pc)', price: 5.00},
                {name: 'Extra Hot', price: 0},
                {name: 'Ranch Dip', price: 0.75}
            ]
        }
    ],
    
    // FATAYER (Turkish Pastries)
    fatayer: [
        { 
            id: 801, 
            name: 'Chicken Cheese Fatayer', 
            price: 4.99, 
            icon: '🥟', 
            desc: 'Turkish pastry filled with chicken and melted cheese',
            options: [
                {name: 'Extra Cheese', price: 1.00},
                {name: 'Add Jalapeños', price: 0.50}
            ]
        },
        { 
            id: 802, 
            name: 'Lamb Cheese Fatayer', 
            price: 5.49, 
            icon: '🥟', 
            desc: 'Pastry filled with a blend of lamb and cheese',
            options: [
                {name: 'Extra Cheese', price: 1.00},
                {name: 'Extra Spicy', price: 0}
            ]
        },
        { 
            id: 803, 
            name: 'Spinach Fatayer', 
            price: 3.99, 
            icon: '🥟', 
            desc: 'Vegetarian pastry with spinach and onion filling',
            options: [
                {name: 'Add Feta Cheese', price: 1.00}
            ]
        },
        { 
            id: 804, 
            name: 'Cheese Fatayer', 
            price: 3.99, 
            icon: '🥟', 
            desc: 'A blend of cheeses combined for mild flavour',
            options: [
                {name: 'Extra Cheese', price: 1.00}
            ]
        }
    ],
    
    // PIZZA
    pizza: [
        { 
            id: 901, 
            name: 'Margherita Pizza 10"', 
            price: 8.99, 
            icon: '🍕', 
            desc: 'Classic pizza with tomato, mozzarella, and basil',
            options: [
                {name: 'Extra Cheese', price: 2.00},
                {name: 'Add Toppings (2)', price: 2.00},
                {name: '12" Size', price: 3.00}
            ]
        },
        { 
            id: 902, 
            name: 'Chicken Pizza 10"', 
            price: 10.99, 
            icon: '🍕', 
            desc: 'Chicken pizza with your choice of two toppings',
            options: [
                {name: 'Extra Chicken', price: 2.50},
                {name: 'Extra Toppings (2)', price: 2.00},
                {name: '12" Size', price: 3.00}
            ]
        },
        { 
            id: 903, 
            name: 'Lamb Pizza 10"', 
            price: 11.99, 
            icon: '🍕', 
            desc: 'Pizza topped with lamb and two additional toppings',
            options: [
                {name: 'Extra Lamb', price: 3.00},
                {name: 'Extra Toppings (2)', price: 2.00},
                {name: '12" Size', price: 3.00}
            ]
        },
        { 
            id: 904, 
            name: 'Pepperoni Pizza 10"', 
            price: 10.99, 
            icon: '🍕', 
            desc: 'Classic topped with pepperoni and two toppings',
            options: [
                {name: 'Extra Pepperoni', price: 2.00},
                {name: 'Extra Cheese', price: 2.00},
                {name: '12" Size', price: 3.00}
            ]
        },
        { 
            id: 905, 
            name: 'Vegetarian Pizza 10"', 
            price: 9.99, 
            icon: '🍕', 
            desc: 'Pizza topped with variety of vegetables',
            options: [
                {name: 'Extra Veggies', price: 2.00},
                {name: 'Add Halloumi', price: 2.50},
                {name: '12" Size', price: 3.00}
            ]
        },
        { 
            id: 906, 
            name: 'Garlic Bread with Cheese', 
            price: 4.99, 
            icon: '🥖', 
            desc: 'Soft bread topped with garlic and melted cheese',
            options: [
                {name: 'Extra Cheese', price: 1.00},
                {name: 'Add Mushrooms', price: 1.00}
            ]
        }
    ],
    
    // BURGERS
    burgers: [
        { 
            id: 1001, 
            name: 'Classic Beef Burger', 
            price: 7.99, 
            icon: '🍔', 
            desc: 'Beef patty served in a bun with salad',
            options: [
                {name: 'Add Cheese', price: 1.00},
                {name: 'Add Bacon', price: 1.50},
                {name: 'Extra Patty', price: 2.50}
            ]
        },
        { 
            id: 1002, 
            name: 'Chicken Burger', 
            price: 7.49, 
            icon: '🍔', 
            desc: 'Crispy chicken fillet burger with lettuce and mayo',
            options: [
                {name: 'Add Cheese', price: 1.00},
                {name: 'Extra Chicken', price: 2.50},
                {name: 'Make it Spicy', price: 0}
            ]
        },
        { 
            id: 1003, 
            name: 'Quarter Pounder Cheese', 
            price: 8.99, 
            icon: '🍔', 
            desc: 'Quarter-pound cheeseburger served with chips',
            options: [
                {name: 'Extra Cheese', price: 1.00},
                {name: 'Add Bacon', price: 1.50},
                {name: 'Extra Patty', price: 3.00}
            ]
        }
    ],
    
    // MEAL DEALS
    meals: [
        { 
            id: 1101, 
            name: 'Margherita Meal Deal', 
            price: 11.99, 
            icon: '🍕', 
            desc: 'Classic margherita pizza with chips and Pepsi',
            options: [
                {name: 'Upgrade Drink', price: 1.00},
                {name: 'Large Chips', price: 1.50}
            ]
        },
        { 
            id: 1102, 
            name: 'Chicken Strips Meal', 
            price: 9.99, 
            icon: '🍗', 
            desc: 'Four chicken strips with chips and Pepsi',
            options: [
                {name: 'Extra Strips (2pc)', price: 2.00},
                {name: 'Upgrade Drink', price: 1.00}
            ]
        },
        { 
            id: 1103, 
            name: 'Hot Wings Meal', 
            price: 9.99, 
            icon: '🍗', 
            desc: 'Six hot wings with chips and Pepsi',
            options: [
                {name: 'Extra Wings (3pc)', price: 3.00},
                {name: 'Upgrade Drink', price: 1.00}
            ]
        },
        { 
            id: 1104, 
            name: 'Burger Meal Deal', 
            price: 10.99, 
            icon: '🍔', 
            desc: 'Quarter-pound cheeseburger with chips and Pepsi',
            options: [
                {name: 'Upgrade to Double', price: 2.50},
                {name: 'Large Chips', price: 1.50}
            ]
        }
    ],
    
    // SIDES & EXTRAS
    sides: [
        { 
            id: 1201, 
            name: 'Regular Chips', 
            price: 2.99, 
            icon: '🍟', 
            desc: 'Crispy golden chips',
            options: [
                {name: 'Large Size', price: 1.50},
                {name: 'Add Cheese', price: 1.00},
                {name: 'Cajun Seasoning', price: 0.50}
            ]
        },
        { 
            id: 1202, 
            name: 'Cheese Chips', 
            price: 4.99, 
            icon: '🍟', 
            desc: 'Chips covered in melted cheese',
            options: [
                {name: 'Extra Cheese', price: 1.00},
                {name: 'Add Jalapeños', price: 0.75}
            ]
        },
        { 
            id: 1203, 
            name: 'Hummus', 
            price: 3.49, 
            icon: '🥣', 
            desc: 'Creamy chickpea dip with olive oil',
            options: [
                {name: 'Large Portion', price: 1.50},
                {name: 'Add Naan', price: 1.00}
            ]
        },
        { 
            id: 1204, 
            name: 'Large Salad', 
            price: 4.99, 
            icon: '🥗', 
            desc: 'Fresh mixed salad with dressing',
            options: [
                {name: 'Add Feta Cheese', price: 1.50},
                {name: 'Add Halloumi', price: 2.00}
            ]
        },
        { 
            id: 1205, 
            name: 'Naan Bread (3pc)', 
            price: 1.50, 
            icon: '🫓', 
            desc: 'Freshly baked soft naan bread',
            options: [
                {name: 'Extra Naan (3pc)', price: 1.50}
            ]
        },
        { 
            id: 1206, 
            name: 'Rice Portion', 
            price: 2.99, 
            icon: '🍚', 
            desc: 'Basmati rice portion',
            options: [
                {name: 'Biryani Rice', price: 1.00},
                {name: 'Large Portion', price: 1.50}
            ]
        },
        { 
            id: 1207, 
            name: 'Soup of the Day', 
            price: 3.49, 
            icon: '🍲', 
            desc: 'Fresh homemade soup with bread',
            options: [
                {name: 'Large Bowl', price: 1.50}
            ]
        },
        { 
            id: 1208, 
            name: 'Falafel (5pc)', 
            price: 4.49, 
            icon: '🧆', 
            desc: 'Crispy homemade falafel',
            options: [
                {name: 'Extra Falafel (5pc)', price: 3.50},
                {name: 'Add Hummus', price: 1.00}
            ]
        }
    ],
    
    // SAUCES
    sauces: [
        { id: 1301, name: 'Garlic Sauce', price: 0.99, icon: '🧄', desc: 'Creamy garlic mayo sauce' },
        { id: 1302, name: 'Chilli Sauce', price: 0.99, icon: '🌶️', desc: 'Hot chilli sauce' },
        { id: 1303, name: 'Tahini Sauce', price: 0.99, icon: '🥜', desc: 'Traditional sesame tahini' },
        { id: 1304, name: 'Yoghurt Sauce', price: 0.99, icon: '🥛', desc: 'Cool yoghurt dip' },
        { id: 1305, name: 'BBQ Sauce', price: 0.99, icon: '🍖', desc: 'Smoky BBQ sauce' },
        { id: 1306, name: 'Mayo', price: 0.79, icon: '🥄', desc: 'Classic mayonnaise' },
        { id: 1307, name: 'Ketchup', price: 0.79, icon: '🍅', desc: 'Tomato ketchup' }
    ],
    
    // DRINKS
    drinks: [
        { id: 1401, name: 'Coca Cola', price: 1.99, icon: '🥤', desc: 'Ice cold 330ml can' },
        { id: 1402, name: 'Pepsi', price: 1.99, icon: '🥤', desc: 'Ice cold 330ml can' },
        { id: 1403, name: 'Fanta', price: 1.99, icon: '🥤', desc: 'Orange 330ml can' },
        { id: 1404, name: 'Sprite', price: 1.99, icon: '🥤', desc: 'Lemon-lime 330ml can' },
        { id: 1405, name: 'Water', price: 1.49, icon: '💧', desc: 'Still water 500ml' },
        { id: 1406, name: 'Fresh Orange Juice', price: 3.49, icon: '🧃', desc: 'Freshly squeezed orange' },
        { id: 1407, name: 'Ayran', price: 2.49, icon: '🥛', desc: 'Traditional Turkish yoghurt drink' },
        { id: 1408, name: '1.5L Coca Cola', price: 3.49, icon: '🍾', desc: 'Large bottle for sharing' },
        { id: 1409, name: '1.5L Pepsi', price: 3.49, icon: '🍾', desc: 'Large bottle for sharing' }
    ]
};

// ========================================
// CATEGORY NAMES & ICONS
// ========================================
const categories = {
    shawarma: { name: 'Shawarma Wraps', icon: '🌯' },
    portions_chips: { name: 'Portions (Chips)', icon: '🍟' },
    portions_rice: { name: 'Portions (Rice)', icon: '🍚' },
    grill: { name: 'Grill Portions', icon: '🍖' },
    platters: { name: 'Family Platters', icon: '🍽️' },
    rice: { name: 'Rice & Biryani', icon: '🍚' },
    chicken: { name: 'Roasted Chicken', icon: '🍗' },
    fatayer: { name: 'Fatayer', icon: '🥟' },
    pizza: { name: 'Pizza', icon: '🍕' },
    burgers: { name: 'Burgers', icon: '🍔' },
    meals: { name: 'Meal Deals', icon: '🎁' },
    sides: { name: 'Sides & Extras', icon: '🥗' },
    sauces: { name: 'Sauces', icon: '🧄' },
    drinks: { name: 'Drinks', icon: '🥤' }
};

// ========================================
// GLOBAL STATE
// ========================================
let cart = [];
let currentUser = null;
let selectedFood = null;
let selectedCustomizations = [];
let quantity = 1;
let isSignUpMode = false;
let currentCategory = 'shawarma';
let userDatabase = [];
let orderHistory = [];
let userFavorites = {};
let userNotifications = {};
let selectedLocation = null;
let googleMap = null;
let mapMarker = null;
let isEditingLocation = false;
let pendingOrders = [];
let isOwnerLoggedIn = false;
let isRestaurantLoggedIn = false;
let pendingVerification = null;
let drivers = [];
let currentDriver = null;

let ownerBankDetails = {
    bankName: 'Barclays Bank UK',
    accountNumber: '12345678',
    sortCode: '20-00-00',
    iban: 'GB29 NWBK 6016 1331 9268 19',
    cardNumber: '4532 **** **** 1234'
};

// ========================================
// DRIVER SYSTEM
// ========================================
window.driverSystem = {
    drivers: {
        'driver-001': {
            id: 'driver-001',
            name: 'Mohammed Ali',
            email: 'mohammed@antalya.com',
            phone: '+44 7700 900123',
            password: 'driver123',
            dob: '1990-05-15',
            gender: 'Male',
            secretCode: 'DRV-001-MA',
            deliveries: 247,
            rating: 4.9,
            active: true,
            photoUrl: null
        },
        'driver-002': {
            id: 'driver-002',
            name: 'Ahmed Hassan',
            email: 'ahmed@antalya.com',
            phone: '+44 7700 900124',
            password: 'driver123',
            dob: '1988-08-20',
            gender: 'Male',
            secretCode: 'DRV-002-AH',
            deliveries: 189,
            rating: 4.8,
            active: true,
            photoUrl: null
        },
        'driver-003': {
            id: 'driver-003',
            name: 'Fatima Khan',
            email: 'fatima@antalya.com',
            phone: '+44 7700 900125',
            password: 'driver123',
            dob: '1992-12-10',
            gender: 'Female',
            secretCode: 'DRV-003-FK',
            deliveries: 156,
            rating: 4.95,
            active: true,
            photoUrl: null
        }
    },
    get: function(id) {
        return this.drivers[id] || null;
    },
    getAll: function() {
        return Object.values(this.drivers);
    },
    add: function(driver) {
        this.drivers[driver.id] = driver;
        this.save();
    },
    update: function(id, data) {
        if (this.drivers[id]) {
            Object.assign(this.drivers[id], data);
            this.save();
        }
    },
    delete: function(id) {
        delete this.drivers[id];
        this.save();
    },
    save: function() {
        localStorage.setItem('driverSystem', JSON.stringify(this.drivers));
    },
    load: function() {
        const saved = localStorage.getItem('driverSystem');
        if (saved) {
            this.drivers = JSON.parse(saved);
        }
    }
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Calculate distance in miles (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3959; // Earth radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Get delivery cost based on distance
function getDeliveryCost(distance) {
    if (distance > UK_CONFIG.maxDeliveryDistance) {
        return { 
            available: false, 
            cost: 0, 
            message: `❌ Outside delivery area (max ${UK_CONFIG.maxDeliveryDistance} miles)`,
            distance: distance.toFixed(1)
        };
    }
    if (distance <= UK_CONFIG.deliveryZones.free.max) {
        return { 
            available: true, 
            cost: 0, 
            message: '✅ FREE Delivery!',
            distance: distance.toFixed(1)
        };
    }
    if (distance <= UK_CONFIG.deliveryZones.zone1.max) {
        return { 
            available: true, 
            cost: UK_CONFIG.deliveryZones.zone1.price, 
            message: `📍 ${distance.toFixed(1)} miles - £${UK_CONFIG.deliveryZones.zone1.price}`,
            distance: distance.toFixed(1)
        };
    }
    if (distance <= UK_CONFIG.deliveryZones.zone2.max) {
        return { 
            available: true, 
            cost: UK_CONFIG.deliveryZones.zone2.price,
            message: `📍 ${distance.toFixed(1)} miles - £${UK_CONFIG.deliveryZones.zone2.price}`,
            distance: distance.toFixed(1)
        };
    }
    return { available: false, cost: 0, message: '❌ Outside delivery area' };
}

// Format price in GBP
function formatPrice(amount) {
    return UK_CONFIG.currency + parseFloat(amount).toFixed(2);
}

// Email Verification System
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendVerificationEmail(email, code) {
    console.log(`📧 Verification code for ${email}: ${code}`);
    alert(`📧 Verification Code Sent!\n\nA 6-digit code has been sent to:\n${email}\n\n(Demo: Code is ${code})`);
}

// Validation functions
function isValidEmail(email) {
    email = email.toLowerCase().trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(email)) {
        return { valid: false, message: '❌ Invalid email format' };
    }
    
    if (email.endsWith('@gmail.com')) {
        return { valid: true, provider: 'Gmail' };
    } else if (email.endsWith('@icloud.com')) {
        return { valid: true, provider: 'iCloud' };
    } else {
        return { valid: true, provider: 'Other' };
    }
}

function isValidPhone(phone) {
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    const ukPhoneRegex = /^(\+44|44|0)?[1-9]\d{9,10}$/;
    return ukPhoneRegex.test(cleanPhone);
}

function isValidCardNumber(cardNumber) {
    cardNumber = cardNumber.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cardNumber)) return false;
    
    let sum = 0, isEven = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);
        if (isEven) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        isEven = !isEven;
    }
    return (sum % 10) === 0;
}

function isValidCVV(cvv) {
    return /^\d{3,4}$/.test(cvv);
}

function isValidExpiry(expiry) {
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return false;
    const [month, year] = expiry.split('/').map(num => parseInt(num));
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    
    if (month < 1 || month > 12) return false;
    if (year < currentYear || (year === currentYear && month < currentMonth)) return false;
    return true;
}

function playNotificationSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch(e) {
        console.log('Audio not supported');
    }
}

// ========================================
// STORAGE FUNCTIONS
// ========================================
function saveData() {
    localStorage.setItem('restaurantUsers', JSON.stringify(userDatabase));
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
    localStorage.setItem('userFavorites', JSON.stringify(userFavorites));
    localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
    localStorage.setItem('ownerBankDetails', JSON.stringify(ownerBankDetails));
    localStorage.setItem('drivers', JSON.stringify(drivers));
}

function loadData() {
    const savedUsers = localStorage.getItem('restaurantUsers');
    if (savedUsers) userDatabase = JSON.parse(savedUsers);
    
    const savedOrders = localStorage.getItem('orderHistory');
    if (savedOrders) orderHistory = JSON.parse(savedOrders);
    
    const savedPending = localStorage.getItem('pendingOrders');
    if (savedPending) pendingOrders = JSON.parse(savedPending);
    
    const savedFavorites = localStorage.getItem('userFavorites');
    if (savedFavorites) userFavorites = JSON.parse(savedFavorites);
    
    const savedNotifications = localStorage.getItem('userNotifications');
    if (savedNotifications) userNotifications = JSON.parse(savedNotifications);
    
    const savedBankDetails = localStorage.getItem('ownerBankDetails');
    if (savedBankDetails) ownerBankDetails = JSON.parse(savedBankDetails);
    
    const savedDrivers = localStorage.getItem('drivers');
    if (savedDrivers) drivers = JSON.parse(savedDrivers);
    
    const savedCurrentUser = localStorage.getItem('currentUser');
    if (savedCurrentUser) {
        currentUser = JSON.parse(savedCurrentUser);
        updateHeaderForLoggedInUser();
        
        const savedCart = localStorage.getItem('cart_' + currentUser.email);
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartBadge();
        }
        updateFavoritesBadge();
        updateNotificationBadge();
    }
    
    window.driverSystem.load();
}

function saveCart() {
    if (currentUser) {
        localStorage.setItem('cart_' + currentUser.email, JSON.stringify(cart));
    }
}

function saveDrivers() {
    localStorage.setItem('drivers', JSON.stringify(drivers));
}

// ========================================
// UI UPDATE FUNCTIONS
// ========================================
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

function updateFavoritesBadge() {
    const badge = document.getElementById('favoritesBadge');
    if (!badge) return;
    if (currentUser && userFavorites[currentUser.email]) {
        const count = userFavorites[currentUser.email].length;
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    } else {
        badge.style.display = 'none';
    }
}

function updateNotificationBadge() {
    const badge = document.getElementById('notificationBadge');
    if (!badge) return;
    if (currentUser && userNotifications[currentUser.email]) {
        const unread = userNotifications[currentUser.email].filter(n => !n.read).length;
        badge.textContent = unread;
        badge.style.display = unread > 0 ? 'flex' : 'none';
    } else {
        badge.style.display = 'none';
    }
}

function updateHeaderForLoggedInUser() {
    const loginBtn = document.querySelector('.login-btn');
    if (!loginBtn) return;
    
    if (currentUser) {
        loginBtn.textContent = currentUser.name.split(' ')[0];
        loginBtn.style.background = 'rgba(255, 107, 107, 0.2)';
        loginBtn.style.border = '2px solid #ff6b6b';
        loginBtn.onclick = showAccount;
    } else {
        loginBtn.textContent = 'Login';
        loginBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a6f)';
        loginBtn.style.border = 'none';
        loginBtn.onclick = showLogin;
    }
}

// ========================================
// MENU DISPLAY FUNCTIONS
// ========================================
function displayMenu(category) {
    currentCategory = category;
    const menuGrid = document.getElementById('menuGrid');
    const menuTitle = document.getElementById('menuTitle');
    
    if (!menuGrid) return;
    
    const catInfo = categories[category] || { name: category, icon: '🍽️' };
    if (menuTitle) menuTitle.textContent = catInfo.name;
    
    menuGrid.innerHTML = '';
    
    const items = menuData[category] || [];
    items.forEach(item => {
        const isFavorite = currentUser && userFavorites[currentUser.email]?.includes(item.id);
        
        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${item.id}, event)">
                ${isFavorite ? '❤️' : '🤍'}
            </button>
            <div class="food-image">${item.icon}</div>
            <div class="food-info">
                <div class="food-name">${item.name}</div>
                <div class="food-desc">${item.desc}</div>
                <div class="food-footer">
                    <div class="food-price">${formatPrice(item.price)}</div>
                    <button class="add-btn" onclick="openFoodModal(${item.id})">Order</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

function filterCategory(category) {
    document.querySelectorAll('.category-item').forEach(item => item.classList.remove('active'));
    if (event && event.target) {
        const catItem = event.target.closest('.category-item');
        if (catItem) catItem.classList.add('active');
    }
    displayMenu(category);
}

function renderCategories() {
    const categoriesContainer = document.querySelector('.categories');
    if (!categoriesContainer) return;
    
    categoriesContainer.innerHTML = '';
    
    Object.entries(categories).forEach(([key, cat], index) => {
        const catEl = document.createElement('div');
        catEl.className = `category-item ${index === 0 ? 'active' : ''}`;
        catEl.onclick = () => filterCategory(key);
        catEl.innerHTML = `
            <div class="category-icon">${cat.icon}</div>
            <div class="category-name">${cat.name}</div>
        `;
        categoriesContainer.appendChild(catEl);
    });
}

// ========================================
// FOOD MODAL FUNCTIONS
// ========================================
function findFood(foodId) {
    for (let cat of Object.keys(menuData)) {
        const found = menuData[cat].find(item => item.id === foodId);
        if (found) return found;
    }
    return null;
}

function openFoodModal(foodId) {
    selectedFood = findFood(foodId);
    if (!selectedFood) return;
    
    quantity = 1;
    selectedCustomizations = [];
    
    document.getElementById('modalFoodName').textContent = selectedFood.name;
    document.getElementById('modalFoodIcon').textContent = selectedFood.icon;
    document.getElementById('modalFoodDesc').textContent = selectedFood.desc;
    document.getElementById('modalFoodPrice').textContent = formatPrice(selectedFood.price);
    document.getElementById('quantity').textContent = '1';
    document.getElementById('specialInstructions').value = '';
    
    // Customization options
    const customSection = document.getElementById('customizationSection');
    const customOptions = document.getElementById('customOptions');
    
    if (selectedFood.options && selectedFood.options.length > 0) {
        customSection.style.display = 'block';
        customOptions.innerHTML = selectedFood.options.map((opt, i) => `
            <label style="display: flex; align-items: center; gap: 0.8rem; padding: 0.8rem; background: rgba(255,255,255,0.05); border-radius: 8px; margin-bottom: 0.5rem; cursor: pointer;">
                <input type="checkbox" id="opt_${i}" onchange="toggleCustomization(${i})" style="width: 20px; height: 20px; accent-color: #ff6b6b;">
                <span style="flex: 1;">${opt.name}</span>
                <span style="color: ${opt.price > 0 ? '#ff6b6b' : '#10b981'}; font-weight: 600;">
                    ${opt.price > 0 ? '+' + formatPrice(opt.price) : 'FREE'}
                </span>
            </label>
        `).join('');
    } else {
        customSection.style.display = 'none';
    }
    
    updateTotalPrice();
    document.getElementById('foodModal').classList.add('active');
}

function toggleCustomization(index) {
    const checkbox = document.getElementById('opt_' + index);
    if (checkbox.checked) {
        if (!selectedCustomizations.includes(index)) {
            selectedCustomizations.push(index);
        }
    } else {
        selectedCustomizations = selectedCustomizations.filter(i => i !== index);
    }
    updateTotalPrice();
}

function changeQuantity(delta) {
    quantity = Math.max(1, Math.min(20, quantity + delta));
    document.getElementById('quantity').textContent = quantity;
    updateTotalPrice();
}

function updateTotalPrice() {
    if (!selectedFood) return;
    
    let total = selectedFood.price;
    
    if (selectedFood.options) {
        selectedCustomizations.forEach(i => {
            if (selectedFood.options[i]) {
                total += selectedFood.options[i].price;
            }
        });
    }
    
    total *= quantity;
    document.getElementById('totalPrice').textContent = formatPrice(total);
}

function addToCart() {
    if (!currentUser) {
        alert('⚠️ Please login to add items to cart');
        showLogin();
        return;
    }
    
    if (!selectedFood) return;
    
    let itemPrice = selectedFood.price;
    const extras = [];
    
    if (selectedFood.options) {
        selectedCustomizations.forEach(i => {
            if (selectedFood.options[i]) {
                extras.push(selectedFood.options[i].name);
                itemPrice += selectedFood.options[i].price;
            }
        });
    }
    
    const cartItem = {
        id: selectedFood.id,
        name: selectedFood.name,
        icon: selectedFood.icon,
        basePrice: selectedFood.price,
        extras: extras,
        finalPrice: itemPrice,
        quantity: quantity,
        instructions: document.getElementById('specialInstructions').value,
        addedAt: new Date().toISOString()
    };
    
    // Check if similar item exists
    const existingIndex = cart.findIndex(item => 
        item.id === cartItem.id && 
        JSON.stringify(item.extras) === JSON.stringify(cartItem.extras) &&
        item.instructions === cartItem.instructions
    );
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push(cartItem);
    }
    
    saveCart();
    updateCartBadge();
    closeModal('foodModal');
    
    playNotificationSound();
    alert(`✅ Added to cart!\n\n${quantity}x ${selectedFood.name}\n${extras.length > 0 ? 'Extras: ' + extras.join(', ') : ''}`);
}

// ========================================
// FAVORITES FUNCTIONS
// ========================================
function toggleFavorite(foodId, event) {
    event.stopPropagation();
    
    if (!currentUser) {
        alert('⚠️ Please login to add favorites');
        showLogin();
        return;
    }
    
    if (!userFavorites[currentUser.email]) {
        userFavorites[currentUser.email] = [];
    }
    
    const favorites = userFavorites[currentUser.email];
    const index = favorites.indexOf(foodId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        event.target.innerHTML = '🤍';
        event.target.classList.remove('active');
    } else {
        favorites.push(foodId);
        event.target.innerHTML = '❤️';
        event.target.classList.add('active');
    }
    
    localStorage.setItem('userFavorites', JSON.stringify(userFavorites));
    updateFavoritesBadge();
}

function showFavorites() {
    if (!currentUser) {
        alert('⚠️ Please login to view favorites');
        showLogin();
        return;
    }
    
    const modal = document.getElementById('favoritesModal');
    const content = document.getElementById('favoritesContent');
    
    if (!modal || !content) return;
    
    const favIds = userFavorites[currentUser.email] || [];
    
    if (favIds.length === 0) {
        content.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: rgba(255,255,255,0.5);">
                <div style="font-size: 4rem;">💔</div>
                <p>No favorites yet</p>
                <p style="font-size: 0.9rem;">Tap ❤️ on items to add them here</p>
            </div>
        `;
    } else {
        const favItems = [];
        for (let cat of Object.keys(menuData)) {
            menuData[cat].forEach(item => {
                if (favIds.includes(item.id)) {
                    favItems.push(item);
                }
            });
        }
        
        content.innerHTML = `
            <div class="menu-grid" style="grid-template-columns: 1fr;">
                ${favItems.map(item => `
                    <div class="food-card" style="display: grid; grid-template-columns: 80px 1fr auto; align-items: center; padding: 1rem;">
                        <div style="font-size: 3rem;">${item.icon}</div>
                        <div>
                            <div class="food-name">${item.name}</div>
                            <div class="food-price">${formatPrice(item.price)}</div>
                        </div>
                        <button class="add-btn" onclick="openFoodModal(${item.id}); closeModal('favoritesModal');">Order</button>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    modal.classList.add('active');
}

// ========================================
// CART FUNCTIONS
// ========================================
function showCart() {
    if (!currentUser) {
        alert('⚠️ Please login to view cart');
        showLogin();
        return;
    }
    
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!modal || !cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: rgba(255,255,255,0.5);">
                <div style="font-size: 4rem;">🛒</div>
                <p>Your cart is empty</p>
                <p style="font-size: 0.9rem;">Add some delicious items!</p>
            </div>
        `;
        if (cartTotal) cartTotal.textContent = '£0.00';
    } else {
        let total = 0;
        cartItems.innerHTML = cart.map((item, index) => {
            const itemTotal = item.finalPrice * item.quantity;
            total += itemTotal;
            return `
                <div class="cart-item">
                    <div class="cart-item-header">
                        <span>${item.icon} ${item.name} x${item.quantity}</span>
                        <span style="color: #ff6b6b;">${formatPrice(itemTotal)}</span>
                    </div>
                    ${item.extras.length > 0 ? `<div style="font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-bottom: 0.5rem;">+ ${item.extras.join(', ')}</div>` : ''}
                    ${item.instructions ? `<div style="font-size: 0.85rem; color: rgba(255,255,255,0.5); font-style: italic;">Note: ${item.instructions}</div>` : ''}
                    <div style="display: flex; gap: 0.5rem; margin-top: 0.8rem;">
                        <button onclick="updateCartItem(${index}, -1)" style="background: rgba(255,255,255,0.1); border: none; color: white; padding: 0.3rem 0.8rem; border-radius: 5px; cursor: pointer;">-</button>
                        <button onclick="updateCartItem(${index}, 1)" style="background: rgba(255,255,255,0.1); border: none; color: white; padding: 0.3rem 0.8rem; border-radius: 5px; cursor: pointer;">+</button>
                        <button onclick="removeCartItem(${index})" style="background: rgba(239,68,68,0.2); border: none; color: #ef4444; padding: 0.3rem 0.8rem; border-radius: 5px; cursor: pointer; margin-left: auto;">🗑️ Remove</button>
                    </div>
                </div>
            `;
        }).join('');
        
        if (cartTotal) cartTotal.textContent = formatPrice(total);
    }
    
    modal.classList.add('active');
}

function updateCartItem(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
        updateCartBadge();
        showCart();
    }
}

function removeCartItem(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartBadge();
    showCart();
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('❌ Your cart is empty!');
        return;
    }
    
    if (!currentUser.address && !selectedLocation) {
        alert('❌ Please set your delivery address first');
        pickLocation();
        return;
    }
    
    closeModal('cartModal');
    
    // Calculate totals
    let subtotal = cart.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0);
    let deliveryFee = 0;
    
    if (selectedLocation) {
        const distance = calculateDistance(
            UK_CONFIG.restaurant.lat,
            UK_CONFIG.restaurant.lng,
            selectedLocation.lat,
            selectedLocation.lng
        );
        const deliveryInfo = getDeliveryCost(distance);
        if (!deliveryInfo.available) {
            alert(deliveryInfo.message);
            return;
        }
        deliveryFee = deliveryInfo.cost;
    }
    
    const total = subtotal + deliveryFee;
    
    // Populate checkout modal
    const checkoutAddress = document.getElementById('checkoutAddress');
    const checkoutItems = document.getElementById('checkoutItems');
    const paymentTotal = document.getElementById('paymentTotal');
    
    if (checkoutAddress) {
        checkoutAddress.textContent = selectedLocation?.address || currentUser.address || 'No address set';
    }
    
    if (checkoutItems) {
        checkoutItems.innerHTML = `
            ${cart.map(item => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>${item.icon} ${item.name} x${item.quantity}</span>
                    <span>${formatPrice(item.finalPrice * item.quantity)}</span>
                </div>
            `).join('')}
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.5rem; margin-top: 0.5rem;">
                <div style="display: flex; justify-content: space-between;">
                    <span>Subtotal</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Delivery</span>
                    <span>${deliveryFee > 0 ? formatPrice(deliveryFee) : 'FREE'}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 1.2rem; margin-top: 0.5rem; color: #ff6b6b;">
                    <span>Total</span>
                    <span>${formatPrice(total)}</span>
                </div>
            </div>
        `;
    }
    
    if (paymentTotal) {
        paymentTotal.textContent = formatPrice(total);
    }
    
    document.getElementById('checkoutModal').classList.add('active');
}

function handlePayment(event) {
    event.preventDefault();
    
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    if (!paymentMethod) {
        alert('❌ Please select a payment method');
        return;
    }
    
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('paymentCardNumber').value;
        const cardName = document.getElementById('paymentCardName').value;
        const expiry = document.getElementById('paymentExpiry').value;
        const cvv = document.getElementById('paymentCVV').value;
        
        if (!isValidCardNumber(cardNumber)) {
            alert('❌ Invalid card number');
            return;
        }
        if (!cardName || cardName.length < 2) {
            alert('❌ Please enter name on card');
            return;
        }
        if (!isValidExpiry(expiry)) {
            alert('❌ Invalid expiry date');
            return;
        }
        if (!isValidCVV(cvv)) {
            alert('❌ Invalid CVV');
            return;
        }
    }
    
    // Create order
    const orderId = 'ORD-' + Date.now();
    const subtotal = cart.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0);
    let deliveryFee = 0;
    
    if (selectedLocation) {
        const distance = calculateDistance(
            UK_CONFIG.restaurant.lat,
            UK_CONFIG.restaurant.lng,
            selectedLocation.lat,
            selectedLocation.lng
        );
        deliveryFee = getDeliveryCost(distance).cost;
    }
    
    const order = {
        id: orderId,
        userId: currentUser.email,
        userName: currentUser.name,
        userPhone: currentUser.phone,
        items: [...cart],
        subtotal: subtotal,
        deliveryFee: deliveryFee,
        total: subtotal + deliveryFee,
        address: selectedLocation?.address || currentUser.address,
        location: selectedLocation,
        paymentMethod: paymentMethod,
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    // Save order
    orderHistory.push(order);
    pendingOrders.push(order);
    
    // Add notification
    addNotification(currentUser.email, {
        type: 'order_placed',
        title: '📦 Order Placed!',
        message: `Your order #${orderId} has been placed successfully.`,
        orderId: orderId
    });
    
    saveData();
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartBadge();
    
    // Close checkout and show confirmation
    closeModal('checkoutModal');
    playNotificationSound();
    
    alert(`✅ Order Placed Successfully!\n\nOrder ID: ${orderId}\nTotal: ${formatPrice(order.total)}\n\nYou will receive updates on your order status.`);
}

// ========================================
// NOTIFICATION FUNCTIONS
// ========================================
function addNotification(userId, notification) {
    if (!userNotifications[userId]) {
        userNotifications[userId] = [];
    }
    
    userNotifications[userId].unshift({
        ...notification,
        id: 'NOTIF-' + Date.now(),
        read: false,
        createdAt: new Date().toISOString()
    });
    
    localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
    updateNotificationBadge();
}

function showNotifications() {
    if (!currentUser) {
        alert('⚠️ Please login to view notifications');
        showLogin();
        return;
    }
    
    const modal = document.getElementById('notificationsModal');
    const content = document.getElementById('notificationsContent');
    
    if (!modal || !content) return;
    
    const notifications = userNotifications[currentUser.email] || [];
    
    // Mark all as read
    notifications.forEach(n => n.read = true);
    localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
    updateNotificationBadge();
    
    if (notifications.length === 0) {
        content.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: rgba(255,255,255,0.5);">
                <div style="font-size: 4rem;">🔔</div>
                <p>No notifications yet</p>
            </div>
        `;
    } else {
        content.innerHTML = notifications.map(n => `
            <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 10px; margin-bottom: 0.8rem; border-left: 3px solid #ff6b6b;">
                <div style="font-weight: 600; margin-bottom: 0.3rem;">${n.title}</div>
                <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">${n.message}</div>
                <div style="color: rgba(255,255,255,0.4); font-size: 0.8rem; margin-top: 0.5rem;">${new Date(n.createdAt).toLocaleString()}</div>
            </div>
        `).join('');
    }
    
    modal.classList.add('active');
}

// ========================================
// ACCOUNT FUNCTIONS
// ========================================
function showAccount() {
    if (!currentUser) {
        showLogin();
        return;
    }
    
    const modal = document.getElementById('accountModal');
    const content = document.getElementById('accountContent');
    
    if (!modal || !content) return;
    
    const userOrders = orderHistory.filter(o => o.userId === currentUser.email);
    const totalSpent = userOrders.reduce((sum, o) => sum + o.total, 0);
    
    content.innerHTML = `
        <div style="background: linear-gradient(135deg, #ff6b6b, #ee5a6f); padding: 2rem; border-radius: 15px; text-align: center; margin-bottom: 1.5rem;">
            <div style="font-size: 4rem; margin-bottom: 0.5rem;">👤</div>
            <h3 style="margin: 0; color: white;">${currentUser.name}</h3>
            <p style="margin: 0.5rem 0 0; color: rgba(255,255,255,0.8);">${currentUser.email}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(16,185,129,0.1); padding: 1rem; border-radius: 10px; text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: #10b981;">${userOrders.length}</div>
                <div style="font-size: 0.85rem; color: rgba(255,255,255,0.6);">Orders</div>
            </div>
            <div style="background: rgba(255,107,107,0.1); padding: 1rem; border-radius: 10px; text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: #ff6b6b;">${formatPrice(totalSpent)}</div>
                <div style="font-size: 0.85rem; color: rgba(255,255,255,0.6);">Total Spent</div>
            </div>
        </div>
        
        <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 10px; margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="color: rgba(255,255,255,0.6);">📞 Phone</span>
                <span>${currentUser.phone || 'Not set'}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <span style="color: rgba(255,255,255,0.6);">📍 Address</span>
                <span>${currentUser.address || 'Not set'}</span>
            </div>
        </div>
        
        <h4 style="margin-bottom: 1rem;">Recent Orders</h4>
        ${userOrders.length === 0 ? '<p style="color: rgba(255,255,255,0.5); text-align: center;">No orders yet</p>' : 
            userOrders.slice(0, 5).map(o => `
                <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 10px; margin-bottom: 0.8rem;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span style="font-weight: 600;">#${o.id}</span>
                        <span style="color: ${o.status === 'completed' ? '#10b981' : o.status === 'pending' ? '#f59e0b' : '#3b82f6'};">${o.status.toUpperCase()}</span>
                    </div>
                    <div style="font-size: 0.85rem; color: rgba(255,255,255,0.6);">${o.items.length} items • ${formatPrice(o.total)}</div>
                    <div style="font-size: 0.8rem; color: rgba(255,255,255,0.4);">${new Date(o.createdAt).toLocaleString()}</div>
                </div>
            `).join('')
        }
        
        <button onclick="logout()" class="submit-btn" style="margin-top: 1.5rem; background: rgba(239,68,68,0.2); color: #ef4444; border: 2px solid #ef4444;">
            🚪 Logout
        </button>
    `;
    
    modal.classList.add('active');
}

function logout() {
    if (!confirm('Are you sure you want to logout?')) return;
    
    currentUser = null;
    cart = [];
    localStorage.removeItem('currentUser');
    updateHeaderForLoggedInUser();
    updateCartBadge();
    updateFavoritesBadge();
    updateNotificationBadge();
    closeModal('accountModal');
    
    alert('✅ Logged out successfully');
}

// ========================================
// AUTH FUNCTIONS
// ========================================
function showLogin() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.add('active');
        if (isSignUpMode) toggleAuthMode();
    }
}

function toggleAuthMode() {
    isSignUpMode = !isSignUpMode;
    
    const title = document.getElementById('authTitle');
    const nameGroup = document.getElementById('nameGroup');
    const phoneGroup = document.getElementById('phoneGroup');
    const ageGroup = document.getElementById('ageGroup');
    const addressGroup = document.getElementById('addressGroup');
    const submitBtn = document.getElementById('authSubmitBtn');
    const toggleText = document.getElementById('authToggleText');
    
    if (isSignUpMode) {
        if (title) title.textContent = '📝 Create Account';
        if (nameGroup) nameGroup.style.display = 'block';
        if (phoneGroup) phoneGroup.style.display = 'block';
        if (ageGroup) ageGroup.style.display = 'block';
        if (addressGroup) addressGroup.style.display = 'block';
        if (submitBtn) submitBtn.textContent = 'Sign Up';
        if (toggleText) toggleText.textContent = 'Already have an account?';
    } else {
        if (title) title.textContent = '🔐 Login';
        if (nameGroup) nameGroup.style.display = 'none';
        if (phoneGroup) phoneGroup.style.display = 'none';
        if (ageGroup) ageGroup.style.display = 'none';
        if (addressGroup) addressGroup.style.display = 'none';
        if (submitBtn) submitBtn.textContent = 'Login';
        if (toggleText) toggleText.textContent = "Don't have an account?";
    }
}

function handleEmailAuth(event) {
    event.preventDefault();
    
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    const name = document.getElementById('authName')?.value.trim();
    const phone = document.getElementById('authPhone')?.value.trim();
    const age = document.getElementById('authAge')?.value;
    
    const emailValidation = isValidEmail(email);
    if (!emailValidation.valid) {
        alert(emailValidation.message);
        return;
    }
    
    if (password.length < 6) {
        alert('❌ Password must be at least 6 characters');
        return;
    }
    
    if (isSignUpMode) {
        const existingUser = userDatabase.find(u => u.email === email);
        if (existingUser) {
            alert('❌ Email already registered!');
            return;
        }
        
        if (!name || name.length < 2) {
            alert('❌ Name must be at least 2 characters');
            return;
        }
        
        if (phone && !isValidPhone(phone)) {
            alert('❌ Invalid phone number');
            return;
        }
        
        // Generate verification code
        const verificationCode = generateVerificationCode();
        pendingVerification = {
            email: email,
            password: password,
            name: name,
            phone: phone,
            age: age ? parseInt(age) : null,
            code: verificationCode,
            type: 'signup'
        };
        
        sendVerificationEmail(email, verificationCode);
        
        document.getElementById('authFormSection').style.display = 'none';
        document.getElementById('emailVerificationSection').style.display = 'block';
        document.getElementById('verifyEmailDisplay').textContent = email;
        
    } else {
        // Login
        const existingUser = userDatabase.find(u => u.email === email);
        if (!existingUser) {
            alert('❌ Account not found!');
            return;
        }
        
        if (existingUser.password !== password) {
            alert('❌ Incorrect password!');
            return;
        }
        
        // Send verification code for login
        const verificationCode = generateVerificationCode();
        pendingVerification = {
            user: existingUser,
            code: verificationCode,
            type: 'login'
        };
        
        sendVerificationEmail(email, verificationCode);
        
        document.getElementById('authFormSection').style.display = 'none';
        document.getElementById('emailVerificationSection').style.display = 'block';
        document.getElementById('verifyEmailDisplay').textContent = email;
    }
}

function verifyCode() {
    const enteredCode = document.getElementById('verificationCode').value;
    
    if (!pendingVerification) {
        alert('❌ No verification pending');
        return;
    }
    
    if (enteredCode !== pendingVerification.code) {
        alert('❌ Invalid verification code');
        return;
    }
    
    if (pendingVerification.type === 'signup') {
        // Create new user
        const newUser = {
            name: pendingVerification.name,
            email: pendingVerification.email,
            password: pendingVerification.password,
            phone: pendingVerification.phone,
            age: pendingVerification.age,
            address: selectedLocation?.address || null,
            location: selectedLocation,
            verified: true,
            createdAt: new Date().toISOString()
        };
        
        userDatabase.push(newUser);
        currentUser = newUser;
        
    } else if (pendingVerification.type === 'login') {
        currentUser = pendingVerification.user;
    }
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('restaurantUsers', JSON.stringify(userDatabase));
    
    pendingVerification = null;
    
    // Reset form
    document.getElementById('authFormSection').style.display = 'block';
    document.getElementById('emailVerificationSection').style.display = 'none';
    document.getElementById('verificationCode').value = '';
    document.getElementById('authEmail').value = '';
    document.getElementById('authPassword').value = '';
    if (document.getElementById('authName')) document.getElementById('authName').value = '';
    if (document.getElementById('authPhone')) document.getElementById('authPhone').value = '';
    
    updateHeaderForLoggedInUser();
    updateFavoritesBadge();
    updateNotificationBadge();
    
    closeModal('loginModal');
    
    alert(`✅ Welcome${currentUser.name ? ', ' + currentUser.name : ''}!\n\nYou are now logged in.`);
}

function resendCode() {
    if (!pendingVerification) return;
    
    const newCode = generateVerificationCode();
    pendingVerification.code = newCode;
    
    const email = pendingVerification.email || pendingVerification.user?.email;
    sendVerificationEmail(email, newCode);
}

function loginWithGoogle() {
    alert(`🔵 Google Sign-In\n\nGoogle authentication would be configured here.\n\nFor demo, use email signup with Gmail.`);
}

function loginWithApple() {
    alert(`🍎 Apple Sign-In\n\nApple authentication would be configured here.\n\nFor demo, use email signup with iCloud.`);
}

// ========================================
// RESTAURANT DASHBOARD (FOR EMPLOYERS)
// ========================================
function showRestaurantLogin() {
    const modal = document.getElementById('restaurantLoginModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('active');
    }
}

function handleRestaurantLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('restaurantEmail').value;
    const password = document.getElementById('restaurantPassword').value;
    
    if (email === RESTAURANT_CREDENTIALS.email && password === RESTAURANT_CREDENTIALS.password) {
        isRestaurantLoggedIn = true;
        closeModal('restaurantLoginModal');
        closeModal('loginModal');
        
        setTimeout(() => {
            showRestaurantDashboard();
        }, 300);
    } else if (email === OWNER_CREDENTIALS.email && password === OWNER_CREDENTIALS.password) {
        // Also allow owner credentials for restaurant dashboard
        isRestaurantLoggedIn = true;
        closeModal('restaurantLoginModal');
        closeModal('loginModal');
        
        setTimeout(() => {
            showRestaurantDashboard();
        }, 300);
    } else {
        alert('❌ Invalid credentials!\n\nDemo: staff@antalyashawarma.com / staff2024');
    }
}

function showRestaurantDashboard() {
    const modal = document.getElementById('restaurantDashboard');
    if (!modal) return;
    
    // Calculate stats
    const todayOrders = pendingOrders.filter(o => {
        const orderDate = new Date(o.createdAt).toDateString();
        const today = new Date().toDateString();
        return orderDate === today;
    });
    
    const todayRevenue = todayOrders.reduce((sum, o) => sum + o.total, 0);
    const totalRevenue = orderHistory.reduce((sum, o) => sum + o.total, 0);
    const pendingCount = pendingOrders.filter(o => o.status === 'pending').length;
    const completedCount = orderHistory.filter(o => o.status === 'completed').length;
    
    // Update stats
    document.getElementById('todayRevenueStat').textContent = formatPrice(todayRevenue);
    document.getElementById('totalRevenueStat').textContent = formatPrice(totalRevenue);
    document.getElementById('pendingOrdersStat').textContent = pendingCount;
    document.getElementById('completedOrdersStat').textContent = completedCount;
    document.getElementById('todayOrdersStat').textContent = todayOrders.length;
    
    // Render pending orders
    const ordersContainer = document.getElementById('restaurantPendingOrders');
    if (ordersContainer) {
        if (pendingOrders.length === 0) {
            ordersContainer.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: rgba(255,255,255,0.5);">
                    <div style="font-size: 4rem;">📦</div>
                    <p>No pending orders</p>
                </div>
            `;
        } else {
            ordersContainer.innerHTML = pendingOrders.map(order => `
                <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 1rem; border-left: 4px solid ${order.status === 'pending' ? '#f59e0b' : order.status === 'accepted' ? '#10b981' : '#3b82f6'};">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <span style="font-weight: 700; font-size: 1.1rem;">#${order.id}</span>
                        <span style="background: ${order.status === 'pending' ? 'rgba(245,158,11,0.2)' : 'rgba(16,185,129,0.2)'}; color: ${order.status === 'pending' ? '#f59e0b' : '#10b981'}; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">${order.status.toUpperCase()}</span>
                    </div>
                    
                    <div style="margin-bottom: 1rem; font-size: 0.95rem;">
                        <div style="margin-bottom: 0.5rem;">👤 <strong>${order.userName}</strong></div>
                        <div style="margin-bottom: 0.5rem;">📞 ${order.userPhone || 'N/A'}</div>
                        <div style="margin-bottom: 0.5rem;">📍 ${order.address || 'N/A'}</div>
                        <div style="margin-bottom: 0.5rem;">🕐 ${new Date(order.createdAt).toLocaleString()}</div>
                    </div>
                    
                    <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">Items:</div>
                        ${order.items.map(item => `
                            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.3rem;">
                                <span>${item.icon} ${item.name} x${item.quantity}</span>
                                <span>${formatPrice(item.finalPrice * item.quantity)}</span>
                            </div>
                        `).join('')}
                        <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.5rem; margin-top: 0.5rem; font-weight: 700; display: flex; justify-content: space-between;">
                            <span>Total:</span>
                            <span style="color: #ff6b6b;">${formatPrice(order.total)}</span>
                        </div>
                    </div>
                    
                    ${order.status === 'pending' ? `
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem;">
                            <button onclick="acceptOrder('${order.id}')" style="background: linear-gradient(45deg, #10b981, #059669); color: white; border: none; padding: 0.8rem; border-radius: 8px; cursor: pointer; font-weight: 600;">✅ Accept</button>
                            <button onclick="rejectOrder('${order.id}')" style="background: linear-gradient(45deg, #ef4444, #dc2626); color: white; border: none; padding: 0.8rem; border-radius: 8px; cursor: pointer; font-weight: 600;">❌ Reject</button>
                            <button onclick="assignDriver('${order.id}')" style="background: linear-gradient(45deg, #3b82f6, #2563eb); color: white; border: none; padding: 0.8rem; border-radius: 8px; cursor: pointer; font-weight: 600;">🚗 Driver</button>
                        </div>
                    ` : order.status === 'accepted' ? `
                        <button onclick="assignDriver('${order.id}')" style="background: linear-gradient(45deg, #3b82f6, #2563eb); color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 600; width: 100%;">🚗 Assign Driver</button>
                    ` : ''}
                </div>
            `).join('');
        }
    }
    
    modal.style.display = 'block';
}

function acceptOrder(orderId) {
    const order = pendingOrders.find(o => o.id === orderId);
    if (!order) return;
    
    order.status = 'accepted';
    saveData();
    
    // Send notification to customer
    addNotification(order.userId, {
        type: 'order_accepted',
        title: '✅ Order Accepted!',
        message: `Your order #${orderId} has been accepted and is being prepared.`,
        orderId: orderId
    });
    
    playNotificationSound();
    showRestaurantDashboard();
    alert(`✅ Order #${orderId} accepted!`);
}

function rejectOrder(orderId) {
    const reason = prompt('Reason for rejection (optional):');
    
    const orderIndex = pendingOrders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;
    
    const order = pendingOrders[orderIndex];
    order.status = 'rejected';
    order.rejectionReason = reason;
    
    // Move to history
    pendingOrders.splice(orderIndex, 1);
    saveData();
    
    // Send notification to customer
    addNotification(order.userId, {
        type: 'order_rejected',
        title: '❌ Order Rejected',
        message: `Your order #${orderId} has been rejected.${reason ? ' Reason: ' + reason : ''}`,
        orderId: orderId
    });
    
    showRestaurantDashboard();
    alert(`❌ Order #${orderId} rejected`);
}

function assignDriver(orderId) {
    const order = pendingOrders.find(o => o.id === orderId);
    if (!order) return;
    
    const drivers = window.driverSystem.getAll().filter(d => d.active);
    
    if (drivers.length === 0) {
        alert('❌ No active drivers available!');
        return;
    }
    
    let driverList = 'Select a driver:\n\n';
    drivers.forEach((d, i) => {
        driverList += `${i + 1}. ${d.name} (${d.deliveries} deliveries, ⭐${d.rating})\n`;
    });
    
    const selection = prompt(driverList + '\nEnter driver number:');
    
    if (!selection) return;
    
    const driverIndex = parseInt(selection) - 1;
    if (driverIndex < 0 || driverIndex >= drivers.length) {
        alert('❌ Invalid selection');
        return;
    }
    
    const selectedDriver = drivers[driverIndex];
    order.assignedDriver = selectedDriver.id;
    order.driverName = selectedDriver.name;
    order.status = 'out_for_delivery';
    saveData();
    
    // Send notification to customer
    addNotification(order.userId, {
        type: 'driver_assigned',
        title: '🚗 Driver Assigned!',
        message: `${selectedDriver.name} is on the way with your order #${orderId}.`,
        orderId: orderId
    });
    
    showRestaurantDashboard();
    alert(`✅ Driver ${selectedDriver.name} assigned to order #${orderId}`);
}

function completeOrder(orderId) {
    const orderIndex = pendingOrders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;
    
    const order = pendingOrders[orderIndex];
    order.status = 'completed';
    order.completedAt = new Date().toISOString();
    
    // Move to history and remove from pending
    const historyOrder = orderHistory.find(o => o.id === orderId);
    if (historyOrder) {
        historyOrder.status = 'completed';
        historyOrder.completedAt = order.completedAt;
    }
    
    pendingOrders.splice(orderIndex, 1);
    saveData();
    
    // Send notification to customer
    addNotification(order.userId, {
        type: 'order_completed',
        title: '✅ Order Delivered!',
        message: `Your order #${orderId} has been delivered. Enjoy your meal!`,
        orderId: orderId
    });
    
    showRestaurantDashboard();
    playNotificationSound();
    alert(`✅ Order #${orderId} completed!`);
}

function closeRestaurantDashboard() {
    isRestaurantLoggedIn = false;
    document.getElementById('restaurantDashboard').style.display = 'none';
}

// ========================================
// OWNER ACCESS (FULL SYSTEM)
// ========================================
function showOwnerLogin() {
    const modal = document.getElementById('ownerModal');
    if (modal) {
        modal.classList.add('active');
        modal.style.display = 'flex';
    }
}

function handleOwnerLogin() {
    const email = document.getElementById('devEmail').value;
    const password = document.getElementById('devPassword').value;
    const pin = document.getElementById('devPin').value;
    
    if (email === OWNER_CREDENTIALS.email && password === OWNER_CREDENTIALS.password && pin === OWNER_CREDENTIALS.pin) {
        isOwnerLoggedIn = true;
        document.getElementById('ownerModal').style.display = 'none';
        document.getElementById('ownerDashboard').style.display = 'block';
        
        // Update stats
        updateOwnerStats();
    } else {
        alert('❌ Invalid credentials!\n\nDemo: admin@antalyashawarma.com / admin2024 / 1234');
    }
}

function updateOwnerStats() {
    const totalRevenue = orderHistory.reduce((sum, o) => sum + o.total, 0);
    const totalOrders = orderHistory.length;
    const pendingCount = pendingOrders.filter(o => o.status === 'pending').length;
    const totalUsers = userDatabase.length;
    const totalDrivers = window.driverSystem.getAll().length;
    
    document.getElementById('revenueStat').textContent = formatPrice(totalRevenue);
    document.getElementById('ordersStat').textContent = totalOrders;
    document.getElementById('pendingStat').textContent = pendingCount;
    document.getElementById('usersStat').textContent = totalUsers;
    document.getElementById('driverCountStat').textContent = totalDrivers;
    document.getElementById('driversRegisteredText').textContent = `${totalDrivers} drivers registered`;
}

// ========================================
// DRIVER FUNCTIONS
// ========================================
function showDriverLogin() {
    const modal = document.getElementById('driverLoginModal');
    if (modal) modal.classList.add('active');
}

function handleDriverLogin(event) {
    event.preventDefault();
    const emailOrCode = document.getElementById('driverEmailOrCode').value.trim();
    const password = document.getElementById('driverPassword').value;
    
    if (!emailOrCode || !password) {
        alert('❌ Please enter email/code and password!');
        return;
    }
    
    let foundDriver = null;
    let foundId = null;
    
    Object.keys(window.driverSystem.drivers).forEach(id => {
        const driver = window.driverSystem.drivers[id];
        if (driver.email === emailOrCode || driver.secretCode === emailOrCode) {
            foundDriver = driver;
            foundId = id;
        }
    });
    
    if (!foundDriver) {
        alert('❌ Driver not found!');
        return;
    }
    
    if (foundDriver.active === false) {
        alert('❌ Your account is inactive!');
        return;
    }
    
    if (foundDriver.password !== password) {
        alert('❌ Incorrect password!');
        return;
    }
    
    // Login successful
    sessionStorage.setItem('loggedInDriver', foundId);
    sessionStorage.setItem('driverName', foundDriver.name);
    
    closeModal('driverLoginModal');
    closeModal('loginModal');
    
    document.getElementById('driverEmailOrCode').value = '';
    document.getElementById('driverPassword').value = '';
    
    updateDriverLoginUI(foundDriver.name);
    
    alert(`✅ Welcome, ${foundDriver.name}!`);
}

function updateDriverLoginUI(driverName) {
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.textContent = driverName;
        loginBtn.onclick = showDriverProfile;
    }
}

function showDriverProfile() {
    const driverId = sessionStorage.getItem('loggedInDriver');
    if (!driverId) {
        showLogin();
        return;
    }
    
    const driver = window.driverSystem.get(driverId);
    if (!driver) return;
    
    alert(`🚗 Driver Profile\n\n` +
        `Name: ${driver.name}\n` +
        `Email: ${driver.email}\n` +
        `Phone: ${driver.phone}\n` +
        `Deliveries: ${driver.deliveries}\n` +
        `Rating: ⭐${driver.rating}\n\n` +
        `Secret Code: ${driver.secretCode}`);
}

function logoutDriver() {
    if (!confirm('Are you sure you want to logout?')) return;
    
    sessionStorage.removeItem('loggedInDriver');
    sessionStorage.removeItem('driverName');
    
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.textContent = 'Login';
        loginBtn.onclick = showLogin;
    }
    
    alert('✅ Logged out successfully');
}

function generateDriverSecretCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'DRV-';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// ========================================
// LOCATION FUNCTIONS
// ========================================
function pickLocation() {
    const modal = document.getElementById('mapModal');
    if (modal) modal.classList.add('active');
    initMap();
}

function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer || !window.google) return;
    
    const center = { lat: UK_CONFIG.restaurant.lat, lng: UK_CONFIG.restaurant.lng };
    
    googleMap = new google.maps.Map(mapContainer, {
        center: center,
        zoom: 14,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] }
        ]
    });
    
    // Restaurant marker
    new google.maps.Marker({
        position: center,
        map: googleMap,
        title: 'Antalya Shawarma',
        icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="18" fill="#ff6b6b" stroke="#fff" stroke-width="3"/>
                    <text x="20" y="26" font-size="18" text-anchor="middle" fill="#fff">🌯</text>
                </svg>
            `),
            scaledSize: new google.maps.Size(40, 40)
        }
    });
    
    // Click to select location
    googleMap.addListener('click', (e) => {
        addMarker(e.latLng);
    });
}

function addMarker(location) {
    if (mapMarker) mapMarker.setMap(null);
    
    mapMarker = new google.maps.Marker({
        position: location,
        map: googleMap,
        icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="18" fill="#10b981" stroke="#fff" stroke-width="3"/>
                    <text x="20" y="26" font-size="18" text-anchor="middle" fill="#fff">📍</text>
                </svg>
            `),
            scaledSize: new google.maps.Size(40, 40)
        }
    });
    
    selectedLocation = {
        lat: location.lat(),
        lng: location.lng()
    };
    
    // Calculate delivery info
    const distance = calculateDistance(
        UK_CONFIG.restaurant.lat,
        UK_CONFIG.restaurant.lng,
        selectedLocation.lat,
        selectedLocation.lng
    );
    
    const deliveryInfo = getDeliveryCost(distance);
    document.getElementById('selectedLocationText').innerHTML = `
        📍 ${distance.toFixed(1)} miles from restaurant<br>
        <span style="color: ${deliveryInfo.available ? '#10b981' : '#ef4444'};">${deliveryInfo.message}</span>
    `;
    
    // Try to get address
    if (window.google && google.maps.Geocoder) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: location }, (results, status) => {
            if (status === 'OK' && results[0]) {
                selectedLocation.address = results[0].formatted_address;
                document.getElementById('selectedLocationText').innerHTML = `
                    📍 ${selectedLocation.address}<br>
                    <span style="color: ${deliveryInfo.available ? '#10b981' : '#ef4444'};">${deliveryInfo.message}</span>
                `;
            }
        });
    }
}

function getCurrentLocation() {
    if (!navigator.geolocation) {
        alert('❌ Geolocation not supported');
        return;
    }
    
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '⏳ Finding...';
    btn.disabled = true;
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            if (googleMap) {
                googleMap.setCenter(location);
                googleMap.setZoom(16);
                addMarker(new google.maps.LatLng(location.lat, location.lng));
            }
            
            btn.innerHTML = originalText;
            btn.disabled = false;
            alert('✅ Location found!');
        },
        (error) => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            alert('❌ Could not get location');
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

function confirmLocation() {
    if (!selectedLocation) {
        alert('❌ Please select a location on the map');
        return;
    }
    
    const distance = calculateDistance(
        UK_CONFIG.restaurant.lat,
        UK_CONFIG.restaurant.lng,
        selectedLocation.lat,
        selectedLocation.lng
    );
    
    const deliveryInfo = getDeliveryCost(distance);
    
    if (!deliveryInfo.available) {
        alert(deliveryInfo.message);
        return;
    }
    
    if (currentUser) {
        currentUser.location = selectedLocation;
        currentUser.address = selectedLocation.address;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    
    closeModal('mapModal');
    alert(`✅ Location confirmed!\n\n${selectedLocation.address || 'Location set'}\n${deliveryInfo.message}`);
}

// ========================================
// MODAL & UTILITY FUNCTIONS
// ========================================
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        if (modalId === 'ownerModal' || modalId === 'restaurantLoginModal' || modalId === 'restaurantDashboard') {
            modal.style.display = 'none';
        }
    }
    
    if (modalId === 'loginModal') {
        document.getElementById('authFormSection').style.display = 'block';
        document.getElementById('emailVerificationSection').style.display = 'none';
    }
}

function scrollToMenu() {
    document.querySelector('.main-content')?.scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileMenu() {
    const nav = document.getElementById('navButtons');
    const btn = document.getElementById('mobileMenuBtn');
    if (!nav || !btn) return;
    nav.classList.toggle('active');
    btn.classList.toggle('active');
    btn.textContent = nav.classList.contains('active') ? '✕' : '☰';
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌯 Antalya Shawarma v3.0.0 Loading...');
    
    // Load data
    loadData();
    
    // Render categories
    renderCategories();
    
    // Display initial menu
    displayMenu('shawarma');
    
    // Update badges
    updateCartBadge();
    updateFavoritesBadge();
    updateNotificationBadge();
    
    // Restore driver session
    const driverId = sessionStorage.getItem('loggedInDriver');
    const driverName = sessionStorage.getItem('driverName');
    if (driverId && driverName) {
        updateDriverLoginUI(driverName);
    }
    
    // Auto-format card inputs
    const cardInput = document.getElementById('paymentCardNumber');
    if (cardInput) {
        cardInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    const expiryInput = document.getElementById('paymentExpiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }
    
    console.log('✅ Antalya Shawarma Ready!');
    console.log(`📦 ${Object.keys(menuData).length} categories loaded`);
    console.log(`🍽️ ${Object.values(menuData).flat().length} menu items available`);
});

// Make functions globally available
window.showLogin = showLogin;
window.showAccount = showAccount;
window.showCart = showCart;
window.showFavorites = showFavorites;
window.showNotifications = showNotifications;
window.showRestaurantLogin = showRestaurantLogin;
window.showOwnerLogin = showOwnerLogin;
window.showDriverLogin = showDriverLogin;
window.closeModal = closeModal;
window.filterCategory = filterCategory;
window.openFoodModal = openFoodModal;
window.toggleFavorite = toggleFavorite;
window.toggleCustomization = toggleCustomization;
window.changeQuantity = changeQuantity;
window.addToCart = addToCart;
window.proceedToCheckout = proceedToCheckout;
window.handlePayment = handlePayment;
window.updateCartItem = updateCartItem;
window.removeCartItem = removeCartItem;
window.scrollToMenu = scrollToMenu;
window.toggleMobileMenu = toggleMobileMenu;
window.handleEmailAuth = handleEmailAuth;
window.verifyCode = verifyCode;
window.resendCode = resendCode;
window.toggleAuthMode = toggleAuthMode;
window.loginWithGoogle = loginWithGoogle;
window.loginWithApple = loginWithApple;
window.handleRestaurantLogin = handleRestaurantLogin;
window.handleDriverLogin = handleDriverLogin;
window.handleOwnerLogin = handleOwnerLogin;
window.pickLocation = pickLocation;
window.getCurrentLocation = getCurrentLocation;
window.confirmLocation = confirmLocation;
window.acceptOrder = acceptOrder;
window.rejectOrder = rejectOrder;
window.assignDriver = assignDriver;
window.completeOrder = completeOrder;
window.closeRestaurantDashboard = closeRestaurantDashboard;
window.logout = logout;
window.logoutDriver = logoutDriver;
