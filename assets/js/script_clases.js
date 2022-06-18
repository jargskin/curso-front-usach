const sumaDeDosNumeros = (x, y) => {
  return x + y;
}

const arrayNum = [1,2,3,4,5,6,7,8,9];
const pokemones = ['pikachu', 'charizard', 'bulbasaur', 'squirtle', 'mewtwo', 'mew', 'pidgey', 'pidgeotto'];
pokemones.forEach((item, index) => { 
  // console.log({item, index});
 });
//  const resultPokemones = pokemones.map((item, index) => { return item.toUpperCase() })

const resultArrayNum = arrayNum.filter(item => item === 3 || item === 4);
const resultArrayNum2 = arrayNum.map(item => item === 3 || item === 4);
const resultPokemones = pokemones.filter(item => item.length > 6 )

// console.log({resultArrayNum});
// console.log({resultArrayNum2});
//  console.log({resultPokemones});
// console.log(sumaDeDosNumeros(5, 5));
let obj = [
  {hp: 10, n: 5},
  {hp: 10, n: 9},
  {hp: 10, n: 13},
  {hp: 10, n: 25},
  {hp: 10, n: 40}
];
const sumWithInitial = obj.reduce( (acc, next) => (acc + next.hp), initialValue = 0 );

console.log({sumWithInitial});