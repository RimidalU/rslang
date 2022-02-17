import { UserState } from './apiInterface';

const KeyName = 'userState';

export function getStorage() {
  const userStateStorage = localStorage.getItem(KeyName);

  if (userStateStorage) {
    return JSON.parse(userStateStorage);
  }
}

export function setStorage(itemUserState: UserState) {
  console.log(itemUserState);

  localStorage.setItem(KeyName, JSON.stringify(itemUserState));
}
