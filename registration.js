module.exports = function(models) {

  const index = function(req, res, next) {
    models.RegisNumbers.find({}, function(err, results) {
      if (err) {
        return next(err);
      } else {
        //console.log(results);
        res.render('regNo/index', {
          regisNumber: results
        })
      }
    })
  }


  const add = function(req, res, next) {
    var numberPlate = {
      name: (req.body.plate).substr(0, 2).toUpperCase() + ' ' + (req.body.plate).substr(2).toLowerCase()
    };
  //  console.log(numberPlate.name);
    if (!numberPlate || !numberPlate.name) {
      res.redirect('/reg_number');
      req.flash('error', 'Please enter Registration Number');
    } else {
      models.RegisNumbers.create(numberPlate, function(err, results) {

        if (err) {
          if (err.code === 11000) {
            req.flash('error', 'You Can Only Add one Registration Number');
          } else {

            return next(err);
          }
        }
        req.flash('success', 'Registration Number added')
        res.redirect('/reg_number');
      });
    }
  }
  const regFilter = function(req, res) {

    var towns = req.body.Town

if(towns === 'All'){
  res.redirect('/reg_number');
}
else{
    var regEx = ".*/" + towns
    models.RegisNumbers.find({name:{'$regex': ".*" + towns,$options:'i'}},function(err,results) {
        if (err) {
          return next(err);
        }
        res.render('regNo/index', {
          regisNumber: results
        })
      })
  }
}
  return {
    index,
    add,
    regFilter
  }
}
