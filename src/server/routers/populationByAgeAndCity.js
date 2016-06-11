import express from 'express';
import populationManager from '../manager/populationByAgeAndCity';
const populationRouter = express.Router();

const populationController = {
  makeFakeCensus: (req, res) => {
    populationManager.makeFakeCensus( (err, data) => {
      if(!err) res.status(200).send(data);
      else res.status(500).send(err);
    });
  }
};

populationRouter.get('/fakeensus/', populationController.makeFakeCensus);

export default populationRouter;
