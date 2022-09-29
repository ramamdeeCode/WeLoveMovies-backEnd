const services = require("./movies.service");

//middleware validators
async function movieExists(req, res, next) {
  try {
    const { movieId } = req.params;
    const movie = await services.read(movieId);
    if (movie) {
      res.locals.movie = movie;
      return next();
    }
    next({
      status: 404,
      message: "Movie cannot be found",
    });
  } catch (error) {
    next(error);
  }
}

//http methods
async function list(req, res, next) {
  try {
    const data = await services.list(req.query.is_showing);
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

async function read(req, res, next) {
  try {
    const { movieId } = req.params;
    const data = await services.read(movieId);
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list,
  read: [movieExists, read],
  movieExists,
};
