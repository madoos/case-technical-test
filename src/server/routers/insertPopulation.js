import express from 'express';
import populationManager from '../manager/insertPopulation';
const populationRouter = express.Router();

const populationController = {
  addCensus: (req, res) => {
    var newCensus = req.body;

    populationManager.addCensus(newCensus, (err, data) => {
      if(!err) res.status(200).json(data);
      else res.status(500).send(err);
    });
  },
  makeFakeCensus: (req, res) => {
    populationManager.makeFakeCensus( (err, data) => {
      if(!err) res.status(200).json(data);
      else res.status(500).send(err);
    });
  }
};

populationRouter.post('/census/', populationController.addCensus);
populationRouter.get('/fakecensus/', populationController.makeFakeCensus);

export default populationRouter;
