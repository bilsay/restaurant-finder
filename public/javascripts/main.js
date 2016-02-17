$(document).ready (function () {

	var apiUrl = 'https://public.je-apis.com/restaurants?q=se19';

	/*
Accept-Tenant: uk
Accept-Language: en-GB
Authorization: Basic VGVjaFRlc3RBUEk6dXNlcjI=
Host: public.je-apis.com
	*/
	$.ajax({
		url: apiUrl,

    	headers: { 
			'Accept-Tenant': 'uk',
			'Accept-Language': 'en-GB',
			'Authorization': 'Basic VGVjaFRlc3RBUEk6dXNlcjI=',
			'Host': 'public.je-apis.com'
    	},
		success: function (data) {

			console.log (data);
		}
	});
});