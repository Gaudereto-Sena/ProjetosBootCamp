let isPopoverActive = false;
let favoritos = [];
let menuCards = document.getElementsByClassName("menu-card-over");
let cards = [
    {
        title: "Game of Thrones",
        rating: 8.0,
        image: "gotBanner.jpg",
        price: "R$600,00"
    },
    {
        title: "Eldritch Horror",
        rating: 8.0,
        image: "eldritch.jpg",
        price: "R$450,00"
    },
    {
        title: "Takeneko",
        rating: 8.0,
        image: "takeneko2.jpg",
        price: "R$350,00"
    },
    {
        title: "Brass: Birdgam",
        rating: 8.0,
        image: "brassBirdgam.jpg",
        price: "R$650,00"
    },
    {
        title: "Gloomhaven",
        rating: 8.0,
        image: "gloomhaven.jpg",
        price: "R$1300,00"
    },
]

let menuCardsNames = [
    "Cardgames",
    "Dungeon Crawlers",
    "Work Placements",
    "Euro Games",
    "War Games",
] /* Array para popover do menu quadrado no header (sem funcionalidade por enquanto) */

class Popover {
    constructor(popoverId) {
        this.popover = popoverId;
        this.popoverEl = null;
    }

    showPopoverAdd(event, idx) { /* Método para mostrar popover que adiciona aos favoritos o jogo selecionado */
        if (isPopoverActive == false) {
            /* Se um popover não estiver ativo, a função inicia */
            let body = document.body
            let div = document.createElement("div");
            div.className = "popover";
            div.id = "popover-adicionado";

            if (favoritos.includes(cards[idx]) === false) { /* Texto dinâmico caso o item já estiver adicionado aos favoritos */
                div.innerHTML =
                    `<div class="popover-content">
                    <p><b>${cards[idx].title}</b> adicionado aos favoritos</p>
                </div>`
            } else {
                div.innerHTML =
                    `<div class="popover-content">
                    <p><b>${cards[idx].title}</b> já foi adicionado aos favoritos</p>
                </div>`
            }

            body.append(div)

            this.popoverEl = document.getElementById(this.popover) /* Com o popover já adicionado ao body, este é designado para o atributo do objeto */
            this.popoverEl.style.display = "flex";
            this.popoverEl.style.top = `${event.pageY - 25}px` /* O popover aparecera de acordo com a posição do mouse, onde houve o click */
            this.popoverEl.style.left = `${event.pageX - this.popoverEl.offsetWidth - 20}px`
            isPopoverActive = true;
            event.target.disabled = true; /* Desabilita o botão para impossibilitar multiplos clicks */


            favoritar(cards[idx]) /* Função que adiciona no favoritos (menu-lateral) */

            this.popoverAutoRemoveAnimation(event, this.popoverEl) /* Executa função que ira remover o popover com uma animação de fade, recebendo o event e o elemento html que foi adicionado (O popover)*/
        };

    }

    showPopover(event, name) { /* Método para popovers sobre o menu quadrado na parte superior do site */
        this.popoverEl = document.getElementById(this.popover); /* Caso exista um elemento já de popover já criado para essa função, o mesmo é selecionado para ser removido pela função abaixo */
        this.removePopover(this.popoverEl);
        event.target.innerHTML +=
            `<div id="${this.popover}" class="popover">
                <div class="popover-content">
                    <p>${name}</p>
                </div>
            </div>`;
        this.popoverEl = document.getElementById(this.popover); /* Seleciona o popover criado para ser printado na tela */
        if (this.popoverEl != null) {
            this.popoverEl.style.display = "flex";
            this.popoverEl.style.width = `${event.target.offsetWidth}px`
            this.popoverEl.style.top = `${-41}px`
            /* o popover aparece sobre o card em que o mouse está em cima */
        }
    }


    popoverAutoRemoveAnimation(event, element) {
        /* Animação de fade do popover */
        this.popoverEl.animate({
            background: [window.getComputedStyle(this.popoverEl).backgroundColor, "transparent"],
            borderColor: [window.getComputedStyle(this.popoverEl).borderColor, "transparent"],
            color: [window.getComputedStyle(this.popoverEl).color, "transparent"]
        },
            { duration: 2000, interations: 1, delay: 1000 });

        /* Após 3s, o botão deixa de estar desabilitado e é permitido adicionar um novo item aos favoritos */
        setTimeout(function () {
            event.target.disabled = false
            isPopoverActive = false;
        }, 3000);

        setTimeout(this.removePopover, 2949, element); /* Finção que irá remover o popover */

    }

    removePopover(element) { /* Essa é a função que é usada para remover os popover quando a mesma vem pelos metodos */
        if (element != null) {
            element.style.display = "none"
            element.remove();
        }

    }

    removePopoverMenu() { /* Remove o popover quando a o evento de mouseout */
        if (this.popoverEl != null) {
            this.popoverEl.style.display = "none"
            this.popoverEl.remove();
        }
    }


}

/* Instânciados dois popovers */
let popoverAdd = new Popover("popover-adicionado")
let popoverInfo = new Popover("popover-info")

/* Função que printa as cartas que serão adicionadas na seção todos os jogos */
function printCards() {
    let cardsContainer = document.getElementById("container-cards")
    let cardsContainerContent = `<div id="cards-mask"></div>`; /* Cria a mascara opaca sobre as cartas */
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

/* Adiciona os eventos sobre o menu de cards (quadrados) na parte inicial do site */
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

