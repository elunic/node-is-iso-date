import * as Joi from '@hapi/joi';

import { assertISODate } from '..';

describe('assertISODate', () => {
  describe('with @hapi/joi', () => {
    it('should fail schema validation for invalid date', async () => {
      const schema = Joi.string()
        .custom(assertISODate)
        .required();

      try {
        Joi.attempt('2020-01-01 01:01:01', schema);
        throw new Error('should not be thrown');
      } catch (err) {
        expect(err.message).not.toEqual('should not be thrown');
      }
    });
  });
});
