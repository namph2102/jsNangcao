// APPLICATION ARCHITECTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const workouts = document.querySelector('.workouts')
class Workout {
  date = Intl.DateTimeFormat('vi-VN', { day: 'numeric', year: 'numeric', month: 'numeric' }).format(Date.now());
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
    this.clicks=0;
  }


}
class Running extends Workout {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this._calcPace();
    this.des=this.type[0].toUpperCase() + this.type.slice(1) +`on ${this.date}`
  }
  _calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }

}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, evenGain) {
    super(coords, distance, duration);
    this.evenGain = evenGain;
    this._calcSpeed();
    this.des=this.type[0].toUpperCase() + this.type.slice(1) +` on ${this.date}`
  }
  _calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }

}
class App {
  #map; #mapEvent;
  #maxZoom= 13;
  #workout = this._getLocalStorage();
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWork.bind(this))
    inputType.addEventListener('change', this._toggleEventionField)
    workouts.addEventListener('click',this._moveToPopup.bind(this))
   
  }
  init(){
    if(this.#workout?.length){
      const html=this.#workout.map(work=>{
        this.renderWorkout(work);
        return this._renderview(work)
      });
       workouts.insertAdjacentHTML('beforeend', html)
    }
  };
  _getPosition() {
    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), (err) => console.error(err));

  };
  _loadMap(position) {
    const { latitude: lat, longitude: log } = position.coords;
    this.#map = L.map('map').setView([lat, log],  this.#maxZoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);
    this.#map.on('click', this._showForm.bind(this));
    this.init();
    // create a red polyline from an array of LatLng points
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    openForm();
  };
  _toggleEventionField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  };
  _newWork(e) {
    e.preventDefault();

    //get data
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    const validator = (...inputs) => {
      return inputs.every((inputValue) => Number.isFinite(inputValue) && inputValue > 0);
    }
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (!validator(distance, duration, cadence)) {
        return alert('Number is Valid');
      }
      workout = new Running([lat, lng], distance, duration, cadence)

    }
    else if (type == 'cycling') {
      const elevation = +inputElevation.value;
      if (!validator(distance, duration, elevation)) {
        return alert('Number is Valid');
      }
      workout = new Cycling([lat, lng], distance, duration, elevation)
    }
    this.#workout.push(workout)
    this.renderWorkout(workout)
    workouts.insertAdjacentHTML('beforeend', this._renderview(workout))
    this._setLocalStorage(this.#workout);
    closeForm();
  }
  renderWorkout(workout) {
    L.marker(workout.coords).addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`
      }))
      .setPopupContent(workout.des)
      .openPopup();
  }
  _renderview(workout) {
    const checkType = workout.type === 'running';
    const html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
<h2 class="workout__title">${workout.des}</h2>
<div class="workout__details">
  <span class="workout__icon">${checkType ? '🏃‍♂️' : '🚴‍♀️'}</span>
  <span class="workout__value">${workout.distance}</span>
  <span class="workout__unit">km</span>
</div>
<div class="workout__details">
  <span class="workout__icon">⏱</span>
  <span class="workout__value">${workout.duration}</span>
  <span class="workout__unit">min</span>
</div>
<div class="workout__details">
  <span class="workout__icon">⚡️</span>
  <span class="workout__value">${workout.pace?.toFixed(1) || workout.speed?.toFixed(1)}</span>
  <span class="workout__unit">${checkType ? 'min/km' : 'km/h'}</span>
</div>
<div class="workout__details">
  <span class="workout__icon">${checkType ? '🦶🏼' : '⛰'}</span>
  <span class="workout__value">${workout.cadence || workout.evenGain}</span>
  <span class="workout__unit">${checkType ? 'spm' : 'm'}</span>
</div>
</li>`
    return html;
  }
  _moveToPopup(e) {
    const boxWorkout = e.target.closest('.workout');
    if(!boxWorkout) return ;
    const id = boxWorkout.dataset.id;
    const workout = this.#workout.find(box => box.id === id);
    this.#map.setView(workout.coords, this.#maxZoom,{anime:true,pan:{duration:1,}})
    workout.clicks++;
    this._getLocalStorage();
  }
  _setLocalStorage(){
    localStorage.setItem('workout', JSON.stringify(this.#workout));
  }
  _getLocalStorage(){
    return  JSON.parse(localStorage.getItem('workout')) || [];
  }
  reset(){
    localStorage.removeItem('workout');
    location.reload();
  }
}



const app = new App();



function openForm() {
  form.classList.remove('hidden');
}

function closeForm() {
  form.classList.add('hidden');
}

