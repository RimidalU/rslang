import apiResource from './src/module/api';
import App from './src/module/app';
import { getStorage } from './src/module/storage';

const app = new App();

window.location.hash = '#main-page';

app.run();

apiResource.userState = getStorage();

apiResource.getWords();

// apiResource.getWord('5e9f5ee35eb9e72bc21af7de');

// apiResource.createUser({
//   name: '74rr2y',
//   email: 'stri7gr44@rss.com',
//   password: 'ster4r423456',
// });
// apiResource.signInUser({
//   name: '74rrr2y',
//   email: 'stri7gr44@rss.com',
//   password: 'ster4r423456',
// });
// apiResource.getUser();

// apiResource.updateUser({
//   name: 'User 3',
//   email: 'stridfghdhong@rss.com',
//   password: 'string12ggggg3456',
// });

// apiResource.deleteUser();

// apiResource.createUserWord('5e9f5ee35eb9e72bc21afbea', {
//   difficulty: 'easy',
//   optional: {
//     status: false,
//   },
// });

// apiResource.getUserWords();

// apiResource.getUserWord('5e9f5ee35eb9e72bc21af4a6');

// apiResource.updateUserWord('6210c7d5248f83001632a2f8', {
//   difficulty: 'hard',
//   optional: {
//     status: true,
//   },
// });

// apiResource.deleteUserWord('5e9f5ee35eb9e72bc21af4a2');

// apiResource.getUserAggregatedWords();
// apiResource.getUserAggregatedWord('5e9f5ee35eb9e72bc21af4a2');

// apiResource.setUserStatistics({
//   learnedWords: 8,
//   optional: {
//     key: true,
//   },
// });
// apiResource.getUserStatistics();

// apiResource.setUserSettings({
//   wordsPerDay: 8,
//   optional: {
//     key: true,
//   },
// });
// apiResource.getUserSettings();
