export default class Controls {
	constructor() {
		this.codes = {
			37: 'left',
			39: 'right',
			38: 'forward',
			40: 'backward',
			32: 'fire'
		};
		this.states = {
			'left': false,
			'right': false,
			'forward': false,
			'backward': false,
			'fire' : false
		};

		document.addEventListener('keydown', this.onKey.bind(this, true), false);
		document.addEventListener('keyup', this.onKey.bind(this, false), false);
	}

	onKey(value, e) {
		let state = this.codes[e.keyCode];

		if (typeof state === 'undefined') return;

		this.states[state] = value;

		e.preventDefault && e.preventDefault();
		e.stopPropagation && e.stopPropagation();
	}
}