* App will be built backend to frontend starting with the database - this is standard for industry

IDEA AND USERS:

* What problems does your app solve? 
    - Creates a social space for sharing thoughts and ideas.
* How does it solve these problems?
    - By giving an intelligent and simple user experience. The user will be able to login, add a new post, and see previous posts.
* Who is your target user?
    - User base is a person looking to post thoughts and ideas in an easy to use platform that can be accessed anywhere.
* How much experience do they have with technology?
    - Technology for the user is basic. Simple buttons and easy to read language will be a quick learning process. 

FEATURES

* Write use cases for your app.

* MVP Features: <!-- Minimum Viable Product - these must be done for the project to pass  -->
    * User can log in to their account <!-- This is an auth function -->
    * User can create a new post <!--  Pass CRUD *create* -->
    * User can view post <!--  Pass CRUD *read* -->
    * User can edit a post <!--  Pass CRUD *update* -->
    * User can delete a post <!--  Pass CRUD *delete* -->
    <!--  Full CRUD is what makes the API complete  -->

* Other Bonus Features: <!-- Bonus features can be added after MVP is passing -->
    * Add features to make it more personal 
    * Design around being an app for wine enthusiests




WIREFRAME:

* See Login.png , main_page.png




ENDPOINTS:

<!-- This is all AUTH --- wait for now --- * Auth Endpoints: The authorization endpoint is the endpoint on the authorization server where the resource owner logs in, and grants authorization to the client application.
- app.post('/auth/login', authCtrl.login) - receives email and password on req.body. Runs db.check_user and checks password with bcrypt, puts user on session and returns user. If no user found returns 404, ‘User does not exist’.

- app.post('/auth/register', authCtrl.register) - receives email and password on req.body. Runs db.check_user. if user found returns 409 ‘User already exists’. If no user found, hashes password with bcrypt and runs db.register_user, puts user on session and returns user.

- app.delete('/auth/logout', authCtrl.logout) - destroys session. returns status 200

- app.get('/auth/user', authCtrl.getUser) - checks if there is a user on session: if there is returns users. if no user on session returns 404. -->

<!-- * Post endpoints
- app.get('/api/posts', postCtrl.getPosts) - runs db.get_posts and returns result.

- app.post('/api/posts', postCtrl.addPost) - receives users_id and content on req.body and passes them to db.add_post. Then runs db.get_posts and returns result.

- app.put('/api/posts/:post_id', postCtrl.editPost) - receives post_id on req.params, content on req.body and passes them to db.edit_post. Then runs db.get_posts and returns result.

- app.delete('/api/posts/:post_id', postCtrl.deletePost) - receives post_id on req.params and passes it to db.delete_post. Then runs db.get_posts and returns result. -->


PACKAGES TO INSTALL:
-massive 
-express 
-dotenv 
-express-session 
-axios 
-bcryptjs
-react-router-dom 
-react-redux 
-redux-devtools-extension
-redux
-redux-promise-middleware
