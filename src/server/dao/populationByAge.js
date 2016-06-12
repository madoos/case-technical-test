import PopulationModel from '../../model/PopulationCensus';

const populationDao = {
  getPopulationByAge: (callback) => {
    const popUnwind = {$unwind: '$population'};
    const totalPopByAge = { $group: { _id: { date: '$date' , age:'$population.age' }, totalPopulation: { $sum: '$population.count' } } };
    const setFormat = {$project:{ date:'$_id.date', age: '$_id.age' , totalPopulation: '$totalPopulation', _id: 0 } };
    const sortByAgeAscending = {$sort: { age:1 }};

    const pipeline = [popUnwind, totalPopByAge, setFormat, sortByAgeAscending];

    PopulationModel.aggregate(pipeline ,callback);
  },
  getMaximunPopulation: (callback) => {
    const popUnwind = {$unwind: '$population'};
    const totalPopByAge = {$group: {_id: {date:'$date', age: '$population.age'}, totalPopulation:{$sum:'$population.count'} }  };
    const getMaxPopulations = {$group: {_id:'$_id.age', maxPopulation:{$max:'$totalPopulation' } } };
    const setFormat = {$project: {age: '$_id', maxPopulation:'$maxPopulation', _id: 0} };
    const sortByAgeAscending = {$sort: { age: 1}};

    const pipeline = [popUnwind, totalPopByAge, getMaxPopulations, setFormat, sortByAgeAscending];

    PopulationModel.aggregate(pipeline ,callback);
  },
  getMinimunPopulation: (callback) => {
    const popUnwind = {$unwind: '$population'};
    const totalPopByAge = {$group: {_id: {date:'$date', age: '$population.age'}, totalPopulation:{$sum:'$population.count'} }  };
    const getMinPopulations = {$group: {_id:'$_id.age', minPopulation:{$min:'$totalPopulation' } } };
    const setFormat = {$project: {age: '$_id', minPopulation:'$minPopulation', _id: 0} };
    const sortByAgeAscending = {$sort: { age: 1}};

    const pipeline = [popUnwind, totalPopByAge, getMinPopulations, setFormat, sortByAgeAscending];

    PopulationModel.aggregate(pipeline ,callback);
  },
  getPopulationAverage: (callback) => {
    const popUnwind = {$unwind: '$population'};
    const totalPopByAge = { $group: { _id: { date: '$date' , age:'$population.age' }, totalPopulation: { $sum: '$population.count' } } };
    const avgAgePopulationByAge = { $group: { _id: '$_id.age', avgPopulation: { $avg: '$totalPopulation' } } };
    const setFormat = {$project:{age: '$_id', avgPopulation: '$avgPopulation', _id: 0}};
    const sortByAgeAscending = {$sort:{age: 1}};

    const pipeline = [popUnwind, totalPopByAge, avgAgePopulationByAge, setFormat, sortByAgeAscending];

    PopulationModel.aggregate(pipeline ,callback);
  }
};

export default populationDao;
