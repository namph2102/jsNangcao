
const accounts=[
  {
    owner:'Jessica Davis',
    movements:[500,3400,-150,-790,-3210,-1000,8000,300],
    interesRate:1.5,
    pin:1111,
    times:[
      "2023-01-25T05:06:30.000Z",
      "2023-02-11T05:06:30.000Z",
      "2022-04-25T05:06:30.000Z",
      "2022-06-25T05:06:30.000Z",
      "2023-08-25T05:06:30.000Z",
      "2022-09-25T05:06:30.000Z",
      "2022-12-25T05:06:30.000Z",
      "2023-01-11T05:06:30.000Z",
    ]
  }
  ,
  {
    owner:'Steven Thomas Williams',
    movements:[2000,-200,150,-20,50,40,-60,-460],
    interesRate:0.7,
    pin:2222,
    times:[
      "2023-01-25T05:06:30.000Z",
      "2023-02-11T05:06:30.000Z",
      "2022-04-25T05:06:30.000Z",
      "2022-06-25T05:06:30.000Z",
      "2023-08-25T05:06:30.000Z",
      "2022-09-25T05:06:30.000Z",
      "2022-12-25T05:06:30.000Z",
      "2023-01-11T05:06:30.000Z",
    ]
  }
  ,
  {
    owner:'Sarah Smith',
    movements:[430,100,700,50,90],
    interesRate:0.4,
    pin:3333,
    times:[
      "2023-01-25T05:06:30.000Z",
      "2023-02-11T05:06:30.000Z",
      "2022-04-25T05:06:30.000Z",
      "2022-06-25T05:06:30.000Z",
      "2023-08-25T05:06:30.000Z",
    ]
  }
  ,
  {
    owner:'Phạm Hoài Nam',
    movements:[100,300,-400,600,150,350,444,-90],
    interesRate:0.8,
    pin:4444,
    times:[
      "2023-01-25T05:06:30.000Z",
      "2023-02-11T05:06:30.000Z",
      "2022-04-25T05:06:30.000Z",
      "2022-06-25T05:06:30.000Z",
      "2023-08-25T05:06:30.000Z",
      "2022-09-25T05:06:30.000Z",
      "2022-12-25T05:06:30.000Z",
      "2023-01-11T05:06:30.000Z",
    ]
  }
  ,
]
const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);

const userBox=$("#username");
const pinBox=$("#password");
const creatUsername=()=>{
  accounts.forEach(account=>account.username=account.owner
    .split(' ')
    .map(work=>work[0].toLowerCase())
    .join(''))
}
creatUsername();
$("#btn_login").onclick=()=>{
  if(!userBox.value || !pinBox.value) {
    alert("Không được để trống !");
    return false;
  };
 
const timeLogout=2000;
  const account=accounts.find(account=>account.username==userBox.value
    )
    if(account?.username && account?.pin==pinBox.value){
      userBox.value='';
      pinBox.value='';
      // login success
      $(".app__body").style.opacity = 1;
      let sort=false;
      showHistoryBalance(account);
      ShowTime();
      timeDown(timeLogout);
      $('.btn__sort').onclick=()=>{
        sort=!sort;
        if(sort) sortHistory();
        else showHistoryBalance(account);
      }
      $("#btn__transfer").onclick=()=>{
        const personAction=transferTo();
        if(personAction?.amount && personAction?.time){
            const {amount,time} = personAction;
            account.movements.push(amount);
            account.times.push(time);
            console.log(account);
            showHistoryBalance(account);
        }
      }
    }
    
    else{
      if(!account?.username){
        userBox.value='';
        alert("Tài khoản không tồn tại");
        return false;
      }
      if(account?.pin!=pinBox.value){
        pinBox.value="";
        alert("Mã pin chưa chính xác");
        return false;
      }
    }
}

