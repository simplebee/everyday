import { schema } from 'normalizr';

export const datapointSchema = new schema.Entity(
  'datapoints',
  {},
  { idAttribute: '_id' }
);

export const habitSchema = new schema.Entity(
  'habits',
  { datapoints: [datapointSchema] },
  { idAttribute: '_id' }
);

export const habitListSchema = [habitSchema];
