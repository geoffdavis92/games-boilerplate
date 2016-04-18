const stanDeck = [
	{
		"display": "A♠",
		"modifier": "A",
		"name": "Ace of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": [1,14]
	},
	{
		"display": "2♠",
		"modifier": "2",
		"name": "Two of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": 2
	},
	{
		"display": "3♠",
		"modifier": "3",
		"name": "Two of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": 3
	},
	{
		"display": "4♠",
		"modifier": "4",
		"name": "Two of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": 4
	},
	{
		"display": "5♠",
		"modifier": "5",
		"name": "Two of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": 5
	},
	{
		"display": "6♠",
		"modifier": "6",
		"name": "Two of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": 6
	},
	{
		"display": "7♠",
		"modifier": "7",
		"name": "Two of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": 7
	},
	{
		"display": "8♠",
		"modifier": "8",
		"name": "Eight of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": 8
	},
	{
		"display": "9♠",
		"modifier": "9",
		"name": "Nine of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": 9
	},
	{
		"display": "10♠",
		"modifier": "10",
		"name": "Ten of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": 10
	},
	{
		"display": "J♠",
		"modifier": "J",
		"name": "Jack of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": 11
	},
	{
		"display": "Q♠",
		"modifier": "Q",
		"name": "Queen of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": 12
	},
	{
		"display": "K♠",
		"modifier": "K",
		"name": "King of Spades",
		"suit": "spades",
		"symbol": "♠",
		"value": 13
	},
	{
		"display": "A♣",
		"modifier": "A",
		"name": "Ace of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": [1,14]
	},
	{
		"display": "2♣",
		"modifier": "2",
		"name": "Two of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": 2
	},
	{
		"display": "3♣",
		"modifier": "3",
		"name": "Two of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": 3
	},
	{
		"display": "4♣",
		"modifier": "4",
		"name": "Two of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": 4
	},
	{
		"display": "5♣",
		"modifier": "5",
		"name": "Two of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": 5
	},
	{
		"display": "6♣",
		"modifier": "6",
		"name": "Two of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": 6
	},
	{
		"display": "7♣",
		"modifier": "7",
		"name": "Two of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": 7
	},
	{
		"display": "8♣",
		"modifier": "8",
		"name": "Eight of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": 8
	},
	{
		"display": "9♣",
		"modifier": "9",
		"name": "Nine of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": 9
	},
	{
		"display": "10♣",
		"modifier": "10",
		"name": "Ten of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": 10
	},
	{
		"display": "J♣",
		"modifier": "J",
		"name": "Jack of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": 11
	},
	{
		"display": "Q♣",
		"modifier": "Q",
		"name": "Queen of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": 12
	},
	{
		"display": "K♣",
		"modifier": "K",
		"name": "King of Clubs",
		"suit": "clubs",
		"symbol": "♣",
		"value": 13
	},
	{
		"display": "A♥",
		"modifier": "A",
		"name": "Ace of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": [1,14]
	},
	{
		"display": "2♥",
		"modifier": "2",
		"name": "Two of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": 2
	},
	{
		"display": "3♥",
		"modifier": "3",
		"name": "Two of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": 3
	},
	{
		"display": "4♥",
		"modifier": "4",
		"name": "Two of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": 4
	},
	{
		"display": "5♥",
		"modifier": "5",
		"name": "Two of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": 5
	},
	{
		"display": "6♥",
		"modifier": "6",
		"name": "Two of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": 6
	},
	{
		"display": "7♥",
		"modifier": "7",
		"name": "Two of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": 7
	},
	{
		"display": "8♥",
		"modifier": "8",
		"name": "Eight of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": 8
	},
	{
		"display": "9♥",
		"modifier": "9",
		"name": "Nine of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": 9
	},
	{
		"display": "10♥",
		"modifier": "10",
		"name": "Ten of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": 10
	},
	{
		"display": "J♥",
		"modifier": "J",
		"name": "Jack of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": 11
	},
	{
		"display": "Q♥",
		"modifier": "Q",
		"name": "Queen of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": 12
	},
	{
		"display": "K♥",
		"modifier": "K",
		"name": "King of Hearts",
		"suit": "hearts",
		"symbol": "♥",
		"value": 13
	},
	{
		"display": "A♦",
		"modifier": "A",
		"name": "Ace of Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": [1,14]
	},
	{
		"display": "2♦",
		"modifier": "2",
		"name": "Two of Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": 2
	},
	{
		"display": "3♦",
		"modifier": "3",
		"name": "Two of Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": 3
	},
	{
		"display": "4♦",
		"modifier": "4",
		"name": "Two of Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": 4
	},
	{
		"display": "5♦",
		"modifier": "5",
		"name": "Two of Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": 5
	},
	{
		"display": "6♦",
		"modifier": "6",
		"name": "Two of Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": 6
	},
	{
		"display": "7♦",
		"modifier": "7",
		"name": "Two of Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": 7
	},
	{
		"display": "8♦",
		"modifier": "8",
		"name": "Eight Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": 8
	},
	{
		"display": "9♦",
		"modifier": "9",
		"name": "Nine of Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": 9
	},
	{
		"display": "10♦",
		"modifier": "10",
		"name": "Ten of Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": 10
	},
	{
		"display": "J♦",
		"modifier": "J",
		"name": "Jack of Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": 11
	},
	{
		"display": "Q♦",
		"modifier": "Q",
		"name": "Queen Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": 12
	},
	{
		"display": "K♦",
		"modifier": "K",
		"name": "King of Diamonds",
		"suit": "diamonds",
		"symbol": "♦",
		"value": 13
	}
];

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
	constructor(type="standard",size=52,cards=stanDeck) {
		this.type = type
		this.size = size
		this.cards = cards
		this.shuffle = (cards) => {
			const srcDeck = cards,
				  shuffledDeck = []
			for (let i=0;srcDeck.length !== 0;i++) {
				let selection = Math.floor(Math.random() * srcDeck.length)
				// console.log(selection,shuffledDeck,srcDeck)
				shuffledDeck.push(srcDeck[selection])
				// console.log("srcDeck pre:", srcDeck,shuffledDeck)
				srcDeck.splice(srcDeck[selection],1)
				// console.log("srcDeck post:", srcDeck,shuffledDeck)
			}
			return shuffledDeck
		}
	}
	deal(nPlayers,nCards,players,deck=this.shuffle(this.cards)) {
		// deck = this.shuffle(deck)
		for (let c=0;c<nCards;c++) {
			console.log(`card ${c+1}`)
			for (let p=0;p<nPlayers;p++) {
				players[p].push(deck[0])
				console.log(players[p][c].display)
				deck.splice(deck[0],1)
			}
		}
	}
} 

const setDice = (s,n,r) => new Dice(s,n,r)
const setDeck = () => new Deck()