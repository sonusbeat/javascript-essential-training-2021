/**
 * Creating classes
 *
 * Class declaration: class Name {}
 * Class expression: const Name = class {};
 */

class Notebook {
  /**
   *
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
  }

  /**
   *
   * @param {string} value
   * @return void
   */
  changeName(value) {
    this.name = value;
  }
}

const notebook = new Notebook("Math");

console.log(notebook.name);
notebook.changeName("Biology");
console.log(notebook.name);
