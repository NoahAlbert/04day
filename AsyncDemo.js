// demonstration on asyncronisity, middle should go last

console.log('start')
setTimeout(function (){
    console.log('middle')
}, 0)
console.log('end')
