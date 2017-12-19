const WooCommerceAPI = require('woocommerce-api');

let WooCommerce = new WooCommerceAPI({
  url: 'http://localhost/', // Your store URL
  consumerKey: process.env.CONSUMER_KEY, // Your consumer key
  consumerSecret: process.env.CONSUMER_SECRET, // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v2' // WooCommerce WP REST API version
});

module.exports = WooCommerce;
