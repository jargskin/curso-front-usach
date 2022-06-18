

const fibbonaci = (numero) => {
 	var limit = numero;
	var fibo = [0,1];

	for(i=2; i <= limit; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
	}   
  return fibo;
};

const fibbonaciOrder = (number, order) => {
  let fibbonaciTidy;
  if (order === 'impar') {
   fibbonaciTidy = fibbonaci(number).filter(item => item % 2 !== 0); 
  }
  else if (order === 'par') {
    fibbonaciTidy = fibbonaci(number).filter(item => item % 2 === 0); 
  }
  return fibbonaciTidy;
}
console.log(fibbonaci(1000));
console.log('fibbonaciOrder par', fibbonaciOrder(1000, 'par'));
console.log('fibbonaciOrder impar', fibbonaciOrder(1000, 'impar'));


const pokemones = [
  {
    name: 'Pikachu',
    type: 'Electrico'
  },
  {
    name: 'Charmander',
    type: 'Fuego',
  },
  {
    name: 'Bulbasaur',
    type: 'Planta'
  },
  {
    name: 'Squirtle',
    type: 'Agua'
  },
  {
    name: 'Charmeleon',
    type: 'Fuego'
  },
  {
    name: 'Weedle',
    type: 'bicho'
  },
  {
    name: 'Charizard',
    type: 'Fuego'
  }
]
const pokemonesUppercase = pokemones.map((pokemon) => {
  return pokemon.name.toUpperCase()
})
console.log(pokemonesUppercase);

const pokemonesFuego = pokemones.filter(pokemon => pokemon.type === 'Fuego')
console.log(pokemonesFuego);