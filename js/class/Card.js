export class Card {

    constructor(img_url, card_name, card_description = "") {
        this.img_url = img_url
        this.card_name = card_name
        this.card_description = card_description
    }

    toString() {
        return `
        <div class="card">
            <img src="${this.img_url}" alt="Most liked image">
            <div class="card-text">
                <p class="card-title">${this.card_name}</p>
                <p class="card-description">${this.card_description} </p>
            </div>
            <span class="play-button"><i class="fa-solid fa-circle-play fa-lg"></i></span>
        </div>`;
    }
}