// demo of Random.js

const dice = setDice(6,2)
const deck = setDeck()

for(let int = 0; int<100;int++) {
	dice.roll((o,set) => {
		console.log(o.d1, o.d2)
		if(o.d1 === 6 && o.d2 === 6) {
			console.log('CRITICAL HIT!')
			set('#result',`Roll #${int} => d1: ${o.d1}, d2: ${o.d2}`)
			return true
		}
	})
}