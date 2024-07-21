import styles from '@/styles/movie.module.css'
import Navigation from '@/components/Navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const Trending = () => {
  const [trending, setTrending] = useState([])

  const Trending_movie = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=0888a9d0674fcb5e40dd2f466b38a1fc`)
    setTrending(data.results)
  }
  useEffect(() => {
    Trending_movie()
  }, [])

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <h1 className={styles.main_title}>Trending</h1>
        <div className={styles.row}>
          {trending ? (trending.map(movie =>
            <Link href={`/${movie.id}`} className={styles.card} key={movie.id}>
              <div className={styles.img}>
                <img className={styles.image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
              </div>
              <div className={styles.vote}>
                <h5 className={styles.vote_count}>{Math.floor(movie.vote_average * 10)}%</h5>
              </div>
              <h1 className={styles.row_title}>{movie.name}{movie.title}</h1>
              <h5 className={styles.row_date}>{movie.release_date}{movie.first_air_date}</h5>
            </Link>
          )):"Loading... !"
          }
        </div>
      </div>
    </>
  )
}

export default Trending