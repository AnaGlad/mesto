export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._itemsArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  rendererAllItems() {
    this._itemsArray.forEach((item) => {
      this.addItem(item);
    });
  }

  addItem(item) {
    this._container.prepend(this._renderer(item));
  }
}
