let users = [
   { name: "Igor", city: "Kyiv", age: 20 },
   { name: "Alex", city: "Donetsk", age: 50 },
   { name: "Oleg", city: "Kharkiv", age: 10 },
   { name: "Vasya", city: "Poltava", age: 20 },
   { name: "John", city: "New York", age: 50 },
   { name: "Bob", city: "Amsterdam", age: 40 },
   { name: "Iren", city: "Berlin", age: 20 },
   { name: "Bler", city: "Kyiv", age: 50 },
   { name: "Olga", city: "Kyiv", age: 18 },
   { name: "Inna", city: "Kyiv", age: 10 },
 ];   

let newUsers = [];
const quantityOfSubarraysElements = 3; // Значения переменной quantityOfSubarraysElements меньше или равно 0 лучше не вводить (происходит зацикливание). Думаю в рамках интеграции кода для пагинации, в написании доп. проверки нет необходимости. 
while (users.length !== 0) newUsers.push(users.splice(0, quantityOfSubarraysElements));
console.log(newUsers);
