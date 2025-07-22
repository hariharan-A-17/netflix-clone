import React from 'react'
import {useState,useEffect} from 'react'
import './TitleCards.css'
import { useNavigate } from 'react-router-dom'

const TitleCards = ({title,category,url}) => {
    const [cards_data,setData]=useState(null);
  const apikey='7a63de80532737611d73e9bdbac263c2';
  const navigate =useNavigate();
  useEffect( ()=>{
    try{
      fetch(url+apikey)
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        setData(data);
      })
    }
    catch(error){
      console.log(error);
    }
  },[]);
  if(cards_data!=null){
  const list=cards_data.results.map((card, index)=>{
   
          return <div className="card" key={card.id} onClick={()=>{navigate('/details/'+card.id)}}>
            <img src={"https://image.tmdb.org/t/p/w500"+card.poster_path} />
            <h1>{card.title}</h1>
          </div>
        }
        );

  return (
    <div className='titlecards'>
      <h2>{title}</h2>
      <div className='card-list'>
        {list}
      </div>

      
    </div>
  )
}
}

export default TitleCards

