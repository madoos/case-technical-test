import PopulationModel from '../../model/PopulationCensus';

const populationDao = {
  getPopulationByAgeAndCity: (callback) => {
    const popUnwind = {$unwind: '$population'};
    const totalPopByAgeAndCity = { $group: { _id: { date: '$date' , age:'$population.age', city: '$city' }, totalPopulation: { $sum: '$population.count' } } };
    const setFormat = {$project:{ date:'$_id.date', age: '$_id.age', city:'$_id.city' , totalPopulation: '$totalPopulation', _id: 0 } };
    const sortAscending = {$sort: { age:1 , city:1 }};

    const pipeline = [popUnwind, totalPopByAgeAndCity, setFormat, sortAscending];

    PopulationModel.aggregate(pipeline ,callback);
  },
  getMaximunPopulation: (callback) => {
    const popUnwind = {$unwind: '$population'};
    const totalPopByAgeAndCity = {$group: {_id: {date:'$date', age: '$population.age', city: '$city'}, totalPopulation:{$sum:'$population.count'} }  };
    const getMaxPopulations = {$group: {_id:{age: '$_id.age', city: '$_id.city'}, maxPopulation:{$max:'$totalPopulation' } } };
    const setFormat = {$project: {age: '$_id.age', city: '$_id.city', maxPopulation:'$maxPopulation', _id: 0} };
    const sortAscending = {$sort: { age:1 , city:1 }};

    const pipeline = [popUnwind, totalPopByAgeAndCity, getMaxPopulations, setFormat, sortAscending];

    PopulationModel.aggregate(pipeline ,callback);

  },
  getMinimunPopulation: (callback) => {
    const popUnwind = {$unwind: '$population'};
    const totalPopByAgeAndCity = {$group: {_id: {date:'$date', age: '$population.age', city: '$city'}, totalPopulation:{$sum:'$population.count'} }  };
    const getMinPopulations = {$group: {_id:{age: '$_id.age', city: '$_id.city'}, minPopulation:{$min:'$totalPopulation' } } };
    const setFormat = {$project: {age: '$_id.age', city: '$_id.city', minPopulation:'$minPopulation', _id: 0} };
    const sortAscending = {$sort: { age: 1 , city:1 }};

    const pipeline = [popUnwind, totalPopByAgeAndCity, getMinPopulations, setFormat, sortAscending];

    PopulationModel.aggregate(pipeline ,callback);
  },
  getPopulationAverage: (callback) => {
    const popUnwind = {$unwind: '$population'};
    const totalPopulation = { $group: { _id: { city: '$city', date: '$date' , age:'$population.age' }, totalPopulation: { $sum: '$population.count' } } };
    const avgAgePopulationByAgeAndCity = { $group: { _id: {age: '$_id.age', city: '$_id.city'}, avgPopulation: { $avg: '$totalPopulation' } } };
    const setFormat = {$project:{ city: '$_id.city',age:'$_id.age', avgPopulation: '$avgPopulation', _id: 0}};
    const sortByAgeAscending = {$sort:{age: 1, city: 1}};
    const pipeline = [popUnwind, totalPopulation, avgAgePopulationByAgeAndCity, setFormat, sortByAgeAscending];

    PopulationModel.aggregate(pipeline ,callback);
  }
};

export default populationDao;
