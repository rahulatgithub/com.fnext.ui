/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl($http, cacheService) {
    this.useSignUpInfo = {
        firstName: 'DFFD',
        lastName: 'FDF',
        pwd1: 'FDFD',
        pwd2: 'FDFD',
        email: 'FFDFD@G'
    };
    this.availableTags=['Abdominal Radiology ','Addiction Psychiatry ','Transplant Cardiology','Allergy & Immunology','Oncology','Cardiothoracic Radiology'];
    this.selectedTags=[];
    this.loginInfo = {
        email: "as@g",
        pwd: "123"
    }

    this.register = function () {
        console.log(" to be registered " + angular.toJson(this.useSignUpInfo));
    };

    this.login = function () {
        var data = {
            "id": this.loginInfo.email,
            "pwd": this.loginInfo.pwd
        }
      
        cacheService.login(data);
    };

    this.userName = 'Jayant Bhagat';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';
    this.summernoteText = 'Every time your heart beats, blood flows into, through, and out of your heart. In fact, your heart moves about 100 gallons (379 liters) of blood through your body every hour';
    this.showSearch = true;
};



/**
 * wizardCtrl - Controller for wizard functions
 * used in Wizard view
 */
function wizardCtrl($scope, $rootScope) {
    // All data will be store in this object
    $scope.formData = {};

    // After process wizard
    $scope.processForm = function () {
        alert('Wizard completed');
    };
}

function externalService($http) {
    this.login = function (data) {
          var url = "https://fnexrserver.appspot.com/_ah/api/myapi/v1/login";
        $http.post(url, data).then(function (response) {
            alert('success' + angular.toJson(response));
        }, function (response) {
            alert('failed' + angular.toJson(response));
        });
        alert(" to be registered " + angular.toJson(this.loginInfo));
    }
}


angular
    .module('inspinia')
    .service('cacheService', externalService)
    .controller('MainCtrl', MainCtrl)
    .controller('wizardCtrl', wizardCtrl);