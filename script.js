let nome;
let tecnologias = [];
let areaEscolhida;
let linguagemEscolhida;

// Funções para mostrar e esconder telas
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'block';
}

// Tela de boas-vindas
document.getElementById('nome-btn').addEventListener('click', () => {
    nome = document.getElementById('nome').value.trim();
    if (nome) {
        document.getElementById('resultado-titulo').textContent = `Bem-vindo(a), ${nome}!`;
        showScreen('area');
        
    } else {
        alert('Por favor, insira seu nome.');
    }
});

// Tela de escolha de área
document.getElementById('front-end-btn').addEventListener('click', () => {
    areaEscolhida = 'front-end';
    showScreen('linguagem-front');
});

document.getElementById('back-end-btn').addEventListener('click', () => {
    areaEscolhida = 'back-end';
    showScreen('linguagem-back');
});

// Tela de escolha de linguagem Front-end
document.getElementById('react-btn').addEventListener('click', () => {
    linguagemEscolhida = 'React';
    showScreen('especializacao');
});

document.getElementById('vue-btn').addEventListener('click', () => {
    linguagemEscolhida = 'Vue';
    showScreen('especializacao');
});

// Tela de escolha de linguagem Back-end
document.getElementById('csharp-btn').addEventListener('click', () => {
    linguagemEscolhida = 'C#';
    showScreen('especializacao');
});

document.getElementById('java-btn').addEventListener('click', () => {
    linguagemEscolhida = 'Java';
    showScreen('especializacao');
});

// Tela de especialização
document.getElementById('espec-front-btn').addEventListener('click', () => {
    document.getElementById('resultado-texto').textContent = `Você se tornará um grande especialista em Front-end com ${linguagemEscolhida}!`;
    showScreen('tecnologia');
});

document.getElementById('espec-back-btn').addEventListener('click', () => {
    document.getElementById('resultado-texto').textContent = `Você se tornará um grande especialista em Back-end com ${linguagemEscolhida}!`;
    showScreen('tecnologia');
});

document.getElementById('fullstack-btn').addEventListener('click', () => {
    document.getElementById('resultado-texto').textContent = `Você se tornará um grande especialista em Fullstack com ${linguagemEscolhida}!`;
    showScreen('tecnologia');
});

// Tela de tecnologias
document.getElementById('tecnologia-btn').addEventListener('click', () => {
    const tecnologiaInput = document.getElementById('tecnologia-input');
    const tecnologia = tecnologiaInput.value.trim();
    if (tecnologia) {
        tecnologias.push(tecnologia);
        const tecnologiaItem = document.createElement('p');
        tecnologiaItem.textContent = tecnologia;
        document.getElementById('tecnologias-lista').appendChild(tecnologiaItem);
        tecnologiaInput.value = '';
    }
   
});

document.getElementById('tecnologia-finalizar-btn').addEventListener('click', () => {
    document.getElementById('tecnologias-aprendizado').textContent = `Tecnologias que você gostaria de aprender: ${tecnologias.join(', ')}`;
    showScreen('resultado');
});

