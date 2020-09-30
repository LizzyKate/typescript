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
  // let greet = () => {
  //   console.log('hello')
  // }
  let greet:Function;
  // greet ="hello"
   greet = () => {
       console.log('hello')
     }
     const add = (a:number, b:number, c?:number | string) => {
       console.log(a + b)
       console.log(c)
     }

     add(5, 10);

     type StrOrNum = string | number

     type ObjWithName = {name: string, uid:StrOrNum}


     const logDetails = (uid: StrOrNum, item:string) => {
       console.log(`${item} has a uid of ${uid}`)
     }

        
     const great = (user:ObjWithName) => {
       console.log(`${user.name} says hello`);
     }

     const greater = (user:ObjWithName) => {
      console.log(`${user.name} says hello`);
    }

    logDetails(39, 'Stella')
    great({
      name:'tony',
      uid:50
    })