const Movie = require("./movieModel");

//CRUD CREATE
exports.addMovie = async (movieObj) => {
  try {
    await Movie.sync(); //checks the table has been created for line 6 to work
    await Movie.create({ title: movieObj.title, actor: movieObj.actor });
    return "Successfully created movie";
  } catch (error) {
    console.log(error);
  }
};

//CRUD READ
exports.listMovies = async () => {
  try {
    console.log(await Movie.findAll({}));
  } catch (error) {
    console.log(error);
  }
};

//CRUD UPDATE
exports.updateMovies = async (movieObj) => {
  try {
    const { title, actor } = movieObj;
    await Movie.update(
      { actor: movieObj.actor },
      { where: { title: movieObj.title } }
    );
    console.log("Movie updated");
  } catch (error) {
    console.log(error);
  }
};

// //CRUD DELETE
exports.deleteMovies = async (movieObj) => {
  try {
    await Movie.destroy({ where: { title: movieObj.title } });
    return "movie deleted";
  } catch (error) {
    console.log(error);
  }
};
