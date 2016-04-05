class Dice {
	constructor(dieSides,dieCount,rolls=1) {
		this.s = dieSides
		this.n = dieCount
		this.r = rolls
		this.dArr = []
		this.sArr = 0
		return {
			roll: () => {
				let a = [],
					o = {},
					s = this.s,
					n = this.n,
					r = this.r,
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
				console.log(sum())
				o['sum'] = sum()
				return o
				/*this.dArr = []
				this.sArr = []
				let s = this.s,
					n = this.n,
					r = this.r,
					dieArr = [],
					sum = 0,
					getRolls = () => {
						for(let i=0;i<n;i++) {
							let result = Math.floor(Math.random() * s + 1)
							dieArr.push(result)
							sum += result
						}
						return {die:dieArr,sum:sum}
					}
					for(let i=0;i<r;i++) {
						let v = getRolls()
						this.sArr = (v.sum)
						this.dArr.push(v.die)
					}
				return {
					setup: {dieSides:s,diceCount:n,rollCount:r},
					sum: this.sArr,
					dieResults: this.dArr
				}*/
			}
		}
	}
}

const setDice = (s,n,r) => new Dice(s,n,r)