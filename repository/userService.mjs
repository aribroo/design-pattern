import { UserRepository } from "./userRepository.mjs";

class UserService {
  constructor(){
    this.userRepository = new UserRepository()
  }

  findById(id) {
    const movie = this.userRepository.findOne(id);
    console.log(movie);
  }

  findAll() {
    const movies = this.userRepository.findAll();
    console.log(movies);
  }
}

const userService = new UserService();

userService.findById(1);
userService.findById(2);
userService.findById(10);

userService.findAll()
