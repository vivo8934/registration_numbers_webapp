const mongoose = require('mongoose');
module.exports = function(mongoUrl){

  mongoose.connect(mongoUrl);

  const RegistrationNo = mongoose.model('RegistrationNo', {name : String});

  return{
    RegistrationNo
  }
}
