import './_array.ks'

extern console

impl Array {
	contains(item, from = 0): Boolean => this.indexOf(item, from) != -1
	uniq(sorted: Boolean = false, fn: Function = null, bind = null): Array {
		const result = []

		if sorted {
			let seen = null

			if fn != null {
				for const i from 0 til this.length {
					const value = fn*$(bind, this[i], i, this)

					if i == 0 || seen != value {
						result.push(this[i])
						seen = value
					}
				}
			}
			else {
				for const value, i in this {
					if i == 0 || seen != value {
						result.push(value)
						seen = value
					}
				}
			}
		}
		else {
			if fn != null {
				const seen = []

				for const i from 0 til this.length {
					const value = fn*$(bind, this[i], i, this)

					if i == 0 || !seen.contains(value) {
						result.push(this[i])
						seen.push(value)
					}
				}
			}
			else {
				for const value, i in this {
					if i == 0 || !result.contains(value) {
						result.push(value)
					}
				}
			}
		}

		return result
	}
}