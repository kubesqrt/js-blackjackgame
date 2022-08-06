let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJAck = false
let isAlive = true

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let player = {

    name: "Per",
    chips: "145"
}

playerEl.textContent = player.name +  ": $" + player.chips

playerEl.textContent = playerName + ": $" + playerChips

function getRandomCard(){
 let x = Math.floor(Math.random()*13 ) + 1
 if(x === 1){
    x = 11
 } else if(x >=11){
    x = 10
 } else{
    x = x 
 }
 return x
}

function startGame() {
    
    cardsEl.textContent = "cards:"
    for( let i = 0; i <cards.length; i++){
        cardsEl.textContent += cards[i] +" "
    }
    sumEl.textContent = "sum:" + sum
    if (sum <= 20){
        message = "Would you like to draw another card"
    } else if (sum === 21){
        message = "blackjack"
        hasBlackJack = true
    
    } else {
        console.log("you're out of the game")
        isAlive = false
    
    }
    messageEl.textContent = message

}

function newCard(){
    console.log("Drawing a new card")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    startGame()

}


