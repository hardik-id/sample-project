(function() {
    'use strict';

    angular
        .module('app.products')
        .service('ProductsService', ProductsService);

    ProductsService.$inject = ['$http'];
    function ProductsService($http) {
        this.getMenu = getMenu;

        ////////////////

        function getMenu(onReady, onError) {
          var menuJson = 'server/products.json',
              menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
            
          onError = onError || function() { alert('Failure loading products'); };

          $http
            .get(menuURL)
            .success(onReady)
            .error(onError);
        }
    }
})();