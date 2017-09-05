module.exports = function(models) {

const RegisList = [];


const addScreen = function(req, res){

res.render('regNo/index');
}

  const add = function(req, res) {
    var plate = req.body.plate;

    var RegistrationNo = {
      RegNo: plate.substr(0, 2).toUpperCase() + " " + plate.substr(2).toLowerCase()
    }

  var foundRegNo = RegisList.find(function(currentRegNo){

  return currentRegNo === RegistrationNo.RegNo;
    })
if(!RegistrationNo.RegNo){
  req.flash('error', 'Please enter Registration Number');
}
    else {
    if(!foundRegNo){
      RegisList.push(RegistrationNo.RegNo);
    }
    else{
      req.flash('error', 'cant add same registration number');
    }
  }
    res.render('regNo/index', {regisNumber: RegisList})

}

  return {
    addScreen,
    add
  }
}
