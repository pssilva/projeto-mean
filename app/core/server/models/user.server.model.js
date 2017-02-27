/**
 * New node file
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
     firstName: String,
     lastName: String, 
     email: {
         type: String,
         index: true,
         match: /.+\@.+\..+/
     },
     role: {
    	 type: String,
    	 enum: ['Admin', 'Owner', 'User']
	 },
     username: { 
    	 type: String, 
    	 trim: true,
    	 unique: true,
    	 required: true
     },
     password: {
         type: String,
         validate: [
		           function(password) {
		             return password.length >= 6;
				   },
		           'Password should be longer'
		         ]
     },
     created: {
    	 type: Date,
    	 "default": Date.now
	 },
	 website: {
		 type: String,
		 set: function(url) {
			 if (!url) {
		        return url;
		      } else {
		        if (url.indexOf('http://') !== 0 
		        		&& url.indexOf('https://') !== 0) {
		        	url = 'http://' + url;
		        }
		        return url;
		      } 
		 },
		 get: function(url) {
		      if (!url) {
		    	  return url;
			  } else {
				  if (url.indexOf('http://') !== 0
						  && url.indexOf('https://') !== 0) {
				          	url = 'http://' + url;
				        }
				return url; 
			 }
		} 
	}
   });



	/**
	 * Usando Mongoose Middleware
	 * Usando Pre-middleware
	 * */
	UserSchema.pre('save', function(next) {
	    if (1==1) {
	    	console.log('Usando Pre-middleware.');
	    	next()
	    } else {
	    	next(new Error('An Error Occured'));
	    }
	});
	
	/**
	 * Usando Mongoose Middleware
	 * Usando Post-middleware
	 * */
	UserSchema.post('save', function(next) {
	     if(this.isNew) {
	       console.log('A new user was created.');
	     } else {
	       console.log('A user updated is details.');
	     }
	});

	UserSchema.virtual('fullName').get(function() {
	    return this.firstName + ' ' + this.lastName;
	}).set(function(fullName) {
		var splitName = fullName.split(' '); 
		this.firstName = splitName[0] || ''; 
		this.lastName = splitName[1] || '';
	});

   UserSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('User', UserSchema);