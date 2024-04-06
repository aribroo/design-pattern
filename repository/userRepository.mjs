const movies = [
  {
    id: 1,
    title: "Beranak Dalam Kubur",
    author: "Dimas Kanjeng",
  },
  {
    id: 2,
    title: "Air Terjun Pengantin",
    author: "Dimas Kanjeng",
  },
  {
    id: 3,
    title: "Kereta Kencana",
    author: "Ucup Surucup",
  },
];

export class UserRepository {
  findOne(id) {
    const movie = movies.find((m) => m.id === id);

    if (!movie) {
      return "Movies not found!";
    }

    return movie;
  }

  findAll() {
    return movies;
  }
}
