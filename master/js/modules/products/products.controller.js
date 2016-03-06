(function() {
    'use strict';

    angular
        .module('app.products')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['$rootScope', '$scope', '$state', 'ProductsService', 'Utils'];
    function ProductsController($rootScope, $scope, $state, ProductsService,  Utils) {
        var vm = this;
        activate();

        /////////////////

        function activate() {

            vm.currentPage = 1;
            vm.maxSize = 5;
            vm.productsPerPage = 5;

            vm.setPage = function (pageNo) {
                vm.currentPage = pageNo;
            };

            vm.pageChanged = function() {
                console.log('Page changed to: ' + vm.currentPage);
                filterData();
            };

            function filterData(){
                var begin = ((vm.currentPage - 1) * vm.productsPerPage),
                    end = begin + vm.productsPerPage;
                if(vm.allProducts==undefined){
                    vm.products=[];
                }else{
                    vm.products = vm.allProducts.slice(begin, end);
                }
            }


          ProductsService.getMenu(sidebarReady);

          function sidebarReady(items) {
              if(items && items.length>0){
                  vm.allProducts = items;
                  vm.totalProducts = items.length;
                  filterData();
              }else{
                  //Display no record found message.
              }

          }
        }
    }

})();
