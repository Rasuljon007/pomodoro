// HANDLER FUNCTION

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();

  const form: HTMLFormElement = event.target as HTMLFormElement;

  const usernameInput = form.elements[0] as HTMLInputElement;
  const passwordInput = form.elements[1] as HTMLInputElement;

  const username: string = usernameInput.value;
  const password: string = passwordInput.value;

  console.log({ username, password });
}
// RENDER FUNCTION
function renderInitLogin() {
  const pageWrapper: HTMLDivElement = document.querySelector('.page-wrapper')!;

  pageWrapper.innerHTML = `<div class="container mt-[32px]">
        <h1>Login</h1>
        <form class="flex flex-col gap-4">
          <div>
            <label for="username" class="form-label">Username</label>
            <input class="form-control" id="username" placeholder="Enter username" />
          </div>
          <div>
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password" />
          </div>
          <button type="submit" class="btn btn-primary w-max">Login</button>
        </form>
      </div>`;
}

// LOGIC FUNCTION
function addListeners() {
  const form: HTMLFormElement = document.forms[0];
  form.addEventListener('submit', handleSubmit);
}

export function initLogin() {
  renderInitLogin();
  addListeners();
}
