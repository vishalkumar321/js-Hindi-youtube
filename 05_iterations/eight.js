const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
}, 0)

const myTotal1 = myNums.reduce( (acc,currval) => acc + currval, 0)
console.log(myTotal);
console.log(myTotal1);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    },
    {
        itemName : "web dev course",
        price : 4999
    },
]

const priceToPay = shoppingCart.reduce( (acc , item) => acc + item.price, 0)
console.log(priceToPay);
