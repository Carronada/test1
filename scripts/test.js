var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
console.log(multiply(4,7));
console.log(multiply(20,20));
console.log(multiply(0.5,3));

document.querySelector('html').onclick = function()
{
  alert('Ouch! Stop poking me!');
}
