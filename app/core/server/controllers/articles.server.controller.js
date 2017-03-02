var mongoose = require('mongoose'),
    articles = mongoose.model('Articles');

var getErrorMessage = function(err) {

    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
      return 'Unknown server error';
    }

};

exports.create = function(req, res) {
    var articles = new Articles(req.body);
        articles.creator = req.user;
        articles.save(function(err) {
          if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
          } else {
            res.json(articles);
          }
        });
};

exports.list = function(req, res) {
    Articles.find().sort('-created').populate('creator', 'firstNamelastName fullName').exec(function(err, articless) {
      if (err) {
          return res.status(400).send({
              message: getErrorMessage(err)
          });
      } else {
          res.json(articless);
      }
    }); 
};

exports.articlesByID = function(req, res, next, id) {
     Articles.findById(id).populate('creator', 'firstName lastNamefullName').exec(function(err, articles) {

       if (err) return next(err);
       if (!articles) return next(new Error('Failed to load articles '
+ id));
       req.articles = articles;
next(); });
};

exports.read = function(req, res) {
     res.json(req.articles);
};

exports.update = function(req, res) {
     var articles = req.articles;
     articles.title = req.body.title;

     articles.content = req.body.content;
     articles.save(function(err) {
       if (err) {
         return res.status(400).send({
           message: getErrorMessage(err)
		  });
} else {
         res.json(articles);
       }
}); };


exports.delete = function(req, res) {
     var articles = req.articles;
     articles.remove(function(err) {
       if (err) {
         return res.status(400).send({
           message: getErrorMessage(err)
		  });
       } else {
         res.json(articles);
       }
		});
};

exports.hasAuthorization = function(req, res, next) {
    if (req.articles.creator.id !== req.user.id) {
        return res.status(403).send({
          message: 'User is not authorized'
        }); 
    }
    next(); 
};