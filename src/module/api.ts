import { Word, ResponseUser, addtUser, SignIn, UserState } from './apiInterface';
import { setStorage } from './storage';

const errorMessange = 'Receive data error';

class ApiResource {
  private baseUrl = 'https://rslang-learn.herokuapp.com';

  private wordUrl = `${this.baseUrl}/words`;
  private userUrl = `${this.baseUrl}/users`;
  private signInUrl = `${this.baseUrl}/signin`;

  private _userState: UserState = {
    page: 0,
    group: 0,
    userId: '',
    name: '',
    token: '',
    refreshToken: '',
  };

  loader = false;

  async getWords(page: number = this._userState.page, group: number = this._userState.group): Promise<Array<Word>> {
    this.loader = true;
    try {
      const response = await fetch(`${this.wordUrl}?page=${page}&group=${group}`);
      const wordsResponse = await response.json();

      this._userState.page = page;
      this._userState.group = group;

      setStorage(this._userState);
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

  async createUser(user: addtUser): Promise<ResponseUser> {
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

      setStorage(this._userState);

      return userResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async signInUser(user: addtUser): Promise<SignIn> {
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
      this._userState.token = token;
      this._userState.refreshToken = refreshToken;
      this._userState.userId = userId;
      this._userState.name = name;

      setStorage(this._userState);

      return signInResponse;
    } catch (e) {
      throw new Error();
    } finally {
      this.loader = false;
    }
  }

  async getUser(userId: string = this._userState.userId): Promise<addtUser> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${userId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this._userState.token}`,
          Accept: 'application/json',
        },
      });
      const getUserResponse: addtUser = await response.json();

      console.log(getUserResponse);
      return getUserResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async updateUser(newUser: addtUser, userId: string = this._userState.userId): Promise<addtUser> {
    this.loader = true;
    try {
      const response = await fetch(`${this.userUrl}/${userId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${this._userState.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const updatedUserResponse: addtUser = await response.json();

      console.log(updatedUserResponse);

      setStorage(this._userState);

      return updatedUserResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  async deleteUser(userId: string = this._userState.userId): Promise<void> {
    this.loader = true;
    try {
      await fetch(`${this.userUrl}/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${this._userState.token}`,
          Accept: 'application/json',
        },
      });

      this._userState.userId = '';
      this._userState.token = '';
      this._userState.refreshToken = '';
      setStorage(this._userState);
      console.log('user deleted!');
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }

  get userState(): UserState {
    return this._userState;
  }

  set userState(newUserState: UserState) {
    this._userState = newUserState;
  }
}

const apiResource = new ApiResource();
export default apiResource;

