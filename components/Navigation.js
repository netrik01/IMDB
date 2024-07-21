import styles from '@/styles/navigation.module.css'
import Link from 'next/link';
import { useState } from 'react';
// import { StarOutlined } from '@ant-design/icons';

const Navigation = () => {
    const [hover_movie, setHover_movie]=useState(false);
    const hover_movie_On=()=>{
        setHover_movie(true);
    }
    const hover_movie_Out=()=>{
        setHover_movie(false);
    }
    const [hover_show, setHover_show]=useState(false);
    const hover_show_On=()=>{
        setHover_show(true);
    }
    const hover_show_Out=()=>{
        setHover_show(false);
    }
    
    const [hover_people, setHover_people]=useState(false);
    const hover_people_On=()=>{
        setHover_people(true);
    }
    const hover_people_Out=()=>{
        setHover_people(false);
    }

  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.nav_left}>
          <Link href="/" className={styles.nav_title}>TMDB</Link>
          <h4 onMouseOver={hover_movie_On} className={styles.h4}>Movies</h4>
          <h4 onMouseOver={hover_show_On}className={styles.h4}>TV Shows</h4>
          <h4 onMouseOver={hover_people_On} className={styles.h4}>People</h4>
        </div>
        <div className={styles.nav_right}>
          <form className={`${styles.search} d-flex`} role="search">
            <input className={`${styles.search} form-control me-3`} type="search" placeholder="Search" aria-label="Search" />
            <button className={`${styles.search,styles.search_icon} btn btn-outline-success`} type="submit">Search</button>
          </form>
        </div>
      </div>
      {/* ---------toggle-box--------- */}
      {hover_movie && (
        <div onMouseLeave={hover_movie_Out} className={`${styles.toggle_box1} ${styles.toggle_box}`}>
            <Link href="/movies" className={styles.t_link} >Popular</Link>
            <Link href="/movies/NowPlaying" className={styles.t_link} >Now Playing</Link>
            <Link href="/movies/UpComing" className={styles.t_link} >Upcoming</Link>
            <Link href="/movies/TopRated" className={styles.t_link} >Top Rated</Link>
      </div>
      )}
      {hover_show && (
        <div onMouseLeave={hover_show_Out} className={`${styles.toggle_box2} ${styles.toggle_box}`}>
        <Link href="/tvShow" className={styles.t_link} >Popular</Link>
        <Link href="/tvShow/AiringToday" className={styles.t_link} >Airing Today</Link>
        <Link href="/tvShow/OnTv" className={styles.t_link} >On TV</Link>
        <Link href="/tvShow/TopRated" className={styles.t_link} >Top Rated</Link>
      </div>
      )}
      {hover_people && (
        <div onMouseLeave={hover_people_Out} className={`${styles.toggle_box3} ${styles.toggle_box}`}>
        <Link href="/people" className={styles.t_link} >Popular People</Link>
      </div>
      )}
    </>
  )
}

export default Navigation


