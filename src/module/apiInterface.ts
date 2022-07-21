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
export interface AddUser extends User {
  password: string;
}
export interface ResponseUser extends User {
  id: string;
}

export interface UserState {
  page: number;
  group: number;
  userId: string;
  name: string;
  token: string;
  refreshToken: string;
  aggregatedWords: {
    page: number;
    group: number;
    wordsPerPage: number;
    filter: string;
  };
}

export interface SignIn {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export interface UserWord {
  difficulty: string;
  optional?: {
    [key: string]: boolean;
  };
}
export interface Statistics {
  learnedWords: number;
  optional?: {
    [key: string]: string | boolean;
  };
}

export interface Settings {
  wordsPerDay: number;
  optional?: {
    [key: string]: string | boolean;
  };
}
