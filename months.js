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
  //console.log('Downloading: ' + episode);
  return names[monthNumber];
};