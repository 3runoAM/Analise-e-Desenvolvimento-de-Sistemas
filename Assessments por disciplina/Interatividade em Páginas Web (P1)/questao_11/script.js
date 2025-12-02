const botao = document.querySelector('button');

botao.addEventListener('mouseover', () => botao.classList.toggle('background'));
botao.addEventListener('mouseout', () => botao.classList.toggle('background'));
botao.addEventListener('mousedown', () => botao.textContent = 'Alterado');