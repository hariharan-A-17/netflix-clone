import React from 'react'
import './Detail.css'
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
const Detail = () => {
    const {id}=useParams();
    const API_KEY='7a63de80532737611d73e9bdbac263c2';
    const [data,setData]=useState(null);
    const [caste,setCast]=useState(null);
    const [reviews,setreviews]=useState(null);
    const [trailer,setTrailer]=useState(null);
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key="+API_KEY)
        .then(data => data.json())
        .then(data => setData(data))
        fetch("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key="+API_KEY)
        .then(data => data.json())
        .then(data => setCast(data))
         fetch("https://api.themoviedb.org/3/movie/"+id+"/reviews?api_key="+API_KEY)
        .then(data => data.json())
        .then(data => setreviews(data))
        fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key="+API_KEY)
        .then(data => data.json())
        .then(data => setTrailer("http://www.youtube.com/watch?v="+data.results[0]))
      },[id])
      if(caste!=null){
         const castlist=caste.cast.map((card)=>{
   
          return card.profile_path && <div className="card" key={card.id}>
            <img src={"https://image.tmdb.org/t/p/w500"+card.profile_path} className='casteimg' />
            <h1>{card.name}</h1>
            <h2>{card.character}</h2>
          </div>
        }
        );
      
  return (
    <div className='detailpage'>
       { data && caste && reviews &&<>
       <div className="imageback">
        <img src={"https://image.tmdb.org/t/p/original"+data.backdrop_path} className='detailimg' alt="" />
         
       </div>
        <div className='moviedetail'>
       <h1>{data.original_title}</h1>
       <p>{data.overview}</p>
       <button className='trailer'><a href=""> trailer</a></button>
       </div>
              </> }
     </div>
  )
}
else{
    return <div className=""></div>
}
}


export default Detail
