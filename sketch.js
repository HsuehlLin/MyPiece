

function setup() {
	createCanvas(500,500, WEBGL); //width and height of my canvas
	//background(50);var c = color(175, 100, 220); // Define color 'c'
	
	
}
	
	function draw() {

	 background(200);
	 rotateX(frameCount * 0.01);
	 rotateZ(frameCount * 0.01);
	 cylinder(100,200)
 	//fill(255,255,255); // Use color variable 'c' as fill color

}