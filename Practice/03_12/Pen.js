class Pen {
  /**
   * @param {string} name The name of the pen
   * @param {string} color The color of the pen
   * @param {number} quantity The pens quantity
   */
  constructor(name, color, quantity) {
    this.name = name;
    this.color = color;
    this.quantity = quantity;
  }

  changeColor(color) {
    this.color = color;
  }
}

export default Pen;
