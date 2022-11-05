let isPopoverActive = false;
let favoritos = [];
let menuCards = document.getElementsByClassName("menu-card-over");
let cards = [
    {
        title: "Game of Thrones",
        rating: 8.0,
        image: "gotBanner.jpg"
    },
    {
        title: "Eldritch Horror",
        rating: 8.0,
        image: "eldritch.jpg"
    },
    {
        title: "Takeneko",
        rating: 8.0,
        image: "takeneko2.jpg"
    },
    {
        title: "Brass: Birdgam",
        rating: 8.0,
        image: "brassBirdgam.jpg"
    },
    {
        title: "Gloomhaven",
        rating: 8.0,
        image: "gloomhaven.jpg"
    },
]

let menuCardsNames = [
    "Cardgames",
    "Dungeon Crawlers",
    "Work Placements",
    "Euro Games",
    "War Games",
]

class Popover {
    constructor(popoverId) {
        this.popover = popoverId;
        this.popoverEl = null;
    }


    showPopoverAdd(event, idx) {
        if (isPopoverActive == false) {
            let body = document.getElementsByTagName("body")[0]
            
            let div = document.createElement("div");
            div.className = "popover";
            div.id = "popover-adicionado";
            div.innerHTML =
                `<div class="popover-content">
                    <p><b>${cards[idx].title}</b> adicionado aos favoritos</p>
                </div>`
            body.append(div)

            this.popoverEl = document.getElementById(this.popover)
            this.popoverEl.style.display = "flex";
            this.popoverEl.style.top = `${event.pageY - 25}px`
            this.popoverEl.style.left = `${event.pageX - this.popoverEl.offsetWidth - 20}px`
            isPopoverActive = true;
            event.target.disabled = true;
            favoritos.push(cards[idx]);

            this.popoverAutoRemoveAnimation(event, this.popoverEl)
        };

    }

    showPopover(event, name) {
        this.popoverEl = document.getElementById(this.popover);
        this.removePopover(this.popoverEl);
        event.target.innerHTML +=
            `<div id="${this.popover}" class="popover">
                <div class="popover-content">
                    <p>${name}</p>
                </div>
            </div>`;
        this.popoverEl = document.getElementById(this.popover);
        if (this.popoverEl != null) {
            this.popoverEl.style.display = "flex";
            this.popoverEl.style.width = `${event.target.offsetWidth}px` 
            this.popoverEl.style.top = `${-41}px`
        }
    }


    popoverAutoRemoveAnimation(event, element) {
        this.popoverEl.animate({
            background: [window.getComputedStyle(this.popoverEl).backgroundColor, "transparent"],
            borderColor: [window.getComputedStyle(this.popoverEl).borderColor, "transparent"],
            color: [window.getComputedStyle(this.popoverEl).color, "transparent"]
        },
            { duration: 2000, interations: 1, delay: 1000 });

        setTimeout(function () {
            event.target.disabled = false
            isPopoverActive = false;
        }, 3000);

        setTimeout(this.removePopover, 2949, element);

    }

    removePopover(element) {
        if (element != null) {
            element.style.display = "none"
            element.remove();
        }

    }

    removePopoverMenu() {
        console.log("teste")
        if (this.popoverEl != null) {
            this.popoverEl.style.display = "none"
            this.popoverEl.remove();
        }
    }


}

let popoverAdd = new Popover("popover-adicionado")
let popoverInfo = new Popover("popover-info")


function printCards() {
    let cardsContainer = document.getElementById("container-cards")
    let cardsContainerContent = `<div id="cards-mask"></div>`;
    let idx = 0;
    for (eachCard of cards) {
        cardsContainerContent += `<div class="card">
        <div class="card-head">
            <img src="./assets/img/cards/${eachCard.image}" alt="">
        </div>
        <div class="card-body">
            <h3>${eachCard.title}</h3>

            <div class="rating">
                <p>Rating</p>
                <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            </div>

        </div>
        <div class="card-footer">
            <button onclick="popoverAdd.showPopoverAdd(event,${idx})">+</button>
        </div>
    </div>`;

        idx++;
    }

    cardsContainer.innerHTML = cardsContainerContent
}

function addEventsToMenuCards() {
    for (let i = 0; i < menuCards.length; i++) {
        menuCards[i].addEventListener("mouseover", function (event) {
            event.preventDefault();
            popoverInfo.showPopover(event, menuCardsNames[i])
        });

        menuCards[i].addEventListener("mouseout", function () {
            popoverInfo.removePopoverMenu()
        })
    }
}


printCards();
addEventsToMenuCards()

