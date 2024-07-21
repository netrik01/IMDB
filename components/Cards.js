import styles from '@/styles/movie_cards.module.css'
import { MovieContext } from '@/context/MoviePopular';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Cards = (props) => {
    const { movies, setMovies } = props;
    
    return movies ? (
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.row_top}>
                        <img className={styles.row_background} src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} alt="" />
                        <div className={styles.row_main}>
                            <img className={styles.row_main_image} src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="" />
                        </div>
                    </div>
                    <div className={styles.row_btm}>
                        <h1 className={styles.title}>{movies.original_name}</h1>
                        <h1 className={styles.title}>{movies.original_title}</h1>
                        <div className={styles.details}>
                            <h5 className={styles.d_value}>{movies.release_date}</h5>
                            <h5 className={styles.d_value}>({movies.production_countries[0].iso_3166_1})</h5>
                            <h5 className={styles.d_value}>▪ {movies.genres[0].name} ▪</h5>
                            {/* <h5 className={styles.d_value}>▪ {movies.genres[0].name+", "} {movies.genres[1].name} ▪</h5> */}
                            {/* <h5 className={styles.d_value}>▪ {movies.genres[0].name+", "} {movies.genres[1].name+", "}{movies.genres[2].name} ▪</h5> */}
                            <h5 className={styles.d_value}>{Math.floor(movies.runtime / 60)}h {movies.runtime % 60}m</h5>
                        </div>
                        <h3 className={styles.tagline}>{movies.tagline}</h3>
                        <p className={styles.description}>{movies.overview}</p>
                        <div className={styles.vote}>
                            <h5 className={styles.vote_count}>{Math.floor(movies.vote_average * 10)}% ⭐</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        "loading... !"
    );
}

export default Cards



