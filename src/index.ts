// See: http://stackoverflow.com/questions/3143070/javascript-regex-iso-datetime
export const isoDateRegExp = new RegExp(
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
);

export class InvalidISODateError extends Error {}

export function isISODate(str: string): boolean {
  return isoDateRegExp.test(str);
}

export function assertISODate(str: string): string {
  if (!isISODate(str)) {
    throw new InvalidISODateError(`Invalid ISO date: ${str}`);
  }

  return str;
}
