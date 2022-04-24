
// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number.
// returns true if n is narcissistic and false if not
function isNarcissistic(n){
    stringNum = String(n).split('')
    total = 0
    stringNum.forEach(num => {
      total += Math.pow(Number(num), stringNum.length)
    })
    return total === n
  }
  
// counts number of positive numbs in the input array and sums the negative numbers
  function countPositivesSumNegatives(input) {
    let posNeg = []
    if(input !== null && input.length){
      let posCount = 0
      let negTotal = 0

      input.forEach(num => {
        if(num > 0){
          posCount ++
        }
        else{
          negTotal += num
        }
    })
      posNeg.push(posCount)
      posNeg.push(negTotal)
    }

  
  
  return posNeg
}


// checks if name = owner and returns a message accordingly
  function greet (name, owner) {
    return name === owner ? "Hello boss" : "Hello guest"
  }



  // returns min number in the array
var min = function(list){
    
    return Math.min(...list)
}
  // returns max number in the array
var max = function(list){
    
    return Math.max(...list)
}



function greet(language) {
	let languages = {
    'english': 'Welcome',
'czech': 'Vitejte',
'danish': 'Velkomst',
'dutch': 'Welkom',
'estonian': 'Tere tulemast',
'finnish': 'Tervetuloa',
'flemish': 'Welgekomen',
'french': 'Bienvenue',
'german': 'Willkommen',
'irish': 'Failte',
'italian': 'Benvenuto',
'latvian': 'Gaidits',
'lithuanian': 'Laukiamas',
'polish': 'Witamy',
'spanish': 'Bienvenido',
'swedish': 'Valkommen',
'welsh': 'Croeso'
  }
  return language in languages ? languages[language] : languages['english']  
}


// repeats a string s, n times
function repeatStr (n, s) {
    let repeated = ''
    for(let i = 0; i < n; i++){
      repeated += s
    }
    return repeated
  }

  //s.repeat(n)
