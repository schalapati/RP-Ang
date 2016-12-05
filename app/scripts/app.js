'use strict';

/**
 * @ngdoc overview
 * @name mpApp
 * @description
 * # mpApp
 *
 * Main module of the application.
 */
angular
  .module('mpApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        controllerAs: 'about'
      })
      .when('/coupon', {
        templateUrl: 'views/coupon.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'AuthCtrl',
        controllerAs: 'about'
      })
      .when('/mobileapp', {
        templateUrl: 'views/mobileapp.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
      .when('/c_account', {
        templateUrl: 'views/c_account.html',
        controller: 'AuthCtrl',
      })
      .when('/jrioffers', {
        templateUrl: 'views/jrioffers.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
  });
