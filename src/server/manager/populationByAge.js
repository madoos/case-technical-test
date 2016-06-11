import populationDao from '../dao/populationByAge';

const populationManager = {
  getPopulationByAge: (callback) => {
    populationDao.getPopulationByAge(callback);
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
