import PopulationModel from '../../model/PopulationCensus';

const populationDao = {
  getPopulationByAge: (callback) => {
    PopulationModel.find({},callback);
  }
};

export default populationDao;
