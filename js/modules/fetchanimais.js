import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animais');
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero> ${animal.total}`;
    return div;
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(target);
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animacaoNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animacaoNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
