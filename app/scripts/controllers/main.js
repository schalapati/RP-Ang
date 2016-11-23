'use strict';

/**
 * @ngdoc function
 * @name mpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mpApp
 */
angular.module('mpApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log("Main controller");
  });
