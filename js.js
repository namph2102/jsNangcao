//lab 2.2
const coverCameCase=(underscore='ten_bien')=>{
    const camelCase=underscore.trim().toLowerCase().split('_');
    for(let i=1;i<camelCase.length;i++) {
        //  camelCase[i]=camelCase[i][0].toUpperCase()+camelCase[i].slice(1);// C1;
         camelCase[i]= camelCase[i].replace(camelCase[i][0],camelCase[i][0].toUpperCase()) // c2;
    }
  return camelCase.join('');
}


// console.log(coverCameCase('calculate_AGE'));
// console.log(coverCameCase('underscore_Case'));
// console.log(coverCameCase('first_name'));
// console.log(coverCameCase('Some_Variable'));
// console.log(coverCameCase('delayed_departure'));
// console.log(coverCameCase('handle_scope_array'));

//lab 2.3
const flights =`_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao937661
09;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis
2323639855;12:30`;
const getCode=(fullcode)=>fullcode.slice(0,3).toUpperCase();
for(const fight of flights.split('+')){
  const [delay,from,to,time]=fight.split(';');
  console.log(`${delay.replaceAll("_"," ").trim()} from ${getCode(from)} to ${getCode(to)} ( ${time.replace(":",'h')} )`.padStart(40) );
}
/*
Result

Delayed Departure from FAO to TXL ( 11h25 )
     Arrival from BRU to FAO ( 11h45 )
Delayed Arrival from HEL to FAO ( 12h05 )
    Departure from FAO to LIS ( 12h30 )
*/


//lab 2.4 IIFE
(function(){
  const h1=document.querySelector("h1");
  h1.style="color:blue";
  document.querySelector('body').onclick=()=>{
    h1.style="color:red";
  }
}())