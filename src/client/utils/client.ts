import * as I from '../../common/interfaces';
import { isUserValid } from '../../common/validate';
import { insert, select } from './api';

const form = document.getElementById('form-user') as HTMLFormElement;
const loading = document.querySelector('.loading') as HTMLImageElement;
const API_URL = '/api/users';
const usersElement = document.querySelector('.allUsers') as HTMLDivElement;

export function vodka() {
  loading.style.display = 'none';
  listAllUsers();

  form.addEventListener('submit', (event) => {
    const formData = new FormData(form);
    const name = formData.get('name')?.toString() || '';
    const surname = formData.get('surname')?.toString() || '';

    const user: I.User = {
      name,
      surname
    };

    if (!isUserValid(user)) {
      return false;
    }

    console.log('user', user);

    form.style.display = 'none';
    loading.style.display = '';

    insert<I.User>('/api/users', user)
      .then((createdUser) => {
        form.style.display = '';
        loading.style.display = 'none';
        form.reset();
        listAllUsers();
        console.log(createdUser);
      })
      .catch((err: Error) => {
        console.error(`💥 Error: ${err.message}`);
      });

    event.preventDefault();
  });

  function listAllUsers() {
    select<I.User[]>('/api/users')
      .then((users) => {
        usersElement.textContent = '';
        users.reverse();

        users.forEach((user) => {
          const div = document.createElement('div');
          const header = document.createElement('h4');
          const surname = document.createElement('p');
          const created = document.createElement('small');

          header.textContent = user.name;
          surname.textContent = user.surname;
          created.textContent = new Date(user.created as number).toString();

          div.appendChild(header);
          div.appendChild(surname);
          div.appendChild(created);

          usersElement.appendChild(div);
        });
      })
      .catch((err: Error) => {
        console.error(`💥 Error: ${err.message}`);
      });
  }
}