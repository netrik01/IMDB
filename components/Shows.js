import styles from '@/styles/movie_cards.module.css'

const Shows = (props) => {
    const { shows, setShows } = props;

    return shows ? (
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.row_top}>
                        <img className={styles.row_background} src={`https://image.tmdb.org/t/p/w500/${shows.backdrop_path}`} alt="" />
                        <div className={styles.row_main}>
                            <img className={styles.row_main_image} src={`https://image.tmdb.org/t/p/w500/${shows.poster_path}`} alt="" />
                        </div>
                    </div>
                    <div className={styles.row_btm}>
                        <h1 className={styles.title}>{shows.name}</h1>
                        <h1 style={{fontSize:'1.5rem', opacity:'.8'}} className={styles.title}>{shows.original_name}</h1>
                        <div className={styles.details}>
                            <h5 className={styles.d_value}>{shows.last_air_date}</h5>
                            <h5 className={styles.d_value}>({shows.origin_country[0]})</h5>
                            <h5 className={styles.d_value}>▪ {shows.genres[0].name} ▪</h5>
                            <h5 className={styles.d_value}>{Math.floor(shows.episode_run_time/60)}h {shows.episode_run_time%60}m</h5>
                        </div>
                        <h3 className={styles.tagline}>{shows.last_episode_to_air.name}, &nbsp;({shows.networks[0].name})</h3>
                        <p className={styles.description}>{shows.overview}</p>
                        <div className={styles.vote}>
                            <h5 className={styles.vote_count}>{Math.floor(shows.vote_average*10)}% ⭐</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        "loading... !"
    );
}

export default Shows

