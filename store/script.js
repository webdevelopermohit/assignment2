let store={
    item1:20,
    item2:20,
    item3:15
}
let convertedPrice;
function update(){
    return Object.entries(store).map(([item,price])=>[item,price*80])
}
convertedPrice=Object.fromEntries(update())
console.log(convertedPrice)