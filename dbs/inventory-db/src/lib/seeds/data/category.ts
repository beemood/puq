import type { Prisma } from '../../../../generated';

export const Category: Prisma.CategoryCreateArgs[] = [
  {
    data: {
      name: 'Default',
      description: 'Default category',
    },
  },
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
  {
    data: {
      name: 'Sports and Outdoors',
      Children: {
        createMany: {
          data: [
            { name: 'Exercise and Fitness', readonly: true },
            { name: 'Camping and Hiking Gear', readonly: true },
            { name: 'Cycling Equipment', readonly: true },
            { name: 'Team Sports', readonly: true },
            { name: 'Hunting and Fishing', readonly: true },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Toys and Hobbies',
      Children: {
        createMany: {
          data: [
            { name: 'Action Figures and Collectibles', readonly: true },
            { name: 'Building Blocks and Construction', readonly: true },
            { name: 'Board Games and Puzzles', readonly: true },
            { name: 'Arts and Crafts', readonly: true },
            { name: 'Musical Instruments', readonly: true },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Food and Beverage',
      Children: {
        createMany: {
          data: [
            { name: 'Fresh Produce and Dairy', readonly: true },
            { name: 'Meat and Seafood', readonly: true },
            { name: 'Pantry Staples', readonly: true },
            { name: 'Snacks and Confectionery', readonly: true },
            { name: 'Beverages (Non-Alcoholic)', readonly: true },
            { name: 'Alcoholic Drinks', readonly: true },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Fashion, Apparel and Accessories',
      Children: {
        createMany: {
          data: [
            { name: "Clothing (Men's, Women's, Kids')", readonly: true },
            { name: "Shoes',", readonly: true },
            { name: "Jewelry and Watches',", readonly: true },
            { name: "Handbags and Wallets',", readonly: true },
            { name: "Eyewear',", readonly: true },
            { name: "Activewear and Sportswear',", readonly: true },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Electronics and Technology',
      Children: {
        createMany: {
          data: [
            { name: 'Computers and Tablets', readonly: true },
            { name: 'Smartphones and Accessories', readonly: true },
            { name: 'TVs and Home Audio', readonly: true },
            { name: 'Cameras and Photo Equipment', readonly: true },
            { name: 'Wearable Technology', readonly: true },
            { name: 'Video Games and Consoles', readonly: true },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Home, Garden, Furniture, and Decor',
      Children: {
        createMany: {
          data: [
            { name: 'Kitchen and Dining', readonly: true },
            { name: 'Bedding and Bath', readonly: true },
            { name: 'Furniture', readonly: true },
            { name: 'Home Décor and Art', readonly: true },
            { name: 'Lighting', readonly: true },
            { name: 'Patio and Garden', readonly: true },
            { name: 'Cleaning and Laundry Supplies', readonly: true },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Health, Personal Care, and Beauty',
      Children: {
        createMany: {
          data: [
            { name: 'Skincare and Cosmetics', readonly: true },
            { name: 'Haircare and Fragrances', readonly: true },
            { name: 'Bath and Body', readonly: true },
            { name: 'Vitamins and Supplements', readonly: true },
            { name: 'Medical Supplies and Equipment', readonly: true },
            { name: 'Fitness Equipment and Gear', readonly: true },
          ],
        },
      },
    },
  },
];
