// import ApiResource from './src/module/api';
import App from './src/module/app';
import { getStorage } from './src/module/storage';

const app = new App();

window.location.hash = '#main-page';

app.run();

const apiResource = new ApiResource();

apiResource.userState = getStorage();

apiResource.getWords();

// apiResource.getWord('5e9f5ee35eb9e72bc21af7de');

// apiResource.createUser({
//   name: 'Us87rffjhr 4y',
//   email: 'striorffjjgi7odng@rss.com',
//   password: 'ste7fjhgryng23456',
// });

// apiResource.signInUser({
//   name: 'User 2',
//   email: 'striong@rss.com',
//   password: 'string123456',
// });

// apiResource.getUser();

// apiResource.updateUser({
//   name: 'User 3',
//   email: 'stridfghdhong@rss.com',
//   password: 'string12ggggg3456',
// });

// apiResource.deleteUser();
