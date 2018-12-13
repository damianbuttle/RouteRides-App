// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default, and to use jQuery 3.x

module.exports = {
  stylesheets: [
      {
          name: 'bootstrap.min',
      },
      {
          name: 'bootstrap-grid.min'
      },
      {
          name: 'aos',
          minify: true
      },
      {
          name: 'site',
          minify: true
      },
      {
        name:'dataTables.bootstrap4.min'
      },
      {
        name: 'datatables.min'
      },
      {
        name: 'jquery.dataTables.min'
      }

  ],
  scripts: [
    {
      name: 'jquery.dataTables.min'
    },
      {
          name: 'bootstrap.min'
      },
      {
          name: 'aos'
      },
      {
          name: 'site'
      }
  ]
};
