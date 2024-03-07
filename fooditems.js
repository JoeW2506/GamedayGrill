const foodItem = [
    {
        id: 1,
        name: 'BLT Sandwich',
        category: 'classic',
        rating: 4.7,
        price: 16.99,
        img: 'bltSandwich.png',
        quantity: 1
    },
    {
        id: 2,
        name: 'Cheese Burger',
        category: 'classic',
        rating: 4.6,
        price: 18.99,
        img: 'burg.png',
        quantity: 1
    },
    {
        id: 3,
        name: 'Pasta',
        category: 'classic',
        rating: 4.2,
        price: 13.99,
        img: 'pasta.jpg',
        quantity: 1
    },
    {
        id: 4,
        name: 'BBQ Ribs',
        category: 'classic',
        rating: 4.9,
        price: 17.99,
        img: 'ribs.jpg',
        quantity: 1
    },
    {
        id: 5,
        name: 'Fried Shrimp',
        category: 'appetizer',
        rating: 4.1,
        price: 12.99,
        img: 'fShrimp.png',
        quantity: 1
    },
    {
        id: 6,
        name: 'Bavarian Pretzels',
        category: 'appetizer',
        rating: 4.3,
        price: 8.99,
        img: 'pretzel.jpg',
        quantity: 1
    },
    {
        id: 7,
        name: 'Wings',
        category: 'classic',
        rating: 3.9,
        price: 11.99,
        img: 'wings.png',
        quantity: 1
    },
    {
        id: 8,
        name: 'Steak',
        category: 'classic',
        rating: 4.4,
        price: 24.99,
        img: 'steak.png',
        quantity: 1
    },
    {
        id: 9,
        name: 'Salad',
        category: 'side',
        rating: 4.0,
        price: 6.99,
        img: 'salad.jpg',
        quantity: 1
    },
    {
        id: 10,
        name: 'Waffle Fries',
        category: 'side',
        rating: 3.8,
        price: 9.99,
        img: 'fries.jpg',
        quantity: 1
    },
    {
        id: 11,
        name: 'Onion Rings',
        category: 'side',
        rating: 4.2,
        price: 7.99,
        img: 'oRings.jpg',
        quantity: 1
    },
    {
        id: 12,
        name: 'Potato Wedges',
        category: 'side',
        rating: 4.6,
        price: 7.99,
        img: 'potatoWedges.jpg',
        quantity: 1
    },
    {
        id: 13,
        name: 'Shortcake',
        category: 'dessert',
        rating: 4.8,
        price: 8.99,
        img: 'strawberry.jpg',
        quantity: 1
    },
    {
        id: 14,
        name: 'Corn Dogs',
        category: 'appetizer',
        rating: 4.1,
        price: 6.99,
        img: 'cornDogs.jpg',
        quantity: 1
    },
    {
        id: 15,
        name: 'Brownie',
        category: 'dessert',
        rating: 4.3,
        price: 7.99,
        img: 'HotFudge.jpg',
        quantity: 1
    },
    {
        id: 16,
        name: 'Deviled Eggs',
        category: 'appetizer',
        rating: 4.6,
        price: 6.99,
        img: 'DeviledEggs.jpg',
        quantity: 1
    },
    {
        id: 17,
        name: 'Cinnamon Rolls',
        category: 'dessert',
        rating: 4.4,
        price: 4.99,
        img: 'cinnaRolls.jpg',
        quantity: 1
    },
    {
        id: 18,
        name: 'Reese Bars',
        category: 'dessert',
        rating: 4.8,
        price: 6.99,
        img: 'PeanutBar.jpg',
        quantity: 1
    },
    {
        id: 19,
        name: 'Cheese Cake',
        category: 'dessert',
        rating: 4.7,
        price: 13.99,
        img: 'vanillaCheese.jpg',
        quantity: 1
    },
    {
        id: 20,
        name: 'Mozz Sticks',
        category: 'appetizer',
        rating: 4.1,
        price: 8.99,
        img: 'mozzarella.jpg',
        quantity: 1
    },
    {
        id: 21,
        name: 'French Fries',
        category: 'side',
        rating: 4.7,
        price: 13.99,
        img: 'frenchFries.jpg',
        quantity: 1
    },
    {
        id: 22,
        name: 'Pork Grinds',
        category: 'appetizer',
        rating: 4.4,
        price: 11.99,
        img: 'porkGrinds.jpg',
        quantity: 1
    },
    {
        id: 23,
        name: "Chef's Vegetable",
        category: 'side',
        rating: 4.7,
        price: 13.99,
        img: 'chefVeg.jpg',
        quantity: 1
    },
    {
        id: 24,
        name: 'Chicken',
        category: 'classic',
        rating: 4.3,
        price: 16.99,
        img: 'chickenSand.jpg',
        quantity: 1
    },
    {
        id: 25,
        name: 'Pulled Pork',
        category: 'classic',
        rating: 4.9,
        price: 13.99,
        img: 'pulledPork.jpg',
        quantity: 1
    },
    {
        id: 26,
        name: 'Brisket Cuban',
        category: 'classic',
        rating: 4.5,
        price: 15.99,
        img: 'cuban.jpg',
        quantity: 1
    },
    {
        id: 27,
        name: 'Cheese Curds',
        category: 'side',
        rating: 4.4,
        price: 8.99,
        img: 'cheeseCurds.jpg',
        quantity: 1
    },
    {
        id: 28,
        name: 'Nachos',
        category: 'appetizer',
        rating: 4.2,
        price: 13.99,
        img: 'nachos.jpg',
        quantity: 1
    },
    {
        id: 29,
        name: 'Kettle Chips',
        category: 'side',
        rating: 4.7,
        price: 7.99,
        img: 'kettle.jpg',
        quantity: 1
    },
    {
        id: 30,
        name: 'Hush Puppies',
        category: 'side',
        rating: 4.1,
        price: 13.99,
        img: 'hushPup.jpg',
        quantity: 1
    },
    {
        id: 31,
        name: 'Chicken Philly',
        category: 'classic',
        rating: 4.8,
        price: 18.99,
        img: 'chickenPhilly.jpg',
        quantity: 1
    },
    {
        id: 31,
        name: 'SweetTaters',
        category: 'side',
        rating: 4.0,
        price: 10.99,
        img: 'taters.jpg',
        quantity: 1
    },

]

export { foodItem };
