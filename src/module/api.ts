import { Word, ResponseUser, AddUser, SignIn, UserState, UserWord, Statistics, Settings } from './apiInterface';
import { setStorage } from './storage';

const errorMessange = 'Receive data error';

class ApiResource {
  private baseUrl = 'https://rslang-learn.herokuapp.com';

  private wordUrl = `${this.baseUrl}/words`;

  private userUrl = `${this.baseUrl}/users`;

  private signInUrl = `${this.baseUrl}/signin`;

  private userCurrentState: UserState = {
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

  loader = false;

  async getWords(page: number = this.userCurrentState.page, group: number = this.userCurrentState.group): Promise<Array<Word>> {
    this.loader = true;
    try {
      const response = await fetch(`${this.wordUrl}?page=${page}&group=${group}`);
      const wordsResponse = await response.json();

      this.userCurrentState.page = page;
      this.userCurrentState.group = group;

      setStorage(this.userCurrentState);
      return wordsResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async getWord(id: string): Promise<Word> {
    this.loader = true;
    try {
      const response = await fetch(`${this.wordUrl}/${id}`);
      const wordResponse = await response.json();
      return wordResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async createUser(user: AddUser): Promise<ResponseUser> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const userResponse = await response.json();

      setStorage(this.userCurrentState);

      return userResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async signInUser(user: AddUser): Promise<SignIn> {
    this.loader = true;
    try {
      const response = await fetch(`${this.signInUrl}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const signInResponse: SignIn = await response.json();
      const { token, refreshToken, userId, name } = signInResponse;
      this.userCurrentState.token = token;
      this.userCurrentState.refreshToken = refreshToken;
      this.userCurrentState.userId = userId;
      this.userCurrentState.name = name;

      setStorage(this.userCurrentState);

      return signInResponse;
    } catch (e) {
      throw new Error();
    } finally {
      this.loader = false;
    }
  }

  async getUser(userId: string = this.userCurrentState.userId): Promise<AddUser> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${userId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
        },
      });
      const getUserResponse: AddUser = await response.json();

      return getUserResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async updateUser(newUser: AddUser, userId: string = this.userCurrentState.userId): Promise<AddUser> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${userId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const updatedUserResponse: AddUser = await response.json();

      setStorage(this.userCurrentState);

      return updatedUserResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async deleteUser(userId: string = this.userCurrentState.userId): Promise<void> {
    this.loader = true;
    try {
      await fetch(`${this.userUrl}/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
        },
      });

      this.userCurrentState.userId = '';
      this.userCurrentState.token = '';
      this.userCurrentState.refreshToken = '';
      setStorage(this.userCurrentState);
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async createUserWord(wordId: string, userWordBody: UserWord) {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${this.userCurrentState.userId}/words/${wordId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userWordBody),
      });
      const createUserWordResponse = await response.json();
      return createUserWordResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async getUserWords(userId: string = this.userCurrentState.userId): Promise<UserWord[]> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${userId}/words`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const getUserWordsResponse: UserWord[] = await response.json();

      return getUserWordsResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async getUserWord(wordId: string, userId: string = this.userCurrentState.userId): Promise<UserWord> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${userId}/words/${wordId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const getUserWordResponse = await response.json();

      return getUserWordResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async updateUserWord(wordId: string, userWordBody: UserWord, userId: string = this.userCurrentState.userId): Promise<UserWord> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${userId}/words/${wordId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userWordBody),
      });
      const updateUserWordResponse: UserWord = await response.json();

      return updateUserWordResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async deleteUserWord(wordId: string, userId: string = this.userCurrentState.userId): Promise<void> {
    this.loader = true;
    try {
      await fetch(`${this.userUrl}/${userId}/words/${wordId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
        },
      });
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async getUserAggregatedWords(userId: string = this.userCurrentState.userId): Promise<Array<Word>> {
    this.loader = true;
    try {
      const group = this.userCurrentState.aggregatedWords.group ? `&group=${this.userCurrentState.aggregatedWords.group}` : '';

      const page = this.userCurrentState.aggregatedWords.page ? `&page=${this.userCurrentState.aggregatedWords.page}` : '';
      const wordsPerPage = this.userCurrentState.aggregatedWords.wordsPerPage
        ? `&wordsPerPage=${this.userCurrentState.aggregatedWords.wordsPerPage}`
        : '';
      const filters = this.userCurrentState.aggregatedWords.filter ? `&filter=${this.userCurrentState.aggregatedWords.filter}` : '';

      const response = await fetch(`${this.userUrl}/${userId}/aggregatedWords?${group}${page}${wordsPerPage}${filters}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const getUserAggrWordsResponse: Array<Word> = await response.json();

      setStorage(this.userCurrentState);
      return getUserAggrWordsResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async getUserAggregatedWord(wordId: string, userId: string = this.userCurrentState.userId): Promise<UserWord> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${userId}/aggregatedWords/${wordId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const getUserAggrWordResponse = await response.json();

      return getUserAggrWordResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async setUserStatistics(statisticsBody: Statistics, userId: string = this.userCurrentState.userId): Promise<Statistics> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${userId}/statistics`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(statisticsBody),
      });
      const updatedUserStatistics: Statistics = await response.json();
      return updatedUserStatistics;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async getUserStatistics(userId: string = this.userCurrentState.userId): Promise<Statistics> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${userId}/statistics`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const userStatisticsResponse: Statistics = await response.json();

      return userStatisticsResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async setUserSettings(settingsBody: Settings, userId: string = this.userCurrentState.userId): Promise<Settings> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${userId}/settings`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settingsBody),
      });
      const setUserSettings: Settings = await response.json();
      return setUserSettings;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async getUserSettings(userId: string = this.userCurrentState.userId): Promise<Settings> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${userId}/settings`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.userCurrentState.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const userSettingsResponse: Settings = await response.json();

      return userSettingsResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  get userState(): UserState {
    return this.userCurrentState;
  }

  set userState(newuserCurrentState: UserState) {
    this.userCurrentState = newuserCurrentState;
  }
}

const apiResource = new ApiResource();
export default apiResource;
