/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-use-before-define */
import './backBtn.scss';

const backToTop = document.createElement('a') as HTMLAnchorElement;
backToTop.textContent = '&uarr;';
backToTop.classList.add('back-to-top');
backToTop.classList.add('d-none');
