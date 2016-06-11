import PopulationModel from '../../model/PopulationCensus';

const populationDao = {
  //falta
  getPopulationByCity: (callback) => {
    var unwindPopulation = {$unwind: '$population'};
    var sumPopulation = {$sum: '$population.count'};
    var totalPopulationByCity = {$group: { _id : '$city', totalPopulation: sumPopulation} };
    var sortResults = {$sort: {_id: 1}};
    var setFormat = {$project: {city: '$_id',totalPopulation: '$totalPopulation',  _id : 0  }};
    var pipeline = [unwindPopulation, totalPopulationByCity, sortResults, setFormat];

    PopulationModel.aggregate(pipeline, callback);
  },
  getMaximunPopulation: (callback) => {
    var unwindPopulation = {$unwind: '$population'};
    var sumPopulation = {$sum: '$population.count'};
    var totalPopulationByDateAndCity = {$group: {_id : { city: '$city', date: '$date'}, maximunPopulation: sumPopulation }};
    var sortDescending = { $sort: { maximunPopulation: -1 } };
    var getMaxVal = {$limit:1};
    var setFormat = {$project:{_id : 0, city: '$_id.city', date: '$_id.date', maximunPopulation: '$maximunPopulation'} };

    var pipeline = [unwindPopulation, totalPopulationByDateAndCity, sortDescending, getMaxVal, setFormat];

    PopulationModel.aggregate(pipeline, callback);
  }
};

export default populationDao;
