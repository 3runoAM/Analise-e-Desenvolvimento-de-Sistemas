const resA = hoursToSeconds(1);
console.log(resA);

const resB = hoursToSeconds(24);
console.log(resB);

function hoursToSeconds(nHours) {
  return nHours * 3600;
}