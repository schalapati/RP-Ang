'use strict';

/**
 * @ngdoc function
 * @name mpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mpApp
 */
angular.module('mpApp')
  .controller('AuthCtrl', function ($scope) {
  this.init = function () {
    // object declaration
    this.user = {};
    console.log(this.user);
  }

  $scope.submit = function() {
    console.log(this.user);
  };

  $scope.register = function() {
    console.log(this.user);
  };

  this.init();
  });
