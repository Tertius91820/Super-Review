//Create a stopwatch object that has four properties and three methods
let stopwatch = {
  color: black,
  make: sony,
  size: small,
  digital:yes,
	function() {return this.color + " " + this.make;},
  function() {console.log("Beep")}

}