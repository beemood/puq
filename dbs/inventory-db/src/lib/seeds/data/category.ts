import type { Prisma } from '../../../../generated';

// export const data = [
//   {
//     category: 'Default',
//   },
//   {
//     category: 'Fashion/Apparel and Accessories 🛍️',
//     departments: [
//       "Clothing (Men's, Women's, Kids')",
//       'Shoes',
//       'Jewelry and Watches',
//       'Handbags and Wallets',
//       'Eyewear',
//       'Activewear and Sportswear',
//     ],
//   },
//   {
//     category: 'Electronics and Technology 📱',
//     departments: [
//       'Computers and Tablets',
//       'Smartphones and Accessories',
//       'TVs and Home Audio',
//       'Cameras and Photo Equipment',
//       'Wearable Technology',
//       'Video Games and Consoles',
//     ],
//   },
//   {
//     category: 'Home and Garden / Furniture and Décor 🏡',
//     departments: [
//       'Kitchen and Dining',
//       'Bedding and Bath',
//       'Furniture',
//       'Home Décor and Art',
//       'Lighting',
//       'Patio and Garden',
//       'Cleaning and Laundry Supplies',
//     ],
//   },
//   {
//     category: 'Health, Personal Care, and Beauty ✨',
//     departments: [
//       'Skincare and Cosmetics',
//       'Haircare and Fragrances',
//       'Bath and Body',
//       'Vitamins and Supplements',
//       'Medical Supplies and Equipment',
//       'Fitness Equipment and Gear',
//     ],
//   },
//   {
//     category: 'Food and Beverage / Grocery 🍎',
//     departments: [
//       'Fresh Produce and Dairy',
//       'Meat and Seafood',
//       'Pantry Staples',
//       'Snacks and Confectionery',
//       'Beverages (Non-Alcoholic)',
//       'Alcoholic Drinks',
//     ],
//   },
//   {
//     category: 'Toys and Hobbies 🧸',
//     departments: [
//       'Action Figures and Collectibles',
//       'Building Blocks and Construction',
//       'Board Games and Puzzles',
//       'Arts and Crafts',
//       'Musical Instruments',
//     ],
//   },
//   {
//     category: 'Sports and Outdoors ⚽',
//     departments: [
//       'Exercise and Fitness',
//       'Camping and Hiking Gear',
//       'Cycling Equipment',
//       'Team Sports',
//       'Hunting and Fishing',
//     ],
//   },
// ];

export const Category: Prisma.CategoryCreateArgs[] = [
  {
    data: {
      name: 'Office and School Supplies',
      readonly: true,
      Children: {
        createMany: {
          data: [
            { name: 'Stationery and Paper', readonly: true },
            { name: 'Writing and Art Supplies', readonly: true },
            { name: 'Office Furniture', readonly: true },
            { name: 'Printers and Ink', readonly: true },
            { name: 'Calculators', readonly: true },
          ],
        },
      },
    },
  },

  {
    data: {
      name: 'Pet Supplies',
      readonly: true,
      Children: {
        createMany: {
          data: [
            { name: 'Pet Food and Treats', readonly: true },
            { name: 'Pet Toys', readonly: true },
            { name: 'Beds and Crates', readonly: true },
            { name: 'Collars and Leashes', readonly: true },
            { name: 'Grooming and Health', readonly: true },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Baby and Kids Gear',
      readonly: true,
      Children: {
        createMany: {
          data: [
            { name: 'Strollers and Car Seats', readonly: true },
            { name: 'Nursery Furniture', readonly: true },
            { name: 'Diapers and Wipes', readonly: true },
            { name: 'Baby Food and Formula', readonly: true },
            { name: 'Maternity Clothing', readonly: true },
          ],
        },
      },
    },
  },

  {
    data: {
      name: 'DIY, Tools and Home Improvement',
      Children: {
        createMany: {
          data: [
            { name: 'Power Tools and Hand Tools', readonly: true },
            { name: 'Building Materials', readonly: true },
            { name: 'Plumbing and Electrical', readonly: true },
            { name: 'Paint and Supplies', readonly: true },
            { name: 'Smart Home and Security', readonly: true },
          ],
        },
      },
    },
  },

  {
    data: {
      name: 'Media (Books, Movies, Music)',
      Children: {
        createMany: {
          data: [
            { name: 'Books (Physical and Digital)', readonly: true },
            { name: 'Movies and TV (DVD, Blu-ray)', readonly: true },
            { name: 'Music (CD, Vinyl, Digital)', readonly: true },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Automotive and Industrial',
      Children: {
        createMany: {
          data: [
            { name: 'Car Parts and Accessories', readonly: true },
            { name: 'Tools and Equipment', readonly: true },
            { name: 'Tires and Wheels', readonly: true },
            { name: 'Oil and Fluids', readonly: true },
            { name: 'Garage Storage', readonly: true },
          ],
        },
      },
    },
  },
];
