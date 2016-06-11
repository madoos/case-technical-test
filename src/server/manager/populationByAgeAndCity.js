import populationCensus from '../util/PopulationCensus';
import populationDao from '../dao/populationByAgeAndCity';

const populationManager = {
  makeFakeCensus: (onInsert) => {
    var data =  populationCensus.getFakeCensus();
    populationDao.makeFakeCensus(data, onInsert);
  }
};

export default populationManager;
