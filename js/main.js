import {Card} from '/js/class/Card.js';

const YORUSHIKA_RELEASES_URL = "https://api.discogs.com/artists/7156729/releases"


async function getList() {
    const response = await fetch(YORUSHIKA_RELEASES_URL)
    return response.json()
}

const idCardListMadeForUser = "card-list-madeForUser"

let madeForUserDiv = document.getElementById(idCardListMadeForUser);

var cardsResponse = await getList()
var cardsJSON = cardsResponse.releases
var cards = []

for (let i = 0; i < cardsJSON.length; i++) {
    let tempCard = new Card("img/daily-playlist.jpeg", cardsJSON[i].title, cardsJSON[i].artist)
    cards.push(tempCard)
}

cards.forEach(card => {
    madeForUserDiv.innerHTML += card.toString()    
});

