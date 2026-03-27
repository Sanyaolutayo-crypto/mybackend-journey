console.log("Cache program is running...");
const cache = new Map();
cache.set("user1", { name:"sanyaolutayo-crypto"});
console.log(cache.get("user1"));




// userCache with map
const userCache = new map();
//add users
usersCache.set(1, { name:"Temitayo", age:20});
userCache.set(2, { name:"john", age: 25 });

//get user
console.log(userCache.get(1));
//check if exist
console.log(userCache.has(2));
//deletCache through cache
userCache.forEach((uesr, id) =>{console.log(id, user);});

//word frequency tracking (counting how many times each word appear
const text = "hello world hello javascript wprld";
const words = text.split("");
const wordCount = new Map();
words.forEach(word =>{
    wordCount.set(word,
        (wordCount.get(word) || 0) +1);
});

//phone book with map (store names and phone numbers)
const phoneBook = new Map();
//add contacts
phoneBook.set("Temitayo","08012345678");
//get number
console.log(phoneBook.get("Temitayo"));
//let all contacts
for (et [name, number] of phoneBook){
    console.log(${name}: ${number});
}
//Remove Duplicates with set   (a set automaticaly removes duplicates)
const numbers = [1, 2,3,4,5,];
const uniqueNumbers = [...newSet(numbers)];
console.log(uniqueNumber);
//Find Unique Characters in a String
const str = "javascript";
const uniquechars = new Set(str);
console.log([...uniqueChars]);
//set operations(union,intersection,Difference.)
const setA = new Set([1,2,3]);
const setB = new Set([3,4,5]);
//union
const union = newSet([...setA, ...set]);
//intersection
const intersection = new Set([...setA]. filter(x =>setB.has(x)));
//Difference (A-B)
const difference = new Set([...setA].filter(x =>!setB.has(x)));
console.log("Union:", union);
console.log("Intersection:",intersection);
console.log("Difference:",difference);
