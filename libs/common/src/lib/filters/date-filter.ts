import { DateUtils } from '@holoplot/core/utils/date-utils';

export const CdkDateFilterConstants = Symbol.for('cdk-date');

/**
 * Date filter by utils.
 *
 * @param {string} date
 * @param {string} pattern
 * @returns {(Date | null)}
 */
export const CdkDateFilter: (date: string, pattern: string) => string | null = (
  date: string,
  pattern: string,
): string | null => {
  return DateUtils.parse(date, pattern);
};
