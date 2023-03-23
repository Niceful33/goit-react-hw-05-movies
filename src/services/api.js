import axios from 'axios';
// const API_KEY = '27a76f0869afd59eafccef7d6d986c20';

const agent = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: '27a76f0869afd59eafccef7d6d986c20' },
});

export async function getMovieByQuery(query) {
  try {
    const movies = await agent.get('search/movie', {
      params: {
        query,
      },
    });
    return movies.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getTrendingMovies() {
  try {
    const movies = await agent.get('trending/movie/day');
    return movies.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieDetailsById(id) {
  try {
    const movies = await agent.get(`movie/${id}`);
    return movies.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieCast(id) {
  try {
    const actors = await agent.get(`movie/${id}/credits`);
    return actors.data.cast;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieReviews(id) {
  try {
    const reviews = await agent.get(`movie/${id}/reviews`);

    return reviews.data.results;
  } catch (error) {
    console.log(error);
  }
}
