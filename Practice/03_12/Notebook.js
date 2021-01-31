class Notebook {
  /**
   * @param {string} name The name of the notebook
   * @param {number} sheetsQty Notebook sheets quantity
   * @param {number} price The price of notebook 4.25
   */
  constructor(name, sheetsQty, price) {
    this.name = name;
    this.sheetsQty = sheetsQty;
    this.price = price;
  }

  changePrice(value) {
    this.price = value;
  }
}

export default Notebook;
