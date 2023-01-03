const mountains = p => {
	const MAX_HEIGHT = 600;
	const MAX_WIDTH = 600;
	const STEP = 10;

	p.setup = function() {
		p.createCanvas(MAX_HEIGHT, MAX_WIDTH);
		p.stroke(100, 200, 200);
		p.strokeWeight(2);
		p.noLoop();
	}

	p.draw = function() {
		var lines = new Array();
		for (let y = 20; y < MAX_HEIGHT; y += STEP) {
			line = new Array();
			for (let x = 20; x < MAX_WIDTH; x += STEP) {
				var random = 1.5 * STEP * Math.random();
				line.push({x:x, y:y+random});
			}
			lines.push(line);
		}
		for (let i = 0; i < lines.length; ++i) {
			for (let j = 0; j < lines[0].length-1; ++j) {
				p.line(lines[i][j].x, lines[i][j].y, lines[i][j+1].x, lines[i][j+1].y);
			}
		}
	}
}

var mountains0 = new p5(mountains, 'mountains0');