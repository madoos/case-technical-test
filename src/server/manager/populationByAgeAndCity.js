import populationCensus from '../util/PopulationCensus';
import populationDao from '../dao/populationByAgeAndCity';

const populationManager = {
  makeFakeCensus: (onInsert) => {
    var data =  populationCensus.getFakeCensus();
    populationDao.makeFakeCensus(data, onInsert);
  },
  getPopulationByAgeAndCity: (callback) => {
    populationDao.getPopulationByAgeAndCity(callback);
  },
  getMaximunPopulation: (callback) => {
    populationDao.getMaximunPopulation(callback);
  },
  getMinimunPopulation: (callback) => {
    populationDao.getMinimunPopulation(callback);
  },
  getPopulationAverage: (callback) => {
    populationDao.getPopulationAverage(callback);
  }
};

export default populationManager;
