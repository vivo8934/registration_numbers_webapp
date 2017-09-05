const assert = require('assert');
const Models = require('../models');
describe('models should be able to', function(){

  var models = Models('mongodb://localhost/registrations-test')
beforeEach(function(done){
models.registrationnos.remove({}, function(){
done(err);
});
})

it('Store RegistrationNo to MongoDB', function(done){

var RegNoData = {name : 'The test Regis'};
models.RegistrationNo
.create(RegNoData, function(err){

done(err);

models.registrationnos.find({name : 'The test Regis'}, function(err, regisNo){
assert.equal(1,regisNo.length);
done(err);
});
})
})
});
