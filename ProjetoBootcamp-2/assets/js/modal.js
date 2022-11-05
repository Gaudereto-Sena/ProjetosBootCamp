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
            child.animate(animationModalChilds, { duration: 200, interations: 1, fill: "forwards", direction: "normal" })
        }
    }

    closeModal() {
        setTimeout(this.modalParentFadeOut.bind(this), 255)
        this.modal.animate(animationModal, { duration: 250, interations: 1, fill: "forwards", direction: "reverse" })
        for (let child of this.modalChilds) {
            child.animate(animationModalChilds(child), { duration: 200, interations: 1, direction: "reverse" })
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
                <img src="./assets/img/carrossel/${gamesData[idx].image}">
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
    height: ["20%", "50%", "95%"],
    background: ["transparent", "var(--cor1)"]
}

let animationModalChilds = (child) => {return {
        backgroundColor: ['transparent', window.getComputedStyle(child).backgroundColor],
        color: ['transparent', window.getComputedStyle(child).color]
}}

let ratingIcons =
    `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    <i class="fa-regular fa-star"></i> `;