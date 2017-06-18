import './_array.ks'

extern console

impl Array {
	remove(...items): Array {
		if items.length == 1 {
			let item = items[0]
			
			for i from this.length - 1 to 0 by -1 when this[i] == item {
				this.splice(i, 1)
			}
		}
		else {
			for item in items {
				for i from this.length - 1 to 0 by -1 when this[i] == item {
					this.splice(i, 1)
				}
			}
		}
		
		return this
	}
}