// eslint-disable-next-line import/no-cycle
const sectionInput: HTMLInputElement = document.createElement('input');
sectionInput.type = 'text';
sectionInput.placeholder = 'Введите раздел(1-6)';
sectionInput.classList.add('section-input');
export default sectionInput;
