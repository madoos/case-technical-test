import populationModel from '../../model/PopulationCensus';

const populationDao = {
  addCensus: (data, callback) => {
    var censusModel = new populationModel(data);
    censusModel.save(callback);
  },
  makeFakeCensus: (data, callback) => {
    populationModel.collection.insert(data, callback);
  }
};

export default populationDao;
