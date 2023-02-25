// APPLICATION ARCHITECTURE
// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');



// const getMap=(position)=>{
//   var map = L.map('map').setView(position, 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// map.on('click',function(e){
//     const {lat,lng}= e.latlng;
//     L.marker([lat,lng]).addTo(map)
//     .bindPopup({
//       maxWidth:400,
//       minWidth:50,
//       autoClose:false,
//     })
//     .setContent('Runing')
//     .openPopup();
// })

// }

// navigator.geolocation.getCurrentPosition(function (map) {
//   const { latitude: lat, longitude: log } = map.coords;
//   getMap([lat, log]);
//   console.log(`https://www.google.com/maps/@${lat},${log}`);
// }, function (err) {
//   console.error(err.message);
// });

class SV {
  constructor(mssv, tensv, diem) {
    this.mssv = mssv;
    this.ensv = tensv;
    this.diem = diem;
  }
 
  xuat() {
    console.log(`MSSV ${this.mssv} -- Tên Sinh Viên ${this.tensv}-- Điểm  ${this.diem}`);
  }
}
const nam = new SV('PS21235', 'Phạm Hoài Nam', 9.9);


// Phạm Hoài Nam
// 1 tạo mảng 10 phần tử
const list=[1,2,3,4,5,6,7,8,9,10];
// 2
list.splice(5,0,3,10);
console.log(list);
// 3
list.splice(8,2)
console.log(list);
// 4 
const arr=[1,8,3,9,2,10,15,20,6];
// lấy ra số ở giữa
const middleNumber=arr[Math.floor(arr.length / 2)];
// lọc ra số lớn hơn số ở giữa
const arr2=arr.filter(number=>number>middleNumber);
console.log(arr2);
