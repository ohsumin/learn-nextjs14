import { API_URL } from "../app/(home)/page";
import movieStyle from "../styles/movie-info.module.css"

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}: {id: string}) {
  const movie = await getMovie(id);
  return (
   <div className={movieStyle.container}>
    <img className={movieStyle.poster} src={movie.poster_path} />
    <div className={movieStyle.info}>
      <h1 className={movieStyle.title}>{movie.title}</h1>
      <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
      <p>{movie.overview}</p>
      <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
    </div>
   </div>
  );
}