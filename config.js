export const googleApisKey = 'AIzaSyDgKIwWkoMwhRb6qwv2wkZ62UKDrKEgmcw';

export const firebase = {
  databaseURL: 'https://cookadlib-2016.firebaseio.com/',
  serviceAccountCredentialsPath: '/Users/karl/Library/Mobile Documents/com~apple~CloudDocs/Credentials/Google/gatherer@cookadlib-2016.iam.gserviceaccount.com/cookadlib-c1b63c8b161c.json'
}

export const mysql = {
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test',
    charset  : 'utf8'
  }
};

export const nodemw = {
  // protocol: 'https',  // default to 'http'
  server: 'en.wikipedia.org', // host name of MediaWiki-powered site
  path: '/w', // path to api.php script
  debug: false // is more verbose when set to true
};

export let typesAccepted = [
  'Food',
  'Spice',
  'Condiment',
  'Meat',
  'Vegetable',
  'Fruit',
  'Plant',
  'Prescription drug, Over-the-counter drug', // Charcoal
  'Poultry',
  'Insect',
  'Alcoholic beverage',
  'Cocktail',
  'Fruit',
  'Soup',
  'Sauce',
  'Snake',
  'Thing',
  'Herb',
  'Oil',
  'Animal fat'
];

export let descriptionsAccepted = [
  'Food',
  'Spice',
  'Condiment',
  'Meat',
  'Vegetable',
  'Fruit',
  'Plant',
  'Prescription drug, Over-the-counter drug', // Charcoal
  'Poultry',
  'Insect',
  'Alcoholic beverage',
  'Cocktail',
  'Fruit',
  'Soup',
  'Sauce',
  'Snake',
  'Thing',
  'Herb',
  'Oil',
  'Animal fat',
  'Dessert'
];

export let typesRejected = [
  'Organization',
  'Corporation',
  'Person',
  'MusicGroup',
  'MusicAlbum',
  'MusicRecording',
  'TVSeries',
  'Business',
  'LodgingBusiness'
];

export let descriptionsRejected = [
  'Song by',
  'Album by',
  'Musical Group',
  'Hotel',
  'Rock band',
];
