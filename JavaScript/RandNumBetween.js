// Generates a random int: min <= randInt < max
function randIntBetween(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.floor(min));
}

function randNumBetween(min, max){
  return Math.random() * (max - min) + min;
}