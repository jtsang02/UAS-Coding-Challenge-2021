const createArray = (index_y, index_x) => {
  
  var n = 15;
  var th_x = 1, th_y = 1;

  const mainArray = new Array(n + 1); // create 1d array

  for (var z = 0; z < mainArray.length; z++) // loop to create 2d array from 1d array
    mainArray[z] = new Array(n + 1);

  for (var x = 0; x < n + 1; x++)   // fill 2d array
    for (var y = 0; y < n + 1; y++)
      (index_x === x && index_y === y) ? mainArray[x][y] = x * y : mainArray[x][y] = "";

  mainArray[0][0] = "X"; // fill (0,0) with char X

  for (var i = 1; i < mainArray.length; i++) {    // fill x value headers
    mainArray[0][i] = th_x;
    th_x++;
  }

  for (var j = 1; j < mainArray.length; j++) {    // fill y value headers
    mainArray[j][0] = th_y;
    th_y++;
  }

return mainArray;

};

export default createArray;