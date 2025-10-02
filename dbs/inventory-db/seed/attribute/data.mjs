export const data = [
  {
    category: 'Core Physical Dimensions',
    attributes: [
      { name: 'Length', description: 'The longest dimension.' },
      { name: 'Width', description: 'The intermediate dimension.' },
      { name: 'Height', description: 'The dimension from base to top.' },
      {
        name: 'Depth',
        description:
          'The dimension from front to back (often interchangeable with height or width).',
      },
      {
        name: 'Diameter',
        description: 'The measure across a circular object.',
      },
      {
        name: 'Radius',
        description:
          'The measure from the center to the edge of a circular object.',
      },
    ],
  },
  {
    category: 'Mass, Volume, and Area',
    attributes: [
      {
        name: 'Weight (Net)',
        description: 'Mass of the product excluding packaging.',
      },
      {
        name: 'Weight (Shipping)',
        description: 'Mass of the product including packaging.',
      },
      {
        name: 'Volume (Capacity)',
        description:
          'The internal space available (e.g., for liquids or storage).',
      },
      {
        name: 'Area',
        description:
          'The total surface coverage (e.g., for rugs, paint, or fabric).',
      },
      { name: 'Density', description: 'Mass per unit volume.' },
    ],
  },
  {
    category: 'Material and Appearance',
    attributes: [
      {
        name: 'Material',
        description:
          'Primary constituent substance (e.g., steel, cotton, plastic).',
      },
      {
        name: 'Composition (%)',
        description: 'Breakdown of materials by percentage.',
      },
      {
        name: 'Color',
        description: "The visual hue (e.g., 'Red' or Hex code).",
      },
      {
        name: 'Finish',
        description:
          'The surface texture or gloss level (e.g., matte, glossy, brushed).',
      },
      {
        name: 'Pattern/Print',
        description: 'The repeating design on the surface.',
      },
      {
        name: 'Style/Form Factor',
        description: 'Overall design, shape, or configuration.',
      },
    ],
  },
  {
    category: 'Counting and Logistics',
    attributes: [
      {
        name: 'Quantity (Per Pack)',
        description: 'Number of individual items in a package.',
      },
      {
        name: 'Units per Case',
        description: 'Number of packs or items in a larger carton/case.',
      },
      { name: 'Count', description: 'The total number of pieces or items.' },
      {
        name: 'Minimum Order Quantity',
        description: 'The smallest purchasable count.',
      },
      {
        name: 'Country of Origin',
        description: 'The nation where the product was manufactured.',
      },
    ],
  },
  {
    category: 'Electrical and Power',
    attributes: [
      {
        name: 'Voltage',
        description: 'Electrical potential (e.g., 120V, 240V).',
      },
      { name: 'Amperage', description: 'Electrical current draw.' },
      { name: 'Wattage (Power)', description: 'Power consumption or output.' },
      {
        name: 'Frequency (Hertz)',
        description: 'Cycles per second (e.g., 50Hz, 60Hz).',
      },
      {
        name: 'Battery Capacity',
        description: 'Stored charge (e.g., mAh, Wh).',
      },
      {
        name: 'Power Source',
        description: 'Input type (e.g., AC, DC, battery, solar).',
      },
    ],
  },
  {
    category: 'Performance and Technical',
    attributes: [
      {
        name: 'Temperature Range',
        description: 'Min and Max operating or storage temperatures.',
      },
      {
        name: 'Pressure (Rating)',
        description: 'Maximum force per unit area (e.g., PSI, Bar, Pascal).',
      },
      {
        name: 'Flow Rate',
        description: 'Volume moved per unit time (e.g., GPM, L/min).',
      },
      { name: 'Speed/RPM', description: 'Rotational or linear velocity.' },
      {
        name: 'Noise Level',
        description: 'Sound intensity rating (e.g., dB).',
      },
      {
        name: 'Efficiency Rating',
        description:
          'Measure of performance versus energy consumption (e.g., Energy Star).',
      },
    ],
  },
  {
    category: 'Computing and Data',
    attributes: [
      {
        name: 'Storage Capacity',
        description: 'Data storage size (e.g., GB, TB).',
      },
      { name: 'RAM/Memory Size', description: 'System memory size.' },
      { name: 'Processor Speed', description: 'CPU clock speed (e.g., GHz).' },
      {
        name: 'Screen Size (Diagonal)',
        description: 'Display size from corner to corner.',
      },
      {
        name: 'Resolution',
        description: 'Number of pixels (e.g., 1920x1080).',
      },
      {
        name: 'Connectivity',
        description:
          'Supported interfaces (e.g., Wi-Fi standard, Bluetooth version, USB type).',
      },
    ],
  },
  {
    category: 'Compliance and Identification',
    attributes: [
      {
        name: 'Price (MSRP)',
        description: "Manufacturer's Suggested Retail Price.",
      },
      {
        name: 'Brand/Manufacturer',
        description: 'The company that produced the item.',
      },
      {
        name: 'Model Number',
        description: 'A unique identifier for a product line.',
      },
      {
        name: 'SKU',
        description: 'Stock Keeping Unit (Internal retail identifier).',
      },
      {
        name: 'UPC/EAN',
        description:
          'Universal Product Code / European Article Number (External identifier).',
      },
      {
        name: 'Warranty Period',
        description: 'Duration of manufacturer coverage (e.g., years, months).',
      },
      {
        name: 'Certifications',
        description: 'Official standards met (e.g., FDA, CE, UL).',
      },
    ],
  },
];
