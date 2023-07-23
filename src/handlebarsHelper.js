const handlebars = require('handlebars');

handlebars.registerHelper('cleanJunk', function (input) {
  return input.replace(/(¥|https:\/\/)/g, '');
});

handlebars.registerHelper('shortenHash', function (input) {
  return input.substring(0, 12);
});

handlebars.poop = 'hello';
