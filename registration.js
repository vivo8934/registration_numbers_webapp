module.exports = function(models) {

  const index = function(req, res, next){
models.RegisNumbers.find({}, function(err, results){
  if(err){
    return next(err);
  }
  else{
console.log(results);
    res.render('regNo/index', {regisNumber: results})
  }
})
  }


  const add = function(req, res, next) {
    var numberPlate = {
      name: req.body.plate
    };
if(!numberPlate || !numberPlate.name){
  req.flash('error', 'Please enter Registration Number');
  res.redirect('/reg_number');
}
    else {
models.RegisNumbers.create(numberPlate, function(err, results){

  if(err){
    if(err.code === 11000){
      req.flash('error', 'RegisNumbers already exits');
    }
    else{

      return next(err);
    }
  }
  req.flash('success', 'Registration Number added')
  res.redirect('/reg_number');
});
  }
}
  return {
    index,
    add
  }
}
