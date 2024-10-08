import { API_URL } from "../app/constants";
import videoStyle from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({id}: {id: string}) {
  const videos = await getVideos(id);
  return (
    <div className={videoStyle.container}>
      {videos.map(video => 
        <iframe 
          key={video.id} 
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />)}
    </div>
  );
}