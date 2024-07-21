import Navigation from '@/components/Navigation'
import { useRouter } from 'next/router'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cards_movie from '@/components/Cards';

const Trending = () => {
  const router = useRouter()
  const { id } = router.query;

  const [trending, setTrending] = useState(null)

  const trending_movie = async () => {
    // const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=0888a9d0674fcb5e40dd2f466b38a1fc&language=en-US`);
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0888a9d0674fcb5e40dd2f466b38a1fc&language=en-US`);
    setTrending(data);
  }

  useEffect(() => {
    trending_movie();
  }, []);


  return (
    <>
      <Navigation />
      <Cards_movie movies={trending} setMovies={setTrending} />
    </>
  )
}

export default Trending