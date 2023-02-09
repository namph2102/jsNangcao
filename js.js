const movements=[200,450,-400,3000,-650,-130,70,1300];
const $=document.querySelector.bind(document);

$('.balance__box').innerHTML=movements.map((mov,index)=>{
    return `<div class="balance__box--item">
    <div class="balance__box--item__type ${mov>0?"desposit":"drawal"}">
        ${index+1} ${mov>0?"DESPOSIT":"WITHDRAWAL"}
    </div>
    <div class="balance__box--item__cost">
        ${Math.abs(mov)} đ
    </div>
</div>`
})
const arrr=[[1,2,3],4,5,[6,3,7,8],8];
console.log(arrr.flat());
console.log(arrr.flat().sort((a,b)=>a-b));
console.log(arrr.flat().sort((a,b)=>b-a));


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
  ];
  /*
  1) Lặp mảng gồm các object là thông tin của những chú chó, và với mỗi chú chó,
thêm 1 thuộc tính mới vào object là khẩu phẩn ăn hợp lý (recommended). KHÔNG
TẠO THÊM MẢNG MỚI, chỉ đơn giản là lặp mảng. Công thức: recommendedFood
= weight ** 0.75 * 28. (kết quả là khổi lượng thức ăn đượ tính theo gram, và cân
nặng của chú chó được tính theo kg)
  
  */ 
  dogs.map(dog=>{
    dog.recommended=Number((dog.weight**0.75*28).toFixed(2));

  })
  console.log(dogs);
  /**
   * 2. Tìm ra chú chó của Sarah và in ra console xem chú chó đó ăn quá nhiều hay quá
ít. Lưu ý: Lưu ý 1 vài chú chó có nhiều hơn 1 chủ, vì vậy bạn phải tìm ra Sarah
trong mảng 'owner' 
   * 
   */
  const SarahDog=dogs.find(dog=>{
    return dog.owners.includes('Sarah');
  });
  console.log(SarahDog);
  if(SarahDog.curFood>=SarahDog.recommended){
    console.log('Chú chó ăn quá nhiều');
  }else console.log('Chú chó ăn quá ít');

    /**
   * 3.Tạo ra mảng chứa tất cả chủ của những chú chó ăn quá nhiều
('ownersEatTooMuch') và 1 mảng chứa tất cả chủ của những chú chó ăn quá ít
('ownersEatTooLittle').
   */
  const {Much:ownersEatTooMuch,Little: ownersEatTooLittle}=dogs.reduce((ownersEat,dog)=>{
    ownersEat[dog.curFood>dog.recommended?'Much':'Little'].push(dog);
    return ownersEat;
  },{Much:[],Little:[]});
  console.log(ownersEatTooMuch,ownersEatTooLittle);

  /**
   * 4. In ra 1 chuỗi tương ứng với mỗi mảng đã tạo ở Yêu cầu 3, Ví dụ: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!
   */
const notice=`${ownersEatTooMuch
  .flatMap(own=> own.owners)
  .join(' and ')}'s dogs eat too much! and ${ownersEatTooLittle
    .flatMap(own=> own.owners)
    .join(' and ')}'s dogs eat too little!`
console.log(notice)

/**
 * 5. In ra xem có chú chó nào có khẩu phần ăn chính xác với khẩu phần ăn khuyến
nghị (output yêu cầu là 'true' hoặc 'false')
*/
    console.log(dogs.some(dog=>dog.curFood===dog.recommended));
/*
6. In ra xem có chú chó nào có khẩu phần ăn ở mức hợp lý (không >10% hoặc
<10% mức đề nghị)(output yêu cầu là 'true' hoặc 'false')
*/

console.log(dogs.some(dog=>dog.curFood < dog.recommended*1.1 && dog.curFood > dog.recommended*0.9));
/*
7. In ra tất cả các chú chó có khẩu phần ăn hợp lý (sử dụng lại điều kiện đã tìm
được ở y.c 6 để in ra mảng gồm các phần tử thỏa mãn)
*/

console.log(dogs.filter(dog=>dog.curFood < dog.recommended*1.1 && dog.curFood > dog.recommended*0.9));
/*
8. Tạo ra 1 mảng chưa các chú chó mới và sắp xếp theo khẩu phần ăn đề nghị
theo thứ tự tăng dần (hãy nhớ rằng khẩu phần ăn của mỗi chú chó nằm trong
mảng mỗi object thuộc mảng)
 */
const recommendedsIncreate=dogs.sort((a,b)=>a.recommended-b.recommended);
console.log(recommendedsIncreate);