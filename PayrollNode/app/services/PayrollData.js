payrollApp.factory('payrollData', function () {
    return {
        account : {
            user: [
                {   user_id: '1',
                    username: 'jwlayug',
                    password: '123',
                    profile:{
                        lastname:'Layug',
                        firstname:'James'
                    },
                    vote:0,
                },
                {   user_id: '2',
                    username: 'jwlayug2',
                    password: '1232',
                    profile: {
                        lastname: 'Layug2',
                        firstname: 'James2'
                    },
                    vote:0,
                }
            ]
        }
        // account end



    };
});