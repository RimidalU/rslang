import ApiResource from './src/module/api';
import App from './src/module/app';

const app = new App();

window.location.hash = '#main-page';

app.run();

let apiResource = new ApiResource();

// apiResource.getWords(1, 3);

// apiResource.getWord('5e9f5ee35eb9e72bc21af7de');

// apiResource.createUser({
//   name: 'User 2',
//   email: 'striong@rss.com',
//   password: 'string123456',
// });

apiResource.signInUser({
  name: 'User 2',
  email: 'striong@rss.com',
  password: 'string123456',
});

// apiResource.getUser('620e2cee1d12b80016c7c9c2');

// apiResource.updateUser({
//   name: 'User 3',
//   email: 'stridfghdhong@rss.com',
//   password: 'string12ggggg3456',
// });

// apiResource.deleteUser();
