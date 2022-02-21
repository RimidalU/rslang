/* eslint-disable import/no-cycle */
const pageInput: HTMLInputElement = document.createElement('input');
pageInput.type = 'text';
pageInput.placeholder = 'Введите страницу(1-30)';
pageInput.classList.add('page-input');
export default pageInput;
