const assert = require('assert');
const Models = require( '../models');
describe('models should be able to', function(){

  var models = Models('mongodb://localhost/registrations-tests');

// beforeEach(function(done) {
//   models.RegisNumbers.remove({}, function(err) {
//
//     done(err);
//   })
// })
  it('Store registrationNo to mongoDB', function(done){

var regisData = { name : 'The Test RegisNumbers'};
models.RegisNumbers
.create(regisData, function(err){
//done(err);

models.RegisNumbers.find({ name : 'The Test RegisNumbers'}, function(err, regisnumbers){

  assert.equal(1,regisnumbers.length);
  done(err);
});
});
  })
it('Should not Allow Duplicates of RegisNumbers', function(done){
  var regisData = { name : 'The Test RegisNumbers'};
  models.RegisNumbers.create(regisData, function(err){
assert.ok(err, 'Should give an error for duplicates regisnumbers');
done();
})
});
})
