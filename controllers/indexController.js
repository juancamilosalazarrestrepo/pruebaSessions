const {validationResult} = require('express-validator');

module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    store: (req,res) => {
        let errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.render('index', {error: errors.errors});
        }

        req.session.name = req.body.name;
        req.session.color = req.body.color;
        req.session.email = req.body.email;
        req.session.age = req.body.age;

        res.redirect('/');
    }
}