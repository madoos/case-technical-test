import populationDao from '../dao/populationByAge';

const populationManager = {
  getPopulationByAge: (callback) => {
    populationDao.getPopulationByAge(callback);
  }
};

export default populationManager;
