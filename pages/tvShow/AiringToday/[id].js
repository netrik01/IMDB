import Navigation from '@/components/Navigation'
import { useRouter } from 'next/router'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cards_show from '@/components/AiringTodayCards';

const AiringTodayShow = () => {
    const router= useRouter()
    const {id}=router.query;
    
    const [airingToday, setAiringToday] = useState(null)

    const AiringToday_show =async ()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=0888a9d0674fcb5e40dd2f466b38a1fc&language=en-US`);
        setAiringToday(data);
    }

    useEffect(()=>{
      AiringToday_show();
    },[]);
    

  return (
    <>
    <Navigation/>
    <Cards_show shows={airingToday} setShows={setAiringToday}/>
    </>
  )
}

export default AiringTodayShow