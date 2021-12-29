const updateHistory = (x, y) => {

    return (isNaN(x) || isNaN(y)) ? "" : (`${x} x ${y} = ${x * y}`);
};

export default updateHistory;
