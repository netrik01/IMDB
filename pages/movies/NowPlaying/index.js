import styles from '@/styles/movie.module.css'
import Navigation from '@/components/Navigation'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import ReactPaginate from "react-paginate";
import Movie_Cards from '@/components/Movies';
// import { PageContext } from '@/context/MovieNowPlaying';

const NowPlaying = () => {
    // const [pageCount, setPageCount] = useContext(PageContext)
    const [pageCount, setPageCount] = useState(1)
    const [movies, setMovies] = useState([])

    const NowPlayingMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=0888a9d0674fcb5e40dd2f466b38a1fc&language=en-US&page=${pageCount}`)
        setMovies(data.results);
    }
    useEffect(() => {
        NowPlayingMovies()
    }, [pageCount])

    // --------Pagination--------
    const changePage = (x) => {
        setPageCount(x.selected + 1);
    };

    return (
        <><Navigation />
            <div className={styles.container}>
                <h1 className={styles.main_title}>Now Playing Movies</h1>
                <Movie_Cards MovieCards={movies} setMovies={setMovies} />
            </div>
            {/* --------Pagination-------- */}
            <div className="button">
                <ReactPaginate
                    nextLabel=">>"
                    onPageChange={changePage}
                    pageCount={70}
                    previousLabel="<<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}

export default NowPlaying