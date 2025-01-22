import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from './BookCard';



const Recommened = () => {
    const [books,setbooks] = useState([]);
   
    const getBooks = async()=>{
            
            
            let response = await  fetch('/books.json');
            let data = await response.json()
            setbooks(data)
            
        }
        
        useEffect(() => {
            getBooks(); // Fetch data only when the component mounts
        }, []); // Empty dependency array ensures this runs only once
    
        useEffect(()=>{
            setbooks(books)
        },[books])

  return (
    <div>
         <h2 >Recommended for you </h2>


         <Swiper
                slidesPerView={3}
                spaceBetween={150}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                   books.length > 0 && books.slice(8, 18).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard  props={book} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>
    </div>
  )
}

export default Recommened