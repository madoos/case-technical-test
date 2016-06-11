import express from 'express';
import populationManager from '../manager/populationByCity';
const populationRouter = express.Router();

const populationController = {
  getPopulationByCity: (req, res) => {
    populationManager.getPopulationByCity((err, data) =>{
      if(!err) res.status(200).json(data);
      else res.send(500).send(err);
    });
  },
  getMaximunPopulation: (req, res) => {
    populationManager.getMaximunPopulation((err, data) =>{
        if(!err)res.status(200).json(data);
        else res.status(500).send(err);
    });
  },
  getMinimunPopulation: (req, res) => {
    populationManager.getMinimunPopulation((err, data) =>{
        if(!err)res.status(200).json(data);
        else res.status(500).send(err);
    });
  }
};

populationRouter.get('/all/', populationController.getPopulationByCity);
populationRouter.get('/max/',populationController.getMaximunPopulation);
populationRouter.get('/min/',populationController.getMinimunPopulation);

export default populationRouter;
