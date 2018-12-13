module.exports = {
  extend: 'apostrophe-pieces',
  name: 'rv',
  label: 'RV',
  pluralLabel: 'RV',
  addFields: [
    {
      name: 'title',
      label: 'Stock Number',
      type: 'string',
      required: true
    },
    {
      name: 'condition',
      label: 'Condition',
      type: 'string',
      required: true
    },
    {
      name: 'year',
      label: 'Year',
      type: 'string',
      required: true
    },
    {
      name: 'make',
      label: 'Make',
      type: 'string',
      required: true
    },
    {
      name: 'model',
      label: 'Model',
      type: 'string',
      required: true
    },
    {
      name: 'price',
      label: 'Price',
      type: 'string',
      required: true
    },
    {
      name: 'class',
      label: 'Class',
      type: 'string',
      required: true
    },
    {
      name: 'mileage',
      label: 'Mileage',
      type: 'string',
      required: true
    },
    {
      name: 'fuel',
      label: 'Fuel Type',
      type: 'string',
      required: true
    },
    {
      name: 'stock',
      label: 'Stock Number',
      type: 'string',
      required: true
    },
    {
      name: 'vin',
      label: 'Vin Number',
      type: 'string',
      required: true
    },
    {
      name: 'sleeps',
      label: 'Sleeping Compacity',
      type: 'string',
      required: true
    },
    {
      name: 'air',
      label: 'Air Conditioners',
      type: 'string',
      required: true
    },
    {
      name: 'awnings',
      label: 'Awnings',
      type: 'string',
      required: true
    },
    {
      name: 'slides',
      label: 'Slide Outs',
      type: 'string',
      required: true
    },
    {
      name: 'length',
      label: 'Length',
      type: 'string',
      required: true
    },
    {
      name: 'engine',
      label: 'Engine Manufacture',
      type: 'string',
      required: true
    },
    {
      name: 'levelling',
      label: 'Leveling Jacks',
      type: 'string',
      required: true
    },
    {
      name: 'contained',
      label: 'Self Contained',
      type: 'string',
      required: true
    },
    {
      name: 'body',
      label: 'Description',
      type: 'area',
      options: {
        widgets: {
          'apostrophe-rich-text': {
            toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
          },
          'apostrophe-images': {}
        }
      }
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'string'
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        minSize: [ 600, 500 ],
        limit: 3,
        size: 'full'
      }
    }
  ],
  arrangeFields: [
    {
      name: 'details',
      label: 'Details',
      fields: [ 'condition', 'year', 'make', 'model', 'class', 'mileage', 'fuel', 'stock', 'vin', 'sleeps', 'air', 'awnings', 'slides', 'length', 'engine', 'levelling', 'contained' ]
    },
    {
      name: 'admin',
      label: 'Administrative',
      fields: [ 'slug', 'published', 'tags' ]
    },
    {
      name: 'content',
      label: 'Description and Images',
      fields: [ 'thumbnail', 'body' ]
    }
  ],
};
