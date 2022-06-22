// const numbers = [22, 5, 4, 18, 56, 90];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log("smallestNumber:", smallestNumber);

// const numbers = [22, 5, 4, 18, 56, 90, 400];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log("biggestNumber:", biggestNumber);

//

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let price;

//   price = message.split(" ").length * pricePerWord;

//   return price;

//   console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// }
// function calculateTotal(number) {
//   let total = 0;

//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
// }

// console.log(calculateTotal(9));

//
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }

// console.table(1, 3);
// console.table(4, 8);

// console.log(createArrayOfNumbers());

// function filterArray(numbers, value) {
//   // Change code below this line
//   let newArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }

//   return newArray;
// }
// // Change code above this line

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }
// console.log(checkFruit("apple"));

// function includes(array, value) {
//   // Change code below this line
//   for (const arr of array) {
//     if (arr === value) {
//       return true;
//     }
//     return false;
//   }
// }

// console.log(includes([1, 2, 3, 4, 5], 17));

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line
console.log(lastTag);
