var Clock = function() {

}

clock.prototype.start = function() {

	console.log("START");

}

clock.prototype.stop = function() {

	console.log("STOP");

}

var clock = new Clock();

clock.start();
clock.stop();

console.log("A");