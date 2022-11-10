'use strict';

console.log('-----------');
console.log('Пункт No1:');
console.log('-----------');

fetch('https://reqres.in/api/users?per_page=12')
   .then((response) => {
      return response.json()})
   .then((result) => {

      const usersInfo = result.data;
      //console.log(Object.values(usersInfo));


console.log('-----------');
console.log('Пункт No2:');
console.log('-----------');

usersInfo.forEach((item) => {
  console.log(item.last_name);
});

console.log('-----------');
console.log('Пункт No3:');
console.log('-----------');

const filteredArray = usersInfo.filter((item) => {
  return item.last_name[0] === 'F';
})
console.log(filteredArray);

//usersInfo.forEach((item) => {
 // if (item.last_name[0] === 'F') {
 // console.log('  ' + item.last_name + ':')
  //for (const symbol in item) {
  //  console.log(' ' + symbol + ': ' + item[symbol] + ',')}
//}
//})

console.log('-----------');
console.log('Пункт No4:');
console.log('-----------');

const reduceUser = usersInfo.reduce((accumulator, item, index, array) => {
  let resString = `${item.first_name} ${item.last_name}`;
  if (index !== array.length - 1) {
    resString += ', ';
  } else {
    resString += '.';
  };
  accumulator += resString;
  return accumulator;
}, '');
console.log(`Наша база содержит данные следующих пользователей: ${reduceUser}`);

console.log('-----------');
console.log('Пункт No5:');
console.log('-----------');

for (const item in usersInfo[0]) {
  console.log(' '.repeat(2) + item);
}
})

.catch((error) => {
console.log('Ошибка ===> ', error);

});
