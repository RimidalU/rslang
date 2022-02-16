import { Word } from './apiInterface';

const errorMessange = 'Receive data error';

class ApiResource {
  private baseUrl = 'https://rslang-learn.herokuapp.com';
  private wordUrl = `${this.baseUrl}/words`;

  loader = false;

  async getWords(page: number, group: number): Promise<Array<Word>> {
    this.loader = true;
    try {
      const response = await fetch(`${this.wordUrl}?page=${page}&group=${group}`);
      const wordsResponse = await response.json();
      console.log(wordsResponse);
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
      console.log(wordResponse);
      return wordResponse;
    } catch (e) {
      throw new Error(errorMessange);
    } finally {
      this.loader = false;
    }
  }
}

export default ApiResource;
