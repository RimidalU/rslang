abstract class Page {
  protected container: HTMLElement;

  static TextObject = {};

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected createHeaderTitle(text: string) {
    const headTitle = document.createElement('div');
    headTitle.classList.add(`${this.container.id}-title`);
    headTitle.innerHTML = text;
    return headTitle;
  }

  render() {
    return this.container;
  }
}

export default Page;
