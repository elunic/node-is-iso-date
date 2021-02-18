import { isISO8601, registerDecorator, ValidationArguments } from 'class-validator';

import { isISODate } from './is-iso-date';

export function IsStrictISO8601() {
  return (object: typeof Object.prototype, propertyName: string) => {
    registerDecorator({
      name: 'isStrictISO8601',
      target: object.constructor,
      propertyName,
      validator: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, unused-imports/no-unused-vars-ts
        validate(value: any, args: ValidationArguments) {
          return (
            typeof value === 'string' && isISODate(value) && isISO8601(value, { strict: true })
          );
        },
      },
    });
  };
}
