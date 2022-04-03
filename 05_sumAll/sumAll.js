const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if (start < 0 || end < 0) return "ERROR";
    if (start > end) {
      const temp = start;
      start = end;
      end = temp;
    }
    let sum = 0;
    for(let val = start; val <= end; val++)
        sum += val;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
