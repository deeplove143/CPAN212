// part1_modules/lab1.js
const _ = require('lodash');
const { differenceInDays, parseISO } = require('date-fns');

// 1. List of holiday objects
const holidays = [
  { name: 'New Year', date: '2025-01-01' },
  { name: 'Canada Day', date: '2025-07-01' },
  { name: 'Christmas', date: '2025-12-25' },
  { name: 'Labour Day', date: '2025-09-01' }
];

// 2. Iterate and print days until each holiday
const today = new Date();
holidays.forEach(h => {
  const holidayDate = parseISO(h.date);
  const daysAway = differenceInDays(holidayDate, today);
  console.log(`${h.name} is in ${daysAway} day(s)`);
});

// 3. Random holiday
const randomHoliday = _.sample(holidays);
console.log(`Random holiday: ${randomHoliday.name} (${randomHoliday.date})`);

// 4. Indexes of Christmas and Canada Day
const names = holidays.map(h => h.name);
const christmasIndex = _.indexOf(names, 'Christmas');
const canadaDayIndex = _.indexOf(names, 'Canada Day');
console.log(`Christmas index: ${christmasIndex}`);
console.log(`Canada Day index: ${canadaDayIndex}`);