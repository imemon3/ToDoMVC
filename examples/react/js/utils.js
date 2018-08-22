var app = app || {};

(function () {
	'use strict';

	app.Utils = {
		uuid: function () {
			/*jshint bitwise:false */
			var i, random;
			var uuid = '';

			for (i = 0; i < 32; i++) {
				random = Math.random() * 16 | 0;
				if (i === 8 || i === 12 || i === 16 || i === 20) {
					uuid += '-';
				}
				uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
					.toString(16);
			}

			return uuid;
		},

		pluralize: function (count, word) {
			return count === 1 ? word : word + 's';
		},

		store: function (namespace, data) {
			if (data) {
				//call lambda function
				//result = await fetch('https://wvollshn12.execute-api.us-east-1.amazonaws.com/develop/todo-storage');
				return localStorage.setItem(namespace, JSON.stringify(data));
			}
			var invocation = new XMLHttpRequest();
			invocation.open('GET', 'https://wvollshn12.execute-api.us-east-1.amazonaws.com/develop/todo-storage', false);
			invocation.setRequestHeader('x-api-key', 'Wa4nfk69YGaKoApfaFKU9Lx7aumZB7e402nSKR38');
			invocation.send(null);

			console.log(invocation.responseText);

			return JSON.parse(invocation.responseText);

			//var url = 'http://bar.other/resources/post-here/';
			//var body = '<?xml version="1.0"?><person><name>Arun</name></person>';

			// function callOtherDomain() {
			// 	if (invocation) {
			// 		invocation.open('POST', url, true);
			// 		invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
			// 		invocation.setRequestHeader('Content-Type', 'application/xml');
			// 		invocation.onreadystatechange = handler;
			// 		invocation.send(body);
			// 	}
			// }
			
			//var store = localStorage.getItem(namespace);
			//return (store && JSON.parse(store)) || [];
		},

		extend: function () {
			var newObj = {};
			for (var i = 0; i < arguments.length; i++) {
				var obj = arguments[i];
				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						newObj[key] = obj[key];
					}
				}
			}
			return newObj;
		}
	};
})();
