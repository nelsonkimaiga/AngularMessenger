"use strict";

angular.module("messagesApp", []).controller("MessagesCtrl", ["$scope", "$http", function MessagesCtrl($scope, $http) {
        $scope.messages = [];
        $scope.currentMessage = "";
        $scope.sendText = function () {
            $http.get("api/string/" + encodeURIComponent($scope.currentMessage)).then(function (result) {
                $scope.messages.push(result.data);
            }, function (e) {
                window.console.error(e);
            });
        };

    }]).directive("messages", [function () {
        return {
            restrict: "E",
            template: "<table><thead><tr><th>Original message</th><th>Response</th></tr></thead><tbody><tr data-ng-repeat='m in messages'><td>{{m.original}}</td><td>{{m.reverted}}</td></tr></tbody></table>"
        };
    }]).directive("mytitle", [function () {
        return {
            restrict: "E",
            scope: {
                msg: "="
            },
            template: "<h2>{{msg}}</h2>"
        };
    }]);