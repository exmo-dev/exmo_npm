/*
 * exmo-api
 * https://github.com/exmo-dev/exmo_npm
 *
 * Copyright (c) 2016 exmo-dev
 * Licensed under the MIT license.
 */

'use strict';

var CryptoJS = require("crypto-js"),
	querystring = require('querystring'),
	request = require('request'),
	config = {
		url: 'https://api.exmo.com/v1/'
	};


function sign(message){
    return CryptoJS.HmacSHA512(message, config.secret).toString(CryptoJS.enc.hex);
}

exports.init_exmo = function (cfg) {
	config.key = cfg.key;
	config.secret = cfg.secret;
	config.nonce = Math.floor(new Date().getTime());
};

exports.api_query = function(method_name, data, callback){
	data.nonce = config.nonce++;
	var post_data = querystring.stringify(data);

	var options = {
	  url: config.url + method_name,
	  method: 'POST',
	  headers: {
	    'Key': config.key,
	    'Sign': sign(post_data)
	  },
	  form:data
	};
	
 	request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(body);
        }else{
        	callback(error);
        }
    });
};
