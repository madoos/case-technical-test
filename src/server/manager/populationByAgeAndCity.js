import populationDao from '../dao/populationByAgeAndCity';

const populationManager = {
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
