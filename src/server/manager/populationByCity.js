import populationDao from '../dao/populationByCity';

const populationManager = {
  getPopulationByCity: (callback) => {
    populationDao.getPopulationByCity(callback);
  },
  getMaximunPopulation: (callback) => {
    populationDao.getMaximunPopulation(callback);
  }
};

export default populationManager;
