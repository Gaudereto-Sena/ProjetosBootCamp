/* Retira a tela de loading em 1s */
window.addEventListener("load", function () {
    setTimeout(() => {
        document.querySelector(".loader-body").style.display = "none";
        removePlaceHolders()
        
    }, 1000);
});

squareSizeTransform(menuCardsArray);

document.addEventListener("DOMContentLoaded", function () {

});

function removePlaceHolders() {
    setTimeout(() => {
        let placeHolder = document.getElementById("place-holder")
        placeHolder.remove()

        this.document.body.children[1].children[0].children[1].style.display = "flex"
        this.document.body.children[2].style.display = "flex"
        this.document.body.children[3].style.display = "flex"
        squareSizeTransform(menuCardsArray);
        carrosselInterval = setInterval(carrosselFunction, 20);
        
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    SetWindow()
    onScrollevent()
})

