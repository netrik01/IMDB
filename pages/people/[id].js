import styles from '@/styles/people.card.module.css'
import Navigation from '@/components/Navigation'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PeopleCard = () => {
  const router = useRouter();
  const { id } = router.query;
  const [people, setPeople] = useState(null)

  const people_card = async () => {
    // const {data}= await axios.get(`https://api.themoviedb.org/3/person/1752056?api_key=0888a9d0674fcb5e40dd2f466b38a1fc&language=en-US`)
    const { data } = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=0888a9d0674fcb5e40dd2f466b38a1fc&language=en-US`)
    setPeople(data)
  }
  useEffect(() => {
    people_card()
  }, [])


  return people ? (
    <>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.img}>
            <img className={styles.image} src={`https://image.tmdb.org/t/p/w500/${people.profile_path}`} alt="" />
          </div>
          <div className={styles.row_right}>
            <h1 className={styles.title}>{people.name}</h1>
            <h5 className={styles.dob}>{people.birthday}&nbsp;&nbsp;{'(' + people.place_of_birth + ')'}</h5>
            <h5 className={styles.known}>{people.known_for_department}</h5>
            <h6 className={styles.bio}>Biography</h6>
            <h6 className={styles.biography}>{people.biography}</h6>
          </div>
        </div>
      </div>
    </>
  ) : (
    "loading... !"
  );
}

export default PeopleCard