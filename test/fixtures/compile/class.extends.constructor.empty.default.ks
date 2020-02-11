extern console

class Shape {
	private {
		_color: String	= 'black'
	}

	draw(): String {
		return ''
	}
}

class Rectangle extends Shape {
	constructor(@color)

	draw(): String {
		return `I'm drawing a \(@color) rectangle.`
	}
}

let r = new Rectangle('black')

console.log(r.draw())