import Navigation from '@/components/Navigation'
import { useRouter } from 'next/router'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cards_show from '@/components/Shows';

const PopularShow = () => {
    const router= useRouter()
    const {id}=router.query;
    
    const [popular, setPopular] = useState(null)

    const popular_show =async ()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=0888a9d0674fcb5e40dd2f466b38a1fc&language=en-US`);
        setPopular(data);
    }

    useEffect(()=>{
      popular_show();
    },[]);
    

  return (
    <>
    <Navigation/>
    <Cards_show shows={popular} setShows={setPopular}/>
    </>
  )
}

export default PopularShow