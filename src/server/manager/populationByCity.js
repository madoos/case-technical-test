import populationDao from '../dao/populationByCity';

const populationManager = {
  getPopulationByCity: (callback) => {
    populationDao.getPopulationByCity(callback);
  },
  getMaximunPopulation: (callback) => {
    populationDao.getMaximunPopulation(callback);
  },
  getMinimunPopulation: (callback) => {
      populationDao.getMinimunPopulation(callback);
  },
  getAveragePopulation: (callback) => {
    populationDao.getAveragePopulation(callback);
  }
};

export default populationManager;
