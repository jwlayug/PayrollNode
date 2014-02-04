'use strict';

payrollApp.controller('payrollController', 
        function payrollController($scope) {

            $scope.account = {
                user: [
                    {   user_id: '1',
                        username: 'jwlayug',
                        password:'123'},
                    {   user_id: '2',
                        username: 'jwlayug2',
                        password: '1232'}

                ]
            }
         
            

        }
    
    );