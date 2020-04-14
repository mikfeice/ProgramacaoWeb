(function(){

    'use strict';

    var unidescApp = angular.module("unidescApp");

    unidescApp.controller('produtoController', produtoController);

    produtoController.$inject = ['$scope'];

    function produtoController($scope) {

        var vm = this;
        vm.produto = {};
        vm.produtos = [];

        vm.adicionarProduto = function(){
            vm.produtos.push(angular.copy(vm.produto));
            
            vm.limparCampos ();

            console.log(vm.produtos);

        };

        vm.limparCampos = function(){
            vm.produto = {};
        };
        
        vm.deletarItem = function(){

        };
    }
}());