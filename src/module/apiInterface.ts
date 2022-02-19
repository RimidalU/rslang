export interface Word {
  id: string;
  group: 0;
  page: 0;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

export interface User {
  name?: string;
  email: string;
}
export interface addtUser extends User {
  password: string;
}
export interface ResponseUser extends User {
  id: string;
}

export interface UserState {
  page: number;
  group: number;
  // aggregatedWords: {
  //   page: number;
  //   group: number;
  //   wordsPerPage: number;
  //   filter: string;
  // };
  userId: string;
  name: string;
  token: string;
  refreshToken: string;
}

// export interface UserId {
//   // Update a user, signin
//   id: string;
//   email: string;
// }

export interface SignIn {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}
