import populationDao from '../dao/insertPopulation';
import populationCensus from '../util/PopulationCensus';

const populationManager = {
  addCensus: (census, callback) => {
    //FILTER CENSUS ...
    census.ts = populationCensus.isoDateToTimeStamp(census.date);
    populationDao.addCensus(census, callback);
  },
  makeFakeCensus: (callback) => {
    var data =  populationCensus.getFakeCensus();
    populationDao.makeFakeCensus(data, callback);
  },
};

export default populationManager;
