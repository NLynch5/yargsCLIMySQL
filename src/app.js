const {
  addMovie,
  listMovies,
  updateMovies,
  deleteMovies,
} = require("./movie/movieMethods.js");

const command = process.argv[2];

const app = async () => {
  switch (command) {
    case "add":
      addMovie({
        title: process.argv[3],
        actor: process.argv[4],
      });
      break;
    case "list":
      listMovies();
      break;
    case "update":
      updateMovies({
        title: process.argv[3],
        actor: process.arv[4],
      });
      break;
    case "delete":
      deleteMovies({
        title: process.argv[3],
        actor: process.argv[4],
      });
      break;
    default:
      console.log("Incorrect Command");
  }
};

app();
