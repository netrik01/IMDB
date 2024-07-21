import styles from '@/styles/movie.module.css'
import Navigation from '@/components/Navigation'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import ReactPaginate from "react-paginate";

const AiringToday = () => {
    const [pageCount, setPageCount] = useState(1)
    const [shows, setShows] = useState([])

    const AiringToday_shows = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=0888a9d0674fcb5e40dd2f466b38a1fc&language=en-US&page=${pageCount}`)
        // console.log(data)
        setShows(data.results);
    }

    useEffect(() => {
        AiringToday_shows()
    }, [pageCount])

    // --------Pagination--------
    const changePage = (x) => {
        setPageCount(x.selected + 1);
    };

    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <h1 className={styles.main_title}>TV Shows Airing Today</h1>
                <div className={styles.row}>
                    {shows ? (shows.map(show =>
                        <Link href={`/tvShow/AiringToday/${show.id}`} className={styles.card} key={show.id}>
                            <div className={styles.img}>
                                <img className={styles.image} src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt="" />
                            </div>
                            <div className={styles.vote}>
                                <h5 className={styles.vote_count}>{Math.floor(show.vote_average * 10)}%</h5>
                            </div>
                            <h1 className={styles.row_title}>{show.name}</h1>
                            <h5 className={styles.row_date}>{show.first_air_date}</h5>
                        </Link>
                    )) : "Loading... !"
                    }
                </div>
            </div>

            {/* --------Pagination-------- */}

            <div className="page">
                <ReactPaginate
                    nextLabel=">>"
                    onPageChange={changePage}
                    pageCount={9}
                    previousLabel="<<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}

export default AiringToday


// import styles from '@/styles/movie.module.css'
// import Navigation from '@/components/Navigation'
// import { useEffect, useState } from 'react'
// import axios from 'axios';
// import ReactPaginate from "react-paginate";
// import Tv_Show from '@/components/TvShow';

// const AiringToday = () => {
//     const [pageCount, setPageCount] = useState(1)
//     const [shows, setShows] = useState([])

//     const AiringToday_shows = async () => {
//         const { data } = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=0888a9d0674fcb5e40dd2f466b38a1fc&language=en-US&page=${pageCount}`)
//         setShows(data.results);
//     }

//     useEffect(() => {
//         AiringToday_shows()
//     }, [pageCount])

//     // --------Pagination--------
//     const changePage = (x) => {
//         setPageCount(x.selected + 1);
//     };

//     return (
//         <>
//             <Navigation />
//             <div className={styles.container}>
//                 <h1 className={styles.main_title}>TV Shows Airing Today</h1>
//                 <Tv_Show tvShow={shows} setShows={setShows} />
//             </div>

//             {/* --------Pagination-------- */}
//             <div className="page">
//                 <ReactPaginate
//                     nextLabel=">>"
//                     onPageChange={changePage}
//                     pageCount={17}
//                     previousLabel="<<"
//                     renderOnZeroPageCount={null}
//                 />
//             </div>
//         </>
//     )
// }

// export default AiringToday








