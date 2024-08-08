"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`)
  }

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick}/>
      {/* 스크롤하여 Link 영역이 보일 때 해당 Link에 걸어둔 화면을 prefetch 한다. */}
      <Link prefetch href={`/movies/${id}`}>{title}</Link>
    </div>
  )
}