window.onload = function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 1500);
};


// Mudança da cor da navbar ao rolar para baixo
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// Captura o componente jumbotron
const jumbotron = document.querySelector('.jumbotron');

let lastScrollTop = 0; // Posição do scroll anterior

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Rolando para baixo (deitar o componente para trás)
        jumbotron.classList.add('rotated');
    } else {
        // Rolando para cima (levantar o componente)
        jumbotron.classList.remove('rotated');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar números negativos
});


// Adicionar o efeito dinâmico da luz
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Atualiza as propriedades CSS dinâmicas
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
        // Ao sair, a luz desaparece
        card.style.setProperty('--mouse-x', `-9999px`);
        card.style.setProperty('--mouse-y', `-9999px`);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        const section = document.querySelector(".solucoes1");
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 50) { // 50px antes de entrar na tela
            section.classList.add("show");
        }
    }

    // Executa ao carregar e ao rolar a página
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Para verificar se já está visível ao carregar
});


document.addEventListener("DOMContentLoaded", function () {
    function revealCardsOnScroll() {
        const cards = document.querySelectorAll(".service-card");
        const windowHeight = window.innerHeight;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < windowHeight - 50) { // Quando estiver a 50px do viewport
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealCardsOnScroll);
    revealCardsOnScroll(); // Para checar se já estão visíveis ao carregar
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  document.querySelectorAll('.textoServicos, .imagem').forEach((element) => {
    observer.observe(element);
  });

