angular.module('Bookmarks').controller('HomeAngCtrl', HomeAngCtrl);

HomeAngCtrl.$inject = ['$scope', '$injector', '$rootScope'];

function HomeAngCtrl($scope, $injector, $rootScope) {

	var vm        = this;
	vm.add = add;
	var data = {};

	function add(user) {
		console.log('create contact');
		console.log('contact');
		// console.log(contact);
		console.log('user');
		console.log(user);
		var defaultForm = {
          fn : "",
          n : "",
            org           : "",
	        title         : "",
	        department    : "",
	        bday          : "",
	        nickname      : "",
	        url           : "",
	        note          : ""
      	};
      	Contact = cozydb.getModel('Contact', {
			fn            : String,
	        n             : String,
	        org           : String,
	        title         : String,
	        department    : String,
	        bday          : String,
	        nickname      : String,
	        url           : String,
	        note          : String
		});

	    Contact.create(user, function(err, res) {
	        if (err) {
	            alert(err);
	        } else {
	        	console.log('///////CONTACT/////////////');
	        	console.log(res);
	           	data = res;
	        }
	    });
	    vm.contacts = data;
	    $scope.contacts = data;
	}

  	function getContact() {
    	console.log('_____________Get contact_____________');
        Cozy.getData('ds-api', 'request', 'contact', function(data) {
        	console.log('YEEEEEEEEEEAAAAAAAAAAAAAAAAAAAAH !!!!')
        	console.log(data);
        	console.log('////////////////////////////////////')
        });
        console.log('End get contact');
    }
}