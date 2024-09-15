import React from "react"
import searchIcon from './assets/search.png'
export default function Navbar() {
    return (
        <>
            <div id="nav">
                <h1>Weather</h1>
                <div className="search">
                    <input type="search" name="" id="" placeholder="Search City" className="search_bar"/>
                    <button>
                        <img src={searchIcon} alt="" className="search_icon"/>
                    </button>
                </div>
            </div>
        </>
    )
}