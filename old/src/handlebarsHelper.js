const handlebars = require('handlebars');

handlebars.registerHelper('cleanJunk', function (input) {
  return input.replace(/(¥|https:\/\/)/g, '');
});

handlebars.registerHelper('shortenHash', function (input) {
  return input.substring(0, 12);
});

handlebars.registerHelper('sameThing', function (a, b) {
  return a == b;
});

handlebars.poop = 'hello';
