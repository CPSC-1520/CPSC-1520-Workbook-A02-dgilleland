import { it, expect } from 'vitest';
import { epochToDate } from './index.js';

it('should have at least one test', () => {});

// NOTE: The following tests are rather "fragile" because they depend on the current locale being Mountain Standard Time (GMT-0700).
it.each([
    [0, 'Wed Dec 31 1969 17:00:00 GMT-0700 (Mountain Standard Time)'],
    [1699732800, 'Sat Nov 11 2023 13:00:00 GMT-0700 (Mountain Standard Time)']
])('should convert epoch to date', (givenEpoch, expectedDate) => {
    // Arrange
    // (see the parameterized data above)
    // Act
    const actualDate = epochToDate(givenEpoch);
    // Assert
    expect(actualDate.toString()).toBe(expectedDate);
});