/* eslint-disable eqeqeq */
import BaseComponent from '../BaseComponent/baseComponent';

class SelectComponent extends BaseComponent {
  private amount: number;

  private text: string;

  private currentValue: string | number;

  constructor(tagName = 'select', className: string, amount: number, text: string, currentValue: string | number) {
    super(tagName, className);
    this.amount = amount;
    this.text = text;
    this.currentValue = currentValue;
  }

  render() {
    this.container.innerHTML = '';
    for (let i = 0; i < +this.amount; i++) {
      const op: HTMLOptionElement = document.createElement('option');
      op.value = i.toString();
      op.textContent = `${this.text} ${i + 1}`;
      if (i == this.currentValue) {
        op.selected = true;
      }
      this.container.append(op);
    }
    return this.container;
  }
}

export default SelectComponent;
