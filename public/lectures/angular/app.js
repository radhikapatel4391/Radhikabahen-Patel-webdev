(function(){
     angular
         .module("BlogApp",[])
        .controller("BlogPostListController",BlogPostListController);
     function BlogPostListController($scope,$http) {
        $scope.post={title:"Title", body: "Body Text here!!!"};
        $scope.posts=[];


        //event handler
        $scope.addPost = addPost;
        $scope.deletePost = deletePost;
        $scope.updatePost = updatePost;
        $scope.editPost = editPost;
        //functions
         function init() {
             findBlogPosts();
         }
         init();
         function findBlogPosts() {
             $http.get('/api/post').
             then(function(response){
                 $scope.posts =  response.data;
             });
         }
        function addPost(post){
             var newPost = {
                 title : post.title,
                 body : post.body,
                 date : new Date()
             };
             $http.post('/api/post/',newPost).then(findBlogPosts);
             //$scope.posts.push(newPost);
        }
        function deletePost(index){
           //$scope.posts.splice(index,1);
            $http.delete('/api/post/'+index)
                 .then(findBlogPosts)
        }
        function editPost(index){
            $scope.post = angular.copy ($scope.posts[index]);
            $scope.index = index;
        }
        function updatePost(post){
            //$scope.posts[$scope.index] = angular.copy(post);
            $http.put('/api/post/'+$scope.index,post)
                .then(findBlogPosts)
        }
     }
})();