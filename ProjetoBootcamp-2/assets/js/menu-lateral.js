const menuLateral = document.getElementById("menu-lateral");
const menuLateralConteudo = menuLateral.children;
const listaFavoritos = document.getElementById("tabela-favorito");
const carrosselFavoritos = document.getElementById("carrossel-favoritos");
let isFavoritoEmpty = true;

setSlickCarrossel() /* Aciona o a função do slickslider */

function openMenuLateral() {
    /* Faz aparecer o menu lateral */
    menuLateral.style.display = "block";
    /* Adiciona animação de exibição do menu lateral */
    menuLateral.animate({
        width: ["0", `${menuLateral.offsetWidth * 0.2}px`, `${menuLateral.offsetWidth * 0.4}px`, `${menuLateral.offsetWidth * 0.6}px`, `${menuLateral.offsetWidth * 0.8}px`, `400px`]
    }, { duration: 500, interations: 1, fill: "forwards" });
    /* Animação do conteudo do menu lateral */
    menuLateralConteudo[0].animate({
        opacity: ["0", "0", "0", "0", "1"],
    }, { duration: 500, interations: 1, fill: "forwards" });

}

function closeMenuLateral() {
    /* Animação para fechamento do menu lateral */
    menuLateral.animate({
        width: ["0", `${menuLateral.offsetWidth * 0.2}px`, `${menuLateral.offsetWidth * 0.4}px`, `${menuLateral.offsetWidth * 0.6}px`, `${menuLateral.offsetWidth * 0.8}px`, `400px`]
    }, { duration: 500, interations: 1, fill: "backwards", direction: "reverse" })
    /* Animação para fechamento do conteudo do menu lateral */
    menuLateralConteudo[0].animate({
        opacity: ["0", "0", "0", "0", "1"],
    }, { duration: 500, interations: 1, fill: "backwards", direction: "reverse" });

    setTimeout(() => {
        menuLateral.style.display = "none";
    }, 400)
}

function printFavoritos() {
    /* Função executada ao abrir o menu lateral que ira adicionar os favoritos em forma de tabela */
    listaFavoritos.children[1].innerHTML = ""
    console.log(favoritos)
    if (favoritos.length > 0) {
        favoritos.forEach(function callback(favorito, idx) {
            let tr = document.createElement("tr");
            tr.className = "linha-favorito"
            tr.innerHTML = `<td>${favorito.title}</td>
                        <td>${favorito.rating}</td>
                        <td>${favorito.price}</td>
                        <td class="delete-favorito"onclick="removeFavoritos(${idx})">x</td>
                        `;
            listaFavoritos.children[1].append(tr);
        });
    }
}

function favoritar(item) {

    if (favoritos.includes(item) === false) {

        favoritos.push(item); /* Adiciona aos favoritos o card selecionado */
        if (isCarrosselFavoritos === false) {
            let carrosseSlicklItems = `<div style="background-image: url('./assets/img/cards/${item.imageFav}')"></div>` /* cria uma div para ser inserida no carrossel */
            $('.carrossel-slick').slick('slickAdd', `${carrosseSlicklItems}`);
            if (favoritos.length === 1) {
                $('.carrossel-slick').slick('slickAdd', `${carrosseSlicklItems}`);
            } else if (favoritos.length === 2) {
                $('.carrossel-slick').slick('slickRemove', 0);
            }
        } else {
            let carrosseSlicklItems = `<div style="background-image: url('./assets/img/carrossel/${item.imageFav}')"></div>` /* cria uma div para ser inserida no carrossel */
            $('.carrossel-slick').slick('slickAdd', `${carrosseSlicklItems}`);
            if (favoritos.length === 1) {
                $('.carrossel-slick').slick('slickAdd', `${carrosseSlicklItems}`);
            } else if (favoritos.length === 2) {
                $('.carrossel-slick').slick('slickRemove', 0);
            }
            isCarrosselFavoritos = false;
        }

        /* Adiciona o item no slickslider do menu lateral */
        printFavoritos() /* Atualiza a tabela de favoritos (função se encontra no menu lateral) */

        if (isFavoritoEmpty) { /* Função que remove a div inicial do favoritos, quando este está vazio */
            $('.carrossel-slick').slick('slickRemove', 0);
            isFavoritoEmpty = false;
        }
    }
}

function removeFavoritos(idx) {
    let carrosseSlicklItems = ""
    favoritos.splice(idx, 1);
    console.log(favoritos)
    $('.carrossel-slick').slick('slickRemove', idx);
    if (favoritos.length === 0) {
        $('.carrossel-slick').slick('slickRemove', 0);
        carrosseSlicklItems = `<div><p>Favoritos vazio</p></div>`
        isFavoritoEmpty = true;
    } else if (favoritos.length === 1) {
        carrosseSlicklItems = `<div style="background-image: url('./assets/img/cards/${favoritos[0].image}')"></div>` /* cria uma div para ser inserida no carrossel */
    }
    $('.carrossel-slick').slick('slickAdd', `${carrosseSlicklItems}`);
    printFavoritos()

}


function setSlickCarrossel() { /* Função que inicia o slickslider */
    $('.carrossel-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        infinite: true,
        prevArrow: `<button type="button" class="slick-prev">
                        <i class="fa-solid fa-caret-left"></i>
                    </button>`,
        nextArrow: `<button type="button" class="slick-next">
                        <i class="fa-solid fa-caret-right"></i>
                    </button>`
    });
}


