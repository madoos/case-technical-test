import mongoose from 'mongoose';
import loadClass from 'mongoose-class-wrapper';

var censusSchema = new mongoose.Schema({
      date: {type: Date, required: true},
      ts: {type: String, required: true},
      city: {type: String, required: true},
      population: [
        {
          age: {type: Number, required: true},
          count: {type: Number, required: true}
        }
      ]
    });

class censusPopulationModel {}

censusSchema.plugin(loadClass, censusPopulationModel);

export default mongoose.model('census-population', censusSchema);
