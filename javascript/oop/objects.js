// The constructor function creates the new object
// the NEW keyword:
// 1. creates a new empty object {}
// 2. set the value of 'this' to be the new empty object
// 3. calls the constructor method

// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.number = 0;
//   }
//   login() {
//     console.log(this.name, 'Has logged in!');
//     return this;
//   }
//   logout() {
//     console.log(this.name, 'Has logged out!');
//     return this;
//   }
//   updateNumber() {
//     this.number++;
//     console.log(this.name, 'number is now', this.number);
//     return this;
//   }
// }

// class Admin extends User {
//   deleteUser(user) {
//     users = users.filter((u) => {
//       return u.name != user.name;
//     });
//   }
// }

// const firstUser = new User('Bob', 'Dylan');
// const secondUser = new User('Lucky', 'Strike');
// const admin = new Admin('John', 'Lennon');

// let users = [firstUser, secondUser, admin];

// admin.deleteUser(firstUser);

// console.log(users);

// firstUser.login().updateNumber().updateNumber().logout();

///// constructor

function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, 'Has logged in!');
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, 'Has logged out!');
};

function Admin(...args) {
  User.apply(this, args);
  this.role = 'Admin';
}

Admin.prototye = Object.create(User.prototype);
Admin.prototye.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email;
  });
};

const userOne = new User('one@gmail.com', 'Leon');
const userTwo = new User('two@gmail.com', 'Wolf');
const admin = new Admin('admin@gmail.com', 'Paul');
const users = [userOne, userTwo, admin];

console.log(admin);
