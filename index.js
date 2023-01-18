const gifts = ["Guadalupe", "Ollie", "Aki"]

function writeCards(gifts) {
    const event = "birthday"
    const message = []
    for (let i = 0; i < gifts.length; i++) {
        message.push(`Thank you, ${gifts[i]}, for the wonderful surprise gift!`) 
    }
    return message 
}

writeCards(gifts)

let integers = 11
function countDown(integers) {
    while (integers >= 0) {
        console.log(integers--)
}
return integers 
}
countDown(integers)