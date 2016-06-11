import PopulationModel from '../../model/PopulationCensus';

const populationDao = {
  makeFakeCensus: (data, onInsert) => {
    PopulationModel.collection.insert(data, onInsert);
  }
};

export default populationDao;
