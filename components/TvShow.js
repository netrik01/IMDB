import styles from '@/styles/movie.module.css'
import Link from 'next/link';

const TvShow = (props) => {
    return (
        <>
            <div className={styles.row}>
                {props.tvShow ? (props.tvShow.map(show =>
                    <Link href={`/tvShow/${show.id}`} className={styles.card} key={show.id}>
                    <div className={styles.img}>
                        <img className={styles.image} src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt="" />
                    </div>
                    <div className={styles.vote}>
                        <h5 className={styles.vote_count}>{Math.floor(show.vote_average * 10)}%</h5>
                    </div>
                    <h1 className={styles.row_title}>{show.name}</h1>
                    <h5 className={styles.row_date}>{show.first_air_date}</h5>
                </Link>
                )) : "Loading...!"
                }
            </div>
        </>
    )
}

export default TvShow