//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

nums1.sort(function(a, b){return a - b});
console.log(nums1);
nums2.sort(function(a, b){return a - b});
console.log(nums2);
nums3.sort(function(a, b){return a - b});
console.log(nums3);


//Sort each array in decending order.

nums1.sort(function(a, b){return b - a});
console.log(nums1);
nums2.sort(function(a, b){return b - a});
console.log(nums2);
nums3.sort(function(a, b){return b - a});
console.log(nums3);

//Does the function alter the array?
// (My Answer): The sort function alters the order of the elements in the array every time it's called

//Did your sorting function from part B alter the arrays?
/* (My Answer): My function from part B alters the arrays by removing the elements as asked by the studio. 
So when you go to log the original array again it will be empty */