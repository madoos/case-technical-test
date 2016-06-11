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
  }
};

export default populationManager;
