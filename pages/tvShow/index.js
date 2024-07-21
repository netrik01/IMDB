import styles from '@/styles/movie.module.css'
import Navigation from '@/components/Navigation'
import { useEffect, useState } from 'react'
import axios from 'axios';
import ReactPaginate from "react-paginate";
import Tv_Show from '@/components/TvShow';


const Popular = () => {
    const [pageCount, setPageCount] = useState(1)
      const [shows,setShows]=useState([]);

    const Popular_shows = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=0888a9d0674fcb5e40dd2f466b38a1fc&language=en-US&page=${pageCount}`)
        setShows(data.results);
    }
    useEffect(() => {
        Popular_shows()
    }, [pageCount])

    // --------Pagination--------
    const changePage = (x) => {
        setPageCount(x.selected + 1);
    };

    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <h1 className={styles.main_title}>Popular TV Shows</h1>
                <Tv_Show tvShow={shows} setShows={setShows} />
            </div>

            {/* --------Pagination-------- */}

            <div className="page">
                <ReactPaginate
                    nextLabel=">>"
                    onPageChange={changePage}
                    pageCount={100}
                    previousLabel="<<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}

export default Popular
