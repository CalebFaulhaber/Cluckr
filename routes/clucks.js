const express = require('express');
const db = require('../db/client');
 
const router = express.Router();



router.get('/', (request, response) => {
    console.log('clucks page in router')
    db.select('*')
        .from('clucks')
        .then(clucks => {
            console.log(`clucks in routes/clucks > get "/":${clucks}`)
            response.render('clucks/index', {clucks: clucks});
        });
});
router.get('/new', (request, response) => {
    console.log(`router/clucks > get(/new)`)
    if(response.locals.user_name) {
        response.render('clucks/new');
    } else {
        response.redirect('/login')
    }
})
router.post('/', (request, response) => {
    const username = response.locals.user_name
    const {content, image_url} = request.body;
    db.insert({username: username, content: content, imageUrl: image_url})
        .into('clucks')
        .returning('*')
        .then(clucks => {
            response.redirect('/clucks')
        })
        .catch(err => {
            response.send(err)
        });
})




module.exports = router;
