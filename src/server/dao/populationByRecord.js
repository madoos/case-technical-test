import populationModel from '../../model/PopulationCensus';

const populationDao = {
  getLastRecord: (callback) => {
    const popUnwind = {$unwind:'$population'};
    const totalPopByCityAndDate = {$group:{ _id: { city : '$city', date: '$date'}, totalPopulation : {$sum: '$population.count'}} };
    const upLastRecord =  {$sort:{ '_id.date' : -1}};
    const getLastRecord = {$group:{_id: '$_id.city', recordDate: {$first: '$_id.date'}, totalPopulation: {$first: '$totalPopulation'}} };
    const setFormat =  {$project:{  city: '$_id', recordDate: '$recordDate', totalPopulation:'$totalPopulation', _id: 0 }};
    const sortAlphabetically = {$sort:{city: 1}};

    const pipeline = [popUnwind, totalPopByCityAndDate, upLastRecord, getLastRecord, setFormat, sortAlphabetically];

    populationModel.aggregate(pipeline, callback);
  }
};

export default populationDao;
