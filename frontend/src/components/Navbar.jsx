import React from 'react'
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import './navbar.css'
import { useState } from 'react';



const navigation = [
    {name: "Dashboard", href:"/user-dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/checkout"},
]


const Navbar = () => {

    const [dropDown,setdropDown] = useState(false)

  return (
    <div className="nav-container">
        <div className="nav-l">
            <ul>
                <li className='RiBarChartHorizontalFill' >
                    <Link to='/' >
            <RiBarChartHorizontalFill/>
                    </Link>
                </li>
                <li className='IoIosSearch'>
            <IoIosSearch  />
                </li>
                <li>
            <input type="text" placeholder='search here' />
                </li>
            </ul>
        </div>
        <div className="nav-r">
            <ul>
                <li>
                    <button onClick={()=>setdropDown(!dropDown)} >
                    ❤️
                    </button>
                </li>
                <li>
                    <Link to='/login' >
                <FaRegUserCircle className='FaRegUserCircle' />
                    </Link>
                </li>
                {
                    dropDown && (
                        <div className="dropDown">
                            <ul>
                                {
                                    navigation.map((i)=>(
                                        <li key={i.name} >
                                            <Link onClick={()=>setdropDown(false)} className='dropDownItem' to={i.href} >{i.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }

                <li className='cart'>
        <IoCartOutline /> 0
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar