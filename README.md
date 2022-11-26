# WeLoveMovies-backEnd
#

WeLoveMovies is your source for finding reviews of movies in theatres near you,you can see a list of Movies and list of Theaters.You can also see which theater is showing the movie and you can see and rate the movie.

#

## LINKS

- [Live App](https://welovemovies-frontend-kz7b.onrender.com)
- [Live Server- movies](https://welovemovies-backend-q60c.onrender.com/movies)
- [Live Server- Theaters](https://welovemovies-backend-q60c.onrender.com/theaters)
- [Live Server- reviews](https://welovemovies-backend-q60c.onrender.com/movies/1/reviews)

#

## SKILLS USED

### Frontend

- React
- Javascript
- HTML / JSX
- CSS
- Bootstrap
- React Router
- React Hooks (useState, useEffect)

### Backend

- Node.js
- Express
- Knex
- Cors
- Dotenv

#

## API

An example Movie record looks like the following:

```json
{
      "movie_id": 1,
      "title": "Spirited Away",
      "runtime_in_minutes": 125,
      "rating": "PG",
      "description": "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town...",
      "image_url": "https://imdb-api.com/images/original/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
      "created_at": "2022-10-02T20:46:21.175Z",
      "updated_at": "2022-10-02T20:46:21.175Z"
    },
```


An example Thieter record looks like the following:

```json
 {
      "theater_id": 1,
      "name": "Regal City Center",
      "address_line_1": "801 C St.",
      "address_line_2": "",
      "city": "Vancouver",
      "state": "WA",
      "zip": "98660",
      "created_at": "2022-10-02T20:46:21.511Z",
      "updated_at": "2022-10-02T20:46:21.511Z",
      "movies": [
        {
          "movie_id": 1,
          "title": "Spirited Away",
          "runtime_in_minutes": 125,
          "rating": "PG",
          "description": "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town...",
          "image_url": "https://imdb-api.com/images/original/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
          "created_at": "2022-10-02T20:46:21.175Z",
          "updated_at": "2022-10-02T20:46:21.175Z"
        },
        {
          "movie_id": 2,
          "title": "Interstellar",
          "runtime_in_minutes": 169,
          "rating": "PG-13",
          "description": "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life...",
          "image_url": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
          "created_at": "2022-10-02T20:46:21.175Z",
          "updated_at": "2022-10-02T20:46:21.175Z"
        },
      ]
    },
```
### Routes

The API allows for the following routes:

| Method   | Route                                  | Description                                                                                                                      |
| -------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `GET`    | `/movies.     `                        | List all movies.                                                                                                                 |                                                                                            
| `GET`    | `movies/:movieId/reviews`              | Read a specific movie reviews `.                                                                                                 |                                                                                           
| `GET`    | `/theaters`                            | List all theaters.                                                                                                               |
| `PUT`    | `/movies/:movieId/reviews`             | Add review to a selected movie.                                                                                                  |
| `DELETE` | `/movies/:movieId/reviews`             | Removes review to a selected movie                                                                                               |

#

## INSTALLATION INSTRUCTIONS

1. Fork and clone this repository.
1. Run `npm install` to install project dependencies.
1. Run `npm  start` to start your server in development mode.

