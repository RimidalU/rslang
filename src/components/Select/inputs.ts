/* eslint-disable import/no-cycle */
const pageInput: HTMLInputElement = document.createElement('input');
pageInput.type = 'text';
pageInput.placeholder = 'Введите страницу';
pageInput.classList.add('page-input');
export default pageInput;
