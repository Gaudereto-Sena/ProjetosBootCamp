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
        console.log("funcionou")
        let placeHolder = document.getElementById("place-holder")
        placeHolder.remove()
        
        this.document.body.children[1].style.display = "block"
        this.document.body.children[2].style.display = "block"
        this.document.body.children[3].children[1].children[1].style.display = "flex"
        this.document.body.children[4].style.display = "flex"
        this.document.body.children[5].style.display = "flex"
        squareSizeTransform(menuCardsArray);
    }, 2500);
}
