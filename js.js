// const movements=[200,450,-400,3000,-650,-130,70,1300];
// const $=document.querySelector.bind(document);

// $('.balance__box').innerHTML=movements.map((mov,index)=>{
//     return `<div class="balance__box--item">
//     <div class="balance__box--item__type ${mov>0?"desposit":"drawal"}">
//         ${index+1} ${mov>0?"DESPOSIT":"WITHDRAWAL"}
//     </div>
//     <div class="balance__box--item__cost">
//         ${Math.abs(mov)} đ
//     </div>
// </div>`
// })
// const arrr=[[1,2,3],4,5,[6,3,7,8],8];
// console.log(arrr.flat());
// console.log(arrr.flat().sort((a,b)=>a-b));
// console.log(arrr.flat().sort((a,b)=>b-a));
/**
 * options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
};
 */

const options={
  style: "currency",
  currency: "USD",
}
const price=new Intl.NumberFormat('en-US',options).format(100000);
console.log(price);

setTimeout((first,last)=>console.log(`i love you ${first+last}`),1000,'Hoai2 Nam','10 c6');