import PopulationModel from '../../model/PopulationCensus';

const populationDao = {
  getPopulationByAge: (callback) => {
    const popUnwind = {$unwind: '$population'};
    const totalPopByAge = { $group: { _id: { city: '$city', date: '$date' , age:'$population.age' }, totalPopulation: { $sum: '$population.count' } } };
    const setFormat = {$project:{city: '$_id.city', date:'$_id.date', age: '$_id.age' , totalPopulation: '$totalPopulation', _id: 0 } };
    const sortByAge = {$sort: { age:1 }};

    const pipeline = [popUnwind, totalPopByAge, setFormat, sortByAge];

    PopulationModel.aggregate(pipeline ,callback);
  }
};

export default populationDao;
