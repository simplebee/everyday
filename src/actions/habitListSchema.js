import { schema } from 'normalizr';

const datapointSchema = new schema.Entity(
  'datapoints',
  {},
  { idAttribute: '_id' }
);

const habitSchema = new schema.Entity(
  'habits',
  { datapoints: [datapointSchema] },
  { idAttribute: '_id' }
);

export const habitListSchema = [habitSchema];
