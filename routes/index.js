var express = require('express');
var router = express.Router();
var request = require('request');
var camelize = require('penrillian-camelize');
var format = require('string-format');
var jsonfile = require('jsonfile');

var justEatApiCallOptions = {
  url: 'https://public.je-apis.com/restaurants?q=se19',
  headers: {
	'Accept-Tenant': 'uk',
	'Accept-Language': 'en-GB',
	'Authorization': 'Basic VGVjaFRlc3RBUEk6dXNlcjI=',
	'Host': 'public.je-apis.com'
  }
};

var getCamelizedObject = function(o) {

  var res = camelize(o);
  return JSON.stringify(res, null, 2);
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Search restaurants with your postcode' });
});

router.get('/search', function(req, res, next) {

  var postCode = req.query.postCode;

  if (postCode) {
    
    console.log (format('Fetching results for {0}', postCode));

    justEatApiCallOptions.qs = { q: postCode };

    request(justEatApiCallOptions, function (error, response, body) {

      if (!error && response.statusCode == 200) {

        var results = camelize(JSON.parse(body));

        console.log (results);

        jsonfile.writeFile('justeat-result.json', results, function(err) {
          
          if (err) {
            console.error('error writing justeat-result.json');
          }
        });

        res.render('index', { 
          title: format('Restaurants near {0}', postCode), 
          postCode: postCode,
          shortResultText: results.shortResultText,
          restaurants: results.restaurants,
          errorMessage: (!results.restaurants || 0 == results.restaurants.length) 
                          ? format("No results for '{0}'.. Please make sure it is a valid postcode.", postCode)
                          : null
        });
      } else {
        res.render('index', { 
          title: 'Search restaurants with your postcode', 
          postCode: postCode,
          shortResultText: results.shortResultText,
          restaurants: results.restaurants,
          errorMessage: "Service unavailable"
        });
      }
    });
  } else {

    console.log ('Post code does not exists');
    res.render('index', { title: 'Search restaurants with your postcode' });
  }
});

module.exports = router;
