// const team = ['Messi', 'Ronaldo', 'Mpabe','Messi', 'Minama', 'Robeto'];

// const players=new Set(team);
// players.add('hoài Nam');
// players.delete('Minama');
// const newTeam=[...players];
// console.log(newTeam[0]);
// for(const player in players){
//     console.log(player);
// }
const rest=new Map();
rest.set('name','Hoài Nam')
.set('name','messi')
.set('open',8)
.set('close',12)
.set(true,'i love you')
.set(false,'i dont love you');
const time=7.8;
console.log(rest.get(time>=rest.get('open') && time<=rest.get('close')));
console.log(rest.has('messi'));
rest.delete('name')
console.log(rest['name'])