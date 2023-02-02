// const filght={
//     name:"VietName Airline",
//     itataCode:"VN",
//     books(charCode,fullname){
//         console.log(`${this.name} Xin chào quý khách ${fullname} có mã số ghế ${this.itataCode+charCode}`);
//     }
// }
// const newFilght={
//     name:"Malaysia AirLine",
//     itataCode:"ML"
// }
// const bookings=filght.books;

// bookings.apply(newFilght,[12542,"Phạm Hoài Nam"]);;
// newFilght.filght=300;
// newFilght.planes=function(){
//     this.filght++;
//     console.log(this);
// }
// document.querySelector('.plan').addEventListener('click',newFilght.planes.bind(newFilght))
// const bookVN23=bookings.bind(filght,23);
// bookVN23('catuxi'),
// bookVN23('James Makeyta')
// const addTax=(rate,value)=>rate+value*rate;
// const TaxVN=addTax.bind(null,100)
// const addTaxtRare=(rate)=>(value)=>rate+rate*value;
// const vnTaxt=addTaxtRare(100)
// console.log(vnTaxt(0.23));

// function countWord(str,work){
    
// }
// console.log(countWord("loonbalxballpoon","balloon"));


// const currentMoney=new Map([
//     ['USD','United States Dodal'],
//     ['EUR','Euro'],
//     ['GPB','Pound Seling']]);
// currentMoney.forEach((value,key)=>{
//     console.log(`${key} : ${value}`);
// })
// const curentSet=new Set(['USA','Eru','VN','VN']);
// console.log(curentSet);
// curentSet.forEach((value,key)=>{
//     console.log(`${key} : ${value}`);
// })


const numbers=[1,2,3,5,4,8];
console.log(numbers.map(number=>number*3));