import express from 'express';
import populationManager from '../manager/populationByAge';
const populationRouter = express.Router();

const populationController = {
  getPopulationByAge: (req, res) => {
    populationManager.getPopulationByAge( (err, data) =>{
      if(!err) res.status(200).json(data);
      else res.status(500).send(err);
    });
  }
};

populationRouter.get('/all/', populationController.getPopulationByAge);

export default populationRouter;
