'use strict';

payrollApp.controller('payrollController', 
        function payrollController($scope,payrollData) {
            $scope.snippet = 'Sample Message';
            $scope.account = payrollData.account;




            $scope.upVote = function (defaultname) {
                defaultname.vote++;
            };

            $scope.downVote = function (defaultname) {
                defaultname.vote--;
            };



        }
    
    );