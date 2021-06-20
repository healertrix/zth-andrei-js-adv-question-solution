// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]


let sumFinder = (arr, target) => {
   for (let index = 0; index < arr.length; index++) {
      for (let j = index+1; j < arr.length; j++) {
         if (arr[index] + arr[j] === target) {
            return [arr[index], arr[j]];
        }
      }
      
   }
}

let result = sumFinder([ 4,2, 3,4,7], 8);
console.log(result);