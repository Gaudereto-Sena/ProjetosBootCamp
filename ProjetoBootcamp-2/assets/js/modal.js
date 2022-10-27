/* function openModal() {
    modalAnimation.modalFadeIn();
    modalAnimation.modalDown();
    modalAnimation.modalInputFadeIn();
}


function closeModal() {
    modalAnimation.modalUp();
    modalAnimation.modalInputFadeOut();
    setTimeout(modalFadeOut, 200);
} */

class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.modalChilds = this.modal.children;
        this.modalParent = this.modal.parentElement;
    }
    modalParentFadeIn() {
        this.modalParent.style.display = "flex";
    }

    modalParentFadeOut() {
        this.modalParent.style.display = "none";
    }

    openModal(idx) {
        this.modalParentFadeIn()
        this.setModalContent(idx)
        this.modal.animate(animationModal, { duration: 250, interations: 1, fill: "forwards", direction: "normal" });
        for (let child of this.modalChilds) {
            console.log(window.getComputedStyle(child))
            child.animate(animationModalChilds, { duration: 200, interations: 1, fill: "forwards", direction: "normal" })
        }
    }

    closeModal() {
        setTimeout(this.modalParentFadeOut.bind(this), 255)
        this.modal.animate(animationModal, { duration: 250, interations: 1, fill: "forwards", direction: "reverse" })
        for (let child of this.modalChilds) {
            console.log(child)
            child.animate(animationModalChilds, { duration: 200, interations: 1, direction: "reverse" })
        }
    }

    setModalContent(idx) {
        let modalHeader = this.modalChilds[0]
        let modalBody = this.modalChilds[1]
        let modalFooter = this.modalChilds[2]

        modalHeader.innerHTML =
            `<h2>${gamesData[idx].title}</h2>`

        modalBody.innerHTML =
            `<div class="modal-img">
                <img src="./assets/img/${gamesData[idx].image}">
            </div>
            <div class="modal-info"> 
                <div class="modal-info-description">
                    <p>${gamesData[idx].description}</p>
                </div>

                <div class="modal-info-table">
                    <div class="modal-info-item">
                        <i class="fa-regular fa-star"></i>
                        <div>${gamesData[idx].rating}</div>
                    </div>
                    <div class="modal-info-item">
                        <i class="fa-regular fa-clock"></i>
                        <div>${gamesData[idx].time}</div>
                    </div>
                    <div class="modal-info-item">
                        <i class="fa-solid fa-fire-flame-curved"></i>
                        <div>${gamesData[idx].weight}</div>
                    </div>
                </div>

            </div>`

        modalFooter.innerHTML =
            `<div class="modal-pricing"> 
                <div>PREÇO: ${gamesData[idx].price}</div>
            </div>
            <div>
                <button id="favorite-modal-btn" onclick="favoritar(${idx})">Adicionar a lista</button>
            </div>
            `
    }
}

let modal = new Modal("modal");

let animationModal = {
    top: ["-70%", "-35%", "0"],
    height: ["20%", "50%", "100%"],
    background: ["transparent", "var(--cor1)"]
}

let animationModalChilds = {
        backgroundColor: ['transparent', window.getComputedStyle(child).backgroundColor],
        color: ['transparent', window.getComputedStyle(child).color]
}

let ratingIcons =
    `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    <i class="fa-regular fa-star"></i> `;


/* let modalAnimation = {
    nomeInput: document.getElementById("nome-el"),
    textInput: document.getElementById("text-el"),
    modalBackground: document.getElementById("formulario-posts"),
    modal: document.getElementById("formulario-posts-container"),


    modalFadeIn: function () { this.modalBackground.style.display = "flex" },

    modalDown: function () {
        this.modal.style.animationName = "modal-down";
        this.modal.style.animationDuration = "250ms";
        this.modal.style.animationTimingFunction = "linear"
    },

    modalUp: function () {
        this.modal.style.animationName = "modal-up";
        this.modal.style.animationDuration = "250ms";
        this.modal.style.animationTimingFunction = "linear"
        this.modal.style.animationFillMode = "forwards"
    },

    modalInputFadeIn: function () {
        this.nomeInput.style.animationName = "input-fade-in";
        this.nomeInput.style.animationDuration = "300ms";
        this.nomeInput.style.animationTimingFunction = "linear"
        this.textInput.style.animationName = "input-fade-in";
        this.textInput.style.animationDuration = "300ms";
        this.textInput.style.animationTimingFunction = "linear"
    },

    modalInputFadeOut: function () {
        this.nomeInput.style.animationName = "input-fade-out";
        this.nomeInput.style.animationDuration = "150ms";
        this.nomeInput.style.animationTimingFunction = "linear"
        this.nomeInput.style.animationFillMode = "forwards"

        this.textInput.style.animationName = "input-fade-out";
        this.textInput.style.animationDuration = "150ms";
        this.textInput.style.animationTimingFunction = "linear"
        this.textInput.style.animationFillMode = "forwards"
    }
}

let modalFadeOut = () => modalAnimation.modalBackground.style.display = "none";
 */