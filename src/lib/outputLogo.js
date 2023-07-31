import logo from '../assets/images/zentick_logo_192.png';

export function outputLogo() {
  const outputDiv = document.querySelector('.output');

  outputDiv.innerHTML = `<img src="${logo}">`;
}

