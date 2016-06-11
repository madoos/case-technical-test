import populationDao from '../dao/populationByRecord';

const populationManager = {
  getLastRecord: (callback) => {
    populationDao.getLastRecord(callback);
  }
};

export default populationManager;
