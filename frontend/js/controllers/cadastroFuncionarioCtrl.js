angular.module("cadastroFuncionario").controller("cadastroFuncionarioCtrl", function ($scope, $http) {
    $scope.app = "Cadastro de Funcionario";
    $scope.funcionarios = [];

    var carregarFuncionarios = function () {
        $http.get("http://localhost:3333/funcionario").then(function (response) {
            $scope.funcionarios = response.data
        });
    };

    $scope.cadastrarFuncionario = function (funcionario) {
        $http.post("http://localhost:3333/funcionario", funcionario).then(function (response) {
            delete $scope.funcionario;
            $scope.funcionarioForm.$setPristine();
            carregarFuncionarios();
        });
    };
    carregarFuncionarios();
});