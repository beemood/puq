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

      children: {
        createMany: {
          data: [
            { name: 'Stationery and Paper' },
            { name: 'Writing and Art Supplies' },
            { name: 'Office Furniture' },
            { name: 'Printers and Ink' },
            { name: 'Calculators' },
          ],
        },
      },
    },
  },

  {
    data: {
      name: 'Pet Supplies',

      children: {
        createMany: {
          data: [
            { name: 'Pet Food and Treats' },
            { name: 'Pet Toys' },
            { name: 'Beds and Crates' },
            { name: 'Collars and Leashes' },
            { name: 'Grooming and Health' },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Baby and Kids Gear',

      children: {
        createMany: {
          data: [
            { name: 'Strollers and Car Seats' },
            { name: 'Nursery Furniture' },
            { name: 'Diapers and Wipes' },
            { name: 'Baby Food and Formula' },
            { name: 'Maternity Clothing' },
          ],
        },
      },
    },
  },

  {
    data: {
      name: 'DIY, Tools and Home Improvement',
      children: {
        createMany: {
          data: [
            { name: 'Power Tools and Hand Tools' },
            { name: 'Building Materials' },
            { name: 'Plumbing and Electrical' },
            { name: 'Paint and Supplies' },
            { name: 'Smart Home and Security' },
          ],
        },
      },
    },
  },

  {
    data: {
      name: 'Media (Books, Movies, Music)',
      children: {
        createMany: {
          data: [
            { name: 'Books (Physical and Digital)' },
            { name: 'Movies and TV (DVD, Blu-ray)' },
            { name: 'Music (CD, Vinyl, Digital)' },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Automotive and Industrial',
      children: {
        createMany: {
          data: [
            { name: 'Car Parts and Accessories' },
            { name: 'Tools and Equipment' },
            { name: 'Tires and Wheels' },
            { name: 'Oil and Fluids' },
            { name: 'Garage Storage' },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Sports and Outdoors',
      children: {
        createMany: {
          data: [
            { name: 'Exercise and Fitness' },
            { name: 'Camping and Hiking Gear' },
            { name: 'Cycling Equipment' },
            { name: 'Team Sports' },
            { name: 'Hunting and Fishing' },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Toys and Hobbies',
      children: {
        createMany: {
          data: [
            { name: 'Action Figures and Collectibles' },
            { name: 'Building Blocks and Construction' },
            { name: 'Board Games and Puzzles' },
            { name: 'Arts and Crafts' },
            { name: 'Musical Instruments' },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Food and Beverage',
      children: {
        createMany: {
          data: [
            { name: 'Fresh Produce and Dairy' },
            { name: 'Meat and Seafood' },
            { name: 'Pantry Staples' },
            { name: 'Snacks and Confectionery' },
            { name: 'Beverages (Non-Alcoholic)' },
            { name: 'Alcoholic Drinks' },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Fashion, Apparel and Accessories',
      children: {
        createMany: {
          data: [
            { name: "Clothing (Men's, Women's, Kids')" },
            { name: "Shoes'," },
            { name: "Jewelry and Watches'," },
            { name: "Handbags and Wallets'," },
            { name: "Eyewear'," },
            { name: "Activewear and Sportswear'," },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Electronics and Technology',
      children: {
        createMany: {
          data: [
            { name: 'Computers and Tablets' },
            { name: 'Smartphones and Accessories' },
            { name: 'TVs and Home Audio' },
            { name: 'Cameras and Photo Equipment' },
            { name: 'Wearable Technology' },
            { name: 'Video Games and Consoles' },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Home, Garden, Furniture, and Decor',
      children: {
        createMany: {
          data: [
            { name: 'Kitchen and Dining' },
            { name: 'Bedding and Bath' },
            { name: 'Furniture' },
            { name: 'Home Décor and Art' },
            { name: 'Lighting' },
            { name: 'Patio and Garden' },
            { name: 'Cleaning and Laundry Supplies' },
          ],
        },
      },
    },
  },
  {
    data: {
      name: 'Health, Personal Care, and Beauty',
      children: {
        createMany: {
          data: [
            { name: 'Skincare and Cosmetics' },
            { name: 'Haircare and Fragrances' },
            { name: 'Bath and Body' },
            { name: 'Vitamins and Supplements' },
            { name: 'Medical Supplies and Equipment' },
            { name: 'Fitness Equipment and Gear' },
          ],
        },
      },
    },
  },
];
