document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.currentTarget.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeTodasAbas();
            aba.classList.add('shows__lists--is-active');

            // Atualiza a classe dos botões para indicar o ativo
            removeClasseAtivaDosBotoes();
            botao.currentTarget.classList.add('shows__tabs__button--is-active');
        });
    }
});

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__lists--is-active');
    }
}

function removeClasseAtivaDosBotoes() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}
