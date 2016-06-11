import express from 'express';
import populationManager from '../manager/populationByRecord';
const populationRouter = express.Router();

const populationController = {
  getLastRecord: (req, res) => {
    populationManager.getLastRecord( (err, data) => {
      if(!err) res.status(200).json(data);
      else res.status(500).send(err);
    });
  }
};

populationRouter.get('/last/', populationController.getLastRecord);

export default populationRouter;
