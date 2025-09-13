function minDate(dates) {
  let min = dates[0]; // Start with the first date

  for (let i = 1; i < dates.length; i++) {
    if (dates[i] < min) {
      min = dates[i]; // Update if a smaller date is found
    }
  }

  return min;
}

alert(minDate(dates));
