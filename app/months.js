var month = exports;

var names = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

month.name = function(monthNumber) {
  return names[monthNumber];
};
month.number = function(monthName) {
  return names.indexOf(monthName);
}