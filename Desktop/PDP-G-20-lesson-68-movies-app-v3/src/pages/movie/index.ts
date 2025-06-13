import { initMovies } from '../movies';
import { addMovie } from '../movies/db';
import type { Genre } from '../movies/types';

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();

  const form: HTMLFormElement = event.target as HTMLFormElement;

  const titleInput = form.elements[0] as HTMLInputElement;
  const genreSelect = form.elements[1] as HTMLSelectElement;
  const stockInput = form.elements[2] as HTMLInputElement;
  const rateInput = form.elements[3] as HTMLInputElement;

  const title: string = titleInput.value;
  const genre = genreSelect.value as Genre;
  const stock: number = Number(stockInput.value);
  const rate: number = Number(rateInput.value);

  initMovies();
  addMovie({ title, genre, stock, rate });
}

function renderInitMovie() {
  const pageWrapper: HTMLDivElement = document.querySelector('.page-wrapper')!;

  pageWrapper.innerHTML = `<div class="container mt-[32px]">
        <h1>Movie Form</h1>
        <form class="flex flex-col gap-4">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" class="form-control" value="" />
          </div>
          <div class="form-group">
            <label for="genreId">Genre</label>
            <select name="genreId" id="genreId" class="form-control" default-value="Action">
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Thriller">Thriller</option>
            </select>
          </div>
          <div class="form-group">
            <label for="numberInStock">Number in Stock</label>
            <input type="number" name="numberInStock" id="numberInStock" class="form-control" value="" />
          </div>
          <div class="form-group">
            <label for="dailyRentalRate">Rate</label>
            <input type="text" name="dailyRentalRate" id="dailyRentalRate" class="form-control" value="" />
          </div>
          <button class="btn btn-primary w-max">Save</button>
        </form>
      </div>`;
}

// LOGIC FUNCTION
function addListeners() {
  const form: HTMLFormElement = document.forms[0];
  form.addEventListener('submit', handleSubmit);
}

export function initMovie() {
  renderInitMovie();
  addListeners();
}
