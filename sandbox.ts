const character:string = 'mario';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});
const circ = (diameter: number) => {
    return diameter * Math.PI;
  };
  
  // console.log(area('hello'));
  console.log(circ(7.5));