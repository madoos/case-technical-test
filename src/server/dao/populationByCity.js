import PopulationModel from '../../model/PopulationCensus';

const populationDao = {
  getPopulationByCity: (callback) => {
    const popUnwind = {$unwind: '$population'};
    const totalPopByCityAndDate = {$group: {_id: {date:'$date', city: '$city'}, totalPopulation:{$sum:'$population.count'} }  };
    const setFormat = {$project:{city: '$_id.city', date: '$_id.date', totalPopulation: '$totalPopulation',  _id: 0}};
    const sortAlphabetically = {$sort: { city: 1}};

    const pipeline = [popUnwind, totalPopByCityAndDate, setFormat, sortAlphabetically];

    PopulationModel.aggregate(pipeline, callback);
  },
  getMaximunPopulation: (callback) => {
    const popUnwind = {$unwind: '$population'};
    const totalPopByCityAndDate = {$group: {_id: {date:'$date', city: '$city'}, totalPopulation:{$sum:'$population.count'} }  };
    const getMaxPopulations = {$group: {_id:'$_id.city', maxPopulation:{$max:'$totalPopulation' } } };
    const setFormat = {$project: {city: '$_id', maxPopulation:'$maxPopulation', _id: 0} };
    const sortAlphabetically = {$sort: { city: 1}};

    const pipeline = [popUnwind, totalPopByCityAndDate, getMaxPopulations, setFormat, sortAlphabetically];

    PopulationModel.aggregate(pipeline, callback);
  },
  getMinimunPopulation: (callback) => {
    const popUnwind = {$unwind: '$population'};
    const totalPopByCityAndDate = {$group: {_id: {date:'$date', city: '$city'}, totalPopulation:{$sum:'$population.count'} }  };
    const getMinPopulations = {$group: {_id:'$_id.city', maxPopulation:{$min:'$totalPopulation' } } };
    const setFormat = {$project: {city: '$_id', maxPopulation:'$maxPopulation', _id: 0} };
    const sortAlphabetically = {$sort: { city: 1}};

    const pipeline = [popUnwind, totalPopByCityAndDate, getMinPopulations, setFormat, sortAlphabetically];

    PopulationModel.aggregate(pipeline, callback);
  }
};

export default populationDao;
