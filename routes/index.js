var express = require('express');
var router = express.Router();
var request = require('request');
var $ = require('jquery');

var justEatApiCallOptions = {
  url: 'https://public.je-apis.com/restaurants?q=se19',
  headers: {
	'Accept-Tenant': 'uk',
	'Accept-Language': 'en-GB',
	'Authorization': 'Basic VGVjaFRlc3RBUEk6dXNlcjI=',
	'Host': 'public.je-apis.com'
  }
};

var firstToUpper = function(str) {

    return str.charAt(0).toUpperCase() + str.slice(1);
};

var mapToJsObject = function(o) {

    var r = {};
    $.map(o, function(item, index) {
        r[firstToLower(index)] = o[index];
    });
    return r;
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/search', function(req, res, next) {
	

	var postCode = req.param('postCode');

  	justEatApiCallOptions.qs = { q: postCode };

	request(justEatApiCallOptions, function (error, response, body) {

		if (!error && response.statusCode == 200) {

			var results = mapToJsObject(JSON.parse(body));


  			res.render('index', { 
  				title: 'Express', 
  				shortResultText: results.shortResultText,
  				restaurants: results.restaurants 
  			});
		}

		$('body')
	});
});

module.exports = router;
