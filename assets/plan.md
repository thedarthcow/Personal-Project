MVP:

* User can log in to their account <!-- This is an auth function -->
* User can create a new post <!--  Pass CRUD *create* -->
* User can view post <!--  Pass CRUD *read* -->
* User can edit a post <!--  Pass CRUD *update* -->
* User can delete a post <!--  Pass CRUD *delete* -->




Wireframe:

* See Login.png , main_page.png



Endpoints:

* Auth Endpoints: The authorization endpoint is the endpoint on the authorization server where the resource owner logs in, and grants authorization to the client application.
- app.post('/auth/login', authCtrl.login) - receives email and password on req.body. Runs db.check_user and checks password with bcrypt, puts user on session and returns user. If no user found returns 404, ‘User does not exist’.

- app.post('/auth/register', authCtrl.register) - receives email and password on req.body. Runs db.check_user. if user found returns 409 ‘User already exists’. If no user found, hashes password with bcrypt and runs db.register_user, puts user on session and returns user.

- app.delete('/auth/logout', authCtrl.logout) - destroys session. returns status 200

- app.get('/auth/user', authCtrl.getUser) - checks if there is a user on session: if there is returns users. if no user on session returns 404.
