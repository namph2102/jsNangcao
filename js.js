const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'SUBTITUTION'],
    [47, 'GOAL'],
    [61, 'YELLOW CARD'],
    [64, 'RED CARD'],
    [69, 'SUBTITUTION'],
    [70, 'GOAL'],
    [80, 'GOAL'],
    [91, 'GOAL'],
]
);

// 1. Events 
const events=new Set();
// console.log(gameEvents);
const newArray=[...new Set(gameEvents)];
for(const [key,value] of gameEvents){
    events.add(value);
}
console.log(`Check from minutes 64 :${ gameEvents.has(64)}`);
gameEvents.delete(64);
// console.log(gameEvents);
console.log('An event ')