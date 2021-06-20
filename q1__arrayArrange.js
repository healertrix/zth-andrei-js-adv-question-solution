// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
//sorts in groups(main func)
export let arr = (arr) => {
  arr1 = sorter(arr);
  let res = [];

  for (const item of arr1) {
    res.push(grouper(arr1, item));
  }
  let resultFinal = uniqBy(res, JSON.stringify);
  return resultFinal;
};
//grouping each element
let grouper = (arr, criteria) => {
  let dirtyArray = arr.map((x) => {
    if (x === criteria) {
      return x;
    }
  });

  let cleanArray = filterer(dirtyArray);
  return cleanArray;
};
//removes undef values
let filterer = (arr) => {
  return arr.filter((x) => {
    if (x !== undefined) {
      return x;
    }
  });
};
//returns only unique groups
function uniqBy(a, key) {
  var seen = {};
  return a.filter(function (item) {
    var k = key(item);
    return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  });
}
//sorts array in assending
let sorter = (arr) => {
  return arr.sort(function (a, b) {
    return a - b;
  });
};

let e = arr(array);
console.log(e);
