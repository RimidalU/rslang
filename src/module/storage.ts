import { UserState } from './apiInterface';

const KeyName = 'userState';

export function getStorage() {
  const userStateStorage = localStorage.getItem(KeyName);

  if (userStateStorage) {
    return JSON.parse(userStateStorage);
  }
  return {
    page: 0,
    group: 1,
    userId: '',
    name: '',
    token: '',
    refreshToken: '',
    aggregatedWords: {
      page: 0,
      group: 1,
      wordsPerPage: 6,
      filter: '{"$or":[{"userWord.difficulty":"easy"},{"userWord":null}]}',
    },
  };
}

export function setStorage(itemUserState: UserState) {
  localStorage.setItem(KeyName, JSON.stringify(itemUserState));
}
