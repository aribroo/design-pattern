class Person {
  constructor(name, age, gender = '') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class PersonBuilder {
  setName(name) {
    this.name = name;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setGender(gender) {
    this.gender = gender;
    return this;
  }

  build() {
    return new Person(this.name, this.age, this.gender);
  }
}

const person1 = new PersonBuilder()
  .setName("ari")
  .setAge(21)
  .setGender("Male")
  .build();

const person2 = new PersonBuilder()
  .setName("joko")
  .setAge(25)
  .build();

console.log(person1);
console.log(person2);