function showHistoryBalance(account){
  const times=account.times;
  $(".balace__history").innerHTML=account.movements.map((mov,i)=>{
    const type_class= mov >= 0?'desposit':'drawal';
    return `<div class="balance__box--item">
    <div class="balance__box--item__type ">
        <span class="${type_class}">8 ${type_class} </span><span>${coverDate(times[i])}</span>
    </div>
    <div class="balance__box--item__cost">
        ${coverPrice(mov)}
    </div>
</div>`;
  }).join('');
 // tính thu nhập
  const {inCome,outCome}=account.movements.reduce((mov,money)=>{
    mov[money>=0?'inCome':'outCome']+=money;
    return mov;
  },{inCome:0,outCome:0})
  console.log(inCome,outCome);
  $('#current_balance').innerHTML=coverPrice(inCome+Math.abs(outCome));
  $('.money__in').innerHTML=coverPrice(inCome);
  $('.money__out').innerHTML=coverPrice(Math.abs(outCome));
   $('.money__interest').innerHTML=coverPrice(inCome+outCome);
}
function sortHistory(){
  const movementsHistory=Array.from($$('.balance__box--item'));
  console.log(movementsHistory);
  movementsHistory.sort((a,b)=>{
    return parseFloat(b.querySelector('.balance__box--item__cost').innerText)-parseFloat(a.querySelector('.balance__box--item__cost').innerText)
  })
  $(".balace__history").innerHTML=movementsHistory.map(
    mov=>`<div class="balance__box--item">${mov.innerHTML}</div>`
  ).join('');
  
}
console.log(parseFloat('2323.255sda'));
function ShowTime(){
  $('.day__now').innerHTML=dayNow();
  $('.time__now').innerHTML=timeNow();
  setInterval(()=>$('.time__now').innerHTML= timeNow(),1000)

}
function dayNow(){
  const date=new Date(Date.now());
  const day=date.getDate()+'';
  const month=date.getMonth()+'';
  const year=date.getFullYear()+'';
  return `${day.padStart(2,0)}/${month.padStart(2,0)}/${year}`;
}
function timeNow(){
  return  new Intl.DateTimeFormat('vi-VN',
  {
    hour: "numeric",
    minute: "numeric",
    second:"numeric"
  }
  ).format(Date.now());
}
function coverPrice(price){
  return new Intl.NumberFormat("de-DE",
  {
    style: "currency",
    currency: "USD"
  }).format(price);
}
function coverDate(date){
 const newdate=new Date(date);
 const day=newdate.getDate()+'';
 const month=newdate.getMonth()+1+'';
 let year=newdate.getFullYear();
 return `${day.padStart(2,0)}/${month.padStart(2,0)}/${year}`;
}

function timeDown(time=120){
  const idTime=setInterval(()=>{
    let seconds=Math.floor(time/60);
    let minutes=time-seconds*60;
    $('.timelogin').innerHTML=`${(seconds+'').padStart(2,0)}:${(minutes+'').padStart(2,0)}`;
    if(time==0){
      clearInterval(idTime);
      userBox.focus();
      $(".app__body").style.opacity = 0;
    }
    time--;
  },1000)
}

function transferTo(){
  const accountTranfer= $("#transfer__account");
  const amount= Number($("#transfer__amount").value);
  const error__tranfor=$('.error__tranfor');
  if(!accountTranfer.value || !amount){
    error__tranfor.innerHTML='Vui lòng Điền đầy đủ thông tin';
    return false;
  }
  if(amount && accountTranfer.value){
    const account=accounts.find(account=>account.username==accountTranfer.value)
    if(!account?.pin){
      error__tranfor.innerHTML='Tài khoản chuyển không tồn tại';
    }
    if(account?.movements){
      const time=new Date().toISOString();
      account.movements.push(Number(amount))
      account.times.push(time);
      accountTranfer.value='';
      $("#transfer__amount").value='';
      error__tranfor.innerHTML='';
      return {time ,amount}
    }
  }
}
