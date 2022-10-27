const carrosselContainer = document.getElementsByClassName("carrossel-container");
const carrosselNextBtn = document.getElementById("carrossel-next");
const carrosselPrevBtn = document.getElementById("carrossel-prev");
let carrosselItems;
let carrosselInterval = setInterval(carrosselFunction, 50);
let transformation = 0
let timeOutFunctionBtnId;

const savedCarrosselItemLenght = gamesData.length

function carrosselFunction() {
    let carrosselContent = "";

    let printCarrosselArray = () => {

        console.log(savedCarrosselItemLenght)
        for (i = 0; i < savedCarrosselItemLenght; i++) {
            carrosselContent +=
                `<div class="carrossel-item" onclick="modal.openModal(${i})">
                    <img src="./assets/img/${gamesData[i].image}" alt="">
                </div>`
        }

        carrosselContainer[0].innerHTML = carrosselContent
    }

    let completeCarrossel = () => {
        carrosselItems = document.querySelectorAll(".carrossel-item")
        let itemsOnScreen = carrosselContainer[0].offsetWidth / carrosselItems[0].offsetWidth;
        itemsOnScreen = Math.ceil(itemsOnScreen)
        for (i = 0; i < itemsOnScreen; i++) {
            carrosselContent +=
                `<div class="carrossel-item" onclick="modal.openModal(${i})">
                   <img src="./assets/img/${gamesData[i].image}" alt="">
                </div>`
        }

        carrosselContainer[0].innerHTML = carrosselContent
    }

    if (isScreenSet == false) {
        printCarrosselArray()

        completeCarrossel()

        isScreenSet = true;
        carrosselItems = document.querySelectorAll(".carrossel-item")

        carrosselItems.forEach(function (item) {
            item.addEventListener("mouseover", stopCarrossel)
            item.addEventListener("mouseout", startCarrossel)
        })
    }

    transformation -= 2;
    let transformText = `translateX(${transformation}px)`

    carrosselItems = Array.from(carrosselItems)
    let baseCarrosselContainerWidth = savedCarrosselItemLenght * carrosselItems[0].offsetWidth

    for (let item of carrosselItems) {
        item.style.transform = transformText;
    }
    if (transformation <= -baseCarrosselContainerWidth) {
        transformation = 0;
        transformText = `translateX(0px)`;
        for (let item of carrosselItems) {
            item.style.transform = transformText;
        }
    }
}

function carrosselNext() {
    carrosselNextBtn.disabled = true;

    let diferencaTamanho = carrosselItems[0].offsetWidth * savedCarrosselItemLenght + transformation;
    transformation -= carrosselItems[0].offsetWidth;

    let transformText = `translateX(${transformation}px)`
    clearTimeout(timeOutFunctionBtnId)
    clearTimeout(timeOutFunctionId)
    clearInterval(carrosselInterval)

    for (let item of carrosselItems) {
        item.style.transition = "none"
        if (transformation >= carrosselItems[0].offsetWidth * -savedCarrosselItemLenght) {
            item.style.transition = "transform 200ms linear"
            item.style.transform = transformText;
        } else {
            let translateToStart = `translateX(${diferencaTamanho}px)`
            item.style.transform = translateToStart;
            setTimeout(() => {
                item.style.transition = "transform 200ms linear"
                transformation = diferencaTamanho - carrosselItems[0].offsetWidth;

                transformText = `translateX(${transformation}px)`
                item.style.transform = transformText;
            }, 1);
        }
        setTimeout(() => {
            item.style.transition = "none"
        }, 300);
    }

    timeOutFunctionBtnId = setTimeout(() => {
        carrosselNextBtn.disabled = false;
        carrosselInterval = setInterval(carrosselFunction, 50);
    }, 305);



}

function carrosselPrev() {
    carrosselPrevBtn.disabled = true;
    let transformAtual = transformation
    transformation += carrosselItems[0].offsetWidth;
    let transformText = `translateX(${transformation}px)`

    clearTimeout(timeOutFunctionBtnId)
    clearTimeout(timeOutFunctionId)
    clearInterval(carrosselInterval)

    for (let item of carrosselItems) {
        if (transformation <= -2) {
            item.style.transition = "transform 200ms linear"
            item.style.transform = transformText;
        } else {
            let translateToEnd = `translateX(${carrosselItems[0].offsetWidth * -savedCarrosselItemLenght + transformAtual}px)`
            item.style.transform = translateToEnd;
            setTimeout(() => {
                item.style.transition = "transform 200ms linear"
                transformation = carrosselItems[0].offsetWidth * -savedCarrosselItemLenght + transformAtual + carrosselItems[0].offsetWidth;
                transformText = `translateX(${transformation}px)`
                item.style.transform = transformText;
            }, 1);
        }
        setTimeout(() => {
            item.style.transition = "none"
        }, 300);
    }

    timeOutFunctionBtnId = setTimeout(() => {
        carrosselPrevBtn.disabled = false;
        carrosselInterval = setInterval(carrosselFunction, 50);
    }, 305);
}

carrosselNextBtn.addEventListener("click", carrosselNext)

carrosselPrevBtn.addEventListener("click", carrosselPrev)

function stopCarrossel() {
    setTimeout(() => { clearInterval(carrosselInterval); }, 500)
    clearTimeout(timeOutFunctionId);
}

function startCarrossel() {
    timeOutFunctionId = setTimeout(() => {
        carrosselInterval = setInterval(carrosselFunction, 50)
    }, 500);
}