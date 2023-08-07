// var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// Insert 9 to index 3 
// arr[3] = 9

// Insert 9 to last Index
// arr.push(9)  

// Insert 9 to First Index
// arr.unshift(9)

// Insert 9 to index 3 withut replace
// arr.splice(3, 0, 9, 10)


/* HOW TO REMOVE A ITEM FROM ARRAY */

// make undefine index 3 
// arr[3] = undefined

// Remove last index item 
// arr.pop()

// Remove First index item
// arr.shift()

// Remove index 2 item 
// arr.splice(2, 1)


var arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log ( arr );
arr.splice(4, 0, 99);
console.log(arr);
arr.splice(4, 1);
console.log(arr);


