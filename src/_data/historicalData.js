/* eslint-disable */
export const countHistoricalAll = Array.from({ length: 30 }, () => Math.floor(Math.random() * 50) + 50);

export const countHistoricalCountry = Array.from({ length: 30 }, () => Math.floor(Math.random() * 5) + 5);

export const datesHistorical = ([...Array(30).keys()].map(x => x + 1));
