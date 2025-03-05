var user = {
  name: "Irakli",
  sayHi: () => {
    console.log(`Hi, I'm ${this.name}`);
  },
};

user.sayHi();
