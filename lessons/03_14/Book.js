class Book {
  /**
   * @param {string} name The name of the book
   * @param {number} price The price of the book, 2.25
   * @param {string} topic The topic of the book, Nowel
   */
  constructor(name, price, topic) {
    this.name = name;
    this.price = price;
    this.topic = topic;
    this.active = false;
  }

  /**
   * Activate the book
   * @param {boolean} boolean true or false
   * @return void
   */
  toggleActive(boolean) {
    this.active = boolean;
  }
}

export default Book;
