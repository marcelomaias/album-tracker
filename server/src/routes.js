const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AlbumsController = require('./controllers/AlbumsController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)
    
    app.get('/albums',
        AlbumsController.index)

    app.get('/album/:albumId',
        AlbumsController.show)
    
    app.put('/album/:albumId',
        AlbumsController.put)

    app.post('/albums',
        AlbumsController.post)
    
}