import React from 'react'
import './bookcard.css'

const BookCard = ({props}) => {
  return (
    <div className="bookcardbox">
        <div className="bookcard-l">
            <img src={`/assets/books/${props?.coverImage}`}/>
        </div>
        <div className="bookcard-r">
            <ul>
                <li>
            <h3>{props?.title}</h3>
                </li>

                <li>
            <p>{props?.description?.length>80?`${props.description?.slice(0,40)}...`:props?.description}</p>
                </li>

                <li>
            <span>{props?.newPrice}</span>
                </li>

                <li>
            <span>{props?.oldPrice}</span>
                </li>
            </ul>
            <button>
                add to cart
            </button>
        </div>
    </div>
  )
}

export default BookCard