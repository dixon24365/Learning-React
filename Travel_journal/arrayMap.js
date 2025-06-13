const numbers =[1,2,3,4,5]

const map1=numbers.map((x) => x*x)

console.log(map1)


const names =['alice', 'bob', 'charlie', 'daniella']

const namesC= names.map(function(str){

    return str.charAt(0).toUpperCase() + str.slice(1)
})

console.log(namesC)

const pokeman=['Bulbasur', 'Charmander', 'Squirtle']

const pokemanWPtags= pokeman.map((name) =>{
  return `<p>${name}</p`
  }
)

console.log(pokemanWPtags)