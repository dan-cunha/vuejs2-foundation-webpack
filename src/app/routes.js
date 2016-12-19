/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

const StorefrontLayout = require('layouts/storefront.layout.vue');

export default [
  // Home
  {
    path: '/',
    name: 'storefront.index',
    component: StorefrontLayout,
    children: [
      {
        path: '/',
        component: require('pages/storefront/index.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/',
  },
  {
    path: '/*',
    redirect: '/',
  },
];
