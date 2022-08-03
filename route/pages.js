const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/Education', (req, res) => {
    res.render('Education')
})

router.get('/Hobbies', (req, res) => {
    res.render('hobbies')
})

router.get('/Things i like', (req, res) => {
    res.render('Things i like')
})

router.get('/Contact info', (req, res) => {
    res.render('Contact info')
})

router.get('/Contact', (req, res) => {
    res.render('Contact')
})

router.post('/submitContact', (req, res) => {
    const contact = new Contact ({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        reason: req.body.reason,
        comment: req.body.comment

    });

    Contact.collection.insertOne(contact)
    .then(result => {
        res.render('contact')
    })
    .catch(err => console.log(err));
})

module.exports = router;

