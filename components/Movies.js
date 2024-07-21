import styles from '@/styles/movie.module.css'
import Link from 'next/link';

const MovieCards = (props) => {
    console.log(props)

    return (
        <>
            <div className={styles.row}>
                {props.MovieCards ? (props.MovieCards.map(movie =>
                    <Link href={`/movies/${movie.id}`} className={styles.card} key={movie.id}>
                        <div className={styles.img}>
                            <img className={styles.image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                        </div>
                        <div className={styles.vote}>
                            <h5 className={styles.vote_count}>{Math.floor(movie.vote_average * 10)}%</h5>
                        </div>
                        <h1 className={styles.row_title}>{movie.original_title}</h1>
                        <h5 className={styles.row_date}>{movie.release_date}</h5>
                    </Link>
                )):"Loading...!"
                }
            </div>
        </>
    )
}

export default MovieCards
