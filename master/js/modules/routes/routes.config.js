/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper){
        
        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/app/products');

        // 
        // Application Routes
        // -----------------------------------   
        $stateProvider
          .state('app', {
              url: '/app',
              abstract: true,
              templateUrl: helper.basepath('app.html'),
              resolve: helper.resolveFor('modernizr', 'icons')
          })

            .state('app.logout', {
                url: '/logout',
                title: 'Log Out',
                templateUrl: helper.basepath('logout.html')
            })
            .state('app.account', {
                url: '/account',
                title: 'My Account',
                templateUrl: helper.basepath('account.html')
            })
            .state('app.products', {
                url: '/products',
                title: 'Browse Products',
                templateUrl: helper.basepath('products.html')
            })
            .state('app.hotproducts', {
                url: '/hotproducts',
                title: 'My Account',
                templateUrl: helper.basepath('hotproducts.html')
            })
            .state('app.watches', {
                url: '/watches',
                title: 'Your Watches',
                templateUrl: helper.basepath('watches.html')
            })
            .state('app.aboutus', {
                url: '/aboutus',
                title: 'About Us',
                templateUrl: helper.basepath('aboutus.html')
            })
            .state('app.privacy', {
                url: '/privacy',
                title: 'Privacy Policy',
                templateUrl: helper.basepath('privacy.html')
            })
            .state('app.contactus', {
                url: '/contactus',
                title: 'Contact Us',
                templateUrl: helper.basepath('contactus.html')
            })

            //
            // Single Page Routes
            // -----------------------------------
            .state('app.login', {
                url: '/login',
                title: 'Login',
                templateUrl: 'app/pages/login.html'
            })
            .state('app.register', {
                url: '/register',
                title: 'Register',
                templateUrl: 'app/pages/register.html'
            })
            .state('page.recover', {
                url: '/recover',
                title: 'Recover',
                templateUrl: 'app/pages/recover.html'
            })
            .state('page.lock', {
                url: '/lock',
                title: 'Lock',
                templateUrl: 'app/pages/lock.html'
            })
            .state('page.404', {
                url: '/404',
                title: 'Not Found',
                templateUrl: 'app/pages/404.html'
            })

          // 
          // CUSTOM RESOLVES
          //   Add your own resolves properties
          //   following this object extend
          //   method
          // ----------------------------------- 
          // .state('app.someroute', {
          //   url: '/some_url',
          //   templateUrl: 'path_to_template.html',
          //   controller: 'someController',
          //   resolve: angular.extend(
          //     helper.resolveFor(), {
          //     // YOUR RESOLVES GO HERE
          //     }
          //   )
          // })
          ;

    } // routesConfig

})();

