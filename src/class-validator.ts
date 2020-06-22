// tslint:disable:no-any
// tslint:disable:no-unused-vars

import { isISO8601, registerDecorator, ValidationArguments } from 'class-validator';

import { isISODate } from './is-iso-date';

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
