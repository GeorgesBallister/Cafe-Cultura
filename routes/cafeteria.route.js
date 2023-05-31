const express = require('express');
const app = express();
const cafeteriaRoutes = express.Router();

let Cafeteria = require('../model/cafeteria');

// api to add cafeteria
cafeteriaRoutes.route('/add').post(function (req, res) {
  let cafeteria = new Cafeteria(req.body);
  cafeteria.save()
  .then(cafeteria => {
    res.status(200).json({'status': 'success','mssg': 'cafeteria added successfully'});
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
  });
});

// api to get cafeterias
cafeteriaRoutes.route('/').get(function (req, res) {
  Cafeteria.find(function (err, cafeterias){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','cafeterias': cafeterias});
    }
  });
});

// api to get cafeteria
cafeteriaRoutes.route('/cafeteria/:id').get(function (req, res) {
  let id = req.params.id;
  Cafeteria.findById(id, function (err, cafeteria){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','cafeteria': cafeteria});
    }
  });
});

// api to update route
cafeteriaRoutes.route('/update/:id').put(function (req, res) {
    Cafeteria.findById(req.params.id, function(err, cafeteria) {
    if (!cafeteria){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
        cafeteria.name = req.body.name;
        cafeteria.description = req.body.description;
        cafeteria.year = req.body.year;
        cafeteria.img = req.body.img;

        cafeteria.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});

// api for delete
cafeteriaRoutes.route('/delete/:id').delete(function (req, res) {
  Cafeteria.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
    }
  });
});

module.exports = cafeteriaRoutes;