export function compare(employee1, employee2) {
  if (employee1.lastName < employee2.lastName) {
    return -1;
  }
  if (employee1.lastName > employee2.lastName) {
    return 1;
  }
  return 0;
}

export function reformatDate(dateString) {
  
  var datePart = dateString.match(/\d+/g),
    year = datePart[0],
    month = datePart[1],
    day = datePart[2];

  return day + "/" + month + "/" + year;
}
