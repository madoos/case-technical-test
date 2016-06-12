import populationModel from '../../model/PopulationCensus';

const populationDao = {
  addCensus: (data, callback) => {
    var censusModel = new populationModel(data);
    censusModel.save(callback);
  },
  makeFakeCensus: (data, callback) => {
    PopulationModel.collection.insert(data, callback);
  }
};

export default populationDao;
