import ApiResource from './src/module/api';
import App from './src/module/app';

const app = new App();

window.location.hash = '#main-page';

app.run();

let apiResource = new ApiResource();

apiResource.getWords(1, 3);

apiResource.getWord('5e9f5ee35eb9e72bc21af7de');
