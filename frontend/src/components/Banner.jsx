import React from 'react'
import './banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-l">
                <h2>
                    Releases this week
                </h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Sequi doloremque ad voluptate quas, inventore facilis ducimus nemo similique corporis, explicabo magnam, repellendus debitis dolores veritatis qui quod quidem? Molestias autem cum cupiditate, doloremque provident necessitatibus 
                    rerum esse illo ipsum itaque sunt unde asperiores optio omnis nobis maxime soluta! Dicta, pariatur.
                </p>
                <button>
                    Subscribe
                </button>
            </div>
            <div className="banner-r">
                <img src="/assets/banner.png" alt="" />
            </div>
        </div>
    )
}

export default Banner