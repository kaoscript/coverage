import * from ./_array.ks

extern console

impl Array {
	contains(item, from = 0): Boolean => this.indexOf(item, from) != -1
	uniq(sorted = false, fn?, bind?): Array {
		let result: Array = []
		let value
		
		if sorted {
			let seen = null
			
			if fn? {
				for i from 0 til this.length {
					value = fn*$(bind, this[i], i, this)
					
					if !i || seen != value {
						result.push(this[i])
						seen = value
					}
				}
			}
			else {
				for value, i in this {
					if !i || seen != value {
						result.push(value)
						seen = value
					}
				}
			}
		}
		else {
			if fn? {
				let seen: Array = []
				
				for i from 0 til this.length {
					value = fn*$(bind, this[i], i, this)
					
					if !i || !seen.contains(value) {
						result.push(this[i])
						seen.push(value)
					}
				}
			}
			else {
				for value, i in this {
					if !i || !result.contains(value) {
						result.push(value)
					}
				}
			}
		}
		
		return result
	}
}