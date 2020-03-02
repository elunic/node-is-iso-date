import { validate } from 'class-validator';

import { IsStrictISO8601 } from '.';

class TestClass1 {
  @IsStrictISO8601()
  date: string;

  constructor(date: string) {
    this.date = date;
  }
}

describe('@IsStrictISO8601()', () => {
  it('should work', async () => {
    const instance = new TestClass1(new Date().toISOString());

    const errors = await validate(instance);
    expect(errors.length).toBe(0);
  });

  it('should return an error for invalid (strict) dates', async () => {
    const instance = new TestClass1('2020-01-01 01:01:01');

    const errors = await validate(instance);
    expect(errors.length).toBe(1);
  });

  it('should return an error for out of range dates', async () => {
    const instance = new TestClass1('2020-02-30 01:01:01');

    const errors = await validate(instance);
    expect(errors.length).toBe(1);
  });
});
