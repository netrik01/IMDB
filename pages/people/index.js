import styles from '@/styles/movie.module.css'
// import styles from '@/styles/people.module.css'
import Navigation from '@/components/Navigation'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import ReactPaginate from "react-paginate";

const People = () => {
    const [pageCount, setPageCount] = useState(1)
    const [peoples, setPeoples] = useState([])

    const Popular_people = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=0888a9d0674fcb5e40dd2f466b38a1fc&language=en-US&page=${pageCount}`)
        setPeoples(data.results);
    }

    useEffect(() => {
        Popular_people()
    }, [pageCount])

    // --------Pagination--------
    const changePage = (x) => {
        setPageCount(x.selected + 1);
    };

    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <h1 className={styles.main_title}>Popular People</h1>
                <div className={styles.row}>
                    {peoples ? (peoples.map(people =>
                        <Link href={`/people/${people.id}`} className={styles.card} key={people.id}>
                            <div style={{ height: '80%' }} className={styles.img}>
                                <img className={styles.image} src={`https://image.tmdb.org/t/p/w500/${people.profile_path}`} alt="" />
                            </div>
                            <h1 style={{ marginTop: '10px' }} className={styles.row_title}>{people.name}</h1>
                            {/* <h5 className={styles.row_date}>{people.known_for_department }  </h5> */}
                            <h5 className={styles.row_date}>{people.known_for_department + ", "} {people.known_for[0].original_title}{people.known_for[0].original_name}</h5>
                            {/* <h5 className={styles.row_date}>{people.known_for[0].original_title +", " }{people.known_for[1].title +", "}{people.known_for[2].original_title}  </h5> */}
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
                    pageCount={500}
                    previousLabel="<<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}

export default People





