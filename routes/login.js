const express = require('express')

const router = express.Router()


router.get('/', (request, response) => {
    console.log('one less stupid thing happening')
    response.render('welcome');
});

router.get('/login', (req, res) => {
    console.log('get on login url in router')
    res.render('login')
})

router.post('/login', (req, res) => {
    const oneDay = 1000 * 60 * 60 * 24
    console.log('post on login url in router')
    res.cookie('user', req.body.user_name, {maxAge: oneDay})
    res.redirect('/')
})

router.delete('/login', (req, res) => {
    console.log('delete on login url in router')
    res.clearCookie('user')
    res.redirect('/') 
})










module.exports = router