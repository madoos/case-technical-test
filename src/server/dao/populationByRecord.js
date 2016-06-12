import populationModel from '../../model/PopulationCensus';

const populationDao = {
  getLastRecord: (callback) => {
    const popUnwind = {$unwind:'$population'};
    const totalPopLastRecord = {$group:{_id:{city: '$city', age:'$population.age', date:'$date'},
                                    totalPopulation:{$sum: '$population.count'}, lastRecord: {$max: '$date'}} };
    const setFormat = {$project:{ city: '$_id.city', age: '$_id.age', lastRecord: '$lastRecord', totalPopulation: '$totalPopulation', _id: 0} };
    const sortAscending = {$sort: {city: 1, age:1}};

    const pipeline = [popUnwind, totalPopLastRecord, setFormat, sortAscending];

    populationModel.aggregate(pipeline, callback);
  }
};

export default populationDao;
