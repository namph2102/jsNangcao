const myKey = '397718554946363150544x124491';
const getLocation = (latitude, longitude) => {
    return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=${myKey}`)
        .then(res =>{
           if(!res.ok){
            throw new Error(`Some things wrong with status ${res.status}`)
           }
            return res.json()
        })
        .then((result)=>{
            console.log(result);
            if(!result.state ) {
                alert('không tìm thấy !')
                throw new Error('Can not find !');
            }
            renderLocation(result);   
             console.log(`Well come to ${result.country} with city at "${result.city}"`);
        })
        .catch(err=>console.error(err.message))
}
 const  renderLocation = (country) => {
    const html = ` <div class="col-4">
    <div class="country">
      <figure>
        <img class="country__flag"
          src="https://movibes.online/avata/6363e8ec5c38bdau-pha-thuong-khung-phan-5-gia-nam-hoc-vien-1321-300x450.jpg"
          alt="">
        <figcaption><h1 class="fs-4 m-0 ps-3 fw-bold" >${country.state}</h1></figcaption>
        <span class="ps-3 fs-6">${country.country}</span>
      </figure>
      <div class="country__body">
        <div class="country__people">
          <i class="fa-solid fa-person-rifle"></i> <span class="ms-2"> ${(country.geonumber/1_000_000).toFixed(1)}</span> people
        </div>
        <div class="country__name">
          <i class="fa-solid fa-earth-asia"></i> <span class="ms-2">${country.city} </span> 
        </div>
        <div class="country__localtion">
          <i class="fa-solid fa-map-location-dot"></i> <span class="ms-2"> ${country.state}</span> 
        </div>
      </div>
    </div>

  </div>`;
  document.querySelector('.country__container').insertAdjacentHTML('beforeend',html);
}
const container__error=document.querySelector('.error')
const latitude=document.querySelector('#latitude');
const longitude=document.querySelector('#longitude');
console.log(latitude,longitude);
let message='';
document.querySelector('.btn__open--location').addEventListener('click', ()=>{
    if(!latitude.value || !longitude.value){
        message='Điền đẩy đủ thông tin'
        container__error.textContent=message
        throw new Error(message)
    }
    getLocation(latitude.value, longitude.value)

  
})

getLocation(52.508, 13.381)
getLocation(19.037, 72.873)
getLocation(-33.933, 18.474)

function* test(){
    yield 1;
    console.log('sdda');
    yield 2;
    console.log('dssad');
    return 3;
}
const newId= test();
console.log(newId.next());
newId.next();
console.log(newId.next());
