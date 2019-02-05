const carModel = require('../models/cars');

module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  carModel.findById(req.params.carId, function(err, carInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Car found!!!", data:{cars: carInfo}});
   }
  });
 },

getAll: function(req, res, next) {
  let carsList = [];

carModel.find({}, function(err, cars){
   if (err){
    next(err);
   } else{
    for (let car of cars) {
     carsList.push({id:car._id, Make: car.Make, Model: car.Model, Color: car.color});
    }
    res.json({status:"success", message: "Cars list found!!!", data:{cars: carsList}});
       
   }

});
 },

updateById: function(req, res, next) {
  carModel.findByIdAndUpdate(req.params.carId,{Make:req.body.Make, Model:req.body.Model, Color:req.body.Color}, function(err, carInfo){

if(err)
    next(err);
   else {
    res.json({status:"success", message: "Car updated successfully!!!", data:null});
   }
  });
 },

deleteById: function(req, res, next) {
  carModel.findByIdAndRemove(req.params.carId, function(err, carInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Car deleted successfully!!!", data:null});
   }
  });
 },

create: function(req, res, next) {
  carModel.create({ Make: req.body.Make, Model: req.body.Model, Color: req.body.Color }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Car added successfully!!!", data: null});
      
    });
 },

}