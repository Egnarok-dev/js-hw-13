// # Завдання 1: Створіть клас "Клієнт" з властивостями "ім'я", "прізвище", "баланс" та методом "повна назва", який повертає повне ім'я клієнта (ім'я та прізвище). Також, створіть геттер та сеттер для властивості "баланс", який забезпечує можливість читання та зміни значення балансу.

// Вихідні дані для перевірки

class Client {
  constructor(firstName, lastName, balance) {
    this._balance = balance;

    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }
}

const client1 = new Client('John', 'Doe', 1000);

console.log(client1.fullName());
console.log(client1.balance);

client1.balance = 500;
console.log(client1.balance);
