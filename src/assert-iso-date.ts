import { InvalidISODateError } from './invalid-iso-date-error';
import { isISODate } from './is-iso-date';

export function assertISODate(str: string): string {
  if (!isISODate(str)) {
    throw new InvalidISODateError(`Invalid ISO date: ${str}`);
  }

  return str;
}
