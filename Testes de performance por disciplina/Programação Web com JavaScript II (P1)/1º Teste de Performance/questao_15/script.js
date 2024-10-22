let count = 0;
while(true){
    console.log(count);
    count++

    let chanceToBreak = Math.round(Math.random() * 10)
    if(chanceToBreak === 1){
        break
    }

    let chanceToIncreaseCount = Math.round(Math.random() * 100)
    if(chanceToIncreaseCount <= 75){
        count++
    }
}