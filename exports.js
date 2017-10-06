

function eat(food) {
  like(food);
}


function like(food) {
  console.log('Yum, I really like ' + food + '!');
}


module.exports = {
  eat: eat
}
