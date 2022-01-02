var historyList = [];

const updateHistory = (x, y, clear) => {
  if (clear) historyList = [];

  if (!(isNaN(x) || isNaN(y) || x === 0 || y === 0))
    historyList.push(`${x} x ${y} = ${x * y}`);

  return historyList;
};

export default updateHistory;
