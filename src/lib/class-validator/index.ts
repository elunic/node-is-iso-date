// tslint:disable:no-any
// tslint:disable:no-unused-vars

import { registerDecorator, ValidationArguments } from 'class-validator';
import { isISO8601 } from 'validator';

import { isISODate } from '../..';

export function IsStrictISO8601() {
  return (object: {}, propertyName: string) => {
    registerDecorator({
      name: 'isStrictISO8601',
      target: object.constructor,
      propertyName,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return (
            typeof value === 'string' && isISODate(value) && isISO8601(value, { strict: true })
          );
        },
      },
    });
  };
}
