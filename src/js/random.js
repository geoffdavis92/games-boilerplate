class Dice {
	constructor(dieSides,dieCount,rolls=1) {
		this.s = dieSides
		this.n = dieCount
		this.r = rolls
		this.set = (selector,value) => {
			const el = document.querySelector(selector)
			el.innerText = value
			return false
		}
		return {
			setup: {
				dieSides: 	this.s,
				dieNum: 	this.n,
				rollCount: 	this.r
			},
			roll: (c) => {
				let a = [],
					o = {},
					s = this.s,
					n = this.n,
					r = this.r,
					set = this.set,
					sum = 0
				for (let i=0;i<n;i++) {
					let rn = Math.floor(Math.random() * s + 1)
					a.push(rn)
					o[`d${i+1}`] = rn
				}
				sum = () => {
					let result = 0
					for (let i=0;i<a.length;i++) {
						result += a[i]
					}
					return result
				}
				o['sum'] = sum()
				
				// Call callback
				if(c) {
					c(o,set);
				}

				// return object
				return o
			}
		}
	}
}

class Deck {
	constructor(type="standard",size=52,cards=['a^','a<3','a+','a<>']) {
		this.type = type
		this.size = size
		this.cards = cards
		this.shuffle = (cards) => {
			const srcDeck = cards,
				  shuffledDeck = []
			for (let i=0;srcDeck.length !== 0;i++) {
				let selection = Math.floor(Math.random() * srcDeck.length)
				console.log(selection,shuffledDeck,srcDeck)
				shuffledDeck.push(srcDeck[selection])
				console.log("srcDeck pre:", srcDeck,shuffledDeck)
				srcDeck.splice(srcDeck[selection],1)
				console.log("srcDeck post:", srcDeck,shuffledDeck)
			}
			return shuffledDeck
		}
	}
	deal(nHands,nCards,deck=this.shuffle(this.cards)) {
		for (let c=0;c<nCards;c++) {
			for (let h=0;h<nHands;h++) {

			}
		}
	}
} 

const setDice = (s,n,r) => new Dice(s,n,r)
const setDeck = () => new Deck()