console.log("working...");

//Method :- Creating and assaigning the values to the array

let names=["Ribhu","Lakhwi","Kiran","Riya","Supriya"];

console.log(names);

//Method 2 :- Creating Array and after assigning the values.

let names2=[];

names2[0]="Rudof";
names2[1]="Kuldheep";
names2[3]=1;
names2[4]=2;
console.log(names2);

//Method 3 :- Creating Array using Array constructor.

let names3 = new Array("Ribhu","Lakhwi","Kiran","Riya","Supriya");
console.log(names2);

let names4=[];

names4[0]="Kusuma krishna";
names4[1]=21;
names4[2]=6303625685;
names4[3]=true;

console.log(names4);

// Push,pop,shift,unshift,Length,indexOf,LeastIndexOf

//push - adds  the elements at the last position only.


names.push(1);
names.push(2);
names.push(3);
console.log(names);

//Pop - Removing the elements from last position

names.pop();
console.log(names);

//Shift - removes the elements from the first position 
//unshift - adds the elements to the first position

names2.shift();
console.log(names2);
names2.unshift("abc");
console.log(names2);


//Length - gives the length of the array.


console.log(names.length);

//indexOf, LastIndexOf, join, contact, sort, slice,splice.

let num1=[1,2,3,4,5,5];
let num2=[6,7,8,9];
console.log(num1.indexOf(5));
console.log(num1.lastIndexOf(5));

//concat / join stores in another array not effect the original array.

console.log(num1.concat(num2));
console.log(num1.join("*"));

//Reverse - reverse the given array.


console.log(num1.reverse());
//sort - changes original array.
console.log(num1.sort());
console.log(names.sort());

//Using sort followed by reverse gives u values arranged in decending order.
console.log(names.sort().reverse());

// splice, slice

//splice - the first value gives the index number and second number gives the values to be removed and remaining are values to be added.
let num=[1,2,3,4,5,6,7,8];
// num.splice(2,2,9,8,7);
console.log(num.splice(2,2,8,9,7));

//slice - Starting index is inclusive and end index is exclusive i.e., not included.
// num.slice(2,6);
// console.log(num.slice(2,6));















