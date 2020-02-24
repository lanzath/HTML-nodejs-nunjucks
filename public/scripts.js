//selecionando os conteúdos
const modalOverlay = document.querySelector('.modal-overlay');
const courses = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

//loop para percorrer e abrir card por card
for (let card of courses) {
    const course = card.getAttribute('id')
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${course}`;
    })
}

//fechando o modal
document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = '';
})

//maximizando o modal por inserção e remoção de classe
document.querySelector('.maximize-modal').addEventListener('click', () => {
    if (modal.classList.contains('maximized')) {
        modal.classList.remove('maximized');
    } else {
        modal.classList.add('maximized');
    }
}
)