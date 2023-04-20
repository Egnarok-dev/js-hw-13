// # Задача 2: Створіть клас "Rectangle", який має дві властивості "width" та "height" та два методи "getArea" (отримати площу прямокутника)та "getPerimeter" (отримати периметр прямокутника). Використайте гетери для доступу до властивостей та сетери для присвоєння ширини та висоти.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
  get width() {
    return this._width;
  }

  set width(newWidth) {
    this._width = newWidth;
  }

  get height() {
    return this._height;
  }

  set height(newHeight) {
    this._height = newHeight;
  }
}

const myRectangle = new Rectangle(5, 7);

console.log(myRectangle.getArea());
console.log(myRectangle.getPerimeter());
console.log(myRectangle.width);
console.log(myRectangle.height);

myRectangle.width = 10;
myRectangle.height = 12;

console.log(myRectangle.width);
console.log(myRectangle.height);

//Добавив для себе виклики методів, для перевірки підрахунку площі та периметру
//з новими даними width та height
console.log(myRectangle.getArea());
console.log(myRectangle.getPerimeter());
