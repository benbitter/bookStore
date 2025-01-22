import React from 'react'
import './topseller.css'
import { useState } from 'react'
import { useEffect } from 'react'
import BookCard from './BookCard'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]


const TopSeller = () => {

    const [books,setbooks] = useState([{}]);
    const [category,setcategory] = useState("Choose a genre");
    
    const getBooks = async()=>{
        
        
        let response = await  fetch('/books.json');
        let data = await response.json()
        setbooks(data)
        
    }
    
    useEffect(() => {
        getBooks(); // Fetch data only when the component mounts
    }, []); // Empty dependency array ensures this runs only once

    const [selectedbooks,setselectedbooks] = useState([]);
    useEffect(()=>{
        setselectedbooks(books)
    },[books])

    

    useEffect(() => {
        
        if (category==="Choose a genre") {
            setselectedbooks(books)
        }else{

            let x = books.filter((e)=>(e.category===category.toLowerCase()))
            setselectedbooks(x);
        }
        
    }, [category])
    
    console.log(selectedbooks)
    
  return (

    <div className="topseller-container">
        <h2>Top Sellers</h2>
        <div className="select">
            <select onChange={(e)=>{setcategory(e.target.value)}} >
                {
                    categories.map((i,index)=>(
                        <option key={index} value={i} >
                            {i}
                        </option>
                    ))
                }
            </select>
        </div>

        <Swiper
         slidesPerView={3}
         spaceBetween={150}
         navigation={true} // Enable navigation arrows
         modules={[Navigation, Pagination]} // Add Navigation and Pagination modules
         className="mySwiper"
      >
        
        {
            selectedbooks.map((i)=>(
                <SwiperSlide    >
                <BookCard key={`${i._id}`} props={i} />
                </SwiperSlide>
                
            ))
        }    
       
      </Swiper>

        


    </div>
    
  )
}

export default TopSeller