const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, 'SUBTITUTION'],
    [47, '⚽ GOAL'],
    [61, 'SUBTITUTION'],
    [64, 'YELLOW CARD'],
    [69, 'RED CARD'],
    [70, 'SUBTITUTION'],
    [72, '⚽ GOAL'],
    [76, 'SUBTITUTION'],
    [80, '⚽ GOAL'],
    [90, 'YELLOW CARD'],   
]
);
// 1. tạo mảng
const newArray=[...new Set(gameEvents.values())];
console.log(newArray);
//2. 
gameEvents.delete(64);
//3.
const time=[...new Set(gameEvents.keys())][gameEvents.size-1]
console.log(`"1 sự kiện xảy ra, trung bình mỗi ${(time/gameEvents.size).toFixed(2)} phút`);

//4. 

for(const [key,value] of gameEvents){
    console.log(`[ ${ key <= 45 && 'FIRST' || 'SECOND'} HALF] ${key}: ${value}]`)
}