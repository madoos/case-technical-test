import express from 'express';
import populationManager from '../manager/populationByAgeAndCity';
const populationRouter = express.Router();

const populationController = {
  makeFakeCensus: (req, res) => {
    populationManager.makeFakeCensus( (err, data) => {
      if(!err) res.status(200).json(data);
      else res.status(500).send(err);
    });
  },
  getPopulationByAgeAndCity: (req, res) => {
    populationManager.getPopulationByAgeAndCity( (err, data) => {
      if(!err) res.status(200).json(data);
      else res.status(500).send(err);
    });
  },
  getMaximunPopulation: (req, res) => {
    populationManager.getMaximunPopulation( (err, data) => {
      if(!err) res.status(200).json(data);
      else res.status(500).send(err);
    });
  },
  getMinimunPopulation: (req, res) => {
    populationManager.getMinimunPopulation( (err, data) => {
      if(!err) res.status(200).json(data);
      else res.status(500).send(err);
    });
  },
  
  getPopulationAverage: (req, res) => {
    populationManager.getPopulationAverage( (err, data) => {
      if(!err) res.status(200).json(data);
      else res.status(500).send(err);
    });
  }
};

populationRouter.get('/make/fakecensus/', populationController.makeFakeCensus);

populationRouter.get('/all/', populationController.getPopulationByAgeAndCity);
populationRouter.get('/max/', populationController.getMaximunPopulation);
populationRouter.get('/min/', populationController.getMinimunPopulation);
populationRouter.get('/average/', populationController.getPopulationAverage);


export default populationRouter;
