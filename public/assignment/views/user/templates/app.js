(function () {
    angular.module('WAM',[])
        .controller('loginController', loginController);
    function loginController($scope) {
        $scope.login = function (username,password){
            var model = this;

            model.found=false;
            var users = [
                {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
                {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
                {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
                {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
            ];
            for(var u in users){
                var user = users[u];
                if(user.username === username && user.password === password){
                    found=true;
                    break;
                }
            }
            if(found){
                model.message = "Hi welcome you are sucssesfully login";
            }else{
               model.message="Sorry try again!!";
            }
        }
    }
})();