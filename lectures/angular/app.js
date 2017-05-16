/**
 * Created by Radhika Patel on 5/16/2017.
 */
module.exports = function(app){
    app.get('/api/post',findAllPosts);
    app.get('/api/post/:index',findPostByIndex);
    //app.put('/api/post/:index',updatePostByIndex);
    app.delete('/api/post/:index',deletePostByIndex);
   // app.post('/api/post/',addNewPost);
    var posts = [

        {title: 'post123',body: 'Body1',date: new Date()},
        {title: 'post223',body: 'Body2',date: new Date()},
        {title: 'post323',body: 'Body3',date: new Date()},
        {title: 'post423',body: 'Body4',date: new Date()}

    ];
    // function addNewPost(req,res){
    //     console.log((req.data));
    //     posts.push(JSON.parse(req.data));
    //     console.log(posts);
    //     res.sendStatus(200);
    // }

    // function updatePostByIndex(req,res){
    //     var index = req.params.index;
    //     posts[index] = angular.copy(post);
    //     res.sendStatus(200);
    // }
    function deletePostByIndex(req,res){
        var index = req.params.index;
        posts.splice(index,1);
        res.sendStatus(200);
    }
    function findPostByIndex(req,res){
        var index = req.params['index'];
        res.json(posts[index]);

    }
    function findAllPosts(req,res){
        res.json(posts);
    }
};
