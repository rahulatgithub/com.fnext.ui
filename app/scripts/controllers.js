/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = 'Jayant Bhagat';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';
    this.summernoteText='Every time your heart beats, blood flows into, through, and out of your heart. In fact, your heart moves about 100 gallons (379 liters) of blood through your body every hour';
    this.showSearch=true;
};


angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)