const mongoose = require('mongoose');
module.exports = function(mongoUrl){

mongoose.connect(mongoUrl)

const RegisNumbersSchema = mongoose.Schema({
    name: String,
    counter: Number
  });
  RegisNumbersSchema.index({
    name: 1,
  }, {
    unique: true
  });

const RegisNumbers = mongoose.model('RegisNumbers', RegisNumbersSchema);

return{
  RegisNumbers
};
}
