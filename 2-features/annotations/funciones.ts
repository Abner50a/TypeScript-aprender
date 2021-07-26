
const add = (a: number,b:number): number   => {

 return a+b
};


const subtrack = (a: number,b:number):  number  => {

 return a+b
 };

 function divide(a: number, b: number) : number {
  return a/b
 }  
 

 
 const multuply  = function (a: number, b: number) : number {
  return a*b
 }  
 
 
 const logger = (message: string) : void => {
   console.log(message)
 }

 const thriwErrir = (message: string) : never => { //nunca devolvera un vcalor y es raro s9lo se aplica para error => signifca quenunca llegara al final de la funcion
   throw new Error(message)
   
 }

 const forecast  = {
   Date : new Date(),
  weather : 'sunny'
 };

 const logWeather  = ({date, weather} : {   date: Date, weather : string   }) : void => {
    console.log(date)
    console.log(weather)
 }
