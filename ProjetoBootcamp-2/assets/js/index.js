const menuCardsArray = document.getElementsByClassName("menu-card");
const mostrarCardsBtn = document.getElementById("mostrar-cards-btn")
const todosJogosSection = document.getElementById("todos-jogos-section")
const menuHamburguerBtn = document.getElementById("menu-hamburguer-btn")
const primaryNavigation = document.getElementById("primary-navigation-id")
let isMenuOpen = false;
let isCardshidden = true;
let isScreenSet = false;
let timeOutFunctionId;

let gamesData = [
    {
        title: "Star Wars",
        description: "Experimente a Guerra Civil Galáctica como nunca antes. Em Rebellion , você controla todo o Império Galáctico ou a incipiente Aliança Rebelde. Você deve comandar naves estelares, responder pelos movimentos de tropas e reunir sistemas para sua causa. Dadas as diferenças entre o Império e a Aliança Rebelde, cada lado tem diferentes condições de vitória e você precisará ajustar seu estilo de jogo dependendo de quem você representa:",
        image: "starWars.jpg",
        rating: 8.4,
        weight: 3.8,
        time: "180-240 min",
        price: "R$600,00"
    },
    {
        title: "Rising Sun",
        description: "Os grandes e esquecidos Kami retornaram do submundo, descontentes com os assuntos do atual Shōgun do Império. No início da primavera no Grande Ano Novo, os Kami reuniram seus clãs sagrados com uma missão: recuperar as terras de Nippon e devolvê-los às suas honrosas tradições espirituais.",
        image: "risingSun.jpg",
        rating: 7.8,
        weight: 3.8,
        time: "90-120 min",
        price: "R$500,00"
    },
    {
        title: "Scythe",
        description: "Scythe é um jogo de construção de motores ambientado em um período de história alternativa da década de 1920. É uma época de agricultura e guerra, corações partidos e engrenagens enferrujadas, inovação e valor. Em Scythe , cada jogador representa um personagem de uma das cinco facções da Europa Oriental que estão tentando ganhar sua fortuna e reivindicar a participação de sua facção nas terras ao redor da misteriosa Fábrica.",
        image: "scythe.jpg",
        rating: 8.2,
        weight: 3.4,
        time: "90-120 min",
        price: "R$600,00"
    },
    {
        title: "Marvel Champions",
        description: "Marvel Champions: The Card Game convida os jogadores a encarnar heróis icônicos do Universo Marvel enquanto lutam para impedir que vilões infames executem seus esquemas desonestos. Como um jogo de cartas vivo, Marvel Champions é suportado com lançamentos regulares de novos produtos, incluindo novos heróis e cenários.",
        image: "marvelChampions.jpg",
        rating: 8.2,
        weight: 2.9,
        time: "45-90 min",
        price: "R$350,00"
    },
    {
        title: "7 Wonders Duel",
        description: "Você é o líder de uma das 7 grandes cidades do Mundo Antigo. Reúna recursos, desenvolva rotas comerciais e afirme sua supremacia militar. Construa sua cidade e construa uma maravilha arquitetônica que transcenderá os tempos futuros.",
        image: "7wondersDuel.jpg",
        rating: 8.1,
        weight: 2.2,
        time: "30 min",
        price: "R$200,00"
    },
    {
        title: "Summoner Wars",
        description: "Summoner Wars é um jogo de cartas de 2 a 4 jogadores rápido e cheio de ação. Os jogadores assumem o papel de Summoners: seres poderosos que aproveitam o poder das misteriosas Summoning Stones para liderar sua corrida para conquistar o planeta devastado pela guerra de Itharia. Esses Summoners exercem uma magia terrível no campo de batalha, congelando seus inimigos no lugar, drenando o poder de seus inimigos e até trazendo chuvas de fogo dos céus.",
        image: "summonerWars.jpg",
        rating: 7.2,
        weight: 2.3,
        time: "30-60 min",
        price: "R$350,00"
    },
    {
        title: "Terra Mystica",
        description: "Terra Mystica é um jogo cheio de informações, sem sorte, que premia o planejamento estratégico. Cada jogador governa um dos 14 grupos. Com sutileza e habilidade, o jogador deve tentar dominar a maior área possível e desenvolver as habilidades desse grupo. Existem também quatro cultos religiosos nos quais você pode progredir. Para fazer tudo isso, cada grupo tem habilidades e habilidades especiais.",
        image: "terraMystica.jpg",
        rating: 8.1,
        weight: 4.0,
        time: "60-150 min",
        price: "R$700,00"
    }
];

/* Função que abre/fecha menu responsivo */
menuHamburguerBtn.addEventListener("click", function () {
    if (isMenuOpen) {
        menuHamburguerBtn.classList.remove("is-active")
        menuHamburguerBtn.style.top = "0"
        primaryNavigation.style.top = "-212px"
        isMenuOpen = false;
    } else {
        menuHamburguerBtn.classList.add("is-active")
        menuHamburguerBtn.style.top = "205px"
        primaryNavigation.style.top = "0px"
        isMenuOpen = true;
    }
})

squareSizeTransform(menuCardsArray);
/* Função que transforma em quadrados o menu de cards */
function squareSizeTransform(array) {
    for (let card of array) {
        let width = card.offsetWidth;
        width = `${width.toString()}px`;
        card.style.height = width;
    }
}

let isScreenSetFunction = () => isScreenSet = false;

/* Quando a alterar o tamanho da tela, executa a função para manter os cards sempre quadrados */
window.onload = window.addEventListener("resize", function () {
    squareSizeTransform(menuCardsArray);
    clearTimeout(timeOutFunctionId)
    timeOutFunctionId = setTimeout(isScreenSetFunction, 500);
});

/* Função que abre/fecha seção todos os jogos */
mostrarCardsBtn.addEventListener("click", function () {
    let cardMask = document.getElementById("cards-mask");
    if (isCardshidden) {
        todosJogosSection.style.height = "auto";
        cardMask.style.display = "none";
        document.querySelector("#todos-jogos-section > #container-cards").style.overflow = "unset";
        mostrarCardsBtn.innerText = "Mostrar menos"
        isCardshidden = false;
    } else {
        isCardshidden = true;
        cardMask.style.display = "block";
        todosJogosSection.style.height = "100vh";
        document.querySelector("#todos-jogos-section > #container-cards").style.overflow = "hidden";
        mostrarCardsBtn.innerText = "Mostrar mais"
    }
});

