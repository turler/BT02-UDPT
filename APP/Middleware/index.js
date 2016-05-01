var express = require('express');



module.exports = function(app){
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.session({serect:'my first web'}));
    app.use(express.bodyParser());

    app.use(function(req,res,next){
        res.locals.session = req.session;
    })
}