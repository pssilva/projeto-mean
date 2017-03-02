var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
      created: {
        type: Date,
        'default': Date.now
      },
      creator: {
          type: Schema.ObjectId,
          ref: 'User' 
      }
});

mongoose.model('Articles', ArticlesSchema);