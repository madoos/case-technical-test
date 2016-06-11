import express from 'express';
import populationManager from '../manager/populationByAgeAndCity';
const populationRouter = express.Router();

const populationController = {
  makeFakeCensus: (req, res) => {
    populationManager.makeFakeCensus( (err, data) => {
      if(!err) res.status(200).json(data);
      else res.status(500).send(err);
    });
  }
};

populationRouter.get('/make/fakecensus/', populationController.makeFakeCensus);

export default populationRouter;