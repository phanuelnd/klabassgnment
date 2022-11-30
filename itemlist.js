
// 1 . Filter and show the product that will be bought when you don't have much money I mean Cheap one
// 2 . Filter and show the product that will be expensive in the array
// 3 . Calculate the full price of all product combined
// 4 . Calculate the full price of all product combined and remove product that are under the 10 dollar

const item = [
     {name: 'Bike', price:100},
{name: 'TV', price:200}, 
{name: 'Album', price:10}, 
{name: 'Book', price:5},
 {name: 'Phone', price:500},
  {name: 'Computer', price:1000},];

  //Minimum Price in this Array 
var minPrice = Math.min(...item.map(item => item.price));

console.log("Cheap Product  Price is : " + minPrice + "$");

var maxPrice = Math.max(...item.map(item => item.price));
console.log("Expensive Product Price is : " + maxPrice + "$");
  
//full price of all products combined
const totalPrice = item.reduce((a, b)=> a + b.price,0); 
console.log("Total Price of All items Combined is = " + totalPrice + "$");

//Sorted Price 

const hasInexpensiveItems = item.some((item) => {
    return item.price <10;
})

const lessthan10 = item.filter((item) => {
    return item.price < 10;
})
console.log(lessthan10);


