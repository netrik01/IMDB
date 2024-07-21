import Navigation from '@/components/Navigation'
import { useRouter } from 'next/router'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cards_movie from '@/components/Cards';

const Movies_box = () => {
    const router= useRouter()
    const {id}=router.query;
    
    const [movie_card, setMovie_card] = useState(null)

    const movieCard =async ()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0888a9d0674fcb5e40dd2f466b38a1fc&language=en-US`);
        setMovie_card(data);
    }

    useEffect(()=>{
      movieCard();
    },[]);
    

  return (
    <>
    <Navigation/>
    <Cards_movie movies={movie_card} setMovies={setMovie_card}/>
    </>
  )
}

export default Movies_box