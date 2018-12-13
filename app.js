var path = require('path');

var apos = require('apostrophe')({
  shortName: 'routerides-demo',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.

    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

      'rv': {},
      'rv-pages': {
        extend: 'apostrophe-pieces-pages'
      },
      'rv-widgets': {
          extend: 'apostrophe-pieces-widgets'
        },


      'apostrophe-attachments': {
        uploadfs: {
          backend: 's3',
          secret: 'g44R3Pc49DQUy92cYNsYPEusUfBdxoMokD/oLwbh',
          key: 'AKIAI3WUA2U3NLSPFVUA',
          bucket: 'routerides-cms-demo',
          region: 'us-west-1'
  }
},

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    'apostrophe-email': {
    // See the nodemailer documentation, many
    // different transports are available, this one
    // matches how PHP does it on Linux servers
    nodemailer: {
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
   }
  },
'apostrophe-login': {
  passwordReset: false,
  // The default: you have 48 hours to use a password reset link,
  // once it is sent to you
  passwordResetHours: 24,
  email: {
    from: 'password-reset@example.com'
  }
},
// This configures our default page template
'apostrophe-pages': {
  filters: {
  // Grab our ancestor pages, with two levels of subpages
  ancestors: {
    children: {
      depth: 2
    }
  },
  // We usually want children of the current page, too
  children: true
},
  types: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'rv-page',
      label: 'RV'
  },
  {
    name: 'subpage',
    label: 'Subpage'
},
],
park: [
  {
    title: 'Search',
    slug: '/search',
    type: 'apostrophe-search',
    label: 'Search',
    published: true
  }
]
},
'apostrophe-search': {},
  }
});
