import { initLogin } from './pages/login';
import { initMovies } from './pages/movies';
import { initRegister } from './pages/register';

function addListeners() {
  const moviesLink = document.querySelector('#movies-link')!;
  const loginLink = document.querySelector('#login-link')!;
  const registerLink = document.querySelector('#register-link')!;

  moviesLink.addEventListener('click', initMovies);
  loginLink.addEventListener('click', initLogin);
  registerLink.addEventListener('click', initRegister);
}

function init() {
  addListeners();
  initMovies();
}

window.addEventListener('load', init);
